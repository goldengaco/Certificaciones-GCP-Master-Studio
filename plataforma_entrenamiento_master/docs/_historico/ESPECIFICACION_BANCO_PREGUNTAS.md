# Especificación de reescritura del banco de preguntas

**Destinatario:** el modelo de IA o la persona que vaya a ejecutar este trabajo.
**Estado del documento:** contrato. No es una guía de estilo ni una lista de sugerencias.
**Fecha de la auditoría que lo origina:** 24 de agosto de 2026.

---

## 0. Lee esto antes que nada

Este banco de preguntas no es un ejercicio de programación. Es el material con el
que una persona real se está preparando para un examen de certificación de Google
Cloud que cuesta entre 99 y 200 USD, que solo se puede repetir tras un periodo de
espera, y cuyo resultado afecta a su trabajo.

Un banco de preguntas malo no es neutro: **es peor que no tener banco**, porque
produce confianza falsa. Un alumno que saca 85 % en un simulacro adivinable cree
que está listo, deja de estudiar, se presenta y suspende.

La auditoría midió que **un candidato que no sabe absolutamente nada de Google
Cloud aprueba 17 de los 18 simulacros del sistema** marcando siempre la opción
más larga. En PCA saca 99,3 %. Ese es el problema que este documento manda
resolver.

Si en algún momento te ves eligiendo entre "terminar rápido" y "que la pregunta
sea de verdad como la del examen", elige siempre lo segundo. Es preferible
entregar 60 preguntas excelentes que 300 mediocres.

---

## 1. Qué está roto, con números

Medido sobre los 900 ítems (`data/cert_cdl.js`, `data/cert_ace.js`, `data/cert_pca.js`).

| # | Defecto | CDL | ACE | PCA |
|---|---------|-----|-----|-----|
| 1 | La respuesta correcta es la opción más larga | 72,0 % | 85,0 % | **99,3 %** |
| 2 | Caracteres de más de la correcta (mediana) | +60 | +60 | **+178** |
| 3 | Puntaje de quien solo marca la más larga | 72,7 % | 86,0 % | **99,3 %** |
| 4 | Bloques de examen aprobables a ciegas | 5 de 6 | 6 de 6 | 6 de 6 |
| 5 | Pares consecutivos que siguen el ciclo A→B→C→D | 97,7 % | 92,3 % | 97,7 % |
| 6 | Preguntas de selección múltiple | 0 | 0 | 0 |
| 7 | Distribución de claves | 75/75/75/75 | 75/75/75/75 | 75/75/75/75 |

Además:

- **CDL sigue un temario retirado.** El manifiesto define 4 dominios (10/30/30/30).
  La guía oficial vigente define **6 áreas al 18/18/18/18/18/10**. Faltan enteras
  *Innovating with Google Cloud Artificial Intelligence* (18 % del examen) y
  *Scaling with Google Cloud operations* (10 %). Solo 10 de 300 preguntas CDL
  mencionan Gemini o IA generativa.
- **PCA usa 3 case studies retirados.** Mountkirk Games (31 preguntas),
  TerramEarth (30) y Helicopter Racing League (29) ya no aparecen en el examen.
  Los vigentes son **Altostrat Media, Cymbal Retail, EHR Healthcare y
  KnightMotives Automotive**. 90 de 300 preguntas hay que reescribirlas.
- **ACE casi no cubre infraestructura como código**: 1 de 300 preguntas menciona
  Terraform, y la guía oficial lo incluye explícitamente en la sección 3.
- **Los distractores no son creíbles.** Ejemplos textuales del banco actual:
  *"Pedir a los administradores por correo electrónico que prometan no borrar
  nada"*, *"Guardar las puntuaciones en un archivo de texto en una memoria
  flash"*, *"Delete BigQuery and revoke all analyst access"*. En el examen real
  las cuatro opciones son defendibles.

Lo que **sí** está bien y no hay que tocar: el contenido técnico de las respuestas
correctas es exacto, las explicaciones enseñan, los enlaces a documentación
resuelven, no hay IDs ni escenarios duplicados, y los pesos de dominio de ACE y
PCA están razonablemente alineados. **Reescribe la forma, conserva el fondo.**

---

## 2. Las diez reglas del contrato

Estas reglas no se negocian. Cada una existe porque su ausencia rompió el banco.

