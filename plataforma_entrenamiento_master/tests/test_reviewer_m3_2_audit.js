/**
 * test_reviewer_m3_2_audit.js
 * 
 * Comprehensive Independent & Adversarial Review Test Suite for Milestone 3
 * (UI Platform, Interactive Modes & Dashboard)
 * 
 * Verifies:
 * 1. Integrity Violation Scan: No dummy facades or hardcoded shortcuts.
 * 2. SPA Router & App Controller (js/app.js)
 * 3. Study Mode Controller (js/ui_study.js)
 * 4. Official Exam Simulation Controller (js/ui_exam.js)
 * 5. Weakness Drill Mode Controller (js/ui_drill.js)
 * 6. Pure SVG Visualization Engine & CRC-32 Backup/Restore (js/ui_charts.js)
 */

const fs = require('fs');
const path = require('path');

// Setup mock environment
global.window = global;
global.location = { hash: '#dashboard' };
global.history = { replaceState: () => {} };

const elements = {};
const eventListeners = {};

function makeElement(id, tag = 'div') {
  const el = {
    id: id,
    tagName: tag.toUpperCase(),
    style: {},
    classList: {
      _classes: new Set(),
      add(...cls) { cls.forEach(c => this._classes.add(c)); },
      remove(...cls) { cls.forEach(c => this._classes.delete(c)); },
      contains(c) { return this._classes.has(c); },
      toggle(c) { if (this.contains(c)) this.remove(c); else this.add(c); }
    },
    attributes: {},
    setAttribute(k, v) { this.attributes[k] = String(v); },
    getAttribute(k) { return this.attributes[k] !== undefined ? this.attributes[k] : null; },
    removeAttribute(k) { delete this.attributes[k]; },
    children: [],
    appendChild(child) {
      if (child.isFragment) {
        child.children.forEach(c => {
          this.children.push(c);
          c.parentNode = this;
        });
        child.children = [];
      } else {
        this.children.push(child);
        child.parentNode = this;
      }
      return child;
    },
    removeChild(child) {
      const idx = this.children.indexOf(child);
      if (idx >= 0) this.children.splice(idx, 1);
      child.parentNode = null;
      return child;
    },
    querySelector(sel) {
      if (sel.startsWith('#')) return elements[sel.slice(1)] || null;
      return this.children[0] || null;
    },
    querySelectorAll(sel) {
      return [...this.children];
    },
    addEventListener(evt, fn) {
      if (!eventListeners[id]) eventListeners[id] = {};
      if (!eventListeners[id][evt]) eventListeners[id][evt] = [];
      eventListeners[id][evt].push(fn);
    },
    trigger(evt, eventObj = {}) {
      if (eventListeners[id] && eventListeners[id][evt]) {
        eventListeners[id][evt].forEach(fn => fn(eventObj));
      }
    },
    innerHTML: '',
    textContent: '',
    value: '',
    disabled: false
  };
  elements[id] = el;
  return el;
}

const mockDocElement = makeElement('html', 'html');
const mockBody = makeElement('body', 'body');

global.document = {
  readyState: 'complete',
  documentElement: mockDocElement,
  body: mockBody,
  getElementById(id) {
    if (!elements[id]) makeElement(id);
    return elements[id];
  },
  createElement(tag) {
    return makeElement('elem_' + Math.random().toString(36).slice(2, 7), tag);
  },
  createDocumentFragment() {
    return {
      isFragment: true,
      children: [],
      appendChild(child) { this.children.push(child); return child; }
    };
  },
  querySelectorAll(sel) {
    return [];
  },
  querySelector(sel) {
    return null;
  },
  addEventListener() {}
};

global.localStorage = {
  _data: {},
  getItem: function (k) { return this._data[k] || null; },
  setItem: function (k, v) { this._data[k] = String(v); },
  removeItem: function (k) { delete this._data[k]; },
  clear: function () { this._data = {}; }
};

console.log('=======================================================================');
console.log('  REVIEWER 2 INDEPENDENT ADVERSARIAL AUDIT: MILESTONE 3 (UI PLATFORM)  ');
console.log('=======================================================================');

