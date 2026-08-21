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

const aceWin = loadJsInVm('cert_ace.js');
const aceQuestions = aceWin.GCP_ACE_QUESTIONS || aceWin.GCP_QUESTIONS_ACE;

console.log('=== ACE-D1-034 ===');
const q34 = aceQuestions.find(q => q.id === 'ACE-D1-034');
console.log('title:', q34?.title);
console.log('gcloudCommand:', q34?.gcloudCommand);

console.log('\n=== ACE-D1-046 ===');
const q46 = aceQuestions.find(q => q.id === 'ACE-D1-046');
console.log('title:', q46?.title);
console.log('gcloudCommand:', q46?.gcloudCommand);

console.log('\n=== ACE-D3-031 ===');
const q31 = aceQuestions.find(q => q.id === 'ACE-D3-031');
console.log('title:', q31?.title);
console.log('gcloudCommand:', q31?.gcloudCommand);
console.log('Regex test on q31:', /undefined|null|\[TODO\]|<replace>|PLACEHOLDER/i.test(q31?.gcloudCommand));
console.log('Match details:', q31?.gcloudCommand.match(/undefined|null|\[TODO\]|<replace>|PLACEHOLDER/i));