### R1 — Las cuatro opciones miden lo mismo
La diferencia de longitud entre la opción más larga y la más corta de una pregunta
no puede superar el **25 %** de la más larga. Si la correcta necesita explicar un
flag concreto, **las tres incorrectas también nombran su flag concreto**.

> Mal: `A) Usar Cloud SQL.` / `D) Configurar la instancia de Cloud SQL con availability_type = 'REGIONAL' (Alta Disponibilidad), que aprovisiona una VM primaria en la zona A y una VM standby síncrona en la zona B con replicación a nivel de disco persistente y conmutación automática en menos de un minuto.`
>
> Bien: `A) Crear una réplica de lectura en us-central1-b y promoverla manualmente durante una caída.` / `D) Configurar la instancia con availability_type = REGIONAL para tener una standby síncrona en otra zona.`

El detalle técnico va en `explanation`, no en `options[].text`.

### R2 — Todo distractor debe ser una decisión que un ingeniero competente podría tomar
Cada opción incorrecta tiene que:
1. Nombrar un **servicio o configuración real de Google Cloud**.
2. Resolver el problema **parcialmente** o resolverlo en un contexto ligeramente distinto.
3. Fallar por **una razón nombrable y concreta**: costo, latencia, alcance regional,
   límite de cuota, modelo de permisos, RPO/RTO, tipo de carga, o SLA.

Está **prohibido** cualquier distractor que sea una broma, un absurdo, un proceso
manual evidente, o un servicio de otra categoría entera (poner *Cloud Storage
Coldline* como distractor de una pregunta sobre Error Reporting).

El campo `distractors[LETRA]` debe decir **por qué falla en esta situación**, no
qué es el servicio.

### R3 — La letra correcta se sortea, no se rota
La letra se asigna con un hash determinista del `id` de la pregunta, nunca con un
ciclo ni con un contador. La distribución final por certificación debe quedar
entre **20 % y 30 % por letra** — no exactamente 25/25/25/25, porque una
distribución perfecta también es una firma.

Además, `ui_exam.js` y `ui_study.js` deben **barajar las opciones al renderizar**,
con una semilla derivada del `id` de la pregunta más la sesión, para que el orden
sea estable dentro de un examen pero distinto entre exámenes.

### R4 — Entre el 12 % y el 20 % de las preguntas son de selección múltiple
Google describe sus tres exámenes como *"multiple choice and multiple select"*.
Las de selección múltiple llevan:
- `isMultiSelect: true`
- `expectedSelectCount: 2` (o 3)
- `correct: ["A","D"]` con exactamente `expectedSelectCount` letras
- **cinco** opciones, no cuatro, como en el examen real
- el enunciado dice explícitamente *"Elige 2"* / *"Choose 2"*

Toda pregunta cuyo enunciado pida dos o tres cosas **tiene** que ser multi-select.
La lógica de puntaje todo-o-nada ya existe en `ui_exam.js`; no hay que escribirla.

### R5 — Los escenarios se parecen a los del examen real
- **CDL:** 40–80 palabras. Situación de negocio, sin sintaxis de CLI.
- **ACE:** 40–90 palabras. Tarea operativa concreta, con nombres de recursos.
- **PCA:** 70–150 palabras. Contexto de negocio + restricciones técnicas
  cuantificadas (SLA, RPO/RTO, latencia, presupuesto, normativa).

Todo escenario incluye al menos **una restricción que descarta opciones**: costo
mínimo, latencia máxima, cero downtime, cumplimiento normativo, mínimo esfuerzo
operativo. Sin restricción, varias respuestas son válidas y la pregunta no mide.

### R6 — Cada pregunta se ancla a la guía oficial vigente
`domainId` corresponde a una sección real de la guía oficial de Google, y el
reparto de preguntas por dominio respeta los pesos oficiales con un margen de
±3 puntos porcentuales:

```
CDL  D1 18 %  D2 18 %  D3 18 %  D4 18 %  D5 18 %  D6 10 %
ACE  D1 20 %  D2 17,5 %  D3 25 %  D4 20 %  D5 17,5 %
PCA  D1 25 %  D2 17,5 %  D3 17,5 %  D4 15 %  D5 12,5 %  D6 12,5 %
```

**Antes de empezar, vuelve a abrir las guías oficiales y confirma estos números.**
Google las cambia sin aviso, y este documento envejece:

- ACE — https://cloud.google.com/learn/certification/guides/cloud-engineer
- PCA — https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf
- CDL — https://services.google.com/fh/files/misc/cloud_digital_leader_exam_guide_english.pdf

