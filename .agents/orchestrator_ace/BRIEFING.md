# BRIEFING — 2026-08-29T21:41:00Z

## Mission
Eliminate psychometric bias and bring ACE exam bank in cert_ace.js to 0 QA failures across all 12 batches of 25 questions.

## 🔒 My Identity
- Archetype: project_orchestrator
- Roles: orchestrator, user_liaison, human_reporter, successor
- Working directory: C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\orchestrator_ace
- Original parent: parent
- Original parent conversation ID: 8f28a0ca-b248-411c-9a2f-877828f5f285

## 🔒 My Workflow
- **Pattern**: Project Orchestration (12 sequential batches / milestones)
- **Scope document**: C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\orchestrator_ace\PROJECT.md
1. **Decompose**: 12 batches of 25 questions covering all 300 ACE questions (ACE-D1-001 through ACE-D5-050).
2. **Dispatch & Execute**:
   - For each batch:
     a. Dispatch Explorer to analyze the 25 questions, calculate hash keys, identify multi-select candidates (3-5 per batch to hit 12-20%), and draft pruned correct answers + elevated distractors + discriminating constraints + valid doc URLs.
     b. Dispatch Worker to apply edits to cert_ace.js for those 25 questions, verify 300 questions total, run test_fidelidad_banco.js, verify metrics, and git commit.
     c. Dispatch Reviewer & Auditor to verify psychometric properties, factual correctness, diff <= 25%, zero cheating/filler.
     d. Gate check: must pass all criteria before proceeding to the next batch.
3. **On failure**:
   - Retry: send feedback / evidence
   - Replace: fresh agent
   - Redesign: revise batch drafting strategy
4. **Succession**: Self-succeed at 16 spawns if necessary.
- **Work items**:
  1. Batch 1: ACE-D1-001..ACE-D1-025 [pending]
  2. Batch 2: ACE-D1-026..ACE-D1-050 [pending]
  3. Batch 3: ACE-D1-051..ACE-D1-060 + ACE-D2-001..ACE-D2-015 [pending]
  4. Batch 4: ACE-D2-016..ACE-D2-040 [pending]
  5. Batch 5: ACE-D2-041..ACE-D2-055 + ACE-D3-001..ACE-D3-010 [pending]
  6. Batch 6: ACE-D3-011..ACE-D3-035 [pending]
  7. Batch 7: ACE-D3-036..ACE-D3-060 [pending]
  8. Batch 8: ACE-D3-061..ACE-D3-075 + ACE-D4-001..ACE-D4-010 [pending]
  9. Batch 9: ACE-D4-011..ACE-D4-035 [pending]
  10. Batch 10: ACE-D4-036..ACE-D4-060 [pending]
  11. Batch 11: ACE-D5-001..ACE-D5-025 [pending]
  12. Batch 12: ACE-D5-026..ACE-D5-050 [pending]
- **Current phase**: Survey / Initial Setup
- **Current focus**: Survey & Batch 1 Planning

## 🔒 Key Constraints
- Windows 11 Pro + PowerShell 7.6 (pwsh). Use Windows syntax, sequential execution.
- NEVER write/modify source code directly; ALWAYS delegate to subagents.
- NEVER run build/test commands directly; require subagents to run them.
- Target cert_ace.js ONLY. Never modify test files, cert_cdl.js, or cert_pca.js.
- Ensure 300 questions total at all times.
- Follow R1-R7 and Contrato del Banco rules strictly.

## Current Parent
- Conversation ID: 8f28a0ca-b248-411c-9a2f-877828f5f285
- Updated: 2026-08-29T21:41:00Z

## Key Decisions Made
- Work executed in 12 batches of 25 questions sequentially as specified in ORIGINAL_REQUEST.md.

## Team Roster
| Agent | Type | Work Item | Status | Conv ID |
|-------|------|-----------|--------|---------|
| batch1_explorer | teamwork_preview_explorer | Batch 1 (ACE-D1-001..ACE-D1-025) Draft & Analysis | completed | cee80804-9627-4566-8941-1dc65cdac589 |
| batch1_worker | teamwork_preview_worker | Batch 1 Integration & Testing | completed | bdbe6178-0dae-44b5-a700-7a5c33e28496 |
| batch2_explorer | teamwork_preview_explorer | Batch 2 (ACE-D1-026..ACE-D1-050) Draft & Analysis | completed | e0aacd1b-dd09-4316-84c5-e313bfa2f023 |
| batch2_worker | teamwork_preview_worker | Batch 2 Integration & Testing | completed | 57d0c966-94a1-46df-bf49-f922000e15ba |
| batch3_explorer | teamwork_preview_explorer | Batch 3 Draft & Analysis | completed | bdb5b8ca-e98e-4d50-a729-16afcb647bcd |
| batch3_worker | teamwork_preview_worker | Batch 3 Integration & Testing | completed | b20a23b2-9e35-42c7-a940-1469e2dd483a |
| batch4_explorer | teamwork_preview_explorer | Batch 4 Draft & Analysis | completed | 01778046-5fad-471b-8bb1-89b1cd77c17f |
| batch4_worker | teamwork_preview_worker | Batch 4 Integration & Testing | completed | 04c02e51-e9b0-48c1-a8a0-d5c4d0c11152 |
| batch5_explorer | teamwork_preview_explorer | Batch 5 Draft & Analysis | completed | 46468b5a-552e-4116-9989-11fde4aef464 |
| batch5_worker | teamwork_preview_worker | Batch 5 Integration & Testing | completed | f6cc15ba-86bf-4558-89d4-984deb3a8f55 |
| batch6_explorer | teamwork_preview_explorer | Batch 6 Draft & Analysis | in-progress | 32fd8c2b-2ff9-42ca-bfc3-7e981338bf02 |

## Succession Status
- Succession required: no
- Spawn count: 11 / 16
- Pending subagents: 32fd8c2b-2ff9-42ca-bfc3-7e981338bf02
- Predecessor: none
- Successor: not yet spawned

## Active Timers
- Heartbeat cron: task-29
- Safety timer: none

## Artifact Index
- C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\orchestrator_ace\PROJECT.md — Global architecture & batch definitions
- C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\orchestrator_ace\plan.md — Step-by-step execution plan
- C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\orchestrator_ace\progress.md — Liveness heartbeat & iteration tracking
