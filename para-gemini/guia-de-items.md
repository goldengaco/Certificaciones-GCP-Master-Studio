# Guía de Redacción Psicometría de Ítems (P06) — GCP Cert Studio

**Propósito:** Establecer la norma de estilo y el estándar psicométrico de redacción para los redactores de ítems (P07, P08, P09) y revisores (P10, P11, P12).  
**Regla de Oro:** La respuesta correcta se distingue por lo que **dice** (el juicio arquitectónico / técnico), nunca por lo que **mide** (longitud, especificidad o formato).

---

## 1. Los 6 Principios Innegociables

1. **Rango de Longitud Estricto (±25%):** En las cuatro opciones, la diferencia entre la opción más corta y la más larga no puede superar el 25% de la mayor.
2. **Podar la Correcta:** Quitar explicaciones, justificaciones, cifras de rendimiento y paréntesis aclaratorios de la opción correcta. Todo ese valor didáctico se traslada a `explanation`.
3. **Elevar los Distractores:** Prohibido usar opciones absurdas ("hacerlo a mano", "Windows 95", "borrar todo"). Cada distractor debe ser una arquitectura o configuración real de Google Cloud que casi resuelva el problema pero falle por una restricción explícita del escenario (costo, latencia, RPO/RTO, acoplamiento, mínimo privilegio).
4. **Al menos Dos Opciones Defendibles:** Un profesional certificado debe dudar entre al menos dos opciones antes de leer la justificación técnica.
5. **Irresoluble con el Escenario Oculto:** Si se tapan `scenario` y `title`, la opción correcta no debe poder deducirse por sintaxis o longitud.
6. **Explicación Completa y Didáctica:** En `explanation` se enseña la justificación técnica oficial, la referencia a la documentación y el porqué fallan las alternativas en este caso concreto.

---

## 2. Seis Ejemplos Reales: Versión Mala vs. Versión Buena

---

### Ejemplo 1 (CDL) — `CDL-D1-001`

#### ❌ Versión MALA (Actual en el banco)
* **Escenario:** Una empresa tradicional de comercio minorista opera sus propios centros de datos locales. Durante las temporadas festivas (como Black Friday), el tráfico se multiplica por diez durante solo 48 horas. El resto del año, el 85% de sus servidores físicos permanecen inactivos consumiendo energía, mantenimiento y licencias. ¿Qué beneficio fundamental de la computación en la nube de Google Cloud resuelve directamente este problema de ineficiencia financiera?
* **Opciones:**
  * **A:** Comprar servidores adicionales usados en sitios de subastas web para reducir el gasto de capital. *(99 car)*
  * **B:** Electricidad gratuita suministrada por los centros de datos de Google. *(69 car)*
  * **C:** Elasticidad bajo demanda y modelo de precios de pago por uso (Pay-as-you-go), que permite escalar recursos horizontalmente durante picos de demanda y reducirlos a cero cuando el tráfico disminuye, transformando gastos de capital fijos (CapEx) en gastos operativos variables (OpEx). *(274 car)* ← **Correcta** (2,7× más larga que la media)
  * **D:** Obligar a los clientes a comprar en horarios nocturnos para evitar sobrecargas en los servidores. *(97 car)*
* **Diagnóstico del Fallo:**
  * La opción C tiene 274 caracteres frente a 69-99 de las demás. Se adivina por la forma.
  * Los distractores A, B y D son disparates que nadie elegiría en un entorno corporativo.

#### ✅ Versión BUENA (Reescrita con rigor psicométrico)
* **Escenario:** Una empresa minorista experimenta picos de tráfico que multiplican por 10 su demanda durante 48 horas al año. El resto del año, el 85% de su infraestructura permanece inactiva. ¿Qué principio financiero de Google Cloud resuelve este problema?
* **Opciones:**
  * **A:** Descuentos por uso continuo (SUD) aplicados sobre servidores físicos dedicados locales. *(87 car)*
  * **B:** Elasticidad bajo demanda con facturación por uso que convierte CapEx en OpEx variable. *(89 car)* ← **Correcta**
  * **C:** Contratos de reserva fija a 3 años para aprovisionar la capacidad máxima anual de cómputo. *(93 car)*
  * **D:** Depreciación acelerada de activos de hardware mediante créditos de innovación en la nube. *(92 car)*
