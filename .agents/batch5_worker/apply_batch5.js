const fs = require('fs');
const path = require('path');

const certPath = path.resolve(__dirname, '../../plataforma_entrenamiento_master/data/cert_ace.js');
const draftPath = path.resolve(__dirname, '../batch5_explorer/draft_batch5.json');

global.window = {};
require(certPath);
const questions = global.window.GCP_ACE_QUESTIONS;
const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));

console.log('Original count:', questions.length);
console.log('Draft count:', draft.length);

const draftMap = new Map(draft.map(item => [item.id, item]));

let replaced = 0;
for (let i = 0; i < questions.length; i++) {
  const curId = questions[i].id;
  if (draftMap.has(curId)) {
    questions[i] = draftMap.get(curId);
    replaced++;
  }
}

console.log('Replaced items count:', replaced);

if (replaced !== 25) {
  console.error('Error: did not replace exactly 25 items! Replaced:', replaced);
  process.exit(1);
}

if (questions.length !== 300) {
  console.error('Error: questions length is not 300! It is:', questions.length);
  process.exit(1);
}

const itemsFormatted = questions.map(q => JSON.stringify(q, null, 2).split('\n').map(l => '  ' + l).join('\n')).join(',\n');

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
console.log('Successfully updated cert_ace.js');
