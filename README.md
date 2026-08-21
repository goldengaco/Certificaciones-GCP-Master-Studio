# 🚀 Google Cloud Master Certification Studio & Training Platform

[![Google Cloud](https://img.shields.io/badge/Google_Cloud-Certifications_2026-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)](https://cloud.google.com/certification)
[![Architecture](https://img.shields.io/badge/Architecture-Enterprise_Offline_Ready-34A853?style=for-the-badge&logo=google&logoColor=white)](#)
[![License](https://img.shields.io/badge/License-MIT-FBBC04?style=for-the-badge)](#)
[![Bilingual](https://img.shields.io/badge/Languages-ES_%F0%9F%87%AA%F0%9F%87%B8_%7C_EN_%F0%9F%87%BA%F0%9F%87%B8-EA4335?style=for-the-badge)](#)

> **Plataforma Enterprise de Simulación, Diagnóstico Forense y Acreditación Garantizada para Certificaciones Oficiales de Google Cloud** (Cloud Digital Leader, Associate Cloud Engineer y Professional Cloud Architect).

---

## 🌟 Características Principales

### 1. 📚 Banco Masivo de 900+ Preguntas Oficiales Calibradas
* **Cloud Digital Leader (CDL):** 300 preguntas de conceptos fundamentales, economía de nube, TCO/ROI, migración y cumplimiento.
* **Associate Cloud Engineer (ACE):** 300 preguntas técnicas con comandos reales de la CLI `gcloud`, despliegue de Compute Engine, Kubernetes Engine (GKE), VPCs, IAM y Storage.
* **Professional Cloud Architect (PCA):** 300 escenarios complejos y los **4 Casos de Estudio Oficiales** de Google Cloud (*Mountkirk Games, TerramEarth, EHR Healthcare y Helicopter Racing League*).

### 2. ⏱️ Motor de Rotación en 6 Bloques Estratificados (Zero-Repetition)
* Cada examen extrae **50 preguntas disjuntas** organizadas en 6 bloques únicos.
* Al completar 6 simulaciones, cubres el **100% del banco de 300 preguntas** sin solapamiento antes de reiniciar el ciclo.

### 3. 🎯 Radar de Debilidades y Repetición Espaciada (Algoritmo Leitner de 4 Cajas)
* Cada fallo envía la pregunta a la **Caja 0 (Cola de Refuerzo)**.
* Para certificar el dominio de un reactivo, el usuario debe **acertarlo 3 veces consecutivas** en sesiones espaciadas.

### 4. 📈 Medidor de Certeza de Aprobación (Logistic Pass Engine)
* Modelo estadístico calibrado que evalúa la cobertura del banco, la consistencia en simulacros y la tasa de errores no resueltos para calcular la **Probabilidad Real de Aprobación (0% a 100%)**.

### 5. 🔍 Buscador y Explorador Global en Tiempo Real (`Ctrl + K`)
* Motor de búsqueda instantánea para inspeccionar cualquier reactivo por palabra clave, comando `gcloud`, trampa de distractor o ID.

### 6. 📰 Radar de Certificaciones 100% Gratuitas & Noticias
* Catálogo curado de programas con certificación oficial e insignias a costo **$0.00** (Oracle Cloud, Databricks GenAI, Cisco Networking, Postman, Google Cloud Skills Boost, ISC2).

### 7. 🛠️ Centro de Arquitectura y Árboles de Decisión
* Flujos interactivos para seleccionar servicios de **Cómputo** (VMs vs GKE vs Cloud Run), **Bases de Datos** (Cloud SQL vs Spanner vs Bigtable vs Firestore vs BigQuery), **Clases de Storage** y **Conectividad Híbrida**.

### 8. 🌐 Soporte Bilingüe Instantáneo
* Alternancia fluida entre **Español 🇪🇸** e **Inglés 🇺🇸** con un solo clic.

---

## 🏗️ Arquitectura del Repositorio

```
Certificaciones_GCP/
├── plataforma_entrenamiento_master/      # Núcleo SPA (HTML5, CSS3 Variables, ES6 Modules)
│   ├── index.html                        # Interfaz principal Enterprise
│   ├── iniciar_plataforma.bat            # Acceso rápido con 1 clic
│   ├── css/
│   │   └── styles.css                    # Design System (Dark/Light themes, Responsive)
│   ├── js/
│   │   ├── app.js                        # Enrutador SPA, sintetizador Web Audio, orquestador
│   │   ├── engine.js                     # Motores Leitner, Rotación de Bloques y Probabilidad
│   │   ├── i18n.js                       # Motor bilingüe ES/EN
│   │   ├── ui_study.js                   # Controlador de Modo Estudio interactivo
│   │   ├── ui_exam.js                    # Controlador de Simulación Oficial con cronómetro
│   │   ├── ui_drill.js                   # Controlador de Ráfaga / Repetición Espaciada
│   │   ├── ui_search.js                  # Buscador y Explorador de 900+ preguntas
│   │   ├── ui_news.js                    # Radar de Certificaciones Gratuitas y Noticias
│   │   ├── ui_tools.js                   # Árboles de Decisión y Cheatsheets de Arquitectura
│   │   └── ui_charts.js                  # Visualizadores SVG (Radar Chart y Timeline)
│   └── data/
│       ├── cert_manifest.js              # Dominios y ponderaciones oficiales
│       ├── cert_cdl.js                   # 300 reactivos Cloud Digital Leader
│       ├── cert_ace.js                   # 300 reactivos Associate Cloud Engineer
│       ├── cert_pca.js                   # 300 reactivos Professional Cloud Architect
│       ├── case_studies.js               # Los 4 Casos de Estudio de Arquitectura
│       ├── free_certifications.js        # Base de datos de cursos y badges gratis
│       └── architecture_tools.js         # Árboles de decisión interactivos
│
├── Associate_Cloud_Engineer/             # Guías de estudio en Markdown
│   ├── 01_guia_oficial_temario.md        # Desglose de dominios y CLI
│   ├── 02_framework_resolucion_preguntas.md # Reglas de descarte de trampas
│   └── 03_banco_de_preguntas_ace.md      # Reactivos comentados
│
├── loop_mejora_continua.py               # Script de auditoría forense y respaldos
└── ejecutar_loop_mejora.bat              # Lanzador batch para auditorías
```

---

## 🚀 Cómo Empezar

### Opción 1: Ejecución Local Inmediata (Sin Servidor / 100% Offline)
1. Clona el repositorio:
   ```bash
   git clone https://github.com/goldengaco/Certificaciones-GCP-Master-Studio.git
   cd Certificaciones-GCP-Master-Studio
   ```
2. Abre `plataforma_entrenamiento_master/index.html` en cualquier navegador web moderno (Chrome, Edge, Firefox, Safari) o ejecuta `iniciar_plataforma.bat`.

### Opción 2: Ejecutar el Loop de Mejora Continua
Para verificar la integridad de todos los módulos y preguntas:
```bash
python loop_mejora_continua.py
```

---

## 🛡️ Seguridad y Privacidad
* **100% Local & Privado:** Tu progreso, historial de exámenes y estadísticas se guardan exclusivamente en el almacenamiento local de tu navegador (`localStorage`).
* **Cero CDN / Cero Telemetría:** No depende de librerías externas en la nube ni recopila datos del usuario.

---

## 📄 Licencia
Distribuido bajo la Licencia MIT. Consulta `LICENSE` para más información.
