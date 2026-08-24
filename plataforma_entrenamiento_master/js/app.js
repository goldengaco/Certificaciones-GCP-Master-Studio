/**
 * app.js
 * 
 * Google Cloud Certification Training Platform (Master Edition)
 * Core Application Manager, SPA Router, Multi-Cert Hydration, Web Audio Synthesizer,
 * Theme Orchestration, and Global Modal/Toast Services.
 * 
 * Dual Runtime Compatibility: Browser (window.GCP_APP) and Node.js (module.exports).
 */

(function (global) {
  'use strict';

  /**
   * =========================================================================
   * 1. PROCEDURAL WEB AUDIO SYNTHESIZER (Zero External Audio Files)
   * =========================================================================
   */
  const SoundFX = {
    audioContext: null,

    /**
     * Lazily initializes and resumes the Web Audio API context upon user gesture.
     * @returns {AudioContext|null}
     */
    getAudioContext() {
      if (typeof window === 'undefined') return null;
      if (!this.audioContext) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.audioContext = new AudioCtx();
        }
      }
      if (this.audioContext && this.audioContext.state === 'suspended') {
        this.audioContext.resume().catch(() => {});
      }
      return this.audioContext;
    },

    /**
     * Synthesizes procedural sound effect directly via Web Audio API oscillators.
     * @param {string} soundType - 'correct' | 'incorrect' | 'timerAlert' | 'streak' | 'click' | 'chime' | 'buzz' | 'alert'
     */
    play(soundType) {
      if (typeof window === 'undefined') return;
      const state = (global.GCP_APP && global.GCP_APP.state) || (global.GCP_STATE && global.GCP_STATE.loadState());
      if (state && state.settings && state.settings.timerAudioEnabled === false) {
        return; // Sound muted in settings
      }

      try {
        const ctx = this.getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;

        const type = (soundType || '').toLowerCase();

        switch (type) {
          case 'correct':
          case 'chime': {
            // Harmonic ascending major chord (D5 -> A5, D6)
            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const gain = ctx.createGain();

            osc1.type = 'sine';
            osc2.type = 'triangle';
            osc1.frequency.setValueAtTime(587.33, now); // D5
            osc1.frequency.exponentialRampToValueAtTime(880.00, now + 0.18); // A5
            osc2.frequency.setValueAtTime(1174.66, now); // D6

            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(ctx.destination);

            osc1.start(now);
            osc2.start(now);
            osc1.stop(now + 0.3);
            osc2.stop(now + 0.3);
            break;
          }

          case 'incorrect':
          case 'buzz': {
            // Low dissonance tone with lowpass filter
            const osc = ctx.createOscillator();
            const filter = ctx.createBiquadFilter();
            const gain = ctx.createGain();

            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(146.83, now); // D3
            osc.frequency.linearRampToValueAtTime(110.00, now + 0.2); // A2

            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(450, now);

            gain.gain.setValueAtTime(0.18, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);

            osc.start(now);
            osc.stop(now + 0.25);
            break;
          }

          case 'timeralert':
          case 'alert': {
            // High-urgency double ping
            [0, 0.12].forEach(delay => {
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              osc.type = 'square';
              osc.frequency.setValueAtTime(880.00, now + delay);
              gain.gain.setValueAtTime(0.12, now + delay);
              gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.08);
              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.start(now + delay);
              osc.stop(now + delay + 0.09);
            });
            break;
          }

          case 'streak': {
            // Celebratory 4-note arpeggio (C5, E5, G5, C6)
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, i) => {
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              const noteStart = now + (i * 0.07);
              osc.type = 'sine';
              osc.frequency.setValueAtTime(freq, noteStart);
              gain.gain.setValueAtTime(0.12, noteStart);
              gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.18);
              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.start(noteStart);
              osc.stop(noteStart + 0.2);
            });
            break;
          }

          case 'click':
          default: {
            // Subtle high-frequency micro-click
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(1400, now);
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.04);
            break;
          }
        }
      } catch (err) {
        // Fail silently if audio context unavailable
      }
    }
  };

  /**
   * =========================================================================
   * 2. MAIN APPLICATION SINGLETON CONTROLLER
   * =========================================================================
   */
  const GCP_APP = {
    state: null,
    activeCertId: 'ace',
    activeView: 'dashboard',
    questionPool: [],
    questionIndex: {},
    SoundFX: SoundFX,

    /**
     * Initializes application state, bindings, theme, router, and UI.
     */
    init() {
      if (typeof window === 'undefined') return;

      // 1. Load persisted state or create fresh normalized default
      if (global.GCP_STATE) {
        this.state = global.GCP_STATE.loadState();
      } else {
        this.state = {
          schemaVersion: '1.0.0',
          meta: { activeCertId: 'ace' },
          settings: { theme: 'dark', timerAudioEnabled: true, keyboardShortcutsEnabled: true },
          certifications: {
            cdl: { history: [], questionStates: {}, currentBlockIndex: 0, rotation: { epochSeed: 1337, currentBlockIndex: 0 } },
            ace: { history: [], questionStates: {}, currentBlockIndex: 0, rotation: { epochSeed: 1337, currentBlockIndex: 0 } },
            pca: { history: [], questionStates: {}, currentBlockIndex: 0, rotation: { epochSeed: 1337, currentBlockIndex: 0 } }
          }
        };
      }

      // 2. Hydrate active certification from saved state or default
      const savedCertId = (this.state.meta && this.state.meta.activeCertId) || 'ace';
      this.switchCertification(savedCertId, false);

      // 3. Initialize theme
      const savedTheme = (this.state.settings && this.state.settings.theme) || 'dark';
      this.setTheme(savedTheme, false);

      // 4. Bind global DOM event listeners
      this.bindDOMEvents();

      // 5. Initialize sub-controllers and i18n if available
      if (global.GCP_I18N) {
        const savedLang = localStorage.getItem('gcp_master_lang') || 'es';
        global.GCP_I18N.setLanguage(savedLang);
      }
      if (global.GCP_STUDY && typeof global.GCP_STUDY.init === 'function') {
        global.GCP_STUDY.init();
      }
      if (global.GCP_EXAM && typeof global.GCP_EXAM.init === 'function') {
        global.GCP_EXAM.init();
      }
      if (global.GCP_DRILL && typeof global.GCP_DRILL.init === 'function') {
        global.GCP_DRILL.init();
      }
      if (global.GCP_UI_SEARCH && typeof global.GCP_UI_SEARCH.init === 'function') {
        global.GCP_UI_SEARCH.init();
      }
      if (global.GCP_UI_NEWS && typeof global.GCP_UI_NEWS.init === 'function') {
        global.GCP_UI_NEWS.init();
      }
      if (global.GCP_UI_TOOLS && typeof global.GCP_UI_TOOLS.init === 'function') {
        global.GCP_UI_TOOLS.init();
      }

      // 6. Handle initial hash routing or default to dashboard
      const initialHash = (window.location.hash || '').replace(/^#\/?/, '').toLowerCase();
      const validViews = ['dashboard', 'study', 'exam', 'drill', 'search', 'news', 'tools'];
      if (validViews.includes(initialHash)) {
        this.navigateTo(initialHash);
      } else {
        this.navigateTo('dashboard');
      }

      // 7. Setup Charts & Backup / Restore if UICharts is loaded
      if (global.UICharts && typeof global.UICharts.setupBackupRestore === 'function') {
        global.UICharts.setupBackupRestore('btn-export-backup', 'settings-import-file-input');
      }

      // Listen for window hash changes
      if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
        window.addEventListener('hashchange', () => {
          const hash = (window.location.hash || '').replace(/^#\/?/, '').toLowerCase();
          if (validViews.includes(hash) && hash !== this.activeView) {
            this.navigateTo(hash);
          }
        });
      }
    },

    /**
     * Resolves the question array for a given certification ID.
     * @param {string} certId 
     * @returns {Array<object>}
     */
    resolveQuestionPool(certId) {
      const id = (certId || '').toLowerCase();
      if (id === 'cdl') {
        return global.GCP_CDL_QUESTIONS || global.GCP_QUESTIONS_CDL || [];
      } else if (id === 'pca') {
        return global.GCP_PCA_QUESTIONS || global.GCP_QUESTIONS_PCA || [];
      } else {
        return global.GCP_ACE_QUESTIONS || global.GCP_QUESTIONS_ACE || [];
      }
    },

    /**
     * Switches the active certification, rebuilds question index, updates header UI, and refreshes view.
     * @param {string} certId - 'cdl' | 'ace' | 'pca'
     * @param {boolean} [showFeedbackToast=true]
     */
    switchCertification(certId, showFeedbackToast = true) {
      const validCerts = ['cdl', 'ace', 'pca'];
      const targetCert = validCerts.includes((certId || '').toLowerCase()) ? certId.toLowerCase() : 'ace';

      this.activeCertId = targetCert;
      if (this.state) {
        if (!this.state.meta) this.state.meta = {};
        this.state.meta.activeCertId = targetCert;
        if (global.GCP_STATE) {
          global.GCP_STATE.saveState(this.state);
        }
      }

      // Hydrate question pool and build O(1) index
      this.questionPool = this.resolveQuestionPool(targetCert);
      this.questionIndex = {};
      this.questionPool.forEach(q => {
        if (q && q.id) {
          this.questionIndex[q.id] = q;
        }
      });

      // Update DOM UI elements
      if (typeof document !== 'undefined') {
        // Update Cert switcher buttons
        const certPills = document.querySelectorAll('.cert-pill, [data-cert]');
        certPills.forEach(pill => {
          const pillCert = pill.getAttribute('data-cert');
          if (pillCert === targetCert) {
            pill.classList.add('active');
            pill.setAttribute('aria-pressed', 'true');
          } else {
            pill.classList.remove('active');
            pill.setAttribute('aria-pressed', 'false');
          }
        });

        // Update Case Study trigger visibility (PCA only)
        const csHeaderBtn = document.getElementById('btn-case-studies-header');
        if (csHeaderBtn) {
          csHeaderBtn.style.display = (targetCert === 'pca') ? 'inline-flex' : 'none';
        }

        // Update Manifest details in header / dashboard
        const manifest = (global.GCP_MANIFEST && global.GCP_MANIFEST.certifications)
          ? global.GCP_MANIFEST.certifications[targetCert]
          : null;

        const dashCertTitle = document.getElementById('dash-cert-title');
        const dashCertTagline = document.getElementById('dash-cert-tagline');
        const dashCertLevel = document.getElementById('dash-cert-level');
        const examBadgeCert = document.getElementById('exam-badge-cert');
        const examBlockTitle = document.getElementById('exam-block-title');

        if (manifest) {
          if (dashCertTitle) dashCertTitle.textContent = manifest.fullName || manifest.name;
          if (dashCertTagline) dashCertTagline.textContent = manifest.tagline || '';
          if (dashCertLevel) dashCertLevel.textContent = manifest.level || 'Official';
          if (examBadgeCert) examBadgeCert.textContent = manifest.code || targetCert.toUpperCase();
          if (examBlockTitle) examBlockTitle.textContent = `${manifest.name} — Bloque de Examen`;
        }
      }

      // Refresh the currently active view
      if (this.activeView === 'dashboard') {
        this.renderDashboard();
      } else if (this.activeView === 'study' && global.GCP_STUDY) {
        global.GCP_STUDY.onEnterView();
      } else if (this.activeView === 'drill' && global.GCP_DRILL) {
        global.GCP_DRILL.onEnterView();
      }

      if (showFeedbackToast) {
        const certNames = { cdl: 'Cloud Digital Leader', ace: 'Associate Cloud Engineer', pca: 'Professional Cloud Architect' };
        this.showToast(`Certificación activa: ${certNames[targetCert] || targetCert.toUpperCase()} (${this.questionPool.length} preguntas)`, 'info');
      }
    },

    /**
     * Gets a single question item by ID from memory index.
     * @param {string} questionId 
     * @returns {object|null}
     */
    getQuestion(questionId) {
      return this.questionIndex[questionId] || null;
    },

    /**
     * Returns full question pool for active certification.
     * @returns {Array<object>}
     */
    getQuestionPool() {
      return this.questionPool || [];
    },

    /**
     * Single Page Application Navigation Router.
     * @param {string} viewId - 'dashboard' | 'study' | 'exam' | 'drill' | 'search' | 'news' | 'tools'
     * @param {object} [params={}] - Optional view transition parameters
     */
    navigateTo(viewId, params = {}) {
      const targetView = (viewId || '').toLowerCase();
      const validViews = ['dashboard', 'study', 'exam', 'drill', 'search', 'news', 'tools'];
      if (!validViews.includes(targetView)) return;

      // Exam Guard: Confirm leaving active exam session
      if (this.activeView === 'exam' && targetView !== 'exam') {
        if (global.GCP_EXAM && typeof global.GCP_EXAM.isActive === 'function' && global.GCP_EXAM.isActive()) {
          this.confirm(
            'Examen en Curso',
            'Tienes un simulacro de examen oficial activo. ¿Deseas pausar y salir al Dashboard? El tiempo se detendrá.',
            () => {
              if (global.GCP_EXAM.pauseExam) global.GCP_EXAM.pauseExam();
              this._executeViewTransition(targetView, params);
            },
            () => {
              // Abort navigation
              if (window.location.hash !== '#exam') {
                window.location.hash = '#exam';
              }
            }
          );
          return;
        }
      }

      this._executeViewTransition(targetView, params);
    },

    /**
     * Internal view transition executor.
     * @private
     */
    _executeViewTransition(targetView, params = {}) {
      this.activeView = targetView;

      if (typeof document !== 'undefined') {
        // Toggle view containers
        const allViews = document.querySelectorAll('.view-section');
        allViews.forEach(sec => {
          sec.style.display = 'none';
          sec.classList.remove('active', 'active-view');
          sec.setAttribute('aria-hidden', 'true');
        });

        const targetEl = document.getElementById(`view-${targetView}`);
        if (targetEl) {
          targetEl.style.display = '';
          targetEl.classList.add('active', 'active-view');
          targetEl.setAttribute('aria-hidden', 'false');
        }

        // Update nav tabs
        const navTabs = document.querySelectorAll('.nav-tab, [data-view]');
        navTabs.forEach(tab => {
          const tabView = tab.getAttribute('data-view') || tab.getAttribute('data-nav-target');
          if (tabView === targetView) {
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            tab.setAttribute('aria-current', 'page');
          } else {
            tab.classList.remove('active');
            tab.setAttribute('aria-selected', 'false');
            tab.removeAttribute('aria-current');
          }
        });

        // Update URL Hash without triggering re-entrant navigation
        if (window.location.hash !== `#${targetView}`) {
          history.replaceState(null, '', `#${targetView}`);
        }
      }

      // Sub-controller lifecycle hook triggers
      switch (targetView) {
        case 'dashboard':
          this.renderDashboard();
          break;
        case 'study':
          if (global.GCP_STUDY && typeof global.GCP_STUDY.onEnterView === 'function') {
            global.GCP_STUDY.onEnterView(params);
          }
          break;
        case 'exam':
          if (global.GCP_EXAM && typeof global.GCP_EXAM.onEnterView === 'function') {
            global.GCP_EXAM.onEnterView(params);
          }
          break;
        case 'drill':
          if (global.GCP_DRILL && typeof global.GCP_DRILL.onEnterView === 'function') {
            global.GCP_DRILL.onEnterView(params);
          }
          break;
        case 'search':
          if (global.GCP_UI_SEARCH && typeof global.GCP_UI_SEARCH.init === 'function') {
            global.GCP_UI_SEARCH.init();
          }
          break;
        case 'news':
          if (global.GCP_UI_NEWS && typeof global.GCP_UI_NEWS.init === 'function') {
            global.GCP_UI_NEWS.init();
          }
          break;
        case 'tools':
          if (global.GCP_UI_TOOLS && typeof global.GCP_UI_TOOLS.init === 'function') {
            global.GCP_UI_TOOLS.init();
          }
          break;
      }
    },

    /**
     * Renders all metrics, probability calculations, domain lists, and charts on the dashboard.
     */
    renderDashboard() {
      if (typeof document === 'undefined') return;
      if (!this.state) return;

      const certId = this.activeCertId;
      const certState = (this.state.certifications && this.state.certifications[certId]) || {
        history: [],
        questionStates: {},
        currentBlockIndex: 0,
        rotation: { currentBlockIndex: 0 }
      };

      const history = certState.history || [];
      const questionStates = certState.questionStates || {};
      const pool = this.questionPool || [];
      const poolSize = pool.length > 0 ? pool.length : 300;

      // 1. Calculate Passing Probability via Engine
      let probResult = { passingProbability: 15.0, theta: -1.734, coldStart: true };
      const manifest = (global.GCP_MANIFEST && global.GCP_MANIFEST.certifications)
        ? global.GCP_MANIFEST.certifications[certId]
        : null;

      const domainWeights = {};
      if (manifest && manifest.domains) {
        Object.keys(manifest.domains).forEach(dKey => {
          domainWeights[dKey] = manifest.domains[dKey].weight || 20;
        });
      }

      if (global.GCP_ENGINE && global.GCP_ENGINE.PassingProbabilityEngine) {
        probResult = global.GCP_ENGINE.PassingProbabilityEngine.calculatePassingProbability({
          examHistory: history,
          userQuestionStates: questionStates,
          totalCertQuestions: poolSize,
          domainWeights: domainWeights
        });
      }

      const probValue = Math.round(probResult.passingProbability || 0);

      // 2. Update Header Passing Pill & Hero Gauge
      const headerPassingProb = document.getElementById('header-passing-prob');
      if (headerPassingProb) {
        headerPassingProb.textContent = `${probValue}%`;
        headerPassingProb.className = `passing-pill-value ${probValue >= 70 ? 'text-green' : probValue >= 50 ? 'text-yellow' : 'text-red'}`;
      }

      const dashPassingPercent = document.getElementById('dash-passing-percent');
      if (dashPassingPercent) {
        dashPassingPercent.textContent = `${probValue}%`;
      }

      const dashGaugeFill = document.getElementById('dash-gauge-fill');
      if (dashGaugeFill) {
        const circumference = 2 * Math.PI * 68; // ~427.25
        const offset = circumference - (circumference * (probValue / 100));
        dashGaugeFill.style.strokeDashoffset = offset;
        dashGaugeFill.style.stroke = probValue >= 70 ? '#34A853' : probValue >= 50 ? '#FBBC04' : '#EA4335';
      }

      const dashReadinessBadge = document.getElementById('dash-readiness-badge');
      if (dashReadinessBadge) {
        if (probResult.coldStart || (history.length === 0 && Object.keys(questionStates).length === 0)) {
          dashReadinessBadge.textContent = 'SIN REGISTRO';
          dashReadinessBadge.className = 'verdict-badge badge-neutral';
        } else if (probValue >= 85) {
          dashReadinessBadge.textContent = 'ALTAMENTE PREPARADO';
          dashReadinessBadge.className = 'verdict-badge badge-success';
        } else if (probValue >= 70) {
          dashReadinessBadge.textContent = 'LISTO PARA EXAMEN';
          dashReadinessBadge.className = 'verdict-badge badge-success';
        } else if (probValue >= 50) {
          dashReadinessBadge.textContent = 'EN PROGRESO';
          dashReadinessBadge.className = 'verdict-badge badge-warning';
        } else {
          dashReadinessBadge.textContent = 'NECESITA REFUERZO';
          dashReadinessBadge.className = 'verdict-badge badge-danger';
        }
      }

      // 3. Update Hero Metrics
      let masteredCount = 0;
      let boxCounts = [0, 0, 0, 0];
      let answeredQuestionsCount = 0;

      Object.values(questionStates).forEach(qState => {
        if (qState.totalAttempts > 0) answeredQuestionsCount++;
        const box = (qState.box !== undefined && qState.box >= 0 && qState.box <= 3) ? qState.box : 0;
        boxCounts[box]++;
        if (box === 3 || qState.isMastered) masteredCount++;
      });

      const dashTotalQ = document.getElementById('dash-total-q');
      if (dashTotalQ) dashTotalQ.textContent = poolSize;

      const dashMasteredCount = document.getElementById('dash-mastered-count');
      if (dashMasteredCount) dashMasteredCount.textContent = masteredCount;

      const dashExamsCount = document.getElementById('dash-exams-count');
      if (dashExamsCount) dashExamsCount.textContent = history.length;

      const dashAvgScore = document.getElementById('dash-avg-score');
      if (dashAvgScore) {
        if (history.length > 0) {
          const sum = history.reduce((acc, h) => acc + (Number(h.scorePercent) || 0), 0);
          const avg = Math.round(sum / history.length);
          dashAvgScore.textContent = `${avg}%`;
          dashAvgScore.className = `metric-val ${avg >= 70 ? 'text-green' : avg >= 50 ? 'text-yellow' : 'text-red'}`;
        } else {
          dashAvgScore.textContent = '--%';
          dashAvgScore.className = 'metric-val text-yellow';
        }
      }

      // 4. Update Launch Action Card Subtitles
      const dashStudyProgress = document.getElementById('dash-study-progress');
      if (dashStudyProgress) {
        dashStudyProgress.textContent = `${answeredQuestionsCount}/${poolSize} preguntas practicadas`;
      }

      const nextBlockIndex = ((certState.rotation && certState.rotation.currentBlockIndex) || 0) % 6;
      const dashExamBlockInfo = document.getElementById('dash-exam-block-info');
      if (dashExamBlockInfo) {
        dashExamBlockInfo.textContent = `Siguiente: Bloque ${nextBlockIndex + 1} de 6`;
      }

      const weaknessCount = boxCounts[0] + boxCounts[1] + boxCounts[2];
      const dashDrillQueueBadge = document.getElementById('dash-drill-queue-badge');
      if (dashDrillQueueBadge) {
        dashDrillQueueBadge.textContent = `${weaknessCount} preguntas en cola de repaso`;
      }

      // 5. Update Leitner Box Counters
      for (let i = 0; i <= 3; i++) {
        const boxEl = document.getElementById(`dash-leitner-box${i}`);
        if (boxEl) boxEl.textContent = boxCounts[i];
      }

      // 6. Render Detailed Domain Breakdown List
      const domainListContainer = document.getElementById('dash-domain-breakdown-list');
      if (domainListContainer && manifest && manifest.domains) {
        domainListContainer.innerHTML = '';
        const domainKeys = Object.keys(manifest.domains);

        domainKeys.forEach(dKey => {
          const dom = manifest.domains[dKey];
          // Calculate domain accuracy and question counts
          const domQuestions = pool.filter(q => (q.domainId === dKey || q.domain === dKey));
          let domMastered = 0;
          let domAttempts = 0;
          let domCorrect = 0;

          domQuestions.forEach(q => {
            const qs = questionStates[q.id];
            if (qs) {
              if (qs.box === 3 || qs.isMastered) domMastered++;
              domAttempts += (qs.totalAttempts || 0);
              domCorrect += (qs.correctAttempts || 0);
            }
          });

          const domAccuracy = domAttempts > 0 ? Math.round((domCorrect / domAttempts) * 100) : 0;
          const targetQuestions = domQuestions.length || dom.targetQuestions || 50;

          const row = document.createElement('div');
          row.className = 'domain-row-item';
          row.innerHTML = `
            <div class="domain-row-header">
              <span class="domain-name" title="${dom.name}">${dom.shortName || dom.name}</span>
              <span class="domain-accuracy ${domAccuracy >= 70 ? 'text-green' : domAttempts > 0 ? 'text-yellow' : 'text-muted'}">
                ${domAttempts > 0 ? `${domAccuracy}% (${domMastered}/${targetQuestions})` : `0/${targetQuestions}`}
              </span>
            </div>
            <div class="domain-row-bar-track">
              <div class="domain-row-bar-fill ${domAccuracy >= 70 ? 'fill-green' : domAccuracy >= 50 ? 'fill-yellow' : 'fill-blue'}" 
                   style="width: ${Math.min(100, Math.max(0, (domMastered / targetQuestions) * 100))}%;"></div>
              <div class="benchmark-target-line" style="left: 70%;" title="Meta 70%"></div>
            </div>
          `;
          domainListContainer.appendChild(row);
        });
      }

      // 7. Render Session History Table
      const historyBody = document.getElementById('history-table-body');
      const historyEmpty = document.getElementById('history-empty-state');
      if (historyBody) {
        historyBody.innerHTML = '';
        if (history.length === 0) {
          if (historyEmpty) historyEmpty.style.display = 'block';
        } else {
          if (historyEmpty) historyEmpty.style.display = 'none';
          // Show recent history (newest first)
          const sortedHistory = [...history].reverse();
          sortedHistory.forEach(item => {
            const tr = document.createElement('tr');
            const dateStr = item.date ? new Date(item.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Reciente';
            const score = Number(item.scorePercent) || 0;
            const passed = item.passed || (score >= 70);
            const durationMin = item.durationSeconds ? Math.round(item.durationSeconds / 60) : 0;

            tr.innerHTML = `
              <td>${dateStr}</td>
              <td><span class="badge badge-sm badge-cert">${(item.certId || certId).toUpperCase()}</span></td>
              <td>${item.mode === 'simulation' ? 'Simulacro' : 'Estudio / Ráfaga'}</td>
              <td>${item.correctCount || 0}/${item.totalQuestions || 50}</td>
              <td><strong class="${score >= 70 ? 'text-green' : 'text-red'}">${score}%</strong></td>
              <td>${durationMin} min</td>
              <td><span class="badge ${passed ? 'badge-success' : 'badge-danger'}">${passed ? 'APROBADO' : 'NO APROBADO'}</span></td>
              <td>
                <button class="btn btn-secondary btn-xs btn-history-inspect" data-session-id="${item.sessionId || ''}">Revisar</button>
              </td>
            `;

            const btnInspect = tr.querySelector('.btn-history-inspect');
            if (btnInspect) {
              btnInspect.addEventListener('click', () => {
                if (global.GCP_EXAM && typeof global.GCP_EXAM.renderForensicReview === 'function') {
                  this.navigateTo('exam');
                  global.GCP_EXAM.renderForensicReview(item);
                }
              });
            }

            historyBody.appendChild(tr);
          });
        }
      }

      // 8. Render Visualizer Charts (UICharts / GCP_CHARTS)
      const chartsLib = global.UICharts || global.GCP_CHARTS;
      if (chartsLib) {
        // Render SVG Radar Chart
        if (typeof chartsLib.renderRadar === 'function') {
          const radarScores = {};
          if (manifest && manifest.domains) {
            Object.keys(manifest.domains).forEach(dKey => {
              const domQuestions = pool.filter(q => (q.domainId === dKey || q.domain === dKey));
              let dCorrect = 0;
              let dAttempts = 0;
              domQuestions.forEach(q => {
                const qs = questionStates[q.id];
                if (qs) {
                  dCorrect += (qs.correctAttempts || 0);
                  dAttempts += (qs.totalAttempts || 0);
                }
              });
              const acc = dAttempts > 0 ? Math.round((dCorrect / dAttempts) * 100) : 0;
              const short = manifest.domains[dKey].shortName || manifest.domains[dKey].name;
              radarScores[short] = acc;
            });
          }
          chartsLib.renderRadar('chart-domain-radar-container', radarScores);
        }

        // Render SVG Score Timeline
        if (typeof chartsLib.renderTimeline === 'function') {
          chartsLib.renderTimeline('chart-score-timeline-container', history);
        }
      }
    },

    /**
     * Binds UI click, change, and navigation events across the shell.
     */
    bindDOMEvents() {
      // Certification switch buttons
      const btnCdl = document.getElementById('btn-cert-cdl');
      const btnAce = document.getElementById('btn-cert-ace');
      const btnPca = document.getElementById('btn-cert-pca');

      if (btnCdl) btnCdl.addEventListener('click', () => this.switchCertification('cdl'));
      if (btnAce) btnAce.addEventListener('click', () => this.switchCertification('ace'));
      if (btnPca) btnPca.addEventListener('click', () => this.switchCertification('pca'));

      // Navigation tab buttons
      const navDash = document.getElementById('nav-btn-dashboard');
      const navStudy = document.getElementById('nav-btn-study');
      const navExam = document.getElementById('nav-btn-exam');
      const navDrill = document.getElementById('nav-btn-drill');
      const navSearch = document.getElementById('nav-btn-search');
      const navNews = document.getElementById('nav-btn-news');
      const navTools = document.getElementById('nav-btn-tools');

      if (navDash) navDash.addEventListener('click', () => this.navigateTo('dashboard'));
      if (navStudy) navStudy.addEventListener('click', () => this.navigateTo('study'));
      if (navExam) navExam.addEventListener('click', () => this.navigateTo('exam'));
      if (navDrill) navDrill.addEventListener('click', () => this.navigateTo('drill'));
      if (navSearch) navSearch.addEventListener('click', () => this.navigateTo('search'));
      if (navNews) navNews.addEventListener('click', () => this.navigateTo('news'));
      if (navTools) navTools.addEventListener('click', () => this.navigateTo('tools'));

      // Language Toggle Button
      const langToggleBtn = document.getElementById('langToggleBtn');
      if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
          if (global.GCP_I18N && typeof global.GCP_I18N.toggleLanguage === 'function') {
            global.GCP_I18N.toggleLanguage();
            const currentL = global.GCP_I18N.currentLang;
            this.showToast(currentL === 'es' ? 'Idioma cambiado a Español 🇪🇸' : 'Language changed to English 🇺🇸', 'info');
          }
        });
      }

      // Dashboard Launch Action buttons
      const btnStartStudy = document.getElementById('btn-start-study');
      const btnStartExam = document.getElementById('btn-start-exam');
      const btnStartDrill = document.getElementById('btn-start-drill');

      if (btnStartStudy) btnStartStudy.addEventListener('click', () => this.navigateTo('study'));
      if (btnStartExam) btnStartExam.addEventListener('click', () => this.navigateTo('exam'));
      if (btnStartDrill) btnStartDrill.addEventListener('click', () => this.navigateTo('drill'));

      // Header Utility Buttons
      const btnThemeToggle = document.getElementById('btn-theme-toggle');
      if (btnThemeToggle) {
        btnThemeToggle.addEventListener('click', () => this.toggleTheme());
      }

      const btnOpenSettings = document.getElementById('btn-open-settings');
      if (btnOpenSettings) {
        btnOpenSettings.addEventListener('click', () => this.openModal('modal-settings'));
      }

      const btnCaseStudiesHeader = document.getElementById('btn-case-studies-header');
      if (btnCaseStudiesHeader) {
        btnCaseStudiesHeader.addEventListener('click', () => this.openModal('modal-case-studies'));
      }

      // Settings Modal controls
      const settingsThemeSelect = document.getElementById('settings-theme-select');
      if (settingsThemeSelect) {
        settingsThemeSelect.value = (this.state.settings && this.state.settings.theme) || 'dark';
        settingsThemeSelect.addEventListener('change', (e) => {
          this.setTheme(e.target.value);
        });
      }

      const settingsAudioToggle = document.getElementById('settings-audio-toggle');
      if (settingsAudioToggle) {
        settingsAudioToggle.checked = this.state.settings ? this.state.settings.timerAudioEnabled !== false : true;
        settingsAudioToggle.addEventListener('change', (e) => {
          if (!this.state.settings) this.state.settings = {};
          this.state.settings.timerAudioEnabled = e.target.checked;
          if (global.GCP_STATE) global.GCP_STATE.saveState(this.state);
        });
      }

      const settingsShortcutsToggle = document.getElementById('settings-shortcuts-toggle');
      if (settingsShortcutsToggle) {
        settingsShortcutsToggle.checked = this.state.settings ? this.state.settings.keyboardShortcutsEnabled !== false : true;
        settingsShortcutsToggle.addEventListener('change', (e) => {
          if (!this.state.settings) this.state.settings = {};
          this.state.settings.keyboardShortcutsEnabled = e.target.checked;
          if (global.GCP_STATE) global.GCP_STATE.saveState(this.state);
        });
      }

      const btnSaveSettings = document.getElementById('btn-save-settings');
      if (btnSaveSettings) {
        btnSaveSettings.addEventListener('click', () => this.closeModal('modal-settings'));
      }

      const btnCloseModalSettings = document.getElementById('btn-close-modal-settings');
      if (btnCloseModalSettings) {
        btnCloseModalSettings.addEventListener('click', () => this.closeModal('modal-settings'));
      }

      // Factory Reset button in Settings
      const btnResetFactory = document.getElementById('btn-trigger-factory-reset');
      if (btnResetFactory) {
        btnResetFactory.addEventListener('click', () => {
          this.confirm(
            'Restablecer Datos de Fábrica',
            '¿Estás seguro de que deseas borrar todo tu progreso, historial de exámenes y memoria de repetición espaciada? Esta acción es irreversible.',
            () => {
              if (global.GCP_STATE) {
                this.state = global.GCP_STATE.createDefaultState();
                global.GCP_STATE.saveState(this.state);
              }
              this.closeModal('modal-settings');
              this.renderDashboard();
              this.showToast('Todos los datos han sido restablecidos a cero.', 'warning');
            }
          );
        });
      }

      // Clear History button on Dashboard
      const btnClearHistory = document.getElementById('btn-clear-history-confirm');
      if (btnClearHistory) {
        btnClearHistory.addEventListener('click', () => {
          this.confirm(
            'Limpiar Historial de Exámenes',
            '¿Deseas eliminar el historial de simulacros para la certificación activa?',
            () => {
              if (this.state.certifications && this.state.certifications[this.activeCertId]) {
                this.state.certifications[this.activeCertId].history = [];
                if (global.GCP_STATE) global.GCP_STATE.saveState(this.state);
              }
              this.renderDashboard();
              this.showToast('Historial de simulacros eliminado.', 'info');
            }
          );
        });
      }

      // Export / Import Backup actions
      const btnExportBackup = document.getElementById('btn-export-backup');
      if (btnExportBackup) {
        btnExportBackup.addEventListener('click', () => {
          if (!global.GCP_STATE) return;
          const backupJson = global.GCP_STATE.exportBackup(this.state);
          const blob = new Blob([backupJson], { type: 'application/json' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `gcp_master_backup_${this.activeCertId}_${Date.now()}.json`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
          this.showToast('Copia de seguridad exportada con checksum CRC-32.', 'success');
        });
      }

      const importFileInput = document.getElementById('settings-import-file-input');
      if (importFileInput) {
        importFileInput.addEventListener('change', (e) => {
          const file = e.target.files && e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (event) => {
            if (!global.GCP_STATE) return;
            const res = global.GCP_STATE.importBackup(event.target.result);
            if (res.success && res.state) {
              this.state = res.state;
              this.switchCertification(this.state.meta.activeCertId || 'ace', false);
              this.showToast('¡Progreso importado y validado exitosamente!', 'success');
              this.closeModal('modal-settings');
            } else {
              this.showToast(`Error al importar: ${res.error || 'Archivo corrupto o inválido'}`, 'error');
            }
          };
          reader.readAsText(file);
          importFileInput.value = '';
        });
      }

      // Case Studies Modal Tab Switching
      const csTabs = document.querySelectorAll('.study-select-tab');
      csTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          csTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const studyKey = tab.getAttribute('data-study');
          this.renderCaseStudyInModal(studyKey);
        });
      });

      const btnCloseModalCs = document.getElementById('btn-close-modal-cs');
      const btnDismissModalCs = document.getElementById('btn-dismiss-modal-cs');
      if (btnCloseModalCs) btnCloseModalCs.addEventListener('click', () => this.closeModal('modal-case-studies'));
      if (btnDismissModalCs) btnDismissModalCs.addEventListener('click', () => this.closeModal('modal-case-studies'));

      // Global keyboard shortcut listeners
      if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
        window.addEventListener('keydown', (e) => {
          // Ctrl+K → Open Search (prevent browser default)
          if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
            e.preventDefault();
            e.stopPropagation();
            this.navigateTo('search');
            setTimeout(() => {
              const searchInput = document.getElementById('globalSearchInput');
              if (searchInput) searchInput.focus();
            }, 120);
            return;
          }

          // Escape → Close active modals
          if (e.key === 'Escape') {
            const openBackdrops = document.querySelectorAll('.modal-backdrop');
            openBackdrops.forEach(modal => {
              if (modal.style.display !== 'none' && modal.classList.contains('active')) {
                this.closeModal(modal.id);
              }
            });
          }
        }, true); // capture phase to intercept before browser
      }
    },

    /**
     * Renders a selected case study inside the full-screen modal.
     * @param {string} studyId 
     */
    renderCaseStudyInModal(studyId) {
      const container = document.getElementById('modal-cs-content-body');
      if (!container) return;

      const studies = (global.GCP_CASE_STUDIES && global.GCP_CASE_STUDIES.studies) ? global.GCP_CASE_STUDIES.studies : {};
      const key = (studyId || '').replace(/-/g, '_').toLowerCase();
      const study = studies[key] || studies['mountkirk_games'];

      if (!study) {
        container.innerHTML = '<p class="text-muted">Caso de estudio no encontrado.</p>';
        return;
      }

      container.innerHTML = `
        <div class="cs-doc-view">
          <div class="cs-doc-header">
            <span class="cs-badge">${study.badge || 'Professional Cloud Architect'}</span>
            <h2>${study.name}</h2>
            <p class="cs-tagline">${study.tagline || ''}</p>
          </div>

          <div class="cs-section">
            <h3>1. Descripción de la Empresa</h3>
            <p>${study.companyOverview || ''}</p>
          </div>

          <div class="cs-section">
            <h3>2. Infraestructura Actual y Desafíos</h3>
            <ul>
              ${Array.isArray(study.existingInfrastructure) ? study.existingInfrastructure.map(item => `<li>${item}</li>`).join('') : ''}
            </ul>
          </div>

          <div class="cs-section">
            <h3>3. Requisitos del Negocio</h3>
            <ul>
              ${Array.isArray(study.businessRequirements) ? study.businessRequirements.map(item => `<li>${item}</li>`).join('') : ''}
            </ul>
          </div>

          <div class="cs-section">
            <h3>4. Requisitos Técnicos</h3>
            <ul>
              ${Array.isArray(study.technicalRequirements) ? study.technicalRequirements.map(item => `<li>${item}</li>`).join('') : ''}
            </ul>
          </div>

          <div class="cs-section">
            <h3>5. Arquitectura Prescrita en Google Cloud</h3>
            <div class="cs-arch-grid">
              ${study.prescribedArchitecture ? `
                <div class="cs-arch-card"><strong>Cómputo:</strong> <p>${study.prescribedArchitecture.compute || ''}</p></div>
                <div class="cs-arch-card"><strong>Almacenamiento:</strong> <p>${study.prescribedArchitecture.storage || ''}</p></div>
                <div class="cs-arch-card"><strong>Redes:</strong> <p>${study.prescribedArchitecture.networking || ''}</p></div>
                <div class="cs-arch-card"><strong>Seguridad:</strong> <p>${study.prescribedArchitecture.security || ''}</p></div>
                ${study.prescribedArchitecture.dataAnalytics ? `<div class="cs-arch-card"><strong>Analítica:</strong> <p>${study.prescribedArchitecture.dataAnalytics}</p></div>` : ''}
              ` : ''}
            </div>
          </div>
        </div>
      `;
    },

    /**
     * Displays a Toast notification card.
     * @param {string} message 
     * @param {'info'|'success'|'warning'|'error'} [type='info'] 
     * @param {number} [duration=3500] 
     */
    showToast(message, type = 'info', duration = 3500) {
      if (typeof document === 'undefined') return;

      let toastContainer = document.getElementById('toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.className = 'toast-container';
        document.body.appendChild(toastContainer);
      }

      // Limit concurrent toasts
      while (toastContainer.children && toastContainer.children.length >= 4 && toastContainer.firstChild) {
        toastContainer.removeChild(toastContainer.firstChild);
      }

      const toast = document.createElement('div');
      toast.className = `toast-card toast-${type}`;
      const iconSymbol = type === 'success' ? '✓' : type === 'error' ? '✖' : type === 'warning' ? '⚡' : 'ℹ';

      toast.innerHTML = `
        <span class="toast-icon">${iconSymbol}</span>
        <span class="toast-message">${message}</span>
      `;

      toastContainer.appendChild(toast);

      setTimeout(() => {
        toast.classList.add('toast-fadeout');
        setTimeout(() => {
          if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 300);
      }, duration);
    },

    /**
     * Opens a modal dialog by ID.
     * @param {string} modalId 
     * @param {object} [options={}] 
     */
    openModal(modalId, options = {}) {
      if (typeof document === 'undefined') return;
      const modal = document.getElementById(modalId);
      if (!modal) return;

      if (modalId === 'modal-case-studies') {
        const initialStudy = options.studyId || 'mountkirk_games';
        this.renderCaseStudyInModal(initialStudy);
      }

      modal.style.display = 'flex';
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    },

    /**
     * Closes a modal dialog by ID.
     * @param {string} modalId 
     */
    closeModal(modalId) {
      if (typeof document === 'undefined') return;
      const modal = document.getElementById(modalId);
      if (!modal) return;

      modal.style.display = 'none';
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');

      // Check if any other modal is open
      const remainingOpen = document.querySelectorAll('.modal-backdrop.active');
      if (remainingOpen.length === 0) {
        document.body.classList.remove('modal-open');
      }
    },

    /**
     * Universal confirmation dialog.
     * @param {string} title 
     * @param {string} message 
     * @param {Function} onConfirm 
     * @param {Function} [onCancel] 
     */
    confirm(title, message, onConfirm, onCancel) {
      if (typeof document === 'undefined') {
        if (typeof onConfirm === 'function') onConfirm();
        return;
      }

      const modalConfirm = document.getElementById('modal-confirm');
      const titleEl = document.getElementById('modal-confirm-title');
      const msgEl = document.getElementById('modal-confirm-message');
      const btnAccept = document.getElementById('btn-confirm-accept');
      const btnCancel = document.getElementById('btn-confirm-cancel');
      const btnClose = document.getElementById('btn-close-modal-confirm');

      if (!modalConfirm) {
        if (window.confirm(`${title}\n\n${message}`)) {
          if (typeof onConfirm === 'function') onConfirm();
        } else {
          if (typeof onCancel === 'function') onCancel();
        }
        return;
      }

      if (titleEl) titleEl.textContent = title;
      if (msgEl) msgEl.textContent = message;

      const cleanup = () => {
        this.closeModal('modal-confirm');
        if (btnAccept) btnAccept.onclick = null;
        if (btnCancel) btnCancel.onclick = null;
        if (btnClose) btnClose.onclick = null;
      };

      if (btnAccept) {
        btnAccept.onclick = () => {
          cleanup();
          if (typeof onConfirm === 'function') onConfirm();
        };
      }

      if (btnCancel) {
        btnCancel.onclick = () => {
          cleanup();
          if (typeof onCancel === 'function') onCancel();
        };
      }

      if (btnClose) {
        btnClose.onclick = () => {
          cleanup();
          if (typeof onCancel === 'function') onCancel();
        };
      }

      this.openModal('modal-confirm');
    },

    /**
     * Sets active theme ('dark' | 'light') and saves to state.
     * @param {string} themeName 
     * @param {boolean} [persist=true] 
     */
    setTheme(themeName, persist = true) {
      const theme = (themeName === 'light') ? 'light' : 'dark';

      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'light') {
          document.documentElement.classList.add('theme-light');
          document.documentElement.classList.remove('theme-dark');
        } else {
          document.documentElement.classList.add('theme-dark');
          document.documentElement.classList.remove('theme-light');
        }

        const themeSelect = document.getElementById('settings-theme-select');
        if (themeSelect) themeSelect.value = theme;
      }

      if (persist && this.state) {
        if (!this.state.settings) this.state.settings = {};
        this.state.settings.theme = theme;
        if (global.GCP_STATE) global.GCP_STATE.saveState(this.state);
      }
    },

    /**
     * Toggles between dark and light themes.
     */
    toggleTheme() {
      const current = (this.state && this.state.settings && this.state.settings.theme) || 'dark';
      this.setTheme(current === 'dark' ? 'light' : 'dark');
    },

    /**
     * Synthesizes audio effect shortcut.
     * @param {string} type 
     */
    playSound(type) {
      this.SoundFX.play(type);
    }
  };

  // Expose global aliases
  global.GCP_APP = GCP_APP;
  global.SoundFX = SoundFX;
  global.App = {
    showModal: (id, opt) => GCP_APP.openModal(id, opt),
    closeModal: (id) => GCP_APP.closeModal(id),
    showToast: (msg, type, dur) => GCP_APP.showToast(msg, type, dur),
    confirm: (title, msg, onOk, onCancel) => GCP_APP.confirm(title, msg, onOk, onCancel)
  };

  // Dual Browser & Node.js export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GCP_APP, SoundFX };
  }

  // Auto-init on DOMContentLoaded in browser
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading' && typeof document.addEventListener === 'function') {
      document.addEventListener('DOMContentLoaded', () => GCP_APP.init());
    } else {
      GCP_APP.init();
    }
  }

})(typeof window !== 'undefined' ? window : global);
