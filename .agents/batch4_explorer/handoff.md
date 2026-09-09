# Handoff Report — Batch 4 Exploration (ACE-D2-016 through ACE-D2-040)

## 1. Observation

### 1.1 Baseline Measurement
Running `node tests/qa/medir_lote.js ace ACE-D2-016..ACE-D2-040` on the baseline repository revealed **6 failing gates**:
```
LOTE: ACE-D2-016..ACE-D2-040  (25 ítems, 25 de respuesta única)

  (a) la correcta es la más larga : 68.0%
  (b) heurística ciega "más larga": 72.0%

  FALLA (a) máximo 35% — está en 68.0%
  FALLA (b) máximo 45% — está en 72.0%
  FALLA 23 ítems con opciones fuera del rango ±25% de longitud
  FALLA exceso medio de la correcta: 43.1 caracteres (máximo 25)
  FALLA 0/25 con subsectionId
  FALLA 0/25 con conceptos
  PASA  0 ítems con case study retirado

  informativo: 0.0% de selección múltiple en este lote

LOTE RECHAZADO — 6 puerta(s) sin superar
```

### 1.2 Identified Psychometric Flaws
1. **Length Bias**: 18 of 25 baseline items had the correct option as the single longest option. Length deltas between options reached up to 74.2% (e.g., ACE-D2-034 had option B with 209 chars vs option D with 54 chars).
2. **Absurd / Low-Discrimination Distractors**: Distractors included generic filler such as "write cron scripts", "mount CSV files", "open SSH tunnels", or "encrypt subnet using Cloud VPN".
3. **Absence of Multi-Select**: 0 of 25 questions were multi-select.
4. **Missing Taxonomy Metadata**: 0 of 25 questions had `subsectionId`, `subsectionName`, or `conceptos`.

---

## 2. Logic Chain

### 2.1 Pruning and Length Equalization (R1)
- Each correct answer was pruned to retain only the essential technical action and parameters; explanatory rationale was relocated to `explanation`.
- Each distractor was elevated to represent a realistic, plausible GCP architectural decision failing only due to explicit constraints in the scenario (e.g. latency, cost, unsupported protocol, operational overhead, missing SLA).
- Options across all 25 items were balanced so that `(maxLen - minLen) / maxLen <= 0.09` (all under 9.2% delta, well within the 25% hard limit).

### 2.2 Introduction of Multi-Select Items (R2)
Exactly 4 items (16.0%) were converted to genuine multi-select questions with 5 options (A–E), `expectedSelectCount: 2`, array keys, and explicit "Choose 2." prompts:
1. `ACE-D2-021`: HA Cloud VPN with 99.99% SLA (dual tunnels on interfaces 0 & 1 + Cloud Router BGP dynamic routing) -> `["B", "E"]`
2. `ACE-D2-028`: Shielded VM Security (Secure Boot + vTPM with Integrity Monitoring) -> `["A", "D"]`
3. `ACE-D2-030`: Cloud Armor Defense (WAF policy creation with rate limits + attachment to backend service) -> `["B", "E"]`
4. `ACE-D2-038`: Regional MIG High Availability & Autohealing (Regional MIG across 3 zones + application health check autohealing policy) -> `["A", "D"]`

### 2.3 Deterministic Key Distribution via FNV-1a (R3)
Single-select items (21 questions) had correct answers mapped strictly to `letraCorrecta(id, 4)`:
- `A`: 7 items (33.3%) — ACE-D2-017, 022, 026, 031, 035, 039, 040
- `B`: 5 items (23.8%) — ACE-D2-018, 025, 029, 032, 036
- `C`: 5 items (23.8%) — ACE-D2-019, 020, 024, 033, 037
- `D`: 4 items (19.0%) — ACE-D2-016, 023, 027, 034

### 2.4 Taxonomy & Concept Attribution (R6)
All 25 items were mapped to Domain `ACE-2` ("Planning and configuring a cloud solution"):
- `ACE-2.1` ("Planning and configuring compute resources"): 9 items (ACE-D2-016, 024, 027, 028, 029, 033, 035, 037, 038)
- `ACE-2.2` ("Planning and configuring data storage options"): 10 items (ACE-D2-018, 022, 023, 025, 026, 031, 032, 034, 039, 040)
- `ACE-2.3` ("Planning and configuring network resources"): 6 items (ACE-D2-017, 019, 020, 021, 030, 036)

---

## 3. Caveats

- **Scope boundary**: This batch covers only ACE-D2-016 through ACE-D2-040. Batch 5 will complete the remaining questions of Domain 2 (ACE-D2-041..053) and begin Domain 3.
- **Worker Execution**: The worker agent must integrate `draft_batch4.json` into `plataforma_entrenamiento_master/data/cert_ace.js` while maintaining total question count at exactly 300.
- No other certification banks (CDL, PCA) were touched.

---

## 4. Conclusion

Batch 4 draft (`draft_batch4.json`) is 100% complete, fully verified, and ready for integration by the worker agent.

### Comparative Metrics Summary

| Metric | Baseline | Draft Batch 4 | Target / Barrier | Status |
|---|---|---|---|---|
| (a) Correct is longest | 68.0% | **9.5%** | <= 35.0% | **PASS** (-58.5 pts) |
| (b) Blind H1 heuristic | 72.0% | **28.6%** | <= 45.0% | **PASS** (-43.4 pts) |
| Proportional reduction (no filler) | FAIL | **PASS** | db >= da * 0.7 | **PASS** |
| Options out of length ratio (>25%) | 23 / 25 | **0 / 25** | 0 | **PASS** |
| Mean character excess of correct | +43.1 chars | **-0.0 chars** | <= 25.0 chars | **PASS** |
| Multi-select items | 0.0% (0) | **16.0% (4)** | 12% – 20% | **PASS** |
| Taxonomy & Subsections | 0 / 25 | **25 / 25** | 25 / 25 | **PASS** |
| Technical Concept Tags | 0 / 25 | **25 / 25** | 25 / 25 | **PASS** |
| FNV-1a Key Alignment | N/A | **100% (21/21)**| 100% | **PASS** |

---

## 5. Verification Method

To independently verify the Batch 4 draft:

```powershell
cd C:\DevWork\Certificaciones-GCP-Master-Studio
node .agents\batch4_explorer\test_draft.js
node .agents\batch4_explorer\eval_medir_lote.js
```

Both commands will exit with code 0 and confirm that all 25 items satisfy all validation rules and psychometric gates.
