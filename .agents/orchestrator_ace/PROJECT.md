# Project: ACE Exam Bank Psychometric Bias Remediation

## Architecture & Scope
The Associate Cloud Engineer (ACE) question bank consists of exactly 300 questions in `plataforma_entrenamiento_master/data/cert_ace.js`.
The bank is divided into 5 official domains and 6 exam blocks (50 questions each).
The remediation is executed across 12 sequential batches of 25 questions.

## Requirements & Constraints Summary
- **R1 Length Bias Elimination**:
  - Difference between max and min option length <= 25% of max in every question.
  - Correct answer is longest in <= 35% across the bank.
  - Average character excess of correct answer <= 25.
  - Pick-longest heuristic (H1) score <= 45%.
  - 0 of 6 blocks passable by picking longest (>= 70%).
  - PRUNE correct answers; ELEVATE distractors to realistic GCP options; NEVER add filler.
- **R2 Multi-Select Integration**:
  - Target 12-20% multi-select questions (36-60 questions total, ~3-5 per 25-question batch).
  - 5 options (A, B, C, D, E).
  - `expectedSelectCount`: 2 (or 3). `correct`: array of exact matching count.
  - Scenario explicitly states "Choose 2" or "Choose 3".
- **R3 Key Distribution via FNV-1a Hash**:
  - Correct answer position determined by 32-bit FNV-1a hash of question ID.
  - Target 20-30% per letter (A, B, C, D, E), cycle <= 40%, periodicity-4 <= 40%.
- **R4 Discriminating Constraints**:
  - Every scenario has explicit quantified technical/business constraint (latency, RPO, budget, compliance, zero downtime, least privilege).
  - Length: 40-90 words, tactical GCP commands/flags/console.
- **R5 Factual Accuracy & Valid URLs**:
  - `officialDocUrl` must be from approved domains (`cloud.google.com`, `kubernetes.io`, `developer.hashicorp.com`, etc.).
  - `explanation` must be accurate and directly supported by documentation.
- **R6 Schema & Question Count**:
  - Exactly 300 questions in `cert_ace.js` at all times.
  - `sectionId`, `subsectionId`, `conceptos` present and aligned with `data/taxonomia.js`.
  - No `isTrap`, `trapType`, or `distractors[correct]`.
  - Never touch `tests/qa/`, `cert_cdl.js`, or `cert_pca.js`.
- **R7 Verification & Commits**:
  - After each batch of 25: run `node tests/qa/test_fidelidad_banco.js`, verify 300 questions, and git commit.

## Batch Milestones
| # | Batch ID | Scope | Target Multi-Select | Dependencies | Status |
|---|----------|-------|---------------------|--------------|--------|
| 1 | M1 | ACE-D1-001..ACE-D1-025 | 4 items | none | DONE (11beaf1) |
| 2 | M2 | ACE-D1-026..ACE-D1-050 | 4 items | M1 | DONE (4a655b6) |
| 3 | M3 | ACE-D1-051..ACE-D1-060 + ACE-D2-001..ACE-D2-015 | 4 items | M2 | DONE (55fcd67) |
| 4 | M4 | ACE-D2-016..ACE-D2-040 | 4 items | M3 | DONE (57765df) |
| 5 | M5 | ACE-D2-041..ACE-D2-055 + ACE-D3-001..ACE-D3-010 | 4 items | M4 | DONE (9ae9c2f) |
| 6 | M6 | ACE-D3-011..ACE-D3-035 | 4 items | M5 | PLANNED |
| 7 | M7 | ACE-D3-036..ACE-D3-060 | 4 items | M6 | PLANNED |
| 8 | M8 | ACE-D3-061..ACE-D3-075 + ACE-D4-001..ACE-D4-010 | 4 items | M7 | PLANNED |
| 9 | M9 | ACE-D4-011..ACE-D4-035 | 4 items | M8 | PLANNED |
| 10 | M10 | ACE-D4-036..ACE-D4-060 | 4 items | M9 | PLANNED |
| 11 | M11 | ACE-D5-001..ACE-D5-025 | 4 items | M10 | PLANNED |
| 12 | M12 | ACE-D5-026..ACE-D5-050 | 4 items | M11 | PLANNED |

## Code Layout
- Target File: `plataforma_entrenamiento_master/data/cert_ace.js`
- Test Runner: `plataforma_entrenamiento_master/tests/qa/test_fidelidad_banco.js`
- Batch Measure: `plataforma_entrenamiento_master/tests/qa/medir_lote.js`
- Taxonomy Reference: `plataforma_entrenamiento_master/data/taxonomia.js`
