# Banco de Preguntas — Associate Cloud Engineer (ACE)
## Preguntas de Práctica con Desglose Factual y Razonamiento

---

### 📝 Pregunta 1 (Dominio 1: Jerarquía de Recursos e IAM)
**Escenario:**
Tu organización tiene múltiples proyectos en Google Cloud. El equipo de auditoría de seguridad necesita revisar las políticas de IAM y los registros de auditoría de **todos los proyectos actuales y futuros** dentro de la organización. Necesitas otorgarles acceso siguiendo las mejores prácticas recomendadas por Google y aplicando el principio de menor privilegio. ¿Qué deberías hacer?

- **A)** Asignar el rol `roles/viewer` a la dirección de correo individual de cada auditor a nivel de cada proyecto existente.
- **B)** Crear un Google Group con todos los auditores y asignarle el rol `roles/iam.securityReviewer` a nivel de la Organización.
- **C)** Crear una Service Account para el equipo de auditores, asignarle el rol `roles/owner` a nivel de Organización y compartir la llave privada JSON con el equipo.
- **D)** Asignar el rol `roles/iam.securityAdmin` a un Google Group en cada proyecto de forma manual.

<details>
<summary><b>🔍 Ver Respuesta Correcta y Análisis</b></summary>

**Respuesta Correcta: B**

#### Justificación:
1. **Herencia de la Jerarquía:** Al asignar el rol a nivel de **Organización**, los permisos se heredan automáticamente a todas las carpetas, proyectos actuales y cualquier proyecto que se cree en el futuro, eliminando el esfuerzo operativo manual.
2. **Principio de Menor Privilegio:** `roles/iam.securityReviewer` es un rol predefinido específico de solo lectura para auditoría de seguridad y cumplimiento.
3. **Gestión de Identidades:** Google recomienda siempre asignar roles a **Google Groups** en lugar de usuarios individuales para facilitar el onboarding y offboarding.

#### ¿Por qué fallan las otras opciones?
- **A es incorrecta:** Los roles primitivos (`Viewer`) otorgan visibilidad excesiva a otros recursos y no cubren automáticamente proyectos futuros a menos que se configure a nivel superior; además, asignar permisos usuario por usuario es un antipatrón operacional.
- **C es incorrecta:** Las Service Accounts son para aplicaciones/cargas de trabajo, no para humanos. El rol `Owner` viola el menor privilegio y compartir llaves JSON es una vulnerabilidad crítica de seguridad.
- **D es incorrecta:** `SecurityAdmin` permite modificar políticas (no solo auditar/revisar) y configurarlo proyecto por proyecto no cubre proyectos futuros.
</details>

---

### 📝 Pregunta 2 (Dominio 2 y 3: Cómputo y Escalabilidad)
**Escenario:**
Estás diseñando una aplicación web crítica en Compute Engine que debe escalar automáticamente según la demanda de tráfico web. Debes asegurarte de que si una máquina virtual se congela o su servicio web falla, el sistema la reemplace automáticamente sin intervención humana. Además, los despliegues de nuevas versiones deben realizarse de forma gradual. ¿Qué combinación de servicios y configuraciones debes utilizar?

- **A)** Instancias independientes de Compute Engine detrás de un Unmanaged Instance Group con scripts de cron en cada VM.
- **B)** Un Managed Instance Group (MIG) regional con Autoescalado, un Application Health Check configurado para Autohealing, y una política de Rolling Update.
- **C)** Un clúster de Compute Engine con Cloud Functions que ejecute `gcloud compute instances reset` cuando la CPU llegue al 90%.
- **D)** Un Managed Instance Group (MIG) zonal sin Health Check, utilizando únicamente Cloud Monitoring Alerts manuales.

<details>
<summary><b>🔍 Ver Respuesta Correcta y Análisis</b></summary>

**Respuesta Correcta: B**

#### Justificación:
1. **Autohealing:** Los Managed Instance Groups (MIGs) permiten asociar un **Health Check** a nivel de aplicación. Si el endpoint de salud no responde, el plano de control de Compute Engine recrea automáticamente la instancia corrupta (Autohealing).
2. **Alta Disponibilidad:** Un MIG **regional** distribuye instancias en múltiples zonas dentro de una región.
3. **Despliegues Graduales:** La política de **Rolling Update** permite actualizar las instancias paso a paso (ej. 20% a la vez) asegurando que siempre haya capacidad disponible.

#### ¿Por qué fallan las otras opciones?
- **A es incorrecta:** Los *Unmanaged Instance Groups* no soportan autoescalado, autohealing ni rolling updates automáticos.
- **C es incorrecta:** Reiniciar VMs mediante scripts basados en CPU no detecta fallos de software a nivel de capa de aplicación ni ofrece tolerancia a desastres de zona.
- **D es incorrecta:** Un MIG zonal no protege contra la caída de una zona completa y sin Health Check no hay autohealing.
</details>

---

### 📝 Pregunta 3 (Dominio 2: Almacenamiento y Ciclo de Vida)
**Escenario:**
Tu empresa genera 5 TB de registros diarios de transacciones en Cloud Storage. Las regulaciones exigen:
1. Acceso frecuente e instantáneo a los datos durante los primeros 30 días.
2. Los datos deben conservarse durante 5 años por motivos de auditoría fiscal, pero rara vez se consultarán después de los primeros 90 días.
3. Debes minimizar los costos de almacenamiento sin realizar intervenciones manuales recurrentes.

¿Cuál es la solución recomendada por Google?

