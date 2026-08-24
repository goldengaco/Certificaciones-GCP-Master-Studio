# Guía Oficial de Estudio y Desglose de Temas
## Certificación: Google Cloud Associate Cloud Engineer (ACE)

---

## 📊 Estructura y Ponderación del Examen

| Sección | Dominio de Conocimiento | Peso Estimado |
| :--- | :--- | :--- |
| **Sección 1** | Configuración del entorno de soluciones en la nube (*Setting up a cloud solution environment*) | **~20%** |
| **Sección 2** | Planificación y configuración de una solución en la nube (*Planning and configuring a cloud solution*) | **~17.5%** |
| **Sección 3** | Despliegue e implementación de una solución en la nube (*Deploying and implementing a cloud solution*) | **~25%** |
| **Sección 4** | Garantizar la operación exitosa de una solución en la nube (*Ensuring successful operation of a cloud solution*) | **~20%** |
| **Sección 5** | Configuración de accesos y seguridad (*Configuring access and security*) | **~17.5%** |

---

## 🎯 Desglose Detallado por Dominios y Subtemas

### Sección 1: Configuración del entorno de soluciones en la nube (~20%)
1. **Jerarquía de Recursos:**
   - Organización $\rightarrow$ Carpetas (Folders) $\rightarrow$ Proyectos (Projects) $\rightarrow$ Recursos.
   - Herencia de permisos y políticas de organización.
2. **Gestión de Cuentas y Facturación (Billing):**
   - Configuración de cuentas de facturación, vinculación a proyectos, presupuestos (*Budgets*) y alertas (*Billing Alerts*).
   - Exportación de datos de facturación a BigQuery.
3. **Google Cloud CLI (`gcloud`):**
   - Instalación, configuración y uso de `gcloud init`, `gcloud config set project`, `gcloud config configurations`.
   - Google Cloud Shell y persistencia del directorio `$HOME`.
4. **Habilitación de APIs y Cuotas:**
   - Gestión de APIs en proyectos (`gcloud services enable ...`).
   - Monitorización y solicitud de aumento de cuotas.

---

### Sección 2: Planificación y configuración de una solución en la nube (~17.5%)
1. **Planificación de Recursos de Cómputo:**
   - Selección entre Compute Engine (VMs), Google Kubernetes Engine (GKE), Cloud Run (Contenedores Serverless) y Cloud Functions / App Engine.
   - Tipos de máquinas (E2, N2, C2, etc.), GPUs y discos persistentes (Standard, Balanced, SSD, Extreme).
2. **Planificación de Almacenamiento y Bases de Datos:**
   - Cloud Storage: Clases de almacenamiento (Standard, Nearline, Coldline, Archive) y Lifecycle Rules.
   - Bases de datos relacionales vs NoSQL: Cloud SQL, Cloud Spanner, Firestore, Bigtable, BigQuery.
3. **Planificación de Redes de Nube (VPC):**
   - Modos de VPC (Auto mode vs Custom mode).
   - Rangos CIDR primarios y secundarios para GKE.
   - Conectividad híbrida: Cloud VPN (HA VPN) y Cloud Interconnect.

---

### Sección 3: Despliegue e implementación de una solución en la nube (~25%)
1. **Despliegue en Compute Engine:**
   - Creación de instancias con `gcloud compute instances create`.
   - Grupos de Instancias Administrados (MIGs): Autoescalado, Autohealing, Health Checks, Rolling Updates.
   - Instancias Spot / Preemptible y Metadata/Startup scripts.
2. **Despliegue en Google Kubernetes Engine (GKE):**
   - Creación de clústeres GKE (Autopilot vs Standard).
   - Despliegue de Pods, Deployments y Services (ClusterIP, NodePort, LoadBalancer).
   - Conexión vía `kubectl` y `gcloud container clusters get-credentials`.
3. **Despliegue Serverless (Cloud Run & Functions):**
   - Despliegue de contenedores en Cloud Run (`gcloud run deploy`).
   - Gestión de tráfico y revisiones (Canary deployments, blue/green).
4. **Despliegue con Infraestructura como Código (IaC):**
   - Uso de Terraform y plantillas de configuración.

---

### Sección 4: Garantizar la operación exitosa de una solución en la nube (~20%)
1. **Google Cloud Observability (Operations Suite):**
   - **Cloud Monitoring:** Métricas, Dashboards, Uptime Checks y Políticas de Alertas.
   - **Cloud Logging:** Filtros de logs, Exportación de logs (Sinks a BigQuery/Storage/PubSub).
   - **Cloud Trace, Profiler y Error Reporting.**
2. **Mantenimiento y Recuperación:**
   - Snapshots automáticos de discos persistentes (`Snapshot Schedules`).
   - Copias de seguridad y restauración en Cloud SQL / Spanner.
   - Modificación de recursos en caliente vs detención de instancias.

---

### Sección 5: Configuración de accesos y seguridad (~17.5%)
1. **Identity & Access Management (IAM):**
   - Principio de menor privilegio (*Principle of Least Privilege*).
   - Roles Primitivos (Owner, Editor, Viewer) vs Predefinidos vs Personalizados (*Custom Roles*).
   - Tipos de miembros: Google Accounts, Google Groups, Service Accounts.
2. **Cuentas de Servicio (Service Accounts):**
   - Creación y asignación de roles a Service Accounts (`gcloud iam service-accounts create`).
   - Delegación y *Service Account User* (`roles/iam.serviceAccountUser`).
   - Claves de cuentas de servicio vs identidades administradas.
3. **Seguridad de Redes y Datos:**
   - Reglas de Firewall de VPC (Prioridades, Ingress/Egress, Tags de red).
   - Cloud KMS (Caves de cifrado gestionadas por Google vs Customer-Managed Encryption Keys - CMEK).
   - Cloud NAT y Private Google Access.
