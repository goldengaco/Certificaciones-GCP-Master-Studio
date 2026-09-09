const fs = require('fs');
const path = require('path');

const certAcePath = path.resolve(__dirname, '../../plataforma_entrenamiento_master/data/cert_ace.js');
const draftPath = path.resolve(__dirname, '../batch3_explorer/draft_batch3.json');

// 1. Read draft items
const draftItems = JSON.parse(fs.readFileSync(draftPath, 'utf8'));
console.log(`Loaded ${draftItems.length} draft items from draft_batch3.json`);

// 2. Read cert_ace.js
const currentQuestions = require(certAcePath);
console.log(`Currently ${currentQuestions.length} questions in cert_ace.js`);

const draftMap = new Map();
draftItems.forEach(item => {
  draftMap.set(item.id, item);
});

// 3. Replace matching items
let replacedCount = 0;
const newQuestions = currentQuestions.map(q => {
  if (draftMap.has(q.id)) {
    replacedCount++;
    return draftMap.get(q.id);
  }
  return q;
});

console.log(`Replaced ${replacedCount} items in cert_ace.js`);

if (replacedCount !== draftItems.length) {
  console.error(`ERROR: Expected ${draftItems.length} replacements, but got ${replacedCount}`);
  process.exit(1);
}

if (newQuestions.length !== 300) {
  console.error(`ERROR: Total questions count is ${newQuestions.length}, expected 300`);
  process.exit(1);
}

// 4. Serialize to cert_ace.js format
const header = "(function (global) {\n  'use strict';\n\n  const GCP_ACE_QUESTIONS = [\n";
const footer = "\n];\n\n  if (typeof module !== 'undefined' && module.exports) {\n    module.exports = GCP_ACE_QUESTIONS;\n  }\n  if (typeof global !== 'undefined') {\n    global.GCP_ACE_QUESTIONS = GCP_ACE_QUESTIONS;\n  }\n})(typeof window !== 'undefined' ? window : global);\n";

const body = newQuestions.map(q => {
  const jsonStr = JSON.stringify(q, null, 2);
  return jsonStr.split('\n').map(line => '  ' + line).join('\n');
}).join(',\n');

const fullOutput = header + body + footer;

fs.writeFileSync(certAcePath, fullOutput, 'utf8');
console.log(`Successfully wrote ${certAcePath}`);
