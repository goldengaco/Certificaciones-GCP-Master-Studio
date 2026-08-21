# Test Infrastructure: Google Cloud Certification Training Platform (Master Edition)

## 1. Executive Summary & Test Philosophy
The Google Cloud Certification Training Platform test infrastructure is engineered for complete autonomy, high deterministic precision, and zero external runtime dependencies. It provides continuous verification across all certification tracks:
1. **Cloud Digital Leader (CDL)**
2. **Associate Cloud Engineer (ACE)**
3. **Professional Cloud Architect (PCA)**

### Core Test Principles
- **Zero-CDN & Zero External Dependencies**: The test harness runs directly on modern Node.js standard libraries (`fs`, `path`, `vm`, `assert`) and native Windows PowerShell. No `npm install`, network access, or external packages required.
- **Dual-Verification Model**: Test suites validate both runtime JavaScript source modules (`js/engine.js`, `js/state.js`, `data/*.js`) and self-contained reference implementations conforming to `PROJECT.md` interface specifications.
- **Exhaustive Schema & Distractor Analysis**: Every single question item across the 900+ question bank is inspected for technical scenario completeness, unique identifiers, option letter validity, distractor trap justifications, trigger keywords, and gcloud/terraform commands.
- **Mathematical & Algorithmic Rigor**: Block rotation disjointness, Leitner 3-hit spaced repetition state transitions, logistic Passing Probability calibration, and CRC-32 integrity validation are mathematically asserted across thousands of simulated states.
- **Strict Anti-Cheat & Forensic Compliance**: Zero hardcoded mocks, zero dummy assertions. Every test evaluates real computational state and dynamic inputs.

---

## 2. Feature Inventory & Testing Matrix

| # | Feature | Target Spec | Test Suite | Verification Method & Assertion |
|---|---------|-------------|------------|---------------------------------|
| 1 | Multi-Cert Manifest | `data/cert_manifest.js` | `test_integrity.js` | Domain taxonomy validation, weight sum exactness (100%), exam duration & passing score schemas. |
| 2 | CDL 300+ Question Bank | `data/cert_cdl.js` | `test_integrity.js` | 300+ unique questions, 4 domains, non-empty scenarios, options A-D, distractor justifications. |
| 3 | ACE 300+ Question Bank | `data/cert_ace.js` | `test_integrity.js` | 300+ unique questions, 5 domains, gcloud/CLI snippets, tactical exam scenarios. |
| 4 | PCA 300+ Question Bank | `data/cert_pca.js` | `test_integrity.js` | 300+ unique questions, 6 domains, multi-select correctness, case study linkages. |
| 5 | Authoritative Case Studies | `data/case_studies.js` | `test_integrity.js` | 4 complete case studies (Mountkirk Games, TerramEarth, EHR Healthcare, Helicopter Racing League) verified. |
| 6 | Stratified Block Rotation Engine | `js/engine.js` | `test_algorithms.js` | 6 disjoint blocks of 50 questions with 0 premature repetition across 6 sessions; 100% pool coverage. |
| 7 | Adaptive Spaced Repetition (Leitner) | `js/engine.js` | `test_algorithms.js` | 4-level queue state machine, 3 consecutive correct hits to reach Mastery, error resets streak to 0. |
| 8 | Real Passing Probability Metric | `js/engine.js` | `test_algorithms.js` | Multi-factor logistic model bounded in [0.0%, 99.9%], EWMA weighting, domain deficit penalties, pacing factor. |
| 9 | LocalStorage State Persistence | `js/state.js` | `test_algorithms.js` | State schema versioning, session history persistence, CRC-32 backup export/import validation, tamper rejection. |
| 10 | Windows PowerShell Test Runner | `tests/run_tests.ps1` | `run_tests.ps1` | Automated test orchestration, ANSI colored metric summaries, deterministic exit code propagation (0/1). |

---

## 3. 4-Tier Test Architecture

