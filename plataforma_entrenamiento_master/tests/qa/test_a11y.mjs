/**
 * test_a11y.mjs — axe-core sobre la aplicación real, en los dos temas.
 *
 * Recorre TODAS las vistas, abre los modales y arranca un examen, porque los
 * fallos de accesibilidad de esta plataforma no están en la portada: están en
 * el badge que solo aparece al fallar, en el banner del scorecard y en la
 * tabla que se queda sin filas. Auditar solo la carga inicial da un falso 100.
 *
 * Requisitos:  npm install playwright-core axe-core
 * Uso:         node tests/qa/test_a11y.mjs [http://127.0.0.1:8989]
 * Sale con código 1 si hay cualquier violación.
 */
import { chromium } from 'playwright-core';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, '..', '..');
const BASE = process.argv[2] || 'http://127.0.0.1:8989';
const CHROME = process.env.CHROME_PATH || undefined;

function localizarAxe() {
  const candidatos = [
    path.join(RAIZ, 'node_modules/axe-core/axe.min.js'),
    path.join(RAIZ, '..', 'node_modules/axe-core/axe.min.js'),
  ];
  for (const c of candidatos) if (fs.existsSync(c)) return fs.readFileSync(c, 'utf8');
  console.error('No se encontró axe-core. Ejecuta: npm install axe-core playwright-core');
  process.exit(2);
}
const AXE = localizarAxe();

const VISTAS = ['dashboard', 'study', 'drill', 'search', 'tools', 'news', 'exam'];
const MODALES = ['modal-settings', 'modal-scorecard', 'modal-review', 'modal-cs'];

let totalViolaciones = 0;

async function auditar(pg, etiqueta, vistos) {
  await pg.addScriptTag({ content: AXE });
  const viol = await pg.evaluate(() =>
    axe.run(document, { resultTypes: ['violations'] })
       .then(r => r.violations.map(v => ({
         id: v.id, impact: v.impact, help: v.help,
         nodos: v.nodes.slice(0, 4).map(n => ({
           t: n.target.join(' '),
           m: (n.failureSummary || '').replace(/\n/g, ' ').slice(0, 200)
         }))
       })))
  );
  for (const v of viol) {
    const clave = v.id + '|' + v.nodos.map(n => n.t).join('|');
    if (vistos.has(clave)) continue;
    vistos.add(clave);
    totalViolaciones++;
    console.log(`\n  FALLA [${v.impact}] ${v.id} — ${v.help}   (${etiqueta})`);
    v.nodos.forEach(n => console.log('      ' + n.t + '\n         ' + n.m));
  }
}

const navegador = await chromium.launch({ executablePath: CHROME, args: ['--no-sandbox'] });
for (const tema of ['dark', 'light']) {
  console.log(`\n======== TEMA ${tema.toUpperCase()} ========`);
  const pg = await navegador.newPage({ viewport: { width: 1400, height: 950 }, colorScheme: tema });
  const errores = [];
  pg.on('pageerror', e => errores.push(String(e).slice(0, 160)));
  await pg.goto(BASE + '/index.html');
  await pg.waitForTimeout(3500);
  const vistos = new Set();

  // Salir del examen abre un modal de confirmación; se descarta para poder seguir.
  const cerrarConfirmacion = () => pg.evaluate(() => {
    const m = document.getElementById('modal-confirm');
    if (m && getComputedStyle(m).display !== 'none') {
      const b = [...m.querySelectorAll('button')].find(x => /confirmar|s[ií]|salir|aceptar/i.test(x.textContent));
      if (b) b.click(); else if (window.GCP_APP.closeModal) window.GCP_APP.closeModal('modal-confirm');
    }
  });

  for (const v of VISTAS) {
    await pg.evaluate(x => window.GCP_APP && window.GCP_APP.navigateTo(x), v);
    await pg.waitForTimeout(300);
    await cerrarConfirmacion();
    await pg.waitForTimeout(300);
    await auditar(pg, 'vista ' + v, vistos);
  }

  // Examen en curso: es donde vive la mitad de la interfaz.
  await pg.evaluate(() => {
    const b = [...document.querySelectorAll('button')].find(x => /comenzar|iniciar/i.test(x.textContent) && x.offsetParent);
    if (b) b.click();
  });
  await pg.waitForTimeout(1800);
  await auditar(pg, 'examen en curso', vistos);
  // Responder para que aparezcan los estados correcto/incorrecto.
  await pg.evaluate(() => {
    const o = document.querySelector('#exam-options-container .option-card');
    if (o) o.click();
  });
  await pg.waitForTimeout(400);
  await auditar(pg, 'examen con opción marcada', vistos);

  // Modo estudio con respuesta enviada: banner de feedback y tabla forense.
  await cerrarConfirmacion();
  await pg.evaluate(() => window.GCP_APP.navigateTo('study'));
  await pg.waitForTimeout(400);
  await cerrarConfirmacion();
  await pg.waitForTimeout(500);
  await pg.evaluate(() => {
    const o = document.querySelector('#study-options-container .option-card, .option-item');
    if (o) o.click();
    const b = [...document.querySelectorAll('button')].find(x => /comprobar|verificar|responder/i.test(x.textContent) && x.offsetParent);
    if (b) b.click();
  });
  await pg.waitForTimeout(900);
  await auditar(pg, 'estudio con respuesta enviada', vistos);

  for (const m of MODALES) {
    const abierto = await pg.evaluate(id => {
      const el = document.getElementById(id);
      if (!el) return false;
      if (window.GCP_APP && window.GCP_APP.openModal) window.GCP_APP.openModal(id);
      else { el.style.display = 'flex'; el.removeAttribute('hidden'); }
      return true;
    }, m);
    if (!abierto) continue;
    await pg.waitForTimeout(500);
    await auditar(pg, 'modal ' + m, vistos);
    await pg.evaluate(id => window.GCP_APP && window.GCP_APP.closeModal && window.GCP_APP.closeModal(id), m);
    await pg.waitForTimeout(200);
  }

  if (errores.length) {
    totalViolaciones += errores.length;
    console.log('\n  FALLA errores de JavaScript en consola:');
    errores.forEach(e => console.log('      ' + e));
  }
  if (!vistos.size && !errores.length) console.log('  PASA — 0 violaciones de axe-core, 0 errores de consola');
  await pg.close();
}
await navegador.close();

console.log(`\nRESULTADO: ${totalViolaciones} hallazgo(s)`);
process.exit(totalViolaciones ? 1 : 0);
