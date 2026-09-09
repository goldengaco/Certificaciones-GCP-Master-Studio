/**
 * test_lighthouse.mjs — puertas de calidad de Lighthouse.
 *
 * Corre N veces y evalúa la MEDIANA, no una sola pasada: Lighthouse varía
 * varios puntos entre ejecuciones en la misma máquina, y una sola medición
 * no distingue una mejora real del ruido.
 *
 * Requisitos:  npm install lighthouse chrome-launcher
 * Uso:         node tests/qa/test_lighthouse.mjs [url] [pasadas]
 * Importante:  sirve la app con servidor.py. Con `python -m http.server` no hay
 *              caché ni gzip y el resultado no es comparable.
 */
import lighthouse from 'lighthouse';
import { launch } from 'chrome-launcher';

const URL = process.argv[2] || 'http://127.0.0.1:8989/index.html';
const PASADAS = Number(process.argv[3] || 3);

// Puertas. La accesibilidad y las buenas prácticas son innegociables: cualquier
// caída ahí es un fallo real y reproducible. El rendimiento admite margen
// porque depende de la CPU de la máquina que mide.
const PUERTAS = { performance: 95, accessibility: 100, 'best-practices': 100, seo: 100 };
const MAX_LCP_MS = 1500;
const MAX_TBT_MS = 200;
const MAX_PESO_KIB = 1200;

const mediana = a => { const s = [...a].sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };

const chrome = await launch({
  chromePath: process.env.CHROME_PATH,
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-dev-shm-usage']
});
const filas = [];
for (let i = 1; i <= PASADAS; i++) {
  const r = await lighthouse(URL, {
    port: chrome.port, output: 'json', logLevel: 'silent',
    screenEmulation: { mobile: false, width: 1350, height: 940, deviceScaleFactor: 1, disabled: false },
    formFactor: 'desktop', throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 }
  });
  const c = r.lhr.categories, a = r.lhr.audits;
  const fila = {
    performance: Math.round(c.performance.score * 100),
    accessibility: Math.round(c.accessibility.score * 100),
    'best-practices': Math.round(c['best-practices'].score * 100),
    seo: Math.round(c.seo.score * 100),
    lcp: a['largest-contentful-paint'].numericValue,
    tbt: a['total-blocking-time'].numericValue,
    peso: (a['total-byte-weight'].numericValue || 0) / 1024,
  };
  filas.push(fila);
  console.log(`pasada ${i}:  perf ${fila.performance}  a11y ${fila.accessibility}  bp ${fila['best-practices']}  seo ${fila.seo}` +
              `   LCP ${Math.round(fila.lcp)}ms  TBT ${Math.round(fila.tbt)}ms  peso ${Math.round(fila.peso)} KiB`);
}
await chrome.kill();

let fallos = 0;
console.log('\n--- MEDIANA DE ' + PASADAS + ' PASADAS ---');
for (const [cat, minimo] of Object.entries(PUERTAS)) {
  const m = mediana(filas.map(f => f[cat]));
  const okc = m >= minimo;
  if (!okc) fallos++;
  console.log(`  ${okc ? 'PASA ' : 'FALLA'} ${cat.padEnd(15)} ${m}  (mínimo ${minimo})`);
}
const chequeos = [
  ['LCP', mediana(filas.map(f => f.lcp)), MAX_LCP_MS, 'ms'],
  ['TBT', mediana(filas.map(f => f.tbt)), MAX_TBT_MS, 'ms'],
  ['peso total', mediana(filas.map(f => f.peso)), MAX_PESO_KIB, 'KiB'],
];
for (const [n, v, max, u] of chequeos) {
  const okc = v <= max;
  if (!okc) fallos++;
  console.log(`  ${okc ? 'PASA ' : 'FALLA'} ${n.padEnd(15)} ${Math.round(v)} ${u}  (máximo ${max} ${u})`);
}
console.log(`\nRESULTADO: ${fallos} puerta(s) sin superar`);
process.exit(fallos ? 1 : 0);