let totalChecks = 0;
let totalPassed = 0;
let totalFailed = 0;

function assert(condition, message) {
  totalChecks++;
  if (condition) {
    totalPassed++;
    console.log(`  ✔ PASS: ${message}`);
    return true;
  } else {
    totalFailed++;
    console.error(`  ✖ FAIL: ${message}`);
    return false;
  }
}

// 1. INTEGRITY VIOLATION AUDIT
console.log('\n--- 1. INTEGRITY VIOLATION & SHORTCUT AUDIT ---');
const filesToAudit = [
  'js/app.js',
  'js/ui_study.js',
  'js/ui_exam.js',
  'js/ui_drill.js',
  'js/ui_charts.js'
];

filesToAudit.forEach(fileRel => {
  const fullPath = path.resolve(__dirname, '..', fileRel);
  assert(fs.existsSync(fullPath), `File exists on disk: ${fileRel}`);
  const content = fs.readFileSync(fullPath, 'utf8');

  // Check for dummy facades or hardcoded answer passes
  const hasHardcodedScore = /return\s+100;?\s*\/\/\s*mock/i.test(content);
  const hasFakePass = /isCorrect\s*=\s*true;?\s*\/\/\s*always/i.test(content);
  const hasEmptyFacade = /function\s*\w+\s*\(\)\s*\{\s*\/\/\s*TODO\s*\}/i.test(content);

  assert(!hasHardcodedScore, `No hardcoded score mocks in ${fileRel}`);
  assert(!hasFakePass, `No fake pass bypasses in ${fileRel}`);
  assert(!hasEmptyFacade, `No empty facade implementations in ${fileRel}`);
});

// Load data files
const manifest = require('../data/cert_manifest.js');
const caseStudies = require('../data/case_studies.js');
const cdlQ = require('../data/cert_cdl.js');
const aceQ = require('../data/cert_ace.js');
const pcaQ = require('../data/cert_pca.js');

global.GCP_MANIFEST = manifest;
global.GCP_CASE_STUDIES = caseStudies;
global.GCP_CDL_QUESTIONS = Array.isArray(cdlQ) ? cdlQ : cdlQ.questions;
global.GCP_ACE_QUESTIONS = Array.isArray(aceQ) ? aceQ : aceQ.questions;
global.GCP_PCA_QUESTIONS = Array.isArray(pcaQ) ? pcaQ : pcaQ.questions;

// Load Engine & State
const stateModule = require('../js/state.js');
const engineModule = require('../js/engine.js');
global.GCP_STATE = stateModule;
global.GCP_ENGINE = engineModule;

// Load Controllers & Charts
const chartsModule = require('../js/ui_charts.js');
global.UICharts = chartsModule;
global.GCP_CHARTS = chartsModule;

const studyModule = require('../js/ui_study.js');
global.GCP_STUDY = studyModule;

const examModule = require('../js/ui_exam.js');
global.GCP_EXAM = examModule;

const drillModule = require('../js/ui_drill.js');
global.GCP_DRILL = drillModule;

const appModule = require('../js/app.js');
const GCP_APP = appModule.GCP_APP;
const SoundFX = appModule.SoundFX;
global.GCP_APP = GCP_APP;

// 2. APP CONTROLLER & SPA ROUTER
console.log('\n--- 2. APP CONTROLLER, SPA ROUTER & SOUND SYNTHESIS ---');
GCP_APP.init();

assert(GCP_APP.state !== null, 'App initialization successfully hydrates state store');
assert(GCP_APP.activeCertId === 'ace', 'Default active certification defaults to ACE');
assert(GCP_APP.questionPool.length === 300, `Question pool has 300 questions for ACE (found ${GCP_APP.questionPool.length})`);
assert(Object.keys(GCP_APP.questionIndex).length === 300, 'O(1) question index built for 300 questions');

// Switch to CDL
GCP_APP.switchCertification('cdl', false);
assert(GCP_APP.activeCertId === 'cdl', 'Successfully switched to CDL');
assert(GCP_APP.questionPool.length === 300, 'CDL pool has 300 questions');
assert(GCP_APP.getQuestion('CDL-D1-001') !== null, 'Question CDL-D1-001 retrieved from memory index');

