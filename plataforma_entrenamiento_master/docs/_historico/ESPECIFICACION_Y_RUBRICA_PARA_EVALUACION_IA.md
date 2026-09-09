# Especificación Técnica y Rúbrica de Evaluación para IA Evaluadora y Ejecutora

**Proyecto:** Google Cloud Master Certification Studio (Master Edition)  
**Entorno de Ejecución:** Windows 11 Pro | PowerShell 7.6 (`pwsh`) | Node.js Runtime  
**Ruta del Proyecto:** `c:\DevWork\Certificaciones-GCP-Master-Studio\plataforma_entrenamiento_master`  
**Arquitectura:** 100% Offline Single Page Application (SPA), Zero-CDN, Zero-Framework Runtime, LocalStorage con CRC-32 IEEE 802.3.

---

## 1. Misión de Ejecución y Alcance para el Equipo de IAs

El objetivo es ejecutar la modernización integral de la plataforma de certificación de Google Cloud, abarcando **bancos de preguntas (CDL, ACE, PCA)**, **motores algorítmicos (Rotación de Bloques, Spaced Repetition Leitner, Predictor Logístico)**, **modernización UI/UX (HTML5/CSS3 moderno)** y **automatización de pruebas QA**.

---

## 2. Rúbrica de Evaluación Objetiva (Para IA Evaluadora / Reviewer)

Cualquier IA que evalúe o audite el trabajo ejecutado debe calificar los siguientes criterios de forma binaria (PASA / FALLA):

| ID | Dimensión | Criterio de Aceptación Objetivo | Método de Verificación Automatizado |
|---|---|---|---|
| **EVAL-01** | **Integridad de Datos** | Los 900+ reactivos (300 CDL, 300 ACE, 300 PCA) y los 4 Casos de Estudio cumplen estrictamente el esquema JSON/JS, sin campos nulos, con 4 distractores justificados cada uno. | `node tests/test_integrity.js` (0 fallos) |
| **EVAL-02** | **Rotación Disjunta** | El motor `BlockRotationEngine` divide cada pool de 300 preguntas en exactamente 6 bloques de 50 preguntas disjuntos ($B_i \cap B_j = \emptyset$), respetando los pesos oficiales por dominio. | `node tests/test_algorithms.js` (Suite 1 & 1B) |
| **EVAL-03** | **Repetición Espaciada Leitner** | La máquina de estados `LeitnerEngine` gestiona 4 cajas (0 a 3). Requiere exactamente 3 aciertos consecutivos para alcanzar `isMastered: true`. Un solo error reinicia la racha a 0 y degrada el ítem a Caja 0. | `node tests/test_algorithms.js` (Suite 2 & 2B) |
| **EVAL-04** | **Probabilidad Logística Calibrada** | El cálculo $P(\text{pass}) \in [0.0\%, 99.9\%]$ es estrictamente monótono respecto al puntaje EWMA y al nivel de maestría, penalizando desbalances severos por dominio y respuestas aceleradas (*rushing*). | `node tests/test_algorithms.js` (Suite 3 & 3B) |
| **EVAL-05** | **Persistencia e Integridad CRC-32** | El gestor `state.js` exporta e importa copias de respaldo JSON validando el checksum CRC-32 IEEE 802.3. Cualquier alteración de payload es rechazada de inmediato. | `node tests/test_algorithms.js` (Suite 4 & 4B) |
| **EVAL-06** | **Zero CDN & 100% Offline** | `index.html` y todos los componentes no realizan ninguna petición HTTP externa, no cargan fuentes de Google Fonts externas (usa system fonts) ni librerías remotas. | Inspección estática de URLs externas en scripts y estilos |
| **EVAL-07** | **Compatibilidad Windows 11 & pwsh 7.6** | Todos los scripts de automatización (`run_tests.ps1`, launchers) usan sintaxis nativa de PowerShell 7.6, sin comandos Linux (`grep`, `sudo`, `&&`). | Ejecución en pwsh 7.6 con código de salida 0 |

---

## 3. Requerimientos de Implementación (Para IA Implementadora)

### R1. Taxonomía y Enriquecimiento de Reactivos (CDL, ACE, PCA)
- Mantener los 300 reactivos por certificación alineados con los exámenes oficiales de Google Cloud.
- Validar que cada reactivo de ACE incluya el comando CLI `gcloud` exacto y operativo.
- Validar que cada reactivo de PCA con Caso de Estudio referencie exactamente a `Mountkirk Games`, `TerramEarth`, `EHR Healthcare` o `Helicopter Racing League`.

### R2. Modernización Web (HTML5 & CSS3 Estándar 2026)
- Implementar la **Popover API** y atributos nativos de HTML5 para reducir manipulación excesiva del DOM por JavaScript.
- Emplear `<dialog>` nativo para el visor de Casos de Estudio y cuadros de diálogo modales.
- Aplicar **Container Queries** (`@container`) en el panel dividido (Split-Panel) para garantizar responsividad total en pantallas anchas y portátiles.

### R3. Pipeline de Verificación Automatizado
- Consolidar en `run_tests.ps1` la ejecución secuencial de:
  1. `test_integrity.js` (Esquemas y consistencia de datos).
  2. `test_algorithms.js` (Rotación, Leitner, Probabilidad, CRC-32).
  3. `test_adversarial_fuzzer_m5.js` (Fuzzing con datos corruptos y límites extremos).
  4. `stress_test_e2e.js` (Simulación de 100 sesiones de examen concurrentes).

---

## 4. Protocolo de Ejecución con Teamwork Multi-Agente

Para lanzar este paquete de trabajo a un equipo de IAs autónomas mediante `/teamwork-preview`:
1. La IA orquestadora transfiere este documento al subagente `teamwork_preview`.
2. El equipo de IAs se divide en roles:
   - **Lead Architect Agent:** Valida la coherencia general del sistema y Zero-CDN.
   - **GCP Domain Specialist Agent:** Audita los 900+ reactivos y casos de estudio.
   - **Frontend & Algorithm Agent:** Refactoriza y optimiza `engine.js`, `state.js`, `app.js` y `index.html`.
   - **Adversarial QA Judge Agent:** Ejecuta las suites de pruebas y evalúa contra la Rúbrica de la Sección 2.