Si los números cambiaron, **actualiza `PESOS_OFICIALES` en
`tests/qa/test_fidelidad_banco.js` y deja constancia en el commit.**

### R7 — Los case studies de PCA son los vigentes
Reescribe las 90 preguntas de Mountkirk Games, TerramEarth y Helicopter Racing
League sobre **Altostrat Media, Cymbal Retail y KnightMotives Automotive**. Las
de EHR Healthcare se conservan. Añade los textos completos de los tres casos
nuevos a `data/case_studies.js` y borra los retirados.

Los escenarios técnicos actuales son reutilizables casi todos: cambia la empresa,
sus restricciones de negocio y las cifras. No inventes datos del caso: sácalos del
texto oficial.

### R8 — El contenido técnico se verifica contra la documentación
Cada `explanation` afirma cosas comprobables, y `officialDocUrl` apunta a la
página que las respalda. Si no encuentras la página, **la afirmación se cambia,
no el enlace**. Nada de URLs inventadas ni de páginas que no dicen lo que la
explicación asegura.

Las opciones correctas del banco actual son técnicamente exactas: úsalas como
base y no las "mejores" sin comprobarlo.

### R9 — Un idioma, elegido a propósito
Hoy CDL está en español y ACE/PCA en inglés. Elige uno para todo el banco:

- **Si vas a rendir en inglés** (recomendado: el examen real está siempre
  disponible en inglés y es el idioma de la documentación), todo en inglés.
- **Si vas a rendir en español**, todo en español, pero conservando en inglés los
  nombres de servicios y los comandos.

No mezclar. Un banco bilingüe entrena mal la lectura bajo presión de tiempo.

### R10 — Nada de generación masiva sin revisión
Se trabaja **en lotes de 25 preguntas**. Cada lote:
1. Se escribe.
2. Pasa `node tests/qa/test_fidelidad_banco.js`.
3. Se revisan a mano **5 preguntas al azar** del lote contra los criterios de la
   sección 5.
4. Se hace commit con el número de lote y el resultado de la revisión.

Si un lote falla la revisión manual, se rehace entero. No se parchea.

---

## 3. Esquema del ítem

```jsonc
{
  "id": "PCA-D1-001",              // <CERT>-<DOMINIO>-<NNN>, único en todo el repo
  "certId": "pca",                 // "cdl" | "ace" | "pca"
  "blockId": "BLOCK-1",            // BLOCK-1..BLOCK-6, 50 ítems por bloque
  "domainId": "PCA-D1",            // debe existir en la guía oficial vigente
  "domainName": "Designing and planning a cloud solution architecture",
  "subtopic": "Multi-region failover para cargas con estado",
  "difficulty": "advanced",        // foundational | intermediate | advanced | expert
  "bloomsLevel": "analyze",        // understand | apply | analyze
  "timeEstimateSeconds": 120,
  "caseStudy": "altostrat_media",  // none | altostrat_media | cymbal_retail |
                                   // ehr_healthcare | knightmotives_automotive
  "caseStudySection": "Business requirements",
  "title": "Frase corta que identifica la pregunta en las listas",
  "scenario": "…",                 // longitud según R5, con restricción explícita
  "keywords": ["…"],               // términos que el buscador debe indexar
  "isMultiSelect": false,
  "expectedSelectCount": 1,        // 2 o 3 si isMultiSelect
  "options": [                     // 4 si única, 5 si multi-select
    { "letter": "A", "text": "…" },
    { "letter": "B", "text": "…" },
    { "letter": "C", "text": "…" },
    { "letter": "D", "text": "…" }
  ],
  "correct": "C",                  // o ["A","D"] si multi-select
  "explanation": "…",              // por qué la correcta es correcta, con el detalle técnico
  "distractors": {                 // por qué falla CADA opción incorrecta, en ESTA situación
    "A": "…", "B": "…", "D": "…"
  },
  "gcloudCommand": "…",            // ACE: obligatorio. Otras: si aporta
  "terraformSnippet": "…",         // PCA: si aporta
  "officialDocUrl": "https://cloud.google.com/…"
}
```

**Cambios respecto al esquema actual:**
- `options[].isTrap` y `options[].trapType` **se eliminan**. No se renderizan en
  ningún sitio, y dejar la respuesta correcta marcada en el archivo de datos es
  una fuga esperando a ocurrir.
