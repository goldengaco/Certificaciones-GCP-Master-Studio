/**
 * UI Controller for Architecture Tools, Decision Trees & Cheatsheets
 */
window.GCP_UI_TOOLS = {
  activeTab: "database",

  init() {
    this.setupListeners();
    this.renderActiveTool();
  },

  setupListeners() {
    const tabButtons = document.querySelectorAll(".tool-subtab-btn");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeTab = btn.dataset.tool;
        this.renderActiveTool();
      });
    });
  },

  renderActiveTool() {
    const container = document.getElementById("architectureToolContent");
    if (!container) return;

    const data = window.GCP_ARCHITECTURE_TOOLS;
    if (!data) return;

    if (this.activeTab === "database") {
      this.renderDatabaseTree(container, data.trees.database);
    } else if (this.activeTab === "compute") {
      this.renderComputeTree(container, data.trees.compute);
    } else if (this.activeTab === "storage") {
      this.renderStorageTable(container, data.trees.storage);
    } else if (this.activeTab === "networking") {
      this.renderNetworkingTree(container, data.trees.networking);
    } else if (this.activeTab === "cheatsheets") {
      this.renderCheatsheets(container, data.cheatsheets);
    }
  },

  renderDatabaseTree(container, tree) {
    container.innerHTML = `
      <div class="tool-view-card">
        <h3>🗄️ ${tree.title}</h3>
        <p class="tool-desc">${tree.description}</p>

        <div class="decision-matrix-grid">
          <div class="matrix-card">
            <h4>Cloud Spanner</h4>
            <span class="matrix-badge">Relacional Global</span>
            <p><strong>Uso:</strong> OLTP de misión crítica con escala global horizontal, consistencia ACID estricta y 99.999% SLA.</p>
            <small>Ej: Banca, compras en Mountkirk Games.</small>
          </div>

          <div class="matrix-card">
            <h4>Cloud SQL / AlloyDB</h4>
            <span class="matrix-badge">Relacional Regional</span>
            <p><strong>Uso:</strong> MySQL, PostgreSQL o SQL Server administrados para aplicaciones web empresariales estándar.</p>
            <small>Ej: CRMs, ERPs, apps monolíticas.</small>
          </div>

          <div class="matrix-card">
            <h4>BigQuery</h4>
            <span class="matrix-badge">Data Warehouse Analítico</span>
            <p><strong>Uso:</strong> Consultas SQL masivas (OLAP) sobre petabytes de datos en segundos. Serverless con BI y ML nativo.</p>
            <small>Ej: Reportes ejecutivos, Looker, analítica.</small>
          </div>

          <div class="matrix-card">
            <h4>Cloud Bigtable</h4>
            <span class="matrix-badge">NoSQL Columnar (>1 TB)</span>
            <p><strong>Uso:</strong> Millones de operaciones por segundo con latencia <10ms. Ideal para series temporales e IoT.</p>
            <small>Ej: Telemetría de vehículos TerramEarth.</small>
          </div>

          <div class="matrix-card">
            <h4>Firestore</h4>
            <span class="matrix-badge">NoSQL Documentos</span>
            <p><strong>Uso:</strong> Base de datos de documentos JSON con sincronización en tiempo real y soporte offline para web y móvil.</p>
            <small>Ej: Perfiles de usuario, catálogos.</small>
          </div>

          <div class="matrix-card">
            <h4>Cloud Memorystore</h4>
            <span class="matrix-badge">In-Memory Cache (<1ms)</span>
            <p><strong>Uso:</strong> Redis y Memcached administrados para caché de alta velocidad, sesiones y leaderboards.</p>
            <small>Ej: Colas de emparejamiento, contadores.</small>
          </div>
        </div>
      </div>
    `;
  },

  renderComputeTree(container, tree) {
    container.innerHTML = `
      <div class="tool-view-card">
        <h3>⚡ ${tree.title}</h3>
        <p class="tool-desc">${tree.description}</p>

        <div class="decision-matrix-grid">
          <div class="matrix-card">
            <h4>Cloud Run</h4>
            <span class="matrix-badge highlight">Serverless para Contenedores</span>
            <p><strong>Uso:</strong> Despliegue de microservicios en contenedores. Escala a cero, cobra por milisegundo y cero gestión de SO.</p>
          </div>

          <div class="matrix-card">
            <h4>GKE (Google Kubernetes Engine)</h4>
            <span class="matrix-badge">Orquestación Avanzada</span>
            <p><strong>Uso:</strong> Microservicios complejos con protocolos no-HTTP (gRPC, TCP/UDP), mallas de servicio o Agones para videojuegos.</p>
          </div>

          <div class="matrix-card">
            <h4>Compute Engine (MIGs)</h4>
            <span class="matrix-badge">Máquinas Virtuales IaaS</span>
            <p><strong>Uso:</strong> Cargas de trabajo legacy, control del kernel de SO, licencias de Windows o software empresarial no contenedorizado.</p>
          </div>

          <div class="matrix-card">
            <h4>Cloud Functions (2nd Gen)</h4>
            <span class="matrix-badge">FaaS / Event-Driven</span>
            <p><strong>Uso:</strong> Tareas ligeras disparadas por eventos de Pub/Sub, Cloud Storage o Webhooks sin mantener servidores.</p>
          </div>
        </div>
      </div>
    `;
  },

  renderStorageTable(container, tree) {
    container.innerHTML = `
      <div class="tool-view-card">
        <h3>📦 ${tree.title}</h3>
        <p class="tool-desc">${tree.description}</p>

        <div class="table-responsive">
          <table class="enterprise-table">
            <thead>
              <tr>
                <th>Clase</th>
                <th>Retención Mínima</th>
                <th>Frecuencia de Acceso</th>
                <th>Costo Almacenamiento</th>
                <th>Costo de Recuperación</th>
                <th>Caso de Uso Óptimo</th>
              </tr>
            </thead>
            <tbody>
              ${tree.classes.map(c => `
                <tr>
                  <td><strong>${c.name}</strong></td>
                  <td>${c.minRetention}</td>
                  <td>${c.frequency}</td>
                  <td>${c.costPerGB}</td>
                  <td>${c.retrievalFee}</td>
                  <td>${c.bestFor}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  renderNetworkingTree(container, tree) {
    container.innerHTML = `
      <div class="tool-view-card">
        <h3>🌐 ${tree.title}</h3>
        <p class="tool-desc">${tree.description}</p>

        <div class="decision-matrix-grid">
          <div class="matrix-card">
            <h4>Dedicated Interconnect</h4>
            <span class="matrix-badge">10G / 100G Físico</span>
            <p>Conexión de fibra óptica directa a Google sin pasar por internet. Máxima seguridad y SLA 99.99%.</p>
          </div>

          <div class="matrix-card">
            <h4>Partner Interconnect</h4>
            <span class="matrix-badge">50 Mbps a 50 Gbps</span>
            <p>Conectividad privada a través de un partner de colocación de red (Equinix, Megaport) a menor costo de entrada.</p>
          </div>

          <div class="matrix-card">
            <h4>Cloud VPN (HA VPN)</h4>
            <span class="matrix-badge">Túneles IPsec sobre Internet</span>
            <p>Conexión cifrada rápida y económica sobre internet con 99.99% de SLA (hasta 3 Gbps por túnel con BGP dinámico).</p>
          </div>
        </div>
      </div>
    `;
  },

  renderCheatsheets(container, cheatsheets) {
    container.innerHTML = `
      <div class="tool-view-card">
        <h3>📋 Reglas de Oro de Arquitectura y Exámenes</h3>
        ${cheatsheets.map(cs => `
          <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1rem;">
            <h4 style="color: var(--gcp-blue); margin-bottom: 0.75rem;">${cs.title}</h4>
            <ul style="padding-left: 1.25rem; color: var(--text-secondary); line-height: 1.8;">
              ${cs.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    `;
  }
};
