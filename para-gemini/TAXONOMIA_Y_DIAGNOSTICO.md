# Taxonomía oficial y sistema de diagnóstico por subtema

**Proyecto:** `C:\DevWork\Certificaciones-GCP-Master-Studio`
**Verificado contra las guías oficiales de Google el:** 25 de agosto de 2026
**Naturaleza:** fuente única de verdad. Si algo en el repositorio contradice este
documento, gana este documento. Si Google cambia la guía, se actualiza **aquí
primero** y después el código.

---

## 0. Por qué existe este documento

Hoy conviven en el proyecto **tres juegos de pesos distintos** para PCA:

| Fuente | D1 | D2 | D3 | D4 | D5 | D6 |
|---|---|---|---|---|---|---|
| `cert_manifest.js` | 24 | 15 | 20 | 18 | 11 | 12 |
| Un blog / vídeo de la comunidad | 24 | 15 | 18 | 18 | 11 | 14 |
| **Guía oficial de Google (verificada)** | **25** | **17,5** | **17,5** | **15** | **12,5** | **12,5** |

Los dos primeros están mal. Estudiar con ellos significa repartir mal las horas:
con los pesos del manifiesto dedicarías un 20 % a Seguridad cuando el examen le
da 17,5 %, y un 11 % a Implementación cuando le da 12,5 %.

**Regla:** la única fuente válida es el PDF de la guía oficial. Ni blogs, ni
vídeos, ni el manifiesto, ni este documento sin fecha de verificación reciente.

Fuentes, con la URL exacta que hay que reabrir antes de cada campaña:

- ACE — https://cloud.google.com/learn/certification/guides/cloud-engineer
- PCA — https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf
- CDL — https://services.google.com/fh/files/misc/cloud_digital_leader_exam_guide_english.pdf

---

## 1. Cloud Digital Leader — 6 secciones, 14 subsecciones

| ID | Sección | Peso | Preguntas de 300 |
|---|---|---|---|
| CDL-1 | Digital Transformation with Google Cloud | 18 % | 54 |
| CDL-2 | Exploring Data Transformation with Google Cloud | 18 % | 54 |
| CDL-3 | Innovating with Google Cloud Artificial Intelligence | 18 % | 54 |
| CDL-4 | Modernize Infrastructure and Applications with Google Cloud | 18 % | 54 |
| CDL-5 | Trust and Security with Google Cloud | 18 % | 54 |
| CDL-6 | Scaling with Google Cloud Operations | 10 % | 30 |

**Subsecciones**

- `CDL-1.1` Explain why and how the cloud is revolutionizing businesses
- `CDL-1.2` Describe fundamental cloud concepts
- `CDL-2.1` Describe the intrinsic role that data plays in digital transformation
- `CDL-2.2` Determine which data management products apply to which business use cases
- `CDL-2.3` Discuss how smart analytics, BI tools and streaming analytics add value
- `CDL-3.1` Describe fundamental AI and ML concepts and how they create business value
- `CDL-3.2` Explain how Google Cloud's AI offerings can create business value
- `CDL-4.1` Describe how Google Cloud helps organizations transition to the cloud
- `CDL-4.2` Describe functionality, use cases and value of Google Cloud infrastructure offerings
- `CDL-4.3` Describe the business value of APIs
- `CDL-5.1` Describe fundamental cloud security concepts
- `CDL-5.2` Describe the business value of Google's defense-in-depth security approach
- `CDL-6.1` Recognize how Google Cloud supports cost control
- `CDL-6.2` Describe modern operations, reliability and resilience in the cloud

> **Estado actual del banco:** solo tiene 4 dominios (10/30/30/30). Faltan
> **CDL-3 completa (IA, 18 % del examen)** y **CDL-6 completa**. Hoy únicamente
> 10 de 300 preguntas mencionan Gemini o IA generativa: un 3 % de cobertura para
> un área que vale 18 %.
>
> **Nivel exigido:** CDL es una certificación de negocio. El examen pregunta *por
> qué* migrar, TCO/ROI, CapEx vs OpEx, y *cuándo* usar BigQuery en vez de
> Cloud SQL. **No pregunta sintaxis de CLI.** Ninguna pregunta de CDL debe
> contener un comando `gcloud`, `bq`, `gsutil` ni `kubectl`.

---

## 2. Associate Cloud Engineer — 5 secciones, 19 subsecciones

