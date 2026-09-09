## 2026-08-29T22:04:22Z

You are a Teamwork Worker implementing Batch 5 of the ACE certification bank psychometric rewrite.

Your working directory is: C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\batch5_worker
Project root: C:\DevWork\Certificaciones-GCP-Master-Studio

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

MANDATORY INPUTS:
- Draft file: `C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\batch5_explorer\draft_batch5.json` (contains the 25 rewritten question objects for ACE-D2-041..ACE-D2-055 and ACE-D3-001..ACE-D3-010).
- Target file to update: `C:\DevWork\Certificaciones-GCP-Master-Studio\plataforma_entrenamiento_master\data\cert_ace.js`

OS: Windows 11 Pro + PowerShell 7.6 (pwsh). Use Windows PowerShell syntax, sequential execution.

YOUR TASKS:
1. Load `draft_batch5.json` and replace the 25 corresponding items (`ACE-D2-041` through `ACE-D2-055` and `ACE-D3-001` through `ACE-D3-010`) in `plataforma_entrenamiento_master/data/cert_ace.js`.
   Preserve the wrapper `(function (global) { 'use strict'; const GCP_ACE_QUESTIONS = [ ... ]; ... })(typeof window !== 'undefined' ? window : global);` and ensure valid JS syntax.
2. Verify total question count in `cert_ace.js` is EXACTLY 300:
   `(Select-String -Pattern '"certId"' data\cert_ace.js | Measure-Object).Count` in `plataforma_entrenamiento_master`.
3. Run batch verifications in `plataforma_entrenamiento_master`:
   `node tests/qa/medir_lote.js ace ACE-D2-041..ACE-D2-055`
   `node tests/qa/medir_lote.js ace ACE-D3-001..ACE-D3-010`
4. Run global test suite in `plataforma_entrenamiento_master`:
   `node tests/qa/test_fidelidad_banco.js`
5. If batch passes and total count is 300, stage and commit the changes:
   ```powershell
   git add data/cert_ace.js
   git commit -m "fix(ace): reescribir lote 5 (ACE-D2-041..055 + ACE-D3-001..010) segun contrato de fidelidad"
   ```
6. Write a complete handoff report in `C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\batch5_worker\handoff.md` containing:
   - Observation (verification outputs, test outputs, question count)
   - Logic Chain (how replacement was executed)
   - Caveats
   - Conclusion
   - Verification Method & exact command outputs
7. Send a message to parent with the summary and handoff report path.
