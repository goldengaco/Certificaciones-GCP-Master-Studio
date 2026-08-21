// Motor del Simulador de Entrenamiento y Exámenes GCP
document.addEventListener("DOMContentLoaded", () => {
  const db = window.CERT_DATABASE;

  // Estado de la Aplicación
  let currentCertId = "ace";
  let currentMode = "study"; // "study" | "exam"
  let selectedDomain = "all";
  
  let activeQuestions = [];
  let currentIndex = 0;
  let userAnswers = {}; // { questionId: selectedOptionLetter }
  let hasAnsweredCurrent = false;

  let timerInterval = null;
  let timeRemaining = 0; // segundos

  // Referencias DOM
  const certButtons = document.querySelectorAll("[data-cert]");
  const modeButtons = document.querySelectorAll("[data-mode]");
  const domainFiltersContainer = document.getElementById("domainFilters");
  
  const questionView = document.getElementById("questionView");
  const resultsView = document.getElementById("resultsView");
  
  const currentCertBadge = document.getElementById("currentCertBadge");
  const currentDomainTag = document.getElementById("currentDomainTag");
  const questionNumberDisplay = document.getElementById("questionNumberDisplay");
  const scenarioText = document.getElementById("scenarioText");
  const keywordsContainer = document.getElementById("keywordsContainer");
  const optionsGrid = document.getElementById("optionsGrid");
  const feedbackBox = document.getElementById("feedbackBox");
  
  const progressFill = document.getElementById("progressFill");
  const timerDisplay = document.getElementById("timerDisplay");
  const statCorrect = document.getElementById("statCorrect");
  const statTotal = document.getElementById("statTotal");
  const statAccuracy = document.getElementById("statAccuracy");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitExamBtn = document.getElementById("submitExamBtn");
  const restartBtn = document.getElementById("restartBtn");

  // Inicialización
  function init() {
    setupEventListeners();
    loadDomains();
    filterAndStart();
  }

  function setupEventListeners() {
    // Cert Switcher
    certButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        certButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCertId = btn.dataset.cert;
        loadDomains();
        filterAndStart();
      });
    });

    // Mode Switcher
    modeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        modeButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentMode = btn.dataset.mode;
        filterAndStart();
      });
    });

    // Navigation Buttons
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        renderCurrentQuestion();
      }
    });

    nextBtn.addEventListener("click", () => {
      if (currentIndex < activeQuestions.length - 1) {
        currentIndex++;
        renderCurrentQuestion();
      }
    });

    submitExamBtn.addEventListener("click", () => {
      finishExam();
    });

    restartBtn.addEventListener("click", () => {
      filterAndStart();
    });
  }

  function loadDomains() {
    const cert = db.certifications.find(c => c.id === currentCertId);
    domainFiltersContainer.innerHTML = "";

    const allBtn = document.createElement("button");
    allBtn.className = "domain-chip active";
    allBtn.textContent = "Todos los Dominios";
    allBtn.addEventListener("click", () => {
      document.querySelectorAll(".domain-chip").forEach(c => c.classList.remove("active"));
      allBtn.classList.add("active");
      selectedDomain = "all";
      filterAndStart();
    });
    domainFiltersContainer.appendChild(allBtn);

    cert.domains.forEach(d => {
      const btn = document.createElement("button");
      btn.className = "domain-chip";
      btn.textContent = d;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".domain-chip").forEach(c => c.classList.remove("active"));
        btn.classList.add("active");
        selectedDomain = d;
        filterAndStart();
      });
      domainFiltersContainer.appendChild(btn);
    });
  }

  function filterAndStart() {
    // Filtrar preguntas por certificación y dominio
    activeQuestions = db.questions.filter(q => {
      const matchCert = q.certId === currentCertId;
      const matchDomain = selectedDomain === "all" || q.domain === selectedDomain;
      return matchCert && matchDomain;
    });

    if (activeQuestions.length === 0) {
      alert("No hay preguntas disponibles para esta combinación.");
      return;
    }

    currentIndex = 0;
    userAnswers = {};
    resultsView.style.display = "none";
    questionView.style.display = "flex";

    // Setup Timer si es Modo Examen
    if (currentMode === "exam") {
      timeRemaining = activeQuestions.length * 120; // 2 minutos por pregunta
      timerDisplay.style.display = "block";
      startTimer();
    } else {
      timerDisplay.style.display = "none";
      clearInterval(timerInterval);
    }

    updateHeaderStats();
    renderCurrentQuestion();
  }

  function startTimer() {
    clearInterval(timerInterval);
    updateTimerText();
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateTimerText();
      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        alert("¡Tiempo cumplido!");
        finishExam();
      }
    }, 1000);
  }

  function updateTimerText() {
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    timerDisplay.textContent = `⏱️ ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  function renderCurrentQuestion() {
    const q = activeQuestions[currentIndex];
    const cert = db.certifications.find(c => c.id === currentCertId);

    // Meta Tags
    currentCertBadge.textContent = cert.badge;
    currentDomainTag.textContent = q.domain;
    questionNumberDisplay.textContent = `Pregunta ${currentIndex + 1} de ${activeQuestions.length}`;
    scenarioText.textContent = q.scenario;

    // Progress
    const pct = ((currentIndex + 1) / activeQuestions.length) * 100;
    progressFill.style.width = `${pct}%`;

    // Keywords
    keywordsContainer.innerHTML = `<span class="kw-label">Puntos Clave:</span>`;
    q.keywords.forEach(kw => {
      const tag = document.createElement("span");
      tag.className = "kw-tag";
      tag.textContent = kw;
      keywordsContainer.appendChild(tag);
    });

    // Options
    optionsGrid.innerHTML = "";
    const selectedLetter = userAnswers[q.id];
    const isAnswered = Boolean(selectedLetter);

    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      
      let extraClass = "";
      if (currentMode === "study" && isAnswered) {
        if (opt.letter === q.correct) {
          extraClass = "correct";
        } else if (opt.letter === selectedLetter) {
          extraClass = "incorrect";
        }
        btn.classList.add("disabled");
      } else if (opt.letter === selectedLetter) {
        extraClass = "selected";
      }

      if (extraClass) btn.classList.add(extraClass);

      btn.innerHTML = `
        <span class="option-letter">${opt.letter}</span>
        <span class="option-text">${opt.text}</span>
      `;

      btn.addEventListener("click", () => {
        handleOptionClick(q, opt.letter);
      });

      optionsGrid.appendChild(btn);
    });

    // Feedback (solo en Study Mode si ya fue contestada)
    if (currentMode === "study" && isAnswered) {
      renderFeedback(q, selectedLetter);
    } else {
      feedbackBox.style.display = "none";
    }

    // Botones de Navegación
    prevBtn.style.visibility = currentIndex > 0 ? "visible" : "hidden";
    
    if (currentIndex === activeQuestions.length - 1) {
      nextBtn.style.display = "none";
      submitExamBtn.style.display = "block";
    } else {
      nextBtn.style.display = "block";
      submitExamBtn.style.display = "none";
    }

    updateHeaderStats();
  }

  function handleOptionClick(question, chosenLetter) {
    if (currentMode === "study" && userAnswers[question.id]) {
      return; // Ya contestada en modo estudio
    }

    userAnswers[question.id] = chosenLetter;
    renderCurrentQuestion();
  }

  function renderFeedback(question, chosenLetter) {
    const isCorrect = chosenLetter === question.correct;
    feedbackBox.style.display = "flex";

    let distractorsHtml = "";
    if (question.distractors) {
      distractorsHtml = `
        <div class="distractor-grid">
          <strong>🔍 Anatomía del Descarte (Por qué fallan las otras opciones):</strong>
          ${Object.entries(question.distractors).map(([letter, reason]) => `
            <div class="distractor-item">
              <strong>Opción ${letter}:</strong> ${reason}
            </div>
          `).join('')}
        </div>
      `;
    }

    feedbackBox.innerHTML = `
      <div class="feedback-status ${isCorrect ? 'correct' : 'incorrect'}">
        ${isCorrect ? '✅ ¡Respuesta Correcta!' : `❌ Respuesta Incorrecta (Elegiste ${chosenLetter}, la correcta es ${question.correct})`}
      </div>
      <div>
        <strong>💡 Justificación Técnica:</strong><br/>
        ${question.explanation}
      </div>
      ${distractorsHtml}
      ${question.gcloudCommand ? `
        <div>
          <strong>🛠️ Comando gcloud asociado:</strong>
          <div class="cmd-box">${question.gcloudCommand}</div>
        </div>
      ` : ''}
    `;
  }

  function updateHeaderStats() {
    const answeredKeys = Object.keys(userAnswers);
    let correctCount = 0;

    answeredKeys.forEach(qid => {
      const q = activeQuestions.find(item => item.id === qid);
      if (q && userAnswers[qid] === q.correct) {
        correctCount++;
      }
    });

    statTotal.textContent = activeQuestions.length;
    statCorrect.textContent = correctCount;
    
    const acc = answeredKeys.length > 0 ? Math.round((correctCount / answeredKeys.length) * 100) : 0;
    statAccuracy.textContent = `${acc}%`;
  }

  function finishExam() {
    clearInterval(timerInterval);
    questionView.style.display = "none";
    resultsView.style.display = "flex";

    let correctCount = 0;
    const domainScores = {};

    activeQuestions.forEach(q => {
      if (!domainScores[q.domain]) {
        domainScores[q.domain] = { total: 0, correct: 0 };
      }
      domainScores[q.domain].total++;

      if (userAnswers[q.id] === q.correct) {
        correctCount++;
        domainScores[q.domain].correct++;
      }
    });

    const scorePct = Math.round((correctCount / activeQuestions.length) * 100);
    const passed = scorePct >= 70;

    document.getElementById("finalScoreCircle").className = `score-circle ${passed ? 'pass' : 'fail'}`;
    document.getElementById("finalScoreCircle").innerHTML = `<span>${scorePct}%</span><small style="font-size: 0.8rem; font-weight: normal;">${scorePct >= 70 ? 'APROBADO' : 'NO APROBADO'}</small>`;
    
    document.getElementById("finalMessage").textContent = passed 
      ? `🎉 ¡Excelente trabajo! Has superado el umbral requerido del examen oficial (70%+).`
      : `⚠️ No has alcanzado el 70% de aprobación. Revisa el desglose de dominios para reforzar tus áreas débiles.`;

    const breakdownContainer = document.getElementById("domainBreakdownContainer");
    breakdownContainer.innerHTML = `
      <h3 style="margin-bottom: 1rem; color: var(--text-secondary);">Rendimiento por Dominio</h3>
      <div style="display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 500px; text-align: left;">
        ${Object.entries(domainScores).map(([dom, val]) => {
          const domPct = Math.round((val.correct / val.total) * 100);
          return `
            <div style="background: var(--bg-card); padding: 10px 14px; border-radius: 8px; border: 1px solid var(--border-color);">
              <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 4px;">
                <span>${dom}</span>
                <strong>${val.correct}/${val.total} (${domPct}%)</strong>
              </div>
              <div style="background: var(--bg-primary); height: 6px; border-radius: 3px; overflow: hidden;">
                <div style="background: ${domPct >= 70 ? 'var(--gcp-green)' : 'var(--gcp-red)'}; width: ${domPct}%; height: 100%;"></div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  init();
});
