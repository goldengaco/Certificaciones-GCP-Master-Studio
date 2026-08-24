// Base de datos de preguntas oficiales y escenarios de examen para Google Cloud
window.CERT_DATABASE = {
  certifications: [
    {
      id: "ace",
      name: "Associate Cloud Engineer (ACE)",
      badge: "Nivel Associate",
      description: "Operación, despliegue y gestión de recursos en Google Cloud Platform.",
      domains: [
        "1. Configuración del Entorno e IAM",
        "2. Planificación y Configuración",
        "3. Despliegue e Implementación",
        "4. Operaciones y Monitoreo",
        "5. Seguridad y Redes"
      ]
    },
    {
      id: "pca",
      name: "Professional Cloud Architect (PCA)",
      badge: "Nivel Professional",
      description: "Diseño de soluciones empresariales escalables, seguras y de alta disponibilidad.",
      domains: [
        "1. Diseño de Arquitectura Cloud",
        "2. Gestión y Aprovisionamiento",
        "3. Seguridad y Cumplimiento",
        "4. Optimización de Procesos y Costos",
        "5. Confiabilidad y Calidad"
      ]
    }
  ],

  questions: [
    {
      id: "ACE-001",
      certId: "ace",
      domain: "1. Configuración del Entorno e IAM",
      title: "Auditoría de Proyectos en toda la Organización",
      scenario: "Tu organización tiene decenas de proyectos en Google Cloud y planea crear más en los próximos meses. El equipo de auditoría de seguridad necesita revisar las políticas de IAM y los registros de auditoría de todos los proyectos actuales y futuros dentro de la organización. Necesitas otorgarles acceso siguiendo las mejores prácticas de Google y aplicando el principio de menor privilegio. ¿Qué debes hacer?",
      options: [
        { letter: "A", text: "Asignar el rol roles/viewer a la dirección de correo individual de cada auditor en cada proyecto existente." },
        { letter: "B", text: "Crear un Google Group con todos los auditores y asignarle el rol roles/iam.securityReviewer a nivel de la Organización." },
        { letter: "C", text: "Crear una Service Account para el equipo de auditores, asignarle el rol roles/owner a nivel de Organización y compartir la llave privada JSON." },
        { letter: "D", text: "Asignar el rol roles/iam.securityAdmin a un Google Group en cada proyecto de forma manual." }
      ],
      correct: "B",
      keywords: ["Auditoría continua", "Proyectos futuros", "Menor privilegio", "Google Groups"],
      explanation: "Al asignar el rol a nivel de Organización, los permisos se heredan automáticamente a todas las carpetas y proyectos actuales y futuros. El rol 'roles/iam.securityReviewer' es de solo lectura y específico para auditoría. Asignar roles a Google Groups facilita la administración.",
      distractors: {
        A: "Los roles primitivos (Viewer) otorgan visibilidad excesiva a otros servicios y no cubren automáticamente proyectos futuros.",
        C: "Las Service Accounts son para aplicaciones, no para humanos. El rol Owner viola el principio de menor privilegio y compartir llaves JSON es una vulnerabilidad crítica.",
        D: "SecurityAdmin permite modificar políticas (no solo auditar) y asignarlo proyecto por proyecto requiere mantenimiento manual continuo."
      },
      gcloudCommand: "gcloud organizations add-iam-policy-binding [ORGANIZATION_ID] --member='group:auditores@tuempresa.com' --role='roles/iam.securityReviewer'"
    },

    {
      id: "ACE-002",
      certId: "ace",
      domain: "3. Despliegue e Implementación",
      title: "Aplicación Web Serverless con Escalado a Cero",
      scenario: "Tu equipo de desarrollo construyó una aplicación empaquetada en un contenedor Docker. La aplicación tiene tráfico muy variable con picos impredecibles y largos periodos de inactividad nocturna. Requieres que la plataforma escale automáticamente a cero instancias cuando no haya tráfico para minimizar costos, sin necesidad de administrar servidores ni clústeres. ¿Cuál es el servicio recomendado?",
      options: [
        { letter: "A", text: "Google Kubernetes Engine (GKE) Standard Cluster con clúster autoscaler activado." },
        { letter: "B", text: "Compute Engine con un Managed Instance Group zonal y balanceador HTTP." },
        { letter: "C", text: "Cloud Run configurado con min-instances=0." },
        { letter: "D", text: "App Engine Flexible Environment con escalado automático." }
      ],
      correct: "C",
      keywords: ["Contenedores Docker", "Escalado a cero", "Cero gestión de infraestructura", "Cloud Run"],
      explanation: "Cloud Run es un entorno Serverless totalmente administrado para contenedores OCI/Docker. Permite escalar de forma instantánea según la demanda HTTP y reduce las instancias a 0 cuando no hay tráfico, facturando únicamente por el tiempo exacto de procesamiento por milisegundo.",
      distractors: {
        A: "GKE Standard requiere pagar por los nodos de cómputo subyacentes y mantener la infraestructura del clúster.",
        B: "Compute Engine requiere administrar el sistema operativo de las VMs y no escala a cero de forma instantánea ante peticiones web.",
        D: "App Engine Flexible siempre mantiene al menos 1 instancia activa de VM encendida (no escala a cero) y tarda minutos en iniciar nuevas instancias."
      },
      gcloudCommand: "gcloud run deploy mi-servicio --image gcr.io/mi-proyecto/mi-app:v1 --platform managed --min-instances 0 --allow-unauthenticated"
    },

    {
      id: "ACE-003",
      certId: "ace",
      domain: "5. Seguridad y Redes",
      title: "Autenticación de Compute Engine hacia Cloud Storage",
      scenario: "Tienes una aplicación ejecutándose en una máquina virtual de Compute Engine. La aplicación necesita leer y escribir archivos en un bucket específico de Cloud Storage ('gs://datos-transaccionales'). Siguiendo las mejores prácticas de seguridad de Google y el principio de menor privilegio, ¿cómo debes configurar la autenticación?",
      options: [
        { letter: "A", text: "Descargar una clave privada JSON de la Service Account predeterminada, guardarla en la VM y configurar GOOGLE_APPLICATION_CREDENTIALS." },
        { letter: "B", text: "Asignar a tu cuenta de usuario personal el rol roles/storage.admin y autenticar la VM usando gcloud auth login interactivo." },
        { letter: "C", text: "Crear una Service Account personalizada con el rol roles/storage.objectAdmin limitado al bucket necesario, y adjuntar esta Service Account a la VM." },
        { letter: "D", text: "Configurar el bucket de Cloud Storage con acceso público allUsers con roles/storage.objectViewer para evitar autenticación." }
      ],
      correct: "C",
      keywords: ["Service Account adjunta", "Sin llaves JSON", "Menor privilegio", "roles/storage.objectAdmin"],
      explanation: "Las VMs deben autenticarse ante otros servicios de GCP mediante Service Accounts adjuntas a la instancia (Identity Metadata Server). Esto elimina la necesidad de almacenar llaves privadas JSON en el disco y permite limitar los permisos estrictamente a lo que necesita la carga de trabajo.",
      distractors: {
        A: "Guardar llaves JSON en el sistema de archivos de la VM es un grave riesgo de seguridad si la máquina es vulnerada.",
        B: "Las cuentas de usuario personales no deben usarse para cargas de trabajo desatendidas en producción.",
        D: "Hacer público un bucket con datos transaccionales expone información confidencial a todo internet."
      },
      gcloudCommand: "gcloud compute instances create vm-app --service-account=sa-storage-writer@mi-proyecto.iam.gserviceaccount.com --scopes=cloud-platform"
    },

    {
      id: "ACE-004",
      certId: "ace",
      domain: "2. Planificación y Configuración",
      title: "Ciclo de Vida de Almacenamiento Masivo y Costos",
      scenario: "Tu empresa genera 10 TB de datos mensuales en Cloud Storage. Los archivos se consultan frecuentemente durante los primeros 30 días. Después de 30 días solo se consultan ocasionalmente (1 vez cada 2 meses), y después de 365 días deben conservarse por 7 años por cumplimiento legal sin borrarse, pero casi nunca se leerán. ¿Qué estrategia minimiza los costos sin gestión manual?",
      options: [
        { letter: "A", text: "Almacenar todo en clase Standard y programar una Cloud Function mensual que ejecute comandos gsutil mv." },
        { letter: "B", text: "Usar clase Archive desde el primer día para obtener la tarifa de almacenamiento más baja posible." },
        { letter: "C", text: "Crear el bucket en clase Standard y definir una regla de Object Lifecycle Management: transicionar a Nearline a los 30 días y a Archive a los 365 días." },
        { letter: "D", text: "Crear discos persistentes tipo Cold HDD en Compute Engine y montar NFS compartido." }
      ],
      correct: "C",
      keywords: ["Object Lifecycle Management", "Transición automática", "Standard -> Nearline -> Archive"],
      explanation: "Object Lifecycle Management automatiza la transición entre clases de almacenamiento: Standard (días 1-30, alta frecuencia), Nearline (días 31-365, acceso infrecuente) y Archive (>365 días, costo por GB mínimo para retención legal de largo plazo), eliminando intervenciones manuales.",
      distractors: {
        A: "Las Cloud Functions con scripts manuales agregan costo de ejecución y sobrecarga operativa frente a la función nativa del bucket.",
        B: "Usar Archive el primer mes generará penalizaciones y altos costos de recuperación de datos (Retrieval Fees) por el acceso frecuente inicial.",
        D: "Los discos persistentes y servidores NFS son exponencialmente más caros y difíciles de mantener que Cloud Storage."
      },
      gcloudCommand: "gcloud storage buckets update gs://mi-bucket --lifecycle-file=lifecycle-policy.json"
    },

    {
      id: "ACE-005",
      certId: "ace",
      domain: "5. Seguridad y Redes",
      title: "Conectividad Privada a APIs de Google sin Internet",
      scenario: "Tienes varias instancias de Compute Engine alojadas en una subred de VPC que no tiene direcciones IP públicas externas ni salida a internet. Las aplicaciones dentro de estas VMs necesitan comunicarse con BigQuery y Cloud Storage para procesamiento de datos. La política corporativa prohíbe que el tráfico salga a internet público. ¿Qué configuración debes realizar?",
      options: [
        { letter: "A", text: "Habilitar Private Google Access (Acceso Privado a Google) en la subred correspondiente." },
        { letter: "B", text: "Desplegar un Cloud NAT Gateway y asignarle una IP pública fija reservada." },
        { letter: "C", text: "Crear una regla de firewall de salida con destino 0.0.0.0/0 y prioridad 1000." },
        { letter: "D", text: "Asignar una dirección IP externa efímera a cada instancia de Compute Engine." }
      ],
      correct: "A",
      keywords: ["Private Google Access", "Subred privada", "Sin IP externa", "APIs de Google"],
      explanation: "Private Google Access permite que las instancias de VM con solo direcciones IP internas (privadas) alcancen las direcciones IP externas de las APIs y servicios de Google (como Storage y BigQuery) sin salir a internet público.",
      distractors: {
        A_wrong: "",
        B: "Cloud NAT permite salida hacia internet general para descargar actualizaciones, pero no es la solución nativa para el consumo de APIs internas de Google.",
        C: "Una regla de firewall no enruta tráfico a internet si la VM carece de IP pública o mecanismo de traducción NAT.",
        D: "Asignar IPs externas viola la restricción estricta de seguridad de la empresa."
      },
      gcloudCommand: "gcloud compute networks subnets update mi-subred --region=us-central1 --enable-private-ip-google-access"
    },

    {
      id: "ACE-006",
      certId: "ace",
      domain: "4. Operaciones y Monitoreo",
      title: "Recuperación Automática de VMs ante Fallos (Autohealing)",
      scenario: "Administras un clúster de servidores web en Compute Engine. Quieres asegurarte de que si el proceso del servidor web (Nginx) deja de responder en el puerto 80 en cualquier instancia, dicha instancia sea destruida y recreada automáticamente sin intervención del equipo de operaciones. ¿Cómo debes estructurar esta solución?",
      options: [
        { letter: "A", text: "Configurar un Unmanaged Instance Group y crear una alerta en Cloud Monitoring para que envíe un correo al administrador." },
        { letter: "B", text: "Crear un Managed Instance Group (MIG), definir un Health Check HTTP en el puerto 80 y asociarlo a la política de Autohealing del MIG." },
        { letter: "C", text: "Configurar un script en el cron de cada VM que ejecute 'sudo reboot' cuando la memoria RAM supere el 95%." },
        { letter: "D", text: "Crear una Cloud Function que consulte la API de Compute Engine cada 5 minutos y reinicie las VMs que tengan estado STOPPED." }
      ],
      correct: "B",
      keywords: ["Managed Instance Group (MIG)", "Autohealing", "Application Health Check", "Recreación automática"],
      explanation: "Los Managed Instance Groups (MIGs) soportan políticas de Autohealing basadas en Health Checks de aplicación. Si el Health Check falla reiteradamente (según los umbrales configurados), el plano de control de Compute Engine destruye la VM defectuosa y crea una nueva basada en el Instance Template.",
      distractors: {
        A: "Los Unmanaged Instance Groups no tienen capacidades de autohealing ni gestión automatizada del ciclo de vida.",
        C: "Un script de cron no detecta caídas de procesos específicos si el sistema operativo sigue en pie, y puede entrar en bucles de reinicio.",
        D: "Un proceso web colgado mantiene la VM en estado 'RUNNING', por lo que una función que busque 'STOPPED' no detectará la falla."
      },
      gcloudCommand: "gcloud compute instance-groups managed update mi-mig --health-check=http-health-check --initial-delay=300"
    },

    {
      id: "ACE-007",
      certId: "ace",
      domain: "1. Configuración del Entorno e IAM",
      title: "Gestión Eficiente de Múltiples Clientes en gcloud CLI",
      scenario: "Trabajas en una consultora y administras proyectos en Google Cloud para tres clientes distintos. Cada cliente tiene su propia cuenta de correo corporativo, región predeterminada y proyecto principal. Te resulta tedioso escribir los flags --project y --account en cada comando. ¿Cuál es la forma recomendada por Google para alternar entre entornos rápidamente?",
      options: [
        { letter: "A", text: "Crear variables de entorno en el archivo .bashrc y reiniciar la consola al cambiar de cliente." },
        { letter: "B", text: "Crear configuraciones con nombre usando 'gcloud config configurations create' y activarlas con 'gcloud config configurations activate'." },
        { letter: "C", text: "Ejecutar 'gcloud init' desde cero cada vez que cambias de tarea." },
        { letter: "D", text: "Abrir tres terminales diferentes y autenticarte con un usuario distinto en cada una modificando la base de datos interna de credenciales." }
      ],
      correct: "B",
      keywords: ["gcloud config configurations", "Named Configurations", "Cambio de perfil"],
      explanation: "Google Cloud CLI incluye soporte nativo para 'Named Configurations'. Permite almacenar conjuntos de propiedades (cuenta, proyecto por defecto, región/zona, compute/region) bajo un nombre descriptivo y activarlos con un solo comando.",
      distractors: {
        A: "Las variables de entorno son propensas a errores de sobreescritura y no aprovechan la gestión de credenciales de gcloud.",
        C: "gcloud init es un asistente interactivo pensado para la configuración inicial y resulta sumamente lento para el trabajo diario.",
        D: "Nunca se deben alterar manualmente los archivos internos de credenciales de gcloud."
      },
      gcloudCommand: "gcloud config configurations activate cliente-alpha"
    },

    {
      id: "ACE-008",
      certId: "ace",
      domain: "3. Despliegue e Implementación",
      title: "Despliegue de Aplicaciones en GKE con kubectl",
      scenario: "Has creado un nuevo clúster de Google Kubernetes Engine (GKE) en la región 'us-central1' llamado 'prod-cluster'. Necesitas configurar tu herramienta local 'kubectl' para poder desplegar manifiestos y gestionar los pods en este clúster. ¿Qué comando oficial debes ejecutar primero?",
      options: [
        { letter: "A", text: "gcloud compute ssh prod-cluster --zone=us-central1-a" },
        { letter: "B", text: "gcloud container clusters get-credentials prod-cluster --region=us-central1" },
        { letter: "C", text: "kubectl config set-cluster prod-cluster --server=https://console.cloud.google.com" },
        { letter: "D", text: "gcloud auth application-default login" }
      ],
      correct: "B",
      keywords: ["gcloud container clusters get-credentials", "kubeconfig", "kubectl", "GKE"],
      explanation: "El comando 'gcloud container clusters get-credentials' descarga los certificados de autenticación del clúster de GKE y actualiza automáticamente el archivo local ~/.kube/config para que kubectl pueda comunicarse con el API Server del clúster.",
      distractors: {
        A: "No se hace SSH directamente a los nodos para configurar kubectl local; el plano de control se administra mediante el API Server.",
        C: "kubectl set-cluster requiere parámetros técnicos manuales como certificados CA y endpoints IP que get-credentials resuelve automáticamente.",
        D: "Application-default login genera credenciales para bibliotecas de cliente de desarrollo, no configura el contexto de Kubernetes."
      },
      gcloudCommand: "gcloud container clusters get-credentials prod-cluster --region=us-central1"
    },

    {
      id: "ACE-009",
      certId: "ace",
      domain: "2. Planificación y Configuración",
      title: "Procesamiento Batch con Máximo Ahorro de Costos",
      scenario: "Tu empresa ejecuta trabajos nocturnos de análisis de imágenes por lotes (Batch processing). El proceso puede dividirse en miles de tareas pequeñas e independientes. Si una máquina virtual se apaga inesperadamente, el gestor de colas simplemente reasigna esa tarea a otra máquina sin pérdida de datos. Quieres minimizar al máximo el costo de cómputo en Compute Engine. ¿Qué tipo de instancia debes elegir?",
      options: [
        { letter: "A", text: "Instancias con Compromiso de Uso (Committed Use Discounts) a 3 años." },
        { letter: "B", text: "Instancias Spot (Spot VMs / Preemptible VMs)." },
        { letter: "C", text: "Instancias con GPUs dedicadas tipo A100." },
        { letter: "D", text: "Instancias de tipo de máquina con memoria optimizada (M2 Memory-Optimized)." }
      ],
      correct: "B",
      keywords: ["Batch processing", "Tolera interrupciones", "Spot VMs", "Ahorro de hasta 60-91%"],
      explanation: "Las Spot VMs (anteriormente Preemptible) ofrecen un descuento masivo (entre 60% y 91% comparado con On-Demand). Google puede reclamar la capacidad en cualquier momento con un aviso de 30 segundos, lo cual es ideal para cargas tolerantes a fallos como el procesamiento batch por lotes.",
      distractors: {
        A: "Committed Use Discounts requieren comprometerse a pagar 24/7 de forma continua por 1 o 3 años, lo cual no es óptimo para trabajos esporádicos nocturnos.",
        C: "Las GPUs A100 son de costo extremadamente elevado y solo se justifican para entrenamiento masivo de modelos de IA.",
        D: "Las instancias optimizadas para memoria son costosas y no están diseñadas específicamente para maximizar ahorro en tareas batch."
      },
      gcloudCommand: "gcloud compute instances create vm-batch --zone=us-central1-a --provisioning-model=SPOT"
    },

    {
      id: "ACE-010",
      certId: "ace",
      domain: "4. Operaciones y Monitoreo",
      title: "Exportación de Registros (Logs) para Análisis a Largo Plazo",
      scenario: "Tu departamento de cumplimiento exige que todos los registros de auditoría y acceso de red de Google Cloud se conserven durante 3 años y puedan consultarse mediante consultas SQL avanzadas para investigaciones forenses. Actualmente los logs solo se retienen el tiempo estándar en Cloud Logging. ¿Cuál es la arquitectura recomendada?",
      options: [
        { letter: "A", text: "Crear un Sink (Receptor) en Cloud Logging para exportar los logs a un conjunto de datos en BigQuery." },
        { letter: "B", text: "Escribir un script en Python que consulte la API de Cloud Logging cada hora y descargue archivos CSV a una máquina virtual." },
        { letter: "C", text: "Aumentar el periodo de retención predeterminado del bucket _Default de Cloud Logging a 3 años." },
        { letter: "D", text: "Exportar los logs a Cloud Pub/Sub y descartar los mensajes tras 7 días." }
      ],
      correct: "A",
      keywords: ["Log Sink", "BigQuery", "Consultas SQL", "Retención y análisis"],
      explanation: "Los Log Sinks (Receptores de registros) en Cloud Logging permiten enrutar registros en tiempo real hacia BigQuery. BigQuery permite almacenar volúmenes masivos de datos y ejecutar consultas SQL de alta velocidad para análisis forense y de auditoría.",
      distractors: {
        B: "Los scripts personalizados de descarga generan sobrecarga operativa, consumen cuotas de API y son propensos a caídas.",
        C: "Retener grandes volúmenes de logs en Cloud Logging por años puede ser más costoso que BigQuery y carece de la flexibilidad analítica relacional de BigQuery.",
        D: "Pub/Sub solo retiene mensajes hasta un máximo de 7 días, lo cual incumple el requisito de 3 años."
      },
      gcloudCommand: "gcloud logging sinks create mi-sink-bq bigquery.googleapis.com/projects/mi-proyecto/datasets/audit_logs --log-filter='resource.type=gce_instance'"
    }
  ]
};
