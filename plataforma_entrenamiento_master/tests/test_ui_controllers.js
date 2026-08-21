/**
 * test_ui_controllers.js
 * 
 * Automated Unit & Integration Test Suite for UI Controllers:
 * - js/app.js (SPA Router, Cert Switcher, Web Audio SoundFX, Theme, Modals/Toasts)
 * - js/ui_study.js (Study Mode, Instant Feedback, Distractor Table, Keywords, Notes, Bookmarks)
 * - js/ui_exam.js (Simulation Mode, High-Precision Drift Timer, 4-State Palette, PCA Case Studies, Scorecard, Forensic Review)
 * - js/ui_drill.js (Weakness Drill Mode, Leitner 3-Hit Mastery, Keyboard Shortcuts, Streak HUD)
 * 
 * Dual Runtime Compatibility: Pure headless Node.js execution without external npm dependencies.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Mock browser globals for Node.js headless environment
global.window = global;
global.document = {
  readyState: 'complete',
  documentElement: {
    setAttribute: (k, v) => {},
    classList: { add: () => {}, remove: () => {} }
  },
  body: {
    classList: { add: () => {}, remove: () => {} },
    appendChild: () => {},
    removeChild: () => {}
  },
  getElementById: (id) => ({
    id: id,
    style: {},
    classList: { add: () => {}, remove: () => {}, contains: () => false },
    setAttribute: () => {},
    getAttribute: () => '',
    removeAttribute: () => {},
    addEventListener: () => {},
    appendChild: () => {},
    querySelectorAll: () => [],
    querySelector: () => null,
    children: [],
    innerHTML: '',
    textContent: ''
  }),
  querySelectorAll: () => [],
  createElement: (tag) => ({
    tagName: tag.toUpperCase(),
    style: {},
    classList: { add: () => {}, remove: () => {}, contains: () => false },
    setAttribute: () => {},
    getAttribute: () => '',
    removeAttribute: () => {},
    addEventListener: () => {},
    appendChild: () => {},
    querySelectorAll: () => [],
    querySelector: () => null,
    children: [],
    innerHTML: '',
    textContent: ''
  }),
  createDocumentFragment: () => ({
    appendChild: () => {}
  }),
  addEventListener: () => {}
};

global.localStorage = {
  _data: {},
  getItem: function (k) { return this._data[k] || null; },
  setItem: function (k, v) { this._data[k] = String(v); },
  removeItem: function (k) { delete this._data[k]; },
  clear: function () { this._data = {}; }
};

global.location = { hash: '' };
global.history = { replaceState: () => {} };

// ANSI Color Helpers
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  bold: '\x1b[1m'
};

let total = 0;
let passed = 0;

function it(desc, fn) {
  total++;
  try {
    fn();
    passed++;
    console.log(`  ${colors.green}✔ PASS:${colors.reset} ${desc}`);
  } catch (err) {
    console.error(`  ${colors.red}✖ FAIL:${colors.reset} ${desc}`);
    console.error(err);
  }
}

console.log(`${colors.bold}${colors.blue}================================================================`);
console.log(`  UI CONTROLLERS TEST SUITE (app.js, ui_study.js, ui_exam.js, ui_drill.js)`);
console.log(`================================================================${colors.reset}\n`);

// Load Data & Engine Modules
const ROOT = path.resolve(__dirname, '..');
require(path.join(ROOT, 'data/cert_manifest.js'));
require(path.join(ROOT, 'data/case_studies.js'));
require(path.join(ROOT, 'data/cert_cdl.js'));
require(path.join(ROOT, 'data/cert_ace.js'));
require(path.join(ROOT, 'data/cert_pca.js'));
require(path.join(ROOT, 'js/engine.js'));
require(path.join(ROOT, 'js/state.js'));

// Load Target Controller Modules
require(path.join(ROOT, 'js/app.js'));
require(path.join(ROOT, 'js/ui_study.js'));
require(path.join(ROOT, 'js/ui_exam.js'));
require(path.join(ROOT, 'js/ui_drill.js'));

// -------------------------------------------------------------
// Suite 1: App Controller & Shell
// -------------------------------------------------------------
console.log(`${colors.bold}--- 1. App Controller & Router (js/app.js) ---${colors.reset}`);

it('GCP_APP & SoundFX modules are properly exported', () => {
  assert(global.GCP_APP, 'GCP_APP must exist in global scope');
  assert(global.SoundFX, 'SoundFX must exist in global scope');
  assert(global.App, 'App alias must exist');
});

it('App initialization loads state and default active cert', () => {
  global.GCP_APP.init();
  assert(global.GCP_APP.state, 'State should be initialized');
  assert.strictEqual(global.GCP_APP.activeCertId, 'ace');
  assert.strictEqual(global.GCP_APP.questionPool.length, 300);
});

it('Certification switching correctly hydrates CDL, ACE, and PCA pools', () => {
  global.GCP_APP.switchCertification('cdl', false);
  assert.strictEqual(global.GCP_APP.activeCertId, 'cdl');
  assert.strictEqual(global.GCP_APP.questionPool.length, 300);
  assert(global.GCP_APP.questionIndex['CDL-D1-001'], 'Index should contain CDL-D1-001');

  global.GCP_APP.switchCertification('pca', false);
  assert.strictEqual(global.GCP_APP.activeCertId, 'pca');
  assert.strictEqual(global.GCP_APP.questionPool.length, 300);
  assert(global.GCP_APP.questionIndex['PCA-D1-001'], 'Index should contain PCA-D1-001');

  global.GCP_APP.switchCertification('ace', false);
  assert.strictEqual(global.GCP_APP.activeCertId, 'ace');
  assert.strictEqual(global.GCP_APP.questionPool.length, 300);
  assert(global.GCP_APP.questionIndex['ACE-D1-001'], 'Index should contain ACE-D1-001');
});

it('SoundFX safely synthesizes sound types without external files', () => {
  const types = ['correct', 'incorrect', 'timerAlert', 'streak', 'click', 'chime', 'buzz', 'alert'];
  types.forEach(t => {
    assert.doesNotThrow(() => global.SoundFX.play(t));
  });
});

it('Theme switching toggles and persists dark / light settings', () => {
  global.GCP_APP.setTheme('light', true);
  assert.strictEqual(global.GCP_APP.state.settings.theme, 'light');
  global.GCP_APP.toggleTheme();
  assert.strictEqual(global.GCP_APP.state.settings.theme, 'dark');
});

it('Toast & Modal interfaces function without errors', () => {
  assert.doesNotThrow(() => global.GCP_APP.showToast('Test Toast', 'info'));
  assert.doesNotThrow(() => global.GCP_APP.openModal('modal-settings'));
  assert.doesNotThrow(() => global.GCP_APP.closeModal('modal-settings'));
});

// -------------------------------------------------------------
// Suite 2: Study Mode Controller
// -------------------------------------------------------------
console.log(`\n${colors.bold}--- 2. Study Mode Controller (js/ui_study.js) ---${colors.reset}`);

it('GCP_STUDY initializes and handles domain filtering', () => {
  assert(global.GCP_STUDY, 'GCP_STUDY must exist');
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_STUDY.onEnterView();
  assert.strictEqual(global.GCP_STUDY.filteredQuestions.length, 300);

  global.GCP_STUDY.selectedDomain = 'ACE-D1';
  global.GCP_STUDY.filterQuestions();
  assert(global.GCP_STUDY.filteredQuestions.length > 0 && global.GCP_STUDY.filteredQuestions.length < 300);
  assert(global.GCP_STUDY.filteredQuestions.every(q => q.domainId === 'ACE-D1'));
});

it('normalizeCorrectAnswers returns sorted uppercase array', () => {
  assert.deepStrictEqual(global.GCP_STUDY.normalizeCorrectAnswers('B'), ['B']);
  assert.deepStrictEqual(global.GCP_STUDY.normalizeCorrectAnswers(['d', 'a']), ['A', 'D']);
  assert.deepStrictEqual(global.GCP_STUDY.normalizeCorrectAnswers('c, a'), ['A', 'C']);
});

it('Study question evaluation updates Leitner state and saves note', () => {
  global.GCP_STUDY.selectedDomain = 'ALL';
  global.GCP_STUDY.filterQuestions();
  const q = global.GCP_STUDY.filteredQuestions[0];
  const correct = global.GCP_STUDY.normalizeCorrectAnswers(q.correct);

  global.GCP_STUDY.renderQuestion(0);
  global.GCP_STUDY.selectOption(correct[0]);
  assert.strictEqual(global.GCP_STUDY.isAnswerSubmitted, true);

  // Check state persistence
  const qState = global.GCP_APP.state.certifications['ace'].questionStates[q.id];
  assert(qState, 'Question state should be created');
  assert.strictEqual(qState.streak, 1);
  assert.strictEqual(qState.box, 1);

  // Save personal note
  global.GCP_STUDY.saveUserNote(q.id, 'Test Note for ACE-D1');
  assert.strictEqual(global.GCP_APP.state.certifications['ace'].questionStates[q.id].userNote, 'Test Note for ACE-D1');

  // Toggle bookmark
  global.GCP_STUDY.toggleBookmark();
  assert.strictEqual(global.GCP_APP.state.certifications['ace'].questionStates[q.id].isBookmarked, true);
});

// -------------------------------------------------------------
// Suite 3: Timed Exam Simulation Controller
// -------------------------------------------------------------
console.log(`\n${colors.bold}--- 3. Official Exam Simulation Controller (js/ui_exam.js) ---${colors.reset}`);

it('GCP_EXAM initializes official simulation session with 50 questions', () => {
  assert(global.GCP_EXAM, 'GCP_EXAM must exist');
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_EXAM.startNewExam(0);
  assert.strictEqual(global.GCP_EXAM.isActive(), true);
  assert.strictEqual(global.GCP_EXAM.currentBlockQuestions.length, 50);
  assert.strictEqual(global.GCP_EXAM.currentIndex, 0);
  assert.strictEqual(global.GCP_EXAM.totalDurationSeconds, 7200);
});

it('CDL exam duration is calibrated to 90 minutes (5,400s)', () => {
  global.GCP_APP.switchCertification('cdl', false);
  global.GCP_EXAM.startNewExam(0);
  assert.strictEqual(global.GCP_EXAM.totalDurationSeconds, 5400);
});

it('Candidate answering and flag toggling updates palette and userAnswers', () => {
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_EXAM.startNewExam(0);

  const q1 = global.GCP_EXAM.currentBlockQuestions[0];
  global.GCP_EXAM.selectOption('C');
  assert.deepStrictEqual(global.GCP_EXAM.userAnswers[q1.id].chosen, ['C']);

  global.GCP_EXAM.toggleFlag();
  assert.strictEqual(global.GCP_EXAM.userAnswers[q1.id].isFlagged, true);
});

it('PCA Case Study questions correctly link to authoritative case studies', () => {
  global.GCP_APP.switchCertification('pca', false);
  global.GCP_EXAM.startNewExam(0);
  const csQuestion = global.GCP_EXAM.currentBlockQuestions.find(q => q.caseStudy && q.caseStudy !== 'none');
  if (csQuestion) {
    const studies = global.GCP_CASE_STUDIES.studies;
    const cleanKey = csQuestion.caseStudy.replace(/-/g, '_').toLowerCase();
    assert(studies[cleanKey], `Case study ${cleanKey} should exist in GCP_CASE_STUDIES`);
  }
});

it('Exam grading calculates score, domain performance, and records session history', () => {
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_EXAM.startNewExam(0);

  // Answer all 50 questions
  global.GCP_EXAM.currentBlockQuestions.forEach((q, idx) => {
    const correct = global.GCP_EXAM.normalizeCorrectAnswers(q.correct);
    // Answer first 40 correctly (80% score), remaining 10 with non-matching option
    if (idx < 40) {
      global.GCP_EXAM.userAnswers[q.id].chosen = [correct[0]];
    } else {
      global.GCP_EXAM.userAnswers[q.id].chosen = ['Z'];
    }
  });

  global.GCP_EXAM.confirmSubmitExam();
  assert.strictEqual(global.GCP_EXAM.isActive(), false);
  assert(global.GCP_EXAM.forensicSessionData);
  assert.strictEqual(global.GCP_EXAM.forensicSessionData.scorePercent, 80);
  assert.strictEqual(global.GCP_EXAM.forensicSessionData.passed, true);
  assert.strictEqual(global.GCP_EXAM.forensicSessionData.correctCount, 40);

  // History appended
  const hist = global.GCP_APP.state.certifications['ace'].history;
  assert(hist.length > 0);
  assert.strictEqual(hist[hist.length - 1].scorePercent, 80);
});

// -------------------------------------------------------------
// Suite 4: Weakness Drill Mode Controller
// -------------------------------------------------------------
console.log(`\n${colors.bold}--- 4. Weakness Drill Mode Controller (js/ui_drill.js) ---${colors.reset}`);

it('GCP_DRILL populates drill queue from Leitner priority', () => {
  assert(global.GCP_DRILL, 'GCP_DRILL must exist');
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_DRILL.onEnterView();
  assert(global.GCP_DRILL.queue.length > 0);
  assert(global.GCP_DRILL.queue.length <= 10);
});

it('Leitner 3-Hit consecutive correct graduates question to Box 3 (Mastered)', () => {
  const q = global.GCP_DRILL.queue[0];
  const correct = Array.isArray(q.correct) ? q.correct[0] : q.correct;

  // Hit 1
  global.GCP_DRILL.selectAndSubmitOption(correct);
  let qState = global.GCP_APP.state.certifications['ace'].questionStates[q.id];
  assert.strictEqual(qState.streak, 1);
  assert.strictEqual(qState.box, 1);

  // Hit 2
  global.GCP_DRILL.isAnswerRevealed = false;
  global.GCP_DRILL.selectAndSubmitOption(correct);
  qState = global.GCP_APP.state.certifications['ace'].questionStates[q.id];
  assert.strictEqual(qState.streak, 2);
  assert.strictEqual(qState.box, 2);

  // Hit 3 -> Mastered!
  global.GCP_DRILL.isAnswerRevealed = false;
  global.GCP_DRILL.selectAndSubmitOption(correct);
  qState = global.GCP_APP.state.certifications['ace'].questionStates[q.id];
  assert.strictEqual(qState.streak, 3);
  assert.strictEqual(qState.box, 3);
  assert.strictEqual(qState.isMastered, true);

  // Mistake on mastered item immediately resets streak to 0 and drops to Box 0
  global.GCP_DRILL.isAnswerRevealed = false;
  global.GCP_DRILL.selectAndSubmitOption('WRONG_KEY');
  qState = global.GCP_APP.state.certifications['ace'].questionStates[q.id];
  assert.strictEqual(qState.streak, 0);
  assert.strictEqual(qState.box, 0);
  assert.strictEqual(qState.isMastered, false);
});

it('Keyboard shortcut event handler dispatches without errors', () => {
  global.GCP_APP.activeView = 'drill';
  global.GCP_DRILL.isAnswerRevealed = false;

  // Simulate pressing 'A'
  assert.doesNotThrow(() => {
    global.GCP_DRILL.handleKeyboardEvent({ key: '1', preventDefault: () => {} });
  });

  // Simulate pressing 'Space' to advance
  assert.doesNotThrow(() => {
    global.GCP_DRILL.handleKeyboardEvent({ key: ' ', preventDefault: () => {} });
  });
});

console.log(`\n${colors.bold}================================================================`);
console.log(`  TEST RESULTS: ${passed} / ${total} Passed (${Math.round((passed / total) * 100)}% Target)`);
console.log(`================================================================${colors.reset}`);

if (passed === total) {
  process.exit(0);
} else {
  process.exit(1);
}
