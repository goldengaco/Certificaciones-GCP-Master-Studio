/**
 * test_m1_deep_audit.js
 * 
 * Deep Empirical Audit & Statistics Generator for M1 Data Foundation
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');

function loadJsInVm(relPath) {
  const fullPath = path.join(DATA_DIR, relPath);
  const content = fs.readFileSync(fullPath, 'utf8');
  const sandbox = { window: {}, console, module: { exports: {} }, exports: {} };
  sandbox.global = sandbox.window;
  sandbox.self = sandbox.window;
  sandbox.globalThis = sandbox.window;
  const context = vm.createContext(sandbox);
  vm.runInContext(content, context, { filename: fullPath, timeout: 15000 });
  return sandbox.window;
}

const manifestWin = loadJsInVm('cert_manifest.js');
const caseStudiesWin = loadJsInVm('case_studies.js');
const cdlWin = loadJsInVm('cert_cdl.js');
const aceWin = loadJsInVm('cert_ace.js');
const pcaWin = loadJsInVm('cert_pca.js');

const manifest = manifestWin.GCP_MANIFEST;
const caseStudies = caseStudiesWin.GCP_CASE_STUDIES;
const cdlQuestions = cdlWin.GCP_CDL_QUESTIONS || cdlWin.GCP_QUESTIONS_CDL;
const aceQuestions = aceWin.GCP_ACE_QUESTIONS || aceWin.GCP_QUESTIONS_ACE;
const pcaQuestions = pcaWin.GCP_PCA_QUESTIONS || pcaWin.GCP_QUESTIONS_PCA;

const banks = [
  { name: 'CDL', pool: cdlQuestions, certId: 'cdl' },
  { name: 'ACE', pool: aceQuestions, certId: 'ace' },
  { name: 'PCA', pool: pcaQuestions, certId: 'pca' }
];

console.log('=== M1 QUESTION BANK EMPIRICAL METRICS ===\n');

for (const { name, pool, certId } of banks) {
  console.log(`--- ${name} (${pool.length} items) ---`);
  
  let minScenarioLen = Infinity, maxScenarioLen = 0, sumScenarioLen = 0;
  let minExplanationLen = Infinity, maxExplanationLen = 0, sumExplanationLen = 0;
  let minOptLen = Infinity, maxOptLen = 0, sumOptLen = 0, totalOpts = 0;
  let minDistractorLen = Infinity, maxDistractorLen = 0, sumDistractorLen = 0, totalDistractors = 0;
  let trapOptionCount = 0;
  let validTrapTypeCount = 0;
  let missingTrapType = [];
  let domainCounts = {};
  let blockCounts = {};
  let correctDistribution = { A: 0, B: 0, C: 0, D: 0 };
  let titles = new Set();
  let duplicateTitles = [];

  for (const q of pool) {
    // Lengths
    const scLen = (q.scenario || '').trim().length;
    minScenarioLen = Math.min(minScenarioLen, scLen);
    maxScenarioLen = Math.max(maxScenarioLen, scLen);
    sumScenarioLen += scLen;

    const expLen = (q.explanation || '').trim().length;
    minExplanationLen = Math.min(minExplanationLen, expLen);
    maxExplanationLen = Math.max(maxExplanationLen, expLen);
    sumExplanationLen += expLen;

    // Titles
    if (titles.has(q.title)) duplicateTitles.push(q.title);
    titles.add(q.title);

    // Domains & Blocks
    domainCounts[q.domainId] = (domainCounts[q.domainId] || 0) + 1;
    blockCounts[q.blockId] = (blockCounts[q.blockId] || 0) + 1;

    // Answer distribution
    if (correctDistribution[q.correct] !== undefined) {
      correctDistribution[q.correct]++;
    }

    // Options & Traps
    for (const opt of q.options || []) {
      totalOpts++;
      const optLen = (opt.text || '').trim().length;
      minOptLen = Math.min(minOptLen, optLen);
      maxOptLen = Math.max(maxOptLen, optLen);
      sumOptLen += optLen;

      if (opt.isTrap) {
        trapOptionCount++;
        if (opt.trapType && typeof opt.trapType === 'string' && opt.trapType.trim().length > 0) {
          validTrapTypeCount++;
        } else {
          missingTrapType.push(`${q.id} opt ${opt.letter}`);
        }
      }
    }

    // Distractors
    if (q.distractors) {
      for (const [k, txt] of Object.entries(q.distractors)) {
        totalDistractors++;
        const dLen = (txt || '').trim().length;
        minDistractorLen = Math.min(minDistractorLen, dLen);
        maxDistractorLen = Math.max(maxDistractorLen, dLen);
        sumDistractorLen += dLen;
      }
    }
  }

  console.log(`Scenario length: min=${minScenarioLen}, avg=${Math.round(sumScenarioLen / pool.length)}, max=${maxScenarioLen} chars`);
  console.log(`Explanation length: min=${minExplanationLen}, avg=${Math.round(sumExplanationLen / pool.length)}, max=${maxExplanationLen} chars`);
  console.log(`Option text length: min=${minOptLen}, avg=${Math.round(sumOptLen / totalOpts)}, max=${maxOptLen} chars`);
  console.log(`Distractor text length: min=${minDistractorLen}, avg=${Math.round(sumDistractorLen / totalDistractors)}, max=${maxDistractorLen} chars`);
  console.log(`Trap completeness: ${trapOptionCount} total trap options, ${validTrapTypeCount} valid trapType (${missingTrapType.length} missing)`);
  console.log(`Domain breakdown:`, domainCounts);
  console.log(`Block breakdown:`, blockCounts);
  console.log(`Answer key distribution:`, correctDistribution);
  console.log(`Duplicate titles: ${duplicateTitles.length}`);
  console.log('');
}
