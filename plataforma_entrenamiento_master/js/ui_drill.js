/**
 * ui_drill.js
 * 
 * Weakness Drill Mode Controller for Google Cloud Certification Training Platform
 * 
 * Features:
 * 1. Leitner 4-level spaced repetition queue machine (Box 0-3, 3 consecutive hits to master).
 * 2. Rapid-Fire Keyboard shortcuts: 1-4 / A-D (select), Space/Enter (validate/next), F (flag), Esc (exit).
 * 3. Real-time 3-segment mastery gauge and streak HUD.
 * 4. Adaptive Weakness Remediation Queue auto-populated from failed and low-confidence items.
 * 5. Batch Completion Summary with 1-click repetition and progression triggers.
 * 
 * Dual Runtime Compatibility: Browser (window.GCP_DRILL) and Node.js (module.exports).
 */

(function (global) {
  'use strict';

  const GCP_DRILL = {
    queue: [],
    currentIndex: 0,
    selectedOption: null,
    isAnswerRevealed: false,
    selectedDomainFilter: 'ALL',
    sessionStats: {
      totalAttempted: 0,
      totalCorrect: 0,
      masteredThisSession: 0,
      currentStreak: 0,
      longestStreak: 0
    },
    questionStartTime: 0,
    failedInThisBatch: [],

    /**
     * Initializes Drill Mode event listeners and keyboard shortcuts.
     */
    init() {
      if (typeof document === 'undefined') return;

      const btnExit = document.getElementById('btn-drill-exit');
      const btnBackDash = document.getElementById('btn-drill-back-dash');

      if (btnExit) {
        btnExit.addEventListener('click', () => this.exitDrill());
      }
      if (btnBackDash) {
        btnBackDash.addEventListener('click', () => this.exitDrill());
      }

      // Bind global keyboard shortcuts
      if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
        window.addEventListener('keydown', (e) => this.handleKeyboardEvent(e));
      }
    },

    /**
     * Lifecycle hook called upon entering Drill Mode view.
     * @param {object} [params={}] 
     */
    onEnterView(params = {}) {
      this.sessionStats = {
        totalAttempted: 0,
        totalCorrect: 0,
        masteredThisSession: 0,
        currentStreak: 0,
        longestStreak: 0
      };
      this.failedInThisBatch = [];

      const app = global.GCP_APP;
      const certId = (app && app.activeCertId) || 'ace';

      this.renderDomainFilterChips(certId);

      if (params.domainId) {
        this.selectedDomainFilter = params.domainId;
      } else {
        this.selectedDomainFilter = 'ALL';
      }

      this.startDrillBatch(this.selectedDomainFilter);
    },

    /**
     * Renders domain selector chips for drill filtering.
     * @param {string} certId 
     */
    renderDomainFilterChips(certId) {
      const container = document.getElementById('drill-domain-chips-container');
      if (!container) return;

      container.innerHTML = '';
      const manifest = (global.GCP_MANIFEST && global.GCP_MANIFEST.certifications)
        ? global.GCP_MANIFEST.certifications[certId]
        : null;

      // Chip for ALL
      const allChip = document.createElement('button');
      allChip.className = `drill-domain-chip ${this.selectedDomainFilter === 'ALL' ? 'active' : ''}`;
      allChip.textContent = 'Todas las Debilidades';
      allChip.addEventListener('click', () => {
        container.querySelectorAll('.drill-domain-chip').forEach(c => c.classList.remove('active'));
        allChip.classList.add('active');
        this.selectedDomainFilter = 'ALL';
        this.startDrillBatch('ALL');
      });
      container.appendChild(allChip);

      if (manifest && manifest.domains) {
        Object.keys(manifest.domains).forEach(dKey => {
          const dom = manifest.domains[dKey];
          const chip = document.createElement('button');
          chip.className = `drill-domain-chip ${this.selectedDomainFilter === dKey ? 'active' : ''}`;
          chip.textContent = dom.shortName || dom.name;
          chip.addEventListener('click', () => {
            container.querySelectorAll('.drill-domain-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            this.selectedDomainFilter = dKey;
            this.startDrillBatch(dKey);
          });
          container.appendChild(chip);
        });
      }
    },

    /**
     * Starts a new 10-question drill batch from Leitner Spaced Repetition queue.
     * @param {string} [domainFilter='ALL'] 
     */
    startDrillBatch(domainFilter = 'ALL') {
      const app = global.GCP_APP;
      const certId = (app && app.activeCertId) || 'ace';
      const pool = (app && typeof app.getQuestionPool === 'function') ? app.getQuestionPool() : [];

      let candidatePool = pool;
      if (domainFilter && domainFilter !== 'ALL') {
        candidatePool = pool.filter(q => (q.domainId === domainFilter || q.domain === domainFilter));
      }

      if (candidatePool.length === 0) {
        candidatePool = pool;
      }

      const certState = (app && app.state && app.state.certifications && app.state.certifications[certId]) || {};
      const userQStates = certState.questionStates || {};

      // Select adaptive batch prioritizing Box 0, unseen, and weak items
      if (global.GCP_ENGINE && global.GCP_ENGINE.LeitnerEngine) {
        this.queue = global.GCP_ENGINE.LeitnerEngine.selectDrillBatch(
          candidatePool,
          userQStates,
          {},
          10
        );
      } else {
        // Fallback: shuffle and slice 10
        this.queue = [...candidatePool].sort(() => 0.5 - Math.random()).slice(0, 10);
      }

      this.currentIndex = 0;
      this.failedInThisBatch = [];
      this.selectedOption = null;
      this.isAnswerRevealed = false;

      const queueNum = document.getElementById('drill-queue-number');
      if (queueNum) queueNum.textContent = this.queue.length;

      if (this.queue.length === 0) {
        this.renderEmptyQueueMessage();
      } else {
        this.renderFlashcard(0);
      }
    },

    /**
     * Renders message when no weakness questions remain.
     */
    renderEmptyQueueMessage() {
      const scenarioEl = document.getElementById('drill-scenario-text');
      const gridEl = document.getElementById('drill-options-grid');
      const drawer = document.getElementById('drill-feedback-drawer');

      if (scenarioEl) {
        scenarioEl.innerHTML = `
          <div class="drill-complete-banner">
            <h3>Diagnóstico Completado: Sin preguntas pendientes de refuerzo</h3>
            <p>Has alcanzado el dominio en las preguntas evaluadas. Puedes reiniciar la ráfaga con todo el banco o practicar otro dominio.</p>
          </div>
        `;
      }
      if (gridEl) gridEl.innerHTML = '';
      if (drawer) drawer.style.display = 'none';
    },

    /**
     * Renders flashcard at index.
     * @param {number} index 
     */
    renderFlashcard(index) {
      if (typeof document === 'undefined') return;
      if (!this.queue || this.queue.length === 0) return;

      const safeIndex = Math.max(0, Math.min(index, this.queue.length - 1));
      this.currentIndex = safeIndex;
      const q = this.queue[safeIndex];
      if (!q) return;

      this.selectedOption = null;
      this.isAnswerRevealed = false;
      this.questionStartTime = Date.now();

      const app = global.GCP_APP;
      const certId = (app && app.activeCertId) || 'ace';
      const qState = (app && app.state && app.state.certifications[certId] && app.state.certifications[certId].questionStates[q.id]) || { streak: 0, box: 0 };

      // Update HUD & Mastery gauge
      this.renderMasteryGauge(qState.streak || 0);

      const queueNum = document.getElementById('drill-queue-number');
      if (queueNum) {
        queueNum.textContent = `${safeIndex + 1} / ${this.queue.length}`;
      }

      const domainTag = document.getElementById('drill-domain-tag');
      if (domainTag) {
        domainTag.textContent = `${q.domainId || 'Dominio'}: ${q.domainName || ''}`;
      }

      const qidTag = document.getElementById('drill-qid-tag');
      if (qidTag) {
        qidTag.textContent = q.id;
      }

      // Scenario text
      const scenarioEl = document.getElementById('drill-scenario-text');
      if (scenarioEl) {
        scenarioEl.textContent = q.scenario || '';
      }

      // Options Grid
      const grid = document.getElementById('drill-options-grid');
      if (grid) {
        grid.innerHTML = '';
        const fragment = document.createDocumentFragment();
        const options = q.options || [];

        options.forEach((opt, optIdx) => {
          const card = document.createElement('div');
          card.className = 'drill-option-card';
          card.setAttribute('data-letter', opt.letter);

          const hotkeyNumber = optIdx + 1;
          card.innerHTML = `
            <div class="drill-hotkey-badge">${hotkeyNumber} / ${opt.letter}</div>
            <div class="drill-option-text">${opt.text}</div>
          `;

          card.addEventListener('click', () => {
            this.selectAndSubmitOption(opt.letter);
          });

          fragment.appendChild(card);
        });

        grid.appendChild(fragment);
      }

      // Hide feedback drawer
      const drawer = document.getElementById('drill-feedback-drawer');
      if (drawer) {
        drawer.style.display = 'none';
      }
    },

    /**
     * Renders 3-segment mastery level dots.
     * @param {number} streak 
     */
    renderMasteryGauge(streak) {
      const dot1 = document.getElementById('drill-dot-1');
      const dot2 = document.getElementById('drill-dot-2');
      const dot3 = document.getElementById('drill-dot-3');
      const textEl = document.getElementById('drill-mastery-text');

      const s = Math.max(0, streak || 0);

      if (dot1) dot1.className = `mastery-dot ${s >= 1 ? 'dot-filled' : ''}`;
      if (dot2) dot2.className = `mastery-dot ${s >= 2 ? 'dot-filled' : ''}`;
      if (dot3) dot3.className = `mastery-dot ${s >= 3 ? 'dot-mastered' : ''}`;

      if (textEl) {
        if (s >= 3) {
          textEl.innerHTML = '<strong class="text-green">¡DOMINADA! (Box 3)</strong>';
        } else if (s === 2) {
          textEl.textContent = '2 / 3 Aciertos (Box 2: Repaso)';
        } else if (s === 1) {
          textEl.textContent = '1 / 3 Aciertos (Box 1: Aprendiendo)';
        } else {
          textEl.textContent = '0 / 3 Aciertos (Box 0: Práctica)';
        }
      }
    },

    /**
     * Selects and validates an option immediately.
     * @param {string} letter 
     */
    selectAndSubmitOption(letter) {
      if (this.isAnswerRevealed) return;

      const q = this.queue[this.currentIndex];
      if (!q) return;

      const upper = letter.toUpperCase();
      this.selectedOption = upper;
      this.isAnswerRevealed = true;

      const correctAnswers = Array.isArray(q.correct)
        ? q.correct.map(c => String(c).trim().toUpperCase())
        : [String(q.correct || '').trim().toUpperCase()];

      const isCorrect = correctAnswers.includes(upper);
      const responseTimeMs = Date.now() - this.questionStartTime;

      // Update session statistics
      this.sessionStats.totalAttempted++;
      if (isCorrect) {
        this.sessionStats.totalCorrect++;
        this.sessionStats.currentStreak++;
        if (this.sessionStats.currentStreak > this.sessionStats.longestStreak) {
          this.sessionStats.longestStreak = this.sessionStats.currentStreak;
        }
      } else {
        this.sessionStats.currentStreak = 0;
        this.failedInThisBatch.push(q);
      }

      // Update Leitner Spaced Repetition Engine
      const app = global.GCP_APP;
      const certId = (app && app.activeCertId) || 'ace';
      let wasMastered = false;

      if (app && app.state && global.GCP_ENGINE && global.GCP_ENGINE.LeitnerEngine) {
        if (!app.state.certifications[certId]) {
          app.state.certifications[certId] = { questionStates: {}, history: [] };
        }
        const currentQS = app.state.certifications[certId].questionStates[q.id] || null;
        const updatedQS = global.GCP_ENGINE.LeitnerEngine.processAnswer(
          currentQS,
          isCorrect,
          upper,
          responseTimeMs
        );

        if (currentQS) {
          updatedQS.isBookmarked = Boolean(currentQS.isBookmarked);
          updatedQS.userNote = currentQS.userNote || '';
        }

        if (updatedQS.isMastered && (!currentQS || !currentQS.isMastered)) {
          wasMastered = true;
          this.sessionStats.masteredThisSession++;
        }

        app.state.certifications[certId].questionStates[q.id] = updatedQS;
        if (global.GCP_STATE) global.GCP_STATE.saveState(app.state);

        this.renderMasteryGauge(updatedQS.streak || 0);
      }

      // Play procedural audio
      if (app && app.playSound) {
        if (wasMastered) {
          app.playSound('streak');
        } else {
          app.playSound(isCorrect ? 'correct' : 'incorrect');
        }
      }

      // Visual feedback on options
      const grid = document.getElementById('drill-options-grid');
      if (grid) {
        const cards = grid.querySelectorAll('.drill-option-card');
        cards.forEach(card => {
          const l = card.getAttribute('data-letter');
          if (correctAnswers.includes(l)) {
            card.classList.add('option-correct');
          } else if (l === upper && !isCorrect) {
            card.classList.add('option-incorrect');
          } else {
            card.classList.add('option-neutral-distractor');
          }
        });
      }

      // Render feedback drawer
      const drawer = document.getElementById('drill-feedback-drawer');
      const resultBanner = document.getElementById('drill-result-banner');
      const explText = document.getElementById('drill-explanation-text');

      if (drawer) drawer.style.display = 'block';

      if (resultBanner) {
        resultBanner.className = `drill-result-banner ${isCorrect ? 'result-correct' : 'result-incorrect'}`;
        resultBanner.innerHTML = isCorrect
          ? `<strong>Correcto</strong> ${wasMastered ? '— Pregunta dominada (3 aciertos consecutivos)' : `(Racha: ${this.sessionStats.currentStreak} seguidas)`}`
          : `<strong>Incorrecto</strong> — Opción correcta: <strong>${correctAnswers.join(', ')}</strong>`;
      }

      if (explText) {
        explText.innerHTML = `<p>${q.explanation || ''}</p>`;
      }
    },

    /**
     * Advances to next question in queue or finishes batch.
     */
    nextDrillQuestion() {
      if (!this.isAnswerRevealed) {
        // If user presses Space without selecting an option, evaluate Option A as default or do nothing
        return;
      }

      if (this.currentIndex + 1 < this.queue.length) {
        this.renderFlashcard(this.currentIndex + 1);
      } else {
        this.renderSessionSummary();
      }
    },

    /**
     * Renders End-of-Batch summary card.
     */
    renderSessionSummary() {
      const scenarioEl = document.getElementById('drill-scenario-text');
      const gridEl = document.getElementById('drill-options-grid');
      const drawer = document.getElementById('drill-feedback-drawer');

      if (drawer) drawer.style.display = 'none';
      if (gridEl) gridEl.innerHTML = '';

      const total = this.sessionStats.totalAttempted || 1;
      const correct = this.sessionStats.totalCorrect || 0;
      const acc = Math.round((correct / total) * 100);

      if (scenarioEl) {
        scenarioEl.innerHTML = `
          <div class="drill-summary-card">
            <h3>Sesión de Refuerzo Completada</h3>
            
            <div class="drill-summary-metrics">
              <div class="summary-metric">
                <span class="sm-label">Aciertos:</span>
                <strong class="sm-value ${acc >= 70 ? 'text-green' : 'text-yellow'}">${correct} / ${total} (${acc}%)</strong>
              </div>
              <div class="summary-metric">
                <span class="sm-label">Dominadas en Sesión:</span>
                <strong class="sm-value text-green">+${this.sessionStats.masteredThisSession}</strong>
              </div>
              <div class="summary-metric">
                <span class="sm-label">Mejor Racha:</span>
                <strong class="sm-value">${this.sessionStats.longestStreak} seguidas</strong>
              </div>
            </div>

            <div class="drill-summary-actions">
              <button class="btn btn-primary" id="btn-drill-next-batch">Siguiente Ráfaga (10 Preguntas)</button>
              ${this.failedInThisBatch.length > 0 ? `<button class="btn btn-warning" id="btn-drill-retry-failed">Repetir Falladas (${this.failedInThisBatch.length})</button>` : ''}
              <button class="btn btn-secondary" id="btn-drill-return-dash">Volver al Dashboard</button>
            </div>
          </div>
        `;

        const btnNextBatch = document.getElementById('btn-drill-next-batch');
        const btnRetryFailed = document.getElementById('btn-drill-retry-failed');
        const btnReturnDash = document.getElementById('btn-drill-return-dash');

        if (btnNextBatch) {
          btnNextBatch.addEventListener('click', () => {
            this.startDrillBatch(this.selectedDomainFilter);
          });
        }
        if (btnRetryFailed) {
          btnRetryFailed.addEventListener('click', () => {
            this.queue = [...this.failedInThisBatch];
            this.currentIndex = 0;
            this.failedInThisBatch = [];
            this.renderFlashcard(0);
          });
        }
        if (btnReturnDash) {
          btnReturnDash.addEventListener('click', () => {
            if (global.GCP_APP) global.GCP_APP.navigateTo('dashboard');
          });
        }
      }
    },

    /**
     * Handles keyboard events for rapid-fire drilling.
     * @param {KeyboardEvent} e 
     */
    handleKeyboardEvent(e) {
      const app = global.GCP_APP;
      if (!app || app.activeView !== 'drill') return;

      // Ignore when user is typing inside text input / textarea / modal
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      const openModal = (typeof document !== 'undefined' && typeof document.querySelector === 'function')
        ? document.querySelector('.modal-backdrop.active')
        : null;
      if (openModal) return;

      const key = e.key;

      // Esc: exit
      if (key === 'Escape') {
        e.preventDefault();
        this.exitDrill();
        return;
      }

      // F: Bookmark / Flag current question
      if (key === 'f' || key === 'F') {
        e.preventDefault();
        const q = this.queue[this.currentIndex];
        if (q && app.state) {
          const certId = app.activeCertId || 'ace';
          const qState = (app.state.certifications[certId] && app.state.certifications[certId].questionStates[q.id]);
          if (qState) {
            qState.isBookmarked = !qState.isBookmarked;
            if (global.GCP_STATE) global.GCP_STATE.saveState(app.state);
            if (app.showToast) {
              app.showToast(qState.isBookmarked ? 'Pregunta guardada en Marcadores ⭐' : 'Pregunta desmarcada', 'info');
            }
          }
        }
        return;
      }

      // Space or Enter: Advance to next question or reveal
      if (key === ' ' || key === 'Enter') {
        e.preventDefault();
        if (this.isAnswerRevealed) {
          this.nextDrillQuestion();
        }
        return;
      }

      // Option selection keys: 1-4 or A-D
      if (!this.isAnswerRevealed) {
        let optionLetter = null;
        if (key === '1' || key === 'a' || key === 'A') optionLetter = 'A';
        else if (key === '2' || key === 'b' || key === 'B') optionLetter = 'B';
        else if (key === '3' || key === 'c' || key === 'C') optionLetter = 'C';
        else if (key === '4' || key === 'd' || key === 'D') optionLetter = 'D';

        if (optionLetter) {
          e.preventDefault();
          this.selectAndSubmitOption(optionLetter);
        }
      }
    },

    /**
     * Exits drill mode and returns to dashboard.
     */
    exitDrill() {
      if (global.GCP_APP) {
        global.GCP_APP.navigateTo('dashboard');
      }
    }
  };

  // Browser global export
  if (typeof window !== 'undefined') {
    window.GCP_DRILL = GCP_DRILL;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.GCP_DRILL = GCP_DRILL;
  }

  // Node.js export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCP_DRILL;
  }

})(typeof window !== 'undefined' ? window : global);
