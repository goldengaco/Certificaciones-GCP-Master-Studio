/**
 * test_examen_ux.mjs — la UX de RESPONDER en modo Examen, comprobada de verdad.
 *
 * El modo Examen se quedo atras respecto a Drill y Estudio: sus opciones eran
 * <div> sin tabindex (invisibles para el teclado), se recreaba el DOM entero en
 * cada clic (el foco saltaba al principio) y el aviso de "elige 2" no contaba
 * cuantas llevabas. Este test fija ese comportamiento para que no se pierda.
 *
 * Requisitos: npm install playwright-core
 * Uso:        node tests/qa/test_examen_ux.mjs
 * Sale con codigo 1 si algo falla.
 */
import { chromium } from 'playwright-core';
import http from 'http'; import fs from 'fs'; import path from 'path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..');
const types = {'.html':'text/html','.js':'text/javascript','.css':'text/css'};
const srv = http.createServer((req,res)=>{
  let f = decodeURIComponent(req.url.split('?')[0]); if (f==='/') f='/index.html';
  const p = path.join(root,f);
  if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){res.writeHead(404);return res.end();}
  res.writeHead(200,{'Content-Type':types[path.extname(p)]||'text/plain'});
  fs.createReadStream(p).pipe(res);
});
await new Promise(r=>srv.listen(8099,r));

const b = await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined });
const page = await b.newPage({viewport:{width:1440,height:900}});
const errs=[];
page.on('pageerror',e=>errs.push('PAGEERROR: '+e.message));
page.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE: '+m.text());});
await page.goto('http://localhost:8099/index.html');
await page.waitForTimeout(2000);

const fallos=[]; const oks=[];
const check=(cond,msg)=>{ (cond?oks:fallos).push(msg); };

// Arrancar examen sin confirmaciones
await page.evaluate(()=>{
  if(window.GCP_APP){ window.GCP_APP.confirm=(t,m,si)=>si(); window.GCP_APP.navigateTo && window.GCP_APP.navigateTo('exam'); }
  window.GCP_EXAM.onEnterView({});
});
await page.waitForTimeout(1200);

const activo = await page.evaluate(()=>window.GCP_EXAM.isActive());
check(activo, 'el examen arranca');

// Los bloques 1-8 se prueban sobre una pregunta de respuesta unica.
await page.evaluate(()=>{
  const E=window.GCP_EXAM; const q=E.currentBlockQuestions[E.currentIndex];
  q.isMultiSelect=false; delete q.expectedSelectCount;
  E.userAnswers[q.id]={chosen:[],isFlagged:false,timeSpentMs:0};
  E.renderQuestion(E.currentIndex);
});
await page.waitForTimeout(200);

// 1. Tarjetas alcanzables por teclado
const t1 = await page.evaluate(()=>{
  const cards=[...document.querySelectorAll('#exam-options-container .option-card')];
  return {n:cards.length, tabindex:cards.map(c=>c.getAttribute('tabindex')),
          roles:cards.map(c=>c.getAttribute('role')),
          nums:cards.map(c=>c.querySelector('.option-num')?.textContent)};
});
check(t1.n>=4, `se pintan ${t1.n} opciones`);
check(t1.tabindex.filter(x=>x==='0').length===1, 'exactamente una opcion es alcanzable con Tab (roving tabindex)');
check(t1.tabindex.every(x=>x!==null), 'todas las opciones tienen tabindex');
check(t1.nums.every((x,i)=>x===String(i+1)), 'cada opcion muestra su numero de atajo');

// 2. Responder con la tecla de letra
await page.keyboard.press('b');
await page.waitForTimeout(200);
const t2 = await page.evaluate(()=>{
  const c=[...document.querySelectorAll('#exam-options-container .option-card')];
  const sel=c.filter(x=>x.classList.contains('selected'));
  const q=window.GCP_EXAM.currentBlockQuestions[window.GCP_EXAM.currentIndex];
  return {sel:sel.map(x=>x.dataset.letter), aria:sel.map(x=>x.getAttribute('aria-checked')),
          guardado:window.GCP_EXAM.userAnswers[q.id]?.chosen, live:document.getElementById('exam-answer-live')?.textContent};
});
check(t2.sel.join()==='B', 'la tecla B selecciona la opcion B');
check(t2.aria[0]==='true', 'aria-checked se actualiza');
check((t2.guardado||[]).join()==='B', 'la respuesta queda guardada en el estado');
check(/Opcion B/.test(t2.live||''), 'se anuncia por region viva: "'+t2.live+'"');

// 3. Tecla numerica
await page.keyboard.press('3');
await page.waitForTimeout(150);
const t3 = await page.evaluate(()=>[...document.querySelectorAll('.option-card.selected')].map(x=>x.dataset.letter).join());
check(t3==='C','la tecla 3 selecciona la tercera opcion');

