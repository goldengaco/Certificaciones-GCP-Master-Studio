# Original User Request

## 2026-08-29T21:40:19Z

Rewrite the 300-question ACE (Associate Cloud Engineer) certification exam bank in `plataforma_entrenamiento_master/data/cert_ace.js` to eliminate all psychometric bias. Today the bank is fatally flawed: someone who knows nothing about Google Cloud passes 85.7% of mock exams by always picking the longest option. The test suite (`node tests/qa/test_fidelidad_banco.js`) shows 6 FALLA results for ACE. The work is done when ACE shows 0 FALLA.

Working directory: C:\DevWork\Certificaciones-GCP-Master-Studio
Integrity mode: development

**CRITICAL CONTEXT — READ BEFORE ANYTHING ELSE:**
1. Read `AGENTS.md` in the project root
2. Read `.agents/rules/00-contrato-banco.md` — the hard rules
3. Read `para-gemini/INSTRUCCIONES.md` sections 2 and 3 completely — the detection and correction methodology
4. Read `para-gemini/TAXONOMIA_Y_DIAGNOSTICO.md` — official taxonomy and weights
5. Ignore everything in `plataforma_entrenamiento_master/docs/_historico/` — obsolete, contains false numbers

**SYSTEM: Windows 11 Pro + PowerShell 7.6 (pwsh)**. Never use bash, `&&`, `sudo`, `grep` (use `Select-String` or `rg`), `chmod`, or Unix paths. Use `\` path separators and sequential commands.

## Requirements

### R1. Eliminate length bias from all 300 ACE questions

Today the correct answer is the longest option in 85% of questions, and a blind "pick the longest" strategy scores 85.7%. After rewriting:
- The correct answer must be the longest option in ≤35% of questions (barrier: `MAX_CORRECTA_ES_LA_MAS_LARGA = 0.35`)
- The average character excess of the correct answer over the mean of incorrect answers must be ≤25 characters (barrier: `MAX_EXCESO_CARACTERES_MEDIA = 25`)
- A candidate who always picks the longest option must score ≤45% (barrier: `MAX_PUNTAJE_HEURISTICA_LONGITUD = 0.45`)
- 0 out of 6 exam blocks (50 questions each) must be passable (≥70%) with this strategy

**Method — this is the ONLY valid approach:**
- **PRUNE the correct answer**: Move explanatory detail, parenthetical clarifications, performance metrics, and "because..." reasoning into `explanation`. The option text keeps only the action and its key parameter.
- **ELEVATE the incorrect options**: Each distractor becomes a real GCP service/configuration that *almost* solves the problem. Each must name a real GCP service. Each must fail for a specific, nameable reason (cost, latency, RPO/RTO, permissions, regional scope, quota, SLA).
- **NEVER pad incorrect options with filler** to match length. The test has a trap detector: if the "correct = longest" metric drops but the H1 heuristic score doesn't drop proportionally, the batch is rejected.

Within each question, the difference between the longest and shortest option must be ≤25% of the longest.

### R2. Add multi-select questions (12–20% of the bank)

Today: 0% multi-select. Required: 36–60 questions with `isMultiSelect: true`.
- Each multi-select question must have **5 options** (A through E)
- `expectedSelectCount`: 2 (or 3 where genuinely appropriate)
- `correct`: array with exactly `expectedSelectCount` letters
- The scenario must explicitly say "Choose 2" or "Choose 3"
- Do NOT fabricate multi-select by splitting one correct answer into two halves
- Multi-select questions are genuine scenarios where two independent actions are both needed

### R3. Assign correct-answer letters using deterministic FNV-1a hash

Today the key follows a predictable A→B→C→D cycle (24.1% — already fixed but letters need redistribution). Use this function to determine which letter should be correct for each question:

```javascript
function letraCorrecta(id, numOpciones) {
  let h = 2166136261; // FNV-1a 32-bit
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % numOpciones; // 0=A, 1=B, 2=C, 3=D, (4=E for multi-select)
}
```

After assignment, verify: each letter appears between 20% and 30%. Do NOT force exactly 25%/25%/25%/25% — that's also a detectable pattern.

The correct answer's content must be placed at the position indicated by the hash. The other options fill the remaining positions. This means reordering options, not just relabeling.

### R4. Ensure every scenario contains a discriminating constraint

Each scenario must include a quantified restriction (latency ≤X ms, RPO=0, budget cap, compliance requirement, zero downtime, minimum operational effort) that unambiguously eliminates 3 of the 4 options. Without a constraint, multiple options are valid and the question measures nothing.

ACE scenario length: 40–90 words (tactical, may include `gcloud` commands, flags, console steps, Terraform).

### R5. Maintain technical accuracy and factual correctness

- Every `explanation` assertion must be backed by `officialDocUrl` pointing to a page that actually says what the explanation claims
- Authorized documentation domains: `cloud.google.com`, `kubernetes.io`, `developer.hashicorp.com`, and others listed in the test's `DOMINIOS_DOC` regex
- Do NOT invent URLs or point to product landing pages
- Do NOT change the technical substance of a correct answer that is already accurate — only rewrite its wording
- Real errors to avoid: proposing Application Load Balancer for UDP traffic (only Passthrough NLB supports UDP), claiming `nam3` Spanner topology doesn't exist (it does)

### R6. Preserve all structural fields and constraints

- Keep exactly 300 questions (verify with: `Select-String -Pattern '"certId"' plataforma_entrenamiento_master\data\cert_ace.js | Measure-Object | Select-Object -ExpandProperty Count`)
- Do NOT modify `tests/qa/test_fidelidad_banco.js` or any test file
- Do NOT touch `data/cert_cdl.js` or `data/cert_pca.js`
- Maintain the existing `blockId` assignments (BLOCK-1 through BLOCK-6, 50 each)
- Maintain the existing `domainId` distribution (ACE-D1 through ACE-D5 with official weights)
- The file format is a self-executing JS module wrapping an array — preserve that exact format

### R7. Work in batches of 25 questions

Process questions in sequential batches of 25. After each batch:
1. Run `node tests/qa/test_fidelidad_banco.js` and verify ACE metrics are improving
2. Verify question count is still exactly 300
3. Commit the batch

The batches in order:
- ACE-D1-001..ACE-D1-025
- ACE-D1-026..ACE-D1-050
- ACE-D1-051..ACE-D1-060 + ACE-D2-001..ACE-D2-015
- ACE-D2-016..ACE-D2-040
- ACE-D2-041..ACE-D2-055 + ACE-D3-001..ACE-D3-010
- ACE-D3-011..ACE-D3-035
- ACE-D3-036..ACE-D3-060
- ACE-D3-061..ACE-D3-075 + ACE-D4-001..ACE-D4-010
- ACE-D4-011..ACE-D4-035
- ACE-D4-036..ACE-D4-060
- ACE-D5-001..ACE-D5-025
- ACE-D5-026..ACE-D5-050

## Acceptance Criteria

### Psychometric Fidelity (automated — the ONLY gate that matters)
- [ ] `node tests/qa/test_fidelidad_banco.js` shows 0 FALLA for the ACE section
- [ ] Correct answer is longest in ≤35% of questions
- [ ] Average character excess ≤25
- [ ] "Pick longest" heuristic scores ≤45%
- [ ] 0 of 6 blocks passable by picking longest
- [ ] A→B→C→D cycle ≤40%
- [ ] Periodicity-4 ≤40%
- [ ] Multi-select proportion ≥12%
- [ ] 0 multi-select with inconsistent correct/expectedSelectCount
- [ ] 0 questions asking for 2+ things but marked as single-select
- [ ] Filler distractors ≤2%
- [ ] All officialDocUrl domains are authorized
- [ ] 0 duplicate IDs
- [ ] 0 keys pointing to nonexistent options

### Structural Integrity
- [ ] Exactly 300 questions in cert_ace.js (verified by count of `"certId"`)
- [ ] Domain weight deviation ≤3 percentage points from official weights
- [ ] No areas with 0 questions
- [ ] cert_cdl.js and cert_pca.js are untouched
- [ ] tests/qa/ directory is untouched

### Final Deliverable — four literal blocks, no prose around them
1. Complete output of: `node tests/qa/test_fidelidad_banco.js`
2. Output of: `git log --oneline -15`
3. Output of: `Select-String -Pattern '"certId"' plataforma_entrenamiento_master\data\cert_ace.js | Measure-Object | Select-Object -ExpandProperty Count`
4. Three random ACE questions pasted in full, with character length of each option and the URL backing the correct answer