| ID | Sección | Peso | Preguntas de 300 |
|---|---|---|---|
| ACE-1 | Setting up a cloud solution environment | 20 % | 60 |
| ACE-2 | Planning and configuring a cloud solution | 17,5 % | 53 |
| ACE-3 | Deploying and implementing a cloud solution | 25 % | 75 |
| ACE-4 | Ensuring successful operation of a cloud solution | 20 % | 60 |
| ACE-5 | Configuring access and security | 17,5 % | 52 |

**Subsecciones**

- `ACE-1.1` Setting up cloud projects and accounts
- `ACE-1.2` Managing billing configuration
- `ACE-2.1` Planning and configuring compute resources
- `ACE-2.2` Planning and configuring data storage options
- `ACE-2.3` Planning and configuring network resources
- `ACE-3.1` Deploying and implementing Compute Engine resources
- `ACE-3.2` Deploying and implementing Google Kubernetes Engine resources
- `ACE-3.3` Deploying and implementing Cloud Run and Cloud Functions resources
- `ACE-3.4` Deploying and implementing data solutions
- `ACE-3.5` Deploying and implementing networking resources
- `ACE-3.6` Implementing resources through infrastructure as code
- `ACE-4.1` Managing Compute Engine resources
- `ACE-4.2` Managing Google Kubernetes Engine resources
- `ACE-4.3` Managing Cloud Run resources
- `ACE-4.4` Managing storage and database solutions
- `ACE-4.5` Managing networking resources
- `ACE-4.6` Monitoring and logging
- `ACE-5.1` Managing Identity and Access Management (IAM)
- `ACE-5.2` Managing service accounts

> **Estado actual:** los pesos por sección están bien (desvío máximo 0,8 puntos).
> El agujero está en `ACE-3.6`: **1 sola pregunta de 300** menciona Terraform o
> infraestructura como código. Esa subsección debería tener ~12 preguntas.
>
> **Nivel exigido:** táctico. Comandos `gcloud` reales, flags reales, consola.
> Aquí sí se memoriza sintaxis.

---

## 3. Professional Cloud Architect — 6 secciones, 22 subsecciones

| ID | Sección | Peso | Preguntas de 300 |
|---|---|---|---|
| PCA-1 | Designing and planning a cloud solution architecture | 25 % | 75 |
| PCA-2 | Managing and provisioning a cloud solution infrastructure | 17,5 % | 53 |
| PCA-3 | Designing for security and compliance | 17,5 % | 52 |
| PCA-4 | Analyzing and optimizing technical and business processes | 15 % | 45 |
| PCA-5 | Managing implementation | 12,5 % | 38 |
| PCA-6 | Ensuring solution and operations excellence | 12,5 % | 37 |

**Subsecciones**

- `PCA-1.1` Designing a cloud solution infrastructure that meets business requirements
- `PCA-1.2` Designing a cloud solution infrastructure that meets technical requirements
- `PCA-1.3` Designing network, storage, and compute resources
- `PCA-1.4` Creating a migration plan (documents and architectural diagrams)
- `PCA-1.5` Envisioning future solution improvements
- `PCA-2.1` Configuring network topologies
- `PCA-2.2` Configuring individual storage systems
- `PCA-2.3` Configuring compute systems
- `PCA-2.4` **Leveraging Gemini Enterprise Agent Platform for end-to-end ML workflows**
- `PCA-2.5` **Configuring prebuilt solutions or APIs with Agent Platform**
- `PCA-3.1` Designing for security
- `PCA-3.2` Designing for compliance
- `PCA-4.1` Analyzing and defining technical processes
- `PCA-4.2` Analyzing and defining business processes
- `PCA-5.1` Advising development and operation teams to ensure successful deployment
- `PCA-5.2` Interacting with Google Cloud programmatically
- `PCA-6.1` Understanding operational excellence pillar principles
- `PCA-6.2` Familiarity with Google Cloud Observability solutions
- `PCA-6.3` Deployment and release management
- `PCA-6.4` Assisting with support of deployed solutions
- `PCA-6.5` Evaluating quality control measures
- `PCA-6.6` Ensuring solution reliability in production

> **Hallazgo nuevo y grave:** `PCA-2.4` y `PCA-2.5` son subsecciones sobre
> **Gemini Enterprise Agent Platform**. El banco actual **no tiene ni una sola
> pregunta** sobre ellas. Son dos de las cinco subsecciones de una sección que
> vale 17,5 %.
>
> **Case studies vigentes:** Altostrat Media, Cymbal Retail, EHR Healthcare,
> KnightMotives Automotive. Mountkirk Games, TerramEarth y Helicopter Racing
> League están retirados (la página oficial de Mountkirk devuelve 404), y el
> banco tiene 90 preguntas atadas a ellos.

