/**
 * apply_batch6.js — aplica draft_batch6.json (ACE-D3-036..060) sobre cert_ace.js.
 *
 * Mismo metodo que los lotes 1-5: sustitucion por id, sin tocar ningun otro
 * item, y se aborta si no salen exactamente 25 reemplazos y 300 preguntas.
 */
const fs = require('fs');
const path = require('path');

const certPath = path.resolve(__dirname, '../../plataforma_entrenamiento_master/data/cert_ace.js');
const draftPath = path.resolve(__dirname, '../batch7_worker/draft_lote7.json');

global.window = {};
require(certPath);
const questions = global.window.GCP_ACE_QUESTIONS;
const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));

console.log('Preguntas en el banco:', questions.length);
console.log('Items en el borrador :', draft.length);

const draftMap = new Map(draft.map(item => [item.id, item]));
const orden = questions.map(q => q.id);

let replaced = 0;
for (let i = 0; i < questions.length; i++) {
  if (draftMap.has(questions[i].id)) {
    questions[i] = draftMap.get(questions[i].id);
    replaced++;
  }
}

console.log('Items reemplazados   :', replaced);

if (replaced !== 25) {
  console.error('ERROR: no se reemplazaron exactamente 25 items. Fueron:', replaced);
  process.exit(1);
}
if (questions.length !== 300) {
  console.error('ERROR: el banco no tiene 300 preguntas. Tiene:', questions.length);
  process.exit(1);
}
// El orden importa: la rotacion de bloques usa la posicion en el array.
if (questions.map(q => q.id).join() !== orden.join()) {
  console.error('ERROR: se altero el orden de los items.');
  process.exit(1);
}

const itemsFormatted = questions
  .map(q => JSON.stringify(q, null, 2).split('\n').map(l => '  ' + l).join('\n'))
  .join(',\n');

const newContent = `(function (global) {
  'use strict';

  const GCP_ACE_QUESTIONS = [
${itemsFormatted}
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCP_ACE_QUESTIONS;
  }
  if (typeof global !== 'undefined') {
    global.GCP_ACE_QUESTIONS = GCP_ACE_QUESTIONS;
  }
})(typeof window !== 'undefined' ? window : global);
`;

fs.writeFileSync(certPath, newContent, 'utf8');
console.log('cert_ace.js actualizado.');