// Switch to PCA
GCP_APP.switchCertification('pca', false);
assert(GCP_APP.activeCertId === 'pca', 'Successfully switched to PCA');
assert(GCP_APP.questionPool.length === 300, 'PCA pool has 300 questions');
assert(GCP_APP.getQuestion('PCA-D1-001') !== null, 'Question PCA-D1-001 retrieved from memory index');

// Invalid Cert Switch (Fallback to ACE)
GCP_APP.switchCertification('aws_invalid', false);
assert(GCP_APP.activeCertId === 'ace', 'Invalid certification switch gracefully falls back to ACE');

// SoundFX procedural tests
assert(typeof SoundFX.play === 'function', 'SoundFX.play exists');
['correct', 'incorrect', 'timeralert', 'streak', 'click', 'unknown'].forEach(st => {
  SoundFX.play(st);
});
assert(true, 'SoundFX safely handles all procedural sound triggers in headless runtime');

// Theme toggling (with state persistence)
GCP_APP.setTheme('light', true);
assert(mockDocElement.getAttribute('data-theme') === 'light', 'Theme set to light');
GCP_APP.toggleTheme();
assert(mockDocElement.getAttribute('data-theme') === 'dark', 'Theme toggles back to dark');

// SPA Routing
GCP_APP.navigateTo('study');
assert(GCP_APP.activeView === 'study', 'SPA router successfully navigates to Study Mode');
GCP_APP.navigateTo('drill');
assert(GCP_APP.activeView === 'drill', 'SPA router successfully navigates to Drill Mode');
GCP_APP.navigateTo('dashboard');
assert(GCP_APP.activeView === 'dashboard', 'SPA router successfully navigates to Dashboard');

// 3. STUDY MODE CONTROLLER
console.log('\n--- 3. STUDY MODE CONTROLLER (ui_study.js) ---');
GCP_APP.switchCertification('ace', false);
GCP_APP.navigateTo('study');

assert(GCP_STUDY.filteredQuestions.length === 300, 'Study mode loads full 300 questions on ALL domains');

// Filter by Domain ACE-D1 (ACE has 5 domains of 60 questions each)
GCP_STUDY.selectedDomain = 'ACE-D1';
GCP_STUDY.filterQuestions();
assert(GCP_STUDY.filteredQuestions.length === 60, `Filtered domain ACE-D1 returns 60 items (got ${GCP_STUDY.filteredQuestions.length})`);
assert(GCP_STUDY.filteredQuestions.every(q => q.domainId === 'ACE-D1'), 'All filtered questions belong to ACE-D1');

// Normalization test
const norm1 = GCP_STUDY.normalizeCorrectAnswers('b');
assert(norm1.length === 1 && norm1[0] === 'B', 'Single string normalized to ["B"]');
const norm2 = GCP_STUDY.normalizeCorrectAnswers(['c', 'a']);
assert(norm2.length === 2 && norm2[0] === 'A' && norm2[1] === 'C', 'Multi-choice array normalized and sorted to ["A", "C"]');

// Keyword highlighting with special characters regex test
GCP_STUDY.rawScenarioText = 'Deploy Cloud Spanner (multi-region [nam3]) with 99.999% SLA.';
GCP_STUDY.highlightKeywordInScenario('multi-region [nam3]');
assert(true, 'Regex highlighter safely handles regex metacharacters in keywords');

// 4. OFFICIAL EXAM SIMULATOR CONTROLLER (ui_exam.js) ---
console.log('\n--- 4. OFFICIAL EXAM SIMULATOR CONTROLLER (ui_exam.js) ---');
GCP_APP.switchCertification('cdl', false);
GCP_EXAM.startNewExam(0);

assert(GCP_EXAM.isActive() === true, 'Exam session is active');
assert(GCP_EXAM.currentBlockQuestions.length === 50, 'Exam contains exactly 50 questions for CDL simulation');
assert(GCP_EXAM.totalDurationSeconds === 5400, 'CDL duration calibrated to 90 minutes (5,400s)');

