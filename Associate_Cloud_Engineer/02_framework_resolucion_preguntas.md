# Framework de Razonamiento para Exámenes de GCP
## Metodología para Contestar Preguntas con Certeza

Los exámenes de Google Cloud no evalúan memorización de conceptos simples; evalúan **toma de decisiones bajo restricciones de negocio y mejores prácticas oficiales**.

---

## 🧭 Los 4 Principios Clave de Descarte de Google

### 1. El Principio del Menor Privilegio (*Least Privilege*)
- **Regla:** Si una opción otorga un rol primitivo (`Owner`, `Editor`, `Viewer`) cuando existe un rol predefinido específico (ej. `roles/storage.objectViewer` o `roles/compute.networkAdmin`), **la opción con rol primitivo casi siempre es incorrecta**.
- **Regla:** Las preguntas que involucren dar acceso a un grupo de personas prefieren siempre **Google Groups** en lugar de asignar roles a usuarios individuales uno a uno.

### 2. Mínimo Esfuerzo Operativo (*Minimal Operational Overhead*)
- **Regla:** Si el problema pide desplegar una app web y tienes opciones entre administrar VMs en Compute Engine vs **Cloud Run / GKE Autopilot**, la solución administrada suele ser la correcta si no se requieren configuraciones de kernel/SO específicas.
- **Regla:** Automatización sobre trabajo manual. Si te proponen crear scripts propios para rotar snapshots vs usar **Snapshot Schedules** de Compute Engine, la herramienta nativa gana.

### 3. Eficiencia de Costos (*Most Cost-Effective*)
- **Regla:** Para procesamiento batch que tolera interrupciones $\rightarrow$ **Spot VMs / Preemptible VMs**.
- **Regla:** Para almacenamiento de logs/respaldos a los que rara vez se accede $\rightarrow$ **Nearline / Coldline / Archive** + **Lifecycle Management**.
- **Regla:** Cuidado con BigQuery: `SELECT *` o escaneo innecesario es penalizado; se prefiere particionamiento y clustering.

### 4. Seguridad y Redes Nativas
- **Regla:** Las VMs en subredes privadas que necesitan acceder a APIs de Google (Cloud Storage, BigQuery) sin IP pública deben usar **Private Google Access**.
- **Regla:** Las VMs privadas que necesitan descargar paquetes de internet sin IP pública externa deben usar **Cloud NAT**.
- **Regla:** Nunca almacenar llaves de Service Accounts (`.json`) en el código o en la VM; usar la **Service Account adjunta a la instancia**.

---

## 🎯 Estructura de Análisis de Cada Pregunta en los Simuladores

Para cada pregunta que practiquemos, aplicaremos este esquema mental:

1. **Lectura del Escenario:** Identificar qué se pide (¿Seguridad? ¿Costos? ¿Velocidad? ¿Disponibilidad?).
2. **Identificación de la Restricción Crítica:** Localizar la frase clave (ej. *"minimal downtime"*, *"least operational effort"*, *"following Google-recommended practices"*).
3. **Descarte de Opciones:** Explicar exactamente por qué 3 opciones fallan (trampas comunes).
4. **Validación de la Opción Ganadora:** Justificar por qué cumple con la arquitectura de Google.
