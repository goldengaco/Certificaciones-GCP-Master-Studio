/**
 * Smart Tokenized & Fuzzy-Weighted Search Engine for Google Cloud Certifications
 * Handles natural language queries ("que es iam", "como conectar vpc", "spanner vs sql")
 * Filters stop words, normalizes accents, calculates relevance scores, and highlights matches.
 */
window.GCP_UI_SEARCH = {
  allQuestionsPool: [],
  filteredQuestions: [],
  selectedCertFilter: "all",
  searchQuery: "",

  // Multilingual stop words list to remove noise from search queries
  STOP_WORDS: new Set([
    'que', 'es', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas',
    'de', 'del', 'a', 'en', 'para', 'por', 'con', 'sin', 'sobre', 'como',
    'cual', 'cuales', 'donde', 'cuando', 'quien', 'quienes', 'y', 'o', 'u',
    'what', 'is', 'are', 'the', 'a', 'an', 'in', 'to', 'for', 'with', 'about',
    'how', 'which', 'where', 'when', 'who', 'and', 'or'
  ]),

  init() {
    this.assembleAllQuestions();
    this.setupListeners();
    this.renderSearchResults();
  },

  assembleAllQuestions() {
    const cdl = (window.GCP_CDL_QUESTIONS || []).map(q => ({ ...q, certId: q.certId || 'cdl' }));
    const ace = (window.GCP_ACE_QUESTIONS || []).map(q => ({ ...q, certId: q.certId || 'ace' }));
    const pca = (window.GCP_PCA_QUESTIONS || []).map(q => ({ ...q, certId: q.certId || 'pca' }));
    this.allQuestionsPool = [...cdl, ...ace, ...pca];
    this.filteredQuestions = [...this.allQuestionsPool];
  },

  setupListeners() {
    const searchInput = document.getElementById("globalSearchInput");
    const topBarSearchInput = document.getElementById("topNavSearchInput");
    const certFilterSelect = document.getElementById("searchCertFilter");

    // Global shortcut Ctrl+K
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (window.GCP_APP?.navigateTo) {
          window.GCP_APP.navigateTo("search");
        }
        setTimeout(() => {
          if (searchInput) searchInput.focus();
        }, 100);
      }
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value;
        this.applySearchFilters();
      });
    }

    if (topBarSearchInput) {
      topBarSearchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          if (window.GCP_APP?.navigateTo) {
            window.GCP_APP.navigateTo("search");
          }
          this.searchQuery = topBarSearchInput.value;
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

  normalizeText(str) {
    if (!str) return "";
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  },

  extractSearchTokens(rawQuery) {
    const norm = this.normalizeText(rawQuery);
    const rawTokens = norm.split(/[\s,.;:!?¿¡\-_/\\()]+/);
    
    // Filter stop words, but if all tokens were stop words, keep original tokens
    const meaningfulTokens = rawTokens.filter(t => t.length > 1 && !this.STOP_WORDS.has(t));
    if (meaningfulTokens.length > 0) {
      return meaningfulTokens;
    }
    return rawTokens.filter(t => t.length > 0);
  },

  applySearchFilters() {
    const rawQ = this.searchQuery.trim();
    const cert = this.selectedCertFilter;

    if (!rawQ) {
      this.filteredQuestions = this.allQuestionsPool.filter(item => cert === "all" || item.certId === cert);
      this.renderSearchResults();
      return;
    }

    const tokens = this.extractSearchTokens(rawQ);
    const scoredResults = [];

    for (const item of this.allQuestionsPool) {
      if (cert !== "all" && item.certId !== cert) {
        continue;
      }

      const titleNorm = this.normalizeText(item.title);
      const scenarioNorm = this.normalizeText(item.scenario);
      const explNorm = this.normalizeText(item.explanation);
      const cmdNorm = this.normalizeText(item.gcloudCommand);
      const domNorm = this.normalizeText(item.domainName || item.domain);
      const subNorm = this.normalizeText(item.subtopic);
      const idNorm = this.normalizeText(item.id);
      const keywordsNorm = (item.keywords || []).map(k => this.normalizeText(k)).join(" ");
      const optionsNorm = (item.options || []).map(o => this.normalizeText(o.text)).join(" ");

      let matchScore = 0;
      let matchedTokenCount = 0;

      for (const token of tokens) {
        let tokenMatched = false;

        // Exact match in keywords (high priority)
        if (keywordsNorm.includes(token)) {
          matchScore += 35;
          tokenMatched = true;
        }

        // Title / ID Match
        if (titleNorm.includes(token) || idNorm.includes(token)) {
          matchScore += 25;
          tokenMatched = true;
        }

        // CLI Command Match
        if (cmdNorm.includes(token)) {
          matchScore += 20;
          tokenMatched = true;
        }

        // Domain / Subtopic Match
        if (domNorm.includes(token) || subNorm.includes(token)) {
          matchScore += 15;
          tokenMatched = true;
        }

        // Scenario Match
        if (scenarioNorm.includes(token)) {
          matchScore += 12;
          tokenMatched = true;
        }

        // Explanation Match
        if (explNorm.includes(token)) {
          matchScore += 8;
          tokenMatched = true;
        }

        // Options Match
        if (optionsNorm.includes(token)) {
          matchScore += 6;
          tokenMatched = true;
        }

        if (tokenMatched) {
          matchedTokenCount++;
        }
      }

      // If at least one meaningful token matched, include the question
      if (matchScore > 0 && matchedTokenCount > 0) {
        // Bonus for multi-token coverage
        const coverageBonus = (matchedTokenCount / tokens.length) * 50;
        scoredResults.push({
          question: item,
          score: matchScore + coverageBonus
        });
      }
    }

    // Sort descending by relevance score
    scoredResults.sort((a, b) => b.score - a.score);
    this.filteredQuestions = scoredResults.map(r => r.question);
    this.renderSearchResults();
  },

  highlightKeywords(text, query) {
    if (!text || !query) return text || "";
    const tokens = this.extractSearchTokens(query);
    if (tokens.length === 0) return text;

    let result = text;
    for (const token of tokens) {
      if (token.length < 2) continue;
      const regex = new RegExp(`(${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      result = result.replace(regex, '<mark class="search-highlight">$1</mark>');
    }
    return result;
  },

  renderSearchResults() {
    const countDisplay = document.getElementById("searchResultCount");
    const resultsContainer = document.getElementById("searchResultsContainer");
    if (!resultsContainer) return;

    const totalInPool = this.allQuestionsPool.length;
    const foundCount = this.filteredQuestions.length;

    if (countDisplay) {
      countDisplay.textContent = `Mostrando ${foundCount} de ${totalInPool} preguntas oficiale${foundCount === 1 ? '' : 's'}`;
    }

    if (foundCount === 0) {
      resultsContainer.innerHTML = `
        <div class="search-empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No se encontraron preguntas con los términos buscados</h3>
          <p>Prueba buscando por nombre de servicio de GCP (ejemplo: <code>IAM</code>, <code>Spanner</code>, <code>GKE</code>, <code>Cloud Run</code>, <code>VPC</code>, <code>Storage</code>).</p>
        </div>
      `;
      return;
    }

    // Limit initial display to first 50 results for instant rendering speed
    const displayed = this.filteredQuestions.slice(0, 50);

    resultsContainer.innerHTML = displayed.map(q => {
      const certName = q.certId === 'cdl' ? 'Cloud Digital Leader' : (q.certId === 'pca' ? 'Cloud Architect' : 'Cloud Engineer');
      const certBadgeClass = q.certId === 'cdl' ? 'badge-cdl' : (q.certId === 'pca' ? 'badge-pca' : 'badge-ace');
      
      const titleHighlighted = this.highlightKeywords(q.title || 'Escenario de Examen', this.searchQuery);
      const scenarioHighlighted = this.highlightKeywords(q.scenario || '', this.searchQuery);
      const explanationHighlighted = this.highlightKeywords(q.explanation || '', this.searchQuery);

      return `
        <div class="search-question-card">
          <div class="search-card-topbar">
            <div class="badge-group">
              <span class="cert-tag ${certBadgeClass}">${(q.certId || 'GCP').toUpperCase()}</span>
              <span class="domain-tag">${q.domainName || q.domain || 'Dominio Oficial'}</span>
              <span class="qid-tag">${q.id}</span>
            </div>
            <span class="cert-full-name">${certName}</span>
          </div>

          <h3 class="search-q-title">${titleHighlighted}</h3>
          <p class="search-q-scenario">${scenarioHighlighted}</p>

          <div class="search-options-list">
            ${(q.options || []).map(opt => {
              const isCorrect = opt.letter === q.correct;
              const optText = this.highlightKeywords(opt.text, this.searchQuery);
              return `
                <div class="search-opt-row ${isCorrect ? 'is-correct-opt' : ''}">
                  <span class="opt-letter">${opt.letter}</span>
                  <span class="opt-text">${optText}</span>
                  ${isCorrect ? '<span class="correct-check">✓ RESPUESTA OFICIAL</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>

          <div class="search-explanation-callout">
            <strong>💡 Justificación y Descarte Técnico:</strong>
            <p>${explanationHighlighted}</p>
            ${q.gcloudCommand ? `
              <div class="cli-snippet-box">
                <span class="cli-label">Comando gcloud:</span>
                <code>${q.gcloudCommand}</code>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');
  }
};