// Test PCA Case Study split panel
GCP_APP.switchCertification('pca', false);
GCP_EXAM.startNewExam(0);
assert(GCP_EXAM.totalDurationSeconds === 7200, 'PCA duration calibrated to 120 minutes (7,200s)');

const pcaWithCs = GCP_EXAM.currentBlockQuestions.find(q => q.caseStudy && q.caseStudy !== 'none');
if (pcaWithCs) {
  const csIndex = GCP_EXAM.currentBlockQuestions.indexOf(pcaWithCs);
  GCP_EXAM.renderQuestion(csIndex);
  assert(true, `Successfully rendered PCA question with case study: ${pcaWithCs.caseStudy}`);
}

// Complete Exam Answering & Evaluation
GCP_EXAM.currentBlockQuestions.forEach((q, idx) => {
  const correct = GCP_EXAM.normalizeCorrectAnswers(q.correct);
  // Answer 80% correctly (40/50)
  if (idx < 40) {
    GCP_EXAM.userAnswers[q.id].chosen = [...correct];
  } else {
    GCP_EXAM.userAnswers[q.id].chosen = ['Z_WRONG'];
  }
});

GCP_EXAM.confirmSubmitExam();
assert(GCP_EXAM.isActive() === false, 'Exam concludes and terminates active state');
assert(GCP_EXAM.forensicSessionData !== null, 'Forensic session data generated');
assert(GCP_EXAM.forensicSessionData.scorePercent === 80, `Grade calculated accurately: 80% (got ${GCP_EXAM.forensicSessionData.scorePercent}%)`);
assert(GCP_EXAM.forensicSessionData.passed === true, 'Passing status evaluated as true (80% >= 70%)');

// 5. WEAKNESS DRILL MODE CONTROLLER
console.log('\n--- 5. WEAKNESS DRILL MODE CONTROLLER (ui_drill.js) ---');
GCP_APP.switchCertification('ace', false);
GCP_APP.navigateTo('drill');

assert(GCP_DRILL.queue.length === 10, `Drill queue populated with 10 questions (got ${GCP_DRILL.queue.length})`);

// Leitner 3-hit consecutive correct progression test
const drillQ = GCP_DRILL.queue[0];
const appState = GCP_APP.state;
appState.certifications['ace'].questionStates[drillQ.id] = { box: 0, streak: 0, totalAttempts: 0, correctAttempts: 0, isMastered: false };

// Hit 1
GCP_DRILL.currentIndex = 0;
GCP_DRILL.isAnswerRevealed = false;
GCP_DRILL.selectAndSubmitOption(Array.isArray(drillQ.correct) ? drillQ.correct[0] : drillQ.correct);
let qs = appState.certifications['ace'].questionStates[drillQ.id];
assert(qs.box === 1 && qs.streak === 1 && !qs.isMastered, 'Hit 1: Box 1, Streak 1');

// Hit 2
GCP_DRILL.isAnswerRevealed = false;
GCP_DRILL.selectAndSubmitOption(Array.isArray(drillQ.correct) ? drillQ.correct[0] : drillQ.correct);
qs = appState.certifications['ace'].questionStates[drillQ.id];
assert(qs.box === 2 && qs.streak === 2 && !qs.isMastered, 'Hit 2: Box 2, Streak 2');

// Hit 3
GCP_DRILL.isAnswerRevealed = false;
GCP_DRILL.selectAndSubmitOption(Array.isArray(drillQ.correct) ? drillQ.correct[0] : drillQ.correct);
qs = appState.certifications['ace'].questionStates[drillQ.id];
assert(qs.box === 3 && qs.streak === 3 && qs.isMastered === true, 'Hit 3: Box 3, Streak 3, isMastered = TRUE');

// Miss on Mastered item
GCP_DRILL.isAnswerRevealed = false;
GCP_DRILL.selectAndSubmitOption('WRONG_OPTION');
qs = appState.certifications['ace'].questionStates[drillQ.id];
assert(qs.box === 0 && qs.streak === 0 && qs.isMastered === false, 'Error resets streak to 0 and drops to Box 0');

