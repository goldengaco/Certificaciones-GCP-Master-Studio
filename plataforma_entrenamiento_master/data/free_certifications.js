/**
 * Database of Curated Free Certifications, Badges, Free Labs, and Live Cloud News.
 * Sources: Free-Certifications.com, Cloud Study Network, Google Cloud Innovators, Official Providers.
 */
window.GCP_FREE_RESOURCES = {
  news: [
    {
      id: "NEWS-2026-01",
      title: "Google Cloud Innovators Plus: Vouchers y Laboratorios Ilimitados",
      date: "Agosto 2026",
      badge: "Google Cloud Oficial",
      type: "Voucher / Labs",
      summary: "El programa Google Cloud Innovators Plus incluye $500 en créditos de Google Cloud, acceso completo a Google Cloud Skills Boost y un voucher para un examen de certificación oficial.",
      link: "https://cloud.google.com/innovators",
      isFree: false,
      tag: "Voucher Oficial"
    },
    {
      id: "NEWS-2026-02",
      title: "Databricks: Certificaciones Fundamentales de IA Generativa Gratuitas",
      date: "Agosto 2026",
      badge: "Databricks",
      type: "Certificación 100% Free",
      summary: "Databricks mantiene abierto el acceso gratuito al curso y examen con badge oficial 'Generative AI Fundamentals' con acreditación verificable en LinkedIn.",
      link: "https://www.databricks.com/resources/learn/training/generative-ai-fundamentals",
      isFree: true,
      tag: "100% Gratis"
    },
    {
      id: "NEWS-2026-03",
      title: "Oracle Cloud Infrastructure (OCI): Examen Foundations 2026 Gratuito",
      date: "Agosto 2026",
      badge: "Oracle Cloud",
      type: "Certificación 100% Free",
      summary: "Oracle continúa ofreciendo cursos gratuitos y el examen oficial 'OCI Foundations Associate' sin costo para nuevos estudiantes en Oracle University.",
      link: "https://education.oracle.com/oracle-oci-certification#oracle-cloud-infrastructure",
      isFree: true,
      tag: "Examen Gratuito"
    },
    {
      id: "NEWS-2026-04",
      title: "Cisco Networking Essentials: Insignia Digital de Redes Oficial",
      date: "Agosto 2026",
      badge: "Cisco NetAcad",
      type: "Curso + Badge",
      summary: "Domina subredes, direccionamiento IP, protocolos de enrutamiento y seguridad de redes con el curso gratuito de Cisco Networking Academy, ideal para preparar el examen ACE de GCP.",
      link: "https://www.netacad.com/courses/networking/networking-essentials",
      isFree: true,
      tag: "100% Gratis"
    }
  ],

  courses: [
    {
      id: "FC-001",
      title: "Oracle Cloud Infrastructure (OCI) Foundations Associate",
      provider: "Oracle",
      technology: "OCI / Cloud Computing",
      category: "Cloud",
      expiration: "Ilimitado / Recurrente",
      badgeUrl: "https://education.oracle.com",
      link: "https://education.oracle.com/oracle-cloud-infrastructure-2023-foundations-associate/pexam_1Z0-1085-23",
      isFree: true,
      description: "Curso oficial completo y derecho a examen de certificación formal emitido por Oracle University. Valida conceptos IaaS, PaaS, seguridad y arquitectura en la nube.",
      relevanceGCP: "Excelente para entender conceptos universales de nube y comparar arquitecturas multi-cloud con GCP."
    },
    {
      id: "FC-002",
      title: "Generative AI Fundamentals Certificate",
      provider: "Databricks",
      technology: "GenAI / LLMs / Lakehouse",
      category: "AI / ML",
      expiration: "Ilimitado",
      badgeUrl: "https://www.databricks.com",
      link: "https://www.databricks.com/resources/learn/training/generative-ai-fundamentals",
      isFree: true,
      description: "Acreditación oficial sobre modelos de lenguaje grandes (LLMs), RAG (Retrieval-Augmented Generation), fine-tuning y consideraciones éticas de IA.",
      relevanceGCP: "Complemento directo para las certificaciones Generative AI Leader y Machine Learning Engineer de Google Cloud."
    },
    {
      id: "FC-003",
      title: "Postman API Fundamentals Student Expert",
      provider: "Postman Academy",
      technology: "REST APIs / Integration",
      category: "DevOps & APIs",
      expiration: "Ilimitado",
      badgeUrl: "https://academy.postman.com",
      link: "https://academy.postman.com/path/postman-api-fundamentals-student-expert",
      isFree: true,
      description: "Certificación práctica interactiva para diseñar, enviar peticiones, manejar autenticación OAuth2 y probar endpoints de APIs.",
      relevanceGCP: "Fundamental para interactuar con APIs REST de GCP (Cloud Run, Cloud Functions, IAM, Cloud Storage)."
    },
    {
      id: "FC-004",
      title: "Cisco Networking Essentials & Cybersecurity",
      provider: "Cisco NetAcad",
      technology: "TCP/IP / Subnetting / Firewalls",
      category: "Networking & Security",
      expiration: "Ilimitado",
      badgeUrl: "https://www.netacad.com",
      link: "https://www.netacad.com/courses/networking/networking-essentials",
      isFree: true,
      description: "Formación de referencia mundial sobre arquitectura de redes, tablas de enrutamiento, rangos CIDR, máscaras de subred y defensas perimetrales.",
      relevanceGCP: "Cubre el 100% de las bases de redes requeridas para el dominio de VPC en Associate Cloud Engineer y Network Engineer."
    },
    {
      id: "FC-005",
      title: "Certified Calico Operator (Kubernetes Networking)",
      provider: "Tigera Academy",
      technology: "Kubernetes / CNI / Network Policies",
      category: "Kubernetes",
      expiration: "Ilimitado",
      badgeUrl: "https://academy.tigera.io",
      link: "https://academy.tigera.io/course/certified-calico-operator-level-1/",
      isFree: true,
      description: "Certificación técnica en seguridad de red y políticas de red en pods para clústeres Kubernetes con examen práctico incluido.",
      relevanceGCP: "Crucial para desplegar y proteger cargas de trabajo en Google Kubernetes Engine (GKE)."
    },
    {
      id: "FC-006",
      title: "GitLab Certified Associate Path & Badges",
      provider: "GitLab",
      technology: "CI/CD / GitOps / DevSecOps",
      category: "DevOps & APIs",
      expiration: "Ilimitado",
      badgeUrl: "https://about.gitlab.com",
      link: "https://about.gitlab.com/learn/",
      isFree: true,
      description: "Rutas oficiales de formación en integración continua, despliegue continuo y control de versiones colaborativo.",
      relevanceGCP: "Sinergia con Cloud Build, Artifact Registry y Cloud Deploy en GCP."
    },
    {
      id: "FC-007",
      title: "Google Cloud Skills Boost: Rutas Gratuitas de Laboratorios",
      provider: "Google Cloud",
      technology: "GCP Console / gcloud CLI",
      category: "Cloud",
      expiration: "Ilimitado",
      badgeUrl: "https://www.cloudskillsboost.google",
      link: "https://www.cloudskillsboost.google/catalog?format%5B%5D=course&price%5B%5D=free",
      isFree: true,
      description: "Laboratorios prácticos en entornos reales de GCP con consolas temporales provistas por Google a costo cero.",
      relevanceGCP: "Práctica obligatoria de comandos para consolidar el estudio de las preguntas de la plataforma."
    },
    {
      id: "FC-008",
      title: "Redis University: Certified Redis Professional & NoSQL",
      provider: "Redis",
      technology: "In-Memory NoSQL / Caching",
      category: "Databases",
      expiration: "Ilimitado",
      badgeUrl: "https://university.redis.com",
      link: "https://university.redis.com/certification/",
      isFree: true,
      description: "Cursos y exámenes sobre estructuras de datos en memoria, clustering, alta disponibilidad y latencia sub-milisegundo.",
      relevanceGCP: "Dominio directo de Cloud Memorystore for Redis en arquitecturas de alta concurrencia (como en el Caso de Estudio Mountkirk Games de PCA)."
    },
    {
      id: "FC-009",
      title: "MongoDB Certified Developer Associate Preparation",
      provider: "MongoDB University",
      technology: "Document NoSQL / Big Data",
      category: "Databases",
      expiration: "Ilimitado",
      badgeUrl: "https://university.mongodb.com",
      link: "https://university.mongodb.com/courses/catalog",
      isFree: true,
      description: "Entrenamiento oficial gratuito en modelado de documentos JSON/BSON, índices, sharding y agregaciones complejas.",
      relevanceGCP: "Conceptos equivalentes evaluados en Firestore y Bigtable."
    },
    {
      id: "FC-010",
      title: "ISC2: 1 Million Certified in Cybersecurity (CC Free)",
      provider: "ISC2",
      technology: "Cybersecurity / Access Control / Security Operations",
      category: "Networking & Security",
      expiration: "Hasta completar 1 millón",
      badgeUrl: "https://www.isc2.org",
      link: "https://www.isc2.org/landing/1mcc",
      isFree: true,
      description: "Capacitación oficial gratuita y voucher de examen sin costo para obtener la certificación internacional 'Certified in Cybersecurity (CC)' de ISC2.",
      relevanceGCP: "El estándar de oro en fundamentos de seguridad para roles de Cloud Security Engineer."
    }
  ]
};
