# Project: Google Cloud Certification Training Platform (Master Edition)

## Architecture
The platform is a high-performance, 100% offline, zero-CDN client-side Single Page Application (SPA) designed for rapid learning, diagnosis, and high-fidelity exam simulation for Google Cloud certifications (Cloud Digital Leader, Associate Cloud Engineer, Professional Cloud Architect).

### System Data Flow & Architecture Diagram
```
+-----------------------------------------------------------------------------------+
|                              Browser Runtime / SPA                                |
|                                                                                   |
|  +---------------------+   +---------------------+   +-------------------------+  |
|  |   Study Mode View   |   | Exam Simulator View |   |   Weakness Drill View   |  |
|  |  (Instant Feedback, |   |  (90/120m Timers,   |   |   (3-Hit Spaced Recall, |  |
|  |   Distractor Traps, |   |   Palette, Review,  |   |    Rapid-Fire Keyb)     |  |
|  |    gcloud Commands) |   | PCA Split-Panel CS) |   |                         |  |
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
|  |      Engine Core        |                       |   State & Storage     |      |
|  |      (js/engine.js)     |                       |     (js/state.js)     |      |
|  |  - Block Rotation       |                       |  - LocalStorage sync  |      |
|  |  - Spaced Repetition    |                       |  - Session history    |      |
|  |  - Passing Probability  |                       |  - JSON Export/Import |      |
|  +------------+------------+                       +-----------+-----------+      |
|               |                                                |                  |
|               +-----------------------+------------------------+                  |
|                                       |                                           |
|                                       v                                           |
|  +-----------------------------------------------------------------------------+  |
|  |                        Question Data Store                                  |  |
|  |  - data/cert_manifest.js  (Domain weights & exam configurations)           |  |
|  |  - data/cert_cdl.js       (300+ Cloud Digital Leader items)                 |  |
|  |  - data/cert_ace.js       (300+ Associate Cloud Engineer items)             |  |
|  |  - data/cert_pca.js       (300+ Professional Cloud Architect items)         |  |
|  |  - data/case_studies.js   (Mountkirk, TerramEarth, EHR, Helicopter League)  |  |
|  +-----------------------------------------------------------------------------+  |
+-----------------------------------------------------------------------------------+
```

---

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Multi-Certification Manifest | Metadata, domain taxonomy, exam durations, passing scores for CDL, ACE, PCA | M1 | Survey |
| 2 | CDL 300+ Question Bank | 300 high-fidelity questions across 4 CDL domains with explanations and distractor traps | M1 | Survey |
| 3 | ACE 300+ Question Bank | 300 tactical questions across 5 ACE domains with gcloud commands and justifications | M1 | Survey |
| 4 | PCA 300+ Question Bank | 300 architectural questions across 6 PCA domains including Case Study questions | M1 | Survey |
| 5 | Authoritative PCA Case Studies | Full case study texts for Mountkirk Games, TerramEarth, EHR Healthcare, HRL | M1 | Survey |
| 6 | Stratified Block Rotation Engine | 6-block rotation (50 questions each) guaranteeing zero repetition across 6 sessions | M2 | Survey |
| 7 | Adaptive Spaced Repetition | Leitner 4-level queue prioritizing weak items until achieving 3 consecutive correct hits | M2 | Survey |
| 8 | Real Passing Probability Metric | Multi-factor calibrated logistic metric (0-100%) factoring EWMA score, domain balance, mastery, and pacing | M2 | Survey |
| 9 | LocalStorage State Persistence | Versioned state manager with backup export/import and CRC-32 integrity validation | M2 | Survey |
| 10 | Standalone Offline Architecture | Pure zero-CDN execution with system fonts and relative paths | M3 | Survey |
| 11 | Study Mode UI | Instant feedback, trigger keyword highlights, distractor traps breakdown, gcloud box | M3 | Survey |
| 12 | Official Simulation Mode UI | Official timers (CDL 90m, ACE 120m, PCA 120m), 4-state question palette, review screen | M3 | Survey |
| 13 | PCA Case Study Split-Panel | Dynamic split-screen viewer for Case Study reading alongside question scenario | M3 | Survey |
| 14 | Weakness Drill Mode UI | High-density rapid-fire remediation view with keyboard shortcuts (A-D, 1-4, Space, F) | M3 | Survey |
| 15 | Analytics Dashboard & Pure SVG Charts | Native SVG radar spider chart, 0-100% radial gauge, historical score trend timeline | M3 | Survey |
| 16 | One-Click Windows Launcher | Standalone `iniciar_plataforma.bat` script for instant execution | M3 | Survey |
| 17 | Automated Schema & Question Validator | Script testing schema validity, non-empty fields, distractor completeness for 900+ Qs | M4 | Survey |
| 18 | Algorithmic Unit Tests | Unit tests verifying rotation block disjointness, Leitner state machine, and metric stability | M4 | Survey |
| 19 | PowerShell Master Test Runner | `run_tests.ps1` automated runner for complete verification | M4 | Survey |
| 20 | Final E2E Suite Pass & Adversarial Hardening | 100% test pass on Tiers 1-4 and Tier 5 adversarial stress testing | M5 | Survey |

