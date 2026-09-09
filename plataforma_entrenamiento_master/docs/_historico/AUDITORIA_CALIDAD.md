# Auditoría de Calidad — Google Cloud Master Certification Studio

**Fecha:** 26 de agosto de 2026
**Alcance:** ¿La plataforma realmente prepara para los exámenes oficiales CDL, ACE y PCA de Google Cloud?
**Método:** Análisis estructural de los 900 ítems, verificación técnica contra documentación oficial de Google Cloud, revisión de fidelidad de case studies, y ejecución de la suite de pruebas.

---

## 1. Veredicto general

| Dimensión | Estado |
|---|---|
| Arquitectura y alineación de dominios con blueprint oficial | ✅ Excelente |
| Simulación del examen (tiempo, nº preguntas, puntaje de corte) | ✅ Buena |
| Esquema de datos e integridad estructural | ✅ Excelente |
| Motores algorítmicos (rotación, Leitner, probabilidad de aprobar) | ✅ Sólidos (38/38 tests) |
| Precisión técnica del contenido | ⚠️ Aceptable (~85-90%) con errores puntuales graves |
| Fidelidad a los case studies oficiales de PCA | ⚠️ Parcial (TerramEarth y EHR desviados) |
| Fidelidad al formato de pregunta real | ❌ Sin preguntas multi-selección en los 3 bancos |
| Calidad de distractores | ❌ 10-20% son absurdos y no reflejan el examen real |
| Sesgo de longitud en respuestas correctas | ❌ **Crítico**: la correcta es la más larga en 72-94% de las preguntas |
| Aleatoriedad de la clave | ❌ **Crítico**: 92-98% de los pares consecutivos siguen el ciclo A→B→C→D |

**Conclusión:** La plataforma es una base sólida y funcional que *sí* ayuda a prepararse, pero hoy contiene errores factuales en respuestas marcadas como correctas, un sesgo de longitud explotable en 72-94% de las preguntas y una clave de respuestas cíclica y predecible. Estas dos últimas invalidadas la métrica de "probabilidad de aprobar": se puede aprobar sin conocimientos. Con las correcciones P0/P1 del apartado 7, el valor de preparación sube sustancialmente.

---

## 2. Fortalezas (qué sí funciona)

1. **Alineación de dominios exacta con los exam guides oficiales:**
   - CDL: D1 10%, D2-D4 30% c/u ✅
   - ACE: 20 / 17.5 / 25 / 20 / 17.5 ✅
   - PCA: 24 / 15 / 20 / 18 / 11 / 12 ✅
2. **Volumen y estructura:** 300 preguntas por certificación, 6 bloques × 50, sin duplicados textuales, sin IDs repetidos, sin campos vacíos.
3. **Simulación fiel:** 50 preguntas, 90 min (CDL) / 120 min (ACE/PCA), corte 70%, paleta de 4 estados, revisión previa, scorecard por dominio.
4. **Case studies oficiales presentes:** Mountkirk Games, TerramEarth, EHR Healthcare, Helicopter Racing League.
5. **Esquema rico:** explicación, desglose distractor a distractor, `gcloudCommand`, `terraformSnippet`, `officialDocUrl`, keywords.
6. **Sintaxis gcloud mayormente correcta** (~96% de la muestra verificada).
7. **Tests funcionales reales:** integridad 23/23 ✅, algoritmos 38/38 ✅.
8. **Balance de respuesta correcta A/B/C/D:** 75/75/75/75 en los tres bancos (ver caveat en §5.6).
9. **100% offline, sin telemetría:** adecuado para entornos aislados.

---

## 3. Errores factuales críticos (enseñan información incorrecta)

### P0 — Errores en la respuesta correcta