- `distractors[letra_correcta]` **se elimina**. Hoy las 900 preguntas tienen ahí
  un texto que empieza por *"Correct."* o *"Opción correcta"*, lo que permite
  localizar la respuesta con un `grep`.

---

## 4. Órdenes de trabajo, por prioridad

Ejecuta en este orden. Cada bloque se termina y se verifica antes de empezar el siguiente.

| # | Trabajo | Alcance | Regla | Criterio de terminado |
|---|---------|---------|-------|------------------------|
| 1 | Instalar las pruebas antes de tocar nada | — | — | `node tests/qa/test_fidelidad_banco.js` corre y falla con 27 fallos |
| 2 | Romper el ciclo de la clave y barajar al renderizar | 900 ítems + `ui_exam.js` + `ui_study.js` | R3 | ciclo ≤40 %, cada letra entre 20 % y 30 % |
| 3 | Normalizar la longitud de las opciones | 900 ítems | R1 | "la más larga es la correcta" ≤35 %, exceso medio ≤25 caracteres |
| 4 | Reescribir los distractores | 900 ítems | R2 | 0 frases de relleno, ≥85 % de distractores nombran un servicio de GCP |
| 5 | Introducir selección múltiple | ~150 ítems nuevos o convertidos | R4 | 12–20 % multi-select, coherentes, 0 enunciados "elige 2" marcados como única |
| 6 | Migrar los case studies de PCA | 90 ítems + `case_studies.js` | R7 | 0 preguntas con casos retirados |
| 7 | Remapear CDL a las 6 áreas vigentes | manifiesto + ~110 ítems | R6 | 6 dominios, desvío ≤3 puntos, ningún área vacía |
| 8 | Cubrir IaC en ACE | 10–15 ítems | R6 | ≥10 preguntas de Terraform/Config Connector en ACE-D3 |
| 9 | Unificar el idioma | 900 ítems | R9 | 900 de 900 en el idioma elegido |
| 10 | Ajustar los pesos de PCA | ~12 ítems reasignados | R6 | desvío ≤3 puntos en los 6 dominios |

---

## 5. Definición de terminado

El trabajo **no está terminado** hasta que las cinco suites pasan:

```bash
python tests/qa/ejecutar_qa.py
```

Salida requerida:

```
  PASA   Fidelidad del banco de preguntas
  PASA   Contraste WCAG AA sobre el CSS
  PASA   Humo funcional
  PASA   Accesibilidad (axe-core)
  PASA   Lighthouse
```

Además, y esto **no lo puede comprobar ninguna prueba automática**, se revisan a
mano 20 preguntas al azar (aproximadamente 7 de cada certificación) contra esta
lista. Cualquier "no" obliga a rehacer el lote del que salió la pregunta:

1. ¿Podrían defenderse **al menos dos** de las cuatro opciones ante un colega,
   antes de leer la explicación?
2. ¿La opción correcta se distingue por lo que **dice**, no por lo que **mide**?
3. ¿El escenario tiene una restricción que descarta opciones de verdad?
4. ¿La explicación enseña algo que no estaba ya en el enunciado?
5. ¿Cada `distractors[X]` explica por qué falla **en esta situación concreta**,
   y no qué es el servicio en general?
6. ¿El `officialDocUrl` abre y dice lo que la explicación afirma?
7. Tapando la respuesta correcta: ¿sigue siendo resoluble solo con saber GCP?
8. ¿Se parece a una pregunta que Google escribiría, o a una pregunta de quiz?

---

## 6. Trampas prohibidas

Un modelo con prisa puede hacer pasar las pruebas sin mejorar nada. Todo lo
siguiente es motivo de rechazo del trabajo completo:

- **Rellenar los distractores con paja** para igualar longitudes. La prueba de
  longitud pasaría y la pregunta seguiría siendo mala. Las opciones se igualan
  **quitando detalle a la correcta**, no añadiendo ruido a las incorrectas.
- **Bajar las barreras de `test_fidelidad_banco.js`** para que pase. Las
  constantes de `BARRERAS` solo se pueden endurecer. Si crees que una barrera
  está mal calibrada, escribe por qué en el commit y espera revisión humana.
- **Borrar o comentar pruebas** que fallan.
- **Convertir preguntas a multi-select artificialmente** partiendo una respuesta
  correcta en dos mitades. Una pregunta multi-select tiene dos respuestas
  *independientemente* correctas.
