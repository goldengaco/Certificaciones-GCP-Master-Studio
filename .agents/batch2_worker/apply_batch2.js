const fs = require('fs');
const path = require('path');

const targetPath = path.resolve('plataforma_entrenamiento_master/data/cert_ace.js');
const draftPath = path.resolve('.agents/batch2_explorer/draft_batch2.json');

global.window = {};
require(targetPath);
const questions = global.window.GCP_ACE_QUESTIONS;

const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));
const draftMap = new Map(draft.map(q => [q.id, q]));

let replaced = 0;
const updatedQuestions = questions.map(q => {
  if (draftMap.has(q.id)) {
    replaced++;
    return draftMap.get(q.id);
  }
  return q;
});

if (replaced !== 25) {
  console.error('ERROR: Expected to replace 25 items, but replaced ' + replaced);
  process.exit(1);
}

if (updatedQuestions.length !== 300) {
  console.error('ERROR: Expected 300 total questions, but got ' + updatedQuestions.length);
  process.exit(1);
}

const fileContent = `(function (global) {
  'use strict';

  const GCP_ACE_QUESTIONS = ` + JSON.stringify(updatedQuestions, null, 2) + `;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCP_ACE_QUESTIONS;
  }
  if (typeof global !== 'undefined') {
    global.GCP_ACE_QUESTIONS = GCP_ACE_QUESTIONS;
  }
})(typeof window !== 'undefined' ? window : global);
`;

fs.writeFileSync(targetPath, fileContent, 'utf8');
console.log('Successfully updated cert_ace.js with Batch 2! Replaced: ' + replaced + ', Total: ' + updatedQuestions.length);
