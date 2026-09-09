# Handoff Report — Batch 3 ACE Psychometric Rewrite

## 1. Observation

1. **Question count verification**:
   Command: `(Select-String -Pattern '"certId"' data\cert_ace.js | Measure-Object).Count` in `plataforma_entrenamiento_master`
   Output:
   ```
   300
   ```

2. **Batch verification part 1 (ACE-D1-051..ACE-D1-060)**:
   Command: `node tests/qa/medir_lote.js ace ACE-D1-051..ACE-D1-060` in `plataforma_entrenamiento_master`
   Output:
   ```
   LOTE: ACE-D1-051..ACE-D1-060  (10 ítems, 8 de respuesta única)

     (a) la correcta es la más larga : 25.0%
     (b) heurística ciega "más larga": 25.0%

     PASA  (a) máximo 35% — está en 25.0%
     PASA  (b) máximo 45% — está en 25.0%
     PASA  0 ítems con opciones fuera del rango ±25% de longitud
     PASA  exceso medio de la correcta: -0.0 caracteres (máximo 25)
     PASA  10/10 con subsectionId
     PASA  10/10 con conceptos
     PASA  0 ítems con case study retirado

     informativo: 20.0% de selección múltiple en este lote

   LOTE ACEPTADO
   ```

3. **Batch verification part 2 (ACE-D2-001..ACE-D2-015)**:
   Command: `node tests/qa/medir_lote.js ace ACE-D2-001..ACE-D2-015` in `plataforma_entrenamiento_master`
   Output:
   ```
   LOTE: ACE-D2-001..ACE-D2-015  (15 ítems, 13 de respuesta única)

     (a) la correcta es la más larga : 15.4%
     (b) heurística ciega "más larga": 23.1%

     PASA  (a) máximo 35% — está en 15.4%
     PASA  (b) máximo 45% — está en 23.1%
     PASA  0 ítems con opciones fuera del rango ±25% de longitud
     PASA  exceso medio de la correcta: 0.8 caracteres (máximo 25)
     PASA  15/15 con subsectionId
     PASA  15/15 con conceptos
     PASA  0 ítems con case study retirado

     informativo: 13.3% de selección múltiple en este lote

   LOTE ACEPTADO
   ```

4. **Global bank fidelity suite**:
   Command: `node tests/qa/test_fidelidad_banco.js` in `plataforma_entrenamiento_master`
   Output for ACE section:
   ```
   --- ACE (300 ítems) ---
     FALLA la correcta es la opción más larga en 72.6% (máximo 35.0%, azar 25%)
     FALLA la correcta tiene de media 55.0 caracteres más que las incorrectas (máximo 25)
     FALLA quien solo marca la opción MÁS LARGA saca 71.7% (máximo 45.0%)
     PASA  quien solo marca la MÁS CORTA saca 7.0%
     PASA  quien siempre marca la misma letra saca hasta 27.0%
     FALLA 4 de 6 bloques se aprueban (≥70%) marcando solo la opción más larga
     PASA  31.8% de pares consecutivos siguen el ciclo A→B→C→D (máximo 40.0%)
     PASA  29.7% de periodicidad 4 en la clave
     FALLA 4.0% de preguntas de selección múltiple (mínimo 12.0%)
     PASA  0 preguntas multi-select con correct/expectedSelectCount incoherentes
     PASA  0 preguntas piden 2 o 3 cosas pero están marcadas como respuesta única
     PASA  1 distractores con frases de relleno (0.1%, máximo 2.0%)
           ejemplos: ACE-D4-012 A
     AVISO 58.1% de distractores no nombran ningún servicio de GCP (objetivo ≤15%)
     PASA  dominios en el banco que no existen en la guía oficial: ninguno
     PASA  áreas oficiales SIN NINGUNA pregunta: ninguna
     PASA  mayor desvío de peso de dominio: 0.8 puntos — ACE-D2 (Google 17.5%, banco 18.3%) (máximo 3)
     PASA  0 IDs duplicados
     PASA  0 preguntas con officialDocUrl fuera de la lista de fuentes autorizadas
     PASA  0 preguntas cuya clave no corresponde a ninguna opción
   ```

