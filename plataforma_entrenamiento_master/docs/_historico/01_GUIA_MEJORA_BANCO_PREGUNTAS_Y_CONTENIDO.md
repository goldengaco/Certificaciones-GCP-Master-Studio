# Guía Técnica 01: Mejora y Corrección del Banco de Preguntas y Contenido

**Ruta de Datos:** `plataforma_entrenamiento_master/data/`  
**Archivos Afectados:** `cert_cdl.js`, `cert_ace.js`, `cert_pca.js`, `case_studies.js`, `cert_manifest.js`  

---

## 1. Corrección de los 13 Errores Factuales Críticos (P0)

Estos errores enseñan conceptos o comandos incorrectos que perjudican al estudiante en el examen oficial. Deben corregirse de inmediato.

### 1.1 Cloud Spanner: Topología `nam3` y Multi-Región
* **Archivos y Reactivos:** `data/cert_pca.js` (`PCA-D6-001`, `PCA-D6-029`, `PCA-D6-023`).
* **Error Actual:** Describe `nam3` como 2 RW en `us-central1` + 2 RW en `us-east1` + 1 witness en `us-east4`.
* **Hecho Técnico Oficial:** `nam3` es una configuración de **región dual** en América del Norte que abarca `us-east4` (región líder por defecto con 2 réplicas RW y 1 testigo) y `us-east1` (2 réplicas RW). No incluye `us-central1`. La configuración que incluye 3 regiones con testigo en `us-east4` es `nam6` o configuraciones multirregionales personalizadas.
* **Acción de Corrección:**
  - En `PCA-D6-001`: Actualizar la opción C y el `terraformSnippet` para referenciar la topología multirregional `nam-eur-asia1` o corregir la descripción de `nam3` a su topología dual-region oficial.
  - En `PCA-D6-029` y `PCA-D6-023`: Ajustar el texto de la justificación y las opciones de respuesta.

### 1.2 Comandos `gcloud` Inexistentes o con Flags Inválidos
* **`ACE-D5-013` (Cloud DLP):**
  - *Error:* `"gcloudCommand": "gcloud dlp jobs create ..."` (El grupo `gcloud dlp` no existe en la CLI estándar de Google Cloud SDK).
  - *Corrección:* Reemplazar por la llamada vía REST API de Cloud Data Loss Prevention o referenciar `gcloud scc findings` / `gcloud data-catalog` / llamadas con `curl` a `https://dlp.googleapis.com/v2/projects/...`.
* **`ACE-D3-024` (Autoscaling con Métricas Personalizadas):**
  - *Error:* Flags inventados `--custom-metric-metric=`, `--custom-metric-target=`, `--custom-metric-type=GAUGE`.
  - *Corrección:* Usar el flag canónico oficial:
    ```bash
    gcloud compute instance-groups managed set-autoscaling my-group \
      --custom-metric-utilization=metric=custom.googleapis.com/my_metric,utilization-target=100,utilization-target-type=DELTA_PER_SECOND \
      --region=us-central1
    ```
* **`ACE-D5-017` (TLS Version en SSL Policies):**
  - *Error:* `--min-tls-version=1.2` (inválido).
  - *Corrección:* El valor del enum oficial es `--min-tls-version=TLS_1_2`.
* **`ACE-D5-022` (Cloud Armor Security Policy Rules):**
  - *Error:* `--match-expr=` (inexistente).
  - *Corrección:* El flag oficial es `--expression="inIpRange(origin.ip, '192.0.2.0/24')"` o `--src-ip-ranges`.
* **`ACE-D1-022` (Cloud Identity Group Memberships):**
  - *Error:* `gcloud identity groups memberships search` (subcomando inexistente).
  - *Corrección:* Usar `gcloud identity groups memberships search-transitive-memberships`.
* **`ACE-D1-044` (Roles Básicos IAM):**
  - *Error:* `--role='roles/developer'` (No existe un rol predefinido `roles/developer`).
  - *Corrección:* Usar `roles/viewer` o un rol predefinido real como `roles/container.developer`.

### 1.3 Productos Descontinuados y Cambios en Facturación (CDL)
* **`CDL-D2-027` (BigQuery Omni):** Reemplazar BigQuery Omni (doc discontinuada) por **BigLake / BigQuery federated queries** sobre Amazon S3 o Azure Blob Storage.
* **`CDL-D2-058` (Dataprep by Trifacta):** Dataprep fue discontinuado. Reemplazar la respuesta correcta por **Dataflow / Dataplex Data Quality**.
* **`CDL-D3-032` (Sustained Use Discounts):** Google Cloud retiró los SUDs en las nuevas familias de máquinas de Compute Engine. Reemplazar la pregunta para enfocarse en **Committed Use Discounts (CUDs)** basados en recursos o en gasto flexible.
* **`CDL-D3-031` (Cifras de CUDs):** Ajustar las cifras a los valores estándar de Google Cloud: ~37% para compromisos de 1 año y hasta ~57-70% para compromisos de 3 años en cómputo.
* **`CDL-D4-068` (Niveles de Soporte):** El nivel de soporte "Basic" fue retirado en 2023. Los 4 niveles vigentes son **Free (Billing and Account Management), Standard, Enhanced y Premium Support**.

### 1.4 Erratas y Duplicados
* Corregir errores tipográficos en `CDL-D2-012` ("relacional relacional"), `CDL-D2-014` y `CDL-D4-053` ("Cloud Cloud").
* Eliminar la pregunta duplicada `PCA-D1-072` (idéntica a `PCA-D6-035`) y crear una nueva pregunta sobre **Cross-Region Load Balancing y Cloud CDN Anycast Routing**.

