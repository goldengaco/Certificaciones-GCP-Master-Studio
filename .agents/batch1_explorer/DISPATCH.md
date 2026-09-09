## 2026-08-29T21:41:18Z

You are a Teamwork Explorer investigating and drafting the complete psychometric rewrite for Batch 1 (ACE-D1-001 through ACE-D1-025) of the Associate Cloud Engineer (ACE) question bank.

Your working directory is: C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\batch1_explorer
Project root: C:\DevWork\Certificaciones-GCP-Master-Studio

MANDATORY INPUTS — READ THESE CAREFULLY:
1. C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\ORIGINAL_REQUEST.md
2. C:\DevWork\Certificaciones-GCP-Master-Studio\AGENTS.md
3. C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\rules\00-contrato-banco.md
4. C:\DevWork\Certificaciones-GCP-Master-Studio\para-gemini\INSTRUCCIONES.md (sections 2 and 3)
5. C:\DevWork\Certificaciones-GCP-Master-Studio\para-gemini\TAXONOMIA_Y_DIAGNOSTICO.md
6. C:\DevWork\Certificaciones-GCP-Master-Studio\plataforma_entrenamiento_master\data\taxonomia.js

OS: Windows 11 Pro + PowerShell 7.6 (pwsh). Use Windows PowerShell syntax, sequential execution.

YOUR OBJECTIVE:
Analyze the 25 questions (ACE-D1-001 through ACE-D1-025) in `plataforma_entrenamiento_master/data/cert_ace.js` and produce a complete, polished draft of these 25 items adhering 100% to the Contrato del Banco and psychometric requirements.

DETAILED REQUIREMENTS:
1. **Length Balancing (R1)**:
   - For every question, the difference between the longest and shortest option MUST be <= 25% of the longest option: `(maxLen - minLen) / maxLen <= 0.25`.
   - Prune the correct answer: keep only the core action and key parameter. Move all background/rationale to `explanation`.
   - Elevate distractors: each distractor MUST name a real GCP service/command/configuration that partially solves the problem but fails for a specific, nameable reason.
   - NEVER add filler/padding text to distractors.
2. **Multi-Select (R2)**:
   - Select exactly 4 questions in this batch of 25 (16%) to be multi-select (`isMultiSelect: true`).
   - Multi-select questions MUST have 5 options (A, B, C, D, E).
   - `expectedSelectCount`: 2 (or 3).
   - `correct`: array with exact count of letters (e.g. `["B", "D"]`).
   - The scenario text MUST end with an explicit instruction like "Choose 2." or "Choose 3."
   - Genuine multi-select (two distinct independent actions needed).
3. **Key Hashing (R3)**:
   - Calculate the correct option letter using FNV-1a 32-bit hash:
     ```javascript
     function letraCorrecta(id, numOpciones) {
       let h = 2166136261;
       for (let i = 0; i < id.length; i++) {
         h ^= id.charCodeAt(i);
         h = Math.imul(h, 16777619);
       }
       return (h >>> 0) % numOpciones; // 0=A, 1=B, 2=C, 3=D, 4=E
     }
     ```
   - For single-select, place the correct answer at the letter matching `['A','B','C','D'][letraCorrecta(id, 4)]`.
   - For multi-select with expectedSelectCount=2, ensure the correct letters are distributed properly across A-E.
4. **Discriminating Constraints (R4)**:
   - Ensure every scenario has a clear quantified restriction (latency, RPO, budget, compliance, least privilege, zero downtime, minimal ops effort) that eliminates the distractors.
   - Scenario length: 40-90 words.
5. **Technical Accuracy & Docs (R5)**:
   - Verified `officialDocUrl` pointing to authorized domains (`cloud.google.com`, `kubernetes.io`, `developer.hashicorp.com`, etc.).
   - `distractors` object explaining why each incorrect letter fails in this scenario.
6. **Schema (R6)**:
   - Include `sectionId: "ACE-1"`, `subsectionId: "ACE-1.1"` or `"ACE-1.2"`, `sectionName`, `subsectionName`, and `conceptos: [...]`.
   - Remove `isTrap`, `trapType`, and `distractors[correct]`.

DELIVERABLES:
1. Save the array of 25 rewritten question objects in `C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\batch1_explorer\draft_batch1.json`.
2. Write a detailed analysis and handoff report in `C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\batch1_explorer\handoff.md` detailing the metrics (length diffs, H1 heuristic, key distribution, multi-select count).
3. Send message back with the summary of findings and file path.
