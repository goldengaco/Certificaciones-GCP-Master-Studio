/**
 * Bilingual Support Engine (Español / English)
 */
window.GCP_I18N = {
  currentLang: "es", // "es" | "en"

  translations: {
    es: {
      appTitle: "Google Cloud Master Certification Studio",
      appSubtitle: "Plataforma Enterprise de Simulación, Diagnóstico y Acreditación",
      navSearchPlaceholder: "Buscar preguntas, servicios (gcloud, Spanner, IAM), casos de estudio... (Ctrl+K)",
      
      // Sidebar
      navCertifications: "Certificaciones",
      navModes: "Modos de Entrenamiento",
      navToolsSection: "Herramientas & Recursos",
      
      modeStudy: "Modo Estudio",
      modeStudySub: "Feedback Inmediato",
      modeExam: "Simulacro Oficial",
      modeExamSub: "Cronómetro y 6 Bloques",
      modeDrill: "Radar de Debilidades",
      modeDrillSub: "Repetición Espaciada (Leitner)",
      modeSearch: "Buscador y Explorador",
      modeSearchSub: "900+ Preguntas",
      modeNews: "Radar de Certificados Gratuitos",
      modeNewsSub: "Cursos y Noticias",
      modeTools: "Árboles de Decisión",
      modeToolsSub: "Cheatsheets y Arquitectura",

      // Top Stats
      statCorrect: "Aciertos",
      statAccuracy: "Precisión",
      statProbability: "Probabilidad de Pase",
      statMastered: "Dominadas",

      // Exam UI
      prevBtn: "← Anterior",
      nextBtn: "Siguiente Pregunta →",
      submitExam: "Finalizar y Calificar Examen",
      reviewMark: "Marcar para Revisión",
      filterAllDomains: "Todos los Dominios",
      anatomyOfDistractors: "Anatomía del Descarte (Análisis de distractores):",
      technicalJustification: "Justificación Técnica Oficial:",
      gcloudCommandTitle: "Comando CLI / Servicio asociado:",
      keywordsTitle: "Puntos Clave:",
      caseStudyBtn: "Ver Caso de Estudio Oficial",

      // Results
      examResultTitle: "Resultado de la Simulación",
      domainBreakdownTitle: "Rendimiento por Dominio",
      retakeBtn: "Volver a Entrenar"
    },

    en: {
      appTitle: "Google Cloud Master Certification Studio",
      appSubtitle: "Enterprise Training, Diagnostics & Passing Guarantee Platform",
      navSearchPlaceholder: "Search questions, services (gcloud, Spanner, IAM), case studies... (Ctrl+K)",
      
      // Sidebar
      navCertifications: "Certifications",
      navModes: "Training Modes",
      navToolsSection: "Tools & Resources",
      
      modeStudy: "Study Mode",
      modeStudySub: "Instant Feedback",
      modeExam: "Official Simulation",
      modeExamSub: "Timer & 6 Disjoint Blocks",
      modeDrill: "Weakness Radar",
      modeDrillSub: "Spaced Repetition (Leitner)",
      modeSearch: "Question Explorer",
      modeSearchSub: "900+ Searchable Qs",
      modeNews: "Free Certs & News Radar",
      modeNewsSub: "Courses & Industry News",
      modeTools: "Architecture Trees",
      modeToolsSub: "Cheatsheets & Decision Flow",

      // Top Stats
      statCorrect: "Correct",
      statAccuracy: "Accuracy",
      statProbability: "Pass Probability",
      statMastered: "Mastered",

      // Exam UI
      prevBtn: "← Previous",
      nextBtn: "Next Question →",
      submitExam: "Submit & Grade Exam",
      reviewMark: "Flag for Review",
      filterAllDomains: "All Domains",
      anatomyOfDistractors: "Elimination Anatomy (Distractor Analysis):",
      technicalJustification: "Official Technical Justification:",
      gcloudCommandTitle: "Associated CLI Command / Service:",
      keywordsTitle: "Key Trigger Words:",
      caseStudyBtn: "View Official Case Study",

      // Results
      examResultTitle: "Exam Simulation Results",
      domainBreakdownTitle: "Domain Mastery Breakdown",
      retakeBtn: "Retake Training"
    }
  },

  t(key) {
    const lang = this.currentLang || "es";
    return this.translations[lang]?.[key] || this.translations["es"]?.[key] || key;
  },

  toggleLanguage() {
    this.currentLang = this.currentLang === "es" ? "en" : "es";
    localStorage.setItem("gcp_master_lang", this.currentLang);
    this.applyTranslations();
  },

  setLanguage(lang) {
    if (lang === "es" || lang === "en") {
      this.currentLang = lang;
      localStorage.setItem("gcp_master_lang", this.currentLang);
      this.applyTranslations();
    }
  },

  applyTranslations() {
    const lang = this.currentLang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (this.translations[lang]?.[key]) {
        el.textContent = this.translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (this.translations[lang]?.[key]) {
        el.setAttribute("placeholder", this.translations[lang][key]);
      }
    });

    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
      langBtn.innerHTML = lang === "es" 
        ? '<span style="font-weight:700;letter-spacing:0.05em">ES</span> <span style="opacity:0.5;font-size:0.75rem">EN</span>' 
        : '<span style="font-weight:700;letter-spacing:0.05em">EN</span> <span style="opacity:0.5;font-size:0.75rem">ES</span>';
    }
  }
};