// 4. Sin re-render: el foco sobrevive al clic de teclado
await page.evaluate(()=>{
  const E=window.GCP_EXAM; const q=E.currentBlockQuestions[E.currentIndex];
  E.userAnswers[q.id].chosen=[]; E.actualizarSeleccionVisual(q,E.userAnswers[q.id]);
  document.querySelector('#exam-options-container .option-card[data-letter="A"]').focus();
});
await page.keyboard.press('ArrowDown');
await page.waitForTimeout(120);
const t4 = await page.evaluate(()=>document.activeElement?.dataset?.letter);
check(t4==='B','ArrowDown mueve el foco a la siguiente opcion (ahora en '+t4+')');
await page.keyboard.press(' ');
await page.waitForTimeout(150);
const t4b = await page.evaluate(()=>({foco:document.activeElement?.dataset?.letter, sel:[...document.querySelectorAll('.option-card.selected')].map(x=>x.dataset.letter).join()}));
check(t4b.sel==='B','Espacio responde la opcion enfocada');
check(t4b.foco==='B','el foco NO se pierde al responder (clave: antes se recreaba el DOM)');

// 5. Limpiar con C
await page.keyboard.press('Backspace');
await page.waitForTimeout(150);
const t5 = await page.evaluate(()=>document.querySelectorAll('.option-card.selected').length);
check(t5===0,'Retroceso limpia la seleccion');

// 6. Navegacion con flechas
const idxAntes = await page.evaluate(()=>window.GCP_EXAM.currentIndex);
await page.keyboard.press('ArrowRight');
await page.waitForTimeout(300);
const idxDesp = await page.evaluate(()=>window.GCP_EXAM.currentIndex);
check(idxDesp===idxAntes+1,'ArrowRight avanza de pregunta');
await page.keyboard.press('ArrowLeft');
await page.waitForTimeout(300);
check(await page.evaluate(()=>window.GCP_EXAM.currentIndex)===idxAntes,'ArrowLeft retrocede');

// 7. Letra inexistente no crea respuesta fantasma
const t7 = await page.evaluate(()=>{
  const E=window.GCP_EXAM; const q=E.currentBlockQuestions[E.currentIndex];
  const n=(q.options||[]).length; E.selectOption('Z');
  return {n, chosen:(E.userAnswers[q.id]?.chosen)||[]};
});
check(t7.chosen.length===0,'una letra que la pregunta no ofrece se ignora');

// 8. Multi-seleccion: contador y tope
const t8 = await page.evaluate(async ()=>{
  const E=window.GCP_EXAM;
  const q=E.currentBlockQuestions[E.currentIndex];
  q.isMultiSelect=true; q.expectedSelectCount=2;
  E.userAnswers[q.id]={chosen:[],isFlagged:false,timeSpentMs:0};
  E.renderQuestion(E.currentIndex);
  const badge=()=>document.getElementById('exam-multiselect-badge');
  const inicial=badge().textContent;
  E.selectOption('A'); const trasUna=badge().textContent;
  E.selectOption('B'); const trasDos=badge().textContent;
  const completoClass=badge().classList.contains('multi-completo');
  E.selectOption('C'); const trasTres=(E.userAnswers[q.id].chosen||[]).slice();
  const rol=document.getElementById('exam-options-container').getAttribute('role');
  return {inicial,trasUna,trasDos,trasTres,completoClass,rol};
});
check(/faltan 2/.test(t8.inicial),'el aviso arranca diciendo cuantas faltan: "'+t8.inicial+'"');
check(/falta 1/.test(t8.trasUna),'el contador baja al marcar la primera: "'+t8.trasUna+'"');
check(/2 de 2/.test(t8.trasDos),'confirma al completar: "'+t8.trasDos+'"');
check(t8.completoClass,'el aviso cambia de estilo al completarse');
check(t8.trasTres.length===2,'no deja marcar una tercera cuando pide 2');
check(t8.rol==='group','el contenedor pasa a role=group en multi-seleccion (no radiogroup)');

// 9. Leyenda de teclas
const t9 = await page.evaluate(()=>document.getElementById('exam-kbd-hint')?.textContent||'');
check(t9.includes('responder')&&t9.includes('navegar'),'hay leyenda visible de atajos');

console.log('\n=== EXAMEN / UX de responder ===');
oks.forEach(o=>console.log('  ok    '+o));
fallos.forEach(f=>console.log('  FALLO '+f));
console.log(`\n${oks.length} ok, ${fallos.length} fallos`);
console.log('errores de consola:', errs.length?errs.slice(0,6):'ninguno');
await page.screenshot({path: path.join(root,'reports','examen_ux.png')});
await b.close(); srv.close();
process.exit(fallos.length?1:0);
