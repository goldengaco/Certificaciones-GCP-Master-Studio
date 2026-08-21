/**
 * Google Cloud Architecture Decision Trees & Cheat Sheets
 * Interactive enterprise tools for quick reference and decision making.
 */
window.GCP_ARCHITECTURE_TOOLS = {
  trees: {
    compute: {
      title: "Árbol de Decisión: Cómputo en Google Cloud",
      description: "Determina cuál es el servicio de cómputo óptimo según tus requerimientos de control, contenedores y escalabilidad.",
      nodes: [
        {
          question: "¿Requieres control total sobre el sistema operativo (SO), kernel, drivers o licencias legacy de Windows?",
          yes: { result: "Compute Engine (VMs)", note: "Usa Managed Instance Groups (MIGs) para autoescalado y autohealing.", icon: "dns" },
          no: {
            question: "¿Tu aplicación está empaquetada en un contenedor Docker/OCI?",
            yes: {
              question: "¿Requieres orquestación compleja de microservicios, soporte de protocolos no-HTTP (gRPC, TCP/UDP masivo) o malla de servicios (Service Mesh)?",
              yes: { result: "Google Kubernetes Engine (GKE)", note: "Recomendado GKE Autopilot para minimizar administración de nodos.", icon: "view_in_ar" },
              no: { result: "Cloud Run", note: "Serverless para contenedores. Escala a cero, cobra por milisegundo y no requiere administrar servidores.", icon: "directions_run" }
            },
            no: {
              question: "¿Es código ligero impulsado por eventos (webhooks, Pub/Sub, cambios en Cloud Storage)?",
              yes: { result: "Cloud Functions (2nd Gen)", note: "Basado en Cloud Run. Cero administración, ejecución orientada a eventos.", icon: "bolt" },
              no: { result: "App Engine (Standard / Flexible)", note: "PaaS clásico administrado por Google.", icon: "layers" }
            }
          }
        }
      ]
    },

    database: {
      title: "Árbol de Decisión: Bases de Datos en Google Cloud",
      description: "Elige la base de datos correcta evaluando modelo relacional (SQL) vs NoSQL, escala global y volumen.",
      nodes: [
        {
          question: "¿Tus datos requieren un esquema relacional con transacciones ACID y consultas SQL estrictas?",
          yes: {
            question: "¿Requieres escala horizontal global masiva (>10,000 QPS, multi-región, SLA 99.999% con consistencia estricta)?",
            yes: { result: "Cloud Spanner", note: "Base de datos relacional global distribuida con consistencia externa y cero downtime.", icon: "public" },
            no: { result: "Cloud SQL (o AlloyDB)", note: "MySQL, PostgreSQL, SQL Server totalmente administrados para cargas OLTP regionales.", icon: "storage" }
          },
          no: {
            question: "¿Es una carga de trabajo analítica masiva / Data Warehouse (consultas SQL sobre terabytes o petabytes)?",
            yes: { result: "BigQuery", note: "Data Warehouse serverless ultrarrápido con BigQuery ML y almacenamiento columnar.", icon: "analytics" },
            no: {
              question: "¿Requieres latencia sub-milisegundo (<1ms) para caché en memoria, colas o leaderboards?",
              yes: { result: "Cloud Memorystore (Redis / Memcached)", note: "Caché en memoria totalmente administrada para acelerar lecturas.", icon: "memory" },
              no: {
                question: "¿Es telemetría IoT, series de tiempo o millones de escrituras por segundo (>1 TB)?",
                yes: { result: "Cloud Bigtable", note: "NoSQL columnar de baja latencia (<10ms) diseñado para petabytes de datos en streaming.", icon: "grid_view" },
                no: { result: "Firestore", note: "NoSQL de documentos con sincronización en tiempo real y soporte offline para apps móviles/web.", icon: "local_fire_department" }
              }
            }
          }
        }
      ]
    },

    storage: {
      title: "Árbol de Decisión: Clases de Cloud Storage",
      description: "Optimiza los costos de almacenamiento según la frecuencia de acceso y la retención obligatoria.",
      classes: [
        { name: "Standard", minRetention: "0 días", frequency: "Frecuente (múltiples veces al día)", costPerGB: "$$$", retrievalFee: "Cero", bestFor: "Archivos web, videos en streaming, datos activos." },
        { name: "Nearline", minRetention: "30 días", frequency: "Infrecuente (1 vez al mes o menos)", costPerGB: "$$", retrievalFee: "Baja", bestFor: "Respaldos mensuales, reportes de cierre de mes." },
        { name: "Coldline", minRetention: "90 días", frequency: "Rara vez (1 vez cada 90 días o menos)", costPerGB: "$", retrievalFee: "Media", bestFor: "Respaldos de recuperación ante desastres (DR)." },
        { name: "Archive", minRetention: "365 días", frequency: "Casi nunca (1 vez cada varios años)", costPerGB: "¢ (mínimo)", retrievalFee: "Alta", bestFor: "Cumplimiento legal, auditoría fiscal, registros a 5-10 años." }
      ]
    },

    networking: {
      title: "Árbol de Decisión: Conectividad Híbrida a Google Cloud",
      description: "Selecciona el método de interconexión entre tu centro de datos on-premises y la VPC de GCP.",
      nodes: [
        {
          question: "¿Requieres ancho de banda masivo (10 Gbps a 100 Gbps), latencia ultra baja y conexión física dedicada sin pasar por internet público?",
          yes: { result: "Dedicated Interconnect", note: "Cable físico directo en un punto de presencia (PoP) de Google (SLA 99.99%).", icon: "cable" },
          no: {
            question: "¿Tu proveedor de servicios de red o colocación (Equinix, Megaport, etc.) ya tiene conexión con Google Cloud?",
            yes: { result: "Partner Interconnect", note: "Conectividad privada de 50 Mbps a 50 Gbps a través de un partner autorizado.", icon: "handshake" },
            no: { result: "Cloud VPN (HA VPN)", note: "Túneles IPsec seguros sobre internet público con 99.99% SLA (hasta 3 Gbps por túnel).", icon: "vpn_key" }
          }
        }
      ]
    }
  },

  cheatsheets: [
    {
      title: "Reglas de Oro de IAM (Security & Access)",
      points: [
        "NUNCA uses roles primitivos (Owner, Editor, Viewer) en entornos de producción.",
        "Asigna roles a Google Groups en lugar de a cuentas de correo individuales.",
        "Las VMs se autentican mediante Service Accounts adjuntas, NO mediante llaves JSON descargadas.",
        "Para que los desarrolladores ejecuten tareas temporales con permisos de Service Account, usa 'Service Account Token Creator' (Impersonation).",
        "El rol 'roles/iam.serviceAccountUser' permite a un usuario o servicio desplegar recursos ejecutándose como esa cuenta de servicio."
      ]
    },
    {
      title: "Reglas de Oro de Redes (VPC & Security)",
      points: [
        "Una VPC en Google Cloud es Global; las subredes son Regionales.",
        "Las VMs privadas acceden a APIs de Google (Storage, BigQuery) mediante 'Private Google Access' (sin salir a internet).",
        "Las VMs privadas acceden a internet general para descargar parches mediante 'Cloud NAT' (sin tener IP pública).",
        "Las reglas de firewall tienen prioridad del 0 (máxima) al 65535 (mínima). Si hay conflicto, la prioridad menor gana.",
        "Para compartir una VPC entre múltiples proyectos de la organización, se utiliza 'Shared VPC'."
      ]
    }
  ]
};
