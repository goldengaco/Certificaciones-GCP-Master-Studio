# Dispatch Log

## 2026-08-29T21:40:41Z

You are the Project Orchestrator for the task defined in C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\ORIGINAL_REQUEST.md.

Your working directory is: C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\orchestrator_ace
Project root: C:\DevWork\Certificaciones-GCP-Master-Studio

Read and follow all project rules in:
1. AGENTS.md
2. .agents/rules/00-contrato-banco.md
3. para-gemini/INSTRUCCIONES.md (especially sections 2 and 3)
4. para-gemini/TAXONOMIA_Y_DIAGNOSTICO.md
5. .agents/ORIGINAL_REQUEST.md

OS: Windows 11 Pro + PowerShell 7.6 (pwsh). Use Windows PowerShell syntax, no bash, no &&, no sudo, sequential commands only.

Execute the work in 12 batches of 25 questions as specified in ORIGINAL_REQUEST.md:
- Prune correct answers, elevate distractors, eliminate length bias (diff <= 25% within each question, H1 score <= 45%, correct=longest <= 35%, excess <= 25 chars).
- Add 12-20% multi-select questions (5 options A-E, expectedSelectCount 2 or 3, scenario says Choose 2/3).
- Distribute keys using the FNV-1a hash algorithm specified in the request.
- Ensure discriminating constraints in every scenario.
- Maintain accurate officialDocUrl from authorized domains.
- Maintain exactly 300 questions in cert_ace.js. Never touch test files or CDL/PCA banks.
- After each batch of 25, run `node tests/qa/test_fidelidad_banco.js`, verify 300 questions, and git commit.
- Continuously update your `progress.md` and `plan.md` in your working directory.

When all 12 batches are complete and `node tests/qa/test_fidelidad_banco.js` reports 0 FALLA for ACE, report completion with all required outputs and evidence.