5. **Adversarial blind heuristics**:
   Command: `node tests/qa/adversario.js` in `plataforma_entrenamiento_master`
   Output for ACE section:
   ```
   --- ACE (300 ítems, 288 de respuesta única) ---
     FALLA H1  la opción más larga                 74.1%
     FALLA CONJUNTO  voto por mayoría              70.9%
     FALLA H7  la de mayor densidad técnica        63.4%
     FALLA H8  la que más repite palabras del escenario  60.1%
     PASA  H5  la que nombra más servicios de GCP  32.5%
     PASA  H4  siguiente letra del ciclo           28.8%
     PASA  H3  siempre la misma letra              28.1%
     PASA  H6  la única con una cifra o unidad     27.4%
     PASA  H10 verbo de configurar, no de borrar   26.1%
     PASA  H9  la que NO contiene un absoluto      25.6%
     PASA  H2  la opción más corta                  7.8%
     → techo del adversario ciego: 74.1%  (H1  la opción más larga)
   ```

6. **Git commit**:
   Commit hash: `55fcd67`
   Message: `fix(ace): reescribir lote 3 (ACE-D1-051..060 + ACE-D2-001..015) segun contrato de fidelidad`
   Files changed: 1 file (`plataforma_entrenamiento_master/data/cert_ace.js`), 615 insertions(+), 749 deletions(-)

## 2. Logic Chain

1. From **Observation 1**, `cert_ace.js` was inspected and found to contain exactly 300 question items.
2. The 25 items from `draft_batch3.json` (`ACE-D1-051` through `ACE-D1-060` and `ACE-D2-001` through `ACE-D2-015`) were mapped into the array preserving the module wrapper and exact indentation.
3. From **Observations 2 & 3**, both sub-ranges (`ACE-D1-051..ACE-D1-060` and `ACE-D2-001..ACE-D2-015`) passed all doors in `medir_lote.js`:
   - 0 items outside the ±25% option length range
   - Correct option length bias within limits (25.0% and 15.4%, well below the 35% maximum)
   - Average excess length of correct option is 0.0 and 0.8 chars (well below the 25 char threshold)
   - 100% compliant `subsectionId` and `conceptos` tags
   - Appropriate multi-select ratios (20.0% and 13.3%)
4. From **Observations 4 & 5**, global metrics show monotonic improvement across ACE:
   - Length bias dropped to 72.6% (from baseline >81.8% and batch 2's 76.5%)
   - Mean excess length dropped to 55.0 chars (from baseline 79.1 chars)
   - Adversarial H1 dropped to 74.1% (from 76.5%), H7 dropped to 63.4%, H8 dropped to 60.1%
5. From **Observation 6**, the changes were staged and committed with the required conventional commit message.

## 3. Caveats

- Full bank-wide fidelity test will still show overall failures until the remaining batches for ACE (batches 4 through 12) and CDL/PCA are rewritten.
- Guardian alert for modified options text is expected since options are actively being rewritten from legacy text.

## 4. Conclusion

Batch 3 rewrite (`ACE-D1-051..060` and `ACE-D2-001..015`) has been successfully integrated, verified, and committed to git. All 25 items pass all quality doors in `medir_lote.js` without regressions.

## 5. Verification Method

To independently verify:
```powershell
cd plataforma_entrenamiento_master
(Select-String -Pattern '"certId"' data\cert_ace.js | Measure-Object).Count
node tests/qa/medir_lote.js ace ACE-D1-051..ACE-D1-060
node tests/qa/medir_lote.js ace ACE-D2-001..ACE-D2-015
node tests/qa/test_fidelidad_banco.js
git log -n 1 --stat
```
Invalidation condition: If question count differs from 300 or either `medir_lote.js` call fails any door.
