/**
 * tests/check_text_quality_and_duplicates.js
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

const allQuestions = [...cdlQuestions, ...aceQuestions, ...pcaQuestions];

console.log('--- Checking Scenario & Option Quality ---');
let shortScenarios = 0;
let shortExplanations = 0;
let duplicateScenarios = 0;
let duplicateOptionsInSameQuestion = 0;

const scenarioMap = new Map();

allQuestions.forEach(q => {
  if (q.scenario.length < 50) shortScenarios++;
  if (q.explanation.length < 50) shortExplanations++;

  const normScenario = q.scenario.toLowerCase().trim();
  if (scenarioMap.has(normScenario)) {
    duplicateScenarios++;
    console.log(`Duplicate scenario found between ${scenarioMap.get(normScenario)} and ${q.id}`);
  } else {
    scenarioMap.set(normScenario, q.id);
  }

  const optTexts = new Set(q.options.map(o => o.text.toLowerCase().trim()));
  if (optTexts.size < q.options.length) {
    duplicateOptionsInSameQuestion++;
    console.log(`Duplicate option text within question ${q.id}`);
  }
});

console.log(`Scenarios < 50 chars: ${shortScenarios}`);
console.log(`Explanations < 50 chars: ${shortExplanations}`);
console.log(`Duplicate Scenarios across all 900: ${duplicateScenarios}`);
console.log(`Questions with identical options: ${duplicateOptionsInSameQuestion}`);