- **A)** Almacenar los datos en buckets con clase `Standard` y crear un script mensual con `gsutil mv` hacia `Coldline`.
- **B)** Almacenar en clase `Archive` desde el primer día y pagar las tarifas de recuperación en los primeros 30 días.
- **C)** Crear un bucket de clase `Standard` y configurar una regla de Ciclo de Vida (*Object Lifecycle Management*) para transicionar los objetos a `Nearline` a los 30 días, a `Coldline` o `Archive` a los 90 días, y eliminarlos tras 1825 días (5 años).
- **D)** Guardar todos los archivos en discos persistentes de Compute Engine de tipo Standard HDD y tomar snapshots diarios.

<details>
<summary><b>🔍 Ver Respuesta Correcta y Análisis</b></summary>

**Respuesta Correcta: C**

#### Justificación:
1. **Automatización:** *Object Lifecycle Management* aplica reglas automáticas basadas en la edad del objeto sin mantenimiento de scripts.
2. **Jerarquía de Costos:**
   - Días 1-30: **Standard** (acceso frecuente, costo de lectura cero).
   - Días 31-90: **Nearline** (acceso infrecuente, retención mínima de 30 días).
   - Días 90-1825: **Coldline / Archive** (costo de almacenamiento por GB ultra bajo, retención de largo plazo).
3. **Optimización de Costos:** Evita penalizaciones por borrado temprano y reduce drásticamente el costo de almacenamiento de terabytes a lo largo de 5 años.

#### ¿Por qué fallan las otras opciones?
- **A es incorrecta:** Los scripts manuales o por cron generan sobrecarga operativa y riesgo de fallo en comparación con las reglas nativas de ciclo de vida.
- **B es incorrecta:** Usar `Archive` para datos de lectura frecuente durante los primeros 30 días generará costos altísimos por tarifas de recuperación de datos (*Retrieval fees*).
- **D es incorrecta:** Los discos persistentes y snapshots son significativamente más caros que Cloud Storage para archivo masivo a 5 años.
</details>

---

### 📝 Pregunta 4 (Dominio 5: Redes y Seguridad)
**Escenario:**
Tienes un grupo de máquinas virtuales en Compute Engine ubicadas en una subred de VPC **privada** (sin direcciones IP públicas externas). Las aplicaciones que corren en estas VMs necesitan consultar y descargar modelos de datos alojados en **Google Cloud Storage** y **BigQuery**, pero la política de seguridad de la empresa prohíbe estrictamente dar acceso a internet a estas instancias. ¿Qué configuración debes aplicar?

- **A)** Habilitar **Private Google Access** en la subred de la VPC.
- **B)** Crear un Cloud NAT Gateway y asignarle una IP pública fija.
- **C)** Asignar una IP externa efímera a cada VM y configurar una regla de firewall de denegación general.
- **D)** Desplegar un servidor proxy Squid en una VM pública y enrutar todo el tráfico a través de él.

<details>
<summary><b>🔍 Ver Respuesta Correcta y Análisis</b></summary>

**Respuesta Correcta: A**

#### Justificación:
1. **Private Google Access (Acceso Privado a Google):** Permite a las VMs que solo tienen direcciones IP privadas internas comunicarse con las APIs y servicios de Google (Cloud Storage, BigQuery, Pub/Sub, etc.) a través de las IPs virtuales de Google, **sin salir a internet y sin requerir IP pública**.
2. Se habilita a nivel de la **subred**.

#### ¿Por qué fallan las otras opciones?
- **B es incorrecta:** *Cloud NAT* permite a VMs privadas salir a internet público (ej. descargar actualizaciones de paquetes de Linux), pero no es la solución nativa ni más segura para hablar con servicios internos de GCP.
- **C es incorrecta:** Asignar IPs públicas viola la restricción explícita de seguridad corporativa.
- **D es incorrecta:** Requiere administrar software de terceros (proxy), infraestructura adicional y añade un punto único de falla (alto esfuerzo operativo).
</details>

---

### 📝 Pregunta 5 (Dominio 1: CLI y Configuración de Proyectos)
**Escenario:**
Trabajas como consultor para tres clientes diferentes en Google Cloud (`cliente-prod-a`, `cliente-dev-b`, `cliente-corp-c`). Frecuentemente cambias entre cuentas de usuario, proyectos y regiones predeterminadas. Quieres evitar pasar manualmente los parámetros `--project` y `--account` en cada comando de `gcloud`. ¿Cuál es la forma oficial y recomendada de gestionar este flujo de trabajo?

- **A)** Crear variables de entorno de Linux en tu archivo `~/.bashrc` y reiniciar la terminal cada vez que cambias de cliente.
- **B)** Usar `gcloud config configurations create <nombre>` para crear un perfil por cada cliente, configurarlos con `gcloud config set` y alternar entre ellos con `gcloud config configurations activate <nombre>`.
- **C)** Ejecutar `gcloud init` desde cero cada vez que necesites ejecutar un comando para un cliente diferente.
- **D)** Modificar manualmente el archivo de credenciales `~/.config/gcloud/credentials.db` antes de cada ejecución.

<details>
<summary><b>🔍 Ver Respuesta Correcta y Análisis</b></summary>

**Respuesta Correcta: B**

#### Justificación:
1. **GCloud Named Configurations:** `gcloud` tiene soporte nativo para múltiples perfiles llamados configuraciones (`named configurations`).
2. Permite definir combinaciones de: cuenta de autenticación, proyecto predeterminado, región/zona predeterminada y proxy.
3. Cambiar de contexto toma un solo comando: `gcloud config configurations activate <nombre_perfil>`.

#### ¿Por qué fallan las otras opciones?
- **A es incorrecta:** Modificar archivos de inicio de terminal es propenso a errores y no escala limpiamente.
- **C es incorrecta:** `gcloud init` es interactivo y muy lento para alternar tareas diarias continuamente.
- **D es incorrecta:** Nunca se deben editar los archivos binarios internos de configuración de la CLI directamente.
</details>
