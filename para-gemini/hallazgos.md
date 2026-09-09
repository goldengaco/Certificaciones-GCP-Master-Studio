# Diagnóstico Técnico de Fallos — Línea Base del Banco de Preguntas

**Fecha:** 2026-08-26  
**Comando Ejecutado:** `node tests/qa/test_fidelidad_banco.js`  
**Resultado:** **27 FALLOS, 3 AVISOS** (Código de salida: 1)  

---

## 1. Desglose Exhaustivo de los 27 Fallos por Componente

### CDL — Cloud Digital Leader (11 Fallos)

| # | Fallo Reportado por el Test | Archivo | Líneas / Contexto | Causa Raíz en el Código |
|---|---|---|---|---|
| 1 | `la correcta es la opción más larga en 72.0% (máximo 35.0%)` | `data/cert_cdl.js` | L1–17700 (216 de 300 preguntas) | Sesgo de longitud: la opción correcta `isTrap: false` fue redactada con explicaciones detalladas mientras que los distractores se escribieron como frases breves. |
| 2 | `la correcta tiene de media 69.1 caracteres más que las incorrectas (máximo 25)` | `data/cert_cdl.js` | L1–17700 | Desbalance estructural entre respuesta correcta y distractores. |
| 3 | `quien solo marca la opción MÁS LARGA saca 72.7% (máximo 45.0%)` | `data/cert_cdl.js` | L1–17700 | Heurística ciega de longitud supera el puntaje de aprobación (70%). |
| 4 | `5 de 6 bloques se aprueban (≥70%) marcando solo la opción más larga` | `data/cert_cdl.js` | L1–17700 (`BLOCK-1` a `BLOCK-5`) | La distribución del sesgo de longitud está concentrada en casi todos los bloques del banco. |
| 5 | `97.7% de pares consecutivos siguen el ciclo A→B→C→D (máximo 40.0%)` | `data/cert_cdl.js` | L1–17700 | La clave `correct` fue asignada mediante una secuencia cíclica artificial `index % 4`. |
| 6 | `91.9% de periodicidad 4 en la clave` | `data/cert_cdl.js` | L1–17700 | El patrón de clave periódica permite predecir la respuesta sin leer la pregunta. |
| 7 | `0.0% de preguntas de selección múltiple (mínimo 12.0%)` | `data/cert_cdl.js` | L1–17700 (300/300 ítems) | Todas las preguntas tienen `"isMultiSelect": false`. |
| 8 | `1 preguntas piden 2 o 3 cosas pero están marcadas como respuesta única` | `data/cert_cdl.js` | L2403 (`CDL-D4-008`) | El enunciado menciona autenticación de "dos pasos", pero `isMultiSelect` es `false`. |
| 9 | `39 distractores con frases de relleno (4.3%, máximo 2.0%)` | `data/cert_cdl.js` | L1–17700 (ej. L316 `CDL-D2-008`, L420 `CDL-D3-009`, L512 `CDL-D4-004`, L128 `CDL-D1-009`) | Distractores absurdos generados por plantilla ("a mano", "hoja de cálculo", "prometer"). |
| 10 | `áreas oficiales SIN NINGUNA pregunta: CDL-D5, CDL-D6` | `data/cert_cdl.js`, `data/cert_manifest.js` | L51–121 en `cert_manifest.js` | El banco solo cubre 4 dominios antiguos (D1–D4), omitiendo CDL-D5 (Trust & Security) y CDL-D6 (Operations). |
| 11 | `mayor desvío de peso de dominio: 18.0 puntos — CDL-D5 (Google 18%, banco 0.0%)` | `data/cert_cdl.js`, `data/cert_manifest.js` | L51–121 en `cert_manifest.js` | Desalineación de pesos oficiales (Google exige 18% para CDL-D5 y 10% para CDL-D6). |

---

### ACE — Associate Cloud Engineer (7 Fallos)

