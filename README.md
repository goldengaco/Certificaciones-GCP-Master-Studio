# Google Cloud Master Certification Studio

Enterprise Training, Diagnostic & Pass Guarantee Platform for Google Cloud Certifications:
- Cloud Digital Leader (CDL)
- Associate Cloud Engineer (ACE)
- Professional Cloud Architect (PCA)

---

## 1. Overview and Core Architecture

Google Cloud Master Certification Studio is a high-performance, 100% offline, standalone Single Page Application (SPA) designed to simulate official Google Cloud certification exams with production-grade fidelity.

The platform requires zero cloud dependencies, zero external CDNs, and zero installation of complex runtime frameworks. All state, metrics, and session telemetry are persisted locally via client-side storage (localStorage) with full export/import capabilities.

`
+-----------------------------------------------------------------------------------+
|                              Client Runtime / SPA                                 |
|                                                                                   |
|  +---------------------+   +---------------------+   +-------------------------+  |
|  |     Study Mode      |   |   Exam Simulator    |   |     Weakness Radar      |  |
|  |  (Instant feedback, |   |  (Official timers,  |   |   (4-box Leitner SRS,   |  |
|  |   distractor traps, |   |   6-block rotation, |   |    spaced repetition)   |  |
|  |    CLI associated)  |   |   PCA case studies) |   |                         |  |
|  +----------+----------+   +----------+----------+   +------------+------------+  |
|             |                         |                           |               |
|             +-------------------------+---------------------------+               |
|                                       |                                           |
|                                       v                                           |
|                     +-----------------------------------+                         |
|                     |     App Controller & Router       |                         |
|                     |            (js/app.js)            |                         |
|                     +-----------------+-----------------+                         |
|                                       |                                           |
|              +------------------------+------------------------+                  |
|              v                                                 v                  |
|  +-------------------------+                       +-----------------------+      |
|  |      Engine Core        |                       |    State & Storage    |      |
|  |      (js/engine.js)     |                       |     (js/state.js)     |      |
|  |  - Block Rotation       |                       |  - LocalStorage sync  |      |
|  |  - Spaced Repetition    |                       |  - Session telemetry  |      |
|  |  - Pass Probability     |                       |  - JSON backup engine |      |
|  +------------+------------+                       +-----------+-----------+      |
|               |                                                |                  |
|               +-----------------------+------------------------+                  |
|                                       |                                           |
|                                       v                                           |
|  +-----------------------------------------------------------------------------+  |
|  |                           Question Data Store                               |  |
|  |  - data/cert_manifest.js      (Domain weights, taxonomy, and rules)         |  |
|  |  - data/cert_cdl.js           (300 items · Cloud Digital Leader)            |  |
|  |  - data/cert_ace.js           (300 items · Associate Cloud Engineer)        |  |
|  |  - data/cert_pca.js           (300 items · Professional Cloud Architect)    |  |
|  |  - data/case_studies.js       (4 Official PCA Case Studies)                 |  |
|  |  - data/free_certifications.js (Curated  training catalog)                |  |
|  |  - data/architecture_tools.js (Decision trees & cheatsheets)                |  |
|  +-----------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------+
`

---

## 2. Certification Track Specifications

| Track | Level | Exam Duration | Questions | Passing Score | Core Focus |
|---|---|---|---|---|---|
| **Cloud Digital Leader (CDL)** | Foundational | 90 minutes | 50-60 | 70% | Cloud concepts, Google Cloud solutions, TCO/ROI, security & compliance |
| **Associate Cloud Engineer (ACE)** | Associate | 120 minutes | 50-60 | 70% | Infrastructure deployment, Compute Engine, GKE, VPC, IAM, gcloud CLI commands |
| **Professional Cloud Architect (PCA)** | Professional | 120 minutes | 50-60 | 70% | Scalable architecture design, reliability, security, multi-region failover, Case Studies |

---

## 3. Algorithmic Capabilities

### 3.1 Stratified Block Rotation Engine (Zero-Repetition)
- The entire bank of 300 questions per certification is divided into **6 distinct, non-overlapping blocks of 50 questions**.
- Consecutive mock sessions draw strictly from consecutive blocks without repetition until the full 300-question pool has been completed.

### 3.2 4-Box Leitner Spaced Repetition System (Weakness Radar)
- Any incorrectly answered question is automatically routed to **Box 0 (Weakness Queue)**.
- To achieve mastery, a question must be answered correctly across **3 consecutive spaced sessions**.
- Eliminates confirmation bias and reinforces root conceptual understanding.

