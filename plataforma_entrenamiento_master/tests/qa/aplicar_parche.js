#!/usr/bin/env node
/**
 * Aplica un parche de opciones/distractores a un banco, POR ID, sin tocar
 * nada más del ítem. Escribe solo si todas las comprobaciones pasan.
 *
 *   node tests/qa/aplicar_parche.js data/cert_ace.js /tmp/parche.json
 *
 * Formato del parche: [{ "id":"ACE-D5-017",
 *                        "options": {"B":"texto...","C":"...","D":"..."},
 *                        "distractors": {"B":"por qué falla...", ...},
 *                        "sectionId":"ACE-5", "subsectionId":"ACE-5.3",
 *                        "sectionName":"...", "subsectionName":"...",
 *                        "conceptos":["..."] }]
 *
 * Reglas que se hacen cumplir antes de escribir:
 *  - el ID debe existir
 *  - NUNCA se toca la letra correcta ni su texto (si se intenta, se aborta)
 *  - toda letra parcheada debe existir ya en el ítem
 *  - el texto nuevo no puede ser igual a otra opción del mismo ítem
 *  - tras el parche, la clave no puede seguir siendo la más larga por >15%
 */
const fs = require('fs');

const [,, archivo, parcheFile] = process.argv;
if (!archivo || !parcheFile) {
  console.error('uso: aplicar_parche.js <data/cert_xxx.js> <parche.json>');
  process.exit(2);
}

const src = fs.readFileSync(archivo, 'utf8');
const ini = src.indexOf('[');
const fin = src.lastIndexOf(']');
if (ini < 0 || fin < 0) { console.error('no encuentro el array'); process.exit(2); }
const items = JSON.parse(src.slice(ini, fin + 1));
const parche = JSON.parse(fs.readFileSync(parcheFile, 'utf8'));

const porId = new Map(items.map(it => [it.id, it]));
const errores = [];
let tocados = 0;

for (const p of parche) {
  const it = porId.get(p.id);
  if (!it) { errores.push(`${p.id}: no existe en ${archivo}`); continue; }

  const correctas = Array.isArray(it.correct) ? it.correct : [it.correct];

  if (p.options) {
    for (const [letra, texto] of Object.entries(p.options)) {
      if (correctas.includes(letra)) {
        errores.push(`${p.id}: el parche intenta reescribir la opción CORRECTA ${letra}. Prohibido.`);
        continue;
      }
      const op = (it.options || []).find(o => o.letter === letra);
      if (!op) { errores.push(`${p.id}: la opción ${letra} no existe`); continue; }
      op.text = texto;
    }
  }
  if (p.distractors) {
    it.distractors = it.distractors || {};
    for (const [letra, texto] of Object.entries(p.distractors)) {
      if (correctas.includes(letra)) { errores.push(`${p.id}: distractor para la letra correcta ${letra}`); continue; }
      it.distractors[letra] = texto;
    }
  }
  for (const campo of ['sectionId','sectionName','subsectionId','subsectionName','conceptos']) {
    if (p[campo] !== undefined) it[campo] = p[campo];
  }

  // textos duplicados dentro del ítem
  const textos = (it.options || []).map(o => (o.text || '').trim().toLowerCase());
  const dup = textos.filter((t, i) => textos.indexOf(t) !== i);
  if (dup.length) errores.push(`${p.id}: opciones duplicadas tras el parche`);

  // la clave ya no puede ser la más larga por mucho
  if (!Array.isArray(it.correct)) {
    const L = (it.options || []).map(o => (o.text || '').length);
    const i = (it.options || []).findIndex(o => o.letter === it.correct);
    if (i >= 0) {
      const otras = L.filter((_, j) => j !== i);
      const prom = otras.reduce((a,b)=>a+b,0) / otras.length;
      const r = L[i] / prom;
      if (r > 1.15) errores.push(`${p.id}: la clave sigue ${r.toFixed(2)}x más larga que el promedio (máx 1.15)`);
      if (r < 0.85) errores.push(`${p.id}: la clave quedó ${r.toFixed(2)}x, ahora es sospechosamente CORTA (mín 0.85)`);
    }
  }
  tocados++;
}

if (errores.length) {
  console.error(`\n\x1b[31mPARCHE RECHAZADO — no se escribió nada\x1b[0m`);
  errores.forEach(e => console.error('  ✗ ' + e));
  process.exit(1);
}

const nuevo = src.slice(0, ini) + JSON.stringify(items, null, 2) + src.slice(fin + 1);
fs.writeFileSync(archivo, nuevo, 'utf8');
console.log(`\x1b[32m✓ ${tocados} ítem(s) parcheados en ${archivo}\x1b[0m`);
