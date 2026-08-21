/**
 * Google Cloud Certified - Cloud Digital Leader (CDL) Question Bank
 * Master Edition - 300 High-Fidelity Questions (6 Blocks x 50 Questions)
 * Adheres strictly to official CDL exam domains and question schema.
 */

const cdlQuestions = [
  {
    "id": "CDL-D1-001",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "FinOps: CapEx vs OpEx en la Nube",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Transición de Gastos de Capital (CapEx) a Gastos Operativos (OpEx)",
    "scenario": "Una empresa tradicional de servicios financieros desea migrar sus centros de datos locales a Google Cloud. El Director Financiero (CFO) solicita entender el cambio fundamental en la estructura de costos financieros que experimentará la organización. ¿Cómo describe Google Cloud este cambio en el modelo financiero?",
    "keywords": [
      "CapEx a OpEx",
      "Gastos de Capital",
      "Gastos Operativos",
      "Pago por uso",
      "Flexibilidad financiera"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cambio de un modelo de gastos de capital (CapEx) con grandes inversiones iniciales en hardware a un modelo de gastos operativos (OpEx) basado en el pago por consumo real de recursos.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cambio de un modelo de gastos operativos (OpEx) a un modelo de gastos de capital (CapEx) donde la empresa compra servidores virtuales de forma perpetua.",
        "isTrap": true,
        "trapType": "concept_inversion"
      },
      {
        "letter": "C",
        "text": "Eliminación completa de cualquier gasto financiero mediante subsidios automáticos de infraestructura ofrecidos por Google Cloud.",
        "isTrap": true,
        "trapType": "unrealistic_promise"
      },
      {
        "letter": "D",
        "text": "Mantenimiento del mismo modelo CapEx pero transfiriendo la propiedad física del hardware a los centros de datos de Google.",
        "isTrap": true,
        "trapType": "colocation_confusion"
      }
    ],
    "correct": "A",
    "explanation": "La computación en la nube transforma la economía de TI al sustituir grandes inversiones iniciales de capital (CapEx) en hardware y centros de datos por un modelo elástico de costos operativos (OpEx), donde solo se paga por los recursos efectivamente consumidos bajo demanda.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Invierte los términos: en la nube no se compran servidores perpetuos (CapEx), sino que se alquila capacidad computacional como gasto operativo (OpEx).",
      "C": "Google Cloud no elimina los costos ni otorga subsidios que eliminen el gasto; proporciona un modelo de precios transparente basado en el consumo.",
      "D": "Esto describe un modelo de coubicación (colocation) tradicional, no una adopción de nube pública donde Google es dueño de la infraestructura física."
    },
    "officialDocUrl": "https://cloud.google.com/learn/what-is-cloud-computing",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D1-002",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Total Cost of Ownership (TCO) y Retorno de Inversión (ROI)",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Cálculo del Costo Total de Propiedad (TCO) al Migrar a la Nube",
    "scenario": "Un minorista multinacional está evaluando el Costo Total de Propiedad (TCO) de migrar su plataforma de comercio electrónico a Google Cloud en comparación con renovar su centro de datos local. ¿Qué factores integrales deben incluirse en el análisis del TCO para reflejar con precisión el valor económico de la nube?",
    "keywords": [
      "TCO",
      "Costo Total de Propiedad",
      "Gastos indirectos",
      "Mantenimiento de hardware",
      "Energía y enfriamiento"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "El costo de las conexiones a Internet públicas sin considerar los servidores de cómputo.",
        "isTrap": true,
        "trapType": "irrelevant_focus"
      },
      {
        "letter": "B",
        "text": "Costos directos (hardware, almacenamiento, redes) y costos indirectos (energía eléctrica, refrigeración, mantenimiento de instalaciones, personal de administración de TI y costo de inactividad).",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Únicamente el costo de adquisición de licencias de software y servidores físicos.",
        "isTrap": true,
        "trapType": "incomplete_scope"
      },
      {
        "letter": "D",
        "text": "Solo los salarios del personal de soporte técnico de nivel 1.",
        "isTrap": true,
        "trapType": "incomplete_scope"
      }
    ],
    "correct": "B",
    "explanation": "El Costo Total de Propiedad (TCO) abarca todos los costos directos e indirectos asociados a la infraestructura durante su ciclo de vida, incluyendo adquisición de hardware, energía, refrigeración, espacio físico, mantenimiento y costos de personal operativo.",
    "distractors": {
      "A": "Ignora el costo principal que reside en la compra, aprovisionamiento y mantenimiento de los servidores y almacenamiento.",
      "B": "Opción correcta.",
      "C": "Considerar únicamente el hardware y las licencias ignora los cuantiosos costos operativos de energía, espacio físico y mantenimiento.",
      "D": "Los salarios de soporte L1 representan solo una pequeña fracción del TCO general de infraestructura."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/cost-optimization",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D1-003",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Google Cloud Adoption Framework (CAF) - Pilar Learn",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Desarrollo de Capacidades Internas mediante el Pilar Learn de CAF",
    "scenario": "Una empresa de telecomunicaciones está estructurando su estrategia de adopción de nube utilizando el Google Cloud Adoption Framework (CAF). Quieren asegurarse de que sus ingenieros y líderes desarrollen habilidades técnicas sólidas y una mentalidad orientada a la innovación continua. ¿Qué pilar del CAF aborda directamente este objetivo?",
    "keywords": [
      "Cloud Adoption Framework",
      "CAF",
      "Pilar Learn",
      "Capacitación técnica",
      "Habilidades"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Pilar Learn (Aprender)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Pilar Scale (Escalar)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      },
      {
        "letter": "C",
        "text": "Pilar Secure (Asegurar)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      },
      {
        "letter": "D",
        "text": "Pilar Lead (Liderar)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      }
    ],
    "correct": "A",
    "explanation": "El pilar 'Learn' del Cloud Adoption Framework de Google Cloud se enfoca en el desarrollo de capacidades, programas de capacitación y certificación, y el fomento del aprendizaje continuo para cerrar la brecha de habilidades en la organización.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "El pilar 'Scale' se orienta a la automatización de procesos, arquitectura de nube y adopción de microservicios.",
      "C": "El pilar 'Secure' se encarga de la gestión de identidad, cumplimiento normativo, gobernanza y seguridad.",
      "D": "El pilar 'Lead' se centra en el patrocinio ejecutivo, la cultura organizacional y la alineación estratégica entre las áreas de negocio y tecnología."
    },
    "officialDocUrl": "https://cloud.google.com/adoption-framework",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D1-004",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Google Cloud Adoption Framework (CAF) - Pilar Lead",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Alineación Estratégica y Cultura con el Pilar Lead de CAF",
    "scenario": "El equipo directivo de una cadena de hospitales busca fomentar la colaboración entre los equipos de negocio y de tecnología, asegurando que los proyectos en la nube tengan patrocinio ejecutivo claro y una visión unificada. ¿Qué pilar del Cloud Adoption Framework (CAF) guía esta transformación organizacional?",
    "keywords": [
      "Pilar Lead",
      "Liderazgo",
      "Patrocinio ejecutivo",
      "Cultura",
      "Alineación de negocio"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Pilar Scale (Escalar)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      },
      {
        "letter": "B",
        "text": "Pilar Lead (Liderar)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Pilar Learn (Aprender)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      },
      {
        "letter": "D",
        "text": "Pilar Secure (Asegurar)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      }
    ],
    "correct": "B",
    "explanation": "El pilar 'Lead' del Google Cloud Adoption Framework evalúa y desarrolla el patrocinio ejecutivo, la gestión del cambio cultural, la estructura organizacional de los equipos y la alineación entre la estrategia empresarial y las iniciativas de TI.",
    "distractors": {
      "A": "Scale se enfoca en la capacidad operativa, automatización y modernización de servicios técnicos.",
      "B": "Opción correcta.",
      "C": "Learn se especializa en la formación y el desarrollo de competencias técnicas del personal.",
      "D": "Secure se enfoca en controles de riesgo, protección de datos y gobierno de identidades."
    },
    "officialDocUrl": "https://cloud.google.com/adoption-framework",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D1-005",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Google Cloud Adoption Framework (CAF) - Pilar Scale",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Automatización y Eficiencia de Procesos mediante el Pilar Scale",
    "scenario": "Una empresa de software empresarial busca migrar sus procesos manuales de despliegue a canalizaciones CI/CD automatizadas, utilizar contenedores y aplicar infraestructura como código para reducir el tiempo de lanzamiento de productos. ¿Qué pilar del CAF guía estas mejoras operativas?",
    "keywords": [
      "Pilar Scale",
      "Automatización",
      "CI/CD",
      "Infraestructura como código",
      "Escalabilidad operativa"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Pilar Lead (Liderar)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      },
      {
        "letter": "B",
        "text": "Pilar Secure (Asegurar)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      },
      {
        "letter": "C",
        "text": "Pilar Scale (Escalar)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Pilar Learn (Aprender)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      }
    ],
    "correct": "C",
    "explanation": "El pilar 'Scale' del Google Cloud Adoption Framework se enfoca en la madurez operativa, la automatización de la infraestructura, los procesos ágiles de entrega continua y la capacidad de responder dinámicamente a la demanda del mercado.",
    "distractors": {
      "A": "Lead aborda liderazgo y patrocinio directivo.",
      "B": "Secure se enfoca en seguridad y controles de cumplimiento.",
      "C": "Opción correcta.",
      "D": "Learn se centra en habilidades y planes de estudio."
    },
    "officialDocUrl": "https://cloud.google.com/adoption-framework",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-001",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Storage: Clases de Almacenamiento y Frecuencia de Acceso",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Selección de Clase de Almacenamiento para Datos Frecuentes (Standard Storage)",
    "scenario": "Una plataforma de streaming de video necesita almacenar imágenes en miniatura (thumbnails) y metadatos que los usuarios consultan millones de veces por día con latencia de milisegundos. ¿Qué clase de Cloud Storage es la más adecuada?",
    "keywords": [
      "Cloud Storage",
      "Standard Storage",
      "Acceso frecuente",
      "Baja latencia",
      "Sin costo de recuperación"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "wrong_storage_class"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "wrong_storage_class"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "wrong_storage_class"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Standard",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Storage Standard está optimizado para datos 'calientes' que se consultan con frecuencia continua, ofreciendo la mayor disponibilidad y sin cargos por recuperación de datos por lectura.",
    "distractors": {
      "A": "Archive está diseñado para archivado a largo plazo con acceso menor a una vez al año y altas tarifas por lectura frecuente.",
      "B": "Nearline está optimizado para datos a los que se accede una vez al mes como máximo (backups rápidos).",
      "C": "Coldline está diseñado para datos a los que se accede como máximo una vez al trimestre e incurre en tarifas por recuperación de datos.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/storage-classes",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-002",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Storage: Almacenamiento Nearline para Respaldos Mensuales",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Almacenamiento de Respaldos Mensuales con Nearline Storage",
    "scenario": "Una empresa genera copias de respaldo completas de sus bases de datos al cierre de cada mes. Estos respaldos solo se consultan si ocurre una auditoría o una restauración de emergencia (aproximadamente una vez cada 30 a 60 días). ¿Qué clase de Cloud Storage minimiza costos?",
    "keywords": [
      "Nearline Storage",
      "Acceso mensual",
      "Respaldos periódicos",
      "Optimización de costos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Nearline",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Storage Standard",
        "isTrap": true,
        "trapType": "overpaying_class"
      },
      {
        "letter": "C",
        "text": "Persistent Disk SSD",
        "isTrap": true,
        "trapType": "wrong_storage_type"
      },
      {
        "letter": "D",
        "text": "Cloud Memorystore for Redis",
        "isTrap": true,
        "trapType": "inmemory_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Storage Nearline es ideal para datos a los que se prevé acceder menos de una vez cada 30 días, ofreciendo un costo de almacenamiento en reposo significativamente menor que Standard con acceso inmediato.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Standard Storage tiene una tarifa de almacenamiento por GB/mes más alta, lo que resulta más costoso para respaldos que casi nunca se leen.",
      "C": "Persistent Disk SSD es un almacenamiento de bloques para VMs activas, no un servicio económico de objetos para copias de respaldo.",
      "D": "Memorystore es una memoria RAM volátil para caché en memoria, no un almacenamiento persistente de respaldo."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/storage-classes",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-003",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Storage: Almacenamiento Coldline para Recuperación de Desastres",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Almacenamiento para Recuperación de Desastres y Acceso Trimestral (Coldline)",
    "scenario": "Un departamento de TI almacena imágenes de servidores de recuperación ante desastres (DR) que solo se leen durante simulacros trimestrales o emergencias catastróficas (acceso cada 90 días). ¿Qué clase de Cloud Storage es la más costo-eficiente?",
    "keywords": [
      "Coldline Storage",
      "Recuperación de desastres",
      "Acceso cada 90 días",
      "Costos de reposo"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine Local SSD",
        "isTrap": true,
        "trapType": "ephemeral_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Coldline",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Storage Standard",
        "isTrap": true,
        "trapType": "overpaying_class"
      },
      {
        "letter": "D",
        "text": "Cloud Filestore Enterprise",
        "isTrap": true,
        "trapType": "nfs_file_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Storage Coldline ofrece un costo de almacenamiento en reposo muy bajo para datos que se consultan como máximo una vez cada 90 días, perfecto para planes de recuperación ante desastres.",
    "distractors": {
      "A": "Local SSD es almacenamiento efímero de ultra alto rendimiento atado físicamente al ciclo de vida de una VM.",
      "B": "Opción correcta.",
      "C": "Standard cobra tarifas más elevadas por GB almacenado al mes.",
      "D": "Filestore es un sistema de archivos NFS para aplicaciones de red compartidas de alto rendimiento, no almacenamiento pasivo para DR."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/storage-classes",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-004",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Storage: Almacenamiento Archive para Cumplimiento Legal a Largo Plazo",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Archivado de Registros Fiscales por 10 Años con Archive Storage",
    "scenario": "Una institución bancaria está obligada por ley a conservar registros contables y fiscales durante 10 años. Estos archivos casi nunca se consultan (menos de una vez al año), pero deben estar disponibles de forma segura en milisegundos cuando un regulador lo solicite. ¿Qué clase de Cloud Storage debe elegirse?",
    "keywords": [
      "Archive Storage",
      "Cumplimiento legal",
      "10 años",
      "Acceso menor a un año",
      "Costo mínimo de reposo"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud SQL for PostgreSQL",
        "isTrap": true,
        "trapType": "rdbms_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Bigtable",
        "isTrap": true,
        "trapType": "nosql_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Storage Standard",
        "isTrap": true,
        "trapType": "overpaying_class"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Storage Archive es la clase de menor costo de almacenamiento en reposo en Google Cloud. A diferencia de cintas magnéticas u otros proveedores, los datos en Archive se pueden leer en milisegundos sin requerir procesos de descongelación de horas.",
    "distractors": {
      "A": "Cloud SQL es una base de datos relacional para transacciones activas, lo que representaría un costo exorbitante para archivar PDFs o archivos históricos.",
      "B": "Bigtable es una base de datos de streaming y baja latencia, no un servicio de archivado de documentos regulatorios.",
      "C": "Opción correcta.",
      "D": "Standard incurre en un gasto sustancialmente mayor para retenciones a largo plazo de 10 años."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/storage-classes",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-005",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Storage: Ciclo de Vida de Objetos (Object Lifecycle Management)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Automatización de Transición de Clases con Object Lifecycle Management",
    "scenario": "Una empresa de imágenes médicas genera archivos DICOM que se consultan activamente durante los primeros 30 días posteriores al estudio. Entre los días 31 y 365 solo se consultan ocasionalmente, y después de un año deben conservarse por 7 años por regulación. ¿Cómo debe implementarse esto sin intervención manual?",
    "keywords": [
      "Object Lifecycle Management",
      "Ciclo de vida",
      "Reglas automáticas",
      "Transición de clases",
      "Costo eficiente"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Escribir un script manual que un operador ejecute cada fin de semana para descargar y subir los archivos a diferentes carpetas.",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "B",
        "text": "Crear 365 máquinas virtuales Compute Engine para mover un archivo por día.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Borrar todos los archivos a los 30 días para evitar pagar almacenamiento.",
        "isTrap": true,
        "trapType": "compliance_violation"
      },
      {
        "letter": "D",
        "text": "Configurar una política de Object Lifecycle Management en el bucket de Cloud Storage para transicionar automáticamente los objetos de Standard a Coldline a los 30 días, y a Archive a los 365 días.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Object Lifecycle Management en Cloud Storage permite definir reglas basadas en la antigüedad del objeto para cambiar automáticamente su clase de almacenamiento (ej. Standard -> Coldline -> Archive) o eliminarlo cuando cumpla su vigencia legal, optimizando costos de forma 100% desatendida.",
    "distractors": {
      "A": "Los scripts manuales son propensos a errores, consumen tiempo de ingeniería y no son escalables.",
      "B": "Aprovisionar cientos de VMs para mover archivos es una ineficiencia extrema y un despilfarro financiero.",
      "C": "Eliminar los archivos médicos viola directamente las normas legales de retención de registros de salud.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/lifecycle",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-006",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Storage Autoclass",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Optimización Inteligente con Cloud Storage Autoclass",
    "scenario": "Una empresa posee petabytes de datos en Cloud Storage con patrones de acceso impredecibles y variables según la temporada. Desean optimizar costos automáticamente sin tener que predecir con exactitud cuándo un archivo dejará de consultarse o cuándo volverá a ser popular. ¿Qué funcionalidad deben activar?",
    "keywords": [
      "Autoclass",
      "Cloud Storage Autoclass",
      "Optimización automática",
      "Patrones impredecibles"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Autoclass",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud DNS Geolocation",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud BigQuery Reservations",
        "isTrap": true,
        "trapType": "analytics_mismatch"
      },
      {
        "letter": "D",
        "text": "Compute Engine Autoscaler",
        "isTrap": true,
        "trapType": "compute_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Storage Autoclass transiciona automáticamente los objetos entre clases más frías (Nearline, Coldline, Archive) cuando no son accedidos, y los devuelve inmediatamente a Standard cuando se leen, sin cargos por recuperación de datos ni necesidad de configurar reglas manuales complejas.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud DNS gestiona la resolución de nombres de dominio en la red.",
      "C": "BigQuery Reservations gestiona capacidad de cómputo (slots) para consultas SQL en data warehouse, no clases de objetos en Cloud Storage.",
      "D": "Compute Engine Autoscaler gestiona el número de instancias de máquinas virtuales."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/autoclass",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-007",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Storage: Tipos de Ubicación de Buckets (Regional vs Dual-Region vs Multi-Region)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Ubicación de Buckets para Máxima Disponibilidad Geográfica (Dual-Region / Multi-Region)",
    "scenario": "Una empresa multinacional requiere almacenar activos digitales accesibles por usuarios en todo Estados Unidos con la máxima resiliencia ante la falla total de un centro de datos regional completo. ¿Qué tipo de ubicación de bucket de Cloud Storage proporciona redundancia geográfica automática?",
    "keywords": [
      "Multi-Region",
      "Dual-Region",
      "Ubicación de bucket",
      "Resiliencia regional",
      "Alta disponibilidad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Local Zonal Persistent Disk",
        "isTrap": true,
        "trapType": "zonal_mismatch"
      },
      {
        "letter": "B",
        "text": "Multi-Region o Dual-Region (por ejemplo, 'us' o 'nam4')",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "IP pública estática sin almacenamiento asociado",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Regional (por ejemplo, 'us-central1' exclusivamente)",
        "isTrap": true,
        "trapType": "single_point_of_failure"
      }
    ],
    "correct": "B",
    "explanation": "Los buckets Multi-Region y Dual-Region almacenan los datos de forma geo-redundante en al menos dos zonas geográficas separadas por cientos de kilómetros, garantizando disponibilidad y continuidad del negocio incluso ante la pérdida completa de una región.",
    "distractors": {
      "A": "Persistent Disk zonal solo existe en una zona física y no ofrece distribución geográfica automática.",
      "B": "Opción correcta.",
      "C": "Una dirección IP no es un servicio de almacenamiento de archivos u objetos.",
      "D": "Un bucket Regional almacena los datos en una sola región específica; si esa región sufre un corte mayor, los datos quedan temporalmente inaccesibles."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/locations",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-008",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Storage: Inmutabilidad y Bloqueo de Retención (Bucket Lock)",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Cumplimiento Regulatorio SEC Rule 17a-4 con Bucket Lock (WORM)",
    "scenario": "Una casa de bolsa necesita almacenar registros financieros con el requerimiento estricto de que nadie, ni siquiera un administrador con permisos 'Owner', pueda modificar o borrar los archivos durante 5 años (modelo WORM - Write Once, Read Many). ¿Qué funcionalidad de Google Cloud garantiza este cumplimiento?",
    "keywords": [
      "Bucket Lock",
      "Retention Policy",
      "WORM",
      "Inmutabilidad",
      "Cumplimiento regulatorio"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Pedir a los administradores por correo electrónico que prometan no borrar nada.",
        "isTrap": true,
        "trapType": "informal_antipattern"
      },
      {
        "letter": "B",
        "text": "Guardar los archivos en una máquina virtual de Compute Engine y cambiar la contraseña de root.",
        "isTrap": true,
        "trapType": "insecure_workaround"
      },
      {
        "letter": "C",
        "text": "Configurar una política de retención en el bucket de Cloud Storage y bloquearla permanentemente con Bucket Lock.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Subir los archivos a Google Drive personal sin respaldo.",
        "isTrap": true,
        "trapType": "consumer_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Bucket Lock permite fijar y bloquear de forma irrevocable una política de retención en Cloud Storage, haciendo que los objetos sean inmutables (WORM) y no puedan ser sobrescritos ni eliminados hasta que venza el periodo de retención especificado, cumpliendo con normas como SEC 17a-4.",
    "distractors": {
      "A": "Los acuerdos informales no ofrecen garantías técnicas ni cumplen con las auditorías regulatorias financieras.",
      "B": "Cualquier administrador de proyecto o error de disco en una VM puede eliminar los datos; no cumple con WORM.",
      "C": "Opción correcta.",
      "D": "Google Drive personal carece de los controles de gobernanza, auditoría y bloqueo de retención empresarial WORM."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/bucket-lock",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-009",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Bases de Datos Relacionales: Cloud SQL para MySQL, PostgreSQL y SQL Server",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Servicio Administrado para Bases de Datos Relacionales Tradicionales (Cloud SQL)",
    "scenario": "Una empresa de comercio electrónico desea migrar su base de datos PostgreSQL existente a Google Cloud para reducir la carga de administración (parcheo del sistema operativo, copias de seguridad automáticas y configuración de alta disponibilidad). ¿Qué servicio es el más adecuado?",
    "keywords": [
      "Cloud SQL",
      "PostgreSQL",
      "MySQL",
      "Base de datos relacional administrada",
      "Copias de seguridad automáticas"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Cloud Storage",
        "isTrap": true,
        "trapType": "object_storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Bigtable",
        "isTrap": true,
        "trapType": "nosql_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Firestore",
        "isTrap": true,
        "trapType": "nosql_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud SQL",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud SQL es el servicio de base de datos relacional totalmente administrado de Google Cloud compatible con motores estándar como PostgreSQL, MySQL y Microsoft SQL Server, gestionando automáticamente parches, backups y replicación.",
    "distractors": {
      "A": "Cloud Storage almacena objetos/archivos no estructurados, no ejecuta consultas relacionales SQL transaccionales.",
      "B": "Cloud Bigtable es una base de datos NoSQL de columnas anchas para streaming analítico y telemetría, no un motor relacional SQL estándar.",
      "C": "Firestore es una base de datos NoSQL de documentos orientada a aplicaciones web y móviles.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/sql/docs",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-010",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud SQL: Alta Disponibilidad (HA) y Conmutación por Error (Failover)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Configuración de Alta Disponibilidad Zonal en Cloud SQL",
    "scenario": "Una aplicación de facturación empresarial en Cloud SQL no puede permitirse tiempos de inactividad si una zona del centro de datos sufre un corte de energía. ¿Qué configuración nativa garantiza que la base de datos conmute por error automáticamente a una zona secundaria sin pérdida de datos?",
    "keywords": [
      "Cloud SQL HA",
      "Alta disponibilidad",
      "Conmutación por error",
      "Standby zonal",
      "Replicación sincrónica"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Habilitar la configuración de Alta Disponibilidad (High Availability - HA) en Cloud SQL, que aprovisiona una instancia en espera (standby) en una zona diferente con replicación sincrónica de almacenamiento.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Exportar un archivo CSV diario y guardarlo en una memoria USB.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Desactivar las copias de seguridad automáticas para evitar bloqueos de disco.",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "D",
        "text": "Crear un recordatorio en el calendario del equipo para encender una VM manualmente si el servidor principal falla.",
        "isTrap": true,
        "trapType": "manual_antipattern"
      }
    ],
    "correct": "A",
    "explanation": "La configuración de Alta Disponibilidad (HA) en Cloud SQL aprovisiona automáticamente una instancia principal en una zona y una instancia en espera (standby) en otra zona dentro de la misma región. La replicación síncrona a nivel de disco asegura una conmutación por error (failover) transparente en segundos si la zona primaria falla.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Los archivos CSV estáticos no proporcionan conmutación en tiempo real ni transaccionalidad.",
      "C": "Desactivar copias de seguridad compromete gravemente la integridad y recuperación de la empresa.",
      "D": "La intervención manual introduce demoras inaceptables de minutos u horas durante un incidente."
    },
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/high-availability",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-011",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud SQL: Escalabilidad de Lecturas mediante Read Replicas",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Descarga de Consultas de Reportes mediante Read Replicas en Cloud SQL",
    "scenario": "Una tienda en línea utiliza Cloud SQL para procesar pedidos. Durante el horario comercial, los analistas de negocio ejecutan consultas de reportes muy pesadas que ralentizan las transacciones de compra de los clientes. ¿Cómo debe resolverse este problema de rendimiento?",
    "keywords": [
      "Read Replicas",
      "Cloud SQL",
      "Descarga de lecturas",
      "Reportes analíticos",
      "Separación de lecturas y escrituras"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Prohibir totalmente la generación de reportes comerciales en la empresa.",
        "isTrap": true,
        "trapType": "restrictive_antipattern"
      },
      {
        "letter": "B",
        "text": "Crear una o más réplicas de lectura (Read Replicas) en Cloud SQL y redirigir las consultas de reportes a estas réplicas para no sobrecargar la instancia primaria de escritura.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Apagar la base de datos principal cada 10 minutos para enfriar la CPU.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Convertir la base de datos en un archivo de texto TXT plano compartido por correo.",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      }
    ],
    "correct": "B",
    "explanation": "Las réplicas de lectura (Read Replicas) permiten escalar horizontalmente la capacidad de lectura de Cloud SQL, aislando las consultas pesadas de Business Intelligence de la base de datos primaria transaccional (OLTP).",
    "distractors": {
      "A": "Impedir reportes comerciales priva al negocio de información vital para operar.",
      "B": "Opción correcta.",
      "C": "Apagar la base de datos de forma periódica causaría interrupciones catastróficas del servicio a los clientes.",
      "D": "Un archivo de texto TXT carece de concurrencia, índices y capacidades relacionales."
    },
    "officialDocUrl": "https://cloud.google.com/sql/docs/mysql/replication",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-012",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Spanner: Base de Datos Relacional Global con Escalado Ilimitado",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Base de Datos Relacional Global con Consistencia Fuerte y Escalado Horizontal",
    "scenario": "Una empresa multinacional de reservas hoteleras necesita una base de datos relacional que ofrezca transacciones ACID completas, soporte consultas SQL, escale horizontalmente a miles de nodos en múltiples continentes y ofrezca una disponibilidad del 99.999% sin necesidad de fragmentación manual (sharding). ¿Qué base de datos de Google Cloud cumple estos requisitos?",
    "keywords": [
      "Cloud Spanner",
      "Consistencia fuerte",
      "Multi-region",
      "99.999% SLA",
      "Escalabilidad horizontal relacional",
      "ACID"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Memorystore",
        "isTrap": true,
        "trapType": "inmemory_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud SQL para MySQL",
        "isTrap": true,
        "trapType": "single_region_bottleneck"
      },
      {
        "letter": "C",
        "text": "Cloud Spanner",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Firestore en modo Datastore",
        "isTrap": true,
        "trapType": "nosql_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Spanner es la base de datos relacional global de Google Cloud pionera en la industria: combina la estructura y consistencia fuerte ACID de una base de datos relacional tradicional con la escalabilidad horizontal masiva de NoSQL y disponibilidad líder de hasta 99.999% (cinco nueves).",
    "distractors": {
      "A": "Memorystore es una caché en memoria para aceleración de latencia, no un almacenamiento relacional principal distribuido a escala global.",
      "B": "Cloud SQL escala verticalmente y sus escrituras están limitadas a una sola instancia primaria regional, requiriendo sharding manual complejo para escalas masivas.",
      "C": "Opción correcta.",
      "D": "Firestore es una base de datos NoSQL de documentos, no una base de datos relacional relacional con SQL avanzado."
    },
    "officialDocUrl": "https://cloud.google.com/spanner/docs",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-013",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Spanner vs Cloud SQL: Matriz de Decisión",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Criterios de Elección entre Cloud SQL y Cloud Spanner",
    "scenario": "Un arquitecto de soluciones debe asesorar a dos equipos: (1) Una aplicación departamental de nómina con 50 GB de datos y (2) Una plataforma global de banca digital con millones de transacciones por segundo en 4 continentes. ¿Cuál es la asignación correcta de base de datos?",
    "keywords": [
      "Cloud SQL vs Cloud Spanner",
      "Escala departamental vs Global",
      "Costo-beneficio",
      "Matriz de decisión"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Utilizar Cloud Bigtable para ambas aplicaciones sin importar los requisitos ACID.",
        "isTrap": true,
        "trapType": "non_relational_fit"
      },
      {
        "letter": "B",
        "text": "Guardar ambas bases de datos en archivos JSON dentro de un bucket de Cloud Storage.",
        "isTrap": true,
        "trapType": "object_storage_mismatch"
      },
      {
        "letter": "C",
        "text": "Asignar Cloud Spanner a la aplicación pequeña de 50 GB y Cloud SQL a la plataforma bancaria global.",
        "isTrap": true,
        "trapType": "inverted_solution"
      },
      {
        "letter": "D",
        "text": "Asignar Cloud SQL a la aplicación departamental de nómina por su simplicidad y bajo costo, y asignar Cloud Spanner a la plataforma de banca digital global por su escalabilidad horizontal y consistencia transaccional multi-región.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud SQL es la opción ideal y económica para cargas relacionales medianas o regionales (hasta unos pocos terabytes), mientras que Cloud Spanner está diseñado para sistemas que superan la capacidad de una sola máquina y requieren distribución global con consistencia estricta.",
    "distractors": {
      "A": "Cloud Bigtable no ofrece garantías transaccionales ACID multi-fila ni esquemas relacionales requeridos por nóminas y bancos.",
      "B": "Cloud Storage no es una base de datos transaccional y carece de soporte de consultas ACID concurrentes.",
      "C": "Invertir la asignación resultaría en un sobrecosto para la nómina y causaría un cuello de botella de escalabilidad insuperable para el banco global.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/products/databases",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-014",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Bare Metal Solution para Cargas Legadas de Oracle",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Migración de Bases de Datos Oracle RAC Especializadas con Bare Metal Solution",
    "scenario": "Una empresa posee una base de datos central Oracle RAC crítica con requisitos estrictos de licencias por núcleo físico y hardware dedicado de baja latencia con el resto de sus sistemas en Google Cloud. ¿Qué solución ofrece Google Cloud para hospedar esta carga sin virtualización?",
    "keywords": [
      "Bare Metal Solution",
      "Oracle RAC",
      "Hardware dedicado",
      "Baja latencia",
      "Licenciamiento"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Bare Metal Solution de Google Cloud",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Run",
        "isTrap": true,
        "trapType": "serverless_mismatch"
      },
      {
        "letter": "C",
        "text": "Google App Engine Standard",
        "isTrap": true,
        "trapType": "paas_mismatch"
      },
      {
        "letter": "D",
        "text": "Firebase Realtime Database",
        "isTrap": true,
        "trapType": "nosql_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Bare Metal Solution proporciona infraestructura de hardware dedicado (servidores físicos no virtualizados) adyacente a los centros de datos de Google Cloud con conexión de red de latencia sub-milisegundo, ideal para cargas empresariales especializadas como Oracle RAC que requieren licenciamiento físico específico.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud Run es un entorno serverless para contenedores HTTP ligeros, no para bases de datos de hardware bare metal.",
      "C": "App Engine es una plataforma PaaS para código web, no para infraestructura física dedicada de bases de datos.",
      "D": "Firebase es una base de datos NoSQL para apps móviles, incompatible con esquemas y motores empresariales Oracle."
    },
    "officialDocUrl": "https://cloud.google.com/bare-metal",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D2-015",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Database Migration Service (DMS)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Migración de Bases de Datos con Mínimo Tiempo de Inactividad (DMS)",
    "scenario": "Una compañía necesita migrar 50 bases de datos MySQL locales a Cloud SQL con mínimo tiempo de inactividad para no interrumpir las operaciones del negocio. ¿Qué servicio nativo y sin servidor facilita esta migración continua?",
    "keywords": [
      "Database Migration Service",
      "DMS",
      "Mínimo tiempo de inactividad",
      "Migración a Cloud SQL",
      "Serverless"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Trace",
        "isTrap": true,
        "trapType": "observability_mismatch"
      },
      {
        "letter": "B",
        "text": "Database Migration Service (DMS)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Transfer Appliance físico",
        "isTrap": true,
        "trapType": "offline_hardware_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Data Fusion",
        "isTrap": true,
        "trapType": "etl_tool_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Database Migration Service (DMS) de Google Cloud es una solución sin servidor, sencilla y de alta fidelidad para migrar bases de datos relacionales (como MySQL y PostgreSQL) a Cloud SQL con replicación continua que minimiza el tiempo de inactividad durante el corte final.",
    "distractors": {
      "A": "Cloud Trace es una herramienta de observabilidad para medir latencia de microservicios.",
      "B": "Opción correcta.",
      "C": "Transfer Appliance es un dispositivo físico para transferir petabytes de archivos estáticos offline, no para replicación continua de bases de datos.",
      "D": "Cloud Data Fusion es una herramienta ETL de integración gráfica de datos, no un servicio especializado de migración de motores de base de datos con CDC."
    },
    "officialDocUrl": "https://cloud.google.com/database-migration",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-001",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Modelos de Cómputo: IaaS vs PaaS vs Serverless vs CaaS",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Mapeo de Modelos de Servicio de Cómputo en Google Cloud",
    "scenario": "Un equipo de arquitectura de software debe clasificar los siguientes servicios de Google Cloud según su modelo de abstracción de cómputo: (1) Compute Engine, (2) Google Kubernetes Engine (GKE), (3) App Engine Standard, y (4) Cloud Run. ¿Cuál es la clasificación correcta?",
    "keywords": [
      "IaaS",
      "CaaS",
      "PaaS",
      "Serverless",
      "Modelos de cómputo"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "(1) PaaS, (2) Serverless, (3) IaaS, (4) CaaS",
        "isTrap": true,
        "trapType": "misaligned_models"
      },
      {
        "letter": "B",
        "text": "Todos son servicios de hardware físico local en sitio",
        "isTrap": true,
        "trapType": "onprem_confusion"
      },
      {
        "letter": "C",
        "text": "(1) IaaS (Infraestructura como Servicio), (2) CaaS (Contenedores como Servicio), (3) PaaS (Plataforma como Servicio), (4) Serverless Containers (Contenedores sin servidor)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "(1) Serverless, (2) IaaS, (3) CaaS, (4) PaaS",
        "isTrap": true,
        "trapType": "misaligned_models"
      }
    ],
    "correct": "C",
    "explanation": "Compute Engine es IaaS (control total de VMs y SO); GKE es CaaS (orquestación empresarial de clústeres Kubernetes); App Engine Standard es PaaS (abstracción del runtime para código web); y Cloud Run es Serverless de contenedores (escalado automático a cero por petición sin administrar clústeres).",
    "distractors": {
      "A": "Invierte los niveles de abstracción y control operativo.",
      "B": "Todos son servicios de computación en la nube pública de Google Cloud.",
      "C": "Opción correcta.",
      "D": "Compute Engine no es Serverless; requiere configurar y mantener máquinas virtuales y sistemas operativos."
    },
    "officialDocUrl": "https://cloud.google.com/learn/choosing-the-right-compute-option",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-002",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Compute Engine: Máquinas Virtuales Personalizadas (Custom Machine Types)",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Optimización de Costos de Cómputo con Custom Machine Types en Compute Engine",
    "scenario": "Una aplicación heredada en Compute Engine requiere exactamente 6 vCPUs y 27 GB de memoria RAM para operar eficientemente. En otros proveedores de nube, la empresa se ve obligada a pagar por una máquina predefinida de 8 vCPUs y 32 GB, desperdiciando recursos. ¿Qué ventaja ofrece Google Cloud Compute Engine?",
    "keywords": [
      "Custom Machine Types",
      "Compute Engine",
      "Ajuste exacto de vCPU y RAM",
      "Eliminación de desperdicio",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Obliga a comprar 10 servidores físicos dedicados en una tienda de informática.",
        "isTrap": true,
        "trapType": "hardware_purchase_trap"
      },
      {
        "letter": "B",
        "text": "Google Cloud no permite modificar la memoria RAM de ninguna máquina virtual.",
        "isTrap": true,
        "trapType": "false_limitation"
      },
      {
        "letter": "C",
        "text": "Exige que todas las máquinas virtuales tengan 128 vCPUs como mínimo obligatorio.",
        "isTrap": true,
        "trapType": "absurd_limitation"
      },
      {
        "letter": "D",
        "text": "Permite crear Máquinas Virtuales Personalizadas (Custom Machine Types) con la cantidad exacta de vCPUs y memoria RAM requerida, pagando únicamente por los recursos específicos configurados.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Custom Machine Types en Compute Engine permite a los clientes adaptar con precisión quirúrgica el número de vCPUs y la cantidad de gigabytes de memoria RAM de sus VMs, optimizando los costos y evitando el sobredimensionamiento (overprovisioning) que imponen los tamaños rígidos estándar de la industria.",
    "distractors": {
      "A": "En la nube no se compra hardware físico minorista.",
      "B": "Google Cloud ofrece total flexibilidad para personalizar tanto vCPUs como memoria RAM.",
      "C": "Compute Engine ofrece tamaños desde microinstancias (e2-micro) hasta cientos de vCPUs.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/creating-instance-with-custom-machine-type",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-003",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Compute Engine: Migración en Vivo (Live Migration)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Mantenimiento Transparente de Hardware con Migración en Vivo (Live Migration)",
    "scenario": "Google necesita realizar un mantenimiento crítico de hardware y actualizar el software del hipervisor en el servidor físico donde se ejecuta la máquina virtual de producción de un cliente. ¿Cómo garantiza Google Cloud que la VM del cliente no sufra reinicios ni tiempos de inactividad durante este mantenimiento?",
    "keywords": [
      "Live Migration",
      "Migración en vivo",
      "Mantenimiento de infraestructura",
      "Cero tiempo de inactividad",
      "Compute Engine"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "A través de la Migración en Vivo (Live Migration), que traslada automáticamente la máquina virtual en ejecución a otro host físico sin reiniciar la VM ni interrumpir las conexiones de red ni las cargas de trabajo de la aplicación.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Enviando un técnico con un cable a la oficina del cliente para sostener la energía eléctrica.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Apagando la máquina virtual durante 12 horas sin previo aviso.",
        "isTrap": true,
        "trapType": "false_premise"
      },
      {
        "letter": "D",
        "text": "Borrando todos los discos y pidiendo al cliente que vuelva a instalar su sistema operativo.",
        "isTrap": true,
        "trapType": "data_loss_antipattern"
      }
    ],
    "correct": "A",
    "explanation": "Live Migration es una capacidad exclusiva y diferenciadora de Compute Engine de Google Cloud que mantiene las máquinas virtuales de los clientes en funcionamiento continuo migrándolas en caliente a otros servidores físicos durante mantenimientos rutinarios de hardware, parches de seguridad y actualizaciones de la infraestructura de Google.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "El mantenimiento ocurre de forma 100% automatizada en los centros de datos de Google.",
      "C": "Live Migration elimina la necesidad de apagar instancias para mantenimientos regulares de la infraestructura de Google.",
      "D": "Los datos y estados de memoria se preservan íntegramente durante la migración en vivo."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/live-migration",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-004",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Compute Engine: Spot VMs (Preemptible VMs) para Ahorro en Cargas Tolerantes a Fallos",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Reducción Drástica de Costos de Cómputo con Spot VMs",
    "scenario": "Un laboratorio universitario ejecuta simulaciones de genómica y procesamiento de imágenes por lotes que duran varias horas y pueden reiniciarse automáticamente si una máquina falla. El presupuesto es muy limitado. ¿Qué tipo de instancias de Compute Engine ofrecen descuentos de hasta el 60-91% a cambio de permitir que Google las interrumpa si necesita capacidad para otros clientes?",
    "keywords": [
      "Spot VMs",
      "Preemptible VMs",
      "Descuentos 60-91%",
      "Cargas tolerantes a fallos",
      "Procesamiento por lotes"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Spanner Multi-region",
        "isTrap": true,
        "trapType": "database_mismatch"
      },
      {
        "letter": "B",
        "text": "Spot VMs (máquinas virtuales con descuento que aprovechan capacidad de cómputo sobrante y pueden ser interrumpidas con un aviso previo de 30 segundos)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Servidores físicos comprados a perpetuidad",
        "isTrap": true,
        "trapType": "onprem_mismatch"
      },
      {
        "letter": "D",
        "text": "Instancias dedicadas de alta prioridad con sobreprecio del 500%",
        "isTrap": true,
        "trapType": "expensive_antipattern"
      }
    ],
    "correct": "B",
    "explanation": "Las Spot VMs en Compute Engine ofrecen ahorros masivos (del 60% al 91% frente al precio regular) para cargas de trabajo tolerantes a fallos, renderizado, análisis por lotes y pruebas que pueden ser interrumpidas de forma segura cuando Google Cloud requiere esa capacidad para otros servicios.",
    "distractors": {
      "A": "Cloud Spanner es una base de datos relacional global, no instancias de cómputo para simulación genómica.",
      "B": "Opción correcta.",
      "C": "En Compute Engine no se compran servidores físicos perpetuos.",
      "D": "Pagar tarifas de sobreprecio premium contradice el objetivo de presupuesto limitado."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/spot",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-005",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Compute Engine: Nodos de Inquilino Único (Sole-Tenant Nodes)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Cumplimiento Regulatorio y Licenciamiento Dedicado con Sole-Tenant Nodes",
    "scenario": "Una empresa de defensa militar debe cumplir con estrictas regulaciones gubernamentales que prohíben compartir el hardware físico del servidor con máquinas virtuales de otros clientes (requisito de aislamiento físico total) y requiere traer sus propias licencias de software por núcleo físico (BYOL). ¿Qué configuración de Compute Engine satisface este requisito?",
    "keywords": [
      "Sole-Tenant Nodes",
      "Nodos de inquilino único",
      "Aislamiento físico",
      "BYOL",
      "Cumplimiento estricto"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Run compartido públicamente",
        "isTrap": true,
        "trapType": "multi_tenant_serverless_mismatch"
      },
      {
        "letter": "B",
        "text": "App Engine Standard",
        "isTrap": true,
        "trapType": "shared_paas_mismatch"
      },
      {
        "letter": "C",
        "text": "Nodos de Inquilino Único (Sole-Tenant Nodes en Compute Engine)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Instalar las VMs en computadoras portátiles de los empleados",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "Sole-Tenant Nodes proporcionan servidores físicos dedicados exclusivamente para alojar las máquinas virtuales de un solo cliente en Compute Engine, permitiendo aislamiento físico total para requisitos de cumplimiento y optimización de licencias por zócalo/núcleo físico (BYOL).",
    "distractors": {
      "A": "Cloud Run es un entorno serverless multitenant y no ofrece hardware físico dedicado exclusivo.",
      "B": "App Engine Standard comparte infraestructura subyacente y no permite control de servidores físicos dedicados.",
      "C": "Opción correcta.",
      "D": "Las laptops personales no cumplen con estándares militares de infraestructura de centros de datos."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/nodes/sole-tenant-nodes",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-006",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Compute Engine: VMs Blindadas (Shielded VMs) y VMs Confidenciales (Confidential VMs)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Seguridad Avanzada con Shielded VMs y Cifrado de Memoria en Confidential VMs",
    "scenario": "Una institución financiera requiere proteger sus máquinas virtuales contra ataques a nivel de firmware (rootkits de arranque) y garantizar que los datos estén cifrados en la memoria RAM mientras se procesan en la CPU, protegiéndolos incluso de accesos no autorizados a nivel de hipervisor. ¿Qué tecnologías de Compute Engine proporcionan estas protecciones?",
    "keywords": [
      "Shielded VMs",
      "Confidential VMs",
      "Secure Boot",
      "vTPM",
      "Cifrado de memoria en uso",
      "AMD SEV"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Utilizar máquinas virtuales sin sistema operativo",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Cloud DNS y Cloud Domains",
        "isTrap": true,
        "trapType": "networking_mismatch"
      },
      {
        "letter": "C",
        "text": "Desactivar todas las contraseñas de los servidores para facilitar el acceso",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "D",
        "text": "Shielded VMs (con Secure Boot y vTPM para integridad de arranque) y Confidential VMs (con cifrado de memoria en uso mediante AMD SEV).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Shielded VMs ofrecen integridad verificable de arranque (Secure Boot, vTPM y monitoreo de integridad contra malware a nivel de kernel/firmware), mientras que Confidential VMs cifran los datos en uso en la memoria RAM utilizando aislamiento criptográfico por hardware (AMD SEV).",
    "distractors": {
      "A": "Una VM requiere un sistema operativo para ejecutar aplicaciones empresariales.",
      "B": "Cloud DNS gestiona nombres de dominio y no proporciona seguridad de hardware ni cifrado de memoria RAM en VMs.",
      "C": "Eliminar contraseñas destruye los controles de acceso e incumple todas las normativas financieras.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/confidential-computing",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-007",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Google Kubernetes Engine (GKE): Modos Autopilot vs Standard",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferenciación entre GKE Autopilot y GKE Standard",
    "scenario": "Una empresa desea desplegar microservicios en Kubernetes pero su equipo de operaciones no quiere administrar el aprovisionamiento de nodos, la configuración del sistema operativo de los nodos ni el escalado de la infraestructura subyacente, buscando pagar solo por los recursos de CPU y memoria solicitados por sus Pods. ¿Qué modo de GKE deben elegir?",
    "keywords": [
      "GKE Autopilot",
      "GKE Standard",
      "Gestión automatizada de nodos",
      "Pago por Pod",
      "Kubernetes"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "GKE Autopilot (modo totalmente administrado donde Google gestiona los nodos y la infraestructura, y el cliente solo paga por los Pods en ejecución)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Instalar Kubernetes en servidores físicos locales en la oficina",
        "isTrap": true,
        "trapType": "onprem_antipattern"
      },
      {
        "letter": "C",
        "text": "Reescribir toda la aplicación en lenguaje ensamblador",
        "isTrap": true,
        "trapType": "absurd_complexity"
      },
      {
        "letter": "D",
        "text": "GKE Standard (modo donde el cliente gestiona manualmente los grupos de nodos (Node Pools) y la configuración de las VMs)",
        "isTrap": true,
        "trapType": "standard_mode_overhead"
      }
    ],
    "correct": "A",
    "explanation": "GKE Autopilot es el modo de operación recomendado de Kubernetes donde Google gestiona toda la infraestructura del clúster (plano de control y nodos de trabajo), optimiza la seguridad según las mejores prácticas y factura exclusivamente por los recursos de CPU, memoria y almacenamiento solicitados por los Pods activos.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Instalar clústeres locales desde cero incrementa enormemente la carga operativa que el cliente desea evitar.",
      "C": "Reescribir en ensamblador es innecesario y contraproducente.",
      "D": "GKE Standard requiere que el cliente administre, configure y pague por las máquinas virtuales de los grupos de nodos (Node Pools)."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-008",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Run: Contenedores Serverless con Escalado a Cero",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Despliegue de Microservicios en Contenedores sin Servidor con Cloud Run",
    "scenario": "Una startup ha empaquetado su API web en un contenedor Docker en cualquier lenguaje (Node.js, Go o Python). Quieren un servicio que reciba peticiones HTTPS, escale automáticamente de 0 a cientos de instancias durante el día, y vuelva a escalar a 0 instancias en la noche sin cobrar nada cuando no haya tráfico web. ¿Qué servicio de Google Cloud cumple estos requisitos?",
    "keywords": [
      "Cloud Run",
      "Serverless Containers",
      "Escalado a cero",
      "Contenedores Docker",
      "Pago por petición"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine con VMs de tamaño fijo encendidas 24/7",
        "isTrap": true,
        "trapType": "vm_fixed_cost_trap"
      },
      {
        "letter": "B",
        "text": "Cloud Run",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Interconnect Dedicated",
        "isTrap": true,
        "trapType": "networking_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Run es una plataforma de cómputo serverless totalmente administrada que permite ejecutar contenedores directamente invocables vía peticiones web o eventos, escalando automáticamente hacia arriba ante picos de demanda y reduciendo a cero instancias cuando no hay tráfico, eliminando costos de infraestructura ociosa.",
    "distractors": {
      "A": "VMs fijas 24/7 no escalan a cero y generan costos continuos durante la noche cuando no hay tráfico.",
      "B": "Opción correcta.",
      "C": "Cloud Storage almacena objetos estáticos, no ejecuta código de contenedores web interactivos.",
      "D": "Cloud Interconnect es un enlace físico de fibra óptica para conectar redes corporativas."
    },
    "officialDocUrl": "https://cloud.google.com/run/docs",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-009",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Functions: Cómputo Serverless Basado en Eventos (FaaS)",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Procesamiento de Eventos Automático con Cloud Functions",
    "scenario": "Cada vez que un usuario sube una imagen a un bucket de Cloud Storage, la empresa necesita ejecutar un pequeño fragmento de código en Node.js que genere una miniatura (thumbnail) de 100x100 píxeles y guarde el resultado. El código solo tarda 2 segundos en ejecutarse. ¿Qué servicio sin servidor basado en eventos es el más simple y costo-eficiente?",
    "keywords": [
      "Cloud Functions",
      "FaaS",
      "Event-driven",
      "Disparador de Cloud Storage",
      "Serverless"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Armor",
        "isTrap": true,
        "trapType": "security_mismatch"
      },
      {
        "letter": "B",
        "text": "Mantener un clúster de 10 máquinas virtuales Compute Engine dedicadas exclusivamente a esperar archivos",
        "isTrap": true,
        "trapType": "overprovisioned_antipattern"
      },
      {
        "letter": "C",
        "text": "Cloud Functions (con un disparador de evento de Cloud Storage)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Contratar a un diseñador para que redimensione manualmente cada imagen que suba un usuario",
        "isTrap": true,
        "trapType": "manual_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Functions es una plataforma de funciones como servicio (FaaS) orientada a eventos y sin servidor que ejecuta código automáticamente en respuesta a cambios en Cloud Storage, mensajes de Pub/Sub o peticiones HTTP, facturando únicamente por los milisegundos de ejecución.",
    "distractors": {
      "A": "Cloud Armor es un servicio de firewall de aplicaciones web (WAF) contra ataques DDoS.",
      "B": "Mantener 10 VMs encendidas 24/7 esperando eventos esporádicos genera un desperdicio financiero masivo.",
      "C": "Opción correcta.",
      "D": "El redimensionamiento manual es lento, costoso y no escala para miles de imágenes por minuto."
    },
    "officialDocUrl": "https://cloud.google.com/functions/docs",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-010",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "App Engine: Entorno Estándar vs Entorno Flexible",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferencias entre App Engine Standard y App Engine Flexible",
    "scenario": "Un desarrollador evalúa Google App Engine para dos aplicaciones web: (1) Una app web en Python estándar con tráfico muy variable que necesita escalar de 0 a cientos de instancias en segundos, y (2) Una app web que requiere instalar librerías C++ personalizadas del sistema operativo y utilizar contenedores Docker personalizados. ¿Qué entorno de App Engine corresponde a cada caso?",
    "keywords": [
      "App Engine Standard",
      "App Engine Flexible",
      "Sandboxed runtimes",
      "Custom Docker containers",
      "PaaS"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Ambas deben ejecutarse en Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "App Engine prohíbe el uso de código en Python",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "C",
        "text": "(1) App Engine Entorno Flexible; (2) App Engine Entorno Estándar",
        "isTrap": true,
        "trapType": "inverted_environment"
      },
      {
        "letter": "D",
        "text": "(1) App Engine Entorno Estándar (Standard Environment); (2) App Engine Entorno Flexible (Flexible Environment)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "App Engine Standard ejecuta aplicaciones en entornos seguros y optimizados (sandboxes) que escalan casi instantáneamente a cero y responden en segundos. App Engine Flexible ejecuta contenedores Docker personalizados en VMs de Compute Engine, permitiendo modificar el sistema operativo e instalar binarios personalizados a cambio de un escalado más gradual.",
    "distractors": {
      "A": "Cloud Storage Archive es un servicio de almacenamiento pasivo para datos fríos, no una plataforma PaaS para código web.",
      "B": "Python es uno de los lenguajes fundamentales soportados nativamente por App Engine desde sus inicios.",
      "C": "Standard no permite instalar binarios de C++ a nivel de sistema operativo ni contenedores personalizados.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/appengine/docs/the-appengine-environments",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-011",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Google Cloud VMware Engine (GCVE): Migración de VMware sin Refactorización",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Migración Rápida de Entornos VMware vSphere con Google Cloud VMware Engine (GCVE)",
    "scenario": "Una gran corporación tiene 1,000 máquinas virtuales en su centro de datos local ejecutándose sobre VMware vSphere, vCenter, vSAN y NSX-T. El contrato de su centro de datos expira en 60 días. Quieren migrar a Google Cloud sin cambiar de herramientas de administración de VMware, sin convertir formatos de VM y sin reescribir aplicaciones. ¿Qué solución permite esta migración inmediata?",
    "keywords": [
      "Google Cloud VMware Engine",
      "GCVE",
      "VMware vSphere",
      "Lift-and-shift VMware",
      "Sin refactorizar"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Cloud VMware Engine (GCVE)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Reescribir manualmente las 1,000 aplicaciones en Cloud Functions en 60 días",
        "isTrap": true,
        "trapType": "impossible_timeline_overhead"
      },
      {
        "letter": "C",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "networking_mismatch"
      },
      {
        "letter": "D",
        "text": "Google Play Store",
        "isTrap": true,
        "trapType": "mobile_store_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud VMware Engine (GCVE) proporciona una pila completa de VMware (vSphere, vCenter, vSAN, NSX-T) certificada y administrada por Google que se ejecuta de forma nativa en hardware bare metal dedicado de Google Cloud, permitiendo migrar cargas de VMware sin interrupciones ni cambios en herramientas operativas.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Reescribir mil aplicaciones complejas en 60 días es técnicamente inviable y causaría el fracaso del proyecto.",
      "C": "Cloud DNS gestiona nombres de dominio web, no hospeda máquinas virtuales de VMware.",
      "D": "Google Play Store es una tienda de aplicaciones para smartphones Android."
    },
    "officialDocUrl": "https://cloud.google.com/vmware-engine/docs",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-012",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Matriz de Decisión de Cómputo: Compute Engine vs GKE vs Cloud Run vs Cloud Functions",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Selección Estratégica de la Opción de Cómputo Óptima",
    "scenario": "Un Director de Tecnología solicita una guía de decisión para sus equipos de desarrollo: (1) Cargas que requieren acceso completo al kernel del SO o licencias propietarias, (2) Arquitecturas complejas de microservicios en contenedores con políticas avanzadas de red, (3) APIs web basadas en contenedores con tráfico variable y escalado a cero, y (4) Tareas ligeras y rápidas basadas en eventos puntuales. ¿Cuál es la asignación recomendada?",
    "keywords": [
      "Matriz de cómputo",
      "Compute Engine",
      "GKE",
      "Cloud Run",
      "Cloud Functions",
      "Alineación arquitectónica"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Utilizar Cloud Storage Archive para ejecutar todas las aplicaciones",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "(1) Compute Engine, (2) GKE, (3) Cloud Run, (4) Cloud Functions",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "(1) Cloud Functions, (2) Compute Engine, (3) GKE, (4) Cloud Run",
        "isTrap": true,
        "trapType": "misaligned_compute"
      },
      {
        "letter": "D",
        "text": "(1) Cloud Run, (2) Cloud Functions, (3) Compute Engine, (4) GKE",
        "isTrap": true,
        "trapType": "misaligned_compute"
      }
    ],
    "correct": "B",
    "explanation": "Compute Engine es ideal para control total del sistema operativo y licencias legadas; GKE para gestión integral de clústeres de contenedores con Kubernetes; Cloud Run para microservicios web en contenedores con abstracción serverless total; y Cloud Functions para micro-lógica efímera disparada por eventos.",
    "distractors": {
      "A": "Cloud Storage almacena archivos estáticos; no ejecuta código de aplicación de cómputo.",
      "B": "Opción correcta.",
      "C": "Cloud Functions no permite modificar kernels de SO; Compute Engine no es el orquestador de microservicios con políticas avanzadas de Kubernetes.",
      "D": "Cloud Run no proporciona acceso directo a hardware ni modificaciones de kernel del sistema operativo."
    },
    "officialDocUrl": "https://cloud.google.com/learn/choosing-the-right-compute-option",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-013",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Descomposición de Monolitos a Microservicios",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Beneficios de la Modernización de Aplicaciones Monolíticas hacia Microservicios",
    "scenario": "Una empresa de e-commerce tiene una aplicación monolítica gigante de 15 años. Cada vez que el equipo de pagos realiza un cambio menor, se debe compilar y probar toda la aplicación durante horas, y un fallo en el módulo de comentarios de usuarios derriba todo el portal de compras. ¿Cuál es el principal beneficio de descomponer este monolito en microservicios independientes?",
    "keywords": [
      "Monolito a microservicios",
      "Desacoplamiento",
      "Aislamiento de fallos",
      "Despliegue independiente",
      "Agilidad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Obliga a que todos los desarrolladores utilicen obligatoriamente el mismo editor de texto.",
        "isTrap": true,
        "trapType": "irrelevant_constraint"
      },
      {
        "letter": "B",
        "text": "Elimina la necesidad de realizar pruebas de software en cualquier etapa.",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "C",
        "text": "Permite que equipos independientes desarrollen, escalen y desplieguen cada funcionalidad de forma autónoma, aislando los fallos para que un error en un servicio no afecte al resto de la plataforma.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Garantiza que la aplicación nunca más tenga que conectarse a una red o base de datos.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "La arquitectura de microservicios divide una aplicación en servicios pequeños, acoplados de forma flexible e independientes. Esto habilita despliegues continuos rápidos por equipos autónomos, mejora la resiliencia (aislando errores) y permite escalar únicamente los módulos bajo alta demanda.",
    "distractors": {
      "A": "Los microservicios ofrecen poliglotismo: cada equipo puede elegir sus herramientas y lenguajes adecuados.",
      "B": "Las pruebas automatizadas son aún más críticas en arquitecturas distribuidas de microservicios.",
      "C": "Opción correcta.",
      "D": "Los microservicios se comunican continuamente a través de redes mediante APIs REST, gRPC o colas de eventos."
    },
    "officialDocUrl": "https://cloud.google.com/learn/what-are-microservices",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-014",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Beneficios de la Contenedorización (Docker y OCI)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Portabilidad y Consistencia de Entornos mediante Contenedores",
    "scenario": "Los desarrolladores de una compañía se quejan frecuentemente con la frase 'en mi computadora sí funciona, pero en el servidor de pruebas falla' debido a diferencias en versiones de dependencias, variables de entorno y librerías del sistema operativo. ¿Cómo resuelve la contenedorización este problema?",
    "keywords": [
      "Contenedores",
      "Docker",
      "Portabilidad",
      "Consistencia de entornos",
      "Empaquetado de dependencias"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Regalando la computadora personal del desarrollador al centro de datos de producción.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Prohibiendo a los desarrolladores programar nuevas funcionalidades.",
        "isTrap": true,
        "trapType": "restrictive_antipattern"
      },
      {
        "letter": "C",
        "text": "Eliminando todos los entornos de prueba para desplegar a ciegas.",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "D",
        "text": "Empaquetando la aplicación junto con todo su código, runtime, librerías del sistema y dependencias en una imagen inmutable de contenedor que se ejecuta de forma idéntica y predecible en cualquier entorno (desarrollo, pruebas o producción en la nube).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Los contenedores encapsulan el código de la aplicación y todas sus dependencias en un paquete estándar y portátil. Esto garantiza paridad total entre los entornos de desarrollo local y los entornos de producción en la nube, resolviendo el clásico problema de inconsistencia de configuraciones.",
    "distractors": {
      "A": "Mudar computadoras personales a producción es una práctica artesanal e insegura incompatible con estándares empresariales.",
      "B": "Bloquear el desarrollo detiene la innovación del negocio.",
      "C": "Eliminar pruebas incrementa los fallos catastróficos en producción.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/learn/what-are-containers",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D3-015",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Build: Integración Continua (CI) Serverless",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Automatización de Compilaciones y Pruebas con Cloud Build",
    "scenario": "Un equipo de desarrollo de software busca una herramienta nativa de Google Cloud que compile automáticamente su código, ejecute pruebas unitarias, cree imágenes de contenedor Docker y las envíe al registro de artefactos cada vez que un desarrollador hace un 'push' o 'pull request' en su repositorio de GitHub. ¿Qué servicio administrado de Integración Continua (CI) deben utilizar?",
    "keywords": [
      "Cloud Build",
      "Integración Continua",
      "CI",
      "Creación de contenedores",
      "Automatización de pruebas"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Build",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Google Compute Engine Local SSD",
        "isTrap": true,
        "trapType": "disk_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Google Cloud Billing Export",
        "isTrap": true,
        "trapType": "billing_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Build es el servicio de integración y entrega continua (CI/CD) completamente administrado y sin servidor de Google Cloud que ejecuta compilaciones en la infraestructura escalable de Google, soportando pasos personalizados en contenedores y disparadores automatizados desde repositorios de código.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Local SSD es almacenamiento de disco de alto rendimiento para VMs.",
      "C": "Cloud Storage Nearline es para copias de seguridad de acceso mensual.",
      "D": "Cloud Billing Export exporta datos financieros a BigQuery para auditoría de costos."
    },
    "officialDocUrl": "https://cloud.google.com/build/docs",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-001",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Modelo de Responsabilidad Compartida: IaaS vs PaaS vs SaaS vs On-Premises",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Distribución de Responsabilidades en el Modelo de Responsabilidad Compartida",
    "scenario": "Una empresa traslada cargas de trabajo a Compute Engine (IaaS). El equipo de seguridad necesita clarificar qué aspectos de seguridad administra Google Cloud y cuáles son responsabilidad exclusiva del cliente. ¿Cómo se distribuyen las responsabilidades en IaaS?",
    "keywords": [
      "Modelo de Responsabilidad Compartida",
      "IaaS",
      "Seguridad física",
      "Parcheo de SO",
      "Datos y accesos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "El cliente es responsable de fabricar los chips de silicio y comprar los generadores diésel de los centros de datos de Google.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Google es responsable de la seguridad física de los centros de datos, el hardware y la capa del hipervisor; el cliente es responsable de aplicar parches al sistema operativo de la VM, configurar el firewall, la seguridad de las aplicaciones, el control de accesos (IAM) y la protección de sus datos.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "En la nube nadie es responsable de la seguridad porque la nube es 100% inmune de forma mágica.",
        "isTrap": true,
        "trapType": "false_premise"
      },
      {
        "letter": "D",
        "text": "Google es responsable de escribir el código de las aplicaciones del cliente y gestionar las contraseñas de todos los empleados.",
        "isTrap": true,
        "trapType": "unrealistic_responsibility"
      }
    ],
    "correct": "B",
    "explanation": "En el modelo de responsabilidad compartida para IaaS (Compute Engine), Google asegura la infraestructura física, hardware, red física e hipervisor, mientras que el cliente retiene la responsabilidad sobre el sistema operativo invitado, parches de software, configuración de red/firewall, aplicaciones, datos y políticas de acceso IAM.",
    "distractors": {
      "A": "Google diseña, adquiere y mantiene toda la infraestructura física y energética de sus centros de datos.",
      "B": "Opción correcta.",
      "C": "La seguridad es una disciplina rigurosa compartida entre el proveedor y el cliente.",
      "D": "Google Cloud no escribe ni administra el código de aplicación privativo del cliente."
    },
    "officialDocUrl": "https://cloud.google.com/learn/what-is-the-shared-responsibility-model",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-002",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Responsabilidad Compartida en Servicios Serverless y SaaS",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Evolución de la Responsabilidad al Moverse hacia PaaS y Serverless (Cloud Run / BigQuery)",
    "scenario": "Al migrar de máquinas virtuales en Compute Engine a servicios totalmente administrados y serverless como Cloud Run y BigQuery, ¿cómo cambia la responsabilidad de mantenimiento del cliente?",
    "keywords": [
      "Serverless",
      "PaaS",
      "Responsabilidad compartida",
      "Sin parcheo de SO",
      "Enfoque en datos e IAM"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "El cliente ahora debe administrar manualmente los servidores físicos del centro de datos.",
        "isTrap": true,
        "trapType": "opposite_premise"
      },
      {
        "letter": "B",
        "text": "La responsabilidad del cliente aumenta porque debe programar el firmware de los microprocesadores.",
        "isTrap": true,
        "trapType": "absurd_complexity"
      },
      {
        "letter": "C",
        "text": "Google asume la responsabilidad de aplicar parches al sistema operativo subyacente, el aprovisionamiento de hardware y el mantenimiento del runtime; el cliente solo es responsable de su código de aplicación, la configuración de acceso IAM y la protección de sus datos.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Google asume la propiedad legal de todos los datos confidenciales de la empresa.",
        "isTrap": true,
        "trapType": "untrue_claim"
      }
    ],
    "correct": "C",
    "explanation": "Conforme se adoptan niveles superiores de abstracción (PaaS, Serverless y SaaS), Google asume más responsabilidades operativas (parches de SO, escalado, hardware, runtime), reduciendo la carga de mantenimiento del cliente al control de identidades (IAM), gobernanza de datos y lógica de aplicación.",
    "distractors": {
      "A": "Los servicios serverless eliminan por completo la necesidad de administrar servidores físicos.",
      "B": "Google gestiona todo el firmware e infraestructura subyacente.",
      "C": "Opción correcta.",
      "D": "El cliente retiene siempre la propiedad y soberanía total de sus datos."
    },
    "officialDocUrl": "https://cloud.google.com/learn/what-is-the-shared-responsibility-model",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-003",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Principio de Menor Privilegio (Principle of Least Privilege) en IAM",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aplicación del Principio de Menor Privilegio en Identity and Access Management",
    "scenario": "Un nuevo analista de datos junior se incorpora al equipo de marketing. Solo necesita ejecutar consultas SQL sobre un conjunto de datos específico de BigQuery. ¿Cuál es la forma correcta de otorgarle permisos según las mejores prácticas de seguridad de Google Cloud?",
    "keywords": [
      "Principio de menor privilegio",
      "Least privilege",
      "IAM",
      "Roles predefinidos",
      "BigQuery User"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Hacer público todo el data warehouse en Internet para no configurar IAM.",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "B",
        "text": "Asignarle el rol primitivo `roles/owner` a nivel de toda la organización para que no tenga problemas de permisos nunca.",
        "isTrap": true,
        "trapType": "primitive_iam_overprivileged"
      },
      {
        "letter": "C",
        "text": "Compartir la contraseña del administrador general de la empresa por chat.",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "D",
        "text": "Asignarle un rol predefinido granular (como `roles/bigquery.dataViewer` en el dataset específico y `roles/bigquery.jobUser` en el proyecto) que otorgue únicamente los permisos estrictamente necesarios para su labor.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "El Principio de Menor Privilegio (Principle of Least Privilege) establece que a cada usuario o cuenta se le deben otorgar únicamente los permisos mínimos estrictamente necesarios para realizar sus funciones de trabajo, previniendo accesos accidentales o maliciosos no autorizados.",
    "distractors": {
      "A": "Hacer públicos los datos corporativos expone información confidencial al robo masivo.",
      "B": "Asignar `roles/owner` es una violación grave de seguridad que permite borrar proyectos enteros o cambiar facturación.",
      "C": "Compartir credenciales de superusuario destruye la trazabilidad y la seguridad.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/understanding-roles",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-004",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Roles de IAM: Primitivos (Básicos) vs Predefinidos vs Personalizados",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferenciación entre Roles Primitivos, Predefinidos y Personalizados en IAM",
    "scenario": "Un oficial de seguridad revisa la asignación de permisos en Google Cloud y encuentra usuarios con roles 'Editor' y 'Viewer' asignados a nivel de proyecto. Recomienda migrar a roles predefinidos o personalizados. ¿Cuál es el motivo técnico de esta recomendación?",
    "keywords": [
      "Roles primitivos",
      "Roles predefinidos",
      "Roles personalizados",
      "Owner Editor Viewer",
      "Antipatrón de seguridad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Los roles primitivos (Viewer, Editor, Owner) son demasiado amplios y afectan a todos los servicios del proyecto; los roles predefinidos son específicos por servicio y siguen el principio de menor privilegio, mientras que los roles personalizados permiten definir listas exactas de permisos individuales.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Google Cloud ha desactivado todos los roles predefinidos en todo el mundo.",
        "isTrap": true,
        "trapType": "false_claim"
      },
      {
        "letter": "C",
        "text": "Los roles personalizados solo pueden crearse imprimiendo formularios en papel.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Los roles primitivos son más caros y Google cobra $100 por cada asignación de Viewer.",
        "isTrap": true,
        "trapType": "untrue_cost_claim"
      }
    ],
    "correct": "A",
    "explanation": "Los roles primitivos o básicos (Viewer, Editor, Owner) provienen de las primeras versiones de GCP y otorgan permisos masivos e indiscriminados en todos los recursos de un proyecto. La mejor práctica es utilizar roles predefinidos específicos por servicio (ej. `roles/storage.objectAdmin`) o roles personalizados cuando se requieren combinaciones exactas de permisos.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Los roles predefinidos son mantenidos y actualizados continuamente por Google para cada servicio.",
      "C": "Los roles personalizados se gestionan mediante la consola web, gcloud CLI o Terraform.",
      "D": "IAM es un servicio de seguridad gratuito inherente a la plataforma; no cobra por asignación de roles."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/understanding-roles",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-005",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cuentas de Servicio (Service Accounts): Identidades para Aplicaciones y Cargas",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Uso de Cuentas de Servicio (Service Accounts) para Autenticación de Máquina a Máquina",
    "scenario": "Una aplicación backend en Compute Engine necesita autenticarse automáticamente con Cloud Storage para descargar archivos sin que intervenga un usuario humano ingresando un usuario y contraseña. ¿Qué tipo de identidad de IAM debe asignarse a la máquina virtual?",
    "keywords": [
      "Service Account",
      "Cuenta de servicio",
      "Máquina a máquina",
      "Autenticación no humana",
      "IAM"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "La cuenta de correo personal de Gmail del desarrollador más joven del equipo.",
        "isTrap": true,
        "trapType": "human_identity_antipattern"
      },
      {
        "letter": "B",
        "text": "Una Cuenta de Servicio (Service Account) con los roles de IAM específicos otorgados para acceder a Cloud Storage.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Desactivar la autenticación en Cloud Storage haciéndolo público a todo Internet.",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "D",
        "text": "Crear una cuenta de Facebook para el servidor de Compute Engine.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "Una Service Account (Cuenta de Servicio) es una identidad especial utilizada por aplicaciones y cargas de trabajo de cómputo (en lugar de personas humanas) para autenticarse y realizar llamadas autorizadas a las APIs de Google Cloud de forma segura mediante tokens de corta duración.",
    "distractors": {
      "A": "Usar cuentas de usuarios humanos individuales para servicios automatizados crea riesgos graves si el empleado abandona la empresa y viola las políticas de auditoría.",
      "B": "Opción correcta.",
      "C": "Hacer públicos los datos corporativos es una falla de seguridad crítica.",
      "D": "Las cuentas de redes sociales de consumo no son identidades de autenticación empresarial para VMs en GCP."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/service-account-overview",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-006",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Google Groups: Administración Eficiente de Permisos Basada en Roles (RBAC)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Gestión Escalable de Accesos mediante Google Groups en IAM",
    "scenario": "Una empresa tiene 50 ingenieros en su equipo de DevOps. Constantemente ingresan nuevos empleados y otros cambian de departamento. En lugar de asignar manualmente 15 roles de IAM a la dirección de correo individual de cada ingeniero en cada uno de los 30 proyectos de la empresa, ¿cuál es la mejor práctica de administración de accesos?",
    "keywords": [
      "Google Groups",
      "RBAC",
      "Administración escalable",
      "Asignación a grupos",
      "IAM best practices"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Prohibir el acceso a la consola de Google Cloud a todos los empleados para evitar cambios.",
        "isTrap": true,
        "trapType": "restrictive_antipattern"
      },
      {
        "letter": "B",
        "text": "Asignar permisos manualmente usuario por usuario en cada proyecto todos los días durante 4 horas.",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Crear un Grupo de Google (ej. `devops-team@tuempresa.com`), asignarle los roles de IAM necesarios y simplemente agregar o remover a los ingenieros del grupo según cambien de puesto.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Darle a todos los empleados una sola contraseña maestra compartida por correo.",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      }
    ],
    "correct": "C",
    "explanation": "Asignar roles de IAM a Google Groups en lugar de a usuarios individuales es una mejor práctica fundamental en Google Cloud: simplifica la administración de identidades, reduce el error humano y garantiza que cuando un empleado cambia de rol o deja la empresa, revocar sus accesos solo requiera removerlo del grupo central.",
    "distractors": {
      "A": "Bloquear el acceso legítimo paraliza el trabajo de ingeniería.",
      "B": "La gestión usuario por usuario en múltiples proyectos es propensa a errores, inauditable e insostenible a escala.",
      "C": "Opción correcta.",
      "D": "Compartir contraseñas maestras destruye la auditoría y viola todos los estándares de seguridad."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/groups-in-cloud-console",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-007",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Identity e Inicio de Sesión Único (SSO / SAML 2.0)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Federación de Identidades Corporativas con Cloud Identity y SSO",
    "scenario": "Una corporación utiliza Microsoft Active Directory / Azure AD (Entra ID) o Okta como su proveedor de identidad corporativo principal. Desean que los empleados utilicen sus mismas credenciales empresariales existentes y su sistema de autenticación de dos factores para acceder a la consola de Google Cloud sin tener que crear ni gestionar cuentas de correo independientes. ¿Qué servicio de Google Cloud permite esta federación?",
    "keywords": [
      "Cloud Identity",
      "Single Sign-On",
      "SSO",
      "SAML 2.0",
      "Active Directory",
      "Federación de identidades"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Crear cuentas personales de @gmail.com no administradas para cada empleado",
        "isTrap": true,
        "trapType": "shadow_it_antipattern"
      },
      {
        "letter": "C",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "telecom_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Identity federado con el proveedor de identidad existente mediante SAML 2.0 / Single Sign-On (SSO)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Identity es la solución Identity as a Service (IDaaS) de Google que permite a las empresas gestionar usuarios y dispositivos centralizadamente, federando el inicio de sesión único (SSO con SAML 2.0/OIDC) con proveedores existentes como Active Directory, Azure AD u Okta.",
    "distractors": {
      "A": "Cloud Storage Coldline almacena archivos de acceso infrecuente.",
      "B": "Usar cuentas @gmail.com personales no corporativas impide la gobernanza, revocación centralizada y auditoría de la empresa.",
      "C": "Cloud Interconnect es conectividad física de redes, no un proveedor de identidades.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/identity/docs",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-008",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Autenticación Multifactor (MFA / 2SV) y Llaves de Seguridad FIDO2 Titan",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Protección Contra Phishing con Autenticación de Dos Pasos y Llaves de Seguridad FIDO2",
    "scenario": "Para proteger las cuentas de administradores contra ataques de phishing y robo de credenciales, la empresa busca implementar el método de autenticación multifactor (MFA) más seguro y resistente a la interceptación en tiempo real. ¿Qué método de verificación en dos pasos (2SV) ofrece la máxima protección?",
    "keywords": [
      "MFA",
      "2-Step Verification",
      "2SV",
      "Llaves de seguridad Titan",
      "FIDO2",
      "Resistente a phishing"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Llaves de seguridad físicas FIDO2 / WebAuthn (como las Google Titan Security Keys)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Mensajes de texto SMS sin cifrar a un teléfono móvil",
        "isTrap": true,
        "trapType": "sms_phishing_vulnerability"
      },
      {
        "letter": "C",
        "text": "Desactivar todas las contraseñas para que no puedan ser robadas",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Responder una pregunta secreta pública como '¿cuál es tu color favorito?'",
        "isTrap": true,
        "trapType": "weak_security_question"
      }
    ],
    "correct": "A",
    "explanation": "Las llaves de seguridad físicas compatibles con el estándar FIDO2/WebAuthn (como las Titan Security Keys de Google) proporcionan la protección más sólida contra phishing, ataques intermediarios (man-in-the-middle) y robo de credenciales, ya que utilizan criptografía asimétrica vinculada al dominio legítimo del servicio.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Los SMS son vulnerables a ataques de intercambio de SIM (SIM swapping) e interceptación.",
      "C": "Eliminar contraseñas sin autenticación alternativa deja las cuentas abiertas al acceso no autorizado.",
      "D": "Las preguntas de seguridad son fácilmente deducibles mediante ingeniería social."
    },
    "officialDocUrl": "https://cloud.google.com/titan-security-key",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-009",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Workload Identity Federation: Eliminación de Llaves de Servicio Estáticas",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Acceso Seguro desde AWS, Azure o GitHub Actions sin Llaves JSON con Workload Identity Federation",
    "scenario": "Una canalización de CI/CD alojada en GitHub Actions fuera de Google Cloud necesita desplegar contenedores en GKE. El equipo de seguridad prohíbe terminantemente crear archivos de claves privadas JSON de Service Account debido a filtraciones recurrentes en repositorios de código. ¿Qué mecanismo moderno permite que GitHub Actions se autentique de forma federada intercambiando tokens OIDC efímeros por credenciales temporales de Google Cloud?",
    "keywords": [
      "Workload Identity Federation",
      "Sin llaves de Service Account",
      "GitHub Actions",
      "OIDC",
      "Tokens temporales"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Desactivar la seguridad de GKE",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "B",
        "text": "Workload Identity Federation (Federación de Identidades para Cargas de Trabajo)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Descargar una clave JSON con permisos de Owner y subirla al repositorio público",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Workload Identity Federation permite que aplicaciones que se ejecutan fuera de Google Cloud (en GitHub Actions, AWS, Azure o centros de datos locales) utilicen identidades externas (OIDC/SAML) para suplantar una Service Account y obtener credenciales de acceso de corta duración sin necesidad de crear, descargar ni gestionar claves de servicio JSON de larga vida.",
    "distractors": {
      "A": "Desactivar la seguridad expone los clústeres de cómputo a ataques destructivos.",
      "B": "Opción correcta.",
      "C": "Subir claves JSON privadas de larga duración a repositorios es una de las principales causas de compromisos y hackeos en la nube.",
      "D": "Cloud Storage Nearline almacena archivos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/workload-identity-federation",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-010",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Arquitectura Zero Trust y BeyondCorp Enterprise",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Seguridad Basada en el Modelo Zero Trust con BeyondCorp Enterprise",
    "scenario": "Una empresa desea eliminar su compleja y costosa VPN corporativa tradicional. Quieren que los empleados remotos accedan a las aplicaciones web internas desde cualquier lugar del mundo de forma segura, evaluando dinámicamente en cada solicitud: la identidad del usuario, el estado de seguridad de su dispositivo (antivirus activo, disco cifrado) y su contexto de ubicación (Context-Aware Access), bajo el principio de 'nunca confiar, siempre verificar'. ¿Cómo se denomina esta solución de Google Cloud?",
    "keywords": [
      "BeyondCorp Enterprise",
      "Zero Trust",
      "Context-Aware Access",
      "Sin VPN tradicional",
      "Nunca confiar siempre verificar"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Obligar a los empleados a vivir dentro del centro de datos físico",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "BeyondCorp Enterprise (la implementación de arquitectura Zero Trust de Google)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Una red Wi-Fi pública abierta en un centro comercial sin contraseña",
        "isTrap": true,
        "trapType": "insecure_network"
      }
    ],
    "correct": "C",
    "explanation": "BeyondCorp Enterprise es la solución Zero Trust de Google Cloud que reemplaza los perímetros de VPN tradicionales por un modelo de seguridad centrado en la identidad y el contexto del dispositivo (Context-Aware Access), permitiendo a los empleados acceder de forma segura a aplicaciones web e infraestructura desde cualquier red.",
    "distractors": {
      "A": "Cloud Storage Archive almacena objetos pasivos.",
      "B": "Obligar la presencia física continua no es viable en el entorno laboral moderno.",
      "C": "Opción correcta.",
      "D": "Las redes Wi-Fi abiertas sin cifrado permiten la interceptación de tráfico."
    },
    "officialDocUrl": "https://cloud.google.com/beyondcorp-enterprise",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-011",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Key Management Service (Cloud KMS) y Tipos de Llaves Criptográficas",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Gestión Centralizada de Llaves Criptográficas con Cloud KMS",
    "scenario": "Un oficial de cumplimiento normativo solicita conocer las opciones disponibles para la gestión de claves de cifrado en Google Cloud. ¿Cuáles son los tres niveles principales de gestión de claves que soporta la plataforma?",
    "keywords": [
      "Cloud KMS",
      "Google-Managed Keys",
      "CMEK",
      "CSEK",
      "Cloud HSM",
      "Niveles de cifrado"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Cloud solo admite guardar contraseñas en archivos de texto TXT sin cifrar.",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "B",
        "text": "Solo existe un tipo de clave única compartida por todos los 8,000 millones de habitantes del planeta.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline es el único servicio que permite cifrado.",
        "isTrap": true,
        "trapType": "false_limitation"
      },
      {
        "letter": "D",
        "text": "(1) Claves gestionadas por Google (predeterminadas y transparentes); (2) Claves de cifrado gestionadas por el cliente (CMEK a través de Cloud KMS / Cloud HSM); y (3) Claves de cifrado suministradas por el cliente (CSEK).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud ofrece tres niveles de control de claves: (1) Google-Managed (cifrado por defecto sin gestión), (2) CMEK (Customer-Managed Encryption Keys gestionadas en Cloud KMS o módulos de seguridad física Cloud HSM con FIPS 140-2 Nivel 3), y (3) CSEK (Customer-Supplied Encryption Keys donde el cliente custodia las claves fuera de Google).",
    "distractors": {
      "A": "Google Cloud ofrece cifrado de grado militar y nunca almacena claves en texto plano accesible.",
      "B": "Las claves son criptográficamente únicas y aisladas por proyecto y recurso.",
      "C": "Todos los servicios de almacenamiento, bases de datos y cómputo de Google Cloud cifran datos por defecto.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/kms/docs",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-012",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud HSM: Módulos de Seguridad de Hardware Certificados FIPS 140-2 Nivel 3",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Cumplimiento Criptográfico Riguroso con Cloud HSM",
    "scenario": "Una entidad financiera internacional está sujeta a regulaciones que exigen que sus claves criptográficas maestras residan exclusivamente dentro de Módulos de Seguridad de Hardware (Hardware Security Modules - HSM) certificados bajo el estándar FIPS 140-2 Nivel 3, garantizando que las claves nunca salgan del hardware físico. ¿Qué servicio administrado de Google Cloud cumple con esta certificación?",
    "keywords": [
      "Cloud HSM",
      "FIPS 140-2 Nivel 3",
      "Hardware Security Module",
      "Módulos de seguridad física",
      "Criptografía bancaria"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud HSM (integrado dentro de Cloud KMS)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Google Fonts API",
        "isTrap": true,
        "trapType": "font_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "D",
        "text": "Compute Engine Spot Instances",
        "isTrap": true,
        "trapType": "compute_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Cloud HSM es un servicio de módulos de seguridad de hardware en la nube totalmente administrado que permite alojar claves de cifrado y realizar operaciones criptográficas dentro de clústeres HSM certificados FIPS 140-2 Nivel 3 sin la sobrecarga de mantener hardware físico local.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Google Fonts es un servicio de tipografías web.",
      "C": "Cloud DNS gestiona nombres de dominio.",
      "D": "Spot Instances son máquinas virtuales temporales con descuento."
    },
    "officialDocUrl": "https://cloud.google.com/kms/docs/hsm",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-013",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Security Command Center (SCC): Gestión de Postura de Seguridad y Detección de Amenazas",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Plataforma Centralizada de Seguridad y Detección de Amenazas con Security Command Center (SCC)",
    "scenario": "El Director de Seguridad de la Información (CISO) necesita un panel centralizado a nivel de toda la organización que: (1) Descubra automáticamente activos de infraestructura y malas configuraciones de seguridad (como buckets públicos accidentales o puertos abiertos al mundo), (2) Detecte amenazas en tiempo real (como minería de criptomonedas o credenciales filtradas), y (3) Mida el cumplimiento con estándares como CIS, PCI-DSS e ISO 27001. ¿Qué servicio de Google Cloud proporciona esta visibilidad?",
    "keywords": [
      "Security Command Center",
      "SCC",
      "Detección de amenazas",
      "Gestión de postura de seguridad",
      "Cumplimiento normativo",
      "CSGF"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Trace",
        "isTrap": true,
        "trapType": "observability_mismatch"
      },
      {
        "letter": "B",
        "text": "Security Command Center (SCC)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Billing Budgets",
        "isTrap": true,
        "trapType": "billing_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Security Command Center (SCC) es la plataforma integral de gestión de la postura de seguridad en la nube (CSPM) y protección de cargas de trabajo (CWPP) de Google Cloud, que monitorea activos, detecta vulnerabilidades, identifica amenazas activas y evalúa el cumplimiento normativo en toda la organización.",
    "distractors": {
      "A": "Cloud Trace mide la latencia de llamadas entre servicios web.",
      "B": "Opción correcta.",
      "C": "Cloud Billing Budgets supervisa costos financieros.",
      "D": "Cloud Storage Nearline almacena archivos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/security-command-center/docs",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-014",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Security Command Center: Nivel Estándar vs Nivel Premium",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferenciación entre Security Command Center Standard y Premium / Enterprise",
    "scenario": "Una empresa evalúa el nivel de Security Command Center a contratar: el nivel Standard ofrece inventario básico de activos y escaneo de vulnerabilidades web; mientras que el nivel Premium agrega detección avanzada de amenazas con IA (Event Threat Detection, Container Threat Detection, Virtual Machine Threat Detection) y reportes automáticos de cumplimiento regulatorio (PCI-DSS, NIST). ¿Cuál es la justificación para adoptar el nivel Premium?",
    "keywords": [
      "SCC Premium",
      "Event Threat Detection",
      "Container Threat Detection",
      "VM Threat Detection",
      "Cumplimiento PCI-DSS"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "SCC Premium es obligatorio para poder encender una sola máquina virtual en Google Cloud.",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "B",
        "text": "SCC Standard borra todos los proyectos de la empresa cada fin de semana.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "SCC Premium proporciona detección avanzada de amenazas en tiempo real a nivel de eventos de red, contenedores en GKE y memoria de VMs, además de evaluación continua y automatizada de cumplimiento con estándares regulatorios internacionales.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "No existe ninguna diferencia técnica entre ambos niveles.",
        "isTrap": true,
        "trapType": "false_claim"
      }
    ],
    "correct": "C",
    "explanation": "Security Command Center Premium (y Enterprise) desbloquea motores de detección de amenazas de nivel empresarial impulsados por inteligencia de amenazas de Mandiant y Google (detección de malware en memoria de VMs, ataques a contenedores, anomalías en logs) y cuadros de mando de cumplimiento normativo continuo.",
    "distractors": {
      "A": "SCC Premium es un servicio opcional de seguridad avanzada; las VMs pueden funcionar sin él.",
      "B": "SCC Standard no elimina proyectos; es una capa de seguridad básica gratuita.",
      "C": "Opción correcta.",
      "D": "Existen diferencias críticas en capacidades de detección de amenazas activas y análisis de cumplimiento."
    },
    "officialDocUrl": "https://cloud.google.com/security-command-center/docs/concepts-tiers",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D4-015",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Operations Suite: Visibilidad Integral (Monitoreo, Registro, Rastreo)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Pilares de la Observabilidad con Google Cloud Operations Suite (anteriormente Stackdriver)",
    "scenario": "Un equipo de operaciones de TI necesita una suite integral para supervisar la salud de sus sistemas en la nube y entornos híbridos, que incluya: métricas y paneles gráficos (Monitoring), recopilación centralizada de registros (Logging), trazabilidad de llamadas de microservicios (Trace) y perfiles de rendimiento de CPU/memoria (Profiler). ¿Cómo se denomina este conjunto de herramientas?",
    "keywords": [
      "Cloud Operations Suite",
      "Cloud Monitoring",
      "Cloud Logging",
      "Cloud Trace",
      "Cloud Profiler",
      "Observabilidad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Domains",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "Google Workspace Meet",
        "isTrap": true,
        "trapType": "video_conferencing_mismatch"
      },
      {
        "letter": "D",
        "text": "Google Cloud Operations Suite (anteriormente Stackdriver)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud Operations Suite (anteriormente conocido como Stackdriver) es la solución integrada de observabilidad de Google Cloud que proporciona monitoreo de métricas (Cloud Monitoring), administración de registros (Cloud Logging), rastreo distribuido de latencia (Cloud Trace), perfilado de código (Cloud Profiler) y reporte de errores (Error Reporting).",
    "distractors": {
      "A": "Cloud Domains es para registro de nombres de dominio.",
      "B": "Cloud Storage Archive es para almacenamiento pasivo de copias de seguridad de largo plazo.",
      "C": "Google Meet es una herramienta de videollamadas para usuarios.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/products/operations",
    "blockId": "BLOCK-1"
  },
  {
    "id": "CDL-D1-006",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Google Cloud Adoption Framework (CAF) - Pilar Secure",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Gobernanza, Privacidad y Cumplimiento con el Pilar Secure",
    "scenario": "Una entidad bancaria necesita implementar controles estrictos de acceso basados en el principio de menor privilegio, cifrado de datos extremo a extremo y auditoría continua para cumplir con regulaciones financieras. ¿Qué pilar del Google Cloud Adoption Framework evalúa esta preparación?",
    "keywords": [
      "Pilar Secure",
      "Seguridad",
      "Menor privilegio",
      "Cumplimiento normativo",
      "Gobernanza"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Pilar Lead (Liderar)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      },
      {
        "letter": "B",
        "text": "Pilar Secure (Asegurar)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Pilar Scale (Escalar)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      },
      {
        "letter": "D",
        "text": "Pilar Learn (Aprender)",
        "isTrap": true,
        "trapType": "adjacent_pillar"
      }
    ],
    "correct": "B",
    "explanation": "El pilar 'Secure' del CAF establece las directrices de seguridad, gobierno de identidades, gestión de accesos, protección de datos y cumplimiento normativo para proteger los activos empresariales en la nube.",
    "distractors": {
      "A": "Lead evalúa patrocinio directivo y cambio cultural.",
      "B": "Opción correcta.",
      "C": "Scale analiza automatización y arquitectura técnica.",
      "D": "Learn se enfoca en capacitación técnica."
    },
    "officialDocUrl": "https://cloud.google.com/adoption-framework",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D1-007",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Fases de Madurez de Adopción de Nube: Táctica, Estratégica, Transformacional",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Identificación de la Etapa de Madurez Transformacional",
    "scenario": "Una organización ha rediseñado completamente su modelo de negocio: utiliza inteligencia artificial integrada en tiempo real en todos sus productos, sus equipos entregan código a producción múltiples veces al día mediante microservicios serverless, y la innovación impulsa nuevos flujos de ingresos. Según el CAF, ¿en qué etapa de madurez se encuentra esta empresa?",
    "keywords": [
      "Fase Transformacional",
      "Madurez de nube",
      "IA integrada",
      "Innovación de negocio",
      "Cloud Native"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Etapa Táctica (Tactical)",
        "isTrap": true,
        "trapType": "lower_maturity_stage"
      },
      {
        "letter": "B",
        "text": "Etapa Estratégica (Strategic)",
        "isTrap": true,
        "trapType": "lower_maturity_stage"
      },
      {
        "letter": "C",
        "text": "Etapa Transformacional (Transformational)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Etapa Inicial de Exploración",
        "isTrap": true,
        "trapType": "non_standard_term"
      }
    ],
    "correct": "C",
    "explanation": "La etapa Transformacional representa el nivel más alto de madurez del Cloud Adoption Framework, donde la nube no solo optimiza costos u operaciones, sino que redefine activamente el modelo de negocio, impulsa la innovación con IA y crea ventajas competitivas sostenibles.",
    "distractors": {
      "A": "La etapa Táctica se enfoca en migraciones puntuales y reducción de costos inmediatos sin cambiar procesos centrales.",
      "B": "La etapa Estratégica consolida la adopción mediante gobernanza estandarizada y arquitecturas en la nube, pero sin alcanzar la disrupción total del negocio.",
      "C": "Opción correcta.",
      "D": "No es una categoría formal de madurez dentro del Google Cloud Adoption Framework."
    },
    "officialDocUrl": "https://cloud.google.com/adoption-framework",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D1-008",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Cultura DevOps / SRE: Autopsias Sin Culpa (Blameless Post-mortems)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Fomento de una Cultura de Seguridad Psicológica con Blameless Post-mortems",
    "scenario": "Tras una interrupción mayor del servicio causada por una configuración errónea durante un despliegue de emergencia, el equipo de liderazgo de TI desea evitar que vuelva a ocurrir sin penalizar al ingeniero responsable. Siguiendo las prácticas de Site Reliability Engineering (SRE) de Google, ¿qué práctica cultural se debe adoptar?",
    "keywords": [
      "Blameless Post-mortem",
      "Autopsia sin culpa",
      "SRE",
      "Seguridad psicológica",
      "Causa raíz"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Realizar una autopsia sin culpa (Blameless Post-mortem) que examine las fallas sistémicas del proceso y las herramientas, asumiendo que los empleados actuaron de buena fe.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Ocultar el incidente a la organización para proteger la reputación del equipo técnico.",
        "isTrap": true,
        "trapType": "unethical_antipattern"
      },
      {
        "letter": "C",
        "text": "Suspender los permisos del ingeniero que realizó el cambio para prevenir incidentes futuros.",
        "isTrap": true,
        "trapType": "punitive_antipattern"
      },
      {
        "letter": "D",
        "text": "Prohibir todos los despliegues de emergencia e imponer aprobaciones manuales de cinco directores para cada cambio.",
        "isTrap": true,
        "trapType": "bureaucratic_antipattern"
      }
    ],
    "correct": "A",
    "explanation": "Una autopsia sin culpa (Blameless Post-mortem) se centra en entender cómo el sistema permitió que ocurriera el error humano y cómo reforzar los procesos, salvaguardas y automatizaciones para evitar su recurrencia, construyendo una cultura de aprendizaje y alta confianza.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Ocultar incidentes impide que la organización aprenda y mejora sus estándares operativos.",
      "C": "Castigar a los individuos genera miedo, oculta incidentes futuros e ignora las causas sistémicas del fallo.",
      "D": "Añadir burocracia excesiva destruye la agilidad empresarial y no soluciona los defectos técnicos de fondo."
    },
    "officialDocUrl": "https://cloud.google.com/blog/products/devops-sre/why-you-should-practice-blameless-postmortems",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D1-009",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Eliminación de Silos de Datos y Datos Compartidos",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Ruptura de Silos Organizacionales mediante la Nube",
    "scenario": "En una empresa de comercio minorista, los datos de ventas en tiendas físicas, inventarios y ventas en línea están almacenados en sistemas independientes que no se comunican entre sí, impidiendo una visión unificada del cliente. ¿Cuál es el principal beneficio de unificar estos datos en Google Cloud?",
    "keywords": [
      "Silos de datos",
      "Visión unificada",
      "Democratización de datos",
      "Analítica integral"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Reemplazar los sistemas digitales por registros manuales en papel para reducir el consumo de nube.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Eliminar los silos de datos para democratizar el acceso a la información y habilitar analítica omnicanal en tiempo real para la toma de decisiones.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Aislar aún más los sistemas para evitar que los departamentos compartan información comercial.",
        "isTrap": true,
        "trapType": "opposite_strategy"
      },
      {
        "letter": "D",
        "text": "Restringir el acceso a los datos únicamente al departamento de finanzas mediante contraseñas compartidas.",
        "isTrap": true,
        "trapType": "security_violation"
      }
    ],
    "correct": "B",
    "explanation": "Consolidar datos dispersos en una plataforma unificada en Google Cloud rompe los silos organizacionales, democratiza la información y permite generar analítica predictiva y reportes en tiempo real accesibles para todos los tomadores de decisiones.",
    "distractors": {
      "A": "Regresar a procesos manuales contradice los principios fundamentales de la transformación digital.",
      "B": "Opción correcta.",
      "C": "Aislar más los sistemas incrementa la ineficiencia operativa y fragmenta la visión estratégica del negocio.",
      "D": "Restringir los datos innecesariamente y usar contraseñas compartidas viola la seguridad y perpetúa los silos."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/data-warehouse",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D1-010",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Elasticidad vs Escalabilidad en la Nube",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferencia Fundamental entre Escalabilidad y Elasticidad",
    "scenario": "Una empresa de comercio electrónico experimenta picos masivos de tráfico durante el Black Friday que duran pocas horas, seguidos de periodos de baja demanda. ¿Qué concepto de computación en la nube describe la capacidad del sistema para aumentar y reducir automáticamente los recursos según la demanda en tiempo real?",
    "keywords": [
      "Elasticidad",
      "Escalabilidad",
      "Auto-escalado",
      "Picos de tráfico",
      "Optimización de costos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Tolerancia a fallos estática",
        "isTrap": true,
        "trapType": "static_misconception"
      },
      {
        "letter": "B",
        "text": "Sobredimensionamiento de infraestructura (Overprovisioning)",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "C",
        "text": "Elasticidad (Elasticity)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Aprovisionamiento manual mediante tickets de soporte",
        "isTrap": true,
        "trapType": "manual_overhead"
      }
    ],
    "correct": "C",
    "explanation": "La elasticidad es la capacidad del sistema de ajustar dinámicamente la capacidad de cómputo y almacenamiento hacia arriba y hacia abajo de forma automática según la demanda cambiante, garantizando rendimiento y evitando pagar por capacidad ociosa.",
    "distractors": {
      "A": "La tolerancia a fallos se refiere a la capacidad de continuar operando ante fallos de componentes, no a ajustar recursos según la demanda.",
      "B": "El sobredimensionamiento es una práctica costosa del centro de datos tradicional que la nube busca eliminar.",
      "C": "Opción correcta.",
      "D": "El aprovisionamiento manual mediante tickets es lento e incompatible con la dinámica de picos de tráfico en tiempo real."
    },
    "officialDocUrl": "https://cloud.google.com/learn/what-is-cloud-computing",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-016",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Firestore: Base de Datos NoSQL de Documentos para Aplicaciones Web y Móviles",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Base de Datos NoSQL con Sincronización en Tiempo Real y Modo Sin Conexión (Firestore)",
    "scenario": "Una empresa de entregas a domicilio está desarrollando una aplicación móvil para sus repartidores. La app requiere almacenar perfiles y estados de pedidos en documentos JSON flexibles, sincronizar cambios en tiempo real entre el repartidor y el cliente, y permitir que la app siga funcionando sin conexión cuando no haya señal celular. ¿Qué base de datos es la ideal?",
    "keywords": [
      "Firestore",
      "Sincronización en tiempo real",
      "Modo offline",
      "Base de datos NoSQL de documentos",
      "Mobile apps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Filestore",
        "isTrap": true,
        "trapType": "nfs_storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Bigtable",
        "isTrap": true,
        "trapType": "nosql_analytical_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Spanner",
        "isTrap": true,
        "trapType": "heavy_relational_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Firestore",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Firestore es la base de datos NoSQL de documentos serverless de Google Cloud y Firebase, diseñada específicamente para aplicaciones web y móviles con soporte nativo de listeners en tiempo real y persistencia local sin conexión.",
    "distractors": {
      "A": "Filestore es un almacenamiento de archivos NFS para máquinas virtuales, no una base de datos de aplicaciones.",
      "B": "Cloud Bigtable no ofrece SDKs cliente para móviles con sincronización automática en tiempo real ni soporte offline.",
      "C": "Cloud Spanner es una base de datos relacional para backend corporativo a gran escala, no está diseñada para sincronización directa en SDKs móviles.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/firestore/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-017",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Bigtable: Base de Datos NoSQL para Grandes Volúmenes de Series Temporales e IoT",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Ingesta de Telemetría Masiva de Millones de Sensores IoT con Cloud Bigtable",
    "scenario": "Una empresa de transporte global gestiona 500,000 vehículos conectados que envían lecturas de velocidad, temperatura del motor y ubicación GPS cada segundo (más de 100,000 escrituras por segundo). Necesitan una base de datos NoSQL que gestione petabytes de datos con latencias de lectura y escritura de un solo dígito de milisegundos. ¿Qué servicio deben elegir?",
    "keywords": [
      "Cloud Bigtable",
      "IoT",
      "Series temporales",
      "Baja latencia sub-10ms",
      "Millones de operaciones por segundo",
      "Petabytes"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Bigtable",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Google Sheets",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "cold_storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud SQL para MySQL",
        "isTrap": true,
        "trapType": "relational_throughput_bottleneck"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Bigtable es la base de datos NoSQL de columnas anchas de nivel de petabytes de Google Cloud, optimizada para cargas analíticas masivas, ingesta de telemetría IoT y streaming con latencias ultra bajas y escalabilidad horizontal lineal.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Google Sheets tiene límites estrictos de filas y no es una base de datos para ingesta masiva de IoT.",
      "C": "Cloud Storage Coldline es para archivos fríos de acceso infrecuente, no para bases de datos de alta frecuencia de escritura.",
      "D": "Cloud SQL no está diseñado para soportar cientos de miles de escrituras por segundo continuas en escala de petabytes."
    },
    "officialDocUrl": "https://cloud.google.com/bigtable/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-018",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Memorystore: Caché en Memoria (Redis y Memcached)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aceleración de Respuestas de Aplicaciones con Cloud Memorystore",
    "scenario": "Un juego móvil multijugador experimenta lentitud al cargar las tablas de clasificación (leaderboards) y las sesiones de usuario desde la base de datos central. Necesitan una capa de almacenamiento en memoria RAM de latencia sub-milisegundo totalmente compatible con Redis. ¿Qué servicio administrado deben desplegar?",
    "keywords": [
      "Cloud Memorystore",
      "Redis",
      "Memcached",
      "Caché en memoria",
      "Latencia sub-milisegundo"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "archive_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Memorystore for Redis",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Bigtable",
        "isTrap": true,
        "trapType": "disk_nosql_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Logging",
        "isTrap": true,
        "trapType": "logging_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Memorystore ofrece un servicio de almacenamiento en memoria totalmente administrado para Redis y Memcached, proporcionando latencias de respuesta de sub-milisegundos para sesiones de usuario, tablas de líderes y cachés de alto rendimiento.",
    "distractors": {
      "A": "Archive Storage tiene alta latencia de recuperación y costos de lectura, siendo lo opuesto a una memoria caché.",
      "B": "Opción correcta.",
      "C": "Bigtable ofrece latencia de un dígito de milisegundo (ej. 5ms), pero Memorystore en RAM ofrece sub-milisegundos (microsegundos).",
      "D": "Cloud Logging es un servicio para recolectar registros de auditoría y sistema, no un almacén de datos de aplicación."
    },
    "officialDocUrl": "https://cloud.google.com/memorystore/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-019",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Matriz de Selección de Almacenamiento y Bases de Datos",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Selección del Almacén Adecuado: Relacional vs NoSQL vs Objetos vs Data Warehouse",
    "scenario": "Un equipo directivo requiere alinear sus cargas con los servicios correctos: (1) Archivos multimedia no estructurados, (2) Catálogo de productos relacional transaccional, y (3) Análisis masivo de ventas históricas con SQL. ¿Cuál es la asignación correcta?",
    "keywords": [
      "Matriz de almacenamiento",
      "Cloud Storage",
      "Cloud SQL",
      "BigQuery",
      "Alineación de arquitectura"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "(1) Memorystore, (2) Memorystore, (3) Memorystore",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "(1) BigQuery, (2) Cloud Storage, (3) Cloud SQL",
        "isTrap": true,
        "trapType": "misaligned_services"
      },
      {
        "letter": "C",
        "text": "(1) Cloud Storage, (2) Cloud SQL, (3) BigQuery",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "(1) Cloud SQL, (2) BigQuery, (3) Cloud Storage",
        "isTrap": true,
        "trapType": "misaligned_services"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Storage almacena objetos y archivos no estructurados (multimedia); Cloud SQL gestiona bases de datos relacionales transaccionales OLTP (catálogo); y BigQuery es el almacén de datos empresarial OLAP para analítica masiva con SQL.",
    "distractors": {
      "A": "Memorystore es solo caché volátil en RAM, no almacenamiento persistente principal para estas cargas.",
      "B": "BigQuery no es para guardar videos individuales; Cloud Storage no es para catálogos relacionales transaccionales.",
      "C": "Opción correcta.",
      "D": "Cloud SQL no está diseñado para archivos de video gigantescos; BigQuery no es un motor transaccional de e-commerce OLTP."
    },
    "officialDocUrl": "https://cloud.google.com/products/databases",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-020",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Datos Estructurados vs No Estructurados vs Semi-estructurados",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Clasificación de Tipos de Datos en el Entorno Empresarial",
    "scenario": "Una compañía maneja tres tipos de información: (1) Tablas SQL con esquemas rígidos de clientes, (2) Documentos de registro en formato JSON con esquemas dinámicos, y (3) Archivos de audio y video de llamadas de soporte. ¿Cómo se clasifican respectivamente?",
    "keywords": [
      "Datos estructurados",
      "Datos semi-estructurados",
      "Datos no estructurados",
      "Tipos de datos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "(1) Semi-estructurados, (2) No estructurados, (3) Estructurados",
        "isTrap": true,
        "trapType": "inverted_definition"
      },
      {
        "letter": "B",
        "text": "Todos son considerados datos idénticos sin ninguna distinción en la nube",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "(1) No estructurados, (2) Estructurados, (3) Semi-estructurados",
        "isTrap": true,
        "trapType": "inverted_definition"
      },
      {
        "letter": "D",
        "text": "(1) Estructurados, (2) Semi-estructurados, (3) No estructurados",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Los datos estructurados tienen esquemas formales y tabulares (tablas relacionales SQL); los semi-estructurados tienen etiquetas y jerarquías sin esquema fijo rígido (JSON, XML); y los no estructurados no poseen un modelo de datos predefinido (audio, video, PDFs, imágenes).",
    "distractors": {
      "A": "Invierte las definiciones fundamentales de bases de datos relacionales y archivos binarios.",
      "B": "Ignorar la estructura de los datos impide elegir los servicios adecuados de almacenamiento y procesamiento.",
      "C": "Clasifica erróneamente las tablas SQL como no estructuradas y el video como semi-estructurado.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/learn/what-is-unstructured-data",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-021",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Procesamiento por Lotes (Batch) vs Procesamiento en Streaming",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferenciación entre Procesamiento por Lotes (Batch) y Transmisión en Tiempo Real (Streaming)",
    "scenario": "El equipo de ingeniería de datos debe procesar: (1) Las nóminas quincenales de la empresa, y (2) La detección instantánea de fraudes con tarjetas de crédito en el momento en que se desliza la tarjeta. ¿Qué paradigma de procesamiento corresponde a cada caso?",
    "keywords": [
      "Procesamiento por lotes",
      "Batch",
      "Streaming",
      "Tiempo real",
      "Detección de fraude"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "(1) Procesamiento por lotes (Batch), (2) Procesamiento en tiempo real (Streaming)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "(1) Procesamiento en tiempo real (Streaming), (2) Procesamiento por lotes (Batch)",
        "isTrap": true,
        "trapType": "inverted_paradigm"
      },
      {
        "letter": "C",
        "text": "Ambos deben procesarse una vez al año mediante un script manual",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "La detección de fraude nunca debe procesarse para evitar alertar al cliente",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "A",
    "explanation": "El procesamiento por lotes (Batch) procesa grandes volúmenes de datos acumulados a intervalos programados (como la nómina), mientras que el procesamiento en streaming procesa eventos individuales de forma continua e inmediata conforme ocurren (detección de fraude en milisegundos).",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Procesar la detección de fraude por lotes permitiría a los atacantes vaciar las cuentas antes de que el lote nocturno se ejecute.",
      "C": "El fraude exige respuesta inmediata; no puede esperar a fin de año.",
      "D": "La detección de fraude es un requisito de seguridad crítico para cualquier institución financiera."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/stream-analytics",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-022",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Conceptos de Lago de Datos (Data Lake) vs Almacén de Datos (Data Warehouse)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferencia Fundamental entre Data Lake y Data Warehouse",
    "scenario": "Durante una sesión de planificación estratégica de datos, un arquitecto explica la diferencia entre almacenar datos crudos en un Data Lake frente a consolidar datos limpios y modelados en un Data Warehouse. ¿Cómo se mapean estos conceptos a los servicios de Google Cloud?",
    "keywords": [
      "Data Lake",
      "Data Warehouse",
      "Cloud Storage",
      "BigQuery",
      "Datos crudos vs modelados"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "No existe ninguna diferencia; ambos son nombres comerciales para discos duros físicos locales.",
        "isTrap": true,
        "trapType": "legacy_misconception"
      },
      {
        "letter": "B",
        "text": "Cloud Storage actúa típicamente como el Data Lake (almacenando datos crudos en cualquier formato), mientras que BigQuery funciona como el Data Warehouse empresarial (almacenando datos estructurados y modelados para analítica SQL de alto rendimiento).",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Storage es únicamente un Data Warehouse y BigQuery solo sirve para guardar videos MP4.",
        "isTrap": true,
        "trapType": "inverted_definition"
      },
      {
        "letter": "D",
        "text": "Un Data Lake solo puede construirse con máquinas virtuales Windows apagadas.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "Un Data Lake (Cloud Storage) almacena volúmenes masivos de datos en su formato nativo crudo (estructurado, no estructurado o semi-estructurado). Un Data Warehouse (BigQuery) organiza y optimiza datos limpios y transformados para consultas analíticas estructuradas de negocio.",
    "distractors": {
      "A": "Data Lake y Data Warehouse son patrones arquitectónicos modernos bien diferenciados en la nube.",
      "B": "Opción correcta.",
      "C": "BigQuery es un almacén de datos analítico columnar, no un repositorio de streaming de video crudo.",
      "D": "Las VMs apagadas no prestan ningún servicio de ingesta ni almacenamiento de datos."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/smart-analytics",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-023",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Arquitectura de BigQuery: Desacoplamiento de Almacenamiento y Cómputo",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Ventaja del Desacoplamiento de Almacenamiento y Cómputo en BigQuery",
    "scenario": "Un científico de datos necesita ejecutar una consulta analítica masiva muy compleja una vez al mes sobre 50 Terabytes de datos. Durante el resto del mes, los datos solo permanecen almacenados sin recibir consultas. ¿Por qué la arquitectura de BigQuery es altamente costo-eficiente para este escenario?",
    "keywords": [
      "BigQuery",
      "Desacoplamiento",
      "Almacenamiento y cómputo separados",
      "Serverless",
      "Costo por consulta"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Porque BigQuery borra automáticamente todos los datos después de ejecutar la primera consulta.",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "B",
        "text": "Porque BigQuery no permite consultar más de 10 megabytes de información al año.",
        "isTrap": true,
        "trapType": "false_limitation"
      },
      {
        "letter": "C",
        "text": "Porque BigQuery desacopla totalmente el almacenamiento del cómputo: la empresa solo paga una tarifa muy baja por almacenar los datos en reposo y solo paga por los recursos de cómputo (slots/bytes escaneados) durante los segundos que dura la consulta.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Porque BigQuery obliga a mantener un clúster de servidores de cómputo encendido y facturando al 100% las 24 horas del día durante todo el mes.",
        "isTrap": true,
        "trapType": "legacy_dw_antipattern"
      }
    ],
    "correct": "C",
    "explanation": "El desacoplamiento de almacenamiento (Colossus) y cómputo (Dremel) en BigQuery permite escalar cada componente de forma independiente. Esto elimina la necesidad de aprovisionar y pagar por servidores de cómputo ociosos cuando no se están ejecutando consultas analíticas.",
    "distractors": {
      "A": "BigQuery almacena los datos de forma persistente y altamente duradera.",
      "B": "BigQuery procesa petabytes y exabytes de datos de manera rutinaria.",
      "C": "Opción correcta.",
      "D": "Mantener clústeres dedicados permanentes 24/7 es el modelo de los almacenes de datos tradicionales obsoletos que BigQuery supera."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/architecture",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-024",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Optimización de Consultas en BigQuery: Particionamiento y Agrupamiento (Clustering)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Reducción de Costos y Mejora de Rendimiento con Tablas Particionadas en BigQuery",
    "scenario": "Una empresa de telecomunicaciones consulta registros de llamadas en BigQuery filtrando siempre por la columna de fecha (`call_date`). Para evitar escanear la tabla completa de 10 años en cada consulta y reducir los costos de facturación bajo demanda, ¿qué práctica debe implementarse?",
    "keywords": [
      "BigQuery",
      "Particionamiento",
      "Clustering",
      "Reducción de costos",
      "Escaneo de bytes"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Ejecutar consultas con `SELECT *` sobre toda la tabla sin cláusula WHERE en cada minuto.",
        "isTrap": true,
        "trapType": "cost_explosion"
      },
      {
        "letter": "B",
        "text": "Exportar todos los datos a 5,000 hojas de cálculo de Excel individuales.",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "C",
        "text": "Eliminar todos los datos históricos para que solo queden registros de las últimas 2 horas.",
        "isTrap": true,
        "trapType": "data_loss_antipattern"
      },
      {
        "letter": "D",
        "text": "Crear la tabla particionada por fecha (`call_date`), lo que permite a BigQuery podar particiones irrelevantes y escanear únicamente los datos del rango de fechas consultado.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "El particionamiento de tablas en BigQuery divide una tabla grande en segmentos más pequeños basados en una columna (como fecha o timestamp). Al consultar con filtros de fecha, BigQuery solo escanea las particiones requeridas, reduciendo dramáticamente el tiempo de respuesta y los costos en el modelo bajo demanda.",
    "distractors": {
      "A": "Usar `SELECT *` sin filtros escanea la tabla entera, maximizando los costos y el tiempo de respuesta.",
      "B": "Excel no puede manejar la escala de datos de telecomunicaciones y destruye la analítica centralizada.",
      "C": "Destruir datos históricos priva a la organización de valor analítico a largo plazo.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/partitioned-tables",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-025",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "BigQuery BI Engine: Aceleración de Dashboards en Memoria",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aceleración de Dashboards Interactivos con BigQuery BI Engine",
    "scenario": "Los directores ejecutivos utilizan paneles interactivos en Looker Studio conectados a BigQuery. Se quejan de que al cambiar los filtros de visualización, las gráficas tardan 8 segundos en refrescarse. La empresa requiere que las consultas interactivas respondan en sub-segundos sin cambiar la estructura de datos. ¿Qué servicio acelera este rendimiento?",
    "keywords": [
      "BigQuery BI Engine",
      "Sub-segundo",
      "Dashboards interactivos",
      "Looker Studio",
      "Caché en memoria analítica"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Habilitar BigQuery BI Engine para almacenar en memoria de forma inteligente las tablas analíticas más consultadas y acelerar las respuestas a sub-segundos.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Contratar a 10 personas para que redibujen las gráficas manualmente en una pizarra.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Imprimir los dashboards en hojas de papel bond todas las mañanas.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Desconectar los dashboards de BigQuery y usar datos simulados fijos.",
        "isTrap": true,
        "trapType": "fake_data_antipattern"
      }
    ],
    "correct": "A",
    "explanation": "BigQuery BI Engine es un servicio de análisis en memoria de alta velocidad integrado de forma transparente en BigQuery que analiza e interactúa de manera fluida con datos a nivel de sub-segundos desde herramientas como Looker, Looker Studio o Tableau.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "El dibujo manual es inviable y absurdo en un entorno empresarial digital.",
      "C": "El papel impreso no es interactivo ni refleja datos en tiempo real.",
      "D": "Los datos simulados impiden la toma de decisiones basada en hechos reales."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/bi-engine-overview",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-026",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "BigQuery Analytics Hub: Intercambio Seguro de Datos (Data Sharing)",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Intercambio Seguro de Datos entre Empresas sin Copias con Analytics Hub",
    "scenario": "Una cadena de supermercados desea compartir datos de ventas diarias de productos con 50 fabricantes y proveedores externos en tiempo real, garantizando gobernanza centralizada y sin duplicar ni copiar archivos ETL a través de servidores FTP inseguros. ¿Qué solución de Google Cloud facilita este intercambio?",
    "keywords": [
      "Analytics Hub",
      "BigQuery",
      "Data sharing",
      "Intercambio de datos",
      "Sin duplicación"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Envío masivo de memorias USB por correo tradicional",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "BigQuery Analytics Hub",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Filestore con acceso root universal a Internet",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "D",
        "text": "Servidores FTP locales compartidos con contraseñas públicas",
        "isTrap": true,
        "trapType": "security_violation"
      }
    ],
    "correct": "B",
    "explanation": "BigQuery Analytics Hub permite crear intercambios de datos (data exchanges) públicos o privados para compartir conjuntos de datos analíticos entre organizaciones de forma segura, gobernada y en tiempo real, permitiendo a los suscriptores consultar los datos directamente sin mover ni duplicar almacenamiento.",
    "distractors": {
      "A": "El envío físico es lento, inseguro y carece de tiempo real.",
      "B": "Opción correcta.",
      "C": "Exponer sistemas de archivos compartidos a Internet público es una falla crítica de seguridad.",
      "D": "Los servidores FTP tradicionales son inseguros, costosos de mantener y requieren crear copias redundantes obsoletas de datos."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/analytics-hub-introduction",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-027",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "BigQuery Omni: Analítica Multinube sin Mover Datos",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Consultas Analíticas Cruzadas en Múltiples Nubes con BigQuery Omni",
    "scenario": "Una empresa multinacional tiene datos almacenados en Amazon S3 (AWS) y Azure Blob Storage, además de Google Cloud. Quieren que sus analistas de datos ejecuten consultas SQL estándar sobre estos datos dispersos sin tener que pagar altos costos de transferencia de red (egress) por mover los terabytes de datos a Google Cloud. ¿Qué tecnología deben utilizar?",
    "keywords": [
      "BigQuery Omni",
      "Multinube",
      "AWS S3",
      "Azure Blob",
      "Analítica sin mover datos",
      "Egress reduction"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Run",
        "isTrap": true,
        "trapType": "compute_mismatch"
      },
      {
        "letter": "B",
        "text": "Google Cloud DNS",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "C",
        "text": "BigQuery Omni",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Google Compute Engine Spot VMs",
        "isTrap": true,
        "trapType": "vm_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "BigQuery Omni es una solución analítica multinube flexible y totalmente administrada que lleva el motor de cómputo de BigQuery directamente a los centros de datos de AWS y Azure, permitiendo consultar datos donde residen sin incurrir en costos de transferencia de datos hacia afuera (egress) ni canalizaciones ETL complejas.",
    "distractors": {
      "A": "Cloud Run es un entorno para ejecutar contenedores web, no un motor SQL multinube federado.",
      "B": "Cloud DNS gestiona dominios web en la red.",
      "C": "Opción correcta.",
      "D": "Spot VMs son instancias de cómputo efímeras con descuento para Compute Engine."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/omni-introduction",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-028",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Looker vs Looker Studio: Plataforma Empresarial vs Visualización Ágil",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferenciación entre Looker (Capa Semántica) y Looker Studio (Visualización de Autoservicio)",
    "scenario": "El Director de Datos (CDO) busca estandarizar la definición de métricas clave (como 'Margen Bruto' y 'Cliente Activo') para que todos los departamentos utilicen exactamente las mismas fórmulas gobernadas en una capa semántica unificada, a la vez que permite a equipos individuales crear reportes rápidos. ¿Cómo se complementan Looker y Looker Studio?",
    "keywords": [
      "Looker",
      "Looker Studio",
      "Capa semántica",
      "LookML",
      "Gobernanza de métricas",
      "BI"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Looker Studio prohíbe conectarse a bases de datos de Google Cloud.",
        "isTrap": true,
        "trapType": "false_limitation"
      },
      {
        "letter": "B",
        "text": "Looker y Looker Studio son herramientas de hardware que se instalan físicamente en los monitores de los usuarios.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Looker solo se puede usar para editar archivos de música MP3.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Looker proporciona una plataforma de BI empresarial con una capa de modelado de datos gobernada (LookML) que define una fuente única de verdad para las métricas de negocio, mientras que Looker Studio ofrece una herramienta ágil y gratuita de visualización de datos y tableros de autoservicio.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Looker es una plataforma de inteligencia de negocios de nivel empresarial con un modelo semántico centralizado (LookML) que asegura que todos en la empresa utilicen definiciones de métricas coherentes y auditadas. Looker Studio (anteriormente Data Studio) permite visualizaciones intuitivas y de rápida creación para reportes y tableros ágiles.",
    "distractors": {
      "A": "Looker Studio se integra nativamente con BigQuery, Cloud SQL, Google Sheets y cientos de fuentes de datos.",
      "B": "Ambas son aplicaciones de software SaaS en la nube, no hardware físico.",
      "C": "Looker es una plataforma líder de Business Intelligence, no un editor de audio.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/looker",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-029",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Dataflow: Procesamiento Unificado Batch y Streaming con Apache Beam",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Procesamiento de Flujos de Datos Serverless con Cloud Dataflow",
    "scenario": "Un equipo de analítica necesita construir una canalización de datos que transforme eventos de clics de usuarios en tiempo real, aplique ventanas de tiempo (windowing) y cargue los resultados agregados en BigQuery, con escalado automático de recursos sin tener que administrar servidores ni clústeres. ¿Qué servicio administrado de Google Cloud deben implementar?",
    "keywords": [
      "Cloud Dataflow",
      "Apache Beam",
      "Streaming y Batch",
      "Windowing",
      "Serverless ETL"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Dataflow",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Domains",
        "isTrap": true,
        "trapType": "domain_registration_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Billing API",
        "isTrap": true,
        "trapType": "billing_mismatch"
      },
      {
        "letter": "D",
        "text": "Compute Engine con scripts en Perl",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Dataflow es un servicio completamente administrado y sin servidor para la ejecución de canalizaciones de procesamiento de datos por lotes y streaming basadas en el marco de código abierto Apache Beam, con autoescalado dinámico de trabajadores y optimización automática.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud Domains gestiona el registro de dominios web.",
      "C": "Cloud Billing API gestiona cuentas de facturación y costos del proyecto.",
      "D": "Administrar scripts manuales en VMs individuales carece de tolerancia a fallos distribuida, escalado elástico y gestión de ventanas de streaming."
    },
    "officialDocUrl": "https://cloud.google.com/dataflow/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D2-030",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Dataproc: Clústeres Administrados de Apache Spark y Hadoop",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Modernización de Clústeres Hadoop y Spark Heredados con Cloud Dataproc",
    "scenario": "Una empresa de seguros tiene cientos de trabajos analíticos existentes escritos en Apache Spark y Apache Hadoop que se ejecutan en un clúster local obsoleto. Desean migrar estos trabajos a Google Cloud de la forma más rápida y económica posible, sin tener que reescribir su código a nuevas tecnologías. ¿Qué servicio deben utilizar?",
    "keywords": [
      "Cloud Dataproc",
      "Apache Spark",
      "Apache Hadoop",
      "Clústeres efímeros",
      "Lift-and-shift Big Data"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Firebase Crashlytics",
        "isTrap": true,
        "trapType": "mobile_crash_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Dataproc",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Google Play Console",
        "isTrap": true,
        "trapType": "app_store_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Speech-to-Text",
        "isTrap": true,
        "trapType": "ai_audio_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Dataproc es el servicio administrado de Apache Spark y Apache Hadoop de Google Cloud. Permite crear clústeres elásticos en segundos, ejecutar trabajos existentes de código abierto sin reescribir código y apagar los clústeres automáticamente cuando terminan para ahorrar costos.",
    "distractors": {
      "A": "Crashlytics analiza bloqueos y errores en aplicaciones móviles de usuarios finales.",
      "B": "Opción correcta.",
      "C": "Google Play Console es la tienda de distribución de apps móviles Android.",
      "D": "Cloud Speech-to-Text transcribe audio a texto mediante inteligencia artificial."
    },
    "officialDocUrl": "https://cloud.google.com/dataproc/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-016",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Artifact Registry: Gestión Segura de Contenedores y Paquetes de Software",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Almacenamiento y Escaneo de Vulnerabilidades de Imágenes con Artifact Registry",
    "scenario": "Una empresa necesita un repositorio centralizado y privado para almacenar y versionar sus imágenes de contenedores Docker y paquetes de software (npm, Maven, Python), que además escanee automáticamente las imágenes en busca de vulnerabilidades de seguridad conocidas (CVEs) antes de ser desplegadas. ¿Qué servicio de Google Cloud cumple este rol?",
    "keywords": [
      "Artifact Registry",
      "Repositorio de contenedores",
      "Escaneo de vulnerabilidades",
      "Gestión de paquetes",
      "Container Registry"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "B",
        "text": "Un servidor FTP público compartido sin contraseña en Internet",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "C",
        "text": "Artifact Registry (la evolución moderna de Container Registry con soporte multi-lenguaje y escaneo de vulnerabilidades)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "networking_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Artifact Registry es el gestor universal de artefactos y paquetes de Google Cloud para imágenes de contenedores OCI/Docker y paquetes de lenguajes (Java Maven, Node.js npm, Python pip), integrado con escaneo automático de vulnerabilidades y controles de acceso IAM.",
    "distractors": {
      "A": "Cloud DNS es resolución de nombres de dominio.",
      "B": "Los servidores FTP públicos exponen el código propietario y las vulnerabilidades al público.",
      "C": "Opción correcta.",
      "D": "Cloud Interconnect es conectividad física de redes."
    },
    "officialDocUrl": "https://cloud.google.com/artifact-registry/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-017",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Deploy: Entrega Continua (CD) Segura y Opinada",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Entrega Continua con Progresión por Entornos y Rollbacks Instantáneos con Cloud Deploy",
    "scenario": "El equipo de operaciones necesita estandarizar la entrega continua hacia sus clústeres de GKE y Cloud Run. Requieren definir una canalización de despliegue progresiva y estructurada (Desarrollo -> Staging -> Producción) con aprobaciones manuales de líderes para producción y capacidad de revertir (rollback) a la versión anterior con un solo clic si surgen errores. ¿Qué servicio administrado deben usar?",
    "keywords": [
      "Cloud Deploy",
      "Entrega Continua",
      "CD",
      "Progresión de entornos",
      "Rollback con un clic",
      "GKE y Cloud Run"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Desinstalar Kubernetes para no tener que desplegar",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Copiar archivos por SSH manualmente a cada servidor en producción",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "D",
        "text": "Cloud Deploy",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Deploy es un servicio de entrega continua (CD) administrado, sin servidor y con opiniones de mejores prácticas que simplifica y asegura la progresión de versiones a través de múltiples entornos de destino (como clústeres de GKE y servicios de Cloud Run), incluyendo aprobaciones y reversiones (rollbacks) con un solo clic.",
    "distractors": {
      "A": "Cloud Storage Archive es para retención fría de largo plazo.",
      "B": "Desinstalar la plataforma de cómputo paraliza el negocio.",
      "C": "El copiado manual por SSH es lento, riesgoso, carece de auditoría y provoca errores humanos en producción.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/deploy/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-018",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Google Distributed Cloud (Anthos / GKE Enterprise): Híbrido y Multinube",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Gestión Unificada Híbrida y Multinube con Google Distributed Cloud (Anthos / GKE Enterprise)",
    "scenario": "Una corporación financiera opera clústeres de Kubernetes en sus propios centros de datos locales, en Google Cloud y en otras nubes públicas. El equipo de seguridad y operaciones sufre para mantener configuraciones y políticas de seguridad consistentes en todos los entornos dispersos. ¿Qué plataforma unificada de Google Cloud les permite gobernar flotas de clústeres híbridos y multinube desde una única consola?",
    "keywords": [
      "Google Distributed Cloud",
      "Anthos",
      "GKE Enterprise",
      "Gestión de flotas",
      "Híbrido y Multinube",
      "GitOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Distributed Cloud / GKE Enterprise (anteriormente Anthos)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Contratar a 100 administradores para que configuren cada clúster manualmente por separado todos los días",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Cloud Armor Basic",
        "isTrap": true,
        "trapType": "waf_mismatch"
      },
      {
        "letter": "D",
        "text": "Google Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Google Distributed Cloud (que integra las capacidades de Anthos y GKE Enterprise) es la plataforma de nube híbrida y multinube de Google que permite crear, operar y gobernar clústeres de Kubernetes de manera unificada en centros de datos locales, en el borde y en múltiples nubes públicas con políticas consistentes declarativas basadas en GitOps.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "La configuración manual no escala, genera discrepancias de configuración (drift) y es altamente costosa.",
      "C": "Cloud Armor protege aplicaciones web contra ataques DDoS y de inyección, no administra flotas de Kubernetes.",
      "D": "Cloud DNS gestiona la resolución de nombres de red."
    },
    "officialDocUrl": "https://cloud.google.com/anthos/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-019",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Red Global de Google: Red VPC Global y Fibra Óptica Privada",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Ventaja de la Red Global Definida por Software (Global VPC) de Google",
    "scenario": "Al diseñar una red en la nube, un ingeniero compara el modelo de redes virtuales de Google Cloud con otros proveedores. En Google Cloud, una Virtual Private Cloud (VPC) es un recurso global por defecto y las subredes son regionales conectadas a través de la red privada de fibra óptica de Google. ¿Qué ventaja operativa proporciona esto?",
    "keywords": [
      "Global VPC",
      "Red privada de Google",
      "Subredes regionales",
      "Baja latencia",
      "Sin VPN compleja interregional"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Exige pagar una tarifa de $5 por cada paquete de datos TCP enviado.",
        "isTrap": true,
        "trapType": "absurd_cost_claim"
      },
      {
        "letter": "B",
        "text": "Permite que los recursos en diferentes regiones del mundo se comuniquen entre sí a través de direcciones IP privadas internas sobre la red troncal privada de Google sin tener que atravesar la Internet pública ni requerir configuraciones complejas de VPN interregionales.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Obliga a que todos los paquetes de red viajen por cables de cobre telefónicos públicos lentos.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Prohíbe que las máquinas virtuales se comuniquen con recursos fuera de su propia habitación física.",
        "isTrap": true,
        "trapType": "false_limitation"
      }
    ],
    "correct": "B",
    "explanation": "La VPC Global de Google Cloud es un diferenciador clave: permite que una sola VPC abarque todas las regiones del mundo, conectando instancias mediante IPs privadas internas sobre la red privada de fibra óptica de alta velocidad de Google con cifrado automático y mínima latencia.",
    "distractors": {
      "A": "Google Cloud factura transferencias de datos según modelos estándar de ancho de banda, no por paquete TCP individual con tarifas absurdas.",
      "B": "Opción correcta.",
      "C": "Google opera una de las redes troncales privadas de fibra óptica submarina y terrestre más avanzadas del planeta.",
      "D": "La red VPC global habilita comunicación segura y sin fronteras entre todas las regiones de Google Cloud."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/vpc",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-020",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Interconnect: Conectividad Dedicada y Partner para Empresas",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Conectividad Empresarial de Alta Capacidad y Baja Latencia con Cloud Interconnect",
    "scenario": "Una corporación bancaria necesita conectar su centro de datos local principal con su red VPC en Google Cloud para transferir cientos de terabytes diarios de datos transaccionales con un ancho de banda masivo garantizado (10 Gbps a 100 Gbps), latencia ultra baja y sin transitar por la Internet pública. ¿Qué solución de conectividad física empresarial deben contratar?",
    "keywords": [
      "Cloud Interconnect",
      "Dedicated Interconnect",
      "Partner Interconnect",
      "10 Gbps 100 Gbps",
      "Sin pasar por Internet pública"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Enviar discos duros por correo postal todas las horas",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Cloud Interconnect (Dedicated Interconnect o Partner Interconnect)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Una conexión de módem telefónico dial-up de 56 kbps",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Interconnect proporciona conexiones directas de nivel empresarial entre las redes locales y la red de Google Cloud a través de circuitos de fibra dedicados (Dedicated Interconnect: 10/100G) o mediante un proveedor de servicios de telecomunicaciones certificado (Partner Interconnect), garantizando alta disponibilidad (hasta 99.99%) y sin tocar la Internet pública.",
    "distractors": {
      "A": "Cloud Storage Nearline es una clase de almacenamiento para copias de seguridad, no un enlace físico de red.",
      "B": "El correo físico no ofrece latencia de milisegundos requerida por transacciones bancarias continuas.",
      "C": "Opción correcta.",
      "D": "El módem dial-up de 56 kbps es una tecnología obsoleta que no puede transferir terabytes de datos."
    },
    "officialDocUrl": "https://cloud.google.com/network-connectivity/docs/interconnect",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-021",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud VPN: Conectividad IPsec Segura y Económica sobre Internet",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Conexión Híbrida Segura de Bajo Costo con Cloud VPN",
    "scenario": "Una empresa mediana desea conectar su oficina central con sus servidores en Google Cloud de forma rápida, económica y con tráfico cifrado a través de túneles IPsec sobre la Internet pública, con un acuerdo de nivel de servicio (SLA) del 99.99% mediante túneles redundantes de alta disponibilidad. ¿Qué servicio deben implementar?",
    "keywords": [
      "Cloud HA VPN",
      "Túneles IPsec",
      "Cifrado sobre Internet pública",
      "99.99% SLA",
      "Conexión híbrida económica"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Tender un cable de fibra óptica submarino propio a través del océano",
        "isTrap": true,
        "trapType": "absurd_cost_complexity"
      },
      {
        "letter": "B",
        "text": "Publicar todos los servidores internos con IPs públicas abiertas a cualquier usuario sin cifrado",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "C",
        "text": "Cloud Spanner Multi-region",
        "isTrap": true,
        "trapType": "database_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud VPN (específicamente Cloud HA VPN con soporte BGP redundante)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud HA VPN conecta de forma segura redes locales con la VPC de Google Cloud a través de túneles IPsec cifrados sobre la Internet pública, ofreciendo una solución rentable con enrutamiento dinámico BGP y una disponibilidad del 99.99% cuando se configuran túneles dobles redundantes.",
    "distractors": {
      "A": "Tender cables submarinos privados requiere inversiones multimillonarias de infraestructura física que solo las grandes empresas de telecomunicaciones realizan.",
      "B": "Exponer recursos internos sin cifrado en Internet público expone la empresa a ataques catastróficos.",
      "C": "Cloud Spanner es una base de datos relacional global, no un servicio de túneles VPN.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/network-connectivity/docs/vpn/concepts/overview",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-022",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Load Balancing: Balanceador Global de Aplicaciones con Anycast IP",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Distribución Global de Tráfico con una Sola IP Anycast en Cloud Load Balancing",
    "scenario": "Una aplicación web global tiene servidores en Europa, Asia y América. Desean que los usuarios de todo el mundo se conecten a través de una única dirección IP pública estable con enrutamiento inteligente Anycast que dirija al usuario automáticamente a la región más cercana con menor latencia y capacidad disponible. ¿Qué servicio proporciona esta capacidad?",
    "keywords": [
      "Cloud Load Balancing",
      "Global External Application Load Balancer",
      "Anycast IP",
      "Enrutamiento por latencia",
      "Balanceador global"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Global External Application Load Balancer (Cloud Load Balancing global con IP Anycast)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Desactivar el balanceo de carga para que todas las peticiones lleguen a una sola máquina pequeña",
        "isTrap": true,
        "trapType": "single_point_of_failure"
      },
      {
        "letter": "C",
        "text": "Un archivo de texto en un servidor web local con una lista de 500 direcciones IP para que el usuario elija",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "El Global External Application Load Balancer de Google Cloud utiliza una única dirección IP Anycast global. El tráfico entra a la red perimetral privada de Google en el punto de presencia (PoP) más cercano al usuario y se enruta de forma inteligente a través de la fibra de Google hacia el backend disponible más próximo con menor latencia.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Eliminar el balanceador satura la máquina y provoca caídas del servicio.",
      "C": "Pedir al usuario que elija manualmente una IP no proporciona balanceo automático ni conmutación ante fallos.",
      "D": "Cloud Storage Archive es para retención fría de largo plazo."
    },
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/application-load-balancer",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-023",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud CDN: Red de Entrega de Contenido y Aceleración en el Borde",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aceleración de Contenido Web y Caching en el Borde con Cloud CDN",
    "scenario": "Un sitio web de noticias publica fotografías de alta resolución. Los usuarios de Australia experimentan lentitud al cargar las imágenes alojadas en un servidor de Estados Unidos. Para acelerar la carga y reducir el tráfico en los servidores de origen almacenando en caché las imágenes en los más de 100 puntos de presencia (PoPs) de Google alrededor del mundo, ¿qué servicio debe habilitarse?",
    "keywords": [
      "Cloud CDN",
      "Puntos de presencia PoP",
      "Edge caching",
      "Reducción de latencia",
      "Caché perimetral"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Logging",
        "isTrap": true,
        "trapType": "observability_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud CDN (Content Delivery Network integrado con Cloud Load Balancing)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Reducir la calidad de las fotos hasta que sean irreconocibles",
        "isTrap": true,
        "trapType": "degraded_solution"
      },
      {
        "letter": "D",
        "text": "Comprar computadoras físicas en cada ciudad de Australia y enviarles discos duros por avión",
        "isTrap": true,
        "trapType": "absurd_cost_complexity"
      }
    ],
    "correct": "B",
    "explanation": "Cloud CDN aprovecha la red global de puntos de presencia (PoPs) perimetrales de Google para almacenar en caché contenido web estático y dinámico cerca de los usuarios finales, reduciendo drásticamente la latencia, acelerando los tiempos de carga y descargando el tráfico de los servidores de origen.",
    "distractors": {
      "A": "Cloud Logging es para recopilar y analizar registros del sistema, no acelera contenido web.",
      "B": "Opción correcta.",
      "C": "Degradar las imágenes destruye la experiencia del usuario y la reputación del sitio de noticias.",
      "D": "Instalar y mantener servidores físicos propios en decenas de países genera costos exorbitantes y complejidad innecesaria."
    },
    "officialDocUrl": "https://cloud.google.com/cdn/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-024",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Armor: Protección DDoS y Firewall de Aplicaciones Web (WAF)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Protección contra Ataques DDoS e Inyección SQL (OWASP Top 10) con Cloud Armor",
    "scenario": "Una tienda en línea recibe constantes intentos de ataques de denegación de servicio distribuido (DDoS) a nivel de infraestructura (Capas 3 y 4) y ataques a nivel de aplicación (Capa 7) como inyección SQL y Cross-Site Scripting (XSS). ¿Qué servicio perimetral de Google Cloud protege la aplicación inspeccionando el tráfico y aplicando reglas del WAF de OWASP?",
    "keywords": [
      "Cloud Armor",
      "DDoS",
      "WAF",
      "OWASP Top 10",
      "Inyección SQL",
      "Capa 7"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Trace",
        "isTrap": true,
        "trapType": "observability_mismatch"
      },
      {
        "letter": "B",
        "text": "Desconectar los servidores de Internet permanentemente",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Google Cloud Armor",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Armor es el servicio de seguridad de red perimetral y firewall de aplicaciones web (WAF) que defiende las aplicaciones alojadas en Google Cloud o en entornos híbridos contra ataques DDoS masivos y amenazas web comunes (como las del OWASP Top 10), aprovechando la escala de protección de la infraestructura global de Google.",
    "distractors": {
      "A": "Cloud Trace mide la latencia de llamadas entre servicios de software; no bloquea ataques informáticos.",
      "B": "Desconectar los servidores destruye la presencia digital y el negocio de la tienda en línea.",
      "C": "Opción correcta.",
      "D": "Cloud Storage Nearline es para copias de seguridad de archivos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/armor/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-025",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Private Google Access: Conexión a APIs de Google sin IPs Públicas",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Acceso Privado a Servicios de Google Cloud sin IPs Públicas (Private Google Access)",
    "scenario": "Por estrictas directivas de seguridad, las máquinas virtuales de Compute Engine de una base de datos confidencial no tienen direcciones IP públicas asignadas y no pueden tener acceso a la Internet abierta. Sin embargo, estas VMs necesitan guardar respaldos en Cloud Storage y acceder a BigQuery. ¿Qué funcionalidad de subred permite a las VMs comunicarse con las APIs de Google utilizando sus IPs privadas internas?",
    "keywords": [
      "Private Google Access",
      "Sin IP pública",
      "Acceso a Cloud Storage y BigQuery",
      "Seguridad interna",
      "Subred VPC"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Eliminar las copias de seguridad para no tener que usar Cloud Storage",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "B",
        "text": "Asignar una IP pública estática a cada VM y abrir todos los puertos al mundo",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "C",
        "text": "Tender un cable USB desde cada servidor hasta el centro de datos de Google",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Habilitar Acceso Privado a Google (Private Google Access) en la subred de la VPC.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Private Google Access permite que las instancias de máquinas virtuales que solo tienen direcciones IP privadas internas se comuniquen de forma segura y directa con las APIs y servicios públicos de Google (como Cloud Storage y BigQuery) sin requerir una IP pública ni una puerta de enlace NAT a Internet.",
    "distractors": {
      "A": "Eliminar copias de seguridad destruye la resiliencia y el plan de recuperación ante desastres de la empresa.",
      "B": "Asignar IPs públicas viola la política de seguridad y expone las bases de datos confidenciales a escaneos y ataques en Internet.",
      "C": "La infraestructura en la nube se conecta a través de protocolos de red virtualizados, no cables USB físicos.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/private-google-access",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-026",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud NAT: Salida a Internet para Descarga de Parches sin Exposición Ingress",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Descarga Segura de Actualizaciones de Sistema Operativo con Cloud NAT",
    "scenario": "Un grupo de máquinas virtuales de backend en Compute Engine no tiene direcciones IP públicas para evitar ataques directos desde Internet. Sin embargo, estas VMs necesitan descargar parches de seguridad y paquetes de software desde repositorios públicos de Linux en Internet (tráfico de salida únicamente, sin permitir conexiones entrantes no solicitadas). ¿Qué servicio administrado resuelve esto?",
    "keywords": [
      "Cloud NAT",
      "IPs privadas",
      "Salida a Internet",
      "Descarga de parches",
      "Sin permitir tráfico entrante"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud NAT (Network Address Translation totalmente administrado)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "Prohibir para siempre la actualización de los sistemas operativos",
        "isTrap": true,
        "trapType": "vulnerability_retention_antipattern"
      },
      {
        "letter": "D",
        "text": "Asignar IPs públicas a todas las máquinas y desactivar el firewall",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      }
    ],
    "correct": "A",
    "explanation": "Cloud NAT es una solución de traducción de direcciones de red administrada y definida por software que permite a las instancias de VMs sin direcciones IP públicas acceder a Internet para descargar actualizaciones y paquetes salientes, bloqueando de forma absoluta cualquier conexión entrante no solicitada desde el exterior.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud Storage Archive es para almacenamiento frío, no una puerta de enlace de red NAT.",
      "C": "No actualizar los sistemas operativos acumula vulnerabilidades de seguridad críticas conocidas.",
      "D": "Asignar IPs públicas y deshabilitar el firewall deja los servidores indefensos ante ataques automáticos de bots."
    },
    "officialDocUrl": "https://cloud.google.com/nat/docs/overview",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-027",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Estrategias de Migración: El Marco de las 6 R (Rehost, Replatform, Refactor, etc.)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Identificación de Estrategias de Migración: Rehost (Lift-and-Shift) vs Refactor (Re-architect)",
    "scenario": "Una empresa define dos proyectos de migración a la nube: (1) Mover 200 servidores virtuales existentes tal como están a Compute Engine sin cambiar el código para cerrar rápidamente un centro de datos, y (2) Rediseñar completamente una aplicación monolítica central para transformarla en microservicios serverless en Cloud Run. ¿Cuáles son las dos estrategias de las 6 R correspondientes?",
    "keywords": [
      "6 Rs de migración",
      "Rehost",
      "Lift-and-Shift",
      "Refactor",
      "Re-architect",
      "Modernización"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "(1) Retire (Retirar); (2) Retain (Retener)",
        "isTrap": true,
        "trapType": "misaligned_strategies"
      },
      {
        "letter": "B",
        "text": "(1) Rehost (Lift-and-Shift); (2) Refactor / Re-architect (Rediseño nativo de nube)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "(1) Repurchase (Recompra SaaS); (2) Rehost (Lift-and-Shift)",
        "isTrap": true,
        "trapType": "misaligned_strategies"
      },
      {
        "letter": "D",
        "text": "Ambas son la estrategia 'Retire' (apagar y borrar todo)",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "Rehost (Lift-and-Shift) traslada aplicaciones y máquinas virtuales existentes a la nube con modificaciones mínimas para acelerar la migración. Refactor (Re-architect) rediseña la arquitectura del software para adoptar capacidades nativas de la nube (como microservicios y serverless), maximizando la agilidad y escalabilidad.",
    "distractors": {
      "A": "Retire significa dar de baja aplicaciones que ya no se usan; Retain significa conservarlas en el entorno local.",
      "B": "Opción correcta.",
      "C": "Repurchase significa cambiar a un producto SaaS comercial (ej. cambiar CRM propio a Salesforce).",
      "D": "Retire implica eliminar la aplicación, no modernizarla ni migrarla."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/migration-center",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-028",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Migrate to Virtual Machines: Migración Automatizada de Servidores Físicos y VMs",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Replicación de Servidores sin Agentes con Migrate to Virtual Machines",
    "scenario": "Un equipo de infraestructura necesita migrar 300 servidores virtuales locales de VMware vSphere y servidores físicos hacia Compute Engine. Desean una herramienta que replique los discos en segundo plano sin interrumpir los sistemas operativos en producción y permita realizar pruebas previas no destructivas antes del corte final. ¿Qué herramienta de Google Cloud realiza esta tarea?",
    "keywords": [
      "Migrate to Virtual Machines",
      "Migrate for Compute Engine",
      "Replicación sin agentes",
      "Pruebas no destructivas",
      "Lift-and-shift"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Fonts",
        "isTrap": true,
        "trapType": "font_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Functions de primera generación",
        "isTrap": true,
        "trapType": "compute_mismatch"
      },
      {
        "letter": "C",
        "text": "Migrate to Virtual Machines (anteriormente Migrate for Compute Engine / Velostrata)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Google Maps API",
        "isTrap": true,
        "trapType": "maps_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Migrate to Virtual Machines es la solución de migración integrada y de alta velocidad de Google Cloud que automatiza la replicación continua, pruebas y conversión de servidores físicos y máquinas virtuales locales (VMware/AWS/Azure) hacia instancias nativas de Compute Engine con mínimo tiempo de inactividad.",
    "distractors": {
      "A": "Google Fonts es un catálogo web de tipografías.",
      "B": "Cloud Functions es para ejecutar fragmentos pequeños de código ante eventos, no para replicar discos duros de VMs de VMware.",
      "C": "Opción correcta.",
      "D": "Google Maps API proporciona mapas y geocodificación para aplicaciones."
    },
    "officialDocUrl": "https://cloud.google.com/migrate/virtual-machines/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-029",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Migration Center / StratoZone: Descubrimiento y Evaluación de Cargas",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Evaluación del Inventario y Estimación del TCO con Migration Center y StratoZone",
    "scenario": "Antes de iniciar una migración masiva, el Director de TI necesita descubrir automáticamente todos los servidores, bases de datos y aplicaciones que se ejecutan en su centro de datos local, mapear sus dependencias de red y generar una estimación financiera precisa del TCO para migrar a Google Cloud. ¿Qué plataforma unificada de evaluación de Google Cloud deben utilizar?",
    "keywords": [
      "Migration Center",
      "StratoZone",
      "Evaluación de infraestructura",
      "Descubrimiento de dependencias",
      "Estimación de TCO"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Armor WAF Rules",
        "isTrap": true,
        "trapType": "security_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Bigtable Time-Series",
        "isTrap": true,
        "trapType": "database_mismatch"
      },
      {
        "letter": "C",
        "text": "Revisar facturas de papel guardadas en un cajón de 2005",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "D",
        "text": "Migration Center (que incluye capacidades de evaluación de StratoZone)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Migration Center es la plataforma unificada de Google Cloud que ayuda a las organizaciones a descubrir su infraestructura local existente, analizar la utilización real de recursos, modelar escenarios de costos en la nube (TCO) y planificar olas de migración estructuradas con base en datos reales.",
    "distractors": {
      "A": "Cloud Armor es un servicio de seguridad perimetral contra ataques web.",
      "B": "Cloud Bigtable es una base de datos NoSQL de baja latencia.",
      "C": "Las facturas antiguas de papel no reflejan la utilización real de recursos, dependencias de red ni inventarios actuales de servidores.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/migration-center/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D3-030",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Grupos de Instancias Administradas (MIGs) y Auto-Recuperación (Autohealing)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Resiliencia y Auto-Recuperación Automática con Managed Instance Groups (MIGs)",
    "scenario": "Una empresa hospeda una aplicación web en Compute Engine. Si el proceso del servidor web falla o la máquina virtual se congela en una zona, la empresa requiere que Compute Engine detecte la falla de la aplicación mediante verificaciones de estado (Health Checks) y destruya y recree automáticamente la VM enferma a partir de una plantilla, sin requerir intervención humana de los operadores. ¿Qué configuración deben implementar?",
    "keywords": [
      "Managed Instance Groups",
      "MIGs",
      "Autohealing",
      "Health Checks",
      "Auto-recuperación"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Desplegar las instancias en un Grupo de Instancias Administradas Regional (Regional Managed Instance Group - MIG) y configurar una política de Auto-recuperación (Autohealing) vinculada a un Application Health Check.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Desplegar instancias independientes sin administrar y pedir al guardia nocturno que reinicie el servidor si se cae el sitio",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Desactivar los Health Checks para que el sistema nunca detecte errores",
        "isTrap": true,
        "trapType": "dangerous_practice"
      }
    ],
    "correct": "A",
    "explanation": "Los Managed Instance Groups (MIGs) regionales permiten escalar y gestionar grupos de VMs idénticas creadas desde una plantilla de instancia. La política de Autohealing monitorea continuamente la salud de la aplicación mediante Health Checks de nivel HTTP/TCP y recrea automáticamente cualquier VM no saludable, garantizando alta disponibilidad.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Las VMs no administradas carecen de autoescalado y auto-recuperación automática.",
      "C": "Cloud Storage Coldline es para almacenamiento frío de copias de seguridad.",
      "D": "Desactivar verificaciones oculta fallas e impide que el sistema se recupere automáticamente."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instance-groups/autohealing-instances-in-migs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-016",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Monitoring: Métricas, Paneles y Políticas de Alerta",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Monitoreo Proactivo y Alertas con Cloud Monitoring",
    "scenario": "Un equipo de ingeniería requiere recibir una notificación inmediata por correo electrónico y en su canal de Slack si la utilización de CPU de sus servidores web de producción supera el 85% durante más de 5 minutos consecutivos, o si el balanceador de carga reporta errores HTTP 500. ¿Qué servicio de Google Cloud deben configurar?",
    "keywords": [
      "Cloud Monitoring",
      "Políticas de alerta",
      "Alerting Policies",
      "Canales de notificación Slack",
      "Métricas de CPU"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Desactivar las alertas para no ser molestados durante las caídas de servicio",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "B",
        "text": "Cloud Monitoring (creando políticas de alerta y canales de notificación vinculados a métricas de infraestructura y aplicación)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Pedir a un operador que mire la pantalla de la consola sin parpadear durante 24 horas",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Monitoring recopila métricas, eventos y metadatos de Google Cloud, AWS y entornos locales, permitiendo crear paneles de control interactivos y definir políticas de alerta automatizadas con múltiples canales de notificación (correo, Slack, PagerDuty, Webhooks, SMS).",
    "distractors": {
      "A": "Desactivar alertas impide responder a incidentes críticos, degradando la disponibilidad del negocio.",
      "B": "Opción correcta.",
      "C": "El monitoreo humano continuo sin automatización es ineficiente y propenso a fallas.",
      "D": "Cloud Storage Coldline es almacenamiento pasivo de archivos."
    },
    "officialDocUrl": "https://cloud.google.com/monitoring/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-017",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Logging: Registros de Auditoría de Cloud (Cloud Audit Logs)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Trazabilidad y Auditoría de Acciones con Cloud Audit Logs en Cloud Logging",
    "scenario": "Un auditor de seguridad necesita saber exactamente: ¿Quién eliminó una base de datos de producción a las 03:00 AM?, ¿Desde qué dirección IP se ejecutó la acción?, y ¿Qué API específica de Google Cloud fue invocada? ¿Qué tipo de registros en Cloud Logging proporcionan esta evidencia forense inmutable?",
    "keywords": [
      "Cloud Audit Logs",
      "Admin Activity Logs",
      "Auditoría de seguridad",
      "Quién cuándo y qué",
      "Cloud Logging"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud DNS Query Logs",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "B",
        "text": "Una servilleta de papel con notas manuscritas",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Registros de Auditoría de Actividad de Administrador (Admin Activity Logs en Cloud Audit Logs)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "El historial de navegación de Google Chrome del empleado",
        "isTrap": true,
        "trapType": "client_browser_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Audit Logs mantiene registros inmutables de auditoría en Cloud Logging que responden a '¿Quién hizo qué, dónde y cuándo?' en Google Cloud. Los registros de Actividad de Administrador (Admin Activity) registran todas las modificaciones de configuración o llamadas de administración y se conservan de forma gratuita e inalterable por 400 días.",
    "distractors": {
      "A": "DNS Query Logs registra resoluciones de nombres, no llamadas a la API de administración de bases de datos.",
      "B": "Las notas físicas carecen de validez técnica y forense.",
      "C": "Opción correcta.",
      "D": "El historial local del navegador puede ser borrado por el usuario y no constituye un registro forense de auditoría en la nube."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/audit",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-018",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Logging: Sumideros de Registros (Log Sinks) para Exportación y Cumplimiento",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Exportación y Retención a Largo Plazo de Registros con Log Sinks (Sumideros de Registros)",
    "scenario": "Una empresa requiere conservar todos los registros de seguridad y transacciones durante 7 años para cumplir con regulaciones financieras, además de analizarlos mediante consultas SQL avanzadas en BigQuery y enviarlos a un sistema SIEM externo en tiempo real vía Pub/Sub. ¿Qué mecanismo de Cloud Logging permite enrutar y exportar registros hacia estos destinos?",
    "keywords": [
      "Log Sinks",
      "Sumideros de registros",
      "Enrutamiento de logs",
      "BigQuery",
      "Cloud Storage",
      "Pub/Sub",
      "Retención 7 años"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Imprimir todos los registros en papel continuo todas las mañanas",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Borrar todos los registros cada 24 horas para no pagar almacenamiento",
        "isTrap": true,
        "trapType": "compliance_violation"
      },
      {
        "letter": "C",
        "text": "Guardar los registros en la memoria RAM temporal de una sola VM pequeña",
        "isTrap": true,
        "trapType": "volatile_antipattern"
      },
      {
        "letter": "D",
        "text": "Sumideros de Registros (Log Sinks / Log Router) configurados para exportar registros a Cloud Storage (archivo de 7 años), BigQuery (análisis SQL) y Cloud Pub/Sub (integración con SIEM externo).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "El enrutador de registros (Log Router) y los Log Sinks (Sumideros de Registros) en Cloud Logging permiten filtrar y dirigir flujos de registros hacia Cloud Storage (para retención de bajo costo a largo plazo), BigQuery (para análisis analítico SQL avanzado) o Pub/Sub (para streaming hacia herramientas SIEM como Splunk o Chronicle).",
    "distractors": {
      "A": "Imprimir gigabytes de registros diarios en papel es físicamente inviable e inauditable.",
      "B": "Borrar registros viola los requisitos de cumplimiento normativo financiero de 7 años.",
      "C": "El almacenamiento en RAM se pierde al reiniciar la VM y no cumple con la retención duradera.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/routing/overview",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-019",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Trace: Rastreo Distribuido de Latencia en Microservicios",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Identificación de Cuellos de Botella de Latencia con Cloud Trace",
    "scenario": "Una aplicación de compras compuesta por 15 microservicios interconectados experimenta lentitud cuando los usuarios presionan el botón 'Pagar', tardando 7 segundos en responder. El equipo no sabe cuál de los 15 microservicios específicos es el causante del retraso. ¿Qué herramienta de Cloud Operations rastrea las solicitudes de extremo a extremo a través de todos los microservicios mostrando un diagrama de tiempos (waterfall) de cada llamada HTTP/gRPC?",
    "keywords": [
      "Cloud Trace",
      "Rastreo distribuido",
      "Latencia de microservicios",
      "Cuellos de botella",
      "Gráfica de cascada waterfall"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Trace",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Desinstalar 14 microservicios al azar hasta que la app sea más rápida",
        "isTrap": true,
        "trapType": "destructive_antipattern"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Trace es un sistema de rastreo distribuido que recopila datos de latencia de aplicaciones de microservicios, mostrando cómo viaja una solicitud a través de la arquitectura y ayudando a los desarrolladores a identificar con precisión qué servicio o consulta de base de datos específica está degradando el rendimiento.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Desinstalar servicios al azar destruye funcionalidades críticas de la aplicación.",
      "C": "Cloud Storage Coldline es para copias de seguridad de datos fríos.",
      "D": "Cloud DNS resuelve nombres de dominio en Internet."
    },
    "officialDocUrl": "https://cloud.google.com/trace/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-020",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Profiler: Análisis Continuo de Rendimiento de Código en Producción",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Optimización de Consumo de CPU y Memoria con Cloud Profiler",
    "scenario": "Los desarrolladores notan que una función en Java dentro de sus contenedores de producción consume un 40% más de memoria RAM y CPU de lo esperado. Necesitan un generador de perfiles de bajo impacto que recopile continuamente estadísticas de ejecución del código en producción y visualice un gráfico de llamas (flame graph) señalando las líneas exactas de código que más recursos consumen. ¿Qué herramienta deben activar?",
    "keywords": [
      "Cloud Profiler",
      "Perfilado continuo",
      "Flame graph",
      "Consumo de CPU y memoria",
      "Optimización de código"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "telecom_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Profiler",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Adivinar la línea de código con los ojos cerrados",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Profiler es un generador de perfiles estadístico de bajo impacto (menos del 1% de sobrecarga) que analiza continuamente el consumo de CPU y memoria de las aplicaciones en producción, presentando gráficos de llamas (flame graphs) para ayudar a los desarrolladores a optimizar el rendimiento y reducir los costos de infraestructura.",
    "distractors": {
      "A": "Cloud Interconnect es conectividad de red de telecomunicaciones.",
      "B": "Opción correcta.",
      "C": "La adivinación no es una práctica de ingeniería de software confiable.",
      "D": "Cloud Storage Archive es para almacenamiento de objetos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/profiler/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-021",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Jerarquía de Recursos de Google Cloud: Organización, Carpetas, Proyectos y Recursos",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Estructura de Gobernanza en la Jerarquía de Recursos de Google Cloud",
    "scenario": "Un arquitecto de gobernanza diseña la estructura empresarial en Google Cloud para un conglomerado global. ¿Cuál es el orden jerárquico estricto de arriba hacia abajo (de la raíz a las hojas) para la herencia de políticas y recursos?",
    "keywords": [
      "Jerarquía de recursos",
      "Organización",
      "Carpetas",
      "Proyectos",
      "Recursos",
      "Herencia de políticas"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Recursos -> Proyectos -> Carpetas -> Organización",
        "isTrap": true,
        "trapType": "inverted_hierarchy"
      },
      {
        "letter": "B",
        "text": "Proyectos -> Organización -> Recursos -> Carpetas",
        "isTrap": true,
        "trapType": "misaligned_hierarchy"
      },
      {
        "letter": "C",
        "text": "Nodo de Organización (Organization) -> Carpetas (Folders) -> Proyectos (Projects) -> Recursos individuales (Resources como VMs, tablas, buckets)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Google Cloud no tiene ninguna jerarquía; todos los recursos están mezclados al azar",
        "isTrap": true,
        "trapType": "false_claim"
      }
    ],
    "correct": "C",
    "explanation": "La jerarquía de recursos de Google Cloud se estructura como un árbol invertido: el nodo raíz es la Organización (vinculada al dominio de Cloud Identity/Google Workspace), seguida por Carpetas (Folders) para departamentos/entornos, Proyectos (Projects) como unidad base de facturación y habilitación de APIs, y en la base los Recursos individuales (VMs, buckets, etc.).",
    "distractors": {
      "A": "Invierte completamente la jerarquía de gobierno de la raíz hacia abajo.",
      "B": "Mezcla aleatoriamente los niveles lógicos de gobierno y contenedores de recursos.",
      "C": "Opción correcta.",
      "D": "Google Cloud implementa una jerarquía rigurosa con herencia automática de políticas IAM y políticas de organización."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-022",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Herencia de Políticas de IAM y Políticas de Organización (Organization Policies)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Mecanismo de Herencia de Políticas en la Jerarquía de Recursos",
    "scenario": "Un administrador de seguridad asigna el rol `roles/viewer` a un grupo de auditores a nivel del nodo de la Organización. Posteriormente, un equipo crea un nuevo proyecto dentro de una carpeta nueva de esa organización. ¿Qué permisos tendrán los auditores en ese nuevo proyecto?",
    "keywords": [
      "Herencia de IAM",
      "Nodo de Organización",
      "Herencia hacia abajo",
      "Gobernanza centralizada"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "La organización borra el proyecto inmediatamente.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "No tendrán ningún acceso hasta que el director general firme un documento físico notariado.",
        "isTrap": true,
        "trapType": "absurd_bureaucracy"
      },
      {
        "letter": "C",
        "text": "El rol se convierte automáticamente en `roles/owner` destructivo.",
        "isTrap": true,
        "trapType": "permission_escalation_trap"
      },
      {
        "letter": "D",
        "text": "Heredan automáticamente el rol `roles/viewer` en el nuevo proyecto y en todos sus recursos sin requerir ninguna configuración adicional, debido a la herencia hacia abajo de las políticas de IAM.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "En la jerarquía de recursos de Google Cloud, las políticas de IAM se heredan transitivamente hacia abajo: los permisos otorgados a nivel de Organización o Carpeta se aplican automáticamente a todas las carpetas, proyectos y recursos contenidos debajo de ese nodo.",
    "distractors": {
      "A": "Crear proyectos es una operación estándar y los proyectos heredan las políticas del padre.",
      "B": "La herencia en la nube es automática, programática y en tiempo real.",
      "C": "Los permisos heredados mantienen exactamente el mismo alcance definido en el nodo superior.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/understanding-roles#policy_inheritance",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-023",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Políticas de Organización (Organization Policies): Guardarraíles Centralizados",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Imposición de Guardarraíles Centralizados con Organization Policies",
    "scenario": "El Director de Seguridad exige que ningún desarrollador en ningún proyecto de la empresa pueda asignar direcciones IP públicas externas a las máquinas virtuales de Compute Engine, y que todos los recursos solo puedan crearse en regiones geográficas de la Unión Europea por leyes de residencia de datos. ¿Qué mecanismo de gobernanza centralizada debe aplicarse a nivel de la Organización?",
    "keywords": [
      "Organization Policies",
      "Restricciones de organización",
      "Guardarraíles",
      "Desactivar IP pública",
      "Restricción de ubicaciones"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Políticas de Organización (Organization Policies), configurando restricciones predefinidas como `constraints/compute.vmExternalIpAccess` y `constraints/gcp.resourceLocations`.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Desconectar los cables de Internet de todos los empleados",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Enviar un recordatorio por correo y esperar que todos los desarrolladores obedezcan voluntariamente",
        "isTrap": true,
        "trapType": "informal_antipattern"
      }
    ],
    "correct": "A",
    "explanation": "El Servicio de Políticas de Organización (Organization Policy Service) proporciona a los administradores de la nube control centralizado y guardarraíles programáticos para restringir cómo se configuran los recursos en toda la jerarquía de la empresa, independientemente de los permisos de IAM de los desarrolladores individuales.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cortar Internet imposibilita el trabajo de desarrollo.",
      "C": "Cloud Storage Nearline almacena archivos pasivos.",
      "D": "Los acuerdos informales no ofrecen garantías técnicas contra errores humanos o configuraciones maliciosas."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/organization-policy/overview",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-024",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cuentas de Facturación (Cloud Billing Accounts) y Enlace de Proyectos",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Estructura de Cuentas de Facturación y Asociación con Proyectos",
    "scenario": "Una empresa multinacional tiene 10 divisiones de negocio independientes. Desean entender cómo se vinculan los proyectos de Google Cloud con la facturación financiera. ¿Cuál es la relación estructural entre proyectos y cuentas de facturación (Cloud Billing Accounts)?",
    "keywords": [
      "Cloud Billing Accounts",
      "Vinculación de proyectos",
      "Unidad de facturación",
      "Gobernanza financiera"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Un solo proyecto debe estar vinculado obligatoriamente a 50 cuentas de facturación diferentes simultáneamente.",
        "isTrap": true,
        "trapType": "impossible_relationship"
      },
      {
        "letter": "B",
        "text": "Una Cuenta de Facturación (Cloud Billing Account) puede estar vinculada a uno o varios Proyectos; sin embargo, cada Proyecto individual solo puede estar vinculado a una única Cuenta de Facturación a la vez.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Google Cloud no tiene cuentas de facturación porque todos los servicios son gratuitos e ilimitados para siempre.",
        "isTrap": true,
        "trapType": "false_claim"
      },
      {
        "letter": "D",
        "text": "Las cuentas de facturación solo aceptan pagos en cheques de papel enviados por barco.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "En Google Cloud, una Cuenta de Facturación (Billing Account) es un recurso raíz que define quién paga por el consumo. Tiene una relación de uno a muchos con los proyectos: una cuenta de facturación puede pagar los costos de cientos de proyectos, pero cada proyecto solo puede estar asociado a una cuenta de facturación en un momento dado.",
    "distractors": {
      "A": "Un proyecto no puede dividir su facturación nativa entre múltiples cuentas de facturación simultáneamente de forma directa.",
      "B": "Opción correcta.",
      "C": "Google Cloud es una plataforma comercial con facturación transparente basada en el consumo.",
      "D": "Google Cloud admite métodos de pago electrónicos modernos y facturación empresarial consolidada."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/concepts",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-025",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Presupuestos y Alertas de Facturación (Budgets and Budget Alerts)",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Configuración de Presupuestos y Notificaciones de Costos con Budget Alerts",
    "scenario": "El Director Financiero de una startup establece un presupuesto mensual de $5,000 USD para Google Cloud. Desea recibir alertas por correo electrónico cuando los costos reales o previstos alcancen el 50%, 90% y 100% del presupuesto. ¿Cómo se comportan las alertas de presupuesto (Budget Alerts) de forma predeterminada en Google Cloud?",
    "keywords": [
      "Budget Alerts",
      "Alertas de presupuesto",
      "Umbrales 50% 90% 100%",
      "Sin apagado automático por defecto",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Las alertas de presupuesto solo pueden enviarse mediante palomas mensajeras.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Apagan inmediatamente y borran todas las bases de datos de producción al alcanzar el 50.1% del presupuesto.",
        "isTrap": true,
        "trapType": "destructive_misconception"
      },
      {
        "letter": "C",
        "text": "Envían notificaciones por correo electrónico a los administradores de facturación cuando se alcanzan los umbrales definidos, pero NO apagan ni interrumpen automáticamente los recursos de los proyectos por defecto para evitar caídas imprevistas de producción.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Llaman por teléfono a la policía para reportar un delito financiero.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "Los presupuestos y alertas de Google Cloud son herramientas de visibilidad y notificación temprana. Por defecto, alcanzar o superar el 100% de un presupuesto no detiene ni elimina los recursos en ejecución, garantizando que los servicios críticos de negocio continúen operando mientras el equipo gestiona la optimización.",
    "distractors": {
      "A": "Las notificaciones se envían electrónicamente por correo o mediante mensajes de Pub/Sub.",
      "B": "Google Cloud nunca apaga automáticamente recursos de producción por superar un presupuesto a menos que el cliente programe explícitamente una automatización personalizada vía Pub/Sub y Cloud Functions.",
      "C": "Opción correcta.",
      "D": "Superar un presupuesto de cómputo es un asunto de gestión interna de TI, no una infracción legal."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/budgets",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-026",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Exportación de Datos de Facturación a BigQuery (Billing Export)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Análisis Financiero Detallado y Dashboards con Cloud Billing Export hacia BigQuery",
    "scenario": "Un equipo de FinOps necesita realizar análisis detallados de costos en la nube: desglosar el gasto por etiquetas (labels) de centro de costos, analizar el consumo hora por hora, rastrear el ahorro generado por descuentos (CUDs/SUDs) y construir tableros ejecutivos interactivos en Looker Studio. ¿Qué funcionalidad de facturación deben habilitar?",
    "keywords": [
      "Billing Export",
      "Exportación de facturación a BigQuery",
      "FinOps",
      "Análisis SQL de costos",
      "Looker Studio"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive sin esquemas",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Desactivar la facturación de la empresa",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Copiar los números de la factura a mano en un cuaderno de papel con pluma.",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "D",
        "text": "Habilitar la exportación automática de datos de facturación de Cloud Billing hacia BigQuery (Cloud Billing Export to BigQuery).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Billing Export hacia BigQuery permite exportar automáticamente datos detallados y continuos de facturación (estándar, detallada con uso a nivel de recursos y precios) hacia conjuntos de datos de BigQuery para ejecutar consultas SQL avanzadas y construir reportes visuales personalizados en Looker o Looker Studio.",
    "distractors": {
      "A": "Cloud Storage Archive no permite ejecutar consultas SQL analíticas de alto rendimiento para dashboards.",
      "B": "Desactivar la facturación suspende los proyectos y recursos en la nube.",
      "C": "El copiado manual de miles de líneas de facturación es lento, propenso a errores e inauditable.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/export-data-bigquery",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-027",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Etiquetas y Rótulos (Labels vs Tags) para Asignación de Costos",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Asignación Precisa de Costos y Control de Políticas con Labels y Tags",
    "scenario": "Una empresa necesita: (1) Asignar pares de clave-valor a máquinas virtuales y buckets para desglosar el gasto en la factura por 'centro_de_costos: marketing' y 'ambiente: produccion' (Labels), y (2) Asignar etiquetas gobernadas centralmente para aplicar políticas de seguridad condicionales en IAM y firewall en toda la organización (Tags). ¿Cómo se diferencian Labels y Tags en Google Cloud?",
    "keywords": [
      "Labels",
      "Tags",
      "Asignación de costos",
      "FinOps",
      "Políticas condicionales",
      "Etiquetas"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Las Etiquetas (Labels) se utilizan principalmente para organizar recursos y desglosar costos en los reportes de facturación; los Rótulos/Tags (Resource Manager Tags) están gobernados centralmente y permiten aplicar políticas de IAM y reglas de firewall condicionales.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Labels y Tags son nombres comerciales para discos magnéticos físicos locales.",
        "isTrap": true,
        "trapType": "hardware_mismatch"
      },
      {
        "letter": "C",
        "text": "Las Labels solo pueden tener una letra de longitud como máximo.",
        "isTrap": true,
        "trapType": "false_limitation"
      },
      {
        "letter": "D",
        "text": "Google Cloud prohíbe el uso de etiquetas en cualquier recurso.",
        "isTrap": true,
        "trapType": "false_claim"
      }
    ],
    "correct": "A",
    "explanation": "Las Labels son metadatos clave-valor ideales para categorización granular y atribución de costos en Billing Export. Las Tags de Resource Manager se administran a nivel organizacional y se integran con el motor de políticas para otorgar permisos condicionales o aplicar reglas de firewall dinámicamente.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Labels y Tags son conceptos de metadatos y gobernanza de software en la nube.",
      "C": "Las Labels admiten cadenas de texto descriptivas de clave y valor según estándares definidos.",
      "D": "El etiquetado es una de las mejores prácticas más recomendadas en Google Cloud."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/tags/tags-overview",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-028",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Métricas de Confiabilidad SRE: SLI, SLO y SLA",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferenciación Conceptual de Confiabilidad: SLI vs SLO vs SLA",
    "scenario": "En un taller de Site Reliability Engineering (SRE), un consultor explica tres conceptos fundamentales: (1) La medición cuantitativa real del rendimiento en tiempo real (como latencia o tasa de éxito), (2) La meta interna deseada que el equipo busca alcanzar, y (3) El compromiso contractual formal con el cliente que incluye penalizaciones o créditos financieros si no se cumple. ¿Cuáles son estos tres conceptos?",
    "keywords": [
      "SLI",
      "SLO",
      "SLA",
      "SRE",
      "Indicador",
      "Objetivo",
      "Acuerdo de nivel de servicio"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Todos son sinónimos exactos de la velocidad de CPU en GHz",
        "isTrap": true,
        "trapType": "hardware_mismatch"
      },
      {
        "letter": "B",
        "text": "(1) SLI (Service Level Indicator); (2) SLO (Service Level Objective); (3) SLA (Service Level Agreement)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "(1) SLA; (2) SLI; (3) SLO",
        "isTrap": true,
        "trapType": "misaligned_sre_terms"
      },
      {
        "letter": "D",
        "text": "(1) TCO; (2) ROI; (3) CAPEX",
        "isTrap": true,
        "trapType": "financial_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "SLI (Indicador) es la métrica real observada (ej. 99.92% de peticiones exitosas); SLO (Objetivo) es la meta interna que el equipo de ingeniería se fija para mantener la calidad (ej. 99.9%); y SLA (Acuerdo) es el compromiso legal vinculante con los clientes que acarrea consecuencias financieras si se incumple (ej. 99.5%).",
    "distractors": {
      "A": "SLI/SLO/SLA miden la confiabilidad y calidad de un servicio distribuido, no la frecuencia de reloj de hardware.",
      "B": "Opción correcta.",
      "C": "Invierte los conceptos de indicador medible, meta técnica y contrato legal.",
      "D": "TCO, ROI y CapEx son términos de análisis financiero y contable."
    },
    "officialDocUrl": "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-029",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Presupuesto de Errores (Error Budget) en SRE",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Balance entre Velocidad de Innovación y Estabilidad con Error Budgets",
    "scenario": "Un equipo de desarrollo desea lanzar nuevas funcionalidades comerciales diariamente, mientras que el equipo de operaciones exige congelar los despliegues para evitar fallos. En la metodología SRE de Google, ¿cómo resuelve el 'Presupuesto de Errores' (Error Budget) esta tensión entre innovación y estabilidad?",
    "keywords": [
      "Error Budget",
      "Presupuesto de errores",
      "SRE",
      "Velocidad de innovación",
      "100% menos SLO"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Exige que ningún sistema en el mundo tenga más del 0.000000% de margen de error bajo ninguna circunstancia.",
        "isTrap": true,
        "trapType": "impossible_100_percent_sla"
      },
      {
        "letter": "B",
        "text": "Prohíbe que los desarrolladores y operadores hablen entre sí.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "El Error Budget (calculado como 100% menos el SLO, ej. 0.1% de margen de fallo) define la cantidad tolerable de riesgo e inestabilidad permitida: si sobra presupuesto de errores, los desarrolladores pueden lanzar cambios rápidos; si el presupuesto se agota, se prioriza la estabilización del sistema.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "El Error Budget es una cantidad de dinero en dólares que se entrega a los desarrolladores para pagar multas personales cuando rompen producción.",
        "isTrap": true,
        "trapType": "literal_financial_misconception"
      }
    ],
    "correct": "C",
    "explanation": "El Presupuesto de Errores (Error Budget) es la base de la colaboración en SRE: reconoce que la confiabilidad del 100% es un objetivo erróneo y antieconómico. Utiliza el margen de fallo permitido (100% - SLO) como una moneda de cambio compartida para equilibrar la velocidad de innovación con la estabilidad del servicio.",
    "distractors": {
      "A": "Buscar 100% de disponibilidad continua es prohibitivamente costoso y frena por completo el desarrollo de nuevas funciones.",
      "B": "SRE promueve la colaboración estrecha y compartida entre desarrollo y operaciones.",
      "C": "Opción correcta.",
      "D": "No es una multa monetaria; es una métrica de tiempo o porcentaje de peticiones con error tolerables."
    },
    "officialDocUrl": "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D4-030",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Error Reporting: Agregación Automática de Errores de Aplicación",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Detección y Agrupación Inteligente de Excepciones de Software con Error Reporting",
    "scenario": "Una aplicación en producción arroja miles de errores y excepciones en el código (NullPointerExceptions, fallos de base de datos). En lugar de que los ingenieros busquen manualmente entre millones de líneas de texto de logs desordenadas, necesitan un servicio que agrupe automáticamente los errores por tipo y traza de pila (stack trace), muestre su frecuencia y notifique al equipo cuando surge un nuevo error inédito. ¿Qué servicio realiza esto?",
    "keywords": [
      "Cloud Error Reporting",
      "Agrupación de stack traces",
      "Excepciones en producción",
      "Alertas de nuevos errores"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "telecom_mismatch"
      },
      {
        "letter": "C",
        "text": "Desactivar la captura de excepciones para que la app no muestre fallos",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "D",
        "text": "Cloud Error Reporting",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Error Reporting analiza y desglosa los registros de errores y las trazas de pila (stack traces) de aplicaciones en ejecución, agrupando fallos similares de forma inteligente, mostrando su frecuencia de ocurrencia y enviando alertas cuando se detecta un error de software nuevo.",
    "distractors": {
      "A": "Cloud Storage Coldline almacena archivos pasivos.",
      "B": "Cloud Interconnect es conectividad física de telecomunicaciones.",
      "C": "Ocultar excepciones no soluciona el problema de software y degrada la experiencia de los clientes.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/error-reporting/docs",
    "blockId": "BLOCK-2"
  },
  {
    "id": "CDL-D1-011",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Estrategia de Código Abierto y Prevención de Vendor Lock-in",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Prevención del Bloqueo de Proveedor (Vendor Lock-in) con Open Source",
    "scenario": "El Director de Tecnología (CTO) de una startup desea migrar a la nube pero le preocupa quedar atrapado con tecnologías propietarias que impidan mover sus cargas de trabajo en el futuro. ¿Cómo aborda Google Cloud esta preocupación en su estrategia de plataforma?",
    "keywords": [
      "Vendor Lock-in",
      "Código abierto",
      "Open Source",
      "Kubernetes",
      "Portabilidad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google bloquea las conexiones de red con otros proveedores de nube para evitar la portabilidad.",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "B",
        "text": "Google obliga contractualmente a los clientes a permanecer al menos 10 años en su plataforma.",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "C",
        "text": "Google Cloud construye sus servicios sobre estándares abiertos y tecnologías de código abierto líderes (como Kubernetes, TensorFlow y Apache Beam), garantizando la portabilidad de aplicaciones.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Google Cloud solo permite el uso de lenguajes de programación propietarios desarrollados exclusivamente por Google.",
        "isTrap": true,
        "trapType": "untrue_claim"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud tiene un compromiso profundo con el código abierto y la interoperabilidad, habiendo creado y donado tecnologías fundamentales como Kubernetes y TensorFlow. Esto permite a los clientes ejecutar sus aplicaciones en cualquier entorno compatible sin bloqueo de proveedor.",
    "distractors": {
      "A": "Google Cloud admite arquitecturas híbridas y multinube mediante soluciones abiertas como GKE Enterprise (Anthos).",
      "B": "Google Cloud ofrece modelos de suscripción flexibles y bajo demanda sin contratos forzosos que impidan la salida.",
      "C": "Opción correcta.",
      "D": "Google Cloud soporta todos los lenguajes y frameworks de desarrollo populares del mercado."
    },
    "officialDocUrl": "https://cloud.google.com/open-cloud",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D1-012",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Estrategias Híbridas y Multi-Cloud",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Adopción de Estrategias Multinube para Resiliencia Empresarial",
    "scenario": "Una corporación global opera en múltiples países con regulaciones estrictas de soberanía de datos y busca evitar depender de un único proveedor de infraestructura. ¿Cuál es la principal justificación estratégica para adoptar una arquitectura multinube?",
    "keywords": [
      "Multinube",
      "Multi-cloud",
      "Resiliencia",
      "Soberanía de datos",
      "Mitigación de riesgos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Eliminar por completo la necesidad de contar con políticas de seguridad y gobernanza.",
        "isTrap": true,
        "trapType": "security_misconception"
      },
      {
        "letter": "B",
        "text": "Evitar el uso de contenedores e interfaces de programación de aplicaciones (APIs).",
        "isTrap": true,
        "trapType": "counterproductive"
      },
      {
        "letter": "C",
        "text": "Duplicar exactamente cada servidor físico en todas las nubes posibles para triplicar los costos operativos.",
        "isTrap": true,
        "trapType": "cost_inefficient"
      },
      {
        "letter": "D",
        "text": "Mitigar el riesgo de dependencia tecnológica, cumplir con regulaciones locales de datos y aprovechar los mejores servicios especializados de cada proveedor de nube.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Una estrategia multinube permite a las empresas mitigar riesgos de disponibilidad y concentración, cumplir con leyes locales de residencia de datos y seleccionar las mejores capacidades tecnológicas de cada plataforma según sus necesidades específicas.",
    "distractors": {
      "A": "Los entornos multinube requieren una gobernanza y seguridad más robustas y centralizadas, no su eliminación.",
      "B": "Los contenedores y las APIs abiertas son precisamente los habilitadores técnicos clave para el éxito multinube.",
      "C": "Duplicar indiscriminadamente la infraestructura sin justificación técnica genera costos innecesarios y alta complejidad.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/anthos",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D1-013",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Cultura de Innovación de Google (10x Thinking)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Filosofía de Pensamiento 10x (10x Thinking) en la Transformación Digital",
    "scenario": "Como parte de un taller de liderazgo para la transformación digital, un consultor de Google Cloud presenta el principio de 'Pensamiento 10x' (10x Thinking). ¿Qué significa este principio en el contexto de la innovación empresarial?",
    "keywords": [
      "10x Thinking",
      "Pensamiento 10x",
      "Innovación radical",
      "Transformación",
      "Reimaginar"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Buscar una mejora radical de diez veces (10x) en lugar de una mejora incremental del 10%, repensando los problemas desde sus fundamentos con ayuda de la tecnología.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Multiplicar por diez el presupuesto anual del departamento de TI sin modificar los procesos existentes.",
        "isTrap": true,
        "trapType": "budget_misconception"
      },
      {
        "letter": "C",
        "text": "Incrementar diez veces el número de horas de trabajo semanales de los desarrolladores de software.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Comprar diez centros de datos físicos en diferentes ciudades para hospedar servidores legados.",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      }
    ],
    "correct": "A",
    "explanation": "El '10x Thinking' promueve abordar los desafíos empresariales buscando mejoras de un orden de magnitud (1000%) en lugar de pequeños avances incrementales (10%), lo que obliga a cuestionar supuestos tradicionales y aprovechar tecnologías transformadoras.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Aumentar el presupuesto sin transformar la forma de trabajar no genera innovación radical.",
      "C": "El pensamiento 10x se refiere a la efectividad y rediseño de soluciones, no a sobrecargar al personal.",
      "D": "Invertir en infraestructura física legada contradice la agilidad y escalabilidad que ofrece la nube."
    },
    "officialDocUrl": "https://cloud.google.com/transform",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D1-014",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Agilidad Empresarial y Reducción del Time-to-Market",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aceleración del Tiempo de Comercialización (Time-to-Market)",
    "scenario": "Una empresa de retail compite con nuevos actores nativos digitales que lanzan funcionalidades comerciales en días. En su infraestructura local, aprovisionar un nuevo entorno de pruebas toma 8 semanas. ¿Cómo resuelve Google Cloud este cuello de botella?",
    "keywords": [
      "Time-to-Market",
      "Agilidad",
      "Aprovisionamiento bajo demanda",
      "Velocidad de entrega"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Restringe la creación de nuevos servicios a un único día al mes para mantener el control.",
        "isTrap": true,
        "trapType": "bureaucratic_antipattern"
      },
      {
        "letter": "B",
        "text": "Permite aprovisionar recursos de cómputo, bases de datos y entornos completos de desarrollo en minutos mediante APIs y plantillas automatizadas.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Exige que los proveedores de hardware entreguen servidores físicos en 24 horas a las oficinas del cliente.",
        "isTrap": true,
        "trapType": "physical_hardware_fallacy"
      },
      {
        "letter": "D",
        "text": "Elimina la fase de pruebas de software para desplegar directamente en producción sin validación.",
        "isTrap": true,
        "trapType": "dangerous_practice"
      }
    ],
    "correct": "B",
    "explanation": "La infraestructura programable y bajo demanda de Google Cloud permite a los equipos de desarrollo crear y destruir entornos en cuestión de minutos, reduciendo drásticamente el tiempo de comercialización (time-to-market) y acelerando los ciclos de retroalimentación con los clientes.",
    "distractors": {
      "A": "Limitar los despliegues a ventanas mensuales incrementa los cuellos de botella y reduce la agilidad.",
      "B": "Opción correcta.",
      "C": "En la nube no se envían servidores físicos a las instalaciones del cliente; todo se consume virtualizado e instantáneo.",
      "D": "Omitir pruebas es una mala práctica que compromete la calidad y estabilidad del negocio."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/devops",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D1-015",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Democratización de Datos y Analítica para Usuarios de Negocio",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Democratización de Datos con Herramientas de Autoservicio",
    "scenario": "El equipo de marketing y ventas depende de solicitudes manuales al equipo de ingeniería de datos para generar reportes, lo que causa demoras de semanas. La empresa busca empoderar a los analistas de negocio para consultar datos de forma autónoma. ¿Qué concepto describe esta estrategia?",
    "keywords": [
      "Democratización de datos",
      "Autoservicio",
      "Self-service analytics",
      "BI",
      "Toma de decisiones"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Bloqueo total del acceso a las bases de datos para evitar que los usuarios de negocio hagan preguntas complejas.",
        "isTrap": true,
        "trapType": "restrictive_antipattern"
      },
      {
        "letter": "B",
        "text": "Contratación de un equipo externo que procese manualmente cada consulta comercial en papel.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Democratización de datos mediante herramientas de analítica y business intelligence de autoservicio (como BigQuery y Looker Studio).",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Centralización exclusiva de los reportes en hojas de cálculo enviadas por correo electrónico semanalmente.",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      }
    ],
    "correct": "C",
    "explanation": "La democratización de datos proporciona a los usuarios de toda la organización herramientas de autoservicio seguras e intuitivas para acceder, explorar y analizar datos en tiempo real sin requerir intervención constante de los ingenieros de TI.",
    "distractors": {
      "A": "Bloquear el acceso frena la innovación y la toma de decisiones basada en evidencia.",
      "B": "El procesamiento manual externo es lento, costoso e ineficiente frente a plataformas analíticas modernas.",
      "C": "Opción correcta.",
      "D": "Las hojas de cálculo desconectadas generan datos obsoletos, errores de fórmula y riesgos de seguridad."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-031",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Pub/Sub: Mensajería Asíncrona Global y Desacoplamiento",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Desacoplamiento de Microservicios con Mensajería Asincrónica en Cloud Pub/Sub",
    "scenario": "En una arquitectura de comercio electrónico, el microservicio de procesamiento de pedidos debe notificar a múltiples servicios independientes (inventario, facturación, notificaciones por SMS y analítica) cada vez que se completa una compra, sin que los servicios dependan directamente unos de otros ni se sincronicen por llamadas HTTP bloqueantes. ¿Qué servicio de Google Cloud implementa este patrón 'Publicador/Suscriptor'?",
    "keywords": [
      "Cloud Pub/Sub",
      "Mensajería asíncrona",
      "Desacoplamiento",
      "Patrón Publish/Subscribe",
      "Escala global"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud SQL",
        "isTrap": true,
        "trapType": "rdbms_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "network_cable_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Armor",
        "isTrap": true,
        "trapType": "ddos_waf_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Pub/Sub",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Pub/Sub es un servicio de mensajería asíncrona y escalable globalmente que desacopla los servicios que producen eventos (publicadores) de los servicios que los procesan (suscriptores), garantizando entrega confiable y absorción de picos de carga.",
    "distractors": {
      "A": "Cloud SQL es una base de datos relacional; usar tablas SQL como colas de mensajes introduce cuellos de botella de bloqueo transaccional.",
      "B": "Cloud Interconnect es una conexión de red física dedicada de fibra óptica entre el centro de datos y Google Cloud.",
      "C": "Cloud Armor es un servicio de firewall de aplicaciones web (WAF) y mitigación de ataques DDoS.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/pubsub/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-032",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Dataplex: Gobernanza de Datos y Data Mesh",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Gobernanza Unificada en Arquitecturas Data Mesh con Dataplex",
    "scenario": "Una gran organización empresarial tiene datos distribuidos en cientos de buckets de Cloud Storage y conjuntos de datos de BigQuery gestionados por diferentes dominios de negocio. Requieren una plataforma centralizada que permita catalogar los metadatos, auditar la calidad de los datos y aplicar políticas de seguridad unificadas sin mover físicamente los datos. ¿Qué servicio deben implementar?",
    "keywords": [
      "Dataplex",
      "Data Mesh",
      "Gobernanza de datos",
      "Catálogo unificado",
      "Calidad de datos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Dataplex",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Compute Engine Bare Metal",
        "isTrap": true,
        "trapType": "hardware_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud NAT",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Trace",
        "isTrap": true,
        "trapType": "apm_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Dataplex es una estructura de datos inteligente (data fabric) que permite a las organizaciones gobernar, supervisar y descubrir datos de forma centralizada a través de lagos de datos, almacenes de datos y mercados de datos, soportando arquitecturas modernas de Data Mesh.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Compute Engine Bare Metal ofrece servidores físicos sin hipervisor.",
      "C": "Cloud NAT permite a VMs privadas acceder a Internet sin IP pública.",
      "D": "Cloud Trace mide la latencia de llamadas entre servicios web."
    },
    "officialDocUrl": "https://cloud.google.com/dataplex",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-033",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Protección de Datos Sensibles (Cloud DLP / Sensitive Data Protection)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Descubrimiento y Enmascaramiento Automático de PII con Sensitive Data Protection (Cloud DLP)",
    "scenario": "Una empresa de salud transfiere millones de registros clínicos a Google Cloud. Para cumplir con leyes de privacidad como HIPAA y GDPR, necesitan escanear automáticamente los archivos para detectar, clasificar y anonimizar (enmascarar o tokenizar) información de identificación personal (PII) como números de seguro social y tarjetas de crédito antes de que los analistas tengan acceso. ¿Qué servicio proporciona esta capacidad?",
    "keywords": [
      "Cloud DLP",
      "Sensitive Data Protection",
      "PII",
      "Enmascaramiento de datos",
      "Cumplimiento HIPAA GDPR"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Load Balancing",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "B",
        "text": "Sensitive Data Protection (anteriormente Cloud DLP)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Shell",
        "isTrap": true,
        "trapType": "cli_mismatch"
      },
      {
        "letter": "D",
        "text": "Google Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Sensitive Data Protection (Cloud DLP) es un servicio totalmente administrado que ayuda a descubrir, clasificar, enmascarar, tokenizar y redactar automáticamente datos confidenciales (como PII, PHI y credenciales) en Cloud Storage, BigQuery y flujos de datos.",
    "distractors": {
      "A": "Cloud Load Balancing distribuye el tráfico de red de usuarios entre múltiples servidores.",
      "B": "Opción correcta.",
      "C": "Cloud Shell es una máquina virtual interactiva basada en navegador para ejecutar comandos de gcloud.",
      "D": "Cloud DNS gestiona zonas y registros de nombres de dominio en la red."
    },
    "officialDocUrl": "https://cloud.google.com/sensitive-data-protection/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-034",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Vertex AI: Plataforma Unificada de MLOps",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Plataforma Integral de Machine Learning y MLOps con Vertex AI",
    "scenario": "El equipo de ciencia de datos de una corporación utiliza múltiples herramientas desconectadas para etiquetar datos, entrenar modelos de machine learning, evaluar su precisión, desplegarlos en producción y monitorear el sesgo (drift) de predicciones. Desean unificar todo el ciclo de vida de Machine Learning (MLOps) en una sola plataforma en Google Cloud. ¿Qué plataforma deben adoptar?",
    "keywords": [
      "Vertex AI",
      "MLOps",
      "Ciclo de vida de Machine Learning",
      "AutoML",
      "Entrenamiento y despliegue"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud VPN",
        "isTrap": true,
        "trapType": "vpn_mismatch"
      },
      {
        "letter": "B",
        "text": "Google Cloud CDN",
        "isTrap": true,
        "trapType": "cdn_mismatch"
      },
      {
        "letter": "C",
        "text": "Vertex AI",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Deployment Manager",
        "isTrap": true,
        "trapType": "iac_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Vertex AI es la plataforma unificada de IA y Machine Learning de Google Cloud que reúne todas las herramientas de MLOps: preparación de datos, entrenamiento (AutoML y personalizado), gestión de experimentos, registros de modelos, despliegue de endpoints y monitoreo continuo.",
    "distractors": {
      "A": "Cloud VPN crea túneles seguros IPsec para conectar redes físicas con VPCs de Google Cloud.",
      "B": "Cloud CDN distribuye en caché contenido estático en la red perimetral de Google.",
      "C": "Opción correcta.",
      "D": "Cloud Deployment Manager es una herramienta de infraestructura como código (IaC)."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-035",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Vertex AI: AutoML vs Entrenamiento Personalizado (Custom Training)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Elección entre AutoML y Entrenamiento Personalizado en Vertex AI",
    "scenario": "Una empresa de bienes raíces quiere predecir el precio de venta de propiedades basándose en datos históricos tabulares. Su equipo cuenta con analistas de negocio que entienden los datos pero no tienen experiencia escribiendo código en Python, PyTorch o TensorFlow. ¿Qué enfoque de Vertex AI les permite construir un modelo de alta precisión sin programar?",
    "keywords": [
      "Vertex AI AutoML",
      "Sin código",
      "Modelos tabulares",
      "Entrenamiento automatizado",
      "Machine Learning"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Comprar servidores físicos GPU e instalar drivers CUDA manualmente",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "B",
        "text": "Entrenamiento personalizado escribiendo contenedores Docker de TensorFlow desde cero",
        "isTrap": true,
        "trapType": "high_complexity_overhead"
      },
      {
        "letter": "C",
        "text": "Adivinar los precios manualmente con una calculadora de bolsillo",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Vertex AI AutoML (entrenamiento automatizado con interfaz gráfica)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Vertex AI AutoML permite a usuarios con conocimientos limitados de Machine Learning entrenar modelos personalizados de alta calidad para datos tabulares, imágenes, texto o video mediante una interfaz intuitiva con búsqueda automática de arquitectura neuronal (NAS).",
    "distractors": {
      "A": "Comprar servidores físicos locales requiere una inversión masiva de capital y habilidades de administración de hardware.",
      "B": "El entrenamiento personalizado requiere conocimientos avanzados de programación y ciencia de datos que el equipo no posee.",
      "C": "La adivinación manual es propensa a errores y no aprovecha el valor de los datos históricos.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/beginner/beginners-guide",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-036",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "BigQuery ML: Machine Learning con SQL Estándar",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Construcción de Modelos de Machine Learning directamente con SQL en BigQuery ML",
    "scenario": "Un equipo de analistas de datos domina perfectamente el lenguaje SQL y gestiona todos sus datos de clientes en BigQuery. La dirección les pide predecir qué clientes tienen probabilidad de cancelar su suscripción (Customer Churn). Los analistas no saben programar en Python ni exportar datos a herramientas externas. ¿Qué capacidad nativa de Google Cloud deben aprovechar?",
    "keywords": [
      "BigQuery ML",
      "Machine Learning con SQL",
      "Predecir Churn",
      "Sin exportar datos",
      "Modelos en el almacén de datos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "BigQuery ML (que permite entrenar y evaluar modelos de ML directamente en BigQuery utilizando sentencias SQL estándar como `CREATE MODEL`)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Reescribir toda la base de datos en hojas de cálculo de Excel",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "C",
        "text": "Cancelar el proyecto de predicción de abandono de clientes",
        "isTrap": true,
        "trapType": "defeatist_antipattern"
      },
      {
        "letter": "D",
        "text": "Exportar todos los datos a archivos CSV y enviarlos por correo a un programador externo",
        "isTrap": true,
        "trapType": "unsecure_inefficient"
      }
    ],
    "correct": "A",
    "explanation": "BigQuery ML democratiza el machine learning al permitir a los profesionales de SQL crear, entrenar, evaluar y ejecutar predicciones de modelos de ML directamente dentro de BigQuery, sin necesidad de mover datos fuera del data warehouse ni aprender lenguajes como Python.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Excel no soporta modelos complejos de machine learning ni volúmenes empresariales de datos.",
      "C": "Descartar la iniciativa priva al negocio de retener clientes valiosos mediante analítica predictiva.",
      "D": "Exportar terabytes de datos a CSV incrementa riesgos de seguridad, lentitud y desactualización."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/bqml-introduction",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-037",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Vision API: Análisis Inteligente de Imágenes y OCR",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Reconocimiento Óptico de Caracteres (OCR) y Detección de Contenido con Vision API",
    "scenario": "Una aplicación de seguros permite a los usuarios subir fotografías de recibos de pago y placas de automóviles dañados. La empresa necesita extraer automáticamente el texto de los recibos (OCR) y detectar si las imágenes contienen contenido inapropiado o violento. ¿Qué API preentrenada de Google Cloud resuelve esta necesidad de forma inmediata?",
    "keywords": [
      "Cloud Vision API",
      "OCR",
      "Detección de objetos",
      "Safe Search",
      "Visión artificial"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Spanner",
        "isTrap": true,
        "trapType": "database_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Vision API",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Armor",
        "isTrap": true,
        "trapType": "security_waf_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Vision API ofrece modelos de visión artificial preentrenados que permiten extraer texto impreso y manuscrito (OCR), detectar etiquetas, rostros, logotipos y evaluar la seguridad del contenido (SafeSearch) a través de una simple llamada a una API REST.",
    "distractors": {
      "A": "Cloud Spanner es una base de datos relacional para transacciones globales, no un servicio de visión por computadora.",
      "B": "Opción correcta.",
      "C": "Cloud Interconnect es conectividad física de red empresarial.",
      "D": "Cloud Armor defiende aplicaciones web contra ataques DDoS y ataques de inyección SQL."
    },
    "officialDocUrl": "https://cloud.google.com/vision/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-038",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Natural Language API: Análisis de Sentimiento y Extracción de Entidades",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Análisis de Sentimiento en Comentarios de Redes Sociales con Natural Language API",
    "scenario": "Una cadena hotelera recibe miles de reseñas escritas por huéspedes en diversos sitios web. Desean clasificar automáticamente cada reseña como positiva, neutral o negativa (análisis de sentimiento) e identificar qué aspectos específicos del hotel se mencionan (como 'servicio al cliente', 'limpieza' o 'restaurante'). ¿Qué servicio preentrenado deben integrar?",
    "keywords": [
      "Cloud Natural Language API",
      "Análisis de sentimiento",
      "Extracción de entidades",
      "Procesamiento de lenguaje natural",
      "NLP"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Compute Engine Preemptible VMs",
        "isTrap": true,
        "trapType": "vm_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Natural Language API",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Load Balancing",
        "isTrap": true,
        "trapType": "network_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Natural Language API utiliza procesamiento de lenguaje natural (NLP) de última generación para analizar la estructura y el significado del texto, extrayendo entidades, analizando el sentimiento general y reconociendo la sintaxis sin requerir entrenamiento de modelos.",
    "distractors": {
      "A": "Cloud Storage Nearline es una clase de almacenamiento para respaldos de acceso mensual.",
      "B": "Preemptible VMs son servidores de cómputo con descuento que pueden ser interrumpidos por Google.",
      "C": "Opción correcta.",
      "D": "Cloud Load Balancing gestiona el balanceo de tráfico de red entre instancias."
    },
    "officialDocUrl": "https://cloud.google.com/natural-language/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-039",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Translation API y Speech APIs: Globalización y Accesibilidad",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Traducción en Tiempo Real y Conversión de Voz con Translation y Speech APIs",
    "scenario": "Una empresa de comercio internacional necesita: (1) Traducir dinámicamente descripciones de productos a más de 100 idiomas en su sitio web, y (2) Transcribir automáticamente las llamadas grabadas de su centro de soporte telefónico a texto. ¿Qué combinación de servicios de IA de Google Cloud deben utilizar?",
    "keywords": [
      "Cloud Translation API",
      "Cloud Speech-to-Text",
      "Transcripción de voz",
      "Traducción multilingüe",
      "Accesibilidad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Contratar traductores humanos para escuchar manualmente todas las llamadas en tiempo real.",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "B",
        "text": "Google Cloud Armor y Google Cloud VPC",
        "isTrap": true,
        "trapType": "security_network_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud SQL para traducir texto y Cloud Storage para transcribir voz.",
        "isTrap": true,
        "trapType": "database_storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Translation API para la traducción de texto y Cloud Speech-to-Text para la transcripción de grabaciones de audio a texto.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Translation API proporciona traducción automática neural entre más de 100 idiomas, y Cloud Speech-to-Text convierte audio grabado o en vivo a texto con alta precisión utilizando modelos avanzados de reconocimiento de voz de Google.",
    "distractors": {
      "A": "La transcripción manual es extremadamente costosa, lenta y no escala para miles de horas de llamadas diarias.",
      "B": "Cloud Armor y VPC son tecnologías de redes y seguridad perimetral de infraestructura.",
      "C": "Cloud SQL y Cloud Storage son servicios de base de datos y almacenamiento de archivos; no realizan inferencia de audio ni traducción.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/translate/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-040",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Document AI: Automatización de Documentos Empresariales",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Extracción Estructurada de Facturas y Formularios con Document AI",
    "scenario": "El departamento de cuentas por pagar de una corporación procesa mensualmente 50,000 facturas en formato PDF recibidas por correo electrónico. El equipo ingresa manualmente los datos (nombre del proveedor, número de factura, fecha, total e impuestos) en el sistema ERP, lo que provoca errores continuos. ¿Qué servicio de IA especializada automatiza este proceso?",
    "keywords": [
      "Document AI",
      "Invoice Parser",
      "Extracción de facturas",
      "Formularios",
      "Automatización de documentos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Document AI (utilizando procesadores especializados como Invoice Parser y Form Parser)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Spanner",
        "isTrap": true,
        "trapType": "rdbms_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud NAT",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "D",
        "text": "Google Compute Engine Bare Metal",
        "isTrap": true,
        "trapType": "compute_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Document AI es la plataforma de Google Cloud para comprender y extraer datos no estructurados de documentos (facturas, contratos, recibos, formularios de impuestos) transformándolos en datos estructurados listos para ser consumidos por sistemas ERP o analíticos.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud Spanner almacena y procesa transacciones relacionales, no analiza ni extrae texto de archivos PDF.",
      "C": "Cloud NAT es una puerta de enlace de red para traducir direcciones IP privadas.",
      "D": "Compute Engine Bare Metal proporciona servidores físicos sin capacidades de software de procesamiento de documentos."
    },
    "officialDocUrl": "https://cloud.google.com/document-ai/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-041",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Contact Center AI (CCAI): Modernización de Centros de Contacto",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Optimización de la Atención Telefónica y Autoservicio con Contact Center AI (CCAI)",
    "scenario": "Un banco experimenta largos tiempos de espera en su centro de llamadas telefónicas. Quieren implementar agentes virtuales basados en IA conversacional que resuelvan dudas frecuentes de los clientes de manera natural por voz o chat, y asistan a los operadores humanos en tiempo real recomendando respuestas durante llamadas complejas. ¿Qué solución integral de Google Cloud deben implementar?",
    "keywords": [
      "Contact Center AI",
      "CCAI",
      "Virtual Agents",
      "Agent Assist",
      "Conversational AI",
      "Dialogflow"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Apagar las líneas telefónicas del banco para reducir las llamadas",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Contact Center AI (CCAI) con Dialogflow CX y Agent Assist",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Filestore Basic",
        "isTrap": true,
        "trapType": "nfs_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Functions de primera generación sin disparador",
        "isTrap": true,
        "trapType": "incomplete_tool"
      }
    ],
    "correct": "B",
    "explanation": "Contact Center AI (CCAI) combina tecnologías conversacionales (Dialogflow CX), asistencia a agentes humanos en tiempo real (Agent Assist) e inteligencia de conversaciones (Insights) para mejorar la experiencia del cliente y la eficiencia operativa de los centros de atención.",
    "distractors": {
      "A": "Apagar los canales de atención destruye el negocio y viola normas financieras.",
      "B": "Opción correcta.",
      "C": "Filestore es almacenamiento de archivos compartidos NFS para servidores, no una solución de centro de contacto conversacional.",
      "D": "Cloud Functions es una plataforma de cómputo serverless general y no contiene lógica preconstruida para centros de contacto conversacionales."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/contact-center",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-042",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Modelos Fundacionales e IA Generativa en Vertex AI",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Adopción de Modelos Fundacionales y Model Garden en Vertex AI",
    "scenario": "Una empresa de marketing digital desea generar borradores creativos de campañas publicitarias y resumir extensos reportes de mercado. Quieren experimentar rápidamente con modelos fundacionales de lenguaje líderes (como Gemini) y modelos de código abierto sin gestionar infraestructura de servidores de IA. ¿Qué componente de Vertex AI les da acceso inmediato a este catálogo de modelos?",
    "keywords": [
      "Vertex AI Model Garden",
      "Gemini",
      "Modelos fundacionales",
      "Generative AI Studio",
      "Catálogo de modelos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Cloud Memorystore for Memcached",
        "isTrap": true,
        "trapType": "inmemory_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Interconnect Dedicated 10 Gbps",
        "isTrap": true,
        "trapType": "networking_mismatch"
      },
      {
        "letter": "C",
        "text": "Vertex AI Model Garden y Generative AI Studio",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Compute Engine con discos duros HDD estándar",
        "isTrap": true,
        "trapType": "hardware_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Vertex AI Model Garden ofrece una biblioteca completa y seleccionada de modelos fundacionales propios de Google (como Gemini e Imagen), modelos de código abierto y modelos de terceros, permitiendo probarlos, personalizarlos mediante ingeniería de prompts o ajuste fino (fine-tuning) y desplegarlos fácilmente en Generative AI Studio.",
    "distractors": {
      "A": "Memorystore es una caché en RAM para datos de clave-valor, no un catálogo de modelos de IA.",
      "B": "Cloud Interconnect es conectividad de red física privada, no software de IA generativa.",
      "C": "Opción correcta.",
      "D": "Discos duros HDD en VMs básicas no ofrecen modelos fundacionales preentrenados ni capacidad para ejecutar grandes modelos de lenguaje."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/model-garden/overview",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-043",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Principios de IA Responsable en Google Cloud",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Compromiso con la Inteligencia Artificial Responsable (Responsible AI)",
    "scenario": "Una institución educativa pública está evaluando la adopción de herramientas de IA generativa de Google Cloud. La junta directiva exige garantías de que los sistemas de IA se desarrollen considerando la equidad, la seguridad, la privacidad y la responsabilidad social. ¿Cómo formaliza Google Cloud este compromiso ético?",
    "keywords": [
      "Responsible AI",
      "Principios de IA de Google",
      "Equidad",
      "Privacidad",
      "Seguridad de IA"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Garantizando que la IA tome todas las decisiones gubernamentales sin supervisión humana.",
        "isTrap": true,
        "trapType": "dystopian_fallacy"
      },
      {
        "letter": "B",
        "text": "Prohibiendo el uso de computadoras en todas las universidades públicas.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Afirmando que la ética no tiene relevancia en el desarrollo de software moderno.",
        "isTrap": true,
        "trapType": "antiethical_antipattern"
      },
      {
        "letter": "D",
        "text": "A través de los 7 Principios de IA de Google (Google AI Principles) y prácticas de IA Responsable, que guían el desarrollo de tecnologías de IA socialmente beneficiosas, seguras, que eviten sesgos injustos y protejan la privacidad.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google se rige formalmente por sus Principios de IA publicados en 2018, los cuales establecen que la IA debe ser socialmente beneficiosa, evitar sesgos injustos, construirse y probarse para ser segura, rendir cuentas a las personas y respetar la privacidad de los datos.",
    "distractors": {
      "A": "Los principios de Google exigen mantener el control y supervisión humana sobre los sistemas de IA, no delegar ciegamente el control.",
      "B": "Google fomenta la educación tecnológica y el acceso democrático a herramientas avanzadas de computación.",
      "C": "La ética y la seguridad son pilares centrales en el diseño de productos de Google Cloud.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://ai.google/responsibility/principles",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-044",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Privacidad y Propiedad de los Datos del Cliente en Servicios de IA",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Privacidad y Propiedad de los Datos al Utilizar Modelos de IA Empresariales",
    "scenario": "El Director de Seguridad de la Información (CISO) de un banco pregunta qué sucede con los datos confidenciales de los clientes cuando se envían como prompts a los modelos de Vertex AI y Gemini Enterprise. ¿Cuál es el compromiso contractual de Google Cloud respecto a los datos del cliente?",
    "keywords": [
      "Propiedad de datos",
      "Privacidad en IA",
      "Tus datos son tuyos",
      "No entrenamiento de modelos con datos de clientes"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Los datos y prompts del cliente son de su exclusiva propiedad; Google Cloud nunca utiliza los datos ni las entradas del cliente para entrenar o mejorar sus modelos fundacionales de uso general sin consentimiento explícito.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Google exige que todos los datos bancarios se borren permanentemente cada 24 horas.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Google publica automáticamente todos los datos del cliente en foros públicos de Internet.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Los datos pasan a ser propiedad exclusiva de Google y se venden a competidores comerciales.",
        "isTrap": true,
        "trapType": "untrue_claim"
      }
    ],
    "correct": "A",
    "explanation": "Bajo las políticas de gobernanza y privacidad de Google Cloud, los clientes retienen el control total y la propiedad de sus datos y prompts. Los datos confidenciales empresariales utilizados con Vertex AI y Gemini no se utilizan para entrenar los modelos base compartidos de Google.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "El cliente decide el ciclo de vida y la retención de sus propios datos según sus requerimientos de negocio.",
      "C": "Google Cloud mantiene estrictas garantías de confidencialidad y aislamiento de datos.",
      "D": "Google no vende los datos de los clientes empresariales de Google Cloud."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/generative-ai/data-governance",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D2-045",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Resumen Estratégico del Ciclo de Vida de los Datos",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diseño Integral de una Canalización de Datos: Ingesta, Almacenamiento, Procesamiento, Analítica e IA",
    "scenario": "Un arquitecto de datos diseña una solución para una aplicación de autos compartidos (ride-sharing). La solución requiere: (1) Ingesta continua de viajes y eventos, (2) Procesamiento y transformación en tiempo real, (3) Almacenamiento en Data Warehouse para consultas SQL, y (4) Dashboards visuales para ejecutivos. ¿Qué secuencia arquitectónica de Google Cloud representa la mejor práctica?",
    "keywords": [
      "Arquitectura de datos",
      "Pub/Sub",
      "Dataflow",
      "BigQuery",
      "Looker",
      "Mejores prácticas"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud VPN -> Cloud Spanner -> Compute Engine Spot -> Cloud Armor",
        "isTrap": true,
        "trapType": "misaligned_pipeline"
      },
      {
        "letter": "B",
        "text": "Cloud Pub/Sub (ingesta) -> Cloud Dataflow (procesamiento streaming) -> BigQuery (data warehouse analítico) -> Looker / Looker Studio (visualización de negocio)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud SQL -> Discos magnéticos locales -> Enviar memorias USB por mensajería",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Archive -> Google Sheets -> Cloud Logging -> Cloud DNS",
        "isTrap": true,
        "trapType": "misaligned_pipeline"
      }
    ],
    "correct": "B",
    "explanation": "La arquitectura canónica de referencia para analítica de datos en tiempo real en Google Cloud es: Cloud Pub/Sub para ingesta desacoplada masiva -> Cloud Dataflow para transformación y enriquecimiento en streaming -> BigQuery para almacenamiento analítico y consultas SQL de alto rendimiento -> Looker para gobierno semántico y tableros de control ejecutivos.",
    "distractors": {
      "A": "Combina herramientas de red, bases de datos y seguridad sin constituir una canalización de analítica de datos.",
      "B": "Opción correcta.",
      "C": "El traslado físico de memorias USB es arcaico y carece de tiempo real.",
      "D": "Archive Storage y Google Sheets no pueden procesar eventos de autos compartidos en tiempo real a gran escala."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/smart-analytics-reference-architecture",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-031",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Descuentos por Compromiso de Uso (Committed Use Discounts - CUDs)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Ahorro Financiero para Cargas Predecibles con Committed Use Discounts (CUDs)",
    "scenario": "Una empresa opera una base de datos central en Compute Engine que funciona las 24 horas del día, los 365 días del año, y se proyecta que continuará operando de forma continua durante los próximos 3 años. ¿Qué opción de facturación ofrece los mayores descuentos (hasta un 57-70%) a cambio de un compromiso contractual de uso continuo?",
    "keywords": [
      "Committed Use Discounts",
      "CUDs",
      "Compromiso de 1 o 3 años",
      "Cargas de base continuas",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Precios bajo demanda regulares sin ningún compromiso",
        "isTrap": true,
        "trapType": "regular_pricing_trap"
      },
      {
        "letter": "B",
        "text": "Spot VMs (instancias interrumpibles)",
        "isTrap": true,
        "trapType": "spot_vm_production_risk"
      },
      {
        "letter": "C",
        "text": "Descuentos por Compromiso de Uso (Committed Use Discounts - CUDs por 1 o 3 años)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Pagar con monedas de oro físicas enviadas al banco central",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "Los Committed Use Discounts (CUDs) proporcionan descuentos sustanciales (hasta 57% o 70%) para cargas de trabajo predecibles y de estado constante a cambio de comprometerse a pagar por un nivel mínimo de recursos de cómputo (vCPUs/RAM o gasto financiero) durante un plazo de 1 o 3 años.",
    "distractors": {
      "A": "El precio bajo demanda es el más flexible pero el más caro para cargas que operan 24/7 de forma ininterrumpida.",
      "B": "Las Spot VMs pueden ser apagadas en cualquier momento por Google, lo que interrumpiría la base de datos de producción.",
      "C": "Opción correcta.",
      "D": "Google Cloud utiliza medios de pago electrónicos empresariales estándar."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/sustained-use-discounts",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-032",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Descuentos por Uso Sostenido (Sustained Use Discounts - SUDs)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Descuentos Automáticos por Ejecución Continua con Sustained Use Discounts (SUDs)",
    "scenario": "Un cliente ejecuta varias máquinas virtuales Compute Engine durante la mayor parte del mes de facturación. No firmó ningún contrato de compromiso a largo plazo previo. Al revisar la factura, notan un descuento automático por haber mantenido las VMs encendidas de forma constante. ¿Cómo se denomina este descuento automático de Google Cloud?",
    "keywords": [
      "Sustained Use Discounts",
      "SUDs",
      "Descuento automático",
      "Sin compromiso previo",
      "Ejecución continua mensual"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Intereses moratorios de facturación",
        "isTrap": true,
        "trapType": "penalty_mismatch"
      },
      {
        "letter": "B",
        "text": "Committed Use Discounts",
        "isTrap": true,
        "trapType": "requires_commitment"
      },
      {
        "letter": "C",
        "text": "Créditos promocionales de prueba gratuita caducados",
        "isTrap": true,
        "trapType": "trial_mismatch"
      },
      {
        "letter": "D",
        "text": "Descuentos por Uso Sostenido (Sustained Use Discounts - SUDs)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Los Sustained Use Discounts (SUDs) son descuentos automáticos aplicados por Compute Engine cuando una instancia de VM (de familias compatibles como N1/N2) se ejecuta durante más del 25% de un mes de facturación, incrementando el descuento conforme mayor porcentaje del mes esté activa la máquina, sin requerir ningún compromiso previo por parte del cliente.",
    "distractors": {
      "A": "Los SUDs son un beneficio de ahorro, no una penalización.",
      "B": "Los CUDs requieren contratar formalmente un compromiso contractual a 1 o 3 años.",
      "C": "Los créditos caducados no aplican descuentos sobre el uso de recursos.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/sustained-use-discounts",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-033",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Recommender API para Optimización de Recursos y Costos",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Detección Proactiva de Desperdicio y Redimensionamiento con Google Cloud Recommender",
    "scenario": "Un administrador de nube desea identificar automáticamente máquinas virtuales sobredimensionadas (con baja utilización de CPU y memoria), discos persistentes huérfanos que ya no están conectados a ninguna VM y permisos de IAM no utilizados para optimizar costos y seguridad. ¿Qué servicio inteligente de Google Cloud proporciona estas sugerencias accionables?",
    "keywords": [
      "Recommender",
      "Recomendaciones de redimensionamiento",
      "Discos huérfanos",
      "Optimización de costos",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Cloud Recommender (Recomendador de Google Cloud)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Contratar un auditor externo para revisar manualmente cada servidor una vez cada cinco años",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Desactivar la consola de administración",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "networking_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud Recommender utiliza análisis heurístico e inteligencia artificial para proporcionar recomendaciones automatizadas y personalizadas sobre reducción de costos (redimensionamiento de VMs, eliminación de discos ociosos), seguridad (reducción de permisos IAM excesivos) y rendimiento en la nube.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Las revisiones manuales quinquenales son obsoletas y no detectan el desperdicio dinámico continuo.",
      "C": "Desactivar la consola impide la gestión de la infraestructura.",
      "D": "Cloud Interconnect es conectividad física de redes."
    },
    "officialDocUrl": "https://cloud.google.com/recommender/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-034",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Infraestructura como Código (IaC) con Terraform y Google Cloud",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aprovisionamiento Declarativo y Versionado con Infraestructura como Código (Terraform)",
    "scenario": "Una empresa requiere aprovisionar 50 entornos idénticos de prueba para sus desarrolladores (incluyendo redes VPC, clústeres de GKE, bases de datos y cuentas de servicio). En lugar de crearlos manualmente haciendo clics en la consola web, desean definir toda la infraestructura en archivos de texto declarativos versionados en Git para aprovisionar y destruir entornos en minutos de forma repetible. ¿Qué práctica y herramienta representan el estándar de la industria en Google Cloud?",
    "keywords": [
      "Infraestructura como Código",
      "IaC",
      "Terraform",
      "Google Cloud Provider",
      "Automatización declarativa"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Crear cada entorno haciendo clics manuales en la consola de Google Cloud durante 3 semanas",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "B",
        "text": "Infraestructura como Código (IaC) utilizando Terraform con el proveedor oficial de Google Cloud",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Escribir la configuración en un cuaderno físico con lápiz de grafito",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Terraform (de HashiCorp) es la herramienta de Infraestructura como Código (IaC) líder y ampliamente recomendada en Google Cloud. Permite definir la infraestructura mediante código declarativo (HCL), asegurando reproducibilidad, consistencia, control de versiones y auditoría en la creación de recursos.",
    "distractors": {
      "A": "El aprovisionamiento manual por consola es lento, propenso a errores humanos (clickOps) y no es escalable.",
      "B": "Opción correcta.",
      "C": "Los cuadernos físicos no automatizan el despliegue de infraestructura en la nube.",
      "D": "Cloud Storage Coldline almacena archivos, no aprovisiona infraestructura declarativa."
    },
    "officialDocUrl": "https://cloud.google.com/docs/terraform",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-035",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Apigee API Management: Seguridad, Análisis y Monetización de APIs",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Gestión de APIs de Nivel Empresarial con Apigee",
    "scenario": "Un banco digital expone servicios de pagos mediante APIs a cientos de socios externos y desarrolladores Fintech. Necesitan aplicar límites de velocidad (Rate Limiting / Quotas), autenticación OAuth 2.0, análisis de consumo de tráfico, detección de anomalías de seguridad y cobrar a los socios por cada millón de llamadas a la API (monetización). ¿Qué plataforma integral de gestión de APIs de Google Cloud deben implementar?",
    "keywords": [
      "Apigee",
      "API Management",
      "Monetización de APIs",
      "OAuth 2.0",
      "Rate Limiting",
      "Seguridad de APIs"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Publicar las contraseñas de las bases de datos en foros de soporte",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "Apigee API Management",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Compute Engine Preemptible VM",
        "isTrap": true,
        "trapType": "compute_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Apigee es la plataforma líder de gestión de APIs de Google Cloud que permite a las empresas diseñar, asegurar, analizar, gobernar y monetizar APIs en entornos híbridos y multinube a gran escala.",
    "distractors": {
      "A": "Publicar contraseñas es una violación crítica de seguridad.",
      "B": "Cloud Storage Nearline almacena objetos, no gestiona ni asegura tráfico de APIs en tiempo real.",
      "C": "Opción correcta.",
      "D": "Preemptible VMs son máquinas virtuales con descuento, no una solución de gobernanza de APIs."
    },
    "officialDocUrl": "https://cloud.google.com/apigee/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-036",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "GKE: Escalado Automático Horizontal de Pods (HPA) y de Clúster (Cluster Autoscaler)",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Escalado en Dos Niveles en Kubernetes con HPA y Cluster Autoscaler",
    "scenario": "Un sitio web de comercio electrónico en GKE experimenta un pico repentino de usuarios durante una promoción relámpago. ¿Cómo colaboran el Horizontal Pod Autoscaler (HPA) y el Cluster Autoscaler para manejar esta demanda?",
    "keywords": [
      "GKE",
      "Horizontal Pod Autoscaler",
      "HPA",
      "Cluster Autoscaler",
      "Autoescalado de Pods y Nodos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "El Cluster Autoscaler borra la base de datos para liberar espacio en disco.",
        "isTrap": true,
        "trapType": "data_loss_antipattern"
      },
      {
        "letter": "B",
        "text": "Kubernetes no permite ejecutar más de un Pod a la vez en todo el clúster.",
        "isTrap": true,
        "trapType": "false_limitation"
      },
      {
        "letter": "C",
        "text": "El HPA apaga todas las máquinas virtuales para enfriar el centro de datos.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "El HPA incrementa el número de réplicas de Pods de la aplicación basándose en el uso de CPU/memoria; y si los nodos existentes se quedan sin capacidad para alojar los nuevos Pods, el Cluster Autoscaler agrega automáticamente nuevas máquinas virtuales (nodos) al clúster.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "En GKE, el escalado opera en dos niveles: el HPA ajusta dinámicamente el número de Pods según la carga de trabajo de la aplicación, mientras que el Cluster Autoscaler ajusta automáticamente el número de nodos de cómputo subyacentes cuando hay Pods en estado pendiente por falta de capacidad.",
    "distractors": {
      "A": "El autoescalador añade capacidad de cómputo; no elimina datos persistentes.",
      "B": "Kubernetes fue diseñado específicamente para orquestar miles de Pods simultáneamente.",
      "C": "Apagar máquinas ante alta demanda causa la caída del servicio a los clientes.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-037",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "GKE: Identidad de Cargas de Trabajo (Workload Identity)",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Seguridad de Acceso a Servicios de Google Cloud con GKE Workload Identity",
    "scenario": "Una aplicación que se ejecuta dentro de un Pod en GKE necesita leer archivos de un bucket privado de Cloud Storage. La empresa no desea descargar ni almacenar archivos de claves de Service Account en formato JSON dentro de los contenedores por riesgo de robo de credenciales. ¿Cuál es la mejor práctica de seguridad recomendada por Google Cloud?",
    "keywords": [
      "Workload Identity",
      "GKE",
      "Sin llaves JSON",
      "Service Account de Kubernetes",
      "Menor privilegio"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Habilitar Workload Identity en GKE para vincular de forma segura la Kubernetes Service Account (KSA) del Pod con una Google Service Account (GSA) de IAM, eliminando por completo el uso de claves de servicio en archivos JSON.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Incrustar la clave privada JSON de la Service Account en el código fuente de GitHub público.",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "C",
        "text": "Hacer público el bucket de Cloud Storage para que no requiera autenticación.",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "D",
        "text": "Asignar permisos de Owner a todos los contenedores de forma predeterminada.",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      }
    ],
    "correct": "A",
    "explanation": "Workload Identity es la forma recomendada y más segura para que las cargas de trabajo en GKE accedan a los servicios de Google Cloud (Cloud Storage, BigQuery, Secret Manager), vinculando cuentas de Kubernetes con cuentas de servicio de IAM sin necesidad de generar ni rotar claves JSON de servicio de larga duración.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Exponer claves privadas JSON en GitHub es una vulnerabilidad crítica que conduce a compromisos de seguridad mayores.",
      "C": "Hacer público el bucket expone datos confidenciales al robo indiscriminado en Internet.",
      "D": "Otorgar permisos de Owner viola el principio de menor privilegio y pone en riesgo toda la organización."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-038",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Autorización Binaria (Binary Authorization) en Contenedores",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Garantía de la Cadena de Suministro de Software con Binary Authorization",
    "scenario": "Una empresa de pagos con tarjeta requiere garantizar que únicamente las imágenes de contenedor que hayan sido firmadas digitalmente por la canalización oficial de CI/CD (después de aprobar análisis de código y escaneo de vulnerabilidades) puedan desplegarse en sus clústeres de GKE y Cloud Run de producción, bloqueando cualquier imagen no firmada o modificada manualmente. ¿Qué servicio de seguridad impone esta política?",
    "keywords": [
      "Binary Authorization",
      "Firmas digitales",
      "Cadena de suministro de software",
      "Despliegue seguro en GKE",
      "Atestaciones"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Fonts API",
        "isTrap": true,
        "trapType": "font_mismatch"
      },
      {
        "letter": "B",
        "text": "Binary Authorization",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "D",
        "text": "Compute Engine Preemptible Instances",
        "isTrap": true,
        "trapType": "vm_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Binary Authorization es un control de seguridad en tiempo de despliegue que garantiza que solo las imágenes de contenedores confiables y verificadas mediante atestaciones criptográficas (firmas) puedan desplegarse en entornos de producción en GKE y Cloud Run.",
    "distractors": {
      "A": "Google Fonts sirve tipografías web.",
      "B": "Opción correcta.",
      "C": "Cloud DNS resuelve nombres de dominio.",
      "D": "Preemptible Instances son máquinas virtuales temporales de cómputo con descuento."
    },
    "officialDocUrl": "https://cloud.google.com/binary-authorization/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-039",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Endpoints vs Apigee: Matriz de Decisión",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferenciación entre Cloud Endpoints y Apigee",
    "scenario": "Un arquitecto evalúa opciones para la gestión de APIs: (1) Una API interna ligera entre microservicios que solo necesita validación de claves de API y tokens JWT con latencia mínima de microsegundos, y (2) Una plataforma de APIs expuesta a socios comerciales externos que requiere portal de desarrolladores, análisis de negocio, cuotas de facturación y monetización. ¿Qué solución corresponde a cada caso?",
    "keywords": [
      "Cloud Endpoints",
      "Apigee",
      "Gestión de APIs",
      "Microservicios internos vs Ecosistema externo",
      "Portal de desarrolladores"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Ambas deben implementarse en hojas de cálculo compartidas",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive para ambos casos",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "(1) Cloud Endpoints (para protección y validación ligera interna de APIs); (2) Apigee (para gestión integral de APIs empresariales, monetización y ecosistemas de socios externos)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "(1) Apigee; (2) Cloud Endpoints",
        "isTrap": true,
        "trapType": "inverted_solution"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Endpoints es un sistema de gestión de APIs ligero integrado mediante un proxy Nginx (ESP) ideal para microservicios internos en Google Cloud que requieren autenticación rápida JWT. Apigee es una plataforma empresarial completa para transformar, gobernar, monetizar y exponer APIs a desarrolladores externos y ecosistemas comerciales.",
    "distractors": {
      "A": "Las hojas de cálculo no pueden funcionar como puertas de enlace de APIs en tiempo real.",
      "B": "Cloud Storage Archive almacena archivos pasivos.",
      "C": "Opción correcta.",
      "D": "Cloud Endpoints carece de portal de desarrolladores avanzado, flujos de monetización y análisis empresarial sofisticado que requiere el caso 2."
    },
    "officialDocUrl": "https://cloud.google.com/endpoints/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-040",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Patrón de Despliegue Azul/Verde (Blue-Green) y Despliegue Canario (Canary)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Estrategias de Despliegue Modernas: Blue-Green vs Canary Deployments",
    "scenario": "Una empresa de servicios financieros desea actualizar su aplicación web de pagos sin tiempo de inactividad: quieren dirigir inicialmente solo el 5% del tráfico de usuarios reales a la nueva versión para monitorear errores durante una hora, y si todo funciona correctamente, aumentar gradualmente el tráfico al 100%. ¿Cómo se denomina esta estrategia de despliegue?",
    "keywords": [
      "Despliegue Canario",
      "Canary Deployment",
      "Blue-Green",
      "Cero tiempo de inactividad",
      "Mitigación de riesgos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Despliegue Destructivo 'Big Bang' sin pruebas",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "B",
        "text": "Apagado total de los servidores durante una semana",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Despliegue estático manual en cintas magnéticas",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "D",
        "text": "Despliegue Canario (Canary Deployment)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Un Despliegue Canario (Canary Deployment) introduce una nueva versión de software exponiéndola progresivamente a un subconjunto pequeño de usuarios reales (ej. 5%). Esto permite validar el rendimiento y estabilidad en producción real minimizando el impacto si surge algún defecto antes de desplegar al 100%.",
    "distractors": {
      "A": "El despliegue 'Big Bang' actualiza el 100% de golpe, con altísimo riesgo de fallos catastróficos para el negocio.",
      "B": "Apagar el servicio detiene las ventas de la empresa.",
      "C": "Las cintas magnéticas son medios de almacenamiento de respaldo pasivo offline.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/application-deployment-and-testing-strategies",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-041",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Redes VPC: Emparejamiento de Redes (VPC Network Peering) vs Shared VPC",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferenciación entre Shared VPC y VPC Network Peering",
    "scenario": "Una corporación necesita estructurar sus redes en Google Cloud: (1) Quieren que el equipo central de redes administre una única red troncal compartida con subredes asignadas a múltiples proyectos de diferentes departamentos, y (2) Quieren conectar dos redes VPC independientes pertenecientes a organizaciones distintas con baja latencia interna. ¿Qué soluciones corresponden?",
    "keywords": [
      "Shared VPC",
      "VPC Network Peering",
      "Gobernanza de redes",
      "Host Project",
      "Service Project"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "(1) Shared VPC (VPC Compartida con Proyecto Host y Proyectos de Servicio); (2) VPC Network Peering (Emparejamiento de redes VPC)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "(1) VPC Network Peering; (2) Shared VPC",
        "isTrap": true,
        "trapType": "inverted_networking_solution"
      },
      {
        "letter": "D",
        "text": "Ambos requieren cables de red físicos conectados manualmente entre servidores",
        "isTrap": true,
        "trapType": "onprem_confusion"
      }
    ],
    "correct": "A",
    "explanation": "Shared VPC permite a una organización centralizada gestionar la red en un proyecto Host y delegar la creación de recursos (como VMs en subredes específicas) a proyectos de servicio departamentales. VPC Network Peering conecta dos VPCs distintas de forma bidireccional permitiendo conectividad IP privada con baja latencia sin intermediarios.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud Storage Archive es para almacenamiento frío de archivos.",
      "C": "VPC Peering no crea una jerarquía de administración centralizada de Host y Service Projects como lo hace Shared VPC.",
      "D": "Toda la topología de red en Google Cloud es definida por software (SDN) virtualizada."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/shared-vpc",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-042",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Niveles de Red de Google Cloud: Premium Tier vs Standard Tier",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Optimización de Tráfico Externo con Niveles de Servicio de Red (Network Service Tiers)",
    "scenario": "Google Cloud ofrece dos niveles de servicio de red (Network Service Tiers) para el tráfico saliente hacia Internet: Premium Tier y Standard Tier. ¿Cuál es la diferencia técnica y de rendimiento fundamental?",
    "keywords": [
      "Network Service Tiers",
      "Premium Tier",
      "Standard Tier",
      "Red privada de Google",
      "Rendimiento y costo"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Standard Tier borra el 50% de los paquetes de datos para ahorrar ancho de banda.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Premium Tier transporta el tráfico a través de la red global de fibra privada de alta calidad de Google, ingresando y saliendo en el punto de presencia más cercano al usuario; Standard Tier utiliza la red pública de Internet convencional de otros proveedores a un costo menor.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "No existe ninguna diferencia; ambos son nombres decorativos idénticos.",
        "isTrap": true,
        "trapType": "false_claim"
      },
      {
        "letter": "D",
        "text": "Premium Tier solo funciona los días festivos; Standard Tier funciona los días laborables.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "Premium Tier maximiza el rendimiento y la confiabilidad dirigiendo el tráfico a través de la red privada global de Google de baja latencia con enrutamiento de 'patata fría'. Standard Tier optimiza costos encaminando el tráfico a través de redes de tránsito de Internet públicas convencionales ('patata caliente').",
    "distractors": {
      "A": "Standard Tier es una conexión de red TCP/IP estándar confiable; no elimina paquetes arbitrariamente.",
      "B": "Opción correcta.",
      "C": "Existen diferencias técnicas sustanciales en latencia, acuerdos de SLA y rutas de tránsito de red.",
      "D": "Ambos niveles de red operan continuamente 24/7/365."
    },
    "officialDocUrl": "https://cloud.google.com/network-tiers/docs/overview",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-043",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud DNS: Resolución de Nombres de Dominio Global y Confiable",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Servicio de Resolución de Nombres con 100% de Disponibilidad (Cloud DNS)",
    "scenario": "Una empresa multinacional requiere un servicio de DNS administrado, altamente escalable y seguro con un acuerdo de nivel de servicio (SLA) del 100% de disponibilidad que traduzca solicitudes de nombres de dominio (como www.miempresa.com) a direcciones IP utilizando la red global Anycast de Google. ¿Qué servicio deben utilizar?",
    "keywords": [
      "Cloud DNS",
      "100% SLA",
      "Anycast DNS",
      "Resolución de nombres",
      "DNSSEC"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Trace",
        "isTrap": true,
        "trapType": "observability_mismatch"
      },
      {
        "letter": "B",
        "text": "Un archivo 'hosts' estático copiado en cada computadora del mundo",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Cloud DNS",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Cloud DNS es un servicio de sistema de nombres de dominio (DNS) escalable, global y administrado que ofrece un SLA líder en la industria del 100% de disponibilidad, sirviendo consultas de nombres con baja latencia mediante la red perimetral Anycast de Google.",
    "distractors": {
      "A": "Cloud Trace es una herramienta de observabilidad para medir latencia de llamadas de microservicios.",
      "B": "El archivo hosts local no escala para resolver nombres en la Internet global.",
      "C": "Opción correcta.",
      "D": "Cloud Storage Nearline es para almacenamiento de objetos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/dns/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-044",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Arquitecturas Resilientes: Diseño Multi-Zona y Multi-Región",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diseño de Alta Disponibilidad y Resiliencia Geográfica en Google Cloud",
    "scenario": "Un arquitecto diseña una aplicación de misión crítica que debe sobrevivir a: (1) La falla de un centro de datos individual dentro de una ciudad, y (2) Una catástrofe climática mayor que inhabilite una región geográfica entera. ¿Cómo debe distribuirse la infraestructura?",
    "keywords": [
      "Multi-zona",
      "Multi-región",
      "Alta disponibilidad",
      "Resiliencia geográfica",
      "Tolerancia a desastres"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "No desplegar servidores y esperar que los usuarios no visiten la página",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Colocar todos los servidores en una sola máquina virtual en una sola zona sin copias de seguridad",
        "isTrap": true,
        "trapType": "single_point_of_failure"
      },
      {
        "letter": "C",
        "text": "Apagar los servidores durante la temporada de lluvias para evitar que se mojen",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Desplegar instancias en múltiples zonas (Multi-Zone) dentro de una región para tolerar fallas de centros de datos individuales, y replicar la arquitectura en múltiples regiones (Multi-Region) para sobrevivir a fallas regionales catastróficas.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Las zonas de Google Cloud son dominios de fallo independientes con energía y redes aisladas dentro de una región; las regiones son áreas geográficas independientes separadas por cientos o miles de kilómetros. Una arquitectura multi-zona protege contra fallas locales de hardware, mientras que multi-región garantiza continuidad total ante desastres mayores.",
    "distractors": {
      "A": "Ignorar la operación contradice el propósito de continuidad del negocio.",
      "B": "Concentrar todo en una sola VM en una sola zona crea un punto único de fallo catastrófico.",
      "C": "Los centros de datos de Google cuentan con rigurosos sistemas de climatización, protección física y redundancia de energía.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/disaster-recovery",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D3-045",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Resumen de Modernización: De Servidores Tradicionales a Nube Serverless",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Evolución Integral del Modelo Operativo de Infraestructura hacia Serverless",
    "scenario": "El Director de Operaciones (COO) solicita una explicación de cómo evoluciona la carga operativa del equipo de TI al avanzar desde centros de datos locales tradicionales, pasando por IaaS (Compute Engine) y CaaS (GKE), hasta alcanzar Serverless (Cloud Run). ¿Cuál es la conclusión precisa?",
    "keywords": [
      "Evolución de infraestructura",
      "Carga operativa reducida",
      "Enfoque en valor de negocio",
      "Serverless",
      "Abstracción"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "A mayor nivel de abstracción (avanzando hacia Serverless), Google asume más responsabilidades de gestión de infraestructura (hardware, parches de SO, escalado y alta disponibilidad), permitiendo al equipo de TI enfocarse casi exclusivamente en la lógica de negocio y desarrollo de valor para el cliente.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "La carga operativa aumenta exponencialmente al usar servicios administrados.",
        "isTrap": true,
        "trapType": "false_premise"
      },
      {
        "letter": "C",
        "text": "No existe ninguna diferencia en la administración entre un servidor físico de 1995 y Cloud Run.",
        "isTrap": true,
        "trapType": "false_claim"
      },
      {
        "letter": "D",
        "text": "Serverless obliga al equipo de TI a fabricar sus propios microchips de silicio a mano.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "A",
    "explanation": "La transición hacia modelos serverless y servicios completamente administrados traslada el trabajo pesado no diferenciado (administración de hardware, sistemas operativos, clústeres y aprovisionamiento de capacidad) a Google Cloud, permitiendo a los ingenieros concentrar su tiempo e innovación en el producto y el negocio.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "La carga operativa se reduce drásticamente al eliminar el mantenimiento de servidores y parches.",
      "C": "Cloud Run automatiza el aprovisionamiento, escalado y mantenimiento de infraestructura que en 1995 requería semanas de trabajo manual.",
      "D": "Google gestiona toda la infraestructura física y hardware subyacente."
    },
    "officialDocUrl": "https://cloud.google.com/serverless",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-031",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Gestión de Secretos con Secret Manager vs Variables de Entorno en Texto Plano",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Protección Centralizada de Credenciales con Secret Manager",
    "scenario": "Un desarrollador necesita conectar una aplicación en GKE a una pasarela de pagos con una clave de API confidencial. ¿Por qué es una mejor práctica utilizar Secret Manager en lugar de guardar la clave en texto plano en el repositorio de código o en un ConfigMap de Kubernetes?",
    "keywords": [
      "Secret Manager",
      "Cifrado en reposo",
      "Control de versiones de secretos",
      "Rotación de credenciales",
      "Auditoría IAM"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Guardar contraseñas en texto plano en GitHub es más seguro porque todos los usuarios de Internet pueden vigilarla.",
        "isTrap": true,
        "trapType": "absurd_security_fallacy"
      },
      {
        "letter": "B",
        "text": "Secret Manager cifra los secretos en reposo, controla el acceso mediante permisos granulares de IAM, mantiene un historial de versiones del secreto para rotación y registra cada acceso individual en Cloud Audit Logs.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Secret Manager es un servicio que publica las contraseñas en Twitter de forma automática.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "No existe ninguna diferencia de seguridad.",
        "isTrap": true,
        "trapType": "false_claim"
      }
    ],
    "correct": "B",
    "explanation": "Secret Manager ofrece almacenamiento centralizado, seguro y auditable para datos sensibles. Permite rotar credenciales sin redesplegar código, restringir quién o qué servicio puede leer el secreto mediante IAM y auditar cada lectura en los registros de seguridad.",
    "distractors": {
      "A": "Publicar contraseñas en repositorios públicos expone el sistema a hackeos inmediatos.",
      "B": "Opción correcta.",
      "C": "Secret Manager mantiene absoluta confidencialidad y aislamiento criptográfico.",
      "D": "El almacenamiento en texto plano carece de cifrado, auditoría y control de acceso."
    },
    "officialDocUrl": "https://cloud.google.com/secret-manager/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-032",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Seguridad de la Cadena de Suministro de Software (SLSA Framework)",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Protección Integral de la Cadena de Suministro de Software con el Marco SLSA",
    "scenario": "Una empresa de software bancario implementa el marco SLSA (Supply-chain Levels for Software Artifacts) promovido por Google para asegurar su cadena de suministro digital desde el código fuente hasta la ejecución en producción. ¿Qué combinación de servicios de Google Cloud habilita esta protección de extremo a extremo?",
    "keywords": [
      "SLSA",
      "Cadena de suministro de software",
      "Cloud Build",
      "Artifact Registry",
      "Binary Authorization",
      "Seguridad integral"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Descargar imágenes de contenedores anónimas de sitios web no verificados",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive + Copiar archivos ejecutables en memorias USB sin escanear",
        "isTrap": true,
        "trapType": "insecure_pipeline"
      },
      {
        "letter": "C",
        "text": "Cloud Build (compilación hermética y atestaciones de procedencia) + Artifact Registry (escaneo de vulnerabilidades y almacenamiento seguro) + Binary Authorization (imposición de firmas antes del despliegue en producción).",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud DNS público sin contraseñas",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "El marco SLSA en Google Cloud se implementa integrando Cloud Build para generar código con procedencia verificable, Artifact Registry para auditar y escanear vulnerabilidades en artefactos, y Binary Authorization para bloquear el despliegue de cualquier contenedor que no cuente con las atestaciones requeridas.",
    "distractors": {
      "A": "Utilizar contenedores no verificados expone la infraestructura a puertas traseras (backdoors).",
      "B": "Las memorias USB sin escanear propagan malware y violan la integridad de la cadena de suministro.",
      "C": "Opción correcta.",
      "D": "Cloud DNS es un servicio de nombres de red, no gestiona artefactos de software."
    },
    "officialDocUrl": "https://cloud.google.com/software-supply-chain-security/docs",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-033",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Asset Inventory: Visibilidad Histórica y de Metadatos de Recursos",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Auditoría de Cambios de Infraestructura a lo Largo del Tiempo con Cloud Asset Inventory",
    "scenario": "Un equipo forense de seguridad necesita auditar qué máquinas virtuales, políticas de IAM y reglas de firewall existían en la organización exactamente el día 15 del mes pasado a las 10:00 AM, y qué cambios exactos se han producido en los recursos en los últimos 30 días. ¿Qué servicio de metadatos históricos proporciona esta capacidad de consulta temporal?",
    "keywords": [
      "Cloud Asset Inventory",
      "Inventario de activos",
      "Auditoría histórica de metadatos",
      "Búsqueda en tiempo real"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine Spot Instances",
        "isTrap": true,
        "trapType": "compute_mismatch"
      },
      {
        "letter": "B",
        "text": "Revisar notas manuscritas en post-its de la oficina",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Google Maps API",
        "isTrap": true,
        "trapType": "maps_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Asset Inventory",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Asset Inventory es un servicio de administración de metadatos que proporciona una vista de inventario en tiempo real e histórico de todos los recursos y políticas de IAM de Google Cloud a lo largo del tiempo, permitiendo exportar instantáneas y consultar estados pasados para cumplimiento normativo.",
    "distractors": {
      "A": "Spot Instances son máquinas virtuales temporales de bajo costo.",
      "B": "Las notas físicas no proporcionan trazabilidad verificable del estado de la infraestructura en la nube.",
      "C": "Google Maps proporciona cartografía y geolocalización.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/asset-inventory/docs/overview",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-034",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cumplimiento Regulatorio Internacional (ISO, SOC, HIPAA, FedRAMP, PCI-DSS)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Certificaciones y Reportes de Cumplimiento de Terceros de Google Cloud (Compliance Reports Manager)",
    "scenario": "El equipo legal y de cumplimiento de un banco requiere acceder a los reportes de auditoría independientes SOC 1, SOC 2, ISO/IEC 27001, PCI-DSS y acuerdos HIPAA BAA para certificar que la infraestructura de Google Cloud cumple con las normativas financieras de los reguladores. ¿Dónde pueden los clientes descargar estos reportes oficiales de auditoría?",
    "keywords": [
      "Compliance Reports Manager",
      "SOC 1 / SOC 2",
      "ISO 27001",
      "HIPAA",
      "PCI-DSS",
      "Cumplimiento normativo"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compliance Reports Manager en el Centro de Recursos de Seguridad y Cumplimiento de Google Cloud",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Buscar en foros no oficiales de Internet",
        "isTrap": true,
        "trapType": "untrusted_source"
      },
      {
        "letter": "C",
        "text": "Google Cloud no cuenta con ninguna certificación de seguridad internacional",
        "isTrap": true,
        "trapType": "false_claim"
      },
      {
        "letter": "D",
        "text": "Enviar una carta física por barco a la sede central de las Naciones Unidas",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud ofrece a sus clientes acceso directo y bajo demanda a sus informes de auditoría independientes (SOC, ISO, PCI, FedRAMP, etc.) y certificados de cumplimiento a través del portal oficial Compliance Reports Manager.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Los foros no oficiales no proporcionan documentación formal certificada para auditores legales.",
      "C": "Google Cloud posee decenas de certificaciones globales y locales de máxima rigurosidad.",
      "D": "Los reportes se descargan de forma digital e inmediata desde la consola oficial."
    },
    "officialDocUrl": "https://cloud.google.com/security/compliance/compliance-reports-manager",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-035",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Access Transparency y Access Approval: Control sobre el Personal de Google",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Transparencia y Aprobación Explicita de Acceso de Ingenieros de Soporte de Google",
    "scenario": "Un banco altamente regulado exige que: (1) Si un ingeniero de soporte técnico de Google necesita acceder a sus datos para solucionar un ticket de soporte, el banco reciba un registro de auditoría en tiempo real con la justificación del acceso (Access Transparency), y (2) El banco deba aprobar explícitamente la solicitud antes de que el ingeniero de Google pueda acceder (Access Approval). ¿Qué servicios proporcionan este control soberano?",
    "keywords": [
      "Access Transparency",
      "Access Approval",
      "Control sobre personal de Google",
      "Auditoría de soporte",
      "Soberanía de datos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Desactivar toda la seguridad de la cuenta",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "B",
        "text": "Access Transparency (visibilidad en logs del acceso de personal de Google) y Access Approval (requerimiento de aprobación explícita del cliente antes del acceso).",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Prohibir totalmente la apertura de tickets de soporte técnico",
        "isTrap": true,
        "trapType": "restrictive_antipattern"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Access Transparency proporciona registros casi en tiempo real cuando el personal de Google accede a los datos del cliente durante tareas de soporte o mantenimiento; y Access Approval permite a las empresas exigir una aprobación manual explícita antes de conceder cualquier acceso al personal de Google.",
    "distractors": {
      "A": "Desactivar la seguridad destruye la postura de protección de la empresa.",
      "B": "Opción correcta.",
      "C": "Cerrar los canales de soporte impide resolver incidentes técnicos complejos de la plataforma.",
      "D": "Cloud Storage Nearline almacena objetos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/access-transparency",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-036",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Logging: Retención y Almacenamiento en Buckets de Logs",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Gestión de Retención de Registros en Buckets de Logs de Cloud Logging",
    "scenario": "Una empresa requiere configurar periodos de retención personalizados para diferentes tipos de registros en Cloud Logging: los registros de actividad de administrador deben conservarse por 400 días de forma predeterminada, mientras que los registros de depuración de aplicaciones solo deben retenerse durante 30 días para no incurrir en sobrecostos de almacenamiento. ¿Dónde se configuran estos periodos de retención?",
    "keywords": [
      "Buckets de logs",
      "Log Buckets",
      "Retención de logs",
      "Admin Activity 400 días",
      "Cloud Logging"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "En hojas de cálculo de Excel enviadas por correo electrónico",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "B",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "C",
        "text": "En los Buckets de Registros (Log Buckets como `_Default` y `_Required` o buckets personalizados) de Cloud Logging, ajustando el periodo de retención de días según las políticas de la empresa.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Logging no permite almacenar registros por más de 5 minutos.",
        "isTrap": true,
        "trapType": "false_limitation"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Logging almacena los registros en Log Buckets (`_Required`, `_Default` o personalizados). Los administradores pueden definir reglas de retención personalizadas (desde 1 día hasta varios años) para cumplir con requisitos de gobernanza y optimizar costos de almacenamiento.",
    "distractors": {
      "A": "Las hojas de cálculo locales no forman parte de la arquitectura de retención de logs en la nube.",
      "B": "Cloud DNS gestiona nombres de dominio.",
      "C": "Opción correcta.",
      "D": "Cloud Logging almacena registros de forma predeterminada por 30 días en `_Default` y 400 días en `_Required` (Admin Activity), con soporte de retenciones personalizadas prolongadas."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/buckets",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-037",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Monitoreo de Infraestructura Híbrida y Multinube con Ops Agent",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Recopilación de Métricas del Sistema y Registros en VMs con Ops Agent",
    "scenario": "Un equipo de operaciones administra máquinas virtuales en Compute Engine y servidores locales. Desean recopilar métricas detalladas a nivel de sistema operativo (como utilización exacta de memoria RAM, espacio en disco particionado y procesos activos) y registros del sistema (syslog, logs de Apache/Nginx). ¿Qué agente unificado deben instalar en las máquinas virtuales?",
    "keywords": [
      "Ops Agent",
      "Google Cloud Ops Agent",
      "Métricas de memoria RAM y disco",
      "Logs del sistema operativo",
      "Compute Engine"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Un archivo de texto estático vacío",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "D",
        "text": "Google Cloud Ops Agent (el agente unificado para métricas de SO y recopilación de logs)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "El Ops Agent de Google Cloud es el agente principal para recopilar telemetría de máquinas virtuales en Compute Engine y entornos híbridos, combinando la captura de métricas del sistema operativo (RAM, disco, procesos) y la transmisión continua de registros hacia Cloud Logging y Cloud Monitoring.",
    "distractors": {
      "A": "Cloud Storage Nearline es almacenamiento pasivo de objetos.",
      "B": "Un archivo vacío no recopila métricas ni transmite datos.",
      "C": "Cloud DNS resuelve nombres de dominio.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/stackdriver/docs/solutions/ops-agent",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-038",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Condiciones de IAM (IAM Conditions): Control de Acceso Basado en Contexto y Tiempo",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Restricción Temporal y Contextual de Permisos con IAM Conditions",
    "scenario": "Un ingeniero de guardia necesita permisos temporales de administración para solucionar un problema en producción. La política de seguridad exige que los permisos se otorguen únicamente durante su turno (de 08:00 a 16:00 horas) y que solo pueda acceder si su solicitud proviene de una dirección IP corporativa confiable. ¿Qué funcionalidad de IAM permite aplicar estas restricciones?",
    "keywords": [
      "IAM Conditions",
      "Condiciones de IAM",
      "Acceso temporal por horario",
      "Restricción por IP",
      "Menor privilegio"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Condiciones de IAM (IAM Conditions), que permiten definir expresiones condicionales basadas en atributos como fecha/hora, recurso de destino y atributos de red.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Eliminar el proyecto de producción",
        "isTrap": true,
        "trapType": "catastrophic_antipattern"
      },
      {
        "letter": "C",
        "text": "Otorgarle acceso de Owner permanente para siempre y esperar que no se conecte de noche",
        "isTrap": true,
        "trapType": "overprivileged_risk"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "IAM Conditions permite definir y aplicar políticas de control de acceso condicionales y temporales basadas en atributos como horarios específicos, fechas de expiración, nombres de recursos o características de la solicitud, reforzando el principio de menor privilegio.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Eliminar el proyecto destruye los servicios de la empresa.",
      "C": "Otorgar acceso permanente Owner viola el principio de menor privilegio e incrementa el riesgo de incidentes.",
      "D": "Cloud Storage Coldline es para copias de seguridad de datos fríos."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/conditions-overview",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-039",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Privilegios Mínimos para Service Accounts y Prevención de Suplantación no Autorizada",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Seguridad y Control de Suplantación de Service Accounts (Service Account Impersonation)",
    "scenario": "Un desarrollador solicita permisos para realizar tareas administrativas especiales. En lugar de crear y entregarle una clave JSON permanente de una Service Account con altos privilegios, el equipo de seguridad le permite suplantar (impersonate) la cuenta de servicio de forma temporal durante su sesión interactiva utilizando el rol `roles/iam.serviceAccountTokenCreator`. ¿Cuál es el beneficio de seguridad de este enfoque?",
    "keywords": [
      "Service Account Impersonation",
      "Suplantación de identidad",
      "Sin llaves JSON estáticas",
      "Tokens temporales de corta vida",
      "Auditoría"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Desactiva todos los registros de auditoría para no dejar rastros.",
        "isTrap": true,
        "trapType": "antiethical_antipattern"
      },
      {
        "letter": "B",
        "text": "Genera tokens de acceso temporales de corta duración (ej. 1 hora), elimina el riesgo de robo de archivos de claves estáticas JSON y registra en Cloud Audit Logs exactamente qué usuario humano suplantó a la cuenta de servicio.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "D",
        "text": "Permite que cualquier persona en Internet controle la cuenta de servicio sin autenticación.",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      }
    ],
    "correct": "B",
    "explanation": "La suplantación de cuentas de servicio (Service Account Impersonation) permite a usuarios autenticados generar credenciales efímeras de corta vida para actuar en nombre de una Service Account, eliminando el riesgo de filtración de claves JSON privadas y manteniendo una trazabilidad forense completa de la identidad humana responsable.",
    "distractors": {
      "A": "La suplantación genera registros detallados de auditoría en Cloud Audit Logs.",
      "B": "Opción correcta.",
      "C": "Cloud DNS gestiona nombres de dominio.",
      "D": "La suplantación requiere autenticación estricta y asignación explícita del rol de creador de tokens."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/impersonating-service-accounts",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-040",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Uptime Checks y Pruebas de Disponibilidad en Cloud Monitoring",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Verificación Externa de Disponibilidad Global con Uptime Checks",
    "scenario": "Un equipo web necesita verificar que su portal público de clientes responde con código HTTP 200 desde múltiples ubicaciones geográficas alrededor del mundo (Europa, Asia, América) cada 1 minuto, alertando si el sitio web deja de ser accesible desde alguna región. ¿Qué funcionalidad de Cloud Monitoring proporciona estas pruebas?",
    "keywords": [
      "Uptime Checks",
      "Verificaciones de disponibilidad",
      "Pruebas sintéticas globales",
      "Cloud Monitoring",
      "Alertas de caída"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Pedir a amigos que vivan en el extranjero que visiten la página una vez al año",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Comprobaciones de tiempo de actividad (Uptime Checks en Cloud Monitoring)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Desactivar el sitio web para no tener que monitorearlo",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "Los Uptime Checks en Cloud Monitoring envían solicitudes periódicas desde servidores distribuidos globalmente hacia la URL pública de la aplicación para medir la disponibilidad, latencia y códigos de respuesta, disparando alertas de inmediato si el sitio se vuelve inalcanzable.",
    "distractors": {
      "A": "Cloud Storage Nearline almacena archivos pasivos.",
      "B": "Las verificaciones informales manuales no ofrecen monitoreo automatizado continuo cada minuto.",
      "C": "Opción correcta.",
      "D": "Apagar el sitio destruye la presencia comercial de la empresa."
    },
    "officialDocUrl": "https://cloud.google.com/monitoring/uptime-checks",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-041",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Reglas de Firewall de VPC: Control de Tráfico Ingress y Egress",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Filtrado de Red con Reglas de Firewall de VPC (Stateful Firewall)",
    "scenario": "Un administrador de red en Google Cloud configura una regla de firewall de VPC para permitir el tráfico web entrante en el puerto TCP 443 (HTTPS) hacia sus servidores web. ¿Cómo maneja el firewall de VPC de Google Cloud las respuestas de retorno de tráfico hacia los clientes?",
    "keywords": [
      "Reglas de firewall de VPC",
      "Stateful",
      "Con estado",
      "Ingress y Egress",
      "Puerto 443 HTTPS"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "El firewall solo funciona si se conecta un dispositivo físico por cable a la computadora del usuario.",
        "isTrap": true,
        "trapType": "onprem_confusion"
      },
      {
        "letter": "B",
        "text": "El firewall no tiene estado y bloquea todas las respuestas automáticamente.",
        "isTrap": true,
        "trapType": "stateless_misconception"
      },
      {
        "letter": "C",
        "text": "Google Cloud no tiene firewalls y todo el tráfico de red está abierto sin control.",
        "isTrap": true,
        "trapType": "false_claim"
      },
      {
        "letter": "D",
        "text": "El firewall de VPC de Google Cloud tiene estado (stateful): si una conexión entrante (Ingress) es permitida, el tráfico de respuesta saliente correspondiente se permite automáticamente sin requerir una regla de Egress explícita.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Las reglas de firewall de VPC de Google Cloud son 'con estado' (stateful). Cuando una conexión es permitida por una regla de Ingress o Egress, todos los paquetes de respuesta bidireccionales asociados a esa sesión TCP/UDP se autorizan de forma automática.",
    "distractors": {
      "A": "El firewall de Google Cloud es un servicio virtualizado a nivel de hipervisor, no un aparato físico local.",
      "B": "Los firewalls sin estado requerirían reglas simétricas manuales en ambas direcciones; el de GCP es stateful.",
      "C": "Google Cloud implementa firewalls distribuidos definidos por software de alto rendimiento por defecto.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/firewall/docs/firewalls",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-042",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Arquitectura de Defensa en Profundidad (Defense in Depth) en Google Cloud",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Modelo de Seguridad Multicapa (Defensa en Profundidad)",
    "scenario": "Un consultor de seguridad explica el principio de 'Defensa en Profundidad' (Defense in Depth) aplicado en la infraestructura de Google Cloud. ¿Qué significa este enfoque?",
    "keywords": [
      "Defensa en profundidad",
      "Defense in depth",
      "Seguridad multicapa",
      "Sin punto único de falla de seguridad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Implementar múltiples capas independientes y redundantes de controles de seguridad (seguridad física, hardware con chip Titan, cifrado por defecto, aislamiento de red VPC, IAM, WAF y auditoría) para que si una capa falla, las demás continúen protegiendo los activos.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cavar una trinchera física con agua alrededor del centro de datos.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Eliminar todos los controles de software para reducir la complejidad.",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "D",
        "text": "Confiar exclusivamente en una sola contraseña simple de 4 dígitos para toda la empresa.",
        "isTrap": true,
        "trapType": "single_point_of_failure"
      }
    ],
    "correct": "A",
    "explanation": "La defensa en profundidad en Google Cloud asegura cada nivel del sistema: seguridad física de centros de datos, chips Titan en servidores propietarios, arranque seguro, cifrado automático en reposo y en tránsito, aislamiento de red, IAM granular y monitoreo continuo de amenazas.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "La seguridad física de Google utiliza controles biométricos, guardias y vigilancia por capas, no métodos medievales.",
      "C": "Eliminar controles deja los sistemas completamente desprotegidos.",
      "D": "Depender de una sola contraseña es el antipatrón más vulnerable que la defensa en profundidad busca evitar."
    },
    "officialDocUrl": "https://cloud.google.com/security/overview/whitepaper",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-043",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Privacidad de Datos del Cliente: Cláusulas Contractuales y Auditorías Externas",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Garantías Contractuales de Privacidad y No Uso Publicitario de Datos en Google Cloud",
    "scenario": "Un cliente empresarial pregunta si Google analiza los datos que almacenan en Google Cloud para vender publicidad dirigida o compartirlos con anunciantes. ¿Cuál es la postura contractual estricta de Google Cloud?",
    "keywords": [
      "Privacidad de datos",
      "No publicidad",
      "Tus datos son tuyos",
      "Google Cloud vs Servicios al consumidor"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google vende todos los datos de los clientes empresariales en subastas públicas en línea.",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "B",
        "text": "Google Cloud NO utiliza los datos de los clientes empresariales para fines publicitarios, no vende datos de clientes a terceros y el cliente mantiene la propiedad total y exclusiva de toda su información.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Google Cloud muestra anuncios comerciales emergentes dentro de las máquinas virtuales de producción.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Los clientes ceden todos los derechos de propiedad intelectual de sus datos al crear un proyecto.",
        "isTrap": true,
        "trapType": "false_premise"
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud mantiene un estricto compromiso de privacidad: los clientes son los únicos dueños de sus datos. Google procesa los datos únicamente de acuerdo con las instrucciones contractuales del cliente y nunca los utiliza para fines publicitarios ni los comercializa a terceros.",
    "distractors": {
      "A": "Google Cloud mantiene acuerdos de confidencialidad y privacidad certificados por auditores independientes (ISO 27018).",
      "B": "Opción correcta.",
      "C": "Google Cloud es una plataforma empresarial sin anuncios emergentes ni publicidad.",
      "D": "El cliente conserva el 100% de la propiedad intelectual de sus datos y aplicaciones."
    },
    "officialDocUrl": "https://cloud.google.com/security/privacy",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-044",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Titan Security Chip: Raíz de Confianza de Hardware en Servidores de Google",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Raíz de Confianza en Hardware con el Chip de Seguridad Titan de Google",
    "scenario": "Google diseña e instala chips de microcontroladores propietarios llamados 'Titan' en las placas base de todos sus servidores y tarjetas de red en sus centros de datos. ¿Cuál es el propósito de seguridad del chip Titan?",
    "keywords": [
      "Titan Security Chip",
      "Raíz de confianza de hardware",
      "Hardware Root of Trust",
      "Integridad de firmware",
      "Anti-tampering"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Bloquear el acceso a Internet a todos los clientes de Google Cloud.",
        "isTrap": true,
        "trapType": "counterproductive"
      },
      {
        "letter": "B",
        "text": "Minar criptomonedas para Google cuando los servidores están inactivos.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Establecer una raíz de confianza en hardware (Hardware Root of Trust) que verifica criptográficamente la integridad del firmware y del sistema de arranque del servidor físico, evitando la ejecución de software no autorizado o modificado maliciosamente.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Aumentar el brillo de las luces LED de la sala de servidores.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "El chip Titan de Google es una raíz de confianza de hardware diseñada a medida que valida la firma criptográfica del firmware de arranque en cada inicio del servidor, garantizando que ninguna máquina ejecute código de bajo nivel comprometido o manipulado físicamente.",
    "distractors": {
      "A": "Titan protege la integridad de los servidores que conectan y sirven a los clientes en todo el mundo.",
      "B": "El chip Titan es exclusivamente un procesador criptográfico de seguridad de infraestructura.",
      "C": "Opción correcta.",
      "D": "No tiene funciones de iluminación decorativa."
    },
    "officialDocUrl": "https://cloud.google.com/blog/products/gcp/titan-in-depth-security-in-plaintext",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D4-045",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Resumen de Seguridad y Operaciones: Confianza y Excelencia Operativa",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Síntesis de Gobernanza, Seguridad y Operaciones en Google Cloud",
    "scenario": "Un panel de auditores internacionales evalúa la madurez de seguridad y operaciones de una empresa que opera en Google Cloud. ¿Qué combinación de prácticas operativas y de seguridad demuestra la máxima excelencia en la nube?",
    "keywords": [
      "Excelencia operativa",
      "Zero Trust",
      "SRE",
      "FinOps",
      "Gobernanza centralizada",
      "Menor privilegio"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Dejar que cada empleado use tarjetas de crédito personales sin ninguna supervisión corporativa.",
        "isTrap": true,
        "trapType": "shadow_it_antipattern"
      },
      {
        "letter": "B",
        "text": "Apagar todas las computadoras de la empresa de forma permanente.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Asignar contraseñas compartidas simples de 3 caracteres y desactivar todas las alertas de costos y monitoreo.",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "D",
        "text": "Gobernanza centralizada con jerarquía de recursos y Organization Policies, control de accesos IAM basado en el principio de menor privilegio con grupos y MFA, arquitectura Zero Trust con BeyondCorp, cifrado integral por defecto, observabilidad continua con Cloud Operations y cultura SRE con métricas SLI/SLO.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "La excelencia operativa y de seguridad en Google Cloud integra una sólida gobernanza de identidades (IAM y Zero Trust), guardarraíles de políticas de organización, cifrado integral, monitoreo y observabilidad proactiva con la suite de Cloud Operations y prácticas de Site Reliability Engineering (SRE).",
    "distractors": {
      "A": "El Shadow IT descontrolado genera riesgos normativos, duplicidad de gastos y falta de auditoría.",
      "B": "Apagar los sistemas impide que la empresa opere.",
      "C": "Las contraseñas débiles y la falta de monitoreo destruyen la seguridad y la visibilidad de la empresa.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/framework",
    "blockId": "BLOCK-3"
  },
  {
    "id": "CDL-D1-016",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Sostenibilidad y Nube Limpia (Carbon-Free Energy)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Sostenibilidad Ambiental y Reducción de la Huella de Carbono",
    "scenario": "Una empresa multinacional tiene metas corporativas de sostenibilidad de cero emisiones netas de carbono. Al evaluar proveedores de nube, el Director de Sostenibilidad solicita información sobre el impacto ambiental de migrar sus cargas a Google Cloud. ¿Qué ventaja ofrece Google Cloud en este ámbito?",
    "keywords": [
      "Sostenibilidad",
      "Huella de carbono",
      "Energía libre de carbono",
      "Carbon-Free Energy",
      "Data centers eficientes"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google opera centros de datos altamente eficientes con un PUE líder en la industria y ofrece herramientas como Carbon Footprint para medir y reducir las emisiones de carbono asociadas al uso de la nube.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Google Cloud utiliza únicamente generadores diésel tradicionales en todos sus centros de datos para garantizar la disponibilidad.",
        "isTrap": true,
        "trapType": "opposite_fact"
      },
      {
        "letter": "C",
        "text": "Google transfiere las emisiones contaminantes a los clientes para que ellos asuman la responsabilidad legal.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "La computación en la nube incrementa inevitablemente la huella de carbono en comparación con los centros de datos locales pequeños.",
        "isTrap": true,
        "trapType": "false_premise"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud es líder mundial en sostenibilidad, operando con energía 100% renovable coincidente y con la meta de funcionar con energía libre de carbono (CFE) 24/7 para 2030, además de proporcionar la herramienta Google Cloud Carbon Footprint a sus clientes.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Google prioriza energías limpias (solar, eólica) y minimiza el uso de combustibles fósiles.",
      "C": "Google no transfiere responsabilidades contaminantes; ayuda a sus clientes a reportar y reducir su huella ESG.",
      "D": "Los centros de datos de hiperescala de Google son significativamente más eficientes energéticamente que los servidores locales corporativos."
    },
    "officialDocUrl": "https://cloud.google.com/sustainability",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D1-017",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Transición de Entrega por Lotes a Entrega Continua (CI/CD)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Evolución de Lanzamientos Monolíticos Semestrales a Despliegues Frecuentes",
    "scenario": "Una empresa de software bancario realizaba despliegues de software cada seis meses en fines de semana, lo que generaba fallos masivos e interrupciones prolongadas. ¿Qué beneficio central aporta la adopción de prácticas modernas de integración y entrega continua (CI/CD) en la nube?",
    "keywords": [
      "CI/CD",
      "Entrega continua",
      "Despliegues frecuentes",
      "Riesgo reducido",
      "Iteración rápida"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Elimina la necesidad de utilizar control de versiones como Git.",
        "isTrap": true,
        "trapType": "counterproductive"
      },
      {
        "letter": "B",
        "text": "Garantiza que el software nunca necesite actualizaciones ni parches una vez desplegado en la nube.",
        "isTrap": true,
        "trapType": "unrealistic_promise"
      },
      {
        "letter": "C",
        "text": "Obliga a que todos los despliegues se realicen exclusivamente a la medianoche con un equipo de 50 personas conectadas.",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "D",
        "text": "Permite realizar cambios pequeños, continuos y automatizados en producción, reduciendo el riesgo de fallos mayores y acelerando la resolución de defectos.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "La entrega continua (CI/CD) fragmenta las actualizaciones en cambios pequeños y frecuentes verificados mediante pruebas automáticas. Esto minimiza el radio de impacto de cualquier error y permite iterar con rapidez y alta confiabilidad.",
    "distractors": {
      "A": "El control de versiones es el pilar fundamental sobre el que se construye cualquier canalización moderna de CI/CD.",
      "B": "El software en producción siempre requiere mantenimiento continuo, parches de seguridad y mejoras.",
      "C": "Los despliegues automatizados y sin tiempo de inactividad (canary / blue-green) eliminan la necesidad de vigilias nocturnas traumáticas.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/devops",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D1-018",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Alineación de KPIs de Negocio con Métricas Cloud",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Conexión de Métricas Técnicas de Nube con Indicadores de Negocio (KPIs)",
    "scenario": "Una empresa de comercio electrónico mide la salud de su TI a través del tiempo de actividad de los servidores (uptime 99.9%). Sin embargo, la dirección quiere vincular estas métricas con el impacto real en el negocio, como la tasa de conversión y la tasa de carritos abandonados. ¿Cuál es el enfoque recomendado por Google Cloud?",
    "keywords": [
      "KPIs de negocio",
      "SLI/SLO orientados al usuario",
      "Tasa de conversión",
      "Valor de negocio",
      "Observabilidad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Definir Objetivos de Nivel de Servicio (SLOs) e Indicadores de Nivel de Servicio (SLIs) centrados en la experiencia del usuario (como latencia de checkout y éxito de transacciones) directamente correlacionados con los KPIs de ingresos.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Medir el éxito del proyecto únicamente por el número total de correos electrónicos enviados entre departamentos.",
        "isTrap": true,
        "trapType": "irrelevant_metric"
      },
      {
        "letter": "C",
        "text": "Desactivar la observabilidad en producción para ahorrar costos de almacenamiento de registros.",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "D",
        "text": "Ignorar las métricas de negocio y enfocarse exclusivamente en el uso de CPU de las máquinas virtuales.",
        "isTrap": true,
        "trapType": "narrow_technical_focus"
      }
    ],
    "correct": "A",
    "explanation": "Alinear la ingeniería con el negocio requiere métricas que reflejen directamente la satisfacción y comportamiento del usuario final. Diseñar SLIs/SLOs alrededor de transacciones críticas permite entender cómo el rendimiento del sistema impacta las ventas y los objetivos comerciales.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "El volumen de correos es una métrica de vanidad que no refleja la calidad del servicio ni el valor comercial.",
      "C": "Desactivar la observabilidad deja a la empresa a ciegas ante incidentes que dañan los ingresos.",
      "D": "Un servidor puede tener 10% de CPU pero estar arrojando errores 500 a los clientes que intentan pagar; las métricas de infraestructura aisladas son insuficientes."
    },
    "officialDocUrl": "https://cloud.google.com/blog/products/devops-sre/sre-fundamentals-slis-slas-and-slos",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D1-019",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Gestión del Cambio Organizacional en la Nube",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Superación de la Resistencia Cultural durante la Adopción de Nube",
    "scenario": "Durante la migración a Google Cloud, varios equipos de operaciones tradicionales temen perder relevancia y muestran resistencia a adoptar herramientas automatizadas de autoservicio. ¿Cuál es la estrategia de gestión del cambio recomendada para facilitar esta transición?",
    "keywords": [
      "Gestión del cambio",
      "Resistencia cultural",
      "Re-skilling",
      "Capacitación continua",
      "CCoE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Reemplazar inmediatamente a todo el personal existente sin ofrecerles opciones de aprendizaje.",
        "isTrap": true,
        "trapType": "hostile_antipattern"
      },
      {
        "letter": "B",
        "text": "Implementar un plan estructurado de capacitación y re-especialización (re-skilling), comunicar los beneficios estratégicos y establecer un Centro de Excelencia en la Nube (CCoE) como guía colaborativa.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cancelar el proyecto de transformación digital para mantener la comodidad de los equipos tradicionales.",
        "isTrap": true,
        "trapType": "defeatist_antipattern"
      },
      {
        "letter": "D",
        "text": "Ocultar el uso de la nube a los empleados y fingir que continúan trabajando en servidores físicos locales.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "La gestión exitosa del cambio organizacional requiere invertir en las personas a través de programas de desarrollo de habilidades (re-skilling), comunicación transparente y la creación de un CCoE que empodere a los equipos para adoptar nuevas responsabilidades de mayor valor.",
    "distractors": {
      "A": "El despido masivo destruye el conocimiento institucional del negocio y arruina la moral de la organización.",
      "B": "Opción correcta.",
      "C": "Detener la transformación condena a la empresa a perder competitividad frente a rivales ágiles.",
      "D": "El engaño y la falta de transparencia impiden cualquier adopción tecnológica genuina."
    },
    "officialDocUrl": "https://cloud.google.com/adoption-framework",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D1-020",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Economía de APIs y Creación de Ecosistemas Digitales",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Monetización de Activos Digitales mediante la Economía de APIs",
    "scenario": "Un banco tradicional posee una valiosa base de datos de historial crediticio y busca crear nuevas fuentes de ingresos permitiendo a empresas Fintech consultar calificaciones de crédito en tiempo real de forma segura. ¿Qué modelo y tecnología habilitan esta oportunidad de negocio?",
    "keywords": [
      "Economía de APIs",
      "Ecosistemas digitales",
      "Monetización de APIs",
      "Apigee",
      "Integración segura"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cobrar a los clientes por imprimir sus estados de cuenta en papel en ventanillas bancarias.",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "B",
        "text": "Enviar archivos de texto plano con los datos de clientes por correo electrónico a cualquier empresa que lo solicite.",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "C",
        "text": "Adoptar una estrategia de Economía de APIs utilizando una plataforma de gestión de APIs (como Apigee) para empaquetar, asegurar y monetizar servicios de datos hacia socios externos.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Permitir a las Fintech conectarse directamente como administradores 'root' a la base de datos de producción.",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      }
    ],
    "correct": "C",
    "explanation": "La economía de APIs permite transformar los activos de datos y lógica de negocio existentes en productos digitales consumibles por terceros. Mediante plataformas como Apigee, las organizaciones gestionan la seguridad, cuotas, analítica y monetización de sus APIs.",
    "distractors": {
      "A": "Cobrar por papel es un modelo obsoleto y contrario a la transformación digital.",
      "B": "Enviar datos en texto plano por correo viola todas las leyes de protección de datos personales y bancarias.",
      "C": "Opción correcta.",
      "D": "Otorgar acceso root directo a terceros representa una vulnerabilidad de seguridad inaceptable."
    },
    "officialDocUrl": "https://cloud.google.com/apigee",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-046",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Storage Transfer Service para Transferencia de Datos en Línea",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Transferencia Automatizada de Datos entre Proveedores de Nube con Storage Transfer Service",
    "scenario": "Una empresa necesita migrar 80 Terabytes de imágenes y videos alojados en un bucket de Amazon S3 hacia Google Cloud Storage de forma recurrente y automática todas las noches a través de la red pública. ¿Qué servicio administrado sin servidor realiza esta transferencia de forma nativa?",
    "keywords": [
      "Storage Transfer Service",
      "Amazon S3 a Cloud Storage",
      "Transferencia en línea",
      "Programación recurrente"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Escribir un script en Python en una VM individual y descargarlo manualmente por SSH",
        "isTrap": true,
        "trapType": "manual_scripting_overhead"
      },
      {
        "letter": "B",
        "text": "Cloud Interconnect Dedicated",
        "isTrap": true,
        "trapType": "hardware_telecom_mismatch"
      },
      {
        "letter": "C",
        "text": "Transfer Appliance físico",
        "isTrap": true,
        "trapType": "hardware_appliance_mismatch"
      },
      {
        "letter": "D",
        "text": "Storage Transfer Service",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Storage Transfer Service es un servicio completamente administrado que permite transferir datos de forma rápida, segura y a gran escala desde otros proveedores de nube (como AWS S3 o Azure Blob), fuentes HTTP o centros de datos locales hacia Cloud Storage sin necesidad de configurar ni mantener servidores.",
    "distractors": {
      "A": "Los scripts manuales en VMs carecen de reintentos automáticos distribuidos, verificación de integridad MD5 y gestión de escala.",
      "B": "Cloud Interconnect es un enlace físico de telecomunicaciones, no un software administrado de sincronización de datos.",
      "C": "Transfer Appliance es un dispositivo de almacenamiento físico que se envía por mensajería, diseñado para transferencias de cientos de terabytes o petabytes cuando el ancho de banda de red es insuficiente.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/storage-transfer/docs",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-047",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Transfer Appliance para Migraciones Masivas Fuera de Línea (Offline)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Migración Masiva de Petabytes de Datos con Conectividad Limitada (Transfer Appliance)",
    "scenario": "Un centro de investigación geológica tiene 500 Terabytes de datos sísmicos en una ubicación remota con una conexión a Internet de solo 10 Mbps. Subir los datos por la red tomaría más de 12 años. ¿Qué solución de Google Cloud permite transferir estos datos a la nube en cuestión de días?",
    "keywords": [
      "Transfer Appliance",
      "500 TB",
      "Conectividad limitada",
      "Migración física offline",
      "Envío por mensajería"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Transfer Appliance (un dispositivo de hardware seguro y de alta capacidad que Google envía al cliente para cargar los datos localmente y luego enviarlo físicamente a un centro de datos de Google).",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Esperar los 12 años a que termine la carga por la conexión de 10 Mbps.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Comprimir los 500 TB en un solo archivo ZIP enviado como adjunto por correo electrónico.",
        "isTrap": true,
        "trapType": "unrealistic_promise"
      },
      {
        "letter": "D",
        "text": "Imprimir todos los datos sísmicos en hojas de papel y escanearlos con Google Lens.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "A",
    "explanation": "Transfer Appliance es un servidor de almacenamiento resistente y cifrado de alta capacidad que Google envía físicamente a las instalaciones del cliente para copiar petabytes de datos a través de la red local y transferirlos rápidamente a Cloud Storage.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Esperar más de una década es inaceptable para los objetivos de investigación y negocio.",
      "C": "Los servidores de correo electrónico rechazan archivos adjuntos mayores a unos pocos megabytes; no pueden enviar terabytes.",
      "D": "El escaneo en papel es impracticable para volúmenes masivos de datos digitales."
    },
    "officialDocUrl": "https://cloud.google.com/transfer-appliance/docs",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-048",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Storage: URLs Firmadas (Signed URLs) para Carga y Descarga Segura",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Permitir Carga Directa y Temporal a Cloud Storage con URLs Firmadas (Signed URLs)",
    "scenario": "Una aplicación web de compras en línea permite a los usuarios subir una foto de su identificación personal durante el registro. La empresa no desea que los usuarios tengan cuentas de Google ni permisos de IAM directos sobre el bucket de Cloud Storage, pero requiere que suban su archivo directamente a una ruta específica con un enlace temporal que expire en 15 minutos. ¿Qué mecanismo proporciona este acceso?",
    "keywords": [
      "Signed URLs",
      "URLs firmadas",
      "Acceso temporal",
      "Sin cuenta de Google",
      "Subida directa"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Pedir al usuario que envíe la foto por correo postal en un sobre sellado.",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "B",
        "text": "Generar una URL firmada (Signed URL) con un límite de tiempo de expiración de 15 minutos que otorgue permisos temporales de escritura.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Hacer público el bucket completo para que cualquier persona en Internet pueda leer y borrar todos los archivos.",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "D",
        "text": "Crear una cuenta de administrador de Google Cloud para cada cliente que visite el sitio web.",
        "isTrap": true,
        "trapType": "security_violation"
      }
    ],
    "correct": "B",
    "explanation": "Las URLs firmadas (Signed URLs) otorgan acceso temporal y limitado (lectura o escritura) a un objeto específico de Cloud Storage a usuarios que no tienen credenciales de Google Cloud, expirando automáticamente tras el tiempo especificado.",
    "distractors": {
      "A": "El correo postal físico no ofrece la inmediatez que exige el registro web digital.",
      "B": "Opción correcta.",
      "C": "Hacer público el bucket expone todos los documentos de identidad confidenciales a robo masivo en Internet.",
      "D": "Otorgar cuentas de IAM a usuarios externos anónimos representa un grave riesgo de seguridad y sobrecosto de administración."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/access-control/signed-urls",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-049",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Storage: Control de Versiones de Objetos (Object Versioning)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Protección contra Sobrescrituras y Borrados Accidentales con Object Versioning",
    "scenario": "Un equipo de diseño gráfico guarda archivos de arte y logos corporativos en Cloud Storage. Con frecuencia, los colaboradores sobrescriben accidentalmente versiones previas o eliminan archivos por error. ¿Qué funcionalidad de Cloud Storage debe activarse en el bucket para conservar el historial completo y restaurar versiones anteriores?",
    "keywords": [
      "Object Versioning",
      "Control de versiones",
      "Restauración de archivos",
      "Prevención de borrado accidental"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Armor DDoS Protection",
        "isTrap": true,
        "trapType": "waf_mismatch"
      },
      {
        "letter": "B",
        "text": "Desactivar el acceso a todos los diseñadores",
        "isTrap": true,
        "trapType": "restrictive_antipattern"
      },
      {
        "letter": "C",
        "text": "Control de versiones de objetos (Object Versioning)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Bucket Lock permanente",
        "isTrap": true,
        "trapType": "overkill_immutability"
      }
    ],
    "correct": "C",
    "explanation": "Object Versioning en Cloud Storage mantiene un historial de todas las versiones pasadas de un objeto cada vez que se sobrescribe o elimina, permitiendo listar, descargar o restaurar cualquier versión anterior en caso de error humano.",
    "distractors": {
      "A": "Cloud Armor protege aplicaciones web contra ataques de denegación de servicio, no gestiona versiones de archivos.",
      "B": "Bloquear a los diseñadores impide que realicen su trabajo diario.",
      "C": "Opción correcta.",
      "D": "Bucket Lock bloquea la retención regulatoria estricta e impide borrar o actualizar archivos intencionales."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/object-versioning",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-050",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "AlloyDB for PostgreSQL: Base de Datos Relacional de Alta Velocidad",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aceleración de Cargas PostgreSQL Empresariales con AlloyDB",
    "scenario": "Una empresa de servicios financieros opera una base de datos PostgreSQL de misión crítica que sufre cuellos de botella severos debido a consultas transaccionales masivas combinadas con analítica híbrida (HTAP). Requieren compatibilidad total con PostgreSQL pero con hasta 4 veces mayor rendimiento transaccional que el PostgreSQL estándar y procesamiento columnar analítico acelerado. ¿Qué servicio de Google Cloud está diseñado específicamente para esta necesidad?",
    "keywords": [
      "AlloyDB for PostgreSQL",
      "PostgreSQL compatible",
      "4x rendimiento",
      "Motor columnar analítico",
      "HTAP"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Standard",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Dataprep",
        "isTrap": true,
        "trapType": "etl_tool_mismatch"
      },
      {
        "letter": "C",
        "text": "Compute Engine con discos magnéticos estándar",
        "isTrap": true,
        "trapType": "performance_antipattern"
      },
      {
        "letter": "D",
        "text": "AlloyDB for PostgreSQL",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "AlloyDB for PostgreSQL es una base de datos relacional totalmente administrada y compatible con PostgreSQL, construida con una capa de almacenamiento desagregada inteligente y un motor columnar integrado que ofrece un rendimiento transaccional más de 4 veces superior al PostgreSQL estándar y analítica hasta 100 veces más rápida.",
    "distractors": {
      "A": "Cloud Storage es almacenamiento de objetos no relacional.",
      "B": "Cloud Dataprep es una herramienta gráfica para limpiar y transformar datos.",
      "C": "Discos magnéticos HDD estándar en VMs ofrecen el peor rendimiento de E/S posible para bases de datos transaccionales.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/alloydb/docs",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-051",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Firestore: Modo Datastore vs Modo Nativo",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferenciación entre Firestore en Modo Nativo y Modo Datastore",
    "scenario": "Un equipo de desarrollo está decidiendo cómo configurar una nueva base de datos Firestore. El proyecto 1 es una aplicación web y móvil interactiva que requiere listeners en tiempo real y SDKs cliente. El proyecto 2 es una aplicación de servidor backend heredada que utiliza la API clásica de Datastore para almacenar millones de entidades sin requerir funciones móviles. ¿Qué modos deben seleccionarse?",
    "keywords": [
      "Firestore Modo Nativo",
      "Firestore Modo Datastore",
      "Listeners en tiempo real",
      "Backend heredado",
      "NoSQL"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Proyecto 1: Firestore en Modo Nativo (Native Mode); Proyecto 2: Firestore en Modo Datastore (Datastore Mode)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Ninguno puede usar Firestore",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "C",
        "text": "Proyecto 1: Firestore en Modo Datastore; Proyecto 2: Firestore en Modo Nativo",
        "isTrap": true,
        "trapType": "inverted_mode"
      },
      {
        "letter": "D",
        "text": "Ambos deben usar Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "cold_storage_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "El Modo Nativo de Firestore habilita todas las funciones avanzadas para aplicaciones cliente, como listeners en tiempo real y soporte sin conexión para móviles. El Modo Datastore optimiza el comportamiento para servidores backend que requieren compatibilidad con la API de Cloud Datastore y alta concurrencia de escritura sin funciones móviles.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Firestore es perfectamente aplicable a ambos proyectos en sus respectivos modos.",
      "C": "El modo Datastore no soporta listeners de sincronización en tiempo real ni SDKs móviles directos requeridos por el Proyecto 1.",
      "D": "Cloud Storage Coldline no es una base de datos NoSQL transaccional."
    },
    "officialDocUrl": "https://cloud.google.com/datastore/docs/firestore-or-datastore",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-052",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Consultas Federadas en BigQuery (BigQuery Federated Queries)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Consultas SQL Directas a Cloud SQL y Cloud Storage sin Cargar Datos (BigQuery Federation)",
    "scenario": "Un analista de negocios necesita cruzar datos de facturas históricas almacenadas en BigQuery con información de clientes en tiempo real alojada en una base de datos operativa Cloud SQL for PostgreSQL. No desea construir una canalización ETL compleja para copiar la base de datos completa a BigQuery. ¿Qué funcionalidad permite ejecutar una consulta SQL que una ambas fuentes directamente?",
    "keywords": [
      "Consultas federadas",
      "BigQuery Federated Queries",
      "EXTERNAL_QUERY",
      "Cloud SQL",
      "Sin canalización ETL"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Apagar la base de datos Cloud SQL durante las horas laborales",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "B",
        "text": "Consultas federadas de BigQuery (utilizando funciones como `EXTERNAL_QUERY` para consultar directamente Cloud SQL desde BigQuery)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Migrar manualmente cada registro escribiéndolo con el teclado en la consola de BigQuery",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "D",
        "text": "Exportar toda la base de datos a archivos de texto e imprimirlos en hojas de cálculo",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "Las consultas federadas de BigQuery permiten enviar sentencias de consulta a fuentes de datos externas (como Cloud SQL, Spanner o Cloud Storage) y recibir los resultados directamente en BigQuery para unirlos con tablas internas sin mover ni duplicar los datos.",
    "distractors": {
      "A": "Apagar la base de datos operativa paraliza las ventas y el funcionamiento del negocio.",
      "B": "Opción correcta.",
      "C": "Escribir manualmente millones de registros es humanamente imposible e ineficiente.",
      "D": "Imprimir datos físicos no resuelve el análisis digital ni la unión relacional."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/cloud-sql-federated-queries",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-053",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Ediciones de BigQuery y Asignación de Capacidad (Slots)",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Modelos de Precios de BigQuery: Bajo Demanda (On-Demand) vs Ediciones Basadas en Capacidad",
    "scenario": "El Director Financiero de una empresa desea que los costos mensuales de analítica en BigQuery sean 100% predecibles y constantes, evitando picos de facturación inesperados derivados de consultas pesadas ejecutadas por los analistas. ¿Qué modelo de precios de BigQuery debe contratarse?",
    "keywords": [
      "BigQuery Editions",
      "Capacidad fija",
      "Slots",
      "Costos predecibles",
      "Flat-rate / Editions"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Modelo bajo demanda (On-Demand) sin límite de bytes escaneados por consulta.",
        "isTrap": true,
        "trapType": "variable_cost_trap"
      },
      {
        "letter": "B",
        "text": "Comprar computadoras portátiles individuales para cada analista de datos.",
        "isTrap": true,
        "trapType": "hardware_mismatch"
      },
      {
        "letter": "C",
        "text": "Modelo basado en capacidad con las Ediciones de BigQuery (Standard, Enterprise o Enterprise Plus), que permite reservar una cantidad fija de slots de cómputo dedicados con costo mensual predecible.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Desactivar el acceso a BigQuery a fin de mes cuando se alcance el presupuesto.",
        "isTrap": true,
        "trapType": "service_disruption_antipattern"
      }
    ],
    "correct": "C",
    "explanation": "Las Ediciones de BigQuery (Standard, Enterprise, Enterprise Plus) ofrecen modelos basados en capacidad de procesamiento (slots), lo que garantiza costos fijos y predecibles para grandes organizaciones independientemente del volumen de datos escaneados en las consultas.",
    "distractors": {
      "A": "El modelo bajo demanda factura por Terabyte escaneado ($/TB), lo que genera variabilidad en la factura mensual si los analistas ejecutan consultas no optimizadas.",
      "B": "Las laptops personales no reemplazan el procesamiento distribuido en la nube de petabytes.",
      "C": "Opción correcta.",
      "D": "Cortar el acceso interrumpe las operaciones de inteligencia de negocios de la empresa."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/editions-intro",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-054",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Vistas Materializadas en BigQuery (Materialized Views)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Optimización de Consultas Repetitivas con Vistas Materializadas en BigQuery",
    "scenario": "Un panel de control ejecutivo consulta cada 5 minutos la suma total de ventas diarias agrupadas por región sobre una tabla de transacciones de 100 millones de filas. Para acelerar las consultas y reducir los costos de escaneo continuo de la tabla base, ¿qué objeto de base de datos debe crearse en BigQuery?",
    "keywords": [
      "Materialized Views",
      "Vistas materializadas",
      "Consultas repetitivas",
      "Caché precalculada",
      "BigQuery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Borrar la tabla de transacciones después de que se genere el primer reporte del día.",
        "isTrap": true,
        "trapType": "data_loss_antipattern"
      },
      {
        "letter": "B",
        "text": "Una vista lógica tradicional que vuelva a ejecutar el cálculo completo de 100 millones de filas cada 5 minutos.",
        "isTrap": true,
        "trapType": "standard_view_overhead"
      },
      {
        "letter": "C",
        "text": "Un archivo de texto TXT guardado en el escritorio de la secretaria del director.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Una Vista Materializada (Materialized View), que almacena en caché de forma precalculada y periódica los resultados agregados y se actualiza automáticamente cuando cambian los datos subyacentes.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Las Vistas Materializadas en BigQuery calculan y almacenan previamente los resultados de consultas agregadas complejas. Cuando se consultan, BigQuery lee solo los datos agregados ya procesados, reduciendo drásticamente la latencia y los bytes escaneados.",
    "distractors": {
      "A": "Eliminar datos operativos destruye la integridad del negocio.",
      "B": "Una vista lógica estándar simplemente reescribe la consulta SQL pero sigue escaneando la tabla base completa cada vez.",
      "C": "Un archivo de texto local no es una solución escalable ni integrada con la plataforma de BI.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/materialized-views-intro",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-055",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "BigQuery Data Transfer Service",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Ingesta Programada desde Aplicaciones SaaS con BigQuery Data Transfer Service",
    "scenario": "El equipo de marketing digital necesita importar automáticamente y de forma programada datos diarios de campañas publicitarias desde Google Ads, YouTube Channel Reports y fuentes SaaS externas hacia BigQuery sin tener que escribir código de integración ni mantener servidores. ¿Qué servicio administrado deben configurar?",
    "keywords": [
      "BigQuery Data Transfer Service",
      "Google Ads",
      "YouTube Reports",
      "Ingesta programada",
      "SaaS a BigQuery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "BigQuery Data Transfer Service",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Memorystore for Redis",
        "isTrap": true,
        "trapType": "inmemory_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "D",
        "text": "Compute Engine con scripts de web scraping en Python",
        "isTrap": true,
        "trapType": "manual_overhead"
      }
    ],
    "correct": "A",
    "explanation": "BigQuery Data Transfer Service automatiza el movimiento programado y administrado de datos hacia BigQuery desde aplicaciones SaaS de Google (como Google Ads, Campaign Manager, YouTube) y fuentes externas (como Amazon S3 o Salesforce).",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Memorystore es una caché en memoria RAM, no un servicio de ingesta de datos SaaS.",
      "C": "Cloud Interconnect es conectividad de red física para enlaces dedicados.",
      "D": "El scraping manual es frágil, viola términos de servicio y requiere mantenimiento continuo de código ante cambios de APIs."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/dts-introduction",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-056",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "BigQuery GIS: Analítica Geoespacial",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Análisis de Datos de Ubicación y Coordenadas Geográficas con BigQuery GIS",
    "scenario": "Una empresa de logística de envíos necesita analizar millones de trayectorias de camiones de entrega, calcular distancias entre clientes y depósitos utilizando polígonos geográficos y detectar zonas de alta densidad de entregas mediante funciones espaciales SQL. ¿Qué funcionalidad de BigQuery permite realizar análisis geoespacial?",
    "keywords": [
      "BigQuery GIS",
      "Análisis geoespacial",
      "Polígonos",
      "Coordenadas GPS",
      "Funciones espaciales SQL"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Maps impreso en un mapa mural en la oficina",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "B",
        "text": "BigQuery GIS (Geographic Information Systems)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Billing Reports",
        "isTrap": true,
        "trapType": "billing_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "BigQuery GIS combina la arquitectura serverless de BigQuery con soporte nativo para tipos de datos y funciones geoespaciales (como `ST_GEOGPOINT`, `ST_CONTAINS`, `ST_DISTANCE`), permitiendo analizar petabytes de datos espaciales y visualizarlos en herramientas como Looker Studio o BigQuery Geo Viz.",
    "distractors": {
      "A": "Un mapa físico mural no puede procesar millones de coordenadas GPS dinámicas en tiempo real.",
      "B": "Opción correcta.",
      "C": "Cloud Storage almacena archivos pero no procesa funciones espaciales SQL.",
      "D": "Cloud Billing Reports analiza costos financieros de infraestructura en la nube."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/gis-intro",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-057",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Composer: Orquestación de Flujos de Trabajo con Apache Airflow",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Orquestación de Pipelines de Datos Complejos con Cloud Composer",
    "scenario": "Una empresa requiere coordinar un flujo de datos complejo que involucra: (1) Extraer datos de un ERP externo a las 2:00 AM, (2) Transformar los datos con un trabajo de Cloud Dataproc, (3) Cargar los resultados en BigQuery, y (4) Entrenar un modelo en Vertex AI solo si el paso anterior fue exitoso, con alertas por correo si algún paso falla. ¿Qué servicio administrado de orquestación de flujos de trabajo deben utilizar?",
    "keywords": [
      "Cloud Composer",
      "Apache Airflow",
      "Orquestación de flujos",
      "DAGs",
      "Pipelines dependientes"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine Preemptible VM sin reinicio automático",
        "isTrap": true,
        "trapType": "fragile_solution"
      },
      {
        "letter": "B",
        "text": "Configurar una alarma en el teléfono móvil de un ingeniero para ejecutar los pasos manualmente cada madrugada",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Cloud Composer (servicio administrado de Apache Airflow)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "network_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Composer es un servicio de orquestación de flujos de trabajo completamente administrado basado en Apache Airflow. Permite crear, programar y monitorear pipelines complejos que abarcan múltiples servicios de nube y entornos locales mediante código Python (DAGs).",
    "distractors": {
      "A": "Una VM preemptible puede ser apagada en cualquier momento, interrumpiendo el flujo sin control de dependencias.",
      "B": "La ejecución manual nocturna no es confiable, genera agotamiento en el personal y causa retrasos operativos.",
      "C": "Opción correcta.",
      "D": "Cloud DNS gestiona nombres de dominio, no orquesta tareas de datos."
    },
    "officialDocUrl": "https://cloud.google.com/composer/docs",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-058",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Dataprep by Trifacta: Preparación y Limpieza Visual de Datos",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Limpieza y Preparación Visual de Datos sin Código con Cloud Dataprep",
    "scenario": "Un grupo de analistas de negocio recibe archivos CSV de ventas con columnas desalineadas, valores nulos, formatos de fecha inconsistentes y duplicados. Los analistas no saben programar pero necesitan limpiar, transformar y preparar los datos antes de cargarlos a BigQuery. ¿Qué herramienta gráfica inteligente les permite hacerlo de forma visual e intuitiva?",
    "keywords": [
      "Cloud Dataprep",
      "Limpieza de datos",
      "Data wrangling",
      "Sin código",
      "Preparación visual"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Shell ejecutando comandos binarios en ensamblador",
        "isTrap": true,
        "trapType": "absurd_complexity"
      },
      {
        "letter": "B",
        "text": "Google Cloud Armor",
        "isTrap": true,
        "trapType": "security_mismatch"
      },
      {
        "letter": "C",
        "text": "Reescribir manualmente los archivos CSV en el Bloc de Notas de Windows",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "D",
        "text": "Dataprep by Trifacta (Cloud Dataprep)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Dataprep (by Trifacta) es un servicio de datos inteligente que permite explorar, limpiar y preparar visualmente datos estructurados y no estructurados para análisis sin necesidad de escribir código, sugiriendo automáticamente transformaciones de limpieza comunes.",
    "distractors": {
      "A": "Programar en ensamblador es absurdamente complejo e innecesario para tareas de analítica comercial.",
      "B": "Cloud Armor es un servicio de firewall perimetral y mitigación de ataques DDoS.",
      "C": "Editar archivos de millones de filas a mano en el Bloc de Notas es inviable y genera más errores.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/dataprep/docs",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-059",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Pub/Sub vs Pub/Sub Lite: Selección Costo-Eficiente",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Elección entre Cloud Pub/Sub Estándar y Pub/Sub Lite",
    "scenario": "Una empresa requiere una cola de mensajería para ingesta de telemetría de una sola región. Tienen un volumen constante y muy predecible de mensajes y buscan la opción de menor costo posible, estando dispuestos a gestionar la partición y el aprovisionamiento de capacidad por zonas. ¿Qué servicio es el más adecuado?",
    "keywords": [
      "Pub/Sub Lite",
      "Costo mínimo",
      "Capacidad predecible",
      "Zonal",
      "Particiones administradas"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Pub/Sub Lite",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Pub/Sub estándar (global y sin aprovisionamiento de capacidad)",
        "isTrap": true,
        "trapType": "higher_cost_for_zonal_fit"
      },
      {
        "letter": "C",
        "text": "Cloud Spanner con multi-región global",
        "isTrap": true,
        "trapType": "heavy_database_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "archive_storage_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Pub/Sub Lite es una versión zonal de menor costo de Pub/Sub diseñada para cargas con patrones de tráfico predecibles donde los usuarios gestionan la capacidad de rendimiento y almacenamiento de las particiones, reduciendo sustancialmente los costos en comparación con Pub/Sub estándar.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Pub/Sub estándar es totalmente administrado, global y elástico, pero tiene un costo ligeramente superior al de Pub/Sub Lite.",
      "C": "Cloud Spanner es una base de datos relacional global, no un sistema de colas y mensajería económica de telemetría.",
      "D": "Archive Storage es para almacenamiento frío de largo plazo, incompatible con streaming de mensajes."
    },
    "officialDocUrl": "https://cloud.google.com/pubsub/docs/choosing-pubsub-or-lite",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D2-060",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Data Catalog: Búsqueda y Clasificación de Metadatos",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Descubrimiento y Etiquetado de Activos de Datos con Data Catalog",
    "scenario": "El equipo de gobernanza de datos de una corporación necesita una herramienta centralizada para que los analistas puedan buscar tablas, esquemas y conjuntos de datos en BigQuery y Cloud Storage utilizando palabras clave, y que permita adjuntar etiquetas personalizadas de negocio (como 'Clasificación de Seguridad: Confidencial' o 'Dueño del Dato'). ¿Qué componente de Dataplex / Data Catalog cumple esta función?",
    "keywords": [
      "Data Catalog",
      "Búsqueda de metadatos",
      "Etiquetas de gobernanza",
      "Tag Templates",
      "Descubrimiento de datos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Workspace Gmail",
        "isTrap": true,
        "trapType": "email_mismatch"
      },
      {
        "letter": "B",
        "text": "Data Catalog (integrado en Dataplex)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Run",
        "isTrap": true,
        "trapType": "compute_mismatch"
      },
      {
        "letter": "D",
        "text": "Google Compute Engine Custom Machine Types",
        "isTrap": true,
        "trapType": "vm_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Data Catalog (ahora integrado en la suite de Dataplex) es un servicio de administración de metadatos totalmente administrado y escalable que permite a las organizaciones descubrir, clasificar y gobernar rápidamente sus activos de datos en Google Cloud mediante plantillas de etiquetas (Tag Templates).",
    "distractors": {
      "A": "Gmail es una herramienta de correo electrónico corporativo.",
      "B": "Opción correcta.",
      "C": "Cloud Run es un entorno para ejecutar aplicaciones en contenedores.",
      "D": "Las máquinas virtuales personalizadas son opciones de configuración de CPU y memoria en Compute Engine."
    },
    "officialDocUrl": "https://cloud.google.com/dataplex/docs/data-catalog-overview",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-046",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Tipos de Persistent Disk: Standard, Balanced, SSD y Extreme / Hyperdisk",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Selección del Almacenamiento en Bloque Adecuado en Compute Engine",
    "scenario": "Un administrador de sistemas evalúa las opciones de almacenamiento en bloque para diferentes cargas de trabajo: (1) Archivos de registro de acceso infrecuente con costo mínimo, (2) La mayoría de las aplicaciones empresariales estándar que requieren un equilibrio óptimo entre rendimiento y costo, y (3) Una base de datos transaccional de ultra alto rendimiento que requiere cientos de miles de IOPS. ¿Qué tipo de Persistent Disk corresponde?",
    "keywords": [
      "Persistent Disk",
      "Standard HDD",
      "Balanced SSD",
      "Extreme / Hyperdisk",
      "IOPS",
      "Rendimiento de almacenamiento"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Usar memorias USB comerciales conectadas a los servidores",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive para los tres casos",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "(1) Standard Persistent Disk (pd-standard HDD); (2) Balanced Persistent Disk (pd-balanced SSD); (3) Extreme Persistent Disk / Hyperdisk (pd-extreme)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "(1) Extreme; (2) Standard; (3) Balanced",
        "isTrap": true,
        "trapType": "misaligned_storage_tiers"
      }
    ],
    "correct": "C",
    "explanation": "Standard Persistent Disk (HDD) optimiza costos para procesamiento por lotes y datos secuenciales; Balanced Persistent Disk (SSD) ofrece la mejor relación rendimiento/precio para la mayoría de las cargas de trabajo empresariales; y Extreme / Hyperdisk proporciona IOPS masivos y configurables para bases de datos de misión crítica.",
    "distractors": {
      "A": "Las memorias USB no son compatibles ni escalables en entornos de nube virtualizados.",
      "B": "Cloud Storage Archive es almacenamiento de objetos fríos de largo plazo, no almacenamiento de bloques para discos de VMs.",
      "C": "Opción correcta.",
      "D": "Invierte los niveles de rendimiento y costo de los discos."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-047",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Local SSD: Almacenamiento Efímero de Ultra Baja Latencia",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Almacenamiento Efímero de Alto Rendimiento con Local SSD",
    "scenario": "Una aplicación de análisis financiero en Compute Engine requiere una unidad de almacenamiento temporal para espacio de intercambio (scratch space) y memoria caché que ofrezca millones de IOPS con latencia sub-milisegundo. El equipo no necesita que los datos persistan si la VM se detiene o se apaga. ¿Qué tipo de almacenamiento debe acoplarse a la instancia?",
    "keywords": [
      "Local SSD",
      "Almacenamiento efímero",
      "Millones de IOPS",
      "Latencia sub-milisegundo",
      "Scratch space"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "cold_storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Cintas magnéticas analógicas",
        "isTrap": true,
        "trapType": "obsolete_hardware"
      },
      {
        "letter": "C",
        "text": "Cloud Logging",
        "isTrap": true,
        "trapType": "observability_mismatch"
      },
      {
        "letter": "D",
        "text": "Local SSD (discos de estado sólido conectados físicamente al servidor host de la VM)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Local SSD está conectado físicamente al servidor donde se aloja la instancia de Compute Engine. Ofrece un rendimiento de IOPS extremadamente alto y latencias muy bajas para cachés, procesamiento intermedio y espacio efímero, aunque sus datos no sobreviven a la detención de la VM.",
    "distractors": {
      "A": "Coldline Storage es para respaldos de acceso trimestral con alta latencia.",
      "B": "Las cintas magnéticas son para archivado histórico fuera de línea.",
      "C": "Cloud Logging recopila registros del sistema.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/local-ssd",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-048",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Run Jobs: Ejecución de Tareas por Lotes Serverless",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Ejecución de Trabajos por Lotes por Demanda con Cloud Run Jobs",
    "scenario": "Una empresa requiere ejecutar un script en un contenedor Docker que procesa informes contables todos los días a medianoche. El contenedor realiza el cálculo durante 25 minutos y luego debe terminar y apagarse por completo sin responder a peticiones HTTP continuas. ¿Qué modalidad de Cloud Run está diseñada para este caso de uso?",
    "keywords": [
      "Cloud Run Jobs",
      "Trabajos por lotes",
      "Batch container",
      "Ejecución hasta completar",
      "Serverless"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Run Jobs (Trabajos de Cloud Run)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Run Services (Servicios de Cloud Run basados en peticiones web HTTP)",
        "isTrap": true,
        "trapType": "http_service_mismatch"
      },
      {
        "letter": "D",
        "text": "Comprar una máquina física de 128 núcleos para encenderla 25 minutos al día",
        "isTrap": true,
        "trapType": "hardware_purchase_trap"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Run Jobs permite ejecutar tareas y contenedores por lotes que corren hasta completarse (run-to-completion) sin necesidad de exponer un servidor web HTTP, escalando miles de tareas en paralelo y apagando los recursos inmediatamente al finalizar.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud DNS es resolución de nombres de red.",
      "C": "Cloud Run Services está diseñado para responder a peticiones web HTTP o eventos entrantes continuos, no para tareas por lotes aisladas de ejecución única.",
      "D": "Comprar servidores físicos dedicados para 25 minutos diarios representa un desperdicio financiero masivo."
    },
    "officialDocUrl": "https://cloud.google.com/run/docs/create-jobs",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-049",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "App Engine: División de Tráfico para Pruebas A/B (Traffic Splitting)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Pruebas A/B y Migración Gradual de Tráfico en App Engine",
    "scenario": "El equipo de producto de una aplicación en App Engine desea lanzar una nueva interfaz de usuario. Quieren enviar el 50% de las solicitudes entrantes a la versión antigua (v1) y el 50% a la nueva versión (v2) basándose en la dirección IP o cookies del usuario para evaluar cuál genera mayor interacción comercial. ¿Qué funcionalidad de App Engine permite hacer esto sin programar balanceadores adicionales?",
    "keywords": [
      "Traffic Splitting",
      "División de tráfico",
      "Pruebas A/B",
      "App Engine",
      "Control de versiones"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Pedir a los usuarios que escriban un código secreto en la URL",
        "isTrap": true,
        "trapType": "bad_ux_antipattern"
      },
      {
        "letter": "B",
        "text": "División de Tráfico (Traffic Splitting) en App Engine",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Borrar la versión v1 antes de probar la v2",
        "isTrap": true,
        "trapType": "dangerous_practice"
      }
    ],
    "correct": "B",
    "explanation": "App Engine incluye la funcionalidad de División de Tráfico (Traffic Splitting), que permite distribuir porcentajes exactos del tráfico entrante entre múltiples versiones desplegadas de la aplicación mediante cookies o direcciones IP, facilitando pruebas A/B y despliegues canarios.",
    "distractors": {
      "A": "Imponer fricción al usuario degrada la experiencia y sesga los resultados de la prueba.",
      "B": "Opción correcta.",
      "C": "Cloud Storage Archive es para retención fría de datos.",
      "D": "Borrar la versión previa impide realizar comparaciones y elimina la capacidad de rollback inmediato."
    },
    "officialDocUrl": "https://cloud.google.com/appengine/docs/standard/splitting-traffic",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-050",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Router y Protocolo BGP para Redes Híbridas Dinámicas",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Enrutamiento Dinámico con Cloud Router y BGP en Conexiones Híbridas",
    "scenario": "Una empresa conecta su red local con Google Cloud mediante Cloud VPN y Cloud Interconnect. Desean que las nuevas subredes que se creen en la nube o en el centro de datos local se anuncien y descubran automáticamente sin requerir que los ingenieros de redes actualicen tablas de enrutamiento estáticas manualmente en cada enrutador. ¿Qué servicio y protocolo proporcionan este enrutamiento dinámico?",
    "keywords": [
      "Cloud Router",
      "BGP",
      "Border Gateway Protocol",
      "Enrutamiento dinámico",
      "Redes híbridas"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Configuración manual de rutas estáticas en hojas de papel",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "B",
        "text": "Cloud Armor WAF",
        "isTrap": true,
        "trapType": "security_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Router utilizando el protocolo de puerta de enlace fronteriza (BGP - Border Gateway Protocol)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Vision API",
        "isTrap": true,
        "trapType": "ai_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Router es un servicio de red completamente administrado que utiliza el protocolo estándar BGP (Border Gateway Protocol) para intercambiar rutas dinámicas automáticamente entre la red VPC de Google Cloud y los enrutadores locales.",
    "distractors": {
      "A": "Las rutas estáticas manuales no escalan, son propensas a errores y no se adaptan ante cambios de topología.",
      "B": "Cloud Armor es seguridad perimetral de aplicaciones web contra DDoS.",
      "C": "Opción correcta.",
      "D": "Cloud Vision API analiza imágenes."
    },
    "officialDocUrl": "https://cloud.google.com/network-connectivity/docs/router",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-051",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Certificados SSL Administrados por Google (Google-Managed SSL Certificates)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Cifrado HTTPS Automático con Certificados SSL Administrados por Google",
    "scenario": "Un equipo web despliega un portal de comercio electrónico detrás de Cloud Load Balancing. En el pasado, los certificados SSL expiraban por descuido humano, haciendo que los navegadores mostraran advertencias de seguridad a los clientes. Desean que Google Cloud aprovisione, configure y renueve automáticamente los certificados SSL/TLS para sus dominios de forma gratuita. ¿Qué característica deben activar?",
    "keywords": [
      "Google-Managed SSL Certificates",
      "Certificados SSL administrados",
      "Renovación automática",
      "HTTPS",
      "Cloud Load Balancing"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Certificados autofirmados sin validar",
        "isTrap": true,
        "trapType": "browser_warning_antipattern"
      },
      {
        "letter": "C",
        "text": "Desactivar HTTPS y transmitir contraseñas en texto plano",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "D",
        "text": "Certificados SSL administrados por Google (Google-Managed SSL Certificates)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Los Google-Managed SSL Certificates son aprovisionados, vinculados al balanceador de carga y renovados automáticamente por Google Cloud de forma gratuita antes de su vencimiento, eliminando el riesgo operativo de expiración de certificados HTTPS.",
    "distractors": {
      "A": "Cloud Storage Nearline es para copias de seguridad de objetos.",
      "B": "Los certificados autofirmados generan alertas de seguridad rojas en los navegadores de los clientes.",
      "C": "Usar HTTP sin cifrado permite a atacantes interceptar credenciales y datos financieros de los clientes.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-052",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Private Service Connect (PSC) vs VPC Peering",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Consumo Seguro de Servicios sin Conflicto de IPs con Private Service Connect (PSC)",
    "scenario": "Una empresa SaaS en Google Cloud ofrece su plataforma a cientos de clientes corporativos diferentes. Muchos clientes tienen rangos de direcciones IP privadas superpuestos (como `10.0.0.0/16`) en sus VPCs, lo que impide usar VPC Peering tradicional. ¿Qué tecnología moderna permite a los clientes consumir el servicio SaaS de forma privada mediante un endpoint de IP interna sin unir redes completas ni preocuparse por solapamiento de IPs?",
    "keywords": [
      "Private Service Connect",
      "PSC",
      "Consumo privado de servicios",
      "Sin solapamiento de IPs",
      "Endpoints privados"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Private Service Connect (PSC)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Tender cables físicos entre los hogares de los clientes",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Hacer público el servicio en Internet sin autenticación",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      }
    ],
    "correct": "A",
    "explanation": "Private Service Connect (PSC) permite el acceso privado a servicios (propios, de terceros o de Google) desde diferentes redes VPC utilizando endpoints de reenvío privados, sin requerir emparejamiento de redes VPC completas y evitando problemas de solapamiento de rangos de direcciones IP.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Tender cables físicos individuales es inviable para un modelo SaaS moderno.",
      "C": "Cloud Storage Archive es para almacenamiento frío.",
      "D": "Exponer servicios a Internet sin autenticación es una vulnerabilidad crítica."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/private-service-connect",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-053",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Malla de Servicios (Anthos / Cloud Service Mesh) y Cifrado mTLS",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Seguridad y Observabilidad de Microservicios con Cloud Service Mesh",
    "scenario": "En una arquitectura con cientos de microservicios en GKE, la dirección exige que: (1) Todo el tráfico de red entre microservicios esté cifrado con TLS mutuo (mTLS) de forma transparente, (2) Se apliquen políticas de autenticación y autorización basadas en identidad de servicio, y (3) Se obtengan métricas de latencia y trazabilidad distribuida sin modificar el código de las aplicaciones. ¿Qué solución proporciona estas capacidades?",
    "keywords": [
      "Cloud Service Mesh",
      "Anthos Service Mesh",
      "mTLS",
      "Seguridad de microservicios",
      "Observabilidad y telemetría"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Desactivar la red interna de Kubernetes",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Cloud Service Mesh (anteriormente Anthos Service Mesh, basado en Istio)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Pedir a los desarrolladores que reescriban todo en código C puro",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "D",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Service Mesh proporciona una malla de servicios administrada basada en Istio que inyecta proxies en los contenedores para gestionar el cifrado mTLS automático entre servicios, aplicar políticas de control de acceso de Zero Trust y recopilar métricas detalladas de observabilidad y dependencias.",
    "distractors": {
      "A": "Desactivar la red paraliza la comunicación entre microservicios.",
      "B": "Opción correcta.",
      "C": "Reescribir código en C no resuelve de forma transparente la gestión dinámica de certificados mTLS y políticas de malla.",
      "D": "Cloud DNS es resolución de nombres de red."
    },
    "officialDocUrl": "https://cloud.google.com/service-mesh/docs",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-054",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Anthos Config Management: Gobernanza Declarativa con GitOps",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Gobernanza Automatizada de Clústeres Kubernetes con Anthos Config Management (GitOps)",
    "scenario": "Una corporación opera 40 clústeres de GKE en diferentes regiones y entornos locales. El oficial de cumplimiento requiere que ciertas políticas de seguridad (como restringir permisos de root en contenedores y aplicar cuotas de recursos) se apliquen de forma automática, inmutable e idéntica en todos los clústeres a partir de una única fuente de verdad alojada en un repositorio Git central. ¿Qué herramienta de GKE Enterprise implementa este modelo GitOps?",
    "keywords": [
      "Anthos Config Management",
      "ACM",
      "GitOps",
      "Gobernanza declarativa",
      "Políticas en clústeres"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Apagar los 40 clústeres para evitar violaciones de políticas",
        "isTrap": true,
        "trapType": "service_disruption_antipattern"
      },
      {
        "letter": "B",
        "text": "Enviar correos electrónicos mensuales a los desarrolladores recordándoles las reglas",
        "isTrap": true,
        "trapType": "informal_antipattern"
      },
      {
        "letter": "C",
        "text": "Anthos Config Management (ACM / Config Sync y Policy Controller)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Anthos Config Management (Config Sync y Policy Controller) permite gestionar políticas y configuraciones de múltiples clústeres de Kubernetes a escala mediante un enfoque declarativo de GitOps, sincronizando automáticamente el estado de los clústeres con los manifiestos almacenados en un repositorio Git central.",
    "distractors": {
      "A": "Apagar la infraestructura destruye la operatividad del negocio.",
      "B": "Los correos electrónicos informales no previenen configuraciones erróneas ni ofrecen cumplimiento automatizado.",
      "C": "Opción correcta.",
      "D": "Cloud Storage Nearline almacena objetos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/anthos-config-management/docs",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-055",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Google Distributed Cloud Hosted (GDCH): Soberanía de Datos y Entornos Aislados (Air-Gapped)",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Soberanía Digital Estricta y Entornos Desconectados con Google Distributed Cloud Hosted",
    "scenario": "Un organismo gubernamental de seguridad nacional requiere utilizar tecnologías modernas de Kubernetes, contenedores e inteligencia artificial en sus propias instalaciones físicas, pero la ley prohíbe de forma absoluta cualquier conexión a la Internet pública o a la nube pública de Google (entorno desconectado o 'air-gapped' con soberanía total). ¿Qué solución de infraestructura de Google satisface este requisito?",
    "keywords": [
      "Google Distributed Cloud Hosted",
      "GDCH",
      "Air-gapped",
      "Soberanía estricta",
      "Sin conexión a Internet"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Workspace comercial",
        "isTrap": true,
        "trapType": "public_saas_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud DNS público",
        "isTrap": true,
        "trapType": "public_dns_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Run público",
        "isTrap": true,
        "trapType": "public_cloud_mismatch"
      },
      {
        "letter": "D",
        "text": "Google Distributed Cloud Hosted (GDCH)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Distributed Cloud Hosted (GDCH) es una solución de nube y hardware completamente aislada (air-gapped) que permite a entidades gubernamentales y sectores altamente regulados operar servicios de Google Cloud e IA en sus instalaciones locales sin requerir ninguna conexión a la red pública ni a Google Cloud.",
    "distractors": {
      "A": "Google Workspace comercial opera en la nube pública de Google.",
      "B": "Cloud DNS público opera sobre la red pública de Internet.",
      "C": "Cloud Run público requiere conectividad con los centros de datos de Google Cloud en Internet.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/distributed-cloud/docs/hosted",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-056",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Workstations: Entornos de Desarrollo Seguros y Administrados en la Nube",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Seguridad y Productividad para Desarrolladores con Cloud Workstations",
    "scenario": "Una empresa de software contrata a cientos de desarrolladores remotos y contratistas externos. El equipo de seguridad teme que el código fuente propietario se descargue en computadoras portátiles personales inseguras y busca proporcionar estaciones de trabajo de desarrollo (IDEs) preconfiguradas, administradas y aisladas en la red VPC corporativa de Google Cloud sin que el código salga de la nube. ¿Qué solución deben implementar?",
    "keywords": [
      "Cloud Workstations",
      "IDEs en la nube",
      "Prevención de fuga de código",
      "Entornos de desarrollo seguros"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Workstations",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Enviar el código fuente completo en memorias USB por correo a las casas de los contratistas",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Prohibir el uso de computadoras a los programadores",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Workstations proporciona entornos de desarrollo completamente administrados, seguros y efímeros en Google Cloud, integrados con IDEs populares (como VS Code e IntelliJ), garantizando que el código fuente nunca resida en los dispositivos locales de los desarrolladores.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Enviar código en memorias USB físicas es una violación crítica de propiedad intelectual y seguridad.",
      "C": "Cloud Storage Coldline es para copias de seguridad de datos fríos.",
      "D": "Impedir el uso de computadoras imposibilita el desarrollo de software."
    },
    "officialDocUrl": "https://cloud.google.com/workstations/docs",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-057",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Estrategia 6 R: Replatforming (Move and Improve)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Estrategia de Replatforming (Lift-Tinker-and-Shift) en la Adopción de la Nube",
    "scenario": "Una empresa traslada su aplicación de contabilidad a Google Cloud. En lugar de limitarse a mover las máquinas virtuales exactamente iguales (Rehost), deciden migrar la base de datos MySQL autogestionada a Cloud SQL for MySQL para eliminar tareas de administración de backups y parches, manteniendo el código de la aplicación casi intacto. ¿Qué estrategia de las 6 R describe este enfoque de 'mover y mejorar'?",
    "keywords": [
      "Replatform",
      "Move and Improve",
      "6 Rs de migración",
      "Migración a servicios administrados",
      "Cloud SQL"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Rebuild desde cero en lenguaje de tarjetas perforadas",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Replatform (Replatforming o Move and Improve)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Retire (Retiro / Baja de la aplicación)",
        "isTrap": true,
        "trapType": "misaligned_strategy"
      },
      {
        "letter": "D",
        "text": "Retain (Retención en sitio local)",
        "isTrap": true,
        "trapType": "misaligned_strategy"
      }
    ],
    "correct": "B",
    "explanation": "Replatforming (Mover y Mejorar) implica realizar optimizaciones específicas para aprovechar servicios administrados en la nube (como cambiar una base de datos autogestionada por Cloud SQL) sin cambiar la arquitectura central ni reescribir sustancialmente el código de la aplicación.",
    "distractors": {
      "A": "Las tarjetas perforadas son una tecnología obsoleta de hace más de medio siglo.",
      "B": "Opción correcta.",
      "C": "Retire significa apagar aplicaciones que ya no aportan valor.",
      "D": "Retain significa dejar la carga de trabajo en el centro de datos local."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/migration-center",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-058",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Estrategia 6 R: Repurchase (Drop and Shop hacia SaaS)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Estrategia de Repurchase (Recompra hacia SaaS)",
    "scenario": "Una empresa mantiene un servidor de correo electrónico corporativo local complejo de mantener. Al evaluar su estrategia de nube, deciden desmantelar el servidor local por completo y migrar a todos los empleados a Google Workspace (Gmail, Drive, Meet). ¿Qué estrategia de migración representa este cambio hacia una solución SaaS comercial?",
    "keywords": [
      "Repurchase",
      "Drop and Shop",
      "SaaS",
      "Google Workspace",
      "6 Rs"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Refactor escribiendo un servidor de correo en C++ desde cero",
        "isTrap": true,
        "trapType": "overengineering_overhead"
      },
      {
        "letter": "B",
        "text": "Retain (mantener el servidor local para siempre)",
        "isTrap": true,
        "trapType": "opposite_action"
      },
      {
        "letter": "C",
        "text": "Repurchase (Recompra hacia un modelo SaaS comercial)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Rehost puro en máquinas virtuales IaaS",
        "isTrap": true,
        "trapType": "iaas_confusion"
      }
    ],
    "correct": "C",
    "explanation": "Repurchase (Recompra o 'Drop and Shop') consiste en reemplazar una aplicación propia o infraestructura personalizada por un producto estándar como Software como Servicio (SaaS), como adoptar Google Workspace en lugar de gestionar servidores de correo propios.",
    "distractors": {
      "A": "Escribir un servidor de correo propio desde cero desperdicia recursos en software no diferenciador.",
      "B": "Retain implicaría continuar manteniendo el hardware y software local obsoleto.",
      "C": "Opción correcta.",
      "D": "Rehost implicaría mover el servidor de correo antiguo a una VM en Compute Engine."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/migration-center",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-059",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Estrategia 6 R: Retain (Retener en Premisas) y Fachadas con Apigee",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Integración de Cargas Retenidas en Premisas (Retain) mediante Fachadas de APIs",
    "scenario": "Un banco tiene un sistema central mainframe heredado que no puede ser migrado ni reemplazado en el corto plazo debido a restricciones regulatorias (estrategia Retain). Sin embargo, el banco necesita que sus nuevas aplicaciones móviles en Google Cloud consulten saldos del mainframe de forma moderna y segura. ¿Cómo se resuelve esta integración?",
    "keywords": [
      "Retain",
      "Mainframe heredado",
      "Fachada de APIs",
      "Apigee",
      "Modernización de sistemas legados"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Destruir el mainframe con un mazo sin respaldo",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Exponer el mainframe directamente a Internet sin contraseñas",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Retener el mainframe en las instalaciones locales (Retain) y colocar una fachada de APIs moderna (con Apigee) para conectar de forma segura las aplicaciones en la nube con el sistema legado.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Para sistemas críticos que deben conservarse localmente (Retain), el patrón de 'Fachada de APIs' (utilizando Apigee) permite encapsular los protocolos complejos heredados del mainframe en APIs REST modernas y seguras, permitiendo que las nuevas aplicaciones en la nube interactúen fácilmente con ellos.",
    "distractors": {
      "A": "Destruir el sistema central bancario causaría pérdidas financieras y legales catastróficas.",
      "B": "Exponer un mainframe sin protección a Internet conduce a compromisos de seguridad inmediatos.",
      "C": "Cloud Storage Coldline almacena archivos pasivos.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/apigee/docs/api-platform/fundamentals/what-is-apigee",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D3-060",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Estrategia 6 R: Retire (Dar de Baja Aplicaciones Obsoletas)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Optimización del Portafolio de TI mediante la Estrategia Retire",
    "scenario": "Durante el análisis de inventario previo a la migración a la nube, una empresa descubre que 45 servidores alojan aplicaciones obsoletas que ya ningún departamento de la empresa utiliza desde hace dos años. ¿Qué acción debe tomarse con estos recursos según el marco de las 6 R?",
    "keywords": [
      "Retire",
      "Baja de aplicaciones",
      "Eliminación de servidores ociosos",
      "6 Rs de migración"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Retirar y apagar permanentemente los servidores y aplicaciones obsoletas (estrategia Retire), reduciendo costos de licencias, infraestructura y riesgos de seguridad.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Duplicar el número de servidores obsoletos cada semana",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Migrar todas las aplicaciones obsoletas a las máquinas virtuales más caras y potentes de Google Cloud",
        "isTrap": true,
        "trapType": "cost_explosion"
      },
      {
        "letter": "D",
        "text": "Obligar a los empleados a utilizar las aplicaciones obsoletas a la fuerza",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "A",
    "explanation": "La estrategia 'Retire' consiste en identificar y dar de baja de forma segura las aplicaciones que ya no aportan valor al negocio (representando frecuentemente entre el 10% y el 20% del inventario corporativo), ahorrando costos de licencias y eliminando vectores de ataque de seguridad.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Multiplicar servidores inútiles es un desperdicio financiero.",
      "C": "Migrar aplicaciones sin uso genera costos innecesarios en la nube.",
      "D": "Forzar el uso de software obsoleto degrada la productividad."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/migration-center",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-046",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Google Cloud Pricing Calculator: Estimación de Costos de Proyectos",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Estimación Financiera Previa a la Migración con Google Cloud Pricing Calculator",
    "scenario": "Un equipo de arquitectura está diseñando una nueva aplicación y el Director Financiero (CFO) exige una estimación detallada del costo mensual antes de encender cualquier recurso en la nube. ¿Qué herramienta oficial gratuita y accesible en la web permite simular configuraciones de servicios y calcular presupuestos previstos?",
    "keywords": [
      "Google Cloud Pricing Calculator",
      "Calculadora de precios",
      "Estimación de costos",
      "Planificación de presupuestos",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Adivinar una cifra al azar en una servilleta",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Google Cloud Pricing Calculator (Calculadora de precios de Google Cloud)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Encender 500 máquinas virtuales durante un mes para ver cuánto cobran en la factura",
        "isTrap": true,
        "trapType": "expensive_antipattern"
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud Pricing Calculator es la herramienta interactiva oficial que permite a los arquitectos y líderes financieros modelar arquitecturas, configurar parámetros de servicios (cómputo, almacenamiento, redes) y obtener estimaciones precisas de costos mensuales previstos.",
    "distractors": {
      "A": "Adivinar cifras carece de rigor financiero y arriesga desviaciones presupuestarias.",
      "B": "Opción correcta.",
      "C": "Cloud Storage Archive es un servicio de almacenamiento pasivo para copias de seguridad.",
      "D": "Encender infraestructura real sin planificar genera gastos innecesarios antes de tener la aprobación financiera."
    },
    "officialDocUrl": "https://cloud.google.com/products/calculator",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-047",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Uso Compartido de Descuentos por Compromiso de Uso (CUD Sharing)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Maximización del Ahorro con CUD Sharing a Nivel de Cuenta de Facturación",
    "scenario": "Una empresa tiene 15 proyectos en Google Cloud vinculados a una misma Cuenta de Facturación. Compraron un descuento por compromiso de uso (CUD) para 100 vCPUs en el Proyecto A, pero debido a cambios operativos, el Proyecto A solo utiliza 40 vCPUs este mes. ¿Cómo pueden aprovecharse las 60 vCPUs restantes con descuento en los otros 14 proyectos?",
    "keywords": [
      "CUD Sharing",
      "Uso compartido de descuentos",
      "Cuenta de facturación",
      "Optimización de CUDs",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Perder el dinero del descuento sin ninguna posibilidad de compartirlo",
        "isTrap": true,
        "trapType": "false_limitation"
      },
      {
        "letter": "B",
        "text": "Crear 60 máquinas virtuales ociosas e inútiles en el Proyecto A para forzar el consumo",
        "isTrap": true,
        "trapType": "wasteful_antipattern"
      },
      {
        "letter": "C",
        "text": "Habilitar el uso compartido de descuentos por compromiso de uso (CUD Sharing) a nivel de la Cuenta de Facturación para que el descuento sobrante se aplique automáticamente al consumo de vCPUs elegibles en los demás proyectos.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Desactivar la cuenta de facturación de la empresa",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "CUD Sharing (Uso compartido de CUDs) permite que los descuentos por compromiso de uso contratados se distribuyan de forma transparente entre todos los proyectos vinculados a la misma Cuenta de Facturación de Cloud Billing, maximizando la tasa de utilización del descuento y el ahorro financiero.",
    "distractors": {
      "A": "Google Cloud permite compartir los descuentos entre proyectos de la misma cuenta de facturación.",
      "B": "Crear VMs inútiles no genera valor de negocio.",
      "C": "Opción correcta.",
      "D": "Desactivar la cuenta de facturación interrumpe todos los servicios empresariales."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/cud-sharing",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-048",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Automatización Programática de Presupuestos mediante Pub/Sub y Cloud Functions",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Acciones Automatizadas ante Desviaciones Presupuestarias con Pub/Sub y Serverless",
    "scenario": "En un proyecto de laboratorio para desarrolladores (Sandbox), la empresa desea que si el gasto mensual supera el 100% del presupuesto de $500 USD, se ejecute una acción automática para apagar las máquinas virtuales de prueba y deshabilitar la facturación de ese proyecto específico para evitar gastos descontrolados. ¿Cómo se implementa esta automatización en Google Cloud?",
    "keywords": [
      "Automatización de presupuesto",
      "Pub/Sub",
      "Cloud Functions / Cloud Run",
      "Apagado automático de Sandbox",
      "Límites estrictos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Pedir al guardia de seguridad del edificio que corte la luz general de la oficina",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Google Cloud prohíbe cualquier automatización con facturación",
        "isTrap": true,
        "trapType": "false_claim"
      },
      {
        "letter": "D",
        "text": "Configurar la alerta de presupuesto para que publique notificaciones en un tema de Cloud Pub/Sub que dispare una Cloud Function o servicio de Cloud Run encargado de detener las VMs o desvincular la facturación programáticamente.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Las alertas de presupuesto de Cloud Billing pueden enviar mensajes a temas de Cloud Pub/Sub. Esto permite integrar lógica programática personalizada mediante Cloud Functions o Cloud Run para ejecutar respuestas automáticas como detener instancias de prueba, reducir cuotas o suspender recursos en entornos de desarrollo.",
    "distractors": {
      "A": "Cloud Storage Coldline almacena archivos pasivos.",
      "B": "Cortar la electricidad física de la oficina no detiene los recursos que se ejecutan en los centros de datos de Google Cloud.",
      "C": "Google Cloud proporciona APIs completas para automatizar la gobernanza financiera.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/notify",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-049",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Recomendador de IAM (IAM Recommender): Reducción de Permisos Excesivos",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aplicación Automatizada del Menor Privilegio con IAM Recommender",
    "scenario": "Un usuario tiene asignado el rol amplio `roles/editor` en un proyecto desde hace 6 meses. Sin embargo, el análisis de registros demuestra que el usuario solo ha utilizado permisos de lectura en Cloud Storage y nunca ha modificado ningún otro servicio. ¿Qué herramienta de Google Cloud detecta este exceso de permisos y sugiere un rol más específico y restrictivo de forma automática?",
    "keywords": [
      "IAM Recommender",
      "Recomendador de IAM",
      "Detección de permisos no utilizados",
      "Menor privilegio automatizado"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Recomendador de IAM (IAM Recommender / Role Recommender)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "Compute Engine Bare Metal",
        "isTrap": true,
        "trapType": "compute_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "IAM Recommender compara los permisos asignados a los usuarios con los permisos que realmente utilizan basándose en el historial de actividad de los últimos 90 días, recomendando de forma proactiva revocar roles excesivos y sustituirlos por roles de menor privilegio adecuados.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud Storage Nearline almacena objetos pasivos.",
      "C": "Compute Engine Bare Metal ofrece hardware físico dedicado.",
      "D": "Cloud DNS gestiona la resolución de nombres de red."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/recommender-overview",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-050",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Policy Troubleshooter: Diagnóstico y Resolución de Problemas de Acceso",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diagnóstico de Denegaciones de Permisos con Policy Troubleshooter",
    "scenario": "Un desarrollador recibe un error 'Permission Denied' (Permiso Denegado) al intentar publicar un mensaje en un tema de Pub/Sub. El administrador de seguridad necesita averiguar rápidamente qué política de IAM, permiso específico o condición está bloqueando el acceso o por qué el rol asignado no se está aplicando. ¿Qué herramienta de diagnóstico de IAM resuelve esto?",
    "keywords": [
      "Policy Troubleshooter",
      "Solucionador de problemas de políticas",
      "Depuración de permisos",
      "Permission Denied",
      "IAM"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Darle permisos de Administrador de Organización (Owner) al desarrollador para que no se queje",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "B",
        "text": "Policy Troubleshooter (Solucionador de problemas de políticas de IAM)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Apagar el clúster de Pub/Sub",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "Policy Troubleshooter permite a los administradores de seguridad evaluar y depurar de forma instantánea por qué un usuario o cuenta de servicio tiene o no tiene un permiso específico sobre un recurso, analizando todas las vinculaciones de roles heredadas y condiciones aplicadas.",
    "distractors": {
      "A": "Otorgar permisos de Owner viola gravemente las políticas de seguridad y expone la organización a riesgos.",
      "B": "Opción correcta.",
      "C": "Cloud Storage Archive es para almacenamiento frío.",
      "D": "Pub/Sub es un servicio global administrado que no se apaga arbitrariamente."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/troubleshooting-access",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-051",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Contactos Esenciales (Essential Contacts): Notificaciones de Seguridad y Facturación",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Recepción Oportuna de Alertas Críticas con Essential Contacts",
    "scenario": "Google Cloud necesita enviar notificaciones directas sobre incidentes de seguridad críticos, avisos de privacidad legal, cortes de servicio por mantenimiento y avisos de suspensión de facturación a las personas y equipos correspondientes en la empresa (ej. equipo de seguridad para incidentes, equipo legal para privacidad y equipo financiero para facturación). ¿Dónde se configuran estos destinatarios oficiales?",
    "keywords": [
      "Essential Contacts",
      "Contactos esenciales",
      "Notificaciones de seguridad y facturación",
      "Gobernanza"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "B",
        "text": "En foros públicos de discusión en Internet",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Contactos Esenciales (Essential Contacts en la consola de Google Cloud)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Essential Contacts permite a las organizaciones designar qué personas o listas de distribución de correo deben recibir notificaciones de Google Cloud categorizadas por temas (Seguridad, Privacidad, Facturación, Operaciones, Legal), garantizando que las alertas lleguen al equipo adecuado.",
    "distractors": {
      "A": "Cloud DNS gestiona nombres de dominio.",
      "B": "Las notificaciones de seguridad corporativa son confidenciales y se gestionan privadamente.",
      "C": "Opción correcta.",
      "D": "Cloud Storage Nearline almacena objetos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/managing-essential-contacts",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-052",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Log Analytics: Consultas SQL sobre Registros en Cloud Logging con BigQuery",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Análisis Avanzado de Registros con SQL utilizando Log Analytics en Cloud Logging",
    "scenario": "Un equipo de operaciones necesita ejecutar consultas SQL complejas (con funciones de agregación, uniones y filtrado multidimensional) directamente sobre sus registros de auditoría y aplicaciones en Cloud Logging para investigar un incidente de seguridad, sin tener que exportar previamente los datos a un data warehouse externo. ¿Qué capacidad nativa de Cloud Logging deben utilizar?",
    "keywords": [
      "Log Analytics",
      "Consultas SQL sobre logs",
      "Cloud Logging",
      "Motor de BigQuery en logs",
      "Investigación de incidentes"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Desactivar la recolección de logs",
        "isTrap": true,
        "trapType": "compliance_violation"
      },
      {
        "letter": "C",
        "text": "Leer manualmente 10 millones de líneas de registros con una lupa",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "D",
        "text": "Log Analytics (que permite consultar buckets de Cloud Logging utilizando el motor de SQL de BigQuery directamente en la consola de Logging)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Log Analytics integra la potencia del motor de análisis SQL de BigQuery directamente dentro de Cloud Logging, permitiendo a los ingenieros de operaciones y seguridad ejecutar consultas analíticas avanzadas, generar agregaciones y visualizar métricas sobre sus datos de registros en tiempo real.",
    "distractors": {
      "A": "Cloud Storage Archive es para copias de seguridad pasivas.",
      "B": "Desactivar logs deja a la organización a ciegas ante ataques o fallas de sistema.",
      "C": "La lectura manual de millones de registros es humanamente imposible durante un incidente activo.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/log-analytics",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-053",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Assured Workloads: Cumplimiento Normativo Gubernamental y Soberano Automatizado",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Cumplimiento Gubernamental Riguroso con Assured Workloads",
    "scenario": "Una empresa de tecnología gubernamental en Estados Unidos o Europa necesita desplegar servicios en Google Cloud cumpliendo estrictamente con regímenes normativos especiales (como FedRAMP High, DoD IL4/IL5, CJIS o soberanía europea). Requieren que Google aplique automáticamente barreras geográficas de datos, controles de acceso al personal de soporte (ciudadanos locales con verificación de antecedentes) y cifrado CMEK obligatorio. ¿Qué solución implementa estos entornos protegidos?",
    "keywords": [
      "Assured Workloads",
      "FedRAMP",
      "DoD IL4",
      "CJIS",
      "Soberanía digital",
      "Cumplimiento gubernamental"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Assured Workloads de Google Cloud",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud DNS público sin restricciones",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "C",
        "text": "Compute Engine Spot Instances sin cifrar",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "D",
        "text": "Google Fonts API",
        "isTrap": true,
        "trapType": "font_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Assured Workloads permite a las organizaciones del sector público y empresas altamente reguladas desplegar cargas de trabajo seguras y conformes en Google Cloud con guardarraíles automatizados para residencia de datos, restricciones de personal de soporte local y cumplimiento con normativas como FedRAMP, CJIS e ITAR.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud DNS es resolución de nombres de red.",
      "C": "Instancias sin cifrar violan los mandatos de seguridad gubernamentales.",
      "D": "Google Fonts es un servicio de tipografías web."
    },
    "officialDocUrl": "https://cloud.google.com/assured-workloads",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-054",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Justificaciones de Acceso a Claves (Key Access Justifications - KAJ)",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Control Soberano sobre Solicitudes de Descifrado con Key Access Justifications (KAJ)",
    "scenario": "Un banco central exige el máximo nivel de soberanía de datos: cada vez que se solicita el descifrado de datos protegidos por una clave en Cloud KMS, el sistema debe proporcionar una justificación detallada y auditable del motivo del acceso, permitiendo a la empresa denegar automáticamente el descifrado si la justificación no cumple con sus políticas. ¿Qué servicio ofrece esta capacidad pionera?",
    "keywords": [
      "Key Access Justifications",
      "KAJ",
      "Soberanía de datos",
      "Control de descifrado",
      "Cloud KMS"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Desactivar el cifrado en toda la empresa",
        "isTrap": true,
        "trapType": "compliance_violation"
      },
      {
        "letter": "B",
        "text": "Key Access Justifications (KAJ) integrado con Cloud KMS / Cloud EKM",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Publicar las claves de descifrado en redes sociales",
        "isTrap": true,
        "trapType": "absurd_security_fallacy"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Key Access Justifications (KAJ) proporciona una justificación explícita cada vez que los datos del cliente se solicitan para descifrado, otorgando a las organizaciones la capacidad de evaluar la razón de cada solicitud y bloquearla si no cumple con sus requisitos de soberanía y privacidad.",
    "distractors": {
      "A": "Desactivar el cifrado viola las leyes bancarias internacionales.",
      "B": "Opción correcta.",
      "C": "Publicar claves en redes sociales destruye la seguridad criptográfica.",
      "D": "Cloud Storage Nearline almacena objetos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/assured-workloads/key-access-justifications/docs",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-055",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Data Loss Prevention (Sensitive Data Protection): Tipos de Información (infoTypes)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Detección Específica de Datos Confidenciales mediante infoTypes en Sensitive Data Protection",
    "scenario": "Una empresa de salud en México y Estados Unidos necesita detectar automáticamente números de tarjetas de crédito, identificaciones fiscales (RFC, SSN) y correos electrónicos en gigabytes de archivos de texto. En el servicio Sensitive Data Protection (Cloud DLP), ¿cómo se denominan los detectores especializados de categorías de datos sensibles?",
    "keywords": [
      "infoTypes",
      "Sensitive Data Protection",
      "Cloud DLP",
      "Detectores de PII",
      "RFC SSN Credit Card"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine Machine Types",
        "isTrap": true,
        "trapType": "vm_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Classes",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "infoTypes (detectores predefinidos y personalizados de tipos de información sensible)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud DNS Records",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Los infoTypes son los patrones y detectores configurables que utiliza Sensitive Data Protection (Cloud DLP) para identificar elementos de datos específicos (como `CREDIT_CARD_NUMBER`, `EMAIL_ADDRESS`, `US_SOCIAL_SECURITY_NUMBER` o `MEXICO_RFC_NUMBER`).",
    "distractors": {
      "A": "Machine Types definen la cantidad de vCPUs y RAM de una máquina virtual.",
      "B": "Storage Classes definen la frecuencia de acceso y costo de objetos en Cloud Storage.",
      "C": "Opción correcta.",
      "D": "DNS Records mapean nombres de dominio a direcciones IP."
    },
    "officialDocUrl": "https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-056",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Modo de Prueba (Dry-Run Mode) en Políticas de Organización",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Validación sin Interrupciones con el Modo Dry-Run en Organization Policies",
    "scenario": "Un equipo de seguridad desea implementar una nueva política de organización estricta que restrinja la creación de recursos fuera de ciertas regiones. Antes de imponerla y arriesgarse a romper canalizaciones de producción activas, desean probar la política en un modo silencioso que registre en los logs qué recursos violarían la política sin bloquear su ejecución real. ¿Qué funcionalidad deben usar?",
    "keywords": [
      "Dry-Run Mode",
      "Organization Policies",
      "Modo de prueba",
      "Auditoría previa a la imposición",
      "Sin romper producción"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Imponer la política directamente a ciegas en producción a las 11:00 AM",
        "isTrap": true,
        "trapType": "risky_antipattern"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "Desactivar toda la seguridad de la organización",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "D",
        "text": "Modo de Prueba (Dry-Run Mode / Dry-run policy enforcement) en Políticas de Organización",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "El modo Dry-Run en Organization Policies permite a los administradores probar y auditar el impacto de nuevas restricciones de gobernanza registrando las posibles violaciones en Cloud Logging sin bloquear las operaciones de los desarrolladores ni causar tiempos de inactividad inesperados en producción.",
    "distractors": {
      "A": "Imponer políticas sin validación previa puede interrumpir despliegues y servicios críticos.",
      "B": "Cloud Storage Coldline almacena archivos pasivos.",
      "C": "Desactivar la seguridad destruye la protección corporativa.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/organization-policy/dry-run-policy",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-057",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Autenticación de Clientes y OAuth 2.0 / OpenID Connect",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Estándares Abiertos de Autenticación y Autorización en Google Cloud",
    "scenario": "Una aplicación web desarrollada en Google Cloud necesita permitir a los usuarios iniciar sesión utilizando sus cuentas de Google de forma segura, otorgando a la app únicamente acceso a su perfil básico sin compartir su contraseña con la aplicación. ¿Qué estándares abiertos de la industria utiliza Google Cloud para autenticación y autorización segura?",
    "keywords": [
      "OAuth 2.0",
      "OpenID Connect",
      "OIDC",
      "Autenticación segura",
      "Sin compartir contraseñas"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "OAuth 2.0 (para autorización) y OpenID Connect / OIDC (para autenticación federada)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "Pedir al usuario que envíe su contraseña en texto plano por mensaje de texto SMS",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "D",
        "text": "Guardar todas las contraseñas en un archivo de texto en una memoria USB pública",
        "isTrap": true,
        "trapType": "security_violation"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud y sus servicios de identidad se basan en estándares abiertos globales líderes: OAuth 2.0 para delegación de autorización de recursos y OpenID Connect (OIDC) para verificación de identidad y autenticación de usuarios de forma segura sin revelar contraseñas a aplicaciones de terceros.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud Storage Archive almacena objetos de datos pasivos.",
      "C": "Enviar contraseñas en texto plano por SMS es inseguro y vulnerable a interceptación.",
      "D": "Almacenar contraseñas en texto plano viola todas las normas de seguridad de la industria."
    },
    "officialDocUrl": "https://cloud.google.com/docs/authentication",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-058",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Autopsias Sin Culpa (Blameless Post-Mortems): El Proceso de Mejora Continua SRE",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Estructura y Objetivos de un Documento de Autopsia Sin Culpa (Post-Mortem)",
    "scenario": "Tras la resolución de una interrupción de servicio en producción, el equipo de SRE redacta un documento formal de Autopsia Sin Culpa (Blameless Post-Mortem). ¿Qué secciones y objetivos esenciales debe contener este documento según la metodología de Google?",
    "keywords": [
      "Blameless Post-Mortem",
      "SRE",
      "Línea de tiempo del incidente",
      "Causa raíz sistémica",
      "Acciones preventivas accionables"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Una carta de renuncia firmada por todo el equipo técnico.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Descripción del impacto en el negocio, cronología detallada de los hechos, análisis de causas raíz sistémicas y una lista de acciones correctivas preventivas con dueños asignados para evitar la recurrencia.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Un poema ficticio para ocultar que ocurrió el fallo.",
        "isTrap": true,
        "trapType": "unethical_antipattern"
      },
      {
        "letter": "D",
        "text": "El nombre y fotografía del ingeniero culpable para que reciba sanciones públicas de sus compañeros.",
        "isTrap": true,
        "trapType": "punitive_antipattern"
      }
    ],
    "correct": "B",
    "explanation": "Una autopsia sin culpa (Blameless Post-Mortem) en la cultura SRE documenta qué ocurrió, por qué ocurrió, el impacto en usuarios, la respuesta al incidente y, lo más importante, acciones preventivas concretas para fortalecer el sistema sin buscar culpables individuales.",
    "distractors": {
      "A": "Las renuncias masivas destruyen el conocimiento operativo de la empresa.",
      "B": "Opción correcta.",
      "C": "Ocultar la verdad técnica impide aprender y mejorar la confiabilidad del servicio.",
      "D": "Señalar y culpar individuos genera miedo, destruye la transparencia y oculta fallos futuros."
    },
    "officialDocUrl": "https://cloud.google.com/blog/products/devops-sre/why-you-should-practice-blameless-postmortems",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-059",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Ingeniería del Caos y Simulacros de Recuperación ante Desastres (DiRT - Disaster Recovery Training)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Entrenamiento Operativo ante Desastres con el Programa DiRT de Google",
    "scenario": "Google lleva a cabo anualmente eventos conocidos como DiRT (Disaster Recovery Training), donde se simulan fallas catastróficas del mundo real (como cortes masivos de energía en ciudades enteras o terremotos) para probar la capacidad de respuesta de sus sistemas y equipos humanos. ¿Por qué es vital que las empresas realicen simulacros periódicos similares en la nube?",
    "keywords": [
      "DiRT",
      "Disaster Recovery Training",
      "Ingeniería del caos",
      "Pruebas de conmutación",
      "Resiliencia"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Porque los simulacros son una forma de quemar servidores viejos intencionalmente.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Porque Google Cloud exige pagar una multa si no se apaga un centro de datos al mes.",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "C",
        "text": "Porque un plan de recuperación ante desastres no probado en la práctica no garantiza la continuidad del negocio; los simulacros validan que los procedimientos de conmutación, la automatización y la respuesta del equipo funcionen bajo presión real.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "No tiene ningún valor; es mejor esperar a que ocurra un desastre real para improvisar.",
        "isTrap": true,
        "trapType": "dangerous_premise"
      }
    ],
    "correct": "C",
    "explanation": "Los ejercicios DiRT y las pruebas de ingeniería del caos permiten descubrir debilidades latentes, dependencias ocultas y fallas en los manuales de procedimientos (runbooks) antes de que ocurra una catástrofe real, asegurando que la organización esté verdaderamente preparada para recuperarse.",
    "distractors": {
      "A": "Los simulacros en la nube se realizan mediante software y pruebas controladas, no destruyendo hardware físico.",
      "B": "Google no impone multas arbitrarias por pruebas operativas.",
      "C": "Opción correcta.",
      "D": "Improvisar durante una emergencia catastrófica suele resultar en pérdidas financieras graves y fallos irreparables."
    },
    "officialDocUrl": "https://cloud.google.com/blog/products/devops-sre/how-google-uses-chaos-engineering",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D4-060",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cultura FinOps: Prácticas de Optimización Financiera Continua en la Nube",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Las Tres Fases del Ciclo de Vida de FinOps: Informar, Optimizar y Operar",
    "scenario": "Una corporación adopta la disciplina de FinOps (Cloud Financial Operations) para maximizar el valor de negocio de sus inversiones en Google Cloud. ¿Cuáles son las tres fases iterativas fundamentales del marco FinOps?",
    "keywords": [
      "FinOps",
      "Informar",
      "Optimizar",
      "Operar",
      "Inform Optimize Operate",
      "Cultura financiera"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Coldline para todo el ciclo de vida",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Comprar servidores físicos, usarlos 20 años y tirarlos a la basura.",
        "isTrap": true,
        "trapType": "legacy_hardware_cycle"
      },
      {
        "letter": "C",
        "text": "Ignorar la facturación, no pagar y esperar que no cancelen el servicio.",
        "isTrap": true,
        "trapType": "irresponsible_antipattern"
      },
      {
        "letter": "D",
        "text": "Informar (visibilidad de costos y atribución), Optimizar (identificar ahorros y dimensionamiento) y Operar (alinear procesos continuos y gobernanza entre finanzas e ingeniería).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "El marco de la FinOps Foundation establece tres fases continuas e iterativas: (1) Informar (crear visibilidad, etiquetado y presupuestos), (2) Optimizar (aprovechar CUDs, SUDs y redimensionamiento de recursos ociosos), y (3) Operar (integrar métricas de costo por unidad de negocio en las decisiones diarias de ingeniería).",
    "distractors": {
      "A": "Cloud Storage Coldline es para copias de seguridad de datos.",
      "B": "Describe el ciclo tradicional rígido de hardware físico de centros de datos antiguos.",
      "C": "No pagar facturas conlleva la suspensión de los servicios en la nube.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/learn/what-is-finops",
    "blockId": "BLOCK-4"
  },
  {
    "id": "CDL-D1-021",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Seguridad y Postura de Riesgo en la Nube Pública",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Postura de Seguridad y Escala de Protección en Google Cloud",
    "scenario": "El Consejo de Administración de una aseguradora expresa preocupación sobre si sus datos estarán más seguros en la nube pública de Google que en su propio centro de datos corporativo. ¿Qué argumento técnico fundamenta la alta seguridad de Google Cloud?",
    "keywords": [
      "Seguridad de nube",
      "Escala de protección",
      "Cifrado predeterminado",
      "Infraestructura segura",
      "Expertos en seguridad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google invierte miles de millones de dólares en seguridad de infraestructura multicapa, emplea a miles de expertos globales, cifra los datos de forma predeterminada tanto en reposo como en tránsito y somete sus servicios a rigurosas auditorías de cumplimiento independientes.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Los centros de datos locales pequeños siempre tienen mayor protección porque los servidores se pueden tocar físicamente.",
        "isTrap": true,
        "trapType": "tactile_fallacy"
      },
      {
        "letter": "C",
        "text": "Google Cloud garantiza contractualmente que ningún atacante podrá intentar un ataque informático en el mundo.",
        "isTrap": true,
        "trapType": "unrealistic_promise"
      },
      {
        "letter": "D",
        "text": "La nube no implementa seguridad porque confía ciegamente en todos los usuarios de Internet.",
        "isTrap": true,
        "trapType": "false_premise"
      }
    ],
    "correct": "A",
    "explanation": "La infraestructura física y lógica de Google Cloud ofrece una escala de protección que pocas empresas individuales pueden replicar: chips de seguridad Titan en hardware propietario, cifrado automático por defecto, defensa contra DDoS global y certificaciones de cumplimiento internacionales continuas.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "La proximidad física de un servidor no garantiza protección contra ataques de red, malware o errores de configuración.",
      "C": "Ningún proveedor puede evitar que existan atacantes; lo que se garantiza es la robustez y capacidad de defensa de la infraestructura.",
      "D": "Google Cloud utiliza modelos de Zero Trust y controles de seguridad exhaustivos en todas las capas."
    },
    "officialDocUrl": "https://cloud.google.com/security",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D1-022",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Desarrollo Ágil de Productos vs Enfoque en Cascada",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Sinergia entre Metodologías Ágiles y la Nube",
    "scenario": "Una empresa de medios digitales solía planificar proyectos de software con especificaciones rígidas de dos años utilizando el modelo en cascada (Waterfall). Al migrar a Google Cloud, ¿por qué es fundamental adoptar metodologías de desarrollo ágiles?",
    "keywords": [
      "Metodologías ágiles",
      "Desarrollo iterativo",
      "Flexibilidad",
      "Feedback rápido",
      "Adaptabilidad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Porque Google Cloud bloquea automáticamente los proyectos que utilizan diagramas de Gantt.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Porque la nube permite realizar experimentos rápidos, iterar sobre productos mínimos viables (MVP) y adaptarse con agilidad a la retroalimentación continua del usuario sin grandes compromisos iniciales de hardware.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Porque las metodologías ágiles garantizan que ningún desarrollador cometa errores de código.",
        "isTrap": true,
        "trapType": "unrealistic_promise"
      },
      {
        "letter": "D",
        "text": "Porque la nube solo funciona si todos los requisitos de software se definen irrevocablemente 5 años antes.",
        "isTrap": true,
        "trapType": "opposite_premise"
      }
    ],
    "correct": "B",
    "explanation": "La elasticidad y el aprovisionamiento instantáneo de la nube se complementan naturalmente con el desarrollo ágil: permiten lanzar versiones tempranas (MVPs), validar hipótesis con usuarios reales y ajustar la dirección del producto con mínimo costo y desperdicio.",
    "distractors": {
      "A": "Google Cloud es agnóstico a las herramientas de gestión de proyectos que use el cliente.",
      "B": "Opción correcta.",
      "C": "Las metodologías ágiles no eliminan los errores, pero permiten detectarlos y corregirlos rápidamente.",
      "D": "Exigir requisitos inmutables a 5 años contradice por completo la velocidad y flexibilidad del mercado digital."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/devops",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D1-023",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Experiencia de Cliente (CX) Personalizada con IA",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Hiper-Personalización de la Experiencia del Cliente mediante Nube e IA",
    "scenario": "Una tienda en línea de moda desea ofrecer recomendaciones personalizadas en tiempo real a cada usuario según su historial de navegación y compras, además de soporte al cliente automatizado con lenguaje natural. ¿Cómo contribuye Google Cloud a este objetivo?",
    "keywords": [
      "Experiencia de cliente",
      "Personalización",
      "Recomendaciones",
      "Vertex AI",
      "Contact Center AI"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Proporciona servicios de inteligencia artificial como Vertex AI Search and Conversation y Contact Center AI para generar recomendaciones contextuales e interacciones conversacionales inteligentes en tiempo real.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Obliga a los clientes a completar una encuesta de 100 preguntas obligatorias antes de permitirles ver la página web.",
        "isTrap": true,
        "trapType": "friction_antipattern"
      },
      {
        "letter": "C",
        "text": "Envía un catálogo físico impreso semanal por correo postal a la dirección de cada visitante del sitio.",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "D",
        "text": "Muestra exactamente los mismos tres productos genéricos a todos los usuarios del mundo sin importar sus intereses.",
        "isTrap": true,
        "trapType": "unpersonalized_antipattern"
      }
    ],
    "correct": "A",
    "explanation": "Las soluciones de IA de Google Cloud permiten procesar señales de comportamiento en tiempo real a escala masiva, ofreciendo recomendaciones altamente precisas y agentes virtuales conversacionales que elevan la satisfacción y fidelidad del cliente.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Imponer fricción excesiva al usuario daña gravemente las tasas de conversión y la retención.",
      "C": "Los catálogos impresos carecen de personalización dinámica en tiempo real y tienen altos costos ecológicos y logísticos.",
      "D": "El contenido estático genérico no aprovecha los datos ni personaliza la experiencia de compra."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/retail",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D1-024",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Estrategia Cloud-First vs Cloud-Native",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferenciación entre Estrategia Cloud-First y Cloud-Native",
    "scenario": "En una reunión de arquitectura de TI, se discute la diferencia entre una estrategia 'Cloud-First' y una arquitectura 'Cloud-Native'. ¿Cuál es la distinción conceptual clave?",
    "keywords": [
      "Cloud-First",
      "Cloud-Native",
      "Microservicios",
      "Contenedores",
      "Serverless"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Ambos términos son sinónimos exactos de la instalación de máquinas virtuales Windows en servidores locales.",
        "isTrap": true,
        "trapType": "onprem_confusion"
      },
      {
        "letter": "B",
        "text": "'Cloud-First' establece la prioridad de evaluar soluciones en la nube antes que locales para nuevas iniciativas, mientras que 'Cloud-Native' diseña aplicaciones específicamente para aprovechar al máximo las capacidades de la nube (microservicios, contenedores, serverless y autoescalado).",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "'Cloud-Native' se refiere únicamente a migrar servidores antiguos mediante lift-and-shift sin cambiar ninguna línea de código.",
        "isTrap": true,
        "trapType": "rehost_confusion"
      },
      {
        "letter": "D",
        "text": "'Cloud-First' prohíbe el uso de Internet, mientras que 'Cloud-Native' significa comprar hardware físico directamente de Google.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "Cloud-First es una política estratégica de aprovisionamiento de TI; Cloud-Native es un patrón de diseño arquitectónico que aprovecha microservicios, contenedores, servicios gestionados y elasticidad nativa para obtener máxima resiliencia y velocidad.",
    "distractors": {
      "A": "Ni Cloud-First ni Cloud-Native se refieren a alojar máquinas virtuales en servidores locales corporativos.",
      "B": "Opción correcta.",
      "C": "El lift-and-shift es una estrategia de rehosting (Cloud-Migrated), no una arquitectura nativa de nube (Cloud-Native).",
      "D": "Ambas definiciones son totalmente ficticias e incoherentes con la tecnología de nube."
    },
    "officialDocUrl": "https://cloud.google.com/learn/what-is-cloud-native",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D1-025",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Optimización de Cadena de Suministro con Visibilidad en la Nube",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Visibilidad de Extremo a Extremo en Cadenas de Suministro Complejas",
    "scenario": "Una empresa de manufactura global sufre retrasos constantes en sus líneas de ensamblaje porque no tiene visibilidad en tiempo real sobre la ubicación de componentes transportados por marítimo y terrestre. ¿Cómo ayuda Google Cloud a resolver este desafío?",
    "keywords": [
      "Cadena de suministro",
      "Supply Chain",
      "IoT",
      "Visibilidad en tiempo real",
      "Analítica predictiva"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Reemplazando los barcos de carga por servidores de cómputo en la nube para transportar mercancía física.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Eliminando la necesidad de fabricar componentes físicos mediante simulaciones virtuales estáticas.",
        "isTrap": true,
        "trapType": "unrealistic_promise"
      },
      {
        "letter": "C",
        "text": "Ingiriendo datos de sensores IoT y telemetría de transporte en tiempo real a través de Pub/Sub y BigQuery para predecir cuellos de botella y optimizar rutas de entrega.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Enviando faxes diarios a todos los puertos del mundo para registrar llegadas en libros contables.",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud permite conectar datos de sensores de flotas, inventarios de almacenes y condiciones climáticas en una plataforma de streaming y analítica, proporcionando visibilidad integral de la cadena de suministro y mantenimiento predictivo.",
    "distractors": {
      "A": "La nube no transporta objetos físicos; proporciona inteligencia de datos para coordinar el transporte.",
      "B": "La simulación no reemplaza la producción física de piezas requeridas para el ensamblaje real.",
      "C": "Opción correcta.",
      "D": "El uso de faxes manuales es un síntoma de obsolescencia que causa los retrasos que se buscan eliminar."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/supply-chain",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-061",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Vertex AI Search and Conversation: Búsqueda y Asistentes Conversacionales",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Implementación Rápida de Búsqueda Semántica Empresarial y Chatbots con Vertex AI Search",
    "scenario": "Una cadena de tiendas departamentales desea agregar a su sitio web un motor de búsqueda semántica similar a Google y un asistente de chat impulsado por IA generativa que responda preguntas sobre su catálogo de 100,000 productos y políticas de devolución. Quieren desplegarlo en pocos días sin entrenar modelos de lenguaje complejos desde cero. ¿Qué solución deben utilizar?",
    "keywords": [
      "Vertex AI Search and Conversation",
      "Búsqueda semántica",
      "GenAI App Builder",
      "Chatbots empresariales",
      "Rápido despliegue"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine Sole-Tenant Nodes",
        "isTrap": true,
        "trapType": "infrastructure_mismatch"
      },
      {
        "letter": "B",
        "text": "Contratar a 100 operadores para responder cada búsqueda en una hoja de Excel",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Cloud Interconnect Partner",
        "isTrap": true,
        "trapType": "networking_mismatch"
      },
      {
        "letter": "D",
        "text": "Vertex AI Search and Conversation (anteriormente Generative AI App Builder)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Vertex AI Search and Conversation permite a las empresas crear rápidamente aplicaciones de búsqueda multimodal de nivel Google y agentes conversacionales de IA generativa conectados a sus propios datos empresariales de forma segura y con mínimo código.",
    "distractors": {
      "A": "Sole-Tenant Nodes son servidores físicos dedicados para cumplir con licencias y aislamiento de hardware.",
      "B": "El procesamiento manual es lento, costoso y no ofrece búsqueda interactiva en tiempo real.",
      "C": "Cloud Interconnect es conectividad física de telecomunicaciones.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/generative-ai-app-builder",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-062",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Gemini para Google Cloud (Duet AI): Asistencia Inteligente en la Nube",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aceleración del Desarrollo y Operaciones con Gemini para Google Cloud",
    "scenario": "Los desarrolladores de software y operadores de infraestructura de una empresa desean asistencia de IA integrada en la consola de Google Cloud y sus entornos de desarrollo (IDEs) para generar código, escribir consultas SQL en BigQuery, solucionar errores de despliegue y optimizar configuraciones de seguridad. ¿Qué producto proporciona este asistente inteligente?",
    "keywords": [
      "Gemini para Google Cloud",
      "Duet AI",
      "Asistente de código",
      "Optimización de consultas",
      "Asistente de operaciones"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Gemini para Google Cloud (anteriormente Duet AI)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud NAT Gateway",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Logging Agent de 2012 sin soporte",
        "isTrap": true,
        "trapType": "obsolete_tool"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Standard",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Gemini para Google Cloud es el colaborador impulsado por IA generativa que asiste a desarrolladores, administradores de nube y analistas de datos en la redacción de código, generación de SQL en BigQuery, resolución de problemas de infraestructura y cumplimiento de mejores prácticas de seguridad.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud NAT permite salida a Internet para IPs privadas.",
      "C": "Un agente obsoleto de registros no tiene capacidades de inteligencia artificial conversacional.",
      "D": "Cloud Storage almacena archivos, no genera código ni asiste a desarrolladores."
    },
    "officialDocUrl": "https://cloud.google.com/gemini/docs",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-063",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Speech-to-Text: Separación de Interlocutores (Speaker Diarization)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Transcripción con Separación de Voces en Reuniones usando Speaker Diarization",
    "scenario": "Una empresa de consultoría graba reuniones entre múltiples participantes (médicos y pacientes, o asesores y clientes). Necesitan una transcripción automática que no solo convierta las palabras en texto, sino que identifique claramente quién dijo cada frase (por ejemplo, 'Interlocutor 1: Buenos días; Interlocutor 2: Hola, doctor'). ¿Qué función de Cloud Speech-to-Text deben activar?",
    "keywords": [
      "Cloud Speech-to-Text",
      "Speaker Diarization",
      "Separación de hablantes",
      "Transcripción de reuniones",
      "Diarización"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Spanner Read Replicas",
        "isTrap": true,
        "trapType": "database_mismatch"
      },
      {
        "letter": "B",
        "text": "Diarización de interlocutores (Speaker Diarization) en Cloud Speech-to-Text",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud VPN con túneles BGP",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "D",
        "text": "Subir el audio a un bucket bloqueado y borrarlo",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "La diarización de interlocutores (Speaker Diarization) en Cloud Speech-to-Text reconoce automáticamente las diferencias de voz en el audio y asigna etiquetas numeradas a cada hablante individual a lo largo de la transcripción.",
    "distractors": {
      "A": "Cloud Spanner es una base de datos relacional para transacciones, no procesa audio.",
      "B": "Opción correcta.",
      "C": "Cloud VPN conecta redes seguras, no analiza señales de audio.",
      "D": "Eliminar el archivo de audio impide realizar cualquier tipo de transcripción."
    },
    "officialDocUrl": "https://cloud.google.com/speech-to-text/docs/diarization",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-064",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Translation Hub: Plataforma de Traducción de Documentos para Empresas",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Traducción Empresarial de Documentos Complejos con Preservación de Formato (Translation Hub)",
    "scenario": "Una firma internacional de arquitectura necesita traducir manuales técnicos y presentaciones en PDF y PowerPoint a 15 idiomas manteniendo exactamente el diseño visual original, las tablas y las imágenes, permitiendo además que traductores humanos revisen y ajusten los textos traducidos por IA. ¿Qué portal empresarial de autoservicio de Google Cloud está diseñado para este fin?",
    "keywords": [
      "Translation Hub",
      "Traducción de documentos",
      "Preservación de formato PDF",
      "Revisión humana",
      "Autoservicio empresarial"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Cloud Billing Budgets",
        "isTrap": true,
        "trapType": "billing_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Load Balancing",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "C",
        "text": "Translation Hub",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Compute Engine Spot Instances",
        "isTrap": true,
        "trapType": "vm_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Translation Hub es un portal de traducción de documentos de nivel empresarial y autoservicio que utiliza IA para traducir documentos completos (PDF, DOCX, PPTX) preservando el formato original y permitiendo flujos de trabajo de pos-edición humana.",
    "distractors": {
      "A": "Billing Budgets establece alertas de gasto financiero del proyecto.",
      "B": "Cloud Load Balancing gestiona el balanceo de tráfico de red.",
      "C": "Opción correcta.",
      "D": "Spot Instances son máquinas virtuales temporales de bajo costo."
    },
    "officialDocUrl": "https://cloud.google.com/translation-hub/docs",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-065",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Document AI: Extractor Personalizado (Custom Document Extractor)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Creación de Extractores Personalizados para Documentos Especializados con Document AI",
    "scenario": "Una empresa farmacéutica procesa reportes clínicos altamente especializados con formatos propios que ningún procesador de IA preentrenado reconoce. Cuentan con 500 ejemplos etiquetados de estos reportes y desean entrenar un modelo específico para extraer campos farmacológicos únicos. ¿Qué componente de Document AI deben utilizar?",
    "keywords": [
      "Document AI Custom Extractor",
      "Formatos especializados",
      "Modelos personalizados",
      "Extracción de campos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "networking_mismatch"
      },
      {
        "letter": "B",
        "text": "Google Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "C",
        "text": "Invoice Parser estándar sin modificar",
        "isTrap": true,
        "trapType": "prebuilt_model_mismatch"
      },
      {
        "letter": "D",
        "text": "Custom Document Extractor (CDE) en Document AI Workbench",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Custom Document Extractor en Document AI Workbench permite a las empresas entrenar y evaluar modelos personalizados para extraer campos y entidades específicos de tipos de documentos no estándar o propios de su industria utilizando sus propios documentos de entrenamiento etiquetados.",
    "distractors": {
      "A": "Cloud Interconnect es conectividad física de redes.",
      "B": "Cloud DNS es resolución de dominios de Internet.",
      "C": "Invoice Parser está preconfigurado exclusivamente para facturas comerciales comunes y no reconoce campos médicos especializados.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/document-ai/docs/workbench/overview",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-066",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Vertex AI Feature Store: Repositorio Central de Características de ML",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Reutilización y Consistencia de Características en Machine Learning con Vertex AI Feature Store",
    "scenario": "Varios equipos de ciencia de datos en un banco calculan de forma independiente características de clientes (como 'saldo promedio en los últimos 30 días') usando código ligeramente diferente, lo que genera inconsistencias entre los modelos de fraude y los modelos de riesgo crediticio. ¿Qué solución centralizada resuelve este problema?",
    "keywords": [
      "Vertex AI Feature Store",
      "Almacén de características",
      "Consistencia de variables",
      "Reutilización en MLOps",
      "Entrenamiento e inferencia"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Vertex AI Feature Store",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "archive_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud VPN",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "D",
        "text": "Google Compute Engine Bare Metal",
        "isTrap": true,
        "trapType": "hardware_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Vertex AI Feature Store es un repositorio administrado y centralizado que permite a las organizaciones almacenar, descubrir, compartir y servir características de Machine Learning de forma unificada tanto para entrenamiento por lotes como para inferencia en tiempo real de baja latencia.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Archive Storage es para retención fría de largo plazo y no proporciona servicio de características en tiempo real con baja latencia.",
      "C": "Cloud VPN gestiona redes seguras punto a punto.",
      "D": "Bare Metal son servidores físicos sin software de gobernanza de machine learning."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/featurestore/overview",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-067",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Explainable AI: Explicabilidad y Atribución de Características en ML",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Transparencia y Justificación de Decisiones de Modelos con Vertex Explainable AI",
    "scenario": "Una entidad financiera utiliza un modelo de Machine Learning para aprobar o rechazar solicitudes de crédito hipotecario. Los reguladores bancarios exigen que el banco explique exactamente qué factores (ingresos, historial crediticio, edad, monto) influyeron en la decisión de rechazo para cada solicitante individual. ¿Qué capacidad de Google Cloud proporciona estas atribuciones de características?",
    "keywords": [
      "Vertex Explainable AI",
      "Atribuciones de características",
      "Explicabilidad de modelos",
      "Cumplimiento regulatorio",
      "Feature Attributions"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Armor Security Policies",
        "isTrap": true,
        "trapType": "waf_mismatch"
      },
      {
        "letter": "B",
        "text": "Vertex Explainable AI (que calcula y muestra las atribuciones de características para cada predicción)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Decir al regulador que los modelos de inteligencia artificial son 'cajas negras' impenetrables y que no es posible saber nada",
        "isTrap": true,
        "trapType": "regulatory_violation"
      },
      {
        "letter": "D",
        "text": "Desinstalar todos los modelos y usar una moneda al aire para decidir",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "Vertex Explainable AI ayuda a comprender las decisiones de los modelos de Machine Learning al cuantificar la contribución y peso relativo de cada característica (Feature Attribution) en el resultado de la predicción, facilitando la auditoría, la equidad y el cumplimiento regulatorio.",
    "distractors": {
      "A": "Cloud Armor protege aplicaciones web contra ataques de seguridad perimetral.",
      "B": "Opción correcta.",
      "C": "Afirmar que es una caja negra sin explicación viola las regulaciones bancarias de protección al consumidor y conlleva sanciones severas.",
      "D": "Decidir al azar destruye la solvencia del banco y viola las normas financieras."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/explainable-ai/overview",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-068",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Tarjetas de Modelos (Model Cards) para IA Responsable",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Documentación Transparente del Rendimiento y Limitaciones con Model Cards",
    "scenario": "Un equipo de investigación de IA publica un nuevo modelo de detección de anomalías para hospitales. Para cumplir con las mejores prácticas de IA Responsable y transparencia técnica, desean adjuntar un documento estandarizado que describa el uso previsto del modelo, los datos con los que fue entrenado, sus métricas de rendimiento y sus limitaciones éticas y operativas conocidas. ¿Cómo se denomina este artefacto en Google Cloud?",
    "keywords": [
      "Model Cards",
      "Tarjetas de modelos",
      "IA Responsable",
      "Transparencia de modelos",
      "Limitaciones de ML"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Certificado SSL de servidor web",
        "isTrap": true,
        "trapType": "security_cert_mismatch"
      },
      {
        "letter": "B",
        "text": "Contraseña maestra de la base de datos",
        "isTrap": true,
        "trapType": "credential_mismatch"
      },
      {
        "letter": "C",
        "text": "Tarjeta de Modelo (Model Card)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Factura de compra de hardware físico",
        "isTrap": true,
        "trapType": "financial_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Las Model Cards (Tarjetas de Modelos) son documentos estandarizados que proporcionan información detallada y estructurada sobre el funcionamiento, propósitos previstos, limitaciones, consideraciones éticas y métricas de evaluación de un modelo de Machine Learning, promoviendo la transparencia y el uso responsable de la IA.",
    "distractors": {
      "A": "Un certificado SSL cifra el tráfico de red web HTTPS, no documenta modelos de ML.",
      "B": "Una contraseña es una clave de autenticación, no documentación metodológica.",
      "C": "Opción correcta.",
      "D": "Una factura de hardware no contiene detalles sobre el comportamiento algorítmico ni consideraciones éticas."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/model-registry/model-cards",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-069",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Almacenamiento de Bloques vs Almacenamiento de Objetos vs Almacenamiento de Archivos",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Mapeo de Tipos de Almacenamiento: Persistent Disk, Cloud Storage y Filestore",
    "scenario": "Un ingeniero de infraestructura debe seleccionar el tipo de almacenamiento en Google Cloud para tres casos: (1) El disco de arranque de una máquina virtual, (2) Un repositorio global para almacenar millones de imágenes y PDFs accesibles vía HTTP, y (3) Un sistema de archivos compartido NFS accesible simultáneamente por múltiples servidores Linux. ¿Cuál es la asignación correcta?",
    "keywords": [
      "Persistent Disk",
      "Cloud Storage",
      "Filestore",
      "Almacenamiento de bloques",
      "Objetos",
      "Archivos NFS"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "(1) Cloud Storage, (2) Filestore, (3) Persistent Disk",
        "isTrap": true,
        "trapType": "misaligned_storage_types"
      },
      {
        "letter": "B",
        "text": "(1) Filestore, (2) Persistent Disk, (3) Cloud Storage",
        "isTrap": true,
        "trapType": "misaligned_storage_types"
      },
      {
        "letter": "C",
        "text": "Usar memorias RAM temporales volátiles para los tres casos",
        "isTrap": true,
        "trapType": "volatile_antipattern"
      },
      {
        "letter": "D",
        "text": "(1) Persistent Disk (bloques), (2) Cloud Storage (objetos), (3) Filestore (archivos NFS)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Persistent Disk proporciona almacenamiento de bloques de alto rendimiento para máquinas virtuales; Cloud Storage es almacenamiento de objetos altamente escalable y económico accesible mediante APIs web; y Filestore ofrece sistemas de archivos NFS totalmente administrados para aplicaciones compartidas tradicionales.",
    "distractors": {
      "A": "Cloud Storage no puede usarse como disco de arranque nativo de SO de una VM; Filestore no es un almacén masivo de objetos HTTP económicos.",
      "B": "Filestore no es el disco de arranque estándar de VMs; Persistent Disk no es accesible globalmente por API web REST para millones de clientes.",
      "C": "El almacenamiento volátil en RAM pierde todos los datos al apagarse o reiniciarse el servidor.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/products/storage",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-070",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Data Fusion: Integración Gráfica de Datos (ETL/ELT)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Construcción de Pipelines ETL Gráficos sin Código con Cloud Data Fusion",
    "scenario": "Una empresa requiere integrar datos provenientes de 20 fuentes dispares (bases de datos locales, Salesforce, SAP y archivos planos) y transformarlos antes de cargarlos en BigQuery. El equipo de ingenieros de datos prefiere una interfaz visual de arrastrar y soltar (drag-and-drop) con cientos de conectores preconstruidos basada en el proyecto de código abierto CDAP. ¿Qué servicio administrado deben desplegar?",
    "keywords": [
      "Cloud Data Fusion",
      "ETL visual",
      "CDAP",
      "Conectores preconstruidos",
      "Integración de datos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Data Fusion",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Domains",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Shell",
        "isTrap": true,
        "trapType": "cli_mismatch"
      },
      {
        "letter": "D",
        "text": "Compute Engine Preemptible Instances",
        "isTrap": true,
        "trapType": "vm_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Data Fusion es un servicio de integración de datos sin servidor y completamente administrado basado en CDAP, que ofrece una interfaz gráfica de usuario para construir canalizaciones ETL/ELT complejas con una amplia biblioteca de transformaciones y conectores preconfigurados.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud Domains es un servicio para comprar y registrar nombres de dominio web.",
      "C": "Cloud Shell es una consola de línea de comandos en el navegador.",
      "D": "Preemptible Instances son máquinas virtuales temporales con descuento, no una herramienta gráfica de integración de datos."
    },
    "officialDocUrl": "https://cloud.google.com/data-fusion/docs",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-071",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Bigtable: Diseño de Claves de Fila (Row Keys) para Evitar Puntos Calientes (Hotspotting)",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Prevención de Sobrecarga de Nodos (Hotspotting) en Cloud Bigtable",
    "scenario": "Una empresa de monitoreo de flotas ingiere datos en Cloud Bigtable. Observan que un solo nodo del clúster está al 100% de CPU mientras los demás nodos están inactivos, debido a que están usando una marca de tiempo secuencial pura (timestamp) como clave de fila principal. ¿Por qué ocurre esto y cómo se resuelve según las mejores prácticas?",
    "keywords": [
      "Cloud Bigtable",
      "Hotspotting",
      "Puntos calientes",
      "Diseño de Row Key",
      "Distribución de carga"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Se resuelve apagando todos los nodos del clúster y pasando los datos a hojas de Excel.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Ocurre hotspotting porque las claves secuenciales escriben en el mismo rango contiguo de nodos; se resuelve anteponiendo un identificador de alta cardinalidad (como el ID del vehículo) a la clave de fila para distribuir las escrituras uniformemente entre todos los nodos.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Se resuelve duplicando el costo de las licencias de software de base de datos.",
        "isTrap": true,
        "trapType": "unrelated_financial_trap"
      },
      {
        "letter": "D",
        "text": "Ocurre porque Bigtable no soporta más de una consulta por hora en toda la región.",
        "isTrap": true,
        "trapType": "false_limitation"
      }
    ],
    "correct": "B",
    "explanation": "En Cloud Bigtable, las tablas se ordenan lexicográficamente por la clave de fila (Row Key). Usar marcas de tiempo secuenciales puras envía todas las escrituras a una sola partición/nodo (hotspotting). Diseñar claves de fila que comiencen con prefijos distribuidos (como `vehicle_id#timestamp`) distribuye el tráfico equitativamente entre todos los nodos.",
    "distractors": {
      "A": "Excel no puede procesar la escala ni la velocidad de ingestión de flotas vehiculares.",
      "B": "Opción correcta.",
      "C": "Bigtable es un servicio administrado sin costos de licencias propietarias tradicionales; el problema es de diseño de clave de datos, no financiero.",
      "D": "Bigtable gestiona millones de consultas por segundo de manera distribuida."
    },
    "officialDocUrl": "https://cloud.google.com/bigtable/docs/schema-design",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-072",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Migración de Almacenes de Datos Legados a BigQuery",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Beneficios de la Migración de Teradata u Oracle Exadata a BigQuery",
    "scenario": "Un banco internacional gasta millones de dólares al año en licencias de hardware y mantenimiento para su almacén de datos tradicional local (Teradata/Exadata). Al migrar a BigQuery, ¿cuáles son los beneficios operativos y económicos inmediatos?",
    "keywords": [
      "Migración a BigQuery",
      "Teradata / Exadata",
      "Sin gestión de infraestructura",
      "Escalabilidad elástica",
      "TCO reducido"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Obligación de comprar servidores físicos idénticos a los de Teradata para instalarlos en las oficinas de Google.",
        "isTrap": true,
        "trapType": "colocation_confusion"
      },
      {
        "letter": "B",
        "text": "Pérdida de la capacidad de ejecutar consultas SQL sobre los datos.",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "C",
        "text": "Eliminación de la administración y aprovisionamiento de hardware, escalabilidad elástica instantánea sin tiempos de inactividad, mantenimiento automático de software y reducción sustancial del Costo Total de Propiedad (TCO).",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Requisito de tener un operador humano conectado manualmente a cada consulta analítica.",
        "isTrap": true,
        "trapType": "manual_overhead"
      }
    ],
    "correct": "C",
    "explanation": "BigQuery es una plataforma analítica completamente serverless donde Google administra el aprovisionamiento, mantenimiento, replicación y seguridad, permitiendo a las empresas migrar de almacenes propietarios costosos a un modelo de pago por uso altamente escalable.",
    "distractors": {
      "A": "En la nube no se compran servidores propietarios para colocación en las instalaciones de Google.",
      "B": "BigQuery es totalmente compatible con el estándar ANSI SQL.",
      "C": "Opción correcta.",
      "D": "BigQuery es 100% autónomo y ejecuta consultas de forma programática sin intervención humana."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/migration-to-bigquery",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-073",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Seguridad de Datos: Cifrado en Reposo y en Tránsito",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Cifrado Predeterminado de Datos en Todos los Servicios de Almacenamiento de Google Cloud",
    "scenario": "El oficial de seguridad de una empresa pregunta qué configuraciones adicionales de cifrado deben activarse en Cloud Storage, BigQuery y Cloud SQL para asegurar que los datos no se almacenen en texto plano en los discos físicos de Google. ¿Cuál es la respuesta correcta?",
    "keywords": [
      "Cifrado en reposo",
      "Cifrado predeterminado",
      "AES-256",
      "Cifrado en tránsito",
      "Seguridad por defecto"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Solo los datos de prueba se cifran; los datos de producción permanecen en texto plano visible para cualquiera.",
        "isTrap": true,
        "trapType": "dangerous_premise"
      },
      {
        "letter": "B",
        "text": "El cliente debe pagar una tarifa de $10,000 mensuales por cada archivo para activar el cifrado.",
        "isTrap": true,
        "trapType": "untrue_cost_claim"
      },
      {
        "letter": "C",
        "text": "Los datos nunca se cifran en la nube a menos que el cliente programe su propio algoritmo de cifrado en C++.",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "D",
        "text": "Google Cloud cifra automáticamente todos los datos de los clientes en reposo (utilizando AES-256) y en tránsito de forma predeterminada sin requerir ninguna acción o costo adicional por parte del cliente.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Por diseño de seguridad en profundidad, Google Cloud cifra todos los datos de los clientes en reposo de forma predeterminada utilizando el estándar de cifrado avanzado AES-256 con claves gestionadas por Google, además de cifrar automáticamente los datos en tránsito sobre redes fuera de las instalaciones físicas de Google.",
    "distractors": {
      "A": "Todos los datos de todos los entornos están cifrados con los mismos estándares rigurosos de seguridad.",
      "B": "El cifrado predeterminado es gratuito e inherente a toda la plataforma.",
      "C": "Google gestiona el cifrado de forma transparente sin requerir desarrollo de código propio.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/security/encryption-at-rest",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-074",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud KMS: Llaves Gestionadas por el Cliente (CMEK) vs Llaves Suministradas por el Cliente (CSEK)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Control de Llaves Criptográficas con CMEK y Cloud KMS",
    "scenario": "Una entidad bancaria está sujeta a normativas que le exigen tener control directo sobre el ciclo de vida, rotación y revocación inmediata de las claves de cifrado que protegen sus bases de datos en BigQuery y Cloud Storage. ¿Qué solución de Google Cloud satisface este requerimiento?",
    "keywords": [
      "Cloud KMS",
      "CMEK",
      "Customer-Managed Encryption Keys",
      "Rotación de llaves",
      "Control criptográfico"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Customer-Managed Encryption Keys (CMEK) administradas a través de Cloud Key Management Service (Cloud KMS)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Desactivar el cifrado para evitar tener que gestionar llaves",
        "isTrap": true,
        "trapType": "compliance_violation"
      },
      {
        "letter": "C",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "network_mismatch"
      },
      {
        "letter": "D",
        "text": "Anotar la clave de cifrado en un post-it en la pantalla del administrador",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "A",
    "explanation": "Customer-Managed Encryption Keys (CMEK) permite a los clientes utilizar sus propias claves de cifrado creadas y administradas en Cloud KMS para proteger datos en servicios de Google Cloud (BigQuery, Cloud Storage, Compute Engine), manteniendo el control total para rotar o revocar el acceso a las llaves en cualquier momento.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Desactivar la seguridad viola los requerimientos regulatorios y expone a la empresa a graves sanciones.",
      "C": "Cloud Interconnect es conectividad de red física, no un servicio de gestión criptográfica.",
      "D": "Los métodos físicos inseguros no cumplen con las normas bancarias ni protegen las claves."
    },
    "officialDocUrl": "https://cloud.google.com/kms/docs/cmek",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D2-075",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "VPC Service Controls para Proteger Datos Analíticos contra Exfiltración",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Creación de Perímetros de Seguridad contra Fugas de Datos con VPC Service Controls",
    "scenario": "Un laboratorio farmacéutico almacena fórmulas moleculares secretas en BigQuery y Cloud Storage. Quieren asegurarse de que ningún empleado interno o cuenta de servicio comprometida pueda transferir o copiar estos datos hacia buckets o proyectos de Google Cloud fuera de la organización corporativa, incluso si tienen permisos válidos de IAM. ¿Qué mecanismo de seguridad perimetral deben implementar?",
    "keywords": [
      "VPC Service Controls",
      "Perímetro de servicio",
      "Prevención de exfiltración de datos",
      "Aislamiento de recursos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cambiar el nombre del bucket para que nadie pueda adivinarlo",
        "isTrap": true,
        "trapType": "security_by_obscurity"
      },
      {
        "letter": "B",
        "text": "VPC Service Controls (creando un perímetro de servicio seguro alrededor de los recursos de BigQuery y Cloud Storage)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Apagar los servidores de la empresa a las 5:00 PM",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Asignar el rol roles/owner a todos los empleados temporales",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      }
    ],
    "correct": "B",
    "explanation": "VPC Service Controls permite definir perímetros de seguridad alrededor de los servicios administrados de Google Cloud (como BigQuery y Cloud Storage) para aislar los datos dentro de la red confiable y prevenir la exfiltración de información hacia proyectos o cuentas externas no autorizadas.",
    "distractors": {
      "A": "La seguridad por oscuridad es ineficaz y no previene transferencias de datos maliciosas.",
      "B": "Opción correcta.",
      "C": "Apagar servidores de forma arbitraria no previene fugas de datos durante las horas activas.",
      "D": "Asignar roles primitivos Owner multiplica exponencialmente el riesgo de fuga y destrucción de datos."
    },
    "officialDocUrl": "https://cloud.google.com/vpc-service-controls/docs/overview",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-061",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Disaster Recovery (DR): RTO (Recovery Time Objective) y RPO (Recovery Point Objective)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Conceptos Fundamentales de Recuperación ante Desastres: RTO y RPO",
    "scenario": "En la definición del plan de continuidad del negocio, la junta directiva define que: (1) El tiempo máximo aceptable que el sistema puede estar inactivo tras un desastre es de 15 minutos, y (2) La cantidad máxima de datos que la empresa puede permitirse perder se mide en las transacciones de los últimos 2 minutos. ¿Cómo se denominan estas dos métricas respectivamente?",
    "keywords": [
      "RTO",
      "RPO",
      "Recovery Time Objective",
      "Recovery Point Objective",
      "Disaster Recovery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "(1) CPU; (2) RAM",
        "isTrap": true,
        "trapType": "hardware_mismatch"
      },
      {
        "letter": "B",
        "text": "(1) RPO; (2) RTO",
        "isTrap": true,
        "trapType": "inverted_metric"
      },
      {
        "letter": "C",
        "text": "(1) RTO (Recovery Time Objective); (2) RPO (Recovery Point Objective)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "(1) TCO; (2) ROI",
        "isTrap": true,
        "trapType": "financial_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "El RTO (Recovery Time Objective) es la duración máxima tolerable de tiempo de inactividad que una aplicación puede sufrir antes de restablecerse. El RPO (Recovery Point Objective) es la cantidad máxima tolerable de pérdida de datos medida en tiempo (los datos generados entre el último respaldo y el incidente).",
    "distractors": {
      "A": "CPU y RAM son recursos físicos de cómputo y memoria.",
      "B": "Invierte las definiciones de tiempo de recuperación y punto de recuperación de datos.",
      "C": "Opción correcta.",
      "D": "TCO y ROI son métricas de análisis financiero y de retorno de inversión."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/dr-scenarios-planning-guide",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-062",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Modelos de Disaster Recovery: Cold vs Warm vs Hot Standby (Active-Active)",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Comparación de Patrones de Recuperación ante Desastres: Cold, Warm y Active-Active",
    "scenario": "Un arquitecto debe seleccionar el patrón de recuperación ante desastres para un sistema de pagos que exige RTO cercano a cero y RPO de cero segundos. ¿Qué arquitectura de recuperación proporciona la mayor disponibilidad a pesar de tener el costo de infraestructura más alto?",
    "keywords": [
      "Active-Active",
      "Hot Standby",
      "RTO cero",
      "RPO cero",
      "Multi-region"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Warm Standby con servidores apagados",
        "isTrap": true,
        "trapType": "warm_standby_gap"
      },
      {
        "letter": "B",
        "text": "No implementar ningún plan de recuperación",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "C",
        "text": "Cold Standby (respaldos en cintas magnéticas que se restauran manualmente en 5 días)",
        "isTrap": true,
        "trapType": "slow_dr_tier"
      },
      {
        "letter": "D",
        "text": "Arquitectura Activo-Activo Multi-Región (Hot Standby / Multi-Region Active-Active), donde ambas regiones procesan tráfico real simultáneamente con replicación síncrona.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Una arquitectura Activo-Activo (Hot Standby multi-región) mantiene sistemas en ejecución continua procesando tráfico en múltiples regiones con replicación sincrónica (usando tecnologías como Cloud Spanner y balanceadores globales), ofreciendo RTO y RPO prácticamente de cero ante fallas de una región entera.",
    "distractors": {
      "A": "Warm Standby requiere minutos para encender y escalar los servidores secundarios.",
      "B": "Carecer de plan de DR expone a la empresa al cese total de operaciones ante una contingencia.",
      "C": "Cold Standby tiene un RTO de horas o días y un RPO elevado, violando el requerimiento de RTO/RPO cercano a cero.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/disaster-recovery",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-063",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Eficiencia Energética y Centros de Datos de Google (PUE - Power Usage Effectiveness)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Eficiencia Energética y PUE Líder en los Centros de Datos de Google Cloud",
    "scenario": "Al evaluar metas corporativas de sostenibilidad y eficiencia energética, el comité directivo analiza la métrica PUE (Power Usage Effectiveness). ¿Qué significa tener un PUE cercano a 1.0 (como el promedio de 1.10 de Google Cloud frente al promedio de la industria de 1.55)?",
    "keywords": [
      "PUE",
      "Power Usage Effectiveness",
      "Eficiencia energética",
      "Sostenibilidad",
      "Enfriamiento eficiente"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Significa que casi toda la energía consumida se destina directamente al funcionamiento de los servidores de cómputo, minimizando el desperdicio energético en refrigeración e infraestructura auxiliar.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Significa que los servidores consumen 100 veces más electricidad que una ciudad completa sin hacer cómputo.",
        "isTrap": true,
        "trapType": "opposite_fact"
      },
      {
        "letter": "C",
        "text": "Significa que los servidores funcionan con baterías desechables no recargables.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "El PUE es una métrica de velocidad de internet, no de energía.",
        "isTrap": true,
        "trapType": "false_definition"
      }
    ],
    "correct": "A",
    "explanation": "El PUE (Power Usage Effectiveness) es la relación entre la energía total consumida por el centro de datos y la energía consumida por el equipo de TI. Un valor ideal de 1.0 significa cero desperdicio. Google Cloud opera con un PUE promedio líder de ~1.10 mediante diseño avanzado de servidores y refrigeración con IA.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Un PUE bajo indica alta eficiencia y mínimo consumo no productivo, no un consumo descontrolado.",
      "C": "Los centros de datos de Google están conectados a redes eléctricas de energía renovable con respaldo industrial.",
      "D": "El PUE es el estándar internacional de eficiencia energética para centros de datos."
    },
    "officialDocUrl": "https://cloud.google.com/sustainability/progress/data-centers",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-064",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Patrón Strangler Fig para Modernización Progresiva de Monolitos",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Modernización Progresiva de Aplicaciones con el Patrón Strangler Fig",
    "scenario": "Una empresa desea modernizar su sistema ERP monolítico crítico. Saben que un intento de reescribir todo el sistema en un solo proyecto masivo (Big Bang) conlleva un riesgo de fracaso del 80%. En su lugar, desean extraer funcionalidades individuales una por una (como el módulo de facturación) y redirigir el tráfico a los nuevos microservicios en la nube mediante un proxy hasta reemplazar gradualmente todo el monolito. ¿Cómo se conoce este patrón arquitectónico?",
    "keywords": [
      "Patrón Strangler Fig",
      "Modernización progresiva",
      "Reemplazo gradual del monolito",
      "Microservicios"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Patrón de apagado total permanente",
        "isTrap": true,
        "trapType": "service_disruption_antipattern"
      },
      {
        "letter": "B",
        "text": "Patrón Strangler Fig (Patrón de la Higuera Estranguladora)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Patrón Big Bang destructivo",
        "isTrap": true,
        "trapType": "opposite_pattern"
      },
      {
        "letter": "D",
        "text": "Patrón de copia manual en diskettes",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "El patrón Strangler Fig (Higuera Estranguladora) es la estrategia recomendada por Google Cloud para modernizar sistemas legados: reemplaza gradualmente componentes específicos del monolito por nuevos microservicios en la nube detrás de una capa de enrutamiento (como Apigee o Cloud Load Balancing), reduciendo drásticamente el riesgo operativo.",
    "distractors": {
      "A": "Apagar el sistema destruye las operaciones del negocio.",
      "B": "Opción correcta.",
      "C": "El enfoque 'Big Bang' intenta reemplazar todo de golpe, con un altísimo índice de fracasos y pérdidas financieras.",
      "D": "Los medios magnéticos locales no forman parte de un patrón de arquitectura moderna de software."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/modernizing-legacy-applications",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-065",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Resumen de Infraestructura: Escalabilidad, Agilidad y Costo",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Alineación de la Modernización de Infraestructura con la Estrategia de Negocio",
    "scenario": "En una presentación ante la junta directiva, el Chief Technology Officer (CTO) sintetiza los tres pilares de valor que la modernización de infraestructura y aplicaciones en Google Cloud aporta a la organización: (1) Escalabilidad elástica global, (2) Agilidad de innovación y reducción de tiempo al mercado, y (3) Eficiencia financiera en costos operativos. ¿Qué resumen valida este impacto estratégico?",
    "keywords": [
      "Modernización de infraestructura",
      "Escalabilidad elástica",
      "Agilidad",
      "FinOps",
      "Transformación tecnológica"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "La modernización de infraestructura obliga a las empresas a duplicar sus costos de TI sin ningún beneficio.",
        "isTrap": true,
        "trapType": "false_premise"
      },
      {
        "letter": "B",
        "text": "La nube no ofrece ninguna ventaja sobre un servidor de archivos en una oficina local.",
        "isTrap": true,
        "trapType": "false_premise"
      },
      {
        "letter": "C",
        "text": "Google Cloud permite reemplazar la rigidez de los centros de datos locales por servicios elásticos, automatizados y serverless, permitiendo lanzar productos en minutos en lugar de meses y pagando solo por el consumo real con máxima seguridad y sostenibilidad.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Google Cloud solo sirve para comprar monitores de computadora más brillantes.",
        "isTrap": true,
        "trapType": "absurd_reductive"
      }
    ],
    "correct": "C",
    "explanation": "La modernización en Google Cloud transforma la tecnología de un centro de costos lento y rígido en un motor ágil de innovación que escala bajo demanda globalmente, reduce el tiempo de desarrollo e impulsa la competitividad del negocio con resiliencia y eficiencia de costos.",
    "distractors": {
      "A": "La optimización en la nube (FinOps) reduce el TCO e incrementa el retorno de inversión (ROI).",
      "B": "Los centros de datos locales carecen de la elasticidad masiva, red global y servicios de IA de Google Cloud.",
      "C": "Opción correcta.",
      "D": "Reducir la nube a la compra de monitores ignora el alcance de la tecnología."
    },
    "officialDocUrl": "https://cloud.google.com/solutions",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-066",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Compute Engine: Familias de Máquinas (General-purpose, Compute-optimized, Memory-optimized, Accelerator-optimized)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Selección de Familias de Máquinas en Compute Engine según el Tipo de Carga",
    "scenario": "Un arquitecto debe seleccionar la familia de máquinas de Compute Engine adecuada para: (1) Cargas de trabajo de uso general con equilibrio costo/rendimiento (E2/N2), (2) Cargas intensivas en CPU como codificación de video y videojuegos (C2/C3), y (3) Bases de datos masivas en memoria como SAP HANA que requieren terabytes de RAM (M2/M3). ¿Cuál es la asignación correcta?",
    "keywords": [
      "Compute Engine Machine Families",
      "General-purpose E2/N2",
      "Compute-optimized C2",
      "Memory-optimized M2",
      "SAP HANA"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "(1) Memory-optimized, (2) General-purpose, (3) Compute-optimized",
        "isTrap": true,
        "trapType": "misaligned_machine_families"
      },
      {
        "letter": "B",
        "text": "Usar la máquina más pequeña posible de $3 al mes para SAP HANA de 4 Terabytes",
        "isTrap": true,
        "trapType": "underprovisioning_failure"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive para todas las cargas",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "(1) General-purpose (E2/N2), (2) Compute-optimized (C2/C3), (3) Memory-optimized (M2/M3)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Compute Engine ofrece familias de máquinas optimizadas: General-purpose (E2, N2) para balance general; Compute-optimized (C2, C3) para máximo rendimiento por núcleo de CPU; y Memory-optimized (M2, M3) con hasta 12 TB de RAM certificadas para SAP HANA.",
    "distractors": {
      "A": "Invierte las familias de máquinas especializadas.",
      "B": "Intentar ejecutar SAP HANA empresarial en una máquina micro provocará errores inmediatos de falta de memoria (OOM).",
      "C": "Cloud Storage Archive almacena archivos pasivos, no ejecuta cargas de cómputo en memoria.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/machine-types",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-067",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Accelerator-Optimized VMs: GPUs y TPUs para Inteligencia Artificial y Cómputo Científico",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aceleración de Entrenamiento de IA con GPUs NVIDIA y Google Cloud TPUs",
    "scenario": "Un equipo de investigación de inteligencia artificial entrena modelos de lenguaje masivos y visión artificial. Necesitan infraestructura de cómputo especializada con aceleradores de hardware propietarios diseñados específicamente por Google para acelerar el entrenamiento y la inferencia con TensorFlow, PyTorch y JAX. ¿Qué aceleradores específicos de Google Cloud deben seleccionar?",
    "keywords": [
      "Cloud TPU",
      "Tensor Processing Unit",
      "GPU NVIDIA",
      "Accelerator-optimized A2/A3",
      "Entrenamiento de IA masivo"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud TPUs (Tensor Processing Units) y familias de máquinas aceleradas (A2/A3) con GPUs NVIDIA H100/A100",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Compute Engine sin CPU ni memoria",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Discos duros mecánicos de 5400 RPM de 1998",
        "isTrap": true,
        "trapType": "absurd_hardware"
      },
      {
        "letter": "D",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Las Cloud TPUs (Tensor Processing Units) son circuitos integrados para aplicaciones específicas (ASICs) desarrollados por Google diseñados para acelerar cargas de trabajo de Machine Learning, junto con las VMs optimizadas con aceleradores (A2/A3) que integran GPUs NVIDIA Tensor Core.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Una instancia de cómputo requiere CPU y memoria para funcionar.",
      "C": "Los discos mecánicos antiguos no ofrecen procesamiento vectorial o matricial de IA.",
      "D": "Cloud DNS es resolución de nombres de red."
    },
    "officialDocUrl": "https://cloud.google.com/tpu/docs",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-068",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Filestore: Almacenamiento de Archivos NFS Compartido Totalmente Administrado",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Almacenamiento de Archivos NFS para Sistemas Tradicionales con Cloud Filestore",
    "scenario": "Una empresa de diseño y renderizado de medios tiene una aplicación tradicional en Linux que requiere que múltiples servidores Compute Engine y clústeres de GKE lean y escriban simultáneamente en un sistema de archivos compartido utilizando el protocolo estándar NFSv3. ¿Qué servicio administrado de Google Cloud proporciona este sistema de archivos de red?",
    "keywords": [
      "Cloud Filestore",
      "NFS",
      "Sistema de archivos compartido",
      "Multi-escritura",
      "POSIX compliant"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Memorystore for Redis",
        "isTrap": true,
        "trapType": "inmemory_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Filestore",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Google Cloud Billing",
        "isTrap": true,
        "trapType": "billing_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "object_storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Filestore es un servicio de almacenamiento de archivos conectado a la red (NAS) totalmente administrado compatible con POSIX y NFSv3/NFSv4.1, que permite a múltiples instancias de Compute Engine y pods de GKE montar un volumen compartido de alta velocidad.",
    "distractors": {
      "A": "Memorystore es una caché de datos clave-valor en RAM, no un sistema de archivos NFS para guardar archivos.",
      "B": "Opción correcta.",
      "C": "Cloud Billing gestiona finanzas y facturación de la nube.",
      "D": "Cloud Storage es un almacén de objetos accesible por API HTTP/REST, no un sistema de archivos de red NFS estándar."
    },
    "officialDocUrl": "https://cloud.google.com/filestore/docs",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-069",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Run: Montaje de Almacenamiento Persistente y Volúmenes de Red",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Conexión de Contenedores Serverless a Almacenamiento Compartido en Cloud Run",
    "scenario": "Un servicio serverless en Cloud Run procesa documentos de diseño generados por usuarios y necesita leer y escribir en un sistema de archivos persistente compartido por todos los contenedores activos. ¿Qué capacidad de Cloud Run permite conectar almacenamiento persistente?",
    "keywords": [
      "Cloud Run",
      "Montaje de volúmenes",
      "Cloud Storage FUSE",
      "Filestore NFS",
      "Almacenamiento en serverless"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Run no puede conectarse a ningún tipo de almacenamiento bajo ninguna circunstancia.",
        "isTrap": true,
        "trapType": "false_limitation"
      },
      {
        "letter": "B",
        "text": "Conectar cables de disco duro externos mediante Bluetooth al centro de datos de Google.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Montar buckets de Cloud Storage (mediante Cloud Storage FUSE) o volúmenes de Cloud Filestore como sistemas de archivos locales dentro de los contenedores de Cloud Run.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Borrar todos los archivos de los usuarios tan pronto como se generen.",
        "isTrap": true,
        "trapType": "data_loss_antipattern"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Run soporta el montaje directo de volúmenes de almacenamiento, permitiendo a los contenedores serverless acceder de forma transparente a buckets de Cloud Storage (vía Cloud Storage FUSE) o a recursos compartidos NFS de Cloud Filestore como directorios locales.",
    "distractors": {
      "A": "Cloud Run admite integración con múltiples servicios de almacenamiento persistente.",
      "B": "La infraestructura en la nube se interconecta mediante redes virtuales de alta velocidad, no conexiones físicas Bluetooth.",
      "C": "Opción correcta.",
      "D": "Eliminar datos de los usuarios destruye la utilidad de la aplicación."
    },
    "officialDocUrl": "https://cloud.google.com/run/docs/configuring/services/volumes",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-070",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Eventarc: Enrutamiento de Eventos Estandarizado para Arquitecturas Serverless",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Desacoplamiento Orientado a Eventos con Eventarc y CloudEvents",
    "scenario": "Una empresa construye una arquitectura basada en eventos donde más de 90 fuentes de eventos de Google Cloud (creación de objetos en Cloud Storage, registros en Cloud Audit Logs, eventos de Pub/Sub y eventos personalizados) deben entregarse de forma estandarizada (CloudEvents) a microservicios en Cloud Run y Cloud Functions sin código intermedio complejo. ¿Qué servicio gestiona este enrutamiento de eventos?",
    "keywords": [
      "Eventarc",
      "CloudEvents",
      "Arquitectura orientada a eventos",
      "Disparadores serverless",
      "Cloud Run y Cloud Functions"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine Sole-Tenant Nodes",
        "isTrap": true,
        "trapType": "infrastructure_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Interconnect Dedicated",
        "isTrap": true,
        "trapType": "networking_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Eventarc",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Eventarc es un servicio totalmente administrado que permite enrutar eventos desde múltiples fuentes de Google Cloud y aplicaciones personalizadas hacia destinos serverless (Cloud Run, Cloud Functions, GKE y Workflows) utilizando el estándar abierto CloudEvents.",
    "distractors": {
      "A": "Sole-Tenant Nodes son servidores físicos dedicados para VMs.",
      "B": "Cloud Interconnect es conectividad física de redes.",
      "C": "Cloud Storage Archive es almacenamiento frío de archivos.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/eventarc/docs",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-071",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Workflows: Orquestación Serverless de Microservicios y APIs",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Orquestación de Microservicios HTTP y Funciones con Cloud Workflows",
    "scenario": "Un proceso de negocio de compras requiere coordinar una secuencia de pasos: (1) Verificar inventario llamando a un microservicio en Cloud Run, (2) Procesar pago con una API externa, (3) Si el pago falla, ejecutar reintentos exponenciales o llamar a un servicio de compensación, y (4) Notificar al usuario mediante Cloud Functions. Todo definido en un flujo YAML/JSON sin servidor. ¿Qué herramienta de Google Cloud orquesta este proceso?",
    "keywords": [
      "Cloud Workflows",
      "Orquestación serverless",
      "Secuencia de APIs",
      "Manejo de errores y reintentos",
      "YAML workflows"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Workflows",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Billing API",
        "isTrap": true,
        "trapType": "billing_mismatch"
      },
      {
        "letter": "D",
        "text": "Escribir código de espera manual con `sleep(10)` en cada servidor",
        "isTrap": true,
        "trapType": "fragile_workaround"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Workflows es un motor de orquestación serverless que coordina servicios de Google Cloud y APIs HTTP externas en flujos de trabajo basados en YAML/JSON con gestión de estado integrada, reintentos automáticos y manejo de excepciones.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud DNS resuelve nombres de dominio.",
      "C": "Cloud Billing gestiona pagos y costos de nube.",
      "D": "Usar sleeps manuales en código es frágil, costoso (paga tiempo ocioso) y no maneja fallos distribuidos."
    },
    "officialDocUrl": "https://cloud.google.com/workflows/docs",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-072",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "GKE Enterprise: Gestión de Múltiples Clústeres con Fleets (Flotas)",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Agrupación Lógica de Clústeres Kubernetes en Flotas (Fleets)",
    "scenario": "Una empresa multinacional tiene 25 clústeres de GKE distribuidos en América, Europa y Asia. Desean aplicar políticas de seguridad uniformes, configurar una malla de servicios compartida y gestionar permisos de acceso a nivel global para todos los clústeres como si fueran una sola entidad lógica. ¿Qué concepto de GKE Enterprise habilita esta gestión agrupada?",
    "keywords": [
      "GKE Enterprise",
      "Flotas de clústeres",
      "Fleets",
      "Gestión multi-clúster",
      "Gobernanza unificada"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Copiar archivos de configuración manualmente por correo electrónico a 25 personas",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "B",
        "text": "Flotas de Clústeres (Fleets en GKE Enterprise)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Desactivar 24 clústeres y quedarse con uno solo pequeño",
        "isTrap": true,
        "trapType": "degraded_solution"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Las Flotas (Fleets) en GKE Enterprise permiten agrupar lógicamente múltiples clústeres de Kubernetes (en Google Cloud, en premisas o en otras nubes) para simplificar la gestión masiva, aplicar políticas de seguridad idénticas y habilitar servicios multi-clúster.",
    "distractors": {
      "A": "El copiado manual de configuraciones es lento, genera inconsistencias y es inauditable.",
      "B": "Opción correcta.",
      "C": "Reducir a un solo clúster elimina la presencia global y la resiliencia geográfica de la empresa.",
      "D": "Cloud Storage Coldline es para almacenamiento pasivo."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/enterprise/docs/concepts/fleets",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-073",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Armor: Detección Adaptativa de Amenazas con Machine Learning",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Protección contra Ataques de Denegación de Servicio con Adaptive Protection en Cloud Armor",
    "scenario": "Un sitio de comercio electrónico sufre ataques DDoS sofisticados de Capa 7 que no coinciden con firmas de ataque estáticas conocidas. ¿Cómo ayuda la funcionalidad de Protección Adaptativa (Adaptive Protection) de Cloud Armor a mitigar estos ataques?",
    "keywords": [
      "Cloud Armor Adaptive Protection",
      "Machine Learning",
      "DDoS de Capa 7",
      "Firmas adaptativas",
      "Mitigación automatizada"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Apaga el sitio web durante el ataque para que nadie pueda ver el error.",
        "isTrap": true,
        "trapType": "service_disruption_antipattern"
      },
      {
        "letter": "C",
        "text": "Utiliza modelos de Machine Learning entrenados con telemetría global de Google para detectar anomalías de tráfico en tiempo real, identificar firmas del ataque y generar reglas de bloqueo sugeridas de forma automática.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Reenvía todos los ataques al correo personal del director general.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Armor Adaptive Protection utiliza modelos avanzados de Machine Learning para analizar el tráfico web, detectar patrones anómalos de ataques DDoS de Capa 7 y generar alertas accionables con reglas de mitigación específicas para neutralizar el ataque rápidamente.",
    "distractors": {
      "A": "Cloud Storage Archive es para copias de seguridad de largo plazo.",
      "B": "Apagar el sitio web logra exactamente el objetivo del atacante de interrumpir el negocio.",
      "C": "Opción correcta.",
      "D": "El correo electrónico no es una herramienta de mitigación de paquetes de red."
    },
    "officialDocUrl": "https://cloud.google.com/armor/docs/adaptive-protection-overview",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-074",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Run: Tolerancia a Fallos y Conmutación por Error Multi-Región",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Alta Disponibilidad Global con Cloud Run y Cloud Load Balancing",
    "scenario": "Una empresa requiere que su microservicio en Cloud Run se ejecute en dos regiones (us-central1 y europe-west1). Desean que un único balanceador de carga global enrute el tráfico al servicio más cercano al usuario y conmute automáticamente a la región secundaria si una región completa sufre un corte de servicio. ¿Qué combinación de servicios arquitectónicos implementa esto?",
    "keywords": [
      "Cloud Run Multi-región",
      "Global External Application Load Balancer",
      "Conmutación por error automática",
      "Alta disponibilidad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Desactivar la segunda región para ahorrar un 50% de configuración.",
        "isTrap": true,
        "trapType": "single_point_of_failure"
      },
      {
        "letter": "C",
        "text": "Pedir a los usuarios que cambien manualmente su configuración DNS en sus teléfonos móviles.",
        "isTrap": true,
        "trapType": "bad_ux_antipattern"
      },
      {
        "letter": "D",
        "text": "Desplegar el servicio de Cloud Run en ambas regiones y colocarlas como backends detrás de un Global External Application Load Balancer con Serverless NEGs (Network Endpoint Groups).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Combinar Cloud Run multi-región con un Global External Application Load Balancer mediante Serverless NEGs permite distribuir el tráfico globalmente con una sola IP Anycast, logrando balanceo inteligente por latencia y conmutación automática (failover) ante contingencias regionales.",
    "distractors": {
      "A": "Cloud Storage Archive no balancea tráfico de microservicios web.",
      "B": "Eliminar la región secundaria elimina la redundancia geográfica ante desastres.",
      "C": "La gestión de DNS manual por usuarios es inviable y carece de conmutación automática de tráfico.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/negs/serverless-neg-concepts",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D3-075",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Google Cloud VMware Engine: Recuperación ante Desastres con VMware SRM",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Recuperación ante Desastres Híbrida para VMware con GCVE y Site Recovery Manager (SRM)",
    "scenario": "Una institución financiera opera su centro de datos principal en premisas con VMware vSphere. Para su plan de recuperación ante desastres (DR), desean utilizar Google Cloud como sitio secundario sin tener que comprar un segundo centro de datos físico, replicando sus VMs con VMware Site Recovery Manager (SRM) directamente a Google Cloud VMware Engine. ¿Qué beneficio central aporta esta solución?",
    "keywords": [
      "GCVE",
      "VMware SRM",
      "Site Recovery Manager",
      "Recuperación ante desastres híbrida",
      "Sin segundo datacenter físico"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Permite utilizar Google Cloud VMware Engine como sitio de recuperación ante desastres elástico y bajo demanda totalmente compatible con herramientas familiares de VMware (como SRM y vSphere Replication), evitando la cuantiosa inversión de construir un segundo centro de datos físico.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Obliga a reescribir todas las máquinas virtuales en código ensamblador.",
        "isTrap": true,
        "trapType": "absurd_complexity"
      },
      {
        "letter": "C",
        "text": "Impide recuperar datos en caso de una catástrofe.",
        "isTrap": true,
        "trapType": "dangerous_premise"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Coldline como único servidor de cómputo",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud VMware Engine permite a las organizaciones utilizar la nube como un sitio secundario de recuperación de desastres (DR) utilizando herramientas nativas de VMware como Site Recovery Manager (SRM), garantizando conmutación rápida sin la inversión de capital (CapEx) de un centro de datos físico secundario.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "GCVE ejecuta máquinas virtuales nativas de VMware sin modificar ningún código ni binario.",
      "C": "La solución está diseñada precisamente para garantizar la recuperación rápida y confiable.",
      "D": "Cloud Storage Coldline es para archivos pasivos; no ejecuta VMs de VMware."
    },
    "officialDocUrl": "https://cloud.google.com/vmware-engine/docs/disaster-recovery",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-061",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Sistemas SIEM y SOAR Modernos: Google Chronicle Security Operations",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Investigación y Respuesta a Amenazas a Escala Planetaria con Google Chronicle SecOps",
    "scenario": "Un centro de operaciones de seguridad (SOC) empresarial ingiere petabytes de telemetría de red, registros de autenticación y eventos de seguridad diarios. Necesitan un sistema SIEM/SOAR de hiperescala impulsado por inteligencia de amenazas de Mandiant que permita buscar en petabytes de registros en segundos y automatizar la respuesta a incidentes con flujos de trabajo de orquestación. ¿Qué plataforma de Google Cloud cumple este rol?",
    "keywords": [
      "Chronicle Security Operations",
      "Chronicle SIEM",
      "Chronicle SOAR",
      "Mandiant",
      "Respuesta a incidentes a escala"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "B",
        "text": "Google Chronicle Security Operations (Chronicle SIEM / SOAR con inteligencia Mandiant)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Revisar los registros en hojas de cálculo impresas en papel bond",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Chronicle Security Operations es la plataforma de operaciones de seguridad en la nube de Google que combina capacidades avanzadas de SIEM (ingesta y búsqueda de telemetría masiva a velocidad de Google) y SOAR (automatización y respuesta a incidentes), enriquecida con la inteligencia de amenazas de clase mundial de Mandiant.",
    "distractors": {
      "A": "Cloud DNS gestiona nombres de dominio.",
      "B": "Opción correcta.",
      "C": "Las hojas de papel no pueden procesar petabytes de registros de seguridad en tiempo real.",
      "D": "Cloud Storage Coldline almacena archivos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/chronicle",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-062",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Auditoría de Vulnerabilidades de Software con Web Security Scanner",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Detección Automática de Vulnerabilidades Web con Web Security Scanner",
    "scenario": "Una empresa despliega una aplicación web en App Engine y Compute Engine. Desean un escáner automatizado que rastree periódicamente el sitio web en busca de vulnerabilidades comunes de seguridad (como scripts entre sitios XSS, recursos con contraseñas en texto plano o librerías desactualizadas con fallas conocidas). ¿Qué componente de Security Command Center realiza este escaneo?",
    "keywords": [
      "Web Security Scanner",
      "Escaneo de vulnerabilidades web",
      "XSS",
      "Security Command Center",
      "Seguridad de aplicaciones"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Desactivar la aplicación para que nadie pueda ver vulnerabilidades",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Web Security Scanner en Security Command Center",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "telecom_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Web Security Scanner rastrea automáticamente aplicaciones web públicas en Compute Engine, GKE y App Engine para identificar vulnerabilidades comunes como Cross-Site Scripting (XSS), inyección de contenido y bibliotecas JavaScript vulnerables, reportando los hallazgos en Security Command Center.",
    "distractors": {
      "A": "Cloud Storage Archive almacena datos fríos.",
      "B": "Apagar la aplicación destruye el servicio comercial.",
      "C": "Opción correcta.",
      "D": "Cloud Interconnect es conectividad física de telecomunicaciones."
    },
    "officialDocUrl": "https://cloud.google.com/security-command-center/docs/concepts-web-security-scanner-overview",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-063",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Gestión de Cuotas y Límites de Servicio (Quotas and System Limits)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Protección Contra Consumos Accidentales y Ataques con Cuotas de Google Cloud",
    "scenario": "Un proyecto nuevo de Google Cloud tiene un límite máximo inicial de 24 vCPUs en una región. El equipo necesita desplegar 50 vCPUs para una prueba. ¿Por qué Google Cloud impone cuotas de recursos predeterminadas en los proyectos y cómo puede solicitarse un aumento?",
    "keywords": [
      "Cuotas de servicio",
      "Quotas",
      "Protección contra gasto accidental",
      "Prevención de abusos",
      "Solicitud de aumento de cuota"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Las cuotas existen para obligar a las empresas a pagar una multa de $1,000 por cada vCPU adicional.",
        "isTrap": true,
        "trapType": "untrue_cost_claim"
      },
      {
        "letter": "B",
        "text": "No es posible aumentar ninguna cuota en Google Cloud bajo ninguna circunstancia.",
        "isTrap": true,
        "trapType": "false_claim"
      },
      {
        "letter": "C",
        "text": "Las cuotas solo pueden cambiarse enviando un fax notariado en papel.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Las cuotas protegen al cliente contra gastos accidentales o ataques imprevistos y previenen la saturación de la infraestructura; los aumentos de cuota pueden solicitarse de forma rápida y gratuita a través de la consola de Google Cloud.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Las cuotas son límites preventivos que protegen a los clientes de facturas descontroladas (por ejemplo, si un script cae en un bucle infinito creando recursos) y aseguran la disponibilidad compartida de la nube. Los incrementos se solicitan directamente desde la consola de Quotas de forma digital.",
    "distractors": {
      "A": "Solicitar un aumento de cuota es gratuito; solo se factura por el uso real de los recursos consumidos.",
      "B": "Las cuotas se incrementan rutinariamente según las necesidades legítimas del cliente.",
      "C": "Las solicitudes se gestionan de forma digital e inmediata o semiautomatizada desde la consola.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/docs/quota",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-064",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Rotación Segura de Llaves de Cuentas de Servicio (Service Account Keys)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Mejores Prácticas para la Rotación de Llaves de Cuentas de Servicio",
    "scenario": "En los casos excepcionales donde una aplicación externa heredada requiere utilizar una clave privada JSON de Service Account, ¿cuál es la mejor práctica de seguridad obligatoria para gestionar el ciclo de vida de estas claves?",
    "keywords": [
      "Rotación de llaves",
      "Service Account Keys",
      "Ciclo de vida de credenciales",
      "Auditoría de llaves",
      "Prevención de filtraciones"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Rotar las claves periódicamente (ej. cada 90 días) creando una nueva clave antes de eliminar la anterior para no interrumpir el servicio, almacenar las claves cifradas y monitorear su uso en Cloud Logging.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Enviar la clave JSON por correo electrónico masivo a todos los empleados de la empresa.",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "C",
        "text": "Crear una sola clave una vez y mantenerla sin cambios durante 50 años.",
        "isTrap": true,
        "trapType": "stale_credential_risk"
      },
      {
        "letter": "D",
        "text": "Publicar la clave en un foro de Internet para que no se pierda el archivo.",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      }
    ],
    "correct": "A",
    "explanation": "Cuando el uso de claves estáticas de Service Account es inevitable, la mejor práctica de seguridad exige establecer un proceso automatizado de rotación periódica (crear clave nueva -> actualizar aplicación -> verificar -> eliminar clave antigua) y evitar a toda costa almacenar claves en repositorios de código.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Distribuir claves por correo electrónico viola el principio de menor privilegio y control de credenciales.",
      "C": "Mantener claves estáticas durante años incrementa enormemente el riesgo de que hayan sido filtradas o comprometidas.",
      "D": "Publicar credenciales en Internet expone el proyecto a robo y destrucción inmediata."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-065",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Sistemas SIEM y Alertas de Seguridad en Tiempo Real",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Integración de Flujos de Registros de Seguridad con Sistemas SIEM",
    "scenario": "Una empresa bancaria utiliza un centro de operaciones de seguridad (SOC) que monitorea eventos a través de Splunk / Chronicle. Necesitan que todos los registros de Cloud Audit Logs y alertas de Security Command Center se transmitan de forma continua con latencia de milisegundos hacia el SIEM para correlación de incidentes. ¿Qué arquitectura de Google Cloud implementa esta integración?",
    "keywords": [
      "Cloud Logging Sinks",
      "Cloud Pub/Sub",
      "SIEM",
      "Chronicle / Splunk",
      "Streaming de registros de seguridad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive con acceso anual",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Configurar un Log Sink en Cloud Logging con filtro de registros de seguridad que transmita los eventos a un tema de Cloud Pub/Sub, permitiendo que el sistema SIEM consuma los eventos en tiempo real.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Desactivar la seguridad del banco",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Copiar los registros a mano en un documento de Microsoft Word cada semana",
        "isTrap": true,
        "trapType": "manual_overhead"
      }
    ],
    "correct": "B",
    "explanation": "La arquitectura canónica para conectar Google Cloud con plataformas SIEM externas es utilizar Cloud Logging Sinks para exportar registros de auditoría y seguridad hacia Cloud Pub/Sub, donde agentes o conectores del SIEM consumen los mensajes de forma desacoplada y en tiempo real.",
    "distractors": {
      "A": "Archive Storage introduce latencia y costos de lectura inadecuados para streaming de seguridad.",
      "B": "Opción correcta.",
      "C": "Desactivar la seguridad viola los estándares normativos bancarios.",
      "D": "El copiado manual en Word es lento, inauditable e incompatible con la detección de incidentes en tiempo real."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/exporting-stackdriver-logs-for-splunk",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-066",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Monitoring: Paneles Personalizados y Visualización de Métricas",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Creación de Cuadros de Mando Operativos Personalizados en Cloud Monitoring",
    "scenario": "Un equipo de operaciones de TI necesita una pantalla de monitoreo en su sala de control (NOC) que muestre en tiempo real el tráfico de red, el uso de CPU de las máquinas virtuales, los errores HTTP por segundo y la latencia de las consultas de BigQuery. ¿Qué herramienta nativa de Google Cloud permite construir estos paneles visuales?",
    "keywords": [
      "Dashboards personalizados",
      "Cuadros de mando",
      "Cloud Monitoring",
      "NOC",
      "Visualización en tiempo real"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Dibujar gráficas en una pizarra con plumón cada 10 minutos",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Paneles de Control Personalizados (Custom Dashboards) en Cloud Monitoring",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Monitoring permite crear cuadros de mando (Dashboards) personalizados con gráficos de líneas, barras, mapas de calor y medidores numéricos para visualizar la telemetría operativa de la infraestructura y aplicaciones en tiempo real.",
    "distractors": {
      "A": "Cloud Storage Coldline es para copias de seguridad de datos fríos.",
      "B": "Dibujar manualmente es inviable y no ofrece métricas continuas precisas.",
      "C": "Opción correcta.",
      "D": "Cloud DNS es resolución de nombres de red."
    },
    "officialDocUrl": "https://cloud.google.com/monitoring/dashboards",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-067",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Auditoría de Acceso a Datos (Data Access Audit Logs)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Monitoreo de Consultas y Lectura de Datos con Data Access Audit Logs",
    "scenario": "Un oficial de seguridad de la información necesita auditar quién leyó o consultó datos confidenciales dentro de un bucket de Cloud Storage o una tabla de BigQuery (operaciones de lectura de datos, no solo cambios de configuración administrativa). ¿Qué tipo de registros de Cloud Audit Logs deben habilitarse explícitamente en el proyecto?",
    "keywords": [
      "Data Access Audit Logs",
      "Registros de acceso a datos",
      "Auditoría de lecturas",
      "Cloud Logging",
      "Cloud Storage y BigQuery"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud DNS Logs exclusivamente",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "C",
        "text": "Historial de compras personales en tiendas físicas",
        "isTrap": true,
        "trapType": "irrelevant_mismatch"
      },
      {
        "letter": "D",
        "text": "Registros de Auditoría de Acceso a Datos (Data Access Audit Logs: ADMIN_READ, DATA_READ, DATA_WRITE)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Los Data Access Audit Logs registran las llamadas a APIs que leen configuraciones o metadatos (ADMIN_READ), o leen/escriben datos creados por el usuario (DATA_READ y DATA_WRITE en Cloud Storage, BigQuery, etc.). Al generar grandes volúmenes de datos, están desactivados por defecto (excepto en BigQuery) y deben habilitarse explícitamente.",
    "distractors": {
      "A": "Cloud Storage Archive es para almacenamiento de objetos pasivos.",
      "B": "DNS Logs solo registra resoluciones de nombres de red, no lecturas de objetos o tablas.",
      "C": "Las compras personales no forman parte de los logs de auditoría de Google Cloud.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/audit/data-access-overview",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-068",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Tipos de Soporte Técnico en Google Cloud: Basic, Standard, Enhanced y Premium",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Niveles de Soporte Técnico de Google Cloud (Customer Care)",
    "scenario": "Una empresa multinacional opera aplicaciones críticas de misión crítica (P1) las 24 horas del día. Requieren un nivel de soporte de Google Cloud que ofrezca un tiempo de respuesta de 15 minutos para incidentes críticos (P1), soporte telefónico 24/7/365 y un Technical Account Manager (TAM) dedicado para asesoría proactiva. ¿Qué nivel de soporte técnico de Customer Care satisface estos requisitos?",
    "keywords": [
      "Customer Care",
      "Premium Support",
      "Tiempo de respuesta 15 min P1",
      "Technical Account Manager TAM",
      "Soporte 24/7"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Soporte Premium (Premium Support de Google Cloud Customer Care)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Soporte Standard",
        "isTrap": true,
        "trapType": "lower_tier_mismatch"
      },
      {
        "letter": "C",
        "text": "Buscar ayuda en redes sociales públicas",
        "isTrap": true,
        "trapType": "untrusted_source"
      },
      {
        "letter": "D",
        "text": "Soporte Básico gratuito (Basic Support con acceso solo a documentación pública)",
        "isTrap": true,
        "trapType": "basic_tier_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud Premium Support ofrece la máxima cobertura para empresas con cargas de misión crítica: respuesta en 15 minutos para incidentes P1 (24/7), un Technical Account Manager (TAM) dedicado, revisiones operativas y soporte multicanal prioritario.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Standard Support tiene tiempos de respuesta de 4 horas para P2 en horario de oficina y no incluye un TAM dedicado.",
      "C": "Las redes sociales públicas no son un canal formal de soporte empresarial garantizado con SLA.",
      "D": "Basic Support no incluye soporte telefónico ni tiempos de respuesta garantizados para incidentes P1."
    },
    "officialDocUrl": "https://cloud.google.com/support",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-069",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Technical Account Manager (TAM): Asesoría Estratégica y Operativa",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Rol del Technical Account Manager (TAM) en el Soporte Premium",
    "scenario": "Una empresa contrata el plan de soporte Premium de Google Cloud. ¿Cuál es el valor principal que aporta el Technical Account Manager (TAM) asignado a la cuenta?",
    "keywords": [
      "Technical Account Manager",
      "TAM",
      "Asesoría proactiva",
      "Revisiones operativas",
      "Escalamiento de incidentes"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Escribe todo el código de las aplicaciones del cliente de forma gratuita.",
        "isTrap": true,
        "trapType": "unrealistic_service"
      },
      {
        "letter": "B",
        "text": "Actúa como asesor técnico estratégico de confianza, guiando la adopción de mejores prácticas arquitectónicas, coordinando revisiones operativas y sirviendo como punto de escalamiento prioritario durante incidentes mayores.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Reemplaza al Director General de la empresa en la toma de decisiones comerciales.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Fabrica servidores físicos en el garaje de su casa.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "El Technical Account Manager (TAM) es un especialista de Google que trabaja proactivamente con los líderes técnicos del cliente para asegurar el éxito operativo, optimizar la infraestructura, preparar la plataforma para eventos de alta demanda y facilitar el acceso a ingenieros de Google.",
    "distractors": {
      "A": "El TAM proporciona guía y asesoría técnica, no desarrollo de código de aplicación del cliente.",
      "B": "Opción correcta.",
      "C": "El TAM asesora en tecnología de nube, no asume la dirección corporativa de la empresa.",
      "D": "Google opera centros de datos industriales de hiperescala; no hardware artesanal."
    },
    "officialDocUrl": "https://cloud.google.com/support/technical-account-management",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-070",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Customer Care: Nivel Enhanced Support",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Características del Nivel Enhanced Support de Google Cloud Customer Care",
    "scenario": "Una empresa en crecimiento necesita soporte técnico 24/7 para incidentes de alta prioridad (P1) con un tiempo de respuesta garantizado de 1 hora, además de soporte para tecnologías de terceros comunes en la nube, pero no requiere un TAM dedicado de tiempo completo. ¿Qué nivel de soporte es el más adecuado y costo-eficiente?",
    "keywords": [
      "Enhanced Support",
      "Respuesta 1 hora P1",
      "Soporte 24/7",
      "Customer Care",
      "Costo-beneficio"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Contratar un hacker anónimo en Internet",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "B",
        "text": "Soporte Básico (Basic Support sin atención telefónica)",
        "isTrap": true,
        "trapType": "basic_tier_mismatch"
      },
      {
        "letter": "C",
        "text": "Soporte Mejorado (Enhanced Support de Google Cloud Customer Care)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Enhanced Support está diseñado para empresas con cargas de producción que requieren soporte 24/7 con respuesta en 1 hora para incidentes P1, soporte de terceros y herramientas de diagnóstico avanzadas sin incurrir en el costo del nivel Premium con TAM dedicado.",
    "distractors": {
      "A": "Recurrir a actores anónimos no verificados compromete la seguridad y legalidad corporativa.",
      "B": "Basic Support no ofrece soporte humano 24/7 ni respuesta garantizada en 1 hora.",
      "C": "Opción correcta.",
      "D": "Cloud Storage Archive almacena objetos de datos fríos."
    },
    "officialDocUrl": "https://cloud.google.com/support",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-071",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Gestión de Permisos de Facturación: Billing Account Administrator vs Billing Account User",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Separación de Roles Financieros en Cloud Billing",
    "scenario": "En una empresa: (1) El Director de Finanzas debe tener control total para modificar métodos de pago y gestionar presupuestos de la Cuenta de Facturación, y (2) Los líderes de proyecto solo deben tener permiso para vincular proyectos nuevos a la cuenta de facturación sin poder alterar los métodos de pago ni ver datos bancarios. ¿Qué roles de IAM de facturación deben asignarse?",
    "keywords": [
      "Billing Account Administrator",
      "Billing Account User",
      "Control de facturación",
      "Separación de funciones",
      "FinOps IAM"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Director de Finanzas: `roles/billing.viewer`; Líderes: `roles/billing.admin`.",
        "isTrap": true,
        "trapType": "inverted_roles"
      },
      {
        "letter": "B",
        "text": "Desactivar la facturación para que nadie tenga que pagar nada.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Asignar `roles/owner` de la organización a todos los empleados de la empresa.",
        "isTrap": true,
        "trapType": "overprivileged_risk"
      },
      {
        "letter": "D",
        "text": "Director de Finanzas: `roles/billing.admin` (Billing Account Administrator); Líderes de proyecto: `roles/billing.user` (Billing Account User).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "`roles/billing.admin` permite la administración total de la cuenta de facturación (tarjetas de crédito, presupuestos, permisos). `roles/billing.user` permite únicamente asociar proyectos a la cuenta de facturación sin acceso a modificar información bancaria ni detalles financieros confidenciales.",
    "distractors": {
      "A": "Invierte los privilegios: daría control de métodos de pago a los líderes de proyecto y restringiría al director financiero.",
      "B": "Desactivar facturación suspende los proyectos de producción.",
      "C": "Asignar permisos Owner universales viola el principio de menor privilegio y crea riesgos financieros y de seguridad.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/billing-access",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-072",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Servicio de Asistencia Activa (Active Assist): Inteligencia de Recomendaciones",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Optimización Inteligente Automatizada con Active Assist",
    "scenario": "Google Cloud incluye un portafolio de capacidades impulsadas por aprendizaje automático e inteligencia artificial que genera recomendaciones continuas para optimizar costos, seguridad, rendimiento y sostenibilidad en toda la organización. ¿Cómo se denomina este conjunto de herramientas?",
    "keywords": [
      "Active Assist",
      "Recomendaciones con IA",
      "Optimización continua",
      "Seguridad y costos",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Active Assist (que engloba a Recommender, Network Analyzer y herramientas de optimización automatizada)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "Un manual de usuario impreso de 1990",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "D",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Active Assist es el portafolio de herramientas inteligentes de Google Cloud (incluyendo Recommender, Network Analyzer, Cost Recommendations y Policy Intelligence) que utiliza IA y análisis predictivo para ayudar a los clientes a operar en la nube de forma más segura, económica y eficiente.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud Storage Archive almacena objetos de acceso infrecuente.",
      "C": "Los manuales antiguos de papel no ofrecen recomendaciones adaptativas con IA en tiempo real.",
      "D": "Cloud DNS resuelve nombres de dominio en Internet."
    },
    "officialDocUrl": "https://cloud.google.com/active-assist",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-073",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Network Analyzer: Detección Automática de Fallas de Configuración de Red",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Detección Proactiva de Errores de Red con Network Analyzer",
    "scenario": "Un administrador de red en Google Cloud desea que una herramienta automatizada detecte de forma proactiva problemas comunes en la VPC como: reglas de firewall que bloquean inadvertidamente el tráfico de los health checks de balanceadores de carga, rutas dinámicas no coincidentes o cuotas de direcciones IP casi agotadas. ¿Qué componente de Active Assist realiza este diagnóstico?",
    "keywords": [
      "Network Analyzer",
      "Diagnóstico de red",
      "Active Assist",
      "Reglas de firewall y Health Checks",
      "Prevención de caídas de red"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Play Console",
        "isTrap": true,
        "trapType": "app_store_mismatch"
      },
      {
        "letter": "B",
        "text": "Network Analyzer (en el Centro de Inteligencia de Red / Network Intelligence Center)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Desconectar los cables de red de la oficina",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "Network Analyzer monitorea continuamente las configuraciones de red de la VPC y analiza la topología para identificar proactivamente errores de configuración, dependencias rotas y cuotas al límite antes de que causen interrupciones de servicio a los usuarios.",
    "distractors": {
      "A": "Google Play Console gestiona aplicaciones móviles Android.",
      "B": "Opción correcta.",
      "C": "Cloud Storage Coldline almacena archivos pasivos.",
      "D": "Desconectar cables locales no soluciona errores en redes VPC de la nube."
    },
    "officialDocUrl": "https://cloud.google.com/network-intelligence-center/docs/network-analyzer/overview",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-074",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Billing: Alertas de Anomalías de Costos (Cost Anomaly Detection)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Detección Automatizada de Picos de Gasto Anómalos con Detección de Anomalías de Facturación",
    "scenario": "Un desarrollador despliega accidentalmente un script con un bucle infinito que invoca millones de funciones serverless, provocando un aumento súbito e inusual en la tasa de facturación en pocas horas. ¿Qué capacidad de Cloud Billing detecta automáticamente estos picos inusuales de gasto en comparación con el patrón de consumo histórico y envía alertas tempranas?",
    "keywords": [
      "Detección de anomalías de costos",
      "Cost Anomaly Detection",
      "Cloud Billing",
      "Picos de gasto inusuales",
      "FinOps proactivo"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Desinstalar las computadoras de la empresa",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Detección de anomalías de costos en Cloud Billing (Cost Anomaly Detection basado en ML)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Esperar a recibir la factura final 30 días después y sorprenderse",
        "isTrap": true,
        "trapType": "reactive_antipattern"
      }
    ],
    "correct": "C",
    "explanation": "La detección de anomalías de costos en Cloud Billing utiliza modelos de Machine Learning para analizar las tendencias de gasto histórico y alertar a los administradores cuando se identifica un gasto inesperadamente alto en un proyecto o servicio, permitiendo intervenir de inmediato.",
    "distractors": {
      "A": "Cloud Storage Archive es para almacenamiento de objetos pasivos.",
      "B": "Desinstalar computadoras no detiene los recursos que corren en la nube.",
      "C": "Opción correcta.",
      "D": "Esperar a fin de mes impide mitigar el gasto antes de incurrir en costos masivos."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/cost-anomalies",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D4-075",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Resumen de FinOps: Cultura de Responsabilidad Financiera Compartida",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Cultura de Responsabilidad Financiera en la Nube (FinOps)",
    "scenario": "En una empresa tradicional, el departamento de finanzas solo recibía una factura fija de TI al año. En Google Cloud, los ingenieros pueden crear recursos que generan costos en segundos. ¿Cuál es el cambio cultural fundamental que promueve la disciplina de FinOps?",
    "keywords": [
      "FinOps",
      "Responsabilidad financiera compartida",
      "Cultura de costos",
      "Ingeniería y Finanzas",
      "Valor de negocio"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Prohibir que los ingenieros desplieguen software y regresar al papel y lápiz.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Hacer que el departamento de finanzas programe todo el software de la empresa.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "FinOps significa gastar la mayor cantidad de dinero posible sin ningún control.",
        "isTrap": true,
        "trapType": "opposite_premise"
      },
      {
        "letter": "D",
        "text": "Fomentar la responsabilidad compartida donde los ingenieros toman propiedad del impacto financiero de sus decisiones arquitectónicas, colaborando estrechamente con finanzas para maximizar el valor de negocio por cada dólar invertido.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "FinOps es una práctica cultural y operativa que une a los equipos de tecnología, finanzas y negocio, capacitando a los ingenieros para entender el costo de sus arquitecturas y optimizar continuamente el gasto para impulsar el crecimiento empresarial.",
    "distractors": {
      "A": "Prohibir el desarrollo de software paraliza la innovación de la empresa.",
      "B": "Finanzas y tecnología colaboran en gobernanza, pero cada área mantiene sus especialidades técnicas.",
      "C": "FinOps promueve la eficiencia y maximización del valor económico, no el despilfarro.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/learn/what-is-finops",
    "blockId": "BLOCK-5"
  },
  {
    "id": "CDL-D1-026",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Velocidad de Innovación y Reducción del Costo de Falla (Fail Fast)",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Cultura de Experimentación y 'Aprender Rápido' (Fail Fast, Learn Faster)",
    "scenario": "Una empresa de medios digitales desea fomentar que sus equipos prueben nuevas ideas de productos sin temor a que un experimento fallido resulte en una pérdida financiera masiva de infraestructura. ¿Cómo respalda Google Cloud este enfoque cultural?",
    "keywords": [
      "Fail Fast",
      "Experimentación de bajo costo",
      "Servicios serverless",
      "Innovación rápida",
      "Pago por uso"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Impidiendo apagar o eliminar cualquier recurso que haya sido desplegado en la consola de Google Cloud.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Obligando a los equipos a firmar contratos de 5 años antes de poder encender una sola función serverless.",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "C",
        "text": "Al permitir crear prototipos rápidamente con servicios administrados y serverless pagando solo por los minutos utilizados, reduciendo a casi cero el costo financiero de descartar una hipótesis fallida.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Sancionando económicamente a los desarrolladores cuyos prototipos no alcancen un millón de usuarios en su primera semana.",
        "isTrap": true,
        "trapType": "punitive_antipattern"
      }
    ],
    "correct": "C",
    "explanation": "La computación elástica y los entornos serverless democratizan la innovación: las organizaciones pueden probar decenas de ideas en paralelo con costos mínimos; si una idea funciona se escala al instante, y si falla se apaga en segundos sin costos residuales.",
    "distractors": {
      "A": "Los recursos de Google Cloud se pueden eliminar o pausar en cualquier momento para detener la facturación.",
      "B": "Los servicios serverless no requieren contratos forzosos ni compromisos a largo plazo.",
      "C": "Opción correcta.",
      "D": "Penalizar los experimentos fallidos destruye la cultura de innovación y genera aversión al riesgo."
    },
    "officialDocUrl": "https://cloud.google.com/serverless",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D1-027",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Valor de APIs de IA Preentrenadas para Experimentación Rápida",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aceleración de Funcionalidades Inteligentes con Modelos Preentrenados",
    "scenario": "Una startup de tecnología legal necesita extraer automáticamente texto y entidades de miles de contratos escaneados en PDF. No cuentan con científicos de datos especializados en visión artificial o procesamiento de lenguaje natural. ¿Cuál es el camino más eficiente?",
    "keywords": [
      "Modelos preentrenados",
      "Document AI",
      "Cloud Vision",
      "Sin ciencia de datos",
      "Time-to-value"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Escribir a mano cada contrato en un bloc de notas físico antes de ingresarlo al sistema.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Comprar servidores físicos GPU locales y esperar a que el personal aprenda matemáticas avanzadas.",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "C",
        "text": "Contratar a 20 investigadores de PhD para construir y entrenar una red neuronal convolucional personalizada desde cero durante tres años.",
        "isTrap": true,
        "trapType": "overengineering_overhead"
      },
      {
        "letter": "D",
        "text": "Utilizar APIs de IA preentrenadas y listas para usar de Google Cloud, como Document AI y Vision API, que procesan documentos mediante simples llamadas REST sin necesidad de entrenar modelos desde cero.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Las APIs de IA preentrenadas de Google Cloud (como Document AI, Cloud Vision y Translation API) encapsulan años de investigación de Google y están listas para integrarse inmediatamente en aplicaciones empresariales sin requerir experiencia en Machine Learning.",
    "distractors": {
      "A": "La captura manual es propensa a errores, lenta e inviable para miles de contratos.",
      "B": "Comprar hardware GPU on-premise introduce altos costos de capital y retrasos de configuración.",
      "C": "Entrenar modelos propios desde cero cuando existen soluciones preentrenadas líderes en la industria retrasa innecesariamente el time-to-market.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/document-ai",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D1-028",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Centro de Excelencia en la Nube (CCoE - Cloud Center of Excellence)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Rol del Centro de Excelencia en la Nube (CCoE) en la Gobernanza Empresarial",
    "scenario": "Un conglomerado empresarial con múltiples divisiones de negocio autónomas está experimentando adopción desordenada de la nube, con políticas de seguridad dispares y gastos descontrolados. ¿Qué estructura organizativa debe establecer para liderar las mejores prácticas?",
    "keywords": [
      "CCoE",
      "Cloud Center of Excellence",
      "Centro de Excelencia",
      "Gobernanza",
      "Estandarización"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Un Centro de Excelencia en la Nube (CCoE) multidisciplinario que defina estándares arquitectónicos, guardarraíles de seguridad, políticas de FinOps y capacite a las demás unidades de negocio.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Un comité que prohíba a cualquier unidad de negocio utilizar computadoras o internet.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Dejar que cada equipo compre cuentas de nube individuales con tarjetas de crédito personales sin ninguna supervisión.",
        "isTrap": true,
        "trapType": "shadow_it_antipattern"
      },
      {
        "letter": "D",
        "text": "Obligar a que un único administrador apruebe manualmente cada comando ejecutado en la terminal por cualquier empleado.",
        "isTrap": true,
        "trapType": "bottleneck_antipattern"
      }
    ],
    "correct": "A",
    "explanation": "El CCoE (Cloud Center of Excellence) es un equipo multifuncional (seguridad, operaciones, finanzas, arquitectura) responsable de guiar y habilitar la adopción segura, eficiente y estandarizada de la nube en toda la empresa mediante mejores prácticas y gobernanza.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Prohibir la tecnología destruye la viabilidad comercial de la empresa.",
      "C": "El Shadow IT descontrolado genera riesgos graves de seguridad, incumplimiento normativo y costos duplicados.",
      "D": "Crear un cuello de botella de aprobación manual destruye la agilidad que la nube ofrece."
    },
    "officialDocUrl": "https://cloud.google.com/adoption-framework",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D1-029",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Impacto del Trabajo Remoto y Colaboración Moderna con Google Workspace",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Habilitación de la Colaboración en Tiempo Real y Productividad Cloud",
    "scenario": "Una empresa con oficinas en 15 países tiene problemas de productividad porque los empleados envían múltiples versiones de archivos por correo electrónico, generando discrepancias de datos y pérdida de tiempo. ¿Cómo resuelve Google Workspace este problema de colaboración?",
    "keywords": [
      "Google Workspace",
      "Colaboración en tiempo real",
      "Fuente única de verdad",
      "Productividad en la nube"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Eliminando todos los respaldos y versiones previas de los documentos de forma permanente.",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "B",
        "text": "Permitiendo la edición simultánea y en tiempo real de documentos en la nube con guardado automático, control de versiones integrado y acceso seguro desde cualquier dispositivo.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Obligando a los empleados a viajar semanalmente a la sede central para sincronizar sus discos duros mediante cables USB.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Impidiendo que más de una persona abra un documento en el mismo mes calendario.",
        "isTrap": true,
        "trapType": "counterproductive"
      }
    ],
    "correct": "B",
    "explanation": "Google Workspace es una suite de productividad nativa de la nube que permite a equipos globales colaborar de forma sincrónica en una única fuente de verdad documental, con historial de versiones instantáneo y seguridad empresarial.",
    "distractors": {
      "A": "Workspace mantiene un historial de versiones granular y seguro que permite auditar y revertir cambios en cualquier momento.",
      "B": "Opción correcta.",
      "C": "Los traslados físicos para sincronización son inviables y opuestos a la digitalización moderna.",
      "D": "Bloquear documentos por meses paraliza la operación comercial."
    },
    "officialDocUrl": "https://workspace.google.com",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D1-030",
    "certId": "cdl",
    "domainId": "CDL-D1",
    "domainName": "1. Transformación Digital con Google Cloud",
    "subtopic": "Evolución de la IA Generativa en Procesos de Negocio",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Transformación de Flujos de Trabajo Corporativos con IA Generativa (GenAI)",
    "scenario": "El equipo de atención al cliente de una aerolínea maneja millones de consultas sobre políticas de equipaje y cancelaciones de vuelos. Desean automatizar la generación de respuestas precisas y empáticas basadas estrictamente en sus manuales operativos internos. ¿Qué tecnología de Google Cloud es la más idónea?",
    "keywords": [
      "IA Generativa",
      "GenAI",
      "Vertex AI Search and Conversation",
      "Modelos Fundacionales",
      "Grounding"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Un script en bash local que envíe correos electrónicos vacíos a todos los clientes.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Un sistema de fax automatizado que imprima los manuales completos de 500 páginas y los envíe por paquetería postal.",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "C",
        "text": "Vertex AI Search and Conversation respaldado por modelos fundacionales con anclaje (grounding) directo en la base de conocimiento y manuales oficiales de la aerolínea.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Un servidor Compute Engine sin conexión a internet que devuelva respuestas aleatorias no verificadas.",
        "isTrap": true,
        "trapType": "dangerous_practice"
      }
    ],
    "correct": "C",
    "explanation": "Vertex AI Search and Conversation permite desplegar agentes de IA generativa conectados de forma segura (grounded) a los repositorios de datos corporativos de la empresa, garantizando respuestas precisas, veraces y basadas en la documentación oficial de la aerolínea.",
    "distractors": {
      "A": "Enviar correos vacíos degrada la experiencia del cliente y destruye la confianza en la marca.",
      "B": "El envío físico por fax o paquetería postal no resuelve la inmediatez que exige la atención de vuelos.",
      "C": "Opción correcta.",
      "D": "Las respuestas aleatorias en aviación pueden provocar errores graves de cumplimiento y demandas legales."
    },
    "officialDocUrl": "https://cloud.google.com/generative-ai-app-builder",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-076",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Ingesta y Calidad de Datos con Cloud Dataflow: Ventanas de Tiempo (Windowing)",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Agrupación de Datos de Streaming por Ventanas de Tiempo (Windowing) en Cloud Dataflow",
    "scenario": "Una empresa de juegos multijugador recibe millones de eventos de puntuación continuos por streaming. Necesitan calcular las puntuaciones promedio de los jugadores en bloques de 5 minutos que se deslizan cada 1 minuto (Sliding Windows), manejando datos que llegan con retraso por mala conexión móvil. ¿Qué tecnología y concepto resuelven este requerimiento?",
    "keywords": [
      "Cloud Dataflow",
      "Windowing",
      "Sliding Windows",
      "Datos tardíos",
      "Apache Beam streaming"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive con scripts ejecutados anualmente.",
        "isTrap": true,
        "trapType": "archive_mismatch"
      },
      {
        "letter": "B",
        "text": "Guardar las puntuaciones en un archivo de texto en una memoria flash.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Descartar todos los datos que no lleguen en menos de 1 microsegundo exacto.",
        "isTrap": true,
        "trapType": "data_loss_antipattern"
      },
      {
        "letter": "D",
        "text": "Cloud Dataflow con estrategias de ventanas de tiempo (Windowing) y marcas de agua (Watermarks) basadas en Apache Beam.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Apache Beam y Cloud Dataflow proporcionan capacidades avanzadas de manejo de flujos de datos (streaming), permitiendo segmentar flujos continuos en ventanas de tiempo fijas, deslizantes o de sesión (Windowing) y gestionar eventos que llegan con retraso mediante marcas de agua (Watermarks) y acumuladores.",
    "distractors": {
      "A": "Archive Storage es para archivado de largo plazo y no soporta procesamiento de ventanas continuas de 1 minuto.",
      "B": "Las memorias físicas locales carecen de escalabilidad y tolerancia a fallos distribuida.",
      "C": "Descartar datos tardíos destruye la precisión de las tablas de clasificación de jugadores.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/dataflow/docs/concepts/streaming-pipelines",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-077",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Generative AI: Ingeniería de Prompts (Prompt Engineering) y Anclaje (Grounding)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Reducción de Alucinaciones en IA Generativa mediante Anclaje (Grounding) en Vertex AI",
    "scenario": "Una empresa de seguros utiliza un modelo de lenguaje en Vertex AI para responder dudas de pólizas a los asegurados. En las pruebas iniciales, el modelo a veces 'inventa' coberturas que no existen en el contrato (alucinación). ¿Qué técnica y capacidad de Google Cloud debe aplicarse para fundamentar las respuestas únicamente en los documentos contractuales reales de la empresa?",
    "keywords": [
      "Grounding",
      "Anclaje en datos reales",
      "Reducción de alucinaciones",
      "Vertex AI",
      "RAG"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Anclar el modelo (Grounding) conectándolo a la base de conocimiento y documentos oficiales de la empresa a través de Vertex AI Search (técnica RAG - Retrieval-Augmented Generation).",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Aceptar todas las reclamaciones falsas inventadas por el modelo sin verificar.",
        "isTrap": true,
        "trapType": "dangerous_practice"
      },
      {
        "letter": "C",
        "text": "Aumentar la creatividad y temperatura del modelo al valor máximo posible.",
        "isTrap": true,
        "trapType": "increases_hallucination"
      },
      {
        "letter": "D",
        "text": "Apagar el sistema de seguros y no ofrecer atención a ningún cliente.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "A",
    "explanation": "El anclaje (Grounding) vincula la salida de los modelos fundacionales de IA generativa a fuentes de información verificadas y específicas de la empresa (como repositorios en Vertex AI Search). Esto minimiza las alucinaciones y garantiza que las respuestas se basen en datos fácticos y auditables.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Pagar reclamaciones inexistentes causaría pérdidas financieras masivas inmediatas.",
      "C": "Aumentar la temperatura y creatividad incrementa la probabilidad de que el modelo alucine e invente información falsa.",
      "D": "Cerrar la atención al cliente destruye el negocio de la empresa aseguradora."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/generative-ai/grounding/overview",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-078",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Dataprep vs Data Fusion vs Dataflow: Matriz de Selección",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Selección del Servicio de Procesamiento de Datos Adecuado: Dataflow vs Dataproc vs Data Fusion vs Dataprep",
    "scenario": "Un líder técnico debe asignar las herramientas de datos de Google Cloud a 4 perfiles: (1) Desarrolladores Apache Beam que requieren streaming serverless, (2) Ingenieros con código Spark/Hadoop legado, (3) Diseñadores visuales de ETL con CDAP, y (4) Analistas de negocio que limpian hojas de datos visualmente. ¿Cuál es el mapeo exacto?",
    "keywords": [
      "Dataflow",
      "Dataproc",
      "Data Fusion",
      "Dataprep",
      "Matriz de selección ETL"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "(1) Data Fusion, (2) Dataprep, (3) Dataflow, (4) Dataproc",
        "isTrap": true,
        "trapType": "misaligned_services"
      },
      {
        "letter": "B",
        "text": "(1) Dataflow, (2) Dataproc, (3) Data Fusion, (4) Dataprep",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Utilizar Cloud DNS para todos los perfiles de datos",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "(1) Dataproc, (2) Dataflow, (3) Dataprep, (4) Data Fusion",
        "isTrap": true,
        "trapType": "misaligned_services"
      }
    ],
    "correct": "B",
    "explanation": "Dataflow ejecuta pipelines Apache Beam serverless (batch/streaming); Dataproc hospeda clústeres gestionados de Spark/Hadoop; Data Fusion ofrece integración visual ETL basada en CDAP; y Dataprep permite a los analistas de negocio limpiar datos visualmente sin código.",
    "distractors": {
      "A": "Mapea erróneamente los motores de ejecución y las interfaces de usuario.",
      "B": "Opción correcta.",
      "C": "Cloud DNS es un sistema de resolución de nombres de red, no procesa datos.",
      "D": "Invierte Dataflow y Dataproc, y confunde la orientación de Data Fusion y Dataprep."
    },
    "officialDocUrl": "https://cloud.google.com/products/data-analytics",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-079",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Arquitectura Lambda vs Arquitectura Kappa",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Unificación de Procesamiento de Datos con la Arquitectura Kappa en Google Cloud",
    "scenario": "Tradicionalmente, las arquitecturas Lambda requerían mantener dos bases de código separadas: una para procesamiento por lotes (batch) y otra para tiempo real (streaming). ¿Cómo simplifica Google Cloud (con Apache Beam y Dataflow) esta complejidad arquitectónica hacia un modelo unificado (Arquitectura Kappa)?",
    "keywords": [
      "Arquitectura Kappa",
      "Arquitectura Lambda",
      "Apache Beam",
      "Dataflow",
      "Código unificado batch y stream"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Obligando a los desarrolladores a programar el sistema tres veces en diferentes lenguajes.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Eliminando la capacidad de procesar datos históricos en la empresa.",
        "isTrap": true,
        "trapType": "data_loss_antipattern"
      },
      {
        "letter": "C",
        "text": "Permitiendo escribir una única lógica de procesamiento en Apache Beam que se ejecuta de forma idéntica tanto para fuentes de datos por lotes (históricas) como en streaming (tiempo real) sobre Cloud Dataflow.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Reemplazando todo el software por llamadas telefónicas manuales a los clientes.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "El modelo unificado de Apache Beam y Cloud Dataflow elimina la necesidad de mantener canalizaciones duales desconectadas (Arquitectura Lambda). Con un único marco conceptual (`PCollection` y `PTransform`), el mismo pipeline procesa tanto datos finitos (lotes) como infinitos (streaming).",
    "distractors": {
      "A": "La unificación busca reducir el esfuerzo de desarrollo a una sola base de código, no triplicarlo.",
      "B": "El procesamiento por lotes sigue siendo totalmente soportado bajo el mismo modelo.",
      "C": "Opción correcta.",
      "D": "Las llamadas manuales no forman parte de una arquitectura moderna de datos."
    },
    "officialDocUrl": "https://cloud.google.com/dataflow/docs/concepts/beam-programming-model",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-080",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Dataplex: Zonas de Datos (Raw vs Curated)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Organización de Lago de Datos en Zonas Crudas (Raw) y Curadas (Curated) en Dataplex",
    "scenario": "Una empresa organiza su Data Lake en Dataplex. Tienen datos recién ingresados sin procesar que contienen posibles inconsistencias (Zona Cruda o Raw Zone) y datos limpios, estandarizados y validados listos para el consumo de los analistas de negocio (Zona Curada o Curated Zone). ¿Cuál es la ventaja de separar estas zonas lógicas?",
    "keywords": [
      "Dataplex",
      "Zonas de datos",
      "Raw Zone",
      "Curated Zone",
      "Gobernanza de calidad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Duplica la tarifa de almacenamiento de Google Cloud por diez.",
        "isTrap": true,
        "trapType": "untrue_cost_claim"
      },
      {
        "letter": "B",
        "text": "Obliga a que todos los datos se borren cada 30 minutos de forma irrevocable.",
        "isTrap": true,
        "trapType": "data_loss_antipattern"
      },
      {
        "letter": "C",
        "text": "Evita que los analistas puedan utilizar herramientas de visualización como Looker.",
        "isTrap": true,
        "trapType": "counterproductive"
      },
      {
        "letter": "D",
        "text": "Permite aislar datos no confiables o crudos, aplicar políticas de acceso diferenciadas y garantizar que las decisiones de negocio se tomen únicamente sobre datos validados y de alta calidad.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Dataplex permite agrupar recursos de almacenamiento en zonas lógicas (Raw y Curated). Esto facilita una gobernanza granular, asegurando que los científicos de datos puedan acceder a datos crudos mientras los analistas de negocio consumen datos aprobados y estandarizados.",
    "distractors": {
      "A": "Dataplex organiza recursos existentes sin imponer penalizaciones arbitrarias de costos de almacenamiento.",
      "B": "Dataplex organiza y gobierna los datos; no borra información intencionalmente.",
      "C": "La zona curada está diseñada precisamente para alimentar herramientas de BI como Looker con datos limpios.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/dataplex/docs/organize-data",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-081",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Vertex AI Pipelines: Automatización y Reproducibilidad de MLOps",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Canalizaciones de Machine Learning Reproducibles y Sin Servidor con Vertex AI Pipelines",
    "scenario": "Un equipo de MLOps necesita automatizar el reentrenamiento semanal de sus modelos de recomendación: extraer datos nuevos de BigQuery, validar que no haya datos corruptos, reentrenar el modelo, evaluarlo contra el modelo en producción y desplegarlo solo si su precisión supera un umbral definido. ¿Qué herramienta de Vertex AI orquesta este flujo de forma serverless?",
    "keywords": [
      "Vertex AI Pipelines",
      "MLOps",
      "Kubeflow Pipelines",
      "Reentrenamiento automatizado",
      "Reproducibilidad"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Vertex AI Pipelines (basado en Kubeflow Pipelines y TFX)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Google Cloud CDN",
        "isTrap": true,
        "trapType": "cdn_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Interconnect Dedicated",
        "isTrap": true,
        "trapType": "telecom_mismatch"
      },
      {
        "letter": "D",
        "text": "Ejecutar un script manualmente en una laptop personal con la tapa cerrada",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "A",
    "explanation": "Vertex AI Pipelines permite orquestar y automatizar flujos de trabajo de Machine Learning de extremo a extremo sin servidor utilizando marcos estándar como Kubeflow Pipelines (KFP) o TensorFlow Extended (TFX), rastreando artefactos y linaje de datos de forma automática.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud CDN es una red de entrega de contenido en caché perimetral.",
      "C": "Cloud Interconnect es conectividad física de telecomunicaciones.",
      "D": "Cerrar la laptop suspende la ejecución; la automatización empresarial debe correr en la nube sin depender de máquinas locales."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/pipelines/introduction",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-082",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Vertex AI Model Registry: Gobernanza y Versionado de Modelos",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Control Centralizado del Ciclo de Vida de Modelos con Vertex AI Model Registry",
    "scenario": "Una empresa opera decenas de versiones de modelos de Machine Learning entrenados por diferentes científicos de datos. Requieren un catálogo centralizado para registrar versiones de modelos, rastrear su linaje, probarlos con evaluación comparativa y controlar su despliegue a producción. ¿Qué servicio de Vertex AI gestiona este ciclo?",
    "keywords": [
      "Vertex AI Model Registry",
      "Versionado de modelos",
      "Gobernanza de ML",
      "Linaje de modelos",
      "Despliegue a producción"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Nearline sin nombres",
        "isTrap": true,
        "trapType": "unstructured_storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Vertex AI Model Registry",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Enviar los modelos por WhatsApp al equipo de soporte",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Compute Engine Preemptible Instances",
        "isTrap": true,
        "trapType": "vm_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Vertex AI Model Registry es un repositorio centralizado donde los equipos pueden gestionar el ciclo de vida completo de sus modelos de Machine Learning, incluyendo control de versiones, evaluación, documentación con Model Cards y despliegue a endpoints de predicción.",
    "distractors": {
      "A": "Guardar archivos sin metadatos en Cloud Storage carece de trazabilidad, gobierno y versionado formal de MLOps.",
      "B": "Opción correcta.",
      "C": "WhatsApp no es un canal seguro ni auditable para el despliegue de modelos de producción.",
      "D": "Preemptible Instances son máquinas virtuales temporales con descuento, no un registro de modelos."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/model-registry/introduction",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-083",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Vertex AI Endpoints: Predicción en Línea (Online) vs Predicción por Lotes (Batch)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Elección entre Predicciones en Tiempo Real (Online Prediction) y Predicciones por Lotes (Batch Prediction)",
    "scenario": "Un equipo de ingeniería de IA debe desplegar dos modelos: (1) Un modelo de aprobación instantánea de transacciones con tarjeta que debe responder en 50 milisegundos cuando el usuario paga, y (2) Un modelo que calcula calificaciones de riesgo para 10 millones de clientes una vez por semana durante la noche. ¿Qué método de predicción de Vertex AI corresponde a cada caso?",
    "keywords": [
      "Online Prediction",
      "Batch Prediction",
      "Predicción en tiempo real",
      "Predicción por lotes",
      "Vertex AI"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Ningún modelo puede ejecutarse en la nube",
        "isTrap": true,
        "trapType": "untrue_claim"
      },
      {
        "letter": "B",
        "text": "(1) Predicción por lotes; (2) Predicción en línea",
        "isTrap": true,
        "trapType": "inverted_solution"
      },
      {
        "letter": "C",
        "text": "(1) Predicción en línea (Online Prediction en Vertex AI Endpoints); (2) Predicción por lotes (Batch Prediction en Vertex AI)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Ambos deben ejecutarse en un teléfono móvil apagado",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "Online Prediction despliega el modelo en un endpoint siempre activo para procesar solicitudes HTTP inmediatas con baja latencia (50 ms). Batch Prediction procesa grandes volúmenes de datos almacenados en Cloud Storage o BigQuery de forma asíncrona y eficiente, apagando los recursos cuando el trabajo finaliza.",
    "distractors": {
      "A": "Google Cloud es una plataforma líder para ejecutar inferencia de IA a escala masiva.",
      "B": "Usar predicción por lotes para transacciones bancarias haría que los clientes esperaran horas en la caja para pagar.",
      "C": "Opción correcta.",
      "D": "Un dispositivo apagado no realiza cómputo."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/predictions/overview",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-084",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Afinamiento de Modelos (Fine-Tuning) vs Ingeniería de Prompts (Prompt Design)",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Estrategias de Adaptación de Modelos de Lenguaje: Prompt Design vs Fine-Tuning",
    "scenario": "Un equipo de producto evalúa cómo adaptar un modelo fundacional de Vertex AI para generar resúmenes médicos con terminología clínica extremadamente específica. Inicialmente probaron proporcionar ejemplos en el prompt (Few-shot Prompting), pero los resultados requieren que el modelo internalice permanentemente miles de términos de patología médica. ¿Qué técnica avanzada de adaptación deben aplicar?",
    "keywords": [
      "Fine-Tuning",
      "Ajuste fino de modelos",
      "Prompt Engineering",
      "Vertex AI",
      "Modelos fundacionales"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Eliminar todos los términos médicos y reemplazarlos por palabras genéricas en inglés básico.",
        "isTrap": true,
        "trapType": "degraded_solution"
      },
      {
        "letter": "B",
        "text": "Desactivar la inteligencia artificial y redactar todos los resúmenes a mano.",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Reescribir el modelo completo en lenguaje ensamblador desde cero.",
        "isTrap": true,
        "trapType": "absurd_complexity"
      },
      {
        "letter": "D",
        "text": "Realizar un ajuste fino (Fine-Tuning / Model Tuning) del modelo en Vertex AI utilizando un conjunto de datos etiquetado de ejemplos médicos para ajustar los pesos del modelo.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "El ajuste fino (Fine-Tuning) en Vertex AI entrena un modelo fundacional existente con un conjunto de datos especializado del cliente para ajustar sus parámetros, permitiéndole dominar tareas específicas, jergas de nicho o estilos estructurados que no se logran solo con prompts.",
    "distractors": {
      "A": "Degradar el lenguaje médico compromete la utilidad y precisión clínica del sistema.",
      "B": "El trabajo manual no resuelve la escala requerida por la institución de salud.",
      "C": "Reescribir modelos de miles de millones de parámetros en ensamblador es inviable.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/generative-ai/models/tune-models",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-085",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Vertex AI Search: Indexación de Datos Multimodales y Búsqueda Vectorial",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Búsqueda Semántica Vectorial con Vertex AI Vector Search",
    "scenario": "Una tienda de muebles en línea desea que sus usuarios puedan buscar productos no solo por palabras clave exactas, sino subiendo una foto de su sala de estar o buscando conceptos abstractos como 'sillón acogedor para lectura nórdica'. ¿Qué tecnología de Google Cloud habilita búsquedas semánticas y multimodales de ultra alta velocidad a través de incrustaciones vectoriales (embeddings)?",
    "keywords": [
      "Vertex AI Vector Search",
      "Vector Search",
      "Embeddings",
      "Búsqueda semántica",
      "Búsqueda por similitud"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Vertex AI Vector Search (anteriormente Matching Engine)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud SQL for MySQL con comandos LIKE '%palabra%'",
        "isTrap": true,
        "trapType": "slow_relational_search"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Google Cloud Armor",
        "isTrap": true,
        "trapType": "security_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Vertex AI Vector Search (construido sobre la tecnología Matching Engine de Google) es una base de datos vectorial líder en la industria capaz de buscar entre miles de millones de elementos vectoriales (embeddings) con latencia de milisegundos a escala masiva para búsquedas semánticas y recomendaciones.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Las consultas SQL `LIKE` tradicionales solo buscan coincidencias exactas de texto; no entienden similitud semántica, sinónimos ni imágenes.",
      "C": "Cloud Storage Archive almacena archivos fríos; no realiza búsquedas vectoriales por similitud.",
      "D": "Cloud Armor es un servicio de firewall de aplicaciones web (WAF)."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/vector-search/overview",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-086",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Gobernanza de Acceso a Nivel de Columnas y Filas en BigQuery",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Seguridad Granular con Enmascaramiento Dinámico y Seguridad a Nivel de Fila (Row-Level Security) en BigQuery",
    "scenario": "Una empresa de recursos humanos tiene una tabla de empleados en BigQuery. La política de seguridad exige que: (1) Los gerentes regionales solo puedan ver las filas correspondientes a los empleados de su propio país, y (2) La columna de salario (`salary`) se enmascare automáticamente con asteriscos para todos los usuarios excepto para los directores de RRHH. ¿Qué funcionalidades de BigQuery implementan estos controles?",
    "keywords": [
      "Row-Level Security",
      "Column-Level Security",
      "Dynamic Data Masking",
      "BigQuery",
      "Menor privilegio"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Apagar BigQuery y usar hojas de cálculo compartidas sin contraseña.",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "B",
        "text": "Seguridad a nivel de fila (Row-Level Security) para filtrar registros por país y Seguridad a nivel de columna con enmascaramiento dinámico de datos (Dynamic Data Masking / Policy Tags) para ocultar salarios.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Crear 200 copias manuales de la tabla en proyectos diferentes y actualizarlas por correo electrónico.",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "D",
        "text": "Hacer públicos todos los salarios en el sitio web de la empresa para no tener que configurar políticas.",
        "isTrap": true,
        "trapType": "privacy_violation"
      }
    ],
    "correct": "B",
    "explanation": "BigQuery ofrece seguridad granular empresarial: Row-Level Security aplica filtros condicionales transparentes para que cada usuario solo consulte las filas autorizadas según su rol; y Column-Level Security con Dynamic Data Masking enmascara datos sensibles (como salarios o tarjetas) según las Policy Tags asignadas.",
    "distractors": {
      "A": "Las hojas de cálculo sin contraseña destruyen la seguridad y confidencialidad corporativa.",
      "B": "Opción correcta.",
      "C": "Duplicar tablas manualmente genera desincronización de datos y es imposible de auditar y gobernar.",
      "D": "Publicar salarios de empleados viola leyes de privacidad y políticas de recursos humanos."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/column-level-security-intro",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-087",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Spanner: Actualizaciones de Esquema sin Tiempo de Inactividad (Zero Downtime Schema Updates)",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Modificación de Esquemas de Base de Datos en Producción sin Interrupción en Cloud Spanner",
    "scenario": "Un juego multijugador global que utiliza Cloud Spanner necesita agregar tres nuevas columnas y un índice secundario a su tabla principal de jugadores. El juego tiene millones de usuarios activos concurrentes las 24 horas y no puede permitirse ninguna ventana de mantenimiento ni bloqueo de tablas. ¿Cómo maneja Cloud Spanner las actualizaciones de esquema (DDL)?",
    "keywords": [
      "Cloud Spanner",
      "Zero downtime schema updates",
      "DDL online",
      "Sin bloqueo de tablas",
      "Disponibilidad 24/7"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Spanner borra todos los datos de los usuarios cuando se ejecuta un comando DDL.",
        "isTrap": true,
        "trapType": "data_loss_antipattern"
      },
      {
        "letter": "B",
        "text": "No es posible modificar esquemas en Cloud Spanner una vez creada la base de datos.",
        "isTrap": true,
        "trapType": "false_limitation"
      },
      {
        "letter": "C",
        "text": "Cloud Spanner ejecuta cambios de esquema (DDL) en línea y en segundo plano sin bloquear las lecturas ni escrituras de la base de datos y sin requerir tiempo de inactividad de la aplicación.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Spanner requiere apagar el servicio durante 48 horas cada vez que se agrega una columna.",
        "isTrap": true,
        "trapType": "false_limitation"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Spanner está diseñado para una disponibilidad continua del 99.999%. Soporta modificaciones de esquema en línea (DDL) sin bloquear tablas para lecturas o escrituras, permitiendo que las aplicaciones globales evolucionen sin tiempos de inactividad planificados.",
    "distractors": {
      "A": "Cloud Spanner preserva la integridad de los datos existentes durante las modificaciones de esquema.",
      "B": "Cloud Spanner permite evolucionar esquemas de forma ágil y continua.",
      "C": "Opción correcta.",
      "D": "Exigir 48 horas de inactividad violaría el SLA del 99.999% de Cloud Spanner."
    },
    "officialDocUrl": "https://cloud.google.com/spanner/docs/schema-updates",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-088",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Cloud Spanner: Copias de Seguridad y Restauración a un Punto en el Tiempo (PITR)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Recuperación ante Errores de Aplicación con Point-in-Time Recovery (PITR) en Cloud Spanner",
    "scenario": "Un script de mantenimiento defectuoso ejecutó una sentencia `UPDATE` errónea que corrompió los saldos de clientes en Cloud Spanner a las 14:15 horas. La empresa necesita recuperar el estado exacto que tenían los datos a las 14:14 horas (un minuto antes de la corrupción) sin perder transacciones previas. ¿Qué funcionalidad proporciona esta recuperación granular?",
    "keywords": [
      "Cloud Spanner",
      "PITR",
      "Point-in-Time Recovery",
      "Recuperación a un punto en el tiempo",
      "Resiliencia"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Pedir a todos los clientes que recuerden su saldo y lo ingresen manualmente por chat.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Eliminar la base de datos completa y empezar la empresa desde cero.",
        "isTrap": true,
        "trapType": "catastrophic_antipattern"
      },
      {
        "letter": "C",
        "text": "Cloud Armor Security Policies",
        "isTrap": true,
        "trapType": "waf_mismatch"
      },
      {
        "letter": "D",
        "text": "Point-in-Time Recovery (PITR) en Cloud Spanner, que permite consultar o restaurar datos históricos continuos a nivel de microsegundos dentro de la ventana de retención configurada.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Point-in-Time Recovery (PITR) en Cloud Spanner protege contra la corrupción accidental de datos permitiendo realizar lecturas y recuperaciones a cualquier instante del pasado con precisión de microsegundos dentro del periodo de retención (hasta 7 días).",
    "distractors": {
      "A": "Pedir datos a los clientes genera desconfianza y es inviable.",
      "B": "Destruir la empresa no es una solución tecnológica válida ante un incidente recuperable.",
      "C": "Cloud Armor protege la red perimetral contra ataques web, no gestiona la recuperación temporal de bases de datos.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/spanner/docs/pitr",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-089",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Arquitectura de Datos para IA Generativa: Embeddings y Modelos de Lenguaje",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Flujo Completo de Generación Aumentada por Recuperación (RAG) en Google Cloud",
    "scenario": "Un arquitecto de soluciones diseña un sistema de asistencia legal con IA generativa utilizando Google Cloud. Los documentos legales se convierten en vectores numéricos (embeddings), se almacenan en una base de datos vectorial, y cuando un abogado hace una pregunta, el sistema recupera los fragmentos más relevantes y se los entrega al modelo Gemini para generar la respuesta final fundamentada. ¿Qué componentes de Google Cloud completan este flujo RAG?",
    "keywords": [
      "RAG",
      "Embeddings",
      "Vertex AI Vector Search",
      "Gemini",
      "Arquitectura de IA Generativa"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Vertex AI Text Embeddings API (generación de vectores) -> Vertex AI Vector Search (búsqueda de fragmentos por similitud) -> Gemini en Vertex AI (generación de la respuesta contextualizada).",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud SQL para MySQL -> Imprimir en papel -> Escanear con fax",
        "isTrap": true,
        "trapType": "legacy_antipattern"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline -> Cloud Logging -> Cloud Trace -> Cloud Billing",
        "isTrap": true,
        "trapType": "misaligned_services"
      },
      {
        "letter": "D",
        "text": "Compute Engine sin conexión a Internet -> Guardar en diskettes magnéticos",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "A",
    "explanation": "El patrón RAG (Retrieval-Augmented Generation) en Google Cloud se implementa mediante la API de Embeddings de Vertex AI para transformar texto en vectores, Vertex AI Vector Search para la búsqueda ultrarrápida de similitud de los documentos relevantes, y los modelos Gemini de Vertex AI para sintetizar la respuesta final fundamentada.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Los procesos físicos de fax no permiten la interacción digital automatizada en tiempo real.",
      "C": "Combina herramientas de operaciones y monitoreo sin funciones de procesamiento de lenguaje natural.",
      "D": "El hardware arcaico e infraestructura aislada no pueden ejecutar modelos modernos de IA generativa."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/generative-ai/rag-overview",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D2-090",
    "certId": "cdl",
    "domainId": "CDL-D2",
    "domainName": "2. Innovación con Datos y Google Cloud",
    "subtopic": "Estrategia Global de Innovación con Datos en Google Cloud",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Ecosistema Unificado de Datos e IA de Google Cloud para la Toma de Decisiones Estratégicas",
    "scenario": "El Director General (CEO) de una corporación global solicita un resumen estratégico de cómo las soluciones de datos de Google Cloud permiten a la empresa pasar de una operación reactiva basada en hojas de cálculo a una organización predictiva impulsada por datos e inteligencia artificial. ¿Cuál es la síntesis de mayor valor empresarial?",
    "keywords": [
      "Ecosistema de datos",
      "Organización orientada a datos",
      "Data-driven",
      "Analítica predictiva",
      "Ventaja competitiva"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Cloud exige que las empresas dejen de tomar decisiones y deleguen toda la gestión corporativa a software sin supervisión.",
        "isTrap": true,
        "trapType": "dystopian_fallacy"
      },
      {
        "letter": "B",
        "text": "Google Cloud integra ingesta masiva (Pub/Sub), lagos y almacenes de datos gobernados (Cloud Storage, BigQuery, Dataplex), procesamiento en tiempo real (Dataflow) y plataformas de IA/ML (Vertex AI y Gemini), permitiendo transformar datos crudos en decisiones automatizadas, predictivas y en tiempo real a escala global.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "La nube solo sirve para reducir el costo de comprar papel de impresora en las oficinas.",
        "isTrap": true,
        "trapType": "absurd_reductive"
      },
      {
        "letter": "D",
        "text": "Google Cloud simplemente vende computadoras físicas para que los empleados jueguen videojuegos en horas de trabajo.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "El ecosistema integral de datos e inteligencia artificial de Google Cloud permite a las organizaciones consolidar silos, democratizar el acceso a la analítica, automatizar procesos con modelos de Machine Learning y GenAI, y generar ventajas competitivas sostenibles mediante decisiones predictivas en tiempo real.",
    "distractors": {
      "A": "Google Cloud empodera a los líderes y equipos humanos con mejores herramientas e información; no reemplaza la gobernanza corporativa.",
      "B": "Opción correcta.",
      "C": "Reducir la transformación digital al ahorro de papel ignora el valor estratégico y transformador de la nube.",
      "D": "La nube es una plataforma empresarial seria para la innovación tecnológica y de negocios."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/smart-analytics",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-076",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Firebase y Google Cloud: Sinergia para el Desarrollo Móvil y Web",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aceleración del Desarrollo de Apps Móviles con Firebase y Google Cloud",
    "scenario": "Un equipo de desarrollo móvil crea una aplicación para iOS y Android. Quieren herramientas integradas para autenticación de usuarios por redes sociales, base de datos en tiempo real, pruebas de aplicaciones (Crashlytics) y notificaciones push (FCM), integradas nativamente con los servicios de infraestructura de Google Cloud. ¿Qué plataforma para desarrolladores deben utilizar?",
    "keywords": [
      "Firebase",
      "Google Cloud",
      "Desarrollo móvil",
      "Crashlytics",
      "Autenticación",
      "FCM"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Interconnect Dedicated",
        "isTrap": true,
        "trapType": "telecom_mismatch"
      },
      {
        "letter": "B",
        "text": "Compute Engine Bare Metal",
        "isTrap": true,
        "trapType": "hardware_mismatch"
      },
      {
        "letter": "C",
        "text": "Firebase (la plataforma de desarrollo móvil y web de Google integrada con Google Cloud)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Desactivar el soporte para teléfonos inteligentes",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "Firebase es la plataforma de desarrollo de aplicaciones móviles y web de Google que acelera la creación de apps con SDKs enriquecidos (Authentication, Cloud Firestore, Cloud Functions, Crashlytics, FCM), compartiendo la misma infraestructura escalable de Google Cloud.",
    "distractors": {
      "A": "Cloud Interconnect es conectividad física de redes empresariales.",
      "B": "Bare Metal son servidores físicos sin virtualización.",
      "C": "Opción correcta.",
      "D": "Ignorar los smartphones destruye el mercado de aplicaciones móviles de la empresa."
    },
    "officialDocUrl": "https://firebase.google.com",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-077",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Patrón de Aplicaciones de Doce Factores (12-Factor App)",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Adopción de Metodología 12-Factor App para Aplicaciones Nativas de la Nube",
    "scenario": "Un equipo de desarrollo diseña una nueva aplicación nativa de nube para ejecutarse en Cloud Run y GKE. Para asegurar portabilidad y escalabilidad, siguen los principios de la metodología de las 12 Factores (12-Factor App). ¿Cuál de las siguientes prácticas ejemplifica correctamente uno de estos principios?",
    "keywords": [
      "12-Factor App",
      "Variables de entorno",
      "Procesos sin estado",
      "Stateless",
      "Cloud Native"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compilar el código únicamente una vez cada 10 años.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Incrustar las contraseñas de producción en el código fuente de forma fija e inalterable.",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "C",
        "text": "Guardar las sesiones de usuario en la memoria RAM del contenedor para que se pierdan si el contenedor se reinicia.",
        "isTrap": true,
        "trapType": "stateful_antipattern"
      },
      {
        "letter": "D",
        "text": "Almacenar las configuraciones y credenciales en variables de entorno (separando código de configuración) y diseñar los procesos de la aplicación para que sean sin estado (stateless), persistiendo datos en almacenes externos.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "La metodología 12-Factor App prescribe separar estrictamente la configuración del código mediante variables de entorno y ejecutar aplicaciones como procesos sin estado (stateless) que delegan la persistencia a servicios de respaldo (como Firestore, Cloud SQL o Memorystore), permitiendo un escalado elástico perfecto.",
    "distractors": {
      "A": "El software moderno requiere despliegues e iteraciones continuas.",
      "B": "Incrustar contraseñas en código viola el factor III (Configuración) y expone credenciales a fugas de seguridad.",
      "C": "Almacenar estados en memoria local viola el factor VI (Procesos sin estado) y rompe la escalabilidad horizontal.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://12factor.net",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-078",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Google Cloud Marketplace: Soluciones de Software Preempaquetadas y Facturación Unificada",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Despliegue Rápido de Soluciones de Terceros con Google Cloud Marketplace",
    "scenario": "Una empresa desea desplegar una base de datos Elasticsearch y una herramienta de monitoreo de terceros (Datadog/MongoDB Atlas) en Google Cloud. Desean desplegarlo con plantillas de configuración optimizadas con un solo clic y consolidar todos los costos de licencias en su factura mensual única de Google Cloud. ¿Qué servicio facilita esto?",
    "keywords": [
      "Google Cloud Marketplace",
      "Facturación unificada",
      "Software de terceros",
      "Despliegue con un clic",
      "Soluciones comerciales"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Cloud Marketplace",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Descargar software pirata de sitios web no verificados",
        "isTrap": true,
        "trapType": "illegal_insecure_antipattern"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Interconnect",
        "isTrap": true,
        "trapType": "networking_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud Marketplace ofrece cientos de paquetes de software de terceros y aplicaciones empresariales listas para desplegarse rápidamente en Google Cloud con integración de facturación unificada en la cuenta de facturación del cliente.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Descargar software no autorizado introduce malware y viola normas legales corporativas.",
      "C": "Cloud Storage Coldline almacena archivos pasivos.",
      "D": "Cloud Interconnect es conectividad física de redes."
    },
    "officialDocUrl": "https://cloud.google.com/marketplace/docs",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-079",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud CDN: URLs Firmadas y Purga de Caché Instantánea",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Control de Acceso y Actualización de Contenido en Caché con Cloud CDN",
    "scenario": "Una plataforma de cursos online de pago distribuye videos a través de Cloud CDN. Necesitan: (1) Asegurarse de que solo los usuarios con suscripción activa puedan ver los videos en caché (sin que usuarios no autorizados compartan enlaces públicos), y (2) Eliminar inmediatamente un video de la caché global si se detecta un error de contenido. ¿Qué funcionalidades de Cloud CDN deben usar?",
    "keywords": [
      "Cloud CDN",
      "Signed URLs de CDN",
      "Purga de caché",
      "Invalidación instantánea",
      "Protección de contenido"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Hacer públicos todos los cursos para que cualquiera los vea gratis sin pagar",
        "isTrap": true,
        "trapType": "revenue_loss_antipattern"
      },
      {
        "letter": "B",
        "text": "Signed URLs (URLs firmadas de Cloud CDN) para restringir el acceso temporal a suscriptores válidos y Purga de Caché (Cache Invalidation) para eliminar contenido erróneo de la caché global al instante.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Apagar Cloud CDN para que nadie pueda ver los videos",
        "isTrap": true,
        "trapType": "service_disruption_antipattern"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Archive como único reproductor",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Cloud CDN permite proteger contenido multimedia privado mediante Signed URLs / Signed Cookies (que autorizan el acceso por tiempo limitado a usuarios autenticados) y ofrece invalidación de caché (Purge) en segundos para retirar o actualizar contenido en todos los puntos de presencia mundiales.",
    "distractors": {
      "A": "Regalar el contenido destruye el modelo de negocio de suscripciones de la empresa.",
      "B": "Opción correcta.",
      "C": "Apagar la CDN degrada la velocidad de reproducción y satura los servidores de origen.",
      "D": "Cloud Storage Archive tiene alta latencia de lectura y costos de recuperación incompatibles con streaming de video."
    },
    "officialDocUrl": "https://cloud.google.com/cdn/docs/using-signed-urls",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-080",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Migración de Bases de Datos Heterogéneas: Oracle a PostgreSQL",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Modernización de Bases de Datos Heterogéneas con Database Migration Service",
    "scenario": "Una empresa desea liberarse de costosas licencias comerciales migrando su base de datos Oracle a Cloud SQL for PostgreSQL / AlloyDB for PostgreSQL. Requieren convertir automáticamente los esquemas, procedimientos almacenados y replicar los cambios en tiempo real (CDC) durante la transición. ¿Qué solución de Google Cloud lidera esta modernización de bases de datos?",
    "keywords": [
      "Database Migration Service",
      "Oracle a PostgreSQL",
      "Conversión de esquemas",
      "AlloyDB",
      "Eliminación de licencias"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Desactivar las bases de datos de la empresa para siempre",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Reescribir manualmente cada consulta SQL en papel bond",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Database Migration Service (DMS) con capacidades integradas de conversión de esquemas basadas en IA para modernizar de Oracle a PostgreSQL/AlloyDB.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Database Migration Service (DMS) simplifica las migraciones heterogéneas complejas (como Oracle a PostgreSQL o AlloyDB) guiando la conversión de esquemas, procedimientos y tipos de datos, y manteniendo la replicación continua de datos para minimizar el tiempo de inactividad durante la transición.",
    "distractors": {
      "A": "Desactivar bases de datos detiene la operación de la empresa.",
      "B": "La reescritura manual en papel es inviable para miles de tablas y procedimientos almacenados.",
      "C": "Opción correcta.",
      "D": "Cloud DNS resuelve nombres de dominio en Internet."
    },
    "officialDocUrl": "https://cloud.google.com/database-migration/docs",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-081",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Domains y Google Cloud DNS: Presencia Web Completa",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Registro y Gestión de Nombres de Dominio en la Nube",
    "scenario": "Una nueva empresa de base tecnológica necesita registrar su nombre de dominio comercial en Internet (ej. `miempresa.com`) y administrar sus registros DNS (registros A, CNAME, MX) con alta disponibilidad y DNSSEC para proteger contra la falsificación de DNS. ¿Qué servicios de Google Cloud completan esta solución?",
    "keywords": [
      "Cloud Domains",
      "Cloud DNS",
      "DNSSEC",
      "Registro de dominios",
      "Presencia web"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine Spot VMs",
        "isTrap": true,
        "trapType": "compute_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Billing Reports",
        "isTrap": true,
        "trapType": "billing_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud Domains (para registrar y administrar la propiedad del dominio) y Cloud DNS (para servir los registros DNS autorizados con DNSSEC global).",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Cloud Domains permite buscar, registrar y gestionar nombres de dominio directamente en la consola de Google Cloud, integrándose de forma nativa con Cloud DNS para servir registros DNS con seguridad DNSSEC y 100% de disponibilidad.",
    "distractors": {
      "A": "Spot VMs son instancias de cómputo efímeras con descuento.",
      "B": "Cloud Billing Reports analiza costos de infraestructura.",
      "C": "Cloud Storage Archive almacena objetos fríos, no registra dominios web.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/domains/docs",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-082",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Arquitectura Serverless de Microservicios para Aplicaciones de E-Commerce",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diseño de un Backend de E-Commerce Moderno y Escalable en Google Cloud",
    "scenario": "Un minorista en línea diseña su nueva plataforma de comercio electrónico. Requieren: (1) Servicios web de catálogo y pagos en contenedores serverless con escalado automático a cero, (2) Mensajería asíncrona para procesar pedidos, (3) Notificaciones automáticas por correo cuando se crea un pedido, y (4) Base de datos transaccional con alta disponibilidad. ¿Qué combinación de servicios de Google Cloud representa la arquitectura de referencia?",
    "keywords": [
      "Cloud Run",
      "Cloud Pub/Sub",
      "Cloud Functions",
      "Cloud SQL",
      "Arquitectura serverless de e-commerce"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Run (microservicios web de catálogo y checkout) + Cloud Pub/Sub (cola de pedidos) + Cloud Functions (envío de notificaciones de correo) + Cloud SQL (base de datos transaccional relacional con HA).",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive + Memorias USB + Faxes automáticos",
        "isTrap": true,
        "trapType": "absurd_pipeline"
      },
      {
        "letter": "C",
        "text": "Compute Engine con Windows XP sin actualizaciones",
        "isTrap": true,
        "trapType": "vulnerable_legacy_antipattern"
      },
      {
        "letter": "D",
        "text": "Desactivar el procesamiento de pagos para que los productos sean gratuitos",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "A",
    "explanation": "Esta arquitectura combina el cómputo serverless elástico de Cloud Run, el desacoplamiento asíncrono y tolerante a picos de Pub/Sub, la ejecución ligera basada en eventos de Cloud Functions y la persistencia relacional administrada con alta disponibilidad de Cloud SQL.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Combina tecnologías pasivas y procesos analógicos incompatibles con el comercio digital.",
      "C": "Windows XP es un sistema operativo obsoleto y descontinuado que presenta vulnerabilidades críticas inaceptables.",
      "D": "No cobrar pagos destruye la viabilidad comercial del minorista."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/serverless-microservices-overview",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-083",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Resiliencia ante Caídas Zonales: Persistent Disks Regionales (Regional PD)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Replicación de Almacenamiento en Bloque entre Zonas con Regional Persistent Disk",
    "scenario": "Una empresa ejecuta una base de datos autogestionada en una máquina virtual de Compute Engine. Si la zona donde corre la VM sufre una falla de hardware, la empresa necesita poder encender una nueva VM en otra zona de la misma región y conectarla inmediatamente al mismo disco con todos los datos sincronizados sin requerir restauración de copias de seguridad. ¿Qué tipo de disco garantiza replicación síncrona entre dos zonas?",
    "keywords": [
      "Regional Persistent Disk",
      "Replicación síncrona entre zonas",
      "Alta disponibilidad de disco",
      "Failover rápido"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Regional Persistent Disk (disco persistente regional que replica datos de forma síncrona en dos zonas dentro de la misma región)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Zonal Persistent Disk estándar sin replicación",
        "isTrap": true,
        "trapType": "zonal_single_point_of_failure"
      },
      {
        "letter": "D",
        "text": "Local SSD efímero",
        "isTrap": true,
        "trapType": "ephemeral_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Regional Persistent Disk proporciona almacenamiento en bloque con replicación síncrona de datos en dos zonas dentro de una misma región, permitiendo conmutar por error de forma casi instantánea una máquina virtual a otra zona sin pérdida de datos en caso de contingencia zonal.",
    "distractors": {
      "A": "Cloud Storage Archive es almacenamiento de objetos pasivos para copias de seguridad.",
      "B": "Opción correcta.",
      "C": "Zonal Persistent Disk solo existe en una zona; si esa zona falla, el disco queda inaccesible hasta que la zona se restablezca.",
      "D": "Local SSD pierde todos sus datos si la VM se detiene o se traslada."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/disks/regional-persistent-disks",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-084",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Run vs Compute Engine: Decisión de Costos y Mantenimiento",
    "difficulty": "foundational",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Ahorro Operativo y de Infraestructura al Elegir Cloud Run sobre Compute Engine",
    "scenario": "Una empresa evalúa hospedar una API web en Compute Engine (IaaS) frente a Cloud Run (Serverless). La API recibe tráfico principalmente durante el horario de oficina (8 horas al día) y muy pocas peticiones por la noche y fines de semana. ¿Por qué Cloud Run ofrece una ventaja económica y operativa contundente?",
    "keywords": [
      "Cloud Run vs Compute Engine",
      "Escalado a cero",
      "Sin costo ocioso",
      "Sin parches de SO",
      "FinOps"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Porque Compute Engine prohíbe alojar APIs web.",
        "isTrap": true,
        "trapType": "false_claim"
      },
      {
        "letter": "B",
        "text": "No existe ninguna diferencia en facturación ni gestión.",
        "isTrap": true,
        "trapType": "false_claim"
      },
      {
        "letter": "C",
        "text": "Porque en Cloud Run no se pagan servidores ociosos durante las noches o fines de semana (escala a cero) y Google gestiona automáticamente el aprovisionamiento, parches de seguridad del sistema operativo y autoescalado sin costo de administración.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Porque Cloud Run regala computadoras físicas para que los ingenieros se las lleven a sus casas.",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Run factura únicamente por los recursos consumidos durante el procesamiento activo de solicitudes HTTP (calculado en milisegundos). Al no tener costos fijos de VMs ociosas y delegar la administración del sistema operativo a Google, optimiza radicalmente el TCO para cargas de tráfico variable.",
    "distractors": {
      "A": "Compute Engine puede alojar APIs web pero requiere pagar por las VMs encendidas 24/7 y gestionar sus sistemas operativos manualmente.",
      "B": "Existen diferencias críticas en modelo de costos, mantenimiento y velocidad de escalado.",
      "C": "Opción correcta.",
      "D": "En la nube no se regala hardware físico a los clientes."
    },
    "officialDocUrl": "https://cloud.google.com/run",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-085",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Run: Integración con Secret Manager para Gestión de Credenciales",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Inyección Segura de Contraseñas y Claves de API con Secret Manager en Cloud Run",
    "scenario": "Un microservicio en Cloud Run necesita conectarse a una base de datos utilizando una contraseña confidencial. La política de seguridad prohíbe almacenar contraseñas en texto plano dentro del código fuente, en el Dockerfile o en variables de entorno visibles. ¿Qué servicio administrado debe almacenar la contraseña para ser inyectada de forma segura en el contenedor durante la ejecución?",
    "keywords": [
      "Secret Manager",
      "Gestión de secretos",
      "Sin contraseñas en código",
      "Cifrado de credenciales",
      "Cloud Run"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Escribir la contraseña en el archivo README.md de GitHub público",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Nearline sin cifrado",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "D",
        "text": "Secret Manager (integrado nativamente con Cloud Run para inyectar secretos cifrados como variables de entorno o volúmenes montados)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Secret Manager es un sistema de almacenamiento seguro, centralizado y versionado para contraseñas, claves de API, certificados y otros datos sensibles en Google Cloud, permitiendo inyectarlos de forma controlada y auditada a Cloud Run mediante permisos de IAM.",
    "distractors": {
      "A": "Publicar contraseñas en repositorios públicos expone la base de datos a ataques y secuestro inmediato.",
      "B": "Cloud Storage Nearline no está optimizado para la gestión de ciclo de vida y rotación segura de credenciales de aplicaciones.",
      "C": "Cloud DNS gestiona nombres de dominio web.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/secret-manager/docs",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-086",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "GKE Autopilot: Mejores Prácticas de Seguridad Preconfiguradas",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Guardarraíles de Seguridad Endurecidos por Defecto en GKE Autopilot",
    "scenario": "Un equipo de desarrollo adopta GKE Autopilot. El oficial de seguridad se alegra al conocer que este modo aplica automáticamente las recomendaciones de seguridad del estándar CIS Kubernetes Benchmark por defecto. ¿Qué características de seguridad vienen endurecidas en GKE Autopilot?",
    "keywords": [
      "GKE Autopilot",
      "Seguridad por defecto",
      "Shielded Nodes",
      "Parches automáticos de SO",
      "CIS Benchmark"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Nodos blindados (Shielded Nodes) activados, parches de seguridad automáticos aplicados por Google, Workload Identity configurado y restricción predeterminada de privilegios elevados de contenedores.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Prohibición total de desplegar aplicaciones",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Desactivación de todos los firewalls y contraseñas",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "D",
        "text": "Obligación de que todos los Pods se ejecuten como usuario 'root' sin restricciones",
        "isTrap": true,
        "trapType": "security_violation"
      }
    ],
    "correct": "A",
    "explanation": "GKE Autopilot viene preconfigurado con una postura de seguridad endurecida según las mejores prácticas de Google: gestiona y actualiza los nodos automáticamente, restringe capacidades peligrosas de contenedores (como privilegios root no autorizados) e integra Shielded Nodes y Workload Identity.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Autopilot está optimizado para desplegar y ejecutar aplicaciones de producción a gran escala.",
      "C": "GKE Autopilot fortalece los controles de acceso y red en lugar de eliminarlos.",
      "D": "Autopilot bloquea precisamente la ejecución de contenedores con privilegios root inseguros para evitar compromisos del nodo."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-security",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-087",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Run: Despliegues Graduales (Traffic Rolling Updates)",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "División Gradual de Tráfico y Revisiones Inmutables en Cloud Run",
    "scenario": "Un equipo despliega una nueva versión (Revisión 2) de un microservicio en Cloud Run. Desean enrutar inicialmente el 10% de las solicitudes de usuarios a la Revisión 2 y el 90% restante a la Revisión 1. Al comprobar que no hay errores en los registros de Cloud Logging, desean cambiar el tráfico al 100% en la Revisión 2 con un solo comando. ¿Qué capacidad nativa de Cloud Run facilita este flujo?",
    "keywords": [
      "Cloud Run",
      "Revisiones inmutables",
      "Traffic splitting",
      "División de tráfico",
      "Rollout gradual"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Gestión de Revisiones inmutables y División de Tráfico (Traffic Splitting) en Cloud Run",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Pedir a los clientes que reinicien sus enrutadores Wi-Fi domésticos",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Eliminar el servicio y esperar 3 días para recrearlo",
        "isTrap": true,
        "trapType": "service_disruption_antipattern"
      }
    ],
    "correct": "B",
    "explanation": "Cada despliegue en Cloud Run crea una Revisión inmutable. Cloud Run permite dividir el tráfico por porcentajes exactos entre múltiples revisiones, facilitando despliegues graduales, pruebas canarias y reversiones instantáneas a revisiones anteriores.",
    "distractors": {
      "A": "Cloud Storage Archive es para retención pasiva de datos.",
      "B": "Opción correcta.",
      "C": "Los routers domésticos no controlan el balanceo de tráfico de las revisiones en Cloud Run.",
      "D": "Eliminar el servicio causa una interrupción innecesaria del negocio."
    },
    "officialDocUrl": "https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-split",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-088",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Cloud Load Balancing: Balanceadores Internos vs Externos",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Diferenciación entre Balanceadores de Carga Externos e Internos en Google Cloud",
    "scenario": "Un arquitecto de redes debe estructurar una aplicación de 3 capas: (1) La capa web pública debe recibir conexiones de usuarios de todo el mundo desde Internet, y (2) La capa de microservicios de backend solo debe recibir conexiones privadas internas de la capa web sin estar expuesta a Internet. ¿Qué tipos de balanceadores de Cloud Load Balancing corresponden?",
    "keywords": [
      "External Application Load Balancer",
      "Internal Application Load Balancer",
      "Balanceador interno vs externo",
      "Seguridad de 3 capas"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Hacer público tanto el backend como la base de datos sin ninguna protección",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive para ambas capas",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "(1) External Application Load Balancer (para el tráfico público desde Internet); (2) Internal Application Load Balancer (para balancear el tráfico privado entre la capa web y el backend dentro de la VPC)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Desactivar todos los balanceadores de carga",
        "isTrap": true,
        "trapType": "single_point_of_failure"
      }
    ],
    "correct": "C",
    "explanation": "External Load Balancing expone una IP pública para recibir tráfico desde Internet. Internal Load Balancing opera exclusivamente dentro de la red VPC asignando una IP privada interna de la subred, permitiendo balancear el tráfico de microservicios backend de forma segura y sin exposición externa.",
    "distractors": {
      "A": "Exponer backends y bases de datos a Internet público viola el principio de defensa en profundidad.",
      "B": "Cloud Storage Archive es para almacenamiento de objetos fríos.",
      "C": "Opción correcta.",
      "D": "Eliminar balanceadores satura instancias individuales y elimina la alta disponibilidad."
    },
    "officialDocUrl": "https://cloud.google.com/load-balancing/docs/load-balancing-overview",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-089",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Migración de Aplicaciones Web a Cloud Run",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Ruta de Modernización Rápida de Aplicaciones Web hacia Cloud Run",
    "scenario": "Una empresa tiene una aplicación web tradicional en Node.js alojada en un servidor físico local. Desean modernizarla a la nube con el menor esfuerzo posible, obteniendo autoescalado, HTTPS automático y reducción de costos operativos. ¿Cuál es la secuencia de modernización más simple y efectiva?",
    "keywords": [
      "Modernización a Cloud Run",
      "Contenedorizar con Docker",
      "Cloud Build",
      "Despliegue serverless"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Guardar el código en un bucket de Cloud Storage Coldline y no ejecutarlo",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Comprar un servidor físico idéntico y enviarlo por paquetería a una oficina de Google",
        "isTrap": true,
        "trapType": "colocation_confusion"
      },
      {
        "letter": "C",
        "text": "Reescribir toda la aplicación en código binario puro durante 4 años",
        "isTrap": true,
        "trapType": "absurd_complexity"
      },
      {
        "letter": "D",
        "text": "Empaquetar la aplicación en un contenedor Docker, compilar la imagen con Cloud Build y desplegarla directamente en Cloud Run para obtener autoescalado, URL HTTPS segura y alta disponibilidad inmediata.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "El camino más directo para modernizar aplicaciones web estándar hacia Google Cloud es la contenedorización: empaquetar el código en un contenedor OCI/Docker y desplegarlo en Cloud Run, obteniendo automáticamente escalabilidad, certificados HTTPS administrados y cero mantenimiento de servidores.",
    "distractors": {
      "A": "Guardar código en almacenamiento frío no lo ejecuta ni lo pone a disposición de los usuarios.",
      "B": "Google Cloud es una nube pública basada en software y virtualización; no acepta hardware físico de clientes por correo.",
      "C": "Reescribir en binario es absurdo e innecesario.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/run/docs/quickstarts/build-and-deploy",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D3-090",
    "certId": "cdl",
    "domainId": "CDL-D3",
    "domainName": "3. Modernización de Infraestructura y Aplicaciones",
    "subtopic": "Ecosistema Integral de Modernización de Google Cloud",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Síntesis Estratégica de la Modernización de Infraestructura y Aplicaciones",
    "scenario": "El Comité de Transformación Digital de una corporación multinacional solicita una evaluación final sobre cómo la suite de modernización de Google Cloud (Compute Engine, GKE, Cloud Run, Global VPC, Cloud Armor, Apigee) habilita la resiliencia y el crecimiento del negocio a largo plazo. ¿Cuál es la conclusión integral?",
    "keywords": [
      "Ecosistema de modernización",
      "Resiliencia empresarial",
      "Agilidad",
      "Cloud Native",
      "Ventaja competitiva"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Google Cloud proporciona una plataforma integral y flexible que permite a las empresas elegir el nivel óptimo de abstracción (desde IaaS con Compute Engine hasta Serverless con Cloud Run), respaldada por una red global privada de fibra óptica, seguridad Zero Trust y gestión híbrida/multinube, acelerando la innovación y garantizando disponibilidad continua a escala planetaria.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Google Cloud exige que todas las empresas utilicen exclusivamente hojas de cálculo sin excepción.",
        "isTrap": true,
        "trapType": "absurd_reductive"
      },
      {
        "letter": "C",
        "text": "La infraestructura en la nube elimina la necesidad de contar con desarrolladores o ingenieros de software.",
        "isTrap": true,
        "trapType": "false_promise"
      },
      {
        "letter": "D",
        "text": "La modernización de la nube es solo una moda pasajera que no genera ningún valor tangible frente a los servidores locales.",
        "isTrap": true,
        "trapType": "cynical_fallacy"
      }
    ],
    "correct": "A",
    "explanation": "El portafolio de modernización de infraestructura y aplicaciones de Google Cloud ofrece una transición fluida desde la infraestructura tradicional hacia arquitecturas nativas de nube, potenciando la resiliencia del negocio, reduciendo el time-to-market y garantizando seguridad de clase mundial a escala global.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Google Cloud ofrece cientos de servicios avanzados de cómputo, redes, bases de datos e IA más allá de hojas de cálculo.",
      "C": "La nube no elimina a los ingenieros; los empodera eliminando el trabajo rutinario para que se concentren en crear valor.",
      "D": "La nube pública es la base tecnológica predominante que impulsa a las empresas más valiosas y ágiles del mundo."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/application-modernization",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-076",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Google Cloud Armor: Políticas de Seguridad con Restricción Geográfica (Geo-Blocking)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Bloqueo de Tráfico por País y Región Geográfica con Cloud Armor (Geo-Blocking)",
    "scenario": "Una empresa de servicios de streaming de video solo tiene licencias legales para transmitir contenidos en México, Estados Unidos y Canadá. Por requerimientos de derechos de autor y seguridad, deben bloquear automáticamente todo el tráfico web entrante proveniente de cualquier otro país en el borde de la red antes de que llegue a sus servidores web. ¿Qué servicio y función implementan esta restricción?",
    "keywords": [
      "Cloud Armor",
      "Geo-blocking",
      "Restricción geográfica",
      "Bloqueo por país",
      "WAF perimetral"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Preguntar amablemente por correo a los usuarios extranjeros si pueden cerrar la ventana de su navegador.",
        "isTrap": true,
        "trapType": "informal_antipattern"
      },
      {
        "letter": "B",
        "text": "Reglas de filtrado geográfico (Geo-blocking) en las políticas de seguridad de Google Cloud Armor asociadas al balanceador de carga.",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Apagar los servidores web durante las noches",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Armor permite definir reglas de seguridad basadas en geolocalización (Geo-blocking), evaluando el código de país de origen de la dirección IP del cliente en la red perimetral de Google y bloqueando o permitiendo el acceso según las necesidades legales y de seguridad.",
    "distractors": {
      "A": "Los acuerdos informales no ofrecen control técnico de cumplimiento de derechos de autor.",
      "B": "Opción correcta.",
      "C": "Cloud Storage Coldline almacena archivos pasivos.",
      "D": "Apagar servidores no resuelve la restricción geográfica durante las horas activas."
    },
    "officialDocUrl": "https://cloud.google.com/armor/docs/rules-overview#geo_matching",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-077",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Data Loss Prevention: Desidentificación y Seudonimización con Tokenización",
    "difficulty": "advanced",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Tokenización y Seudonimización Criptográfica de Datos Sensibles con Sensitive Data Protection",
    "scenario": "Un banco necesita permitir que un equipo de científicos de datos analice patrones de compras con tarjetas de crédito. Por regulaciones de privacidad, los números de tarjeta reales no pueden estar visibles, pero los análisis requieren que el mismo número de tarjeta siempre se transforme en el mismo token seudonimizado consistente (para poder rastrear compras del mismo usuario a lo largo del tiempo) de forma reversible para usuarios autorizados. ¿Qué técnica de transformación de Sensitive Data Protection (Cloud DLP) cumple esto?",
    "keywords": [
      "Tokenización",
      "Seudonimización",
      "Cifrado determinista",
      "Sensitive Data Protection",
      "Cloud DLP",
      "FPE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "B",
        "text": "Borrar todos los números y reemplazarlos por la palabra 'HOLA' en todas las filas.",
        "isTrap": true,
        "trapType": "data_loss_antipattern"
      },
      {
        "letter": "C",
        "text": "Tokenización criptográfica con preservación de formato (Crypto-Deterministic Format-Preserving Encryption / Pseudonymization) en Sensitive Data Protection.",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Enviar los datos de las tarjetas en texto plano a un canal de chat público.",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      }
    ],
    "correct": "C",
    "explanation": "Sensitive Data Protection admite transformaciones avanzadas de desidentificación como la seudonimización criptográfica determinista con preservación de formato (FPE). Esto reemplaza el dato sensible (ej. tarjeta de crédito) por un token seguro y consistente que permite análisis relacional sin exponer el valor original.",
    "distractors": {
      "A": "Cloud DNS es resolución de nombres de red.",
      "B": "Reemplazar todo por una palabra fija destruye la capacidad de distinguir usuarios en el análisis.",
      "C": "Opción correcta.",
      "D": "Publicar datos de tarjetas en chat viola todas las normas PCI-DSS y leyes financieras."
    },
    "officialDocUrl": "https://cloud.google.com/sensitive-data-protection/docs/pseudonymization",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-078",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Identity: Aprovisionamiento Automatizado de Usuarios con Google Cloud Directory Sync (GCDS)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Sincronización de Usuarios Locales hacia la Nube con Google Cloud Directory Sync (GCDS)",
    "scenario": "Una empresa corporativa gestiona 5,000 empleados en su servidor local de Microsoft Active Directory / LDAP. Desean que los usuarios y grupos se sincronicen automáticamente hacia Cloud Identity en Google Cloud en un solo sentido, de modo que cuando un nuevo empleado sea contratado o despedido en Active Directory local, su cuenta en Google Cloud se cree o suspenda inmediatamente. ¿Qué herramienta gratuita proporciona esta sincronización?",
    "keywords": [
      "Google Cloud Directory Sync",
      "GCDS",
      "Sincronización Active Directory LDAP",
      "Aprovisionamiento de usuarios",
      "Cloud Identity"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Cloud Armor",
        "isTrap": true,
        "trapType": "security_mismatch"
      },
      {
        "letter": "C",
        "text": "Crear y borrar 5,000 usuarios a mano todos los días en la consola",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "D",
        "text": "Google Cloud Directory Sync (GCDS)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud Directory Sync (GCDS) es una herramienta local gratuita que sincroniza automáticamente usuarios, grupos y contactos desde un servidor Microsoft Active Directory o LDAP hacia Cloud Identity / Google Workspace en un solo sentido.",
    "distractors": {
      "A": "Cloud Storage Archive almacena archivos pasivos.",
      "B": "Cloud Armor es un servicio WAF de seguridad perimetral.",
      "C": "La gestión manual de miles de usuarios es insostenible y propensa a retrasos en la revocación de accesos de exempleados.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/identity/google-cloud-directory-sync",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-079",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Monitoreo de Cuentas de Servicio Huérfanas y Llaves Inactivas",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Higiene de Seguridad y Eliminación de Service Accounts Inactivas",
    "scenario": "Un análisis de seguridad revela que existen 40 Service Accounts en el proyecto que no han realizado ninguna llamada a la API en los últimos 180 días, y varias tienen claves privadas JSON activas. ¿Cuál es la mejor práctica de higiene de seguridad recomendada por Google Cloud?",
    "keywords": [
      "Higiene de Service Accounts",
      "Desactivación de cuentas inactivas",
      "Eliminación de llaves no usadas",
      "IAM Recommender",
      "Menor privilegio"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Desactivar o eliminar las Service Accounts y claves de servicio que no se utilicen, siguiendo las recomendaciones del IAM Recommender para reducir la superficie de ataque.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Otorgarles permisos de Owner a todas las cuentas inactivas por si acaso se necesitan algún día.",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "C",
        "text": "Publicar las claves inactivas en Internet",
        "isTrap": true,
        "trapType": "security_violation"
      },
      {
        "letter": "D",
        "text": "Ignorar las cuentas inactivas y no hacer nada",
        "isTrap": true,
        "trapType": "risky_antipattern"
      }
    ],
    "correct": "A",
    "explanation": "Mantener cuentas de servicio inactivas y claves huérfanas incrementa innecesariamente la superficie de ataque. La mejor práctica de seguridad es deshabilitarlas, auditar su impacto y eliminarlas para prevenir accesos no autorizados mediante credenciales olvidadas.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Elevar privilegios a cuentas inactivas multiplica el riesgo de compromiso de seguridad.",
      "C": "Publicar credenciales facilita ataques maliciosos.",
      "D": "Ignorar credenciales olvidadas es una negligencia operativa de seguridad."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-080",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Monitoring: Alertas Basadas en Registros (Log-Based Alerts)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Notificación Inmediata ante Eventos Críticos con Log-Based Alerts",
    "scenario": "El equipo de seguridad necesita recibir una alerta instantánea cada vez que aparezca en Cloud Logging una línea de registro específica que indique un intento de acceso no autorizado con error '403 Forbidden' a un recurso confidencial. ¿Qué tipo de alerta permite vincular una búsqueda de registros directamente con una notificación en tiempo real?",
    "keywords": [
      "Log-Based Alerts",
      "Alertas basadas en logs",
      "Cloud Logging",
      "Cloud Monitoring",
      "Detección inmediata de eventos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Desactivar la seguridad de la empresa",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "Alertas basadas en registros (Log-Based Alerts en Cloud Logging y Cloud Monitoring)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Revisar los registros una vez al año en Navidad",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Las Log-Based Alerts en Cloud Logging permiten definir una consulta de filtro de registros específica y disparar automáticamente una notificación de Cloud Monitoring en el momento exacto en que coincide un mensaje de registro crítico (como un fallo 403 de seguridad).",
    "distractors": {
      "A": "Desactivar la seguridad deja a la empresa indefensa ante ciberataques.",
      "B": "Opción correcta.",
      "C": "Las revisiones anuales impiden reaccionar a tiempo ante incidentes activos.",
      "D": "Cloud Storage Coldline es para copias de seguridad de datos fríos."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/alerting/log-based-alerts",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-081",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Métricas Basadas en Registros (Log-Based Metrics): Convertir Texto en Gráficas",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Extracción Cuantitativa de Datos de Logs con Log-Based Metrics",
    "scenario": "Una aplicación heredada no exporta métricas nativas, pero escribe en sus registros de texto líneas como `PAYMENT_LATENCY: 450ms` o `ORDER_COUNT: 1`. El equipo de operaciones desea convertir estos eventos de texto en métricas numéricas continuas que puedan graficarse en paneles de Cloud Monitoring y usarse para disparar alertas. ¿Qué funcionalidad de Cloud Logging deben utilizar?",
    "keywords": [
      "Log-Based Metrics",
      "Métricas basadas en registros",
      "Conversión de logs a métricas",
      "Cloud Monitoring",
      "Dashboards"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Desinstalar la aplicación para que no escriba registros",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Métricas basadas en registros (Log-Based Metrics: métricas de recuento o de distribución extraídas de los logs)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Contar las palabras a mano con lápiz y papel",
        "isTrap": true,
        "trapType": "manual_overhead"
      }
    ],
    "correct": "C",
    "explanation": "Las Log-Based Metrics permiten extraer datos cuantitativos y valores numéricos a partir del contenido de los registros de Cloud Logging, transformando mensajes de texto no estructurados en métricas de series temporales de Cloud Monitoring para gráficos y alertas.",
    "distractors": {
      "A": "Cloud Storage Archive es para almacenamiento de objetos pasivos.",
      "B": "Desinstalar la aplicación destruye el servicio comercial.",
      "C": "Opción correcta.",
      "D": "El conteo manual en papel no es viable para millones de líneas de logs por segundo."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/logs-based-metrics",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-082",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Logging: Exclusiones de Registros para Control de Costos (Log Exclusions)",
    "difficulty": "intermediate",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Optimización de Costos de Ingesta en Cloud Logging mediante Log Exclusions",
    "scenario": "Una aplicación en Compute Engine genera terabytes de registros de depuración detallada (logs de nivel DEBUG con llamadas de salud HTTP repetitivas) que saturan la cuota de Cloud Logging y aumentan los costos mensuales. El equipo necesita excluir estos registros de depuración de bajo valor para que no se almacenen ni facturen en Cloud Logging, pero manteniendo intactos los registros de errores (ERROR) y advertencias (WARN). ¿Qué funcionalidad deben configurar?",
    "keywords": [
      "Log Exclusions",
      "Exclusiones de registros",
      "Optimización de costos en Logging",
      "Filtros de exclusión",
      "Logs DEBUG"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Borrar todos los servidores de la empresa",
        "isTrap": true,
        "trapType": "destructive_antipattern"
      },
      {
        "letter": "B",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Exclusiones de registros (Log Exclusions en el Log Router de Cloud Logging)",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Las Exclusiones de Registros (Log Exclusions) en Cloud Logging permiten filtrar y descartar registros específicos (como logs de depuración DEBUG de alto volumen) antes de que sean ingeridos y almacenados en los Log Buckets, optimizando significativamente los costos de observabilidad.",
    "distractors": {
      "A": "Borrar servidores destruye la infraestructura productiva.",
      "B": "Cloud DNS gestiona nombres de dominio.",
      "C": "Cloud Storage Coldline almacena archivos pasivos.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/routing/overview#exclusions",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-083",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Google Cloud Armor: Reglas Preconfiguradas para OWASP Top 10",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Mitigación Automática de Vulnerabilidades Web con Reglas WAF Preconfiguradas en Cloud Armor",
    "scenario": "Una aplicación web de comercio electrónico necesita protegerse de forma inmediata contra ataques comunes de la lista OWASP Top 10 (como Inyección SQL - SQLi, Cross-Site Scripting - XSS, Inclusión Local de Archivos - LFI y Ejecución Remota de Código - RCE). ¿Cómo facilita Cloud Armor la protección contra estas amenazas sin tener que escribir expresiones regulares complejas desde cero?",
    "keywords": [
      "Cloud Armor Preconfigured WAF Rules",
      "OWASP Top 10",
      "SQLi",
      "XSS",
      "LFI",
      "Reglas preconfiguradas"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Habilitando el conjunto de Reglas WAF Preconfiguradas de Cloud Armor (Preconfigured WAF Rules basadas en ModSecurity Core Rule Set) que detectan y bloquean automáticamente firmas de ataques OWASP.",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Eliminar el código fuente de la aplicación",
        "isTrap": true,
        "trapType": "destructive_antipattern"
      },
      {
        "letter": "C",
        "text": "Desconectando la base de datos de Internet y usándola únicamente en papel",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud Armor incluye un conjunto integral de reglas de WAF preconfiguradas y ajustadas por Google basadas en el conjunto de reglas ModSecurity (CRS), diseñadas para mitigar ataques comunes de OWASP (inyección SQL, XSS, RCE, fijación de sesiones, inyección de comandos) con un solo clic.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Eliminar el código destruye la aplicación.",
      "C": "El uso de papel no es aplicable al comercio electrónico moderno.",
      "D": "Cloud Storage Archive es para almacenamiento pasivo."
    },
    "officialDocUrl": "https://cloud.google.com/armor/docs/waf-rules",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-084",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Security Health Analytics en Security Command Center",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Detección Continua de Malas Configuraciones con Security Health Analytics",
    "scenario": "Un oficial de seguridad busca un servicio que escanee continuamente la infraestructura de Google Cloud para detectar automáticamente errores de configuración comunes como: buckets de Cloud Storage públicos abiertos a todo el mundo, puertos de administración SSH (puerto 22) o RDP (puerto 3389) abiertos a Internet en reglas de firewall, o llaves de Service Account con más de 90 días sin rotación. ¿Qué módulo de Security Command Center realiza este escaneo continuo?",
    "keywords": [
      "Security Health Analytics",
      "SHA",
      "Security Command Center",
      "Detección de malas configuraciones",
      "Buckets públicos",
      "Puertos SSH abiertos"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "B",
        "text": "Security Health Analytics (SHA en Security Command Center)",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Google Fonts",
        "isTrap": true,
        "trapType": "font_mismatch"
      },
      {
        "letter": "D",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      }
    ],
    "correct": "B",
    "explanation": "Security Health Analytics (SHA) es el motor nativo de gestión de la postura de seguridad (CSPM) dentro de Security Command Center que escanea automáticamente recursos en busca de malas configuraciones, vulnerabilidades de red y violaciones de las mejores prácticas de seguridad de Google.",
    "distractors": {
      "A": "Cloud Storage Coldline es para almacenamiento pasivo.",
      "B": "Opción correcta.",
      "C": "Google Fonts es un servicio de tipografías web.",
      "D": "Cloud DNS gestiona nombres de dominio."
    },
    "officialDocUrl": "https://cloud.google.com/security-command-center/docs/concepts-security-health-analytics-overview",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-085",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Logging: Registros de Transparencia de Acceso (Access Transparency Logs)",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Auditoría de Acciones de Personal de Google con Access Transparency Logs",
    "scenario": "Durante una auditoría externa de seguridad, los auditores solicitan evidencia verificable de que ningún empleado de soporte o ingeniería de Google puede acceder a los datos de la empresa sin que quede un registro inalterable. ¿Qué tipo de registros en Cloud Logging demuestran cuándo y por qué el personal de Google interactuó con los recursos del cliente durante una solicitud de soporte?",
    "keywords": [
      "Access Transparency Logs",
      "Auditoría de personal de Google",
      "Soberanía y confianza",
      "Cloud Logging"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud DNS Query Logs",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "B",
        "text": "Notas manuscritas en post-its de la oficina",
        "isTrap": true,
        "trapType": "manual_overhead"
      },
      {
        "letter": "C",
        "text": "Registros de Access Transparency (Access Transparency Logs en Cloud Logging)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Storage Archive",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Los registros de Access Transparency capturan registros casi en tiempo real de las acciones administrativas manuales realizadas por el personal de soporte o ingeniería de Google sobre los datos de los clientes, proporcionando el motivo comercial, la referencia al ticket de soporte y la ubicación del empleado.",
    "distractors": {
      "A": "DNS Query Logs registra consultas de resolución de nombres de red.",
      "B": "Las notas físicas carecen de validez técnica y forense.",
      "C": "Opción correcta.",
      "D": "Cloud Storage Archive es para almacenamiento de objetos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/audit/access-transparency-overview",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-086",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Gobernanza de Proyectos: Creación de Proyectos Aislados por Entorno (Dev, Stage, Prod)",
    "difficulty": "foundational",
    "bloomsLevel": "apply",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Aislamiento de Entornos mediante Proyectos Independientes en Google Cloud",
    "scenario": "Una empresa diseña su arquitectura de proyectos en Google Cloud. ¿Por qué la mejor práctica recomendada por Google es separar los entornos de Desarrollo (Dev), Pruebas (Staging) y Producción (Prod) en Proyectos de Google Cloud completamente independientes?",
    "keywords": [
      "Aislamiento de proyectos",
      "Dev Stage Prod",
      "Límite de seguridad",
      "Aislamiento de fallos y cuotas",
      "Gobernanza de IAM"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Es una mala práctica; todos los entornos deben mezclarse en un solo proyecto sin contraseñas.",
        "isTrap": true,
        "trapType": "critical_vulnerability"
      },
      {
        "letter": "B",
        "text": "Porque Google Cloud prohíbe tener más de un archivo por proyecto.",
        "isTrap": true,
        "trapType": "false_limitation"
      },
      {
        "letter": "C",
        "text": "Para obligar a los desarrolladores a pagar una cuota de registro personal.",
        "isTrap": true,
        "trapType": "untrue_cost_claim"
      },
      {
        "letter": "D",
        "text": "Porque el Proyecto es el límite principal de aislamiento en Google Cloud para seguridad (políticas de IAM independientes), cuotas de recursos, redes VPC y facturación, evitando que un error o prueba en desarrollo afecte a la disponibilidad o seguridad de producción.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "En Google Cloud, el Proyecto actúa como el límite fundamental de aislamiento de seguridad, administración de IAM, redes, cuotas y auditoría. Separar Dev, Staging y Prod en proyectos distintos garantiza el principio de aislamiento de fallos (blast radius) y control riguroso de accesos.",
    "distractors": {
      "A": "Mezclar entornos en un solo proyecto aumenta drásticamente el riesgo de que un cambio de desarrollo dañe la producción.",
      "B": "Un proyecto puede contener miles de recursos y archivos de configuración.",
      "C": "Crear proyectos en Google Cloud es gratuito dentro de las cuotas de la organización.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/creating-managing-projects",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-087",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Monitoring: Pruebas Sintéticas y Monitoreo de Experiencia de Usuario",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Pruebas Sintéticas Automatizadas para Flujos de Usuario Críticos en Cloud Monitoring",
    "scenario": "Un portal bancario no solo necesita saber si el servidor web responde en el puerto 443, sino validar que un usuario simulado pueda completar un flujo completo: iniciar sesión, consultar su saldo y simular una transferencia bancaria cada 5 minutos de forma automática. ¿Qué tipo de monitoreo proporciona esta validación de flujos sintéticos de extremo a extremo?",
    "keywords": [
      "Monitoreo sintético",
      "Synthetic Monitors",
      "Cloud Monitoring",
      "Flujos de usuario de extremo a extremo",
      "Cloud Functions"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Monitores Sintéticos (Synthetic Monitors en Cloud Monitoring basados en scripts de Cloud Functions con Mocha/Node.js)",
        "isTrap": false
      },
      {
        "letter": "B",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "C",
        "text": "Desactivar las transferencias bancarias para evitar errores",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "D",
        "text": "Contratar a 100 personas para hacer transferencias bancarias manuales todo el día",
        "isTrap": true,
        "trapType": "manual_overhead"
      }
    ],
    "correct": "A",
    "explanation": "Los Synthetic Monitors en Cloud Monitoring ejecutan código automatizado personalizado (mediante Cloud Functions) para simular transacciones completas de usuarios de varios pasos a intervalos regulares, validando que la lógica de negocio y las dependencias complejas funcionen correctamente.",
    "distractors": {
      "A": "Opción correcta.",
      "B": "Cloud Storage Coldline es para almacenamiento de objetos pasivos.",
      "C": "Desactivar funciones críticas de la aplicación destruye la propuesta de valor del banco.",
      "D": "El monitoreo manual continuo por humanos es costoso, lento y no escala."
    },
    "officialDocUrl": "https://cloud.google.com/monitoring/synthetic-monitoring/overview",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-088",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Security Command Center: Detección de Amenazas en Contenedores (Container Threat Detection)",
    "difficulty": "advanced",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Detección de Intrusiones en Tiempo Real en Contenedores de GKE con Container Threat Detection",
    "scenario": "Un atacante logra explotar una vulnerabilidad en una aplicación web y ejecuta un shell inverso (reverse shell) dentro de un contenedor en ejecución en GKE o descarga un binario malicioso no autorizado en tiempo de ejecución. ¿Qué componente de Security Command Center detecta estas anomalías en el comportamiento de los contenedores en tiempo real?",
    "keywords": [
      "Container Threat Detection",
      "Security Command Center",
      "Detección de malware en contenedores",
      "Reverse shell",
      "GKE"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud DNS",
        "isTrap": true,
        "trapType": "dns_mismatch"
      },
      {
        "letter": "B",
        "text": "Container Threat Detection en Security Command Center",
        "isTrap": false
      },
      {
        "letter": "C",
        "text": "Cloud Storage Nearline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      },
      {
        "letter": "D",
        "text": "Desactivar los contenedores",
        "isTrap": true,
        "trapType": "absurd_option"
      }
    ],
    "correct": "B",
    "explanation": "Container Threat Detection en SCC supervisa continuamente el comportamiento de los contenedores en GKE en tiempo real, detectando ejecuciones de binarios no autorizados, scripts maliciosos, shells inversos y accesos anómalos dentro de los Pods.",
    "distractors": {
      "A": "Cloud DNS resuelve nombres de dominio.",
      "B": "Opción correcta.",
      "C": "Cloud Storage Nearline almacena archivos pasivos.",
      "D": "Desactivar los contenedores interrumpe las operaciones del negocio."
    },
    "officialDocUrl": "https://cloud.google.com/security-command-center/docs/concepts-container-threat-detection-overview",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-089",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Cloud Identity: Control de Dispositivos Móviles y Endpoint Management",
    "difficulty": "intermediate",
    "bloomsLevel": "understand",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Gestión de Dispositivos Móviles y Seguridad de Endpoints con Cloud Identity",
    "scenario": "Una empresa permite a sus empleados acceder a Google Workspace y a la consola de Google Cloud desde sus teléfonos móviles inteligentes y laptops personales. El equipo de seguridad requiere poder imponer el uso de contraseñas de bloqueo de pantalla, exigir el cifrado del almacenamiento del dispositivo y poder borrar de forma remota las cuentas y datos corporativos si un teléfono es extraviado o robado. ¿Qué funcionalidad de Cloud Identity proporciona esta protección?",
    "keywords": [
      "Endpoint Management",
      "Gestión de dispositivos móviles",
      "MDM",
      "Borrado remoto de datos corporativos",
      "Cloud Identity"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Interconnect Dedicated",
        "isTrap": true,
        "trapType": "telecom_mismatch"
      },
      {
        "letter": "B",
        "text": "Pedir al ladrón por correo electrónico que devuelva el teléfono robado",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "C",
        "text": "Gestión de Endpoints de Google Workspace y Cloud Identity (Google Endpoint Management)",
        "isTrap": false
      },
      {
        "letter": "D",
        "text": "Cloud Storage Coldline",
        "isTrap": true,
        "trapType": "storage_mismatch"
      }
    ],
    "correct": "C",
    "explanation": "Google Endpoint Management (integrado en Cloud Identity y Google Workspace) permite a las empresas asegurar y gestionar los dispositivos móviles y computadoras de los empleados, aplicando políticas de bloqueo, cifrado y borrado remoto selectivo de datos corporativos ante robo o extravío.",
    "distractors": {
      "A": "Cloud Interconnect es conectividad de red de fibra óptica física.",
      "B": "Los acuerdos informales con atacantes o ladrones no tienen efectividad técnica.",
      "C": "Opción correcta.",
      "D": "Cloud Storage Coldline almacena archivos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/identity/docs/overview-endpoint-management",
    "blockId": "BLOCK-6"
  },
  {
    "id": "CDL-D4-090",
    "certId": "cdl",
    "domainId": "CDL-D4",
    "domainName": "4. Seguridad y Operaciones en Google Cloud",
    "subtopic": "Resumen Maestro de Seguridad y Operaciones en Google Cloud",
    "difficulty": "advanced",
    "bloomsLevel": "analyze",
    "timeEstimateSeconds": 90,
    "caseStudy": "none",
    "title": "Conclusión Integral sobre Seguridad, Confianza y Gobernanza en Google Cloud",
    "scenario": "El Comité de Riesgos y Cumplimiento de una institución financiera internacional solicita un dictamen final sobre si la postura de seguridad y gobernanza operativa de Google Cloud cumple con los más altos estándares mundiales para albergar operaciones críticas. ¿Cuál es la conclusión definitiva fundamentada en la arquitectura de Google Cloud?",
    "keywords": [
      "Postura integral de seguridad",
      "Zero Trust",
      "Defensa en profundidad",
      "Cumplimiento normativo global",
      "Excelencia operativa"
    ],
    "isMultiSelect": false,
    "expectedSelectCount": 1,
    "options": [
      {
        "letter": "A",
        "text": "Los servidores en la nube son más inseguros que una computadora desatendida en un pasillo público.",
        "isTrap": true,
        "trapType": "absurd_option"
      },
      {
        "letter": "B",
        "text": "La gobernanza de la nube solo permite utilizar hojas de cálculo de papel.",
        "isTrap": true,
        "trapType": "absurd_reductive"
      },
      {
        "letter": "C",
        "text": "Google Cloud carece de cualquier medida de seguridad y confía ciegamente en cualquier conexión anónima.",
        "isTrap": true,
        "trapType": "false_premise"
      },
      {
        "letter": "D",
        "text": "Google Cloud proporciona una infraestructura de confianza probada a nivel planetario que combina: defensa en profundidad multicapa con chips Titan y cifrado predeterminado, arquitectura Zero Trust con BeyondCorp, gobernanza estandarizada con Resource Hierarchy y Organization Policies, observabilidad integral con Cloud Operations, excelencia operativa SRE y certificaciones de cumplimiento de terceros independientes del más alto nivel.",
        "isTrap": false
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud ofrece una arquitectura integral de seguridad, confiabilidad y gobernanza basada en décadas de investigación y operación a hiperescala, permitiendo a las organizaciones más exigentes del mundo innovar con confianza bajo los más rigurosos estándares de seguridad y cumplimiento normativo.",
    "distractors": {
      "A": "La infraestructura física y lógica de Google supera con creces los estándares de seguridad de la inmensa mayoría de centros de datos corporativos tradicionales.",
      "B": "Google Cloud ofrece herramientas de clase mundial para gobernar plataformas digitales completas.",
      "C": "Google Cloud implementa controles de seguridad exhaustivos y modelos Zero Trust en todas sus capas.",
      "D": "Opción correcta."
    },
    "officialDocUrl": "https://cloud.google.com/security",
    "blockId": "BLOCK-6"
  }
];

if (typeof window !== 'undefined') {
  window.GCP_CDL_QUESTIONS = cdlQuestions;
  window.GCP_QUESTIONS_CDL = cdlQuestions;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = cdlQuestions;
}