* **Métricas de Longitud:** Rango: 87–93 caracteres (Diferencia: 6.4%, dentro del ±25%).
* **Por qué funciona:** Opciones A, B y C representan conceptos financieros reales de infraestructura. A falla porque SUD/hardware dedicado no aborda la estacionalidad de 48h. C falla porque pagar 3 años de capacidad pico genera un sobrecosto masivo el resto del año. La explicación técnica detallada se traslada a `explanation`.

---

### Ejemplo 2 (CDL) — `CDL-D2-005`

#### ❌ Versión MALA (Actual en el banco)
* **Escenario:** Un hospital genera 50 TB mensuales de imágenes médicas (rayos X, resonancias magnéticas). Las imágenes deben consultarse frecuentemente durante los primeros 30 días tras el examen. Después de 30 días, el acceso ocurre menos de una vez al año, pero la regulación exige conservarlas por 5 años. ¿Qué solución minimiza el costo total de almacenamiento sin intervención manual?
* **Opciones:**
  * **A:** Escribir un script manual que un operador ejecute cada fin de semana para descargar y subir los archivos a diferentes carpetas. *(127 car)*
  * **B:** Crear 365 máquinas virtuales Compute Engine para mover un archivo por día. *(74 car)*
  * **C:** Borrar todos los archivos a los 30 días para evitar pagar almacenamiento. *(73 car)*
  * **D:** Configurar una política de Object Lifecycle Management en el bucket de Cloud Storage para transicionar automáticamente los objetos de Standard a Coldline a los 30 días, y a Archive a los 365 días. *(196 car)* ← **Correcta** (2,1× la media)
* **Diagnóstico del Fallo:**
  * Las opciones B y C son bromas obvias. La opción D contiene toda la explicación funcional y triplica en longitud a B y C.

#### ✅ Versión BUENA (Reescrita)
* **Escenario:** Un hospital almacena imágenes médicas que se consultan frecuentemente durante 30 días y luego casi nunca, pero deben conservarse 5 años por regulación. ¿Cómo optimizar el costo de forma desatendida?
* **Opciones:**
  * **A:** Almacenar en Cloud Storage Standard y ejecutar scripts de compresión gzip en Cloud Run. *(90 car)*
  * **B:** Configurar reglas de Object Lifecycle Management en Cloud Storage para cambiar de clase. *(91 car)* ← **Correcta**
  * **C:** Utilizar Cloud Storage Archive desde el día 1 con tiempos de recuperación de milisegundos. *(93 car)*
  * **D:** Migrar los datos antiguos a instancias Cloud SQL con particionado mensual en discos HDD. *(91 car)*
* **Métricas de Longitud:** Rango: 90–93 caracteres (Diferencia: 3.2%).
* **Por qué funciona:** C es una opción tentadora pero penaliza económicamente lecturas en los primeros 30 días. A y D son opciones técnicas existentes pero no óptimas. B es la decisión arquitectónica exacta.

---

### Ejemplo 3 (ACE) — `ACE-D1-002`

#### ❌ Versión MALA (Actual en el banco)
* **Escenario:** A software engineering team needs to run automated database migration scripts from their local machines against Cloud SQL in the staging project. Corporate security policy strictly forbids the generation and download of static Service Account JSON keys to engineer laptops. You need to enable developers to execute the scripts securely.
* **Opciones:**
  * **A:** Assign developers the roles/iam.serviceAccountUser role at the project level and instruct them to export GOOGLE_APPLICATION_CREDENTIALS. *(136 car)*
  * **B:** Create a service account with Cloud SQL Client role, grant developers roles/iam.serviceAccountTokenCreator on that service account, and instruct them to use gcloud with --impersonate-service-account. *(199 car)* ← **Correcta**
  * **C:** Generate short-lived JSON keys using gcloud iam service-accounts keys create and configure a cron script to delete them every 24 hours. *(135 car)*
  * **D:** Grant developers the roles/cloudsql.admin role directly on their user accounts in the staging project. *(102 car)*