| ID | Problema | Corrección |
|---|---|---|
| PCA-D6-001, PCA-D6-029 | Describen la topología `nam3` de Cloud Spanner como "2 RW en us-central1 + 2 RW en us-east1 + 1 witness en us-east4". **La topología real de nam3 es dual-region (us-east4 líder + us-east1), sin witness y sin us-central1.** El `terraformSnippet` de D6-001 repite el error. | Reescribir ambas preguntas con la topología real. |
| PCA-D6-023 | "nam3 se replica en 3+ regiones" — obsoleto con el naming actual. | Corregir a dual-region. |
| CDL-D2-027 | Respuesta correcta = **BigQuery Omni**, producto descontinuado (doc ya no existe). | Reemplazar por BigLake / BigQuery + federated queries. |
| CDL-D2-058 | Respuesta correcta = **Dataprep by Trifacta**, descontinuado tras la compra de Alteryx. | Reemplazar por Dataflow / Dataplex Data Quality. |
| CDL-D3-032 | Presenta **Sustained Use Discounts** como beneficio vigente. Fueron retirados (sustituidos por CUDs). | Reemplazar por Committed Use Discounts. |
| CDL-D3-031 | Cifra inventada "hasta 57-70%" en CUDs. Los reales son ~37% (1 año) y ~70% (3 años). | Corregir cifras. |
| CDL-D4-068 | Niveles de soporte "Basic, Standard, Enhanced, Premium". **Basic fue retirado en 2023.** | Quitar Basic. |
| ACE-D5-013 | `gcloud dlp jobs create ...` — **el grupo `gcloud dlp` no existe** en la CLI. | Usar `gcloud scc findings` o API de Sensitive Data Protection. |
| ACE-D3-024 | Flags inventados: `--custom-metric-metric=`, `--custom-metric-target=`, `--custom-metric-type=GAUGE`. El real es `--custom-metric-utilization=metric=...,utilization-target=...,utilization-target-type=DELTA_PER_SECOND\|GAUGE`. | Corregir flag. |
| ACE-D1-022 | `gcloud identity groups memberships search` — subcomando inexistente; es `search-transitive-memberships`. | Corregir. |
| ACE-D5-017 | `--min-tls-version=1.2` inválido; el enum real es `TLS_1_2`. **Está en la opción correcta.** | Corregir. |
| ACE-D5-022 | `--match-expr=` inexistente; es `--expression`. **Está en la opción correcta.** | Corregir. |
| ACE-D1-044 | `--role='roles/developer'` — no existe ese rol predefinido (los básicos son owner/editor/viewer/browser). | Usar rol válido. |

### P1 — Branding obsoleto o desviaciones menores

| ID / elemento | Problema |
|---|---|
| PCA-D5-011, PCA-D1-045, PCA-D4-039 | "Anthos Service Mesh" como respuesta correcta → hoy **Cloud Service Mesh**; "Google-managed Mesh CA" es legado. |
| PCA-D2-002 | "Anthos Config Management" → hoy **Config Management (GKE Enterprise)**. |
| PCA-D1-052, PCA-D3-053 | "Data Catalog taxonomy" → Data Catalog retirado; es **Dataplex Catalog**. |
| CDL-D4-061 | "Chronicle Security Operations" → renombrado **Google Security Operations (SecOps)** en 2024. |
| CDL-D3-039 | Recomienda **Cloud Endpoints** para API management nuevo; es legacy — Google dirige a **Apigee** (también como distractor en PCA-D1-022). |
| ACE-D3-075 | "Custom Metrics Stackdriver Adapter" — marca obsoleta (2018). |
| ACE-D1-045, ACE-D1-054 | "Google Cloud Platform" / "Google Cloud Platform Console" — branding abandonado en 2018. |
| ACE-D2-025, ACE-D4-026 | "Cloud Datastore" como distractor — legado (hoy Firestore en modo Datastore); tolerable pero confunde. |
| ACE-D5-014 | `gcloud iam deny-policies create --file=` → es `--policy-file` (el propio banco lo usa bien en ACE-D1-028: inconsistencia interna). |

### Erratas de texto

- CDL-D2-012: "relacional relacional" (palabra duplicada).
- CDL-D2-014 y CDL-D4-053: "Cloud Cloud".

---

## 4. Fidelidad de los case studies (PCA)

