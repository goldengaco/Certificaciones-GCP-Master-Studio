# Plan Maestro de Corrección y Ejecución (Fusión de Auditorías IA)

**Proyecto:** Google Cloud Master Certification Studio  
**Documentos Base:** `AUDITORIA_CALIDAD.md` (Contenido & Pedagogía) + `ANALISIS_Y_RECOMENDACIONES_SISTEMA.md` (Arquitectura & Skills)  
**Ruta del Proyecto:** `c:\DevWork\Certificaciones-GCP-Master-Studio\plataforma_entrenamiento_master`  

---

## 1. Matriz Unificada de Trabajo (Para IA Ejecutora / Multi-Agente)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                          PLAN MAESTRO UNIFICADO DE EJECUCIÓN                           │
├─────────┬──────────────────────────────────┬───────────────────────────────────────────┤
│ FASE    │ ENFOQUE PRINCIPAL                │ ACCIONES CONCRETAS                        │
├─────────┼──────────────────────────────────┼───────────────────────────────────────────┤
│ FASE 0  │ Hotfix P0: Errores Factuales     │ • Corregir Spanner nam3 (PCA-D6-001/029)  │
│ (Bloq.) │ (13 reactivos críticos)          │ • Eliminar `gcloud dlp` (ACE-D5-013)      │
│         │                                  │ • Corregir flags gcloud inventados        │
│         │                                  │ • Reemplazar Omni y Dataprep descontin.   │
│         │                                  │ • Corregir SUDs y soporte Basic (CDL)     │
├─────────┼──────────────────────────────────┼───────────────────────────────────────────┤
│ FASE 1  │ Fidelidad de Examen & Contenido  │ • Implementar 15-20% preguntas multi-sel  │
│         │                                  │ • Reemplazar 20% de distractores absurdos │
│         │                                  │ • Armonizar TerramEarth, EHR y HRL        │
│         │                                  │ • Corregir 42 `caseStudySection` rotos    │
│         │                                  │ • Eliminar duplicado PCA-D1-072/D6-035    │
├─────────┼──────────────────────────────────┼───────────────────────────────────────────┤
│ FASE 2  │ Modernización Frontend & Motor   │ • Popover API y <dialog> con `closedby`   │
│         │ (Skills Modern Web & ES2026)     │ • Container Queries en Split-Panel PCA    │
│         │                                  │ • Temporal API para Spaced Repetition     │
│         │                                  │ • Sets algebraicos en rotación de bloques │
├─────────┼──────────────────────────────────┼───────────────────────────────────────────┤
│ FASE 3  │ Automatización QA & Validación   │ • Nuevo test `test_factual_accuracy.js`   │
│         │ (PowerShell 7.6 & QA Expert)     │ • Ejecución limpia 100% en `run_tests.ps1`│
│         │                                  │ • Lighthouse 100% en Performance y A11y   │
└─────────┴──────────────────────────────────┴───────────────────────────────────────────┘
```

---

## 2. Detalle de Correcciones Fase 0 (P0 Factuales)

1. **Cloud Spanner nam3 (`PCA-D6-001`, `PCA-D6-029`, `PCA-D6-023`):**
   - *Error:* Definía nam3 con 2 RW en us-central1 + 2 RW en us-east1 + 1 witness en us-east4.
   - *Corrección:* nam3 es una configuración dual-region (us-east4 líder con testigo y réplica en us-east1).
2. **`gcloud dlp` inexistente (`ACE-D5-013`):**
   - *Error:* Uso de comando inexistente `gcloud dlp jobs create`.
   - *Corrección:* Usar Cloud Data Loss Prevention vía REST/Client SDK o `gcloud scc` / Sensitive Data Protection CLI válido.
3. **Flags inventados en `gcloud compute instance-groups` (`ACE-D3-024`):**
   - *Error:* `--custom-metric-metric=`, `--custom-metric-target=`.
   - *Corrección:* Usar la sintaxis oficial `--custom-metric-utilization=metric=...,utilization-target=...,utilization-target-type=DELTA_PER_SECOND`.
4. **Flags de IAM y TLS (`ACE-D5-017`, `ACE-D5-022`, `ACE-D1-022`, `ACE-D1-044`):**
   - *Corrección:* `TLS_1_2`, `--expression`, `search-transitive-memberships`, y roles estándar IAM.
5. **Productos descontinuados en CDL (`CDL-D2-027`, `CDL-D2-058`, `CDL-D3-032`, `CDL-D4-068`):**
   - Reemplazar BigQuery Omni por BigLake / Federated Queries.
   - Reemplazar Dataprep por Dataflow / Dataplex Data Quality.
   - Sustituir Sustained Use Discounts (retirados) por Committed Use Discounts (CUDs).
   - Eliminar el nivel de soporte "Basic" (retirado).