---

## 4. Cómo se reparte el peso dentro de una sección

Google publica el peso **por sección**, no por subsección. Regla de reparto:

1. El peso de la sección se divide **en partes iguales** entre sus subsecciones.
2. Excepción: si una subsección aparece explícitamente en más objetivos del
   examen o cubre más servicios, puede llevar hasta 1,5× la parte igual, y la
   diferencia se resta proporcionalmente de las demás.
3. Ninguna subsección puede quedar por debajo del **60 %** de su parte igual, y
   **ninguna puede quedar en cero**.

Ejemplo con `ACE-3` (25 %, 6 subsecciones → 4,17 % cada una → 12,5 preguntas):

| Subsección | Parte igual | Asignado | Preguntas |
|---|---|---|---|
| ACE-3.1 Compute Engine | 4,17 % | 5,0 % | 15 |
| ACE-3.2 GKE | 4,17 % | 5,0 % | 15 |
| ACE-3.3 Cloud Run / Functions | 4,17 % | 4,17 % | 12 |
| ACE-3.4 Data solutions | 4,17 % | 4,17 % | 13 |
| ACE-3.5 Networking | 4,17 % | 3,33 % | 10 |
| ACE-3.6 Infrastructure as code | 4,17 % | 3,33 % | 10 |
| | **25 %** | **25 %** | **75** |

Cualquier reparto debe sumar exactamente el peso de la sección y quedar
documentado en `data/taxonomia.js`, no repartido a ojo dentro del banco.

---

## 5. Cambio de esquema obligatorio

Cada ítem incorpora dos campos nuevos. Sin ellos el diagnóstico por subtema no
puede existir.

```jsonc
{
  "id": "ACE-3.6-004",
  "certId": "ace",
  "sectionId": "ACE-3",        // NUEVO — sección oficial
  "subsectionId": "ACE-3.6",   // NUEVO — subsección oficial
  "sectionName": "Deploying and implementing a cloud solution",
  "subsectionName": "Implementing resources through infrastructure as code",
  "conceptos": ["terraform", "state remoto", "google_compute_instance"],  // NUEVO
  // ... el resto del esquema no cambia
}
```

`conceptos` es la clave del diagnóstico fino: permite decir *"fallas en state
remoto de Terraform"*, no solo *"fallas en infraestructura como código"*.

Y se elimina lo que ya sobraba: `options[].isTrap`, `options[].trapType` y
`distractors[<letra correcta>]`. Hoy la respuesta correcta se localiza con un
`grep` en el archivo de datos.

Nuevo fichero `data/taxonomia.js`:

```javascript
window.GCP_TAXONOMIA = {
  verificadoEl: "2026-08-25",
  fuentes: { cdl: "https://...", ace: "https://...", pca: "https://..." },
  cdl: {
    secciones: {
      "CDL-1": { nombre: "...", peso: 18, subsecciones: {
        "CDL-1.1": { nombre: "...", peso: 9, preguntas: 27 },
        "CDL-1.2": { nombre: "...", peso: 9, preguntas: 27 }
      }},
      // ...
    }
  },
  // ace, pca igual
};
```

---

## 6. El sistema de diagnóstico: de "fallas en Seguridad" a "fallas en roles personalizados"

Hoy la plataforma dice *"Seguridad: 61 %"*. Eso no sirve para estudiar: Seguridad
son dos subsecciones y una docena de conceptos. Hay que poder bajar tres niveles.

### 6.1 Los tres niveles

```
Certificación          ACE                          72 %
└─ Sección             ACE-5 Access & security      61 %   ← peso oficial 17,5 %
   └─ Subsección       ACE-5.1 IAM                  48 %   ← el problema está aquí
      └─ Concepto      roles personalizados         25 %   ← y aquí exactamente
                       service account impersonation 33 %
                       IAM Conditions               50 %
                       roles predefinidos           83 %
```

### 6.2 Estado de dominio por subsección

Cinco estados, con umbrales explícitos:

| Estado | Condición |
|---|---|
| Sin ver | 0 intentos |
| Insuficiente | menos de 5 intentos — no hay datos para juzgar |
| Débil | ≥5 intentos y acierto < 60 % |
| En progreso | ≥5 intentos y acierto entre 60 % y 79 % |
| Dominado | ≥8 intentos, acierto ≥ 80 % y **al menos 2 sesiones distintas** |

La última condición evita el falso dominio: acertar 8 seguidas en una tarde no
es dominio, es memoria de corto plazo.

