/**
 * ui_exam.js
 * 
 * Official Timed Exam Simulation Controller for Google Cloud Certification Training Platform
 * 
 * Features:
 * 1. Exact-fidelity simulation of CDL (90m, 50q), ACE (120m, 50q), and PCA (120m, 50q).
 * 2. Stratified 6-Block rotation drawing (50 questions, zero repetition across 6 sessions).
 * 3. High-precision drift-free countdown timer with visibilitychange synchronization.
 * 4. Interactive 4-State Question Palette Grid (Unanswered, Answered, Flagged, Current).
 * 5. Dynamic side-by-side Case Study split-panel viewer for PCA architectural scenarios.
 * 6. Pre-Submission review summary modal with 1-click jump links.
 * 7. Post-Exam Diagnostic Scorecard (70% threshold, domain breakdown bars, pacing metrics).
 * 8. Forensic Review Mode unlocking justifications and distractor analysis for all 50 items.
 * 
 * Dual Runtime Compatibility: Browser (window.GCP_EXAM) and Node.js (module.exports).
 */

(function (global) {
  'use strict';

  const GCP_EXAM = {
    examActive: false,
    examStartTime: 0,
    examEndTime: 0,
    timerIntervalId: null,
    totalDurationSeconds: 7200,
    currentBlockQuestions: [],
    currentIndex: 0,
    userAnswers: {},
    lastQuestionTick: 0,
    paletteFilter: 'all',
    activeCaseStudySection: 'overview',
    isForensicReviewActive: false,
    forensicSessionData: null,
    forensicFilter: 'all',

    /**
     * Initializes exam mode event listeners and DOM bindings.
     */
    init() {
      if (typeof document === 'undefined') return;

      // Exam Navigation buttons
      const btnPrev = document.getElementById('btn-exam-prev');
      const btnNext = document.getElementById('btn-exam-next');
      const btnClear = document.getElementById('btn-exam-clear-choice');
      const btnFlag = document.getElementById('btn-exam-flag');
      const btnSubmitTrigger = document.getElementById('btn-exam-submit-trigger');

      if (btnPrev) btnPrev.addEventListener('click', () => this.goToPrevQuestion());
      if (btnNext) btnNext.addEventListener('click', () => this.goToNextQuestion());
      if (btnClear) btnClear.addEventListener('click', () => this.clearCurrentChoice());
      if (btnFlag) btnFlag.addEventListener('click', () => this.toggleFlag());
      if (btnSubmitTrigger) btnSubmitTrigger.addEventListener('click', () => this.openReviewModal());

      // Case study split panel controls
      const btnCloseCsPanel = document.getElementById('btn-close-cs-panel');
      const btnOpenCsTrigger = document.getElementById('btn-exam-open-cs-trigger');

      if (btnCloseCsPanel) {
        btnCloseCsPanel.addEventListener('click', () => this.toggleSplitPanel(false));
      }
      if (btnOpenCsTrigger) {
        btnOpenCsTrigger.addEventListener('click', () => this.toggleSplitPanel(true));
      }

      // Case study tabs in split panel
      const csTabs = document.querySelectorAll('.cs-tab');
      csTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          csTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          this.activeCaseStudySection = tab.getAttribute('data-cs-tab') || 'overview';
          const q = this.currentBlockQuestions[this.currentIndex];
          if (q && q.caseStudy) {
            this.renderCaseStudyContent(q.caseStudy, this.activeCaseStudySection);
          }
        });
      });

      // Palette Filter Chips
      const filterChips = document.querySelectorAll('.palette-filter-chip');
      filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
          filterChips.forEach(c => c.classList.remove('active'));
          chip.classList.add('active');
          this.paletteFilter = chip.getAttribute('data-filter') || 'all';
          this.renderPalette();
        });
      });

      // Pre-submission Review Modal buttons
      const btnCloseReview = document.getElementById('btn-close-modal-review');
      const btnReviewContinue = document.getElementById('btn-review-continue-exam');
      const btnReviewConfirm = document.getElementById('btn-review-confirm-grade');

      if (btnCloseReview) btnCloseReview.addEventListener('click', () => this.closeReviewModal());
      if (btnReviewContinue) btnReviewContinue.addEventListener('click', () => this.closeReviewModal());
      if (btnReviewConfirm) btnReviewConfirm.addEventListener('click', () => this.confirmSubmitExam());

      // Scorecard Modal buttons
      const btnCloseScorecard = document.getElementById('btn-close-modal-scorecard');
      const btnScorecardDash = document.getElementById('btn-scorecard-to-dashboard');
      const btnScorecardDrill = document.getElementById('btn-scorecard-drill-missed');
      const btnScorecardForensic = document.getElementById('btn-scorecard-forensic-review');

      if (btnCloseScorecard) {
        btnCloseScorecard.addEventListener('click', () => {
          if (global.GCP_APP) global.GCP_APP.closeModal('modal-scorecard');
        });
      }
      if (btnScorecardDash) {
        btnScorecardDash.addEventListener('click', () => {
          if (global.GCP_APP) {
            global.GCP_APP.closeModal('modal-scorecard');
            global.GCP_APP.navigateTo('dashboard');
          }
        });
      }
      if (btnScorecardDrill) {
        btnScorecardDrill.addEventListener('click', () => {
          if (global.GCP_APP) {
            global.GCP_APP.closeModal('modal-scorecard');
            global.GCP_APP.navigateTo('drill');
          }
        });
      }
      if (btnScorecardForensic) {
        btnScorecardForensic.addEventListener('click', () => {
          if (global.GCP_APP) {
            global.GCP_APP.closeModal('modal-scorecard');
          }
          if (this.forensicSessionData) {
            this.renderForensicReview(this.forensicSessionData);
          }
        });
      }

      // Keyboard Shortcut 'F' for flag
      if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
        window.addEventListener('keydown', (e) => {
          if (this.examActive && !this.isForensicReviewActive) {
            if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
            if (e.key === 'f' || e.key === 'F') {
              e.preventDefault();
              this.toggleFlag();
            }
          }
        });
      }

      // Tab visibility change listener for drift compensation
      if (typeof document !== 'undefined' && typeof document.addEventListener === 'function') {
        document.addEventListener('visibilitychange', () => {
          if (!document.hidden && this.examActive) {
            this.updateTimer();
          }
        });
      }
    },

    /**
     * Checks if an exam session is actively in progress.
     * @returns {boolean}
     */
    isActive() {
      return Boolean(this.examActive);
    },

    /**
     * Lifecycle hook called upon entering Exam Mode view.
     * @param {object} [params={}] 
     */
    onEnterView(params = {}) {
      if (this.isForensicReviewActive) {
        return; // Retain forensic review view if user navigated back
      }

      if (!this.examActive) {
        this.startNewExam(params.blockIndex);
      } else {
        this.renderHUD();
        this.renderQuestion(this.currentIndex);
        this.renderPalette();
      }
    },

    /**
     * Normalizes correct answer field into an array of uppercase strings.
     * @param {string|Array<string>} correct 
     * @returns {Array<string>}
     */
    normalizeCorrectAnswers(correct) {
      if (Array.isArray(correct)) {
        return correct.map(c => String(c).trim().toUpperCase()).sort();
      }
      if (typeof correct === 'string') {
        return correct.split(',').map(c => c.trim().toUpperCase()).filter(Boolean).sort();
      }
      return [];
    },

    /**
     * Starts a new official exam session.
     * @param {number} [customBlockIndex] 
     */
    startNewExam(customBlockIndex) {
      const app = global.GCP_APP;
      const certId = (app && app.activeCertId) || 'ace';
      const pool = (app && typeof app.getQuestionPool === 'function') ? app.getQuestionPool() : [];

      if (!pool || pool.length === 0) {
        if (app && app.showToast) {
          app.showToast('Error: No se encontraron preguntas para esta certificación.', 'error');
        }
        return;
      }

      this.isForensicReviewActive = false;
      this.forensicSessionData = null;

      // Manifest & Timing
      const manifest = (global.GCP_MANIFEST && global.GCP_MANIFEST.certifications)
        ? global.GCP_MANIFEST.certifications[certId]
        : null;

      const durationMin = (manifest && manifest.durationMinutes) || (certId === 'cdl' ? 90 : 120);
      this.totalDurationSeconds = durationMin * 60;

      // Extract rotation state
      const certState = (app && app.state && app.state.certifications && app.state.certifications[certId]) || {};
      const rotation = certState.rotation || { epochSeed: 1337, currentBlockIndex: 0 };
      const blockIdx = customBlockIndex !== undefined ? customBlockIndex : ((rotation.currentBlockIndex || 0) % 6);

      // Stratified Block Partitioning
      const domainWeights = {};
      if (manifest && manifest.domains) {
        Object.keys(manifest.domains).forEach(dKey => {
          domainWeights[dKey] = manifest.domains[dKey].weight || 20;
        });
      }

      let blocks = [[], [], [], [], [], []];
      if (global.GCP_ENGINE && global.GCP_ENGINE.BlockRotationEngine) {
        blocks = global.GCP_ENGINE.BlockRotationEngine.generateEpochBlocks(
          certId,
          domainWeights,
          pool,
          rotation.epochSeed || 1337
        );
      } else {
        // Fallback: chunk pool into 6 blocks of 50
        for (let b = 0; b < 6; b++) {
          blocks[b] = pool.slice(b * 50, (b + 1) * 50);
        }
      }

      this.currentBlockQuestions = blocks[blockIdx] || pool.slice(0, 50);
      if (this.currentBlockQuestions.length === 0) {
        this.currentBlockQuestions = pool.slice(0, 50);
      }

      // Initialize answers map for all 50 questions
      this.userAnswers = {};
      this.currentBlockQuestions.forEach(q => {
        this.userAnswers[q.id] = {
          chosen: [],
          isFlagged: false,
          timeSpentMs: 0
        };
      });

      this.currentIndex = 0;
      this.examActive = true;
      this.examStartTime = Date.now();
      this.examEndTime = this.examStartTime + (this.totalDurationSeconds * 1000);
      this.lastQuestionTick = Date.now();

      // Start high-precision timer loop
      if (this.timerIntervalId) clearInterval(this.timerIntervalId);
      this.timerIntervalId = setInterval(() => this.updateTimer(), 250);

      this.renderHUD();
      this.renderQuestion(0);
      this.renderPalette();

      if (app && app.showToast) {
        app.showToast(`Simulacro oficial iniciado — Bloque ${blockIdx + 1} de 6 (${durationMin} min)`, 'info');
      }
    },

    /**
     * Pauses the exam (called when user navigates away).
     */
    pauseExam() {
      if (this.timerIntervalId) {
        clearInterval(this.timerIntervalId);
        this.timerIntervalId = null;
      }
      this.examActive = false;
    },

    /**
     * High-precision timer countdown with sub-second drift compensation.
     */
    updateTimer() {
      if (!this.examActive) return;

      const remainingMs = Math.max(0, this.examEndTime - Date.now());
      const remainingSeconds = Math.ceil(remainingMs / 1000);

      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;

      const pad = (n) => String(n).padStart(2, '0');
      const timeString = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

      const timerDisplay = document.getElementById('exam-timer-display');
      if (timerDisplay) {
        timerDisplay.textContent = timeString;

        // Visual alerts
        if (remainingSeconds <= 300) { // <= 5 minutes
          timerDisplay.className = 'timer-badge timer-critical';
          if (remainingSeconds === 300 && global.GCP_APP && global.GCP_APP.playSound) {
            global.GCP_APP.playSound('timerAlert');
          }
        } else if (remainingSeconds <= 900) { // <= 15 minutes
          timerDisplay.className = 'timer-badge timer-warning';
        } else {
          timerDisplay.className = 'timer-badge timer-normal';
        }
      }

      // Auto-submit on expiration
      if (remainingMs <= 0) {
        if (this.timerIntervalId) {
          clearInterval(this.timerIntervalId);
          this.timerIntervalId = null;
        }
        if (global.GCP_APP && global.GCP_APP.playSound) {
          global.GCP_APP.playSound('timerAlert');
        }
        if (global.GCP_APP && global.GCP_APP.showToast) {
          global.GCP_APP.showToast('¡Tiempo expirado! Tu examen ha sido enviado automáticamente para evaluación.', 'warning');
        }
        this.confirmSubmitExam();
      }
    },

    /**
     * Renders Exam HUD indicators.
     */
    renderHUD() {
      if (typeof document === 'undefined') return;

      const app = global.GCP_APP;
      const certId = (app && app.activeCertId) || 'ace';
      const certState = (app && app.state && app.state.certifications && app.state.certifications[certId]) || {};
      const blockIdx = ((certState.rotation && certState.rotation.currentBlockIndex) || 0) % 6;

      const badgeCert = document.getElementById('exam-badge-cert');
      const blockTitle = document.getElementById('exam-block-title');

      const manifest = (global.GCP_MANIFEST && global.GCP_MANIFEST.certifications)
        ? global.GCP_MANIFEST.certifications[certId]
        : null;

      if (badgeCert) badgeCert.textContent = (manifest && manifest.code) || certId.toUpperCase();
      if (blockTitle) {
        blockTitle.textContent = `${(manifest && manifest.name) || certId.toUpperCase()} — Bloque ${blockIdx + 1} de 6`;
      }
    },

    /**
     * Renders question at specified index in the exam workspace.
     * @param {number} index 
     */
    renderQuestion(index) {
      if (typeof document === 'undefined') return;
      if (!this.currentBlockQuestions || this.currentBlockQuestions.length === 0) return;

      const safeIndex = Math.max(0, Math.min(index, this.currentBlockQuestions.length - 1));

      // Record elapsed time on previous question
      const now = Date.now();
      const prevQ = this.currentBlockQuestions[this.currentIndex];
      if (prevQ && this.userAnswers[prevQ.id]) {
        this.userAnswers[prevQ.id].timeSpentMs += (now - this.lastQuestionTick);
      }
      this.lastQuestionTick = now;
      this.currentIndex = safeIndex;

      const q = this.currentBlockQuestions[safeIndex];
      if (!q) return;

      const userAns = this.userAnswers[q.id] || { chosen: [], isFlagged: false };

      // Update position indicator & track fill
      const posIndicator = document.getElementById('exam-position-indicator');
      if (posIndicator) {
        posIndicator.textContent = `Pregunta ${safeIndex + 1} de ${this.currentBlockQuestions.length}`;
      }

      const trackFill = document.getElementById('exam-track-fill');
      if (trackFill) {
        trackFill.style.width = `${((safeIndex + 1) / this.currentBlockQuestions.length) * 100}%`;
      }

      // Update Flag button state
      const btnFlag = document.getElementById('btn-exam-flag');
      if (btnFlag) {
        if (userAns.isFlagged) {
          btnFlag.classList.add('flagged', 'active');
          btnFlag.setAttribute('aria-pressed', 'true');
        } else {
          btnFlag.classList.remove('flagged', 'active');
          btnFlag.setAttribute('aria-pressed', 'false');
        }
      }

      // Update Domain tag
      const domainTag = document.getElementById('exam-domain-tag');
      if (domainTag) {
        domainTag.textContent = `${q.domainId || 'Dominio'}: ${q.domainName || ''}`;
      }

      // Multi-select badge
      const multiselectBadge = document.getElementById('exam-multiselect-badge');
      if (multiselectBadge) {
        if (q.isMultiSelect) {
          multiselectBadge.style.display = 'inline-block';
          multiselectBadge.textContent = `Seleccione ${q.expectedSelectCount || 2} opciones`;
        } else {
          multiselectBadge.style.display = 'none';
        }
      }

      // Scenario text
      const scenarioEl = document.getElementById('exam-scenario-text');
      if (scenarioEl) {
        scenarioEl.textContent = q.scenario || '';
      }

      // PCA Split-Panel Management
      const app = global.GCP_APP;
      const certId = (app && app.activeCertId) || 'ace';
      const hasCaseStudy = (certId === 'pca' && q.caseStudy && q.caseStudy !== 'none');

      const csPanel = document.getElementById('exam-case-study-panel');
      const btnOpenCs = document.getElementById('btn-exam-open-cs-trigger');
      const layout = document.getElementById('exam-workspace-layout');

      if (hasCaseStudy) {
        if (layout) layout.classList.add('layout-split-active');
        if (csPanel) csPanel.style.display = 'flex';
        if (btnOpenCs) btnOpenCs.style.display = 'none';

        const csTitle = document.getElementById('exam-cs-title');
        if (csTitle) {
          csTitle.textContent = q.caseStudy.replace(/_/g, ' ').toUpperCase();
        }
        this.renderCaseStudyContent(q.caseStudy, this.activeCaseStudySection);
      } else {
        if (layout) layout.classList.remove('layout-split-active');
        if (csPanel) csPanel.style.display = 'none';
        if (btnOpenCs) btnOpenCs.style.display = 'none';
      }

      // Render Options Container
      this.renderOptions(q, userAns);

      // Refresh Palette highlighting
      this.renderPalette();
    },

    /**
     * Toggles split panel open / collapse.
     * @param {boolean} open 
     */
    toggleSplitPanel(open) {
      const csPanel = document.getElementById('exam-case-study-panel');
      const btnOpenCs = document.getElementById('btn-exam-open-cs-trigger');
      const layout = document.getElementById('exam-workspace-layout');

      if (open) {
        if (layout) layout.classList.add('layout-split-active');
        if (csPanel) csPanel.style.display = 'flex';
        if (btnOpenCs) btnOpenCs.style.display = 'none';
      } else {
        if (layout) layout.classList.remove('layout-split-active');
        if (csPanel) csPanel.style.display = 'none';
        if (btnOpenCs) btnOpenCs.style.display = 'inline-flex';
      }
    },

    /**
     * Renders case study content in the split panel.
     * @param {string} caseStudyKey 
     * @param {string} section 
     */
    renderCaseStudyContent(caseStudyKey, section = 'overview') {
      const container = document.getElementById('exam-cs-content-area');
      if (!container) return;

      const studies = (global.GCP_CASE_STUDIES && global.GCP_CASE_STUDIES.studies) ? global.GCP_CASE_STUDIES.studies : {};
      const key = (caseStudyKey || '').replace(/-/g, '_').toLowerCase();
      const study = studies[key] || studies['mountkirk_games'];

      if (!study) {
        container.innerHTML = '<p class="text-muted">Caso de estudio no disponible.</p>';
        return;
      }

      let contentHtml = '';
      switch (section) {
        case 'biz':
          contentHtml = `
            <h4>Requisitos del Negocio</h4>
            <ul>
              ${Array.isArray(study.businessRequirements) ? study.businessRequirements.map(item => `<li>${item}</li>`).join('') : ''}
            </ul>
          `;
          break;
        case 'tech':
          contentHtml = `
            <h4>Requisitos Técnicos</h4>
            <ul>
              ${Array.isArray(study.technicalRequirements) ? study.technicalRequirements.map(item => `<li>${item}</li>`).join('') : ''}
            </ul>
          `;
          break;
        case 'arch':
          contentHtml = `
            <h4>Arquitectura Prescrita</h4>
            <div class="cs-arch-mini-grid">
              ${study.prescribedArchitecture ? `
                <div class="cs-arch-item"><strong>Cómputo:</strong> ${study.prescribedArchitecture.compute || ''}</div>
                <div class="cs-arch-item"><strong>Almacenamiento:</strong> ${study.prescribedArchitecture.storage || ''}</div>
                <div class="cs-arch-item"><strong>Redes:</strong> ${study.prescribedArchitecture.networking || ''}</div>
                <div class="cs-arch-item"><strong>Seguridad:</strong> ${study.prescribedArchitecture.security || ''}</div>
                ${study.prescribedArchitecture.dataAnalytics ? `<div class="cs-arch-item"><strong>Analítica:</strong> ${study.prescribedArchitecture.dataAnalytics}</div>` : ''}
              ` : ''}
            </div>
          `;
          break;
        case 'overview':
        default:
          contentHtml = `
            <h4>Descripción de la Empresa</h4>
            <p>${study.companyOverview || ''}</p>
            <h4>Infraestructura Actual</h4>
            <ul>
              ${Array.isArray(study.existingInfrastructure) ? study.existingInfrastructure.map(item => `<li>${item}</li>`).join('') : ''}
            </ul>
          `;
          break;
      }

      container.innerHTML = contentHtml;
    },

    /**
     * Renders options inside the exam question area.
     * @param {object} question 
     * @param {object} userAns 
     */
    renderOptions(question, userAns) {
      const container = document.getElementById('exam-options-container');
      if (!container) return;

      container.innerHTML = '';
      const fragment = document.createDocumentFragment();
      const options = question.options || [];

      options.forEach(opt => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        const isChosen = userAns.chosen.includes(opt.letter);
        if (isChosen) {
          optionCard.classList.add('selected');
        }

        optionCard.setAttribute('role', question.isMultiSelect ? 'checkbox' : 'radio');
        optionCard.setAttribute('aria-checked', isChosen ? 'true' : 'false');
        optionCard.setAttribute('data-letter', opt.letter);

        optionCard.innerHTML = `
          <div class="option-letter-badge">${opt.letter}</div>
          <div class="option-content-text">${opt.text}</div>
        `;

        optionCard.addEventListener('click', () => {
          this.selectOption(opt.letter);
        });

        fragment.appendChild(optionCard);
      });

      container.appendChild(fragment);
    },

    /**
     * Handles candidate option choice selection.
     * @param {string} letter 
     */
    selectOption(letter) {
      if (!this.examActive) return;

      const q = this.currentBlockQuestions[this.currentIndex];
      if (!q) return;

      const upper = letter.toUpperCase();
      const userAns = this.userAnswers[q.id] || { chosen: [], isFlagged: false, timeSpentMs: 0 };

      if (!q.isMultiSelect) {
        userAns.chosen = [upper];
      } else {
        const idx = userAns.chosen.indexOf(upper);
        if (idx >= 0) {
          userAns.chosen.splice(idx, 1);
        } else {
          userAns.chosen.push(upper);
          userAns.chosen.sort();
        }
      }

      this.userAnswers[q.id] = userAns;

      if (global.GCP_APP && global.GCP_APP.playSound) {
        global.GCP_APP.playSound('click');
      }

      this.renderOptions(q, userAns);
      this.renderPalette();
    },

    /**
     * Clears chosen answer on active question.
     */
    clearCurrentChoice() {
      const q = this.currentBlockQuestions[this.currentIndex];
      if (!q) return;

      if (this.userAnswers[q.id]) {
        this.userAnswers[q.id].chosen = [];
      }
      this.renderOptions(q, this.userAnswers[q.id]);
      this.renderPalette();
    },

    /**
     * Toggles flag / mark for review on active question.
     */
    toggleFlag() {
      const q = this.currentBlockQuestions[this.currentIndex];
      if (!q) return;

      const userAns = this.userAnswers[q.id] || { chosen: [], isFlagged: false, timeSpentMs: 0 };
      userAns.isFlagged = !userAns.isFlagged;
      this.userAnswers[q.id] = userAns;

      const btnFlag = document.getElementById('btn-exam-flag');
      if (btnFlag) {
        if (userAns.isFlagged) {
          btnFlag.classList.add('flagged', 'active');
          btnFlag.setAttribute('aria-pressed', 'true');
        } else {
          btnFlag.classList.remove('flagged', 'active');
          btnFlag.setAttribute('aria-pressed', 'false');
        }
      }

      if (global.GCP_APP && global.GCP_APP.showToast) {
        global.GCP_APP.showToast(userAns.isFlagged ? 'Pregunta marcada para revisión 🚩' : 'Pregunta desmarcada', 'info');
      }

      this.renderPalette();
    },

    /**
     * Renders the 50-item question palette grid.
     */
    renderPalette() {
      const grid = document.getElementById('exam-palette-grid');
      if (!grid) return;

      grid.innerHTML = '';
      const fragment = document.createDocumentFragment();

      let answeredCount = 0;
      let unansweredCount = 0;
      let flaggedCount = 0;

      this.currentBlockQuestions.forEach((q, idx) => {
        const userAns = this.userAnswers[q.id] || { chosen: [], isFlagged: false };
        const isAnswered = userAns.chosen && userAns.chosen.length > 0;
        const isFlagged = Boolean(userAns.isFlagged);
        const isCurrent = (idx === this.currentIndex);

        if (isAnswered) answeredCount++;
        else unansweredCount++;
        if (isFlagged) flaggedCount++;

        // Filter check
        if (this.paletteFilter === 'unanswered' && isAnswered) return;
        if (this.paletteFilter === 'flagged' && !isFlagged) return;

        const btn = document.createElement('button');
        btn.className = 'palette-btn';
        btn.setAttribute('type', 'button');
        btn.setAttribute('aria-label', `Pregunta ${idx + 1}`);

        // State classes
        if (isCurrent) btn.classList.add('pal-current');
        if (isAnswered) btn.classList.add('pal-answered');
        if (isFlagged) btn.classList.add('pal-flagged');
        if (!isAnswered && !isFlagged) btn.classList.add('pal-unanswered');

        btn.innerHTML = `
          <span class="palette-num">${idx + 1}</span>
          ${isFlagged ? '<span class="palette-flag-icon">⚑</span>' : ''}
          ${isAnswered && !isFlagged ? '<span class="palette-check-icon">✓</span>' : ''}
        `;

        btn.addEventListener('click', () => {
          this.renderQuestion(idx);
        });

        fragment.appendChild(btn);
      });

      grid.appendChild(fragment);

      // Update palette summary indicators
      const countAns = document.getElementById('palette-count-answered');
      const countUnans = document.getElementById('palette-count-unanswered');
      const countFlag = document.getElementById('palette-count-flagged');

      if (countAns) countAns.textContent = `${answeredCount} Resp.`;
      if (countUnans) countUnans.textContent = `${unansweredCount} Pend.`;
      if (countFlag) countFlag.textContent = `${flaggedCount} Marc.`;
    },

    /**
     * Opens pre-submission review inspection modal.
     */
    openReviewModal() {
      if (typeof document === 'undefined') return;

      let answeredCount = 0;
      let unansweredCount = 0;
      let flaggedCount = 0;

      const listContainer = document.getElementById('modal-review-items-list');
      if (listContainer) {
        listContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();

        this.currentBlockQuestions.forEach((q, idx) => {
          const userAns = this.userAnswers[q.id] || { chosen: [], isFlagged: false };
          const isAnswered = userAns.chosen && userAns.chosen.length > 0;
          const isFlagged = Boolean(userAns.isFlagged);

          if (isAnswered) answeredCount++;
          else unansweredCount++;
          if (isFlagged) flaggedCount++;

          const row = document.createElement('div');
          row.className = `review-item-row ${!isAnswered ? 'unanswered-row' : ''}`;
          row.innerHTML = `
            <span class="review-item-num">Pregunta ${idx + 1}</span>
            <span class="review-item-domain">${q.domainId || 'Dominio'}</span>
            <span class="review-item-status ${isAnswered ? 'text-green' : 'text-red'}">
              ${isAnswered ? `Respondida (${userAns.chosen.join(', ')})` : 'Sin responder'}
            </span>
            ${isFlagged ? '<span class="review-item-flag badge badge-warning">⚑ Marcada</span>' : ''}
            <button class="btn btn-secondary btn-xs btn-review-jump" data-index="${idx}">Revisar</button>
          `;

          const jumpBtn = row.querySelector('.btn-review-jump');
          if (jumpBtn) {
            jumpBtn.addEventListener('click', () => {
              this.closeReviewModal();
              this.renderQuestion(idx);
            });
          }

          fragment.appendChild(row);
        });

        listContainer.appendChild(fragment);
      }

      const statAns = document.getElementById('review-stat-answered');
      const statUnans = document.getElementById('review-stat-unanswered');
      const statFlag = document.getElementById('review-stat-flagged');

      if (statAns) statAns.textContent = `${answeredCount} / ${this.currentBlockQuestions.length}`;
      if (statUnans) statUnans.textContent = `${unansweredCount} / ${this.currentBlockQuestions.length}`;
      if (statFlag) statFlag.textContent = `${flaggedCount}`;

      if (global.GCP_APP) {
        global.GCP_APP.openModal('modal-exam-review');
      }
    },

    /**
     * Closes the review modal.
     */
    closeReviewModal() {
      if (global.GCP_APP) {
        global.GCP_APP.closeModal('modal-exam-review');
      }
    },

    /**
     * Confirms exam submission, grades the answers, and persists session.
     */
    confirmSubmitExam() {
      this.closeReviewModal();

      if (this.timerIntervalId) {
        clearInterval(this.timerIntervalId);
        this.timerIntervalId = null;
      }
      this.examActive = false;

      const app = global.GCP_APP;
      const certId = (app && app.activeCertId) || 'ace';
      const now = Date.now();
      const totalTimeSpentSec = Math.max(1, Math.round((now - this.examStartTime) / 1000));
      const totalQs = this.currentBlockQuestions.length || 50;
      const avgPaceSec = Math.round(totalTimeSpentSec / totalQs);

      let correctCount = 0;
      const domainScores = {};

      // Initialize domain accumulator
      const manifest = (global.GCP_MANIFEST && global.GCP_MANIFEST.certifications)
        ? global.GCP_MANIFEST.certifications[certId]
        : null;

      if (manifest && manifest.domains) {
        Object.keys(manifest.domains).forEach(dKey => {
          domainScores[dKey] = {
            id: dKey,
            name: manifest.domains[dKey].shortName || manifest.domains[dKey].name,
            total: 0,
            correct: 0,
            percent: 0
          };
        });
      }

      // Grade questions and update Leitner questionStates
      const leitnerUpdates = {};
      this.currentBlockQuestions.forEach(q => {
        const domId = q.domainId || q.domain || 'DEFAULT';
        if (!domainScores[domId]) {
          domainScores[domId] = { id: domId, name: domId, total: 0, correct: 0, percent: 0 };
        }
        domainScores[domId].total++;

        const userAns = this.userAnswers[q.id] || { chosen: [], isFlagged: false, timeSpentMs: 0 };
        const correctAnswers = this.normalizeCorrectAnswers(q.correct);
        const uniqueChosen = Array.from(new Set((userAns.chosen || []).map(c => String(c).trim().toUpperCase()))).sort();

        const isCorrect = (uniqueChosen.length === correctAnswers.length) &&
                          uniqueChosen.every(opt => correctAnswers.includes(opt));

        if (isCorrect) {
          correctCount++;
          domainScores[domId].correct++;
        }

        // Process Leitner Spaced Repetition update
        if (global.GCP_ENGINE && global.GCP_ENGINE.LeitnerEngine && app && app.state) {
          const currentQS = (app.state.certifications[certId] && app.state.certifications[certId].questionStates[q.id]) || null;
          const updatedQS = global.GCP_ENGINE.LeitnerEngine.processAnswer(
            currentQS,
            isCorrect,
            uniqueChosen.join(','),
            userAns.timeSpentMs || avgPaceSec * 1000
          );
          if (currentQS) {
            updatedQS.isBookmarked = Boolean(currentQS.isBookmarked);
            updatedQS.userNote = currentQS.userNote || '';
          }
          leitnerUpdates[q.id] = updatedQS;
        }
      });

      // Calculate domain percentages
      Object.keys(domainScores).forEach(dKey => {
        const d = domainScores[dKey];
        d.percent = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 0;
      });

      const scorePercent = Math.round((correctCount / totalQs) * 100);
      const passed = scorePercent >= 70;

      // Construct session log record
      const sessionData = {
        sessionId: `exam_${now}`,
        date: new Date().toISOString(),
        timestamp: now,
        certId: certId,
        mode: 'simulation',
        blockId: `BLOCK-${(((app && app.state && app.state.certifications[certId] && app.state.certifications[certId].rotation && app.state.certifications[certId].rotation.currentBlockIndex) || 0) % 6) + 1}`,
        scorePercent: scorePercent,
        passed: passed,
        totalQuestions: totalQs,
        correctCount: correctCount,
        durationSeconds: totalTimeSpentSec,
        averageTimePerQuestionSec: avgPaceSec,
        domainScores: domainScores,
        userAnswers: this.userAnswers,
        questionIds: this.currentBlockQuestions.map(q => q.id)
      };

      this.forensicSessionData = sessionData;

      // Persist to state store
      if (app && app.state) {
        if (!app.state.certifications[certId]) {
          app.state.certifications[certId] = { history: [], questionStates: {}, currentBlockIndex: 0, rotation: { currentBlockIndex: 0 } };
        }
        const cState = app.state.certifications[certId];
        cState.history = cState.history || [];
        cState.history.push(sessionData);

        // Advance block rotation index
        cState.rotation = cState.rotation || { currentBlockIndex: 0 };
        cState.rotation.currentBlockIndex = ((cState.rotation.currentBlockIndex || 0) + 1) % 6;
        cState.currentBlockIndex = cState.rotation.currentBlockIndex;

        // Apply Leitner updates
        cState.questionStates = cState.questionStates || {};
        Object.assign(cState.questionStates, leitnerUpdates);

        // Recalculate and cache Passing Probability
        if (global.GCP_ENGINE && global.GCP_ENGINE.PassingProbabilityEngine) {
          const domainWeights = {};
          if (manifest && manifest.domains) {
            Object.keys(manifest.domains).forEach(dKey => {
              domainWeights[dKey] = manifest.domains[dKey].weight || 20;
            });
          }
          const prob = global.GCP_ENGINE.PassingProbabilityEngine.calculatePassingProbability({
            examHistory: cState.history,
            userQuestionStates: cState.questionStates,
            totalCertQuestions: (app.questionPool && app.questionPool.length) || 300,
            domainWeights: domainWeights
          });
          cState.cachedAnalytics = {
            realPassingProbability: prob.passingProbability,
            lastCalculatedAt: now,
            theta: prob.theta
          };
        }

        if (global.GCP_STATE) {
          global.GCP_STATE.saveState(app.state);
        }
      }

      // Audio Cue
      if (app && app.playSound) {
        app.playSound(passed ? 'streak' : 'incorrect');
      }

      // Display Scorecard
      this.calculateAndRenderScorecard(sessionData);
    },

    /**
     * Renders Post-Exam Diagnostic Scorecard Modal.
     * @param {object} sessionData 
     */
    calculateAndRenderScorecard(sessionData) {
      if (typeof document === 'undefined') return;

      const score = sessionData.scorePercent || 0;
      const passed = sessionData.passed || (score >= 70);

      const banner = document.getElementById('scorecard-banner');
      const iconEl = document.getElementById('scorecard-icon');
      const statusTitle = document.getElementById('scorecard-status-title');
      const statusSubtitle = document.getElementById('scorecard-status-subtitle');

      if (banner) {
        banner.className = `scorecard-pass-fail-banner ${passed ? 'banner-pass' : 'banner-fail'}`;
      }
      if (iconEl) {
        iconEl.innerHTML = passed ? '🏆' : '⚠️';
      }
      if (statusTitle) {
        statusTitle.textContent = passed ? '¡APROBADO!' : 'NO APROBADO';
      }
      if (statusSubtitle) {
        statusSubtitle.textContent = passed
          ? 'Has superado el estándar de certificación del 70% con sólidos fundamentos técnicos.'
          : 'Puntaje inferior al 70% requerido. Revisa el desglose de dominios y practica en Modo Ráfaga.';
      }

      const finalPercent = document.getElementById('scorecard-final-percent');
      const finalRatio = document.getElementById('scorecard-final-ratio');
      const timeElapsed = document.getElementById('scorecard-time-elapsed');
      const timePace = document.getElementById('scorecard-time-pace');

      if (finalPercent) {
        finalPercent.textContent = `${score}%`;
        finalPercent.className = `score-number ${passed ? 'text-green' : 'text-red'}`;
      }
      if (finalRatio) {
        finalRatio.textContent = `${sessionData.correctCount || 0} de ${sessionData.totalQuestions || 50} Correctas`;
      }

      if (timeElapsed) {
        const sec = sessionData.durationSeconds || 0;
        const mm = Math.floor(sec / 60);
        const ss = sec % 60;
        timeElapsed.textContent = `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
      }
      if (timePace) {
        timePace.textContent = `${sessionData.averageTimePerQuestionSec || 0}s / pregunta`;
      }

      // Render Domain Breakdown Bars
      const domainsList = document.getElementById('scorecard-domains-list');
      if (domainsList) {
        domainsList.innerHTML = '';
        const scores = sessionData.domainScores || {};

        Object.keys(scores).forEach(dKey => {
          const dom = scores[dKey];
          const pct = dom.percent || 0;
          const isDomPass = pct >= 70;

          const row = document.createElement('div');
          row.className = 'scorecard-domain-row';
          row.innerHTML = `
            <div class="sc-domain-header">
              <span class="sc-dom-name">${dom.name || dom.id}</span>
              <span class="sc-dom-score ${isDomPass ? 'text-green' : 'text-red'}">${pct}% (${dom.correct}/${dom.total})</span>
            </div>
            <div class="sc-dom-bar-track">
              <div class="sc-dom-bar-fill ${pct >= 75 ? 'fill-green' : pct >= 70 ? 'fill-yellow' : 'fill-red'}" style="width: ${pct}%;"></div>
              <div class="sc-benchmark-tick" style="left: 70%;" title="Umbral 70%"></div>
            </div>
          `;
          domainsList.appendChild(row);
        });
      }

      if (global.GCP_APP) {
        global.GCP_APP.openModal('modal-scorecard');
      }
    },

    /**
     * Renders forensic detailed review view for a completed exam session.
     * @param {object} sessionData 
     */
    renderForensicReview(sessionData) {
      if (typeof document === 'undefined') return;
      if (!sessionData) return;

      this.isForensicReviewActive = true;
      this.forensicSessionData = sessionData;

      const app = global.GCP_APP;
      if (app && typeof app.navigateTo === 'function') {
        app.navigateTo('exam');
      }

      const qArea = document.getElementById('exam-question-area');
      if (!qArea) return;

      const pool = (app && typeof app.getQuestionPool === 'function') ? app.getQuestionPool() : [];
      const qIndex = (app && app.questionIndex) || {};

      let questionsToReview = [];
      if (Array.isArray(sessionData.questionIds)) {
        questionsToReview = sessionData.questionIds.map(id => qIndex[id]).filter(Boolean);
      }
      if (questionsToReview.length === 0) {
        questionsToReview = this.currentBlockQuestions || pool.slice(0, 50);
      }

      qArea.innerHTML = `
        <div class="forensic-review-container">
          <div class="forensic-header">
            <div class="forensic-title-group">
              <h3>Modo Revisión Detallada (Forensic Review)</h3>
              <p>Simulación: <strong>${sessionData.scorePercent || 0}%</strong> (${sessionData.correctCount || 0}/${sessionData.totalQuestions || 50}) — ${sessionData.passed ? 'APROBADO' : 'NO APROBADO'}</p>
            </div>
            <div class="forensic-filter-buttons">
              <button class="btn btn-secondary btn-xs ${this.forensicFilter === 'all' ? 'active' : ''}" data-forensic="all">Todas (50)</button>
              <button class="btn btn-secondary btn-xs ${this.forensicFilter === 'incorrect' ? 'active' : ''}" data-forensic="incorrect">Solo Falladas</button>
              <button class="btn btn-secondary btn-xs ${this.forensicFilter === 'correct' ? 'active' : ''}" data-forensic="correct">Solo Correctas</button>
              <button class="btn btn-secondary btn-xs ${this.forensicFilter === 'flagged' ? 'active' : ''}" data-forensic="flagged">Solo Marcadas</button>
            </div>
          </div>

          <div class="forensic-questions-list" id="forensic-questions-list">
            <!-- Rendered forensic items -->
          </div>

          <div class="forensic-footer">
            <button class="btn btn-primary" id="btn-forensic-exit-dash">Volver al Dashboard</button>
          </div>
        </div>
      `;

      // Bind filter buttons
      const filterBtns = qArea.querySelectorAll('[data-forensic]');
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          this.forensicFilter = btn.getAttribute('data-forensic');
          this.renderForensicReview(sessionData);
        });
      });

      const btnExit = document.getElementById('btn-forensic-exit-dash');
      if (btnExit) {
        btnExit.addEventListener('click', () => {
          this.isForensicReviewActive = false;
          if (app) app.navigateTo('dashboard');
        });
      }

      // Populate questions list
      const listEl = document.getElementById('forensic-questions-list');
      if (!listEl) return;

      const userAnswersMap = sessionData.userAnswers || this.userAnswers || {};

      questionsToReview.forEach((q, idx) => {
        const uAns = userAnswersMap[q.id] || { chosen: [], isFlagged: false };
        const correctAnswers = this.normalizeCorrectAnswers(q.correct);
        const uniqueChosen = Array.from(new Set((uAns.chosen || []).map(c => String(c).trim().toUpperCase()))).sort();
        const isCorrect = (uniqueChosen.length === correctAnswers.length) &&
                          uniqueChosen.every(opt => correctAnswers.includes(opt));
        const isFlagged = Boolean(uAns.isFlagged);

        // Forensic filter criteria
        if (this.forensicFilter === 'incorrect' && isCorrect) return;
        if (this.forensicFilter === 'correct' && !isCorrect) return;
        if (this.forensicFilter === 'flagged' && !isFlagged) return;

        const card = document.createElement('div');
        card.className = `forensic-card ${isCorrect ? 'forensic-pass' : 'forensic-fail'}`;

        card.innerHTML = `
          <div class="forensic-card-header">
            <span class="forensic-q-num">Pregunta ${idx + 1} (${q.id})</span>
            <span class="domain-tag">${q.domainId || ''}</span>
            <span class="badge ${isCorrect ? 'badge-success' : 'badge-danger'}">
              ${isCorrect ? '✓ CORRECTA' : '✖ FALLADA'}
            </span>
            ${isFlagged ? '<span class="badge badge-warning">⚑ Marcada</span>' : ''}
          </div>

          <div class="forensic-scenario">${q.scenario || ''}</div>

          <div class="forensic-options-review">
            ${(q.options || []).map(opt => {
              const isThisCorrect = correctAnswers.includes(opt.letter);
              const isThisChosen = uniqueChosen.includes(opt.letter);
              let optClass = '';
              if (isThisCorrect) optClass = 'option-correct';
              else if (isThisChosen && !isThisCorrect) optClass = 'option-incorrect';
              else optClass = 'option-neutral-distractor';

              return `
                <div class="option-card ${optClass}">
                  <div class="option-letter-badge">${opt.letter}</div>
                  <div class="option-content-text">${opt.text}</div>
                  <div class="option-feedback-status">
                    ${isThisCorrect ? '<span class="badge badge-success">✓ Correcta</span>' : ''}
                    ${isThisChosen && !isThisCorrect ? '<span class="badge badge-danger">✗ Tu Selección</span>' : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="forensic-justification-panel">
            <h4>Justificación Oficial Google Cloud</h4>
            <p>${q.explanation || ''}</p>

            <h4>Desglose de Opciones y Distractores</h4>
            <table class="distractor-table">
              <tbody>
                ${(q.options || []).map(opt => {
                  const isThisCorrect = correctAnswers.includes(opt.letter);
                  const dist = (q.distractors && q.distractors[opt.letter]) || (isThisCorrect ? 'Solución óptima.' : 'Distractor inválido.');
                  return `
                    <tr class="${isThisCorrect ? 'row-correct' : 'row-distractor'}">
                      <td style="width: 40px;"><strong>${opt.letter}</strong></td>
                      <td style="width: 100px;">
                        <span class="badge ${isThisCorrect ? 'badge-success' : 'badge-danger'}">${isThisCorrect ? '✅ Solución' : '❌ Distractor'}</span>
                      </td>
                      <td>${dist}</td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>

            ${q.gcloudCommand ? `
              <div class="feedback-section" style="margin-top: 1rem;">
                <h4>Comando gcloud CLI</h4>
                <pre class="code-terminal"><code>${q.gcloudCommand}</code></pre>
              </div>
            ` : ''}
          </div>
        `;

        listEl.appendChild(card);
      });
    },

    /**
     * Navigates to next question.
     */
    goToNextQuestion() {
      if (this.currentIndex + 1 < this.currentBlockQuestions.length) {
        this.renderQuestion(this.currentIndex + 1);
      }
    },

    /**
     * Navigates to previous question.
     */
    goToPrevQuestion() {
      if (this.currentIndex > 0) {
        this.renderQuestion(this.currentIndex - 1);
      }
    }
  };

  // Browser export
  if (typeof window !== 'undefined') {
    window.GCP_EXAM = GCP_EXAM;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.GCP_EXAM = GCP_EXAM;
  }

  // Node.js export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCP_EXAM;
  }

})(typeof window !== 'undefined' ? window : global);
