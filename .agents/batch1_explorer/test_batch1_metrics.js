const fs = require('fs');
const path = require('path');

const base = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'base_batch1.json'), 'utf8'));
const draft = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'draft_batch1.json'), 'utf8'));

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

const m = medir(draft);
const pct = x => x.toFixed(1) + '%';
console.log(`\nLOTE REESCRITO: ACE-D1-001..ACE-D1-025 (${m.n} items, ${m.simples} single-select, ${draft.length - m.simples} multi-select)\n`);

const da = base.a - m.a, db = base.b - m.b;
console.log(`  (a) la correcta es la mas larga : ${pct(base.a)} -> ${pct(m.a)}   (${da>=0?'-':'+'}${Math.abs(da).toFixed(1)} pts)`);
console.log(`  (b) heuristica ciega 'mas larga': ${pct(base.b)} -> ${pct(m.b)}   (${db>=0?'-':'+'}${Math.abs(db).toFixed(1)} pts)\n`);

let fallos = 0;
const linea = (ok, txt) => { if (!ok) fallos++; console.log(`  ${ok ? '\x1b[32mPASA \x1b[0m' : '\x1b[31mFALLA\x1b[0m'} ${txt}`); };

const proporcional = da <= 1 || db >= da * 0.7;
linea(proporcional, proporcional ? 'las dos metricas bajan en proporcion: no hubo relleno' : 'Fallo en proporcionalidad');
linea(m.a <= 35, `(a) maximo 35% — esta en ${pct(m.a)}`);
linea(m.b <= 45, `(b) maximo 45% — esta en ${pct(m.b)}`);
linea(m.fueraDeRango === 0, `${m.fueraDeRango} items con opciones fuera del rango +-25% de longitud`);
linea(Math.abs(m.exceso) <= 25, `exceso medio de la correcta: ${m.exceso.toFixed(1)} caracteres (maximo 25)`);
linea(m.conSub === m.n, `${m.conSub}/${m.n} con subsectionId`);
linea(m.conConceptos === m.n, `${m.conConceptos}/${m.n} con conceptos`);
linea(m.casosRetirados === 0, `${m.casosRetirados} items con case study retirado`);
linea(m.multi >= 12 && m.multi <= 20, `multi-select en rango [12%, 20%]: ${pct(m.multi)}`);

console.log(fallos ? `\n\x1b[31mRESULTADO: ${fallos} PUERTAS FALLADAS\x1b[0m\n` : `\n\x1b[32mRESULTADO: TODAS LAS PUERTAS SUPERADAS (0 FALLOS)\x1b[0m\n`);
