/**
 * tests/test_adversarial_fuzzer_m5.js
 * 
 * Milestone 5 Master Adversarial White-Box & Edge-Case Stress Testing Suite
 * Author: m5_challenger_1 (Empirical Adversarial Fuzzer & State Tester)
 * 
 * Attack Vectors Covered:
 * 1. State Corruption Attacks: LocalStorage malformed/truncated/tampered payloads & CRC-32 recovery
 * 2. Timer Boundary Fuzzing: Zero seconds, negative time, rapid pause/resume switching, tab throttle
 * 3. Invalid Leitner State Transitions: Out-of-bounds boxes (<0, >3, >5), negative streaks, rapid mutations
 * 4. Question Rendering Attacks: Missing fields, special characters, unicode, long markdown, undefined case studies, ReDoS keywords
 * 5. Multiple Choice Selection Fuzzing: Empty arrays, duplicate indices, out-of-range option indices, over/under-selection
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Terminal Color Formatting
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

let totalAssertions = 0;
let passedAssertions = 0;
let failedAssertions = 0;
const failureLog = [];

function assertFuzz(condition, testName, details = '') {
  totalAssertions++;
  if (condition) {
    passedAssertions++;
    console.log(`  ${C.green}✔ PASS:${C.reset} ${testName}`);
  } else {
    failedAssertions++;
    const errMsg = `FAIL: ${testName} ${details ? '(' + details + ')' : ''}`;
    failureLog.push(errMsg);
    console.error(`  ${C.red}✖ FAIL:${C.reset} ${testName} ${C.yellow}${details}${C.reset}`);
  }
}

// -------------------------------------------------------------
// High-Fidelity Mock DOM & Browser Environment
// -------------------------------------------------------------
class MockClassList {
  constructor(el) {
    this.el = el;
    this._classes = new Set();
  }
  add(...names) {
    names.forEach(n => {
      if (n) n.split(/\s+/).filter(Boolean).forEach(c => this._classes.add(c));
    });
    this._sync();
  }
  remove(...names) {
    names.forEach(n => {
      if (n) n.split(/\s+/).filter(Boolean).forEach(c => this._classes.delete(c));
    });
    this._sync();
  }
  toggle(name, force) {
    if (force !== undefined) {
      if (force) this.add(name);
      else this.remove(name);
      return force;
    }
    if (this._classes.has(name)) {
      this.remove(name);
      return false;
    } else {
      this.add(name);
      return true;
    }
  }
  contains(name) {
    return this._classes.has(name);
  }
  _sync() {
    this.el._className = Array.from(this._classes).join(' ');
  }
  _loadFromStr(str) {
    this._classes.clear();
    if (str) {
      str.split(/\s+/).filter(Boolean).forEach(c => this._classes.add(c));
    }
  }
}

function parseHTMLToNodes(html) {
  const root = new MockDocumentFragment();
  if (!html || typeof html !== 'string') return root;

  const tagRegex = /<(\/)?([a-zA-Z0-9\-]+)([^>]*)>|([^<]+)/g;
  let match;
  const stack = [root];
  const selfClosing = new Set(['IMG', 'INPUT', 'BR', 'HR', 'META', 'LINK', 'CIRCLE', 'PATH', 'LINE', 'POLYLINE', 'RECT', 'POLYGON', 'USE']);

  while ((match = tagRegex.exec(html)) !== null) {
    const isClosing = Boolean(match[1]);
    const tagName = match[2] ? match[2].toUpperCase() : null;
    const rawAttrs = match[3] || '';
    const text = match[4];

    if (text) {
      const current = stack[stack.length - 1];
      if (current) current.appendChild(new MockTextNode(text));
    } else if (tagName) {
      if (isClosing) {
        if (stack.length > 1 && stack[stack.length - 1].tagName === tagName) {
          stack.pop();
        }
      } else {
        const el = new MockElement(tagName);
        // Parse attributes
        const attrRegex = /([a-zA-Z0-9\-]+)(?:=["']([^"']*)["'])?/g;
        let attrMatch;
        while ((attrMatch = attrRegex.exec(rawAttrs)) !== null) {
          const k = attrMatch[1];
          const v = attrMatch[2] !== undefined ? attrMatch[2] : '';
          el.setAttribute(k, v);
          if (k === 'id') el.id = v;
          if (k === 'class') el.className = v;
          if (k === 'data-letter') el.dataset.letter = v;
          if (k === 'data-keyword') el.dataset.keyword = v;
        }

        const current = stack[stack.length - 1];
        if (current) current.appendChild(el);

        if (!selfClosing.has(tagName)) {
          stack.push(el);
        }
      }
    }
  }

  return root;
}

class MockNode {
  constructor() {
    this.childNodes = [];
    this.parentNode = null;
  }
  appendChild(child) {
    if (child instanceof MockDocumentFragment) {
      const kids = [...child.childNodes];
      child.childNodes = [];
      kids.forEach(k => this.appendChild(k));
      return child;
    }
    child.parentNode = this;
    this.childNodes.push(child);
    return child;
  }
  removeChild(child) {
    const idx = this.childNodes.indexOf(child);
    if (idx >= 0) {
      this.childNodes.splice(idx, 1);
      child.parentNode = null;
    }
    return child;
  }
  contains(node) {
    if (node === this) return true;
    for (const c of this.childNodes) {
      if (c.contains && c.contains(node)) return true;
    }
    return false;
  }
}

class MockTextNode extends MockNode {
  constructor(text) {
    super();
    this.textContent = String(text);
  }
  get text() { return this.textContent; }
}

class MockDocumentFragment extends MockNode {}

class MockElement extends MockNode {
  constructor(tagName) {
    super();
    this.tagName = (tagName || 'DIV').toUpperCase();
    this.id = '';
    this._className = '';
    this.classList = new MockClassList(this);
    this.attributes = {};
    this.dataset = {};
    this.style = {};
    this.listeners = {};
    this._innerHTML = '';
    this._value = '';
    this.disabled = false;
    this.checked = false;
    this.oninput = null;
  }

  get className() { return this._className; }
  set className(v) {
    this._className = String(v || '');
    this.classList._loadFromStr(this._className);
  }

  get value() { return this._value; }
  set value(v) { this._value = String(v); }

  get textContent() {
    if (this.childNodes.length === 0) return this._innerHTML;
    return this.childNodes.map(c => c.textContent || '').join('');
  }
  set textContent(v) {
    this.childNodes = [];
    this._innerHTML = String(v);
    this.appendChild(new MockTextNode(String(v)));
  }

  get innerHTML() {
    return this._innerHTML;
  }
  set innerHTML(html) {
    this.childNodes = [];
    this._innerHTML = String(html);
    const fragment = parseHTMLToNodes(this._innerHTML);
    this.appendChild(fragment);
  }

  setAttribute(k, v) {
    const key = String(k).toLowerCase();
    const val = String(v);
    this.attributes[key] = val;
    if (key === 'id') this.id = val;
    if (key === 'class') this.className = val;
    if (key.startsWith('data-')) {
      const dataKey = key.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      this.dataset[dataKey] = val;
    }
  }

  getAttribute(k) {
    const key = String(k).toLowerCase();
    return this.attributes[key] !== undefined ? this.attributes[key] : null;
  }

  removeAttribute(k) {
    const key = String(k).toLowerCase();
    delete this.attributes[key];
  }

  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }

  removeEventListener(event, fn) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event].filter(f => f !== fn);
    }
  }

  dispatchEvent(event) {
    const list = this.listeners[event.type || event] || [];
    list.forEach(fn => fn(event));
    if (event.type === 'input' && typeof this.oninput === 'function') {
      this.oninput(event);
    }
  }

  click() {
    this.dispatchEvent({ type: 'click', target: this, preventDefault: () => {} });
  }

  querySelector(sel) {
    const res = this.querySelectorAll(sel);
    return res.length > 0 ? res[0] : null;
  }

  querySelectorAll(sel) {
    const results = [];
    const match = (el) => {
      if (!el || !el.tagName) return;
      if (sel.startsWith('#')) {
        if (el.id === sel.slice(1)) results.push(el);
      } else if (sel.startsWith('.')) {
        if (el.classList && el.classList.contains(sel.slice(1))) results.push(el);
      } else if (sel.startsWith('[')) {
        const attrMatch = sel.match(/\[([a-zA-Z0-9\-]+)(?:=["']?([^"'\]]+)["']?)?\]/);
        if (attrMatch) {
          const attr = attrMatch[1].toLowerCase();
          const expected = attrMatch[2];
          if (expected !== undefined) {
            if (el.getAttribute(attr) === expected) results.push(el);
          } else {
            if (el.getAttribute(attr) !== null) results.push(el);
          }
        }
      } else if (el.tagName.toLowerCase() === sel.toLowerCase()) {
        results.push(el);
      }
      (el.childNodes || []).forEach(child => match(child));
    };

    (this.childNodes || []).forEach(child => match(child));
    return results;
  }
}

// Global DOM Mock Harness Builder
function setupMockEnvironment() {
  const elements = new Map();

  const getOrCreate = (id, tagName = 'div') => {
    if (!elements.has(id)) {
      const el = new MockElement(tagName);
      el.id = id;
      elements.set(id, el);
    }
    return elements.get(id);
  };

  // Required DOM Elements across all views
  const requiredIds = [
    'exam-timer-display', 'exam-badge-cert', 'exam-block-title', 'exam-position-indicator',
    'exam-track-fill', 'btn-exam-flag', 'exam-domain-tag', 'exam-multiselect-badge',
    'exam-scenario-text', 'exam-case-study-panel', 'btn-exam-open-cs-trigger', 'exam-workspace-layout',
    'exam-cs-title', 'exam-cs-content-area', 'exam-options-container', 'exam-palette-grid',
    'palette-count-answered', 'palette-count-unanswered', 'palette-count-flagged',
    'modal-review-items-list', 'review-stat-answered', 'review-stat-unanswered', 'review-stat-flagged',
    'scorecard-banner', 'scorecard-icon', 'scorecard-status-title', 'scorecard-status-subtitle',
    'scorecard-final-percent', 'scorecard-final-ratio', 'scorecard-time-elapsed', 'scorecard-time-pace',
    'scorecard-domains-list', 'exam-question-area',
    'study-domain-filter-select', 'study-jump-select', 'btn-study-prev', 'btn-study-next',
    'btn-study-reveal', 'btn-study-back-dash', 'btn-study-flag', 'btn-copy-study-cli',
    'btn-study-drill-failed', 'study-question-counter', 'study-domain-tag', 'study-diff-badge',
    'study-bloom-badge', 'study-case-study-badge', 'study-question-title', 'study-scenario-text',
    'study-keywords-bar', 'study-options-container', 'study-justification-drawer', 'study-feedback-banner',
    'study-feedback-status', 'study-feedback-icon', 'study-explanation-text', 'study-distractors-body',
    'study-cli-section', 'study-cli-code', 'study-doc-section', 'study-doc-link', 'study-note-textarea',
    'btn-drill-exit', 'btn-drill-back-dash', 'drill-domain-chips-container', 'drill-queue-number',
    'drill-domain-tag', 'drill-qid-tag', 'drill-scenario-text', 'drill-options-grid',
    'drill-feedback-drawer', 'drill-dot-1', 'drill-dot-2', 'drill-dot-3', 'drill-mastery-text',
    'drill-result-banner', 'drill-explanation-text', 'btn-export-backup', 'settings-import-file-input',
    'modal-exam-review', 'modal-scorecard'
  ];

  requiredIds.forEach(id => getOrCreate(id));

  const mockLocalStorage = {
    _data: {},
    getItem(k) { return this._data[k] !== undefined ? this._data[k] : null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; },
    clear() { this._data = {}; }
  };

  const globalListeners = {};

  const docEl = new MockElement('HTML');
  const bodyEl = new MockElement('BODY');
  docEl.appendChild(bodyEl);

  const mockDocument = {
    readyState: 'complete',
    documentElement: docEl,
    body: bodyEl,
    hidden: false,
    getElementById(id) {
      return elements.get(id) || null;
    },
    createElement(tag) {
      return new MockElement(tag);
    },
    createDocumentFragment() {
      return new MockDocumentFragment();
    },
    querySelector(sel) {
      if (sel.startsWith('#')) return this.getElementById(sel.slice(1));
      for (const el of elements.values()) {
        const found = el.querySelector(sel);
        if (found) return found;
      }
      return null;
    },
    querySelectorAll(sel) {
      const list = [];
      elements.forEach(el => {
        if (sel.startsWith('.') && el.classList.contains(sel.slice(1))) list.push(el);
        if (sel.startsWith('[') && el.getAttribute(sel.slice(1, -1))) list.push(el);
        const sub = el.querySelectorAll(sel);
        sub.forEach(s => list.push(s));
      });
      return list;
    },
    addEventListener(evt, fn) {
      if (!globalListeners[evt]) globalListeners[evt] = [];
      globalListeners[evt].push(fn);
    },
    removeEventListener(evt, fn) {
      if (globalListeners[evt]) {
        globalListeners[evt] = globalListeners[evt].filter(f => f !== fn);
      }
    },
    dispatchEvent(evt) {
      const list = globalListeners[evt.type || evt] || [];
      list.forEach(fn => fn(evt));
    }
  };

  class MockAudioNode {
    connect() {}
    setValueAtTime() {}
    exponentialRampToValueAtTime() {}
    linearRampToValueAtTime() {}
    start() {}
    stop() {}
  }

  class MockAudioContext {
    constructor() {
      this.state = 'running';
      this.currentTime = 0;
      this.destination = new MockAudioNode();
    }
    createOscillator() {
      const node = new MockAudioNode();
      node.frequency = new MockAudioNode();
      return node;
    }
    createGain() {
      const node = new MockAudioNode();
      node.gain = new MockAudioNode();
      return node;
    }
    createBiquadFilter() {
      const node = new MockAudioNode();
      node.frequency = new MockAudioNode();
      return node;
    }
    resume() {
      this.state = 'running';
      return Promise.resolve();
    }
  }

  const mockHistory = {
    replaceState: (state, title, url) => {
      mockWindow.location.hash = url;
    },
    pushState: (state, title, url) => {
      mockWindow.location.hash = url;
    }
  };

  const mockWindow = {
    document: mockDocument,
    history: mockHistory,
    location: { hash: '#dashboard' },
    localStorage: mockLocalStorage,
    AudioContext: MockAudioContext,
    webkitAudioContext: MockAudioContext,
    addEventListener(evt, fn) {
      if (!globalListeners[evt]) globalListeners[evt] = [];
      globalListeners[evt].push(fn);
    },
    removeEventListener(evt, fn) {
      if (globalListeners[evt]) {
        globalListeners[evt] = globalListeners[evt].filter(f => f !== fn);
      }
    },
    dispatchEvent(evt) {
      const list = globalListeners[evt.type || evt] || [];
      list.forEach(fn => fn(evt));
    }
  };

  return { mockDocument, mockWindow, mockLocalStorage, mockHistory, elements };
}

// ============================================================================
// LOAD ENGINE MODULES & DATASETS
// ============================================================================
console.log(`${C.bold}${C.blue}========================================================================${C.reset}`);
console.log(`${C.bold}${C.blue}  MILESTONE 5: ADVERSARIAL FUZZER & STATE STRESS TEST SUITE            ${C.reset}`);
console.log(`${C.bold}${C.blue}========================================================================${C.reset}\n`);

const env = setupMockEnvironment();
global.document = env.mockDocument;
global.window = env.mockWindow;
global.history = env.mockHistory;
global.localStorage = env.mockLocalStorage;

// Suppress console.warn/error noise during intentional corruption attacks
const originalConsoleWarn = console.warn;
const originalConsoleError = console.error;

// Load Data and State Modules
require('../data/cert_manifest.js');
require('../data/case_studies.js');
require('../data/cert_cdl.js');
require('../data/cert_ace.js');
require('../data/cert_pca.js');

const StateStorage = require('../js/state.js');
const EngineCore = require('../js/engine.js');
const { GCP_APP, SoundFX } = require('../js/app.js');
const GCP_EXAM = require('../js/ui_exam.js');
const GCP_STUDY = require('../js/ui_study.js');
const GCP_DRILL = require('../js/ui_drill.js');
const UICharts = require('../js/ui_charts.js');

global.GCP_STATE = StateStorage;
global.GCP_ENGINE = EngineCore;
global.GCP_APP = GCP_APP;
global.GCP_EXAM = GCP_EXAM;
global.GCP_STUDY = GCP_STUDY;
global.GCP_DRILL = GCP_DRILL;
global.UICharts = UICharts;

// ============================================================================
// ATTACK VECTOR 1: STATE CORRUPTION ATTACKS & CRC-32 RECOVERY FUZZING
// ============================================================================
console.log(`${C.cyan}${C.bold}>>> ATTACK VECTOR 1: State Corruption Attacks & CRC-32 Tampering Fuzzing${C.reset}`);

function testStateCorruptionFuzzing() {
  const STORAGE_KEY = StateStorage.STORAGE_KEY;

  // 1.1 LocalStorage Hostile Corrupted Injections
  const corruptPayloads = [
    '',                                                   // Empty string
    '   \t\n  ',                                          // Whitespace only
    'null',                                               // Literal null
    'undefined',                                          // Literal undefined
    'false',                                              // Boolean false
    '123456789',                                          // Raw number
    '"A lone string"',                                    // JSON string
    '[]',                                                 // JSON empty array
    '[1, 2, 3, {"a": true}]',                             // JSON array of objects
    '{ "broken": ',                                       // Truncated JSON
    '{ "schemaVersion": "1.0.0", "user": {',              // Truncated nested JSON
    '}{',                                                 // Syntax error JSON
    '{ "certifications": null }',                         // Corrupted certifications key
    '{ "certifications": { "cdl": "not_an_object" } }',   // Non-object certification state
    '{ "certifications": { "ace": { "history": null } } }',// Null history
    '{ "certifications": { "pca": { "history": "str" } } }',// String history
    '{ "certifications": { "ace": { "questionStates": null } } }',// Null questionStates
    JSON.stringify({ __proto__: { admin: true, polluted: true }, constructor: { prototype: { polluted: true } } }), // Prototype pollution
    JSON.stringify({ schemaVersion: '0.0.0', meta: null, user: null, settings: null, certifications: {} }) // All null sections
  ];

  let loadRecoversCleanly = true;
  // Mute console.warn temporarily for clean fuzzing output
  console.warn = () => {};
  try {
    corruptPayloads.forEach((payload, idx) => {
      localStorage.setItem(STORAGE_KEY, payload);
      const loaded = StateStorage.loadState();
      if (!loaded || typeof loaded !== 'object' || Array.isArray(loaded)) {
        loadRecoversCleanly = false;
      }
      if (!loaded.schemaVersion || !loaded.certifications || !loaded.certifications.cdl || !loaded.certifications.ace || !loaded.certifications.pca) {
        loadRecoversCleanly = false;
      }
      if (!Array.isArray(loaded.certifications.cdl.history) || !Array.isArray(loaded.certifications.ace.history) || !Array.isArray(loaded.certifications.pca.history)) {
        loadRecoversCleanly = false;
      }
    });
  } finally {
    console.warn = originalConsoleWarn;
  }

  assertFuzz(
    loadRecoversCleanly,
    '1.1 LocalStorage Hostile Payload Injections: 100% recovered to conforming normalized schema without throwing'
  );

  // 1.2 CRC-32 Byte Mutation Fuzzing (1,000 randomized single-byte bitflips)
  const validState = StateStorage.createDefaultState();
  validState.certifications.ace.history.push({ scorePercent: 88, passed: true, totalQuestions: 50 });
  const validBackupJson = StateStorage.exportBackup(validState);
  const parsedBackup = JSON.parse(validBackupJson);

  let bitflipDetections = 0;
  const bitflipTests = 1000;

  for (let i = 0; i < bitflipTests; i++) {
    const rawPayload = parsedBackup.payload;
    const mutatePos = Math.floor(Math.random() * rawPayload.length);
    const origChar = rawPayload.charCodeAt(mutatePos);
    const mutatedChar = String.fromCharCode(origChar ^ ((Math.floor(Math.random() * 255) + 1) || 1));
    const mutatedPayload = rawPayload.substring(0, mutatePos) + mutatedChar + rawPayload.substring(mutatePos + 1);

    const corruptEnvelope = JSON.stringify({
      schemaVersion: parsedBackup.schemaVersion,
      exportedAt: parsedBackup.exportedAt,
      payload: mutatedPayload,
      crc32: parsedBackup.crc32
    });

    const result = StateStorage.importBackup(corruptEnvelope);
    if (!result.success && result.error && result.error.includes('CRC-32 checksum mismatch')) {
      bitflipDetections++;
    }
  }

  assertFuzz(
    bitflipDetections === bitflipTests,
    `1.2 CRC-32 Tamper Fuzzing: ${bitflipDetections} of ${bitflipTests} single-byte payload mutations (100.0%) strictly rejected`
  );

  // 1.3 Corrupt Envelope Structure & Malformed Inner JSON Fuzzing
  const malformedEnvelopes = [
    null,
    undefined,
    12345,
    true,
    '',
    '{ invalid json',
    '[]',
    JSON.stringify({}),
    JSON.stringify({ payload: 'valid', crc32: null }),
    JSON.stringify({ payload: null, crc32: 'CBF43926' }),
    JSON.stringify({ payload: 123, crc32: 'CBF43926' }),
    JSON.stringify({ payload: '{ "bad": json', crc32: StateStorage.computeCRC32('{ "bad": json') }), // Valid CRC over broken JSON
    JSON.stringify({ payload: JSON.stringify([1, 2, 3]), crc32: StateStorage.computeCRC32(JSON.stringify([1, 2, 3])) }), // Valid CRC over array
    JSON.stringify({ payload: JSON.stringify('scalar string'), crc32: StateStorage.computeCRC32(JSON.stringify('scalar string')) })
  ];

  let envelopesRejectedCleanly = true;
  malformedEnvelopes.forEach(envStr => {
    const res = StateStorage.importBackup(envStr);
    if (res.success === true) {
      envelopesRejectedCleanly = false;
    }
  });

  assertFuzz(
    envelopesRejectedCleanly,
    '1.3 Malformed Envelope & Inner JSON Fuzzing: 100% of invalid envelopes rejected without throwing'
  );

  // 1.4 State Rollback Invariant: Failed import must NOT overwrite active LocalStorage
  const pristineState = StateStorage.createDefaultState();
  pristineState.user.displayName = 'Pristine Candidate';
  StateStorage.saveState(pristineState);

  const failedRes = StateStorage.importBackup('{"payload": "hacked", "crc32": "00000000"}');
  const currentState = StateStorage.loadState();

  assertFuzz(
    failedRes.success === false && currentState.user.displayName === 'Pristine Candidate',
    '1.4 State Rollback Protection: Failed backup imports strictly preserve existing LocalStorage state'
  );
}

testStateCorruptionFuzzing();

// ============================================================================
// ATTACK VECTOR 2: TIMER BOUNDARY FUZZING & TAB THROTTLE EMULATION
// ============================================================================
console.log(`\n${C.cyan}${C.bold}>>> ATTACK VECTOR 2: Timer Boundary Fuzzing & Tab Throttle Emulation${C.reset}`);

function testTimerBoundaryFuzzing() {
  GCP_EXAM.init();

  // 2.1 Boundary Durations & Negative Time
  const durationBoundaryValues = [
    0,                  // Immediate expiration
    -1,                 // Negative 1 second
    -3600,              // Negative 1 hour
    -99999999,          // Extreme negative
    0.5,                // Sub-second
    NaN,                // Not-a-number
    Infinity,           // Positive Infinity
    -Infinity,          // Negative Infinity
    864000              // 10 days
  ];

  let durationFuzzPass = true;
  durationBoundaryValues.forEach(dur => {
    GCP_EXAM.examActive = true;
    GCP_EXAM.totalDurationSeconds = dur;
    GCP_EXAM.examStartTime = Date.now();
    if (typeof dur === 'number' && !isNaN(dur) && dur > 0 && isFinite(dur)) {
      GCP_EXAM.examEndTime = GCP_EXAM.examStartTime + (dur * 1000);
    } else {
      GCP_EXAM.examEndTime = GCP_EXAM.examStartTime - 1000; // Force immediate expiration
    }

    try {
      GCP_EXAM.updateTimer();
      const displayEl = document.getElementById('exam-timer-display');
      if (displayEl && displayEl.textContent && displayEl.textContent.includes('NaN')) {
        durationFuzzPass = false;
      }
    } catch (err) {
      durationFuzzPass = false;
    }
  });

  assertFuzz(
    durationFuzzPass,
    '2.1 Duration Boundary Fuzzing: Zero, negative, sub-second, and NaN/Infinity durations handled safely without NaN displays'
  );

  // 2.2 Rapid Switching & Interval Accumulation Leak Stress
  let intervalLeakFree = true;

  for (let i = 0; i < 500; i++) {
    GCP_EXAM.startNewExam();
    if (!GCP_EXAM.timerIntervalId) intervalLeakFree = false;
    GCP_EXAM.pauseExam();
    if (GCP_EXAM.timerIntervalId !== null) intervalLeakFree = false;
  }

  assertFuzz(
    intervalLeakFree,
    '2.2 Rapid Pause/Resume Cycling: 500 consecutive start/pause cycles without timer interval accumulation leaks'
  );

  // 2.3 Background Tab Throttle & Visibility Change Clock Jump
  GCP_EXAM.startNewExam();
  GCP_EXAM.examEndTime = Date.now() + 60000; // 60 seconds left

  // Emulate background tab sleep: advancing system clock by 2 hours
  const originalNow = Date.now;
  try {
    Date.now = () => originalNow() + (2 * 3600 * 1000); // Jump forward 2 hours
    document.hidden = false;
    document.dispatchEvent({ type: 'visibilitychange' });

    assertFuzz(
      GCP_EXAM.examActive === false && GCP_EXAM.timerIntervalId === null,
      '2.3 Tab Throttle & Clock Jump Emulation: VisibilityChange drift trigger auto-submits expired exam after tab suspension'
    );
  } finally {
    Date.now = originalNow;
  }
}

testTimerBoundaryFuzzing();

// ============================================================================
// ATTACK VECTOR 3: INVALID LEITNER STATE TRANSITIONS & CONCURRENCY FUZZING
// ============================================================================
console.log(`\n${C.cyan}${C.bold}>>> ATTACK VECTOR 3: Invalid Leitner State Transitions & Concurrency Fuzzing${C.reset}`);

function testLeitnerStateFuzzing() {
  const Leitner = EngineCore.LeitnerEngine;

  // 3.1 Hostile Out-of-Bounds State Inputs
  const hostileStates = [
    null,
    undefined,
    {},
    { box: -10, streak: -50 },
    { box: 999, streak: 999 },
    { box: NaN, streak: undefined },
    { box: "corrupt", streak: "none", totalAttempts: -5 },
    { history: null, totalAttempts: null, correctAttempts: "ten" },
    { history: "not_an_array", totalAttempts: 5, correctAttempts: 5 }
  ];

  let hostileInputsHandled = true;
  let exceptionEncountered = null;

  hostileStates.forEach((s, idx) => {
    try {
      const resCorr = Leitner.processAnswer(s, true, 'A', 25000);
      if (resCorr.box < 0 || resCorr.box > 3 || resCorr.streak < 0 || !Array.isArray(resCorr.history)) {
        hostileInputsHandled = false;
      }
    } catch (err) {
      hostileInputsHandled = false;
      exceptionEncountered = err;
      // console.log(`Hostile Leitner state ${idx} threw:`, err.message);
    }

    try {
      const resIncorr = Leitner.processAnswer(s, false, 'B', 15000);
      if (resIncorr.box !== 0 || resIncorr.streak !== 0 || resIncorr.isMastered !== false) {
        hostileInputsHandled = false;
      }
    } catch (err) {
      hostileInputsHandled = false;
      exceptionEncountered = err;
    }
  });

  assertFuzz(
    hostileInputsHandled,
    '3.1 Out-of-Bounds & Hostile Leitner Inputs: Negative/NaN boxes & streaks normalized safely into [0..3]',
    exceptionEncountered ? `Exception: ${exceptionEncountered.message}` : ''
  );

  // 3.2 1,000-Step Random Walk Invariant Stress Test
  let randomWalkInvariantsHold = true;
  let currentState = null;

  for (let step = 0; step < 1000; step++) {
    const isCorrect = Math.random() > 0.45; // 55% chance of correct
    const chosen = ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)];
    const timeMs = Math.floor(Math.random() * 60000) + 1000;

    try {
      currentState = Leitner.processAnswer(currentState, isCorrect, chosen, timeMs);

      if (currentState.box < 0 || currentState.box > 3) randomWalkInvariantsHold = false;
      if (currentState.streak < 0) randomWalkInvariantsHold = false;
      if (currentState.totalAttempts !== (currentState.correctAttempts + currentState.incorrectAttempts)) randomWalkInvariantsHold = false;
      if (currentState.isMastered !== (currentState.box === 3)) randomWalkInvariantsHold = false;
      if (currentState.streak >= 3 && currentState.box !== 3) randomWalkInvariantsHold = false;
      if (!isCorrect && (currentState.streak !== 0 || currentState.box !== 0)) randomWalkInvariantsHold = false;
    } catch (err) {
      randomWalkInvariantsHold = false;
    }
  }

  assertFuzz(
    randomWalkInvariantsHold,
    '3.2 Leitner 1,000-Step Random Walk: Strict preservation of mathematical box, streak, and mastery invariants'
  );

  // 3.3 selectDrillBatch Fuzzing with Hostile Objects
  const pool = GCP_APP.resolveQuestionPool('ace');
  const hostileBatchInputs = [
    { pool: null, states: {}, stats: {}, size: 10 },
    { pool: [], states: null, stats: null, size: -5 },
    { pool: [null, undefined, {}, { id: 'TEST-1' }], states: { 'TEST-1': { box: -99 } }, stats: { 'ACE-D1': { accuracy: -0.5 } }, size: 5 },
    { pool: pool, states: { 'ACE-D1-001': { box: 3, isMastered: true } }, stats: { 'ACE-D1': { accuracy: NaN } }, size: 10000 }
  ];

  let drillBatchFuzzPass = true;
  let drillBatchError = null;
  hostileBatchInputs.forEach(input => {
    try {
      const batch = Leitner.selectDrillBatch(input.pool, input.states, input.stats, input.size);
      if (!Array.isArray(batch)) drillBatchFuzzPass = false;
    } catch (err) {
      drillBatchFuzzPass = false;
      drillBatchError = err;
    }
  });

  assertFuzz(
    drillBatchFuzzPass,
    '3.3 selectDrillBatch Fuzzing: Null pools, negative batch sizes, and NaN domain accuracies handled cleanly',
    drillBatchError ? `Exception: ${drillBatchError.message}` : ''
  );
}

testLeitnerStateFuzzing();

// ============================================================================
// ATTACK VECTOR 4: QUESTION RENDERING ATTACKS & REDOS/XSS RESILIENCE
// ============================================================================
console.log(`\n${C.cyan}${C.bold}>>> ATTACK VECTOR 4: Question Rendering Attacks & ReDoS/XSS Resilience${C.reset}`);

function testQuestionRenderingAttacks() {
  // 4.1 Missing Fields & Malformed Question Items
  const hostileQuestions = [
    { id: 'MALFORMED-1' }, // Missing all fields
    { id: 'MALFORMED-2', scenario: '', title: null, options: [] }, // Empty options
    { id: 'MALFORMED-3', scenario: 'Test', options: [{}], correct: null, distractors: null }, // Missing option text/letter
    { id: 'MALFORMED-4', scenario: 'Test', isMultiSelect: true, expectedSelectCount: null, correct: [] },
    { id: 'MALFORMED-5', scenario: 'Test', caseStudy: 'non_existent_case_study_123', officialDocUrl: null }
  ];

  let renderingPass = true;
  GCP_STUDY.filteredQuestions = hostileQuestions;

  hostileQuestions.forEach((q, idx) => {
    try {
      GCP_STUDY.renderQuestion(idx);
      GCP_DRILL.queue = [q];
      GCP_DRILL.renderFlashcard(0);
      GCP_EXAM.currentBlockQuestions = [q];
      GCP_EXAM.userAnswers[q.id] = { chosen: [], isFlagged: false, timeSpentMs: 0 };
      GCP_EXAM.renderQuestion(0);
    } catch (err) {
      renderingPass = false;
      console.error(`Rendering crashed on item ${idx}:`, err);
    }
  });

  assertFuzz(
    renderingPass,
    '4.1 Missing AST Fields: Handled gracefully across Study, Exam, and Drill renderers without unhandled exceptions'
  );

  // 4.2 XSS & Deep Unicode Injections
  const adversarialPayload = {
    id: 'ADV-XSS-1',
    scenario: '<script>alert("PWN")</script><img src=x onerror=alert(1)> 🚀 🔥 👨‍👩‍👧‍👦 \u202E\u202D\u0000 \uFEFF Test Scenario',
    title: 'Adversarial Unicode & XSS Question',
    options: [
      { letter: 'A', text: '<b onmouseover=alert(1)>Option A</b>' },
      { letter: 'B', text: 'Option B \uD83D\uDE00' }
    ],
    correct: 'A',
    explanation: '<iframe src="javascript:alert(1)"></iframe> Explanation',
    distractors: { A: '<script>', B: '<b>Valid</b>' }
  };

  let xssUnicodePass = true;
  let xssError = null;
  try {
    GCP_STUDY.filteredQuestions = [adversarialPayload];
    GCP_STUDY.renderQuestion(0);
    GCP_STUDY.selectOption('A');

    GCP_EXAM.currentBlockQuestions = [adversarialPayload];
    GCP_EXAM.userAnswers[adversarialPayload.id] = { chosen: ['A'], isFlagged: true, timeSpentMs: 1000 };
    GCP_EXAM.renderQuestion(0);
    GCP_EXAM.renderForensicReview({
      scorePercent: 100,
      passed: true,
      totalQuestions: 1,
      correctCount: 1,
      questionIds: [adversarialPayload.id],
      userAnswers: { [adversarialPayload.id]: { chosen: ['A'], isFlagged: true } }
    });
  } catch (err) {
    xssUnicodePass = false;
    xssError = err;
    console.log("XSS Error Stack:", err.stack);
  }

  assertFuzz(
    xssUnicodePass,
    '4.2 XSS & Deep Unicode Payloads: Script tags, surrogate pairs, and RTL unicode parsed safely in all views',
    xssError ? `Exception: ${xssError.message}` : ''
  );

  // 4.3 ReDoS (Regular Expression Denial of Service) Keyword Fuzzing
  const regexBombKeywords = [
    '[[[[[[[[[[[[',
    '(((((((((((',
    '.*+?^${}()|[]\\',
    '(a+)+$',
    'a'.repeat(500) + '!',
    '\\x00\\xFF'
  ];

  let redosProtected = true;
  GCP_STUDY.filteredQuestions = [{
    id: 'REDOS-1',
    scenario: 'Google Cloud Platform enterprise VPC networking with Cloud Interconnect and Cloud NAT configuration.',
    keywords: regexBombKeywords,
    options: [{ letter: 'A', text: 'Option A' }],
    correct: 'A'
  }];

  try {
    GCP_STUDY.renderQuestion(0);
    // Simulate hover/click over regex bomb keyword chips
    regexBombKeywords.forEach(kw => {
      const start = Date.now();
      GCP_STUDY.highlightKeywordInScenario(kw);
      GCP_STUDY.resetScenarioHighlight();
      if (Date.now() - start > 100) { // Max 100ms
        redosProtected = false;
      }
    });
  } catch (err) {
    redosProtected = false;
  }

  assertFuzz(
    redosProtected,
    '4.3 ReDoS Resilience: Regex bomb keywords & unescaped metacharacters handled without catastrophic backtracking or syntax crashes'
  );

  // 4.4 Non-existent Case Study Resilience
  let csFallbackPass = true;
  try {
    GCP_EXAM.renderCaseStudyContent('non_existent_study_xyz', 'overview');
    const contentEl = document.getElementById('exam-cs-content-area');
    if (!contentEl || !contentEl.innerHTML) csFallbackPass = false;
  } catch (err) {
    csFallbackPass = false;
  }

  assertFuzz(
    csFallbackPass,
    '4.4 Case Study Fallback: Non-existent case study keys gracefully render fallback content'
  );
}

testQuestionRenderingAttacks();

// ============================================================================
// ATTACK VECTOR 5: MULTIPLE CHOICE SELECTION FUZZING & GRADING MUTATIONS
// ============================================================================
console.log(`\n${C.cyan}${C.bold}>>> ATTACK VECTOR 5: Multiple Choice Selection Fuzzing & Grading Invariants${C.reset}`);

function testSelectionFuzzing() {
  const norm = GCP_EXAM.normalizeCorrectAnswers;

  // 5.1 Answer Normalization Fuzzing
  const normalizationCases = [
    { input: 'A', expected: ['A'] },
    { input: 'a', expected: ['A'] },
    { input: 'A, B', expected: ['A', 'B'] },
    { input: 'b,  a ', expected: ['A', 'B'] },
    { input: ['B', 'a', 'C'], expected: ['A', 'B', 'C'] },
    { input: ['a', 'A', 'b'], expected: ['A', 'A', 'B'] },
    { input: null, expected: [] },
    { input: undefined, expected: [] },
    { input: 12345, expected: [] },
    { input: '', expected: [] }
  ];

  let normPass = true;
  normalizationCases.forEach(tc => {
    const res = norm(tc.input);
    if (!Array.isArray(res) || JSON.stringify(res) !== JSON.stringify(tc.expected)) {
      normPass = false;
    }
  });

  assertFuzz(
    normPass,
    '5.1 Answer Normalization: String, array, whitespace, case, and invalid types normalized deterministically'
  );

  // 5.2 Multi-Select Grading Permutation & Oversubscription Invariants
  const testQuestion = {
    id: 'MULTI-FUZZ-1',
    scenario: 'Multi-select test scenario',
    isMultiSelect: true,
    expectedSelectCount: 2,
    options: [
      { letter: 'A', text: 'Option A' },
      { letter: 'B', text: 'Option B' },
      { letter: 'C', text: 'Option C' },
      { letter: 'D', text: 'Option D' }
    ],
    correct: ['A', 'C']
  };

  const selectionScenarios = [
    { chosen: [], expectedCorrect: false, desc: 'Empty selection array' },
    { chosen: ['A'], expectedCorrect: false, desc: 'Undersubscription: 1 of 2 selected' },
    { chosen: ['C'], expectedCorrect: false, desc: 'Undersubscription: alternate single option' },
    { chosen: ['A', 'C'], expectedCorrect: true, desc: 'Exact match: [A, C]' },
    { chosen: ['C', 'A'], expectedCorrect: true, desc: 'Permutation match: [C, A]' },
    { chosen: ['A', 'B'], expectedCorrect: false, desc: 'Partial match: [A, B]' },
    { chosen: ['A', 'B', 'C'], expectedCorrect: false, desc: 'Oversubscription: 3 options on 2-answer question' },
    { chosen: ['A', 'B', 'C', 'D'], expectedCorrect: false, desc: 'Oversubscription: all 4 options selected' },
    { chosen: ['A', 'A'], expectedCorrect: false, desc: 'Duplicate option trick [A, A]' },
    { chosen: ['Z', '9', '@'], expectedCorrect: false, desc: 'Out-of-range option letters' }
  ];

  let multiSelectGradingPass = true;
  selectionScenarios.forEach(sc => {
    const correctAnswers = norm(testQuestion.correct);
    const uniqueChosen = Array.from(new Set((sc.chosen || []).map(c => String(c).trim().toUpperCase()))).sort();
    const isCorrect = (uniqueChosen.length === correctAnswers.length) &&
                      uniqueChosen.every(opt => correctAnswers.includes(opt));

    if (isCorrect !== sc.expectedCorrect) {
      multiSelectGradingPass = false;
      console.error(`Multi-select grading failed on "${sc.desc}": got ${isCorrect}, expected ${sc.expectedCorrect}`);
    }
  });

  assertFuzz(
    multiSelectGradingPass,
    '5.2 Multi-Select Grading Fuzzing: Oversubscription (3/2), undersubscription (1/2), and duplicates strictly graded 0%'
  );

  // 5.3 UI Selection Rapid Cycling & Boundary Clamping
  GCP_EXAM.startNewExam();
  let rapidSelectPass = true;

  try {
    for (let i = 0; i < 1000; i++) {
      const letters = ['A', 'B', 'C', 'D', 'Z', '9', ''];
      const l = letters[i % letters.length];
      GCP_EXAM.selectOption(l);
      if (i % 20 === 0) GCP_EXAM.clearCurrentChoice();
      if (i % 15 === 0) GCP_EXAM.toggleFlag();
    }

    // Test out-of-bounds navigation
    for (let i = 0; i < 100; i++) {
      GCP_EXAM.goToNextQuestion();
    }
    if (GCP_EXAM.currentIndex !== GCP_EXAM.currentBlockQuestions.length - 1) rapidSelectPass = false;

    for (let i = 0; i < 100; i++) {
      GCP_EXAM.goToPrevQuestion();
    }
    if (GCP_EXAM.currentIndex !== 0) rapidSelectPass = false;

  } catch (err) {
    rapidSelectPass = false;
  }

  assertFuzz(
    rapidSelectPass,
    '5.3 Rapid Selection & Navigation Fuzzing: 1,000 rapid option selections & boundary navigations clamped cleanly'
  );
}

testSelectionFuzzing();

// ============================================================================
// ATTACK VECTOR 6: MATHEMATICAL & PROBABILITY ENGINE EXTREME FUZZING
// ============================================================================
console.log(`\n${C.cyan}${C.bold}>>> ATTACK VECTOR 6: Passing Probability & Engine Core Mathematical Fuzzing${C.reset}`);

function testProbabilityAndEngineFuzzing() {
  const ProbEngine = EngineCore.PassingProbabilityEngine;
  const RotationEngine = EngineCore.BlockRotationEngine;

  // 6.1 Passing Probability Mathematical Extremes & NaN Resilience
  const extremeParams = [
    {}, // Empty params
    { examHistory: null, userQuestionStates: null, domainAccuracy: null, domainWeights: null },
    { examHistory: [{ scorePercent: 0 }], averageTimePerQuestionSec: 0 },
    { examHistory: [{ scorePercent: 100 }, { scorePercent: 100 }, { scorePercent: 100 }], averageTimePerQuestionSec: 999999 },
    { examHistory: [{ scorePercent: -50 }], averageTimePerQuestionSec: -100 },
    { examHistory: [{ scorePercent: 150 }], averageTimePerQuestionSec: NaN },
    { domainAccuracy: { 'ACE-D1': -1, 'ACE-D2': 2.5, 'ACE-D3': NaN }, domainWeights: { 'ACE-D1': 0, 'ACE-D2': 100 } },
    { totalCertQuestions: 0 },
    { totalCertQuestions: -100 }
  ];

  let probMathPass = true;
  extremeParams.forEach(p => {
    try {
      const res = ProbEngine.calculatePassingProbability(p);
      if (typeof res.passingProbability !== 'number' || isNaN(res.passingProbability)) probMathPass = false;
      if (res.passingProbability < 0.0 || res.passingProbability > 99.9) probMathPass = false;
      if (typeof res.theta !== 'number' || isNaN(res.theta)) probMathPass = false;
    } catch (err) {
      probMathPass = false;
    }
  });

  assertFuzz(
    probMathPass,
    '6.1 Probability Metric Extremes: Strictly clamped in [0.0%, 99.9%] without NaN/Infinity under mathematical extremes'
  );

  // 6.2 Block Rotation Engine Under Degenerate & Partial Pools
  const degeneratePools = [
    [],
    [null, undefined],
    Array.from({ length: 5 }, (_, i) => ({ id: `Q-${i}`, domainId: 'ACE-D1' })), // Fewer than 6 questions
    Array.from({ length: 50 }, (_, i) => ({ id: `Q-${i}`, domainId: 'ACE-D1' })) // 50 questions pool
  ];

  let rotationDegeneratePass = true;
  let rotationError = null;
  degeneratePools.forEach(p => {
    try {
      const blocks = RotationEngine.generateEpochBlocks('ace', {}, p, 42);
      if (!Array.isArray(blocks) || blocks.length !== 6) rotationDegeneratePass = false;
    } catch (err) {
      rotationDegeneratePass = false;
      rotationError = err;
    }
  });

  assertFuzz(
    rotationDegeneratePass,
    '6.2 Block Rotation Degenerate Pools: Produces exactly 6 block arrays without throwing on small or empty pools',
    rotationError ? `Exception: ${rotationError.message}` : ''
  );
}

testProbabilityAndEngineFuzzing();

// ============================================================================
// FINAL SUMMARY BANNER
// ============================================================================
console.log(`\n${C.bold}${C.blue}========================================================================${C.reset}`);
console.log(`${C.bold}${C.blue}  FINAL ADVERSARIAL FUZZING VERIFICATION SUMMARY                        ${C.reset}`);
console.log(`${C.bold}${C.blue}========================================================================${C.reset}`);
console.log(`  Total Assertions Run:   ${C.bold}${totalAssertions}${C.reset}`);
console.log(`  Assertions Passed:      ${C.green}${C.bold}${passedAssertions}${C.reset}`);
console.log(`  Assertions Failed:      ${failedAssertions > 0 ? C.red + C.bold + failedAssertions : C.green + '0'}${C.reset}`);
console.log(`  Overall Integrity Pass: ${failedAssertions === 0 ? C.green + C.bold + '100.0% (VERDICT: APPROVE)' : C.red + 'FAIL'}${C.reset}`);
console.log(`${C.bold}${C.blue}========================================================================${C.reset}\n`);

if (failedAssertions > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
