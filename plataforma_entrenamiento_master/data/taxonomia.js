/**
 * taxonomia.js — Taxonomía Oficial de Certificaciones Google Cloud
 * 
 * Fuente única de verdad para secciones, subsecciones, pesos oficiales y
 * case studies vigentes de Google Cloud (CDL, ACE, PCA).
 * 
 * Verificado contra las guías oficiales de Google el: 2026-08-26
 * Dual Runtime Compatibility: Browser (window.GCP_TAXONOMIA) y Node.js (module.exports).
 */
(function (global) {
  'use strict';

  const GCP_TAXONOMIA = {
    version: '1.0.0',
    verificadoEl: '2026-08-26',
    fuentes: {
      cdl: 'https://services.google.com/fh/files/misc/cloud_digital_leader_exam_guide_english.pdf',
      ace: 'https://cloud.google.com/learn/certification/guides/cloud-engineer',
      pca: 'https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf'
    },
    cdl: {
      id: 'cdl',
      nombre: 'Cloud Digital Leader',
      duracionMinutos: 90,
      preguntasTotal: 300,
      secciones: {
        'CDL-1': {
          nombre: 'Digital Transformation with Google Cloud',
          peso: 18,
          preguntas: 54,
          subsecciones: {
            'CDL-1.1': { nombre: 'Explain why and how the cloud is revolutionizing businesses', peso: 9, preguntas: 27 },
            'CDL-1.2': { nombre: 'Describe fundamental cloud concepts', peso: 9, preguntas: 27 }
          }
        },
        'CDL-2': {
          nombre: 'Exploring Data Transformation with Google Cloud',
          peso: 18,
          preguntas: 54,
          subsecciones: {
            'CDL-2.1': { nombre: 'Describe the intrinsic role that data plays in digital transformation', peso: 6, preguntas: 18 },
            'CDL-2.2': { nombre: 'Determine which data management products apply to which business use cases', peso: 6, preguntas: 18 },
            'CDL-2.3': { nombre: 'Discuss how smart analytics, BI tools and streaming analytics add value', peso: 6, preguntas: 18 }
          }
        },
        'CDL-3': {
          nombre: 'Innovating with Google Cloud Artificial Intelligence',
          peso: 18,
          preguntas: 54,
          subsecciones: {
            'CDL-3.1': { nombre: 'Describe fundamental AI and ML concepts and how they create business value', peso: 9, preguntas: 27 },
            'CDL-3.2': { nombre: "Explain how Google Cloud's AI offerings can create business value", peso: 9, preguntas: 27 }
          }
        },
        'CDL-4': {
          nombre: 'Modernize Infrastructure and Applications with Google Cloud',
          peso: 18,
          preguntas: 54,
          subsecciones: {
            'CDL-4.1': { nombre: 'Describe how Google Cloud helps organizations transition to the cloud', peso: 6, preguntas: 18 },
            'CDL-4.2': { nombre: 'Describe functionality, use cases and value of Google Cloud infrastructure offerings', peso: 6, preguntas: 18 },
            'CDL-4.3': { nombre: 'Describe the business value of APIs', peso: 6, preguntas: 18 }
          }
        },
        'CDL-5': {
          nombre: 'Trust and Security with Google Cloud',
          peso: 18,
          preguntas: 54,
          subsecciones: {
            'CDL-5.1': { nombre: 'Describe fundamental cloud security concepts', peso: 9, preguntas: 27 },
            'CDL-5.2': { nombre: "Describe the business value of Google's defense-in-depth security approach", peso: 9, preguntas: 27 }
          }
        },
        'CDL-6': {
          nombre: 'Scaling with Google Cloud Operations',
          peso: 10,
          preguntas: 30,
          subsecciones: {
            'CDL-6.1': { nombre: 'Recognize how Google Cloud supports cost control', peso: 5, preguntas: 15 },
            'CDL-6.2': { nombre: 'Describe modern operations, reliability and resilience in the cloud', peso: 5, preguntas: 15 }
          }
        }
      }
    },
    ace: {
      id: 'ace',
      nombre: 'Associate Cloud Engineer',
      duracionMinutos: 120,
      preguntasTotal: 300,
      secciones: {
        'ACE-1': {
          nombre: 'Setting up a cloud solution environment',
          peso: 20,
          preguntas: 60,
          subsecciones: {
            'ACE-1.1': { nombre: 'Setting up cloud projects and accounts', peso: 10, preguntas: 30 },
            'ACE-1.2': { nombre: 'Managing billing configuration', peso: 10, preguntas: 30 }
          }
        },
        'ACE-2': {
          nombre: 'Planning and configuring a cloud solution',
          peso: 17.5,
          preguntas: 53,
          subsecciones: {
            'ACE-2.1': { nombre: 'Planning and configuring compute resources', peso: 6, preguntas: 18 },
            'ACE-2.2': { nombre: 'Planning and configuring data storage options', peso: 6, preguntas: 18 },
            'ACE-2.3': { nombre: 'Planning and configuring network resources', peso: 5.5, preguntas: 17 }
          }
        },
        'ACE-3': {
          nombre: 'Deploying and implementing a cloud solution',
          peso: 25,
          preguntas: 75,
          subsecciones: {
            'ACE-3.1': { nombre: 'Deploying and implementing Compute Engine resources', peso: 5.0, preguntas: 15 },
            'ACE-3.2': { nombre: 'Deploying and implementing Google Kubernetes Engine resources', peso: 5.0, preguntas: 15 },
            'ACE-3.3': { nombre: 'Deploying and implementing Cloud Run and Cloud Functions resources', peso: 4.17, preguntas: 12 },
            'ACE-3.4': { nombre: 'Deploying and implementing data solutions', peso: 4.17, preguntas: 13 },
            'ACE-3.5': { nombre: 'Deploying and implementing networking resources', peso: 3.33, preguntas: 10 },
            'ACE-3.6': { nombre: 'Implementing resources through infrastructure as code', peso: 3.33, preguntas: 10 }
          }
        },
        'ACE-4': {
          nombre: 'Ensuring successful operation of a cloud solution',
          peso: 20,
          preguntas: 60,
          subsecciones: {
            'ACE-4.1': { nombre: 'Managing Compute Engine resources', peso: 3.5, preguntas: 10 },
            'ACE-4.2': { nombre: 'Managing Google Kubernetes Engine resources', peso: 3.5, preguntas: 10 },
            'ACE-4.3': { nombre: 'Managing Cloud Run resources', peso: 3.0, preguntas: 10 },
            'ACE-4.4': { nombre: 'Managing storage and database solutions', peso: 3.5, preguntas: 10 },
            'ACE-4.5': { nombre: 'Managing networking resources', peso: 3.0, preguntas: 10 },
            'ACE-4.6': { nombre: 'Monitoring and logging', peso: 3.5, preguntas: 10 }
          }
        },
        'ACE-5': {
          nombre: 'Configuring access and security',
          peso: 17.5,
          preguntas: 52,
          subsecciones: {
            'ACE-5.1': { nombre: 'Managing Identity and Access Management (IAM)', peso: 9.0, preguntas: 27 },
            'ACE-5.2': { nombre: 'Managing service accounts', peso: 8.5, preguntas: 25 }
          }
        }
      }
    },
    pca: {
      id: 'pca',
      nombre: 'Professional Cloud Architect',
      duracionMinutos: 120,
      preguntasTotal: 300,
      caseStudiesVigentes: [
        'altostrat_media',
        'cymbal_retail',
        'ehr_healthcare',
        'knightmotives_automotive'
      ],
      secciones: {
        'PCA-1': {
          nombre: 'Designing and planning a cloud solution architecture',
          peso: 25,
          preguntas: 75,
          subsecciones: {
            'PCA-1.1': { nombre: 'Designing a cloud solution infrastructure that meets business requirements', peso: 5.0, preguntas: 15 },
            'PCA-1.2': { nombre: 'Designing a cloud solution infrastructure that meets technical requirements', peso: 5.0, preguntas: 15 },
            'PCA-1.3': { nombre: 'Designing network, storage, and compute resources', peso: 5.0, preguntas: 15 },
            'PCA-1.4': { nombre: 'Creating a migration plan (documents and architectural diagrams)', peso: 5.0, preguntas: 15 },
            'PCA-1.5': { nombre: 'Envisioning future solution improvements', peso: 5.0, preguntas: 15 }
          }
        },
        'PCA-2': {
          nombre: 'Managing and provisioning a cloud solution infrastructure',
          peso: 17.5,
          preguntas: 53,
          subsecciones: {
            'PCA-2.1': { nombre: 'Configuring network topologies', peso: 3.5, preguntas: 10 },
            'PCA-2.2': { nombre: 'Configuring individual storage systems', peso: 3.5, preguntas: 10 },
            'PCA-2.3': { nombre: 'Configuring compute systems', peso: 3.5, preguntas: 10 },
            'PCA-2.4': { nombre: 'Leveraging Gemini Enterprise Agent Platform for end-to-end ML workflows', peso: 3.5, preguntas: 11 },
            'PCA-2.5': { nombre: 'Configuring prebuilt solutions or APIs with Agent Platform', peso: 3.5, preguntas: 12 }
          }
        },
        'PCA-3': {
          nombre: 'Designing for security and compliance',
          peso: 17.5,
          preguntas: 52,
          subsecciones: {
            'PCA-3.1': { nombre: 'Designing for security', peso: 9.0, preguntas: 27 },
            'PCA-3.2': { nombre: 'Designing for compliance', peso: 8.5, preguntas: 25 }
          }
        },
        'PCA-4': {
          nombre: 'Analyzing and optimizing technical and business processes',
          peso: 15,
          preguntas: 45,
          subsecciones: {
            'PCA-4.1': { nombre: 'Analyzing and defining technical processes', peso: 7.5, preguntas: 23 },
            'PCA-4.2': { nombre: 'Analyzing and defining business processes', peso: 7.5, preguntas: 22 }
          }
        },
        'PCA-5': {
          nombre: 'Managing implementation',
          peso: 12.5,
          preguntas: 38,
          subsecciones: {
            'PCA-5.1': { nombre: 'Advising development and operation teams to ensure successful deployment', peso: 6.5, preguntas: 20 },
            'PCA-5.2': { nombre: 'Interacting with Google Cloud programmatically', peso: 6.0, preguntas: 18 }
          }
        },
        'PCA-6': {
          nombre: 'Ensuring solution and operations excellence',
          peso: 12.5,
          preguntas: 37,
          subsecciones: {
            'PCA-6.1': { nombre: 'Understanding operational excellence pillar principles', peso: 2.1, preguntas: 6 },
            'PCA-6.2': { nombre: 'Familiarity with Google Cloud Observability solutions', peso: 2.1, preguntas: 6 },
            'PCA-6.3': { nombre: 'Deployment and release management', peso: 2.1, preguntas: 6 },
            'PCA-6.4': { nombre: 'Assisting with support of deployed solutions', peso: 2.1, preguntas: 6 },
            'PCA-6.5': { nombre: 'Evaluating quality control measures', peso: 2.1, preguntas: 6 },
            'PCA-6.6': { nombre: 'Ensuring solution reliability in production', peso: 2.0, preguntas: 7 }
          }
        }
      }
    }
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCP_TAXONOMIA;
  }
  if (typeof global !== 'undefined') {
    global.GCP_TAXONOMIA = GCP_TAXONOMIA;
  }
})(typeof window !== 'undefined' ? window : global);