* **Diagnóstico del Fallo:**
  * La opción B es la única que describe tres acciones en secuencia y tiene 199 caracteres frente a 102 de D.

#### ✅ Versión BUENA (Reescrita)
* **Escenario:** A development team needs to run local migration scripts against Cloud SQL without downloading static Service Account JSON keys to their laptops. What should you configure?
* **Opciones:**
  * **A:** Grant developers `roles/iam.serviceAccountUser` and export static credentials locally. *(88 car)*
  * **B:** Grant developers `roles/iam.serviceAccountTokenCreator` to use service account impersonation. *(94 car)* ← **Correcta**
  * **C:** Grant developers `roles/cloudsql.admin` directly on their user accounts in the staging project. *(96 car)*
  * **D:** Generate short-lived keys with `gcloud iam service-accounts keys create` via scheduled script. *(95 car)*
* **Métricas de Longitud:** Rango: 88–96 caracteres (Diferencia: 8.3%).
* **Por qué funciona:** Las cuatro son configuraciones reales de IAM. A y D fallan por violar la política de seguridad o el rol asignado. C viola mínimo privilegio. B resuelve el requisito exacto.

---

### Ejemplo 4 (ACE) — `ACE-D3-005`

#### ❌ Versión MALA (Actual en el banco)
* **Escenario:** You are deploying a production MySQL 8.0 instance on Cloud SQL in region `europe-west3`. The database must have High Availability (regional failover standby), 4 vCPUs, 16 GB RAM, SSD storage, and daily automated backups starting at 03:00 UTC with point-in-time recovery. Which command accomplishes this?
* **Opciones:**
  * **A:** gcloud compute instances create prod-mysql-db --image-family=mysql-8 *(68 car)*
  * **B:** gcloud sql instances create prod-mysql-db --database-version=MYSQL_8_0 --tier=db-custom-4-16384 --region=europe-west3 --availability-type=REGIONAL --backup-start-time=03:00 --enable-point-in-time-recovery --storage-type=SSD *(223 car)* ← **Correcta** (3,2× la más corta)
  * **C:** gcloud spanner instances create prod-mysql-db --config=regional-europe-west3 *(76 car)*
  * **D:** gcloud sql instances create prod-mysql-db --database-version=MYSQL_8_0 --tier=db-n1-standard-1 --availability-type=ZONAL *(120 car)*
* **Diagnóstico del Fallo:**
  * La opción B es la única con todos los flags completos y mide más del triple que A o C.

#### ✅ Versión BUENA (Reescrita)
* **Escenario:** You need to deploy a production Cloud SQL for MySQL instance in `europe-west3` with regional standby failover, 4 vCPUs, 16 GB RAM, SSD, and point-in-time recovery. Which command should you run?
* **Opciones:**
  * **A:** `gcloud sql instances create prod-db --tier=db-custom-4-16384 --availability-type=REGIONAL --enable-bin-log` *(108 car)*
  * **B:** `gcloud sql instances create prod-db --tier=db-custom-4-16384 --availability-type=REGIONAL --enable-point-in-time-recovery` *(124 car)* ← **Correcta**
  * **C:** `gcloud sql instances create prod-db --tier=db-n1-standard-4 --availability-type=ZONAL --enable-point-in-time-recovery` *(117 car)*
  * **D:** `gcloud sql instances create prod-db --tier=db-custom-4-16384 --availability-type=ZONAL --replica-type=READ` *(108 car)*
* **Métricas de Longitud:** Rango: 108–124 caracteres (Diferencia: 12.9%).
* **Por qué funciona:** Todas usan comandos reales de `gcloud sql instances create`. A usa un flag legacy (`--enable-bin-log`), C usa `ZONAL` y tier descontinuado, D configura réplica zonal. B tiene los flags canónicos vigentes.

---

### Ejemplo 5 (PCA) — `PCA-D5-024`

