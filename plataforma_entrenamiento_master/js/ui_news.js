/**
 * UI Controller for Free Certifications Radar & Cloud News
 * Renders curated free certification courses, vouchers, and live alerts.
 */
window.GCP_UI_NEWS = {
  activeCategory: "all",
  activeProvider: "all",

  init() {
    // Delegacion: un solo listener para los chips (los onclick inline del HTML se eliminaron).
    const filters = document.getElementById("freeCertCategoryFilters");
    if (filters && !filters.dataset.delegated) {
      filters.dataset.delegated = "1";
      filters.addEventListener("click", (e) => {
        const chip = e.target && e.target.closest ? e.target.closest(".free-cat-chip") : null;
        if (chip && chip.dataset.cat) this.setCategoryFilter(chip.dataset.cat);
      });
    }
    this.renderNewsAndCourses();
  },

  renderNewsAndCourses() {
    const data = window.GCP_FREE_RESOURCES;
    if (!data) return;

    const newsContainer = document.getElementById("newsAlertsContainer");
    const coursesGrid = document.getElementById("freeCoursesGrid");
    const categoryFilters = document.getElementById("freeCertCategoryFilters");

    if (!newsContainer || !coursesGrid) return;

    // 1. Render News / Vouchers
    newsContainer.innerHTML = data.news.map(item => `
      <div class="news-banner-card">
        <div class="news-banner-header">
          <span class="news-tag ${item.isFree ? 'tag-free' : 'tag-voucher'}">${item.tag}</span>
          <span class="news-date">${item.date}</span>
        </div>
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="news-link">Ver Oportunidad Oficial ↗</a>
      </div>
    `).join('');

    // 2. Render Courses with Filters
    this.renderFilteredCourses();
  },

  renderFilteredCourses() {
    const data = window.GCP_FREE_RESOURCES;
    const coursesGrid = document.getElementById("freeCoursesGrid");
    if (!coursesGrid || !data) return;

    const filtered = data.courses.filter(c => {
      const matchCat = this.activeCategory === "all" || c.category === this.activeCategory;
      const matchProv = this.activeProvider === "all" || c.provider.toLowerCase().includes(this.activeProvider.toLowerCase());
      return matchCat && matchProv;
    });

    if (filtered.length === 0) {
      coursesGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 2rem;">No se encontraron cursos para esta categoría.</div>`;
      return;
    }

    coursesGrid.innerHTML = filtered.map(item => `
      <div class="free-cert-card">
        <div class="free-cert-header">
          <div class="free-cert-provider-badge">${item.provider}</div>
          <span class="free-cert-lang" title="Idioma del curso">${item.idioma || "Inglés"}</span>
          <span class="free-cert-badge-pill">100% GRATIS</span>
        </div>

        <h3 class="free-cert-title">${item.title}</h3>

        <div class="free-cert-meta">
          <div class="meta-row">
            <span class="meta-label">Tecnología:</span>
            <span class="meta-val">${item.technology}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Categoría:</span>
            <span class="meta-val">${item.category}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">Vigencia:</span>
            <span class="meta-val">${item.expiration}</span>
          </div>
        </div>

        <p class="free-cert-desc">${item.description}</p>
        
        <div class="free-cert-gcp-sync">
          <strong>Aporte para tu certificación GCP:</strong>
          <span>${item.relevanceGCP}</span>
        </div>

        <div class="free-cert-footer">
          <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-enroll-free">
            Comenzar Curso & Certificación ↗
          </a>
        </div>
      </div>
    `).join('');
  },

  setCategoryFilter(cat) {
    this.activeCategory = cat;
    document.querySelectorAll(".free-cat-chip").forEach(btn => {
      const on = btn.dataset.cat === cat;
      btn.classList.toggle("active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    this.renderFilteredCourses();
  }
};