---

## 2. Armonización de los 4 Casos de Estudio de PCA (`case_studies.js`)

Los Casos de Estudio oficiales de Google Cloud tienen especificaciones técnicas y de negocio muy concretas:

### 2.1 TerramEarth
* **Cifras Canónicas Oficiales:**
  * 20 millones de vehículos agrícolas en el mundo (200.000 conectados con celular a 9 KB cada 120s, y 19.8 millones suben 200 MB a 500 MB en depots / distribuidores al finalizar la jornada).
  * Ingestión de telemetría a escala de **petabytes** (Dataflow + BigQuery ML).
  * 500 distribuidores (dealers) en más de 100 países.
* **Acción:** Unificar el texto de `case_studies.js` con las 4 preguntas de TerramEarth (`PCA-D1-019`, `033`, `035`, `PCA-D3-044`).

### 2.2 EHR Healthcare
* **Detalles Oficiales:**
  * Empresa **multinacional** de salud (no solo de EE.UU.).
  * Adquisición de la startup **DoctorMAX** que añade 10+ nuevos clientes aseguradores por día.
  * Requisitos estrictos de cumplimiento **HIPAA** y retención auditada con Cloud Storage Bucket Lock.

### 2.3 Helicopter Racing League (HRL)
* **Detalles Oficiales:**
  * Transmisión de video en vivo de carreras con latencia ultra-baja global (Cloud CDN + Media CDN).
  * Servicio de predicción en tiempo real impulsado por ML (Vertex AI) para estimar tiempos de vuelta y maniobras de adelantamiento durante la transmisión.

### 2.4 Reparación de `caseStudySection` (42 Enlaces Rotos)
Actualmente 42 preguntas apuntan a secciones como `"Executive Statement & Existing Technical Environment"` que no existen como claves en `case_studies.js`.
* **Solución:** Normalizar todas las preguntas a las 4 secciones estándar:
  1. `companyOverview` (Descripción de la empresa y visión)
  2. `businessRequirements` (Requisitos de negocio y KPIs)
  3. `technicalRequirements` (Requisitos técnicos y SLAs)
  4. `existingEnvironment` (Arquitectura actual y retos de migración)

---

## 3. Implementación de Preguntas Multi-Selección (Multi-Select)

En los exámenes reales de Google Cloud, aproximadamente el 15-20% de las preguntas son del tipo **"Select TWO"** o **"Select THREE"**.

### 3.1 Estructura JSON requerida en los Bancos de Datos
```javascript
{
  "id": "PCA-D1-085",
  "certId": "pca",
  "domainId": "PCA-D1",
  "title": "High Availability GKE Cluster and Cloud SQL Cross-Region Topology",
  "scenario": "You are designing a mission-critical e-commerce application on Google Cloud. You need to ensure the system survives a complete regional outage with minimal operational overhead. Which TWO actions should you take? (Select TWO)",
  "isMultiSelect": true,
  "expectedSelectCount": 2,
  "options": [
    { "letter": "A", "text": "Deploy a GKE regional cluster with nodes distributed across three zones.", "isTrap": false },
    { "letter": "B", "text": "Configure Cloud SQL for PostgreSQL with High Availability (regional failover) and a cross-region read replica.", "isTrap": false },
    { "letter": "C", "text": "Deploy a single-zone Compute Engine VM with manual daily snapshots.", "isTrap": true, "trapType": "single_point_of_failure" },
    { "letter": "D", "text": "Use Cloud Storage Coldline for transaction log processing.", "isTrap": true, "trapType": "wrong_storage_class" },
    { "letter": "E", "text": "Disable VPC Private Google Access.", "isTrap": true, "trapType": "anti_pattern" }
  ],
  "correct": ["A", "B"],
  "explanation": "Option A provides zero-downtime control plane and worker node resilience within the primary region. Option B ensures automated failover within the region and rapid DR promotion to the secondary region.",
  "distractors": {
    "C": "Single-zone VM is a single point of failure.",
    "D": "Coldline is for archival, not transactional data.",
    "E": "Disabling Private Google Access breaks internal VPC communications."
  }
}
```

### 3.2 Cuota Objetivo de Conversión
* **ACE:** Convertir 45 preguntas a Multi-Select (9 por dominio).
* **PCA:** Convertir 55 preguntas a Multi-Select (10 por dominio).
* **CDL:** Mantener 100% Single-Select o máximo 15 preguntas Multi-Select básicas (el examen oficial CDL es principalmente single-choice).

---

## 4. Reemplazo de Distractores Absurdos por Opciones Plausibles

Aproximadamente el 20% de los distractores en CDL y 29 en PCA contienen respuestas inverosímiles (ej. "usar Windows 95", "imprimir datos sísmicos", "pagar en monedas de oro").

### 4.1 Principio de Autoría de Distractores Reales de Google Cloud
Cada distractor debe representar un **anti-patrón arquitectónico real**, un **servicio incorrecto para el caso de uso**, o un **error de dimensionamiento / seguridad**:
1. **Trampa de Costo:** Elegir un servicio sobre-dimensionado (ej. Cloud Spanner para un blog de 50 usuarios).
2. **Trampa de Mantenimiento:** Diseñar scripts manuales o VMs no administradas en lugar de soluciones serverless (Cloud Run).
3. **Trampa de Seguridad:** Almacenar claves en código fuente o abrir puertos `0.0.0.0/0` en lugar de IAM / IAP.
4. **Trampa de Latencia/Storage:** Usar Cloud Storage Archive para consultas analíticas frecuentes.