```
+------------------------------------------------------------------------------------+
|                         4-TIER TEST ARCHITECTURE PYRAMID                           |
|                                                                                    |
|                                [ Tier 4 ]                                          |
|                       Real-World Workloads & Stress                                |
|                  (Multi-Epoch Exam Simulations, 6-Block Rotations,                 |
|                   Large-Scale State Backups & CRC-32 Verifications)                |
|                                     |                                              |
|                                [ Tier 3 ]                                          |
|                       Cross-Feature Pairwise Integration                           |
|                  (Rotation + Leitner Drift, Simulation + State Sync,               |
|                   Drill Weakness Remediation -> Probability Update)                |
|                                     |                                              |
|                                [ Tier 2 ]                                          |
|                         Boundary & Corner Cases                                    |
|                  (Cold Start 0-History, Single Question Bank Limits,               |
|                   Corrupted JSON/CRC-32 Tampering, Time Extremes)                  |
|                                     |                                              |
|                                [ Tier 1 ]                                          |
|                       Feature Coverage & Unit Tests                                |
|                  (Manifest Schema, Question Item AST & Distractor Traps,           |
|                   Leitner 3-Hit Machine, Logistic Passing Probability Metric)      |
+------------------------------------------------------------------------------------+
```

### Tier 1: Feature Coverage & Unit Tests
- **Manifest Integrity**: Validates all certifications (`cdl`, `ace`, `pca`), exam duration (90/120 min), question counts (50), passing score thresholds (70%), and guarantees domain weights sum to exactly 100.0%.
- **Question Schema AST**: Inspects every question item for required keys (`id`, `certId`, `blockId`, `domainId`, `domainName`, `subtopic`, `difficulty`, `bloomsLevel`, `timeEstimateSeconds`, `caseStudy`, `title`, `scenario`, `keywords`, `isMultiSelect`, `options`, `correct`, `explanation`, `distractors`).
- **Distractor Completeness**: Asserts that every non-correct option has an explicit, non-trivial entry in the `distractors` dictionary explaining why that choice is incorrect or suboptimal in Google Cloud architecture.
- **Rotation Engine Unit Logic**: Validates that 6 blocks partitioned from 300 questions have exactly 50 items each, are pairwise disjoint ($B_i \cap B_j = \emptyset, \forall i \neq j$), and $\bigcup_{i=1}^6 B_i = \text{Pool}$.
- **Leitner State Transitions**: Verifies Box 0 $\rightarrow$ Box 1 $\rightarrow$ Box 2 $\rightarrow$ Box 3 (Mastered) upon 3 consecutive correct answers; verifies instant fallback to Box 0 and streak reset to 0 upon any incorrect answer.
- **Probability Metric Calibration**: Evaluates logistic sigmoid curve across synthetic theta values.

### Tier 2: Boundary & Corner Cases
- **Cold Start Behavior**: Ensures new users with 0 completed exams or 0 answered questions receive a baseline probability with explicit cold-start indicator and no NaN/null errors.
- **Score & Metric Clamping**: Enforces hard bounding: Passing Probability cannot drop below 0.0% or exceed 99.9% under any extreme inputs (e.g. 100% correct in 1 second, or 0% correct with massive penalties).
- **Extreme Pacing Conditions**: Tests questions answered in under 5 seconds (rapid guessing penalty) and questions exceeding 300 seconds (time exhaustion risk).
- **Corrupted State Recovery**: Tests LocalStorage deserialization with invalid JSON, missing keys, out-of-bounds numbers, and corrupted CRC-32 backup files.
- **Multi-Select Array Boundaries**: Validates multi-select questions with 2 of 5, 2 of 6, and 3 of 5 option arrays to prevent index out of bounds or missing letter mappings.

### Tier 3: Cross-Feature Pairwise Integration
- **Simulation + State Synchronization**: Simulates full 50-question exam sessions, recording domain breakdowns, average time per question, and ensuring persistent state updates correctly.
- **Drill Mode + Spaced Repetition**: Exercises the Leitner drill batch generator (`selectDrillBatch`), verifying that failed questions from simulation sessions are prioritized in subsequent drill sessions until 3 hits are scored.
- **Domain Deficit Impact on Passing Probability**: Verifies that a user scoring 90% overall but 30% on a heavy 30%-weighted domain is heavily penalized in the Passing Probability calculation.
- **State Export/Import Roundtrip**: Exports full application state with CRC-32 checksum, imports into a clean state container, and verifies 100% object equality.

