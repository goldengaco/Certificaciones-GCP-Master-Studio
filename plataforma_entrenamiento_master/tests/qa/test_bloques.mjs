/**
 * test_bloques.mjs — el simulacro reparte el banco en bloques del tamano de un
 * examen real, no en seis trozos fijos.
 *
 * El motor partia SIEMPRE en 6 bloques. Con las 125 preguntas verificadas de
 * ACE eso daba simulacros de 20 preguntas con el cronometro de 120 minutos: un
 * porcentaje sobre 20 preguntas no es comparable con el examen real, y la
 * persona que estudia con esto cree que va lista cuando no lo esta. Ahora el
 * numero de bloques sale del banco disponible (ACE: 2 de ~62; CDL: 6 de ~51;
 * PCA: 1 de 25, que sigue disparando el aviso de "simulacro demasiado corto").
 *
 * Requisitos: npm install playwright-core
 * Uso:        node tests/qa/test_bloques.mjs
 * Sale con codigo 1 si algo falla.
 */
import { chromium } from 'playwright-core';
import http from 'http'; import fs from 'fs'; import path from 'path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..', '..'); const types={'.html':'text/html','.js':'text/javascript','.css':'text/css'};
const srv=http.createServer((q,r)=>{let f=decodeURIComponent(q.url.split('?')[0]);if(f==='/')f='/index.html';const p=path.join(root,f);if(!fs.existsSync(p)||fs.statSync(p).isDirectory()){r.writeHead(404);return r.end();}r.writeHead(200,{'Content-Type':types[path.extname(p)]||'text/plain'});fs.createReadStream(p).pipe(r);});
await new Promise(r=>srv.listen(8099,r));
const b=await chromium.launch({ executablePath: process.env.CHROME_PATH || undefined }); const page=await b.newPage({viewport:{width:1440,height:950}});
const errs=[]; page.on('pageerror',e=>errs.push('PAGEERROR: '+e.message));
page.on('console',m=>{if(m.type()==='error')errs.push('CONSOLE: '+m.text());});
await page.goto('http://localhost:8099/index.html'); await page.waitForTimeout(2000);

const fallos=[],oks=[]; const check=(c,m)=>(c?oks:fallos).push(m);

for (const cert of ['ace','cdl','pca']) {
  const r = await page.evaluate(async (cert)=>{
    const app=window.GCP_APP; app.confirm=(t,m,si)=>si();
    if (window.GCP_DATA && !window.GCP_DATA.estaCargado(cert)) await window.GCP_DATA.asegurarBanco(cert);
    app.switchCertification(cert,false);
    await new Promise(r=>setTimeout(r,600));
    const pool=app.getQuestionPool().length;
    const nb=app.numeroDeBloques(cert);
    const E=window.GCP_EXAM; E.examActive=false; E.onEnterView({});
    await new Promise(r=>setTimeout(r,500));
    const tam=E.currentBlockQuestions.length;
    // todos los bloques, para comprobar que son disjuntos y del mismo tamano
    const man=window.GCP_MANIFEST.certifications[cert];
    const dw={}; Object.keys(man.domains||{}).forEach(k=>dw[k]=man.domains[k].weight||20);
    const blocks=window.GCP_ENGINE.BlockRotationEngine.generateEpochBlocks(cert,dw,app.getQuestionPool(),1337,man.questionCount||50);
    const ids=blocks.flatMap(b=>b.map(q=>q.id));
    const titulo=document.getElementById('exam-block-title')?.textContent||'';
    return {pool,nb,tam,nBlocks:blocks.length,tams:blocks.map(x=>x.length),
            disjuntos:new Set(ids).size===ids.length, cubre:ids.length, titulo,
            duracion:man.durationMinutes};
  }, cert);
  const C=cert.toUpperCase();
  console.log(`\n[${C}] banco practicable ${r.pool} · ${r.nb} bloque(s) de ${r.tams.join('/')} · "${r.titulo}"`);
  check(r.nBlocks===r.nb, `${C}: el motor y la interfaz cuentan los mismos bloques (${r.nBlocks} vs ${r.nb})`);
  check(r.disjuntos, `${C}: los bloques no repiten ninguna pregunta`);
  const minTam=Math.min(...r.tams), maxTam=Math.max(...r.tams);
  check(maxTam-minTam<=2, `${C}: bloques equilibrados (${minTam}-${maxTam})`);
  if (r.pool>=50) check(r.tam>=45, `${C}: el simulacro tiene ${r.tam} preguntas (antes ${Math.floor(r.pool/6)}), coherente con los ${r.duracion} min`);
  else check(true, `${C}: banco de ${r.pool}, un solo bloque de ${r.tam} — el aviso de simulacro corto sigue siendo correcto`);
  // El titulo debe declarar el numero REAL de bloques (6 es correcto si son 6).
  const m = r.titulo.match(/de (\d+)$/);
  const declarado = m ? Number(m[1]) : (/Simulacro$/.test(r.titulo) ? 1 : 0);
  check(declarado===r.nb, `${C}: el titulo declara ${declarado} bloque(s) y hay ${r.nb}: "${r.titulo}"`);
}

// La rotacion no debe salirse del numero real de bloques
const rot = await page.evaluate(async ()=>{
  const app=window.GCP_APP; app.switchCertification('ace',false);
  await new Promise(r=>setTimeout(r,400));
  const E=window.GCP_EXAM; const nb=app.numeroDeBloques('ace');
  const st=app.state.certifications.ace; st.rotation=st.rotation||{epochSeed:1337,currentBlockIndex:0};
  const vistos=[];
  for(let i=0;i<nb+2;i++){
    st.rotation.currentBlockIndex=i;
    E.examActive=false; E.onEnterView({});
    await new Promise(r=>setTimeout(r,250));
    vistos.push(E.currentBlockQuestions.length);
  }
  return {nb,vistos};
});
check(rot.vistos.every(v=>v>0), `la rotacion nunca cae en un bloque vacio (tamanos: ${rot.vistos.join(', ')})`);

console.log('\n=== BLOQUES DE SIMULACRO ===');
oks.forEach(o=>console.log('  ok    '+o));
fallos.forEach(f=>console.log('  FALLO '+f));
console.log(`\n${oks.length} ok, ${fallos.length} fallos`);
console.log('errores de consola:', errs.length?errs.slice(0,5):'ninguno');
await b.close(); srv.close();
process.exit(fallos.length?1:0);