---

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Data Foundation & Question Banks | Authoring 900+ questions (CDL 300+, ACE 300+, PCA 300+), Case Studies, and Manifest | none | DONE |
| M2 | Engine Algorithms & State Core | Block rotation, Leitner 3-hit spaced repetition, Passing Probability, and LocalStorage store | M1 | DONE |
| M3 | UI Platform, Interactive Modes & Dashboard | HTML5/CSS3/JS UI, Study/Simulation/Drill modes, PCA Split-Panel, SVG charts, Windows Launcher | M2 | DONE |
| M4 | E2E Testing Suite & Automated Test Infra | Automated integrity test, algorithmic unit tests, and PowerShell runner | M1, M2 | DONE |
| M5 | Final Verification & Adversarial Hardening | 100% E2E test pass, adversarial stress testing, and victory verification | M3, M4 | DONE |

---

## Interface Contracts

### Data Manifest (`data/cert_manifest.js`) ↔ App Engine (`js/engine.js`)
```javascript
window.GCP_MANIFEST = {
  certifications: {
    cdl: { id: 'cdl', name: 'Cloud Digital Leader', durationMinutes: 90, questionCount: 50, passingPercent: 70, domains: { ... } },
    ace: { id: 'ace', name: 'Associate Cloud Engineer', durationMinutes: 120, questionCount: 50, passingPercent: 70, domains: { ... } },
    pca: { id: 'pca', name: 'Professional Cloud Architect', durationMinutes: 120, questionCount: 50, passingPercent: 70, domains: { ... } }
  }
};
```

### Question Item Schema (`data/cert_*.js`) ↔ UI Controllers
```typescript
interface QuestionItem {
  id: string;                         // e.g. "ACE-D1-001"
  certId: 'cdl' | 'ace' | 'pca';
  blockId: string;                   // "BLOCK-1" to "BLOCK-6"
  domainId: string;                  // e.g. "ACE-D1"
  domainName: string;
  subtopic: string;
  difficulty: 'foundational' | 'intermediate' | 'advanced' | 'expert';
  bloomsLevel: 'understand' | 'apply' | 'analyze';
  timeEstimateSeconds: number;
  caseStudy: 'none' | 'mountkirk_games' | 'terramearth' | 'ehr_healthcare' | 'helicopter_racing_league';
  caseStudySection?: string;
  title: string;
  scenario: string;
  keywords: string[];
  isMultiSelect: boolean;
  expectedSelectCount: number;
  options: { letter: 'A'|'B'|'C'|'D'; text: string; isTrap?: boolean }[];
  correct: string | string[];        // "B" or ["A", "D"]
  explanation: string;
  distractors: { A?: string; B?: string; C?: string; D?: string };
  gcloudCommand?: string;
  terraformSnippet?: string;
  architectureComponents?: string[];
  officialDocUrl?: string;
}
```

### Engine Core (`js/engine.js`) ↔ State Store (`js/state.js`)
```javascript
window.GCP_ENGINE = {
  BlockRotationEngine: {
    generateEpochBlocks(certId, domainWeights, questionsPool, epochSeed): QuestionItem[][]
  },
  LeitnerEngine: {
    processAnswer(currentState, isCorrect, chosenOption, responseTimeMs): QuestionUserState,
    selectDrillBatch(allQuestions, userQuestionStates, domainStats, batchSize): QuestionItem[]
  },
  PassingProbabilityEngine: {
    calculatePassingProbability(params): { passingProbability: number, theta: number, breakdown: object }
  }
};
```

---

## Code Layout
```
c:\DevWork\Certificaciones_GCP\plataforma_entrenamiento_master\
├── index.html                     # SPA Entry Point
├── iniciar_plataforma.bat         # Windows 1-Click Launcher
├── css\
│   └── styles.css                 # Unified responsive theme (dark/light, GCP aesthetic)
├── js\
│   ├── app.js                     # Main App Controller & Navigation Router
│   ├── state.js                   # State Store & LocalStorage Persistence Manager
│   ├── engine.js                  # Rotation Blocks, Leitner Spaced Repetition & Pacing Engine
│   ├── ui_study.js                # Study Mode Renderer & Feedback Controller
│   ├── ui_exam.js                 # Exam Simulation Controller, Timer, Palette & Split-Panel
│   ├── ui_drill.js                # Weakness Drill Controller & Keyboard Shortcuts
│   └── ui_charts.js               # Pure SVG Radar, Radial Gauge & Timeline Visualizer
├── data\
│   ├── cert_manifest.js           # Certification metadata, domains, weights & exam configs
│   ├── case_studies.js            # Full PCA Case Studies (Mountkirk, TerramEarth, EHR, Helicopter)
│   ├── cert_cdl.js                # 300+ Questions: Cloud Digital Leader
│   ├── cert_ace.js                # 300+ Questions: Associate Cloud Engineer
│   └── cert_pca.js                # 300+ Questions: Professional Cloud Architect
├── tests\
│   ├── test_integrity.js          # Automated Question Bank & Schema Integrity Validator
│   ├── test_algorithms.js         # Unit Tests for Rotation, Leitner & Score Calculation
│   └── run_tests.ps1              # Automated Test Runner for Windows PowerShell / Node
└── PROJECT.md                     # Project blueprint & milestones
```