### Tier 4: Real-World Workloads & Stress
- **6-Session Rotation Cycle**: Executes 6 consecutive full 50-question simulations. Verifies zero question repetition across all 6 sessions (300 questions seen exactly once).
- **900+ Question Bank Exhaustive Scan**: Parses and validates all 900+ questions across CDL, ACE, and PCA files without performance degradation (< 500ms execution time).
- **Adversarial State Tampering**: Modifies arbitrary bytes in export payloads and verifies that CRC-32 checksum verification immediately catches and rejects corrupted payloads.

---

## 4. Test Suite Components

### 1. `tests/test_integrity.js`
- **Purpose**: Automated Question Bank & Schema Integrity Validator.
- **Features**:
  - Validates `data/cert_manifest.js`, `data/case_studies.js`, `data/cert_cdl.js`, `data/cert_ace.js`, `data/cert_pca.js`.
  - Validates 4 Case Studies for complete text, business and technical requirements.
  - Validates every question item for schema conformity, unique IDs, non-empty scenarios, option letters A-D, multi-select arrays, distractor justifications, and gcloud commands.
  - Self-Validation Fixture Suite: includes synthetic test fixtures verifying that the validator accurately flags duplicate IDs, invalid domain weights, missing distractors, and corrupted case study links.
- **Execution**: `node tests/test_integrity.js`

### 2. `tests/test_algorithms.js`
- **Purpose**: Algorithmic & State Unit Test Suite.
- **Features**:
  - Tests Block Rotation Engine (6 disjoint blocks of 50 questions, 0 repetition across 6 sessions, domain weight preservation).
  - Tests Leitner Spaced Repetition Engine (4-level queue, 3-hit mastery transition, streak reset on error, drill queue prioritization).
  - Tests Real Passing Probability Engine (logistic metric bounds [0.0%, 99.9%], cold start, EWMA weighting, domain deficit penalty, pacing calibration).
  - Tests LocalStorage State Persistence (schema migrations, session history, CRC-32 checksum generation and tamper rejection).
  - Works against runtime `js/engine.js` / `js/state.js` or built-in reference implementations.
- **Execution**: `node tests/test_algorithms.js`

### 3. `tests/run_tests.ps1`
- **Purpose**: Master Windows PowerShell Test Runner.
- **Features**:
  - Automatically executes `test_integrity.js` and `test_algorithms.js`.
  - Formats ANSI colored headers, pass/fail status per suite, and timing benchmarks.
  - Sets exit code to 0 if all suites pass, or 1 if any suite fails.
- **Execution**: `powershell -ExecutionPolicy Bypass -File tests/run_tests.ps1`

---

## 5. Pass/Fail Thresholds & Quality Gates

| Metric / Check | Required Threshold | Invalidation Condition |
|----------------|-------------------|------------------------|
| Schema Violations | Exactly 0 | Any missing field, empty string, or invalid enum |
| ID Uniqueness | 100% Unique | Any duplicate question ID in any cert |
| Distractor Trap Justification | 100% of wrong options | Any missing or trivial (<10 char) distractor explanation |
| Block Disjointness | 0 Overlap ($B_i \cap B_j = \emptyset$) | Any question appearing in >1 block within the same 6-block epoch |
| Spaced Repetition Mastery | Exactly 3 consecutive hits | Transition to mastery before 3 hits, or failure to reset on error |
| Passing Probability Bounds | $0.0\% \le P \le 99.9\%$ | Any probability $< 0.0$ or $> 0.999$, or NaN/null |
| CRC-32 Tamper Detection | 100% Rejection | Any tampered state payload accepted on import |
| Total Test Suite Pass Rate | 100.0% | Any failing test assertion in any suite |

---

## 6. Execution Guide

### Windows PowerShell (Recommended)
```powershell
powershell -ExecutionPolicy Bypass -File tests/run_tests.ps1
```

### Direct Node.js Execution
```powershell
node tests/test_integrity.js
node tests/test_algorithms.js
```

### CI / Automated Pipeline Invocation
```cmd
node tests/test_integrity.js && node tests/test_algorithms.js
```
Exit code will be `0` on success and non-zero on failure.
