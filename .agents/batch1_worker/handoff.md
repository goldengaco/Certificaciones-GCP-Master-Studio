# Handoff Report: Batch 1 Worker (ACE-D1-001..ACE-D1-025)

## 1. Observation
- Target file updated: `C:\DevWork\Certificaciones-GCP-Master-Studio\plataforma_entrenamiento_master\data\cert_ace.js`
- Source draft used: `C:\DevWork\Certificaciones-GCP-Master-Studio\.agents\batch1_explorer\draft_batch1.json`
- Commit created: `11beaf1762cf9a02d2aed013a02f1c4a2dcf837a` ("fix(ace): reescribir lote 1 (ACE-D1-001..ACE-D1-025) segun contrato de fidelidad")

### Verbatim Tool Outputs

#### Question Count Verification
Command:
```powershell
(Select-String -Pattern '"certId"' data/cert_ace.js | Measure-Object).Count
```
Output:
```
300
```

#### Batch Quality Verification (`medir_lote.js`)
Command:
```powershell
node tests/qa/medir_lote.js ace ACE-D1-001..ACE-D1-025
```
Output:
```
LOTE: ACE-D1-001..ACE-D1-025  (25 ítems, 21 de respuesta única)

  (a) la correcta es la más larga : 28.6%
  (b) heurística ciega "más larga": 38.1%

  PASA  (a) máximo 35% — está en 28.6%
  PASA  (b) máximo 45% — está en 38.1%
  PASA  0 ítems con opciones fuera del rango ±25% de longitud
  PASA  exceso medio de la correcta: 1.7 caracteres (máximo 25)
  PASA  25/25 con subsectionId
  PASA  25/25 con conceptos
  PASA  0 ítems con case study retirado

  informativo: 16.0% de selección múltiple en este lote

LOTE ACEPTADO
```

#### Global Test Suite (`test_fidelidad_banco.js`)
Command:
```powershell
node tests/qa/test_fidelidad_banco.js
```
Output (ACE section excerpt):
```
--- ACE (300 ítems) ---
  FALLA la correcta es la opción más larga en 81.1% (máximo 35.0%, azar 25%)
  FALLA la correcta tiene de media 63.6 caracteres más que las incorrectas (máximo 25)
  FALLA quien solo marca la opción MÁS LARGA saca 81.3% (máximo 45.0%)
  PASA  quien solo marca la MÁS CORTA saca 4.7%
  PASA  quien siempre marca la misma letra saca hasta 28.7%
  FALLA 6 de 6 bloques se aprueban (≥70%) marcando solo la opción más larga
  PASA  27.1% de pares consecutivos siguen el ciclo A→B→C→D (máximo 40.0%)
  PASA  27.4% de periodicidad 4 en la clave
  FALLA 1.3% de preguntas de selección múltiple (mínimo 12.0%)
  PASA  0 preguntas multi-select con correct/expectedSelectCount incoherentes
  PASA  0 preguntas piden 2 o 3 cosas pero están marcadas como respuesta única
  PASA  1 distractores con frases de relleno (0.1%, máximo 2.0%)
        ejemplos: ACE-D4-012 A
  AVISO 59.8% de distractores no nombran ningún servicio de GCP (objetivo ≤15%)
  PASA  dominios en el banco que no existen en la guía oficial: ninguno
  PASA  áreas oficiales SIN NINGUNA pregunta: ninguna
  PASA  mayor desvío de peso de dominio: 0.8 puntos — ACE-D2 (Google 17.5%, banco 18.3%) (máximo 3)
  PASA  0 IDs duplicados
  PASA  0 preguntas con officialDocUrl fuera de la lista de fuentes autorizadas
  PASA  0 preguntas cuya clave no corresponde a ninguna opción
```

## 2. Logic Chain
1. `draft_batch1.json` contained 25 rewritten question objects with valid schema (`sectionId`, `subsectionId`, `conceptos`, pruned option lengths, valid multi-select properties).
2. The 25 items were merged into `data/cert_ace.js` replacing the previous `ACE-D1-001` through `ACE-D1-025` entries while preserving the surrounding module wrapper.
3. The total question count was verified to remain exactly 300 via regex match count on `"certId"`.
4. `node tests/qa/medir_lote.js ace ACE-D1-001..ACE-D1-025` was executed, confirming 0 items out of +-25% range, correct-option excess reduced to 1.7 chars, 16.0% multi-select, and all 7 gates passed with `LOTE ACEPTADO`.
5. `git add data/cert_ace.js` and `git commit` were executed after resolving the stale lock.

## 3. Caveats
- Only Batch 1 (questions 1..25 out of 300) in ACE has been rewritten. Subsequent batches (Batch 2: ACE-D1-026..ACE-D1-050, etc.) will be required to bring the entire ACE bank to 0 global test failures.
- No caveats regarding Batch 1 implementation.

## 4. Conclusion
Batch 1 (ACE-D1-001 through ACE-D1-025) has been successfully applied, verified against all quality gates (`LOTE ACEPTADO`), confirmed with 300 total questions in the bank, and committed to git.

## 5. Verification Method
To independently verify:
```powershell
cd C:\DevWork\Certificaciones-GCP-Master-Studio\plataforma_entrenamiento_master
(Select-String -Pattern '"certId"' data/cert_ace.js | Measure-Object).Count
node tests/qa/medir_lote.js ace ACE-D1-001..ACE-D1-025
node tests/qa/test_fidelidad_banco.js
git log -n 1
```
Invalidation conditions: Any failure in `medir_lote.js`, total question count != 300, or invalid JavaScript syntax in `cert_ace.js`.
