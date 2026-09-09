(function (global) {
  'use strict';

  const GCP_CDL_QUESTIONS = [
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
        "text": "Cambio de un modelo de gastos operativos (OpEx) mensuales a un modelo de gastos de capital (CapEx) en el que la empresa amortiza en su balance los servidores virtuales que contrata en la nube."
      },
      {
        "letter": "B",
        "text": "Conservación del modelo de gastos de capital (CapEx), dado que la empresa sigue comprando y amortizando su propio hardware, alojado ahora físicamente en los centros de datos de Google."
      },
      {
        "letter": "C",
        "text": "Sustitución de los gastos de capital (CapEx) por una cuota anual fija negociada por adelantado con Google Cloud, independiente de los recursos que la organización consuma cada mes."
      },
      {
        "letter": "D",
        "text": "Cambio de un modelo de gastos de capital (CapEx) con grandes inversiones iniciales en hardware a un modelo de gastos operativos (OpEx) basado en el pago por consumo real de recursos."
      }
    ],
    "correct": "D",
    "explanation": "La computación en la nube transforma la economía de TI al sustituir grandes inversiones iniciales de capital (CapEx) en hardware y centros de datos por un modelo elástico de costos operativos (OpEx), donde solo se paga por los recursos efectivamente consumidos bajo demanda.",
    "distractors": {
      "C": "Una cuota fija anticipada sigue siendo un compromiso desligado del consumo; el rasgo que define el modelo OpEx es pagar solo por los recursos efectivamente usados.",
      "A": "Describe el movimiento en sentido contrario: la nube sustituye la inversión inicial en activos por gasto corriente, no al revés; además el cliente no capitaliza lo que alquila.",
      "B": "Eso describe alojamiento o colocation, donde el hardware sigue siendo del cliente. En Google Cloud el cliente nunca compra ni amortiza el equipo, solo paga por su uso."
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
    "scenario": "Un minorista multinacional está evaluando el Costo Total de Propiedad (TCO) de migrar su plataforma de comercio electrónico a Google Cloud en comparación con renovar su centro de datos local. ¿Qué dos elementos son necesarios para que la comparación de TCO refleje con precisión el valor económico real de cada opción? (Elige 2.)",
    "keywords": [
      "TCO",
      "Costo Total de Propiedad",
      "Gastos indirectos",
      "Mantenimiento de hardware",
      "Energía y enfriamiento"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Únicamente los costos de capital del ciclo de renovación: compra de servidores, cabinas de almacenamiento, equipamiento de red y licencias perpetuas, amortizados a cinco años."
      },
      {
        "letter": "B",
        "text": "Costos directos (hardware, almacenamiento, redes) y costos indirectos (energía eléctrica, refrigeración, mantenimiento de instalaciones, personal de administración de TI y costo de inactividad)."
      },
      {
        "letter": "C",
        "text": "Exclusivamente la factura mensual de Google Cloud proyectada a tres años con la Calculadora de Precios, comparada con el precio de lista de la renovación del hardware local."
      },
      {
        "letter": "D",
        "text": "Solamente los costos indirectos de operación: electricidad, refrigeración, espacio en rack y salarios del equipo de administración de sistemas, sin contabilizar hardware ni licencias."
      },
      {
        "letter": "E",
        "text": "Proyectar ambos escenarios, nube y renovación local, sobre el mismo horizonte temporal (típicamente de 3 a 5 años), en vez de comparar el gasto de un único año."
      }
    ],
    "correct": [
      "B",
      "E"
    ],
    "explanation": "Un TCO preciso exige incluir tanto los costos directos (hardware, almacenamiento, redes) como los indirectos (energía, refrigeración, personal, inactividad), y además comparar ambos escenarios sobre el mismo horizonte temporal; comparar un año de nube contra cinco de amortización local (o viceversa) distorsiona el resultado aunque los rubros de costo estén completos.",
    "distractors": {
      "A": "Contempla solo el gasto de capital de la renovación local (hardware y licencias) e ignora los costos indirectos de operación de ambas opciones.",
      "D": "Contempla solo los costos indirectos de operación e ignora por completo el gasto en hardware, almacenamiento y licencias de ambas opciones.",
      "C": "Compara únicamente el precio de lista de la renovación contra la factura de Google Cloud, sin considerar los costos indirectos actuales del centro de datos local."
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
        "text": "Pilar Learn (Aprender)"
      },
      {
        "letter": "B",
        "text": "Pilar Scale (Escalar)"
      },
      {
        "letter": "C",
        "text": "Pilar Lead (Liderar)"
      },
      {
        "letter": "D",
        "text": "Pilar Secure (Asegurar)"
      }
    ],
    "correct": "A",
    "explanation": "El pilar 'Learn' del Cloud Adoption Framework de Google Cloud se enfoca en el desarrollo de capacidades, programas de capacitación y certificación, y el fomento del aprendizaje continuo para cerrar la brecha de habilidades en la organización.",
    "distractors": {
      "B": "El pilar 'Scale' se orienta a la automatización de procesos, arquitectura de nube y adopción de microservicios.",
      "D": "El pilar 'Secure' se encarga de la gestión de identidad, cumplimiento normativo, gobernanza y seguridad.",
      "C": "El pilar 'Lead' se centra en el patrocinio ejecutivo, la cultura organizacional y la alineación estratégica entre las áreas de negocio y tecnología."
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
        "text": "Pilar Scale (Escalar)"
      },
      {
        "letter": "B",
        "text": "Pilar Secure (Asegurar)"
      },
      {
        "letter": "C",
        "text": "Pilar Learn (Aprender)"
      },
      {
        "letter": "D",
        "text": "Pilar Lead (Liderar)"
      }
    ],
    "correct": "D",
    "explanation": "El pilar 'Lead' del Google Cloud Adoption Framework evalúa y desarrolla el patrocinio ejecutivo, la gestión del cambio cultural, la estructura organizacional de los equipos y la alineación entre la estrategia empresarial y las iniciativas de TI.",
    "distractors": {
      "A": "Scale se enfoca en la capacidad operativa, automatización y modernización de servicios técnicos.",
      "C": "Learn se especializa en la formación y el desarrollo de competencias técnicas del personal.",
      "B": "Secure se enfoca en controles de riesgo, protección de datos y gobierno de identidades."
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
        "text": "Pilar Learn (Aprender)"
      },
      {
        "letter": "B",
        "text": "Pilar Scale (Escalar)"
      },
      {
        "letter": "C",
        "text": "Pilar Secure (Asegurar)"
      },
      {
        "letter": "D",
        "text": "Pilar Lead (Liderar)"
      }
    ],
    "correct": "B",
    "explanation": "El pilar 'Scale' del Google Cloud Adoption Framework se enfoca en la madurez operativa, la automatización de la infraestructura, los procesos ágiles de entrega continua y la capacidad de responder dinámicamente a la demanda del mercado.",
    "distractors": {
      "D": "Lead aborda liderazgo y patrocinio directivo.",
      "C": "Secure se enfoca en seguridad y controles de cumplimiento.",
      "A": "Learn se centra en habilidades y planes de estudio."
    },
    "officialDocUrl": "https://cloud.google.com/adoption-framework",
    "blockId": "BLOCK-1",
    "reservaCiega": true
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
        "text": "Cloud Storage Archive"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Nearline"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Standard"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Coldline"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Storage Standard está optimizado para datos 'calientes' que se consultan con frecuencia continua, ofreciendo la mayor disponibilidad y sin cargos por recuperación de datos por lectura.",
    "distractors": {
      "A": "Archive está diseñado para archivado a largo plazo con acceso menor a una vez al año y altas tarifas por lectura frecuente.",
      "B": "Nearline está optimizado para datos a los que se accede una vez al mes como máximo (backups rápidos).",
      "D": "Coldline está diseñado para datos a los que se accede como máximo una vez al trimestre e incurre en tarifas por recuperación de datos."
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
        "text": "Cloud Storage Standard"
      },
      {
        "letter": "B",
        "text": "Cloud Memorystore for Redis"
      },
      {
        "letter": "C",
        "text": "Persistent Disk SSD"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Nearline"
      }
    ],
    "correct": "D",
    "explanation": "Cloud Storage Nearline es ideal para datos a los que se prevé acceder menos de una vez cada 30 días, ofreciendo un costo de almacenamiento en reposo significativamente menor que Standard con acceso inmediato.",
    "distractors": {
      "A": "Standard Storage tiene una tarifa de almacenamiento por GB/mes más alta, lo que resulta más costoso para respaldos que casi nunca se leen.",
      "C": "Persistent Disk SSD es un almacenamiento de bloques para VMs activas, no un servicio económico de objetos para copias de respaldo.",
      "B": "Memorystore es una memoria RAM volátil para caché en memoria, no un almacenamiento persistente de respaldo."
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
        "text": "Cloud Filestore Enterprise"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Standard"
      },
      {
        "letter": "C",
        "text": "Compute Engine Local SSD"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Coldline"
      }
    ],
    "correct": "D",
    "explanation": "Cloud Storage Coldline ofrece un costo de almacenamiento en reposo muy bajo para datos que se consultan como máximo una vez cada 90 días, perfecto para planes de recuperación ante desastres.",
    "distractors": {
      "C": "Local SSD es almacenamiento efímero de ultra alto rendimiento atado físicamente al ciclo de vida de una VM.",
      "B": "Standard cobra tarifas más elevadas por GB almacenado al mes.",
      "A": "Filestore es un sistema de archivos NFS para aplicaciones de red compartidas de alto rendimiento, no almacenamiento pasivo para DR."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/storage-classes",
    "blockId": "BLOCK-1",
    "reservaCiega": true
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
        "text": "Cloud Storage Archive"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Standard"
      },
      {
        "letter": "C",
        "text": "Cloud SQL for PostgreSQL"
      },
      {
        "letter": "D",
        "text": "Cloud Bigtable"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Storage Archive es la clase de menor costo de almacenamiento en reposo en Google Cloud. A diferencia de cintas magnéticas u otros proveedores, los datos en Archive se pueden leer en milisegundos sin requerir procesos de descongelación de horas.",
    "distractors": {
      "C": "Cloud SQL es una base de datos relacional para transacciones activas, lo que representaría un costo exorbitante para archivar PDFs o archivos históricos.",
      "D": "Bigtable es una base de datos de streaming y baja latencia, no un servicio de archivado de documentos regulatorios.",
      "B": "Standard incurre en un gasto sustancialmente mayor para retenciones a largo plazo de 10 años."
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
        "text": "Activar Autoclass en el bucket de Cloud Storage para que cada archivo DICOM cambie de clase según su patrón de acceso real, sin definir reglas por antigüedad ni plazos de retención."
      },
      {
        "letter": "B",
        "text": "Aplicar al bucket una política de retención de 7 años con bloqueo (Bucket Lock) para que ningún estudio DICOM pueda eliminarse antes de cumplir el plazo exigido por la regulación."
      },
      {
        "letter": "C",
        "text": "Crear el bucket directamente en la clase Coldline para que todos los estudios DICOM tengan el precio de almacenamiento más bajo desde el momento en que se genera cada archivo."
      },
      {
        "letter": "D",
        "text": "Configurar una política de Object Lifecycle Management en el bucket de Cloud Storage para transicionar automáticamente los objetos de Standard a Coldline a los 30 días, y a Archive a los 365 días."
      }
    ],
    "correct": "D",
    "explanation": "Object Lifecycle Management en Cloud Storage permite definir reglas basadas en la antigüedad del objeto para cambiar automáticamente su clase de almacenamiento (ej. Standard -> Coldline -> Archive) o eliminarlo cuando cumpla su vigencia legal, optimizando costos de forma 100% desatendida.",
    "distractors": {
      "C": "Coldline impone una duración mínima de 90 días y cobra por recuperación, lo que penaliza justamente los estudios que se consultan de forma activa el primer mes.",
      "B": "El Bucket Lock garantiza la inmutabilidad y el plazo legal, pero no realiza ninguna transición de clase de almacenamiento: el coste sigue siendo el de Standard.",
      "A": "Autoclass optimiza según el acceso observado de cada objeto, pero no aplica el calendario regulatorio de 30 y 365 días ni la conservación obligatoria de 7 años."
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
        "text": "Cloud BigQuery Reservations"
      },
      {
        "letter": "B",
        "text": "Cloud DNS Geolocation"
      },
      {
        "letter": "C",
        "text": "Compute Engine Autoscaler"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Autoclass"
      }
    ],
    "correct": "D",
    "explanation": "Cloud Storage Autoclass transiciona automáticamente los objetos entre clases más frías (Nearline, Coldline, Archive) cuando no son accedidos, y los devuelve inmediatamente a Standard cuando se leen, sin cargos por recuperación de datos ni necesidad de configurar reglas manuales complejas.",
    "distractors": {
      "B": "Cloud DNS gestiona la resolución de nombres de dominio en la red.",
      "A": "BigQuery Reservations gestiona capacidad de cómputo (slots) para consultas SQL en data warehouse, no clases de objetos en Cloud Storage.",
      "C": "Compute Engine Autoscaler gestiona el número de instancias de máquinas virtuales."
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
        "text": "Regional con control de versiones de objetos activado"
      },
      {
        "letter": "B",
        "text": "Regional en us-central1 con clase Nearline y ciclo de vida"
      },
      {
        "letter": "C",
        "text": "Zonal, replicado con discos persistentes regionales"
      },
      {
        "letter": "D",
        "text": "Multi-Region o Dual-Region (por ejemplo, 'us' o 'nam4')"
      }
    ],
    "correct": "D",
    "explanation": "Los buckets Multi-Region y Dual-Region almacenan los datos de forma geo-redundante en al menos dos zonas geográficas separadas por cientos de kilómetros, garantizando disponibilidad y continuidad del negocio incluso ante la pérdida completa de una región.",
    "distractors": {
      "C": "Cloud Storage no tiene ubicación zonal: eso confunde el almacenamiento de objetos con los discos persistentes de las máquinas virtuales.",
      "A": "El versionado protege del borrado accidental dentro de la misma región; si la región completa cae, todas las versiones quedan igualmente inaccesibles.",
      "B": "La clase de almacenamiento cambia el costo y la frecuencia de acceso, no la geografía: los datos siguen alojados en una sola región."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/locations",
    "blockId": "BLOCK-1",
    "reservaCiega": true
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
        "text": "Activar el control de versiones de objetos (Object Versioning) para conservar todas las revisiones anteriores del archivo."
      },
      {
        "letter": "B",
        "text": "Aplicar una regla de ciclo de vida que mueva los objetos a la clase Archive y los conserve durante los cinco años exigidos."
      },
      {
        "letter": "C",
        "text": "Retirar el rol Storage Object Admin a todos los usuarios y dejar los permisos únicamente al administrador de la organización."
      },
      {
        "letter": "D",
        "text": "Configurar una política de retención en el bucket de Cloud Storage y bloquearla permanentemente con Bucket Lock."
      }
    ],
    "correct": "D",
    "explanation": "Bucket Lock permite fijar y bloquear de forma irrevocable una política de retención en Cloud Storage, haciendo que los objetos sean inmutables (WORM) y no puedan ser sobrescritos ni eliminados hasta que venza el periodo de retención especificado, cumpliendo con normas como SEC 17a-4.",
    "distractors": {
      "C": "Cualquier restricción de IAM la puede revertir quien conserve el rol; el requisito es que ni siquiera un Owner pueda modificar los registros durante 5 años.",
      "A": "El versionado conserva copias no vigentes, pero quien tenga permisos de administración puede eliminarlas de forma definitiva; no hay inmutabilidad WORM.",
      "B": "Las reglas de ciclo de vida gestionan la clase de almacenamiento y el costo, e incluso pueden borrar objetos; no impiden sobrescribir ni eliminar un archivo."
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
        "text": "Cloud Bigtable"
      },
      {
        "letter": "B",
        "text": "Google Cloud Storage"
      },
      {
        "letter": "C",
        "text": "Cloud SQL"
      },
      {
        "letter": "D",
        "text": "Cloud Firestore"
      }
    ],
    "correct": "C",
    "explanation": "Cloud SQL es el servicio de base de datos relacional totalmente administrado de Google Cloud compatible con motores estándar como PostgreSQL, MySQL y Microsoft SQL Server, gestionando automáticamente parches, backups y replicación.",
    "distractors": {
      "B": "Cloud Storage almacena objetos/archivos no estructurados, no ejecuta consultas relacionales SQL transaccionales.",
      "A": "Cloud Bigtable es una base de datos NoSQL de columnas anchas para streaming analítico y telemetría, no un motor relacional SQL estándar.",
      "D": "Firestore es una base de datos NoSQL de documentos orientada a aplicaciones web y móviles."
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
    "scenario": "Una aplicación de facturación empresarial en Cloud SQL no puede permitirse tiempos de inactividad si una zona del centro de datos sufre un corte de energía, y el equipo necesita que la aplicación siga funcionando tras la conmutación sin reconfiguración manual. ¿Qué dos acciones deben tomar? (Elige 2.)",
    "keywords": [
      "Cloud SQL HA",
      "Alta disponibilidad",
      "Conmutación por error",
      "Standby zonal",
      "Replicación sincrónica"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Crear una réplica de lectura de Cloud SQL en una zona distinta de la misma región y promoverla manualmente a instancia principal en cuanto el equipo detecte el corte de energía en la zona primaria."
      },
      {
        "letter": "B",
        "text": "Programar copias de seguridad automáticas cada hora con recuperación a un momento dado (PITR) y restaurar manualmente la instancia en otra zona si la zona primaria queda fuera de servicio."
      },
      {
        "letter": "C",
        "text": "Habilitar la configuración de Alta Disponibilidad (High Availability - HA) en Cloud SQL, que aprovisiona una instancia en espera (standby) en una zona diferente con replicación sincrónica de almacenamiento."
      },
      {
        "letter": "D",
        "text": "Configurar una réplica en cascada en otra región y una entrada de Cloud DNS con comprobación de estado que redirija la aplicación hacia el servidor secundario en caso de fallo zonal."
      },
      {
        "letter": "E",
        "text": "Configurar la aplicación para conectarse mediante el nombre de conexión de instancia de Cloud SQL, que permanece igual tras la conmutación sin reconfigurar la cadena de conexión."
      }
    ],
    "correct": [
      "C",
      "E"
    ],
    "explanation": "La Alta Disponibilidad (HA) de Cloud SQL aprovisiona automáticamente una instancia standby en otra zona con replicación síncrona, logrando la conmutación sin pérdida de datos. Pero ese failover solo es transparente para la aplicación si esta se conecta mediante el nombre de conexión de instancia (o la IP privada estable), que Cloud SQL preserva tras la conmutación; de lo contrario la aplicación seguiría apuntando a un endpoint caído.",
    "distractors": {
      "B": "Las copias de seguridad con PITR permiten restaurar a un punto anterior, pero la restauración es manual y puede perder hasta una hora de transacciones.",
      "A": "La promoción de la réplica es manual: exige que un humano detecte el corte de energía y actúe, introduciendo tiempo de inactividad antes de la conmutación.",
      "D": "La réplica en cascada cruza regiones (mayor latencia que dentro de la misma región) y el DNS con comprobación de estado no ofrece conmutación sincrónica sin pérdida de datos."
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
        "text": "Aumentar el tipo de máquina de la instancia primaria de Cloud SQL a más vCPUs y más memoria para que absorba a la vez las consultas de reporting y las transacciones de compra."
      },
      {
        "letter": "B",
        "text": "Crear una o más réplicas de lectura (Read Replicas) en Cloud SQL y redirigir las consultas de reportes a estas réplicas para no sobrecargar la instancia primaria de escritura."
      },
      {
        "letter": "C",
        "text": "Habilitar la configuración de Alta Disponibilidad de Cloud SQL y dirigir las consultas de los analistas a la instancia en espera (standby) situada en la zona secundaria."
      },
      {
        "letter": "D",
        "text": "Colocar una instancia de Memorystore for Redis delante de Cloud SQL para servir desde la caché los resultados de las consultas de reporting de los analistas de negocio."
      }
    ],
    "correct": "B",
    "explanation": "Las réplicas de lectura (Read Replicas) permiten escalar horizontalmente la capacidad de lectura de Cloud SQL, aislando las consultas pesadas de Business Intelligence de la base de datos primaria transaccional (OLTP).",
    "distractors": {
      "A": "El escalado vertical amplía la capacidad, pero no aísla las cargas: las consultas pesadas siguen compitiendo por los mismos recursos que las compras, y exige reiniciar la instancia.",
      "D": "La caché acelera lecturas repetidas de la misma clave, pero los reportes son agregaciones cambiantes: la primera ejecución de cada consulta sigue golpeando la instancia primaria.",
      "C": "La instancia en espera de una configuración HA no es accesible para consultas; solo recibe la replicación sincrónica y entra en servicio tras una conmutación por error."
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
        "text": "Cloud Spanner"
      },
      {
        "letter": "B",
        "text": "Cloud SQL para MySQL"
      },
      {
        "letter": "C",
        "text": "Cloud Memorystore"
      },
      {
        "letter": "D",
        "text": "Firestore en modo Datastore"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Spanner es la base de datos relacional global de Google Cloud pionera en la industria: combina la estructura y consistencia fuerte ACID de una base de datos relacional tradicional con la escalabilidad horizontal masiva de NoSQL y disponibilidad líder de hasta 99.999% (cinco nueves).",
    "distractors": {
      "C": "Memorystore es una caché en memoria para aceleración de latencia, no un almacenamiento relacional principal distribuido a escala global.",
      "B": "Cloud SQL escala verticalmente y sus escrituras están limitadas a una sola instancia primaria regional, requiriendo sharding manual complejo para escalas masivas.",
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
        "text": "Asignar Cloud Spanner a la aplicación departamental de nómina de 50 GB para garantizar la consistencia estricta de los recibos, y asignar Cloud SQL a la plataforma de banca digital global apoyándose en réplicas de lectura repartidas por los cuatro continentes."
      },
      {
        "letter": "B",
        "text": "Asignar Cloud SQL a la aplicación de nómina y asignar Cloud Bigtable a la plataforma de banca digital global por su escalabilidad de petabytes, aceptando su modelo de consistencia por fila para registrar las transferencias entre cuentas."
      },
      {
        "letter": "C",
        "text": "Asignar Firestore en Modo Nativo a la aplicación departamental de nómina por su modelo sin servidor, y asignar AlloyDB para PostgreSQL a la plataforma bancaria global replicando la instancia primaria en los cuatro continentes."
      },
      {
        "letter": "D",
        "text": "Asignar Cloud SQL a la aplicación departamental de nómina por su simplicidad y bajo costo, y asignar Cloud Spanner a la plataforma de banca digital global por su escalabilidad horizontal y consistencia transaccional multi-región."
      }
    ],
    "correct": "D",
    "explanation": "Cloud SQL es la opción ideal y económica para cargas relacionales medianas o regionales (hasta unos pocos terabytes), mientras que Cloud Spanner está diseñado para sistemas que superan la capacidad de una sola máquina y requieren distribución global con consistencia estricta.",
    "distractors": {
      "C": "AlloyDB admite réplicas de lectura entre regiones, pero mantiene una única instancia primaria de escritura regional: no ofrece escrituras distribuidas globalmente con consistencia externa.",
      "B": "Bigtable es NoSQL de clave-valor sin transacciones ACID entre filas: una transferencia bancaria que debita una cuenta y acredita otra no puede garantizarse atómicamente.",
      "A": "Invierte la matriz: Spanner queda sobredimensionado y caro para 50 GB, y Cloud SQL no escala las escrituras a millones de transacciones por segundo, porque sus réplicas solo sirven lecturas."
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
        "text": "Nodos de inquilino único (sole-tenant)"
      },
      {
        "letter": "B",
        "text": "Cloud SQL for MySQL Enterprise Plus"
      },
      {
        "letter": "C",
        "text": "Bare Metal Solution de Google Cloud"
      },
      {
        "letter": "D",
        "text": "Google Distributed Cloud conectado"
      }
    ],
    "correct": "C",
    "explanation": "Bare Metal Solution proporciona infraestructura de hardware dedicado (servidores físicos no virtualizados) adyacente a los centros de datos de Google Cloud con conexión de red de latencia sub-milisegundo, ideal para cargas empresariales especializadas como Oracle RAC que requieren licenciamiento físico específico.",
    "distractors": {
      "D": "Coloca hardware de Google en las instalaciones del propio cliente, por lo que no ofrece la adyacencia de latencia sub-milisegundo con los servicios de Google Cloud que pide el caso.",
      "B": "Cloud SQL es un servicio administrado para MySQL, PostgreSQL y SQL Server: no ejecuta el motor Oracle ni admite una configuración Oracle RAC.",
      "A": "El host físico es exclusivo del cliente, pero las cargas siguen ejecutándose como VMs sobre el hipervisor de Google: el escenario exige hardware sin virtualización."
    },
    "officialDocUrl": "https://cloud.google.com/bare-metal",
    "blockId": "BLOCK-1",
    "reservaCiega": true
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
        "text": "Database Migration Service (DMS)"
      },
      {
        "letter": "B",
        "text": "Cloud Data Fusion con conector JDBC"
      },
      {
        "letter": "C",
        "text": "Datastream para captura de cambios"
      },
      {
        "letter": "D",
        "text": "Migrate to Virtual Machines (M2VM)"
      }
    ],
    "correct": "A",
    "explanation": "Database Migration Service (DMS) de Google Cloud es una solución sin servidor, sencilla y de alta fidelidad para migrar bases de datos relacionales (como MySQL y PostgreSQL) a Cloud SQL con replicación continua que minimiza el tiempo de inactividad durante el corte final.",
    "distractors": {
      "D": "Migra máquinas virtuales completas: dejaría 50 MySQL autogestionados en Compute Engine, no bases de datos administradas en Cloud SQL, y exige una parada por servidor.",
      "C": "Datastream replica cambios (CDC) hacia destinos analíticos como BigQuery o Cloud Storage; no crea ni mantiene la instancia de Cloud SQL destino de la migración.",
      "B": "Data Fusion construye canalizaciones ETL para analítica: mueve y transforma datos hacia el almacén, pero no replica de forma continua una base de datos operativa a Cloud SQL."
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
        "text": "(1) IaaS (Infraestructura como Servicio), (2) PaaS (Plataforma como Servicio), (3) Serverless (sin servidor), (4) CaaS (Contenedores como Servicio)"
      },
      {
        "letter": "B",
        "text": "(1) CaaS (Contenedores como Servicio), (2) IaaS (Infraestructura como Servicio), (3) PaaS (Plataforma como Servicio), (4) Serverless (Contenedores sin servidor)"
      },
      {
        "letter": "C",
        "text": "(1) IaaS (Infraestructura como Servicio), (2) CaaS (Contenedores como Servicio), (3) SaaS (Software como Servicio), (4) PaaS (Plataforma como Servicio)"
      },
      {
        "letter": "D",
        "text": "(1) IaaS (Infraestructura como Servicio), (2) CaaS (Contenedores como Servicio), (3) PaaS (Plataforma como Servicio), (4) Serverless Containers (Contenedores sin servidor)"
      }
    ],
    "correct": "D",
    "explanation": "Compute Engine es IaaS (control total de VMs y SO); GKE es CaaS (orquestación empresarial de clústeres Kubernetes); App Engine Standard es PaaS (abstracción del runtime para código web); y Cloud Run es Serverless de contenedores (escalado automático a cero por petición sin administrar clústeres).",
    "distractors": {
      "A": "Desplaza la clasificación a partir del segundo servicio: GKE es CaaS y no PaaS, y Cloud Run es serverless de contenedores mientras App Engine Standard es el PaaS.",
      "C": "App Engine Standard es PaaS, no SaaS: el SaaS es software terminado que se consume, como Google Workspace, y no un entorno donde se despliega código propio.",
      "B": "Intercambia los dos primeros: Compute Engine entrega máquinas virtuales (IaaS) y GKE orquesta contenedores (CaaS)."
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
        "text": "Permite reservar nodos de inquilino único (sole-tenant) donde la aplicación heredada se ejecuta aislada en hardware físico dedicado, facturándose por el nodo completo en lugar de por la máquina virtual."
      },
      {
        "letter": "B",
        "text": "Permite crear Máquinas Virtuales Personalizadas (Custom Machine Types) con la cantidad exacta de vCPUs y memoria RAM requerida, pagando únicamente por los recursos específicos configurados."
      },
      {
        "letter": "C",
        "text": "Permite contratar descuentos por uso comprometido a uno o tres años sobre la familia de máquinas predefinida de 8 vCPUs y 32 GB, rebajando su precio de lista hasta un 55 por ciento."
      },
      {
        "letter": "D",
        "text": "Permite que el escalado automático del grupo de instancias administrado añada y retire réplicas de la máquina predefinida según la carga, ajustando el gasto al consumo real de la aplicación."
      }
    ],
    "correct": "B",
    "explanation": "Custom Machine Types en Compute Engine permite a los clientes adaptar con precisión quirúrgica el número de vCPUs y la cantidad de gigabytes de memoria RAM de sus VMs, optimizando los costos y evitando el sobredimensionamiento (overprovisioning) que imponen los tamaños rígidos estándar de la industria.",
    "distractors": {
      "A": "Los nodos de inquilino único resuelven el aislamiento físico y el licenciamiento por núcleo, pero se facturan por el nodo entero y no ajustan vCPU y RAM al requisito exacto.",
      "C": "El descuento abarata el precio, pero se sigue pagando por 8 vCPUs y 32 GB: no elimina las 2 vCPUs y los 5 GB desperdiciados que plantea el escenario.",
      "D": "El autoescalado ajusta el número de instancias, no la proporción de vCPU y memoria dentro de cada una, y la aplicación heredada no escala horizontalmente."
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
        "text": "A través de la Migración en Vivo (Live Migration), que traslada automáticamente la máquina virtual en ejecución a otro host físico sin reiniciar la VM ni interrumpir las conexiones de red ni las cargas de trabajo de la aplicación."
      },
      {
        "letter": "B",
        "text": "Mediante la política de Reinicio Automático (Automatic Restart), que vuelve a arrancar la máquina virtual sobre un host físico sano en cuanto termina el evento de mantenimiento programado del servidor original."
      },
      {
        "letter": "C",
        "text": "Colocando la instancia afectada en un Grupo de Instancias Administrado regional que crea una réplica en otra zona y retira la instancia original mientras dura la ventana de mantenimiento del host."
      },
      {
        "letter": "D",
        "text": "Notificando al cliente con antelación mediante Personalized Service Health para que programe él mismo una ventana de mantenimiento y detenga ordenadamente la carga de trabajo antes de que empiece."
      }
    ],
    "correct": "A",
    "explanation": "Live Migration es una capacidad exclusiva y diferenciadora de Compute Engine de Google Cloud que mantiene las máquinas virtuales de los clientes en funcionamiento continuo migrándolas en caliente a otros servidores físicos durante mantenimientos rutinarios de hardware, parches de seguridad y actualizaciones de la infraestructura de Google.",
    "distractors": {
      "B": "El reinicio automático sí devuelve la VM al servicio, pero implica un arranque completo: hay tiempo de inactividad, se pierde el contenido de la memoria y se cortan las conexiones de red, justo lo que el escenario exige evitar.",
      "C": "Un MIG da disponibilidad al conjunto sustituyendo instancias, pero no preserva la máquina virtual concreta que el cliente está ejecutando: la original se destruye y se pierde su estado, y el escenario pregunta por esa misma VM.",
      "D": "Trasladaría la interrupción al cliente en lugar de evitarla, y el mantenimiento de host en Compute Engine es transparente: no requiere ninguna acción del cliente ni una ventana acordada para las VMs con migración en vivo."
    },
    "officialDocUrl": "https://cloud.google.com/compute/docs/instances/live-migration",
    "blockId": "BLOCK-1",
    "reservaCiega": true
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
        "text": "Descuentos por uso continuado (Sustained Use Discounts), aplicados automáticamente cuando la instancia supera una fracción significativa del mes en ejecución"
      },
      {
        "letter": "B",
        "text": "Descuentos por compromiso de uso (CUD) a uno o tres años sobre la vCPU y la memoria reservadas por adelantado en la región elegida"
      },
      {
        "letter": "C",
        "text": "Spot VMs (máquinas virtuales con descuento que aprovechan capacidad de cómputo sobrante y pueden ser interrumpidas con un aviso previo de 30 segundos)"
      },
      {
        "letter": "D",
        "text": "Instancias E2 de núcleo compartido de la familia optimizada en coste, apagadas fuera del horario de trabajo mediante Cloud Scheduler"
      }
    ],
    "correct": "C",
    "explanation": "Las Spot VMs en Compute Engine ofrecen ahorros masivos (del 60% al 91% frente al precio regular) para cargas de trabajo tolerantes a fallos, renderizado, análisis por lotes y pruebas que pueden ser interrumpidas de forma segura cuando Google Cloud requiere esa capacidad para otros servicios.",
    "distractors": {
      "B": "Exigen comprometer gasto durante años, lo que no encaja con un presupuesto muy limitado ni con cargas por lotes esporádicas, y no contemplan interrupciones.",
      "A": "Se aplican solos por mantener la VM encendida y rondan el 30%: no alcanzan el rango del 60% al 91% ni implican que Google pueda recuperar la capacidad.",
      "D": "Abaratan la instancia por su tamaño y su apagado programado, pero no ofrecen el descuento por capacidad sobrante ni el modelo de interrupción descrito."
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
        "text": "VM blindada (Shielded VM) con arranque seguro y vTPM virtual"
      },
      {
        "letter": "B",
        "text": "VM confidencial (Confidential VM) con la memoria cifrada en uso"
      },
      {
        "letter": "C",
        "text": "Nodos de Inquilino Único (Sole-Tenant Nodes en Compute Engine)"
      },
      {
        "letter": "D",
        "text": "Reserva de capacidad zonal específica en Compute Engine"
      }
    ],
    "correct": "C",
    "explanation": "Sole-Tenant Nodes proporcionan servidores físicos dedicados exclusivamente para alojar las máquinas virtuales de un solo cliente en Compute Engine, permitiendo aislamiento físico total para requisitos de cumplimiento y optimización de licencias por zócalo/núcleo físico (BYOL).",
    "distractors": {
      "B": "Confidential VM cifra la memoria en uso frente al hipervisor, pero no proporciona el aislamiento del hardware físico ni el licenciamiento por núcleo físico que exige el caso.",
      "A": "Shielded VM protege la integridad del arranque y del firmware de la instancia, pero el servidor físico que la ejecuta se sigue compartiendo con VMs de otros clientes.",
      "D": "Una reserva garantiza que haya capacidad disponible en la zona cuando se cree la VM; no reserva un servidor físico dedicado ni impide compartir el host."
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
        "text": "Cloud KMS con claves CMEK y Cloud HSM certificado FIPS 140-2 nivel 3 aplicadas al cifrado de los discos persistentes."
      },
      {
        "letter": "B",
        "text": "Shielded VMs (con Secure Boot y vTPM para integridad de arranque) y Confidential VMs (con cifrado de memoria en uso mediante AMD SEV)."
      },
      {
        "letter": "C",
        "text": "Controles de Servicio de VPC con un perímetro de servicio y Google Cloud Armor con reglas WAF delante de la aplicación."
      },
      {
        "letter": "D",
        "text": "VMs Blindadas (Shielded VM con Secure Boot, vTPM y monitoreo de integridad) desplegadas sobre nodos Sole-Tenant dedicados."
      }
    ],
    "correct": "B",
    "explanation": "Shielded VMs ofrecen integridad verificable de arranque (Secure Boot, vTPM y monitoreo de integridad contra malware a nivel de kernel/firmware), mientras que Confidential VMs cifran los datos en uso en la memoria RAM utilizando aislamiento criptográfico por hardware (AMD SEV).",
    "distractors": {
      "A": "Protege los datos en reposo controlando las claves de cifrado del disco, pero no verifica la integridad del firmware de arranque ni cifra los datos mientras se procesan en la memoria RAM de la instancia.",
      "D": "Cubre la mitad del requisito: la integridad de arranque queda protegida, pero un nodo de inquilino único solo garantiza aislamiento físico del host y deja los datos en claro en la RAM, que es lo que resuelven las Confidential VMs.",
      "C": "Son controles de red y de perímetro contra la exfiltración de datos y los ataques web: no intervienen en el arranque de la máquina virtual ni protegen el contenido de la memoria frente al hipervisor."
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
        "text": "GKE Standard con el autoescalador de clústeres activado, de modo que el equipo define los tipos de máquina de cada grupo de nodos y mantiene su sistema operativo"
      },
      {
        "letter": "B",
        "text": "Cloud Run for Anthos desplegando los microservicios sobre un clúster de GKE Standard que el equipo de operaciones sigue aprovisionando, parcheando y dimensionando"
      },
      {
        "letter": "C",
        "text": "GKE Autopilot (modo totalmente administrado donde Google gestiona los nodos y la infraestructura, y el cliente solo paga por los Pods en ejecución)"
      },
      {
        "letter": "D",
        "text": "Compute Engine con un grupo de instancias administrado y Kubernetes instalado con kubeadm por el equipo, apoyado en el autoescalado de las máquinas virtuales"
      }
    ],
    "correct": "C",
    "explanation": "GKE Autopilot es el modo de operación recomendado de Kubernetes donde Google gestiona toda la infraestructura del clúster (plano de control y nodos de trabajo), optimiza la seguridad según las mejores prácticas y factura exclusivamente por los recursos de CPU, memoria y almacenamiento solicitados por los Pods activos.",
    "distractors": {
      "A": "El autoescalador automatiza el número de nodos, pero el cliente sigue eligiendo y manteniendo los grupos de nodos y su sistema operativo, y paga por la capacidad del nodo, no por lo que piden los Pods.",
      "D": "Es el extremo opuesto al requisito: el equipo asume la instalación, el parcheado y el escalado tanto del plano de control como de las VMs que hacen de nodos.",
      "B": "Ofrece una experiencia de despliegue serverless, pero la infraestructura subyacente sigue siendo un clúster GKE Standard que el equipo de operaciones tiene que aprovisionar y actualizar."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/concepts/autopilot-overview",
    "blockId": "BLOCK-1",
    "reservaCiega": true
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
    "scenario": "Una startup ha empaquetado su API web en un contenedor Docker en cualquier lenguaje (Node.js, Go o Python). Quieren un servicio que reciba peticiones HTTPS, escale automáticamente de 0 a cientos de instancias durante el día, vuelva a escalar a 0 en la noche sin cobrar nada cuando no haya tráfico, y que además permita desplegar una nueva revisión del contenedor recibiendo gradualmente el tráfico para reducir el riesgo del despliegue. ¿Qué dos capacidades deben usar? (Elige 2.)",
    "keywords": [
      "Cloud Run",
      "Serverless Containers",
      "Escalado a cero",
      "Contenedores Docker",
      "Pago por petición"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Cloud Storage Coldline"
      },
      {
        "letter": "B",
        "text": "Cloud Interconnect Dedicated"
      },
      {
        "letter": "C",
        "text": "Cloud Run"
      },
      {
        "letter": "D",
        "text": "Compute Engine con VMs de tamaño fijo encendidas 24/7"
      },
      {
        "letter": "E",
        "text": "Usar el traffic splitting de Cloud Run entre revisiones."
      }
    ],
    "correct": [
      "C",
      "E"
    ],
    "explanation": "Cloud Run ejecuta contenedores serverless que escalan de 0 a cientos de instancias según el tráfico y vuelven a 0 sin costo en reposo. Para desplegar una nueva revisión con bajo riesgo, Cloud Run también permite dividir el tráfico gradualmente entre la revisión anterior y la nueva (traffic splitting), en vez de enviar el 100% del tráfico de inmediato; ambas capacidades pertenecen al mismo servicio y se usan juntas.",
    "distractors": {
      "D": "Unas VMs de tamaño fijo encendidas 24/7 siguen cobrando aunque no haya tráfico nocturno, justo lo contrario de escalar a cero costo.",
      "A": "Cloud Storage Coldline es una clase de almacenamiento de objetos de bajo costo para datos de acceso infrecuente; no ejecuta contenedores ni atiende peticiones HTTPS.",
      "B": "Cloud Interconnect Dedicated es un enlace de red física dedicado hacia Google Cloud; no tiene relación con ejecutar o escalar contenedores."
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
        "text": "Mantener un clúster de 10 máquinas virtuales Compute Engine dedicadas exclusivamente a esperar archivos"
      },
      {
        "letter": "B",
        "text": "Contratar a un diseñador para que redimensione manualmente cada imagen que suba un usuario"
      },
      {
        "letter": "C",
        "text": "Cloud Functions (con un disparador de evento de Cloud Storage)"
      },
      {
        "letter": "D",
        "text": "Cloud Armor"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Functions es una plataforma de funciones como servicio (FaaS) orientada a eventos y sin servidor que ejecuta código automáticamente en respuesta a cambios en Cloud Storage, mensajes de Pub/Sub o peticiones HTTP, facturando únicamente por los milisegundos de ejecución.",
    "distractors": {
      "D": "Cloud Armor es un servicio de firewall de aplicaciones web (WAF) contra ataques DDoS.",
      "A": "Mantener 10 VMs encendidas 24/7 esperando eventos esporádicos genera un desperdicio financiero masivo.",
      "B": "El redimensionamiento manual es lento, costoso y no escala para miles de imágenes por minuto."
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
        "text": "(1) App Engine Entorno Flexible (Flexible Environment); (2) App Engine Entorno Estándar (Standard Environment)"
      },
      {
        "letter": "B",
        "text": "(1) App Engine Entorno Estándar (Standard Environment); (2) App Engine Entorno Estándar con un runtime personalizado"
      },
      {
        "letter": "C",
        "text": "(1) App Engine Entorno Flexible con escalado automático; (2) App Engine Entorno Flexible con contenedores Docker propios"
      },
      {
        "letter": "D",
        "text": "(1) App Engine Entorno Estándar (Standard Environment); (2) App Engine Entorno Flexible (Flexible Environment)"
      }
    ],
    "correct": "D",
    "explanation": "App Engine Standard ejecuta aplicaciones en entornos seguros y optimizados (sandboxes) que escalan casi instantáneamente a cero y responden en segundos. App Engine Flexible ejecuta contenedores Docker personalizados en VMs de Compute Engine, permitiendo modificar el sistema operativo e instalar binarios personalizados a cambio de un escalado más gradual.",
    "distractors": {
      "B": "El entorno Estándar ejecuta runtimes en un sandbox cerrado: no permite instalar librerías C++ del sistema ni imágenes Docker propias.",
      "C": "El entorno Flexible mantiene al menos una instancia activa y arranca en minutos, por lo que no cubre el escalado desde cero en segundos del proyecto 1.",
      "A": "Invierte los entornos: el Flexible no escala a cero ni arranca en segundos, y el Estándar no admite binarios personalizados del sistema operativo."
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
        "text": "Reescribir manualmente las 1,000 aplicaciones en Cloud Functions en 60 días"
      },
      {
        "letter": "B",
        "text": "Cloud DNS"
      },
      {
        "letter": "C",
        "text": "Google Play Store"
      },
      {
        "letter": "D",
        "text": "Google Cloud VMware Engine (GCVE)"
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud VMware Engine (GCVE) proporciona una pila completa de VMware (vSphere, vCenter, vSAN, NSX-T) certificada y administrada por Google que se ejecuta de forma nativa en hardware bare metal dedicado de Google Cloud, permitiendo migrar cargas de VMware sin interrupciones ni cambios en herramientas operativas.",
    "distractors": {
      "A": "Reescribir mil aplicaciones complejas en 60 días es técnicamente inviable y causaría el fracaso del proyecto.",
      "B": "Cloud DNS gestiona nombres de dominio web, no hospeda máquinas virtuales de VMware.",
      "C": "Google Play Store es una tienda de aplicaciones para smartphones Android."
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
        "text": "(1) Compute Engine, (2) GKE, (3) Cloud Run, (4) Cloud Functions"
      },
      {
        "letter": "B",
        "text": "(1) Cloud Run, (2) Cloud Functions, (3) Compute Engine, (4) GKE"
      },
      {
        "letter": "C",
        "text": "(1) Cloud Functions, (2) Compute Engine, (3) GKE, (4) Cloud Run"
      },
      {
        "letter": "D",
        "text": "Utilizar Cloud Storage Archive para ejecutar todas las aplicaciones"
      }
    ],
    "correct": "A",
    "explanation": "Compute Engine es ideal para control total del sistema operativo y licencias legadas; GKE para gestión integral de clústeres de contenedores con Kubernetes; Cloud Run para microservicios web en contenedores con abstracción serverless total; y Cloud Functions para micro-lógica efímera disparada por eventos.",
    "distractors": {
      "D": "Cloud Storage almacena archivos estáticos; no ejecuta código de aplicación de cómputo.",
      "C": "Cloud Functions no permite modificar kernels de SO; Compute Engine no es el orquestador de microservicios con políticas avanzadas de Kubernetes.",
      "B": "Cloud Run no proporciona acceso directo a hardware ni modificaciones de kernel del sistema operativo."
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
        "text": "Reduce automáticamente la factura de infraestructura, porque repartir el monolito en servicios pequeños disminuye el cómputo total que consume la plataforma de comercio electrónico."
      },
      {
        "letter": "B",
        "text": "Permite que equipos independientes desarrollen, escalen y desplieguen cada funcionalidad de forma autónoma, aislando los fallos para que un error en un servicio no afecte al resto de la plataforma."
      },
      {
        "letter": "C",
        "text": "Simplifica la operación al eliminar la necesidad de orquestación, descubrimiento de servicios y observabilidad distribuida, ya que cada servicio se despliega y se supervisa de forma aislada."
      },
      {
        "letter": "D",
        "text": "Garantiza que cada compra siga siendo una única transacción ACID, porque todos los microservicios continúan escribiendo sobre la misma base de datos central del monolito original."
      }
    ],
    "correct": "B",
    "explanation": "La arquitectura de microservicios divide una aplicación en servicios pequeños, acoplados de forma flexible e independientes. Esto habilita despliegues continuos rápidos por equipos autónomos, mejora la resiliencia (aislando errores) y permite escalar únicamente los módulos bajo alta demanda.",
    "distractors": {
      "C": "La descomposición traslada complejidad a la capa de operación: exige orquestación, descubrimiento de servicios y trazas distribuidas, en lugar de eliminarlos.",
      "A": "Los microservicios no reducen el cómputo total: la comunicación entre servicios suele aumentarlo. El beneficio buscado es la autonomía de despliegue y el aislamiento de fallos.",
      "D": "El patrón correcto es una base de datos por servicio; compartir la base central mantiene exactamente el acoplamiento que la descomposición pretende eliminar."
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
        "text": "Empaquetando la aplicación junto con todo su código, runtime, librerías del sistema y dependencias en una imagen inmutable de contenedor que se ejecuta de forma idéntica y predecible en cualquier entorno (desarrollo, pruebas o producción en la nube)."
      },
      {
        "letter": "B",
        "text": "Ejecutando la aplicación sobre una máquina virtual de Compute Engine creada a partir de una imagen de disco personalizada (golden image), de modo que cada entorno arranque una copia idéntica del servidor de pruebas con el sistema operativo completo incluido."
      },
      {
        "letter": "C",
        "text": "Estandarizando en el repositorio un archivo de dependencias bloqueado (lock file) y una guía de instalación que cada entorno ejecute al desplegar, de modo que las versiones de las librerías coincidan entre el portátil del desarrollador y el servidor de pruebas."
      },
      {
        "letter": "D",
        "text": "Empaquetando la aplicación en una imagen de contenedor que incluye también el kernel completo del sistema operativo invitado, de modo que cada contenedor arranque su propio núcleo aislado y se comporte igual en cualquier servidor con independencia del anfitrión."
      }
    ],
    "correct": "A",
    "explanation": "Los contenedores encapsulan el código de la aplicación y todas sus dependencias en un paquete estándar y portátil. Esto garantiza paridad total entre los entornos de desarrollo local y los entornos de producción en la nube, resolviendo el clásico problema de inconsistencia de configuraciones.",
    "distractors": {
      "D": "Los contenedores comparten el kernel del host y solo empaquetan el espacio de usuario; incluir un kernel propio describe una máquina virtual, no un contenedor.",
      "C": "El lock file fija las dependencias del lenguaje, pero no la versión del runtime, las librerías del sistema operativo ni las variables de entorno, que son las diferencias que provocan el fallo.",
      "B": "La imagen dorada versiona el sistema operativo entero en un artefacto pesado ligado a Compute Engine: no se ejecuta en el portátil del desarrollador ni aisla las dependencias de cada aplicación."
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
        "text": "Cloud Build"
      },
      {
        "letter": "B",
        "text": "Google Cloud Billing Export"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Nearline"
      },
      {
        "letter": "D",
        "text": "Google Compute Engine Local SSD"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Build es el servicio de integración y entrega continua (CI/CD) completamente administrado y sin servidor de Google Cloud que ejecuta compilaciones en la infraestructura escalable de Google, soportando pasos personalizados en contenedores y disparadores automatizados desde repositorios de código.",
    "distractors": {
      "D": "Local SSD es almacenamiento de disco de alto rendimiento para VMs.",
      "C": "Cloud Storage Nearline es para copias de seguridad de acceso mensual.",
      "B": "Cloud Billing Export exporta datos financieros a BigQuery para auditoría de costos."
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
        "text": "Google es responsable del sistema operativo invitado, de aplicar los parches de seguridad de la máquina virtual y del tiempo de ejecución de la aplicación; el cliente solo se ocupa de sus datos y de las cuentas de usuario, igual que sucede en un servicio de software como servicio."
      },
      {
        "letter": "B",
        "text": "Google es responsable de toda la pila, incluidos el hipervisor, el sistema operativo invitado, las reglas de firewall de la VPC, el código de la aplicación y las concesiones de IAM; el cliente únicamente decide en qué región y zona se despliega la carga de trabajo."
      },
      {
        "letter": "C",
        "text": "El cliente es responsable de todo lo que ocurre por encima y por debajo de la máquina virtual, incluidos el mantenimiento del hardware del centro de datos, la seguridad perimetral de las instalaciones y la actualización del hipervisor, y Google solo factura el consumo."
      },
      {
        "letter": "D",
        "text": "Google es responsable de la seguridad física de los centros de datos, el hardware y la capa del hipervisor; el cliente es responsable de aplicar parches al sistema operativo de la VM, configurar el firewall, la seguridad de las aplicaciones, el control de accesos (IAM) y la protección de sus datos."
      }
    ],
    "correct": "D",
    "explanation": "En el modelo de responsabilidad compartida para IaaS (Compute Engine), Google asegura la infraestructura física, hardware, red física e hipervisor, mientras que el cliente retiene la responsabilidad sobre el sistema operativo invitado, parches de software, configuración de red/firewall, aplicaciones, datos y políticas de acceso IAM.",
    "distractors": {
      "A": "Describe el reparto propio de SaaS o PaaS: en IaaS con Compute Engine el sistema operativo invitado y sus parches son responsabilidad exclusiva del cliente.",
      "C": "El hardware, las instalaciones y la capa del hipervisor son siempre responsabilidad de Google en IaaS: el cliente ni siquiera tiene acceso a esos componentes.",
      "B": "En ningún modelo de nube el proveedor asume la configuración de IAM ni las reglas de firewall del cliente; la responsabilidad se comparte, nunca se transfiere por completo."
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
        "text": "La responsabilidad del cliente no varía: sigue teniendo que aplicar los parches del sistema operativo subyacente, dimensionar el número de instancias y planificar la capacidad, y Google solo asume el hardware físico y la red del centro de datos."
      },
      {
        "letter": "B",
        "text": "Google pasa a hacerse cargo también de la configuración de acceso IAM, de la clasificación de los datos que se cargan y de la corrección del código de la aplicación desplegada, de modo que el cliente queda exento de tareas de seguridad."
      },
      {
        "letter": "C",
        "text": "Google asume la responsabilidad de aplicar parches al sistema operativo subyacente, el aprovisionamiento de hardware y el mantenimiento del runtime; el cliente solo es responsable de su código de aplicación, la configuración de acceso IAM y la protección de sus datos."
      },
      {
        "letter": "D",
        "text": "Google asume la gestión completa del cifrado y de las claves, de modo que el cliente deja de necesitar CMEK, políticas de retención o controles de residencia, porque las certificaciones de cumplimiento de Google cubren toda la gobernanza."
      }
    ],
    "correct": "C",
    "explanation": "Conforme se adoptan niveles superiores de abstracción (PaaS, Serverless y SaaS), Google asume más responsabilidades operativas (parches de SO, escalado, hardware, runtime), reduciendo la carga de mantenimiento del cliente al control de identidades (IAM), gobernanza de datos y lógica de aplicación.",
    "distractors": {
      "B": "La identidad, los datos y el código son responsabilidad del cliente en todos los niveles del modelo: Google responde de la seguridad de la nube, y el cliente de la seguridad en la nube, por muy administrado que sea el servicio.",
      "A": "En Cloud Run y BigQuery el parcheo del sistema operativo, el escalado y el aprovisionamiento de capacidad los realiza Google. Ese reparto describe el modelo de IaaS de Compute Engine, no el de los servicios serverless y administrados.",
      "D": "Las certificaciones de Google acreditan los controles de la plataforma, pero las obligaciones normativas sobre los datos del cliente (residencia, retención y control de claves con CMEK) siguen siendo suyas incluso en servicios serverless."
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
        "text": "Asignarle el rol primitivo `roles/editor` sobre el proyecto, que le permite ejecutar consultas y además crear y modificar cualquier otro recurso, para no tener que revisar sus permisos más adelante."
      },
      {
        "letter": "B",
        "text": "Asignarle el rol predefinido `roles/bigquery.admin` a nivel de la carpeta de marketing, ya que es un rol granular de BigQuery y no un rol primitivo aplicado sobre toda la organización."
      },
      {
        "letter": "C",
        "text": "Concederle `roles/viewer` en el proyecto y además compartir el dataset mediante acceso público de solo lectura, para que pueda ejecutar sus consultas sin configurar permisos recurso por recurso."
      },
      {
        "letter": "D",
        "text": "Asignarle un rol predefinido granular (como `roles/bigquery.dataViewer` en el dataset específico y `roles/bigquery.jobUser` en el proyecto) que otorgue únicamente los permisos estrictamente necesarios para su labor."
      }
    ],
    "correct": "D",
    "explanation": "El Principio de Menor Privilegio (Principle of Least Privilege) establece que a cada usuario o cuenta se le deben otorgar únicamente los permisos mínimos estrictamente necesarios para realizar sus funciones de trabajo, previniendo accesos accidentales o maliciosos no autorizados.",
    "distractors": {
      "B": "Es predefinido, pero `bigquery.admin` concede administración total (crear y eliminar datasets) y además se aplica en un alcance superior al dataset requerido.",
      "A": "`roles/editor` es un rol primitivo de alcance amplio sobre todos los servicios del proyecto: permite crear y borrar recursos ajenos a la tarea del analista.",
      "C": "`roles/viewer` es un rol primitivo de todo el proyecto y el acceso público expone el dataset fuera de la organización, lo contrario del menor privilegio."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/understanding-roles",
    "blockId": "BLOCK-1",
    "reservaCiega": true
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
        "text": "Los roles primitivos (Viewer, Editor, Owner) son demasiado amplios y afectan a todos los servicios del proyecto; los roles predefinidos son específicos por servicio y siguen el principio de menor privilegio, mientras que los roles personalizados permiten definir listas exactas de permisos individuales."
      },
      {
        "letter": "B",
        "text": "Los roles primitivos (Viewer, Editor, Owner) se heredan desde la organización y no pueden revocarse en el ámbito del proyecto, de modo que la única forma de retirarle el acceso a un usuario sería eliminar su cuenta del dominio; los roles predefinidos y personalizados sí admiten revocación granular por recurso."
      },
      {
        "letter": "C",
        "text": "Porque los roles predefinidos generan registros de auditoría más detallados en Cloud Audit Logs que los primitivos, permitiendo reconstruir qué acción concreta ejecutó cada usuario, mientras que Viewer y Editor conceden exactamente los mismos permisos que un rol predefinido de administrador de servicio."
      },
      {
        "letter": "D",
        "text": "Porque los roles primitivos solo alcanzan a los recursos que ya existían cuando se asignó la vinculación y no cubren los servicios habilitados después en el proyecto, mientras que los roles predefinidos se actualizan solos cuando Google añade permisos nuevos a cada servicio administrado."
      }
    ],
    "correct": "A",
    "explanation": "Los roles primitivos o básicos (Viewer, Editor, Owner) provienen de las primeras versiones de GCP y otorgan permisos masivos e indiscriminados en todos los recursos de un proyecto. La mejor práctica es utilizar roles predefinidos específicos por servicio (ej. `roles/storage.objectAdmin`) o roles personalizados cuando se requieren combinaciones exactas de permisos.",
    "distractors": {
      "D": "Invierte el comportamiento real: los roles básicos se aplican a todos los recursos del proyecto, incluidos los creados o habilitados después, y por eso resultan excesivamente amplios.",
      "B": "Los roles básicos se conceden y se revocan como cualquier otra vinculación de IAM en el proyecto: el problema es su amplitud de permisos, no una supuesta imposibilidad de revocarlos.",
      "C": "El detalle del registro de auditoría depende del servicio y del tipo de log, nunca del tipo de rol concedido; además Editor abarca muchísimos más permisos que un rol predefinido de un solo servicio."
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
        "text": "Un Grupo de Google (Google Group) con el rol Storage Object Viewer al que se agregan los desarrolladores del equipo."
      },
      {
        "letter": "B",
        "text": "Una Cuenta de Servicio (Service Account) con los roles de IAM específicos otorgados para acceder a Cloud Storage."
      },
      {
        "letter": "C",
        "text": "Una cuenta de usuario de Cloud Identity dedicada, cuya contraseña se guarda en un archivo de configuración de la VM."
      },
      {
        "letter": "D",
        "text": "Una clave de API (API Key) del proyecto enviada como parámetro de consulta en cada llamada a la API de Cloud Storage."
      }
    ],
    "correct": "B",
    "explanation": "Una Service Account (Cuenta de Servicio) es una identidad especial utilizada por aplicaciones y cargas de trabajo de cómputo (en lugar de personas humanas) para autenticarse y realizar llamadas autorizadas a las APIs de Google Cloud de forma segura mediante tokens de corta duración.",
    "distractors": {
      "A": "Un grupo agrupa identidades humanas para asignarles roles; no puede adjuntarse a una instancia como identidad de ejecución, así que la VM seguiría sin credencial propia.",
      "D": "Una clave de API solo identifica al proyecto que llama y sirve para cuotas; no autentica una identidad ni autoriza el acceso a los datos de un bucket.",
      "C": "Es una identidad humana: exige consentimiento interactivo y credenciales de larga duración almacenadas en disco, justo lo que el escenario quiere evitar."
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
        "text": "Crear una Service Account por ingeniero (p. ej. `ingeniero@proyecto.iam.gserviceaccount.com`), con los 15 roles de IAM, y entregar la clave JSON al empleado, rotándola si cambia de departamento."
      },
      {
        "letter": "B",
        "text": "Definir un rol personalizado `roles/miEmpresa.devOps15` con los 15 permisos y asignarlo al correo de cada ingeniero en los 30 proyectos, repitiendo la asignación en cada alta o cambio."
      },
      {
        "letter": "C",
        "text": "Crear un Grupo de Google (ej. `devops-team@tuempresa.com`), asignarle los roles de IAM necesarios y simplemente agregar o remover a los ingenieros del grupo según cambien de puesto."
      },
      {
        "letter": "D",
        "text": "Conceder el rol básico `roles/editor` a nivel de organización a los 50 ingenieros para que hereden acceso a los 30 proyectos sin necesidad de gestionar asignaciones de roles proyecto por proyecto."
      }
    ],
    "correct": "C",
    "explanation": "Asignar roles de IAM a Google Groups en lugar de a usuarios individuales es una mejor práctica fundamental en Google Cloud: simplifica la administración de identidades, reduce el error humano y garantiza que cuando un empleado cambia de rol o deja la empresa, revocar sus accesos solo requiera removerlo del grupo central.",
    "distractors": {
      "B": "El rol personalizado resuelve el empaquetado de permisos, pero la asignación sigue siendo usuario por usuario y proyecto por proyecto: el problema que plantea el escenario es la gestión de identidades, no el número de roles.",
      "A": "Las Service Accounts son identidades de máquina para cargas de trabajo, no para personas: no resuelven la gestión del ciclo de vida del empleado y añaden claves JSON de larga vida que hay que custodiar.",
      "D": "Viola el principio de mínimo privilegio: Editor concede muchísimos más permisos que los 15 roles requeridos y no permite revocar el acceso de un ingeniero que cambia de puesto sin tocar la política de la organización."
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
        "text": "Federación de Identidades para Cargas de Trabajo (Workload Identity Federation mediante OIDC)"
      },
      {
        "letter": "B",
        "text": "Identity-Aware Proxy (IAP) con niveles de acceso contextual definidos en Access Context Manager"
      },
      {
        "letter": "C",
        "text": "Identity Platform (autenticación de los usuarios finales de las aplicaciones con SAML y OIDC)"
      },
      {
        "letter": "D",
        "text": "Cloud Identity federado con el proveedor de identidad existente mediante SAML 2.0 / Single Sign-On (SSO)"
      }
    ],
    "correct": "D",
    "explanation": "Cloud Identity es la solución Identity as a Service (IDaaS) de Google que permite a las empresas gestionar usuarios y dispositivos centralizadamente, federando el inicio de sesión único (SSO con SAML 2.0/OIDC) con proveedores existentes como Active Directory, Azure AD u Okta.",
    "distractors": {
      "B": "IAP aplica autorización contextual delante de una aplicación concreta y consume identidades que ya existen en Google Cloud: no federa el directorio corporativo ni sustituye la creación de las identidades de los empleados.",
      "A": "La federación de cargas de trabajo permite que una aplicación o una canalización externa suplante una cuenta de servicio sin clave: está pensada para identidades de máquina, no para el inicio de sesión de empleados en la consola.",
      "C": "Identity Platform es la solución de identidad para los clientes y usuarios finales de las aplicaciones que la empresa desarrolla (CIAM), no para autenticar a los empleados que acceden a la consola de Google Cloud."
    },
    "officialDocUrl": "https://cloud.google.com/identity/docs",
    "blockId": "BLOCK-1",
    "reservaCiega": true
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
    "title": "Protección Contra Phishing con Autenticación Multifactor y Llaves FIDO2 Titan",
    "scenario": "Para proteger las cuentas de administradores contra ataques de phishing y robo de credenciales, la empresa busca implementar el método de autenticación multifactor (MFA) más seguro. ¿Qué método de autenticación de doble factor ofrece la máxima protección resistente a phishing?",
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
        "text": "Códigos de verificación temporales basados en tiempo (TOTP) generados en una app móvil"
      },
      {
        "letter": "B",
        "text": "Llaves de seguridad físicas compatibles con el estándar FIDO2 / WebAuthn (Titan Security Keys)"
      },
      {
        "letter": "C",
        "text": "Notificaciones push de confirmación enviadas a dispositivos móviles corporativos registrados"
      },
      {
        "letter": "D",
        "text": "Códigos de un solo uso enviados mediante mensajes de texto SMS a teléfonos móviles autorizados"
      }
    ],
    "correct": "B",
    "explanation": "Las llaves de seguridad físicas basadas en FIDO2/WebAuthn (como las Google Titan Security Keys) son el único método de autenticación que proporciona protección total contra ataques de phishing e intermediarios (Man-in-the-Middle), ya que la clave criptográfica está vinculada al dominio legítimo.",
    "distractors": {
      "A": "Las aplicaciones TOTP generan códigos que un atacante mediante un sitio de phishing en tiempo real puede interceptar y reenviar.",
      "C": "Las notificaciones push son vulnerables a ataques de fatiga de MFA (MFA prompt bombing) donde el usuario aprueba por error.",
      "D": "Los SMS no están cifrados y son vulnerables a ataques de intercambio de tarjeta SIM (SIM swapping) e interceptación de red."
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
        "text": "Workload Identity de GKE vinculando la cuenta de servicio de Kubernetes"
      },
      {
        "letter": "B",
        "text": "Claves JSON de Service Account custodiadas y rotadas en Secret Manager"
      },
      {
        "letter": "C",
        "text": "Identity-Aware Proxy (IAP) delante del endpoint del servidor de la API"
      },
      {
        "letter": "D",
        "text": "Workload Identity Federation (Federación de Identidades para Cargas de Trabajo)"
      }
    ],
    "correct": "D",
    "explanation": "Workload Identity Federation permite que aplicaciones que se ejecutan fuera de Google Cloud (en GitHub Actions, AWS, Azure o centros de datos locales) utilicen identidades externas (OIDC/SAML) para suplantar una Service Account y obtener credenciales de acceso de corta duración sin necesidad de crear, descargar ni gestionar claves de servicio JSON de larga vida.",
    "distractors": {
      "C": "IAP aplica control de acceso contextual a usuarios que acceden a aplicaciones web; no federa identidades de máquina ni emite credenciales temporales para una canalización.",
      "B": "Sigue existiendo un fichero de clave JSON de larga vida que hay que custodiar y rotar: es exactamente el artefacto que el equipo de seguridad ha prohibido crear.",
      "A": "Workload Identity autentica a los Pods que ya se ejecutan dentro del clúster de GKE; el ejecutor de GitHub Actions está fuera de Google Cloud y no puede usar ese mecanismo."
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
        "text": "Cloud VPN con túneles IPsec redundantes hacia la red local de la empresa"
      },
      {
        "letter": "B",
        "text": "Cloud Armor con reglas WAF y listas de permitidos por rango de IP de origen"
      },
      {
        "letter": "C",
        "text": "Identity and Access Management (IAM) con roles predefinidos por proyecto"
      },
      {
        "letter": "D",
        "text": "BeyondCorp Enterprise (la implementación de arquitectura Zero Trust de Google)"
      }
    ],
    "correct": "D",
    "explanation": "BeyondCorp Enterprise es la solución Zero Trust de Google Cloud que reemplaza los perímetros de VPN tradicionales por un modelo de seguridad centrado en la identidad y el contexto del dispositivo (Context-Aware Access), permitiendo a los empleados acceder de forma segura a aplicaciones web e infraestructura desde cualquier red.",
    "distractors": {
      "B": "Cloud Armor filtra ataques web y DDoS por IP o firma de petición en el borde; la IP de origen no dice quién es el usuario ni si su disco está cifrado.",
      "C": "IAM autoriza el acceso a recursos de Google Cloud (APIs, buckets, VMs), no la sesión del empleado hacia una aplicación web interna según el contexto del dispositivo.",
      "A": "Sigue siendo un perímetro de red: una vez dentro del túnel la confianza es implícita y no se evalúa la identidad ni la postura del dispositivo en cada solicitud."
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
        "text": "(1) Claves simétricas AES-256 para cifrado; (2) claves asimétricas RSA o de curva elíptica para firma; y (3) claves de validación MAC, que son los tres tipos que Cloud KMS puede alojar dentro de un llavero."
      },
      {
        "letter": "B",
        "text": "(1) Cifrado en reposo sobre el disco; (2) cifrado en tránsito entre los centros de datos de Google; y (3) cifrado en uso mediante Confidential Computing, que son los tres modos en que la plataforma protege los datos."
      },
      {
        "letter": "C",
        "text": "(1) Claves gestionadas por Google (predeterminadas y transparentes); (2) Claves de cifrado gestionadas por el cliente (CMEK a través de Cloud KMS / Cloud HSM); y (3) Claves de cifrado suministradas por el cliente (CSEK)."
      },
      {
        "letter": "D",
        "text": "(1) Claves gestionadas por Google; (2) Cloud External Key Manager (EKM) con la clave alojada en un socio externo; y (3) Cloud HSM, que sustituye por completo a Cloud KMS en la gestión de las claves de la organización."
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud ofrece tres niveles de control de claves: (1) Google-Managed (cifrado por defecto sin gestión), (2) CMEK (Customer-Managed Encryption Keys gestionadas en Cloud KMS o módulos de seguridad física Cloud HSM con FIPS 140-2 Nivel 3), y (3) CSEK (Customer-Supplied Encryption Keys donde el cliente custodia las claves fuera de Google).",
    "distractors": {
      "B": "Describe los tres estados del dato que Google Cloud protege de forma predeterminada, no los modelos de gestión de claves: ninguno de los tres indica si la clave la administra Google, el cliente en Cloud KMS o un sistema externo.",
      "A": "Enumera los propósitos criptográficos de una clave de Cloud KMS, que responden a otra pregunta: no describen quién genera, custodia y controla las claves, que es el eje de los tres niveles de gestión por los que se pregunta.",
      "D": "Cloud EKM y Cloud HSM son niveles de protección de una clave dentro del modelo CMEK y Cloud HSM no reemplaza a Cloud KMS, sino que es uno de sus niveles: la enumeración omite además el modelo CSEK de claves suministradas por el cliente."
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
        "text": "Cloud KMS con nivel de protección de software"
      },
      {
        "letter": "B",
        "text": "Cloud External Key Manager (Cloud EKM)"
      },
      {
        "letter": "C",
        "text": "Secret Manager con rotación automática"
      },
      {
        "letter": "D",
        "text": "Cloud HSM (integrado dentro de Cloud KMS)"
      }
    ],
    "correct": "D",
    "explanation": "Cloud HSM es un servicio de módulos de seguridad de hardware en la nube totalmente administrado que permite alojar claves de cifrado y realizar operaciones criptográficas dentro de clústeres HSM certificados FIPS 140-2 Nivel 3 sin la sobrecarga de mantener hardware físico local.",
    "distractors": {
      "B": "Con EKM la clave vive en un gestor externo a Google, que no aporta la certificación FIPS 140-2 Nivel 3 administrada por Google Cloud.",
      "A": "Las claves de software de Cloud KMS no residen en un módulo de hardware certificado FIPS 140-2 Nivel 3.",
      "C": "Secret Manager custodia secretos de aplicación (contraseñas, tokens), no ejecuta operaciones criptográficas dentro de un HSM."
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
    "scenario": "El Director de Seguridad de la Información (CISO) necesita un panel centralizado a nivel de toda la organización que: (1) Descubra automáticamente activos de infraestructura y malas configuraciones de seguridad (como buckets públicos accidentales o puertos abiertos al mundo), (2) Detecte amenazas en tiempo real (como minería de criptomonedas o credenciales filtradas), y (3) Mida el cumplimiento con estándares como CIS, PCI-DSS e ISO 27001. ¿Qué dos elementos necesita el CISO para obtener toda esta visibilidad, incluidos los informes de cumplimiento normativo? (Elige 2.)",
    "keywords": [
      "Security Command Center",
      "SCC",
      "Detección de amenazas",
      "Gestión de postura de seguridad",
      "Cumplimiento normativo",
      "CSGF"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Security Command Center (SCC)"
      },
      {
        "letter": "B",
        "text": "Cloud Logging con alertas"
      },
      {
        "letter": "C",
        "text": "Cloud Asset Inventory (CAI)"
      },
      {
        "letter": "D",
        "text": "Google Security Operations"
      },
      {
        "letter": "E",
        "text": "Nivel Premium de SCC"
      }
    ],
    "correct": [
      "A",
      "E"
    ],
    "explanation": "Security Command Center centraliza el descubrimiento de activos, malas configuraciones y amenazas activas en toda la organización, pero los informes de cumplimiento normativo (CIS, PCI-DSS, ISO 27001) y la detección de amenazas en tiempo real solo están disponibles en el nivel Premium; el nivel Standard no los incluye, por lo que el CISO necesita ambos: la plataforma y el nivel Premium.",
    "distractors": {
      "D": "Google Security Operations es una plataforma SIEM/SOAR para investigación de amenazas con telemetría propia; no gestiona la postura de configuración de los recursos de Google Cloud ni sus informes de cumplimiento nativos.",
      "C": "Cloud Asset Inventory inventaría activos y sus cambios en el tiempo, pero no detecta vulnerabilidades, amenazas activas ni genera informes de cumplimiento.",
      "B": "Cloud Logging con alertas registra y notifica sobre eventos puntuales, pero no evalúa configuraciones de forma estructurada ni mide cumplimiento normativo."
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
        "text": "SCC Premium sustituye la necesidad de configurar reglas de firewall, políticas de IAM y cifrado en cada proyecto, porque aplica automáticamente los controles correctivos sobre cualquier recurso mal configurado que detecte en la organización."
      },
      {
        "letter": "B",
        "text": "SCC Premium proporciona detección avanzada de amenazas en tiempo real a nivel de eventos de red, contenedores en GKE y memoria de VMs, además de evaluación continua y automatizada de cumplimiento con estándares regulatorios internacionales."
      },
      {
        "letter": "C",
        "text": "SCC Premium es el único nivel que permite exportar los hallazgos hacia un sistema SIEM externo y conservar el inventario de activos, ya que el nivel Standard no registra los recursos desplegados ni sus cambios de configuración."
      },
      {
        "letter": "D",
        "text": "SCC Premium extiende a la empresa las certificaciones PCI-DSS y NIST de la infraestructura de Google, de modo que hereda automáticamente el cumplimiento normativo sin auditar la configuración de sus propias cargas de trabajo."
      }
    ],
    "correct": "B",
    "explanation": "Security Command Center Premium (y Enterprise) desbloquea motores de detección de amenazas de nivel empresarial impulsados por inteligencia de amenazas de Mandiant y Google (detección de malware en memoria de VMs, ataques a contenedores, anomalías en logs) y cuadros de mando de cumplimiento normativo continuo.",
    "distractors": {
      "C": "Contradice el propio enunciado: el nivel Standard ya incluye el inventario de activos, y la exportación de hallazgos no es exclusiva del nivel Premium.",
      "A": "Security Command Center detecta, prioriza y recomienda, pero no corrige por sí mismo la configuración ni sustituye a los controles preventivos que el cliente debe definir.",
      "D": "El cumplimiento no se hereda: Premium entrega paneles e informes que miden la conformidad de la configuración del cliente, que sigue siendo responsabilidad suya."
    },
    "officialDocUrl": "https://cloud.google.com/security-command-center/docs/concepts-tiers",
    "blockId": "BLOCK-1",
    "reservaCiega": true
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
        "text": "Cloud Monitoring (anteriormente Stackdriver Monitoring)"
      },
      {
        "letter": "B",
        "text": "Google Cloud Managed Service para Prometheus (GMP)"
      },
      {
        "letter": "C",
        "text": "Cloud Trace, Cloud Profiler y Error Reporting juntos"
      },
      {
        "letter": "D",
        "text": "Google Cloud Operations Suite (anteriormente Stackdriver)"
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud Operations Suite (anteriormente conocido como Stackdriver) es la solución integrada de observabilidad de Google Cloud que proporciona monitoreo de métricas (Cloud Monitoring), administración de registros (Cloud Logging), rastreo distribuido de latencia (Cloud Trace), perfilado de código (Cloud Profiler) y reporte de errores (Error Reporting).",
    "distractors": {
      "C": "Son tres componentes reales de la suite, pero solo los de nivel de aplicación: falta Cloud Monitoring y Cloud Logging, y esa enumeración no es el nombre del conjunto integrado de observabilidad por el que se pregunta.",
      "A": "Cloud Monitoring es solo el componente de métricas, paneles y alertas. No abarca la recopilación centralizada de registros, el rastreo de microservicios ni el perfilado de CPU y memoria que pide el escenario.",
      "B": "GMP es el servicio administrado para ingerir y consultar métricas en formato Prometheus dentro de Cloud Monitoring: cubre únicamente métricas, sin gestión de registros, trazas ni perfiles de rendimiento."
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
        "text": "Pilar Lead (Liderar)"
      },
      {
        "letter": "B",
        "text": "Pilar Scale (Escalar)"
      },
      {
        "letter": "C",
        "text": "Pilar Secure (Asegurar)"
      },
      {
        "letter": "D",
        "text": "Pilar Learn (Aprender)"
      }
    ],
    "correct": "C",
    "explanation": "El pilar 'Secure' del CAF establece las directrices de seguridad, gobierno de identidades, gestión de accesos, protección de datos y cumplimiento normativo para proteger los activos empresariales en la nube.",
    "distractors": {
      "A": "Lead evalúa patrocinio directivo y cambio cultural.",
      "B": "Scale analiza automatización y arquitectura técnica.",
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
        "text": "Etapa Táctica (Tactical) del framework CAF"
      },
      {
        "letter": "B",
        "text": "Etapa Estratégica (Strategic) de adopción"
      },
      {
        "letter": "C",
        "text": "Etapa Transformacional (Transformational)"
      },
      {
        "letter": "D",
        "text": "Tema de Escala (Scale) del CAF de Google"
      }
    ],
    "correct": "C",
    "explanation": "La etapa Transformacional representa el nivel más alto de madurez del Cloud Adoption Framework, donde la nube no solo optimiza costos u operaciones, sino que redefine activamente el modelo de negocio, impulsa la innovación con IA y crea ventajas competitivas sostenibles.",
    "distractors": {
      "A": "En la etapa Táctica hay cargas sueltas migradas por retorno a corto plazo, sin cambio de procesos ni de modelo de negocio como el que describe el escenario.",
      "B": "La etapa Estratégica alinea la nube con los objetivos de negocio y desarrolla capacidades, pero todavía no genera nuevas fuentes de ingreso impulsadas por IA.",
      "D": "Scale es uno de los cuatro temas del CAF (Learn, Lead, Scale, Secure) que miden capacidad organizativa, no una de las tres etapas de madurez de adopción."
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
        "text": "Realizar una revisión del incidente que identifique al responsable del cambio y registre su nombre en el informe final para reforzar la rendición de cuentas individual dentro del equipo."
      },
      {
        "letter": "B",
        "text": "Redactar un informe que documente la cronología técnica del fallo y la corrección aplicada, sin analizar por qué el proceso permitió que la configuración errónea llegara a producción."
      },
      {
        "letter": "C",
        "text": "Trasladar la ejecución de los despliegues de emergencia a un equipo de operaciones separado del de desarrollo, de modo que quien escribe el código nunca lo publique en producción."
      },
      {
        "letter": "D",
        "text": "Realizar una autopsia sin culpa (Blameless Post-mortem) que examine las fallas sistémicas del proceso y las herramientas, asumiendo que los empleados actuaron de buena fe."
      }
    ],
    "correct": "D",
    "explanation": "Una autopsia sin culpa (Blameless Post-mortem) se centra en entender cómo el sistema permitió que ocurriera el error humano y cómo reforzar los procesos, salvaguardas y automatizaciones para evitar su recurrencia, construyendo una cultura de aprendizaje y alta confianza.",
    "distractors": {
      "B": "Tiene la forma de una autopsia pero no su función: sin examinar las causas sistémicas ni las salvaguardas ausentes, no genera acciones que impidan la recurrencia del fallo.",
      "C": "Reintroduce el silo entre desarrollo y operaciones que SRE busca eliminar, y no aporta ningún mecanismo de aprendizaje sobre por qué el sistema permitió el error.",
      "A": "Nombrar al responsable es precisamente lo que la autopsia sin culpa elimina: desincentiva reportar errores y desplaza el análisis desde el sistema hacia la persona."
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
        "text": "Reducir el costo de licencias manteniendo cada fuente de datos en su plataforma de origen actual y sincronizando extractos mensuales."
      },
      {
        "letter": "B",
        "text": "Migrar cada sistema a su propia instancia independiente de Cloud SQL para modernizar la infraestructura sin alterar los procesos actuales."
      },
      {
        "letter": "C",
        "text": "Eliminar los silos de datos para democratizar el acceso a la información y habilitar analítica omnicanal en tiempo real para la toma de decisiones."
      },
      {
        "letter": "D",
        "text": "Garantizar que cada departamento conserve la propiedad exclusiva de sus datos aplicando controles de acceso separados por sistema."
      }
    ],
    "correct": "C",
    "explanation": "Consolidar datos dispersos en una plataforma unificada en Google Cloud rompe los silos organizacionales, democratiza la información y permite generar analítica predictiva y reportes en tiempo real accesibles para todos los tomadores de decisiones.",
    "distractors": {
      "A": "El ahorro en licencias es un beneficio real de la migración, pero mantener las fuentes separadas conserva los silos y no produce la visión única del cliente.",
      "D": "La propiedad del dato forma parte de la gobernanza, pero el acceso exclusivo por sistema es justo lo que impide la analítica omnicanal que se busca.",
      "B": "Es un lift-and-shift que reproduce los mismos silos en la nube: el problema no es dónde se alojan los sistemas, sino que no comparten un modelo de datos común."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/data-warehouse",
    "blockId": "BLOCK-2",
    "reservaCiega": true
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
        "text": "Aprovisionamiento manual mediante tickets de soporte"
      },
      {
        "letter": "B",
        "text": "Tolerancia a fallos estática"
      },
      {
        "letter": "C",
        "text": "Sobredimensionamiento de infraestructura (Overprovisioning)"
      },
      {
        "letter": "D",
        "text": "Elasticidad (Elasticity)"
      }
    ],
    "correct": "D",
    "explanation": "La elasticidad es la capacidad del sistema de ajustar dinámicamente la capacidad de cómputo y almacenamiento hacia arriba y hacia abajo de forma automática según la demanda cambiante, garantizando rendimiento y evitando pagar por capacidad ociosa.",
    "distractors": {
      "B": "La tolerancia a fallos se refiere a la capacidad de continuar operando ante fallos de componentes, no a ajustar recursos según la demanda.",
      "C": "El sobredimensionamiento es una práctica costosa del centro de datos tradicional que la nube busca eliminar.",
      "A": "El aprovisionamiento manual mediante tickets es lento e incompatible con la dinámica de picos de tráfico en tiempo real."
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
        "text": "Cloud Bigtable"
      },
      {
        "letter": "B",
        "text": "Cloud Spanner"
      },
      {
        "letter": "C",
        "text": "Cloud Firestore"
      },
      {
        "letter": "D",
        "text": "Cloud SQL (MySQL)"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Firestore es la base de datos NoSQL de documentos serverless de Google Cloud y Firebase, diseñada específicamente para aplicaciones web y móviles con soporte nativo de listeners en tiempo real y persistencia local sin conexión.",
    "distractors": {
      "D": "Cloud SQL es una base relacional administrada con esquema fijo; no sincroniza cambios en tiempo real con la app ni persiste los datos localmente sin señal.",
      "A": "Bigtable es NoSQL de columna ancha para series temporales y cargas de altísimo volumen; no tiene SDK móvil, listeners en tiempo real ni modo sin conexión.",
      "B": "Spanner es relacional con SQL y consistencia global, pensado para transacciones a escala; no ofrece documentos JSON flexibles ni sincronización sin conexión."
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
        "text": "Cloud SQL para MySQL"
      },
      {
        "letter": "B",
        "text": "Google Sheets"
      },
      {
        "letter": "C",
        "text": "Cloud Bigtable"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Coldline"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Bigtable es la base de datos NoSQL de columnas anchas de nivel de petabytes de Google Cloud, optimizada para cargas analíticas masivas, ingesta de telemetría IoT y streaming con latencias ultra bajas y escalabilidad horizontal lineal.",
    "distractors": {
      "B": "Google Sheets tiene límites estrictos de filas y no es una base de datos para ingesta masiva de IoT.",
      "D": "Cloud Storage Coldline es para archivos fríos de acceso infrecuente, no para bases de datos de alta frecuencia de escritura.",
      "A": "Cloud SQL no está diseñado para soportar cientos de miles de escrituras por segundo continuas en escala de petabytes."
    },
    "officialDocUrl": "https://cloud.google.com/bigtable/docs",
    "blockId": "BLOCK-2",
    "reservaCiega": true
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
        "text": "Cloud Memorystore for Redis"
      },
      {
        "letter": "B",
        "text": "Cloud Memorystore for Memcached"
      },
      {
        "letter": "C",
        "text": "Cloud Bigtable con filas anchas"
      },
      {
        "letter": "D",
        "text": "Cloud Spanner multirregional"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Memorystore ofrece un servicio de almacenamiento en memoria totalmente administrado para Redis y Memcached, proporcionando latencias de respuesta de sub-milisegundos para sesiones de usuario, tablas de líderes y cachés de alto rendimiento.",
    "distractors": {
      "C": "Bigtable almacena en disco SSD con latencias de milisegundos de un dígito: es NoSQL de alto rendimiento, pero no una caché en memoria compatible con Redis.",
      "B": "Memcached es una caché de pares clave-valor sin estructuras de datos: carece de los conjuntos ordenados de Redis con los que se construye una tabla de clasificación.",
      "D": "Spanner es una base relacional distribuida con consistencia global: resuelve la persistencia transaccional, no la caché en memoria de sub-milisegundo que pide el escenario."
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
        "text": "(1) Cloud Storage, (2) Cloud SQL, (3) BigQuery"
      },
      {
        "letter": "B",
        "text": "(1) Memorystore, (2) Memorystore, (3) Memorystore"
      },
      {
        "letter": "C",
        "text": "(1) Cloud SQL, (2) BigQuery, (3) Cloud Storage"
      },
      {
        "letter": "D",
        "text": "(1) BigQuery, (2) Cloud Storage, (3) Cloud SQL"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Storage almacena objetos y archivos no estructurados (multimedia); Cloud SQL gestiona bases de datos relacionales transaccionales OLTP (catálogo); y BigQuery es el almacén de datos empresarial OLAP para analítica masiva con SQL.",
    "distractors": {
      "B": "Memorystore es solo caché volátil en RAM, no almacenamiento persistente principal para estas cargas.",
      "D": "BigQuery no es para guardar videos individuales; Cloud Storage no es para catálogos relacionales transaccionales.",
      "C": "Cloud SQL no está diseñado para archivos de video gigantescos; BigQuery no es un motor transaccional de e-commerce OLTP."
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
    "scenario": "Una compañía maneja tres tipos de información: (1) Tablas SQL con esquemas rígidos de clientes, (2) Documentos de registro en formato JSON con esquemas dinámicos, y (3) Archivos de audio y video de llamadas de soporte. El equipo de datos necesita clasificar correctamente estos tres tipos y elegir el servicio de Google Cloud más adecuado para almacenar a bajo costo los archivos de audio y video no estructurados. ¿Qué dos afirmaciones debe seleccionar el equipo? (Elige 2.)",
    "keywords": [
      "Datos estructurados",
      "Datos semi-estructurados",
      "Datos no estructurados",
      "Tipos de datos"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "(1) Semi-estructurados, (2) No estructurados, (3) Estructurados"
      },
      {
        "letter": "B",
        "text": "(1) No estructurados, (2) Estructurados, (3) Semi-estructurados"
      },
      {
        "letter": "C",
        "text": "Todos son considerados datos idénticos sin ninguna distinción en la nube"
      },
      {
        "letter": "D",
        "text": "(1) Estructurados, (2) Semi-estructurados, (3) No estructurados"
      },
      {
        "letter": "E",
        "text": "Cloud Storage almacena a bajo costo los archivos de audio y video no estructurados."
      }
    ],
    "correct": [
      "D",
      "E"
    ],
    "explanation": "La clasificación correcta es (1) Estructurados, (2) Semi-estructurados, (3) No estructurados, según el rigor de su esquema. Dado que los archivos de audio y video son no estructurados y de gran volumen, Cloud Storage es el servicio adecuado para almacenarlos a bajo costo; ambas afirmaciones son necesarias para resolver la tarea completa de clasificar y decidir dónde almacenar.",
    "distractors": {
      "A": "Invierte el orden: coloca las tablas SQL como semi-estructuradas y los archivos de audio/video como estructurados, cuando es justo al revés.",
      "C": "Ignora las diferencias reales de esquema y formato entre tablas relacionales, documentos JSON y archivos binarios, que sí determinan cómo se almacenan y consultan.",
      "B": "Invierte el orden: coloca las tablas SQL como no estructuradas y el JSON dinámico como estructurado, cuando es justo al revés."
    },
    "officialDocUrl": "https://cloud.google.com/learn/what-is-unstructured-data",
    "blockId": "BLOCK-2",
    "reservaCiega": true
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
        "text": "(1) Procesamiento por lotes (Batch), (2) Procesamiento en tiempo real (Streaming)"
      },
      {
        "letter": "B",
        "text": "(1) Procesamiento en tiempo real (Streaming), (2) Procesamiento por lotes (Batch)"
      },
      {
        "letter": "C",
        "text": "Ambos deben procesarse una vez al año mediante un script manual"
      },
      {
        "letter": "D",
        "text": "La detección de fraude nunca debe procesarse para evitar alertar al cliente"
      }
    ],
    "correct": "A",
    "explanation": "El procesamiento por lotes (Batch) procesa grandes volúmenes de datos acumulados a intervalos programados (como la nómina), mientras que el procesamiento en streaming procesa eventos individuales de forma continua e inmediata conforme ocurren (detección de fraude en milisegundos).",
    "distractors": {
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
        "text": "BigQuery actúa como el Data Lake porque admite la ingesta de archivos sin transformar, mientras que Cloud SQL cumple el papel de Data Warehouse empresarial al modelar los datos limpios en tablas relacionales para los informes de negocio."
      },
      {
        "letter": "B",
        "text": "Pub/Sub cumple la función de Data Lake porque conserva de forma duradera todos los mensajes crudos que llegan, y Dataflow actúa como Data Warehouse al transformarlos y dejarlos disponibles para las consultas analíticas del negocio."
      },
      {
        "letter": "C",
        "text": "Cloud Storage actúa típicamente como el Data Lake (almacenando datos crudos en cualquier formato), mientras que BigQuery funciona como el Data Warehouse empresarial (almacenando datos estructurados y modelados para analítica SQL de alto rendimiento)."
      },
      {
        "letter": "D",
        "text": "Cloud Storage y BigQuery son la misma capa de almacenamiento, y la distinción real la establece Dataplex, que designa mediante etiquetas de gobernanza qué buckets se consideran el Data Lake y qué conjuntos de datos el Data Warehouse."
      }
    ],
    "correct": "C",
    "explanation": "Un Data Lake (Cloud Storage) almacena volúmenes masivos de datos en su formato nativo crudo (estructurado, no estructurado o semi-estructurado). Un Data Warehouse (BigQuery) organiza y optimiza datos limpios y transformados para consultas analíticas estructuradas de negocio.",
    "distractors": {
      "D": "Dataplex organiza y gobierna activos repartidos entre ambos servicios, pero la diferencia entre lago y almacén viene de la naturaleza del servicio (objetos crudos frente a motor analítico columnar), no de una etiqueta de catálogo.",
      "A": "Invierte los papeles y asigna el de almacén analítico a una base de datos transaccional: Cloud SQL es OLTP y no está diseñada para consultas analíticas sobre grandes volúmenes, mientras que BigQuery es precisamente el Data Warehouse.",
      "B": "Ninguno de los dos es una capa de persistencia: Pub/Sub es un bus de mensajería con retención limitada en días y Dataflow es un motor de procesamiento que no almacena los datos, solo los transforma y los escribe en otro destino."
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
        "text": "Porque BigQuery desacopla totalmente el almacenamiento del cómputo: la empresa solo paga una tarifa muy baja por almacenar los datos en reposo y solo paga por los recursos de cómputo (slots/bytes escaneados) durante los segundos que dura la consulta."
      },
      {
        "letter": "B",
        "text": "Porque BigQuery aplica automáticamente el precio de almacenamiento a largo plazo a las tablas que no se modifican durante 90 días, y ese descuento del 50 por ciento sobre el almacenamiento es lo que abarata la consulta mensual de 50 terabytes."
      },
      {
        "letter": "C",
        "text": "Porque BigQuery guarda en su caché de resultados las consultas durante 24 horas sin coste alguno, de modo que la consulta masiva de 50 terabytes solo se factura la primera vez que el científico de datos la ejecuta cada mes."
      },
      {
        "letter": "D",
        "text": "Porque BigQuery mantiene un conjunto de slots reservados asignados de forma permanente al proyecto, de manera que la empresa paga una tarifa mensual plana y la consulta masiva no genera ningún cargo adicional de cómputo."
      }
    ],
    "correct": "A",
    "explanation": "El desacoplamiento de almacenamiento (Colossus) y cómputo (Dremel) en BigQuery permite escalar cada componente de forma independiente. Esto elimina la necesidad de aprovisionar y pagar por servidores de cómputo ociosos cuando no se están ejecutando consultas analíticas.",
    "distractors": {
      "B": "El descuento de almacenamiento a largo plazo existe, pero solo afecta a los datos en reposo: no explica el coste del cómputo, que es el componente dominante de la consulta mensual.",
      "D": "Describe el modelo de capacidad reservada, que factura los slots durante todo el mes aunque estén ociosos: aquí lo económico es no pagar cómputo entre consultas.",
      "C": "La caché de resultados solo evita el cobro de una consulta idéntica repetida en 24 horas; una ejecución única al mes se factura íntegra cada vez."
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
        "text": "Crear la tabla agrupada (clustering) por la columna `call_date`, para que BigQuery ordene físicamente los bloques por fecha y descarte los que quedan fuera del rango consultado."
      },
      {
        "letter": "B",
        "text": "Crear una vista materializada que precalcule los registros de llamadas agregados por día, de modo que las consultas lean ese resumen en lugar de la tabla de detalle."
      },
      {
        "letter": "C",
        "text": "Crear la tabla particionada por fecha (`call_date`), lo que permite a BigQuery podar particiones irrelevantes y escanear únicamente los datos del rango de fechas consultado."
      },
      {
        "letter": "D",
        "text": "Contratar una reserva de slots de BigQuery para que las consultas sobre los 10 años de registros dejen de facturarse por bytes escaneados y pasen a un coste mensual fijo."
      }
    ],
    "correct": "C",
    "explanation": "El particionamiento de tablas en BigQuery divide una tabla grande en segmentos más pequeños basados en una columna (como fecha o timestamp). Al consultar con filtros de fecha, BigQuery solo escanea las particiones requeridas, reduciendo dramáticamente el tiempo de respuesta y los costos en el modelo bajo demanda.",
    "distractors": {
      "B": "Una vista materializada sirve para agregaciones fijas; aquí se consultan los registros de detalle filtrados por fecha, no un resumen diario precalculado.",
      "D": "Cambia el modelo de facturación, pero no evita escanear la tabla completa de 10 años: el rendimiento de la consulta sigue igual de degradado.",
      "A": "El clustering ordena los datos y reduce el escaneo de forma aproximada, pero no ofrece la poda determinista por partición ni permite exigir un filtro obligatorio de fecha."
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
        "text": "Habilitar BigQuery BI Engine para almacenar en memoria de forma inteligente las tablas analíticas más consultadas y acelerar las respuestas a sub-segundos."
      },
      {
        "letter": "B",
        "text": "Crear vistas materializadas sobre las tablas de origen para que Looker Studio consulte agregados precalculados en vez de recorrer la tabla de detalle."
      },
      {
        "letter": "C",
        "text": "Contratar una reserva de slots de BigQuery Enterprise con autoescalado para dar más capacidad de cómputo a las consultas interactivas del panel ejecutivo."
      },
      {
        "letter": "D",
        "text": "Activar la extracción de datos (Extract) de Looker Studio para guardar una instantánea del conjunto en la caché del informe y filtrarla sin volver a BigQuery."
      }
    ],
    "correct": "A",
    "explanation": "BigQuery BI Engine es un servicio de análisis en memoria de alta velocidad integrado de forma transparente en BigQuery que analiza e interactúa de manera fluida con datos a nivel de sub-segundos desde herramientas como Looker, Looker Studio o Tableau.",
    "distractors": {
      "B": "Acelera agregaciones concretas, pero obliga a rediseñar el modelo de datos y el escenario exige explícitamente no cambiar la estructura de las tablas.",
      "D": "La extracción congela una instantánea limitada en tamaño y deja de reflejar la tabla en vivo, por lo que el panel ejecutivo pierde actualidad.",
      "C": "Más slots reducen la cola y el tiempo de ejecución, pero el escaneo del almacenamiento persiste: la respuesta en sub-segundos requiere la capa en memoria."
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
        "text": "Envío masivo de memorias USB por correo tradicional"
      },
      {
        "letter": "B",
        "text": "Servidores FTP locales compartidos con contraseñas públicas"
      },
      {
        "letter": "C",
        "text": "BigQuery Analytics Hub"
      },
      {
        "letter": "D",
        "text": "Cloud Filestore con acceso root universal a Internet"
      }
    ],
    "correct": "C",
    "explanation": "BigQuery Analytics Hub permite crear intercambios de datos (data exchanges) públicos o privados para compartir conjuntos de datos analíticos entre organizaciones de forma segura, gobernada y en tiempo real, permitiendo a los suscriptores consultar los datos directamente sin mover ni duplicar almacenamiento.",
    "distractors": {
      "A": "El envío físico es lento, inseguro y carece de tiempo real.",
      "D": "Exponer sistemas de archivos compartidos a Internet público es una falla crítica de seguridad.",
      "B": "Los servidores FTP tradicionales son inseguros, costosos de mantener y requieren crear copias redundantes obsoletas de datos."
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
        "text": "BigQuery Omni"
      },
      {
        "letter": "B",
        "text": "Google Compute Engine Spot VMs"
      },
      {
        "letter": "C",
        "text": "Google Cloud DNS"
      },
      {
        "letter": "D",
        "text": "Cloud Run"
      }
    ],
    "correct": "A",
    "explanation": "BigQuery Omni es una solución analítica multinube flexible y totalmente administrada que lleva el motor de cómputo de BigQuery directamente a los centros de datos de AWS y Azure, permitiendo consultar datos donde residen sin incurrir en costos de transferencia de datos hacia afuera (egress) ni canalizaciones ETL complejas.",
    "distractors": {
      "D": "Cloud Run es un entorno para ejecutar contenedores web, no un motor SQL multinube federado.",
      "C": "Cloud DNS gestiona dominios web en la red.",
      "B": "Spot VMs son instancias de cómputo efímeras con descuento para Compute Engine."
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
        "text": "Looker Studio incorpora la capa semántica gobernada (LookML) donde el equipo de datos define una única fórmula de Margen Bruto valida para toda la empresa, mientras que Looker se utiliza como visor ligero y gratuito para que cada departamento arme sus propios tableros ágiles."
      },
      {
        "letter": "B",
        "text": "Looker proporciona una plataforma de BI empresarial con una capa de modelado de datos gobernada (LookML) que define una fuente única de verdad para las métricas de negocio, mientras que Looker Studio ofrece una herramienta ágil y gratuita de visualización de datos y tableros de autoservicio."
      },
      {
        "letter": "C",
        "text": "Looker sustituye al almacén de datos ejecutando las consultas sobre una copia de los datos importada y guardada dentro de la propia herramienta, mientras que Looker Studio se conecta en vivo a BigQuery para consultar siempre la última versión de las tablas de negocio."
      },
      {
        "letter": "D",
        "text": "Looker Studio permite definir en su modelo los campos calculados compartidos que toda la organización reutiliza y Looker se limita a exportar esos informes a hojas de cálculo, de forma que la gobernanza de métricas se resuelve replicando los campos en cada informe."
      }
    ],
    "correct": "B",
    "explanation": "Looker es una plataforma de inteligencia de negocios de nivel empresarial con un modelo semántico centralizado (LookML) que asegura que todos en la empresa utilicen definiciones de métricas coherentes y auditadas. Looker Studio (anteriormente Data Studio) permite visualizaciones intuitivas y de rápida creación para reportes y tableros ágiles.",
    "distractors": {
      "D": "Los campos calculados de Looker Studio viven en cada informe y se duplican al copiarlo: son justamente la fragmentación de definiciones que el CDO quiere eliminar.",
      "C": "Looker no almacena los datos: traduce LookML a SQL y consulta en el almacén (in-database), de modo que la fuente única de verdad sigue siendo BigQuery y no una copia interna.",
      "A": "Intercambia los dos productos: LookML y el modelo semántico gobernado pertenecen a Looker, y Looker Studio es la herramienta ágil y gratuita de visualización."
    },
    "officialDocUrl": "https://cloud.google.com/looker",
    "blockId": "BLOCK-2",
    "reservaCiega": true
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
        "text": "Compute Engine con scripts en Perl"
      },
      {
        "letter": "B",
        "text": "Cloud Dataflow"
      },
      {
        "letter": "C",
        "text": "Cloud Billing API"
      },
      {
        "letter": "D",
        "text": "Cloud Domains"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Dataflow es un servicio completamente administrado y sin servidor para la ejecución de canalizaciones de procesamiento de datos por lotes y streaming basadas en el marco de código abierto Apache Beam, con autoescalado dinámico de trabajadores y optimización automática.",
    "distractors": {
      "D": "Cloud Domains gestiona el registro de dominios web.",
      "C": "Cloud Billing API gestiona cuentas de facturación y costos del proyecto.",
      "A": "Administrar scripts manuales en VMs individuales carece de tolerancia a fallos distribuida, escalado elástico y gestión de ventanas de streaming."
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
        "text": "Cloud Dataproc"
      },
      {
        "letter": "B",
        "text": "Firebase Crashlytics"
      },
      {
        "letter": "C",
        "text": "Cloud Speech-to-Text"
      },
      {
        "letter": "D",
        "text": "Google Play Console"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Dataproc es el servicio administrado de Apache Spark y Apache Hadoop de Google Cloud. Permite crear clústeres elásticos en segundos, ejecutar trabajos existentes de código abierto sin reescribir código y apagar los clústeres automáticamente cuando terminan para ahorrar costos.",
    "distractors": {
      "B": "Crashlytics analiza bloqueos y errores en aplicaciones móviles de usuarios finales.",
      "D": "Google Play Console es la tienda de distribución de apps móviles Android.",
      "C": "Cloud Speech-to-Text transcribe audio a texto mediante inteligencia artificial."
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
        "text": "Cloud Source Repositories (el repositorio Git privado y administrado de Google Cloud con control de acceso mediante IAM)"
      },
      {
        "letter": "B",
        "text": "Cloud Storage con buckets privados y versionado de objetos habilitado para almacenar las imágenes y los paquetes"
      },
      {
        "letter": "C",
        "text": "Artifact Registry (la evolución moderna de Container Registry con soporte multi-lenguaje y escaneo de vulnerabilidades)"
      },
      {
        "letter": "D",
        "text": "Binary Authorization (el control de admisión que exige atestaciones firmadas antes de ejecutar una imagen en GKE o Cloud Run)"
      }
    ],
    "correct": "C",
    "explanation": "Artifact Registry es el gestor universal de artefactos y paquetes de Google Cloud para imágenes de contenedores OCI/Docker y paquetes de lenguajes (Java Maven, Node.js npm, Python pip), integrado con escaneo automático de vulnerabilidades y controles de acceso IAM.",
    "distractors": {
      "B": "Un bucket guarda archivos pero no habla los protocolos de registro Docker, npm o Maven ni analiza vulnerabilidades de las imágenes almacenadas.",
      "A": "Versiona código fuente, no imágenes de contenedor ni paquetes compilados, y no ejecuta análisis de vulnerabilidades CVE sobre artefactos.",
      "D": "Es la puerta de control en el despliegue: verifica firmas antes de ejecutar, pero no almacena ni versiona las imágenes y los paquetes de la empresa."
    },
    "officialDocUrl": "https://cloud.google.com/artifact-registry/docs",
    "blockId": "BLOCK-2",
    "reservaCiega": true
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
        "text": "Cloud Deploy"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive"
      },
      {
        "letter": "C",
        "text": "Copiar archivos por SSH manualmente a cada servidor en producción"
      },
      {
        "letter": "D",
        "text": "Desinstalar Kubernetes para no tener que desplegar"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Deploy es un servicio de entrega continua (CD) administrado, sin servidor y con opiniones de mejores prácticas que simplifica y asegura la progresión de versiones a través de múltiples entornos de destino (como clústeres de GKE y servicios de Cloud Run), incluyendo aprobaciones y reversiones (rollbacks) con un solo clic.",
    "distractors": {
      "B": "Cloud Storage Archive es para retención fría de largo plazo.",
      "D": "Desinstalar la plataforma de cómputo paraliza el negocio.",
      "C": "El copiado manual por SSH es lento, riesgoso, carece de auditoría y provoca errores humanos en producción."
    },
    "officialDocUrl": "https://cloud.google.com/deploy/docs",
    "blockId": "BLOCK-2",
    "reservaCiega": true
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
        "text": "Cloud Deploy con canalizaciones de entrega hacia varios clústeres"
      },
      {
        "letter": "B",
        "text": "GKE Autopilot en modo regional totalmente gestionado por Google"
      },
      {
        "letter": "C",
        "text": "Google Distributed Cloud / GKE Enterprise (anteriormente Anthos)"
      },
      {
        "letter": "D",
        "text": "Cloud Monitoring con paneles unificados de métricas de la flota"
      }
    ],
    "correct": "C",
    "explanation": "Google Distributed Cloud (que integra las capacidades de Anthos y GKE Enterprise) es la plataforma de nube híbrida y multinube de Google que permite crear, operar y gobernar clústeres de Kubernetes de manera unificada en centros de datos locales, en el borde y en múltiples nubes públicas con políticas consistentes declarativas basadas en GitOps.",
    "distractors": {
      "D": "La observabilidad revela que las configuraciones divergen, pero no las aplica ni las corrige: es diagnóstico, no gobierno declarativo de la flota.",
      "A": "Cloud Deploy promueve versiones de aplicación entre entornos; entrega releases, pero no gobierna la configuración ni las políticas de seguridad del clúster.",
      "B": "Autopilot es un modo de operación de GKE que solo existe dentro de Google Cloud, así que no alcanza a los clústeres locales ni a los de otras nubes públicas."
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
        "text": "Cada región recibe su propia red VPC independiente y Google establece automáticamente túneles de Cloud VPN entre ellas, de modo que el tráfico entre regiones viaja cifrado por Internet sin que el equipo tenga que configurar puertas de enlace ni rutas manuales."
      },
      {
        "letter": "B",
        "text": "Permite que los recursos en diferentes regiones del mundo se comuniquen entre sí a través de direcciones IP privadas internas sobre la red troncal privada de Google sin tener que atravesar la Internet pública ni requerir configuraciones complejas de VPN interregionales."
      },
      {
        "letter": "C",
        "text": "Convierte las subredes en recursos globales, de modo que un mismo rango CIDR y las mismas direcciones IP internas quedan disponibles simultáneamente en todas las regiones del mundo y desaparece la necesidad de planificar rangos por región."
      },
      {
        "letter": "D",
        "text": "Enruta automáticamente a cada usuario de Internet hacia el backend más cercano mediante una única dirección IP anycast y almacena en caché el contenido estático en los puntos de presencia de la red perimetral de Google más próximos al usuario."
      }
    ],
    "correct": "B",
    "explanation": "La VPC Global de Google Cloud es un diferenciador clave: permite que una sola VPC abarque todas las regiones del mundo, conectando instancias mediante IPs privadas internas sobre la red privada de fibra óptica de alta velocidad de Google con cifrado automático y mínima latencia.",
    "distractors": {
      "C": "La VPC es global, pero las subredes siguen siendo regionales y cada una tiene su propio rango CIDR asociado a una única región. Sigue siendo necesario planificar los rangos, y una misma IP interna no puede existir en varias regiones.",
      "A": "Ese es precisamente el modelo de VPC regional de otros proveedores, que obliga a interconectar redes. En Google Cloud una sola VPC ya abarca todas las regiones, por lo que no hace falta ningún túnel VPN ni que el tráfico salga a Internet.",
      "D": "Eso describe el Balanceador de Carga global con Cloud CDN sobre el Nivel Premium de red, que optimiza el tráfico externo de los usuarios finales. La ventaja de la VPC global es la comunicación interna entre recursos por IP privada."
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
        "text": "Cloud VPN de alta disponibilidad con túneles IPsec sobre Internet"
      },
      {
        "letter": "B",
        "text": "Emparejamiento directo (Direct Peering) con la red perimetral de Google"
      },
      {
        "letter": "C",
        "text": "Network Connectivity Center con Cloud Router y sesiones BGP"
      },
      {
        "letter": "D",
        "text": "Cloud Interconnect (Dedicated Interconnect o Partner Interconnect)"
      }
    ],
    "correct": "D",
    "explanation": "Cloud Interconnect proporciona conexiones directas de nivel empresarial entre las redes locales y la red de Google Cloud a través de circuitos de fibra dedicados (Dedicated Interconnect: 10/100G) o mediante un proveedor de servicios de telecomunicaciones certificado (Partner Interconnect), garantizando alta disponibilidad (hasta 99.99%) y sin tocar la Internet pública.",
    "distractors": {
      "B": "Direct Peering da acceso a las APIs públicas de Google y a Workspace, no a las direcciones privadas de la VPC del banco, y no lleva asociado ningún SLA de disponibilidad.",
      "A": "El tráfico de los túneles IPsec viaja por la Internet pública, que el escenario descarta, y el ancho de banda por túnel se queda muy lejos de los 10 a 100 Gbps solicitados.",
      "C": "Network Connectivity Center organiza y enruta sobre conexiones ya existentes mediante BGP: no es el circuito físico de fibra que hay que contratar para conseguir ese ancho de banda."
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
        "text": "Publicar todos los servidores internos con IPs públicas abiertas a cualquier usuario sin cifrado"
      },
      {
        "letter": "B",
        "text": "Cloud VPN (específicamente Cloud HA VPN con soporte BGP redundante)"
      },
      {
        "letter": "C",
        "text": "Cloud Spanner Multi-region"
      },
      {
        "letter": "D",
        "text": "Tender un cable de fibra óptica submarino propio a través del océano"
      }
    ],
    "correct": "B",
    "explanation": "Cloud HA VPN conecta de forma segura redes locales con la VPC de Google Cloud a través de túneles IPsec cifrados sobre la Internet pública, ofreciendo una solución rentable con enrutamiento dinámico BGP y una disponibilidad del 99.99% cuando se configuran túneles dobles redundantes.",
    "distractors": {
      "D": "Tender cables submarinos privados requiere inversiones multimillonarias de infraestructura física que solo las grandes empresas de telecomunicaciones realizan.",
      "A": "Exponer recursos internos sin cifrado en Internet público expone la empresa a ataques catastróficos.",
      "C": "Cloud Spanner es una base de datos relacional global, no un servicio de túneles VPN."
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
        "text": "Un balanceador de aplicaciones externo regional en cada una de las tres regiones"
      },
      {
        "letter": "B",
        "text": "Cloud DNS con directivas de enrutamiento por geolocalización hacia tres IP distintas"
      },
      {
        "letter": "C",
        "text": "Cloud CDN habilitado sobre el bucket de contenido estático de la aplicación"
      },
      {
        "letter": "D",
        "text": "Global External Application Load Balancer (Cloud Load Balancing global con IP Anycast)"
      }
    ],
    "correct": "D",
    "explanation": "El Global External Application Load Balancer de Google Cloud utiliza una única dirección IP Anycast global. El tráfico entra a la red perimetral privada de Google en el punto de presencia (PoP) más cercano al usuario y se enruta de forma inteligente a través de la fibra de Google hacia el backend disponible más próximo con menor latencia.",
    "distractors": {
      "B": "El enrutamiento por DNS acerca al usuario, pero publica tres IP distintas y depende del TTL y de la caché del resolutor, sin conmutación Anycast.",
      "A": "Cada balanceador regional expone su propia dirección IP, de modo que no existe la única IP pública estable que pide el requisito.",
      "C": "Cloud CDN almacena contenido estático en el borde; no balancea las peticiones dinámicas entre los backends de Europa, Asia y América."
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
        "text": "Cloud Interconnect Dedicado hacia un proveedor de red australiano"
      },
      {
        "letter": "B",
        "text": "Un bucket de Cloud Storage Multi-Region en la ubicación 'asia'"
      },
      {
        "letter": "C",
        "text": "Cloud CDN (Content Delivery Network integrado con Cloud Load Balancing)"
      },
      {
        "letter": "D",
        "text": "Cloud Load Balancing global sin habilitar el almacenamiento en caché"
      }
    ],
    "correct": "C",
    "explanation": "Cloud CDN aprovecha la red global de puntos de presencia (PoPs) perimetrales de Google para almacenar en caché contenido web estático y dinámico cerca de los usuarios finales, reduciendo drásticamente la latencia, acelerando los tiempos de carga y descargando el tráfico de los servidores de origen.",
    "distractors": {
      "B": "Multi-Region aporta redundancia geográfica y durabilidad, no caché en el borde; además Australia no forma parte de la ubicación 'asia'.",
      "A": "Interconnect da conectividad privada entre la red corporativa y Google; los lectores del diario llegan por Internet pública y no usan ese enlace.",
      "D": "El balanceador global acerca el punto de entrada al usuario, pero sin CDN cada petición viaja hasta el origen y su tráfico no se descarga."
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
        "text": "Cloud Storage Nearline"
      },
      {
        "letter": "B",
        "text": "Google Cloud Armor"
      },
      {
        "letter": "C",
        "text": "Cloud Trace"
      },
      {
        "letter": "D",
        "text": "Desconectar los servidores de Internet permanentemente"
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud Armor es el servicio de seguridad de red perimetral y firewall de aplicaciones web (WAF) que defiende las aplicaciones alojadas en Google Cloud o en entornos híbridos contra ataques DDoS masivos y amenazas web comunes (como las del OWASP Top 10), aprovechando la escala de protección de la infraestructura global de Google.",
    "distractors": {
      "C": "Cloud Trace mide la latencia de llamadas entre servicios de software; no bloquea ataques informáticos.",
      "D": "Desconectar los servidores destruye la presencia digital y el negocio de la tienda en línea.",
      "A": "Cloud Storage Nearline es para copias de seguridad de archivos pasivos."
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
        "text": "Asignar una IP pública estática a cada VM y abrir todos los puertos al mundo"
      },
      {
        "letter": "B",
        "text": "Eliminar las copias de seguridad para no tener que usar Cloud Storage"
      },
      {
        "letter": "C",
        "text": "Tender un cable USB desde cada servidor hasta el centro de datos de Google"
      },
      {
        "letter": "D",
        "text": "Habilitar Acceso Privado a Google (Private Google Access) en la subred de la VPC."
      }
    ],
    "correct": "D",
    "explanation": "Private Google Access permite que las instancias de máquinas virtuales que solo tienen direcciones IP privadas internas se comuniquen de forma segura y directa con las APIs y servicios públicos de Google (como Cloud Storage y BigQuery) sin requerir una IP pública ni una puerta de enlace NAT a Internet.",
    "distractors": {
      "B": "Eliminar copias de seguridad destruye la resiliencia y el plan de recuperación ante desastres de la empresa.",
      "A": "Asignar IPs públicas viola la política de seguridad y expone las bases de datos confidenciales a escaneos y ataques en Internet.",
      "C": "La infraestructura en la nube se conecta a través de protocolos de red virtualizados, no cables USB físicos."
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
        "text": "Cloud VPN con túnel IPsec hacia el router de la red local"
      },
      {
        "letter": "B",
        "text": "Un balanceador de carga externo delante de las instancias"
      },
      {
        "letter": "C",
        "text": "Una regla de firewall de salida (egress) que permita 0.0.0.0/0"
      },
      {
        "letter": "D",
        "text": "Cloud NAT (Network Address Translation totalmente administrado)"
      }
    ],
    "correct": "D",
    "explanation": "Cloud NAT es una solución de traducción de direcciones de red administrada y definida por software que permite a las instancias de VMs sin direcciones IP públicas acceder a Internet para descargar actualizaciones y paquetes salientes, bloqueando de forma absoluta cualquier conexión entrante no solicitada desde el exterior.",
    "distractors": {
      "B": "El balanceador publica tráfico entrante hacia los backends; el requisito es exactamente el contrario, salida sin exponer conexiones entrantes.",
      "C": "La regla autoriza el tráfico, pero una VM sin IP externa sigue sin ruta hacia Internet: hace falta la traducción de direcciones para que salga.",
      "A": "Enruta la salida por el centro de datos propio: añade latencia, costo y dependencia del enlace, en vez de resolver la salida directa administrada."
    },
    "officialDocUrl": "https://cloud.google.com/nat/docs/overview",
    "blockId": "BLOCK-2",
    "reservaCiega": true
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
        "text": "(1) Replatform (Lift-and-Optimize); (2) Refactor / Re-architect (rediseño nativo)"
      },
      {
        "letter": "B",
        "text": "(1) Rehost (Lift-and-Shift); (2) Refactor / Re-architect (Rediseño nativo de nube)"
      },
      {
        "letter": "C",
        "text": "(1) Rehost (Lift-and-Shift); (2) Replatform (traslado a servicios gestionados sin rediseñar)"
      },
      {
        "letter": "D",
        "text": "(1) Repurchase (sustitución por SaaS); (2) Refactor / Re-architect (rediseño nativo)"
      }
    ],
    "correct": "B",
    "explanation": "Rehost (Lift-and-Shift) traslada aplicaciones y máquinas virtuales existentes a la nube con modificaciones mínimas para acelerar la migración. Refactor (Re-architect) rediseña la arquitectura del software para adoptar capacidades nativas de la nube (como microservicios y serverless), maximizando la agilidad y escalabilidad.",
    "distractors": {
      "D": "Repurchase significa abandonar la aplicación propia y comprar un producto SaaS equivalente; aquí las VMs existentes se trasladan tal cual a Compute Engine.",
      "A": "Replatform implica ajustar la aplicación para aprovechar servicios gestionados; el escenario dice que las 200 VMs se mueven tal como están y sin cambiar el código, que es Rehost.",
      "C": "Replatform conserva la arquitectura del monolito y sólo cambia la plataforma que lo ejecuta: convertirlo en microservicios serverless es un rediseño, es decir, Refactor."
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
        "text": "Migrate to Containers (anteriormente Migrate for Anthos, para modernizar cargas hacia GKE)"
      },
      {
        "letter": "B",
        "text": "Google Cloud VMware Engine (nodos dedicados de VMware vSphere administrados por Google)"
      },
      {
        "letter": "C",
        "text": "Storage Transfer Service (transferencia administrada de datos hacia buckets de Cloud Storage)"
      },
      {
        "letter": "D",
        "text": "Migrate to Virtual Machines (anteriormente Migrate for Compute Engine / Velostrata)"
      }
    ],
    "correct": "D",
    "explanation": "Migrate to Virtual Machines es la solución de migración integrada y de alta velocidad de Google Cloud que automatiza la replicación continua, pruebas y conversión de servidores físicos y máquinas virtuales locales (VMware/AWS/Azure) hacia instancias nativas de Compute Engine con mínimo tiempo de inactividad.",
    "distractors": {
      "C": "Mueve objetos y archivos entre repositorios de almacenamiento; no replica discos de servidores en ejecución ni crea instancias arrancables.",
      "B": "Mantiene las máquinas sobre la pila de VMware en nodos dedicados: no las convierte en instancias nativas de Compute Engine como pide el equipo.",
      "A": "Convierte las cargas en contenedores sobre GKE en lugar de trasladar los servidores a instancias de Compute Engine, y exige modernizar la aplicación."
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
        "text": "Migrate to Virtual Machines (antes Migrate for Compute Engine)"
      },
      {
        "letter": "B",
        "text": "Migration Center (que incluye capacidades de evaluación de StratoZone)"
      },
      {
        "letter": "C",
        "text": "La Calculadora de Precios de Google Cloud (Pricing Calculator)"
      },
      {
        "letter": "D",
        "text": "Database Migration Service para inventariar las bases de datos"
      }
    ],
    "correct": "B",
    "explanation": "Migration Center es la plataforma unificada de Google Cloud que ayuda a las organizaciones a descubrir su infraestructura local existente, analizar la utilización real de recursos, modelar escenarios de costos en la nube (TCO) y planificar olas de migración estructuradas con base en datos reales.",
    "distractors": {
      "A": "Ejecuta la migración de las máquinas virtuales, pero no descubre el inventario ni estima el TCO antes de decidir.",
      "D": "Migra motores de base de datos concretos, sin cubrir servidores, aplicaciones ni el modelado financiero del TCO.",
      "C": "Estima el coste de una configuración que se introduce a mano: no descubre servidores ni mapea dependencias de red."
    },
    "officialDocUrl": "https://cloud.google.com/migration-center/docs",
    "blockId": "BLOCK-2",
    "reservaCiega": true
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
        "text": "Configurar una política de escalado automático (Autoscaling) en el grupo de instancias basada en el uso de CPU, de modo que se añadan instancias nuevas en cuanto la aplicación deje de responder a las peticiones."
      },
      {
        "letter": "B",
        "text": "Desplegar las instancias en un Grupo de Instancias Administradas Regional (Regional Managed Instance Group - MIG) y configurar una política de Auto-recuperación (Autohealing) vinculada a un Application Health Check."
      },
      {
        "letter": "C",
        "text": "Adjuntar un Health Check al servicio de backend del balanceador de carga para que deje de enviar peticiones a la instancia en cuanto falle la comprobación HTTP de la aplicación web alojada."
      },
      {
        "letter": "D",
        "text": "Activar la Migración en Vivo (Live Migration) y el Reinicio Automático (Automatic Restart) en las instancias para que Compute Engine las traslade a otro host físico cuando la aplicación se congele."
      }
    ],
    "correct": "B",
    "explanation": "Los Managed Instance Groups (MIGs) regionales permiten escalar y gestionar grupos de VMs idénticas creadas desde una plantilla de instancia. La política de Autohealing monitorea continuamente la salud de la aplicación mediante Health Checks de nivel HTTP/TCP y recrea automáticamente cualquier VM no saludable, garantizando alta disponibilidad.",
    "distractors": {
      "D": "Ambas son políticas de disponibilidad frente a eventos del host: mantenimiento programado o fallo del hardware. No observan la salud de la aplicación, y un proceso web colgado deja la VM en estado RUNNING sin disparar nada.",
      "A": "El escalado automático reacciona a métricas de carga, no al estado de salud: una VM congelada suele mostrar CPU baja, así que nunca dispararía el escalado, y además el escalado añade instancias pero no destruye ni recrea la enferma.",
      "C": "El health check del balanceador solo decide a qué instancias se les envía tráfico: retira de la rotación la VM enferma pero la deja encendida y averiada. Recrearla desde la plantilla es tarea de la política de autorreparación del MIG."
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
        "text": "Cloud Logging (definiendo alertas basadas en registros que busquen la cadena de error 500 en los registros del balanceador)"
      },
      {
        "letter": "B",
        "text": "Error Reporting (que agrupa las excepciones de la aplicación y avisa por correo cuando aparece un error nuevo en producción)"
      },
      {
        "letter": "C",
        "text": "Cloud Monitoring (creando políticas de alerta y canales de notificación vinculados a métricas de infraestructura y aplicación)"
      },
      {
        "letter": "D",
        "text": "Instalar el Agente de Operaciones (Ops Agent) en las máquinas virtuales para que publique las métricas de CPU del sistema invitado"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Monitoring recopila métricas, eventos y metadatos de Google Cloud, AWS y entornos locales, permitiendo crear paneles de control interactivos y definir políticas de alerta automatizadas con múltiples canales de notificación (correo, Slack, PagerDuty, Webhooks, SMS).",
    "distractors": {
      "D": "El agente aporta las métricas del sistema invitado, pero por sí solo no define umbrales, condiciones de alerta ni canales de notificación.",
      "B": "Error Reporting agrupa excepciones del código de la aplicación, no métricas de infraestructura como la utilización de CPU de las máquinas virtuales.",
      "A": "La alerta basada en registros dispara ante una línea concreta, pero no evalúa un umbral del 85 por ciento de CPU sostenido durante 5 minutos."
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
        "text": "Registros de Auditoría de Acceso a Datos (Data Access Logs), desactivados por defecto"
      },
      {
        "letter": "B",
        "text": "Registros de Auditoría de Eventos del Sistema (System Event Logs) en Cloud Audit Logs"
      },
      {
        "letter": "C",
        "text": "Registros de Auditoría de Actividad de Administrador (Admin Activity Logs en Cloud Audit Logs)"
      },
      {
        "letter": "D",
        "text": "Registros de flujo de VPC (VPC Flow Logs) de la subred de producción en Cloud Logging"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Audit Logs mantiene registros inmutables de auditoría en Cloud Logging que responden a '¿Quién hizo qué, dónde y cuándo?' en Google Cloud. Los registros de Actividad de Administrador (Admin Activity) registran todas las modificaciones de configuración o llamadas de administración y se conservan de forma gratuita e inalterable por 400 días.",
    "distractors": {
      "A": "Los Data Access Logs registran lecturas y escrituras de datos de usuario, no la llamada administrativa que elimina el recurso de base de datos.",
      "B": "Los System Event Logs recogen acciones que ejecuta el propio Google Cloud de forma automática, no las realizadas por un usuario o cuenta de servicio.",
      "D": "Los flow logs muestran conexiones de red entre direcciones IP, pero no la identidad del autor ni la API de Google Cloud que se invocó."
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
        "text": "Sumideros de Registros (Log Sinks / Log Router) configurados para exportar registros a Cloud Storage (archivo de 7 años), BigQuery (análisis SQL) y Cloud Pub/Sub (integración con SIEM externo)."
      },
      {
        "letter": "B",
        "text": "Configurar exclusiones de registros (Log Exclusions) en el Log Router para los eventos de seguridad y ampliar a siete años la retención personalizada del bucket _Default de Cloud Logging."
      },
      {
        "letter": "C",
        "text": "Crear métricas basadas en registros (Log-Based Metrics) sobre los eventos de seguridad y transacciones, y conservarlas en Cloud Monitoring para consultarlas durante el periodo regulatorio exigido."
      },
      {
        "letter": "D",
        "text": "Descargar los registros periódicamente con `gcloud logging read` y copiarlos a un bucket de Cloud Storage mediante una tarea programada con Cloud Scheduler y un job de Cloud Run."
      }
    ],
    "correct": "A",
    "explanation": "El enrutador de registros (Log Router) y los Log Sinks (Sumideros de Registros) en Cloud Logging permiten filtrar y dirigir flujos de registros hacia Cloud Storage (para retención de bajo costo a largo plazo), BigQuery (para análisis analítico SQL avanzado) o Pub/Sub (para streaming hacia herramientas SIEM como Splunk o Chronicle).",
    "distractors": {
      "C": "Las métricas basadas en registros guardan solo agregados numéricos (recuentos y distribuciones) y pierden la entrada individual que el auditor necesita como evidencia; además Cloud Monitoring retiene las series 24 meses, no siete años.",
      "B": "Una exclusión descarta los registros antes de ingerirlos, justo lo contrario de conservarlos siete años; además un bucket de Cloud Logging no ofrece consultas SQL avanzadas ni transmisión en tiempo real hacia el SIEM externo.",
      "D": "Es una extracción por lotes sujeta a los límites de consulta del Explorador de registros, con ventanas de tiempo que pueden dejar huecos y sin entrega en tiempo real al SIEM: los sumideros ya hacen ese enrutamiento de forma nativa."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/routing/overview",
    "blockId": "BLOCK-2",
    "reservaCiega": true
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
        "text": "Desinstalar 14 microservicios al azar hasta que la app sea más rápida"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Coldline"
      },
      {
        "letter": "C",
        "text": "Cloud DNS"
      },
      {
        "letter": "D",
        "text": "Cloud Trace"
      }
    ],
    "correct": "D",
    "explanation": "Cloud Trace es un sistema de rastreo distribuido que recopila datos de latencia de aplicaciones de microservicios, mostrando cómo viaja una solicitud a través de la arquitectura y ayudando a los desarrolladores a identificar con precisión qué servicio o consulta de base de datos específica está degradando el rendimiento.",
    "distractors": {
      "A": "Desinstalar servicios al azar destruye funcionalidades críticas de la aplicación.",
      "B": "Cloud Storage Coldline es para copias de seguridad de datos fríos.",
      "C": "Cloud DNS resuelve nombres de dominio en Internet."
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
        "text": "Cloud Interconnect"
      },
      {
        "letter": "B",
        "text": "Adivinar la línea de código con los ojos cerrados"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive"
      },
      {
        "letter": "D",
        "text": "Cloud Profiler"
      }
    ],
    "correct": "D",
    "explanation": "Cloud Profiler es un generador de perfiles estadístico de bajo impacto (menos del 1% de sobrecarga) que analiza continuamente el consumo de CPU y memoria de las aplicaciones en producción, presentando gráficos de llamas (flame graphs) para ayudar a los desarrolladores a optimizar el rendimiento y reducir los costos de infraestructura.",
    "distractors": {
      "A": "Cloud Interconnect es conectividad de red de telecomunicaciones.",
      "B": "La adivinación no es una práctica de ingeniería de software confiable.",
      "C": "Cloud Storage Archive es para almacenamiento de objetos pasivos."
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
        "text": "Nodo de Organización (Organization) -> Carpetas (Folders) -> Proyectos (Projects) -> Recursos individuales (Resources como VMs, tablas, buckets)"
      },
      {
        "letter": "B",
        "text": "Nodo de Organización (Organization) -> Proyectos (Projects) -> Carpetas (Folders) -> Recursos individuales (Resources como VMs, tablas, buckets)"
      },
      {
        "letter": "C",
        "text": "Cuenta de Facturación (Billing Account) -> Nodo de Organización -> Carpetas (Folders) -> Proyectos (Projects) -> Recursos individuales (VMs, buckets)"
      },
      {
        "letter": "D",
        "text": "Dominio de Cloud Identity -> Red VPC compartida -> Proyectos (Projects) -> Carpetas (Folders) -> Recursos individuales (Resources como VMs y buckets)"
      }
    ],
    "correct": "A",
    "explanation": "La jerarquía de recursos de Google Cloud se estructura como un árbol invertido: el nodo raíz es la Organización (vinculada al dominio de Cloud Identity/Google Workspace), seguida por Carpetas (Folders) para departamentos/entornos, Proyectos (Projects) como unidad base de facturación y habilitación de APIs, y en la base los Recursos individuales (VMs, buckets, etc.).",
    "distractors": {
      "C": "La cuenta de facturación se vincula a los proyectos pero no forma parte del árbol de herencia de políticas de IAM: no es un nodo de la jerarquía.",
      "D": "La red VPC es un recurso que vive dentro de un proyecto, no un nivel jerárquico, y además vuelve a colocar las carpetas por debajo de los proyectos.",
      "B": "Invierte dos niveles: las carpetas se sitúan por encima de los proyectos y un proyecto no puede contener carpetas dentro de la jerarquía de recursos."
    },
    "officialDocUrl": "https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy",
    "blockId": "BLOCK-2",
    "reservaCiega": true
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
        "text": "No heredan nada: las políticas de IAM concedidas en el nodo de la Organización solo alcanzan a los proyectos que ya existían en el momento de otorgar el rol, por lo que hay que volver a concederlo en el proyecto nuevo."
      },
      {
        "letter": "B",
        "text": "Heredan el rol únicamente si la carpeta nueva se creó con la herencia de políticas habilitada de forma explícita; en caso contrario la carpeta rompe la cadena y el proyecto queda aislado de las concesiones superiores."
      },
      {
        "letter": "C",
        "text": "Heredan automáticamente el rol `roles/viewer` en el nuevo proyecto y en todos sus recursos sin requerir ninguna configuración adicional, debido a la herencia hacia abajo de las políticas de IAM."
      },
      {
        "letter": "D",
        "text": "Heredan el rol `roles/viewer` solo sobre los metadatos del proyecto, pero necesitan una concesión adicional en cada servicio para poder leer el contenido de las tablas de BigQuery o los objetos de Cloud Storage."
      }
    ],
    "correct": "C",
    "explanation": "En la jerarquía de recursos de Google Cloud, las políticas de IAM se heredan transitivamente hacia abajo: los permisos otorgados a nivel de Organización o Carpeta se aplican automáticamente a todas las carpetas, proyectos y recursos contenidos debajo de ese nodo.",
    "distractors": {
      "D": "El rol heredado aporta íntegramente todos los permisos que contiene en cada recurso situado por debajo del nodo, incluidos los de lectura sobre BigQuery y Cloud Storage: no hace falta repetir la concesión servicio por servicio.",
      "B": "No existe ninguna opción para desactivar o romper la herencia de IAM en la jerarquía de recursos: las políticas son siempre acumulativas hacia abajo y un nivel inferior solo puede añadir permisos, nunca retirar los heredados.",
      "A": "La herencia se evalúa en el momento del acceso sobre la jerarquía vigente, no en el momento de conceder el rol: cualquier carpeta o proyecto creado después queda cubierto automáticamente por la política del nodo superior."
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
        "text": "Crear roles personalizados de IAM que excluyan el permiso `compute.instances.create` en `folders/FOLDER_ID`, y asignarlos a todos los desarrolladores en cada carpeta de la organización."
      },
      {
        "letter": "B",
        "text": "Políticas de Organización (Organization Policies), configurando restricciones predefinidas como `constraints/compute.vmExternalIpAccess` y `constraints/gcp.resourceLocations`."
      },
      {
        "letter": "C",
        "text": "Configurar Cloud Asset Inventory con un feed `feed-ip-externa` en tiempo real y una función `elimina-vm-noconforme` que borre las instancias con IP externa o creadas fuera de la Unión Europea."
      },
      {
        "letter": "D",
        "text": "Definir un perímetro `accessPolicies/POLICY_ID/servicePerimeters/perimetro-ue` de Controles de Servicio de VPC que abarque todos los proyectos de la organización y las regiones europeas autorizadas."
      }
    ],
    "correct": "B",
    "explanation": "El Servicio de Políticas de Organización (Organization Policy Service) proporciona a los administradores de la nube control centralizado y guardarraíles programáticos para restringir cómo se configuran los recursos en toda la jerarquía de la empresa, independientemente de los permisos de IAM de los desarrolladores individuales.",
    "distractors": {
      "A": "IAM decide quién puede actuar, no cómo debe configurarse el recurso: cualquier desarrollador que conserve permiso para crear una VM podrá asignarle una IP externa y elegir cualquier región del mundo.",
      "C": "Es un control detectivo y reactivo: el recurso no conforme llega a existir y queda expuesto durante la ventana entre su creación y la remediación. El requisito pide un guardarraíl preventivo que impida crearlo.",
      "D": "VPC Service Controls crea un perímetro que evita la exfiltración de datos entre servicios administrados, pero no impide asignar una dirección IP externa a una VM ni restringe en qué región se crean los recursos."
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
        "text": "Cada Proyecto de Google Cloud genera automáticamente su propia Cuenta de Facturación al ser creado, de modo que siempre existe una relación estricta de uno a uno entre cada Proyecto y su Cuenta de Facturación."
      },
      {
        "letter": "B",
        "text": "Las Cuentas de Facturación se vinculan a las Carpetas (Folders) de la jerarquía de recursos, y todos los Proyectos que cuelgan de una Carpeta heredan automáticamente la Cuenta de Facturación de esa Carpeta."
      },
      {
        "letter": "C",
        "text": "Una Cuenta de Facturación (Cloud Billing Account) puede estar vinculada a uno o varios Proyectos; sin embargo, cada Proyecto individual solo puede estar vinculado a una única Cuenta de Facturación a la vez."
      },
      {
        "letter": "D",
        "text": "Un Proyecto puede estar vinculado simultáneamente a varias Cuentas de Facturación para repartir su gasto entre divisiones, mientras que cada Cuenta de Facturación sólo puede pagar un único Proyecto a la vez."
      }
    ],
    "correct": "C",
    "explanation": "En Google Cloud, una Cuenta de Facturación (Billing Account) es un recurso raíz que define quién paga por el consumo. Tiene una relación de uno a muchos con los proyectos: una cuenta de facturación puede pagar los costos de cientos de proyectos, pero cada proyecto solo puede estar asociado a una cuenta de facturación en un momento dado.",
    "distractors": {
      "B": "El vínculo de facturación se establece directamente sobre el Proyecto, no sobre la Carpeta: la jerarquía de recursos propaga políticas de IAM y de organización, pero no propaga la Cuenta de Facturación.",
      "A": "La Cuenta de Facturación es un recurso independiente que se crea y se vincula de forma explícita: un Proyecto puede existir sin ella, y la relación real es de una cuenta a muchos proyectos, no uno a uno.",
      "D": "Invierte la cardinalidad real: un Proyecto sólo admite una Cuenta de Facturación activa en un momento dado, y una Cuenta de Facturación sí puede pagar cientos de Proyectos."
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
        "text": "Al alcanzar el 100% del presupuesto, Cloud Billing aplica automáticamente un tope de gasto que impide crear nuevos recursos en los proyectos asociados hasta el siguiente ciclo de facturación, aunque mantiene en ejecución los ya desplegados."
      },
      {
        "letter": "B",
        "text": "Las alertas solo pueden dispararse sobre el gasto real ya acumulado en el mes; Google Cloud no puede notificar sobre costos previstos, por lo que el equipo debe proyectar manualmente el cierre a partir del consumo diario observado."
      },
      {
        "letter": "C",
        "text": "Las notificaciones se envían únicamente al Propietario del proyecto donde se genera el gasto y no pueden dirigirse a los administradores de facturación ni integrarse con Pub/Sub o los canales de Cloud Monitoring para automatizar respuestas."
      },
      {
        "letter": "D",
        "text": "Envían notificaciones por correo electrónico a los administradores de facturación cuando se alcanzan los umbrales definidos, pero NO apagan ni interrumpen automáticamente los recursos de los proyectos por defecto para evitar caídas imprevistas de producción."
      }
    ],
    "correct": "D",
    "explanation": "Los presupuestos y alertas de Google Cloud son herramientas de visibilidad y notificación temprana. Por defecto, alcanzar o superar el 100% de un presupuesto no detiene ni elimina los recursos en ejecución, garantizando que los servicios críticos de negocio continúen operando mientras el equipo gestiona la optimización.",
    "distractors": {
      "B": "Los presupuestos admiten umbrales tanto de gasto real como de gasto previsto: la regla de importe previsto notifica cuando la tendencia del mes indica que se superará el umbral, que es justo lo que pide el Director Financiero.",
      "A": "Un presupuesto no es un tope de gasto: Google Cloud no ofrece un límite duro que bloquee la creación de recursos al alcanzarlo. Detener el consumo exige construir una automatización propia con Pub/Sub y una función que desactive la facturación.",
      "C": "Por defecto la alerta llega a los administradores y usuarios de la Cuenta de Facturación, no al Propietario del proyecto, y además puede enrutarse a un tema de Pub/Sub o a canales de notificación de Cloud Monitoring."
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
        "text": "Utilizar los informes de facturación de la consola de Cloud Billing, agrupando el gasto por proyecto, servicio y SKU desde la interfaz gráfica."
      },
      {
        "letter": "B",
        "text": "Habilitar la exportación automática de datos de facturación de Cloud Billing hacia BigQuery (Cloud Billing Export to BigQuery)."
      },
      {
        "letter": "C",
        "text": "Configurar presupuestos de Cloud Billing con alertas por umbral y notificaciones a Pub/Sub para cada centro de costos de la organización."
      },
      {
        "letter": "D",
        "text": "Descargar cada mes desde la consola de facturación la tabla de costos y el informe de precios en CSV para abrirlos en una hoja de cálculo."
      }
    ],
    "correct": "B",
    "explanation": "Cloud Billing Export hacia BigQuery permite exportar automáticamente datos detallados y continuos de facturación (estándar, detallada con uso a nivel de recursos y precios) hacia conjuntos de datos de BigQuery para ejecutar consultas SQL avanzadas y construir reportes visuales personalizados en Looker o Looker Studio.",
    "distractors": {
      "C": "Los presupuestos vigilan y avisan del gasto, pero no generan el conjunto de datos detallado con el desglose de CUDs y SUDs que el equipo de FinOps necesita analizar.",
      "D": "La descarga CSV es puntual y ya viene agregada por mes: no es un flujo continuo ni permite el análisis hora por hora ni los tableros interactivos.",
      "A": "Los informes de la consola permiten agrupar y filtrar el gasto, pero no ofrecen granularidad horaria por etiqueta ni son una fuente SQL sobre la que construir tableros en Looker Studio."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/export-data-bigquery",
    "blockId": "BLOCK-2",
    "reservaCiega": true
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
        "text": "Las Etiquetas (Labels) se utilizan principalmente para organizar recursos y desglosar costos en los reportes de facturación; los Rótulos/Tags (Resource Manager Tags) están gobernados centralmente y permiten aplicar políticas de IAM y reglas de firewall condicionales."
      },
      {
        "letter": "B",
        "text": "Las Etiquetas (Labels) están gobernadas centralmente por el administrador de la organización y permiten conceder permisos condicionales de IAM y reglas de firewall; los Rótulos (Tags) son pares clave-valor libres que cada equipo aplica para desglosar el gasto en la factura."
      },
      {
        "letter": "C",
        "text": "Las Etiquetas (Labels) y los Rótulos (Tags) son pares clave-valor equivalentes con distinto nombre comercial, y ambos se heredan automáticamente desde la carpeta hacia los proyectos y hacia todos los recursos hijos sin necesidad de aplicarlos recurso por recurso."
      },
      {
        "letter": "D",
        "text": "Las Etiquetas (Labels) organizan recursos y desglosan costes, mientras que la jerarquía de recursos con carpetas y proyectos es el único mecanismo para aplicar IAM y firewall condicionales, porque los Rótulos (Tags) solo pueden asignarse a máquinas virtuales."
      }
    ],
    "correct": "A",
    "explanation": "Las Labels son metadatos clave-valor ideales para categorización granular y atribución de costos en Billing Export. Las Tags de Resource Manager se administran a nivel organizacional y se integran con el motor de políticas para otorgar permisos condicionales o aplicar reglas de firewall dinámicamente.",
    "distractors": {
      "D": "Confunde las Tags de Resource Manager con las etiquetas de red de las VMs: las Tags se aplican a la organización, carpetas y proyectos y son la base de las políticas condicionales.",
      "B": "Intercambia las dos definiciones: las Labels son metadatos libres para costes y las Tags de Resource Manager son las gobernadas y usables en políticas condicionales.",
      "C": "Las Labels no se heredan por la jerarquía (se aplican a cada recurso) y no sirven para políticas: solo las Tags se heredan y se evalúan en condiciones de IAM y firewall."
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
        "text": "(1) SLO (Service Level Objective); (2) SLI (Service Level Indicator); (3) SLA (Service Level Agreement)"
      },
      {
        "letter": "B",
        "text": "(1) SLI (Service Level Indicator); (2) SLA (Service Level Agreement); (3) SLO (Service Level Objective)"
      },
      {
        "letter": "C",
        "text": "(1) SLA (Service Level Agreement); (2) SLO (Service Level Objective); (3) SLI (Service Level Indicator)"
      },
      {
        "letter": "D",
        "text": "(1) SLI (Service Level Indicator); (2) SLO (Service Level Objective); (3) SLA (Service Level Agreement)"
      }
    ],
    "correct": "D",
    "explanation": "SLI (Indicador) es la métrica real observada (ej. 99.92% de peticiones exitosas); SLO (Objetivo) es la meta interna que el equipo de ingeniería se fija para mantener la calidad (ej. 99.9%); y SLA (Acuerdo) es el compromiso legal vinculante con los clientes que acarrea consecuencias financieras si se incumple (ej. 99.5%).",
    "distractors": {
      "A": "Intercambia el indicador y el objetivo: la medición cuantitativa observada en tiempo real es el SLI, mientras que el SLO es la meta interna que el equipo se fija sobre ese indicador.",
      "B": "Acierta el primero, pero coloca el acuerdo contractual en el lugar de la meta interna: el SLA es el compromiso externo con penalizaciones y siempre se fija por debajo del SLO que el equipo persigue.",
      "C": "Invierte por completo el orden: el SLA no es una medición en tiempo real sino un contrato, y el SLI es una métrica observada que no lleva asociada ninguna penalización financiera para el proveedor."
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
        "text": "El Error Budget (calculado como 100% menos el SLO, ej. 0.1% de margen de fallo) define la cantidad tolerable de riesgo e inestabilidad permitida: si sobra presupuesto de errores, los desarrolladores pueden lanzar cambios rápidos; si el presupuesto se agota, se prioriza la estabilización del sistema."
      },
      {
        "letter": "B",
        "text": "El Error Budget es el importe de los créditos de servicio que el proveedor devuelve al cliente cuando incumple el SLA contratado, de modo que el equipo puede seguir desplegando cambios mientras el coste acumulado de esas penalizaciones siga siendo inferior al beneficio que aportan las nuevas funcionalidades."
      },
      {
        "letter": "C",
        "text": "El Error Budget fija como meta la fiabilidad del 100%, de modo que cualquier error observado en producción congela de inmediato todos los despliegues hasta que la causa raíz esté resuelta y el equipo demuestre con pruebas de carga que ese fallo concreto no puede volver a repetirse."
      },
      {
        "letter": "D",
        "text": "El Error Budget reparte una cuota fija de incidentes al mes entre los equipos de la organización: cada equipo recibe el mismo número de fallos permitidos con independencia del SLO de su servicio, y quien agota su cuota cede su turno de despliegue a los demás equipos."
      }
    ],
    "correct": "A",
    "explanation": "El Presupuesto de Errores (Error Budget) es la base de la colaboración en SRE: reconoce que la confiabilidad del 100% es un objetivo erróneo y antieconómico. Utiliza el margen de fallo permitido (100% - SLO) como una moneda de cambio compartida para equilibrar la velocidad de innovación con la estabilidad del servicio.",
    "distractors": {
      "C": "SRE rechaza explícitamente el 100% como objetivo: es antieconómico y el usuario no percibe la diferencia frente a un SLO alto. El presupuesto existe precisamente para gastar de forma deliberada una cantidad tolerable de inestabilidad.",
      "D": "El presupuesto se calcula por servicio a partir de su propio SLO y se consume según la desviación medida por los SLI, no como un reparto igualitario de incidentes entre equipos: un servicio crítico y uno interno no tienen el mismo margen.",
      "B": "Confunde el presupuesto de errores con los créditos de servicio del SLA: estos son un mecanismo contractual y financiero frente al cliente externo, mientras que el Error Budget es un margen interno derivado del SLO que regula el ritmo de despliegue."
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
        "text": "Cloud Error Reporting"
      },
      {
        "letter": "B",
        "text": "Cloud Interconnect"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Coldline"
      },
      {
        "letter": "D",
        "text": "Desactivar la captura de excepciones para que la app no muestre fallos"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Error Reporting analiza y desglosa los registros de errores y las trazas de pila (stack traces) de aplicaciones en ejecución, agrupando fallos similares de forma inteligente, mostrando su frecuencia de ocurrencia y enviando alertas cuando se detecta un error de software nuevo.",
    "distractors": {
      "C": "Cloud Storage Coldline almacena archivos pasivos.",
      "B": "Cloud Interconnect es conectividad física de telecomunicaciones.",
      "D": "Ocultar excepciones no soluciona el problema de software y degrada la experiencia de los clientes."
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
    "scenario": "El Director de Tecnología (CTO) de una startup desea migrar a la nube pero le preocupa quedar atrapado con tecnologías propietarias que impidan mover sus cargas de trabajo en el futuro. Quiere minimizar el vendor lock-in tanto en el software que construye como en la forma en que gestiona esas cargas entre entornos. ¿Qué dos elementos de la estrategia de Google Cloud debe aprovechar? (Elige 2.)",
    "keywords": [
      "Vendor Lock-in",
      "Código abierto",
      "Open Source",
      "Kubernetes",
      "Portabilidad"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Google Cloud ofrece condiciones contractuales de salida sin penalización y descuentos por compromiso, de modo que el cliente puede rescindir el acuerdo comercial en cualquier momento sin coste."
      },
      {
        "letter": "B",
        "text": "Google Cloud replica automáticamente todas las cargas de trabajo del cliente en AWS y Azure, de modo que la misma aplicación puede ejecutarse indistintamente en cualquiera de los tres proveedores."
      },
      {
        "letter": "C",
        "text": "Google Cloud recomienda desarrollar exclusivamente sobre servicios propietarios como BigQuery y Spanner, y exportar los datos a ficheros CSV el día que se decida cambiar de proveedor de nube."
      },
      {
        "letter": "D",
        "text": "Google Cloud construye sus servicios sobre estándares abiertos y tecnologías de código abierto líderes (como Kubernetes, TensorFlow y Apache Beam), garantizando la portabilidad de aplicaciones."
      },
      {
        "letter": "E",
        "text": "Adoptar Anthos para desplegar y administrar las mismas cargas de trabajo en contenedores de forma consistente en Google Cloud, en su centro de datos local y en otras nubes."
      }
    ],
    "correct": [
      "D",
      "E"
    ],
    "explanation": "Google Cloud reduce el vendor lock-in en dos frentes: construye sus servicios sobre estándares abiertos y tecnologías de código abierto (Kubernetes, TensorFlow, Apache Beam), y ofrece Anthos para que el cliente gestione las mismas cargas de trabajo en contenedores de forma consistente dentro de Google Cloud, on-premises o en otras nubes. Ambos son necesarios: el primero da la base portable, el segundo la capacidad operativa de moverse entre entornos.",
    "distractors": {
      "B": "Google Cloud no replica automáticamente cargas de trabajo hacia AWS o Azure; esa portabilidad automática entre proveedores no existe como servicio gestionado.",
      "C": "Construir exclusivamente sobre servicios propietarios y exportar CSV al final aumenta el vendor lock-in en vez de prevenirlo, contradiciendo el objetivo del CTO.",
      "A": "La flexibilidad contractual para rescindir el acuerdo no resuelve el bloqueo técnico: la aplicación seguiría dependiendo de APIs propietarias imposibles de portar."
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
        "text": "Reducir el coste total de propiedad negociando el mismo servicio con varios proveedores a la vez y consolidando todo el gasto de infraestructura en una única factura mensual centralizada."
      },
      {
        "letter": "B",
        "text": "Repartir cada transacción de una misma aplicación entre los tres grandes proveedores de nube de forma simultánea para multiplicar por tres el rendimiento disponible en hora punta."
      },
      {
        "letter": "C",
        "text": "Mitigar el riesgo de dependencia tecnológica, cumplir con regulaciones locales de datos y aprovechar los mejores servicios especializados de cada proveedor de nube."
      },
      {
        "letter": "D",
        "text": "Delegar en los proveedores de nube la responsabilidad del cumplimiento normativo y de la residencia de los datos, de modo que ellos asuman las sanciones regulatorias del sector."
      }
    ],
    "correct": "C",
    "explanation": "Una estrategia multinube permite a las empresas mitigar riesgos de disponibilidad y concentración, cumplir con leyes locales de residencia de datos y seleccionar las mejores capacidades tecnológicas de cada plataforma según sus necesidades específicas.",
    "distractors": {
      "A": "La multinube suele aumentar el coste operativo (equipos, herramientas y transferencia de datos entre proveedores) y no existe una factura conjunta: cada proveedor factura por separado.",
      "D": "El modelo de responsabilidad compartida deja siempre en el cliente la rendición de cuentas regulatoria: el proveedor certifica su infraestructura, pero no asume las multas del cliente.",
      "B": "Describe un reparto por transacción que ninguna arquitectura multinube realiza: la multinube coloca cada carga completa en el proveedor adecuado, no fragmenta una petición entre nubes."
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
        "text": "Aplicar mejoras incrementales del 10% en cada iteración trimestral del producto hasta acumular con el tiempo una mejora total de diez veces sobre la situación de partida."
      },
      {
        "letter": "B",
        "text": "Reservar el 10% de la jornada de cada ingeniero para proyectos personales de innovación, al margen de los objetivos del producto principal de la unidad de negocio."
      },
      {
        "letter": "C",
        "text": "Buscar una mejora radical de diez veces (10x) en lugar de una mejora incremental del 10%, repensando los problemas desde sus fundamentos con ayuda de la tecnología."
      },
      {
        "letter": "D",
        "text": "Lanzar diez productos mínimos viables en paralelo y conservar únicamente aquel que consiga la mayor tracción de usuarios durante su primer trimestre en el mercado."
      }
    ],
    "correct": "C",
    "explanation": "El '10x Thinking' promueve abordar los desafíos empresariales buscando mejoras de un orden de magnitud (1000%) en lugar de pequeños avances incrementales (10%), lo que obliga a cuestionar supuestos tradicionales y aprovechar tecnologías transformadoras.",
    "distractors": {
      "D": "Es una táctica de experimentación en cartera: multiplica el número de apuestas, no la ambición de cada una, que es lo que plantea el pensamiento 10x.",
      "A": "Es exactamente la mejora incremental que el principio 10x contrapone: acumular pasos del 10% mantiene los supuestos del problema original en lugar de replantearlo desde sus fundamentos.",
      "B": "Describe la práctica del tiempo dedicado a proyectos propios, otra idea de la cultura de innovación de Google, pero no dice nada sobre la magnitud del objetivo que se persigue."
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
    "scenario": "Una empresa de retail compite con nuevos actores nativos digitales que lanzan funcionalidades comerciales en días. En su infraestructura local, aprovisionar un nuevo entorno de pruebas toma 8 semanas, y además el equipo de desarrollo necesita poder destruir esos entornos cuando ya no los use para no seguir pagando por ellos. ¿Qué dos capacidades de Google Cloud resuelven este cuello de botella? (Elige 2.)",
    "keywords": [
      "Time-to-Market",
      "Agilidad",
      "Aprovisionamiento bajo demanda",
      "Velocidad de entrega"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Traslada la gestión del hardware a Google, aunque cada entorno de pruebas sigue requiriendo el mismo ciclo de aprobación y compra."
      },
      {
        "letter": "B",
        "text": "Permite aprovisionar recursos de cómputo, bases de datos y entornos completos de desarrollo en minutos mediante APIs y plantillas automatizadas."
      },
      {
        "letter": "C",
        "text": "Permite reservar capacidad con descuentos por uso comprometido (CUD) para que el equipo siempre tenga servidores libres disponibles."
      },
      {
        "letter": "D",
        "text": "Ofrece un catálogo de imágenes preconfiguradas que el equipo de infraestructura clona manualmente ante cada solicitud de entorno."
      },
      {
        "letter": "E",
        "text": "Permite destruir el entorno de pruebas en cuanto deja de usarse, de modo que el equipo solo paga por los recursos mientras los está utilizando de verdad."
      }
    ],
    "correct": [
      "B",
      "E"
    ],
    "explanation": "La infraestructura programable de Google Cloud permite aprovisionar entornos completos en minutos mediante APIs y plantillas, y del mismo modo destruirlos apenas dejan de usarse, de forma que el equipo solo paga por el tiempo real de uso. Ambas capacidades —crear rápido y destruir cuando ya no se necesita— son las que eliminan el cuello de botella de las 8 semanas y el gasto ocioso.",
    "distractors": {
      "D": "Clonar manualmente un catálogo de imágenes preconfiguradas sigue dependiendo de que una persona ejecute el proceso, sin la automatización necesaria para bajar de semanas a minutos.",
      "A": "Aunque Google gestiona el hardware, si cada entorno de pruebas sigue el mismo ciclo de aprobación y compra, el cuello de botella de las 8 semanas no desaparece.",
      "C": "Los descuentos por uso comprometido (CUD) reducen el costo de capacidad reservada, pero no aceleran el tiempo de aprovisionamiento de un entorno nuevo."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/devops",
    "blockId": "BLOCK-3",
    "reservaCiega": true
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
        "text": "Democratización de datos mediante herramientas de analítica y business intelligence de autoservicio (como BigQuery y Looker Studio)."
      },
      {
        "letter": "B",
        "text": "Automatización de la ingesta con canalizaciones de Dataflow para que los reportes existentes se actualicen cada noche."
      },
      {
        "letter": "C",
        "text": "Centralización del almacenamiento en un data warehouse de BigQuery gestionado en exclusiva por el equipo de ingeniería."
      },
      {
        "letter": "D",
        "text": "Creación de un centro de excelencia que priorice y planifique cada trimestre las solicitudes de reportes del área comercial."
      }
    ],
    "correct": "A",
    "explanation": "La democratización de datos proporciona a los usuarios de toda la organización herramientas de autoservicio seguras e intuitivas para acceder, explorar y analizar datos en tiempo real sin requerir intervención constante de los ingenieros de TI.",
    "distractors": {
      "D": "Un comité ordena la cola de peticiones y da visibilidad, pero sigue siendo un proceso de solicitud: no habilita el autoservicio del analista.",
      "B": "Mejora la frescura del dato, pero el analista sigue pidiendo a ingeniería que construya cada reporte nuevo: la dependencia y la demora permanecen.",
      "C": "Consolidar el almacén rompe los silos técnicos; sin embargo, el acceso exclusivo de ingeniería mantiene intacto el cuello de botella organizativo."
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
        "text": "Cloud Interconnect"
      },
      {
        "letter": "B",
        "text": "Cloud SQL"
      },
      {
        "letter": "C",
        "text": "Cloud Pub/Sub"
      },
      {
        "letter": "D",
        "text": "Cloud Armor"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Pub/Sub es un servicio de mensajería asíncrona y escalable globalmente que desacopla los servicios que producen eventos (publicadores) de los servicios que los procesan (suscriptores), garantizando entrega confiable y absorción de picos de carga.",
    "distractors": {
      "B": "Cloud SQL es una base de datos relacional; usar tablas SQL como colas de mensajes introduce cuellos de botella de bloqueo transaccional.",
      "A": "Cloud Interconnect es una conexión de red física dedicada de fibra óptica entre el centro de datos y Google Cloud.",
      "D": "Cloud Armor es un servicio de firewall de aplicaciones web (WAF) y mitigación de ataques DDoS."
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
        "text": "Dataplex"
      },
      {
        "letter": "B",
        "text": "Compute Engine Bare Metal"
      },
      {
        "letter": "C",
        "text": "Cloud NAT"
      },
      {
        "letter": "D",
        "text": "Cloud Trace"
      }
    ],
    "correct": "A",
    "explanation": "Dataplex es una estructura de datos inteligente (data fabric) que permite a las organizaciones gobernar, supervisar y descubrir datos de forma centralizada a través de lagos de datos, almacenes de datos y mercados de datos, soportando arquitecturas modernas de Data Mesh.",
    "distractors": {
      "B": "Compute Engine Bare Metal ofrece servidores físicos sin hipervisor.",
      "C": "Cloud NAT permite a VMs privadas acceder a Internet sin IP pública.",
      "D": "Cloud Trace mide la latencia de llamadas entre servicios web."
    },
    "officialDocUrl": "https://cloud.google.com/dataplex",
    "blockId": "BLOCK-3",
    "reservaCiega": true
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
        "text": "Cloud Key Management Service (Cloud KMS con CMEK)"
      },
      {
        "letter": "B",
        "text": "Dataplex Universal Catalog (antes Data Catalog)"
      },
      {
        "letter": "C",
        "text": "Sensitive Data Protection (anteriormente Cloud DLP)"
      },
      {
        "letter": "D",
        "text": "Assured Workloads con controles de residencia de datos"
      }
    ],
    "correct": "C",
    "explanation": "Sensitive Data Protection (Cloud DLP) es un servicio totalmente administrado que ayuda a descubrir, clasificar, enmascarar, tokenizar y redactar automáticamente datos confidenciales (como PII, PHI y credenciales) en Cloud Storage, BigQuery y flujos de datos.",
    "distractors": {
      "B": "Dataplex cataloga y gobierna metadatos (esquemas, linaje y etiquetas) de los activos de datos, pero no analiza el contenido para detectar números de seguro social ni aplica transformaciones de anonimización sobre los valores.",
      "A": "Cloud KMS gestiona las claves con las que se cifran los datos en reposo, pero no inspecciona el contenido de los archivos: no descubre ni clasifica PII y no puede enmascarar ni tokenizar campos concretos dentro de los registros clínicos.",
      "D": "Assured Workloads impone controles de cumplimiento y de residencia geográfica sobre el entorno donde vive la carga de trabajo, pero no inspecciona los archivos ni desidentifica la PII que contienen antes de exponerla a los analistas."
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
        "text": "Cloud Deployment Manager"
      },
      {
        "letter": "B",
        "text": "Vertex AI"
      },
      {
        "letter": "C",
        "text": "Google Cloud CDN"
      },
      {
        "letter": "D",
        "text": "Cloud VPN"
      }
    ],
    "correct": "B",
    "explanation": "Vertex AI es la plataforma unificada de IA y Machine Learning de Google Cloud que reúne todas las herramientas de MLOps: preparación de datos, entrenamiento (AutoML y personalizado), gestión de experimentos, registros de modelos, despliegue de endpoints y monitoreo continuo.",
    "distractors": {
      "D": "Cloud VPN crea túneles seguros IPsec para conectar redes físicas con VPCs de Google Cloud.",
      "C": "Cloud CDN distribuye en caché contenido estático en la red perimetral de Google.",
      "A": "Cloud Deployment Manager es una herramienta de infraestructura como código (IaC)."
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
        "text": "Entrenamiento personalizado escribiendo contenedores Docker de TensorFlow desde cero"
      },
      {
        "letter": "B",
        "text": "Vertex AI AutoML (entrenamiento automatizado con interfaz gráfica)"
      },
      {
        "letter": "C",
        "text": "Adivinar los precios manualmente con una calculadora de bolsillo"
      },
      {
        "letter": "D",
        "text": "Comprar servidores físicos GPU e instalar drivers CUDA manualmente"
      }
    ],
    "correct": "B",
    "explanation": "Vertex AI AutoML permite a usuarios con conocimientos limitados de Machine Learning entrenar modelos personalizados de alta calidad para datos tabulares, imágenes, texto o video mediante una interfaz intuitiva con búsqueda automática de arquitectura neuronal (NAS).",
    "distractors": {
      "D": "Comprar servidores físicos locales requiere una inversión masiva de capital y habilidades de administración de hardware.",
      "A": "El entrenamiento personalizado requiere conocimientos avanzados de programación y ciencia de datos que el equipo no posee.",
      "C": "La adivinación manual es propensa a errores y no aprovecha el valor de los datos históricos."
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
        "text": "Vertex AI Workbench con notebooks gestionados de JupyterLab para entrenar el modelo de abandono en Python sobre los datos leídos de BigQuery"
      },
      {
        "letter": "B",
        "text": "Looker Studio conectado a BigQuery para construir un panel con la evolución histórica de cancelaciones segmentada por tipo de suscripción"
      },
      {
        "letter": "C",
        "text": "Dataproc ejecutando un trabajo de clasificación con Spark MLlib sobre los datos de clientes copiados previamente de BigQuery a Cloud Storage"
      },
      {
        "letter": "D",
        "text": "BigQuery ML (que permite entrenar y evaluar modelos de ML directamente en BigQuery utilizando sentencias SQL estándar como `CREATE MODEL`)"
      }
    ],
    "correct": "D",
    "explanation": "BigQuery ML democratiza el machine learning al permitir a los profesionales de SQL crear, entrenar, evaluar y ejecutar predicciones de modelos de ML directamente dentro de BigQuery, sin necesidad de mover datos fuera del data warehouse ni aprender lenguajes como Python.",
    "distractors": {
      "A": "Resuelve el problema de predicción, pero exige programar en Python y gestionar el entorno del notebook: el escenario dice expresamente que los analistas sólo dominan SQL.",
      "B": "Looker Studio es una herramienta de visualización descriptiva: muestra lo que ya ocurrió, pero no entrena ningún modelo que asigne una probabilidad de abandono a cada cliente.",
      "C": "Obliga a mover los datos fuera del data warehouse y a escribir código Spark, las dos restricciones que el escenario descarta explícitamente."
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
        "text": "Cloud Interconnect"
      },
      {
        "letter": "B",
        "text": "Cloud Vision API"
      },
      {
        "letter": "C",
        "text": "Cloud Armor"
      },
      {
        "letter": "D",
        "text": "Cloud Spanner"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Vision API ofrece modelos de visión artificial preentrenados que permiten extraer texto impreso y manuscrito (OCR), detectar etiquetas, rostros, logotipos y evaluar la seguridad del contenido (SafeSearch) a través de una simple llamada a una API REST.",
    "distractors": {
      "D": "Cloud Spanner es una base de datos relacional para transacciones globales, no un servicio de visión por computadora.",
      "A": "Cloud Interconnect es conectividad física de red empresarial.",
      "C": "Cloud Armor defiende aplicaciones web contra ataques DDoS y ataques de inyección SQL."
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
        "text": "Cloud Natural Language API"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Nearline"
      },
      {
        "letter": "C",
        "text": "Compute Engine Preemptible VMs"
      },
      {
        "letter": "D",
        "text": "Cloud Load Balancing"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Natural Language API utiliza procesamiento de lenguaje natural (NLP) de última generación para analizar la estructura y el significado del texto, extrayendo entidades, analizando el sentimiento general y reconociendo la sintaxis sin requerir entrenamiento de modelos.",
    "distractors": {
      "B": "Cloud Storage Nearline es una clase de almacenamiento para respaldos de acceso mensual.",
      "C": "Preemptible VMs son servidores de cómputo con descuento que pueden ser interrumpidos por Google.",
      "D": "Cloud Load Balancing gestiona el balanceo de tráfico de red entre instancias."
    },
    "officialDocUrl": "https://cloud.google.com/natural-language/docs",
    "blockId": "BLOCK-3",
    "reservaCiega": true
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
        "text": "Cloud Translation API para traducir las descripciones y Cloud Text-to-Speech para procesar las llamadas grabadas del centro de soporte."
      },
      {
        "letter": "B",
        "text": "Cloud Natural Language API para traducir las descripciones de producto y Cloud Speech-to-Text para transcribir las llamadas grabadas."
      },
      {
        "letter": "C",
        "text": "Cloud Translation API para traducir el catálogo de productos y Dialogflow CX para transcribir a texto las grabaciones del centro de llamadas."
      },
      {
        "letter": "D",
        "text": "Cloud Translation API para la traducción de texto y Cloud Speech-to-Text para la transcripción de grabaciones de audio a texto."
      }
    ],
    "correct": "D",
    "explanation": "Cloud Translation API proporciona traducción automática neural entre más de 100 idiomas, y Cloud Speech-to-Text convierte audio grabado o en vivo a texto con alta precisión utilizando modelos avanzados de reconocimiento de voz de Google.",
    "distractors": {
      "B": "Natural Language API analiza entidades, sintaxis y sentimiento de un texto, pero no lo traduce a otro idioma: la traducción a más de 100 idiomas la aporta Cloud Translation API.",
      "A": "Text-to-Speech opera en el sentido contrario: convierte texto en audio sintetizado. Para obtener texto a partir de llamadas grabadas hace falta Speech-to-Text.",
      "C": "Dialogflow CX construye agentes conversacionales que atienden llamadas en vivo; la transcripción por lotes de grabaciones ya existentes corresponde a Cloud Speech-to-Text."
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
        "text": "Cloud Vision API (con detección de texto OCR para leer los caracteres del PDF)"
      },
      {
        "letter": "B",
        "text": "Document AI (utilizando procesadores especializados como Invoice Parser y Form Parser)"
      },
      {
        "letter": "C",
        "text": "Cloud Natural Language API (con análisis de entidades y sintaxis sobre el texto)"
      },
      {
        "letter": "D",
        "text": "Vertex AI AutoML tabular (entrenando un modelo con las facturas históricas)"
      }
    ],
    "correct": "B",
    "explanation": "Document AI es la plataforma de Google Cloud para comprender y extraer datos no estructurados de documentos (facturas, contratos, recibos, formularios de impuestos) transformándolos en datos estructurados listos para ser consumidos por sistemas ERP o analíticos.",
    "distractors": {
      "C": "Analiza semántica de texto libre; no comprende la estructura ni el diseño de una factura, por lo que no extrae los campos clave de forma fiable.",
      "A": "El OCR de Vision devuelve texto plano y posiciones, pero no identifica que cadena es el proveedor, el número de factura o el total: no entrega campos estructurados para el ERP.",
      "D": "AutoML tabular parte de datos ya estructurados en filas y columnas: no puede consumir los PDF, que es precisamente el paso que falta por automatizar."
    },
    "officialDocUrl": "https://cloud.google.com/document-ai/docs",
    "blockId": "BLOCK-3",
    "reservaCiega": true
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
        "text": "Speech-to-Text y Text-to-Speech como APIs por separado"
      },
      {
        "letter": "B",
        "text": "Vertex AI Search sobre los documentos internos del banco"
      },
      {
        "letter": "C",
        "text": "Contact Center AI (CCAI) con Dialogflow CX y Agent Assist"
      },
      {
        "letter": "D",
        "text": "Conversational Insights con analítica de las llamadas"
      }
    ],
    "correct": "C",
    "explanation": "Contact Center AI (CCAI) combina tecnologías conversacionales (Dialogflow CX), asistencia a agentes humanos en tiempo real (Agent Assist) e inteligencia de conversaciones (Insights) para mejorar la experiencia del cliente y la eficiencia operativa de los centros de atención.",
    "distractors": {
      "B": "Indexa documentos para búsqueda empresarial; no atiende la línea telefónica ni mantiene una conversación por voz con el cliente.",
      "A": "Son bloques que transcriben y sintetizan audio, pero no gestionan el diálogo ni sugieren respuestas al operador durante la llamada.",
      "D": "Insights analiza las conversaciones después de ocurridas para detectar tendencias; no desvía llamadas con agentes virtuales ni reduce la espera."
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
        "text": "Compute Engine con discos duros HDD estándar"
      },
      {
        "letter": "B",
        "text": "Google Cloud Memorystore for Memcached"
      },
      {
        "letter": "C",
        "text": "Cloud Interconnect Dedicated 10 Gbps"
      },
      {
        "letter": "D",
        "text": "Vertex AI Model Garden y Generative AI Studio"
      }
    ],
    "correct": "D",
    "explanation": "Vertex AI Model Garden ofrece una biblioteca completa y seleccionada de modelos fundacionales propios de Google (como Gemini e Imagen), modelos de código abierto y modelos de terceros, permitiendo probarlos, personalizarlos mediante ingeniería de prompts o ajuste fino (fine-tuning) y desplegarlos fácilmente en Generative AI Studio.",
    "distractors": {
      "B": "Memorystore es una caché en RAM para datos de clave-valor, no un catálogo de modelos de IA.",
      "C": "Cloud Interconnect es conectividad de red física privada, no software de IA generativa.",
      "A": "Discos duros HDD en VMs básicas no ofrecen modelos fundacionales preentrenados ni capacidad para ejecutar grandes modelos de lenguaje."
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
        "text": "Mediante las certificaciones de cumplimiento ISO 27001 y SOC 2 y las cláusulas contractuales de tratamiento de datos, que auditan de forma independiente los controles de seguridad de la plataforma."
      },
      {
        "letter": "B",
        "text": "A través de los 7 Principios de IA de Google (Google AI Principles) y prácticas de IA Responsable, que guían el desarrollo de tecnologías de IA socialmente beneficiosas, seguras, que eviten sesgos injustos y protejan la privacidad."
      },
      {
        "letter": "C",
        "text": "A través de las herramientas técnicas de Vertex AI, como los filtros de seguridad configurables, Model Garden y las tarjetas de modelo, que bloquean automáticamente cualquier respuesta sesgada o dañina."
      },
      {
        "letter": "D",
        "text": "Delegando la decisión ética en cada cliente mediante el modelo de responsabilidad compartida, en el que Google aporta la infraestructura y el cliente firma un código de conducta propio antes de usar los modelos."
      }
    ],
    "correct": "B",
    "explanation": "Google se rige formalmente por sus Principios de IA publicados en 2018, los cuales establecen que la IA debe ser socialmente beneficiosa, evitar sesgos injustos, construirse y probarse para ser segura, rendir cuentas a las personas y respetar la privacidad de los datos.",
    "distractors": {
      "C": "Esas funciones ayudan a aplicar los principios en un proyecto concreto, pero son características de producto, no el compromiso ético formal de la compañía, y ningún filtro garantiza la ausencia de sesgos injustos.",
      "D": "Los Principios de IA son un compromiso público y propio de Google que condiciona qué tecnología desarrolla y qué usos rechaza: no es una obligación que se transfiera al cliente ni depende de que este firme nada.",
      "A": "Esas certificaciones acreditan los controles de seguridad y de tratamiento de datos de la infraestructura, pero no dicen nada sobre equidad, sesgos ni beneficio social, que es lo que exige la junta directiva."
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
        "text": "Google Cloud exige que todo prompt que contenga datos personales pase antes por Sensitive Data Protection, porque de lo contrario las entradas se incorporan automáticamente al conjunto de entrenamiento del modelo base."
      },
      {
        "letter": "B",
        "text": "Los prompts del banco pasan a ser propiedad conjunta de Google y del cliente durante el periodo de retención de registros, y Google puede reutilizarlos para mejorar el servicio siempre que estén previamente anonimizados."
      },
      {
        "letter": "C",
        "text": "Los datos y prompts del cliente son de su exclusiva propiedad; Google Cloud nunca utiliza los datos ni las entradas del cliente para entrenar o mejorar sus modelos fundacionales de uso general sin consentimiento explícito."
      },
      {
        "letter": "D",
        "text": "El compromiso solo aplica si el banco despliega el modelo tras un perímetro de VPC Service Controls; al usar las APIs públicas de Gemini los prompts sí se emplean para reentrenar los modelos fundacionales."
      }
    ],
    "correct": "C",
    "explanation": "Bajo las políticas de gobernanza y privacidad de Google Cloud, los clientes retienen el control total y la propiedad de sus datos y prompts. Los datos confidenciales empresariales utilizados con Vertex AI y Gemini no se utilizan para entrenar los modelos base compartidos de Google.",
    "distractors": {
      "A": "La inspección con Sensitive Data Protection es una buena práctica opcional del cliente; el compromiso contractual de no entrenar con sus datos no depende de que se active.",
      "D": "VPC Service Controls añade aislamiento de red frente a la exfiltración, pero la garantía de gobernanza de datos aplica al servicio con independencia de esa configuración.",
      "B": "No existe propiedad conjunta de los datos: el cliente conserva la propiedad exclusiva y Google no reutiliza sus entradas para mejorar los modelos, ni siquiera anonimizadas."
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
        "text": "Cloud Pub/Sub (ingesta) -> Cloud Dataflow (procesamiento streaming) -> BigQuery (data warehouse analítico) -> Looker / Looker Studio (visualización de negocio)"
      },
      {
        "letter": "B",
        "text": "Cloud Dataflow (ingesta) -> Cloud Pub/Sub (procesamiento streaming) -> Looker Studio (data warehouse analítico) -> BigQuery (visualización de negocio)"
      },
      {
        "letter": "C",
        "text": "Cloud Pub/Sub (ingesta) -> Cloud Dataproc con Spark por lotes (procesamiento) -> Cloud Bigtable (data warehouse analítico) -> Looker Studio (visualización)"
      },
      {
        "letter": "D",
        "text": "Cloud Storage (ingesta de archivos) -> Cloud Composer (orquestación por lotes) -> BigQuery (data warehouse analítico) -> Looker Studio (visualización de negocio)"
      }
    ],
    "correct": "A",
    "explanation": "La arquitectura canónica de referencia para analítica de datos en tiempo real en Google Cloud es: Cloud Pub/Sub para ingesta desacoplada masiva -> Cloud Dataflow para transformación y enriquecimiento en streaming -> BigQuery para almacenamiento analítico y consultas SQL de alto rendimiento -> Looker para gobierno semántico y tableros de control ejecutivos.",
    "distractors": {
      "B": "Invierte los papeles de la cadena: Pub/Sub es la capa de mensajería de ingesta y BigQuery el almacén analítico, no la herramienta de visualización.",
      "D": "Es la arquitectura por lotes clásica: no cumple el requisito de ingesta continua de eventos ni el de transformación en tiempo real.",
      "C": "Dataproc con Spark por lotes no procesa el flujo continuo de viajes, y Bigtable es NoSQL de baja latencia sin el SQL analítico que exige el almacén."
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
        "text": "Descuentos por Compromiso de Uso (Committed Use Discounts - CUDs por 1 o 3 años)"
      },
      {
        "letter": "B",
        "text": "Descuentos por Uso Sostenido (SUDs) aplicados de forma automática y sin compromiso"
      },
      {
        "letter": "C",
        "text": "Instancias Spot (Spot VMs) con descuentos de hasta el 91% sobre el precio"
      },
      {
        "letter": "D",
        "text": "Reservas de capacidad de Compute Engine adquiridas en una zona determinada"
      }
    ],
    "correct": "A",
    "explanation": "Los Committed Use Discounts (CUDs) proporcionan descuentos sustanciales (hasta 57% o 70%) para cargas de trabajo predecibles y de estado constante a cambio de comprometerse a pagar por un nivel mínimo de recursos de cómputo (vCPUs/RAM o gasto financiero) durante un plazo de 1 o 3 años.",
    "distractors": {
      "B": "Los SUDs se aplican solos y sin compromiso, pero su descuento máximo ronda el 20-30%: no alcanzan el 57-70% que el escenario pide a cambio de un compromiso contractual.",
      "D": "Una reserva garantiza la disponibilidad de capacidad en la zona y se factura a precio bajo demanda: no aporta descuento por sí misma salvo que se combine con un CUD.",
      "C": "Las Spot VMs pueden ser interrumpidas por Compute Engine en cualquier momento con 30 segundos de aviso: son inviables para una base de datos central que opera 24/7."
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
        "text": "Descuentos por Compromiso de Uso (Committed Use Discounts)"
      },
      {
        "letter": "B",
        "text": "Descuentos por Uso Sostenido (Sustained Use Discounts - SUDs)"
      },
      {
        "letter": "C",
        "text": "Descuentos por volumen negociados en contrato empresarial"
      },
      {
        "letter": "D",
        "text": "Créditos por incumplimiento del SLA de Compute Engine"
      }
    ],
    "correct": "B",
    "explanation": "Los Sustained Use Discounts (SUDs) son descuentos automáticos aplicados por Compute Engine cuando una instancia de VM (de familias compatibles como N1/N2) se ejecuta durante más del 25% de un mes de facturación, incrementando el descuento conforme mayor porcentaje del mes esté activa la máquina, sin requerir ningún compromiso previo por parte del cliente.",
    "distractors": {
      "A": "Los CUDs exigen firmar un compromiso previo de 1 o 3 años, y el escenario dice expresamente que el cliente no firmó ningún contrato de compromiso a largo plazo.",
      "D": "Los créditos de SLA compensan periodos de indisponibilidad del servicio: se abonan por incumplimientos de Google, no por el uso continuo que hace el cliente de sus VMs.",
      "C": "Un descuento por volumen es una condición comercial negociada caso por caso, no un descuento automático que Compute Engine aplique en la factura por mantener las VMs encendidas."
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
        "text": "Desactivar la consola de administración"
      },
      {
        "letter": "B",
        "text": "Contratar un auditor externo para revisar manualmente cada servidor una vez cada cinco años"
      },
      {
        "letter": "C",
        "text": "Google Cloud Recommender (Recomendador de Google Cloud)"
      },
      {
        "letter": "D",
        "text": "Cloud Interconnect"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Recommender utiliza análisis heurístico e inteligencia artificial para proporcionar recomendaciones automatizadas y personalizadas sobre reducción de costos (redimensionamiento de VMs, eliminación de discos ociosos), seguridad (reducción de permisos IAM excesivos) y rendimiento en la nube.",
    "distractors": {
      "B": "Las revisiones manuales quinquenales son obsoletas y no detectan el desperdicio dinámico continuo.",
      "A": "Desactivar la consola impide la gestión de la infraestructura.",
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
        "text": "Cloud Deployment Manager con plantillas de Jinja y Python, hoy en modo de mantenimiento"
      },
      {
        "letter": "B",
        "text": "Infraestructura como Código (IaC) utilizando Terraform con el proveedor oficial de Google Cloud"
      },
      {
        "letter": "C",
        "text": "Scripts de `gcloud` ejecutados en Cloud Build que crean los recursos de cada entorno"
      },
      {
        "letter": "D",
        "text": "Config Connector sobre un clúster de GKE que reconcilia manifiestos de Kubernetes"
      }
    ],
    "correct": "B",
    "explanation": "Terraform (de HashiCorp) es la herramienta de Infraestructura como Código (IaC) líder y ampliamente recomendada en Google Cloud. Permite definir la infraestructura mediante código declarativo (HCL), asegurando reproducibilidad, consistencia, control de versiones y auditoría en la creación de recursos.",
    "distractors": {
      "A": "Deployment Manager es declarativo, pero está en mantenimiento y no incorpora los recursos nuevos de Google Cloud: dejó de ser la herramienta recomendada para infraestructura.",
      "D": "Config Connector necesita un clúster de GKE previo que actúe de reconciliador, por lo que no puede aprovisionar desde cero los propios clústeres de cada entorno de prueba.",
      "C": "Un guion de `gcloud` es imperativo: no mantiene un estado declarativo del entorno, no detecta desviaciones ni permite destruir los 50 entornos de forma reproducible."
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
        "text": "Publicar las contraseñas de las bases de datos en foros de soporte"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Nearline"
      },
      {
        "letter": "C",
        "text": "Compute Engine Preemptible VM"
      },
      {
        "letter": "D",
        "text": "Apigee API Management"
      }
    ],
    "correct": "D",
    "explanation": "Apigee es la plataforma líder de gestión de APIs de Google Cloud que permite a las empresas diseñar, asegurar, analizar, gobernar y monetizar APIs en entornos híbridos y multinube a gran escala.",
    "distractors": {
      "A": "Publicar contraseñas es una violación crítica de seguridad.",
      "B": "Cloud Storage Nearline almacena objetos, no gestiona ni asegura tráfico de APIs en tiempo real.",
      "C": "Preemptible VMs son máquinas virtuales con descuento, no una solución de gobernanza de APIs."
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
        "text": "El Cluster Autoscaler incrementa el número de réplicas de Pods de la aplicación cuando sube el uso de CPU y, si esas réplicas no caben, el Horizontal Pod Autoscaler agrega nuevas máquinas virtuales al grupo de instancias administrado que respalda el clúster."
      },
      {
        "letter": "B",
        "text": "El Vertical Pod Autoscaler eleva las peticiones de CPU y memoria de cada Pod existente durante el pico y el Cluster Autoscaler reemplaza los nodos por tipos de máquina mayores, de modo que el sitio absorbe la promoción sin crear réplicas adicionales."
      },
      {
        "letter": "C",
        "text": "El HPA incrementa el número de réplicas de Pods de la aplicación basándose en el uso de CPU/memoria; y si los nodos existentes se quedan sin capacidad para alojar los nuevos Pods, el Cluster Autoscaler agrega automáticamente nuevas máquinas virtuales (nodos) al clúster."
      },
      {
        "letter": "D",
        "text": "El HPA incrementa el número de réplicas de Pods según el uso de CPU y, cuando los nodos se quedan sin capacidad, GKE mantiene los Pods nuevos en estado pendiente hasta que pase el pico, porque el tamaño del grupo de nodos se fija manualmente al crear el clúster."
      }
    ],
    "correct": "C",
    "explanation": "En GKE, el escalado opera en dos niveles: el HPA ajusta dinámicamente el número de Pods según la carga de trabajo de la aplicación, mientras que el Cluster Autoscaler ajusta automáticamente el número de nodos de cómputo subyacentes cuando hay Pods en estado pendiente por falta de capacidad.",
    "distractors": {
      "B": "El VPA redimensiona Pods y los reinicia para aplicarlo, por lo que no aporta capacidad concurrente inmediata; ante un pico de usuarios lo que hace falta es escalar horizontalmente.",
      "A": "Invierte las responsabilidades: el HPA ajusta réplicas de Pods y el Cluster Autoscaler ajusta nodos, nunca al revés.",
      "D": "El tamaño del grupo de nodos no es fijo: el Cluster Autoscaler agrega nodos automáticamente cuando hay Pods pendientes por falta de capacidad."
    },
    "officialDocUrl": "https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler",
    "blockId": "BLOCK-3",
    "reservaCiega": true
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
        "text": "Guardar los archivos de claves JSON de la Service Account como un Secret de Kubernetes cifrado dentro del contenedor y referenciarlo desde el Pod vía variable de entorno, rotando las credenciales cada 90 días."
      },
      {
        "letter": "B",
        "text": "Habilitar Workload Identity en GKE para vincular de forma segura la Kubernetes Service Account (KSA) del Pod con una Google Service Account (GSA) de IAM, eliminando por completo el uso de claves de servicio en archivos JSON."
      },
      {
        "letter": "C",
        "text": "Asignar el rol roles/storage.objectViewer a la cuenta de servicio de los nodos de Compute Engine, de modo que cualquier Pod del clúster obtenga credenciales heredadas del servidor de metadatos para leer los archivos, sin usar claves de Service Account."
      },
      {
        "letter": "D",
        "text": "Guardar los archivos de claves de la Service Account en Secret Manager y recuperarlos desde el Pod en GKE al arrancar mediante la API, de modo que las credenciales no queden escritas en la imagen del contenedor ni en el repositorio de código."
      }
    ],
    "correct": "B",
    "explanation": "Workload Identity es la forma recomendada y más segura para que las cargas de trabajo en GKE accedan a los servicios de Google Cloud (Cloud Storage, BigQuery, Secret Manager), vinculando cuentas de Kubernetes con cuentas de servicio de IAM sin necesidad de generar ni rotar claves JSON de servicio de larga duración.",
    "distractors": {
      "C": "Concede el permiso a todos los Pods que se ejecuten en el nodo, un alcance de grupo cuando el requisito es por carga de trabajo: cualquier contenedor comprometido en ese nodo accedería al bucket privado con la misma identidad.",
      "D": "Secret Manager protege la clave en reposo, pero el Pod necesita igualmente una identidad para leer el secreto y sigue existiendo una credencial estática de larga duración en circulación: traslada el problema en lugar de eliminarlo.",
      "A": "La clave de larga duración sigue existiendo dentro del clúster y puede leerla cualquiera con acceso al espacio de nombres o extraerse desde el contenedor comprometido: la práctica recomendada es eliminar la clave, no guardarla mejor."
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
        "text": "Google Fonts API"
      },
      {
        "letter": "B",
        "text": "Compute Engine Preemptible Instances"
      },
      {
        "letter": "C",
        "text": "Cloud DNS"
      },
      {
        "letter": "D",
        "text": "Binary Authorization"
      }
    ],
    "correct": "D",
    "explanation": "Binary Authorization es un control de seguridad en tiempo de despliegue que garantiza que solo las imágenes de contenedores confiables y verificadas mediante atestaciones criptográficas (firmas) puedan desplegarse en entornos de producción en GKE y Cloud Run.",
    "distractors": {
      "A": "Google Fonts sirve tipografías web.",
      "C": "Cloud DNS resuelve nombres de dominio.",
      "B": "Preemptible Instances son máquinas virtuales temporales de cómputo con descuento."
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
        "text": "(1) Apigee (para validar claves de API y tokens JWT con latencia mínima entre microservicios); (2) Cloud Endpoints (para el portal de desarrolladores, cuotas de facturación y monetización)"
      },
      {
        "letter": "B",
        "text": "(1) Cloud Endpoints (para la validación ligera de JWT entre microservicios); (2) API Gateway (para exponer las APIs a socios con portal de desarrolladores y monetización)"
      },
      {
        "letter": "C",
        "text": "(1) Cloud Endpoints (para protección y validación ligera interna de APIs); (2) Apigee (para gestión integral de APIs empresariales, monetización y ecosistemas de socios externos)"
      },
      {
        "letter": "D",
        "text": "(1) Cloud Endpoints (para la validación ligera de JWT interna); (2) Cloud Armor con reglas WAF y limitación de peticiones por socio comercial en el balanceador externo"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Endpoints es un sistema de gestión de APIs ligero integrado mediante un proxy Nginx (ESP) ideal para microservicios internos en Google Cloud que requieren autenticación rápida JWT. Apigee es una plataforma empresarial completa para transformar, gobernar, monetizar y exponer APIs a desarrolladores externos y ecosistemas comerciales.",
    "distractors": {
      "B": "API Gateway es una pasarela serverless administrada para APIs propias: no incluye portal de desarrolladores, analítica de negocio ni monetización para un ecosistema de socios.",
      "A": "Asigna cada producto al caso contrario: Apigee es la plataforma empresarial con portal y monetización, y Cloud Endpoints es el proxy ligero para microservicios internos.",
      "D": "Cloud Armor es seguridad perimetral: filtra y limita tráfico, pero no gestiona el ciclo de vida de las APIs, ni el portal, ni las cuotas de facturación de los socios."
    },
    "officialDocUrl": "https://cloud.google.com/endpoints/docs",
    "blockId": "BLOCK-3",
    "reservaCiega": true
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
        "text": "Despliegue estático manual en cintas magnéticas"
      },
      {
        "letter": "B",
        "text": "Despliegue Destructivo 'Big Bang' sin pruebas"
      },
      {
        "letter": "C",
        "text": "Despliegue Canario (Canary Deployment)"
      },
      {
        "letter": "D",
        "text": "Apagado total de los servidores durante una semana"
      }
    ],
    "correct": "C",
    "explanation": "Un Despliegue Canario (Canary Deployment) introduce una nueva versión de software exponiéndola progresivamente a un subconjunto pequeño de usuarios reales (ej. 5%). Esto permite validar el rendimiento y estabilidad en producción real minimizando el impacto si surge algún defecto antes de desplegar al 100%.",
    "distractors": {
      "B": "El despliegue 'Big Bang' actualiza el 100% de golpe, con altísimo riesgo de fallos catastróficos para el negocio.",
      "D": "Apagar el servicio detiene las ventas de la empresa.",
      "A": "Las cintas magnéticas son medios de almacenamiento de respaldo pasivo offline."
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
        "text": "(1) VPC Network Peering entre los proyectos de cada departamento; (2) Shared VPC con un proyecto Host compartido por las dos organizaciones"
      },
      {
        "letter": "B",
        "text": "(1) Shared VPC (VPC Compartida con Proyecto Host y Proyectos de Servicio); (2) VPC Network Peering (Emparejamiento de redes VPC)"
      },
      {
        "letter": "C",
        "text": "(1) Shared VPC con proyecto Host y proyectos de servicio; (2) Private Service Connect publicando el servicio de la otra empresa con un endpoint"
      },
      {
        "letter": "D",
        "text": "(1) VPC Network Peering entre los proyectos departamentales; (2) Cloud Interconnect dedicado de 10 Gbps contratado entre ambas organizaciones"
      }
    ],
    "correct": "B",
    "explanation": "Shared VPC permite a una organización centralizada gestionar la red en un proyecto Host y delegar la creación de recursos (como VMs en subredes específicas) a proyectos de servicio departamentales. VPC Network Peering conecta dos VPCs distintas de forma bidireccional permitiendo conectividad IP privada con baja latencia sin intermediarios.",
    "distractors": {
      "C": "Private Service Connect expone un servicio concreto a través de un endpoint privado, no interconecta las dos redes: no habría alcance IP completo entre las VPCs, que es lo que pide el requisito (2).",
      "A": "Están intercambiadas: el emparejamiento conecta VPCs pero no permite administrar centralizadamente una única red troncal, y la VPC Compartida solo funciona dentro de una misma organización, nunca entre dos distintas.",
      "D": "Cloud Interconnect conecta un centro de datos on-premises con una VPC a través de una instalación de colocación: no es el mecanismo para unir dos redes VPC que ya están dentro de Google Cloud."
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
        "text": "Premium Tier entrega el tráfico por la red pública de Internet hasta el punto de presencia más cercano al usuario y Standard Tier lo transporta por la red privada de fibra de Google hasta la región de destino, y de ahí su mayor coste por gigabyte de salida."
      },
      {
        "letter": "B",
        "text": "Premium Tier incluye direcciones IP globales anycast y balanceo de carga global, mientras que Standard Tier transporta el tráfico por la misma red privada de Google pero limita el ancho de banda de salida de cada proyecto a una cuota mensual fija más económica."
      },
      {
        "letter": "C",
        "text": "Premium Tier transporta el tráfico a través de la red global de fibra privada de alta calidad de Google, ingresando y saliendo en el punto de presencia más cercano al usuario; Standard Tier utiliza la red pública de Internet convencional de otros proveedores a un costo menor."
      },
      {
        "letter": "D",
        "text": "Premium Tier cifra el tráfico de salida en tránsito con certificados administrados por Google mientras que Standard Tier lo envía sin cifrar, por lo que las cargas reguladas deben contratar el nivel superior para cumplir los requisitos de confidencialidad de los datos en movimiento."
      }
    ],
    "correct": "C",
    "explanation": "Premium Tier maximiza el rendimiento y la confiabilidad dirigiendo el tráfico a través de la red privada global de Google de baja latencia con enrutamiento de 'patata fría'. Standard Tier optimiza costos encaminando el tráfico a través de redes de tránsito de Internet públicas convencionales ('patata caliente').",
    "distractors": {
      "B": "Standard Tier no usa la red privada de Google: entrega el tráfico a proveedores de tránsito público, y la diferencia no es una cuota de ancho de banda sino la ruta que sigue el tráfico.",
      "A": "Invierte los dos niveles: es Premium el que viaja por la red privada de Google el mayor tramo posible, y Standard el que sale pronto hacia el tránsito público de Internet.",
      "D": "El cifrado en tránsito depende del protocolo de la aplicación y de la configuración TLS del balanceador, nunca del nivel de red contratado."
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
        "text": "Cloud Storage Nearline"
      },
      {
        "letter": "B",
        "text": "Cloud DNS"
      },
      {
        "letter": "C",
        "text": "Cloud Trace"
      },
      {
        "letter": "D",
        "text": "Un archivo 'hosts' estático copiado en cada computadora del mundo"
      }
    ],
    "correct": "B",
    "explanation": "Cloud DNS es un servicio de sistema de nombres de dominio (DNS) escalable, global y administrado que ofrece un SLA líder en la industria del 100% de disponibilidad, sirviendo consultas de nombres con baja latencia mediante la red perimetral Anycast de Google.",
    "distractors": {
      "C": "Cloud Trace es una herramienta de observabilidad para medir latencia de llamadas de microservicios.",
      "D": "El archivo hosts local no escala para resolver nombres en la Internet global.",
      "A": "Cloud Storage Nearline es para almacenamiento de objetos pasivos."
    },
    "officialDocUrl": "https://cloud.google.com/dns/docs",
    "blockId": "BLOCK-3",
    "reservaCiega": true
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
        "text": "Desplegar varias máquinas virtuales dentro de una única zona con discos SSD replicados entre ellas y copias de seguridad programadas cada hora hacia un bucket regional de Cloud Storage situado en esa misma región geográfica."
      },
      {
        "letter": "B",
        "text": "Desplegar instancias en múltiples zonas (Multi-Zone) dentro de una región para tolerar fallas de centros de datos individuales, y replicar la arquitectura en múltiples regiones (Multi-Region) para sobrevivir a fallas regionales catastróficas."
      },
      {
        "letter": "C",
        "text": "Distribuir las instancias entre varias zonas de una misma región y confiar en que un bucket de Cloud Storage multirregión conserve los datos, dado que las regiones de Google Cloud nunca llegan a fallar por completo a la vez."
      },
      {
        "letter": "D",
        "text": "Desplegar la aplicación en dos regiones geográficas distintas colocando una única instancia en cada una de ellas, ya que la separación entre regiones hace innecesaria cualquier redundancia adicional dentro de cada región."
      }
    ],
    "correct": "B",
    "explanation": "Las zonas de Google Cloud son dominios de fallo independientes con energía y redes aisladas dentro de una región; las regiones son áreas geográficas independientes separadas por cientos o miles de kilómetros. Una arquitectura multi-zona protege contra fallas locales de hardware, mientras que multi-región garantiza continuidad total ante desastres mayores.",
    "distractors": {
      "C": "El diseño multizona cubre el requisito (1), pero deja el (2) sin resolver: aunque los datos sobrevivan en el bucket multirregión, no hay cómputo desplegado fuera de la región y el servicio queda caído mientras dure la contingencia.",
      "D": "Una sola instancia por región no tolera el fallo de su zona ni del host físico, que son sucesos mucho más frecuentes que la caída de una región entera: se resuelve el requisito (2) pero se deja sin cubrir el (1).",
      "A": "Todas las instancias comparten el mismo dominio de fallo: una zona tiene energía y red propias, y si cae se pierden a la vez. Las copias horarias en la misma región tampoco sobreviven a la catástrofe regional del requisito (2)."
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
        "text": "A mayor nivel de abstracción (avanzando hacia Serverless), Google asume más responsabilidades de gestión de infraestructura (hardware, parches de SO, escalado y alta disponibilidad), permitiendo al equipo de TI enfocarse casi exclusivamente en la lógica de negocio y desarrollo de valor para el cliente."
      },
      {
        "letter": "B",
        "text": "A mayor nivel de abstracción el equipo de TI conserva las mismas responsabilidades operativas pero las ejecuta con herramientas de Google: sigue aplicando los parches del sistema operativo de los nodos, dimensionando la capacidad de cómputo y gestionando la alta disponibilidad, ahora desde la consola de Cloud Run."
      },
      {
        "letter": "C",
        "text": "A mayor nivel de abstracción Google asume la gestión de la infraestructura y también la responsabilidad sobre los datos, las identidades y la configuración de acceso de la aplicación, de modo que el equipo de TI deja de necesitar políticas de IAM ni control de accesos propios en Cloud Run."
      },
      {
        "letter": "D",
        "text": "A mayor nivel de abstracción se reduce la carga operativa pero también la libertad técnica: Cloud Run obliga a reescribir la aplicación en uno de los lenguajes admitidos por su entorno de ejecución estándar, por lo que el equipo invierte en migración lo que ahorra en administración."
      }
    ],
    "correct": "A",
    "explanation": "La transición hacia modelos serverless y servicios completamente administrados traslada el trabajo pesado no diferenciado (administración de hardware, sistemas operativos, clústeres y aprovisionamiento de capacidad) a Google Cloud, permitiendo a los ingenieros concentrar su tiempo e innovación en el producto y el negocio.",
    "distractors": {
      "D": "Confunde Cloud Run con App Engine Standard: Cloud Run ejecuta cualquier contenedor, con el lenguaje, la versión y las dependencias que elija el equipo.",
      "B": "En Cloud Run no existen nodos ni sistema operativo que parchear ni capacidad que dimensionar: esas tareas desaparecen del ámbito del cliente, no cambian de consola.",
      "C": "La responsabilidad compartida no se desplaza con la abstracción: los datos, las identidades y la configuración de acceso siguen siendo del cliente incluso en servicios serverless."
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
        "text": "Porque un ConfigMap de Kubernetes admite valores de texto de hasta un megabyte y Secret Manager permite guardar cargas binarias mayores con replicación automática en varias regiones de Google Cloud."
      },
      {
        "letter": "B",
        "text": "Porque Secret Manager rota por sí mismo la clave de la pasarela de pagos cada 90 días y actualiza el valor en el proveedor externo, de modo que la aplicación no necesita volver a desplegarse nunca."
      },
      {
        "letter": "C",
        "text": "Porque Secret Manager cifra el valor en reposo mientras que un Secret de Kubernetes se guarda sin cifrar en etcd, de modo que basta con mover la clave a un Secret en vez de a un ConfigMap del clúster."
      },
      {
        "letter": "D",
        "text": "Secret Manager cifra los secretos en reposo, controla el acceso mediante permisos granulares de IAM, mantiene un historial de versiones del secreto para rotación y registra cada acceso individual en Cloud Audit Logs."
      }
    ],
    "correct": "D",
    "explanation": "Secret Manager ofrece almacenamiento centralizado, seguro y auditable para datos sensibles. Permite rotar credenciales sin redesplegar código, restringir quién o qué servicio puede leer el secreto mediante IAM y auditar cada lectura en los registros de seguridad.",
    "distractors": {
      "A": "El tamaño y la replicación son características secundarias que no explican el riesgo: el motivo real es el control de acceso con IAM, el cifrado, el versionado para la rotación y el registro de cada lectura del secreto.",
      "C": "GKE cifra etcd en reposo y admite además el cifrado de secretos a nivel de aplicación con Cloud KMS, así que ese no es el diferencial: lo que aporta Secret Manager es IAM granular, versionado y auditoría por cada acceso.",
      "B": "Secret Manager programa avisos de rotación mediante Pub/Sub y conserva las versiones, pero no genera ni cambia la credencial en el sistema del proveedor de pagos: esa lógica debe implementarla el cliente."
    },
    "officialDocUrl": "https://cloud.google.com/secret-manager/docs",
    "blockId": "BLOCK-3",
    "reservaCiega": true
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
        "text": "Cloud Source Repositories (control de versiones privado del código) + Cloud Deploy (entrega continua con aprobaciones manuales por entorno) + Cloud Monitoring (alertas sobre el comportamiento del servicio en producción)."
      },
      {
        "letter": "B",
        "text": "Cloud Build (compilación de las imágenes) + Container Registry con análisis de vulnerabilidades bajo demanda + Cloud Armor con reglas WAF preconfiguradas que bloquean el despliegue de contenedores sin firmar en producción."
      },
      {
        "letter": "C",
        "text": "Assured Open Source Software (paquetes verificados por Google) + Artifact Registry (almacenamiento y análisis de artefactos) + Security Command Center Premium (detección de amenazas en contenedores durante la ejecución)."
      },
      {
        "letter": "D",
        "text": "Cloud Build (compilación hermética y atestaciones de procedencia) + Artifact Registry (escaneo de vulnerabilidades y almacenamiento seguro) + Binary Authorization (imposición de firmas antes del despliegue en producción)."
      }
    ],
    "correct": "D",
    "explanation": "El marco SLSA en Google Cloud se implementa integrando Cloud Build para generar código con procedencia verificable, Artifact Registry para auditar y escanear vulnerabilidades en artefactos, y Binary Authorization para bloquear el despliegue de cualquier contenedor que no cuente con las atestaciones requeridas.",
    "distractors": {
      "A": "Cubre el flujo de entrega y la observabilidad, pero no genera procedencia verificable de la compilación ni impide desplegar un artefacto sin atestaciones firmadas.",
      "B": "Cloud Armor filtra peticiones HTTP en el balanceador: no participa en el despliegue ni puede verificar firmas de imágenes, función que corresponde a Binary Authorization.",
      "C": "Detecta amenazas cuando el contenedor ya se está ejecutando: llega después del despliegue y no bloquea la promoción a producción de un artefacto sin atestación de procedencia."
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
        "text": "Compute Engine Spot Instances"
      },
      {
        "letter": "B",
        "text": "Revisar notas manuscritas en post-its de la oficina"
      },
      {
        "letter": "C",
        "text": "Cloud Asset Inventory"
      },
      {
        "letter": "D",
        "text": "Google Maps API"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Asset Inventory es un servicio de administración de metadatos que proporciona una vista de inventario en tiempo real e histórico de todos los recursos y políticas de IAM de Google Cloud a lo largo del tiempo, permitiendo exportar instantáneas y consultar estados pasados para cumplimiento normativo.",
    "distractors": {
      "A": "Spot Instances son máquinas virtuales temporales de bajo costo.",
      "B": "Las notas físicas no proporcionan trazabilidad verificable del estado de la infraestructura en la nube.",
      "D": "Google Maps proporciona cartografía y geolocalización."
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
        "text": "El panel de cumplimiento normativo (Compliance) del nivel Premium de Security Command Center"
      },
      {
        "letter": "B",
        "text": "Compliance Reports Manager en el Centro de Recursos de Seguridad y Cumplimiento de Google Cloud"
      },
      {
        "letter": "C",
        "text": "Assured Workloads, activando el paquete de controles regulatorios del sector financiero"
      },
      {
        "letter": "D",
        "text": "Los registros de Cloud Audit Logs del proyecto junto con los informes de Access Transparency"
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud ofrece a sus clientes acceso directo y bajo demanda a sus informes de auditoría independientes (SOC, ISO, PCI, FedRAMP, etc.) y certificados de cumplimiento a través del portal oficial Compliance Reports Manager.",
    "distractors": {
      "D": "Son registros de la actividad del propio cliente y de los accesos del personal de Google; no son certificaciones emitidas por un auditor externo independiente.",
      "C": "Assured Workloads impone residencia de datos y controles de personal sobre las cargas del cliente, pero no publica ni distribuye los certificados de auditoría.",
      "A": "Ese panel evalúa los recursos del propio cliente contra referencias como CIS o PCI; no entrega los informes de auditoría independientes sobre la infraestructura de Google."
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
        "text": "Access Transparency (visibilidad en logs del acceso de personal de Google) y Access Approval (requerimiento de aprobación explícita del cliente antes del acceso)."
      },
      {
        "letter": "B",
        "text": "Cloud Audit Logs de acceso a datos (registro de las lecturas sobre los datos del cliente) y Access Context Manager (definición de niveles de acceso según red y dispositivo)."
      },
      {
        "letter": "C",
        "text": "Access Transparency (visibilidad en registros del acceso del personal de Google) y VPC Service Controls (perímetro que impide la exfiltración de datos hacia proyectos externos)."
      },
      {
        "letter": "D",
        "text": "Assured Workloads (controles de residencia y de personal por región soberana) y Key Access Justifications (motivo declarado en cada descifrado con la clave del cliente)."
      }
    ],
    "correct": "A",
    "explanation": "Access Transparency proporciona registros casi en tiempo real cuando el personal de Google accede a los datos del cliente durante tareas de soporte o mantenimiento; y Access Approval permite a las empresas exigir una aprobación manual explícita antes de conceder cualquier acceso al personal de Google.",
    "distractors": {
      "B": "Los registros de acceso a datos capturan las acciones de las identidades del propio cliente, no los accesos del personal de soporte de Google, que solo aparecen en Access Transparency.",
      "C": "Acierta la primera mitad pero VPC Service Controls define un perímetro contra la exfiltración: no somete a aprobación explícita del banco cada acceso del ingeniero de Google.",
      "D": "Key Access Justifications actúa sobre las solicitudes de uso de claves de cifrado externas, no sobre el acceso de un ingeniero de soporte a los datos durante un ticket."
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
        "text": "En los Buckets de Registros (Log Buckets como `_Default` y `_Required` o buckets personalizados) de Cloud Logging, ajustando el periodo de retención de días según las políticas de la empresa."
      },
      {
        "letter": "B",
        "text": "En un sumidero (Log Sink) que la empresa exporta a un bucket `logs-archivados` de Cloud Storage, con una regla `condition.age` de ciclo de vida de 400 y 30 días, ajustando la retención fuera de Cloud Logging."
      },
      {
        "letter": "C",
        "text": "En las reglas de vencimiento de tablas particionadas de BigQuery, con una expiración `partition_expiration_days` de 400 o 30 días según el registro que la empresa enruta desde Cloud Logging, simulando la retención."
      },
      {
        "letter": "D",
        "text": "En las políticas de la organización (`cloudresourcemanager.googleapis.com`) de Resource Manager, sobre `folders/FOLDER_ID`, fijando para la empresa una retención mínima de registros de Cloud Logging."
      }
    ],
    "correct": "A",
    "explanation": "Cloud Logging almacena los registros en Log Buckets (`_Required`, `_Default` o personalizados). Los administradores pueden definir reglas de retención personalizadas (desde 1 día hasta varios años) para cumplir con requisitos de gobernanza y optimizar costos de almacenamiento.",
    "distractors": {
      "B": "Recurso correcto pero punto de anclaje equivocado: el ciclo de vida rige la copia exportada en Cloud Storage y no altera la retención de los registros dentro de Cloud Logging.",
      "C": "Configura la retención del destino analítico, no la de Cloud Logging: los registros seguirían con la retención predeterminada en sus buckets de registros de origen.",
      "D": "Las Organization Policies imponen restricciones sobre la configuración de recursos; no existe una restricción que fije periodos de retención de registros por tipo de log."
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
        "text": "El agente heredado de Cloud Monitoring basado en collectd en cada máquina virtual"
      },
      {
        "letter": "B",
        "text": "El Guest Environment preinstalado en las imágenes públicas de Compute Engine"
      },
      {
        "letter": "C",
        "text": "El agente heredado de Cloud Logging basado en fluentd, desplegado en las mismas máquinas virtuales"
      },
      {
        "letter": "D",
        "text": "Google Cloud Ops Agent (el agente unificado para métricas de SO y recopilación de logs)"
      }
    ],
    "correct": "D",
    "explanation": "El Ops Agent de Google Cloud es el agente principal para recopilar telemetría de máquinas virtuales en Compute Engine y entornos híbridos, combinando la captura de métricas del sistema operativo (RAM, disco, procesos) y la transmisión continua de registros hacia Cloud Logging y Cloud Monitoring.",
    "distractors": {
      "A": "El agente de monitoreo heredado recoge métricas pero no envía registros, por lo que no cubre syslog ni los logs de Apache o Nginx que pide el equipo.",
      "C": "El agente de registros heredado transmite logs pero no métricas de memoria, disco ni procesos, y no es el agente unificado que sustituye a ambos.",
      "B": "El entorno invitado integra la VM con la plataforma (metadatos, claves SSH, red); no recopila ni exporta métricas del sistema operativo ni registros."
    },
    "officialDocUrl": "https://cloud.google.com/stackdriver/docs/solutions/ops-agent",
    "blockId": "BLOCK-3",
    "reservaCiega": true
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
        "text": "Las políticas de la organización (Organization Policies), que aplican restricciones de plataforma sobre los recursos permitidos en cada carpeta y proyecto de la jerarquía."
      },
      {
        "letter": "B",
        "text": "Condiciones de IAM (IAM Conditions), que permiten definir expresiones condicionales basadas en atributos como fecha/hora, recurso de destino y atributos de red."
      },
      {
        "letter": "C",
        "text": "Los niveles de acceso de Access Context Manager aplicados con VPC Service Controls sobre el perímetro del proyecto de producción para filtrar las solicitudes por dirección IP."
      },
      {
        "letter": "D",
        "text": "La suplantación de cuentas de servicio con el rol de creador de tokens, que emite credenciales de corta duración durante la sesión interactiva del ingeniero de guardia."
      }
    ],
    "correct": "B",
    "explanation": "IAM Conditions permite definir y aplicar políticas de control de acceso condicionales y temporales basadas en atributos como horarios específicos, fechas de expiración, nombres de recursos o características de la solicitud, reforzando el principio de menor privilegio.",
    "distractors": {
      "A": "Restringen qué configuraciones de recursos pueden crearse en la jerarquía, no quien puede actuar ni en qué franja horaria: no conceden ni acotan permisos de una identidad.",
      "C": "Actúa en el perímetro del servicio y por atributos de la solicitud, pero no concede el rol administrativo temporal ni permite acotarlo a la ventana horaria del turno.",
      "D": "Limita la vida del token pero no expresa condiciones: no restringe el acceso a la franja de 08:00 a 16:00 ni exige que la solicitud llegue desde una IP corporativa."
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
        "text": "Genera tokens de acceso temporales de corta duración (ej. 1 hora), elimina el riesgo de robo de archivos de claves estáticas JSON y registra en Cloud Audit Logs exactamente qué usuario humano suplantó a la cuenta de servicio."
      },
      {
        "letter": "B",
        "text": "Permite conceder al desarrollador el rol de Propietario (Owner) del proyecto mientras dure la tarea administrativa, de modo que no necesite ninguna clave JSON y Google Cloud registre sus acciones en los registros de auditoría de actividad de administrador."
      },
      {
        "letter": "C",
        "text": "Permite descargar una clave JSON de la cuenta de servicio con una fecha de caducidad de una hora escrita en el propio archivo, de forma que la credencial deje de funcionar al terminar la sesión interactiva del desarrollador."
      },
      {
        "letter": "D",
        "text": "Cifra el archivo de clave JSON de la cuenta de servicio con Cloud KMS antes de entregarlo al desarrollador, de modo que solo pueda descifrarlo mientras conserve el rol de creador de tokens sobre esa cuenta."
      }
    ],
    "correct": "A",
    "explanation": "La suplantación de cuentas de servicio (Service Account Impersonation) permite a usuarios autenticados generar credenciales efímeras de corta vida para actuar en nombre de una Service Account, eliminando el riesgo de filtración de claves JSON privadas y manteniendo una trazabilidad forense completa de la identidad humana responsable.",
    "distractors": {
      "C": "Las claves JSON de cuenta de servicio no tienen fecha de caducidad: siguen siendo válidas hasta que alguien las elimina o inhabilita, que es el riesgo que se pretende evitar.",
      "B": "Elimina la clave pero vulnera el privilegio mínimo: concede permisos sobre todos los servicios del proyecto en lugar de acotar el acceso a la cuenta de servicio necesaria.",
      "D": "Protege la clave en reposo pero sigue existiendo una credencial estática de larga duración: una vez descifrada puede copiarse y reutilizarse fuera de la sesión autorizada."
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
        "text": "Comprobaciones de tiempo de actividad (Uptime Checks en Cloud Monitoring)"
      },
      {
        "letter": "B",
        "text": "Las comprobaciones de estado (health checks) del balanceador de carga"
      },
      {
        "letter": "C",
        "text": "Un panel de Cloud Monitoring con la métrica de peticiones por región"
      },
      {
        "letter": "D",
        "text": "Cloud Trace con muestreo distribuido de las peticiones entrantes"
      }
    ],
    "correct": "A",
    "explanation": "Los Uptime Checks en Cloud Monitoring envían solicitudes periódicas desde servidores distribuidos globalmente hacia la URL pública de la aplicación para medir la disponibilidad, latencia y códigos de respuesta, disparando alertas de inmediato si el sitio se vuelve inalcanzable.",
    "distractors": {
      "C": "Un panel muestra el tráfico ya servido; si el portal deja de ser accesible desde una región, simplemente dejan de llegar peticiones que graficar.",
      "B": "El health check sondea los backends desde la red de Google para decidir a dónde enrutar; no mide la experiencia del usuario final desde varios continentes.",
      "D": "Cloud Trace descompone la latencia dentro de la aplicación para peticiones que sí llegaron; no comprueba la accesibilidad externa del sitio."
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
        "text": "El firewall de VPC no tiene estado, por lo que además de la regla de Ingress hay que crear una regla de Egress explícita que autorice el tráfico saliente desde el puerto TCP 443 hacia los rangos de origen de los clientes."
      },
      {
        "letter": "B",
        "text": "Las respuestas se permiten porque la regla implícita de Egress con prioridad 65535 autoriza todo el tráfico saliente; si se creara una regla que la anulara, el tráfico de retorno hacia los clientes dejaría de entregarse."
      },
      {
        "letter": "C",
        "text": "El tráfico de retorno se permite únicamente si la instancia lleva la misma etiqueta de red usada en la regla de Ingress y se habilita el seguimiento de conexiones en el servicio de backend del balanceador."
      },
      {
        "letter": "D",
        "text": "El firewall de VPC de Google Cloud tiene estado (stateful): si una conexión entrante (Ingress) es permitida, el tráfico de respuesta saliente correspondiente se permite automáticamente sin requerir una regla de Egress explícita."
      }
    ],
    "correct": "D",
    "explanation": "Las reglas de firewall de VPC de Google Cloud son 'con estado' (stateful). Cuando una conexión es permitida por una regla de Ingress o Egress, todos los paquetes de respuesta bidireccionales asociados a esa sesión TCP/UDP se autorizan de forma automática.",
    "distractors": {
      "A": "Las reglas de firewall de VPC sí son con estado: el seguimiento de conexiones autoriza automáticamente los paquetes de respuesta de una sesión permitida, de modo que esa regla de Egress adicional es innecesaria.",
      "C": "Las etiquetas de red solo seleccionan a qué instancias se aplica una regla, no gobiernan las respuestas, y no existe ningún interruptor de seguimiento de conexiones: el comportamiento con estado es inherente al firewall de VPC.",
      "B": "Mezcla dos mecanismos distintos: el tráfico de retorno de una conexión establecida lo autoriza el seguimiento de estado, con independencia de la regla implícita de salida, que solo gobierna las conexiones nuevas iniciadas por la VM."
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
        "text": "Implementar múltiples capas independientes y redundantes de controles de seguridad (seguridad física, hardware con chip Titan, cifrado por defecto, aislamiento de red VPC, IAM, WAF y auditoría) para que si una capa falla, las demás continúen protegiendo los activos."
      },
      {
        "letter": "B",
        "text": "Concentrar toda la inversión de seguridad en un único perímetro reforzado alrededor de la red corporativa, de modo que quien atraviese el cortafuegos y la VPN se considere de confianza dentro de la red interna y pueda alcanzar cualquier servicio sin nuevas comprobaciones."
      },
      {
        "letter": "C",
        "text": "Delegar íntegramente la seguridad en Google bajo el modelo de responsabilidad compartida, ya que al operar en la nube el cliente no configura identidades, reglas de firewall ni cifrado: cada capa de defensa viene aplicada de fabrica en todos los proyectos de la organización."
      },
      {
        "letter": "D",
        "text": "Aplicar el mismo control de seguridad de forma redundante en varias regiones geográficas, replicando idénticas reglas de firewall e idénticas políticas de IAM en cada región para que un fallo regional no deje desprotegida ninguna carga de trabajo de la empresa."
      }
    ],
    "correct": "A",
    "explanation": "La defensa en profundidad en Google Cloud asegura cada nivel del sistema: seguridad física de centros de datos, chips Titan en servidores propietarios, arranque seguro, cifrado automático en reposo y en tránsito, aislamiento de red, IAM granular y monitoreo continuo de amenazas.",
    "distractors": {
      "C": "Malinterpreta la responsabilidad compartida: Google asegura la infraestructura, pero IAM, las reglas de firewall y la configuración de los datos siguen siendo capas que el cliente debe construir.",
      "D": "Describe redundancia geográfica de un único control; la defensa en profundidad consiste en capas distintas y complementarias, no en repetir el mismo control en varios sitios.",
      "B": "Describe el modelo de castillo y foso, opuesto a la defensa en profundidad: una sola capa que, superada, concede confianza implícita a todo el tráfico interno."
    },
    "officialDocUrl": "https://cloud.google.com/security/overview/whitepaper",
    "blockId": "BLOCK-3",
    "reservaCiega": true
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
        "text": "Google Cloud puede analizar los datos del cliente de forma agregada y anonimizada para segmentar audiencias publicitarias, salvo que el cliente active la cláusula de exclusión del acuerdo de tratamiento de datos."
      },
      {
        "letter": "B",
        "text": "Los datos alojados en Google Cloud se rigen por la misma política de privacidad que los productos de consumo de Google, que permite personalizar anuncios a partir del contenido que almacena el usuario."
      },
      {
        "letter": "C",
        "text": "Google Cloud NO utiliza los datos de los clientes empresariales para fines publicitarios, no vende datos de clientes a terceros y el cliente mantiene la propiedad total y exclusiva de toda su información."
      },
      {
        "letter": "D",
        "text": "Google conserva derechos de uso sobre los datos del cliente mientras el personal de soporte necesite acceder a ellos para resolver una incidencia, y esos accesos no quedan registrados para el cliente."
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud mantiene un estricto compromiso de privacidad: los clientes son los únicos dueños de sus datos. Google procesa los datos únicamente de acuerdo con las instrucciones contractuales del cliente y nunca los utiliza para fines publicitarios ni los comercializa a terceros.",
    "distractors": {
      "A": "No existe tal cláusula de exclusión opcional: el compromiso de no usar los datos del cliente con fines publicitarios es incondicional y aplica por defecto.",
      "B": "Los servicios empresariales de Google Cloud se rigen por sus propios términos y por el acuerdo de tratamiento de datos, no por la política de los productos de consumo.",
      "D": "El acceso del personal de soporte es excepcional, se limita a la instrucción del cliente y queda registrado en Access Transparency; no transfiere derecho de uso alguno."
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
        "text": "Cifrar automáticamente todos los datos del cliente en reposo en los discos del centro de datos, sustituyendo a Cloud KMS en la generación, custodia y rotación periódica de las claves de cifrado de cada bucket y de cada disco persistente."
      },
      {
        "letter": "B",
        "text": "Aislar el tráfico de red entre los proyectos de distintos clientes dentro del centro de datos, aplicando las reglas de firewall de la VPC y los perímetros de VPC Service Controls directamente en el hardware de la tarjeta de red."
      },
      {
        "letter": "C",
        "text": "Establecer una raíz de confianza en hardware (Hardware Root of Trust) que verifica criptográficamente la integridad del firmware y del sistema de arranque del servidor físico, evitando la ejecución de software no autorizado o modificado maliciosamente."
      },
      {
        "letter": "D",
        "text": "Almacenar de forma inviolable las claves criptográficas de los clientes con certificación FIPS 140-2 nivel 3, ofreciendo el módulo de seguridad de hardware que las aplicaciones utilizan para firmar y descifrar datos en Google Cloud."
      }
    ],
    "correct": "C",
    "explanation": "El chip Titan de Google es una raíz de confianza de hardware diseñada a medida que valida la firma criptográfica del firmware de arranque en cada inicio del servidor, garantizando que ninguna máquina ejecute código de bajo nivel comprometido o manipulado físicamente.",
    "distractors": {
      "B": "El aislamiento entre inquilinos lo impone la pila de red virtualizada de Andromeda y las políticas de VPC; Titan actúa sobre el firmware del servidor, no sobre el plano de red.",
      "A": "El cifrado en reposo lo aplica la capa de almacenamiento con claves gestionadas por Cloud KMS: Titan no custodia claves de cliente, sino que valida la integridad del arranque del servidor.",
      "D": "Describe Cloud HSM, que es un servicio de custodia de claves que el cliente consume; Titan es un componente interno de la infraestructura sin interfaz para las aplicaciones del cliente."
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
        "text": "Gobernanza centralizada con jerarquía de recursos y Organization Policies, control de accesos IAM basado en el principio de menor privilegio con grupos y MFA, arquitectura Zero Trust con BeyondCorp, cifrado integral por defecto, observabilidad continua con Cloud Operations y cultura SRE con métricas SLI/SLO."
      },
      {
        "letter": "B",
        "text": "Conceder el rol de Editor a nivel de proyecto a cada equipo para agilizar la entrega, revisar manualmente los registros de auditoría una vez al trimestre, cifrar únicamente las bases de datos que contienen datos personales y fijar los objetivos de disponibilidad después de la primera incidencia grave del servicio."
      },
      {
        "letter": "C",
        "text": "Centralizar todos los recursos en un único proyecto de producción con una sola política de IAM para simplificar la gobernanza, sustituir la observabilidad de Cloud Operations por comprobaciones manuales del equipo de guardia y confiar la seguridad al perímetro de red de la VPC corporativa."
      },
      {
        "letter": "D",
        "text": "Aplicar los controles de seguridad solo en el momento del despliegue mediante una revisión de arquitectura previa a producción, delegar íntegramente el cifrado y la disponibilidad en Google por tratarse de servicios administrados y medir la excelencia operativa por el número de incidencias cerradas cada mes."
      }
    ],
    "correct": "A",
    "explanation": "La excelencia operativa y de seguridad en Google Cloud integra una sólida gobernanza de identidades (IAM y Zero Trust), guardarraíles de políticas de organización, cifrado integral, monitoreo y observabilidad proactiva con la suite de Cloud Operations y prácticas de Site Reliability Engineering (SRE).",
    "distractors": {
      "C": "Un único proyecto elimina el límite de aislamiento y amplía el radio de impacto, y confiar en el perímetro contradice el modelo Zero Trust que verifica cada acceso de forma explícita.",
      "D": "Convierte la seguridad en un control puntual en vez de continuo: sin evaluación permanente de la postura, cualquier cambio posterior al despliegue queda sin verificar.",
      "B": "Sustituye el privilegio mínimo por un rol básico amplio y la observabilidad continua por revisiones trimestrales reactivas, además de definir los objetivos de nivel de servicio a posteriori."
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
        "text": "Google opera centros de datos altamente eficientes con un PUE líder en la industria y ofrece herramientas como Carbon Footprint para medir y reducir las emisiones de carbono asociadas al uso de la nube."
      },
      {
        "letter": "B",
        "text": "Google Cloud compra créditos de carbono en nombre del cliente, de modo que las cargas migradas dejan de contabilizarse en el inventario de emisiones de alcance 3 de la empresa multinacional."
      },
      {
        "letter": "C",
        "text": "Google Cloud garantiza por contrato que cada una de sus regiones funciona con energía libre de carbono las 24 horas desde 2020, por lo que ninguna carga migrada genera ya emisión alguna."
      },
      {
        "letter": "D",
        "text": "Google Cloud entrega un certificado ambiental de su cadena de suministro que sustituye la obligación del cliente de medir y reportar el consumo energético de sus cargas en la nube."
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud es líder mundial en sostenibilidad, operando con energía 100% renovable coincidente y con la meta de funcionar con energía libre de carbono (CFE) 24/7 para 2030, además de proporcionar la herramienta Google Cloud Carbon Footprint a sus clientes.",
    "distractors": {
      "D": "Una certificación acredita el sistema de gestión ambiental del proveedor, pero no exime al cliente de medir sus propias emisiones ni le da la herramienta para hacerlo.",
      "B": "El consumo de nube sigue siendo alcance 3 para el cliente y debe reportarlo: Google reduce y compensa sus propias emisiones, no retira créditos a nombre de cada cliente.",
      "C": "La energía libre de carbono 24/7 es un objetivo declarado para 2030, no una garantía contractual vigente: el porcentaje de CFE varía hoy de una región a otra."
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
        "text": "Permite agrupar seis meses de cambios en un único paquete validado exhaustivamente por el equipo de calidad antes de publicarlo en la ventana programada del fin de semana."
      },
      {
        "letter": "B",
        "text": "Elimina la necesidad de mantener entornos de preproducción, porque las pruebas automatizadas se ejecutan directamente sobre la base de datos de producción del banco."
      },
      {
        "letter": "C",
        "text": "Permite realizar cambios pequeños, continuos y automatizados en producción, reduciendo el riesgo de fallos mayores y acelerando la resolución de defectos."
      },
      {
        "letter": "D",
        "text": "Transfiere al proveedor de nube la responsabilidad sobre los despliegues, de modo que sea Google quien decida cuándo publicar cada versión del software bancario en producción."
      }
    ],
    "correct": "C",
    "explanation": "La entrega continua (CI/CD) fragmenta las actualizaciones en cambios pequeños y frecuentes verificados mediante pruebas automáticas. Esto minimiza el radio de impacto de cualquier error y permite iterar con rapidez y alta confiabilidad.",
    "distractors": {
      "A": "Describe el modelo por lotes que causaba los fallos masivos: agrupar seis meses de cambios amplía el radio de impacto de cada error, que es justo lo contrario de la entrega continua.",
      "B": "La entrega continua se apoya en entornos previos y en pruebas automatizadas antes de producción; probar contra la base de datos productiva de un banco no es una práctica de CI/CD.",
      "D": "El calendario de despliegue sigue siendo del cliente: el modelo de responsabilidad compartida deja la publicación de la aplicación en manos del equipo, no del proveedor."
    },
    "officialDocUrl": "https://cloud.google.com/devops",
    "blockId": "BLOCK-4",
    "reservaCiega": true
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
        "text": "Definir Objetivos de Nivel de Servicio (SLOs) e Indicadores de Nivel de Servicio (SLIs) centrados en la experiencia del usuario (como latencia de checkout y éxito de transacciones) directamente correlacionados con los KPIs de ingresos."
      },
      {
        "letter": "B",
        "text": "Adoptar como métrica de referencia el Acuerdo de Nivel de Servicio (SLA) de disponibilidad que Google Cloud publica para cada producto y reportar a la dirección el crédito de servicio obtenido cuando se incumple."
      },
      {
        "letter": "C",
        "text": "Ampliar los paneles de Cloud Monitoring con más métricas de infraestructura (CPU, memoria, IOPS de disco y ancho de banda de red) de todas las máquinas virtuales y presentarlas al comité de dirección."
      },
      {
        "letter": "D",
        "text": "Elevar el objetivo de disponibilidad del 99.9 al 99.999 por ciento en toda la plataforma, asumiendo que cada nueve adicional se traduce de forma proporcional en una mejora de la tasa de conversión y del carrito abandonado."
      }
    ],
    "correct": "A",
    "explanation": "Alinear la ingeniería con el negocio requiere métricas que reflejen directamente la satisfacción y comportamiento del usuario final. Diseñar SLIs/SLOs alrededor de transacciones críticas permite entender cómo el rendimiento del sistema impacta las ventas y los objetivos comerciales.",
    "distractors": {
      "D": "Subir el objetivo global encarece la operación sin demostrar el vínculo con el negocio; la conversión no mejora de forma proporcional a los nueves de disponibilidad.",
      "B": "El SLA es el compromiso contractual del proveedor y su penalización asociada; mide el servicio de Google, no la experiencia del comprador ni la conversión.",
      "C": "Añade señales de causa, pero sigue midiendo el sistema en lugar del recorrido del cliente: el uptime del 99.9 por ciento ya era una métrica de ese tipo."
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
        "text": "Externalizar por completo la operación de la nueva plataforma de nube a un proveedor gestionado, de modo que los equipos de operaciones internos conserven sin cambios sus tareas actuales sobre el entorno físico heredado."
      },
      {
        "letter": "B",
        "text": "Imponer la migración por decreto ejecutivo con una única fecha límite y medir el desempeño de cada equipo por el número de servidores físicos apagados, sin comunicar qué papel tendrán en el modelo operativo futuro."
      },
      {
        "letter": "C",
        "text": "Constituir un equipo separado de ingenieros de nube contratados del exterior que opere la nueva plataforma en paralelo, dejando a los equipos tradicionales al cargo del entorno heredado hasta su extinción."
      },
      {
        "letter": "D",
        "text": "Implementar un plan estructurado de capacitación y re-especialización (re-skilling), comunicar los beneficios estratégicos y establecer un Centro de Excelencia en la Nube (CCoE) como guía colaborativa."
      }
    ],
    "correct": "D",
    "explanation": "La gestión exitosa del cambio organizacional requiere invertir en las personas a través de programas de desarrollo de habilidades (re-skilling), comunicación transparente y la creación de un CCoE que empodere a los equipos para adoptar nuevas responsabilidades de mayor valor.",
    "distractors": {
      "B": "Un mandato descendente sin comunicación ni plan de desarrollo profesional aumenta la resistencia en vez de reducirla; el indicador elegido premia el apagado de servidores, no la adopción de las nuevas herramientas.",
      "A": "Evita el conflicto en lugar de gestionarlo: no desarrolla ninguna capacidad interna, mantiene a los equipos en el modelo antiguo y confirma su temor a quedar fuera del futuro de la compañía.",
      "C": "Crea una organización de dos velocidades: los equipos tradicionales no se re-especializan, se refuerza el silo y la resistencia se consolida en lugar de resolverse mediante capacitación y colaboración."
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
        "text": "Adoptar una estrategia de Economía de APIs utilizando una plataforma de gestión de APIs (como Apigee) para empaquetar, asegurar y monetizar servicios de datos hacia socios externos."
      },
      {
        "letter": "B",
        "text": "Publicar cada mes un extracto del historial crediticio en un bucket de Cloud Storage con URLs firmadas para que cada Fintech descargue el fichero y lo cargue en su propio sistema."
      },
      {
        "letter": "C",
        "text": "Conceder a cada Fintech una réplica de lectura de la base de datos crediticia en Cloud SQL con credenciales de sólo lectura para que consulten las calificaciones directamente con SQL."
      },
      {
        "letter": "D",
        "text": "Crear un portal web con Vertex AI Search donde los analistas de cada Fintech busquen manualmente la calificación crediticia de cada solicitante antes de aprobarle un préstamo."
      }
    ],
    "correct": "A",
    "explanation": "La economía de APIs permite transformar los activos de datos y lógica de negocio existentes en productos digitales consumibles por terceros. Mediante plataformas como Apigee, las organizaciones gestionan la seguridad, cuotas, analítica y monetización de sus APIs.",
    "distractors": {
      "D": "Una consulta manual persona a persona no habilita la integración programática que las Fintech necesitan en sus procesos, y no genera un modelo de ingresos basado en el consumo de la API.",
      "C": "Expone el esquema y el conjunto entero de datos a terceros: sin capa de abstracción no hay control de cuotas, analítica de consumo ni un producto facturable, sólo acceso directo a la base.",
      "B": "Un fichero mensual no es una consulta en tiempo real, y al entregar el extracto completo se pierde el control de cuotas, la medición del consumo y cualquier posibilidad de monetizar por uso."
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
        "text": "Storage Transfer Service"
      },
      {
        "letter": "B",
        "text": "Escribir un script en Python en una VM individual y descargarlo manualmente por SSH"
      },
      {
        "letter": "C",
        "text": "Cloud Interconnect Dedicated"
      },
      {
        "letter": "D",
        "text": "Transfer Appliance físico"
      }
    ],
    "correct": "A",
    "explanation": "Storage Transfer Service es un servicio completamente administrado que permite transferir datos de forma rápida, segura y a gran escala desde otros proveedores de nube (como AWS S3 o Azure Blob), fuentes HTTP o centros de datos locales hacia Cloud Storage sin necesidad de configurar ni mantener servidores.",
    "distractors": {
      "B": "Los scripts manuales en VMs carecen de reintentos automáticos distribuidos, verificación de integridad MD5 y gestión de escala.",
      "C": "Cloud Interconnect es un enlace físico de telecomunicaciones, no un software administrado de sincronización de datos.",
      "D": "Transfer Appliance es un dispositivo de almacenamiento físico que se envía por mensajería, diseñado para transferencias de cientos de terabytes o petabytes cuando el ancho de banda de red es insuficiente."
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
        "text": "Storage Transfer Service (un servicio administrado que copia los datos por la red hacia Cloud Storage con reanudación automática y verificación de integridad de cada objeto transferido)."
      },
      {
        "letter": "B",
        "text": "Cloud Interconnect Dedicado (un enlace físico de 10 Gbps contratado hasta el punto de presencia de Google más cercano a la ubicación remota del centro de investigación geológica)."
      },
      {
        "letter": "C",
        "text": "Transfer Appliance (un dispositivo de hardware seguro y de alta capacidad que Google envía al cliente para cargar los datos localmente y luego enviarlo físicamente a un centro de datos de Google)."
      },
      {
        "letter": "D",
        "text": "Ejecutar `gcloud storage cp` con transferencias paralelas y composición de objetos desde varias estaciones de trabajo del centro de investigación para aprovechar al máximo el enlace."
      }
    ],
    "correct": "C",
    "explanation": "Transfer Appliance es un servidor de almacenamiento resistente y cifrado de alta capacidad que Google envía físicamente a las instalaciones del cliente para copiar petabytes de datos a través de la red local y transferirlos rápidamente a Cloud Storage.",
    "distractors": {
      "D": "El paralelismo aprovecha mejor el enlace disponible, pero no aumenta los 10 Mbps contratados: el cuello de botella es el ancho de banda, no el cliente.",
      "A": "Es una transferencia en línea: sigue limitada por los 10 Mbps del enlace del centro de investigación, por lo que no reduce los doce años estimados.",
      "B": "Aportaría ancho de banda, pero exige obra civil y presencia en un punto de presencia de Google, inviable en la ubicación remota y con plazos de meses."
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
        "text": "Otorgar el rol Storage Object Creator a allUsers sobre el bucket para que cualquier visitante pueda escribir su archivo."
      },
      {
        "letter": "B",
        "text": "Generar una URL firmada (Signed URL) con un límite de tiempo de expiración de 15 minutos que otorgue permisos temporales de escritura."
      },
      {
        "letter": "C",
        "text": "Subir la foto al servidor de la aplicación y replicarla después al bucket mediante una tarea programada durante la noche."
      },
      {
        "letter": "D",
        "text": "Crear una cuenta de servicio por cada usuario registrado y entregar su archivo de clave JSON al navegador del cliente."
      }
    ],
    "correct": "B",
    "explanation": "Las URLs firmadas (Signed URLs) otorgan acceso temporal y limitado (lectura o escritura) a un objeto específico de Cloud Storage a usuarios que no tienen credenciales de Google Cloud, expirando automáticamente tras el tiempo especificado.",
    "distractors": {
      "C": "Evita el requisito de subida directa: el archivo pasa por la capa de aplicación, que asume el tráfico y el almacenamiento temporal, y el enlace nunca expira.",
      "D": "Reparte credenciales de larga duración a clientes no confiables y no es administrable a escala; además la clave no caduca a los 15 minutos.",
      "A": "Concede escritura pública permanente sobre todo el bucket: no expira a los 15 minutos ni limita la ruta, y permite que cualquiera suba objetos arbitrarios."
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
        "text": "Reglas de ciclo de vida del bucket (Object Lifecycle)"
      },
      {
        "letter": "B",
        "text": "Política de retención con bloqueo del bucket (Bucket Lock)"
      },
      {
        "letter": "C",
        "text": "Réplica entre regiones con Storage Transfer Service"
      },
      {
        "letter": "D",
        "text": "Control de versiones de objetos (Object Versioning)"
      }
    ],
    "correct": "D",
    "explanation": "Object Versioning en Cloud Storage mantiene un historial de todas las versiones pasadas de un objeto cada vez que se sobrescribe o elimina, permitiendo listar, descargar o restaurar cualquier versión anterior en caso de error humano.",
    "distractors": {
      "A": "Las reglas de ciclo de vida cambian la clase de los objetos o los eliminan al cumplir una condición: gestionan el coste, no conservan las versiones anteriores de un fichero.",
      "B": "La política de retención impide borrar o sobrescribir el objeto hasta que expire el plazo: bloquea también las actualizaciones legítimas y no guarda un historial recuperable.",
      "C": "La réplica copia el estado actual del bucket, incluida la sobrescritura: el error se propaga al destino y no queda ninguna versión previa que restaurar."
    },
    "officialDocUrl": "https://cloud.google.com/storage/docs/object-versioning",
    "blockId": "BLOCK-4",
    "reservaCiega": true
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
        "text": "Cloud Storage Standard"
      },
      {
        "letter": "B",
        "text": "AlloyDB for PostgreSQL"
      },
      {
        "letter": "C",
        "text": "Cloud Dataprep"
      },
      {
        "letter": "D",
        "text": "Compute Engine con discos magnéticos estándar"
      }
    ],
    "correct": "B",
    "explanation": "AlloyDB for PostgreSQL es una base de datos relacional totalmente administrada y compatible con PostgreSQL, construida con una capa de almacenamiento desagregada inteligente y un motor columnar integrado que ofrece un rendimiento transaccional más de 4 veces superior al PostgreSQL estándar y analítica hasta 100 veces más rápida.",
    "distractors": {
      "A": "Cloud Storage es almacenamiento de objetos no relacional.",
      "C": "Cloud Dataprep es una herramienta gráfica para limpiar y transformar datos.",
      "D": "Discos magnéticos HDD estándar en VMs ofrecen el peor rendimiento de E/S posible para bases de datos transaccionales."
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
        "text": "Proyecto 1: Firestore en Modo Datastore (Datastore Mode); Proyecto 2: Firestore en Modo Nativo (Native Mode)"
      },
      {
        "letter": "B",
        "text": "Proyecto 1: Firestore en Modo Nativo; Proyecto 2: Firestore en Modo Nativo reescribiendo el backend heredado de Datastore"
      },
      {
        "letter": "C",
        "text": "Proyecto 1: Firestore en Modo Nativo (Native Mode); Proyecto 2: Firestore en Modo Datastore (Datastore Mode)"
      },
      {
        "letter": "D",
        "text": "Proyecto 1: Firestore en Modo Nativo (Native Mode); Proyecto 2: Cloud Bigtable por su alta concurrencia de escritura"
      }
    ],
    "correct": "C",
    "explanation": "El Modo Nativo de Firestore habilita todas las funciones avanzadas para aplicaciones cliente, como listeners en tiempo real y soporte sin conexión para móviles. El Modo Datastore optimiza el comportamiento para servidores backend que requieren compatibilidad con la API de Cloud Datastore y alta concurrencia de escritura sin funciones móviles.",
    "distractors": {
      "D": "Bigtable escala muy bien las escrituras, pero no es compatible con la API clásica de Datastore ni con su modelo de entidades y claves.",
      "A": "Invierte los modos: el Modo Datastore no ofrece listeners en tiempo real ni SDKs de cliente móvil, que es lo que necesita el proyecto 1.",
      "B": "Obliga a reescribir el backend heredado; el Modo Datastore existe precisamente para conservar la compatibilidad con esa API sin tocar el código."
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
        "text": "Consultas federadas de BigQuery (utilizando funciones como `EXTERNAL_QUERY` para consultar directamente Cloud SQL desde BigQuery)"
      },
      {
        "letter": "B",
        "text": "BigQuery Omni consultando in situ los datos de clientes en la instancia `cloudsql-postgres` de Cloud SQL for PostgreSQL."
      },
      {
        "letter": "C",
        "text": "Datastream replicando sin parar la base operativa cloudsql-facturas por completo hacia un conjunto de datos de BigQuery para análisis histórico."
      },
      {
        "letter": "D",
        "text": "Tablas externas de BigQuery sobre los ficheros que Cloud SQL exporta a gs://bucket-cloudsql/export en Cloud Storage."
      }
    ],
    "correct": "A",
    "explanation": "Las consultas federadas de BigQuery permiten enviar sentencias de consulta a fuentes de datos externas (como Cloud SQL, Spanner o Cloud Storage) y recibir los resultados directamente en BigQuery para unirlos con tablas internas sin mover ni duplicar los datos.",
    "distractors": {
      "C": "Copia la base de datos entera al almacén de forma continua, que es exactamente la canalización de replicación que el analista quiere evitar.",
      "D": "Requiere exportar antes los datos a ficheros: la consulta lee una instantánea en Cloud Storage, no la información en tiempo real de la base operativa.",
      "B": "BigQuery Omni consulta datos que residen en otras nubes públicas (Amazon S3 o Azure Blob Storage); no es el mecanismo para leer una instancia de Cloud SQL."
    },
    "officialDocUrl": "https://cloud.google.com/bigquery/docs/cloud-sql-federated-queries",
    "blockId": "BLOCK-4",
    "reservaCiega": true
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
        "text": "Mantener el modelo de precios bajo demanda y establecer una cuota personalizada de bytes escaneados por proyecto y por día para frenar las consultas más pesadas de los analistas de datos."
      },
      {
        "letter": "B",
        "text": "Configurar un presupuesto de Cloud Billing con alertas al 50, al 90 y al 100 por ciento del gasto previsto de analítica para que Finanzas reciba un aviso cuando BigQuery lo supere."
      },
      {
        "letter": "C",
        "text": "Migrar las tablas al almacenamiento a largo plazo de BigQuery y apoyarse en el nivel gratuito de un terabyte de consultas al mes para que el gasto de cómputo quede cubierto por esa franquicia."
      },
      {
        "letter": "D",
        "text": "Modelo basado en capacidad con las Ediciones de BigQuery (Standard, Enterprise o Enterprise Plus), que permite reservar una cantidad fija de slots de cómputo dedicados con costo mensual predecible."
      }
    ],
    "correct": "D",
    "explanation": "Las Ediciones de BigQuery (Standard, Enterprise, Enterprise Plus) ofrecen modelos basados en capacidad de procesamiento (slots), lo que garantiza costos fijos y predecibles para grandes organizaciones independientemente del volumen de datos escaneados en las consultas.",
    "distractors": {
      "C": "El descuento de almacenamiento a largo plazo abarata los datos en reposo y el nivel gratuito solo cubre un terabyte: el cómputo de las consultas pesadas se sigue facturando por bytes.",
      "A": "La cuota personalizada acota el gasto máximo diario y corta las consultas al alcanzarla, pero el importe real sigue variando con los bytes escaneados: no produce un coste mensual constante.",
      "B": "Un presupuesto notifica el gasto, no lo limita ni lo fija: la factura de BigQuery sigue dependiendo del volumen escaneado por los analistas cada mes."
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
        "text": "Apoyarse en la caché de resultados de BigQuery, que devuelve sin coste la respuesta de una consulta idéntica ya ejecutada antes sobre la tabla de transacciones de 100 millones de filas."
      },
      {
        "letter": "B",
        "text": "Programar una consulta que reescriba cada 5 minutos una tabla de resumen con las ventas diarias por región, sustituyendo por completo su contenido en cada una de las ejecuciones."
      },
      {
        "letter": "C",
        "text": "Agrupar la tabla de transacciones por la columna de región (clustering) para que el panel lea únicamente los bloques correspondientes a la región seleccionada en el filtro."
      },
      {
        "letter": "D",
        "text": "Una Vista Materializada (Materialized View), que almacena en caché de forma precalculada y periódica los resultados agregados y se actualiza automáticamente cuando cambian los datos subyacentes."
      }
    ],
    "correct": "D",
    "explanation": "Las Vistas Materializadas en BigQuery calculan y almacenan previamente los resultados de consultas agregadas complejas. Cuando se consultan, BigQuery lee solo los datos agregados ya procesados, reduciendo drásticamente la latencia y los bytes escaneados.",
    "distractors": {
      "A": "La caché de resultados se invalida en cuanto la tabla base recibe nuevas transacciones, algo que ocurre de forma continua entre los refrescos del panel.",
      "B": "Funciona, pero reprocesa las 100 millones de filas en cada ejecución; la vista materializada solo recalcula el incremento y no exige orquestación externa.",
      "C": "El clustering reduce lo escaneado por filtro, pero la suma diaria por región se vuelve a calcular íntegra en cada consulta del panel ejecutivo."
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
        "text": "Cloud Interconnect"
      },
      {
        "letter": "B",
        "text": "Compute Engine con scripts de web scraping en Python"
      },
      {
        "letter": "C",
        "text": "BigQuery Data Transfer Service"
      },
      {
        "letter": "D",
        "text": "Cloud Memorystore for Redis"
      }
    ],
    "correct": "C",
    "explanation": "BigQuery Data Transfer Service automatiza el movimiento programado y administrado de datos hacia BigQuery desde aplicaciones SaaS de Google (como Google Ads, Campaign Manager, YouTube) y fuentes externas (como Amazon S3 o Salesforce).",
    "distractors": {
      "D": "Memorystore es una caché en memoria RAM, no un servicio de ingesta de datos SaaS.",
      "A": "Cloud Interconnect es conectividad de red física para enlaces dedicados.",
      "B": "El scraping manual es frágil, viola términos de servicio y requiere mantenimiento continuo de código ante cambios de APIs."
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
        "text": "BigQuery GIS (Geographic Information Systems)"
      },
      {
        "letter": "B",
        "text": "BigQuery BI Engine para consultas aceleradas"
      },
      {
        "letter": "C",
        "text": "BigQuery ML con modelos de clustering k-means"
      },
      {
        "letter": "D",
        "text": "Google Maps Platform Distance Matrix API"
      }
    ],
    "correct": "A",
    "explanation": "BigQuery GIS combina la arquitectura serverless de BigQuery con soporte nativo para tipos de datos y funciones geoespaciales (como `ST_GEOGPOINT`, `ST_CONTAINS`, `ST_DISTANCE`), permitiendo analizar petabytes de datos espaciales y visualizarlos en herramientas como Looker Studio o BigQuery Geo Viz.",
    "distractors": {
      "C": "BigQuery ML entrena modelos con SQL y k-means agrupa por características numéricas, pero no interpreta polígonos ni calcula distancias geodésicas.",
      "D": "Distance Matrix calcula tiempos y distancias de viaje punto a punto por API; no analiza con SQL petabytes de trayectorias ya almacenadas.",
      "B": "BI Engine es una capa en memoria que acelera las consultas de los paneles; no aporta el tipo de dato GEOGRAPHY ni funciones espaciales como ST_CONTAINS."
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
        "text": "Cloud DNS"
      },
      {
        "letter": "B",
        "text": "Compute Engine Preemptible VM sin reinicio automático"
      },
      {
        "letter": "C",
        "text": "Cloud Composer (servicio administrado de Apache Airflow)"
      },
      {
        "letter": "D",
        "text": "Configurar una alarma en el teléfono móvil de un ingeniero para ejecutar los pasos manualmente cada madrugada"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Composer es un servicio de orquestación de flujos de trabajo completamente administrado basado en Apache Airflow. Permite crear, programar y monitorear pipelines complejos que abarcan múltiples servicios de nube y entornos locales mediante código Python (DAGs).",
    "distractors": {
      "B": "Una VM preemptible puede ser apagada en cualquier momento, interrumpiendo el flujo sin control de dependencias.",
      "D": "La ejecución manual nocturna no es confiable, genera agotamiento en el personal y causa retrasos operativos.",
      "A": "Cloud DNS gestiona nombres de dominio, no orquesta tareas de datos."
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
        "text": "Reescribir manualmente los archivos CSV en el Bloc de Notas de Windows"
      },
      {
        "letter": "B",
        "text": "Cloud Shell ejecutando comandos binarios en ensamblador"
      },
      {
        "letter": "C",
        "text": "Google Cloud Armor"
      },
      {
        "letter": "D",
        "text": "Dataprep by Trifacta (Cloud Dataprep)"
      }
    ],
    "correct": "D",
    "explanation": "Cloud Dataprep (by Trifacta) es un servicio de datos inteligente que permite explorar, limpiar y preparar visualmente datos estructurados y no estructurados para análisis sin necesidad de escribir código, sugiriendo automáticamente transformaciones de limpieza comunes.",
    "distractors": {
      "B": "Programar en ensamblador es absurdamente complejo e innecesario para tareas de analítica comercial.",
      "C": "Cloud Armor es un servicio de firewall perimetral y mitigación de ataques DDoS.",
      "A": "Editar archivos de millones de filas a mano en el Bloc de Notas es inviable y genera más errores."
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
        "text": "Cloud Pub/Sub estándar (global y sin aprovisionamiento de capacidad)"
      },
      {
        "letter": "B",
        "text": "Pub/Sub Lite"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive"
      },
      {
        "letter": "D",
        "text": "Cloud Spanner con multi-región global"
      }
    ],
    "correct": "B",
    "explanation": "Pub/Sub Lite es una versión zonal de menor costo de Pub/Sub diseñada para cargas con patrones de tráfico predecibles donde los usuarios gestionan la capacidad de rendimiento y almacenamiento de las particiones, reduciendo sustancialmente los costos en comparación con Pub/Sub estándar.",
    "distractors": {
      "A": "Pub/Sub estándar es totalmente administrado, global y elástico, pero tiene un costo ligeramente superior al de Pub/Sub Lite.",
      "D": "Cloud Spanner es una base de datos relacional global, no un sistema de colas y mensajería económica de telemetría.",
      "C": "Archive Storage es para almacenamiento frío de largo plazo, incompatible con streaming de mensajes."
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
        "text": "Data Catalog (integrado en Dataplex)"
      },
      {
        "letter": "B",
        "text": "Dataproc Metastore (Hive Metastore)"
      },
      {
        "letter": "C",
        "text": "Cloud Data Loss Prevention (DLP)"
      },
      {
        "letter": "D",
        "text": "Vistas de BigQuery INFORMATION_SCHEMA"
      }
    ],
    "correct": "A",
    "explanation": "Data Catalog (ahora integrado en la suite de Dataplex) es un servicio de administración de metadatos totalmente administrado y escalable que permite a las organizaciones descubrir, clasificar y gobernar rápidamente sus activos de datos en Google Cloud mediante plantillas de etiquetas (Tag Templates).",
    "distractors": {
      "B": "Es un metastore de Hive administrado para trabajos de Spark y Hive: guarda esquemas de tablas para los motores, sin búsqueda por palabra clave ni etiquetas de negocio.",
      "D": "Expone metadatos de esquema mediante SQL y solo dentro de BigQuery; no cubre Cloud Storage ni admite etiquetas de negocio ni búsqueda para los analistas.",
      "C": "DLP inspecciona el contenido para descubrir y ocultar datos sensibles; clasifica valores, pero no es un catálogo consultable de metadatos con etiquetas personalizadas."
    },
    "officialDocUrl": "https://cloud.google.com/dataplex/docs/data-catalog-overview",
    "blockId": "BLOCK-4",
    "reservaCiega": true
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
        "text": "(1) Standard Persistent Disk (pd-standard HDD); (2) Balanced Persistent Disk (pd-balanced SSD); (3) Extreme Persistent Disk / Hyperdisk (pd-extreme)"
      },
      {
        "letter": "B",
        "text": "(1) Balanced Persistent Disk (pd-balanced SSD); (2) SSD Persistent Disk (pd-ssd); (3) Extreme Persistent Disk / Hyperdisk (pd-extreme)"
      },
      {
        "letter": "C",
        "text": "(1) Local SSD efímero (NVMe); (2) Standard Persistent Disk (pd-standard HDD); (3) Balanced Persistent Disk regional (pd-balanced SSD)"
      },
      {
        "letter": "D",
        "text": "(1) Standard Persistent Disk (pd-standard HDD); (2) SSD Persistent Disk (pd-ssd); (3) Local SSD NVMe efímero conectado a la instancia"
      }
    ],
    "correct": "A",
    "explanation": "Standard Persistent Disk (HDD) optimiza costos para procesamiento por lotes y datos secuenciales; Balanced Persistent Disk (SSD) ofrece la mejor relación rendimiento/precio para la mayoría de las cargas de trabajo empresariales; y Extreme / Hyperdisk proporciona IOPS masivos y configurables para bases de datos de misión crítica.",
    "distractors": {
      "D": "El Local SSD no es un tipo de Persistent Disk y sus datos no sobreviven a la detención de la VM, por lo que no es válido para una base de datos transaccional que necesita durabilidad, aunque ofrezca IOPS muy altos.",
      "C": "El Local SSD es almacenamiento efímero cuyo contenido se pierde al detener la instancia, de modo que no sirve para conservar registros, y pd-balanced no alcanza los cientos de miles de IOPS que exige la base de datos transaccional.",
      "B": "El mapeo está desplazado un nivel hacia arriba: para registros de acceso infrecuente con costo mínimo se estaría pagando precio de SSD balanceado en lugar de pd-standard, y pd-ssd no es la opción de mejor relación precio/rendimiento."
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
        "text": "Local SSD (discos de estado sólido conectados físicamente al servidor host de la VM)"
      },
      {
        "letter": "B",
        "text": "Persistent Disk SSD (almacenamiento en bloque persistente conectado por red a la VM)"
      },
      {
        "letter": "C",
        "text": "Filestore Zonal (recurso compartido NFS administrado y montado en la instancia)"
      },
      {
        "letter": "D",
        "text": "Memorystore for Redis (caché en memoria administrada dentro de la misma región)"
      }
    ],
    "correct": "A",
    "explanation": "Local SSD está conectado físicamente al servidor donde se aloja la instancia de Compute Engine. Ofrece un rendimiento de IOPS extremadamente alto y latencias muy bajas para cachés, procesamiento intermedio y espacio efímero, aunque sus datos no sobreviven a la detención de la VM.",
    "distractors": {
      "D": "Es un servicio de caché remoto accesible por red, no un dispositivo de almacenamiento acoplado a la instancia como pide el escenario.",
      "C": "Es un sistema de archivos compartido por red pensado para acceso concurrente, no un dispositivo de baja latencia para espacio de trabajo temporal.",
      "B": "Es almacenamiento en bloque conectado por red: su latencia y su techo de IOPS quedan muy por debajo del disco físicamente adjunto al host."
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
        "text": "Comprar una máquina física de 128 núcleos para encenderla 25 minutos al día"
      },
      {
        "letter": "B",
        "text": "Cloud Run Jobs (Trabajos de Cloud Run)"
      },
      {
        "letter": "C",
        "text": "Cloud Run Services (Servicios de Cloud Run basados en peticiones web HTTP)"
      },
      {
        "letter": "D",
        "text": "Cloud DNS"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Run Jobs permite ejecutar tareas y contenedores por lotes que corren hasta completarse (run-to-completion) sin necesidad de exponer un servidor web HTTP, escalando miles de tareas en paralelo y apagando los recursos inmediatamente al finalizar.",
    "distractors": {
      "D": "Cloud DNS es resolución de nombres de red.",
      "C": "Cloud Run Services está diseñado para responder a peticiones web HTTP o eventos entrantes continuos, no para tareas por lotes aisladas de ejecución única.",
      "A": "Comprar servidores físicos dedicados para 25 minutos diarios representa un desperdicio financiero masivo."
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
        "text": "Migrar la aplicación a Cloud Run con etiquetas de revisión"
      },
      {
        "letter": "B",
        "text": "Desplegar cada versión con su propia URL de destino"
      },
      {
        "letter": "C",
        "text": "Cloud Load Balancing con NEG sin servidor por versión"
      },
      {
        "letter": "D",
        "text": "División de Tráfico (Traffic Splitting) en App Engine"
      }
    ],
    "correct": "D",
    "explanation": "App Engine incluye la funcionalidad de División de Tráfico (Traffic Splitting), que permite distribuir porcentajes exactos del tráfico entrante entre múltiples versiones desplegadas de la aplicación mediante cookies o direcciones IP, facilitando pruebas A/B y despliegues canarios.",
    "distractors": {
      "B": "Cada versión queda accesible en su propia URL, así que es el usuario quien elige cuál visita: el tráfico de producción no se reparte al 50%.",
      "C": "Añade el balanceador externo que el requisito excluye y reparte por backend, no por cookie o IP del usuario como pide la prueba A/B.",
      "A": "Cloud Run sí reparte tráfico entre revisiones, pero exige migrar la aplicación; la pregunta pide una funcionalidad nativa de App Engine."
    },
    "officialDocUrl": "https://cloud.google.com/appengine/docs/standard/splitting-traffic",
    "blockId": "BLOCK-4",
    "reservaCiega": true
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
        "text": "Cloud VPN con túneles de enrutamiento estático y rutas personalizadas definidas en la VPC"
      },
      {
        "letter": "B",
        "text": "Cloud NAT con anuncio automático de las subredes nuevas hacia el enrutador del centro de datos"
      },
      {
        "letter": "C",
        "text": "Cloud Router utilizando el protocolo de puerta de enlace fronteriza (BGP - Border Gateway Protocol)"
      },
      {
        "letter": "D",
        "text": "Cloud DNS con zonas de reenvío privadas entre la red local y la red VPC de Google Cloud"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Router es un servicio de red completamente administrado que utiliza el protocolo estándar BGP (Border Gateway Protocol) para intercambiar rutas dinámicas automáticamente entre la red VPC de Google Cloud y los enrutadores locales.",
    "distractors": {
      "B": "Cloud NAT traduce direcciones para dar salida a Internet a instancias sin IP pública; no intercambia rutas con la red local.",
      "D": "Resuelve nombres a direcciones IP, pero no distribuye ni aprende rutas: el tráfico seguiría sin saber por donde alcanzar la subred nueva.",
      "A": "El enrutamiento estático obliga a declarar cada subred a mano en ambos extremos, que es exactamente el trabajo manual que el equipo quiere eliminar."
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
    "scenario": "Un equipo web despliega un portal de comercio electrónico detrás de Cloud Load Balancing. En el pasado, los certificados SSL expiraban por descuido humano, haciendo que los navegadores mostraran advertencias de seguridad a los clientes. Desean que Google Cloud aprovisione, configure y renueve automáticamente los certificados SSL/TLS para sus dominios de forma gratuita. ¿Qué dos acciones deben completar para que el certificado se aprovisione y active correctamente? (Elige 2.)",
    "keywords": [
      "Google-Managed SSL Certificates",
      "Certificados SSL administrados",
      "Renovación automática",
      "HTTPS",
      "Cloud Load Balancing"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Certificados SSL autoadministrados (self-managed) subidos al balanceador de carga"
      },
      {
        "letter": "B",
        "text": "Certificate Authority Service (CAS) con una CA privada de la empresa"
      },
      {
        "letter": "C",
        "text": "Política SSL (SSL Policy) con perfil MODERN y TLS 1.2 como versión mínima"
      },
      {
        "letter": "D",
        "text": "Certificados SSL administrados por Google (Google-Managed SSL Certificates)"
      },
      {
        "letter": "E",
        "text": "Apuntar el DNS del dominio a la IP del balanceador de carga para validar la propiedad."
      }
    ],
    "correct": [
      "D",
      "E"
    ],
    "explanation": "Los Google-Managed SSL Certificates se aprovisionan y renuevan automáticamente y sin costo, pero antes de emitir el certificado Google debe validar que el dominio apunta realmente al balanceador de carga; por eso el DNS del dominio debe señalar la IP del balanceador. Sin ambos pasos —activar el certificado administrado y apuntar el DNS— la validación y la activación no se completan.",
    "distractors": {
      "C": "Una SSL Policy solo controla qué versiones de TLS y conjuntos de cifrado acepta el balanceador; no aprovisiona ni renueva certificados.",
      "B": "Certificate Authority Service crea una CA privada para PKI interna (por ejemplo TLS mutuo entre servicios); no emite certificados públicos de confianza para navegadores.",
      "A": "Un certificado self-managed exige que el equipo lo compre, suba y renueve manualmente antes de que expire, justo el error humano que quieren eliminar."
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
        "text": "Private Service Connect (PSC)"
      },
      {
        "letter": "B",
        "text": "Tender cables físicos entre los hogares de los clientes"
      },
      {
        "letter": "C",
        "text": "Cloud Storage Archive"
      },
      {
        "letter": "D",
        "text": "Hacer público el servicio en Internet sin autenticación"
      }
    ],
    "correct": "A",
    "explanation": "Private Service Connect (PSC) permite el acceso privado a servicios (propios, de terceros o de Google) desde diferentes redes VPC utilizando endpoints de reenvío privados, sin requerir emparejamiento de redes VPC completas y evitando problemas de solapamiento de rangos de direcciones IP.",
    "distractors": {
      "B": "Tender cables físicos individuales es inviable para un modelo SaaS moderno.",
      "C": "Cloud Storage Archive es para almacenamiento frío.",
      "D": "Exponer servicios a Internet sin autenticación es una vulnerabilidad crítica."
    },
    "officialDocUrl": "https://cloud.google.com/vpc/docs/private-service-connect",
    "blockId": "BLOCK-4",
    "reservaCiega": true
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
        "text": "Políticas de red de Kubernetes (NetworkPolicy) en cada espacio de nombres"
      },
      {
        "letter": "B",
        "text": "Cloud Service Mesh (anteriormente Anthos Service Mesh, basado en Istio)"
      },
      {
        "letter": "C",
        "text": "Cloud Armor con reglas WAF delante del balanceador externo del clúster"
      },
      {
        "letter": "D",
        "text": "Cloud Trace y Cloud Monitoring instrumentando cada microservicio con su SDK"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Service Mesh proporciona una malla de servicios administrada basada en Istio que inyecta proxies en los contenedores para gestionar el cifrado mTLS automático entre servicios, aplicar políticas de control de acceso de Zero Trust y recopilar métricas detalladas de observabilidad y dependencias.",
    "distractors": {
      "A": "NetworkPolicy filtra el tráfico por IP y puerto (capas 3 y 4): no cifra con mTLS, no autoriza por identidad de servicio ni genera métricas de latencia entre microservicios.",
      "C": "Cloud Armor protege el tráfico norte-sur que entra al clúster desde Internet; el requisito es cifrar y autorizar el tráfico este-oeste entre los propios microservicios.",
      "D": "Aporta observabilidad, pero exige instrumentar el código de cada microservicio (lo que el escenario prohíbe) y no cifra el tráfico ni aplica políticas de autorización."
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
        "text": "Cloud Build con canalizaciones que despliegan manifiestos"
      },
      {
        "letter": "B",
        "text": "Organization Policy Service con restricciones por carpeta"
      },
      {
        "letter": "C",
        "text": "Terraform aplicado a mano en cada uno de los 40 clústeres"
      },
      {
        "letter": "D",
        "text": "Anthos Config Management (ACM / Config Sync y Policy Controller)"
      }
    ],
    "correct": "D",
    "explanation": "Anthos Config Management (Config Sync y Policy Controller) permite gestionar políticas y configuraciones de múltiples clústeres de Kubernetes a escala mediante un enfoque declarativo de GitOps, sincronizando automáticamente el estado de los clústeres con los manifiestos almacenados en un repositorio Git central.",
    "distractors": {
      "B": "Las políticas de organización restringen recursos de Google Cloud, no lo que ocurre dentro de Kubernetes: no controlan root ni las cuotas del contenedor.",
      "A": "Cloud Build empuja los cambios cuando alguien ejecuta la canalización, pero no reconcilia de forma continua ni revierte la desviación en el clúster.",
      "C": "Terraform describe la infraestructura, pero al aplicarse manualmente por clúster no hay reconciliación automática desde una única fuente de verdad."
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
        "text": "Google Distributed Cloud conectado"
      },
      {
        "letter": "B",
        "text": "Google Distributed Cloud Hosted (GDCH)"
      },
      {
        "letter": "C",
        "text": "Anthos clusters on VMware (GKE on-prem)"
      },
      {
        "letter": "D",
        "text": "Assured Workloads para sector público"
      }
    ],
    "correct": "B",
    "explanation": "Google Distributed Cloud Hosted (GDCH) es una solución de nube y hardware completamente aislada (air-gapped) que permite a entidades gubernamentales y sectores altamente regulados operar servicios de Google Cloud e IA en sus instalaciones locales sin requerir ninguna conexión a la red pública ni a Google Cloud.",
    "distractors": {
      "D": "Assured Workloads aporta controles de cumplimiento y residencia sobre regiones de la nube pública de Google: sigue siendo nube pública, no un despliegue local desconectado.",
      "C": "El clúster se ejecuta en el centro de datos del cliente, pero debe registrarse en una flota y comunicarse con Google Cloud para su gestión, lo que la ley del escenario prohíbe.",
      "A": "La variante conectada de Google Distributed Cloud sí corre en las instalaciones del cliente, pero requiere conectividad permanente con Google Cloud para su plano de control: no es un entorno air-gapped."
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
        "text": "Cloud Storage Coldline"
      },
      {
        "letter": "B",
        "text": "Cloud Workstations"
      },
      {
        "letter": "C",
        "text": "Prohibir el uso de computadoras a los programadores"
      },
      {
        "letter": "D",
        "text": "Enviar el código fuente completo en memorias USB por correo a las casas de los contratistas"
      }
    ],
    "correct": "B",
    "explanation": "Cloud Workstations proporciona entornos de desarrollo completamente administrados, seguros y efímeros en Google Cloud, integrados con IDEs populares (como VS Code e IntelliJ), garantizando que el código fuente nunca resida en los dispositivos locales de los desarrolladores.",
    "distractors": {
      "D": "Enviar código en memorias USB físicas es una violación crítica de propiedad intelectual y seguridad.",
      "A": "Cloud Storage Coldline es para copias de seguridad de datos fríos.",
      "C": "Impedir el uso de computadoras imposibilita el desarrollo de software."
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
        "text": "Rebuild desde cero en lenguaje de tarjetas perforadas"
      },
      {
        "letter": "B",
        "text": "Replatform (Replatforming o Move and Improve)"
      },
      {
        "letter": "C",
        "text": "Retire (Retiro / Baja de la aplicación)"
      },
      {
        "letter": "D",
        "text": "Retain (Retención en sitio local)"
      }
    ],
    "correct": "B",
    "explanation": "Replatforming (Mover y Mejorar) implica realizar optimizaciones específicas para aprovechar servicios administrados en la nube (como cambiar una base de datos autogestionada por Cloud SQL) sin cambiar la arquitectura central ni reescribir sustancialmente el código de la aplicación.",
    "distractors": {
      "A": "Las tarjetas perforadas son una tecnología obsoleta de hace más de medio siglo.",
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
        "text": "Refactor escribiendo un servidor de correo en C++ desde cero"
      },
      {
        "letter": "B",
        "text": "Retain (mantener el servidor local para siempre)"
      },
      {
        "letter": "C",
        "text": "Rehost puro en máquinas virtuales IaaS"
      },
      {
        "letter": "D",
        "text": "Repurchase (Recompra hacia un modelo SaaS comercial)"
      }
    ],
    "correct": "D",
    "explanation": "Repurchase (Recompra o 'Drop and Shop') consiste en reemplazar una aplicación propia o infraestructura personalizada por un producto estándar como Software como Servicio (SaaS), como adoptar Google Workspace en lugar de gestionar servidores de correo propios.",
    "distractors": {
      "A": "Escribir un servidor de correo propio desde cero desperdicia recursos en software no diferenciador.",
      "B": "Retain implicaría continuar manteniendo el hardware y software local obsoleto.",
      "C": "Rehost implicaría mover el servidor de correo antiguo a una VM en Compute Engine."
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
        "text": "Rehospedar el mainframe (Rehost) con Migrate to Virtual Machines para levantar sus cargas como instancias de Compute Engine y consultar los saldos desde las aplicaciones móviles."
      },
      {
        "letter": "B",
        "text": "Replicar cada noche los saldos del mainframe hacia BigQuery mediante un proceso por lotes, de modo que las aplicaciones móviles consulten el almacén analítico y no el sistema central."
      },
      {
        "letter": "C",
        "text": "Conectar las aplicaciones móviles directamente al mainframe a través de un túnel de Cloud VPN, publicando sus protocolos heredados sin una capa intermedia de gestión de APIs."
      },
      {
        "letter": "D",
        "text": "Retener el mainframe en las instalaciones locales (Retain) y colocar una fachada de APIs moderna (con Apigee) para conectar de forma segura las aplicaciones en la nube con el sistema legado."
      }
    ],
    "correct": "D",
    "explanation": "Para sistemas críticos que deben conservarse localmente (Retain), el patrón de 'Fachada de APIs' (utilizando Apigee) permite encapsular los protocolos complejos heredados del mainframe en APIs REST modernas y seguras, permitiendo que las nuevas aplicaciones en la nube interactúen fácilmente con ellos.",
    "distractors": {
      "C": "La VPN aporta conectividad privada pero no fachada: deja los protocolos heredados expuestos al cliente móvil, sin seguridad de API, versionado, cuotas ni analítica.",
      "B": "Una replica nocturna entrega saldos desactualizados: BigQuery es un almacén analítico y no responde consultas transaccionales en tiempo real como exige la banca móvil.",
      "A": "Contradice la restricción del caso: el regulador impone Retain, de modo que el sistema central no puede migrarse; además Migrate to Virtual Machines no convierte cargas de mainframe."
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
        "text": "Retirar y apagar permanentemente los servidores y aplicaciones obsoletas (estrategia Retire), reduciendo costos de licencias, infraestructura y riesgos de seguridad."
      },
      {
        "letter": "B",
        "text": "Rehospedar los 45 servidores en Compute Engine con Migrate to Virtual Machines (estrategia Rehost) para trasladarlos a la nube sin cambios y decidir más adelante."
      },
      {
        "letter": "C",
        "text": "Conservar los 45 servidores en el centro de datos local (estrategia Retain) hasta que cada departamento confirme por escrito que ya no necesita esas aplicaciones."
      },
      {
        "letter": "D",
        "text": "Replataformar las aplicaciones obsoletas a contenedores en Cloud Run (estrategia Replatform) para reducir su coste de ejecución conservando la funcionalidad original."
      }
    ],
    "correct": "A",
    "explanation": "La estrategia 'Retire' consiste en identificar y dar de baja de forma segura las aplicaciones que ya no aportan valor al negocio (representando frecuentemente entre el 10% y el 20% del inventario corporativo), ahorrando costos de licencias y eliminando vectores de ataque de seguridad.",
    "distractors": {
      "B": "Rehospedar traslada a la nube aplicaciones que ya nadie usa: se sigue pagando cómputo y almacenamiento y se mantiene la superficie de ataque.",
      "D": "Invertir esfuerzo de ingeniería en modernizar aplicaciones sin usuarios no genera valor de negocio; el marco prescribe darlas de baja, no migrarlas.",
      "C": "Retain aplaza la decisión sobre cargas que sí siguen en uso; aquí el inventario ya confirmó dos años sin utilización de ningún departamento."
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
        "text": "Los informes de Cloud Billing (Billing Reports) de la cuenta de facturación"
      },
      {
        "letter": "B",
        "text": "El panel de presupuestos y alertas (Budgets and Alerts) de Cloud Billing"
      },
      {
        "letter": "C",
        "text": "Google Cloud Pricing Calculator (Calculadora de precios de Google Cloud)"
      },
      {
        "letter": "D",
        "text": "Las recomendaciones de dimensionamiento de Active Assist Recommender"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Pricing Calculator es la herramienta interactiva oficial que permite a los arquitectos y líderes financieros modelar arquitecturas, configurar parámetros de servicios (cómputo, almacenamiento, redes) y obtener estimaciones precisas de costos mensuales previstos.",
    "distractors": {
      "D": "Recommender ajusta el tamaño de recursos que ya están encendidos analizando sus métricas de uso; sin nada desplegado no tiene datos que observar.",
      "A": "Los informes de facturación analizan el gasto ya incurrido, desglosado por proyecto o SKU; no permiten modelar una arquitectura que todavía no existe.",
      "B": "Un presupuesto define un umbral y avisa cuando el gasto real se acerca a él; necesita consumo previo y no produce la estimación anticipada que pide el CFO."
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
        "text": "Solicitar a Cloud Billing la transferencia del compromiso de 100 vCPUs desde el Proyecto A hacia los proyectos que sí están consumiendo capacidad, reasignando el contrato de compromiso al proyecto con mayor consumo real."
      },
      {
        "letter": "B",
        "text": "Habilitar el uso compartido de descuentos por compromiso de uso (CUD Sharing) a nivel de la Cuenta de Facturación para que el descuento sobrante se aplique automáticamente al consumo de vCPUs elegibles en los demás proyectos."
      },
      {
        "letter": "C",
        "text": "Confiar en los Descuentos por Uso Sostenido (SUD), que se aplican automáticamente a las vCPUs de Compute Engine que superan cierto porcentaje del mes en cada uno de los 14 proyectos restantes de la empresa."
      },
      {
        "letter": "D",
        "text": "Configurar la exportación de facturación a BigQuery y un panel de costos por etiquetas para redistribuir contablemente entre los 14 proyectos la parte del compromiso que el Proyecto A no llegó a consumir."
      }
    ],
    "correct": "B",
    "explanation": "CUD Sharing (Uso compartido de CUDs) permite que los descuentos por compromiso de uso contratados se distribuyan de forma transparente entre todos los proyectos vinculados a la misma Cuenta de Facturación de Cloud Billing, maximizando la tasa de utilización del descuento y el ahorro financiero.",
    "distractors": {
      "D": "La exportación de facturación y las etiquetas solo dan visibilidad y permiten repartir el costo en los informes internos: no cambian el importe facturado por Google ni consiguen que el descuento se aplique al consumo real de los otros proyectos.",
      "A": "Un compromiso de uso no se puede mover ni reasignar a otro proyecto una vez adquirido: el contrato queda anclado donde se compró. Lo que sí existe es el uso compartido a nivel de Cuenta de Facturación, que aplica el descuento sobrante sin mover nada.",
      "C": "Los SUD son descuentos automáticos calculados por el uso mensual de cada proyecto y son independientes del CUD comprado: no recuperan ni aplican en ningún otro proyecto el compromiso de 60 vCPUs que quedó sin consumir en el Proyecto A."
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
        "text": "Configurar la alerta de presupuesto para que publique notificaciones en un tema de Cloud Pub/Sub que dispare una Cloud Function o servicio de Cloud Run encargado de detener las VMs o desvincular la facturación programáticamente."
      },
      {
        "letter": "B",
        "text": "Configurar la alerta de presupuesto con destinatarios de correo electrónico en el umbral del 100% para que el administrador de facturación reciba el aviso y apague manualmente las máquinas virtuales de prueba desde la consola."
      },
      {
        "letter": "C",
        "text": "Establecer una cuota de consumo de 500 USD en el proyecto desde IAM y Administración > Cuotas, de modo que Google Cloud rechace la creación de nuevos recursos al alcanzarse ese importe presupuestado."
      },
      {
        "letter": "D",
        "text": "Activar la recomendación de Active Assist sobre máquinas virtuales inactivas para que Recommender apague automáticamente las instancias de prueba cuando el gasto del proyecto supere el presupuesto."
      }
    ],
    "correct": "A",
    "explanation": "Las alertas de presupuesto de Cloud Billing pueden enviar mensajes a temas de Cloud Pub/Sub. Esto permite integrar lógica programática personalizada mediante Cloud Functions o Cloud Run para ejecutar respuestas automáticas como detener instancias de prueba, reducir cuotas o suspender recursos en entornos de desarrollo.",
    "distractors": {
      "B": "La notificación por correo informa pero no ejecuta nada: depende de que una persona reaccione, de modo que el gasto sigue corriendo mientras no intervenga el administrador.",
      "D": "Recommender solo emite recomendaciones que alguien debe aplicar y se basa en el uso del recurso, no en el presupuesto: no ejecuta acciones ni reacciona a umbrales de facturación.",
      "C": "Las cuotas limitan unidades de recurso (vCPU, direcciones IP, llamadas a la API), no importes en dólares: no existe una cuota de gasto que detenga el consumo al llegar a 500 USD."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/notify",
    "blockId": "BLOCK-4",
    "reservaCiega": true
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
        "text": "Analizador de Políticas de IAM (IAM Policy Analyzer)"
      },
      {
        "letter": "B",
        "text": "Simulador de Políticas de IAM (IAM Policy Simulator)"
      },
      {
        "letter": "C",
        "text": "Registros de Auditoría de Acceso a Datos (Data Access)"
      },
      {
        "letter": "D",
        "text": "Recomendador de IAM (IAM Recommender / Role Recommender)"
      }
    ],
    "correct": "D",
    "explanation": "IAM Recommender compara los permisos asignados a los usuarios con los permisos que realmente utilizan basándose en el historial de actividad de los últimos 90 días, recomendando de forma proactiva revocar roles excesivos y sustituirlos por roles de menor privilegio adecuados.",
    "distractors": {
      "B": "El Policy Simulator predice el impacto de un cambio de política antes de aplicarlo, es decir, valida una propuesta que alguien ya ha redactado: no detecta por sí mismo el exceso de permisos ni genera la recomendación.",
      "A": "El Policy Analyzer responde a preguntas sobre quién tiene acceso a qué según los enlaces vigentes, pero no compara esos permisos con el uso real de los últimos 90 días ni propone un rol alternativo más restrictivo.",
      "C": "Los registros de auditoría son la evidencia en bruto de qué llamadas hizo el usuario, pero exigen análisis manual: no correlacionan el uso con los permisos concedidos ni sugieren automáticamente un rol de menor privilegio."
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
        "text": "Cloud Audit Logs, filtrando las entradas de Actividad de administrador"
      },
      {
        "letter": "B",
        "text": "Policy Analyzer, dentro de la suite de Policy Intelligence de IAM"
      },
      {
        "letter": "C",
        "text": "Policy Troubleshooter (Solucionador de problemas de políticas de IAM)"
      },
      {
        "letter": "D",
        "text": "Recommender de roles de IAM, que detecta los permisos excesivos"
      }
    ],
    "correct": "C",
    "explanation": "Policy Troubleshooter permite a los administradores de seguridad evaluar y depurar de forma instantánea por qué un usuario o cuenta de servicio tiene o no tiene un permiso específico sobre un recurso, analizando todas las vinculaciones de roles heredadas y condiciones aplicadas.",
    "distractors": {
      "A": "Los registros de auditoría muestran que la llamada fue denegada y quién la hizo, pero no evalúan las políticas heredadas ni explican por qué falta el permiso.",
      "D": "El recomendador sugiere reducir roles amplios poco usados, es decir, quitar permisos; no diagnostica por qué un permiso concreto no se está aplicando.",
      "B": "Policy Analyzer responde quién tiene acceso a qué recurso a partir de las políticas; no simula una solicitud ya denegada ni señala qué vinculación la bloquea."
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
        "text": "Canales de notificación de Cloud Monitoring (correo, SMS y Pub/Sub)"
      },
      {
        "letter": "B",
        "text": "Los administradores de la cuenta de facturación en Cloud Billing"
      },
      {
        "letter": "C",
        "text": "El perfil de pagos y los contactos administrativos del dominio"
      },
      {
        "letter": "D",
        "text": "Contactos Esenciales (Essential Contacts en la consola de Google Cloud)"
      }
    ],
    "correct": "D",
    "explanation": "Essential Contacts permite a las organizaciones designar qué personas o listas de distribución de correo deben recibir notificaciones de Google Cloud categorizadas por temas (Seguridad, Privacidad, Facturación, Operaciones, Legal), garantizando que las alertas lleguen al equipo adecuado.",
    "distractors": {
      "A": "Los canales de notificación entregan las alertas que generan las políticas del propio cliente sobre sus métricas. No son la vía por la que Google comunica avisos de seguridad, privacidad, facturación o mantenimiento de la plataforma.",
      "C": "El perfil de pagos guarda los datos fiscales y de método de pago para la emisión de facturas: no clasifica destinatarios por tema y no es el mecanismo que enruta avisos de seguridad, privacidad u operaciones.",
      "B": "Ese rol solo recibe los avisos relacionados con la facturación y los pagos, y no permite dirigir por categorías los avisos de incidentes de seguridad al equipo correspondiente ni los legales al departamento jurídico."
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
        "text": "Un sumidero de registros (Log Sink) que exporte los eventos a un conjunto de datos de BigQuery donde el equipo ejecute las consultas SQL de la investigación"
      },
      {
        "letter": "B",
        "text": "Las métricas basadas en registros (log-based metrics) con distribuciones y alertas definidas sobre un filtro de los registros de auditoría"
      },
      {
        "letter": "C",
        "text": "Log Analytics (que permite consultar buckets de Cloud Logging utilizando el motor de SQL de BigQuery directamente en la consola de Logging)"
      },
      {
        "letter": "D",
        "text": "El Explorador de Registros con el lenguaje de consultas de Logging y filtros anidados por recurso, gravedad y campos del payload"
      }
    ],
    "correct": "C",
    "explanation": "Log Analytics integra la potencia del motor de análisis SQL de BigQuery directamente dentro de Cloud Logging, permitiendo a los ingenieros de operaciones y seguridad ejecutar consultas analíticas avanzadas, generar agregaciones y visualizar métricas sobre sus datos de registros en tiempo real.",
    "distractors": {
      "B": "Cuentan y agregan coincidencias de un filtro para generar series temporales: no permiten uniones, agregaciones multidimensionales ni consultas SQL sobre el contenido.",
      "D": "El lenguaje de consultas de Logging filtra y busca entradas individuales, pero no soporta uniones ni funciones de agregación como pide la investigación.",
      "A": "Exige exportar previamente los datos a un almacén externo, que es justo lo que el escenario descarta, y además solo alcanza a los registros posteriores a crear el sumidero."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/log-analytics",
    "blockId": "BLOCK-4",
    "reservaCiega": true
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
        "text": "Assured Workloads de Google Cloud"
      },
      {
        "letter": "B",
        "text": "Compute Engine Spot Instances sin cifrar"
      },
      {
        "letter": "C",
        "text": "Google Fonts API"
      },
      {
        "letter": "D",
        "text": "Cloud DNS público sin restricciones"
      }
    ],
    "correct": "A",
    "explanation": "Assured Workloads permite a las organizaciones del sector público y empresas altamente reguladas desplegar cargas de trabajo seguras y conformes en Google Cloud con guardarraíles automatizados para residencia de datos, restricciones de personal de soporte local y cumplimiento con normativas como FedRAMP, CJIS e ITAR.",
    "distractors": {
      "D": "Cloud DNS es resolución de nombres de red.",
      "B": "Instancias sin cifrar violan los mandatos de seguridad gubernamentales.",
      "C": "Google Fonts es un servicio de tipografías web."
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
        "text": "Cloud EKM con el material de clave alojado fuera de Google"
      },
      {
        "letter": "B",
        "text": "Claves gestionadas por el cliente (CMEK) alojadas en Cloud HSM"
      },
      {
        "letter": "C",
        "text": "Key Access Justifications (KAJ) integrado con Cloud KMS / Cloud EKM"
      },
      {
        "letter": "D",
        "text": "Access Transparency con registros de accesos del personal de Google"
      }
    ],
    "correct": "C",
    "explanation": "Key Access Justifications (KAJ) proporciona una justificación explícita cada vez que los datos del cliente se solicitan para descifrado, otorgando a las organizaciones la capacidad de evaluar la razón de cada solicitud y bloquearla si no cumple con sus requisitos de soberanía y privacidad.",
    "distractors": {
      "B": "CMEK con Cloud HSM da al cliente el control del material de la clave y su ciclo de vida, pero no informa del motivo de cada solicitud de descifrado ni permite denegarla por ese motivo.",
      "D": "Access Transparency registra a posteriori las acciones del personal de Google sobre los datos: es auditoría retrospectiva y no puede bloquear la operación de descifrado en el momento.",
      "A": "Cloud EKM saca la clave fuera de Google y es el requisito técnico previo, pero por sí solo no adjunta a cada petición de descifrado una justificación que el banco pueda evaluar."
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
        "text": "plantillas de inspección (inspection templates) reutilizables entre proyectos"
      },
      {
        "letter": "B",
        "text": "transformaciones de desidentificación (enmascaramiento, tokenización y cifrado)"
      },
      {
        "letter": "C",
        "text": "trabajos de descubrimiento (discovery jobs) programados sobre los repositorios"
      },
      {
        "letter": "D",
        "text": "infoTypes (detectores predefinidos y personalizados de tipos de información sensible)"
      }
    ],
    "correct": "D",
    "explanation": "Los infoTypes son los patrones y detectores configurables que utiliza Sensitive Data Protection (Cloud DLP) para identificar elementos de datos específicos (como `CREDIT_CARD_NUMBER`, `EMAIL_ADDRESS`, `US_SOCIAL_SECURITY_NUMBER` o `MEXICO_RFC_NUMBER`).",
    "distractors": {
      "C": "El trabajo es la ejecución programada del análisis sobre un repositorio; los detectores de categoría son un concepto distinto dentro de esa configuración.",
      "A": "Una plantilla empaqueta y reutiliza la configuración de un análisis; no es el detector de una categoría concreta de dato sensible.",
      "B": "Son las acciones que se aplican sobre los hallazgos una vez detectados, no los detectores que localizan las tarjetas o el RFC."
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
        "text": "Modo de Prueba (Dry-Run Mode / Dry-run policy enforcement) en Políticas de Organización"
      },
      {
        "letter": "B",
        "text": "Aplicar la restricción `gcp.resourceLocations` en modo de imposición sobre un proyecto de prueba"
      },
      {
        "letter": "C",
        "text": "Simulador de políticas (Policy Simulator) sobre los permisos de IAM de la organización"
      },
      {
        "letter": "D",
        "text": "Recomendaciones de Active Assist (Policy Intelligence) sobre roles no utilizados"
      }
    ],
    "correct": "A",
    "explanation": "El modo Dry-Run en Organization Policies permite a los administradores probar y auditar el impacto de nuevas restricciones de gobernanza registrando las posibles violaciones en Cloud Logging sin bloquear las operaciones de los desarrolladores ni causar tiempos de inactividad inesperados en producción.",
    "distractors": {
      "C": "Policy Simulator evalúa el impacto de cambios en las políticas de permisos de IAM, no el de las restricciones de Organization Policy que limitan la ubicación de los recursos.",
      "D": "Active Assist recomienda retirar permisos y roles infrautilizados; no simula ni registra el efecto de una restricción de ubicación sobre las canalizaciones de despliegue.",
      "B": "Sigue siendo una imposición real, sólo que en menor alcance: bloquea las operaciones que infrinjan la política y no revela qué recursos de los proyectos de producción la violarían."
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
        "text": "OAuth 2.0 (para autorización) y OpenID Connect / OIDC (para autenticación federada)"
      },
      {
        "letter": "B",
        "text": "SAML 2.0 con aserciones firmadas emitidas por el proveedor de identidad corporativo"
      },
      {
        "letter": "C",
        "text": "Kerberos con tickets emitidos por un controlador de dominio de Active Directory"
      },
      {
        "letter": "D",
        "text": "Claves de API del proyecto enviadas como parámetro en cada petición del usuario"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud y sus servicios de identidad se basan en estándares abiertos globales líderes: OAuth 2.0 para delegación de autorización de recursos y OpenID Connect (OIDC) para verificación de identidad y autenticación de usuarios de forma segura sin revelar contraseñas a aplicaciones de terceros.",
    "distractors": {
      "D": "Una clave de API identifica al proyecto que llama, no al usuario final, y no ofrece pantalla de consentimiento ni permisos limitados al perfil básico.",
      "B": "SAML federa el inicio de sesión corporativo hacia Cloud Identity, pero no define el consentimiento por alcances (scopes) que permite a la app leer solo el perfil.",
      "C": "Kerberos autentica dentro de una red corporativa con dominio; no sirve para delegar autorización entre un navegador y una aplicación publicada en Internet."
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
        "text": "Descripción del impacto en el negocio, cronología detallada de los hechos, análisis de causas raíz sistémicas y una lista de acciones correctivas preventivas con dueños asignados para evitar la recurrencia."
      },
      {
        "letter": "B",
        "text": "El registro en vivo de la llamada del incidente con los comandos ejecutados, el reparto de los roles de Comandante de Incidente y Comunicador, y el estado de la sala de crisis minuto a minuto."
      },
      {
        "letter": "C",
        "text": "La identificación del cambio y del ingeniero que lo desplegó, la valoración de su desempeño y las medidas disciplinarias o de formación obligatoria asignadas para que el error no se repita."
      },
      {
        "letter": "D",
        "text": "El cálculo de los minutos de indisponibilidad frente al SLA contratado, los créditos de servicio que deben reclamarse al proveedor y la comunicación formal enviada a los clientes afectados."
      }
    ],
    "correct": "A",
    "explanation": "Una autopsia sin culpa (Blameless Post-Mortem) en la cultura SRE documenta qué ocurrió, por qué ocurrió, el impacto en usuarios, la respuesta al incidente y, lo más importante, acciones preventivas concretas para fortalecer el sistema sin buscar culpables individuales.",
    "distractors": {
      "D": "Son artefactos contractuales y de comunicación derivados del incidente, útiles para el negocio, pero no explican la causa raíz ni generan la lista de acciones correctivas que hace que el sistema mejore.",
      "C": "Atribuir consecuencias personales es justo lo que la metodología sin culpa prohíbe: incentiva a ocultar información, impide reconstruir la cronología real y desvía el análisis de las causas sistémicas hacia el individuo.",
      "B": "Eso es el registro operativo que se produce durante la gestión del incidente, mientras el servicio está caído. La autopsia se redacta después y su objetivo es el aprendizaje sistémico y las acciones preventivas."
    },
    "officialDocUrl": "https://cloud.google.com/blog/products/devops-sre/why-you-should-practice-blameless-postmortems",
    "blockId": "BLOCK-4",
    "reservaCiega": true
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
        "text": "Porque redactar y revisar cada año el plan de recuperación con los responsables de cada sistema y obtener su firma acredita ante los auditores externos que la organización cumple la normativa sectorial de continuidad de negocio."
      },
      {
        "letter": "B",
        "text": "Porque un plan de recuperación ante desastres no probado en la práctica no garantiza la continuidad del negocio; los simulacros validan que los procedimientos de conmutación, la automatización y la respuesta del equipo funcionen bajo presión real."
      },
      {
        "letter": "C",
        "text": "Porque los simulacros permiten medir el consumo máximo de CPU y memoria de la región secundaria durante la conmutación y así dimensionar con antelación las cuotas y las reservas de capacidad necesarias en la contingencia."
      },
      {
        "letter": "D",
        "text": "Porque restaurar periódicamente las copias de seguridad en un entorno aislado confirma que los datos están íntegros y son recuperables, que es en definitiva lo que determina si la empresa sobrevive a un desastre regional."
      }
    ],
    "correct": "B",
    "explanation": "Los ejercicios DiRT y las pruebas de ingeniería del caos permiten descubrir debilidades latentes, dependencias ocultas y fallas en los manuales de procedimientos (runbooks) antes de que ocurra una catástrofe real, asegurando que la organización esté verdaderamente preparada para recuperarse.",
    "distractors": {
      "D": "Verificar las copias es necesario pero insuficiente: en un desastre real hacen falta además la conmutación de tráfico, las dependencias entre servicios y la coordinación del equipo, y eso solo se prueba con un simulacro completo.",
      "A": "Un plan aprobado y firmado demuestra cumplimiento documental, pero no aporta ninguna evidencia de que los procedimientos funcionen: solo la ejecución real revela los pasos obsoletos y las dependencias no documentadas.",
      "C": "Dimensionar la capacidad es un beneficio colateral del ejercicio, no su propósito. El objetivo de DiRT es validar los procedimientos de conmutación, la automatización y la respuesta del equipo humano bajo presión real."
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
        "text": "Planificar (estimar el gasto del ejercicio), Aprovisionar (comprar por adelantado la capacidad de servidores) y Amortizar (repartir contablemente la inversión durante la vida útil del equipamiento)."
      },
      {
        "letter": "B",
        "text": "Etiquetar (aplicar labels a todos los recursos), Facturar internamente (repartir el coste entre los centros de coste) y Auditar (revisar la factura una sola vez al cierre del ejercicio fiscal anual)."
      },
      {
        "letter": "C",
        "text": "Informar (visibilidad de costos y atribución), Optimizar (identificar ahorros y dimensionamiento) y Operar (alinear procesos continuos y gobernanza entre finanzas e ingeniería)."
      },
      {
        "letter": "D",
        "text": "Migrar (trasladar las cargas de trabajo a la nube), Optimizar (redimensionar recursos y comprar CUDs) y Apagar (eliminar los entornos de desarrollo fuera del horario laboral de la empresa)."
      }
    ],
    "correct": "C",
    "explanation": "El marco de la FinOps Foundation establece tres fases continuas e iterativas: (1) Informar (crear visibilidad, etiquetado y presupuestos), (2) Optimizar (aprovechar CUDs, SUDs y redimensionamiento de recursos ociosos), y (3) Operar (integrar métricas de costo por unidad de negocio en las decisiones diarias de ingeniería).",
    "distractors": {
      "B": "El etiquetado y el reparto interno de costes son actividades dentro de la fase de Informar, y una auditoría anual contradice el carácter iterativo del marco: faltan por completo las fases de Optimizar y de Operar.",
      "A": "Describe el ciclo tradicional de inversión de capital en un centro de datos propio, con capacidad comprada por anticipado. FinOps es un ciclo continuo sobre gasto operativo variable que se consume y se ajusta a diario.",
      "D": "La migración es un proyecto puntual y no una fase del ciclo, y apagar entornos ociosos es una táctica concreta dentro de Optimizar: el modelo omite Informar y Operar, que son las que sostienen la práctica en el tiempo."
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
        "text": "Al contratar Google Cloud, la responsabilidad de la seguridad se transfiere íntegramente al proveedor, de modo que la aseguradora deja de gestionar identidades, permisos y configuración de red porque las certificaciones ISO 27001 y SOC 2 ya cubren contractualmente esas capas."
      },
      {
        "letter": "B",
        "text": "Los datos de la aseguradora se cifran en reposo con claves gestionadas por el cliente, y ese cifrado basta por sí solo para impedir cualquier acceso indebido, por lo que no son necesarios controles adicionales de identidad, registro de auditoría ni segmentación de red."
      },
      {
        "letter": "C",
        "text": "La seguridad de un centro de datos corporativo propio es siempre superior porque su perímetro es más pequeño, y Google Cloud solo alcanza ese nivel cuando el cliente contrata un enlace de Cloud Interconnect dedicado que evita por completo la Internet pública."
      },
      {
        "letter": "D",
        "text": "Google invierte miles de millones de dólares en seguridad de infraestructura multicapa, emplea a miles de expertos globales, cifra los datos de forma predeterminada tanto en reposo como en tránsito y somete sus servicios a rigurosas auditorías de cumplimiento independientes."
      }
    ],
    "correct": "D",
    "explanation": "La infraestructura física y lógica de Google Cloud ofrece una escala de protección que pocas empresas individuales pueden replicar: chips de seguridad Titan en hardware propietario, cifrado automático por defecto, defensa contra DDoS global y certificaciones de cumplimiento internacionales continuas.",
    "distractors": {
      "B": "El cifrado protege un vector concreto, el acceso al medio de almacenamiento; una credencial legítima comprometida sigue leyendo los datos ya descifrados por el servicio.",
      "A": "Confunde certificaciones con responsabilidad compartida: las auditorías acreditan a Google, pero el cliente sigue siendo responsable de IAM, de la configuración y de sus datos.",
      "C": "La superficie de ataque no se reduce por el tamaño del perímetro, e Interconnect es un servicio de conectividad privada, no un control de seguridad de la plataforma."
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
        "text": "Porque la facturación por consumo de Google Cloud abarata por sí sola los proyectos, con independencia de que el equipo siga planificando entregas únicas con especificaciones cerradas a dos años vista."
      },
      {
        "letter": "B",
        "text": "Porque la nube permite realizar experimentos rápidos, iterar sobre productos mínimos viables (MVP) y adaptarse con agilidad a la retroalimentación continua del usuario sin grandes compromisos iniciales de hardware."
      },
      {
        "letter": "C",
        "text": "Porque migrar los servidores tal cual mediante lift-and-shift obliga a congelar el alcance funcional durante la migración, y el modelo en cascada es el único que garantiza documentar por completo la infraestructura destino."
      },
      {
        "letter": "D",
        "text": "Porque Cloud Build, Artifact Registry y Cloud Deploy automatizan la integración y la entrega continua, y esas herramientas sustituyen a la priorización de producto y a las ceremonias del enfoque ágil."
      }
    ],
    "correct": "B",
    "explanation": "La elasticidad y el aprovisionamiento instantáneo de la nube se complementan naturalmente con el desarrollo ágil: permiten lanzar versiones tempranas (MVPs), validar hipótesis con usuarios reales y ajustar la dirección del producto con mínimo costo y desperdicio.",
    "distractors": {
      "C": "Describe una migración de infraestructura, no la razón de negocio para iterar; además la calidad de la documentación no depende de la metodología elegida.",
      "D": "La cadena de CI/CD habilita la entrega frecuente, pero las herramientas no reemplazan la práctica de validar hipótesis de producto con usuarios reales.",
      "A": "El ahorro por consumo es real, pero no es la razón por la que hace falta agilidad: con ciclos de dos años se sigue construyendo sobre hipótesis nunca validadas."
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
        "text": "Proporciona Looker y BigQuery para elaborar informes semanales de segmentación de clientes que el equipo de marketing revisa y convierte manualmente en campañas de correo electrónico dirigidas a cada grupo."
      },
      {
        "letter": "B",
        "text": "Proporciona Google Analytics 4 y Firebase para registrar el comportamiento de navegación y el historial de compras de cada usuario y almacenarlos en un panel de eventos consultable por el equipo de producto."
      },
      {
        "letter": "C",
        "text": "Proporciona servicios de inteligencia artificial como Vertex AI Search and Conversation y Contact Center AI para generar recomendaciones contextuales e interacciones conversacionales inteligentes en tiempo real."
      },
      {
        "letter": "D",
        "text": "Proporciona Cloud CDN y Cloud Load Balancing para acelerar la carga de la tienda y servir el catálogo de productos desde la ubicación más cercana a cada comprador, mejorando la experiencia de navegación."
      }
    ],
    "correct": "C",
    "explanation": "Las soluciones de IA de Google Cloud permiten procesar señales de comportamiento en tiempo real a escala masiva, ofreciendo recomendaciones altamente precisas y agentes virtuales conversacionales que elevan la satisfacción y fidelidad del cliente.",
    "distractors": {
      "A": "Es analítica por lotes con intervención humana: produce segmentos semanales, no la recomendación personalizada en tiempo real para cada usuario ni el soporte conversacional que pide el escenario.",
      "B": "Captura las señales de comportamiento que alimentarían el sistema, pero no genera ninguna recomendación ni atiende consultas en lenguaje natural: se queda en la instrumentación previa.",
      "D": "Mejora la latencia y el rendimiento de la tienda, un beneficio real, pero no personaliza nada: sirve el mismo catálogo a todos los usuarios y no aporta capacidades de lenguaje natural."
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
        "text": "'Cloud-First' establece la prioridad de evaluar soluciones en la nube antes que locales para nuevas iniciativas, mientras que 'Cloud-Native' diseña aplicaciones específicamente para aprovechar al máximo las capacidades de la nube (microservicios, contenedores, serverless y autoescalado)."
      },
      {
        "letter": "B",
        "text": "'Cloud-Native' es la política corporativa que obliga a evaluar primero las opciones en la nube para cualquier iniciativa nueva, mientras que 'Cloud-First' designa el patrón arquitectónico de microservicios, contenedores y servicios administrados que aprovecha la elasticidad de la plataforma."
      },
      {
        "letter": "C",
        "text": "'Cloud-First' consiste en trasladar las máquinas virtuales existentes tal cual mediante lift-and-shift, mientras que 'Cloud-Native' consiste en rehospedar esas mismas máquinas en instancias de mayor tamaño y con discos persistentes más rápidos dentro de Compute Engine."
      },
      {
        "letter": "D",
        "text": "'Cloud-First' designa una arquitectura híbrida que conserva la carga crítica en el centro de datos propio, y 'Cloud-Native' designa una estrategia multinube que reparte la misma aplicación entre varios proveedores de nube para no depender de uno solo."
      }
    ],
    "correct": "A",
    "explanation": "Cloud-First es una política estratégica de aprovisionamiento de TI; Cloud-Native es un patrón de diseño arquitectónico que aprovecha microservicios, contenedores, servicios gestionados y elasticidad nativa para obtener máxima resiliencia y velocidad.",
    "distractors": {
      "D": "Confunde ambos términos con modelos de despliegue (híbrido y multinube), que responden a dónde se ejecuta la carga y no a la prioridad de decisión ni al diseño.",
      "B": "Intercambia las definiciones: la política de prioridad en el aprovisionamiento es Cloud-First, y el patrón de diseño de aplicaciones es Cloud-Native.",
      "C": "Describe dos variantes de migración de infraestructura (rehost y replatform); ninguna de las dos es una política de decisión ni un patrón de diseño de aplicaciones."
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
        "text": "Ingiriendo datos de sensores IoT y telemetría de transporte en tiempo real a través de Pub/Sub y BigQuery para predecir cuellos de botella y optimizar rutas de entrega."
      },
      {
        "letter": "B",
        "text": "Consolidando en Looker Studio los informes mensuales en PDF que cada transportista envía al cierre de mes para construir un cuadro de mando histórico de puntualidad por ruta."
      },
      {
        "letter": "C",
        "text": "Sustituyendo el sistema de planificación por hojas de cálculo compartidas en Google Workspace donde cada almacén anota manualmente la posición estimada de cada contenedor recibido."
      },
      {
        "letter": "D",
        "text": "Aplicando Cloud CDN y balanceo de carga global al portal de proveedores para que las consultas sobre el estado de cada envío se resuelvan con menor latencia en cada país."
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud permite conectar datos de sensores de flotas, inventarios de almacenes y condiciones climáticas en una plataforma de streaming y analítica, proporcionando visibilidad integral de la cadena de suministro y mantenimiento predictivo.",
    "distractors": {
      "D": "Acelera la consulta del portal, un beneficio real, pero no añade ningún dato nuevo: si el sistema no conoce la ubicación de los componentes, servirlo más rápido no resuelve nada.",
      "C": "La anotación manual introduce el retraso y el error humano que el escenario quiere eliminar: no hay telemetría automática ni datos de sensores que actualicen la posición al instante.",
      "B": "Un informe mensual llega demasiado tarde para la línea de ensamblaje: aporta análisis retrospectivo, no la visibilidad en tiempo real sobre la posición actual de los componentes."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/supply-chain",
    "blockId": "BLOCK-5",
    "reservaCiega": true
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
        "text": "Dialogflow ES definiendo manualmente las intenciones y entidades del catálogo"
      },
      {
        "letter": "B",
        "text": "Vertex AI Model Garden ajustando un modelo Gemini con datos propios"
      },
      {
        "letter": "C",
        "text": "Búsqueda por palabras clave con el índice de texto completo de Cloud SQL"
      },
      {
        "letter": "D",
        "text": "Vertex AI Search and Conversation (anteriormente Generative AI App Builder)"
      }
    ],
    "correct": "D",
    "explanation": "Vertex AI Search and Conversation permite a las empresas crear rápidamente aplicaciones de búsqueda multimodal de nivel Google y agentes conversacionales de IA generativa conectados a sus propios datos empresariales de forma segura y con mínimo código.",
    "distractors": {
      "C": "La búsqueda por palabras clave localiza coincidencias literales de términos: no entiende la intención semántica de la consulta ni genera respuestas conversacionales.",
      "A": "Dialogflow ES exige redactar a mano intenciones y frases de entrenamiento: cubrir 100.000 productos y sus políticas de esa forma tardaría meses, no los pocos días del escenario.",
      "B": "Ajustar un modelo base requiere preparar datos y experiencia en aprendizaje automático: es justo el trabajo que la cadena quiere evitar al pedir un despliegue en pocos días."
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
        "text": "Cloud Shell Editor con autocompletado de `gcloud`"
      },
      {
        "letter": "B",
        "text": "Recomendador de Active Assist en la consola"
      },
      {
        "letter": "C",
        "text": "Gemini para Google Cloud (anteriormente Duet AI)"
      },
      {
        "letter": "D",
        "text": "Vertex AI Model Garden con modelos abiertos"
      }
    ],
    "correct": "C",
    "explanation": "Gemini para Google Cloud es el colaborador impulsado por IA generativa que asiste a desarrolladores, administradores de nube y analistas de datos en la redacción de código, generación de SQL en BigQuery, resolución de problemas de infraestructura y cumplimiento de mejores prácticas de seguridad.",
    "distractors": {
      "D": "Model Garden es el catálogo desde el que se construyen aplicaciones propias con modelos base: no es el asistente ya integrado en la consola y en los IDEs.",
      "A": "Ofrece autocompletado y ayuda de sintaxis del SDK, pero no genera código nuevo, ni consultas SQL, ni diagnostica errores de despliegue con IA generativa.",
      "B": "Active Assist emite recomendaciones sobre recursos concretos (dimensionamiento, roles, ociosidad); no asiste al desarrollador escribiendo código ni SQL en el IDE."
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
        "text": "Diarización de interlocutores (Speaker Diarization) en Cloud Speech-to-Text"
      },
      {
        "letter": "B",
        "text": "Adaptación del modelo (Model Adaptation) con frases de contexto en Speech-to-Text"
      },
      {
        "letter": "C",
        "text": "Reconocimiento multicanal (Multi-Channel Recognition) en Cloud Speech-to-Text"
      },
      {
        "letter": "D",
        "text": "Transcripción de audio largo con marcas de tiempo por palabra (word time offsets)"
      }
    ],
    "correct": "A",
    "explanation": "La diarización de interlocutores (Speaker Diarization) en Cloud Speech-to-Text reconoce automáticamente las diferencias de voz en el audio y asigna etiquetas numeradas a cada hablante individual a lo largo de la transcripción.",
    "distractors": {
      "C": "Separa la transcripción por canal físico de audio, y en una reunión grabada todos los participantes comparten un único canal.",
      "D": "Aporta la temporización exacta de cada palabra, pero no identifica quién la pronunció dentro de la reunión.",
      "B": "La adaptación mejora el reconocimiento de vocabulario y jerga específica, pero no atribuye cada frase a un interlocutor distinto."
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
        "text": "Google Cloud Billing Budgets"
      },
      {
        "letter": "B",
        "text": "Compute Engine Spot Instances"
      },
      {
        "letter": "C",
        "text": "Translation Hub"
      },
      {
        "letter": "D",
        "text": "Cloud Load Balancing"
      }
    ],
    "correct": "C",
    "explanation": "Translation Hub es un portal de traducción de documentos de nivel empresarial y autoservicio que utiliza IA para traducir documentos completos (PDF, DOCX, PPTX) preservando el formato original y permitiendo flujos de trabajo de pos-edición humana.",
    "distractors": {
      "A": "Billing Budgets establece alertas de gasto financiero del proyecto.",
      "D": "Cloud Load Balancing gestiona el balanceo de tráfico de red.",
      "B": "Spot Instances son máquinas virtuales temporales de bajo costo."
    },
    "officialDocUrl": "https://cloud.google.com/translation-hub/docs",
    "blockId": "BLOCK-5",
    "reservaCiega": true
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
        "text": "Custom Document Extractor (CDE) en Document AI Workbench"
      },
      {
        "letter": "B",
        "text": "Form Parser preentrenado de Document AI sin etiquetar"
      },
      {
        "letter": "C",
        "text": "Custom Document Classifier en Document AI Workbench"
      },
      {
        "letter": "D",
        "text": "Document OCR (procesador de reconocimiento de texto)"
      }
    ],
    "correct": "A",
    "explanation": "Custom Document Extractor en Document AI Workbench permite a las empresas entrenar y evaluar modelos personalizados para extraer campos y entidades específicos de tipos de documentos no estándar o propios de su industria utilizando sus propios documentos de entrenamiento etiquetados.",
    "distractors": {
      "C": "El clasificador personalizado asigna un tipo a cada documento, pero no extrae los campos de su contenido.",
      "B": "El Form Parser extrae pares clave-valor genéricos de formularios, no los campos farmacológicos propios del laboratorio.",
      "D": "El OCR devuelve el texto y su posición en la página, sin estructurar las entidades del reporte clínico."
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
        "text": "Vertex AI Feature Store"
      },
      {
        "letter": "B",
        "text": "Google Compute Engine Bare Metal"
      },
      {
        "letter": "C",
        "text": "Cloud VPN"
      },
      {
        "letter": "D",
        "text": "Cloud Storage Archive"
      }
    ],
    "correct": "A",
    "explanation": "Vertex AI Feature Store es un repositorio administrado y centralizado que permite a las organizaciones almacenar, descubrir, compartir y servir características de Machine Learning de forma unificada tanto para entrenamiento por lotes como para inferencia en tiempo real de baja latencia.",
    "distractors": {
      "D": "Archive Storage es para retención fría de largo plazo y no proporciona servicio de características en tiempo real con baja latencia.",
      "C": "Cloud VPN gestiona redes seguras punto a punto.",
      "B": "Bare Metal son servidores físicos sin software de gobernanza de machine learning."
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
        "text": "Vertex AI Model Monitoring, que detecta la deriva de datos y el sesgo de entrenamiento del modelo"
      },
      {
        "letter": "B",
        "text": "Data Catalog en Dataplex, documentando el linaje y el propietario de cada columna del conjunto"
      },
      {
        "letter": "C",
        "text": "Vertex AI Model Registry, que versiona los modelos y almacena sus métricas globales de evaluación"
      },
      {
        "letter": "D",
        "text": "Vertex Explainable AI (que calcula y muestra las atribuciones de características para cada predicción)"
      }
    ],
    "correct": "D",
    "explanation": "Vertex Explainable AI ayuda a comprender las decisiones de los modelos de Machine Learning al cuantificar la contribución y peso relativo de cada característica (Feature Attribution) en el resultado de la predicción, facilitando la auditoría, la equidad y el cumplimiento regulatorio.",
    "distractors": {
      "C": "El registro versiona modelos y guarda métricas agregadas como la precisión o el AUC; esas cifras globales no justifican ante el regulador un rechazo individual.",
      "A": "Model Monitoring compara distribuciones sobre el conjunto de predicciones para alertar de deriva; trabaja a nivel de población, no explica una decisión individual.",
      "B": "Data Catalog documenta de dónde viene cada columna y quién la gobierna, pero no cuantifica cuánto pesó cada variable en el rechazo de una solicitud concreta."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/explainable-ai/overview",
    "blockId": "BLOCK-5",
    "reservaCiega": true
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
        "text": "Tarjeta de Modelo (Model Card)"
      },
      {
        "letter": "B",
        "text": "Contraseña maestra de la base de datos"
      },
      {
        "letter": "C",
        "text": "Factura de compra de hardware físico"
      },
      {
        "letter": "D",
        "text": "Certificado SSL de servidor web"
      }
    ],
    "correct": "A",
    "explanation": "Las Model Cards (Tarjetas de Modelos) son documentos estandarizados que proporcionan información detallada y estructurada sobre el funcionamiento, propósitos previstos, limitaciones, consideraciones éticas y métricas de evaluación de un modelo de Machine Learning, promoviendo la transparencia y el uso responsable de la IA.",
    "distractors": {
      "D": "Un certificado SSL cifra el tráfico de red web HTTPS, no documenta modelos de ML.",
      "B": "Una contraseña es una clave de autenticación, no documentación metodológica.",
      "C": "Una factura de hardware no contiene detalles sobre el comportamiento algorítmico ni consideraciones éticas."
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
        "text": "(1) Persistent Disk (bloques), (2) Filestore (archivos NFS), (3) Cloud Storage (objetos)"
      },
      {
        "letter": "B",
        "text": "(1) Persistent Disk (bloques), (2) Cloud Storage (objetos), (3) Filestore (archivos NFS)"
      },
      {
        "letter": "C",
        "text": "(1) Cloud Storage (objetos), (2) Persistent Disk (bloques), (3) Filestore (archivos NFS)"
      },
      {
        "letter": "D",
        "text": "(1) Filestore (archivos NFS), (2) Cloud Storage (objetos), (3) Persistent Disk (bloques)"
      }
    ],
    "correct": "B",
    "explanation": "Persistent Disk proporciona almacenamiento de bloques de alto rendimiento para máquinas virtuales; Cloud Storage es almacenamiento de objetos altamente escalable y económico accesible mediante APIs web; y Filestore ofrece sistemas de archivos NFS totalmente administrados para aplicaciones compartidas tradicionales.",
    "distractors": {
      "A": "Acierta el disco de arranque, pero intercambia los otros dos: Filestore es un NFS para servidores, no un repositorio global accesible por HTTP para millones de imágenes.",
      "C": "Un bucket de Cloud Storage no puede actuar como disco de arranque de una VM, y Persistent Disk no sirve objetos por HTTP a escala global.",
      "D": "Un Persistent Disk sólo admite un escritor: no puede montarse en lectura-escritura simultánea desde varios servidores Linux, que es el requisito del tercer caso."
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
        "text": "Compute Engine Preemptible Instances"
      },
      {
        "letter": "B",
        "text": "Cloud Domains"
      },
      {
        "letter": "C",
        "text": "Cloud Shell"
      },
      {
        "letter": "D",
        "text": "Cloud Data Fusion"
      }
    ],
    "correct": "D",
    "explanation": "Cloud Data Fusion es un servicio de integración de datos sin servidor y completamente administrado basado en CDAP, que ofrece una interfaz gráfica de usuario para construir canalizaciones ETL/ELT complejas con una amplia biblioteca de transformaciones y conectores preconfigurados.",
    "distractors": {
      "B": "Cloud Domains es un servicio para comprar y registrar nombres de dominio web.",
      "C": "Cloud Shell es una consola de línea de comandos en el navegador.",
      "A": "Preemptible Instances son máquinas virtuales temporales con descuento, no una herramienta gráfica de integración de datos."
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
        "text": "Ocurre porque el clúster tiene menos nodos de los necesarios para el volumen de ingesta; se resuelve añadiendo nodos al clúster de Bigtable para repartir la carga de escritura entre más servidores y elevar así el rendimiento total de la tabla."
      },
      {
        "letter": "B",
        "text": "Ocurre hotspotting porque las claves secuenciales escriben en el mismo rango contiguo de nodos; se resuelve anteponiendo un identificador de alta cardinalidad (como el ID del vehículo) a la clave de fila para distribuir las escrituras uniformemente entre todos los nodos."
      },
      {
        "letter": "C",
        "text": "Ocurre porque las escrituras secuenciales bloquean el índice secundario de la tabla; se resuelve creando un índice adicional sobre la columna del identificador de vehículo para que las consultas dejen de recorrer toda la marca de tiempo."
      },
      {
        "letter": "D",
        "text": "Ocurre porque la marca de tiempo es un dato de baja cardinalidad; se resuelve invirtiendo la marca de tiempo o añadiendo un valor aleatorio (salt) al final de la clave de fila para distribuir las escrituras entre todos los nodos del clúster."
      }
    ],
    "correct": "B",
    "explanation": "En Cloud Bigtable, las tablas se ordenan lexicográficamente por la clave de fila (Row Key). Usar marcas de tiempo secuenciales puras envía todas las escrituras a una sola partición/nodo (hotspotting). Diseñar claves de fila que comiencen con prefijos distribuidos (como `vehicle_id#timestamp`) distribuye el tráfico equitativamente entre todos los nodos.",
    "distractors": {
      "D": "Bigtable ordena lexicográficamente por la clave completa: un sufijo aleatorio no cambia el rango de destino y una marca invertida sigue siendo monótona, así que el punto caliente persiste.",
      "C": "Bigtable no tiene índices secundarios: la clave de fila es el único índice, y por eso el reparto de la carga se resuelve en el diseño de esa clave.",
      "A": "Con una clave secuencial todas las escrituras siguen cayendo en el mismo rango contiguo: añadir nodos deja los nuevos ociosos porque el punto caliente no se reparte."
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
        "text": "Eliminación de la administración y aprovisionamiento de hardware, escalabilidad elástica instantánea sin tiempos de inactividad, mantenimiento automático de software y reducción sustancial del Costo Total de Propiedad (TCO)."
      },
      {
        "letter": "B",
        "text": "Conservación del mismo dimensionamiento de nodos que tenían en Teradata, ya que BigQuery exige reservar por adelantado un clúster de tamaño fijo mediante un contrato anual antes de poder ejecutar la primera consulta."
      },
      {
        "letter": "C",
        "text": "Sustitución obligatoria de todo el SQL existente por código en Java o Python sobre Apache Beam, ya que BigQuery no admite dialectos SQL estándar ni las funciones analíticas del almacén de datos anterior del banco."
      },
      {
        "letter": "D",
        "text": "Reducción inmediata del coste de la red WAN de la sede corporativa y cifrado de las copias de seguridad en cinta, que pasan a custodiarse en el mismo centro de datos donde reside el almacén analítico."
      }
    ],
    "correct": "A",
    "explanation": "BigQuery es una plataforma analítica completamente serverless donde Google administra el aprovisionamiento, mantenimiento, replicación y seguridad, permitiendo a las empresas migrar de almacenes propietarios costosos a un modelo de pago por uso altamente escalable.",
    "distractors": {
      "C": "BigQuery admite GoogleSQL, compatible con ANSI, y ofrece herramientas de traducción de SQL heredado: la migración no obliga a reescribir la analítica en Beam.",
      "B": "BigQuery es serverless y por defecto factura bajo demanda; las reservas de slots son opcionales y elásticas, no un clúster fijo obligatorio con compromiso anual.",
      "D": "Menciona beneficios de conectividad y respaldo ajenos a la pregunta: no aborda la eliminación del aprovisionamiento de hardware, la elasticidad ni el TCO."
    },
    "officialDocUrl": "https://cloud.google.com/solutions/migration-to-bigquery",
    "blockId": "BLOCK-5",
    "reservaCiega": true
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
        "text": "El cifrado en reposo debe activarse de forma explícita en cada bucket, conjunto de datos e instancia creando previamente claves gestionadas por el cliente (CMEK) en Cloud KMS antes de escribir dato alguno."
      },
      {
        "letter": "B",
        "text": "Sólo Cloud Storage cifra los datos en reposo de forma predeterminada; en BigQuery y en Cloud SQL el cifrado de disco es una función de pago que debe contratarse por separado para cada instancia."
      },
      {
        "letter": "C",
        "text": "Google Cloud cifra automáticamente todos los datos de los clientes en reposo (utilizando AES-256) y en tránsito de forma predeterminada sin requerir ninguna acción o costo adicional por parte del cliente."
      },
      {
        "letter": "D",
        "text": "Los datos se cifran únicamente mientras viajan por la red pública, pero se escriben en texto plano en los discos de Google salvo que se contrate Assured Workloads para el proyecto que los aloja."
      }
    ],
    "correct": "C",
    "explanation": "Por diseño de seguridad en profundidad, Google Cloud cifra todos los datos de los clientes en reposo de forma predeterminada utilizando el estándar de cifrado avanzado AES-256 con claves gestionadas por Google, además de cifrar automáticamente los datos en tránsito sobre redes fuera de las instalaciones físicas de Google.",
    "distractors": {
      "D": "Invierte la realidad: el cifrado en reposo es la garantía predeterminada, y Assured Workloads aporta controles de cumplimiento y residencia de datos, no la activación del cifrado.",
      "B": "El cifrado en reposo predeterminado se aplica por igual a Cloud Storage, BigQuery y Cloud SQL, y no conlleva ningún cargo adicional en ninguno de los tres servicios.",
      "A": "Confunde control de la clave con existencia del cifrado: el cifrado en reposo ya está activo por defecto con claves gestionadas por Google, y CMEK es una opción para que el cliente controle la clave, no un requisito previo."
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
        "text": "Cifrado predeterminado de Google Cloud con claves gestionadas por la plataforma (Google-managed keys)"
      },
      {
        "letter": "B",
        "text": "Customer-Managed Encryption Keys (CMEK) administradas a través de Cloud Key Management Service (Cloud KMS)"
      },
      {
        "letter": "C",
        "text": "Customer-Supplied Encryption Keys (CSEK) suministradas en cada petición a la API de Cloud Storage"
      },
      {
        "letter": "D",
        "text": "Secret Manager con rotación programada de las credenciales de acceso a BigQuery y a Cloud Storage"
      }
    ],
    "correct": "B",
    "explanation": "Customer-Managed Encryption Keys (CMEK) permite a los clientes utilizar sus propias claves de cifrado creadas y administradas en Cloud KMS para proteger datos en servicios de Google Cloud (BigQuery, Cloud Storage, Compute Engine), manteniendo el control total para rotar o revocar el acceso a las llaves en cualquier momento.",
    "distractors": {
      "C": "CSEK obliga al cliente a custodiar la clave fuera de Google y no está disponible para BigQuery, uno de los servicios que exige el requisito.",
      "A": "Cifra todos los datos en reposo por defecto, pero el banco no puede rotar ni revocar esas claves: el control lo mantiene Google.",
      "D": "Secret Manager gestiona secretos de aplicación, no las claves criptográficas que cifran los datos en reposo de los servicios."
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
        "text": "Política de organización de uso compartido restringido por dominio aplicada al proyecto del laboratorio"
      },
      {
        "letter": "B",
        "text": "Claves de cifrado gestionadas por el cliente (CMEK) en Cloud KMS para los datasets y los buckets del laboratorio"
      },
      {
        "letter": "C",
        "text": "VPC Service Controls (creando un perímetro de servicio seguro alrededor de los recursos de BigQuery y Cloud Storage)"
      },
      {
        "letter": "D",
        "text": "Reglas de firewall de VPC y Acceso Privado a Google que bloqueen la salida a Internet de las subredes"
      }
    ],
    "correct": "C",
    "explanation": "VPC Service Controls permite definir perímetros de seguridad alrededor de los servicios administrados de Google Cloud (como BigQuery y Cloud Storage) para aislar los datos dentro de la red confiable y prevenir la exfiltración de información hacia proyectos o cuentas externas no autorizadas.",
    "distractors": {
      "B": "CMEK controla el cifrado en reposo; un usuario con permisos válidos sigue leyendo los datos ya descifrados y puede exportarlos fuera del perímetro.",
      "A": "Impide conceder permisos de IAM a identidades de otros dominios, pero no evita que una cuenta interna legítima copie los datos a otro proyecto propio.",
      "D": "El firewall filtra el tráfico de red de las máquinas virtuales, pero BigQuery y Cloud Storage son APIs de Google a las que se accede fuera de la VPC."
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
        "text": "(1) RPO (Recovery Point Objective); (2) RTO (Recovery Time Objective)"
      },
      {
        "letter": "B",
        "text": "(1) RTO (Recovery Time Objective); (2) RPO (Recovery Point Objective)"
      },
      {
        "letter": "C",
        "text": "(1) SLO (Service Level Objective); (2) SLA (Service Level Agreement)"
      },
      {
        "letter": "D",
        "text": "(1) MTTR (Mean Time To Repair); (2) MTBF (Mean Time Between Failures)"
      }
    ],
    "correct": "B",
    "explanation": "El RTO (Recovery Time Objective) es la duración máxima tolerable de tiempo de inactividad que una aplicación puede sufrir antes de restablecerse. El RPO (Recovery Point Objective) es la cantidad máxima tolerable de pérdida de datos medida en tiempo (los datos generados entre el último respaldo y el incidente).",
    "distractors": {
      "A": "Invierte las dos métricas: el tiempo máximo de inactividad es el RTO y la pérdida máxima de datos es el RPO, no al revés.",
      "D": "Son promedios estadísticos de mantenimiento observados, no objetivos de continuidad que la dirección fija por adelantado.",
      "C": "SLO y SLA fijan el nivel de servicio comprometido en operación normal; no describen los objetivos de recuperación tras un desastre."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/dr-scenarios-planning-guide",
    "blockId": "BLOCK-5",
    "reservaCiega": true
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
        "text": "Warm Standby: una réplica de tamaño mínimo permanece encendida en `us-west1` y se escala para asumir el tráfico cuando `us-east1` falla y se declara la conmutación por error."
      },
      {
        "letter": "B",
        "text": "Cold Standby: copias de seguridad automáticas en un bucket `gs://dr-backups-us-west1` de Cloud Storage multirregión que se restauran sobre infraestructura nueva al declarar el desastre."
      },
      {
        "letter": "C",
        "text": "Pilot Light: la base de datos se replica de forma asíncrona a `us-west1` (región secundaria) y los servidores de aplicación permanecen apagados hasta activar el plan de DR."
      },
      {
        "letter": "D",
        "text": "Arquitectura Activo-Activo Multi-Región (Hot Standby / Multi-Region Active-Active), donde ambas regiones procesan tráfico real simultáneamente con replicación síncrona."
      }
    ],
    "correct": "D",
    "explanation": "Una arquitectura Activo-Activo (Hot Standby multi-región) mantiene sistemas en ejecución continua procesando tráfico en múltiples regiones con replicación sincrónica (usando tecnologías como Cloud Spanner y balanceadores globales), ofreciendo RTO y RPO prácticamente de cero ante fallas de una región entera.",
    "distractors": {
      "B": "El Cold Standby no tiene infraestructura en ejecución: hay que aprovisionar y restaurar, con un RTO de horas, y el RPO queda determinado por el intervalo entre copias de seguridad, lo que incumple el requisito de cero segundos.",
      "A": "El Warm Standby deja un entorno reducido encendido, pero la conmutación exige escalar la capacidad y redirigir el tráfico, lo que produce un RTO de minutos, y la replicación asíncrona habitual deja un RPO mayor que cero.",
      "C": "La replicación asíncrona admite pérdida de transacciones en vuelo, de modo que el RPO no es cero, y encender los servidores de aplicación durante la contingencia impide alcanzar un RTO cercano a cero."
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
        "text": "Significa que el centro de datos opera con energía libre de carbono durante casi el 100 por ciento de las horas del día, ya que el PUE mide la proporción de electricidad renovable contratada por Google."
      },
      {
        "letter": "B",
        "text": "Significa que casi toda la energía consumida se destina directamente al funcionamiento de los servidores de cómputo, minimizando el desperdicio energético en refrigeración e infraestructura auxiliar."
      },
      {
        "letter": "C",
        "text": "Significa que el centro de datos consume aproximadamente un litro de agua por cada kilovatio-hora de cómputo, ya que el PUE relaciona el gasto hídrico de la refrigeración con la carga de TI."
      },
      {
        "letter": "D",
        "text": "Significa que la infraestructura auxiliar de refrigeración y distribución eléctrica consume prácticamente lo mismo que los servidores, porque un PUE de 1.10 reparte el consumo casi a partes iguales."
      }
    ],
    "correct": "B",
    "explanation": "El PUE (Power Usage Effectiveness) es la relación entre la energía total consumida por el centro de datos y la energía consumida por el equipo de TI. Un valor ideal de 1.0 significa cero desperdicio. Google Cloud opera con un PUE promedio líder de ~1.10 mediante diseño avanzado de servidores y refrigeración con IA.",
    "distractors": {
      "A": "Confunde el PUE con el porcentaje de energía libre de carbono (CFE): el PUE mide la eficiencia del uso de la electricidad, no su origen renovable.",
      "C": "Esa relación es la WUE (Water Usage Effectiveness); el PUE es un cociente entre dos consumos eléctricos y no contabiliza el agua de refrigeración.",
      "D": "Invierte la lectura del cociente: un PUE de 1.10 indica que lo auxiliar añade solo un 10 por ciento sobre el consumo de TI, no la mitad del total."
    },
    "officialDocUrl": "https://cloud.google.com/sustainability/progress/data-centers",
    "blockId": "BLOCK-5",
    "reservaCiega": true
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
        "text": "Patrón Strangler Fig (Patrón de la Higuera Estranguladora)"
      },
      {
        "letter": "B",
        "text": "Patrón Big Bang (reescritura total en un único corte)"
      },
      {
        "letter": "C",
        "text": "Patrón Anti-Corruption Layer (capa anticorrupción)"
      },
      {
        "letter": "D",
        "text": "Patrón Lift-and-Shift (rehost del monolito sin cambios)"
      }
    ],
    "correct": "A",
    "explanation": "El patrón Strangler Fig (Higuera Estranguladora) es la estrategia recomendada por Google Cloud para modernizar sistemas legados: reemplaza gradualmente componentes específicos del monolito por nuevos microservicios en la nube detrás de una capa de enrutamiento (como Apigee o Cloud Load Balancing), reduciendo drásticamente el riesgo operativo.",
    "distractors": {
      "B": "Es justamente la reescritura total en un solo corte que la empresa ha descartado por su alto riesgo de fracaso.",
      "D": "Rehost traslada el monolito tal cual a la nube: no extrae funcionalidades ni las convierte en microservicios, así que el sistema sigue siendo el mismo monolito.",
      "C": "La capa anticorrupción traduce entre el modelo heredado y el nuevo: es una táctica de apoyo dentro de la migración, no la estrategia de sustitución progresiva del monolito."
    },
    "officialDocUrl": "https://cloud.google.com/architecture/modernizing-legacy-applications",
    "blockId": "BLOCK-5",
    "reservaCiega": true
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
        "text": "Google Cloud permite trasladar tal cual las máquinas virtuales del centro de datos con Migrate to Virtual Machines, conservando la misma arquitectura y los mismos procesos de operación, lo que reduce el riesgo del proyecto de migración."
      },
      {
        "letter": "B",
        "text": "El valor de la modernización se concentra en el ahorro: al sustituir la inversión de capital en servidores por gasto operativo variable y aplicar descuentos por compromiso de uso, la factura de TI se reduce cada ejercicio."
      },
      {
        "letter": "C",
        "text": "Google Cloud permite reemplazar la rigidez de los centros de datos locales por servicios elásticos, automatizados y serverless, permitiendo lanzar productos en minutos en lugar de meses y pagando solo por el consumo real con máxima seguridad y sostenibilidad."
      },
      {
        "letter": "D",
        "text": "La modernización consiste en implantar Cloud Monitoring, Cloud Logging y paneles de observabilidad que den al comité de dirección visibilidad en tiempo real del estado de los sistemas y del cumplimiento de los acuerdos de nivel de servicio."
      }
    ],
    "correct": "C",
    "explanation": "La modernización en Google Cloud transforma la tecnología de un centro de costos lento y rígido en un motor ágil de innovación que escala bajo demanda globalmente, reduce el tiempo de desarrollo e impulsa la competitividad del negocio con resiliencia y eficiencia de costos.",
    "distractors": {
      "B": "Recoge únicamente el tercer pilar, la eficiencia financiera, y deja fuera la escalabilidad elástica global y la agilidad de innovación, que son las dos palancas de crecimiento que interesan a la junta directiva.",
      "D": "La observabilidad mejora cómo se opera lo que ya existe y es un habilitador, no un pilar de valor: no aporta escalabilidad elástica ni acorta el tiempo al mercado de nuevos productos.",
      "A": "Un traslado literal reubica la carga de trabajo pero mantiene su rigidez: no aporta por sí solo elasticidad, no acorta el tiempo de lanzamiento de productos y conserva la capacidad sobredimensionada que causa el costo actual."
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
        "text": "(1) Compute-optimized (C2/C3), (2) Memory-optimized (M2/M3), (3) General-purpose (E2/N2)"
      },
      {
        "letter": "B",
        "text": "(1) General-purpose (E2/N2), (2) Memory-optimized (M2/M3), (3) Compute-optimized (C2/C3)"
      },
      {
        "letter": "C",
        "text": "(1) Memory-optimized (M2/M3), (2) Compute-optimized (C2/C3), (3) Accelerator-optimized (A2)"
      },
      {
        "letter": "D",
        "text": "(1) General-purpose (E2/N2), (2) Compute-optimized (C2/C3), (3) Memory-optimized (M2/M3)"
      }
    ],
    "correct": "D",
    "explanation": "Compute Engine ofrece familias de máquinas optimizadas: General-purpose (E2, N2) para balance general; Compute-optimized (C2, C3) para máximo rendimiento por núcleo de CPU; y Memory-optimized (M2, M3) con hasta 12 TB de RAM certificadas para SAP HANA.",
    "distractors": {
      "C": "A2 lleva GPUs para entrenamiento de modelos, no la memoria certificada para SAP HANA, y usar M2/M3 en cargas de uso general dispara el costo.",
      "A": "Invierte el equilibrio: C2/C3 son las más caras por núcleo y no son la opción de uso general, y E2 no llega a los terabytes de RAM que exige SAP HANA.",
      "B": "Intercambia los dos casos especializados: la codificación de video es intensiva en CPU (C2/C3) y SAP HANA necesita la RAM de la familia M2/M3."
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
        "text": "Familias de máquinas optimizadas para cómputo C3 y H3 con procesadores Intel de última generación"
      },
      {
        "letter": "B",
        "text": "Vertex AI Workbench con notebooks administrados y conjuntos de datos alojados en Cloud Storage"
      },
      {
        "letter": "C",
        "text": "Cloud TPUs (Tensor Processing Units) y familias de máquinas aceleradas (A2/A3) con GPUs NVIDIA H100/A100"
      },
      {
        "letter": "D",
        "text": "Familias de máquinas con mucha memoria M3 y discos Local SSD para conjuntos de datos en memoria"
      }
    ],
    "correct": "C",
    "explanation": "Las Cloud TPUs (Tensor Processing Units) son circuitos integrados para aplicaciones específicas (ASICs) desarrollados por Google diseñados para acelerar cargas de trabajo de Machine Learning, junto con las VMs optimizadas con aceleradores (A2/A3) que integran GPUs NVIDIA Tensor Core.",
    "distractors": {
      "D": "Están optimizadas para cargas en memoria como SAP HANA: aportan RAM, no capacidad de cálculo matricial acelerado por hardware.",
      "B": "Es el entorno de desarrollo y experimentación de los científicos de datos, no el hardware acelerador que ejecuta el entrenamiento.",
      "A": "Son familias de CPU de alto rendimiento por núcleo: no incorporan aceleradores diseñados por Google ni GPU para entrenar modelos de aprendizaje profundo."
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
        "text": "Google Cloud Billing"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Nearline"
      },
      {
        "letter": "C",
        "text": "Cloud Filestore"
      },
      {
        "letter": "D",
        "text": "Cloud Memorystore for Redis"
      }
    ],
    "correct": "C",
    "explanation": "Cloud Filestore es un servicio de almacenamiento de archivos conectado a la red (NAS) totalmente administrado compatible con POSIX y NFSv3/NFSv4.1, que permite a múltiples instancias de Compute Engine y pods de GKE montar un volumen compartido de alta velocidad.",
    "distractors": {
      "D": "Memorystore es una caché de datos clave-valor en RAM, no un sistema de archivos NFS para guardar archivos.",
      "A": "Cloud Billing gestiona finanzas y facturación de la nube.",
      "B": "Cloud Storage es un almacén de objetos accesible por API HTTP/REST, no un sistema de archivos de red NFS estándar."
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
        "text": "Adjuntar un Persistent Disk en modo lectura-escritura a cada instancia del servicio para que todos los contenedores activos compartan el mismo sistema de archivos de documentos."
      },
      {
        "letter": "B",
        "text": "Usar el directorio `/tmp` del contenedor de Cloud Run como almacenamiento compartido, ya que persiste entre revisiones y es visible para todas las instancias que atienden peticiones."
      },
      {
        "letter": "C",
        "text": "Montar buckets de Cloud Storage (mediante Cloud Storage FUSE) o volúmenes de Cloud Filestore como sistemas de archivos locales dentro de los contenedores de Cloud Run."
      },
      {
        "letter": "D",
        "text": "Configurar un conector de Acceso a VPC sin servidor (Serverless VPC Access), que por sí solo expone los discos de las VMs de la VPC como carpetas locales dentro del contenedor."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Run soporta el montaje directo de volúmenes de almacenamiento, permitiendo a los contenedores serverless acceder de forma transparente a buckets de Cloud Storage (vía Cloud Storage FUSE) o a recursos compartidos NFS de Cloud Filestore como directorios locales.",
    "distractors": {
      "B": "El sistema de archivos local de Cloud Run, incluido `/tmp`, reside en memoria RAM y es efímero y propio de cada instancia: se pierde al reciclar el contenedor y no es visible para las demás instancias.",
      "D": "El conector de VPC sólo aporta alcance de red hacia la VPC: es el requisito previo para llegar a un recurso NFS, pero no es el mecanismo que monta el volumen dentro del contenedor.",
      "A": "Cloud Run no permite adjuntar discos persistentes de Compute Engine a sus instancias, y un Persistent Disk en lectura-escritura admite un único escritor, por lo que no daría el acceso compartido que pide el escenario."
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
    "scenario": "Una empresa construye una arquitectura basada en eventos donde más de 90 fuentes de eventos de Google Cloud (creación de objetos en Cloud Storage, registros en Cloud Audit Logs, eventos de Pub/Sub) deben entregarse de forma estandarizada (CloudEvents) a microservicios en Cloud Run, además de eventos personalizados que la propia aplicación de la empresa genera y necesita publicar hacia esos mismos microservicios. ¿Qué dos elementos deben usarse para lograrlo? (Elige 2.)",
    "keywords": [
      "Eventarc",
      "CloudEvents",
      "Arquitectura orientada a eventos",
      "Disparadores serverless",
      "Cloud Run y Cloud Functions"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Compute Engine Sole-Tenant Nodes"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive"
      },
      {
        "letter": "C",
        "text": "Cloud Interconnect Dedicated"
      },
      {
        "letter": "D",
        "text": "Eventarc"
      },
      {
        "letter": "E",
        "text": "Un tema de Pub/Sub para el disparador de Eventarc"
      }
    ],
    "correct": [
      "D",
      "E"
    ],
    "explanation": "Eventarc enruta eventos de más de 90 fuentes nativas de Google Cloud hacia destinos serverless usando el estándar CloudEvents. Para eventos personalizados que la propia aplicación genera, el patrón estándar es publicarlos como CloudEvents en un tema de Pub/Sub, que Eventarc usa como origen del disparador; se necesitan ambos elementos para cubrir tanto las fuentes nativas como las personalizadas.",
    "distractors": {
      "A": "Compute Engine Sole-Tenant Nodes reserva hardware físico dedicado para cumplimiento o licenciamiento; no tiene relación con enrutar eventos entre servicios.",
      "C": "Cloud Interconnect Dedicated es un enlace de red física entre la red on-premises y Google Cloud; no tiene función alguna en el enrutamiento de eventos.",
      "B": "Cloud Storage Archive es una clase de almacenamiento de bajo costo para datos que casi nunca se acceden; no enruta ni entrega eventos."
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
        "text": "Cloud Workflows"
      },
      {
        "letter": "B",
        "text": "Cloud Billing API"
      },
      {
        "letter": "C",
        "text": "Cloud DNS"
      },
      {
        "letter": "D",
        "text": "Escribir código de espera manual con `sleep(10)` en cada servidor"
      }
    ],
    "correct": "A",
    "explanation": "Cloud Workflows es un motor de orquestación serverless que coordina servicios de Google Cloud y APIs HTTP externas en flujos de trabajo basados en YAML/JSON con gestión de estado integrada, reintentos automáticos y manejo de excepciones.",
    "distractors": {
      "C": "Cloud DNS resuelve nombres de dominio.",
      "B": "Cloud Billing gestiona pagos y costos de nube.",
      "D": "Usar sleeps manuales en código es frágil, costoso (paga tiempo ocioso) y no maneja fallos distribuidos."
    },
    "officialDocUrl": "https://cloud.google.com/workflows/docs",
    "blockId": "BLOCK-5",
    "reservaCiega": true
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
        "text": "Cloud Storage Coldline"
      },
      {
        "letter": "B",
        "text": "Desactivar 24 clústeres y quedarse con uno solo pequeño"
      },
      {
        "letter": "C",
        "text": "Flotas de Clústeres (Fleets en GKE Enterprise)"
      },
      {
        "letter": "D",
        "text": "Copiar archivos de configuración manualmente por correo electrónico a 25 personas"
      }
    ],
    "correct": "C",
    "explanation": "Las Flotas (Fleets) en GKE Enterprise permiten agrupar lógicamente múltiples clústeres de Kubernetes (en Google Cloud, en premisas o en otras nubes) para simplificar la gestión masiva, aplicar políticas de seguridad idénticas y habilitar servicios multi-clúster.",
    "distractors": {
      "D": "El copiado manual de configuraciones es lento, genera inconsistencias y es inauditable.",
      "B": "Reducir a un solo clúster elimina la presencia global y la resiliencia geográfica de la empresa.",
      "A": "Cloud Storage Coldline es para almacenamiento pasivo."
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
        "text": "Utiliza modelos de Machine Learning entrenados con telemetría global de Google para detectar anomalías de tráfico en tiempo real, identificar firmas del ataque y generar reglas de bloqueo sugeridas de forma automática."
      },
      {
        "letter": "B",
        "text": "Aplica el conjunto de reglas WAF preconfiguradas de Cloud Armor basadas en ModSecurity Core Rule Set, comparando cada petición con las firmas conocidas de inyección SQL, XSS y ejecución remota de código."
      },
      {
        "letter": "C",
        "text": "Distribuye el tráfico entrante entre más regiones con el balanceador de carga global y Cloud CDN, absorbiendo el volumen del ataque en la caché del borde hasta que el patrón de peticiones se normalice."
      },
      {
        "letter": "D",
        "text": "Limita las peticiones por dirección IP mediante reglas de limitación de frecuencia (rate limiting) fijas en Cloud Armor, bloqueando a cualquier cliente que supere el umbral definido por el administrador."
      }
    ],
    "correct": "A",
    "explanation": "Cloud Armor Adaptive Protection utiliza modelos avanzados de Machine Learning para analizar el tráfico web, detectar patrones anómalos de ataques DDoS de Capa 7 y generar alertas accionables con reglas de mitigación específicas para neutralizar el ataque rápidamente.",
    "distractors": {
      "D": "El umbral es fijo y manual: un ataque distribuido entre miles de IP se mantiene por debajo del límite por cliente, y ajustarlo a mano llega tarde frente a un patrón cambiante.",
      "C": "Absorber tráfico escala el coste con el ataque y no distingue peticiones maliciosas de legítimas: mitiga volumen, pero no identifica ni bloquea el ataque de Capa 7.",
      "B": "Son reglas basadas en firmas estáticas y el escenario indica que el ataque no coincide con ninguna firma conocida, que es justamente el hueco que cubre Adaptive Protection."
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
        "text": "Desplegar Cloud Run en ambas regiones y publicar los dos extremos en Cloud DNS con una política de enrutamiento por geolocalización y comprobaciones de estado que conmuten el registro ante una caída regional."
      },
      {
        "letter": "B",
        "text": "Desplegar el servicio de Cloud Run en ambas regiones y colocarlas como backends detrás de un Global External Application Load Balancer con Serverless NEGs (Network Endpoint Groups)."
      },
      {
        "letter": "C",
        "text": "Configurar un Balanceador de Carga de Aplicaciones externo regional en us-central1 con Serverless NEGs que apunten a los servicios de Cloud Run desplegados en las dos regiones del escenario."
      },
      {
        "letter": "D",
        "text": "Usar Cloud Service Mesh con Traffic Director para enrutar las peticiones de los usuarios de Internet hacia el servicio de Cloud Run más cercano y conmutar automáticamente a la otra región ante un corte."
      }
    ],
    "correct": "B",
    "explanation": "Combinar Cloud Run multi-región con un Global External Application Load Balancer mediante Serverless NEGs permite distribuir el tráfico globalmente con una sola IP Anycast, logrando balanceo inteligente por latencia y conmutación automática (failover) ante contingencias regionales.",
    "distractors": {
      "D": "Cloud Service Mesh gobierna el tráfico entre servicios mediante un plano de datos en los clientes internos; no es un punto de entrada público para usuarios de Internet, que necesitan la IP anycast del balanceador global.",
      "C": "Un Serverless NEG solo puede referenciar servicios de Cloud Run de su misma región, y un balanceador regional vive dentro de esa región: si us-central1 cae, el propio punto de entrada desaparece y no hay conmutación posible.",
      "A": "El enrutamiento por DNS depende del TTL que los resolutores y los clientes mantienen en caché, por lo que la conmutación tarda y no es inmediata, y no existe una única dirección IP global que absorba el tráfico durante la transición."
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
        "text": "Este camino mueve las VMs de VMware vSphere hacia Compute Engine con Migrate to Virtual Machines, así el plan de recuperación ante desastres corre sobre instancias nativas de Google Cloud tras convertir los discos, en vez de operar el segundo sitio físico con las mismas herramientas VMware del centro de datos principal."
      },
      {
        "letter": "B",
        "text": "Como institución financiera, este beneficio permite archivar copias de seguridad del centro de datos principal en Cloud Storage Coldline y restaurarlas al declarar el desastre, utilizando Google Cloud como sitio secundario, aunque el centro de datos físico VMware siga siendo el único sitio de recuperación real."
      },
      {
        "letter": "C",
        "text": "Este camino exige refactorizar cada carga de VMware vSphere del centro de datos principal a contenedores en GKE antes de operar Google Cloud VMware Engine como sitio secundario, en vez de replicar directamente para la recuperación ante desastres."
      },
      {
        "letter": "D",
        "text": "Permite utilizar Google Cloud VMware Engine como sitio de recuperación ante desastres elástico y bajo demanda totalmente compatible con herramientas familiares de VMware (como SRM y vSphere Replication), evitando la cuantiosa inversión de construir un segundo centro de datos físico."
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud VMware Engine permite a las organizaciones utilizar la nube como un sitio secundario de recuperación de desastres (DR) utilizando herramientas nativas de VMware como Site Recovery Manager (SRM), garantizando conmutación rápida sin la inversión de capital (CapEx) de un centro de datos físico secundario.",
    "distractors": {
      "C": "Google Cloud VMware Engine ejecuta el stack de vSphere tal cual: no exige refactorizar ni contenedorizar nada, y esa exigencia eliminaría el beneficio de reutilizar las herramientas existentes.",
      "A": "Convertir las VMs a Compute Engine rompe la compatibilidad con las herramientas de VMware: SRM y vSphere Replication no orquestan la conmutación sobre instancias nativas, que es justo lo que el banco quiere conservar.",
      "B": "Un archivo frío es respaldo, no un sitio secundario: la restauración completa desde Coldline implica un RTO de horas o días y no ofrece conmutación orquestada con SRM."
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
        "text": "Google Chronicle Security Operations (Chronicle SIEM / SOAR con inteligencia Mandiant)"
      },
      {
        "letter": "B",
        "text": "Security Command Center Premium con Event Threat Detection y análisis de postura"
      },
      {
        "letter": "C",
        "text": "Cloud Logging con sumideros hacia BigQuery y paneles de análisis en Looker Studio"
      },
      {
        "letter": "D",
        "text": "Google Cloud Armor con reglas WAF preconfiguradas y protección DDoS de capa 7"
      }
    ],
    "correct": "A",
    "explanation": "Chronicle Security Operations es la plataforma de operaciones de seguridad en la nube de Google que combina capacidades avanzadas de SIEM (ingesta y búsqueda de telemetría masiva a velocidad de Google) y SOAR (automatización y respuesta a incidentes), enriquecida con la inteligencia de amenazas de clase mundial de Mandiant.",
    "distractors": {
      "D": "Cloud Armor protege el perímetro de las aplicaciones web frente a ataques y denegación de servicio: no centraliza la telemetría del centro de operaciones de seguridad ni orquesta la respuesta a los incidentes detectados.",
      "C": "Esa combinación almacena y consulta registros, pero carece de reglas de detección gestionadas, de enriquecimiento con inteligencia de amenazas y de automatización de la respuesta a incidentes propias de una plataforma SIEM/SOAR.",
      "B": "SCC Premium se centra en los hallazgos y la postura de seguridad de los recursos de Google Cloud: no ingiere petabytes de telemetría de red y autenticación de terceros ni aporta manuales de orquestación y respuesta automatizada."
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
        "text": "Cloud Armor con reglas preconfiguradas de OWASP"
      },
      {
        "letter": "B",
        "text": "Web Security Scanner en Security Command Center"
      },
      {
        "letter": "C",
        "text": "Artifact Analysis (análisis de vulnerabilidades)"
      },
      {
        "letter": "D",
        "text": "Security Health Analytics del Security Command Center"
      }
    ],
    "correct": "B",
    "explanation": "Web Security Scanner rastrea automáticamente aplicaciones web públicas en Compute Engine, GKE y App Engine para identificar vulnerabilidades comunes como Cross-Site Scripting (XSS), inyección de contenido y bibliotecas JavaScript vulnerables, reportando los hallazgos en Security Command Center.",
    "distractors": {
      "D": "Detecta configuraciones incorrectas de los recursos de la nube (buckets abiertos, reglas de firewall), no fallas en el código de la aplicación web.",
      "C": "Analiza imágenes de contenedor y paquetes del sistema operativo en Artifact Registry; no recorre la aplicación web en ejecución buscando XSS.",
      "A": "Cloud Armor bloquea peticiones maliciosas en el borde durante el ataque; mitiga el XSS en tiempo real, pero no rastrea el sitio para descubrir la vulnerabilidad."
    },
    "officialDocUrl": "https://cloud.google.com/security-command-center/docs/concepts-web-security-scanner-overview",
    "blockId": "BLOCK-5",
    "reservaCiega": true
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
        "text": "Las cuotas son el límite de gasto de la cuenta de facturación: al alcanzarlas Google Cloud suspende el proyecto, y para superarlas hay que aumentar primero el importe del presupuesto mensual configurado en Cloud Billing."
      },
      {
        "letter": "B",
        "text": "Las cuotas protegen al cliente contra gastos accidentales o ataques imprevistos y previenen la saturación de la infraestructura; los aumentos de cuota pueden solicitarse de forma rápida y gratuita a través de la consola de Google Cloud."
      },
      {
        "letter": "C",
        "text": "Las cuotas reflejan la capacidad que Google reserva físicamente para el proyecto; para superar las 24 vCPUs hay que firmar un compromiso de uso (CUD) de un año o adquirir una reserva de capacidad con el equipo comercial."
      },
      {
        "letter": "D",
        "text": "Las cuotas son idénticas para todos los proyectos y solo pueden ampliarse contratando el plan de soporte Premium, ya que las solicitudes de aumento se tramitan exclusivamente como un caso de soporte técnico con prioridad alta."
      }
    ],
    "correct": "B",
    "explanation": "Las cuotas son límites preventivos que protegen a los clientes de facturas descontroladas (por ejemplo, si un script cae en un bucle infinito creando recursos) y aseguran la disponibilidad compartida de la nube. Los incrementos se solicitan directamente desde la consola de Quotas de forma digital.",
    "distractors": {
      "A": "Confunde cuotas con presupuestos: la cuota limita la cantidad de un recurso por proyecto y región, mientras que el presupuesto solo notifica y nunca detiene nada. Ampliar la cuota es una solicitud independiente del importe presupuestado.",
      "D": "Cualquier cliente puede solicitar un aumento desde la página de Cuotas sin coste y sin depender del plan de soporte contratado; además las cuotas no son iguales en todos los proyectos, pues varían con el historial de consumo y pago.",
      "C": "Una cuota predeterminada es un límite administrativo, no capacidad reservada: la reserva de capacidad y los CUD son productos distintos y opcionales. El aumento se pide gratis desde la consola sin adquirir ningún compromiso."
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
        "text": "Rotar las claves periódicamente (ej. cada 90 días) creando una nueva clave antes de eliminar la anterior para no interrumpir el servicio, almacenar las claves cifradas y monitorear su uso en Cloud Logging."
      },
      {
        "letter": "B",
        "text": "Generar una única clave de validez prolongada y restringir su uso mediante una condición de IAM que limite el acceso a determinadas direcciones IP de origen y a la franja horaria laboral de la empresa."
      },
      {
        "letter": "C",
        "text": "Eliminar la clave antigua en el mismo momento de crear la nueva y actualizar después la aplicación externa, de modo que en ningún instante existan dos claves válidas simultáneamente para la misma cuenta."
      },
      {
        "letter": "D",
        "text": "Almacenar la clave JSON en el repositorio de configuración cifrada con Cloud KMS y aplicar además la política de organización que desactiva por completo la creación de claves de cuentas de servicio."
      }
    ],
    "correct": "A",
    "explanation": "Cuando el uso de claves estáticas de Service Account es inevitable, la mejor práctica de seguridad exige establecer un proceso automatizado de rotación periódica (crear clave nueva -> actualizar aplicación -> verificar -> eliminar clave antigua) y evitar a toda costa almacenar claves en repositorios de código.",
    "distractors": {
      "B": "Las condiciones acotan desde dónde y cuándo se puede usar la credencial, pero una clave que nunca se rota sigue siendo válida de forma indefinida si se filtra: la rotación periódica es lo que limita la ventana de exposición.",
      "C": "Invierte el orden seguro de la rotación: al borrar la clave antes de que la aplicación adopte la nueva se provoca un corte de autenticación. La secuencia correcta es crear, desplegar, verificar y solo entonces eliminar.",
      "D": "La restricción `iam.disableServiceAccountKeyCreation` impediría crear la propia clave que la aplicación heredada necesita, y guardar el archivo cifrado en el repositorio deja igualmente una credencial de larga duración en el control de versiones."
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
        "text": "Configurar un Log Sink en Cloud Logging que exporte los registros de auditoría y seguridad a un bucket de Cloud Storage, desde donde el SIEM descargue los archivos por lotes cada varias horas."
      },
      {
        "letter": "B",
        "text": "Configurar un Log Sink que enrute los registros de auditoría a un conjunto de datos de BigQuery para que el SIEM ejecute consultas SQL programadas sobre las tablas particionadas por día."
      },
      {
        "letter": "C",
        "text": "Configurar un Log Sink en Cloud Logging con filtro de registros de seguridad que transmita los eventos a un tema de Cloud Pub/Sub, permitiendo que el sistema SIEM consuma los eventos en tiempo real."
      },
      {
        "letter": "D",
        "text": "Conceder al equipo del SOC el rol de visualizador de registros privados y pedirle que consulte el Explorador de Registros y Security Command Center desde la consola de Google Cloud."
      }
    ],
    "correct": "C",
    "explanation": "La arquitectura canónica para conectar Google Cloud con plataformas SIEM externas es utilizar Cloud Logging Sinks para exportar registros de auditoría y seguridad hacia Cloud Pub/Sub, donde agentes o conectores del SIEM consumen los mensajes de forma desacoplada y en tiempo real.",
    "distractors": {
      "A": "Cloud Storage como destino entrega archivos por lotes con latencia de horas, incompatible con la correlación de incidentes en milisegundos que exige el SOC.",
      "B": "Convierte una transmisión continua en un modelo de consulta bajo demanda: el SIEM tendría que sondear tablas periódicamente en lugar de recibir los eventos al producirse.",
      "D": "Ofrece consulta manual en la consola de Google Cloud y no integra los eventos en el SIEM, por lo que no habilita la correlación automática con el resto de fuentes del banco."
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
    "scenario": "Un equipo de operaciones de TI necesita una pantalla de monitoreo en su sala de control (NOC) que muestre en tiempo real el tráfico de red, el uso de CPU de las máquinas virtuales, los errores HTTP por segundo y la latencia de las consultas de BigQuery, y que además avise automáticamente al equipo de guardia cuando la latencia de BigQuery supere un umbral crítico. ¿Qué dos herramientas nativas de Google Cloud deben combinar? (Elige 2.)",
    "keywords": [
      "Dashboards personalizados",
      "Cuadros de mando",
      "Cloud Monitoring",
      "NOC",
      "Visualización en tiempo real"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Paneles de Control Personalizados (Custom Dashboards) en Cloud Monitoring"
      },
      {
        "letter": "B",
        "text": "Explorador de registros (Logs Explorer) con consultas guardadas en Cloud Logging"
      },
      {
        "letter": "C",
        "text": "Informes de Looker Studio conectados al conjunto de facturación en BigQuery"
      },
      {
        "letter": "D",
        "text": "Cloud Trace y Cloud Profiler para el análisis de latencia de la aplicación"
      },
      {
        "letter": "E",
        "text": "Una política de alertas en Cloud Monitoring que notifique al superar el umbral de latencia."
      }
    ],
    "correct": [
      "A",
      "E"
    ],
    "explanation": "Cloud Monitoring permite construir paneles personalizados con la telemetría operativa (red, CPU, errores HTTP, latencia de BigQuery) en tiempo real. Para que el equipo de guardia sea notificado automáticamente cuando la latencia supere un umbral, además hace falta configurar una política de alertas en Cloud Monitoring; el panel visualiza y la política de alertas notifica, ambas son necesarias para el caso descrito.",
    "distractors": {
      "B": "El Explorador de registros muestra y filtra entradas de log individuales; no está pensado para construir paneles visuales de métricas en tiempo real ni para alertar por umbrales de latencia.",
      "C": "Looker Studio conectado al conjunto de facturación en BigQuery visualiza costos, no telemetría operativa en tiempo real como CPU, tráfico de red o latencia de consultas.",
      "D": "Cloud Trace y Cloud Profiler analizan la latencia y el rendimiento del código de la aplicación en detalle, pero no están diseñados como paneles de monitoreo operativo en tiempo real ni generan alertas por umbral."
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
        "text": "Registros de Auditoría de Actividad del Administrador (Admin Activity Audit Logs: ADMIN_WRITE, activados siempre)."
      },
      {
        "letter": "B",
        "text": "Registros de Transparencia de Acceso (Access Transparency Logs de accesstransparency.googleapis.com)."
      },
      {
        "letter": "C",
        "text": "Registros de Eventos del Sistema (System Event Audit Logs: system_event, generados por la infraestructura)."
      },
      {
        "letter": "D",
        "text": "Registros de Auditoría de Acceso a Datos (Data Access Audit Logs: ADMIN_READ, DATA_READ, DATA_WRITE)"
      }
    ],
    "correct": "D",
    "explanation": "Los Data Access Audit Logs registran las llamadas a APIs que leen configuraciones o metadatos (ADMIN_READ), o leen/escriben datos creados por el usuario (DATA_READ y DATA_WRITE en Cloud Storage, BigQuery, etc.). Al generar grandes volúmenes de datos, están desactivados por defecto (excepto en BigQuery) y deben habilitarse explícitamente.",
    "distractors": {
      "B": "Access Transparency documenta los accesos del personal de soporte e ingeniería de Google a los datos del cliente, no las lecturas realizadas por los usuarios y cuentas de servicio de la propia empresa que se quieren auditar.",
      "A": "Los Admin Activity registran las llamadas que modifican la configuración o los metadatos de los recursos, como crear un bucket o cambiar una política de IAM, pero no dejan constancia de quién leyó el contenido de los datos.",
      "C": "Los System Event recogen acciones automáticas que ejecuta la propia infraestructura de Google Cloud, como una migración en vivo del host, y nunca reflejan operaciones de lectura de datos iniciadas por un usuario."
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
        "text": "Soporte Enhanced de Customer Care (respuesta P1 en 1 hora)"
      },
      {
        "letter": "B",
        "text": "Soporte Standard (respuesta P2 en 4 horas hábiles, sin P1)"
      },
      {
        "letter": "C",
        "text": "Soporte Premium (Premium Support de Google Cloud Customer Care)"
      },
      {
        "letter": "D",
        "text": "Servicios profesionales de Google Cloud Consulting (PSO)"
      }
    ],
    "correct": "C",
    "explanation": "Google Cloud Premium Support ofrece la máxima cobertura para empresas con cargas de misión crítica: respuesta en 15 minutos para incidentes P1 (24/7), un Technical Account Manager (TAM) dedicado, revisiones operativas y soporte multicanal prioritario.",
    "distractors": {
      "A": "Enhanced ya da cobertura 24/7, pero su objetivo P1 es de 1 hora, cuatro veces el exigido, y el Technical Account Manager no viene incluido.",
      "D": "Consulting entrega proyectos de arquitectura y migración facturados por encargo; no es un contrato de soporte reactivo con objetivos de respuesta.",
      "B": "Standard no admite casos P1: su objetivo más rápido es P2 en 4 horas de horario hábil, sin teléfono 24/7 ni asesoría proactiva dedicada."
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
        "text": "Actúa como asesor técnico estratégico de confianza, guiando la adopción de mejores prácticas arquitectónicas, coordinando revisiones operativas y sirviendo como punto de escalamiento prioritario durante incidentes mayores."
      },
      {
        "letter": "B",
        "text": "Ejecuta directamente los proyectos de migración del cliente, escribiendo el código de las aplicaciones y desplegando la infraestructura como un equipo de entrega técnica asignado a tiempo completo."
      },
      {
        "letter": "C",
        "text": "Atiende personalmente y en primera línea todos los casos de soporte técnico las 24 horas del día, depurando el código de la aplicación del cliente y aplicando la corrección en cada incidente que se abre."
      },
      {
        "letter": "D",
        "text": "Negocia las condiciones económicas del contrato, gestiona la renovación anual del acuerdo comercial, aprueba los descuentos por compromiso de uso y fija el presupuesto anual de nube del cliente."
      }
    ],
    "correct": "A",
    "explanation": "El Technical Account Manager (TAM) es un especialista de Google que trabaja proactivamente con los líderes técnicos del cliente para asegurar el éxito operativo, optimizar la infraestructura, preparar la plataforma para eventos de alta demanda y facilitar el acceso a ingenieros de Google.",
    "distractors": {
      "C": "Los casos los resuelve el equipo de Cloud Customer Care según la severidad y el plan contratado. El TAM no es el primer nivel de atención: coordina el caso, aporta contexto de la cuenta y actúa como punto de escalamiento.",
      "D": "La relación comercial, los precios y la renovación son responsabilidad del ejecutivo de cuenta. El valor del TAM es técnico y operativo: arquitectura, fiabilidad y preparación para eventos de alta demanda, no la negociación del contrato.",
      "B": "Esa es la función de Google Cloud Consulting (servicios profesionales), una contratación aparte con entregables definidos. El TAM asesora, planifica y coordina, pero no ejecuta la implementación ni desarrolla la solución del cliente."
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
        "text": "Soporte Estándar (Standard Support de Cloud Customer Care)"
      },
      {
        "letter": "B",
        "text": "Soporte Premium de Customer Care con TAM dedicado a la cuenta"
      },
      {
        "letter": "C",
        "text": "Soporte Mejorado (Enhanced Support de Google Cloud Customer Care)"
      },
      {
        "letter": "D",
        "text": "Foros de la comunidad y la etiqueta google-cloud de Stack Overflow"
      }
    ],
    "correct": "C",
    "explanation": "Enhanced Support está diseñado para empresas con cargas de producción que requieren soporte 24/7 con respuesta en 1 hora para incidentes P1, soporte de terceros y herramientas de diagnóstico avanzadas sin incurrir en el costo del nivel Premium con TAM dedicado.",
    "distractors": {
      "B": "Premium cumple de sobra el requisito, pero incorpora el TAM dedicado que la empresa dice no necesitar y su cuota mínima es muy superior: no es la opción costo-eficiente.",
      "A": "Standard no ofrece atención a incidentes P1 ni cobertura 24/7: su compromiso más alto es de 4 horas en horario laboral y no incluye soporte de tecnologías de terceros.",
      "D": "Los foros no llevan asociado ningún acuerdo de nivel de servicio: no garantizan respuesta en una hora ni disponibilidad 24/7 para un incidente crítico de producción."
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
        "text": "Director de Finanzas: `roles/billing.admin` (Billing Account Administrator); Líderes de proyecto: `roles/billing.viewer` (Billing Account Viewer)."
      },
      {
        "letter": "B",
        "text": "Director de Finanzas: `roles/billing.admin` (Billing Account Administrator); Líderes de proyecto: `roles/billing.user` (Billing Account User)."
      },
      {
        "letter": "C",
        "text": "Director de Finanzas: `roles/billing.user` (Billing Account User); Líderes de proyecto: `roles/billing.projectManager` (Project Billing Manager)."
      },
      {
        "letter": "D",
        "text": "Director de Finanzas: `roles/billing.costsManager` (Costs Manager); Líderes de proyecto: `roles/billing.user` (Billing Account User)."
      }
    ],
    "correct": "B",
    "explanation": "`roles/billing.admin` permite la administración total de la cuenta de facturación (tarjetas de crédito, presupuestos, permisos). `roles/billing.user` permite únicamente asociar proyectos a la cuenta de facturación sin acceso a modificar información bancaria ni detalles financieros confidenciales.",
    "distractors": {
      "A": "Acierta con el Director de Finanzas, pero `roles/billing.viewer` es de sólo lectura sobre costes y transacciones: no permite vincular proyectos nuevos a la cuenta de facturación, que es justo lo que necesitan los líderes.",
      "C": "Invierte el alcance: `roles/billing.user` es un rol muy restringido que sólo sirve para vincular proyectos, por lo que el Director de Finanzas no podría gestionar métodos de pago ni presupuestos.",
      "D": "`roles/billing.costsManager` gestiona presupuestos y vistas de coste, pero no confiere permiso sobre los métodos de pago ni sobre las propiedades de la cuenta que el Director de Finanzas necesita controlar."
    },
    "officialDocUrl": "https://cloud.google.com/billing/docs/how-to/billing-access",
    "blockId": "BLOCK-5",
    "reservaCiega": true
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
        "text": "Cloud Operations Suite (que engloba a Cloud Monitoring, Cloud Logging, Cloud Trace y Error Reporting)"
      },
      {
        "letter": "B",
        "text": "Active Assist (que engloba a Recommender, Network Analyzer y herramientas de optimización automatizada)"
      },
      {
        "letter": "C",
        "text": "Security Command Center (que engloba inventario de activos, Security Health Analytics y detección de amenazas)"
      },
      {
        "letter": "D",
        "text": "Cloud Billing con informes de coste, exportación a BigQuery y presupuestos con alertas por umbral"
      }
    ],
    "correct": "B",
    "explanation": "Active Assist es el portafolio de herramientas inteligentes de Google Cloud (incluyendo Recommender, Network Analyzer, Cost Recommendations y Policy Intelligence) que utiliza IA y análisis predictivo para ayudar a los clientes a operar en la nube de forma más segura, económica y eficiente.",
    "distractors": {
      "D": "Muestra y alerta sobre el gasto ya incurrido, pero no aplica aprendizaje automático para proponer acciones de optimización en las cuatro dimensiones citadas.",
      "C": "Cubre únicamente la postura de seguridad; no aborda las recomendaciones de coste, rendimiento ni sostenibilidad que exige el enunciado.",
      "A": "Es la suite de observabilidad: recoge métricas, registros y trazas del estado actual, pero no genera recomendaciones de optimización de coste, seguridad o sostenibilidad."
    },
    "officialDocUrl": "https://cloud.google.com/active-assist",
    "blockId": "BLOCK-5",
    "reservaCiega": true
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
        "text": "Pruebas de Conectividad (Connectivity Tests del Network Intelligence Center)"
      },
      {
        "letter": "B",
        "text": "Panel de Rendimiento de Red (Performance Dashboard con latencia y pérdida)"
      },
      {
        "letter": "C",
        "text": "Registros de Flujo de VPC (VPC Flow Logs) exportados a BigQuery para su análisis"
      },
      {
        "letter": "D",
        "text": "Network Analyzer (en el Centro de Inteligencia de Red / Network Intelligence Center)"
      }
    ],
    "correct": "D",
    "explanation": "Network Analyzer monitorea continuamente las configuraciones de red de la VPC y analiza la topología para identificar proactivamente errores de configuración, dependencias rotas y cuotas al límite antes de que causen interrupciones de servicio a los usuarios.",
    "distractors": {
      "B": "El Performance Dashboard muestra latencia y pérdida de paquetes entre zonas y proyectos, es decir, cómo se comporta el tráfico. No analiza la configuración de reglas de firewall, rutas ni el consumo de cuotas de direcciones IP.",
      "C": "Los Flow Logs registran el tráfico que efectivamente ocurrió y requieren consultas manuales para interpretarlos: muestran el síntoma de una conexión bloqueada, pero no identifican la regla ni la ruta mal configurada que lo causa.",
      "A": "Connectivity Tests es un diagnóstico bajo demanda que simula el camino entre un origen y un destino concretos que hay que indicar: no descubre de forma proactiva y continua problemas en toda la VPC ni vigila las cuotas."
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
        "text": "Detección de anomalías de costos en Cloud Billing (Cost Anomaly Detection basado en ML)"
      },
      {
        "letter": "B",
        "text": "Presupuestos de Cloud Billing con alertas por umbrales fijos del 50%, 90% y 100%"
      },
      {
        "letter": "C",
        "text": "Informes de Cloud Billing (Billing Reports) filtrados por proyecto y por SKU"
      },
      {
        "letter": "D",
        "text": "Exportación diaria de los datos de Cloud Billing a BigQuery con paneles en Looker Studio"
      }
    ],
    "correct": "A",
    "explanation": "La detección de anomalías de costos en Cloud Billing utiliza modelos de Machine Learning para analizar las tendencias de gasto histórico y alertar a los administradores cuando se identifica un gasto inesperadamente alto en un proyecto o servicio, permitiendo intervenir de inmediato.",
    "distractors": {
      "C": "Los informes de facturación son una vista retrospectiva de consulta manual en la consola: no analizan la tendencia ni emiten ninguna alerta automática al detectar un pico.",
      "B": "Los presupuestos disparan la alerta al cruzar un importe fijo previamente definido, no al desviarse del patrón histórico: con un bucle infinito el aviso llega cuando el gasto ya se consumió.",
      "D": "La exportación a BigQuery entrega los datos en bruto para analizarlos, pero no incorpora ningún modelo de detección ni notificación: alguien tendría que mirar el panel para ver el pico."
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
        "text": "Centralizar todo el gasto en el departamento de finanzas, que debe aprobar formalmente cada solicitud de recurso antes de su creación, restaurando así el control presupuestario previo a cualquier despliegue en la nube."
      },
      {
        "letter": "B",
        "text": "Fomentar la responsabilidad compartida donde los ingenieros toman propiedad del impacto financiero de sus decisiones arquitectónicas, colaborando estrechamente con finanzas para maximizar el valor de negocio por cada dólar invertido."
      },
      {
        "letter": "C",
        "text": "Implantar la exportación de facturación a BigQuery con paneles de costos en Looker Studio y alertas de presupuesto, de modo que la herramienta de visibilidad sustituya a cualquier cambio de hábitos en los equipos."
      },
      {
        "letter": "D",
        "text": "Fijar como objetivo la reducción del gasto mensual en la nube al mínimo posible, midiendo el éxito de cada equipo por el porcentaje de factura recortado respecto al mismo trimestre del ejercicio anterior."
      }
    ],
    "correct": "B",
    "explanation": "FinOps es una práctica cultural y operativa que une a los equipos de tecnología, finanzas y negocio, capacitando a los ingenieros para entender el costo de sus arquitecturas y optimizar continuamente el gasto para impulsar el crecimiento empresarial.",
    "distractors": {
      "A": "Reinstaura el modelo de aprobación previa que la nube vino a eliminar: destruye la agilidad de aprovisionamiento en segundos y concentra la decisión en quien no conoce la arquitectura, en lugar de repartir la responsabilidad.",
      "C": "La visibilidad de costos es solo la primera fase del marco FinOps (Informar). Un panel no cambia por sí solo ninguna decisión de arquitectura: el cambio cultural es que el ingeniero asuma el impacto económico de sus decisiones.",
      "D": "FinOps busca maximizar el valor de negocio por dólar invertido, no minimizar la factura: un aumento de gasto que genere más ingresos o acelere el lanzamiento de un producto es un éxito según el marco, no un fracaso."
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
        "text": "Concediendo créditos del programa Google for Startups y un nivel gratuito de servicios, de modo que la empresa pueda lanzar sus experimentos sin coste alguno hasta que agote el saldo promocional recibido."
      },
      {
        "letter": "B",
        "text": "Al permitir crear prototipos rápidamente con servicios administrados y serverless pagando solo por los minutos utilizados, reduciendo a casi cero el costo financiero de descartar una hipótesis fallida."
      },
      {
        "letter": "C",
        "text": "Permitiendo reservar capacidad mediante Descuentos por Compromiso de Uso a tres años, que abaratan el precio por hora de las máquinas virtuales dedicadas a los experimentos de cada equipo de producto."
      },
      {
        "letter": "D",
        "text": "Replicando cada prototipo en varias regiones con balanceo de carga global desde el primer día, de modo que cualquier experimento pueda absorber millones de usuarios en cuanto se publique al mercado."
      }
    ],
    "correct": "B",
    "explanation": "La computación elástica y los entornos serverless democratizan la innovación: las organizaciones pueden probar decenas de ideas en paralelo con costos mínimos; si una idea funciona se escala al instante, y si falla se apaga en segundos sin costos residuales.",
    "distractors": {
      "A": "Los créditos promocionales son finitos y puntuales: rebajan el coste del primer experimento, pero no crean el modelo económico sostenible de pagar sólo por lo consumido en cada intento posterior.",
      "C": "Un compromiso de tres años es lo contrario de un experimento barato: se paga la capacidad reservada tanto si la idea funciona como si se descarta a la semana siguiente.",
      "D": "Sobredimensionar desde el primer día encarece el fracaso en lugar de abaratarlo: responde a cómo escalar un éxito, no a cómo reducir el coste de descartar una hipótesis."
    },
    "officialDocUrl": "https://cloud.google.com/serverless",
    "blockId": "BLOCK-6",
    "reservaCiega": true
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
        "text": "Entrenar un modelo propio de extracción de entidades con Vertex AI AutoML, etiquetando antes varios miles de contratos escaneados con un equipo interno de anotadores durante los próximos meses."
      },
      {
        "letter": "B",
        "text": "Desplegar un clúster de Dataproc con Tesseract OCR y Apache Tika de código abierto para extraer el texto de los PDFs y programar reglas de expresiones regulares por cada tipo de cláusula contractual."
      },
      {
        "letter": "C",
        "text": "Cargar los contratos escaneados en Cloud Storage y consultarlos desde BigQuery como tabla externa para extraer con SQL las entidades y cláusulas de cada uno de los documentos en PDF."
      },
      {
        "letter": "D",
        "text": "Utilizar APIs de IA preentrenadas y listas para usar de Google Cloud, como Document AI y Vision API, que procesan documentos mediante simples llamadas REST sin necesidad de entrenar modelos desde cero."
      }
    ],
    "correct": "D",
    "explanation": "Las APIs de IA preentrenadas de Google Cloud (como Document AI, Cloud Vision y Translation API) encapsulan años de investigación de Google y están listas para integrarse inmediatamente en aplicaciones empresariales sin requerir experiencia en Machine Learning.",
    "distractors": {
      "A": "AutoML evita programar, pero no evita el trabajo: exige un conjunto de entrenamiento etiquetado y ciclos de evaluación, mientras que la API preentrenada ya reconoce contratos sin datos de partida.",
      "C": "Una tabla externa de BigQuery lee formatos estructurados como CSV, JSON o Parquet: no aplica OCR ni extrae entidades del contenido de un PDF escaneado.",
      "B": "Construye y mantiene internamente una canalización de OCR y reglas que la startup tendría que operar y afinar, justo la carga de ingeniería que el servicio gestionado elimina."
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
        "text": "Un equipo central de operaciones que asuma en exclusiva el aprovisionamiento de todos los recursos de nube, de modo que cada división abra un ticket y espere a que ese equipo despliegue por ella."
      },
      {
        "letter": "B",
        "text": "Una oficina de FinOps dedicada a revisar las facturas mensuales de cada división y a repartir los costes compartidos entre los centros de coste del conglomerado empresarial."
      },
      {
        "letter": "C",
        "text": "Un comité de arquitectura que publique un catálogo de servicios aprobados y revise manualmente cada diseño antes de su despliegue, sin participación de los equipos de seguridad ni de finanzas."
      },
      {
        "letter": "D",
        "text": "Un Centro de Excelencia en la Nube (CCoE) multidisciplinario que defina estándares arquitectónicos, guardarraíles de seguridad, políticas de FinOps y capacite a las demás unidades de negocio."
      }
    ],
    "correct": "D",
    "explanation": "El CCoE (Cloud Center of Excellence) es un equipo multifuncional (seguridad, operaciones, finanzas, arquitectura) responsable de guiar y habilitar la adopción segura, eficiente y estandarizada de la nube en toda la empresa mediante mejores prácticas y gobernanza.",
    "distractors": {
      "C": "Un comité de revisión sin seguridad ni finanzas cubre sólo una parte del problema, y la aprobación manual de cada diseño no escala en un conglomerado con divisiones autónomas.",
      "B": "Aborda únicamente la dimensión del gasto descontrolado y deja sin resolver la disparidad de políticas de seguridad y la falta de estándares arquitectónicos que describe el escenario.",
      "A": "Centralizar la ejecución convierte al equipo en un cuello de botella y frena la adopción: el CCoE define guardarraíles y habilita el autoservicio de las divisiones, no despliega en su lugar."
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
        "text": "Sincronizando una carpeta local en el equipo de cada empleado con Google Drive para escritorio, de modo que cada uno siga editando su propia copia y los cambios se fusionen al reconectarse."
      },
      {
        "letter": "B",
        "text": "Ampliando el límite de tamaño de los adjuntos de Gmail y archivando cada versión enviada por correo en una etiqueta compartida del buzón de cada uno de los departamentos implicados."
      },
      {
        "letter": "C",
        "text": "Permitiendo la edición simultánea y en tiempo real de documentos en la nube con guardado automático, control de versiones integrado y acceso seguro desde cualquier dispositivo."
      },
      {
        "letter": "D",
        "text": "Publicando cada documento como PDF de sólo lectura en un sitio de Google Sites para que toda la plantilla consulte siempre la última versión aprobada por la dirección de la empresa."
      }
    ],
    "correct": "C",
    "explanation": "Google Workspace es una suite de productividad nativa de la nube que permite a equipos globales colaborar de forma sincrónica en una única fuente de verdad documental, con historial de versiones instantáneo y seguridad empresarial.",
    "distractors": {
      "D": "Distribuye el documento pero elimina la colaboración: nadie puede editar el PDF, así que el trabajo conjunto vuelve a hacerse en copias fuera del sistema.",
      "B": "Mantiene intacto el flujo de adjuntos por correo que provoca la divergencia: cada envío crea una versión paralela más, sólo que ahora archivada.",
      "A": "Sigue siendo una copia por persona: la edición ocurre en local y la sincronización genera copias en conflicto en lugar de una única fuente de verdad editada a la vez por todos."
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
        "text": "Un modelo Gemini consultado directamente por API sin conectarlo a los manuales operativos, confiando en el conocimiento general del modelo para redactar cada respuesta al pasajero."
      },
      {
        "letter": "B",
        "text": "Un flujo de Dialogflow CX con respuestas estáticas redactadas a mano para cada política de equipaje y cada motivo de cancelación previsto en el manual operativo de la aerolínea."
      },
      {
        "letter": "C",
        "text": "Vertex AI Search and Conversation respaldado por modelos fundacionales con anclaje (grounding) directo en la base de conocimiento y manuales oficiales de la aerolínea."
      },
      {
        "letter": "D",
        "text": "Document AI extrayendo las entidades de los manuales operativos hacia BigQuery para que los agentes humanos del centro de contacto consulten la política aplicable a cada pasajero."
      }
    ],
    "correct": "C",
    "explanation": "Vertex AI Search and Conversation permite desplegar agentes de IA generativa conectados de forma segura (grounded) a los repositorios de datos corporativos de la empresa, garantizando respuestas precisas, veraces y basadas en la documentación oficial de la aerolínea.",
    "distractors": {
      "B": "Un árbol de respuestas escritas a mano no cubre la variedad de millones de consultas y hay que reescribirlo cada vez que cambia una política: no hay generación de lenguaje a partir del manual.",
      "D": "Estructura el contenido de los manuales, pero deja la redacción de la respuesta en manos de agentes humanos: no automatiza la generación de respuestas que pide el escenario.",
      "A": "Sin anclaje (grounding) en la documentación de la aerolínea, el modelo puede inventar políticas de equipaje o de cancelación que no existen: falla el requisito de respuestas estrictamente basadas en los manuales."
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
        "text": "BigQuery con consultas programadas cada 5 minutos que agregan las puntuaciones con funciones de ventana `OVER`"
      },
      {
        "letter": "B",
        "text": "Pub/Sub con suscripciones de extracción y reintentos para reordenar los eventos que llegan con retraso"
      },
      {
        "letter": "C",
        "text": "Cloud Memorystore for Redis acumulando las puntuaciones en claves con un TTL de 5 minutos que la aplicación renueva cada minuto"
      },
      {
        "letter": "D",
        "text": "Cloud Dataflow con estrategias de ventanas de tiempo (Windowing) y marcas de agua (Watermarks) basadas en Apache Beam."
      }
    ],
    "correct": "D",
    "explanation": "Apache Beam y Cloud Dataflow proporcionan capacidades avanzadas de manejo de flujos de datos (streaming), permitiendo segmentar flujos continuos en ventanas de tiempo fijas, deslizantes o de sesión (Windowing) y gestionar eventos que llegan con retraso mediante marcas de agua (Watermarks) y acumuladores.",
    "distractors": {
      "A": "Las funciones de ventana de SQL operan sobre filas ya almacenadas y la consulta programada es un lote periódico: no existe tiempo de evento ni marca de agua, así que los datos con retraso quedan fuera del bloque al que pertenecen.",
      "B": "Pub/Sub transporta y almacena los eventos de forma duradera, pero no agrega nada: la segmentación en ventanas deslizantes y el cálculo del promedio ocurren en el motor de procesamiento, no en la mensajería.",
      "C": "El TTL de Redis caduca por hora de llegada, no por hora del evento: un evento retrasado se contabiliza en la ventana equivocada o se pierde, y no hay semántica de marcas de agua."
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
    "scenario": "Una empresa de seguros utiliza un modelo de lenguaje en Vertex AI para responder dudas de pólizas a los asegurados. En las pruebas iniciales, el modelo a veces 'inventa' coberturas que no existen en el contrato (alucinación), y el equipo también necesita que las respuestas citen el documento contractual exacto del que provienen para que un humano pueda auditarlas. ¿Qué dos técnicas y capacidades de Google Cloud deben aplicarse? (Elige 2.)",
    "keywords": [
      "Grounding",
      "Anclaje en datos reales",
      "Reducción de alucinaciones",
      "Vertex AI",
      "RAG"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Realizar un ajuste fino (Fine-Tuning) del modelo de Vertex AI con el histórico de pólizas y documentos de la empresa, como técnica para que aprenda el estilo de redacción."
      },
      {
        "letter": "B",
        "text": "Como técnica de Vertex AI, reducir a cero la temperatura y el top-p del modelo para que las respuestas de la empresa sean deterministas y repitan la misma redacción, sin mirar documentos reales."
      },
      {
        "letter": "C",
        "text": "Anclar el modelo (Grounding) conectándolo a la base de conocimiento y documentos oficiales de la empresa a través de Vertex AI Search (técnica RAG - Retrieval-Augmented Generation)."
      },
      {
        "letter": "D",
        "text": "Como técnica de la empresa, activar el umbral más estricto de los filtros de seguridad de IA de Vertex AI para que el modelo bloquee respuestas con coberturas inexistentes."
      },
      {
        "letter": "E",
        "text": "Configurar las respuestas de Vertex AI Search para que citen las fuentes y fragmentos exactos de los documentos contractuales usados, permitiendo su verificación humana."
      }
    ],
    "correct": [
      "C",
      "E"
    ],
    "explanation": "El anclaje (Grounding) mediante Vertex AI Search conecta al modelo con los documentos contractuales reales de la empresa (RAG), reduciendo las alucinaciones. Para que un humano pueda auditar cada respuesta, además hay que configurar que la respuesta cite las fuentes y fragmentos exactos usados; sin esa citación, no hay forma de verificar contra qué documento se generó la respuesta.",
    "distractors": {
      "D": "Los filtros de seguridad de IA bloquean contenido dañino o de riesgo (violencia, odio, etc.), no verifican si una cobertura de seguro mencionada existe realmente en el contrato.",
      "B": "Bajar la temperatura y el top-p hace las respuestas más deterministas y repetibles, pero el modelo sigue sin consultar ningún documento real; puede repetir la misma alucinación de forma consistente.",
      "A": "El ajuste fino enseña al modelo un estilo de redacción a partir de datos históricos, pero no lo ancla a un documento contractual concreto en el momento de responder, por lo que no elimina las alucinaciones."
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
        "text": "(1) Dataflow, (2) Dataproc, (3) Data Fusion, (4) Dataprep"
      },
      {
        "letter": "B",
        "text": "(1) Dataproc, (2) Dataflow, (3) Dataprep, (4) Data Fusion"
      },
      {
        "letter": "C",
        "text": "Utilizar Cloud DNS para todos los perfiles de datos"
      },
      {
        "letter": "D",
        "text": "(1) Data Fusion, (2) Dataprep, (3) Dataflow, (4) Dataproc"
      }
    ],
    "correct": "A",
    "explanation": "Dataflow ejecuta pipelines Apache Beam serverless (batch/streaming); Dataproc hospeda clústeres gestionados de Spark/Hadoop; Data Fusion ofrece integración visual ETL basada en CDAP; y Dataprep permite a los analistas de negocio limpiar datos visualmente sin código.",
    "distractors": {
      "D": "Mapea erróneamente los motores de ejecución y las interfaces de usuario.",
      "C": "Cloud DNS es un sistema de resolución de nombres de red, no procesa datos.",
      "B": "Invierte Dataflow y Dataproc, y confunde la orientación de Data Fusion y Dataprep."
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
        "text": "Migrando ambas canalizaciones a clústeres de Cloud Dataproc con Apache Spark, donde el código por lotes y el de streaming siguen siendo dos aplicaciones distintas que hay que mantener y desplegar por caminos separados."
      },
      {
        "letter": "B",
        "text": "Sustituyendo la capa por lotes por Pub/Sub e inserciones en streaming hacia BigQuery, de modo que la empresa deja de procesar el histórico y conserva únicamente la lógica de tiempo real dentro del almacén analítico."
      },
      {
        "letter": "C",
        "text": "Permitiendo escribir una única lógica de procesamiento en Apache Beam que se ejecuta de forma idéntica tanto para fuentes de datos por lotes (históricas) como en streaming (tiempo real) sobre Cloud Dataflow."
      },
      {
        "letter": "D",
        "text": "Ejecutando consultas programadas de BigQuery para el histórico y suscripciones de BigQuery para el flujo continuo, manteniendo dos definiciones separadas de la misma transformación de negocio en dos motores distintos."
      }
    ],
    "correct": "C",
    "explanation": "El modelo unificado de Apache Beam y Cloud Dataflow elimina la necesidad de mantener canalizaciones duales desconectadas (Arquitectura Lambda). Con un único marco conceptual (`PCollection` y `PTransform`), el mismo pipeline procesa tanto datos finitos (lotes) como infinitos (streaming).",
    "distractors": {
      "D": "Sigue habiendo dos artefactos y dos rutas de ejecución que mantener sincronizadas; la unificación consiste en un único pipeline portable, no en dos consultas paralelas.",
      "A": "Dataproc ejecuta ambos tipos de carga, pero Spark Batch y Spark Streaming siguen siendo dos bases de código: no aporta el modelo unificado que define la arquitectura Kappa.",
      "B": "Elimina la capa por lotes en lugar de unificarla: se pierde la capacidad de reprocesar datos históricos, que es justamente lo que la arquitectura Lambda aportaba."
    },
    "officialDocUrl": "https://cloud.google.com/dataflow/docs/concepts/beam-programming-model",
    "blockId": "BLOCK-6",
    "reservaCiega": true
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
        "text": "Aplica automáticamente la clase Coldline a la zona cruda y la clase Standard a la zona curada, de modo que la separación de zonas se traduce directamente en un ahorro sobre la factura de Cloud Storage."
      },
      {
        "letter": "B",
        "text": "Corrige y normaliza automáticamente los registros defectuosos de la zona cruda antes de publicarlos en la zona curada, evitando que el equipo de datos tenga que construir canalizaciones de transformación."
      },
      {
        "letter": "C",
        "text": "Permite aislar datos no confiables o crudos, aplicar políticas de acceso diferenciadas y garantizar que las decisiones de negocio se tomen únicamente sobre datos validados y de alta calidad."
      },
      {
        "letter": "D",
        "text": "Genera un catálogo unificado de metadatos y linaje de todos los activos, y ese catálogo es el mecanismo que impide técnicamente que los analistas de negocio consulten las tablas de la zona cruda."
      }
    ],
    "correct": "C",
    "explanation": "Dataplex permite agrupar recursos de almacenamiento en zonas lógicas (Raw y Curated). Esto facilita una gobernanza granular, asegurando que los científicos de datos puedan acceder a datos crudos mientras los analistas de negocio consumen datos aprobados y estandarizados.",
    "distractors": {
      "A": "Las zonas de Dataplex son una construcción lógica de gobernanza sobre activos existentes; las transiciones de clase de almacenamiento las gestiona Object Lifecycle Management, no la zona.",
      "B": "Dataplex perfila y evalúa la calidad de los datos, pero no transforma ni limpia registros: la curación sigue exigiendo canalizaciones de Dataflow o consultas de BigQuery.",
      "D": "El catálogo describe y hace descubribles los activos, pero no aplica control de acceso; el aislamiento real proviene de las políticas de IAM asociadas a cada zona."
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
        "text": "Vertex AI Pipelines (basado en Kubeflow Pipelines y TFX)"
      },
      {
        "letter": "B",
        "text": "Vertex AI Feature Store para servir características"
      },
      {
        "letter": "C",
        "text": "Vertex AI Model Monitoring (deriva y sesgo de datos)"
      },
      {
        "letter": "D",
        "text": "Cloud Scheduler invocando una Cloud Function semanal"
      }
    ],
    "correct": "A",
    "explanation": "Vertex AI Pipelines permite orquestar y automatizar flujos de trabajo de Machine Learning de extremo a extremo sin servidor utilizando marcos estándar como Kubeflow Pipelines (KFP) o TensorFlow Extended (TFX), rastreando artefactos y linaje de datos de forma automática.",
    "distractors": {
      "C": "Model Monitoring vigila el modelo en producción y alerta cuando los datos se desvían; detecta que hay que reentrenar, pero no ejecuta el flujo.",
      "D": "Cloud Scheduler solo dispara a intervalos: no encadena pasos, no aplica la condición de precisión antes de desplegar ni registra artefactos ni linaje.",
      "B": "Feature Store centraliza y sirve las características del modelo con baja latencia, pero no orquesta los pasos de validación, reentrenamiento y despliegue."
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
        "text": "Cloud Storage Nearline sin nombres"
      },
      {
        "letter": "B",
        "text": "Vertex AI Model Registry"
      },
      {
        "letter": "C",
        "text": "Enviar los modelos por WhatsApp al equipo de soporte"
      },
      {
        "letter": "D",
        "text": "Compute Engine Preemptible Instances"
      }
    ],
    "correct": "B",
    "explanation": "Vertex AI Model Registry es un repositorio centralizado donde los equipos pueden gestionar el ciclo de vida completo de sus modelos de Machine Learning, incluyendo control de versiones, evaluación, documentación con Model Cards y despliegue a endpoints de predicción.",
    "distractors": {
      "A": "Guardar archivos sin metadatos en Cloud Storage carece de trazabilidad, gobierno y versionado formal de MLOps.",
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
        "text": "(1) Predicción por lotes (Batch Prediction en Vertex AI); (2) Predicción en línea (Online Prediction en Vertex AI Endpoints)"
      },
      {
        "letter": "B",
        "text": "(1) Predicción en línea en un endpoint dedicado de Vertex AI; (2) Predicción en línea sobre ese mismo endpoint invocado en bucle cada semana"
      },
      {
        "letter": "C",
        "text": "(1) Predicción por lotes lanzada en cada pago con tarjeta; (2) Predicción por lotes semanal sobre la tabla de clientes en BigQuery"
      },
      {
        "letter": "D",
        "text": "(1) Predicción en línea (Online Prediction en Vertex AI Endpoints); (2) Predicción por lotes (Batch Prediction en Vertex AI)"
      }
    ],
    "correct": "D",
    "explanation": "Online Prediction despliega el modelo en un endpoint siempre activo para procesar solicitudes HTTP inmediatas con baja latencia (50 ms). Batch Prediction procesa grandes volúmenes de datos almacenados en Cloud Storage o BigQuery de forma asíncrona y eficiente, apagando los recursos cuando el trabajo finaliza.",
    "distractors": {
      "B": "Un endpoint en línea siempre activo puede servir el pago, pero puntuar 10 millones de clientes de una vez satura el endpoint y factura cómputo permanente.",
      "A": "Invierte la asignación: la predicción por lotes es asíncrona y tarda minutos u horas, por lo que nunca responde en los 50 ms del pago con tarjeta.",
      "C": "La predicción por lotes solo acepta trabajos sobre datos ya almacenados y no expone un extremo HTTP síncrono para la aprobación instantánea."
    },
    "officialDocUrl": "https://cloud.google.com/vertex-ai/docs/predictions/overview",
    "blockId": "BLOCK-6",
    "reservaCiega": true
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
        "text": "Realizar un ajuste fino (Fine-Tuning / Model Tuning) del modelo en Vertex AI utilizando un conjunto de datos etiquetado de ejemplos médicos para ajustar los pesos del modelo."
      },
      {
        "letter": "B",
        "text": "Anclar el modelo (Grounding) con Vertex AI Search sobre el repositorio de literatura clínica de la empresa para que recupere la terminología correcta en cada solicitud de resumen."
      },
      {
        "letter": "C",
        "text": "Ampliar el prompt con varios centenares de ejemplos adicionales de resúmenes médicos ya redactados para que el modelo disponga de más contexto en cada llamada al endpoint."
      },
      {
        "letter": "D",
        "text": "Sustituir el modelo fundacional por otro de mayor tamaño del Model Garden de Vertex AI, asumiendo que más parámetros implican conocer la terminología de patología."
      }
    ],
    "correct": "A",
    "explanation": "El ajuste fino (Fine-Tuning) en Vertex AI entrena un modelo fundacional existente con un conjunto de datos especializado del cliente para ajustar sus parámetros, permitiéndole dominar tareas específicas, jergas de nicho o estilos estructurados que no se logran solo con prompts.",
    "distractors": {
      "B": "El anclaje recupera documentos en tiempo de consulta y cita fuentes, pero no hace que el modelo internalice la terminología en sus pesos, que es lo que pide el escenario.",
      "D": "Cambiar de modelo base no incorpora el vocabulario propietario del cliente; ningún modelo de propósito general contiene esos miles de términos internos.",
      "C": "El equipo ya descartó el few-shot: la ventana de contexto no admite miles de términos de patología en cada llamada y el modelo sigue sin modificarse."
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
        "text": "Vertex AI Feature Store para servir atributos de producto"
      },
      {
        "letter": "B",
        "text": "Vertex AI Vector Search (anteriormente Matching Engine)"
      },
      {
        "letter": "C",
        "text": "Cloud Vision API con detección de etiquetas y logotipos"
      },
      {
        "letter": "D",
        "text": "Índice de búsqueda de texto completo (SEARCH) de BigQuery"
      }
    ],
    "correct": "B",
    "explanation": "Vertex AI Vector Search (construido sobre la tecnología Matching Engine de Google) es una base de datos vectorial líder en la industria capaz de buscar entre miles de millones de elementos vectoriales (embeddings) con latencia de milisegundos a escala masiva para búsquedas semánticas y recomendaciones.",
    "distractors": {
      "D": "La búsqueda de texto completo de BigQuery localiza tokens y palabras exactas: no interpreta conceptos abstractos ni admite una imagen como consulta.",
      "A": "Feature Store almacena y sirve características para entrenar y servir modelos; no ejecuta búsquedas de vecino más cercano sobre embeddings del catálogo.",
      "C": "Vision API etiqueta el contenido de la foto que sube el usuario, pero no recupera de la tienda los muebles visualmente más parecidos a partir de esos vectores."
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
        "text": "Crear una vista autorizada por cada país que filtre las filas y otra vista adicional que omita la columna `salary`, concediendo a cada grupo acceso únicamente a la vista que le corresponde y nunca a la tabla base."
      },
      {
        "letter": "B",
        "text": "Asignar `roles/bigquery.dataViewer` sobre el dataset a los gerentes regionales y crear un dataset independiente por país, dejando la columna de salario solo en el dataset de los directores de Recursos Humanos."
      },
      {
        "letter": "C",
        "text": "Aplicar Sensitive Data Protection (Cloud DLP) para desidentificar la columna `salary` mediante tokenización y conceder a los gerentes regionales el rol de lector sobre la tabla de empleados completa."
      },
      {
        "letter": "D",
        "text": "Seguridad a nivel de fila (Row-Level Security) para filtrar registros por país y Seguridad a nivel de columna con enmascaramiento dinámico de datos (Dynamic Data Masking / Policy Tags) para ocultar salarios."
      }
    ],
    "correct": "D",
    "explanation": "BigQuery ofrece seguridad granular empresarial: Row-Level Security aplica filtros condicionales transparentes para que cada usuario solo consulte las filas autorizadas según su rol; y Column-Level Security con Dynamic Data Masking enmascara datos sensibles (como salarios o tarjetas) según las Policy Tags asignadas.",
    "distractors": {
      "B": "Duplica los datos en tantos datasets como países y rompe la tabla única de empleados; el enmascaramiento por columna no se implementa con IAM de dataset.",
      "A": "Las vistas autorizadas filtran filas, pero obligan a mantener una vista por país y no enmascaran: el usuario ve la columna completa o no la ve, nunca con asteriscos.",
      "C": "La desidentificación con DLP genera una copia transformada de los datos y no aporta el filtrado por país: los gerentes seguirían viendo todos los empleados."
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
        "text": "Cloud Spanner aplica los cambios de esquema durante la ventana de mantenimiento semanal de la instancia, momento en el que las escrituras de los jugadores se encolan hasta que el índice queda construido."
      },
      {
        "letter": "B",
        "text": "Cloud Spanner exige exportar la tabla a Cloud Storage, recrearla con las tres columnas y el índice secundario y volver a importar los datos, por lo que la parada depende del volumen de jugadores."
      },
      {
        "letter": "C",
        "text": "Cloud Spanner ejecuta cambios de esquema (DDL) en línea y en segundo plano sin bloquear las lecturas ni escrituras de la base de datos y sin requerir tiempo de inactividad de la aplicación."
      },
      {
        "letter": "D",
        "text": "Cloud Spanner agrega las tres columnas en línea sin bloqueo, pero la creación del índice secundario sí requiere bloquear la tabla para escrituras mientras el índice se rellena en segundo plano."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Spanner está diseñado para una disponibilidad continua del 99.999%. Soporta modificaciones de esquema en línea (DDL) sin bloquear tablas para lecturas o escrituras, permitiendo que las aplicaciones globales evolucionen sin tiempos de inactividad planificados.",
    "distractors": {
      "A": "Spanner no tiene ventanas de mantenimiento planificado ni encola las escrituras: su diseño de disponibilidad continua del 99.999 por ciento las excluye.",
      "D": "El relleno del índice secundario también se ejecuta en segundo plano sin bloquear escrituras: es exactamente la operación que Spanner realiza en línea.",
      "B": "Describe el procedimiento típico de motores sin DDL en línea; Spanner añade columnas y crea índices sin recrear ni reimportar la tabla."
    },
    "officialDocUrl": "https://cloud.google.com/spanner/docs/schema-updates",
    "blockId": "BLOCK-6",
    "reservaCiega": true
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
        "text": "Restaurar sobre una base de datos nueva la copia de seguridad automática de Cloud Spanner de la noche anterior y volver a aplicar después las transacciones legítimas registradas durante el día."
      },
      {
        "letter": "B",
        "text": "Promover la réplica de lectura de la región secundaria de la instancia multirregional de Cloud Spanner para que sirva el estado que los datos tenían antes de ejecutarse la sentencia errónea."
      },
      {
        "letter": "C",
        "text": "Exportar la base de datos a Cloud Storage con una plantilla de Dataflow y volver a importar únicamente la tabla de saldos con los valores anteriores a las 14:15 horas del día del incidente."
      },
      {
        "letter": "D",
        "text": "Point-in-Time Recovery (PITR) en Cloud Spanner, que permite consultar o restaurar datos históricos continuos a nivel de microsegundos dentro de la ventana de retención configurada."
      }
    ],
    "correct": "D",
    "explanation": "Point-in-Time Recovery (PITR) en Cloud Spanner protege contra la corrupción accidental de datos permitiendo realizar lecturas y recuperaciones a cualquier instante del pasado con precisión de microsegundos dentro del periodo de retención (hasta 7 días).",
    "distractors": {
      "A": "Una copia de seguridad de Spanner es una instantánea del momento en que se creó, así que restaurarla pierde todas las transacciones del día, y Spanner no reproduce un registro de transacciones sobre la copia restaurada.",
      "B": "Las réplicas de Spanner se mantienen mediante replicación síncrona, de modo que contienen exactamente las mismas filas corruptas. La replicación protege frente a la caída de una región, nunca frente a un error lógico de datos.",
      "C": "La exportación lee el estado actual de la base de datos, que ya está corrupto: no existe ninguna versión anterior que extraer salvo que se use la lectura obsoleta o la recuperación a un punto en el tiempo."
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
        "text": "Vertex AI Text Embeddings API (generación de vectores) -> Cloud Storage (los vectores se guardan como archivos JSON en un bucket) -> Gemini en Vertex AI (generación de la respuesta)."
      },
      {
        "letter": "B",
        "text": "Document AI (extracción de entidades de los documentos legales) -> Cloud SQL para PostgreSQL (almacenamiento relacional) -> Vertex AI Vector Search (redacción de la respuesta final)."
      },
      {
        "letter": "C",
        "text": "Vertex AI Text Embeddings API (generación de vectores) -> Vertex AI Vector Search (búsqueda de fragmentos por similitud) -> Gemini en Vertex AI (generación de la respuesta contextualizada)."
      },
      {
        "letter": "D",
        "text": "Vertex AI Vector Search (conversión de los documentos en vectores) -> Vertex AI Feature Store (almacenamiento de los vectores) -> Gemini en Vertex AI (generación de la respuesta final)."
      }
    ],
    "correct": "C",
    "explanation": "El patrón RAG (Retrieval-Augmented Generation) en Google Cloud se implementa mediante la API de Embeddings de Vertex AI para transformar texto en vectores, Vertex AI Vector Search para la búsqueda ultrarrápida de similitud de los documentos relevantes, y los modelos Gemini de Vertex AI para sintetizar la respuesta final fundamentada.",
    "distractors": {
      "B": "Cierra el flujo con un motor de recuperación: Vector Search devuelve los fragmentos más parecidos pero no genera texto. La síntesis de la respuesta fundamentada requiere un modelo de lenguaje como Gemini en Vertex AI.",
      "D": "Asigna mal la primera etapa: Vector Search indexa y consulta vectores que otro servicio debe generar antes con la API de embeddings, y el Feature Store sirve atributos de modelos de ML, no búsqueda de similitud semántica.",
      "A": "Cloud Storage almacena los archivos de vectores pero no ofrece búsqueda por similitud ni índice de vecinos aproximados, así que el sistema no puede recuperar los fragmentos relevantes: ese papel corresponde a Vertex AI Vector Search."
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
        "text": "Google Cloud sustituye las hojas de cálculo por paneles de Looker Studio conectados a los sistemas actuales y por informes programados por correo, de modo que la dirección consulte los resultados del trimestre anterior y los indicadores de cada área sin depender del equipo de TI."
      },
      {
        "letter": "B",
        "text": "Google Cloud integra ingesta masiva (Pub/Sub), lagos y almacenes de datos gobernados (Cloud Storage, BigQuery, Dataplex), procesamiento en tiempo real (Dataflow) y plataformas de IA/ML (Vertex AI y Gemini), permitiendo transformar datos crudos en decisiones automatizadas, predictivas y en tiempo real a escala global."
      },
      {
        "letter": "C",
        "text": "Google Cloud permite migrar con Database Migration Service las bases de datos operativas a Cloud SQL y las máquinas virtuales a Compute Engine con Migrate to Virtual Machines, conservando los mismos informes y procesos actuales pero sobre infraestructura totalmente administrada."
      },
      {
        "letter": "D",
        "text": "Google Cloud ofrece modelos preentrenados de Vertex AI y agentes de Gemini que pueden invocarse por API sobre los archivos y correos existentes de la empresa, de modo que la IA genere las predicciones sin necesidad de consolidar ni gobernar previamente los datos operativos."
      }
    ],
    "correct": "B",
    "explanation": "El ecosistema integral de datos e inteligencia artificial de Google Cloud permite a las organizaciones consolidar silos, democratizar el acceso a la analítica, automatizar procesos con modelos de Machine Learning y GenAI, y generar ventajas competitivas sostenibles mediante decisiones predictivas en tiempo real.",
    "distractors": {
      "A": "Los paneles sobre datos históricos siguen siendo una operación descriptiva y reactiva: mejoran la distribución del informe, pero no incorporan ingesta en tiempo real, gobernanza del dato ni modelos que anticipen lo que va a ocurrir.",
      "C": "Migrar los sistemas transaccionales elimina la carga de administrar hardware, pero deja intactos los silos y el proceso reactivo: no introduce almacén analítico, procesamiento en tiempo real ni modelos de aprendizaje automático.",
      "D": "Sin una base de datos consolidada y gobernada, los modelos se alimentan de información dispersa, duplicada y sin linaje, y sus predicciones no son fiables: la ingesta, el almacén analítico y la gobernanza son requisitos previos, no opcionales."
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
        "text": "Cloud Run (el servicio de contenedores sin servidor de Google Cloud para APIs HTTP)"
      },
      {
        "letter": "B",
        "text": "Identity Platform (el servicio de autenticación de usuarios finales de Google Cloud)"
      },
      {
        "letter": "C",
        "text": "Firebase (la plataforma de desarrollo móvil y web de Google integrada con Google Cloud)"
      },
      {
        "letter": "D",
        "text": "Apigee X (la plataforma de gestión de APIs de Google Cloud para exponer servicios)"
      }
    ],
    "correct": "C",
    "explanation": "Firebase es la plataforma de desarrollo de aplicaciones móviles y web de Google que acelera la creación de apps con SDKs enriquecidos (Authentication, Cloud Firestore, Cloud Functions, Crashlytics, FCM), compartiendo la misma infraestructura escalable de Google Cloud.",
    "distractors": {
      "B": "Identity Platform cubre solo la autenticación de usuarios; no incluye base de datos en tiempo real, informes de fallos ni mensajería push.",
      "D": "Apigee gestiona, protege y monetiza las APIs del backend, pero no ofrece el SDK móvil ni los servicios de aplicación que pide el equipo.",
      "A": "Cloud Run ejecuta el backend en contenedores, pero no aporta SDKs de cliente móvil, autenticación social, Crashlytics ni notificaciones push."
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
        "text": "Empaquetar dentro de la imagen del contenedor un archivo de configuración distinto por entorno (desarrollo, preproducción y producción) y seleccionar el adecuado con un argumento de compilación en Cloud Build."
      },
      {
        "letter": "B",
        "text": "Almacenar las configuraciones y credenciales en variables de entorno (separando código de configuración) y diseñar los procesos de la aplicación para que sean sin estado (stateless), persistiendo datos en almacenes externos."
      },
      {
        "letter": "C",
        "text": "Mantener la sesión del usuario en la memoria del proceso y configurar en el balanceador de carga la afinidad de sesión por cookie, de modo que cada usuario regrese siempre a la misma instancia del servicio."
      },
      {
        "letter": "D",
        "text": "Instalar las dependencias del sistema en el host durante el arranque mediante un script de inicio y confiar en las versiones que ya provee la imagen base del sistema operativo del contenedor."
      }
    ],
    "correct": "B",
    "explanation": "La metodología 12-Factor App prescribe separar estrictamente la configuración del código mediante variables de entorno y ejecutar aplicaciones como procesos sin estado (stateless) que delegan la persistencia a servicios de respaldo (como Firestore, Cloud SQL o Memorystore), permitiendo un escalado elástico perfecto.",
    "distractors": {
      "A": "Genera un artefacto distinto por entorno, mientras que la metodología exige una única compilación inmutable que se promociona entre entornos con la configuración inyectada en ejecución desde el propio entorno.",
      "D": "Rompe la declaración explícita y el aislamiento de dependencias: la compilación deja de ser reproducible porque el resultado depende del estado del host y de las versiones que traiga la imagen base en cada arranque.",
      "C": "La afinidad de sesión convierte el proceso en un servicio con estado: al escalar hacia abajo, redesplegar o reiniciar una instancia se pierde la sesión. El factor exige procesos sin estado con la sesión en un servicio de respaldo."
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
        "text": "Google Cloud Marketplace"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Coldline"
      },
      {
        "letter": "C",
        "text": "Descargar software pirata de sitios web no verificados"
      },
      {
        "letter": "D",
        "text": "Cloud Interconnect"
      }
    ],
    "correct": "A",
    "explanation": "Google Cloud Marketplace ofrece cientos de paquetes de software de terceros y aplicaciones empresariales listas para desplegarse rápidamente en Google Cloud con integración de facturación unificada en la cuenta de facturación del cliente.",
    "distractors": {
      "C": "Descargar software no autorizado introduce malware y viola normas legales corporativas.",
      "B": "Cloud Storage Coldline almacena archivos pasivos.",
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
        "text": "Signed URLs de Cloud Storage para autorizar temporalmente a los suscriptores y una regla de ciclo de vida del bucket que elimine el objeto del video erróneo transcurridos los días configurados."
      },
      {
        "letter": "B",
        "text": "Reglas de Cloud Armor que bloqueen por dirección IP a los usuarios sin suscripción activa y una invalidación de caché (Cache Invalidation) para retirar el video erróneo de todos los puntos de presencia."
      },
      {
        "letter": "C",
        "text": "Signed URLs (URLs firmadas de Cloud CDN) para restringir el acceso temporal a suscriptores válidos y Purga de Caché (Cache Invalidation) para eliminar contenido erróneo de la caché global al instante."
      },
      {
        "letter": "D",
        "text": "Encabezados Cache-Control privados con un TTL corto en las respuestas del backend para que solo el navegador del suscriptor conserve el video, esperando a que caduque el TTL para retirar el contenido erróneo."
      }
    ],
    "correct": "C",
    "explanation": "Cloud CDN permite proteger contenido multimedia privado mediante Signed URLs / Signed Cookies (que autorizan el acceso por tiempo limitado a usuarios autenticados) y ofrece invalidación de caché (Purge) en segundos para retirar o actualizar contenido en todos los puntos de presencia mundiales.",
    "distractors": {
      "D": "Esperar la caducidad del TTL no es retirada inmediata, y marcar la respuesta como privada desactiva el almacenamiento en la caché del CDN, perdiendo el beneficio de la distribución.",
      "B": "Cloud Armor filtra por atributos de red y no conoce la identidad ni el estado de suscripción del usuario: no puede distinguir a un abonado activo de quien recibió el enlace compartido.",
      "A": "Las reglas de ciclo de vida actúan sobre el objeto del bucket al cabo de días y no vacían las copias ya replicadas en la caché del CDN, por lo que no hay retirada inmediata."
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
        "text": "Datastream (la captura de cambios sin servidor que replica en tiempo real las tablas de Oracle hacia BigQuery para su análisis posterior)."
      },
      {
        "letter": "B",
        "text": "Storage Transfer Service (la transferencia administrada de un volcado completo del esquema de Oracle hacia un bucket de Cloud Storage)."
      },
      {
        "letter": "C",
        "text": "Database Migration Service (DMS) con capacidades integradas de conversión de esquemas basadas en IA para modernizar de Oracle a PostgreSQL/AlloyDB."
      },
      {
        "letter": "D",
        "text": "Cloud Data Fusion (el integrador visual de canalizaciones ETL sin código basado en CDAP para mover los datos entre ambos motores)."
      }
    ],
    "correct": "C",
    "explanation": "Database Migration Service (DMS) simplifica las migraciones heterogéneas complejas (como Oracle a PostgreSQL o AlloyDB) guiando la conversión de esquemas, procedimientos y tipos de datos, y manteniendo la replicación continua de datos para minimizar el tiempo de inactividad durante la transición.",
    "distractors": {
      "D": "Construye canalizaciones ETL de datos, pero no traduce los procedimientos almacenados ni orquesta un corte con replicación continua y mínima indisponibilidad.",
      "B": "Traslada archivos entre repositorios de almacenamiento: deja el volcado de Oracle intacto, sin conversión de esquema ni replicación continua durante la transición.",
      "A": "Datastream hace CDC hacia destinos analíticos como BigQuery o Cloud Storage: no convierte esquemas ni procedimientos almacenados hacia un motor transaccional PostgreSQL."
    },
    "officialDocUrl": "https://cloud.google.com/database-migration/docs",
    "blockId": "BLOCK-6",
    "reservaCiega": true
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
        "text": "Cloud DNS (para registrar la propiedad del dominio ante el registrador acreditado) y Cloud CDN (para servir los registros A, CNAME y MX desde la caché global)."
      },
      {
        "letter": "B",
        "text": "Cloud Domains (para registrar y administrar la propiedad del dominio) y Cloud Load Balancing con IP anycast global (para responder las consultas DNS con DNSSEC)."
      },
      {
        "letter": "C",
        "text": "Cloud Domains (para registrar y administrar la propiedad del dominio) y Cloud DNS (para servir los registros DNS autorizados con DNSSEC global)."
      },
      {
        "letter": "D",
        "text": "Cloud Domains (para registrar y administrar la propiedad del dominio) y Cloud Armor (para publicar los registros DNS firmados y frenar la falsificación de DNS)."
      }
    ],
    "correct": "C",
    "explanation": "Cloud Domains permite buscar, registrar y gestionar nombres de dominio directamente en la consola de Google Cloud, integrándose de forma nativa con Cloud DNS para servir registros DNS con seguridad DNSSEC y 100% de disponibilidad.",
    "distractors": {
      "D": "Cloud Armor es un WAF y protección DDoS para balanceadores; no publica zonas DNS ni implementa DNSSEC, que es una capacidad de Cloud DNS.",
      "B": "Acierta el registrador pero ancla mal el servicio DNS: el balanceador distribuye tráfico de aplicación sobre una IP anycast, no aloja zonas DNS ni firma DNSSEC.",
      "A": "Cloud DNS no es un registrador de dominios (esa función es de Cloud Domains) y Cloud CDN cachea contenido HTTP, no responde consultas DNS autoritativas."
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
        "text": "App Engine Standard (catálogo y checkout) + Cloud Tasks (cola de pedidos con reintentos) + Cloud Scheduler (envío periódico de los correos de confirmación) + Cloud Bigtable (base de datos de pedidos)."
      },
      {
        "letter": "B",
        "text": "Cloud Run (microservicios web de catálogo y checkout) + Cloud Pub/Sub (cola de pedidos) + Cloud Functions (envío de notificaciones de correo) + Cloud SQL (base de datos transaccional relacional con HA)."
      },
      {
        "letter": "C",
        "text": "Cloud Run (microservicios web de catálogo y checkout) + Cloud Pub/Sub (cola de pedidos) + Cloud Functions (correos de confirmación) + BigQuery (registro de los pedidos y del estado del catálogo)."
      },
      {
        "letter": "D",
        "text": "Google Kubernetes Engine Standard (microservicios de catálogo y pago) + Cloud Pub/Sub (cola de pedidos) + Cloud Functions (correos) + Cloud SQL con alta disponibilidad regional para las transacciones."
      }
    ],
    "correct": "B",
    "explanation": "Esta arquitectura combina el cómputo serverless elástico de Cloud Run, el desacoplamiento asíncrono y tolerante a picos de Pub/Sub, la ejecución ligera basada en eventos de Cloud Functions y la persistencia relacional administrada con alta disponibilidad de Cloud SQL.",
    "distractors": {
      "A": "Bigtable es NoSQL de columna ancha sin transacciones entre filas ni consultas relacionales, de modo que no cubre el requisito de base de datos transaccional del comercio.",
      "C": "BigQuery es un almacén analítico orientado a consultas masivas: no está diseñado para escrituras y actualizaciones transaccionales de pedidos con baja latencia.",
      "D": "GKE Standard mantiene nodos encendidos y exige administrar el clúster, por lo que incumple el requisito de contenedores serverless con escalado automático a cero."
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
        "text": "Regional Persistent Disk (disco persistente regional que replica datos de forma síncrona en dos zonas dentro de la misma región)"
      },
      {
        "letter": "B",
        "text": "Zonal Persistent Disk con instantáneas (snapshots) programadas cada hora y almacenadas de forma redundante en varias regiones"
      },
      {
        "letter": "C",
        "text": "Local SSD con replicación por software en RAID configurada entre dos discos locales de la misma máquina virtual"
      },
      {
        "letter": "D",
        "text": "Filestore Basic HDD (sistema de archivos NFS administrado y zonal, montado por red desde una máquina virtual arrancada en otra zona de la región)"
      }
    ],
    "correct": "A",
    "explanation": "Regional Persistent Disk proporciona almacenamiento en bloque con replicación síncrona de datos en dos zonas dentro de una misma región, permitiendo conmutar por error de forma casi instantánea una máquina virtual a otra zona sin pérdida de datos en caso de contingencia zonal.",
    "distractors": {
      "B": "Las instantáneas son copias asíncronas puntuales: obligan a restaurar y pueden perder hasta una hora de datos, mientras el enunciado exige replicación síncrona sin restauración.",
      "C": "El Local SSD está unido físicamente al host: sus datos se pierden al detener la VM y el RAID no cruza la frontera de zona, así que no sobrevive a una falla zonal.",
      "D": "El nivel Basic de Filestore es zonal: reside en la misma zona que falla, y además ofrece almacenamiento de archivos en red en vez de un disco en bloque adjunto."
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
        "text": "Porque Cloud Run aplica automáticamente los descuentos por uso continuado (sustained use) y los descuentos por compromiso de uso de tres años sobre la instancia, de modo que el coste por hora resulta inferior al de una máquina de Compute Engine equivalente."
      },
      {
        "letter": "B",
        "text": "Porque Cloud Run permite ejecutar la API sobre máquinas virtuales interrumpibles (Spot VMs) con hasta un 91% de descuento durante las noches y los fines de semana, devolviendo esa capacidad a Google cuando el tráfico de oficina vuelve a subir."
      },
      {
        "letter": "C",
        "text": "Porque Cloud Run mantiene siempre activa una instancia mínima que responde a las peticiones nocturnas sin coste alguno, evitando a la vez los arranques en frío y el pago de las máquinas virtuales ociosas durante el horario no laboral de la empresa."
      },
      {
        "letter": "D",
        "text": "Porque en Cloud Run no se pagan servidores ociosos durante las noches o fines de semana (escala a cero) y Google gestiona automáticamente el aprovisionamiento, parches de seguridad del sistema operativo y autoescalado sin costo de administración."
      }
    ],
    "correct": "D",
    "explanation": "Cloud Run factura únicamente por los recursos consumidos durante el procesamiento activo de solicitudes HTTP (calculado en milisegundos). Al no tener costos fijos de VMs ociosas y delegar la administración del sistema operativo a Google, optimiza radicalmente el TCO para cargas de tráfico variable.",
    "distractors": {
      "B": "Cloud Run es un servicio totalmente administrado: el cliente no elige el tipo de máquina ni contrata Spot VMs, que son una opción de aprovisionamiento de Compute Engine.",
      "C": "Las instancias mínimas no son gratuitas: se facturan a precio de CPU inactiva y por defecto son cero, de modo que el ahorro real proviene de escalar a cero, no de mantenerlas.",
      "A": "Los descuentos por uso continuado son un mecanismo de precio de Compute Engine sobre VMs encendidas; la ventaja de Cloud Run es no facturar tiempo ocioso porque escala a cero."
    },
    "officialDocUrl": "https://cloud.google.com/run",
    "blockId": "BLOCK-6",
    "reservaCiega": true
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
        "text": "Secret Manager (integrado nativamente con Cloud Run para inyectar secretos cifrados como variables de entorno o volúmenes montados)"
      },
      {
        "letter": "B",
        "text": "Cloud KMS (que cifra la contraseña con una clave administrada por el cliente y la entrega descifrada al contenedor en cada arranque del servicio)"
      },
      {
        "letter": "C",
        "text": "Cloud Storage con cifrado CMEK (un objeto privado que el contenedor descarga y descifra al iniciarse con su cuenta de servicio administrada)"
      },
      {
        "letter": "D",
        "text": "Variables de entorno definidas en el despliegue del servicio de Cloud Run con la marca --set-env-vars y restringidas mediante permisos de IAM"
      }
    ],
    "correct": "A",
    "explanation": "Secret Manager es un sistema de almacenamiento seguro, centralizado y versionado para contraseñas, claves de API, certificados y otros datos sensibles en Google Cloud, permitiendo inyectarlos de forma controlada y auditada a Cloud Run mediante permisos de IAM.",
    "distractors": {
      "B": "Cloud KMS gestiona claves criptográficas, no el material secreto: no almacena, versiona ni rota la contraseña, que seguiría guardada en otro lugar por la aplicación.",
      "C": "El bucket guarda un archivo cifrado pero no es un almacén de secretos: carece de versionado, rotación y de la inyección nativa en Cloud Run, y deja copias en el contenedor.",
      "D": "Las variables de entorno se guardan en texto plano en la configuración del servicio y se ven en la consola: es exactamente lo que la política de seguridad prohíbe."
    },
    "officialDocUrl": "https://cloud.google.com/secret-manager/docs",
    "blockId": "BLOCK-6",
    "reservaCiega": true
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
        "text": "Acceso SSH directo de los administradores a cada nodo para aplicar manualmente los parches del sistema operativo, junto con Workload Identity y nodos blindados habilitados de forma predeterminada."
      },
      {
        "letter": "B",
        "text": "Cifrado de los secretos de Kubernetes en etcd con claves administradas por el cliente activado por defecto, junto con el análisis obligatorio de vulnerabilidades de toda imagen antes de admitir cualquier Pod."
      },
      {
        "letter": "C",
        "text": "Aislamiento del clúster en una red privada sin dirección IP pública en el plano de control y perímetros de VPC Service Controls configurados automáticamente al crear cualquier clúster Autopilot."
      },
      {
        "letter": "D",
        "text": "Nodos blindados (Shielded Nodes) activados, parches de seguridad automáticos aplicados por Google, Workload Identity configurado y restricción predeterminada de privilegios elevados de contenedores."
      }
    ],
    "correct": "D",
    "explanation": "GKE Autopilot viene preconfigurado con una postura de seguridad endurecida según las mejores prácticas de Google: gestiona y actualiza los nodos automáticamente, restringe capacidades peligrosas de contenedores (como privilegios root no autorizados) e integra Shielded Nodes y Workload Identity.",
    "distractors": {
      "B": "El cifrado de secretos en la capa de aplicación con CMEK y el control de admisión de imágenes son opciones que hay que activar y configurar, no valores predeterminados de Autopilot.",
      "A": "En Autopilot los nodos los gestiona Google y no se permite acceso SSH ni parcheo manual: el mantenimiento del sistema operativo del nodo deja de ser tarea del cliente.",
      "C": "El clúster privado y VPC Service Controls son decisiones de diseño de red que el cliente configura explícitamente; Autopilot no las impone al crear el clúster."
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
        "text": "Desplegar la Revisión 2 como un servicio de Cloud Run distinto y repartir el tráfico con Cloud DNS"
      },
      {
        "letter": "B",
        "text": "Gestión de Revisiones inmutables y División de Tráfico (Traffic Splitting) en Cloud Run"
      },
      {
        "letter": "C",
        "text": "Ajustar el escalado automático de Cloud Run fijando un mínimo de instancias por cada revisión"
      },
      {
        "letter": "D",
        "text": "Publicar la Revisión 2 con `--no-traffic` y una URL de etiqueta para probarla por separado"
      }
    ],
    "correct": "B",
    "explanation": "Cada despliegue en Cloud Run crea una Revisión inmutable. Cloud Run permite dividir el tráfico por porcentajes exactos entre múltiples revisiones, facilitando despliegues graduales, pruebas canarias y reversiones instantáneas a revisiones anteriores.",
    "distractors": {
      "A": "El reparto por DNS es aproximado y no controla el porcentaje real de peticiones: la caché de resolución en clientes y resolutores impide tanto el 10% exacto como el cambio inmediato al 100%.",
      "C": "El número mínimo de instancias controla la capacidad y el arranque en frío de cada revisión, pero no decide qué proporción de las solicitudes entrantes va a cada una.",
      "D": "La URL de etiqueta permite probar la revisión sin exponerla, pero no le envía ninguna fracción del tráfico de producción: sólo la alcanza quien conoce esa URL."
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
        "text": "(1) External Application Load Balancer (para el tráfico público desde Internet); (2) Cloud NAT (para que la capa de microservicios reciba las conexiones privadas de la capa web sin IP externa)"
      },
      {
        "letter": "B",
        "text": "(1) Internal Application Load Balancer con IP privada de la subred publicada en Cloud DNS; (2) External Application Load Balancer con IP pública anycast global para la capa de microservicios"
      },
      {
        "letter": "C",
        "text": "(1) External Application Load Balancer (para el tráfico público desde Internet); (2) Internal Application Load Balancer (para balancear el tráfico privado entre la capa web y el backend dentro de la VPC)"
      },
      {
        "letter": "D",
        "text": "(1) External Application Load Balancer (para el tráfico público desde Internet); (2) Private Service Connect publicando el backend como servicio consumible desde la VPC de la capa web"
      }
    ],
    "correct": "C",
    "explanation": "External Load Balancing expone una IP pública para recibir tráfico desde Internet. Internal Load Balancing opera exclusivamente dentro de la red VPC asignando una IP privada interna de la subred, permitiendo balancear el tráfico de microservicios backend de forma segura y sin exposición externa.",
    "distractors": {
      "A": "Cloud NAT habilita salida a Internet desde instancias sin IP pública: no balancea tráfico entrante ni ofrece una IP virtual interna para la capa de backend.",
      "B": "Invierte los dos balanceadores: dejaría la capa web sin acceso desde Internet y expondría a Internet el backend que debe permanecer privado.",
      "D": "Private Service Connect publica un servicio entre VPC o proyectos distintos y necesita un balanceador interno detrás: por sí mismo no distribuye el tráfico entre los backends."
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
        "text": "Crear una máquina virtual en Compute Engine con la misma versión de Node.js, copiar el código con `gcloud compute scp` y configurar Nginx con un certificado TLS renovado por una tarea programada."
      },
      {
        "letter": "B",
        "text": "Reescribir la aplicación como funciones independientes en Cloud Run Functions, dividiendo cada ruta HTTP en una función con su propio despliegue, sus dependencias y su configuración de escalado."
      },
      {
        "letter": "C",
        "text": "Desplegar la aplicación en el entorno flexible de App Engine con un archivo `app.yaml` que fije instancias mínimas siempre encendidas y trasladar las sesiones de usuario a Memorystore."
      },
      {
        "letter": "D",
        "text": "Empaquetar la aplicación en un contenedor Docker, compilar la imagen con Cloud Build y desplegarla directamente en Cloud Run para obtener autoescalado, URL HTTPS segura y alta disponibilidad inmediata."
      }
    ],
    "correct": "D",
    "explanation": "El camino más directo para modernizar aplicaciones web estándar hacia Google Cloud es la contenedorización: empaquetar el código en un contenedor OCI/Docker y desplegarlo en Cloud Run, obteniendo automáticamente escalabilidad, certificados HTTPS administrados y cero mantenimiento de servidores.",
    "distractors": {
      "A": "Es un traslado literal a una VM: mantiene la administración del servidor, el parcheo del sistema operativo y la renovación del certificado, y no aporta autoescalado, que son justamente los objetivos que plantea el escenario.",
      "B": "Ofrece autoescalado y HTTPS, pero exige reescribir y trocear la aplicación existente, lo contrario del menor esfuerzo posible: Cloud Run ejecuta el mismo código Node.js contenedorizado sin cambiar su estructura.",
      "C": "El entorno flexible se ejecuta sobre VMs administradas que tardan minutos en escalar y nunca bajan a cero instancias, por lo que mantiene un coste base permanente, y añade una dependencia de Memorystore que nadie ha pedido."
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
        "text": "Google Cloud proporciona una plataforma integral y flexible que permite a las empresas elegir el nivel óptimo de abstracción (desde IaaS con Compute Engine hasta Serverless con Cloud Run), respaldada por una red global privada de fibra óptica, seguridad Zero Trust y gestión híbrida/multinube, acelerando la innovación y garantizando disponibilidad continua a escala planetaria."
      },
      {
        "letter": "B",
        "text": "Google Cloud aporta valor sobre todo como infraestructura de bajo coste, de modo que la recomendación al comité es rehospedar (lift and shift) las aplicaciones existentes en Compute Engine y detener ahí la modernización: adoptar contenedores, Cloud Run o una malla de servicios añadiría complejidad operativa sin beneficios medibles sobre la resiliencia del negocio."
      },
      {
        "letter": "C",
        "text": "La suite de modernización garantiza por sí sola la continuidad del negocio: al desplegar en Cloud Run y GKE, Google replica automáticamente cada carga de trabajo en varias regiones y conserva copias de seguridad de los datos, por lo que la empresa no necesita fijar objetivos de RTO y RPO ni diseñar una arquitectura multirregión."
      },
      {
        "letter": "D",
        "text": "La conclusión es estandarizar toda la plataforma en un único servicio de cómputo para simplificar la operación: migrar cada carga a Google Kubernetes Engine, incluidas las APIs de tráfico intermitente y los sistemas heredados retenidos en el centro de datos, porque la uniformidad tecnológica abarata la modernización y reduce la formación necesaria en los equipos de operaciones."
      }
    ],
    "correct": "A",
    "explanation": "El portafolio de modernización de infraestructura y aplicaciones de Google Cloud ofrece una transición fluida desde la infraestructura tradicional hacia arquitecturas nativas de nube, potenciando la resiliencia del negocio, reduciendo el time-to-market y garantizando seguridad de clase mundial a escala global.",
    "distractors": {
      "D": "Fuerza un único nivel de abstracción para cargas distintas: una API intermitente desperdicia nodos encendidos en GKE y un sistema retenido por regulación no puede migrarse en absoluto.",
      "C": "Cloud Run y GKE son servicios regionales o zonales: la resiliencia multirregión se diseña y se paga explícitamente, y los objetivos de RTO y RPO los define siempre el cliente.",
      "B": "Quedarse en el rehospedaje conserva la carga operativa y los ciclos de despliegue heredados: renuncia a la elasticidad, al escalado automático y a la reducción del time-to-market que sustentan la resiliencia."
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
        "text": "Reglas de filtrado geográfico (Geo-blocking) en las políticas de seguridad de Google Cloud Armor asociadas al balanceador de carga."
      },
      {
        "letter": "B",
        "text": "Reglas de firewall de entrada en la VPC que denieguen los rangos de direcciones IP de los países sin licencia de emisión."
      },
      {
        "letter": "C",
        "text": "Identity-Aware Proxy (IAP) con un nivel de acceso de Access Context Manager que restrinja la región geográfica del usuario."
      },
      {
        "letter": "D",
        "text": "Política de enrutamiento geográfico (geolocation routing) en Cloud DNS que resuelva el dominio solo para México, Estados Unidos y Canadá."
      }
    ],
    "correct": "A",
    "explanation": "Cloud Armor permite definir reglas de seguridad basadas en geolocalización (Geo-blocking), evaluando el código de país de origen de la dirección IP del cliente en la red perimetral de Google y bloqueando o permitiendo el acceso según las necesidades legales y de seguridad.",
    "distractors": {
      "D": "El enrutamiento geográfico decide a qué dirección IP se resuelve el dominio, pero no bloquea nada: quien conozca la IP del balanceador sigue accediendo.",
      "C": "IAP protege aplicaciones internas exigiendo una identidad autenticada, mientras que el tráfico de streaming al que se aplica la licencia es público y anónimo.",
      "B": "El firewall de VPC filtra por rango de IP dentro de la red del proyecto y no maneja códigos de país; además actúa detrás del balanceador, no en el borde."
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
        "text": "Enmascaramiento con caracteres (Character Masking) sustituyendo por asteriscos todos los dígitos de la tarjeta salvo los cuatro últimos, dentro de Sensitive Data Protection."
      },
      {
        "letter": "B",
        "text": "Tokenización criptográfica mediante hash con clave HMAC-SHA-256 (Crypto Hashing) aplicada al número de tarjeta y configurada en Sensitive Data Protection."
      },
      {
        "letter": "C",
        "text": "Tokenización criptográfica con preservación de formato (Crypto-Deterministic Format-Preserving Encryption / Pseudonymization) en Sensitive Data Protection."
      },
      {
        "letter": "D",
        "text": "Redacción completa (Redaction) del campo de la tarjeta y cálculo de k-anonimato sobre el conjunto de datos antes de entregarlo, mediante Sensitive Data Protection."
      }
    ],
    "correct": "C",
    "explanation": "Sensitive Data Protection admite transformaciones avanzadas de desidentificación como la seudonimización criptográfica determinista con preservación de formato (FPE). Esto reemplaza el dato sensible (ej. tarjeta de crédito) por un token seguro y consistente que permite análisis relacional sin exponer el valor original.",
    "distractors": {
      "D": "La redacción elimina el valor y no deja ningún token con el que correlacionar las compras del mismo cliente, y el k-anonimato es una métrica de riesgo de reidentificación, no una transformación que genere seudónimos.",
      "A": "El enmascaramiento es irreversible y no genera un identificador único por tarjeta: dos tarjetas distintas con los mismos cuatro dígitos finales quedarían indistinguibles, así que no permite rastrear las compras de un mismo cliente.",
      "B": "El hash con clave sí produce siempre el mismo token para el mismo número, pero es una función de un solo sentido: no existe forma de recuperar el número original, y el escenario exige que la transformación sea reversible."
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
        "text": "Crear y borrar 5,000 usuarios a mano todos los días en la consola"
      },
      {
        "letter": "B",
        "text": "Cloud Storage Archive"
      },
      {
        "letter": "C",
        "text": "Cloud Armor"
      },
      {
        "letter": "D",
        "text": "Google Cloud Directory Sync (GCDS)"
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud Directory Sync (GCDS) es una herramienta local gratuita que sincroniza automáticamente usuarios, grupos y contactos desde un servidor Microsoft Active Directory o LDAP hacia Cloud Identity / Google Workspace en un solo sentido.",
    "distractors": {
      "B": "Cloud Storage Archive almacena archivos pasivos.",
      "C": "Cloud Armor es un servicio WAF de seguridad perimetral.",
      "A": "La gestión manual de miles de usuarios es insostenible y propensa a retrasos en la revocación de accesos de exempleados."
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
        "text": "Conservar las 40 cuentas de servicio pero rotar sus claves JSON cada 90 días, de modo que las credenciales antiguas dejen de ser válidas aunque la cuenta de servicio siga existiendo y habilitada."
      },
      {
        "letter": "B",
        "text": "Desactivar o eliminar las Service Accounts y claves de servicio que no se utilicen, siguiendo las recomendaciones del IAM Recommender para reducir la superficie de ataque."
      },
      {
        "letter": "C",
        "text": "Sustituir las claves JSON por la suplantación de cuentas de servicio con tokens de corta duración, manteniendo activas las 40 cuentas por si alguna carga de trabajo vuelve a necesitarlas."
      },
      {
        "letter": "D",
        "text": "Reducir con el Recomendador de IAM los roles de las 40 cuentas hasta `roles/viewer` y dejarlas habilitadas para no interrumpir ninguna integración desconocida que aún dependa de ellas."
      }
    ],
    "correct": "B",
    "explanation": "Mantener cuentas de servicio inactivas y claves huérfanas incrementa innecesariamente la superficie de ataque. La mejor práctica de seguridad es deshabilitarlas, auditar su impacto y eliminarlas para prevenir accesos no autorizados mediante credenciales olvidadas.",
    "distractors": {
      "D": "Aplicar el mínimo privilegio a una identidad que no se usa deja igualmente una vía de acceso activa. La guía de Google es desactivarla primero, que es reversible y valida que nada la usa, y eliminarla después.",
      "C": "La suplantación con credenciales efímeras es la práctica correcta para las cuentas que sí se usan, pero no resuelve el hallazgo: las 40 identidades inactivas siguen existiendo con sus permisos y deben desactivarse y eliminarse.",
      "A": "La rotación mantiene viva una credencial válida para una identidad que nadie utiliza: la superficie de ataque (la cuenta y los permisos que conserva) sigue intacta, y solo se elimina desactivando y borrando la cuenta."
    },
    "officialDocUrl": "https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys",
    "blockId": "BLOCK-6",
    "reservaCiega": true
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
        "text": "Métricas basadas en registros (Log-Based Metrics) de tipo contador en Cloud Logging"
      },
      {
        "letter": "B",
        "text": "Enrutadores de registros (Log Sinks) de Cloud Logging hacia un tema de Pub/Sub"
      },
      {
        "letter": "C",
        "text": "Alertas basadas en registros (Log-Based Alerts en Cloud Logging y Cloud Monitoring)"
      },
      {
        "letter": "D",
        "text": "Registros de Auditoría de Acceso a Datos (Data Access Logs) en Cloud Audit Logs"
      }
    ],
    "correct": "C",
    "explanation": "Las Log-Based Alerts en Cloud Logging permiten definir una consulta de filtro de registros específica y disparar automáticamente una notificación de Cloud Monitoring en el momento exacto en que coincide un mensaje de registro crítico (como un fallo 403 de seguridad).",
    "distractors": {
      "A": "Una métrica basada en registros convierte las coincidencias en una serie temporal agregada por ventana; por sí sola no notifica ni identifica la línea concreta.",
      "B": "El sink exporta la entrada a otro destino, pero no genera la notificación: haría falta construir un consumidor que la envíe.",
      "D": "Los audit logs son la fuente que contiene la evidencia del 403, no el mecanismo que dispara la notificación en tiempo real."
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
        "text": "Sumideros de registros (Log Sinks) que exportan los registros de la aplicación a BigQuery para consultarlos con SQL"
      },
      {
        "letter": "B",
        "text": "El agente de operaciones (Ops Agent) recopilando las métricas nativas de la máquina virtual: CPU, memoria y disco"
      },
      {
        "letter": "C",
        "text": "Métricas basadas en registros (Log-Based Metrics: métricas de recuento o de distribución extraídas de los logs)"
      },
      {
        "letter": "D",
        "text": "Rastreo distribuido con Cloud Trace y perfilado continuo del código con Cloud Profiler sobre la aplicación heredada"
      }
    ],
    "correct": "C",
    "explanation": "Las Log-Based Metrics permiten extraer datos cuantitativos y valores numéricos a partir del contenido de los registros de Cloud Logging, transformando mensajes de texto no estructurados en métricas de series temporales de Cloud Monitoring para gráficos y alertas.",
    "distractors": {
      "A": "El sumidero deja los registros consultables como filas en BigQuery, pero no crea ninguna serie temporal en Cloud Monitoring: no se pueden graficar en los paneles ni usar como condición de una política de alertas.",
      "D": "Trace mide la latencia de las peticiones instrumentadas y Profiler el consumo de CPU y memoria del proceso: ninguno lee el contenido de los registros, y la aplicación heredada no está instrumentada con esas bibliotecas.",
      "B": "El Ops Agent recoge métricas del sistema operativo y del host, pero los valores que interesan (latencia de pago y número de pedidos) están dentro del texto de los registros de la aplicación, que esas métricas no contemplan."
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
        "text": "Sumideros de registros (Log Sinks) que exportan a Cloud Storage Coldline"
      },
      {
        "letter": "B",
        "text": "Métricas basadas en registros (Log-Based Metrics) sobre los logs DEBUG"
      },
      {
        "letter": "C",
        "text": "Reducir a un día la retención del bucket _Default de Cloud Logging"
      },
      {
        "letter": "D",
        "text": "Exclusiones de registros (Log Exclusions en el Log Router de Cloud Logging)"
      }
    ],
    "correct": "D",
    "explanation": "Las Exclusiones de Registros (Log Exclusions) en Cloud Logging permiten filtrar y descartar registros específicos (como logs de depuración DEBUG de alto volumen) antes de que sean ingeridos y almacenados en los Log Buckets, optimizando significativamente los costos de observabilidad.",
    "distractors": {
      "C": "La retención determina cuánto tiempo se conservan los registros, no si se ingieren: Cloud Logging factura principalmente por volumen ingerido. Además borraría también los registros ERROR y WARN que deben conservarse.",
      "A": "Un sumidero enruta una copia de los registros a otro destino, pero los logs DEBUG se siguen ingiriendo en Cloud Logging y la ingesta es lo que se factura: el costo no baja y se añade el de Cloud Storage.",
      "B": "Las métricas basadas en registros extraen valores numéricos para graficar y alertar, pero se calculan sobre registros que ya fueron ingeridos: no evitan ni la ingesta ni el almacenamiento facturable de los logs DEBUG."
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
        "text": "Aplicando la Protección Adaptativa (Adaptive Protection) de Cloud Armor, que aprende el patrón de tráfico normal del sitio y sugiere reglas de mitigación al detectar desviaciones anómalas."
      },
      {
        "letter": "B",
        "text": "Habilitando el conjunto de Reglas WAF Preconfiguradas de Cloud Armor (Preconfigured WAF Rules basadas en ModSecurity Core Rule Set) que detectan y bloquean automáticamente firmas de ataques OWASP."
      },
      {
        "letter": "C",
        "text": "Escribiendo reglas personalizadas en el lenguaje de expresiones de Cloud Armor que comparen el encabezado y el cuerpo de cada petición contra las firmas publicadas del OWASP Top 10."
      },
      {
        "letter": "D",
        "text": "Activando reCAPTCHA Enterprise y la gestión de bots en el balanceador, que distinguen a los usuarios legítimos de las automatizaciones antes de que la petición llegue al backend."
      }
    ],
    "correct": "B",
    "explanation": "Google Cloud Armor incluye un conjunto integral de reglas de WAF preconfiguradas y ajustadas por Google basadas en el conjunto de reglas ModSecurity (CRS), diseñadas para mitigar ataques comunes de OWASP (inyección SQL, XSS, RCE, fijación de sesiones, inyección de comandos) con un solo clic.",
    "distractors": {
      "A": "Adaptive Protection detecta anomalías volumétricas de DDoS de Capa 7 tras un periodo de aprendizaje; no inspecciona la carga útil en busca de firmas de SQLi, XSS o RCE.",
      "C": "Es exactamente el trabajo manual que la pregunta descarta: obliga a redactar y mantener las expresiones desde cero en lugar de habilitar el conjunto ya preconfigurado.",
      "D": "La gestión de bots clasifica el origen del tráfico, no el contenido: una petición de un usuario legítimo con una carga útil de inyección SQL la atraviesa sin bloquearse."
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
    "scenario": "Un oficial de seguridad busca una solución que escanee continuamente la infraestructura de Google Cloud para detectar automáticamente errores de configuración comunes como: buckets de Cloud Storage públicos abiertos a todo el mundo, puertos de administración SSH (puerto 22) o RDP (puerto 3389) abiertos a Internet en reglas de firewall, o llaves de Service Account con más de 90 días sin rotación. El proyecto todavía no tiene ningún producto de seguridad centralizado activado. ¿Qué dos pasos debe completar para obtener este escaneo continuo? (Elige 2.)",
    "keywords": [
      "Security Health Analytics",
      "SHA",
      "Security Command Center",
      "Detección de malas configuraciones",
      "Buckets públicos",
      "Puertos SSH abiertos"
    ],
    "isMultiSelect": true,
    "expectedSelectCount": 2,
    "options": [
      {
        "letter": "A",
        "text": "Event Threat Detection (en Security Command Center Premium)"
      },
      {
        "letter": "B",
        "text": "Web Security Scanner (en Security Command Center Standard)"
      },
      {
        "letter": "C",
        "text": "Security Health Analytics (SHA en Security Command Center)"
      },
      {
        "letter": "D",
        "text": "Cloud Asset Inventory (con feeds de cambios y exportación)"
      },
      {
        "letter": "E",
        "text": "Tener Security Command Center activo en el proyecto, para que SHA opere."
      }
    ],
    "correct": [
      "C",
      "E"
    ],
    "explanation": "Security Health Analytics realiza el escaneo continuo de malas configuraciones descrito, pero es un módulo que opera dentro de Security Command Center: el proyecto u organización debe tener el servicio activo (al menos en nivel Standard) para que SHA pueda ejecutarse. Los dos pasos son necesarios en ese orden: activar el servicio y luego contar con el módulo de escaneo.",
    "distractors": {
      "D": "Cloud Asset Inventory inventaría y exporta metadatos de activos y sus cambios, pero no evalúa por sí mismo si una configuración es insegura.",
      "A": "Event Threat Detection identifica amenazas activas en los registros (como minería de criptomonedas), no errores estáticos de configuración como buckets o firewalls.",
      "B": "Web Security Scanner analiza vulnerabilidades web (XSS, uso de bibliotecas desactualizadas) en URLs públicas de la aplicación, no configuraciones de IAM, firewall o buckets."
    },
    "officialDocUrl": "https://cloud.google.com/security-command-center/docs/concepts-security-health-analytics-overview",
    "blockId": "BLOCK-6",
    "reservaCiega": true
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
        "text": "Registros de Auditoría de Actividad del Administrador (Admin Activity)"
      },
      {
        "letter": "B",
        "text": "Registros de Access Transparency (Access Transparency Logs en Cloud Logging)"
      },
      {
        "letter": "C",
        "text": "Aprobación de Acceso (Access Approval para autorizar cada solicitud)"
      },
      {
        "letter": "D",
        "text": "Registros de Auditoría de Acceso a Datos (Data Access Audit Logs)"
      }
    ],
    "correct": "B",
    "explanation": "Los registros de Access Transparency capturan registros casi en tiempo real de las acciones administrativas manuales realizadas por el personal de soporte o ingeniería de Google sobre los datos de los clientes, proporcionando el motivo comercial, la referencia al ticket de soporte y la ubicación del empleado.",
    "distractors": {
      "D": "Los Data Access registran las lecturas y escrituras de datos realizadas por los usuarios y las cuentas de servicio del propio proyecto, nunca las acciones del personal de soporte o ingeniería de Google.",
      "A": "Los Admin Activity dejan constancia de las acciones administrativas ejecutadas por los principales del propio cliente sobre sus recursos: el acceso del personal de Google se registra en un flujo distinto y separado.",
      "C": "Access Approval es el control que permite al cliente aprobar o denegar el acceso de Google antes de que ocurra. Los auditores piden la evidencia registrada de los accesos ya realizados, que aporta Access Transparency."
    },
    "officialDocUrl": "https://cloud.google.com/logging/docs/audit/access-transparency-overview",
    "blockId": "BLOCK-6",
    "reservaCiega": true
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
        "text": "Porque cada proyecto de Google Cloud recibe una factura independiente y la plataforma no permite agrupar el gasto de varios proyectos en una misma cuenta de facturación, de modo que separar los entornos es la única forma de conocer el coste de desarrollo y el de producción."
      },
      {
        "letter": "B",
        "text": "Porque una red VPC no puede contener recursos de entornos distintos y Google Cloud exige un proyecto por cada red VPC creada, de modo que separar Desarrollo, Pruebas y Producción es un requisito técnico obligatorio de la plataforma y no una recomendación de arquitectura."
      },
      {
        "letter": "C",
        "text": "Porque el Proyecto es el límite principal de aislamiento en Google Cloud para seguridad (políticas de IAM independientes), cuotas de recursos, redes VPC y facturación, evitando que un error o prueba en desarrollo afecte a la disponibilidad o seguridad de producción."
      },
      {
        "letter": "D",
        "text": "Porque la jerarquía de recursos solo aplica las políticas de la organización en el ámbito del proyecto y las carpetas no admiten restricciones heredadas, por lo que separar los entornos en proyectos distintos es la única manera de imponer guardarraíles diferentes a desarrollo y producción."
      }
    ],
    "correct": "C",
    "explanation": "En Google Cloud, el Proyecto actúa como el límite fundamental de aislamiento de seguridad, administración de IAM, redes, cuotas y auditoría. Separar Dev, Staging y Prod en proyectos distintos garantiza el principio de aislamiento de fallos (blast radius) y control riguroso de accesos.",
    "distractors": {
      "A": "Varios proyectos pueden compartir una misma cuenta de facturación y el desglose por entorno se obtiene con etiquetas: el motivo real de la separación es el aislamiento, no la factura.",
      "D": "Las Organization Policies se fijan en la organización, en las carpetas y en los proyectos, y se heredan hacia abajo: agrupar entornos en carpetas es precisamente el patrón recomendado.",
      "B": "Un mismo proyecto admite varias redes VPC y nada impide alojar entornos distintos en uno solo: la separación es una práctica recomendada, no una imposición técnica."
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
        "text": "Monitores Sintéticos (Synthetic Monitors en Cloud Monitoring basados en scripts de Cloud Functions con Mocha/Node.js)"
      },
      {
        "letter": "B",
        "text": "Comprobaciones de tiempo de actividad (Uptime Checks) de Cloud Monitoring contra el puerto 443 del portal"
      },
      {
        "letter": "C",
        "text": "Comprobaciones de estado (Health Checks) del balanceador de carga configuradas contra la ruta de inicio de sesión"
      },
      {
        "letter": "D",
        "text": "Cloud Trace con muestreo de latencia distribuida sobre las peticiones reales de los clientes del portal bancario"
      }
    ],
    "correct": "A",
    "explanation": "Los Synthetic Monitors en Cloud Monitoring ejecutan código automatizado personalizado (mediante Cloud Functions) para simular transacciones completas de usuarios de varios pasos a intervalos regulares, validando que la lógica de negocio y las dependencias complejas funcionen correctamente.",
    "distractors": {
      "D": "Trace mide el tráfico real ya existente; no genera la transacción sintética cada 5 minutos cuando no hay usuarios conectados.",
      "B": "El Uptime Check valida que un extremo responda con el código esperado, pero no ejecuta un flujo de varios pasos con sesión iniciada.",
      "C": "El health check decide si un backend recibe tráfico del balanceador; no simula una sesión de usuario ni valida la transferencia bancaria."
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
        "text": "Event Threat Detection en Security Command Center"
      },
      {
        "letter": "B",
        "text": "Security Health Analytics en Security Command Center"
      },
      {
        "letter": "C",
        "text": "Análisis de vulnerabilidades en Artifact Registry"
      },
      {
        "letter": "D",
        "text": "Container Threat Detection en Security Command Center"
      }
    ],
    "correct": "D",
    "explanation": "Container Threat Detection en SCC supervisa continuamente el comportamiento de los contenedores en GKE en tiempo real, detectando ejecuciones de binarios no autorizados, scripts maliciosos, shells inversos y accesos anómalos dentro de los Pods.",
    "distractors": {
      "C": "El análisis de vulnerabilidades revisa la imagen del contenedor en busca de CVE conocidas antes de desplegarla: no tiene visibilidad sobre lo que el contenedor ejecuta una vez está corriendo en el clúster.",
      "A": "Event Threat Detection analiza flujos de Cloud Logging (auditoría, DNS, firewall) buscando amenazas a nivel de plataforma: no observa el comportamiento del proceso dentro del contenedor en tiempo de ejecución.",
      "B": "Security Health Analytics evalúa la configuración de los recursos para encontrar desviaciones de la postura de seguridad, y lo hace mediante análisis periódicos: no detecta la ejecución de un shell inverso en un Pod activo."
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
        "text": "Niveles de acceso de Access Context Manager basados en rangos de direcciones IP"
      },
      {
        "letter": "B",
        "text": "BeyondCorp Enterprise con Identity-Aware Proxy para el acceso a aplicaciones"
      },
      {
        "letter": "C",
        "text": "Verificación en dos pasos obligatoria con llaves de seguridad Titan en Cloud Identity"
      },
      {
        "letter": "D",
        "text": "Gestión de Endpoints de Google Workspace y Cloud Identity (Google Endpoint Management)"
      }
    ],
    "correct": "D",
    "explanation": "Google Endpoint Management (integrado en Cloud Identity y Google Workspace) permite a las empresas asegurar y gestionar los dispositivos móviles y computadoras de los empleados, aplicando políticas de bloqueo, cifrado y borrado remoto selectivo de datos corporativos ante robo o extravío.",
    "distractors": {
      "A": "Define condiciones para conceder acceso a los recursos, pero no impone el cifrado del dispositivo ni permite borrarlo de forma remota.",
      "B": "Protege el acceso a las aplicaciones desde cualquier dispositivo; no gestiona el ciclo de vida del teléfono ni borra sus datos corporativos.",
      "C": "Refuerza la autenticación de la cuenta, pero no aplica políticas de bloqueo de pantalla ni actúa sobre un dispositivo extraviado."
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
        "text": "Google Cloud cubre la seguridad de la infraestructura de extremo a extremo, por lo que el modelo de responsabilidad compartida traslada a Google la configuración de IAM, las reglas de firewall de la VPC, la clasificación de los datos del cliente y el cumplimiento normativo de la aplicación; el comité puede por tanto migrar las operaciones críticas sin definir controles propios ni conservar responsabilidades de auditoría interna."
      },
      {
        "letter": "B",
        "text": "La postura de Google Cloud es sólida en cifrado en reposo y en seguridad del hardware, pero al carecer de certificaciones de terceros independientes como ISO 27001, SOC 2 Tipo II o PCI DSS y de informes de auditoría publicables ante el regulador, la institución debe conservar sus cargas reguladas en su propio centro de datos y limitar el uso de la nube a entornos de desarrollo y pruebas con datos sintéticos, sin información real de clientes."
      },
      {
        "letter": "C",
        "text": "Para alcanzar el nivel exigido la institución debe sustituir los controles nativos de Google Cloud por herramientas de terceros: un SIEM comercial en lugar de Cloud Operations, un CASB externo en vez de Security Command Center y un HSM propio en su centro de datos, porque la plataforma no ofrece gobernanza de identidades ni observabilidad integradas para cargas reguladas."
      },
      {
        "letter": "D",
        "text": "Google Cloud proporciona una infraestructura de confianza probada a nivel planetario que combina: defensa en profundidad multicapa con chips Titan y cifrado predeterminado, arquitectura Zero Trust con BeyondCorp, gobernanza estandarizada con Resource Hierarchy y Organization Policies, observabilidad integral con Cloud Operations, excelencia operativa SRE y certificaciones de cumplimiento de terceros independientes del más alto nivel."
      }
    ],
    "correct": "D",
    "explanation": "Google Cloud ofrece una arquitectura integral de seguridad, confiabilidad y gobernanza basada en décadas de investigación y operación a hiperescala, permitiendo a las organizaciones más exigentes del mundo innovar con confianza bajo los más rigurosos estándares de seguridad y cumplimiento normativo.",
    "distractors": {
      "A": "Invierte el modelo de responsabilidad compartida: Google asegura la infraestructura, pero la configuración de IAM, las redes, la clasificación de datos y el cumplimiento de la carga de trabajo siguen siendo del cliente.",
      "C": "Niega capacidades que la plataforma sí ofrece de forma nativa: Security Command Center, Cloud Operations y Cloud HSM cubren postura, observabilidad y custodia de claves sin reemplazarlos por terceros.",
      "B": "Parte de una premisa falsa: Google Cloud mantiene auditorías y certificaciones independientes ISO 27001, SOC 1/2/3 y PCI DSS, publicadas en el Compliance Resource Center."
    },
    "officialDocUrl": "https://cloud.google.com/security",
    "blockId": "BLOCK-6"
  }
];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCP_CDL_QUESTIONS;
  }
  if (typeof global !== 'undefined') {
    global.GCP_CDL_QUESTIONS = GCP_CDL_QUESTIONS;
  }
})(typeof window !== 'undefined' ? window : global);