> ⚠️ **Hallazgo mayor (posterior a la primera revisión):** el examen oficial PCA de Google actualizó sus case studies. Según el test QA propio del proyecto (`tests/qa/test_fidelidad_banco.js:229`), los casos vigentes son **altostrat_media, cymbal_retail, ehr_healthcare y knightmotives_automotive**. Los casos **Mountkirk Games, TerramEarth y Helicopter Racing League fueron retirados por Google**, y **90 de las 300 preguntas PCA (31+30+29) usan casos retirados**. Esto debe confirmarse contra el exam guide oficial vigente; de ser cierto, es el problema de mayor impacto en el banco PCA (más que los errores factuales puntuales).

| Caso | Estado | Detalle |
|---|---|---|
| Mountkirk Games | ❌ Retirado (31 preguntas) | Contradicción menor: el caso dice sub-100ms, la pregunta PCA-D1-001 exige sub-50ms. |
| TerramEarth | ❌ Retirado (30 preguntas) | 1) `case_studies.js` dice **20M vehículos conectados por celular**, pero PCA-D1-019/033/035 y PCA-D3-044 dicen "200.000 conectados + 19,8M suben en depots". 2) Omite las cifras canónicas oficiales: **60 campos cada 30s, 200.000 data points/día, 120 TB/año, 500 dealers en 100 países, split minería/agricultura 80/20**. 3) Inventa "~200 KB/hora/vehículo" y "9KB cada 120s". |
| EHR Healthcare | ✅ Vigente | Parcialmente fiel: 1) El caso oficial es **multinacional**; el archivo dice "across the United States". 2) Omite la **adquisición de DoctorMAX** y el crecimiento "10+ clientes/día". |
| Helicopter Racing League | ❌ Retirado (29 preguntas) | Omite los requisitos oficiales de **servicio de predicciones ML en vivo** y **pronóstico/seguridad meteorológica**. |
| Altostrat Media / Cymbal Retail / KnightMotives | ❌ Ausentes | No existen en `case_studies.js` ni en el banco de preguntas. |

Además: **42 de 123 preguntas con case study** referencian `caseStudySection` que no existen en `case_studies.js` (p. ej. "Executive Statement & Existing Technical Environment"). Si la UI navega por sección, esos enlaces se rompen.

---

## 5. Calidad pedagógica y de formato

### 5.1 Cero preguntas multi-selección ❌
Los 3 bancos tienen `isMultiSelect: false` en el 100% de los ítems. Los exámenes reales de ACE y PCA incluyen preguntas "select 2/3". Esto **subestima la dificultad real** y deja sin ejercitar la lógica multi-select de la UI. Objetivo recomendado: añadir 15-20% de preguntas multi-select (prioridad PCA y ACE).

### 5.2 Distractores absurdos ❌
- CDL: **20.3% de los 900 distractores** son tipo broma ("pagar con monedas de oro", "imprimir datos sísmicos en papel y escanearlos con Google Lens", "dibujar gráficas en una pizarra cada 10 minutos").
- PCA: **29 preguntas** con distractores absurdos ("Instalar Windows 95", "usar Microsoft Paint para ocultar nombres de pacientes", "hacer aterrizar a los pilotos para pausar la carrera").
- ACE: distractores triviales (p. ej. `bq query 'INSERT INTO dns_records...'`).

En el examen real los distractores son plausibles; los absurdos se descartan sin conocimiento, inflando artificialmente la nota del usuario.

### 5.3 Distractores comodín repetidos ⚠️
CDL: "Cloud Storage Archive" como trampa en 34 preguntas no relacionadas, "Cloud DNS" 25×, "Nearline" 22×. Patrón de generación por plantilla que hace predecibles las trampas.

### 5.4 Metadatos decorativos ⚠️
- `trapType` no fiable en ACE: 78% de las opciones etiquetadas `wrong_storage_class_penalty` no tienen relación con almacenamiento; 94% de `legacy_service` tampoco. El metadato no sirve para análisis adaptativo real.
- `timeEstimateSeconds` es constante (120s en ACE/PCA) — no aporta información.
- ACE: `subtopic` es único en 299/300 preguntas — no agrupa nada; inútil para rutas de estudio.
- CDL: 21% de preguntas "advanced" cuando el CDL real es deliberadamente no-técnico.
- PCA: 100% de los ítems son Bloom "analyze" — sin variedad cognitiva.