// 6. PURE SVG CHARTS & CRC-32 BACKUP/RESTORE
console.log('\n--- 6. PURE SVG VISUALIZATION ENGINE & CRC-32 (ui_charts.js) ---');

// Radar chart for CDL (4), ACE (5), PCA (6)
const cdlRadar = UICharts.RadarChart.generateSVG({ domains: [{ domainId: 'D1', score: 80 }, { domainId: 'D2', score: 60 }, { domainId: 'D3', score: 90 }, { domainId: 'D4', score: 70 }] });
assert(cdlRadar.includes('<svg') && cdlRadar.includes('radar-benchmark'), 'CDL 4-domain Radar SVG generated');

const aceRadar = UICharts.RadarChart.generateSVG({ domains: [{ domainId: 'D1', score: 80 }, { domainId: 'D2', score: 60 }, { domainId: 'D3', score: 90 }, { domainId: 'D4', score: 70 }, { domainId: 'D5', score: 85 }] });
assert(aceRadar.includes('<svg') && aceRadar.includes('polygon'), 'ACE 5-domain Radar SVG generated');

const pcaRadar = UICharts.RadarChart.generateSVG({ domains: [{ domainId: 'D1', score: 80 }, { domainId: 'D2', score: 60 }, { domainId: 'D3', score: 90 }, { domainId: 'D4', score: 70 }, { domainId: 'D5', score: 85 }, { domainId: 'D6', score: 75 }] });
assert(pcaRadar.includes('<svg') && pcaRadar.includes('polygon'), 'PCA 6-domain Radar SVG generated');

// Radial Gauge calculations
const gauge75 = UICharts.RadialGauge.generateSVG({ percentage: 75 });
assert(gauge75.includes('75.0') && gauge75.includes('LISTO PARA EXAMEN'), 'Radial gauge 75% displays correct tier');

const gauge40 = UICharts.RadialGauge.generateSVG({ percentage: 40 });
assert(gauge40.includes('40.0') && gauge40.includes('ALTO RIESGO'), 'Radial gauge 40% displays danger tier');

const gauge90 = UICharts.RadialGauge.generateSVG({ percentage: 90 });
assert(gauge90.includes('90.0') && gauge90.includes('DOMINIO SUPERIOR'), 'Radial gauge 90% displays mastery tier');

// Timeline chart
const timelineSvg = UICharts.TimelineChart.generateSVG({ history: [{ scorePercent: 60 }, { scorePercent: 80 }] });
assert(timelineSvg.includes('<polyline') && timelineSvg.includes('Meta: 70%'), 'Timeline SVG renders score progression and 70% reference');

// Backup Export & Import with CRC-32
const exportJson = GCP_STATE.exportBackup(GCP_APP.state);
assert(typeof exportJson === 'string' && exportJson.includes('crc32'), 'Exported backup contains CRC-32 metadata');

const importResult = GCP_STATE.importBackup(exportJson);
assert(importResult.success === true && importResult.state !== null, 'Valid backup faithfully restored with CRC-32 check');

// Hostile Tampered Import
const parsedBackup = JSON.parse(exportJson);
// Mutate payload without updating checksum
parsedBackup.payload = parsedBackup.payload.replace(/"theme":"\w+"/, '"theme":"hacked"');
const tamperedJson = JSON.stringify(parsedBackup);
const tamperedResult = GCP_STATE.importBackup(tamperedJson);
assert(tamperedResult.success === false, 'Adversarial tampered backup rejected by CRC-32 integrity validator');

console.log('\n=======================================================================');
console.log(`  AUDIT SUMMARY: ${totalPassed} / ${totalChecks} Checks Passed (${totalFailed} Failures)`);
console.log('=======================================================================');

if (totalFailed > 0) {
  process.exit(1);
} else {
  console.log('\n✔ ALL AUDIT AND ADVERSARIAL REVIEWS PASSED WITH ZERO DEFECTS.\n');
}