#### ❌ Versión MALA (Actual en el banco)
* **Escenario:** An enterprise requires high availability for its Cloud SQL for PostgreSQL database. If the primary zone (us-central1-a) experiences a hardware or power failure, the database must automatically fail over to a standby instance in us-central1-b within 60 seconds, retaining the exact same IP address and synchronous data state (RPO = 0). What configuration achieves this?
* **Opciones:**
  * **A:** Provision a Zonal instance with daily backups. *(46 car)*
  * **B:** Create an asynchronous read replica in us-central1-b and manually promote it during outages. *(92 car)*
  * **C:** Configure the Cloud SQL instance with availability_type = 'REGIONAL' (High Availability), which provisions a primary VM in zone A and a synchronous standby VM in zone B with persistent disk network-level replication and automated sub-minute failover. *(250 car)* ← **Correcta** (5,4× la más corta)
  * **D:** Run two separate database servers with custom bash scripts. *(59 car)*
* **Diagnóstico del Fallo:**
  * La opción C contiene la definición completa del servicio, la arquitectura interna y la confirmación de cumplimiento de SLA.

#### ✅ Versión BUENA (Reescrita)
* **Escenario:** An enterprise requires high availability for its Cloud SQL for PostgreSQL database. If the primary zone fails, the database must automatically fail over to a standby instance in another zone within 60 seconds with RPO = 0 and static IP retention. What configuration achieves this?
* **Opciones:**
  * **A:** Provision automatic daily backups with point-in-time recovery in us-central1. *(76 car)*
  * **B:** Create an asynchronous read replica in us-central1-b and promote it on failure. *(82 car)*
  * **C:** Configure the instance with `availability_type = REGIONAL` for synchronous standby. *(85 car)* ← **Correcta**
  * **D:** Deploy two zonal instances behind an Internal Load Balancer with health checks. *(81 car)*
* **Métricas de Longitud:** Rango: 76–85 caracteres (Diferencia: 10.5%).
* **Por qué funciona:** Opciones A, B, C y D representan arquitecturas comunes en bases de datos. A no da RTO < 60s ni RPO = 0. B requiere intervención manual y es asíncrona. D es inválida para Cloud SQL. C es la configuración nativa.

---

### Ejemplo 6 (PCA) — `PCA-D1-002`

#### ❌ Versión MALA (Actual en el banco)
* **Escenario:** Mountkirk Games requires a globally consistent database to store user profiles, inventories, and real-money in-game virtual currency transactions. The system must support horizontal scaling to millions of daily active users, provide 99.999% multi-region availability, and prevent duplicate item spending with strict serializable ACID transactions across North America, Europe, and Asia. Which storage architecture meets these requirements?
* **Opciones:**
  * **A:** Firestore in Datastore mode configured with optimistic offline replication. *(75 car)*
  * **B:** Cloud Spanner specified as a Multi-Region Instance (e.g. nam-eur-asia1) with regional read-write leaders and strict serializable ACID transactions. *(147 car)* ← **Correcta** (casi el doble que las demás)
  * **C:** Cloud SQL for MySQL with cross-region asynchronous read replicas in Europe and Asia. *(84 car)*
  * **D:** Cloud Bigtable with multi-cluster routing and eventual consistency across regions. *(82 car)*
* **Diagnóstico del Fallo:**
  * La opción B detalla la topología de replicación, la configuración y el modo de transacción, mientras que las otras son simples nombres de productos.

#### ✅ Versión BUENA (Reescrita)
* **Escenario:** An online gaming company requires a globally consistent database for in-game purchases and player inventories. The system must scale horizontally, provide 99.999% multi-region SLA, and enforce strict serializable ACID transactions across three continents. Which database architecture should you select?
* **Opciones:**
  * **A:** Firestore in Native mode with cross-region multi-master synchronization. *(74 car)*
  * **B:** Cloud Spanner configured as a multi-region instance across continents. *(72 car)* ← **Correcta**
  * **C:** Cloud SQL with cross-region asynchronous read replicas in Europe and Asia. *(75 car)*
  * **D:** Cloud Bigtable with multi-cluster routing and single-row transaction locks. *(76 car)*
* **Métricas de Longitud:** Rango: 72–76 caracteres (Diferencia: 5.2%).
* **Por qué funciona:** Todas las opciones nombran bases de datos administradas de Google Cloud con configuraciones avanzadas. A y D no ofrecen transacciones serializables globales multi-región. C no admite escrituras multi-regionales distribuidas. B es la única que cumple 99.999% SLA y consistencia externa global.
