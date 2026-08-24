/**
 * ui_study.js
 * 
 * Interactive Study Mode Controller for Google Cloud Certification Training Platform
 * 
 * Features:
 * 1. Self-paced sequential and domain-filtered question navigation.
 * 2. Instant visual validation on option click (single-select) or reveal button (multi-select).
 * 3. Deep Technical Justification Panel with Google Cloud Architectural Doctrine.
 * 4. Distractor Traps Analysis Table (line-by-line explanation of why each option is invalid).
 * 5. Interactive Trigger Keyword Chip highlight engine with scenario glow tags.
 * 6. Formatted gcloud CLI / Terraform code snippet box with 1-click clipboard copy.
 * 7. In-situ user notes and bookmark state persistence linked with Leitner spaced repetition.
 * 
 * Dual Runtime Compatibility: Browser (window.GCP_STUDY) and Node.js (module.exports).
 */

(function (global) {
  'use strict';

  const GCP_STUDY = {
    currentQuestionIndex: 0,
    filteredQuestions: [],
    selectedDomain: 'ALL',
    selectedOptions: new Set(),
    isAnswerSubmitted: false,
    questionStartTime: 0,
    rawScenarioText: '',

    /**
     * Initializes study mode DOM event handlers.
     */
    init() {
      if (typeof document === 'undefined') return;

      // Domain Filter Dropdown
      const domainFilterSelect = document.getElementById('study-domain-filter-select');
      if (domainFilterSelect) {
        domainFilterSelect.addEventListener('change', (e) => {
          this.selectedDomain = e.target.value;
          this.filterQuestions();
        });
      }

      // Jump Selector Dropdown
      const jumpSelect = document.getElementById('study-jump-select');
      if (jumpSelect) {
        jumpSelect.addEventListener('change', (e) => {
          const idx = parseInt(e.target.value, 10);
          if (!isNaN(idx) && idx >= 0 && idx < this.filteredQuestions.length) {
            this.renderQuestion(idx);
          }
        });
      }

      // Navigation Buttons
      const btnPrev = document.getElementById('btn-study-prev');
      const btnNext = document.getElementById('btn-study-next');
      const btnReveal = document.getElementById('btn-study-reveal');
      const btnBackDash = document.getElementById('btn-study-back-dash');

      if (btnPrev) btnPrev.addEventListener('click', () => this.goToPrevQuestion());
      if (btnNext) btnNext.addEventListener('click', () => this.goToNextQuestion());
      if (btnReveal) btnReveal.addEventListener('click', () => this.submitAnswer());
      if (btnBackDash) {
        btnBackDash.addEventListener('click', () => {
          if (global.GCP_APP) global.GCP_APP.navigateTo('dashboard');
        });
      }

      // Bookmark / Flag button
      const btnFlag = document.getElementById('btn-study-flag');
      if (btnFlag) {
        btnFlag.addEventListener('click', () => this.toggleBookmark());
      }

      // Copy CLI button
      const btnCopyCli = document.getElementById('btn-copy-study-cli');
      if (btnCopyCli) {
        btnCopyCli.addEventListener('click', () => this.copyCliSnippet());
      }

      // Save Notes button
      const btnSaveNotes = document.getElementById('btn-save-study-notes');
      if (btnSaveNotes) {
        btnSaveNotes.addEventListener('click', () => {
          const q = this.filteredQuestions[this.currentQuestionIndex];
          const ta = document.getElementById('study-notes-textarea');
          if (q && ta) {
            this.saveUserNote(q.id, ta.value.trim());
            if (global.GCP_APP && global.GCP_APP.showToast) {
              global.GCP_APP.showToast('Nota de estudio guardada con éxito 📝', 'success');
            }
          }
        });
      }

      // Drill Failed items button
      const btnDrillFailed = document.getElementById('btn-study-drill-failed');
      if (btnDrillFailed) {
        btnDrillFailed.addEventListener('click', () => {
          if (global.GCP_APP) global.GCP_APP.navigateTo('drill');
        });
      }
    },

    /**
     * Lifecycle hook called upon entering Study Mode view.
     * @param {object} [params={}] 
     */
    onEnterView(params = {}) {
      const app = global.GCP_APP;
      const certId = (app && app.activeCertId) || 'ace';
      const pool = (app && typeof app.getQuestionPool === 'function') ? app.getQuestionPool() : [];

      // Populate Domain Filter dropdown
      this.populateDomainFilterOptions(certId);

      // Handle domain filter param if provided
      if (params.domainId) {
        this.selectedDomain = params.domainId;
        const sel = document.getElementById('study-domain-filter-select');
        if (sel) sel.value = params.domainId;
      }

      this.filterQuestions(params.questionIndex || 0);
    },

    /**
     * Populates the domain selector dropdown with official domains from manifest.
     * @param {string} certId 
     */
    populateDomainFilterOptions(certId) {
      if (typeof document === 'undefined') return;
      const sel = document.getElementById('study-domain-filter-select');
      if (!sel) return;

      sel.innerHTML = '<option value="ALL">Todos los dominios (Banco Completo)</option>';

      const manifest = (global.GCP_MANIFEST && global.GCP_MANIFEST.certifications)
        ? global.GCP_MANIFEST.certifications[certId]
        : null;

      if (manifest && manifest.domains) {
        Object.keys(manifest.domains).forEach(dKey => {
          const dom = manifest.domains[dKey];
          const opt = document.createElement('option');
          opt.value = dKey;
          opt.textContent = `${dom.id}: ${dom.shortName || dom.name}`;
          sel.appendChild(opt);
        });
      }

      sel.value = this.selectedDomain;
    },

    /**
     * Filters active question pool by selected domain.
     * @param {number} [targetIndex=0] 
     */
    filterQuestions(targetIndex = 0) {
      const app = global.GCP_APP;
      const allQuestions = (app && typeof app.getQuestionPool === 'function') ? app.getQuestionPool() : [];

      if (this.selectedDomain === 'ALL') {
        this.filteredQuestions = [...allQuestions];
      } else {
        this.filteredQuestions = allQuestions.filter(q => (q.domainId === this.selectedDomain || q.domain === this.selectedDomain));
      }

      if (this.filteredQuestions.length === 0) {
        this.filteredQuestions = [...allQuestions];
      }

      // Populate jump select
      this.populateJumpSelect();

      const safeIdx = Math.max(0, Math.min(targetIndex, this.filteredQuestions.length - 1));
      this.renderQuestion(safeIdx);
    },

    /**
     * Populates the jump select dropdown.
     */
    populateJumpSelect() {
      if (typeof document === 'undefined') return;
      const jumpSelect = document.getElementById('study-jump-select');
      if (!jumpSelect) return;

      jumpSelect.innerHTML = '';
      const fragment = document.createDocumentFragment();

      this.filteredQuestions.forEach((q, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = `Pregunta ${idx + 1}: ${(q.title || q.id || '').substring(0, 32)}...`;
        fragment.appendChild(opt);
      });

      jumpSelect.appendChild(fragment);
    },

    /**
     * Normalizes correct answers to an array of uppercase strings.
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
     * Renders a question card at specified index.
     * @param {number} index 
     */
    renderQuestion(index) {
      if (typeof document === 'undefined') return;
      if (!this.filteredQuestions || this.filteredQuestions.length === 0) return;

      const safeIndex = Math.max(0, Math.min(index, this.filteredQuestions.length - 1));
      this.currentQuestionIndex = safeIndex;
      const q = this.filteredQuestions[safeIndex];
      if (!q) return;

      this.selectedOptions.clear();
      this.isAnswerSubmitted = false;
      this.questionStartTime = Date.now();
      this.rawScenarioText = q.scenario || '';

      // Update Header Meta
      const counterEl = document.getElementById('study-question-counter');
      if (counterEl) {
        counterEl.textContent = `Pregunta ${safeIndex + 1} de ${this.filteredQuestions.length}`;
      }

      const domainTagEl = document.getElementById('study-domain-tag');
      if (domainTagEl) {
        domainTagEl.textContent = `${q.domainId || 'Dominio'}: ${q.domainName || ''}`;
      }

      const diffBadge = document.getElementById('study-diff-badge');
      if (diffBadge) {
        const diff = (q.difficulty || 'intermediate').toLowerCase();
        diffBadge.textContent = diff.toUpperCase();
        diffBadge.className = `tag tag-difficulty diff-${diff}`;
      }

      const bloomBadge = document.getElementById('study-bloom-badge');
      if (bloomBadge) {
        bloomBadge.textContent = (q.bloomsLevel || 'apply').toUpperCase();
      }

      const csBadge = document.getElementById('study-case-study-badge');
      if (csBadge) {
        if (q.caseStudy && q.caseStudy !== 'none') {
          csBadge.style.display = 'inline-block';
          csBadge.textContent = `Caso: ${q.caseStudy.replace(/_/g, ' ').toUpperCase()}`;
        } else {
          csBadge.style.display = 'none';
        }
      }

      const titleEl = document.getElementById('study-question-title');
      if (titleEl) {
        titleEl.textContent = q.title || `Pregunta ${q.id}`;
      }

      // Update Scenario text
      const scenarioEl = document.getElementById('study-scenario-text');
      if (scenarioEl) {
        scenarioEl.textContent = this.rawScenarioText;
      }

      // Update Jump Select value
      const jumpSelect = document.getElementById('study-jump-select');
      if (jumpSelect) {
        jumpSelect.value = safeIndex;
      }

      // Update Bookmark button
      this.updateBookmarkButton(q.id);

      // Render Trigger Keywords Bar
      this.renderKeywordsBar(q.keywords || []);

      // Render Options Container
      this.renderOptions(q);

      // Hide Justification Drawer until submitted
      const drawer = document.getElementById('study-justification-drawer');
      if (drawer) {
        drawer.style.display = 'none';
      }

      // Action bar buttons
      const btnReveal = document.getElementById('btn-study-reveal');
      if (btnReveal) {
        btnReveal.style.display = q.isMultiSelect ? 'inline-flex' : 'none';
        btnReveal.disabled = true;
      }
    },

    /**
     * Renders Trigger Keyword chips.
     * @param {Array<string>} keywords 
     */
    renderKeywordsBar(keywords) {
      const container = document.getElementById('study-keywords-bar');
      if (!container) return;

      container.innerHTML = '';
      if (!Array.isArray(keywords) || keywords.length === 0) {
        container.style.display = 'none';
        return;
      }

      container.style.display = 'flex';
      const label = document.createElement('span');
      label.className = 'keywords-label';
      label.textContent = 'Palabras Clave:';
      container.appendChild(label);

      keywords.forEach(kw => {
        const chip = document.createElement('button');
        chip.className = 'chip-keyword';
        chip.setAttribute('type', 'button');
        chip.setAttribute('data-keyword', kw);
        chip.textContent = kw;

        // Hover & Click triggers scenario highlighting
        chip.addEventListener('mouseenter', () => this.highlightKeywordInScenario(kw));
        chip.addEventListener('mouseleave', () => this.resetScenarioHighlight());
        chip.addEventListener('click', () => this.highlightKeywordInScenario(kw));

        container.appendChild(chip);
      });
    },

    /**
     * Highlights matching keyword phrases inside the scenario box.
     * @param {string} keyword 
     */
    highlightKeywordInScenario(keyword) {
      const scenarioEl = document.getElementById('study-scenario-text');
      if (!scenarioEl || !keyword) return;

      const raw = this.rawScenarioText;
      try {
        // Escape special regex characters
        const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(${escaped})`, 'gi');
        scenarioEl.innerHTML = raw.replace(regex, '<mark class="scenario-keyword-highlight">$1</mark>');
      } catch (err) {
        scenarioEl.textContent = raw;
      }
    },

    /**
     * Resets scenario text back to plain text.
     */
    resetScenarioHighlight() {
      const scenarioEl = document.getElementById('study-scenario-text');
      if (scenarioEl) {
        scenarioEl.textContent = this.rawScenarioText;
      }
    },

    /**
     * Renders options list.
     * @param {object} question 
     */
    renderOptions(question) {
      const container = document.getElementById('study-options-container');
      if (!container) return;

      container.innerHTML = '';
      const fragment = document.createDocumentFragment();
      const options = question.options || [];

      options.forEach(opt => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        optionCard.setAttribute('role', question.isMultiSelect ? 'checkbox' : 'radio');
        optionCard.setAttribute('aria-checked', 'false');
        optionCard.setAttribute('data-letter', opt.letter);

        optionCard.innerHTML = `
          <div class="option-letter-badge">${opt.letter}</div>
          <div class="option-content-text">${opt.text}</div>
          <div class="option-feedback-status"></div>
        `;

        optionCard.addEventListener('click', () => {
          this.selectOption(opt.letter);
        });

        fragment.appendChild(optionCard);
      });

      container.appendChild(fragment);
    },

    /**
     * Handles option selection.
     * @param {string} letter 
     */
    selectOption(letter) {
      if (this.isAnswerSubmitted) return;

      const q = this.filteredQuestions[this.currentQuestionIndex];
      if (!q) return;

      const app = global.GCP_APP;
      if (app && typeof app.playSound === 'function') {
        app.playSound('click');
      }

      if (!q.isMultiSelect) {
        // Single Select: select immediately and evaluate
        this.selectedOptions.clear();
        this.selectedOptions.add(letter.toUpperCase());
        this.updateOptionsVisualSelection();
        this.submitAnswer();
      } else {
        // Multi Select: toggle selection
        const upper = letter.toUpperCase();
        if (this.selectedOptions.has(upper)) {
          this.selectedOptions.delete(upper);
        } else {
          this.selectedOptions.add(upper);
        }
        this.updateOptionsVisualSelection();

        const btnReveal = document.getElementById('btn-study-reveal');
        if (btnReveal) {
          const expected = q.expectedSelectCount || 2;
          btnReveal.disabled = (this.selectedOptions.size === 0);
          if (this.selectedOptions.size === expected) {
            btnReveal.classList.add('btn-pulse');
          } else {
            btnReveal.classList.remove('btn-pulse');
          }
        }
      }
    },

    /**
     * Updates `.selected` classes on option cards.
     */
    updateOptionsVisualSelection() {
      const container = document.getElementById('study-options-container');
      if (!container) return;

      const cards = container.querySelectorAll('.option-card');
      cards.forEach(card => {
        const letter = card.getAttribute('data-letter');
        if (this.selectedOptions.has(letter)) {
          card.classList.add('selected');
          card.setAttribute('aria-checked', 'true');
        } else {
          card.classList.remove('selected');
          card.setAttribute('aria-checked', 'false');
        }
      });
    },

    /**
     * Evaluates and submits user response.
     */
    submitAnswer() {
      if (this.isAnswerSubmitted || this.selectedOptions.size === 0) return;

      const q = this.filteredQuestions[this.currentQuestionIndex];
      if (!q) return;

      this.isAnswerSubmitted = true;
      const app = global.GCP_APP;
      const correctAnswers = this.normalizeCorrectAnswers(q.correct);
      const uniqueChosen = Array.from(new Set(Array.from(this.selectedOptions || []).map(c => String(c).trim().toUpperCase()))).sort();

      // Check if user answer matches 100%
      const isCorrect = (uniqueChosen.length === correctAnswers.length) &&
                        uniqueChosen.every(opt => correctAnswers.includes(opt));

      // Play audio feedback
      if (app && typeof app.playSound === 'function') {
        app.playSound(isCorrect ? 'correct' : 'incorrect');
      }

      // Visual updates on options
      const container = document.getElementById('study-options-container');
      if (container) {
        const cards = container.querySelectorAll('.option-card');
        cards.forEach(card => {
          const letter = card.getAttribute('data-letter');
          const statusEl = card.querySelector('.option-feedback-status');
          const isThisCorrect = correctAnswers.includes(letter);
          const isThisChosen = this.selectedOptions.has(letter);

          if (isThisCorrect) {
            card.classList.add('option-correct');
            if (statusEl) statusEl.innerHTML = '<span class="badge badge-success">✓ Correcta</span>';
          } else if (isThisChosen && !isThisCorrect) {
            card.classList.add('option-incorrect');
            if (statusEl) statusEl.innerHTML = '<span class="badge badge-danger">✗ Tu Selección</span>';
          } else {
            card.classList.add('option-neutral-distractor');
          }
        });
      }

      // Update Leitner Engine State in state store
      const certId = (app && app.activeCertId) || 'ace';
      const responseTimeMs = Date.now() - this.questionStartTime;

      if (app && app.state && global.GCP_ENGINE && global.GCP_ENGINE.LeitnerEngine) {
        if (!app.state.certifications[certId]) {
          app.state.certifications[certId] = { questionStates: {}, history: [] };
        }
        const currentQState = app.state.certifications[certId].questionStates[q.id] || null;
        const updatedQState = global.GCP_ENGINE.LeitnerEngine.processAnswer(
          currentQState,
          isCorrect,
          uniqueChosen.join(','),
          responseTimeMs
        );

        // Preserve bookmark and user notes
        if (currentQState) {
          updatedQState.isBookmarked = Boolean(currentQState.isBookmarked);
          updatedQState.userNote = currentQState.userNote || '';
        }
        app.state.certifications[certId].questionStates[q.id] = updatedQState;

        if (global.GCP_STATE) {
          global.GCP_STATE.saveState(app.state);
        }
      }

      // Render Justification Drawer
      this.renderJustificationDrawer(q, isCorrect, correctAnswers);
    },

    /**
     * Renders the deep technical justification panel.
     * @param {object} question 
     * @param {boolean} isCorrect 
     * @param {Array<string>} correctAnswers 
     */
    renderJustificationDrawer(question, isCorrect, correctAnswers) {
      const drawer = document.getElementById('study-justification-drawer');
      if (!drawer) return;

      drawer.style.display = 'block';

      // Feedback banner
      const banner = document.getElementById('study-feedback-banner');
      const statusText = document.getElementById('study-feedback-status');
      const iconEl = document.getElementById('study-feedback-icon');

      if (banner) {
        banner.className = `feedback-banner ${isCorrect ? 'banner-correct' : 'banner-incorrect'}`;
      }
      if (statusText) {
        statusText.innerHTML = isCorrect
          ? '<strong>¡Excelente! Respuesta Correcta</strong>'
          : `<strong>Respuesta Incorrecta</strong> — La opción válida es: <strong>${correctAnswers.join(', ')}</strong>`;
      }
      if (iconEl) {
        iconEl.innerHTML = isCorrect ? '✓' : '✖';
      }

      // Architectural Principle
      const explEl = document.getElementById('study-explanation-text');
      if (explEl) {
        explEl.innerHTML = `<p>${question.explanation || 'Justificación oficial de Google Cloud recomendada.'}</p>`;
      }

      // Distractors Table
      const distBody = document.getElementById('study-distractors-body');
      if (distBody) {
        distBody.innerHTML = '';
        const distractors = question.distractors || {};
        const options = question.options || [];

        options.forEach(opt => {
          const isThisCorrect = correctAnswers.includes(opt.letter);
          const distText = distractors[opt.letter] || (isThisCorrect ? 'Solución óptima recomendada por Google Cloud.' : 'No cumple con las mejores prácticas arquitectónicas.');
          const tr = document.createElement('tr');
          tr.className = isThisCorrect ? 'row-correct' : 'row-distractor';

          tr.innerHTML = `
            <td><strong>${opt.letter}</strong></td>
            <td>
              <span class="badge ${isThisCorrect ? 'badge-success' : 'badge-danger'}">
                ${isThisCorrect ? '✅ Solución' : '❌ Distractor'}
              </span>
            </td>
            <td>${distText}</td>
          `;
          distBody.appendChild(tr);
        });
      }

      // gcloud CLI or Terraform section
      const cliSection = document.getElementById('study-cli-section');
      const cliCode = document.getElementById('study-cli-code');
      const cliSnippet = question.gcloudCommand || question.terraformSnippet || '';

      if (cliSection && cliCode) {
        if (cliSnippet) {
          cliSection.style.display = 'block';
          cliCode.textContent = cliSnippet;
        } else {
          cliSection.style.display = 'none';
        }
      }

      // Official Docs URL
      const docSection = document.getElementById('study-doc-section');
      const docLink = document.getElementById('study-doc-link');
      if (docSection && docLink) {
        if (question.officialDocUrl) {
          docSection.style.display = 'block';
          docLink.href = question.officialDocUrl;
        } else {
          docSection.style.display = 'none';
        }
      }

      // In-situ Notes textarea
      let notesContainer = document.getElementById('study-notes-container');
      if (!notesContainer) {
        notesContainer = document.createElement('div');
        notesContainer.id = 'study-notes-container';
        notesContainer.className = 'feedback-section feedback-notes-section';
        notesContainer.innerHTML = `
          <h4>Tus Notas Personales de Estudio</h4>
          <textarea id="study-note-textarea" class="form-textarea" placeholder="Escribe aquí apuntes, recordatorios o conceptos clave para esta pregunta..."></textarea>
        `;
        const feedbackBody = drawer.querySelector('.feedback-body');
        if (feedbackBody) feedbackBody.appendChild(notesContainer);
      }

      const noteTextarea = document.getElementById('study-note-textarea');
      if (noteTextarea) {
        const app = global.GCP_APP;
        const certId = (app && app.activeCertId) || 'ace';
        const qState = (app && app.state && app.state.certifications[certId] && app.state.certifications[certId].questionStates[question.id]);
        noteTextarea.value = (qState && qState.userNote) || '';

        noteTextarea.oninput = () => {
          this.saveUserNote(question.id, noteTextarea.value);
        };
      }
    },

    /**
     * Saves user personal note for question.
     * @param {string} questionId 
     * @param {string} noteText 
     */
    saveUserNote(questionId, noteText) {
      const app = global.GCP_APP;
      if (!app || !app.state) return;
      const certId = app.activeCertId || 'ace';
      if (!app.state.certifications[certId]) {
        app.state.certifications[certId] = { questionStates: {}, history: [] };
      }
      if (!app.state.certifications[certId].questionStates[questionId]) {
        app.state.certifications[certId].questionStates[questionId] = { box: 0, streak: 0, totalAttempts: 0, history: [] };
      }
      app.state.certifications[certId].questionStates[questionId].userNote = noteText;
      if (global.GCP_STATE) {
        global.GCP_STATE.saveState(app.state);
      }
    },

    /**
     * Toggles bookmark for current question.
     */
    toggleBookmark() {
      const q = this.filteredQuestions[this.currentQuestionIndex];
      if (!q) return;

      const app = global.GCP_APP;
      if (!app || !app.state) return;
      const certId = app.activeCertId || 'ace';

      if (!app.state.certifications[certId]) {
        app.state.certifications[certId] = { questionStates: {}, history: [] };
      }
      if (!app.state.certifications[certId].questionStates[q.id]) {
        app.state.certifications[certId].questionStates[q.id] = { box: 0, streak: 0, totalAttempts: 0, history: [] };
      }

      const qState = app.state.certifications[certId].questionStates[q.id];
      qState.isBookmarked = !qState.isBookmarked;

      if (global.GCP_STATE) {
        global.GCP_STATE.saveState(app.state);
      }

      this.updateBookmarkButton(q.id);

      if (app.showToast) {
        app.showToast(qState.isBookmarked ? 'Pregunta guardada en Marcadores ⭐' : 'Pregunta desmarcada', 'info');
      }
    },

    /**
     * Updates visual state of bookmark flag button.
     * @param {string} questionId 
     */
    updateBookmarkButton(questionId) {
      const btnFlag = document.getElementById('btn-study-flag');
      if (!btnFlag) return;

      const app = global.GCP_APP;
      const certId = (app && app.activeCertId) || 'ace';
      const qState = (app && app.state && app.state.certifications[certId] && app.state.certifications[certId].questionStates[questionId]);
      const isBookmarked = Boolean(qState && qState.isBookmarked);

      if (isBookmarked) {
        btnFlag.classList.add('active', 'flagged');
        btnFlag.setAttribute('aria-pressed', 'true');
        btnFlag.setAttribute('title', 'Pregunta marcada en tus favoritos');
      } else {
        btnFlag.classList.remove('active', 'flagged');
        btnFlag.setAttribute('aria-pressed', 'false');
        btnFlag.setAttribute('title', 'Marcar pregunta');
      }
    },

    /**
     * Copies the active gcloud/Terraform command snippet to clipboard.
     */
    copyCliSnippet() {
      const codeEl = document.getElementById('study-cli-code');
      if (!codeEl) return;
      const text = codeEl.textContent || '';
      if (!text) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          if (global.GCP_APP) global.GCP_APP.showToast('Comando copiado al portapapeles 📋', 'success');
        }).catch(() => {
          this._fallbackCopyText(text);
        });
      } else {
        this._fallbackCopyText(text);
      }
    },

    /**
     * Fallback clipboard copy.
     * @private
     */
    _fallbackCopyText(text) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        if (global.GCP_APP) global.GCP_APP.showToast('Comando copiado al portapapeles 📋', 'success');
      } catch (e) {}
      document.body.removeChild(ta);
    },

    /**
     * Navigates to next question.
     */
    goToNextQuestion() {
      if (this.currentQuestionIndex + 1 < this.filteredQuestions.length) {
        this.renderQuestion(this.currentQuestionIndex + 1);
      } else {
        if (global.GCP_APP) {
          global.GCP_APP.showToast('¡Has llegado al final de este bloque de estudio!', 'info');
        }
      }
    },

    /**
     * Navigates to previous question.
     */
    goToPrevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.renderQuestion(this.currentQuestionIndex - 1);
      }
    }
  };

  // Browser global export
  if (typeof window !== 'undefined') {
    window.GCP_STUDY = GCP_STUDY;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.GCP_STUDY = GCP_STUDY;
  }

  // Node.js export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCP_STUDY;
  }

})(typeof window !== 'undefined' ? window : global);
