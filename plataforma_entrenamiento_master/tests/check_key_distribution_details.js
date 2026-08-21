/**
 * tests/check_key_distribution_details.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');

function loadModule(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const code = fs.readFileSync(filePath, 'utf8');
  const sandbox = { window: {}, console: console };
  sandbox.global = sandbox.window;
  sandbox.self = sandbox.window;
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename });
  return sandbox.window;
}

const cdlQuestions = loadModule('cert_cdl.js').GCP_CDL_QUESTIONS;
const aceQuestions = loadModule('cert_ace.js').GCP_ACE_QUESTIONS;
const pcaQuestions = loadModule('cert_pca.js').GCP_PCA_QUESTIONS;

console.log('--- CDL Correct Key Distribution ---');
const cdlKeys = {};
cdlQuestions.forEach(q => { cdlKeys[q.correct] = (cdlKeys[q.correct] || 0) + 1; });
console.log(cdlKeys);

console.log('--- ACE Correct Key Distribution ---');
const aceKeys = {};
aceQuestions.forEach(q => { aceKeys[q.correct] = (aceKeys[q.correct] || 0) + 1; });
console.log(aceKeys);

console.log('--- PCA Correct Key Distribution ---');
const pcaKeys = {};
pcaQuestions.forEach(q => { pcaKeys[q.correct] = (pcaKeys[q.correct] || 0) + 1; });
console.log(pcaKeys);

// Check if any question has correct key not in ['A', 'B', 'C', 'D']
const nonStandardCDL = cdlQuestions.filter(q => !['A', 'B', 'C', 'D'].includes(q.correct));
const nonStandardACE = aceQuestions.filter(q => !['A', 'B', 'C', 'D'].includes(q.correct));
const nonStandardPCA = pcaQuestions.filter(q => !['A', 'B', 'C', 'D'].includes(q.correct));

console.log(`Non-standard keys: CDL=${nonStandardCDL.length}, ACE=${nonStandardACE.length}, PCA=${nonStandardPCA.length}`);

// Let's see the few questions in CDL where correct is NOT 'A'
const cdlNotA = cdlQuestions.filter(q => q.correct !== 'A');
console.log('CDL questions where correct !== "A":', cdlNotA.map(q => ({ id: q.id, correct: q.correct })));

// Let's see the few questions in ACE where correct !== 'A'
const aceNotA = aceQuestions.filter(q => q.correct !== 'A');
console.log('ACE questions where correct !== "A":', aceNotA.map(q => ({ id: q.id, correct: q.correct })));

// Let's see the few questions in PCA where correct !== 'B'
const pcaNotB = pcaQuestions.filter(q => q.correct !== 'B');
console.log('PCA questions where correct !== "B":', pcaNotB.map(q => ({ id: q.id, correct: q.correct })));

// Let's check multi-select questions
console.log('Multi-select count:', {
  cdl: cdlQuestions.filter(q => q.isMultiSelect).length,
  ace: aceQuestions.filter(q => q.isMultiSelect).length,
  pca: pcaQuestions.filter(q => q.isMultiSelect).length
});