| # | Fallo Reportado por el Test | Archivo | Líneas / Contexto | Causa Raíz en el Código |
|---|---|---|---|---|
| 12 | `la correcta es la opción más larga en 85.0% (máximo 35.0%)` | `data/cert_ace.js` | L1–18428 (255 de 300 preguntas) | Sesgo de longitud sistemático en la respuesta correcta. |
| 13 | `la correcta tiene de media 66.7 caracteres más que las incorrectas (máximo 25)` | `data/cert_ace.js` | L1–18428 | Exceso de longitud promedio de la opción correcta frente a distractores. |
| 14 | `quien solo marca la opción MÁS LARGA saca 86.0% (máximo 45.0%)` | `data/cert_ace.js` | L1–18428 | Un candidato aprueba holgadamente sin conocimientos de GCP. |
| 15 | `6 de 6 bloques se aprueban (≥70%) marcando solo la opción más larga` | `data/cert_ace.js` | L1–18428 (`BLOCK-1` a `BLOCK-6`) | 100% de los bloques rotativos son vulnerables a la heurística ciega. |
| 16 | `92.3% de pares consecutivos siguen el ciclo A→B→C→D (máximo 40.0%)` | `data/cert_ace.js` | L1–18428 | Patrón determinista modular en la asignación de claves A, B, C, D. |
| 17 | `70.3% de periodicidad 4 en la clave` | `data/cert_ace.js` | L1–18428 | Autocorrelación de desfase 4 en la clave de respuestas. |
| 18 | `0.0% de preguntas de selección múltiple (mínimo 12.0%)` | `data/cert_ace.js` | L1–18428 (300/300 ítems) | Falta total de preguntas multi-select ("Select TWO / THREE"). |

---

### PCA — Professional Cloud Architect (8 Fallos)

| # | Fallo Reportado por el Test | Archivo | Líneas / Contexto | Causa Raíz en el Código |
|---|---|---|---|---|
| 19 | `la correcta es la opción más larga en 99.3% (máximo 35.0%)` | `data/cert_pca.js` | L1–19613 (298 de 300 preguntas) | Sesgo extremo de longitud: 298 de 300 preguntas tienen la correcta como la más larga. |
| 20 | `la correcta tiene de media 173.7 caracteres más que las incorrectas (máximo 25)` | `data/cert_pca.js` | L1–19613 | La correcta contiene explicaciones arquitectónicas masivas vs distractores telegráficos. |
| 21 | `quien solo marca la opción MÁS LARGA saca 99.3% (máximo 45.0%)` | `data/cert_pca.js` | L1–19613 | Acierto casi perfecto (298/300) mediante heurística ciega. |
| 22 | `6 de 6 bloques se aprueban (≥70%) marcando solo la opción más larga` | `data/cert_pca.js` | L1–19613 (`BLOCK-1` a `BLOCK-6`) | Los 6 bloques se aprueban con casi 100% de nota a ciegas. |
| 23 | `97.7% de pares consecutivos siguen el ciclo A→B→C→D (máximo 40.0%)` | `data/cert_pca.js` | L1–19613 | Clave generada con ciclo A→B→C→D estricto. |
| 24 | `91.9% de periodicidad 4 en la clave` | `data/cert_pca.js` | L1–19613 | Patrón determinista repetitivo en las opciones. |
| 25 | `0.0% de preguntas de selección múltiple (mínimo 12.0%)` | `data/cert_pca.js` | L1–19613 (300/300 ítems) | 0 reactivos de selección múltiple. |
| 26 | `2 preguntas piden 2 o 3 cosas pero están marcadas como respuesta única` | `data/cert_pca.js` | L2160 (`PCA-D4-004`) y L14690 (`PCA-D3-046`) | Enunciados que piden múltiples medidas/acciones marcados como `isMultiSelect: false`. |

---

### Case Studies de PCA (1 Fallo)

| # | Fallo Reportado por el Test | Archivo | Líneas / Contexto | Causa Raíz en el Código |
|---|---|---|---|---|
| 27 | `90 preguntas usan case studies retirados (mountkirk: 31, terramearth: 30, hrl: 29)` | `data/case_studies.js`, `data/cert_pca.js` | L1–567 en `case_studies.js`, L1–19613 en `cert_pca.js` | Uso de casos de estudio retirados por Google. Los 4 oficiales vigentes son: `altostrat_media`, `cymbal_retail`, `ehr_healthcare`, `knightmotives_automotive`. |

---

## 2. Avisos Adicionales (3 Avisos)
- **CDL:** 63.8% de distractores no nombran ningún servicio de GCP (`data/cert_cdl.js`).
- **ACE:** 59.6% de distractores no nombran ningún servicio de GCP (`data/cert_ace.js`).
- **PCA:** 67.2% de distractores no nombran ningún servicio de GCP (`data/cert_pca.js`).