### 5.5 Duplicado
PCA-D1-072 ≡ PCA-D6-035: mismo escenario (DR de Live Stream API de HRL), opciones reordenadas, misma respuesta. La solución con "Cloud DNS Health-Checked Failover" para streaming HLS es además cuestionable (el failover real es a nivel de manifiesto/DAI).

### 5.6 Balance A/B/C/D artificial ⚠️
75/75/75/75 exacto en los tres bancos es estadísticamente imposible en un banco orgánico. Beneficia al anti-pattern de adivinanza, pero junto con la rotación algorítmica por dominio hace el patrón predecible (p. ej. CDL: D2-D4 rotan 24/24/24/18). Recomendación: romper el balance hacia ±3% para que parezca orgánico.

### 5.7 Distribución case-study desbalanceada (PCA)
PCA-D1 es 100% case-study (72/72) y D2-D6 casi no tienen (D5: 0). En el examen real los casos se mezclan con todos los dominios.

### 5.8 Sesgo de longitud de la respuesta correcta ❌ CRÍTICO
**Verificado (medición propia sobre los 900 ítems):**

| Métrica | CDL | ACE | PCA |
|---|---|---|---|
| Longitud media de la respuesta correcta | 124.9 chars | 126.8 chars | 224.8 chars |
| Longitud media de los distractores | 55.8 chars | 60.1 chars | 59.4 chars |
| Ratio correcta / distractor | **2.24x** | **2.11x** | **3.79x** |
| % de preguntas donde la correcta es la opción MÁS LARGA | **72%** | **85%** | **94%** |
| % de preguntas donde la correcta es ≥2x el distractor más largo | 34% | 34% | **88%** |
| % de preguntas donde la correcta es ≥5x el distractor más largo | 0% | 0% | 8% (25 preguntas) |

Consecuencia directa: **un candidato que solo marca la opción más larga aprueba el simulacro sin leer la pregunta** (~72-99% de acierto, muy por encima del corte de 70%). El test QA del proyecto (`test_fidelidad_banco.js`) lo mide igual: "quien solo marca la opción MÁS LARGA saca 72.7% (CDL) / 86.0% (ACE) / 99.3% (PCA)".

Ejemplos extremos:
- CDL-D3-081: correcta (D) = 144 chars vs distractores de 21-23 chars ("Compute Engine Spot VMs", "Cloud Billing Reports").
- ACE-D5-017: correcta (D) = 247 chars (comando SSL policy) vs distractores de 44-48 chars.
- PCA-D4-014: correcta (D) = 300 chars vs distractores de 28-44 chars ("Export data to floppy disks").

Causa raíz: las respuestas correctas se redactaron como mini-explicaciones y los distractores como etiquetas telegráficas. **La longitud de las 4 opciones debe homogeneizarse (±25% entre la más corta y la más larga) o el banco no es medible.**

### 5.9 Clave de respuestas cíclica y predecible ❌ CRÍTICO
**Verificado (medición propia):** el 97.7% (CDL), 92.3% (ACE) y 96.0% (PCA) de los pares consecutivos de la clave siguen el ciclo A→B→C→D. El inicio de la clave CDL es literalmente `ABABCDABCDABCD...` (periodicidad 4, asignación `index % 4`).

Aunque la letra de la respuesta correcta no se puede adivinar sin saber dónde empieza el ciclo, cualquier usuario que detecte el patrón (o que combine posición + longitud de opción) puede predecir la respuesta sin leer la pregunta. La clave debe realeatorizarse con un PRNG sembrado y verificar: (a) sin periodicidad de orden 4, (b) balance A/B/C/D en 25% ±3%, (c) sin relación con la longitud de las opciones.

---

## 6. Aspectos de ingeniería verificados ✅

