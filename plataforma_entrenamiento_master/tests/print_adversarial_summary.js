/**
 * tests/print_adversarial_summary.js
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

const manifest = loadModule('cert_manifest.js').GCP_MANIFEST;
const caseStudies = loadModule('case_studies.js').GCP_CASE_STUDIES;
const cdlQuestions = loadModule('cert_cdl.js').GCP_CDL_QUESTIONS;
const aceQuestions = loadModule('cert_ace.js').GCP_ACE_QUESTIONS;
const pcaQuestions = loadModule('cert_pca.js').GCP_PCA_QUESTIONS;

const allQuestions = [...cdlQuestions, ...aceQuestions, ...pcaQuestions];

console.log('================================================================');
console.log('1. QUESTION COUNTS & UNIQUE IDS');
console.log('================================================================');
console.log(`CDL count: ${cdlQuestions.length}`);
console.log(`ACE count: ${aceQuestions.length}`);
console.log(`PCA count: ${pcaQuestions.length}`);
console.log(`Total questions: ${allQuestions.length}`);

const idSet = new Set(allQuestions.map(q => q.id));
console.log(`Unique Question IDs: ${idSet.size}`);
console.log(`ID Collisions count: ${allQuestions.length - idSet.size}`);

console.log('\n================================================================');
console.log('2. BLOCK SIZES & DISJOINTNESS ($B_i \\cap B_j = \\emptyset$)');
console.log('================================================================');
['cdl', 'ace', 'pca'].forEach(certId => {
  const qs = certId === 'cdl' ? cdlQuestions : certId === 'ace' ? aceQuestions : pcaQuestions;
  const blocks = { 'BLOCK-1': [], 'BLOCK-2': [], 'BLOCK-3': [], 'BLOCK-4': [], 'BLOCK-5': [], 'BLOCK-6': [] };
  qs.forEach(q => { if (blocks[q.blockId]) blocks[q.blockId].push(q); });
  
  console.log(`\nCert: ${certId.toUpperCase()}`);
  for (let b = 1; b <= 6; b++) {
    console.log(`  Block-${b}: ${blocks[`BLOCK-${b}`].length} questions`);
  }
  
  let overlaps = 0;
  for (let i = 1; i <= 6; i++) {
    for (let j = i + 1; j <= 6; j++) {
      const b1 = new Set(blocks[`BLOCK-${i}`].map(q => q.id));
      const b2 = new Set(blocks[`BLOCK-${j}`].map(q => q.id));
      const inter = [...b1].filter(x => b2.has(x));
      if (inter.length > 0) {
        console.log(`  ERROR: Overlap between Block-${i} and Block-${j}: ${inter.length} items (${inter.join(', ')})`);
        overlaps += inter.length;
      }
    }
  }
  if (overlaps === 0) {
    console.log(`  ✔ Disjointness Verified: 100% mutual disjointness across all 6 blocks.`);
  }
});

console.log('\n================================================================');
console.log('3. STRATIFIED DOMAIN DISTRIBUTION ACROSS BLOCKS');
console.log('================================================================');
['cdl', 'ace', 'pca'].forEach(certId => {
  const qs = certId === 'cdl' ? cdlQuestions : certId === 'ace' ? aceQuestions : pcaQuestions;
  const domains = manifest.certifications[certId].domains;
  console.log(`\nCert: ${certId.toUpperCase()} (Total domains: ${Object.keys(domains).length})`);
  console.log('Domain Blueprint Weights vs Block Counts:');
  
  const domainKeys = Object.keys(domains);
  const header = ['Domain', 'Weight%', 'Exp/Blk', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'Total'];
  console.log(header.map(h => h.padEnd(10)).join(' | '));
  console.log('-'.repeat(110));
  
  domainKeys.forEach(dKey => {
    const dMeta = domains[dKey];
    const exp = (50 * (dMeta.weightPercent / 100)).toFixed(1);
    const bCounts = [];
    for (let b = 1; b <= 6; b++) {
      const cnt = qs.filter(q => q.blockId === `BLOCK-${b}` && q.domainId === dKey).length;
      bCounts.push(cnt);
    }
    const tot = qs.filter(q => q.domainId === dKey).length;
    const row = [dKey, `${dMeta.weightPercent}%`, exp, ...bCounts.map(String), String(tot)];
    console.log(row.map((c, i) => i === 0 ? c.padEnd(10) : c.padEnd(10)).join(' | '));
  });
});

console.log('\n================================================================');
console.log('4. CORRECT KEY DISTRIBUTION BALANCE & STATISTICAL METRICS');
console.log('================================================================');
['cdl', 'ace', 'pca'].forEach(certId => {
  const qs = certId === 'cdl' ? cdlQuestions : certId === 'ace' ? aceQuestions : pcaQuestions;
  const single = qs.filter(q => !q.isMultiSelect);
  const multi = qs.filter(q => q.isMultiSelect);
  const keys = { A: 0, B: 0, C: 0, D: 0 };
  
  single.forEach(q => {
    const k = typeof q.correct === 'string' ? q.correct : q.correct[0];
    keys[k] = (keys[k] || 0) + 1;
  });
  
  console.log(`\nCert: ${certId.toUpperCase()}`);
  console.log(`  Single-select: ${single.length}, Multi-select: ${multi.length}`);
  console.log(`  Option counts (Single-select): A=${keys.A} (${(keys.A/single.length*100).toFixed(1)}%), B=${keys.B} (${(keys.B/single.length*100).toFixed(1)}%), C=${keys.C} (${(keys.C/single.length*100).toFixed(1)}%), D=${keys.D} (${(keys.D/single.length*100).toFixed(1)}%)`);
  
  // Chi-Square goodness of fit (df=3, p=0.05 critical value = 7.815)
  const exp = single.length / 4;
  let chi2 = 0;
  ['A', 'B', 'C', 'D'].forEach(k => {
    chi2 += Math.pow(keys[k] - exp, 2) / exp;
  });
  console.log(`  Chi-Squared test statistic: ${chi2.toFixed(3)} (Critical value alpha=0.05 is 7.815 -> ${chi2 < 7.815 ? 'BALANCED & UNPREDICTABLE' : 'POTENTIAL SKEW'})`);
});

console.log('\n================================================================');
console.log('5. MULTI-SELECT INTEGRITY & OPTION VALIDATION');
console.log('================================================================');
let multiSelectTotal = 0;
let multiSelectErrors = 0;
let singleSelectErrors = 0;

allQuestions.forEach(q => {
  if (q.isMultiSelect) {
    multiSelectTotal++;
    if (!Array.isArray(q.correct) || q.correct.length !== q.expectedSelectCount || q.expectedSelectCount < 2) {
      console.log(`  ERROR in Multi-Select [${q.id}]: expectedSelectCount=${q.expectedSelectCount}, correct=${JSON.stringify(q.correct)}`);
      multiSelectErrors++;
    }
  } else {
    if (q.expectedSelectCount !== 1 || (Array.isArray(q.correct) && q.correct.length !== 1)) {
      console.log(`  ERROR in Single-Select [${q.id}]: expectedSelectCount=${q.expectedSelectCount}, correct=${JSON.stringify(q.correct)}`);
      singleSelectErrors++;
    }
  }
});
console.log(`Total multi-select items: ${multiSelectTotal}`);
console.log(`Multi-select errors: ${multiSelectErrors}`);
console.log(`Single-select errors: ${singleSelectErrors}`);

console.log('\n================================================================');
console.log('6. CASE STUDY LINKAGES & METADATA');
console.log('================================================================');
const csKeys = Object.keys(caseStudies);
console.log(`Registered case studies: ${csKeys.join(', ')}`);
['cdl', 'ace', 'pca'].forEach(certId => {
  const qs = certId === 'cdl' ? cdlQuestions : certId === 'ace' ? aceQuestions : pcaQuestions;
  const csBreakdown = {};
  qs.forEach(q => {
    const cs = q.caseStudy || 'none';
    csBreakdown[cs] = (csBreakdown[cs] || 0) + 1;
  });
  console.log(`  ${certId.toUpperCase()} case study breakdown:`, csBreakdown);
});

console.log('\n================================================================');
console.log('7. SCHEMA ENUMERATION & BLOOMS LEVEL ANALYSIS');
console.log('================================================================');
['cdl', 'ace', 'pca'].forEach(certId => {
  const qs = certId === 'cdl' ? cdlQuestions : certId === 'ace' ? aceQuestions : pcaQuestions;
  const blooms = {};
  const diffs = {};
  qs.forEach(q => {
    blooms[q.bloomsLevel] = (blooms[q.bloomsLevel] || 0) + 1;
    diffs[q.difficulty] = (diffs[q.difficulty] || 0) + 1;
  });
  console.log(`  ${certId.toUpperCase()} Blooms taxonomy levels:`, blooms);
  console.log(`  ${certId.toUpperCase()} Difficulty distribution:`, diffs);
});