### 3.3 Logistic Pass Probability Predictor
- Calculates real-time passing likelihood (0% to 100%) using a calibrated logistic function:
  P(\text{pass}) = \frac{1}{1 + e^{-k(S - S_0)}}
- Evaluates bank coverage percentage, historical session consistency, and unresolved error count.

### 3.4 Forensic Distractor Analysis
- Every question includes official technical justifications, associated gcloud CLI syntax, and distractor trap breakdowns explaining why alternate options fail architectural best practices.

---

## 4. Repository Structure

`
Certificaciones_GCP/
├── iniciar_plataforma.bat            # 1-Click root launcher
├── LICENSE                           # MIT License
├── README.md                         # Technical architecture documentation
├── .gitignore                        # Git ignore specifications
│
└── plataforma_entrenamiento_master/  # Core SPA platform
    ├── index.html                    # Application entry point
    ├── iniciar_plataforma.bat        # Local HTTP server launcher
    │
    ├── css/
    │   └── styles.css                # Enterprise design system (Dark & Light tokens)
    │
    ├── data/
    │   ├── cert_manifest.js          # Certification domain taxonomy & exam configurations
    │   ├── cert_cdl.js               # 300 CDL items with distractor analysis
    │   ├── cert_ace.js               # 300 ACE items with gcloud commands
    │   ├── cert_pca.js               # 300 PCA items with case study links
    │   ├── case_studies.js           # Full official case studies (Mountkirk, TerramEarth, EHR, HRL)
    │   ├── free_certifications.js    # Curated  certifications catalog
    │   └── architecture_tools.js     # Decision trees (Compute, Database, Storage, Network)
    │
    ├── js/
    │   ├── app.js                    # Main application controller, routing & audio synthesis
    │   ├── engine.js                 # Leitner SRS, block rotation & pass probability algorithms
    │   ├── state.js                  # State persistence, JSON backup & recovery
    │   ├── i18n.js                   # Bilingual runtime engine (ES / EN)
    │   ├── ui_study.js               # Study mode controller with distractor drawer
    │   ├── ui_exam.js                # Timed exam simulation controller
    │   ├── ui_drill.js               # Weakness drill & rapid-recall controller
    │   ├── ui_search.js              # Tokenized smart search explorer (Ctrl + K)
    │   ├── ui_news.js                # Free courses & voucher radar
    │   ├── ui_tools.js               # Interactive architecture decision trees
    │   └── ui_charts.js              # Native SVG visualization (Radar & Timeline charts)
    │
    ├── reports/                      # Quality & audit reports (Lighthouse JSONs)
    ├── scripts/                      # QA suite & forensic inspection scripts
    ├── tests/                        # Adversarial & functional test suites (Node.js)
    └── backups/                      # Automatic system state backups
`

---

## 5. Quick Start & Execution

### Method 1: Instant 1-Click Launcher (Recommended)
Double-click iniciar_plataforma.bat located at the root of the repository.
The script automatically detects your local environment, initializes a local HTTP server on port 8080 or 8989, and launches the application in your default web browser.

### Method 2: Manual HTTP Server
`ash
# Navigate to the core application folder
cd plataforma_entrenamiento_master

# Launch standard HTTP server
python -m http.server 8989 --bind 127.0.0.1
`
Then open http://127.0.0.1:8989 in Google Chrome, Microsoft Edge, Mozilla Firefox, or Apple Safari.

### Method 3: Direct File Execution (Zero Network / Air-Gapped)
Open plataforma_entrenamiento_master/index.html directly in any web browser. The platform runs 100% offline without requiring an active internet connection.

---

## 6. Verification and Quality Assurance

The codebase includes automated test suites covering syntax verification, UI element wiring, and algorithm correctness:

`ash
# Run full automated QA verification suite
python plataforma_entrenamiento_master/scripts/run_full_qa_suite.py

# Run interactive button & DOM wiring tests
node plataforma_entrenamiento_master/tests/test_all_ui_buttons.js

# Run search engine tokenization tests
node plataforma_entrenamiento_master/tests/test_smart_search.js
`

### Google Lighthouse Quality Benchmark
- **Accessibility:** 100 / 100
- **Best Practices:** 100 / 100
- **SEO:** 100 / 100
- **Agentic Browsing:** 100 / 100
- **Performance:** 75 / 100

---

## 7. Security and Data Privacy

- **100% Local Execution:** All user progress, exam attempt records, and notes remain strictly within the user's browser localStorage.
- **Zero Telemetry / Zero External Requests:** No data is transmitted to third-party servers.
- **Air-Gap Compatible:** Suitable for enterprise restricted environments and offline training setups.

---

## 8. License

Distributed under the MIT License. See LICENSE for details.
