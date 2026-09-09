# Guía Técnica 05: Revisión Detallada de Preguntas, Calibración de Dificultad e Interacción

**Fecha:** Agosto 2026  
**Alcance:** Auditoría reactivo por reactivo, evaluación de dificultad por certificación (CDL vs ACE vs PCA), interacción UI y fidelidad oficial.  
**Ruta:** `plataforma_entrenamiento_master/docs/05_REVISION_PREGUNTAS_DIFICULTAD_E_INTERACCION.md`  

---

## 1. Calibración de Dificultad por Nivel de Certificación

### 1.1 Cloud Digital Leader (CDL) — Nivel Foundational
* **Audiencia Oficial:** Líderes de negocio, gerentes de producto, arquitectos comerciales y profesionales que inician en nube.
* **Diagnóstico del Banco Actual (300 Qs):**
  * **Problema:** Un 21% de las preguntas están etiquetadas como `advanced` y exigen conocimiento de sintaxis CLI o comandos técnicos profundos (ej. configuraciones complejas de Kubernetes o reglas CIDR de VPC).
  * **Ajuste Requerido:** Recalibrar a nivel **Conceptual y de Valor de Negocio** (Taxonomía Bloom: *Remember / Understand / Apply*). El CDL real evalúa *por qué* usar Google Cloud, modelos de costo (CapEx vs OpEx, TCO), diferencias entre IaaS/PaaS/SaaS y cuándo elegir Cloud SQL vs BigQuery vs Vertex AI, sin exigir comandos `gcloud`.
  * **Distractores:** Eliminar los distractores inverosímiles (20.3%) y sustituirlos por tecnologías tradicionales on-premise o servicios no óptimos para el caso de negocio.

### 1.2 Associate Cloud Engineer (ACE) — Nivel Associate
* **Audiencia Oficial:** Ingenieros de nube, DevOps y administradores de sistemas que configuran y despliegan infraestructura.
* **Diagnóstico del Banco Actual (300 Qs):**
  * **Problema 1 (Falta de Multi-Select):** El 100% de los reactivos son de opción única (`isMultiSelect: false`). El examen oficial real contiene ~15-20% de preguntas con **"Select TWO"** o **"Select THREE"** (ej. seleccionar 2 comandos de `gcloud` o 2 configuraciones de IAM/VPC).
  * **Problema 2 (Precisión de Comandos CLI):** Aunque la sintaxis general es sólida (~96%), se deben corregir los 6 reactivos con flags inexistentes (`ACE-D5-013`, `ACE-D3-024`, `ACE-D5-017`, `ACE-D5-022`, `ACE-D1-022`, `ACE-D1-044`).
  * **Dificultad General:** **Adecuada y alineada** con el rol táctico (Bloom: *Apply / Analyze*).

### 1.3 Professional Cloud Architect (PCA) — Nivel Professional
* **Audiencia Oficial:** Arquitectos empresariales líderes que diseñan soluciones escalables, seguras y de alta disponibilidad.
* **Diagnóstico del Banco Actual (300 Qs):**
  * **Problema 1 (Desbalance de Casos de Estudio):** Las preguntas de Casos de Estudio están concentradas en un 100% en el Dominio 1 (`PCA-D1`, 72/72 preguntas), dejando `PCA-D5` y `PCA-D6` casi sin preguntas de casos. En el examen real, los casos de estudio permean todos los dominios (ej. seguridad de EHR en D3, confiabilidad de Mountkirk en D6).
  * **Problema 2 (Errores Factuales P0):** Topología `nam3` de Spanner en `PCA-D6-001/029/023` debe corregirse a dual-region.
  * **Dificultad General:** **Muy buena y desafiante** (Bloom: *Analyze / Evaluate*), con escenarios multi-región y RPO/RTO cero.

---

## 2. Auditoría de la Interacción y Experiencia de Usuario (UI/UX)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        EVALUACIÓN DE MODOS DE INTERACCIÓN                              │
├─────────────────────┬─────────────────────────────────┬────────────────────────────────┤
│ MODO DE LA APP      │ ESTADO ACTUAL                   │ ACCIÓN DE MEJORA               │
├─────────────────────┼─────────────────────────────────┼────────────────────────────────┤
│ 1. Modo Estudio     │ Feedback instantáneo, palabras  │ Agregar Popover API nativa     │
│                     │ clave y comandos asociados.     │ para ver glosario y tooltips.  │
├─────────────────────┼─────────────────────────────────┼────────────────────────────────┤
│ 2. Simulador Examen │ Temporizador preciso (90/120m), │ Sustituir modal de revisión    │
│                     │ paleta de 4 estados, scorecard. │ por <dialog closedby="any">.   │
├─────────────────────┼─────────────────────────────────┼────────────────────────────────┤
│ 3. Split-Panel PCA  │ Visor lateral para leer el caso │ Usar CSS Container Queries     │
│                     │ mientras se responde.           │ y reparar 42 secciones rotas.  │
├─────────────────────┼─────────────────────────────────┼────────────────────────────────┤
│ 4. Weakness Drill   │ Cola Leitner con atajos de      │ Migrar intervalos a            │
│                     │ teclado (A-D, 1-4, Space, F).   │ Temporal API (ES2026).         │
├─────────────────────┼─────────────────────────────────┼────────────────────────────────┤
│ 5. Analytics Radar  │ Gráfica radar SVG y medidor     │ Optimizar viewBox SVG para     │
│                     │ radial 0-100% de probabilidad.  │ pantallas de alta densidad.    │
└─────────────────────┴─────────────────────────────────┴────────────────────────────────┘
```

---

## 3. Mapa de Archivos para la IA Evaluadora

Para que cualquier IA auditora o revisora examine el proyecto completo, este es el mapa de archivos esenciales:

| Componente | Archivo del Proyecto | Qué Debe Revisar la IA |
|---|---|---|
| 📋 **Manifiesto y Pesos** | `data/cert_manifest.js` | Dominios oficiales, duración de examen y cuotas de bloques. |
| 📘 **Banco CDL (300 Qs)** | `data/cert_cdl.js` | 300 preguntas, corrección de Dataprep/Omni/SUDs y nivel no-técnico. |
| 📗 **Banco ACE (300 Qs)** | `data/cert_ace.js` | 300 preguntas tácticas, sintaxis `gcloud` y preguntas multi-select. |
| 📕 **Banco PCA (300 Qs)** | `data/cert_pca.js` | 300 preguntas de arquitectura, Spanner `nam3` y casos de estudio. |
| 🏢 **Casos de Estudio** | `data/case_studies.js` | Mountkirk, TerramEarth (20M vehículos), EHR (DoctorMAX), HRL. |
| ⚙️ **Motor Algorítmico** | `js/engine.js` | Rotación disjunta ($B_i \cap B_j = \emptyset$), Leitner 4-cajas y probabilidad. |
| 💾 **Gestor de Estado** | `js/state.js` | LocalStorage, serialización JSON y checksum CRC-32 IEEE 802.3. |
| 🖥️ **Controlador Examen** | `js/ui_exam.js` | Temporizador, paleta de navegación, Split-Panel y scorecard. |
| 🧪 **Suite de Pruebas** | `tests/run_tests.ps1` | Suite automatizada en PowerShell 7.6 (Integridad, Algoritmos, Fuzzer). |