- **Inventar URLs de documentación** o apuntar a la home de un producto para que
  el enlace resuelva.
- **Reescribir la explicación para que encaje con una respuesta equivocada.**
- **Generar las 900 de una vez** sin la revisión manual por lotes de R10.
- **Traducir mecánicamente** el banco de un idioma a otro sin revisar que la
  terminología técnica quede en inglés.

---

## 7. Cómo verificar (comandos exactos)

Requisitos, una sola vez:

```bash
npm install --no-save playwright-core axe-core lighthouse chrome-launcher
npx playwright install chromium
```

Suite completa (levanta y apaga el servidor por su cuenta):

```bash
python tests/qa/ejecutar_qa.py
```

Suites por separado:

```bash
node   tests/qa/test_fidelidad_banco.js          # banco: la que más importa
python tests/qa/test_contraste.py                # contraste WCAG sobre el CSS
node   tests/qa/test_humo.mjs        http://127.0.0.1:8989
node   tests/qa/test_a11y.mjs        http://127.0.0.1:8989
node   tests/qa/test_lighthouse.mjs  http://127.0.0.1:8989/index.html 3
```

**Sirve siempre con `python servidor.py`.** Con `python -m http.server` no hay
caché ni compresión y Lighthouse penaliza unos 3.000 KiB que no son culpa de la
aplicación. Cualquier medición hecha con el servidor equivocado no vale.

Lighthouse varía varios puntos entre pasadas en la misma máquina. Por eso
`test_lighthouse.mjs` evalúa la **mediana de tres**. Una sola pasada no distingue
una mejora real del ruido: si alguien te enseña un número suelto, pide tres.

---

## 8. Trabajo pendiente de rendimiento (opcional, después del banco)

La plataforma está en 99–100 de Performance. Lo único que queda entre ella y un
100 estable es el LCP. Ya se implementó la carga perezosa de bancos
(`js/data_loader.js`): solo se carga la certificación activa antes de pintar, y
las otras dos entran cuando el navegador queda ocioso. Con eso el peso inicial
bajó de 3.104 KiB a 679 KiB.

Lo que queda, por orden de rentabilidad:

1. **Minificar CSS y JS en un `dist/`** (~112 KiB de JS y 3 KiB de CSS según
   Lighthouse). Un script de build, sin tocar las fuentes.
2. **Purgar el CSS no usado**: 74 % de `styles.css` no se aplica en la carga
   inicial. Extraer el CSS crítico del encabezado y el dashboard a un `<style>`
   en línea y cargar el resto de forma diferida.
3. Volver a medir con `test_lighthouse.mjs` y **subir la puerta de performance de
   95 a 100** en el propio archivo de prueba, para que no se pueda retroceder.

Criterio de aceptación: mediana de tres pasadas con performance 100 y LCP por
debajo de 900 ms, sin que caiga ninguna otra suite.

---

## 9. Qué NO tocar

- `js/engine.js` — la rotación de bloques está verificada: 6 bloques disjuntos de
  50 preguntas con los dominios proporcionados en cada bloque. Funciona.
- `servidor.py` y `iniciar_plataforma.bat` — resueltos y verificados.
- Los tokens de color de `css/styles.css` — todos los pares color/fondo cumplen
  WCAG AA en los dos temas. Si añades un color, **añádelo como token** y vuelve a
  correr `test_contraste.py`.
- Las respuestas correctas técnicamente exactas del banco actual. Reescribe su
  **redacción** para cumplir R1, no su **contenido**.

---

## 10. Una nota sobre la probabilidad de aprobar

`PassingProbabilityEngine` calcula una "probabilidad de aprobar" con una función
logística calibrada a ojo. No está validada contra ningún resultado real de examen
de Google, y su entrada principal es el puntaje de los simulacros — que hoy está
inflado por los defectos de este documento.

Cuando el banco esté arreglado, ese número seguirá siendo **una estimación
interna, no una predicción**. La interfaz debe presentarlo como tal. Y el umbral
de aprobado del 70 % que hay cableado en `ui_exam.js` es una convención de la
comunidad: **Google no publica su nota de corte**. Etiquétalo como estimado y
considera subirlo al 75–80 % como margen de seguridad.

Prometer una precisión que no se tiene es la misma clase de error que un banco de
preguntas adivinable: da confianza que no está respaldada por nada.
