/**
 * medir_lote.js — detector de trampa por lote.
 *
 * La prueba general (test_fidelidad_banco.js) mide las 900 y por eso un lote de
 * 25 apenas mueve la aguja. Esta mide SOLO los ítems que le indiques, y compara
 * dos métricas que juntas delatan el relleno:
 *
 *   (a) % en que la correcta es la opción más larga
 *   (b) % de acierto de la heurística ciega "marcar la más larga"
 *
 * Si (a) baja mucho y (b) casi no se mueve, se igualaron longitudes añadiendo
 * paja a las incorrectas en vez de podar la correcta. El lote se rechaza.
 *
 * Uso:
 *   node tests/qa/medir_lote.js pca PCA-D1-001..PCA-D1-025
 *   node tests/qa/medir_lote.js ace ACE-1.1            # por subsección
 *   node tests/qa/medir_lote.js pca PCA-D1-001..PCA-D1-025 --base /tmp/base.json
 *
 * Con --base compara contra una instantánea previa y aplica las puertas.
 * Para crear la instantánea ANTES de tocar el lote:
 *   node tests/qa/medir_lote.js pca PCA-D1-001..PCA-D1-025 --guardar /tmp/base.json
 */
'use strict';
const fs = require('fs');
const path = require('path');
const RAIZ = path.resolve(__dirname, '..', '..');

const [,, certArg, selArg, ...resto] = process.argv;
if (!certArg || !selArg) {
  console.error('Uso: node tests/qa/medir_lote.js <cdl|ace|pca> <ID..ID | SUBSECCION> [--guardar f] [--base f]');
  process.exit(2);
}
const opt = k => { const i = resto.indexOf(k); return i >= 0 ? resto[i+1] : null; };
const GUARDAR = opt('--guardar'), BASE = opt('--base');

global.window = {};
require(path.join(RAIZ, 'data', `cert_${certArg}.js`));
const todas = global.window[`GCP_${certArg.toUpperCase()}_QUESTIONS`] || [];

let lote;
if (selArg.includes('..')) {
  // Se selecciona por ID, no por posición: el array no está ordenado por id.
  const [a, b] = selArg.split('..').map(x => x.trim());
  const lo = a < b ? a : b, hi = a < b ? b : a;
  if (!todas.some(q => q.id === a) || !todas.some(q => q.id === b)) {
    console.error(`No encuentro ${!todas.some(q=>q.id===a)?a:b} en cert_${certArg}.js`); process.exit(2);
  }
  lote = todas.filter(q => q.id >= lo && q.id <= hi).sort((x,y) => x.id.localeCompare(y.id));
} else {
  lote = todas.filter(q => q.subsectionId === selArg || q.domainId === selArg);
}
if (!lote.length) { console.error('El selector no coincide con ningún ítem.'); process.exit(2); }

const clave = q => Array.isArray(q.correct) ? q.correct.slice().sort() : [q.correct];
const largos = q => q.options.map(o => (o.text || '').length);
const masLarga = q => { const L = largos(q); return q.options[L.indexOf(Math.max(...L))].letter; };

function medir(items) {
  const simples = items.filter(q => !q.isMultiSelect);
  let esLaMasLarga = 0, aciertaH1 = 0, fueraDeRango = 0, excesos = [];
  simples.forEach(q => {
    const L = largos(q), mx = Math.max(...L), mn = Math.min(...L);
    if ((mx - mn) / mx > 0.25) fueraDeRango++;
    const unicaMax = L.filter(x => x === mx).length === 1;
    if (unicaMax && q.options[L.indexOf(mx)].letter === clave(q)[0]) esLaMasLarga++;
    if (masLarga(q) === clave(q)[0]) aciertaH1++;
    const c = q.options.find(o => o.letter === clave(q)[0]);
    const otras = q.options.filter(o => o.letter !== clave(q)[0]);
    excesos.push((c.text||'').length - otras.reduce((s,o)=>s+(o.text||'').length,0)/otras.length);
  });
  const n = simples.length || 1;
  return {
    n: items.length, simples: simples.length,
    a: 100*esLaMasLarga/n, b: 100*aciertaH1/n,
    fueraDeRango, exceso: excesos.reduce((x,y)=>x+y,0)/n,
    multi: 100*items.filter(q=>q.isMultiSelect).length/items.length,
    conSub: items.filter(q=>q.subsectionId).length,
    conConceptos: items.filter(q=>Array.isArray(q.conceptos)&&q.conceptos.length).length,
    casosRetirados: items.filter(q=>/mountkirk|terramearth|helicopter/i.test(q.caseStudy||'')).length,
  };
}

