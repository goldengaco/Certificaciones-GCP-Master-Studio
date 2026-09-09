/**
 * Google Cloud Certification Training Platform (Master Edition)
 * Authoritative Certification Manifest & Domain Taxonomy
 * 
 * Defines metadata, domain taxonomies, weights, duration, passing score,
 * and 6-block rotation specifications for CDL, ACE, and PCA exams.
 */

(function (global) {
  'use strict';

  const GCP_MANIFEST = {
    version: '2.0.0',
    lastUpdated: '2026-08-21',
    certifications: {
      cdl: {
        id: 'cdl',
        code: 'CDL',
        name: 'Cloud Digital Leader',
        fullName: 'Google Cloud Certified - Cloud Digital Leader',
        tagline: 'Liderazgo digital, conceptos fundamentales de nube y valor empresarial con Google Cloud',
        level: 'Foundational',
        icon: 'cloud',
        color: '#4285F4',
        accentColor: '#1A73E8',
        badge: 'CDL',
        durationMinutes: 90,
        questionCount: 50,
        totalPoolTarget: 300,
        passingPercent: 70,
        passingScore: 70,
        hasCaseStudies: false,
        caseStudies: [],
        blocks: ['BLOCK-1', 'BLOCK-2', 'BLOCK-3', 'BLOCK-4', 'BLOCK-5', 'BLOCK-6'],
        scoringModel: {
          standardPassingScore: 70,
          totalQuestionsInSession: 50,
          allOrNothingMultiSelect: true,
          domainWeightsEnforced: true
        },
        blockDistribution: {
          questionsPerBlock: 50,
          totalBlocks: 6,
          domainQuotaPerBlock: {
            'CDL-D1': 5,
            'CDL-D2': 15,
            'CDL-D3': 15,
            'CDL-D4': 15
          }
        },
        domains: {
          'CDL-D1': {
            id: 'CDL-D1',
            name: 'Digital Transformation with Google Cloud',
            shortName: 'Transformación Digital',
            weight: 10,
            targetQuestions: 30,
            questionsPerBlock: 5,
            description: 'Comprender los conceptos fundamentales de la nube, la transformación digital empresarial, la innovación impulsada por datos y los modelos de adopción de la nube (IaaS, PaaS, SaaS, multinube e híbrida).',
            subtopics: [
              'Fundamentos y terminología de computación en la nube',
              'Modelos de servicio en la nube (IaaS vs PaaS vs SaaS)',
              'Estrategias de despliegue: nube pública, privada, híbrida y multinube',
              'Diferenciadores clave y propuesta de valor de Google Cloud',
              'Patrones de transformación digital y cultura de innovación impulsada por datos',
              'FinOps y gestión del costo total de propiedad (TCO) vs CapEx y OpEx'
            ]
          },
          'CDL-D2': {
            id: 'CDL-D2',
            name: 'Innovating with Data and Google Cloud',
            shortName: 'Innovación con Datos & IA',
            weight: 30,
            targetQuestions: 90,
            questionsPerBlock: 15,
            description: 'Aprovechar el valor de los datos mediante soluciones de almacenamiento, bases de datos (relacionales vs NoSQL vs globales), analítica moderna (BigQuery, Looker) e Inteligencia Artificial / Machine Learning (Vertex AI, APIs preentrenadas).',
            subtopics: [
              'Almacenamiento de objetos: Cloud Storage (Standard, Nearline, Coldline, Archive)',
              'Bases de datos relacionales: Cloud SQL y Cloud Spanner (ACID global)',
              'Bases de datos NoSQL: Firestore (documental móvil/web) y Cloud Bigtable (alta escala/series temporales)',
              'Almacén de datos analítico moderno (Data Warehousing) con BigQuery',
              'Pipelines de datos e ingeniería de datos: Pub/Sub y Dataflow',
              'Visualización y Business Intelligence moderno con Looker y Looker Studio',
              'Soluciones de IA/ML en Google Cloud: Vertex AI, AutoML y APIs de IA preentrenadas (Vision, Natural Language, Translation, Speech-to-Text)'
            ]
          },
          'CDL-D3': {
            id: 'CDL-D3',
            name: 'Infrastructure and Application Modernization',
            shortName: 'Modernización de Infraestructura & Apps',
            weight: 30,
            targetQuestions: 90,
            questionsPerBlock: 15,
            description: 'Estrategias de modernización de infraestructura y aplicaciones heredadas: opciones de cómputo (Compute Engine, GKE, Cloud Run, Cloud Functions), gestión de APIs (Apigee), y migración a la nube.',
            subtopics: [
              'Opciones de cómputo en Google Cloud: Compute Engine (IaaS), Google Kubernetes Engine (GKE), Cloud Run y Cloud Functions (Serverless)',
              'Contenedores y orquestación de microservicios con Kubernetes y GKE',
              'Arquitecturas sin servidor (Serverless) y basadas en eventos con Cloud Run y Eventarc',
              'Estrategias de modernización de aplicaciones y migración (Rehost, Replatform, Refactor, Repurchase, Retire)',
              'Gestión del ciclo de vida de APIs empresariales con Apigee',
              'Infraestructura híbrida y multinube con Google Cloud Anthos / GKE Enterprise'
            ]
          },
          'CDL-D4': {
            id: 'CDL-D4',
            name: 'Google Cloud Security and Operations',
            shortName: 'Seguridad, Gobernanza & Operaciones',
            weight: 30,
            targetQuestions: 90,
            questionsPerBlock: 15,
            description: 'Modelo de responsabilidad compartida, gestión de identidades y accesos (IAM), cifrado de datos (en reposo, en tránsito, en uso), cumplimiento normativo, Cloud Monitoring, Cloud Logging y gestión financiera de la nube (FinOps).',
            subtopics: [
              'Modelo de responsabilidad compartida de seguridad en la nube',
              'Gestión de Identidades y Accesos (IAM): Principio de privilegio mínimo, roles y Service Accounts',
              'Cifrado y protección de datos: Google-managed keys, CMEK (Cloud KMS) y Cloud HSM',
              'Gobernanza de recursos: Organización, Carpetas, Proyectos y Políticas de Organización',
              'Observabilidad y operaciones con Google Cloud Operations Suite (Cloud Monitoring, Cloud Logging)',
              'Gestión de costos, presupuestos, alertas y optimización de facturación en Google Cloud'
            ]
          }
        }
      },

      ace: {
        id: 'ace',
        code: 'ACE',
        name: 'Associate Cloud Engineer',
        fullName: 'Google Cloud Certified - Associate Cloud Engineer',
        tagline: 'Despliegue táctico, administración de infraestructura, operaciones y seguridad con gcloud CLI y consola',
        level: 'Associate',
        icon: 'engineering',
        color: '#34A853',
        accentColor: '#1E8E3E',
        badge: 'ACE',
        durationMinutes: 120,
        questionCount: 50,
        totalPoolTarget: 300,
        passingPercent: 70,
        passingScore: 70,
        hasCaseStudies: false,
        caseStudies: [],
        blocks: ['BLOCK-1', 'BLOCK-2', 'BLOCK-3', 'BLOCK-4', 'BLOCK-5', 'BLOCK-6'],
        scoringModel: {
          standardPassingScore: 70,
          totalQuestionsInSession: 50,
          allOrNothingMultiSelect: true,
          domainWeightsEnforced: true
        },
        blockDistribution: {
          questionsPerBlock: 50,
          totalBlocks: 6,
          domainQuotaPerBlock: {
            'ACE-D1': 10,
            'ACE-D2': 9,
            'ACE-D3': 13,
            'ACE-D4': 10,
            'ACE-D5': 8
          }
        },
        domains: {
          'ACE-D1': {
            id: 'ACE-D1',
            name: 'Setting up a cloud solution environment',
            shortName: '1. Configuración del Entorno',
            weight: 20,
            targetQuestions: 60,
            questionsPerBlock: 10,
            description: 'Configurar la jerarquía de recursos (Organización, Carpetas, Proyectos), cuentas de facturación, cuotas, presupuestos, alertas y gestión de identidades en Cloud Identity y Google Cloud IAM.',
            subtopics: [
              'Configuración y administración de proyectos y jerarquía de recursos (gcloud projects create, get-ancestors)',
              'Administración de cuentas de facturación, exportación a BigQuery y presupuestos con alertas',
              'Instalación, configuración e inicialización de Google Cloud SDK (gcloud init, config set, auth)',
              'Gestión de usuarios y grupos en Cloud Identity y asignación de roles básicos/predefinidos'
            ]
          },
          'ACE-D2': {
            id: 'ACE-D2',
            name: 'Planning and configuring a cloud solution',
            shortName: '2. Planificación y Configuración',
            weight: 17.5,
            targetQuestions: 55,
            questionsPerBlock: 9,
            description: 'Planificación y dimensionamiento de productos de cómputo (Compute Engine, GKE, Cloud Run, App Engine), opciones de almacenamiento (Cloud Storage, Cloud SQL, Bigtable, Firestore) y topologías de red VPC.',
            subtopics: [
              'Planificación y estimación de costos con Google Cloud Pricing Calculator',
              'Selección y dimensionamiento de recursos de cómputo (vCPU, memoria, GPUs, Spot/Preemptible VMs)',
              'Selección de opciones de almacenamiento y bases de datos según requisitos de latencia, consistencia y tamaño',
              'Diseño y planificación de redes VPC (subredes en modo automático vs personalizado, rangos IP, firewall rules)'
            ]
          },
          'ACE-D3': {
            id: 'ACE-D3',
            name: 'Deploying and implementing a cloud solution',
            shortName: '3. Despliegue e Implementación',
            weight: 25,
            targetQuestions: 75,
            questionsPerBlock: 13,
            description: 'Despliegue y administración de instancias Compute Engine, grupos de instancias administrados (MIGs), clusters y cargas de trabajo GKE, Cloud Run, Cloud Functions, Cloud SQL, BigQuery y componentes de red VPC.',
            subtopics: [
              'Despliegue y gestión de instancias Compute Engine (instance templates, MIGs con autohealing y autoscaling)',
              'Despliegue y administración de clusters Google Kubernetes Engine (Standard vs Autopilot, kubectl, pods, deployments, services)',
              'Despliegue de aplicaciones sin servidor en Cloud Run (contenedores, revisiones, traffic splitting) y Cloud Functions',
              'Aprovisionamiento y configuración de almacenamiento: buckets Cloud Storage con lifecycle rules, Cloud SQL con HA y réplicas',
              'Implementación de redes VPC: VPC peering, Shared VPC, Cloud NAT, Cloud DNS y reglas de Cloud Firewall'
            ]
          },
          'ACE-D4': {
            id: 'ACE-D4',
            name: 'Ensuring successful operation of a cloud solution',
            shortName: '4. Operación y Mantenimiento',
            weight: 20,
            targetQuestions: 60,
            questionsPerBlock: 10,
            description: 'Monitoreo, logging y resolución de problemas con Cloud Operations Suite (Cloud Monitoring, Cloud Logging, Error Reporting, Cloud Trace), gestión de recursos y mantenimiento del ciclo de vida de soluciones.',
            subtopics: [
              'Configuración de Cloud Monitoring: métricas, dashboards, políticas de alertas y canales de notificación',
              'Gestión de Cloud Logging: consultas con Log Explorer, log sinks a BigQuery/Cloud Storage/Pub/Sub, métricas basadas en logs',
              'Mantenimiento y administración de instancias de cómputo (snapshots, backups programados, redimensionamiento, SSH metadata)',
              'Administración de clusters GKE: rolling upgrades, auto-repair de nodos, resize de node pools y kubectl describe/logs'
            ]
          },
          'ACE-D5': {
            id: 'ACE-D5',
            name: 'Configuring access and security',
            shortName: '5. Acceso y Seguridad',
            weight: 17.5,
            targetQuestions: 50,
            questionsPerBlock: 8,
            description: 'Administración de IAM (roles primitivos, predefinidos y personalizados), Service Accounts, Workload Identity, gestión de claves de acceso, Cloud KMS y auditoría con Cloud Audit Logs.',
            subtopics: [
              'Administración de políticas IAM y asignación granular de roles según el Principio de Privilegio Mínimo',
              'Gestión de Cuentas de Servicio (Service Accounts): creación, asignación de roles, impersonation y eliminación de JSON keys',
              'Configuración de Workload Identity para acceso seguro desde GKE hacia Google Cloud APIs sin claves estáticas',
              'Auditoría y cumplimiento: análisis de Cloud Audit Logs (Admin Activity vs Data Access) y Cloud KMS para CMEK'
            ]
          }
        }
      },

      pca: {
        id: 'pca',
        code: 'PCA',
        name: 'Professional Cloud Architect',
        fullName: 'Google Cloud Certified - Professional Cloud Architect',
        tagline: 'Arquitectura empresarial, resiliencia multi-región, Zero Trust, optimización FinOps y Casos de Estudio',
        level: 'Professional',
        icon: 'architecture',
        color: '#EA4335',
        accentColor: '#D93025',
        badge: 'PCA',
        durationMinutes: 120,
        questionCount: 50,
        totalPoolTarget: 300,
        passingPercent: 70,
        passingScore: 70,
        hasCaseStudies: true,
        caseStudies: ['mountkirk_games', 'terramearth', 'ehr_healthcare', 'helicopter_racing_league'],
        blocks: ['BLOCK-1', 'BLOCK-2', 'BLOCK-3', 'BLOCK-4', 'BLOCK-5', 'BLOCK-6'],
        scoringModel: {
          standardPassingScore: 70,
          totalQuestionsInSession: 50,
          allOrNothingMultiSelect: true,
          domainWeightsEnforced: true,
          caseStudyQuestionProportion: 0.36
        },
        blockDistribution: {
          questionsPerBlock: 50,
          totalBlocks: 6,
          domainQuotaPerBlock: {
            'PCA-D1': 12,
            'PCA-D2': 8,
            'PCA-D3': 10,
            'PCA-D4': 9,
            'PCA-D5': 5,
            'PCA-D6': 6
          }
        },
        domains: {
          'PCA-D1': {
            id: 'PCA-D1',
            name: 'Designing and planning a cloud solution architecture',
            shortName: '1. Diseño de Arquitectura Cloud',
            weight: 24,
            targetQuestions: 72,
            questionsPerBlock: 12,
            description: 'Diseño de arquitecturas multi-región, alta disponibilidad, continuidad comercial y recuperación ante desastres (DR RTO/RPO), elección de servicios de cómputo, almacenamiento y redes híbridas.',
            subtopics: [
              'Diseño de arquitecturas globales de alta disponibilidad y tolerancia a fallos',
              'Estrategias de Recuperación ante Desastres (Disaster Recovery): Cold, Warm, Hot standby, RTO y RPO',
              'Selección óptima de almacenamiento y bases de datos (Cloud Spanner vs Bigtable vs Cloud SQL vs Firestore vs GCS)',
              'Diseño de conectividad híbrida y multinube (Dedicated Interconnect, Partner Interconnect, Cloud VPN, Cloud Router, Direct Peering)',
              'Casos de estudio de arquitectura empresarial: Mountkirk Games, TerramEarth, EHR Healthcare, Helicopter Racing League'
            ]
          },
          'PCA-D2': {
            id: 'PCA-D2',
            name: 'Managing and provisioning a solution infrastructure',
            shortName: '2. Gestión y Aprovisionamiento',
            weight: 15,
            targetQuestions: 45,
            questionsPerBlock: 8,
            description: 'Aprovisionamiento de redes empresariales (Shared VPC, Cloud Interconnect, Cloud VPN, Cloud Router, Cloud NAT), infraestructura como código (Terraform, Config Connector) y almacenamiento.',
            subtopics: [
              'Topologías de red avanzadas: Shared VPC, VPC Network Peering, Private Service Connect (PSC) y Private Google Access',
              'Aprovisionamiento y automatización declarativa con Infraestructura como Código (Terraform, Cloud Foundation Toolkit)',
              'Gestión de infraestructura de cómputo empresarial (Compute Engine MIGs, GKE Enterprise, Private GKE Clusters)',
              'Configuración de almacenamiento a escala petabyte y gestión del ciclo de vida de datos'
            ]
          },
          'PCA-D3': {
            id: 'PCA-D3',
            name: 'Designing for security and compliance',
            shortName: '3. Seguridad y Cumplimiento',
            weight: 20,
            targetQuestions: 60,
            questionsPerBlock: 10,
            description: 'Diseño de arquitecturas Zero Trust (BeyondCorp), VPC Service Controls, Cloud KMS / CMEK / Cloud HSM, Cloud DLP (Sensitive Data Protection), Binary Authorization, Shielded VMs/GKE, y cumplimiento normativo (HIPAA, PCI-DSS, GDPR).',
            subtopics: [
              'Arquitectura de seguridad perimetral y prevención de exfiltración de datos con VPC Service Controls',
              'Gestión criptográfica empresarial: Cloud KMS, CMEK, Cloud HSM (FIPS 140-2 Nivel 3) y Customer-Supplied Keys (CSEK)',
              'Inspección, enmascaramiento y anonimización de datos sensibles (PHI/PII) con Cloud DLP',
              'Seguridad en la cadena de suministro de software con Binary Authorization, Artifact Registry y Shielded GKE Nodes',
              'Cumplimiento regulatorio y marcos normativos (HIPAA, HITECH, PCI-DSS, SOC 2, GDPR, FedRAMP)'
            ]
          },
          'PCA-D4': {
            id: 'PCA-D4',
            name: 'Analyzing and optimizing technical and business processes',
            shortName: '4. Optimización de Procesos & FinOps',
            weight: 18,
            targetQuestions: 54,
            questionsPerBlock: 9,
            description: 'Optimización de pipelines CI/CD (Cloud Build, Cloud Deploy), Site Reliability Engineering (SRE, SLOs, SLIs, SLAs, Error Budgets), gestión de incidentes y FinOps avanzado.',
            subtopics: [
              'Principios y prácticas de Site Reliability Engineering (SRE): definición de SLI, SLO, SLA y Error Budgets',
              'Estrategias de despliegue continuo: Canary Deployments, Blue/Green, Rolling Updates y A/B Testing',
              'Gestión de incidentes, análisis post-mortem sin culpas (blameless postmortems) y observabilidad profunda',
              'Optimización avanzada de costos (FinOps): CUDs (Committed Use Discounts), Spot VMs, BigQuery reservations y análisis de facturación'
            ]
          },
          'PCA-D5': {
            id: 'PCA-D5',
            name: 'Managing implementations of cloud architecture',
            shortName: '5. Implementación de Arquitectura',
            weight: 11,
            targetQuestions: 33,
            questionsPerBlock: 5,
            description: 'Implementación de patrones de mensajería asíncrona (Pub/Sub), stream processing (Dataflow / Apache Beam), microservicios (GKE/Agones/Cloud Run), y modernización de bases de datos heredadas.',
            subtopics: [
              'Patrones de mensajería empresarial e integración de eventos desacoplados con Cloud Pub/Sub y Eventarc',
              'Procesamiento de datos en tiempo real y por lotes con Cloud Dataflow (Apache Beam, windowing, triggers, watermarks)',
              'Arquitecturas de microservicios y comunicación entre servicios (gRPC, Cloud Service Mesh / Istio, Cloud Endpoints)',
              'Estrategias de migración y modernización de bases de datos heredadas hacia Cloud Spanner, Cloud SQL y Bigtable'
            ]
          },
          'PCA-D6': {
            id: 'PCA-D6',
            name: 'Ensuring reliability of a solution and operations',
            shortName: '6. Confiabilidad y Operaciones',
            weight: 12,
            targetQuestions: 36,
            questionsPerBlock: 6,
            description: 'Pruebas de caos, simulacros de failover, escalabilidad global, observabilidad avanzada (Cloud Monitoring/Logging/Trace/Profiler), y resiliencia de cargas de trabajo.',
            subtopics: [
              'Ingeniería de caos, pruebas de estrés y validación de resiliencia ante fallos zonales y regionales',
              'Observabilidad integral distribuida: Cloud Trace, Cloud Profiler, Cloud Monitoring y Cloud Logging',
              'Escalabilidad elástica global, balanceo de carga Anycast y mitigación de sobrecargas (circuit breakers, backoff exponencial)',
              'Estrategias de prueba de conmutación por error (Failover testing) y validación de planes de continuidad comercial'
            ]
          }
        }
      }
    },

    // Global helper methods for engine and UI
    helpers: {
      getCert(certId) {
        return GCP_MANIFEST.certifications[certId.toLowerCase()] || null;
      },
      getDomains(certId) {
        const cert = this.getCert(certId);
        return cert ? Object.values(cert.domains) : [];
      },
      getDomain(certId, domainId) {
        const cert = this.getCert(certId);
        return cert && cert.domains ? cert.domains[domainId] || null : null;
      },
      getDomainWeights(certId) {
        const cert = this.getCert(certId);
        if (!cert) return {};
        const weights = {};
        for (const [key, d] of Object.entries(cert.domains)) {
          weights[key] = d.weight;
        }
        return weights;
      },
      validateDomainWeightSum(certId) {
        const cert = this.getCert(certId);
        if (!cert) return false;
        const sum = Object.values(cert.domains).reduce((acc, d) => acc + d.weight, 0);
        return Math.abs(sum - 100.0) < 0.001;
      },
      getBlockDistribution(certId) {
        const cert = this.getCert(certId);
        return cert ? cert.blockDistribution : null;
      },
      hasCaseStudies(certId) {
        const cert = this.getCert(certId);
        return cert ? cert.hasCaseStudies : false;
      }
    }
  };

  // Attach to global window in browser, or export for Node.js test harness
  global.GCP_MANIFEST = GCP_MANIFEST;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCP_MANIFEST;
  }
})(typeof window !== 'undefined' ? window : global);