### 6.3 Índice de riesgo ponderado

Lo que decide dónde estudiar no es el porcentaje más bajo, sino el que más caro
sale en el examen:

```
riesgo(subsección) = peso_oficial × (1 − acierto) × factor_confianza
factor_confianza    = min(1, intentos / 8)
```

La plataforma ordena por riesgo descendente y muestra las cinco primeras como
**"Dónde estás perdiendo más puntos"**. Una subsección del 40 % que vale 2 % del
examen importa menos que una del 65 % que vale 9 %, y el sistema debe decirlo.

### 6.4 Drill dirigido

Desde cualquier subsección en rojo, un botón **"Practicar solo esto"** arranca
una sesión con **únicamente** las preguntas de esa subsección, ordenadas por
concepto peor dominado. Si la subsección tiene menos de 10 preguntas sin usar,
el sistema lo dice en vez de repetir las mismas: *"Te quedan 6 preguntas nuevas
de ACE-5.1. Cuando las agotes, la ficha de estudio vuelve a empezar."*

### 6.5 Escalada de dificultad dentro del tema

Cuando alguien falla un concepto, repetir la misma pregunta no enseña. La
secuencia correcta es:

1. **Lección** del concepto (2–4 minutos, `data/lecciones.js`).
2. **Reconocimiento**: 3 preguntas `foundational` del concepto.
3. **Aplicación**: 3 preguntas `intermediate`.
4. **Análisis**: 2 preguntas `advanced` del mismo concepto pero de otra subsección,
   para comprobar que se transfiere.
5. Solo si las 8 salen bien, el concepto pasa a *Dominado* y entra en repetición
   espaciada.

Bajar de nivel también es automático: fallar en el paso 4 devuelve al paso 2, no
al 1 — la lección ya se leyó.

### 6.6 Criterio de "listo para el examen"

La plataforma **no** puede decir "estás listo" con un promedio. El criterio es
conjuntivo, y los cinco tienen que cumplirse:

1. Cobertura: ≥90 % del banco de esa certificación visto al menos una vez.
2. **Ninguna subsección en Débil ni Sin ver.** Ni una.
3. Tres simulacros completos consecutivos por encima del umbral.
4. El más bajo de esos tres simulacros, por encima del umbral.
5. Al menos 14 días entre el primer simulacro aprobado y el último — para
   distinguir aprendizaje de memorización reciente.

**Sobre el umbral:** Google **no publica su nota de corte**. El 70 % es una
convención de la comunidad, no un dato. La plataforma usa **75 %** como margen
de seguridad y lo etiqueta literalmente como *"umbral estimado, Google no publica
el suyo"*. Prometer precisión que no se tiene es la misma clase de error que un
banco de preguntas adivinable.

### 6.7 Qué se muestra en pantalla

Vista **"Mi diagnóstico"**, tres bloques:

1. **Mapa de calor**: una fila por sección, una celda por subsección, coloreada
   por estado. De un vistazo se ve dónde está el hueco. El color nunca es la
   única señal: cada celda lleva también el porcentaje y un icono de estado
   (accesibilidad).
2. **Dónde pierdes más puntos**: las 5 subsecciones de mayor riesgo ponderado,
   cada una con su peso oficial, su acierto, cuántos puntos del examen representa
   y el botón de drill.
3. **Checklist de "listo"**: los 5 criterios con su estado real, y qué falta para
   cada uno. Nada de un porcentaje único que oculte que una subsección está en cero.

---

## 7. Cómo se verifica que esto funciona

Se añade `tests/qa/test_taxonomia.js` con estas puertas:

| Comprobación | Falla si |
|---|---|
| Cada ítem tiene `sectionId` y `subsectionId` | falta alguno |
| Los IDs existen en `data/taxonomia.js` | hay un ID huérfano |
| Cobertura por sección vs peso oficial | desvío > 3 puntos |
| Cobertura por subsección vs reparto declarado | desvío > 2 puntos |
| Subsecciones sin preguntas | hay alguna en cero |
| `conceptos` no vacío | algún ítem sin conceptos |
| CDL sin sintaxis de CLI | alguna pregunta CDL con `gcloud`/`bq`/`gsutil`/`kubectl` |
| `verificadoEl` de la taxonomía | tiene más de 90 días |

Esa última puerta es deliberada: obliga a reabrir las guías oficiales cada
trimestre. Google cambia los temarios sin avisar, y un banco alineado con una
guía de hace un año entrena para un examen que ya no existe.
