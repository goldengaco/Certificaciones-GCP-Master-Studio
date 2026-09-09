#!/usr/bin/env node
/**
 * Convierte preguntas de respuesta única en preguntas de "elige 2" o "elige 3".
 *
 *   node tests/qa/convertir_multiseleccion.js data/cert_cdl.js /tmp/conv.json
 *
 * Regla de seguridad central: **la clave original tiene que seguir siendo
 * correcta**. Solo se AÑADE una segunda respuesta válida; nunca se sustituye
 * la que ya estaba verificada. Si un parche intenta quitarla, se aborta.
 *
 * Formato:
 * [{
 *   "id": "CDL-D1-007",
 *   "scenario": "…enunciado reescrito que pide dos cosas… (Elige 2.)",
 *   "correct": ["B","E"],                 // debe contener la clave original
 *   "expectedSelectCount": 2,
 *   "options": { "A":"…", "C":"…", "D":"…", "E":"…" },   // texto nuevo o añadido
 *   "distractors": { "A":"…", "C":"…", "D":"…" },
 *   "explanation": "…por qué las dos…"
 * }]
 */
const fs = require('fs');
const [,, archivo, parcheFile] = process.argv;
if (!archivo || !parcheFile) { console.error('uso: convertir_multiseleccion.js <data/cert_x.js> <parche.json>'); process.exit(2); }

const src = fs.readFileSync(archivo, 'utf8');
const ini = src.indexOf('['), fin = src.lastIndexOf(']');
const items = JSON.parse(src.slice(ini, fin + 1));
const parche = JSON.parse(fs.readFileSync(parcheFile, 'utf8'));
const porId = new Map(items.map(it => [it.id, it]));
const errores = [];
let n = 0;

for (const p of parche) {
  const it = porId.get(p.id);
  const E = m => errores.push(`${p.id}: ${m}`);
  if (!it) { E('no existe'); continue; }
  if (Array.isArray(it.correct)) { E('ya era de selección múltiple'); continue; }

  const claveOriginal = String(it.correct).toUpperCase();
  const nuevas = (p.correct || []).map(c => String(c).toUpperCase());

  if (nuevas.length < 2) { E('correct debe tener al menos 2 letras'); continue; }
  if (!nuevas.includes(claveOriginal)) {
    E(`quita la clave verificada ${claveOriginal}. Solo se AÑADEN respuestas, no se sustituyen.`);
    continue;
  }
  if (new Set(nuevas).size !== nuevas.length) { E('letras repetidas en correct'); continue; }

  // aplicar textos
  for (const [letra, texto] of Object.entries(p.options || {})) {
    if (letra === claveOriginal) { E(`no se puede reescribir la clave original ${letra}`); continue; }
    const op = it.options.find(o => o.letter === letra);
    if (op) op.text = texto;
    else it.options.push({ letter: letra, text: texto });
  }
  it.options.sort((a, b) => a.letter.localeCompare(b.letter));

  if (it.options.length < 4) { E('menos de 4 opciones'); continue; }
  for (const l of nuevas) {
    if (!it.options.some(o => o.letter === l)) { E(`la letra correcta ${l} no existe entre las opciones`); }
  }

  if (p.scenario) it.scenario = p.scenario;
  if (p.explanation) it.explanation = p.explanation;

  const pide = /\(\s*(Choose|Elige|Seleccione|Select)\s+(two|2|three|3)[.\s]*\)/i.test(it.scenario || '');
  if (!pide) E('el enunciado no dice cuántas hay que elegir — añade "(Choose 2.)" o "(Elige 2.)"');

  it.correct = nuevas;
  it.isMultiSelect = true;
  it.expectedSelectCount = p.expectedSelectCount || nuevas.length;
  if (it.expectedSelectCount !== nuevas.length) E('expectedSelectCount no coincide con el número de respuestas');

  it.distractors = it.distractors || {};
  for (const [letra, texto] of Object.entries(p.distractors || {})) {
    if (nuevas.includes(letra)) { E(`distractor escrito para la letra correcta ${letra}`); continue; }
    it.distractors[letra] = texto;
  }
  for (const o of it.options) {
    if (!nuevas.includes(o.letter) && !it.distractors[o.letter]) E(`falta la razón del distractor ${o.letter}`);
  }

  // longitud: ninguna correcta puede destacar
  const L = it.options.map(o => (o.text || '').length);
  const iCor = it.options.map((o, i) => nuevas.includes(o.letter) ? i : -1).filter(i => i >= 0);
  const promCor = iCor.reduce((a, i) => a + L[i], 0) / iCor.length;
  const otras = L.filter((_, i) => !iCor.includes(i));
  const promOtras = otras.reduce((a, b) => a + b, 0) / otras.length;
  const r = promCor / promOtras;
  if (r > 1.15 || r < 0.85) E(`las correctas miden ${r.toFixed(2)}x el promedio de las incorrectas (rango 0.85–1.15)`);

  n++;
}

if (errores.length) {
  console.error('\n\x1b[31mCONVERSIÓN RECHAZADA — no se escribió nada\x1b[0m');
  errores.forEach(e => console.error('  ✗ ' + e));
  process.exit(1);
}
fs.writeFileSync(archivo, src.slice(0, ini) + JSON.stringify(items, null, 2) + src.slice(fin + 1), 'utf8');
console.log(`\x1b[32m✓ ${n} pregunta(s) convertidas a selección múltiple en ${archivo}\x1b[0m`);
