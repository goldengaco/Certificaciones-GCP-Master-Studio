const fs = require('fs');
const path = require('path');

const draftPath = path.join(__dirname, 'draft_batch4.json');
const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));

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

// Baseline
const base = {
  a: 68.0,
  b: 72.0
};

const m = medir(draft);
const pct = x => x.toFixed(1) + '%';
console.log(`\nLOTE DRAFT BATCH 4: ACE-D2-016..ACE-D2-040 (${m.n} items, ${m.simples} single-select)\n`);

const da = base.a - m.a, db = base.b - m.b;
console.log(`  (a) la correcta es la más larga : ${pct(base.a)} -> ${pct(m.a)}   (-${da.toFixed(1)} pts)`);
console.log(`  (b) heurística ciega "más larga": ${pct(base.b)} -> ${pct(m.b)}   (-${db.toFixed(1)} pts)\n`);

const proporcional = da <= 1 || db >= da * 0.7;
let fallos = 0;
const linea = (ok, txt) => { if (!ok) fallos++; console.log(`  ${ok ? '\x1b[32mPASA \x1b[0m' : '\x1b[31mFALLA\x1b[0m'} ${txt}`); };

linea(proporcional, proporcional ? 'las dos métricas bajan en proporción: no hubo relleno'
                                 : `(a) bajó ${da.toFixed(1)} pts pero (b) solo ${db.toFixed(1)}: RELLENO detectado`);
linea(m.a <= 35, `(a) máximo 35% — está en ${pct(m.a)}`);
linea(m.b <= 45, `(b) máximo 45% — está en ${pct(m.b)}`);
linea(m.fueraDeRango === 0, `${m.fueraDeRango} ítems con opciones fuera del rango ±25% de longitud`);
linea(Math.abs(m.exceso) <= 25, `exceso medio de la correcta: ${m.exceso.toFixed(1)} caracteres (máximo 25)`);
linea(m.conSub === m.n, `${m.conSub}/${m.n} con subsectionId`);
linea(m.conConceptos === m.n, `${m.conConceptos}/${m.n} con conceptos`);
linea(m.casosRetirados === 0, `${m.casosRetirados} ítems con case study retirado`);

console.log(`\n  informativo: ${pct(m.multi)} de selección múltiple en este lote\n`);
console.log(fallos ? `\x1b[31mLOTE RECHAZADO — ${fallos} puerta(s) sin superar\x1b[0m\n`
                   : `\x1b[32mLOTE ACEPTADO — TODAS LAS PUERTAS SUPERADAS CON ÉXITO\x1b[0m\n`);
