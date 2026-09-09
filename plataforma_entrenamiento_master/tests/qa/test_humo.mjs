/**
 * test_humo.mjs — la plataforma sigue funcionando después de tocarla.
 *
 * Una nota de Lighthouse de 100 sobre una app rota vale cero. Esto comprueba
 * que lo esencial responde: los tres bancos cargan, cambiar de certificación
 * funciona, el modo estudio pinta pregunta, el examen arranca con temporizador
 * y opciones seleccionables, y la consola queda limpia.
 *
 * Uso:  node tests/qa/test_humo.mjs [http://127.0.0.1:8989]
 */
import { chromium } from 'playwright-core';
const BASE = process.argv[2] || 'http://127.0.0.1:8989';
let fallos = 0;
const comprobar = (cond, msg, detalle = '') => {
  if (cond) console.log('  PASA  ' + msg + (detalle ? '  → ' + detalle : ''));
  else { fallos++; console.log('  FALLA ' + msg + (detalle ? '  → ' + detalle : '')); }
};

const b = await chromium.launch({ executablePath: process.env.CHROME_PATH, args: ['--no-sandbox'] });
const pg = await b.newPage({ viewport: { width: 1400, height: 950 } });
const errores = [];
pg.on('pageerror', e => errores.push('pageerror: ' + String(e).slice(0, 140)));
pg.on('console', m => m.type() === 'error' && errores.push('console: ' + m.text().slice(0, 140)));

console.log('\n===== HUMO =====');
await pg.goto(BASE + '/index.html');
await pg.waitForTimeout(3000);

comprobar(await pg.evaluate(() => !!(window.GCP_APP && window.GCP_APP.state)), 'la app arranca');
const activa = await pg.evaluate(() => window.GCP_APP.activeCertId + ':' + window.GCP_APP.questionPool.length);
comprobar(Number(activa.split(':')[1]) === 300, 'el banco de la certificación activa tiene 300 ítems', activa);

// Carga perezosa: al principio solo debe estar el banco activo.
const cargados0 = await pg.evaluate(() => ['cdl','ace','pca'].filter(c => window.GCP_DATA.estaCargado(c)));
comprobar(cargados0.length >= 1, 'carga perezosa: el banco activo está disponible al arrancar', cargados0.join(','));

// Y al final deben estar los tres (precarga en segundo plano).
await pg.waitForTimeout(6000);
const cargados1 = await pg.evaluate(() => ['cdl','ace','pca'].filter(c => window.GCP_DATA.estaCargado(c)));
comprobar(cargados1.length === 3, 'precarga en segundo plano: los tres bancos acaban cargados', cargados1.join(','));

for (const c of ['pca', 'cdl', 'ace']) {
  await pg.evaluate(x => window.GCP_APP.switchCertification(x), c);
  await pg.waitForTimeout(700);
  const r = await pg.evaluate(() => window.GCP_APP.activeCertId + ':' + window.GCP_APP.questionPool.length);
  comprobar(r === c + ':300', 'cambio a ' + c.toUpperCase(), r);
}

// Salir de la vista de examen abre un modal de confirmación que bloquea la
// navegación (comportamiento correcto: protege un simulacro en curso). Por eso
// 'exam' va al final y se descarta cualquier confirmación antes de seguir.
const cerrarConfirmacion = () => pg.evaluate(() => {
  const m = document.getElementById('modal-confirm');
  if (m && getComputedStyle(m).display !== 'none') {
    const b = [...m.querySelectorAll('button')].find(x => /confirmar|s[ií]|salir|aceptar/i.test(x.textContent));
    if (b) b.click();
    else if (window.GCP_APP.closeModal) window.GCP_APP.closeModal('modal-confirm');
    return true;
  }
  return false;
});

for (const v of ['dashboard','study','drill','search','tools','news','exam']) {
  await pg.evaluate(x => window.GCP_APP.navigateTo(x), v);
  await pg.waitForTimeout(300);
  await cerrarConfirmacion();
  await pg.waitForTimeout(300);
  const vis = await pg.evaluate(x => {
    const el = document.getElementById('view-' + x);
    return !!el && getComputedStyle(el).display !== 'none';
  }, v);
  comprobar(vis, 'la vista ' + v + ' se muestra');
}

await cerrarConfirmacion();
await pg.evaluate(() => window.GCP_APP.navigateTo('study'));
await pg.waitForTimeout(400);
await cerrarConfirmacion();
await pg.waitForTimeout(500);
const titulo = (await pg.innerText('#study-question-title')).trim();
comprobar(titulo.length > 10 && !/cargando/i.test(titulo), 'modo estudio pinta una pregunta', titulo.slice(0, 50));

await pg.evaluate(() => window.GCP_APP.navigateTo('exam'));
await pg.waitForTimeout(600);
await pg.evaluate(() => {
  const x = [...document.querySelectorAll('button')].find(e => /comenzar|iniciar/i.test(e.textContent) && e.offsetParent);
  if (x) x.click();
});
await pg.waitForTimeout(1800);
const nOpc = await pg.evaluate(() => document.querySelectorAll('#exam-options-container .option-card').length);
comprobar(nOpc === 4, 'el examen renderiza 4 opciones', String(nOpc));
const timer = await pg.evaluate(() => { const t = document.querySelector('.timer-badge'); return t ? t.textContent.trim() : ''; });
comprobar(/^\d{2}:\d{2}(:\d{2})?$/.test(timer), 'el temporizador corre', timer);
await pg.evaluate(() => document.querySelector('#exam-options-container .option-card').click());
await pg.waitForTimeout(400);
comprobar(await pg.evaluate(() => document.querySelectorAll('#exam-options-container .option-card.selected').length === 1),
          'seleccionar una opción funciona');

comprobar(await pg.evaluate(() => document.querySelectorAll('main').length === 1), 'existe un único landmark <main>');
comprobar(errores.length === 0, 'consola sin errores', errores.join(' | ') || 'limpia');

await b.close();
console.log(`\nRESULTADO: ${fallos} fallo(s)`);
process.exit(fallos ? 1 : 0);
