/**
 * test_domain_alignment.js
 * 
 * Deep check of domain IDs and manifest alignment
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
const cdlWin = loadJsInVm('cert_cdl.js');
const aceWin = loadJsInVm('cert_ace.js');
const pcaWin = loadJsInVm('cert_pca.js');

const manifest = manifestWin.GCP_MANIFEST;
const cdlQuestions = cdlWin.GCP_CDL_QUESTIONS || cdlWin.GCP_QUESTIONS_CDL;
const aceQuestions = aceWin.GCP_ACE_QUESTIONS || aceWin.GCP_QUESTIONS_ACE;
const pcaQuestions = pcaWin.GCP_PCA_QUESTIONS || pcaWin.GCP_QUESTIONS_PCA;

function checkCertDomains(name, certId, questions) {
  console.log(`Checking ${name} domain mappings against manifest...`);
  const certCfg = manifest.certifications[certId];
  if (!certCfg) {
    console.error(`Missing cert config for ${certId}`);
    return;
  }
  const manifestDomains = certCfg.domains;
  const domainMismatch = [];
  const domainCounts = {};

  for (const q of questions) {
    domainCounts[q.domainId] = (domainCounts[q.domainId] || 0) + 1;
    if (!manifestDomains[q.domainId]) {
      domainMismatch.push(`${q.id}: domainId '${q.domainId}' not in manifest`);
    }
  }

  console.log(`  Manifest domains:`, Object.keys(manifestDomains));
  console.log(`  Question bank domains:`, Object.keys(domainCounts));
  console.log(`  Mismatches: ${domainMismatch.length}`);
  if (domainMismatch.length > 0) {
    console.log(`  Samples:`, domainMismatch.slice(0, 5));
  }
}

checkCertDomains('CDL', 'cdl', cdlQuestions);
checkCertDomains('ACE', 'ace', aceQuestions);
checkCertDomains('PCA', 'pca', pcaQuestions);
