/**
 * Global Search and Question Explorer Controller
 * Enables real-time searching and filtering across all 900+ questions.
 */
window.GCP_UI_SEARCH = {
  allQuestionsPool: [],
  filteredQuestions: [],
  selectedCertFilter: "all",
  searchQuery: "",

  init() {
    this.assembleAllQuestions();
    this.setupListeners();
    this.renderSearchResults();
  },

  assembleAllQuestions() {
    const cdl = window.GCP_CDL_QUESTIONS || [];
    const ace = window.GCP_ACE_QUESTIONS || [];
    const pca = window.GCP_PCA_QUESTIONS || [];
    this.allQuestionsPool = [...cdl, ...ace, ...pca];
    this.filteredQuestions = [...this.allQuestionsPool];
  },

  setupListeners() {
    const searchInput = document.getElementById("globalSearchInput");
    const topBarSearchInput = document.getElementById("topNavSearchInput");
    const certFilterSelect = document.getElementById("searchCertFilter");

    // Shortcut Ctrl+K
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        window.GCP_ROUTER?.navigate("search");
        if (searchInput) searchInput.focus();
        else if (topBarSearchInput) topBarSearchInput.focus();
      }
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.applySearchFilters();
      });
    }

    if (topBarSearchInput) {
      topBarSearchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          window.GCP_ROUTER?.navigate("search");
          this.searchQuery = topBarSearchInput.value.toLowerCase().trim();
          if (searchInput) searchInput.value = this.searchQuery;
          this.applySearchFilters();
        }
      });
    }

    if (certFilterSelect) {
      certFilterSelect.addEventListener("change", (e) => {
        this.selectedCertFilter = e.target.value;
        this.applySearchFilters();
      });
    }
  },

  applySearchFilters() {
    const q = this.searchQuery;
    const cert = this.selectedCertFilter;

    this.filteredQuestions = this.allQuestionsPool.filter(item => {
      // Match Cert
      const matchCert = cert === "all" || item.certId === cert;
      if (!matchCert) return false;

      if (!q) return true;

      // Search in title, scenario, keywords, gcloudCommand, subtopic, explanation
      const matchTitle = (item.title || "").toLowerCase().includes(q);
      const matchScenario = (item.scenario || "").toLowerCase().includes(q);
      const matchKeywords = (item.keywords || []).some(k => k.toLowerCase().includes(q));
      const matchCmd = (item.gcloudCommand || "").toLowerCase().includes(q);
      const matchSub = (item.subtopic || "").toLowerCase().includes(q);
      const matchId = (item.id || "").toLowerCase().includes(q);

      return matchTitle || matchScenario || matchKeywords || matchCmd || matchSub || matchId;
    });

    this.renderSearchResults();
  },

  renderSearchResults() {
    const countDisplay = document.getElementById("searchResultCount");
    const resultsContainer = document.getElementById("searchResultsContainer");
    if (!resultsContainer) return;

    if (countDisplay) {
      countDisplay.textContent = `Mostrando ${this.filteredQuestions.length} de ${this.allQuestionsPool.length} preguntas`;
    }

    if (this.filteredQuestions.length === 0) {
      resultsContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
          🔍 No se encontraron preguntas para la búsqueda: "<strong>${this.searchQuery}</strong>".
        </div>
      `;
      return;
    }

    // Render paginated / first 50 results
    const displayed = this.filteredQuestions.slice(0, 50);

    resultsContainer.innerHTML = displayed.map((q, idx) => `
      <div class="search-question-card">
        <div class="search-q-header">
          <div style="display: flex; gap: 8px; align-items: center;">
            <span class="cert-pill-badge">${(q.certId || 'gcp').toUpperCase()}</span>
            <span class="domain-tag">${q.domainName || q.domain || 'Dominio'}</span>
            <span class="q-id-badge">${q.id}</span>
          </div>
          <span style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase;">${q.difficulty || 'standard'}</span>
        </div>

        <h4 class="search-q-title">${q.title || 'Escenario de Examen'}</h4>
        <p class="search-q-scenario">${q.scenario}</p>

        <div class="search-q-options">
          ${(q.options || []).map(opt => `
            <div class="search-opt-item ${opt.letter === q.correct ? 'opt-correct' : ''}">
              <strong>${opt.letter}:</strong> ${opt.text}
              ${opt.letter === q.correct ? '<span style="color: var(--gcp-green); font-weight: 700; margin-left: 8px;">✓ (CORRECTA)</span>' : ''}
            </div>
          `).join('')}
        </div>

        <div class="search-q-details">
          <div><strong>💡 Justificación:</strong> ${q.explanation || ''}</div>
          ${q.gcloudCommand ? `<div class="cmd-box" style="margin-top: 8px;">${q.gcloudCommand}</div>` : ''}
        </div>
      </div>
    `).join('');
  }
};
