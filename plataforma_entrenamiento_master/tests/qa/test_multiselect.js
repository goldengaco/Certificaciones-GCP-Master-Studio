#!/usr/bin/env node
/**
 * Comprueba que una pregunta de "elige 2" solo se da por acertada con el
 * conjunto EXACTO. Antes bastaba con hacer clic en una de las dos.
 */
function evaluar(correct, expectedSelectCount, clics) {
  const correctAnswers = (Array.isArray(correct) ? correct : [correct]).map(c => String(c).toUpperCase());
  const requeridas = expectedSelectCount || correctAnswers.length || 1;
  const sel = [];
  for (const l of clics.map(c => c.toUpperCase())) {
    const i = sel.indexOf(l);
    if (i >= 0) { sel.splice(i, 1); continue; }
    if (sel.length >= requeridas) continue;
    sel.push(l);
    if (sel.length === requeridas) break;
  }
  if (sel.length < requeridas) return { resuelto: false };
  const a = sel.slice().sort(), b = correctAnswers.slice().sort();
  return { resuelto: true, acierto: a.length === b.length && a.every((x, i) => x === b[i]) };
}

const casos = [
  ['una sola de las dos correctas NO acierta',      ['B','D'], 2, ['B'],       { resuelto: false }],
  ['las dos correctas aciertan',                    ['B','D'], 2, ['B','D'],   { resuelto: true, acierto: true }],
  ['orden invertido también acierta',               ['B','D'], 2, ['D','B'],   { resuelto: true, acierto: true }],
  ['una correcta y una mala falla',                 ['B','D'], 2, ['B','A'],   { resuelto: true, acierto: false }],
  ['dos malas fallan',                              ['B','D'], 2, ['A','C'],   { resuelto: true, acierto: false }],
  ['desmarcar y rehacer acierta',                   ['B','D'], 2, ['A','A','B','D'], { resuelto: true, acierto: true }],
  ['no deja marcar una tercera',                    ['B','D'], 2, ['A','C','B'], { resuelto: true, acierto: false }],
  ['elige 3 con las tres correctas',                ['A','C','E'], 3, ['A','C','E'], { resuelto: true, acierto: true }],
  ['elige 3 con dos correctas falla',               ['A','C','E'], 3, ['A','C','B'], { resuelto: true, acierto: false }],
  ['respuesta única correcta',                      'C', 1, ['C'],            { resuelto: true, acierto: true }],
  ['respuesta única incorrecta',                    'C', 1, ['A'],            { resuelto: true, acierto: false }],
];

let fallos = 0;
for (const [nombre, correct, n, clics, esperado] of casos) {
  const r = evaluar(correct, n, clics);
  const ok = r.resuelto === esperado.resuelto &&
             (esperado.acierto === undefined || r.acierto === esperado.acierto);
  if (!ok) fallos++;
  console.log(`  ${ok ? '\x1b[32mPASA \x1b[0m' : '\x1b[31mFALLA\x1b[0m'} ${nombre}`);
}
console.log(fallos ? `\n\x1b[31m${fallos} fallo(s)\x1b[0m` : '\n\x1b[32mLa selección múltiple se puntúa por conjunto exacto.\x1b[0m');
process.exit(fallos ? 1 : 0);