- **Suite de integridad:** 23/23 assertions ✅ (`tests/test_integrity.js`).
- **Suite algorítmica:** 38/38 tests ✅ (rotación de bloques disjuntos, Leitner, probabilidad logística, CRC-32 de backups).
- **Simulador:** timer drift-free con `visibilitychange`, paleta de estados, modal de revisión, scorecard por dominio con corte 70%.
- **Launcher 1-click** y modo air-gapped funcionan según diseño.

---

## 7. Plan de mejora priorizado

### Fase 0 — Corrección de errores factuales (bloquea todo lo demás)
1. **Realeatorizar la clave de respuestas** (eliminar ciclo A→B→C→D, PRNG sembrado, balance ±3%).
2. **Homogeneizar la longitud de las 4 opciones** en las preguntas con ratio > 1.5x (CDL: ~216, ACE: ~255, PCA: ~298 preguntas afectadas). Sin esto, cualquier otra métrica de preparación es inválida.
3. Verificar los case studies vigentes contra el exam guide oficial; si Mountkirk/TerramEarth/HRL están retirados, sustituirlos por Altostrat/Cymbal Retail/KnightMotives y reescribir las 90 preguntas afectadas.
4. Corregir los 13 ítems P0 de la sección 3 (nam3 × 3, Omni, Dataprep, SUD, CUD %, soporte Basic, gcloud × 6).
5. Corregir erratas de texto (CDL-D2-012/014, CDL-D4-053).
6. Actualizar branding P1 (Cloud Service Mesh, Config Management, Dataplex, SecOps, Apigee, GCP→Google Cloud).
7. Eliminar el duplicado PCA-D1-072 / PCA-D6-035.
8. Armonizar TerramEarth: unificar cifras (caso + 4 preguntas) con las canónicas oficiales; completar EHR (DoctorMAX, multinacional) y HRL (predictions, weather).
9. Validar `caseStudySection` de las 42 preguntas contra secciones reales.
10. Auditar que todos los `officialDocUrl` devuelvan 200 (hoy hay productos con doc 404).

### Fase 1 — Fidelidad de formato
11. Añadir preguntas multi-select (objetivo: 45-60 por banco, prioridad PCA/ACE) y verificar el flujo de corrección all-or-nothing en la UI. Corregir los 3 enunciados que piden "2 o 3 cosas" pero están marcados como respuesta única (CDL-D4-008, PCA-D4-004, PCA-D3-046).
12. Reemplazar los distractores absurdos por plausibles (CDL: ~183 distractores; PCA: 29 preguntas).
13. Eliminar/renombrar distractores comodín repetidos.

### Fase 2 — Metadatos y pedagogía
14. Corregir o eliminar `trapType` (hoy 78-94% mal etiquetados).
15. Reescribir `subtopic` en ACE para que sea una taxonomía real agrupable (10-15 valores por dominio).
16. Recalibrar dificultad CDL (bajar % advanced) y variar Bloom en PCA.
17. Reducir redundancia temática CDL (3× Transfer Appliance, 4× estrategia 6R).

### Fase 3 — Gobernanza del contenido
18. Revisión humana por un ingeniero certificado GCP de los cambios de Fase 0.
19. Añadir changelog/versionado al banco de preguntas (el manifiesto ya tiene `version`; propagarlo a los archivos de datos).
20. Test de regresión nuevo: validador de sesgo de longitud (<35% de preguntas con la correcta más larga), periodicidad de clave (<40% de pares cíclicos), productos descontinuados y URLs de doc oficial.
21. Sincronización periódica con cada release del exam guide oficial (Google los actualiza ~anualmente).

---

## 8. Nota sobre las certificaciones en sí

Un punto de honestidad pedagógica: las certificaciones GCP ya no expiran, pero su contenido cambia. La plataforma declara "Pass Guarantee" en su marketing (README: "Pass Guarantee Platform"); sin la Fase 0 aplicada, esa promesa no es defendible para el banco actual. Tras aplicar las correcciones, la garantía sí puede sustentarse con los algoritmos de predicción existentes.