const m = medir(lote);
if (GUARDAR) {
  fs.writeFileSync(GUARDAR, JSON.stringify(m, null, 2));
  console.log(`Instantánea de ${m.n} ítems guardada en ${GUARDAR}`);
  console.log(`  (a) la correcta es la más larga: ${m.a.toFixed(1)}%   (b) heurística ciega: ${m.b.toFixed(1)}%`);
  process.exit(0);
}

const pct = x => x.toFixed(1) + '%';
console.log(`\nLOTE: ${selArg}  (${m.n} ítems, ${m.simples} de respuesta única)\n`);

let fallos = 0;
const linea = (ok, txt) => { if (!ok) fallos++; console.log(`  ${ok ? '\x1b[32mPASA \x1b[0m' : '\x1b[31mFALLA\x1b[0m'} ${txt}`); };

if (BASE && fs.existsSync(BASE)) {
  const p = JSON.parse(fs.readFileSync(BASE, 'utf8'));
  const da = p.a - m.a, db = p.b - m.b;
  console.log(`  (a) la correcta es la más larga : ${pct(p.a)} -> ${pct(m.a)}   (${da>=0?'-':'+'}${Math.abs(da).toFixed(1)} pts)`);
  console.log(`  (b) heurística ciega "más larga": ${pct(p.b)} -> ${pct(m.b)}   (${db>=0?'-':'+'}${Math.abs(db).toFixed(1)} pts)\n`);
  // El detector: (b) debe bajar al menos el 70% de lo que baja (a).
  const proporcional = da <= 1 || db >= da * 0.7;
  linea(proporcional,
    proporcional ? 'las dos métricas bajan en proporción: no hubo relleno'
                 : `(a) bajó ${da.toFixed(1)} pts pero (b) solo ${db.toFixed(1)}: RELLENASTE las incorrectas en vez de podar la correcta. Lote rechazado.`);
} else {
  console.log(`  (a) la correcta es la más larga : ${pct(m.a)}`);
  console.log(`  (b) heurística ciega "más larga": ${pct(m.b)}\n`);
}

linea(m.a <= 35, `(a) máximo 35% — está en ${pct(m.a)}`);
linea(m.b <= 45, `(b) máximo 45% — está en ${pct(m.b)}`);
linea(m.fueraDeRango === 0, `${m.fueraDeRango} ítems con opciones fuera del rango ±25% de longitud`);
linea(Math.abs(m.exceso) <= 25, `exceso medio de la correcta: ${m.exceso.toFixed(1)} caracteres (máximo 25)`);
linea(m.conSub === m.n, `${m.conSub}/${m.n} con subsectionId`);
linea(m.conConceptos === m.n, `${m.conConceptos}/${m.n} con conceptos`);
linea(m.casosRetirados === 0, `${m.casosRetirados} ítems con case study retirado`);
console.log(`\n  informativo: ${pct(m.multi)} de selección múltiple en este lote\n`);

console.log(fallos ? `\x1b[31mLOTE RECHAZADO — ${fallos} puerta(s) sin superar\x1b[0m\n`
                   : `\x1b[32mLOTE ACEPTADO\x1b[0m\n`);
process.exit(fallos ? 1 : 0);
