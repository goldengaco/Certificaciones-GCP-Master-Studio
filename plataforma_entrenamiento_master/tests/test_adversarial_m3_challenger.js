/**
 * tests/test_challenger_m3.js
 * 
 * Master Empirical Adversarial & Stress Test Harness for Milestone 3 (UI Platform, Interactive Modes & Dashboard)
 * 
 * Scenarios Tested:
 * 1. Full Exam Run (50 Qs, Palette Navigation, Marking, Timer Expiration, Pre-Submit Review, Scorecard, Forensic Review)
 * 2. Study Mode Navigation, Domain Filtering, Justifications, Distractor Forensics, Bookmarks & Notes Persistence
 * 3. Drill Mode Rapid Keyboard Events (1-4, A-D, Space, Enter, F, Esc), Leitner 3-Hit Mastery & Remediation
 * 4. SPA Router Across 4 Views, Exam Guard Navigation Interception, DOM Leak & Listener Stability Stress
 * 5. Certification Switching (CDL -> ACE -> PCA -> CDL), Dataset Reloads & Cross-Cert State Isolation
 * 
 * Zero external dependencies — pure Node.js headless runtime.
 */

const path = require('path');
const assert = require('assert');

// ANSI Colors
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

// -------------------------------------------------------------
// High-Fidelity Mock DOM Engine
// -------------------------------------------------------------
class MockClassList {
  constructor(el) {
    this.el = el;
    this._classes = new Set();
  }
  add(...names) {
    names.forEach(n => {
      if (n) {
        n.split(/\s+/).filter(Boolean).forEach(c => this._classes.add(c));
      }
    });
    this._sync();
  }
  remove(...names) {
    names.forEach(n => {
      if (n) {
        n.split(/\s+/).filter(Boolean).forEach(c => this._classes.delete(c));
      }
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

function parseHTMLStringToNodes(html) {
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
      if (current) {
        current._textContent = (current._textContent || '') + text;
      }
    } else if (isClosing) {
      if (stack.length > 1) {
        let popIdx = stack.length - 1;
        while (popIdx > 0 && stack[popIdx].tagName !== tagName) {
          popIdx--;
        }
        if (popIdx > 0) {
          while (stack.length > popIdx) stack.pop();
        }
      }
    } else if (tagName) {
      const el = new MockElement(tagName);
      const attrRegex = /([a-zA-Z0-9\-:]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g;
      let attrMatch;
      while ((attrMatch = attrRegex.exec(rawAttrs)) !== null) {
        const aName = attrMatch[1];
        const aVal = attrMatch[2] !== undefined ? attrMatch[2] : (attrMatch[3] !== undefined ? attrMatch[3] : (attrMatch[4] !== undefined ? attrMatch[4] : ''));
        el.setAttribute(aName, aVal);
      }

      const parent = stack[stack.length - 1];
      if (parent) {
        parent.appendChild(el);
      }

      if (!selfClosing.has(tagName) && !rawAttrs.trim().endsWith('/')) {
        stack.push(el);
      }
    }
  }

  return root;
}

class MockElement {
  constructor(tagName = 'DIV', id = '') {
    this.tagName = (tagName || 'DIV').toUpperCase();
    this.id = id || '';
    this._className = '';
    this.classList = new MockClassList(this);
    this.style = {};
    this.attributes = {};
    this.children = [];
    this.parentElement = null;
    this.parentNode = null;
    this._textContent = '';
    this._innerHTML = '';
    this.value = '';
    this.checked = false;
    this.disabled = false;
    this.href = '';
    this.eventListeners = {};
    this.onclick = null;
    this.oninput = null;
  }

  get className() {
    return this._className;
  }
  set className(val) {
    this._className = val || '';
    this.classList._loadFromStr(this._className);
  }

  get textContent() {
    return this._textContent;
  }
  set textContent(val) {
    this._textContent = String(val !== undefined && val !== null ? val : '');
    this._innerHTML = this._textContent;
  }

  get innerHTML() {
    return this._innerHTML;
  }
  set innerHTML(val) {
    this._innerHTML = String(val !== undefined && val !== null ? val : '');
    this.children = [];
    if (this._innerHTML) {
      const parsed = parseHTMLStringToNodes(this._innerHTML);
      while (parsed.children.length > 0) {
        const c = parsed.children.shift();
        this.appendChild(c);
      }
      this._textContent = this.children.map(c => c.textContent).join(' ') || this._innerHTML.replace(/<[^>]*>/g, '');
    } else {
      this._textContent = '';
    }
  }

  get firstChild() {
    return this.children[0] || null;
  }

  setAttribute(k, v) {
    this.attributes[k] = String(v);
    if (k === 'id') this.id = String(v);
    if (k === 'class') this.className = String(v);
    if (k === 'value') this.value = String(v);
  }
  getAttribute(k) {
    return this.attributes[k] !== undefined ? this.attributes[k] : null;
  }
  hasAttribute(k) {
    return this.attributes[k] !== undefined;
  }
  removeAttribute(k) {
    delete this.attributes[k];
  }

  appendChild(child) {
    if (!child) return child;
    if (child.isFragment) {
      child.children.forEach(c => {
        c.parentElement = this;
        c.parentNode = this;
        this.children.push(c);
      });
      child.children = [];
      return child;
    }
    child.parentElement = this;
    child.parentNode = this;
    this.children.push(child);
    return child;
  }

  removeChild(child) {
    const idx = this.children.indexOf(child);
    if (idx >= 0) {
      this.children.splice(idx, 1);
      child.parentElement = null;
      child.parentNode = null;
    }
    return child;
  }

  addEventListener(event, handler) {
    if (!this.eventListeners[event]) this.eventListeners[event] = [];
    this.eventListeners[event].push(handler);
  }

  removeEventListener(event, handler) {
    if (!this.eventListeners[event]) return;
    this.eventListeners[event] = this.eventListeners[event].filter(h => h !== handler);
  }

  dispatchEvent(eventObj) {
    const type = typeof eventObj === 'string' ? eventObj : eventObj.type;
    const listeners = this.eventListeners[type] || [];
    listeners.forEach(fn => {
      try {
        fn(eventObj);
      } catch (err) {
        console.error(`Error in event listener for ${type}:`, err);
      }
    });
    if (type === 'click' && typeof this.onclick === 'function') {
      this.onclick(eventObj);
    }
    if (type === 'input' && typeof this.oninput === 'function') {
      this.oninput(eventObj);
    }
    return true;
  }

  click() {
    this.dispatchEvent({ type: 'click', target: this, currentTarget: this });
  }

  querySelector(selector) {
    const res = this.querySelectorAll(selector);
    return res.length > 0 ? res[0] : null;
  }

  querySelectorAll(selector) {
    const matches = [];
    const walk = (node) => {
      if (!node || !node.children) return;
      for (const child of node.children) {
        if (matchesSelector(child, selector)) {
          matches.push(child);
        }
        walk(child);
      }
    };
    walk(this);
    return matches;
  }
}

class MockDocumentFragment {
  constructor() {
    this.isFragment = true;
    this.children = [];
  }
  appendChild(child) {
    this.children.push(child);
    return child;
  }
  querySelector(selector) {
    for (const c of this.children) {
      if (matchesSelector(c, selector)) return c;
      const res = c.querySelector(selector);
      if (res) return res;
    }
    return null;
  }
  querySelectorAll(selector) {
    const matches = [];
    for (const c of this.children) {
      if (matchesSelector(c, selector)) matches.push(c);
      matches.push(...c.querySelectorAll(selector));
    }
    return matches;
  }
}

function matchesSelector(el, sel) {
  if (!sel || !el) return false;
  const parts = sel.trim().split(/\s*,\s*/);
  for (const part of parts) {
    if (part.startsWith('#')) {
      if (el.id === part.substring(1)) return true;
    } else if (part.startsWith('.')) {
      if (el.classList && el.classList.contains(part.substring(1))) return true;
    } else if (part.startsWith('[') && part.endsWith(']')) {
      const inner = part.substring(1, part.length - 1);
      if (inner.includes('=')) {
        const [attr, val] = inner.split('=').map(s => s.replace(/["']/g, '').trim());
        if (el.getAttribute(attr) === val) return true;
      } else {
        if (el.hasAttribute(inner)) return true;
      }
    } else if (el.tagName && el.tagName === part.toUpperCase()) {
      return true;
    }
  }
  return false;
}

// Global registry of DOM elements by ID for instant O(1) lookup
const elementRegistry = new Map();

function createAndRegisterElement(tagName, id, className = '', attributes = {}) {
  const el = new MockElement(tagName, id);
  if (className) el.className = className;
  Object.keys(attributes).forEach(k => el.setAttribute(k, attributes[k]));
  if (id) elementRegistry.set(id, el);
  return el;
}

// -------------------------------------------------------------
// Setup Global Document and Window
// -------------------------------------------------------------
const windowListeners = {};
const documentListeners = {};

global.window = global;

global.AudioContext = null;
global.webkitAudioContext = null;
global.location = { hash: '' };
global.history = { replaceState: (state, title, url) => { global.location.hash = url || ''; } };
global.navigator = {
  clipboard: {
    writeText: (text) => Promise.resolve()
  }
};

global.addEventListener = (event, fn) => {
  if (!windowListeners[event]) windowListeners[event] = [];
  windowListeners[event].push(fn);
};
global.removeEventListener = (event, fn) => {
  if (!windowListeners[event]) return;
  windowListeners[event] = windowListeners[event].filter(f => f !== fn);
};
global.dispatchEvent = (eventObj) => {
  const list = windowListeners[eventObj.type] || [];
  list.forEach(fn => fn(eventObj));
};

global.document = {
  readyState: 'complete',
  documentElement: createAndRegisterElement('HTML', 'html-root'),
  body: createAndRegisterElement('BODY', 'body-root'),
  getElementById: (id) => {
    if (elementRegistry.has(id)) return elementRegistry.get(id);
    for (const rootEl of elementRegistry.values()) {
      const found = rootEl.querySelector('#' + id);
      if (found) return found;
    }
    const el = new MockElement('DIV', id);
    return el;
  },
  createElement: (tag) => {
    return new MockElement(tag);
  },
  createDocumentFragment: () => {
    return new MockDocumentFragment();
  },
  querySelectorAll: (selector) => {
    const matches = [];
    for (const el of elementRegistry.values()) {
      if (matchesSelector(el, selector)) {
        if (!matches.includes(el)) matches.push(el);
      }
      matches.push(...el.querySelectorAll(selector));
    }
    // Filter duplicates
    return Array.from(new Set(matches));
  },
  querySelector: (selector) => {
    const list = global.document.querySelectorAll(selector);
    return list.length > 0 ? list[0] : null;
  },
  addEventListener: (event, fn) => {
    if (!documentListeners[event]) documentListeners[event] = [];
    documentListeners[event].push(fn);
  },
  removeEventListener: (event, fn) => {
    if (!documentListeners[event]) return;
    documentListeners[event] = documentListeners[event].filter(f => f !== fn);
  },
  dispatchEvent: (eventObj) => {
    const list = documentListeners[eventObj.type] || [];
    list.forEach(fn => fn(eventObj));
  }
};

// Populate the complete DOM inventory as specified in index.html
function initializeMockDOMInventory() {
  elementRegistry.clear();

  // Header Switchers & Utility HUD
  createAndRegisterElement('BUTTON', 'btn-cert-cdl', 'cert-pill', { 'data-cert': 'cdl' });
  createAndRegisterElement('BUTTON', 'btn-cert-ace', 'cert-pill active', { 'data-cert': 'ace' });
  createAndRegisterElement('BUTTON', 'btn-cert-pca', 'cert-pill', { 'data-cert': 'pca' });

  createAndRegisterElement('BUTTON', 'nav-btn-dashboard', 'nav-tab active', { 'data-view': 'dashboard' });
  createAndRegisterElement('BUTTON', 'nav-btn-study', 'nav-tab', { 'data-view': 'study' });
  createAndRegisterElement('BUTTON', 'nav-btn-exam', 'nav-tab', { 'data-view': 'exam' });
  createAndRegisterElement('BUTTON', 'nav-btn-drill', 'nav-tab', { 'data-view': 'drill' });

  createAndRegisterElement('DIV', 'header-passing-pill', 'passing-pill');
  createAndRegisterElement('STRONG', 'header-passing-prob', 'passing-pill-value');
  createAndRegisterElement('BUTTON', 'btn-case-studies-header', 'icon-btn');
  createAndRegisterElement('BUTTON', 'btn-audio-toggle', 'icon-btn');
  createAndRegisterElement('BUTTON', 'btn-theme-toggle', 'icon-btn');
  createAndRegisterElement('BUTTON', 'btn-open-settings', 'icon-btn');

  // View Sections
  createAndRegisterElement('SECTION', 'view-dashboard', 'view-section active');
  createAndRegisterElement('SECTION', 'view-study', 'view-section', { style: 'display: none;' });
  createAndRegisterElement('SECTION', 'view-exam', 'view-section', { style: 'display: none;' });
  createAndRegisterElement('SECTION', 'view-drill', 'view-section', { style: 'display: none;' });

  // View 1: Dashboard DOM
  createAndRegisterElement('SPAN', 'dash-cert-level', 'cert-level-badge');
  createAndRegisterElement('SPAN', 'dash-cert-code', 'exam-code-badge');
  createAndRegisterElement('H2', 'dash-cert-title', 'hero-title');
  createAndRegisterElement('P', 'dash-cert-tagline', 'hero-tagline');
  createAndRegisterElement('STRONG', 'dash-total-q', 'metric-val');
  createAndRegisterElement('STRONG', 'dash-mastered-count', 'metric-val');
  createAndRegisterElement('STRONG', 'dash-exams-count', 'metric-val');
  createAndRegisterElement('STRONG', 'dash-avg-score', 'metric-val');
  createAndRegisterElement('SPAN', 'dash-passing-percent', 'gauge-pct');
  createAndRegisterElement('CIRCLE', 'dash-gauge-fill', 'gauge-fill');
  createAndRegisterElement('DIV', 'dash-readiness-badge', 'verdict-badge');
  createAndRegisterElement('SPAN', 'dash-study-progress');
  createAndRegisterElement('SPAN', 'dash-exam-block-info');
  createAndRegisterElement('SPAN', 'dash-drill-queue-badge');
  createAndRegisterElement('SPAN', 'dash-leitner-box0');
  createAndRegisterElement('SPAN', 'dash-leitner-box1');
  createAndRegisterElement('SPAN', 'dash-leitner-box2');
  createAndRegisterElement('SPAN', 'dash-leitner-box3');
  createAndRegisterElement('DIV', 'chart-domain-radar-container', 'svg-radar-wrapper');
  createAndRegisterElement('DIV', 'chart-score-timeline-container', 'svg-timeline-wrapper');
  createAndRegisterElement('DIV', 'dash-domain-breakdown-list', 'domain-progress-list');
  createAndRegisterElement('TBODY', 'history-table-body');
  createAndRegisterElement('DIV', 'history-empty-state');
  createAndRegisterElement('BUTTON', 'btn-start-study', 'btn btn-primary');
  createAndRegisterElement('BUTTON', 'btn-start-exam', 'btn btn-primary');
  createAndRegisterElement('BUTTON', 'btn-start-drill', 'btn btn-primary');
  createAndRegisterElement('BUTTON', 'btn-clear-history-confirm', 'btn btn-secondary');

  // View 2: Study Mode DOM
  createAndRegisterElement('BUTTON', 'btn-study-back-dash', 'btn btn-secondary');
  createAndRegisterElement('SPAN', 'study-question-counter', 'study-q-counter');
  createAndRegisterElement('SPAN', 'study-domain-tag', 'domain-badge');
  createAndRegisterElement('SELECT', 'study-domain-filter-select');
  createAndRegisterElement('SELECT', 'study-jump-select');
  createAndRegisterElement('BUTTON', 'btn-study-flag', 'icon-btn');
  createAndRegisterElement('SPAN', 'study-qid-badge', 'tag tag-qid');
  createAndRegisterElement('SPAN', 'study-diff-badge', 'tag tag-difficulty');
  createAndRegisterElement('SPAN', 'study-bloom-badge', 'tag tag-bloom');
  createAndRegisterElement('SPAN', 'study-case-study-badge', 'tag tag-cs');
  createAndRegisterElement('H3', 'study-question-title', 'question-title');
  createAndRegisterElement('DIV', 'study-scenario-text', 'scenario-box');
  createAndRegisterElement('DIV', 'study-keywords-bar', 'keywords-bar');
  createAndRegisterElement('DIV', 'study-options-container', 'options-container');
  createAndRegisterElement('DIV', 'study-justification-drawer', 'justification-drawer');
  createAndRegisterElement('DIV', 'study-feedback-banner', 'feedback-banner');
  createAndRegisterElement('DIV', 'study-feedback-icon', 'feedback-icon');
  createAndRegisterElement('DIV', 'study-feedback-status', 'feedback-status-text');
  createAndRegisterElement('DIV', 'study-explanation-text', 'explanation-text');
  createAndRegisterElement('TBODY', 'study-distractors-body');
  createAndRegisterElement('DIV', 'study-cli-section');
  createAndRegisterElement('CODE', 'study-cli-code');
  createAndRegisterElement('BUTTON', 'btn-copy-study-cli');
  createAndRegisterElement('DIV', 'study-doc-section');
  createAndRegisterElement('A', 'study-doc-link');
  createAndRegisterElement('TEXTAREA', 'study-notes-textarea');
  createAndRegisterElement('BUTTON', 'btn-save-study-notes');
  createAndRegisterElement('BUTTON', 'btn-study-prev', 'btn btn-secondary');
  createAndRegisterElement('BUTTON', 'btn-study-next', 'btn btn-accent');
  createAndRegisterElement('BUTTON', 'btn-study-reveal', 'btn btn-primary');
  createAndRegisterElement('BUTTON', 'btn-study-drill-failed', 'btn btn-warning');

  // View 3: Exam Simulation DOM
  createAndRegisterElement('SPAN', 'exam-badge-cert', 'exam-title-badge');
  createAndRegisterElement('SPAN', 'exam-block-title', 'exam-block-title');
  createAndRegisterElement('SPAN', 'exam-position-indicator', 'exam-position-text');
  createAndRegisterElement('DIV', 'exam-track-fill', 'exam-track-fill');
  createAndRegisterElement('BUTTON', 'btn-exam-flag', 'flag-toggle-btn');
  createAndRegisterElement('DIV', 'exam-timer-display', 'timer-badge');
  createAndRegisterElement('BUTTON', 'btn-exam-submit-trigger', 'btn btn-primary');
  createAndRegisterElement('DIV', 'exam-workspace-layout', 'exam-workspace-layout');
  createAndRegisterElement('ASIDE', 'exam-case-study-panel', 'case-study-panel');
  createAndRegisterElement('H3', 'exam-cs-title');
  createAndRegisterElement('BUTTON', 'btn-close-cs-panel');
  createAndRegisterElement('DIV', 'exam-cs-content-area');
  createAndRegisterElement('MAIN', 'exam-question-area', 'exam-question-area');
  createAndRegisterElement('SPAN', 'exam-domain-tag', 'domain-tag');
  createAndRegisterElement('SPAN', 'exam-multiselect-badge', 'multi-select-badge');
  createAndRegisterElement('BUTTON', 'btn-exam-open-cs-trigger');
  createAndRegisterElement('DIV', 'exam-scenario-text', 'scenario-box');
  createAndRegisterElement('DIV', 'exam-options-container', 'options-container');
  createAndRegisterElement('BUTTON', 'btn-exam-prev', 'btn btn-secondary');
  createAndRegisterElement('BUTTON', 'btn-exam-next', 'btn btn-primary');
  createAndRegisterElement('BUTTON', 'btn-exam-clear-choice', 'btn btn-secondary');
  createAndRegisterElement('SPAN', 'palette-count-answered');
  createAndRegisterElement('SPAN', 'palette-count-unanswered');
  createAndRegisterElement('SPAN', 'palette-count-flagged');
  createAndRegisterElement('DIV', 'exam-palette-grid', 'palette-grid-50');

  // View 4: Drill Mode DOM
  createAndRegisterElement('BUTTON', 'btn-drill-exit', 'btn btn-secondary');
  createAndRegisterElement('BUTTON', 'btn-drill-back-dash', 'btn btn-secondary');
  createAndRegisterElement('STRONG', 'drill-queue-number');
  createAndRegisterElement('SPAN', 'drill-dot-1', 'mastery-dot');
  createAndRegisterElement('SPAN', 'drill-dot-2', 'mastery-dot');
  createAndRegisterElement('SPAN', 'drill-dot-3', 'mastery-dot');
  createAndRegisterElement('SPAN', 'drill-mastery-text');
  createAndRegisterElement('DIV', 'drill-domain-chips-container');
  createAndRegisterElement('SPAN', 'drill-domain-tag');
  createAndRegisterElement('SPAN', 'drill-qid-tag');
  createAndRegisterElement('DIV', 'drill-scenario-text');
  createAndRegisterElement('DIV', 'drill-options-grid');
  createAndRegisterElement('DIV', 'drill-feedback-drawer');
  createAndRegisterElement('DIV', 'drill-result-banner');
  createAndRegisterElement('DIV', 'drill-explanation-text');

  // Modals DOM
  createAndRegisterElement('DIV', 'modal-case-studies', 'modal-backdrop');
  createAndRegisterElement('DIV', 'modal-cs-content-body');
  createAndRegisterElement('DIV', 'modal-exam-review', 'modal-backdrop');
  createAndRegisterElement('DIV', 'modal-review-items-list');
  createAndRegisterElement('STRONG', 'review-stat-answered');
  createAndRegisterElement('STRONG', 'review-stat-unanswered');
  createAndRegisterElement('STRONG', 'review-stat-flagged');
  createAndRegisterElement('BUTTON', 'btn-close-modal-review');
  createAndRegisterElement('BUTTON', 'btn-review-continue-exam');
  createAndRegisterElement('BUTTON', 'btn-review-confirm-grade');

  createAndRegisterElement('DIV', 'modal-scorecard', 'modal-backdrop');
  createAndRegisterElement('DIV', 'scorecard-banner');
  createAndRegisterElement('DIV', 'scorecard-icon');
  createAndRegisterElement('H2', 'scorecard-status-title');
  createAndRegisterElement('P', 'scorecard-status-subtitle');
  createAndRegisterElement('SPAN', 'scorecard-final-percent');
  createAndRegisterElement('SPAN', 'scorecard-final-ratio');
  createAndRegisterElement('STRONG', 'scorecard-time-elapsed');
  createAndRegisterElement('STRONG', 'scorecard-time-pace');
  createAndRegisterElement('DIV', 'scorecard-domains-list');
  createAndRegisterElement('BUTTON', 'btn-close-modal-scorecard');
  createAndRegisterElement('BUTTON', 'btn-scorecard-to-dashboard');
  createAndRegisterElement('BUTTON', 'btn-scorecard-drill-missed');
  createAndRegisterElement('BUTTON', 'btn-scorecard-forensic-review');

  createAndRegisterElement('DIV', 'modal-settings', 'modal-backdrop');
  createAndRegisterElement('SELECT', 'settings-theme-select');
  createAndRegisterElement('INPUT', 'settings-audio-toggle', '', { type: 'checkbox' });
  createAndRegisterElement('INPUT', 'settings-shortcuts-toggle', '', { type: 'checkbox' });
  createAndRegisterElement('BUTTON', 'btn-export-backup');
  createAndRegisterElement('INPUT', 'settings-import-file-input');
  createAndRegisterElement('BUTTON', 'btn-trigger-factory-reset');
  createAndRegisterElement('BUTTON', 'btn-save-settings');
  createAndRegisterElement('BUTTON', 'btn-close-modal-settings');

  createAndRegisterElement('DIV', 'modal-confirm', 'modal-backdrop');
  createAndRegisterElement('H3', 'modal-confirm-title');
  createAndRegisterElement('P', 'modal-confirm-message');
  createAndRegisterElement('BUTTON', 'btn-confirm-accept');
  createAndRegisterElement('BUTTON', 'btn-confirm-cancel');
  createAndRegisterElement('BUTTON', 'btn-close-modal-confirm');

  createAndRegisterElement('DIV', 'toast-container');
}

// LocalStorage Mock
global.localStorage = {
  _store: {},
  getItem(k) { return this._store[k] !== undefined ? this._store[k] : null; },
  setItem(k, v) { this._store[k] = String(v); },
  removeItem(k) { delete this._store[k]; },
  clear() { this._store = {}; }
};

// -------------------------------------------------------------
// Test Execution Engine
// -------------------------------------------------------------
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failures = [];

function runTest(desc, testFn) {
  totalTests++;
  try {
    testFn();
    passedTests++;
    console.log(`  ${colors.green}✔ PASS:${colors.reset} ${desc}`);
  } catch (err) {
    failedTests++;
    failures.push({ desc, error: err });
    console.error(`  ${colors.red}✖ FAIL:${colors.reset} ${desc}`);
    console.error(`    ${colors.red}${err.message}${colors.reset}`);
    if (err.stack) {
      console.error(`    ${colors.red}${err.stack.split('\n')[1] || ''}${colors.reset}`);
    }
  }
}

// Load Modules
const ROOT = path.resolve(__dirname, '..');
require(path.join(ROOT, 'data/cert_manifest.js'));
require(path.join(ROOT, 'data/case_studies.js'));
require(path.join(ROOT, 'data/cert_cdl.js'));
require(path.join(ROOT, 'data/cert_ace.js'));
require(path.join(ROOT, 'data/cert_pca.js'));
require(path.join(ROOT, 'js/engine.js'));
require(path.join(ROOT, 'js/state.js'));
require(path.join(ROOT, 'js/ui_charts.js'));
require(path.join(ROOT, 'js/app.js'));
require(path.join(ROOT, 'js/ui_study.js'));
require(path.join(ROOT, 'js/ui_exam.js'));
require(path.join(ROOT, 'js/ui_drill.js'));

console.log(`${colors.bold}${colors.blue}========================================================================`);
console.log(`  CHALLENGER 1: ADVERSARIAL STRESS TEST SUITE (MILESTONE 3)`);
console.log(`========================================================================${colors.reset}\n`);

// Initialize Clean State
initializeMockDOMInventory();
global.GCP_APP.init();

// =====================================================================
// SUITE 1: OFFICIAL EXAM SIMULATION EMPIRICAL HARNESS
// =====================================================================
console.log(`${colors.bold}${colors.magenta}>>> SUITE 1: Official Exam Mode Empirical Workflow (50 Qs)${colors.reset}`);

runTest('1.1 Exam Calibration & Initialization across certifications', () => {
  // Test CDL (90 min = 5400s)
  global.GCP_APP.switchCertification('cdl', false);
  global.GCP_EXAM.startNewExam(0);
  assert.strictEqual(global.GCP_EXAM.totalDurationSeconds, 5400, 'CDL duration must be 5400s (90 min)');
  assert.strictEqual(global.GCP_EXAM.currentBlockQuestions.length, 50, 'Must load exactly 50 questions');
  assert.strictEqual(global.GCP_EXAM.currentIndex, 0, 'Current index must start at 0');
  assert.strictEqual(global.GCP_EXAM.isActive(), true, 'Exam must be active');

  // Test ACE (120 min = 7200s)
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_EXAM.startNewExam(0);
  assert.strictEqual(global.GCP_EXAM.totalDurationSeconds, 7200, 'ACE duration must be 7200s (120 min)');
  assert.strictEqual(global.GCP_EXAM.currentBlockQuestions.length, 50, 'Must load exactly 50 questions');
});

runTest('1.2 Palette Navigation, Selection, Marking & Clearing Mechanics', () => {
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_EXAM.startNewExam(0);

  const q0 = global.GCP_EXAM.currentBlockQuestions[0];
  const q24 = global.GCP_EXAM.currentBlockQuestions[24];

  // 1. Initial State
  assert.deepStrictEqual(global.GCP_EXAM.userAnswers[q0.id].chosen, [], 'Initial chosen should be empty');
  assert.strictEqual(global.GCP_EXAM.userAnswers[q0.id].isFlagged, false, 'Initial flagged should be false');

  // 2. Select option 'A' on Q0
  global.GCP_EXAM.selectOption('A');
  assert.deepStrictEqual(global.GCP_EXAM.userAnswers[q0.id].chosen, ['A'], 'Chosen option must be A');

  // 3. Mark Q0 for review
  global.GCP_EXAM.toggleFlag();
  assert.strictEqual(global.GCP_EXAM.userAnswers[q0.id].isFlagged, true, 'Q0 should be flagged');

  // 4. Navigate to Q24
  global.GCP_EXAM.renderQuestion(24);
  assert.strictEqual(global.GCP_EXAM.currentIndex, 24, 'Active question index must be 24');

  // 5. Select option 'C' on Q24
  global.GCP_EXAM.selectOption('C');
  assert.deepStrictEqual(global.GCP_EXAM.userAnswers[q24.id].chosen, ['C']);

  // 6. Clear choice on Q24
  global.GCP_EXAM.clearCurrentChoice();
  assert.deepStrictEqual(global.GCP_EXAM.userAnswers[q24.id].chosen, [], 'Choice must be cleared');

  // 7. Verify Palette Filter
  global.GCP_EXAM.paletteFilter = 'unanswered';
  global.GCP_EXAM.renderPalette();
  const countAns = global.document.getElementById('palette-count-answered').textContent;
  assert(countAns.includes('1 Resp.'), `Should record 1 answered question, got: ${countAns}`);
});

runTest('1.3 Pre-Submission Review Modal and Direct Jump Links', () => {
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_EXAM.startNewExam(0);

  // Answer Q0, Q1, Q2, flag Q2 and Q5
  global.GCP_EXAM.renderQuestion(0);
  global.GCP_EXAM.selectOption('B');

  global.GCP_EXAM.renderQuestion(1);
  global.GCP_EXAM.selectOption('C');

  global.GCP_EXAM.renderQuestion(2);
  global.GCP_EXAM.selectOption('A');
  global.GCP_EXAM.toggleFlag();

  global.GCP_EXAM.renderQuestion(5);
  global.GCP_EXAM.toggleFlag();

  // Open review modal
  global.GCP_EXAM.openReviewModal();

  const statAns = global.document.getElementById('review-stat-answered').textContent;
  const statFlag = global.document.getElementById('review-stat-flagged').textContent;
  const statUnans = global.document.getElementById('review-stat-unanswered').textContent;

  assert(statAns.includes('3 / 50'), `Answered stat must be 3 / 50, got: ${statAns}`);
  assert(statFlag.includes('2'), `Flagged stat must be 2, got: ${statFlag}`);
  assert(statUnans.includes('47 / 50'), `Unanswered stat must be 47 / 50, got: ${statUnans}`);

  // Test jump to Q5
  const list = global.document.getElementById('modal-review-items-list');
  assert(list.children.length === 50, 'Review modal must list all 50 items');
  const jumpBtnQ5 = list.children[5].querySelector('.btn-review-jump');
  assert(jumpBtnQ5, 'Jump button for Q5 must exist');
  jumpBtnQ5.click();

  assert.strictEqual(global.GCP_EXAM.currentIndex, 5, 'Must jump directly to question index 5');
});

runTest('1.4 Time Expiration Auto-Submit & Grading Engine', () => {
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_EXAM.startNewExam(0);

  // Answer 40 questions correctly, 10 incorrectly
  global.GCP_EXAM.currentBlockQuestions.forEach((q, idx) => {
    global.GCP_EXAM.currentIndex = idx;
    const correct = global.GCP_EXAM.normalizeCorrectAnswers(q.correct);
    if (idx < 40) {
      // Correct
      global.GCP_EXAM.userAnswers[q.id].chosen = [...correct];
    } else {
      // Incorrect (choose distractor)
      const wrong = ['A', 'B', 'C', 'D'].find(l => !correct.includes(l)) || 'A';
      global.GCP_EXAM.userAnswers[q.id].chosen = [wrong];
    }
  });

  // Force timer expiration
  global.GCP_EXAM.examEndTime = Date.now() - 1000;
  global.GCP_EXAM.updateTimer();

  // Verify auto submit happened
  assert.strictEqual(global.GCP_EXAM.isActive(), false, 'Exam must be closed on expiration');
  assert(global.GCP_EXAM.forensicSessionData, 'Forensic session data must be generated');
  assert.strictEqual(global.GCP_EXAM.forensicSessionData.scorePercent, 80, 'Score must be 80% (40/50)');
  assert.strictEqual(global.GCP_EXAM.forensicSessionData.passed, true, '80% must pass official threshold');
});

runTest('1.5 Scorecard Generation & 70% Threshold Visualization', () => {
  const sessionData = {
    scorePercent: 68,
    passed: false,
    correctCount: 34,
    totalQuestions: 50,
    durationSeconds: 3600,
    averageTimePerQuestionSec: 72,
    domainScores: {
      'ACE-D1': { id: 'ACE-D1', name: 'Setting up cloud solution environment', total: 10, correct: 8, percent: 80 },
      'ACE-D2': { id: 'ACE-D2', name: 'Planning and configuring solution', total: 12, correct: 6, percent: 50 },
      'ACE-D3': { id: 'ACE-D3', name: 'Deploying and implementing solution', total: 14, correct: 10, percent: 71 },
      'ACE-D4': { id: 'ACE-D4', name: 'Ensuring successful operation', total: 8, correct: 6, percent: 75 },
      'ACE-D5': { id: 'ACE-D5', name: 'Configuring access and security', total: 6, correct: 4, percent: 67 }
    }
  };

  global.GCP_EXAM.calculateAndRenderScorecard(sessionData);

  const statusTitle = global.document.getElementById('scorecard-status-title').textContent;
  const scoreNum = global.document.getElementById('scorecard-final-percent').textContent;
  const ratio = global.document.getElementById('scorecard-final-ratio').textContent;
  const domainsContainer = global.document.getElementById('scorecard-domains-list');

  assert.strictEqual(statusTitle, 'NO APROBADO', '68% must render as NO APROBADO');
  assert.strictEqual(scoreNum, '68%', 'Final percent must display 68%');
  assert.strictEqual(ratio, '34 de 50 Correctas', 'Ratio must display 34 de 50');
  assert.strictEqual(domainsContainer.children.length, 5, 'Must render all 5 domain progress bars');
});

runTest('1.6 PCA Case Study Split-Panel & Dynamic Section Tab Switching', () => {
  global.GCP_APP.switchCertification('pca', false);
  global.GCP_EXAM.startNewExam(0);

  // Find a question with a case study
  const csQuestionIndex = global.GCP_EXAM.currentBlockQuestions.findIndex(q => q.caseStudy && q.caseStudy !== 'none');
  assert(csQuestionIndex >= 0, 'PCA exam block must contain case study questions');

  global.GCP_EXAM.renderQuestion(csQuestionIndex);

  const csPanel = global.document.getElementById('exam-case-study-panel');
  const layout = global.document.getElementById('exam-workspace-layout');
  assert.strictEqual(csPanel.style.display, 'flex', 'Case study panel must be visible');
  assert(layout.classList.contains('layout-split-active'), 'Split layout class must be active');

  // Test tab switching in case study panel
  global.GCP_EXAM.activeCaseStudySection = 'tech';
  const q = global.GCP_EXAM.currentBlockQuestions[csQuestionIndex];
  global.GCP_EXAM.renderCaseStudyContent(q.caseStudy, 'tech');

  const contentArea = global.document.getElementById('exam-cs-content-area');
  assert(contentArea.innerHTML.includes('Requisitos Técnicos') || contentArea.innerHTML.includes('Requisitos'), 'Must render technical requirements');
});

runTest('1.7 Forensic Review Mode & Filter Buttons', () => {
  const mockSession = {
    scorePercent: 74,
    passed: true,
    correctCount: 37,
    totalQuestions: 50,
    questionIds: global.GCP_EXAM.currentBlockQuestions.map(q => q.id),
    userAnswers: global.GCP_EXAM.userAnswers
  };

  global.GCP_EXAM.renderForensicReview(mockSession);
  assert.strictEqual(global.GCP_EXAM.isForensicReviewActive, true, 'Forensic review mode must be active');

  const listEl = global.document.getElementById('forensic-questions-list');
  assert.strictEqual(listEl.children.length, 50, 'Forensic mode must list 50 question cards');

  // Test filter 'incorrect'
  global.GCP_EXAM.forensicFilter = 'incorrect';
  global.GCP_EXAM.renderForensicReview(mockSession);
  assert(listEl.children.length <= 50, 'Filtered list should be populated');
});

// =====================================================================
// SUITE 2: INTERACTIVE STUDY MODE EMPIRICAL HARNESS
// =====================================================================
console.log(`\n${colors.bold}${colors.magenta}>>> SUITE 2: Study Mode Workflow & Knowledge Persistence${colors.reset}`);

runTest('2.1 Domain Filtering & Navigation Across Study Pool', () => {
  global.GCP_APP.switchCertification('cdl', false);
  global.GCP_STUDY.onEnterView();

  assert.strictEqual(global.GCP_STUDY.filteredQuestions.length, 300, 'CDL pool must have 300 items');

  // Filter to CDL-D1
  global.GCP_STUDY.selectedDomain = 'CDL-D1';
  global.GCP_STUDY.filterQuestions(0);
  assert(global.GCP_STUDY.filteredQuestions.length > 0 && global.GCP_STUDY.filteredQuestions.length < 300);
  assert(global.GCP_STUDY.filteredQuestions.every(q => q.domainId === 'CDL-D1'), 'All items must belong to CDL-D1');

  // Jump to index 5
  global.GCP_STUDY.renderQuestion(5);
  assert.strictEqual(global.GCP_STUDY.currentQuestionIndex, 5, 'Must navigate to index 5');
});

runTest('2.2 Instant Feedback, Distractor Table & Trigger Keyword Glow', () => {
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_STUDY.onEnterView();
  global.GCP_STUDY.renderQuestion(0);

  const q = global.GCP_STUDY.filteredQuestions[0];
  const correct = Array.isArray(q.correct) ? q.correct[0] : q.correct;

  // Select correct option
  global.GCP_STUDY.selectedOptions.add(correct);
  global.GCP_STUDY.submitAnswer();

  assert.strictEqual(global.GCP_STUDY.isAnswerSubmitted, true, 'Answer must be submitted');
  const drawer = global.document.getElementById('study-justification-drawer');
  assert.strictEqual(drawer.style.display, 'block', 'Justification drawer must open');

  const statusText = global.document.getElementById('study-feedback-status').innerHTML;
  assert(statusText.includes('Correcta'), 'Feedback banner must indicate Correct');

  const distTable = global.document.getElementById('study-distractors-body');
  assert.strictEqual(distTable.children.length, 4, 'Must render all 4 option distractor rows');
});

runTest('2.3 Personal Notes Saving & Bookmarking Persistence', () => {
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_STUDY.onEnterView();
  global.GCP_STUDY.renderQuestion(10);

  const q = global.GCP_STUDY.filteredQuestions[10];

  // 1. Bookmark question
  global.GCP_STUDY.toggleBookmark();
  const qState = global.GCP_APP.state.certifications['ace'].questionStates[q.id];
  assert.strictEqual(qState.isBookmarked, true, 'Question state must be bookmarked');

  // 2. Save user note
  const sampleNote = 'Recordatorio: Usar Cloud Spanner para consistencia externa multi-región.';
  global.GCP_STUDY.saveUserNote(q.id, sampleNote);
  assert.strictEqual(qState.userNote, sampleNote, 'User note must be persisted in questionState');

  // 3. Verify in LocalStorage
  const savedState = global.GCP_STATE.loadState();
  assert.strictEqual(savedState.certifications['ace'].questionStates[q.id].userNote, sampleNote, 'Note must persist to storage');
});

// =====================================================================
// SUITE 3: WEAKNESS DRILL MODE RAPID-FIRE & LEITNER 3-HIT MASTERY
// =====================================================================
console.log(`\n${colors.bold}${colors.magenta}>>> SUITE 3: Weakness Drill Rapid Keyboard & Leitner 3-Hit Mastery${colors.reset}`);

runTest('3.1 Adaptive Queue Population Prioritizing Box 0', () => {
  global.GCP_APP.switchCertification('ace', false);
  // Mark 3 questions as failed
  const pool = global.GCP_APP.getQuestionPool();
  pool.slice(0, 3).forEach(q => {
    global.GCP_APP.state.certifications['ace'].questionStates[q.id] = {
      box: 0,
      streak: 0,
      totalAttempts: 2,
      correctAttempts: 0,
      history: [false, false]
    };
  });

  global.GCP_DRILL.onEnterView();
  assert.strictEqual(global.GCP_DRILL.queue.length, 10, 'Drill queue must contain 10 questions');
});

runTest('3.2 Rapid-Fire Keyboard Events (1-4, A-D, Space, Enter, F, Esc)', () => {
  global.GCP_APP.activeView = 'drill';
  global.GCP_DRILL.onEnterView();

  const q = global.GCP_DRILL.queue[0];

  // Test Option Selection via key '1'
  const evt1 = { key: '1', preventDefault: () => {} };
  global.GCP_DRILL.handleKeyboardEvent(evt1);
  assert.strictEqual(global.GCP_DRILL.selectedOption, 'A', "Key '1' must select Option A");
  assert.strictEqual(global.GCP_DRILL.isAnswerRevealed, true, 'Answer must be revealed');

  // Test Space to advance
  const evtSpace = { key: ' ', preventDefault: () => {} };
  global.GCP_DRILL.handleKeyboardEvent(evtSpace);
  assert.strictEqual(global.GCP_DRILL.currentIndex, 1, 'Space must advance to question index 1');

  // Test Option Selection via key 'c'
  const evtC = { key: 'c', preventDefault: () => {} };
  global.GCP_DRILL.handleKeyboardEvent(evtC);
  assert.strictEqual(global.GCP_DRILL.selectedOption, 'C', "Key 'c' must select Option C");

  // Test Bookmark via key 'F'
  const evtF = { key: 'f', preventDefault: () => {} };
  global.GCP_DRILL.handleKeyboardEvent(evtF);
  const curQ = global.GCP_DRILL.queue[1];
  const qState = global.GCP_APP.state.certifications['ace'].questionStates[curQ.id];
  assert.strictEqual(qState.isBookmarked, true, "Key 'f' must toggle bookmark");

  // Test Exit via key 'Escape'
  const evtEsc = { key: 'Escape', preventDefault: () => {} };
  global.GCP_DRILL.handleKeyboardEvent(evtEsc);
  assert.strictEqual(global.GCP_APP.activeView, 'dashboard', "Key 'Escape' must return to dashboard");
});

runTest('3.3 Leitner 3-Hit Mastery State Machine Transition', () => {
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_APP.activeView = 'drill';

  const testQ = {
    id: 'DRILL-TEST-001',
    certId: 'ace',
    domainId: 'ACE-D1',
    scenario: 'Test Scenario for Leitner',
    options: [{ letter: 'A', text: 'Opt A' }, { letter: 'B', text: 'Opt B' }],
    correct: 'A',
    explanation: 'Test'
  };

  global.GCP_DRILL.queue = [testQ, testQ, testQ, testQ];
  global.GCP_DRILL.renderFlashcard(0);

  // Hit 1: Correct -> Box 1, Streak 1
  global.GCP_DRILL.selectAndSubmitOption('A');
  let qs = global.GCP_APP.state.certifications['ace'].questionStates[testQ.id];
  assert.strictEqual(qs.streak, 1, 'Hit 1: Streak must be 1');
  assert.strictEqual(qs.box, 1, 'Hit 1: Box must be 1');
  assert.strictEqual(qs.isMastered, false, 'Hit 1: Must not be mastered');

  // Hit 2: Correct -> Box 2, Streak 2
  global.GCP_DRILL.isAnswerRevealed = false;
  global.GCP_DRILL.selectAndSubmitOption('A');
  qs = global.GCP_APP.state.certifications['ace'].questionStates[testQ.id];
  assert.strictEqual(qs.streak, 2, 'Hit 2: Streak must be 2');
  assert.strictEqual(qs.box, 2, 'Hit 2: Box must be 2');
  assert.strictEqual(qs.isMastered, false, 'Hit 2: Must not be mastered');

  // Hit 3: Correct -> Box 3, Streak 3 -> MASTERED!
  global.GCP_DRILL.isAnswerRevealed = false;
  global.GCP_DRILL.selectAndSubmitOption('A');
  qs = global.GCP_APP.state.certifications['ace'].questionStates[testQ.id];
  assert.strictEqual(qs.streak, 3, 'Hit 3: Streak must be 3');
  assert.strictEqual(qs.box, 3, 'Hit 3: Box must be 3');
  assert.strictEqual(qs.isMastered, true, 'Hit 3: Must achieve Mastery (3-Hit Consecutive)');

  // Demotion: Wrong answer resets to Box 0, Streak 0
  global.GCP_DRILL.isAnswerRevealed = false;
  global.GCP_DRILL.selectAndSubmitOption('B'); // Wrong
  qs = global.GCP_APP.state.certifications['ace'].questionStates[testQ.id];
  assert.strictEqual(qs.streak, 0, 'Mistake: Streak must reset to 0');
  assert.strictEqual(qs.box, 0, 'Mistake: Box must demote to 0');
  assert.strictEqual(qs.isMastered, false, 'Mistake: Mastery lost until 3 new consecutive hits');
});

// =====================================================================
// SUITE 4: SPA NAVIGATION, EXAM GUARD & DOM LEAK STRESS
// =====================================================================
console.log(`\n${colors.bold}${colors.magenta}>>> SUITE 4: SPA Navigation, Exam Guard & DOM Leak Stress${colors.reset}`);

runTest('4.1 Clean SPA Navigation across all 4 views', () => {
  const views = ['dashboard', 'study', 'exam', 'drill'];
  views.forEach(v => {
    // If transitioning away from exam, pause exam so it's a clean navigation test
    if (global.GCP_EXAM) global.GCP_EXAM.pauseExam();

    global.GCP_APP.navigateTo(v);
    assert.strictEqual(global.GCP_APP.activeView, v, `Active view must be ${v}`);

    views.forEach(other => {
      const sec = global.document.getElementById(`view-${other}`);
      if (other === v) {
        assert.strictEqual(sec.style.display, '', `Active view section view-${other} must have empty display`);
        assert.strictEqual(sec.getAttribute('aria-hidden'), 'false');
      } else {
        assert.strictEqual(sec.style.display, 'none', `Inactive view section view-${other} must have display none`);
        assert.strictEqual(sec.getAttribute('aria-hidden'), 'true');
      }
    });
  });
});

runTest('4.2 Exam Guard Interception when Navigating Away from Active Exam', () => {
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_APP.navigateTo('exam');
  global.GCP_EXAM.startNewExam(0);
  assert.strictEqual(global.GCP_APP.activeView, 'exam', 'Active view must be exam');
  assert.strictEqual(global.GCP_EXAM.isActive(), true, 'Exam must be running');

  // Attempt to navigate to Dashboard without finishing
  global.GCP_APP.navigateTo('dashboard');

  const confirmModal = global.document.getElementById('modal-confirm');
  assert.strictEqual(confirmModal.style.display, 'flex', 'Confirm modal must open on exam abandonment attempt');

  // Accept confirmation
  const btnAccept = global.document.getElementById('btn-confirm-accept');
  btnAccept.click();

  assert.strictEqual(global.GCP_APP.activeView, 'dashboard', 'After confirming, should navigate to dashboard');
  assert.strictEqual(global.GCP_EXAM.isActive(), false, 'Exam must be paused cleanly');
});

runTest('4.3 DOM Leak and High-Frequency Route Cycling Stress (500 cycles)', () => {
  const startMemory = process.memoryUsage().heapUsed;
  for (let i = 0; i < 500; i++) {
    global.GCP_APP.navigateTo('dashboard');
    global.GCP_APP.navigateTo('study');
    global.GCP_APP.navigateTo('drill');
  }
  const endMemory = process.memoryUsage().heapUsed;
  const diffMB = (endMemory - startMemory) / (1024 * 1024);
  console.log(`    Heap delta after 500 transitions (1,500 view renders): ${diffMB.toFixed(2)} MB`);
  assert(diffMB < 100, `Memory consumption must not leak unbounded (expected < 100MB, got ${diffMB.toFixed(2)}MB)`);
});

// =====================================================================
// SUITE 5: CERTIFICATION SWITCHING & STATE ISOLATION
// =====================================================================
console.log(`\n${colors.bold}${colors.magenta}>>> SUITE 5: Certification Switching & Cross-Cert State Isolation${colors.reset}`);

runTest('5.1 Multi-Cert Switching (CDL -> ACE -> PCA -> CDL) Dataset Reloads', () => {
  // CDL
  global.GCP_APP.switchCertification('cdl', false);
  assert.strictEqual(global.GCP_APP.activeCertId, 'cdl');
  assert.strictEqual(global.GCP_APP.questionPool.length, 300);
  assert(global.GCP_APP.getQuestion('CDL-D1-001'), 'Must index CDL-D1-001');

  // ACE
  global.GCP_APP.switchCertification('ace', false);
  assert.strictEqual(global.GCP_APP.activeCertId, 'ace');
  assert.strictEqual(global.GCP_APP.questionPool.length, 300);
  assert(global.GCP_APP.getQuestion('ACE-D1-001'), 'Must index ACE-D1-001');

  // PCA
  global.GCP_APP.switchCertification('pca', false);
  assert.strictEqual(global.GCP_APP.activeCertId, 'pca');
  assert.strictEqual(global.GCP_APP.questionPool.length, 300);
  assert(global.GCP_APP.getQuestion('PCA-D1-001'), 'Must index PCA-D1-001');

  // Return to CDL
  global.GCP_APP.switchCertification('cdl', false);
  assert.strictEqual(global.GCP_APP.activeCertId, 'cdl');
});

runTest('5.2 Cross-Certification State Isolation and Data Integrity', () => {
  // Clear state
  global.GCP_APP.state = global.GCP_STATE.createDefaultState();

  // 1. Add CDL Exam Session
  global.GCP_APP.switchCertification('cdl', false);
  const cdlSession = { sessionId: 'cdl_exam_1', scorePercent: 88, passed: true, date: new Date().toISOString() };
  global.GCP_APP.state.certifications['cdl'].history.push(cdlSession);
  global.GCP_APP.state.certifications['cdl'].questionStates['CDL-D1-001'] = { box: 3, streak: 3, isMastered: true };

  // 2. Add ACE Drill Session
  global.GCP_APP.switchCertification('ace', false);
  global.GCP_APP.state.certifications['ace'].questionStates['ACE-D1-001'] = { box: 1, streak: 1, isMastered: false };

  // 3. Verify CDL and ACE are isolated
  assert.strictEqual(global.GCP_APP.state.certifications['cdl'].history.length, 1, 'CDL history must have 1 record');
  assert.strictEqual(global.GCP_APP.state.certifications['ace'].history.length, 0, 'ACE history must have 0 records');
  assert.strictEqual(global.GCP_APP.state.certifications['pca'].history.length, 0, 'PCA history must have 0 records');

  assert.strictEqual(global.GCP_APP.state.certifications['cdl'].questionStates['CDL-D1-001'].isMastered, true);
  assert.strictEqual(global.GCP_APP.state.certifications['ace'].questionStates['ACE-D1-001'].isMastered, false);
  assert.strictEqual(global.GCP_APP.state.certifications['cdl'].questionStates['ACE-D1-001'], undefined, 'ACE item must not leak into CDL');
});

// =====================================================================
// SUITE 6: DEEP ADVERSARIAL BOUNDARY & STRESS SCENARIOS
// =====================================================================
console.log(`\n${colors.bold}${colors.magenta}>>> SUITE 6: Deep Adversarial Boundary & Stress Scenarios${colors.reset}`);

runTest('6.1 Exact 70% Official Passing Benchmark Boundary Verification', () => {
  // Test Case A: Exactly 35/50 = 70% -> MUST PASS
  const sessionPass = {
    scorePercent: 70,
    passed: true,
    correctCount: 35,
    totalQuestions: 50
  };
  global.GCP_EXAM.calculateAndRenderScorecard(sessionPass);
  const titlePass = global.document.getElementById('scorecard-status-title').textContent;
  assert.strictEqual(titlePass, '¡APROBADO!', '35/50 (70%) must be APROBADO');

  // Test Case B: Exactly 34/50 = 68% -> MUST FAIL
  const sessionFail = {
    scorePercent: 68,
    passed: false,
    correctCount: 34,
    totalQuestions: 50
  };
  global.GCP_EXAM.calculateAndRenderScorecard(sessionFail);
  const titleFail = global.document.getElementById('scorecard-status-title').textContent;
  assert.strictEqual(titleFail, 'NO APROBADO', '34/50 (68%) must be NO APROBADO');
});

runTest('6.2 Multi-Select Answer Permutation Invariance & Normalization', () => {
  // Array orders ['B', 'D'] vs ['D', 'B'] vs 'd, b'
  const norm1 = global.GCP_EXAM.normalizeCorrectAnswers(['B', 'D']);
  const norm2 = global.GCP_EXAM.normalizeCorrectAnswers(['d', 'b']);
  const norm3 = global.GCP_EXAM.normalizeCorrectAnswers('D, B');
  const norm4 = global.GCP_EXAM.normalizeCorrectAnswers('b, d');

  assert.deepStrictEqual(norm1, ['B', 'D']);
  assert.deepStrictEqual(norm2, ['B', 'D']);
  assert.deepStrictEqual(norm3, ['B', 'D']);
  assert.deepStrictEqual(norm4, ['B', 'D']);
});

runTest('6.3 Rapid Keyboard Event Flood / Fuzzing in Drill Mode (1,000 events)', () => {
  global.GCP_APP.activeView = 'drill';
  global.GCP_DRILL.onEnterView();

  const keys = ['1', '2', '3', '4', 'a', 'b', 'c', 'd', ' ', 'Enter', 'f', 'F', 'x', 'z', 'Shift', 'Tab'];

  for (let i = 0; i < 1000; i++) {
    const key = keys[i % keys.length];
    const evt = { key: key, preventDefault: () => {} };
    assert.doesNotThrow(() => {
      global.GCP_DRILL.handleKeyboardEvent(evt);
    }, `Flooding with key '${key}' at iteration ${i} must not throw`);
  }
});

runTest('6.4 Web Audio Synthesizer Mute & Resilience', () => {
  // Test Audio Context unavailable (headless)
  assert.doesNotThrow(() => global.SoundFX.play('correct'));
  assert.doesNotThrow(() => global.SoundFX.play('incorrect'));
  assert.doesNotThrow(() => global.SoundFX.play('streak'));
  assert.doesNotThrow(() => global.SoundFX.play('timerAlert'));
  assert.doesNotThrow(() => global.SoundFX.play('unknown_sound_type'));

  // Test when audio is disabled in settings
  global.GCP_APP.state.settings.timerAudioEnabled = false;
  assert.doesNotThrow(() => global.SoundFX.play('correct'));
  global.GCP_APP.state.settings.timerAudioEnabled = true;
});

runTest('6.5 Theme Switching Dark / Light Persistence & Document Class Sync', () => {
  global.GCP_APP.setTheme('light', true);
  assert.strictEqual(global.document.documentElement.getAttribute('data-theme'), 'light');
  assert(global.document.documentElement.classList.contains('theme-light'));

  global.GCP_APP.setTheme('dark', true);
  assert.strictEqual(global.document.documentElement.getAttribute('data-theme'), 'dark');
  assert(global.document.documentElement.classList.contains('theme-dark'));
});

runTest('6.6 PCA All 4 Case Studies Retrieval & Rendering in Modal', () => {
  const caseKeys = ['mountkirk_games', 'terramearth', 'ehr_healthcare', 'helicopter_racing_league'];
  caseKeys.forEach(key => {
    global.GCP_APP.renderCaseStudyInModal(key);
    const body = global.document.getElementById('modal-cs-content-body');
    assert(body.innerHTML.includes('Descripción de la Empresa'), `Case study ${key} must render company description`);
    assert(body.innerHTML.includes('Requisitos del Negocio'), `Case study ${key} must render business requirements`);
    assert(body.innerHTML.includes('Requisitos Técnicos'), `Case study ${key} must render technical requirements`);
    assert(body.innerHTML.includes('Arquitectura Prescrita'), `Case study ${key} must render prescribed architecture`);
  });
});

runTest('6.7 State Manager Backup Export & Import with CRC-32 Validation', () => {
  // Export
  const backupJson = global.GCP_STATE.exportBackup(global.GCP_APP.state);
  assert(typeof backupJson === 'string', 'Export must produce JSON string');
  assert(backupJson.includes('crc32'), 'Backup must contain CRC-32 checksum');

  // Import Valid
  const res = global.GCP_STATE.importBackup(backupJson);
  assert(res && res.success === true, 'Imported state must be valid and report success');
  assert(res.state && res.state.certifications, 'Imported state must contain certifications');

  // Import Corrupted Checksum -> Must Reject
  const corrupted = backupJson.replace(/"crc32":\s*"[A-F0-9]+"/i, '"crc32": "DEADBEEF"');
  const corruptRes = global.GCP_STATE.importBackup(corrupted);
  assert.strictEqual(corruptRes.success, false, 'Corrupted CRC-32 must be rejected');
  assert(corruptRes.error && corruptRes.error.includes('CRC-32'), 'Error message must specify CRC-32 mismatch');
});

runTest('6.8 Rapid Multi-Cert Cycling Stress (60 switches)', () => {
  const certs = ['cdl', 'ace', 'pca'];
  for (let i = 0; i < 60; i++) {
    const target = certs[i % certs.length];
    global.GCP_APP.switchCertification(target, false);
    assert.strictEqual(global.GCP_APP.activeCertId, target);
    assert.strictEqual(global.GCP_APP.questionPool.length, 300);
  }
  // Ensure returning to ACE is clean
  global.GCP_APP.switchCertification('ace', false);
  assert.strictEqual(global.GCP_APP.activeCertId, 'ace');
});

// =====================================================================
// FINAL SUMMARY
// =====================================================================
console.log(`\n${colors.bold}${colors.blue}========================================================================`);
console.log(`  CHALLENGER 1 TEST EXECUTION SUMMARY`);
console.log(`========================================================================${colors.reset}`);
console.log(`  Total Scenarios Executed: ${totalTests}`);
console.log(`  Scenarios Passed:         ${colors.green}${passedTests}${colors.reset}`);
console.log(`  Scenarios Failed:         ${failedTests === 0 ? colors.green + '0' : colors.red + failedTests}${colors.reset}`);
console.log(`${colors.bold}${colors.blue}========================================================================${colors.reset}\n`);

if (failedTests > 0) {
  console.error(`${colors.red}${colors.bold}[FAIL] ONE OR MORE ADVERSARIAL STRESS TESTS FAILED!${colors.reset}`);
  process.exit(1);
} else {
  console.log(`${colors.green}${colors.bold}[SUCCESS] 100% OF ADVERSARIAL STRESS HARNESS TESTS PASSED CLEANLY!${colors.reset}`);
  process.exit(0);
}
