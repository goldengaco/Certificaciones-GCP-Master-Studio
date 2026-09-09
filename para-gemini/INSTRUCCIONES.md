# Instrucciones de ejecución — GCP Cert Studio

**Proyecto:** `C:\DevWork\Certificaciones-GCP-Master-Studio`
**Destinatario:** Gemini (o cualquier modelo/equipo que ejecute este plan)
**Naturaleza del documento:** contrato de trabajo. No es una guía de estilo ni una lista de ideas.
**Origen:** auditoría técnica del 24 de agosto de 2026.
**Documento hermano, de lectura obligatoria antes de la fase 1:**
`para-gemini/TAXONOMIA_Y_DIAGNOSTICO.md` — la taxonomía oficial verificada
(6+5+6 secciones, 14+19+22 subsecciones con sus pesos) y la especificación del
diagnóstico por subtema.

---

## 0. La única frase que importa

El objetivo del producto no es tener 900 preguntas ni sacar 100 en Lighthouse.
El objetivo es que **una persona que hoy no sabe nada de Google Cloud pueda
usar esta plataforma, aprender, y presentarse al examen real con una
probabilidad honesta de aprobarlo.**

Todo lo que no sirva a esa frase es decoración. Todo lo que la contradiga —
sobre todo un simulador que se deja adivinar — es peor que no existir, porque
produce confianza falsa, y la confianza falsa es lo que hace que alguien pague
99–200 USD y suspenda.

Hay una persona real detrás de este repositorio preparándose para certificarse.
Si en cualquier momento tienes que elegir entre "terminar rápido" y "que esto
de verdad sirva", elige lo segundo siempre.

---

## 1. Estado real hoy, con números medidos

No empieces asumiendo nada. Esto está medido sobre el repositorio actual.

### Lo que ya está resuelto y NO debes rehacer

| Área | Estado |
|---|---|
| Contraste WCAG AA | Todos los pares color/fondo pasan, en tema claro y oscuro |
| axe-core | 0 violaciones en 2 temas × 7 vistas + modales + examen en curso |
| Lighthouse | Performance 99, Accesibilidad 100, Best Practices 100, SEO 100 |
| Peso inicial | 680 KiB (era 3.104 KiB); LCP 0,74 s (era 3,1 s) |
| Servidor local | `servidor.py` con gzip y cabeceras de caché |
| Carga de datos | `js/data_loader.js` carga solo el banco activo |
| Rotación de bloques | 6 bloques disjuntos de 50, verificado |
| Suite de pruebas | 5 suites en `tests/qa/`, 4 pasan |

### Lo que está roto

| # | Defecto | CDL | ACE | PCA |
|---|---|---|---|---|
| 1 | La correcta es la opción más larga | 72,0 % | 85,0 % | **99,3 %** |
| 2 | Puntaje de quien solo marca la más larga | 72,7 % | 86,0 % | **99,3 %** |
| 3 | Bloques aprobables sin saber nada | 5 de 6 | 6 de 6 | 6 de 6 |
| 4 | Pares que siguen el ciclo A→B→C→D | 97,7 % | 92,3 % | 97,7 % |
| 5 | Preguntas de selección múltiple | 0 | 0 | 0 |
| 6 | Distractores creíbles | no | no | no |

Además: CDL sigue un temario retirado (le faltan 2 de las 6 áreas oficiales,
incluida IA al 18 %), PCA usa 3 case studies retirados (90 preguntas), ACE tiene
1 sola pregunta de infraestructura como código, y **no existe ninguna ruta de
aprendizaje**: alguien nuevo abre la plataforma y lo primero que ve es un
simulador de 50 preguntas cronometradas que va a suspender.

`python tests/qa/ejecutar_qa.py` da hoy: **1 de 5 suites falla, con 27 fallos.**

---

## 2. Cómo detectar lo que una revisión pregunta por pregunta nunca ve

Esta sección existe por un caso real, y es la parte más importante del documento.
Léela dos veces antes de tocar nada.

### 2.1 El caso: una auditoría que elogió el defecto

Una auditoría anterior revisó este mismo banco reactivo por reactivo y concluyó
que **sí prepara para los exámenes**, que el simulador es **"fiel"**, y listó como
**fortaleza** el *"balance A/B/C/D perfecto"*.

Las tres conclusiones son falsas, y falsas por el mismo motivo.

**El "balance perfecto" es la firma de un generador, no una virtud.** La clave
está en 75/75/75/75 exacto, y el **97,7 % de los pares consecutivos** siguen el
ciclo A→B→C→D. Un banco escrito por personas nunca sale así de redondo. Una
distribución perfecta no demuestra cuidado: demuestra que un bucle asignó la
letra. Elogiaron la huella del defecto.

**Y no vieron el agujero que hace el producto inservible.** La respuesta correcta
es la opción más larga en el **99,3 % del banco de PCA**, el 85,0 % de ACE y el
72,0 % de CDL. Consecuencia medida: alguien que **no sabe absolutamente nada de
Google Cloud** aprueba **17 de los 18 simulacros** marcando siempre la opción más
larga. En PCA saca 99,3 %. Tres bloques le dan 50 de 50.

Se les pasó entero. Y no por descuido: **por método**. Ninguna revisión que mire
las preguntas de una en una puede encontrarlo, porque en cada pregunta aislada la
opción larga *parece* razonable — es la que trae el detalle técnico. El defecto
solo existe como propiedad de las 900 juntas.

### 2.2 Las tres leyes que se derivan

**Ley 1 — Un banco se audita como población, no como lista.**
Revisar 900 preguntas de una en una encuentra errores factuales y nada más. Los
defectos que invalidan un simulador son estadísticos: sesgo de longitud, ciclo de
clave, vocabulario que se filtra. Se detectan con un script sobre las 900, jamás
leyendo.

**Ley 2 — Toda estadística perfecta es sospechosa.**
75/75/75/75 exacto. 300/300 con comando `gcloud`. 300/300 con enlace a
documentación. 900/900 con exactamente 3 distractores marcados. Ninguna de esas
cifras la produce un equipo humano; las produce una plantilla. Cuando veas un
número redondo, la pregunta correcta no es *"¿está bien?"* sino
**"¿qué regla mecánica lo generó, y qué otra cosa generó esa misma regla?"**

**Ley 3 — Si una heurística ciega aprueba, el banco no mide conocimiento.**
Es el criterio de aceptación definitivo, y está por encima de cualquier otro.
Una estrategia que no usa ni una pizca de saber sobre Google Cloud no puede
superar el 45 %. Si lo supera, da igual lo bonitas que sean las preguntas: el
simulador no está midiendo lo que dice medir.

### 2.3 El banco de heurísticas ciegas

Toda estrategia de esta lista se ejecuta contra el banco completo y contra cada
uno de los 6 bloques de examen. **Ninguna puede superar el 45 %.** El azar da 25 %.

| # | Heurística | Estado hoy |
|---|---|---|
| H1 | Marcar la opción más larga | **72,7 / 86,0 / 99,3 %** — rota |
| H2 | Marcar la más corta | 8,0 / 3,0 / 0,0 % |
| H3 | Marcar siempre la misma letra | 25 % |
| H4 | Seguir el ciclo A→B→C→D desde la anterior | **~97 %** — rota |
| H5 | La opción que nombra más servicios de GCP | sin medir |
| H6 | La única opción que contiene una cifra, un porcentaje o una unidad | sin medir |
| H7 | La opción con más densidad técnica (guiones, guiones bajos, `flags`) | sin medir |
| H8 | La opción con más palabras en común con el escenario | sin medir |
| H9 | La opción que **no** contiene un absoluto ("siempre", "nunca", "todo", "elimina") | sin medir |
| H10 | La opción que empieza por un verbo de configurar y no de borrar | sin medir |

**P30 tiene que implementar de H5 a H10 y medirlas.** Que hoy estén "sin medir"
no significa que estén bien: significa que nadie ha mirado.

### 2.4 La prueba del escenario tapado

La más brutal de todas, y la que mejor resume si una pregunta está bien escrita.

Se genera una versión del banco **sin `scenario` y sin `title`**: solo las cuatro
opciones. Un evaluador — humano o modelo — intenta responder.

- Si el acierto supera el **35 %**, las opciones se delatan solas.
- Si en una pregunta concreta se acierta sin leer el enunciado, esa pregunta está
  rota aunque su contenido técnico sea impecable.

Un ítem bien construido es **irresoluble** sin su escenario, porque la restricción
que descarta las otras tres opciones vive en el escenario, no en las opciones.

### 2.5 Prueba de uniformidad y de secuencia

- **Uniformidad:** chi-cuadrado sobre la distribución de claves. Se rechaza tanto
  el sesgo (una letra por encima del 35 %) **como la perfección** (p > 0,99 es tan
  delator como p < 0,01). Objetivo: cada letra entre 20 % y 30 %, sin cuadrar.
- **Secuencia:** autocorrelación de la serie de claves en los desfases 1 a 6.
  Ningún desfase puede superar 0,15. Hoy el desfase 4 está en 0,92.

### 2.6 Qué NO es una auditoría válida

- Decir "tests 100% verdes" citando una suite que nunca midió fidelidad.
- Concluir "los dominios están 100 % alineados con los blueprints" sin abrir la
  guía oficial vigente. En CDL el banco tiene 4 dominios y Google tiene 6.
- Llamar "case studies reales" a tres casos que Google ya retiró.
- Reportar un conteo sin el script que lo produjo. En la auditoría anterior:
  "42 `caseStudySection` rotos" cuando son 123; "1 duplicado" cuando son 0;
  "21 % de CDL con comandos CLI" cuando es **1 pregunta de 300, un 0,3 %**;
  "100 % de los casos de estudio en D1 (72/72)" cuando hay 123 repartidos en los
  seis dominios.
- Marcar como error factual algo correcto. `nam3` **sí existe**: es una
  configuración multirregión documentada de Cloud Spanner (us-east4 y us-east1 de
  lectura-escritura, us-central1 testigo). Corregir una respuesta correcta es peor
  que dejar el error, porque introduce uno nuevo con sello de auditoría.

**Regla:** todo hallazgo llega con (a) el script que lo mide, (b) su salida
literal y (c) la URL oficial que lo respalda si es factual. Sin las tres cosas
no es un hallazgo, es una impresión.

---

## 3. Cómo corregir el sesgo de longitud sin hacer trampa

El defecto principal tiene una corrección obvia y **equivocada**, y una correcta.

### 3.1 La corrección equivocada

Añadir palabras a las tres opciones incorrectas hasta igualar longitudes.

Esto hace que **la métrica de longitud pase** y que **el banco siga igual de
roto**: las opciones incorrectas siguen sin ser plausibles, solo que ahora son
largas. Está expresamente prohibido, y hay una forma de detectarlo (§3.4).

### 3.2 La corrección correcta

**Se quita detalle a la opción correcta y se traslada a `explanation`.** Al mismo
tiempo, se sube el nivel de las incorrectas hasta que sean decisiones defendibles.

Ejemplo real del banco, `PCA-D5-024`:

> **Antes**
> - A) Provision a Zonal instance with daily backups. *(48 car.)*
> - B) Create an asynchronous read replica in us-central1-b and manually promote it during outages. *(89 car.)*
> - C) Configure the Cloud SQL instance with availability_type = 'REGIONAL' (High Availability), which provisions a primary VM in zone A and a synchronous standby VM in zone B with persistent disk network-level replication and automated sub-minute failover. *(258 car.)* ← correcta
> - D) Run two separate database servers with custom bash scripts. *(52 car.)*
>
> Longitud de la correcta: 2,7× la media de las otras. Se acierta sin leer.

> **Después**
> - A) Habilitar copias de seguridad automáticas diarias con recuperación a un punto en el tiempo. *(92 car.)*
> - B) Crear una réplica de lectura asíncrona en us-central1-b y promoverla manualmente ante una caída. *(101 car.)*
> - C) Configurar la instancia con `availability_type = REGIONAL` para tener una standby síncrona en otra zona. *(103 car.)* ← correcta
> - D) Desplegar dos instancias regionales tras un balanceador interno con comprobación de estado. *(97 car.)*
>
> Rango 92–103 caracteres. Las cuatro son configuraciones reales de Cloud SQL.
> A falla por RPO: las copias diarias no dan RPO = 0. B falla por el "manualmente":
> el requisito pide conmutación automática en 60 segundos. D falla porque Cloud SQL
> no se balancea así y no comparte IP. **Hay que saber Cloud SQL para acertar.**
> El detalle de la replicación de disco y el sub-minuto se movió a `explanation`.

### 3.3 El procedimiento, paso a paso

Por cada ítem:

1. **Medir**: longitud de las 4 opciones. Si el rango supera el 25 % de la mayor,
   está fuera de norma.
2. **Podar la correcta**: quitar todo lo que sea explicación, no decisión. Los
   paréntesis aclaratorios, las cifras de rendimiento y el "porque" se van a
   `explanation`. La opción se queda con **la acción y su parámetro clave**.
3. **Elevar las incorrectas**: cada una pasa a ser un servicio o configuración
   real de GCP que **casi** resuelve el problema.
4. **Nombrar el fallo**: escribir en `distractors[X]` por qué falla *en esta
   situación*, citando la restricción del escenario que la descarta.
5. **Comprobar la restricción**: si el escenario no tiene una restricción que
   descarte las tres, el escenario también hay que reescribirlo. Sin restricción,
   varias opciones son válidas y la pregunta no mide.
6. **Tapar y releer**: ocultar el escenario. Si todavía se acierta, volver al paso 3.

### 3.4 El detector de trampa

Al cerrar cada lote se comparan dos números:

| | Antes del lote | Después del lote |
|---|---|---|
| «la correcta es la más larga» | X % | debe bajar |
| **puntaje de la heurística H1** | Y % | **debe bajar en proporción parecida** |

Si la primera métrica baja mucho y **la segunda casi no se mueve**, significa que
se igualaron las longitudes sin arreglar las opciones: se rellenó con paja. El
lote se rechaza entero.

La métrica de longitud se puede falsear. **El puntaje de la heurística ciega, no.**
Por eso la puerta de la fase 1 es H1–H10 por debajo del 45 %, y no el sesgo de
longitud.

### 3.5 Cómo se rompe el ciclo de la clave

No se baraja a mano ni se usa un contador. La letra correcta se deriva del `id`:

```javascript
// Determinista: el mismo id da siempre la misma letra, así que el banco es
// reproducible. Pero no hay patrón entre ids consecutivos.
function letraCorrecta(id, numOpciones) {
  let h = 2166136261;                      // FNV-1a de 32 bits
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % numOpciones;          // índice, no letra fija
}
```

Después se comprueba la distribución resultante: **cada letra entre 20 % y 30 %**.
Si sale 25/25/25/25 exacto, se cambia la semilla. La perfección es la huella.

Y, con independencia de eso, **las opciones se barajan al renderizar** en examen,
estudio y ráfaga, con una semilla derivada de `id` + sesión: estable dentro de un
examen, distinta entre exámenes. Hoy no se barajan en ningún modo.

---

## 4. Reglas de la casa (aplican a todos los puestos)

1. **Se trabaja por fases.** Ninguna fase empieza sin que la anterior haya
   pasado su puerta. Las puertas son automáticas, no opinables.
2. **Ningún puesto puede modificar `tests/qa/`** salvo el QA-01, y solo para
   **endurecer** barreras o añadir pruebas. Bajar un umbral para que pase una
   entrega es motivo de rechazo del trabajo completo.
3. **Lotes de 25 como máximo.** Nada de generar 900 preguntas de una vez.
   Cada lote se escribe, pasa la prueba, se revisan 5 ítems a mano y se commitea.
4. **Cada entrega incluye la salida del comando de verificación.** Un "ya está"
   sin salida de prueba no es una entrega.
5. **Se mide antes y después.** Todo cambio actualiza `progreso.html` con el
   número real, no con una impresión.
6. **Prohibido inventar.** Si una afirmación técnica no se puede respaldar con
   una URL de documentación oficial que la diga, se cambia la afirmación, no el
   enlace.
7. **Idioma:** el código y los comentarios en español; los nombres de servicios,
   roles IAM y comandos, en inglés (`roles/iam.securityReviewer`, no "rol de
   revisor de IAM").

---

## 5. Los 32 puestos

Treinta puestos de la planificación original más dos que exige la taxonomía
(P31 y P32). Cada uno tiene mandato, entregable, criterio de aceptación y
prohibiciones.
Un puesto no está terminado hasta que su criterio se cumple **y está medido**.

### FASE 0 — Diagnóstico y línea base

> **Puerta de salida:** existe `para-gemini/linea-base.json` con las 20 métricas
> medidas, y `progreso.html` muestra la columna "ANTES" completa.

**P01 · Auditor técnico de producto**
Mandato: correr las 5 suites y documentar cada fallo con su causa raíz en el
código, no con su síntoma.
Entregable: `para-gemini/hallazgos.md`, un hallazgo por sección con archivo y línea.
Aceptación: cada uno de los 27 fallos del banco tiene causa raíz identificada.
Prohibido: describir síntomas ("el buscador no anda") sin la línea culpable.

**P02 · Analista de línea base**
Mandato: capturar el estado numérico actual antes de tocar nada.
Entregable: `para-gemini/linea-base.json` con las métricas de la sección 7.
Aceptación: toda métrica tiene el comando exacto que la produce.
Prohibido: estimar. Si no se puede medir, no entra.

**P03 · Investigador de guías oficiales**
Mandato: abrir las tres guías de examen de Google **hoy** y transcribir
secciones, pesos, formato, duración y case studies vigentes.
Entregable: `para-gemini/guias-oficiales.md` con fecha de consulta y URL.
Aceptación: `PESOS_OFICIALES` y `CS_VIGENTES` de `test_fidelidad_banco.js`
coinciden con lo transcrito, o se actualizan y se justifica en el commit.
Prohibido: copiar los pesos de este documento sin verificarlos. Google los cambia.

**P04 · Arquitecto de información**
Mandato: mapear las 7 vistas, los 4 menús y los 3 modos, y decidir qué se
queda, qué se fusiona y qué desaparece.
Entregable: `para-gemini/mapa-navegacion.md` con el antes y el después.
Aceptación: el después tiene como máximo 4 destinos de primer nivel y justifica
cada uno con la tarea del usuario que resuelve.
Prohibido: añadir menús. Solo quitar o fusionar.

**P31 · Taxonomista oficial**
Mandato: construir `data/taxonomia.js` con las 6+5+6 secciones y las 14+19+22
subsecciones de las guías oficiales, con sus pesos y el reparto por subsección.
Entregable: `data/taxonomia.js` + `para-gemini/TAXONOMIA_Y_DIAGNOSTICO.md` actualizado.
Aceptación: la suma de pesos de cada certificación da 100; ninguna subsección en
cero; `verificadoEl` con fecha de menos de 7 días.
Prohibido: copiar pesos de blogs o vídeos. Solo el PDF oficial. Hoy conviven tres
juegos de pesos distintos para PCA y dos de ellos están mal.

**P05 · Responsable de riesgos y alcance**
Mandato: listar lo que puede romperse y definir el plan de reversión.
Entregable: `para-gemini/riesgos.md` con, por cada fase, qué se rompe y cómo se vuelve atrás.
Aceptación: cada fase tiene un commit de referencia al que revertir.
Prohibido: empezar la fase 1 sin esto.

---

### FASE 1 — Banco de preguntas (la fase crítica)

> **Puerta de salida:** `node tests/qa/test_fidelidad_banco.js` da **0 fallos**,
> y la revisión manual de 20 ítems al azar pasa los 8 criterios de la sección 8.

**P06 · Psicometrista / diseñador de ítems**
Mandato: escribir la guía de redacción de ítems que usarán P07–P09.
Entregable: `para-gemini/guia-de-items.md` con 6 ejemplos completos (2 por
certificación), cada uno con su versión mala y su versión buena lado a lado.
Aceptación: en los 6 ejemplos, las 4 opciones quedan dentro de ±25 % de longitud
y al menos 2 son defendibles antes de leer la explicación.
Prohibido: reglas abstractas sin ejemplo.

**P07 · Redactor de ítems CDL** · **P08 · Redactor ACE** · **P09 · Redactor PCA**
Mandato: reescribir sus 300 ítems según la guía de P06, en lotes de 25.
Entregable: `data/cert_*.js` actualizado, un commit por lote.
Aceptación por lote: la prueba del banco no empeora ninguna métrica, y 5 ítems
del lote revisados a mano pasan los 8 criterios.
Prohibido:
- Igualar longitudes **añadiendo relleno a las opciones incorrectas**. Se igualan
  **quitando detalle a la correcta**; el detalle va a `explanation`.
- Partir una respuesta correcta en dos mitades para fabricar un multi-select.
- Tocar el contenido técnico de una respuesta correcta que ya es exacta: se
  reescribe su **redacción**, no su **fondo**.

**P10 · Ingeniero verificador de GCP**
Mandato: comprobar cada respuesta correcta y cada `officialDocUrl` contra la
documentación real.
Entregable: `para-gemini/verificacion-tecnica.csv` con id, veredicto y URL comprobada.
Aceptación: 900 de 900 verificados; 0 URLs que no digan lo que afirma la explicación.
Prohibido: dar por bueno un enlace porque el dominio es `cloud.google.com`.

**P11 · Revisor de distractores**
Mandato: garantizar que cada opción incorrecta sea una decisión que un ingeniero
competente podría tomar, y que falle por una razón nombrable.
Entregable: cada `distractors[X]` reescrito con la razón concreta en esta situación.
Aceptación: 0 frases de relleno; ≥85 % de distractores nombran un servicio real de GCP.
Prohibido: distractores absurdos, manuales evidentes, o servicios de otra categoría.

**P12 · Diseñador de selección múltiple**
Mandato: llevar el banco al 12–20 % de preguntas "elige 2", con 5 opciones.
Entregable: ~150 ítems convertidos o nuevos.
Aceptación: `correct.length === expectedSelectCount`; 0 enunciados que pidan dos
cosas marcados como respuesta única; el enunciado dice "Elige 2" explícitamente.
Prohibido: multi-select artificial (dos mitades de una misma respuesta).

**P13 · Migrador de case studies**
Mandato: pasar las 90 preguntas de Mountkirk, TerramEarth y Helicopter Racing
League a Altostrat Media, Cymbal Retail y KnightMotives Automotive.
Entregable: `data/case_studies.js` con los textos oficiales de los tres nuevos.
Aceptación: 0 preguntas con casos retirados; los datos del caso salen del texto oficial.
Prohibido: inventar cifras o restricciones del caso.

**P14 · Certificador de currículo**
Mandato: verificar que el banco cubre la guía oficial con los pesos correctos.
Entregable: `para-gemini/cobertura.md`, tabla de área oficial × preguntas × desvío.
Aceptación: desvío ≤3 puntos en todas las áreas; ninguna área con 0 preguntas.
Prohibido: comparar contra `cert_manifest.js`. La fuente de verdad es Google.

**P15 · Editor de estilo e idioma**
Mandato: unificar el banco en un solo idioma (hoy CDL está en español y ACE/PCA
en inglés), conservando en inglés servicios y comandos.
Entregable: banco homogéneo.
Aceptación: 900 de 900 en el idioma elegido; 0 nombres de servicio traducidos.
Prohibido: traducción mecánica sin revisar terminología.

**P16 · Aleatorizador de claves**
Mandato: reasignar la letra correcta con un hash del `id`, y barajar las opciones
al renderizar en examen, estudio y ráfaga.
Entregable: script de un solo uso + cambios en `ui_exam.js` y `ui_study.js`.
Aceptación: ciclo ≤40 %, periodicidad ≤40 %, cada letra entre 20 % y 30 %.
Prohibido: un contador o una rotación. Distribución perfecta 25/25/25/25 también
es una firma: no la busques.

**P17 · Limpiador del esquema**
Mandato: eliminar `options[].isTrap`, `options[].trapType` y
`distractors[letra_correcta]`.
Aceptación: `grep -c "isTrap" data/*.js` da 0; ningún `distractors` empieza por
"Correct" u "Opción correcta".
Razón: hoy la respuesta correcta se localiza con un `grep` en el archivo de datos.

---

### FASE 2 — Pedagogía: que alguien que no sabe nada aprenda

> **Puerta de salida:** un usuario nuevo, sin conocimientos previos, completa la
> ruta de CDL y su porcentaje en simulacro sube de forma medible entre el primer
> intento y el último.

**P18 · Diseñador instruccional**
Mandato: definir la ruta que hoy no existe. Alguien nuevo abre la app y no sabe
qué hacer; lo primero que ve es un examen que va a suspender.
Entregable: `para-gemini/ruta-aprendizaje.md` con, por certificación: orden de
temas, lectura previa, cuántas preguntas de estudio antes del primer simulacro,
y el criterio para avanzar.
Aceptación: la ruta se puede seguir sin conocer nada de GCP y sin salir de la app.
Prohibido: "estudia y luego haz el simulacro". Eso no es una ruta.

**P19 · Autor de material didáctico**
Mandato: escribir la lección breve que precede a cada tema (qué es el servicio,
para qué sirve, cuándo NO usarlo, cómo lo pregunta el examen).
Entregable: `data/lecciones.js`, una por subtema de la guía oficial.
Aceptación: cada lección se lee en menos de 4 minutos y termina con 3 preguntas.
Prohibido: copiar documentación. Se explica, no se transcribe.

**P20 · Especialista en repetición espaciada**
Mandato: revisar que el motor Leitner sirva para aprender y no solo para repetir.
Entregable: ajustes en `js/engine.js` + justificación.
Aceptación: un ítem fallado reaparece antes que uno acertado, y la mezcla de
temas no deja ningún dominio sin tocar durante más de 3 sesiones.
Prohibido: tocar la rotación de bloques, que ya está verificada.

**P32 · Ingeniero de diagnóstico por subtema**
Mandato: implementar el desglose de tres niveles — certificación → sección →
subsección → concepto — con estado de dominio, índice de riesgo ponderado, mapa
de calor y drill dirigido. La especificación completa está en la sección 6 de
`TAXONOMIA_Y_DIAGNOSTICO.md`.
Entregable: vista "Mi diagnóstico" + `tests/qa/test_taxonomia.js`.
Aceptación: desde una subsección en rojo se llega en **un clic** a una sesión con
solo las preguntas de esa subsección; el índice de riesgo pondera por el peso
oficial, no por el porcentaje crudo.
Prohibido: mostrar un único porcentaje global que oculte una subsección en cero.

**P21 · Evaluador de dominio**
Mandato: definir cuándo alguien "ha terminado el entrenamiento" y está listo
para pagar el examen real.
Entregable: criterio explícito, implementado y visible en la interfaz.
Aceptación: el criterio exige, como mínimo, cobertura del banco completo,
3 simulacros consecutivos por encima del umbral, y ningún dominio por debajo.
Prohibido: presentar la "probabilidad de aprobar" como una predicción. No está
validada contra ningún resultado real de Google, y su entrada es el puntaje del
simulador. Es una estimación interna y la interfaz debe decirlo.

---

### FASE 3 — Frontend

> **Puerta de salida:** `test_a11y.mjs` y `test_contraste.py` pasan, ningún
> elemento se superpone en 5 anchos de pantalla, y `test_lighthouse.mjs` no baja.

**P22 · Diseñador de sistema visual**
Mandato: consolidar los tokens. Hoy hay colores cableados en reglas sueltas que
solo funcionan en un tema.
Entregable: sección de tokens documentada; 0 literales de color fuera de `:root`.
Aceptación: `grep -c "#[0-9a-fA-F]\{6\}" css/styles.css` fuera de los bloques de
tema da 0.
Prohibido: añadir un color sin token y sin volver a correr `test_contraste.py`.

**P23 · Diseñador UX de flujos**
Mandato: rediseñar la navegación según el mapa de P04.
Aceptación: máximo 4 destinos de primer nivel; la acción principal de cada
pantalla es identificable en menos de 3 segundos.

**P24 · Desarrollador de componentes**
Mandato: eliminar la deuda de clases fantasma. Se detectaron **132 clases usadas
en el HTML/JS sin ninguna regla en el CSS**. Una de ellas, `.form-input`, dejaba
el buscador con texto blanco sobre fondo blanco.
Entregable: inventario de las 132, cada una con regla, o eliminada del marcado.
Aceptación: 0 clases usadas sin definir.
Prohibido: definir una clase vacía para que el contador baje.

**P25 · Auditor de superposiciones**
Mandato: encontrar todo elemento que se encime, se desborde o se corte.
Ejemplos ya detectados y corregidos, que sirven de patrón: `.drill-hotkey-badge`
era una caja fija de 32×32 con el texto "1 / A" dentro y se partía en dos líneas;
la cabecera dejaba el selector ES/EN huérfano en una segunda fila.
Entregable: script que, en 5 anchos (360, 720, 1024, 1440, 1920), recorra todas
las vistas y reporte `scrollWidth > clientWidth`, solapes de rectángulos y texto
cortado.
Aceptación: 0 hallazgos en los 5 anchos y las 7 vistas.
Prohibido: comprobar solo a 1440.

**P26 · Especialista en accesibilidad**
Mandato: mantener el 100 y ampliarlo a navegación por teclado completa.
Aceptación: `test_a11y.mjs` en 0; toda acción alcanzable con teclado; foco visible
siempre; el examen es usable con lector de pantalla.

**P27 · Ingeniero de rendimiento**
Mandato: cerrar el último punto de Lighthouse.
Entregable: build que minifique CSS y JS y extraiga el CSS crítico (hoy el 74 %
de `styles.css` no se usa en la carga inicial).
Aceptación: mediana de 3 pasadas con performance 100 y LCP <900 ms; después,
subir la puerta de `test_lighthouse.mjs` de 95 a 100.
Prohibido: tocar las fuentes; el build genera `dist/`.

**P28 · Redactor de interfaz**
Mandato: que cada texto de la interfaz diga qué pasa, no cómo está construido.
Aceptación: 0 tecnicismos internos visibles ("epoch", "Leitner", "EWMA") sin
traducción a lenguaje de usuario.

---

### FASE 4 — Datos y backend

> **Puerta de salida:** `test_humo.mjs` pasa y el estado sobrevive a export,
> import y recarga sin pérdida.

**P29 · Ingeniero de datos y persistencia**
Mandato: validar el esquema del banco en tiempo de build, y blindar el estado
(export/import, versionado, migración) para que un usuario no pierda su progreso.
Aceptación: un banco con un ítem malformado falla el build con el `id` señalado;
exportar e importar deja el estado idéntico; hay migración desde el esquema anterior.
Prohibido: romper el estado ya guardado del usuario. Si el esquema cambia, hay migración.

---

### FASE 5 — Calidad y cierre

> **Puerta de salida:** `python tests/qa/ejecutar_qa.py` da **5 de 5**.

**P30 · Revisor adversario y responsable de cierre**
Mandato: intentar aprobar los simulacros **sin saber GCP**. Buscar cualquier
patrón explotable: longitud, posición, vocabulario, formato, puntuación, qué
opción menciona más servicios, cuál es la única con una cifra.
Entregable: `para-gemini/informe-adversario.md` con cada heurística probada y su
puntaje.
Aceptación: ninguna heurística supera el 45 %.
Prohibido: firmar el cierre con una sola suite en rojo.

---

## 6. Fases y puertas, resumen

| Fase | Puestos | Puerta automática | No empieza hasta |
|---|---|---|---|
| 0 · Diagnóstico | P01–P05, P31 | `linea-base.json` completo | — |
| 1 · Banco | P06–P17 | `test_fidelidad_banco.js` = 0 fallos | Fase 0 cerrada |
| 2 · Pedagogía | P18–P21, P32 | ruta completable por un novato | Fase 1 cerrada |
| 3 · Frontend | P22–P28 | a11y + contraste + 0 superposiciones | Fase 1 cerrada |
| 4 · Datos | P29 | `test_humo.mjs` verde | Fase 3 cerrada |
| 5 · Cierre | P30 | `ejecutar_qa.py` 5 de 5 | Todas cerradas |

Las fases 2 y 3 pueden correr en paralelo. Las demás, no.

---

## 7. Métricas que se miden antes y después

Cada una tiene su comando. Van a `linea-base.json` y a `progreso.html`.

| Métrica | Antes | Objetivo | Comando |
|---|---|---|---|
| Puntaje adivinando (CDL/ACE/PCA) | 72,7 / 86,0 / 99,3 % | <45 % | `node tests/qa/test_fidelidad_banco.js` |
| Bloques aprobables a ciegas | 17 de 18 | 0 | idem |
| Ciclo A→B→C→D | 97,7 / 92,3 / 97,7 % | <40 % | idem |
| Multi-select | 0 % | 12–20 % | idem |
| Distractores de relleno | 51 | 0 | idem |
| Áreas oficiales sin cubrir | 2 (CDL-D5, D6) | 0 | idem |
| Case studies retirados | 90 preguntas | 0 | idem |
| Fallos totales del banco | 27 | 0 | idem |
| Violaciones de axe | 0 | 0 | `node tests/qa/test_a11y.mjs` |
| Pares de contraste bajo AA | 0 | 0 | `python tests/qa/test_contraste.py` |
| Lighthouse performance | 99 | 100 | `node tests/qa/test_lighthouse.mjs` |
| Peso inicial | 680 KiB | <500 KiB | idem |
| LCP | 740 ms | <900 ms | idem |
| Clases CSS fantasma | 132 | 0 | script de P24 |
| Superposiciones en 5 anchos | sin medir | 0 | script de P25 |
| Ruta de aprendizaje | no existe | completable | revisión de P18 |
| Heurísticas ciegas H5–H10 | sin medir | todas < 45 % | informe de P30 |
| Acierto con el escenario tapado | sin medir | < 35 % | prueba de §2.4 |
| Autocorrelación de la clave (desfase 4) | 0,92 | < 0,15 | script de P16 |
| Ítems con `subsectionId` | 0 de 900 | 900 de 900 | `test_taxonomia.js` |
| Subsecciones oficiales sin preguntas | sin medir | 0 | `test_taxonomia.js` |
| Preguntas de Gemini Enterprise Agent Platform | 0 | ~21 (PCA-2.4/2.5) | `test_taxonomia.js` |

---

## 8. Los 8 criterios de la revisión manual

Ninguna prueba automática puede comprobar esto. Se revisan **20 ítems al azar**
antes de cerrar la fase 1. Un solo "no" obliga a rehacer el lote entero.

1. ¿Podrían defenderse **al menos dos** de las opciones ante un colega, antes de
   leer la explicación?
2. ¿La opción correcta se distingue por lo que **dice**, no por lo que **mide**?
3. ¿El escenario tiene una restricción que descarta opciones de verdad (costo,
   latencia, RPO/RTO, normativa, esfuerzo operativo)?
4. ¿La explicación enseña algo que no estaba ya en el enunciado?
5. ¿Cada `distractors[X]` explica por qué falla **en esta situación concreta**?
6. ¿El `officialDocUrl` abre y dice lo que la explicación afirma?
7. Tapando la respuesta correcta, ¿sigue siendo resoluble solo con saber GCP?
8. ¿Se parece a una pregunta que escribiría Google, o a una pregunta de quiz?

---

## 9. Trampas prohibidas

Cualquiera de estas invalida el trabajo completo, no solo la entrega:

- Rellenar los distractores con paja para igualar longitudes.
- Bajar cualquier valor de `BARRERAS` en `test_fidelidad_banco.js`.
- Borrar, comentar o saltarse una prueba que falla.
- Fabricar multi-select partiendo una respuesta en dos.
- Inventar URLs de documentación o apuntar a la portada de un producto.
- Reescribir una explicación para que encaje con una respuesta equivocada.
- Generar las 900 preguntas de una vez sin revisión por lotes.
- Declarar una fase cerrada sin pegar la salida del comando de su puerta.
- Presentar la "probabilidad de aprobar" como una predicción validada.

---

## 10. Comandos

Preparación, una vez:

```bash
cd C:\DevWork\Certificaciones-GCP-Master-Studio\plataforma_entrenamiento_master
npm install --no-save playwright-core axe-core lighthouse chrome-launcher
npx playwright install chromium
```

Verificación:

```bash
python tests/qa/ejecutar_qa.py            # las 5 suites, veredicto único
node tests/qa/test_fidelidad_banco.js     # la del banco, sin navegador
python tests/qa/test_contraste.py
node tests/qa/test_humo.mjs        http://127.0.0.1:8989
node tests/qa/test_a11y.mjs        http://127.0.0.1:8989
node tests/qa/test_lighthouse.mjs  http://127.0.0.1:8989/index.html 3
```

Servir la aplicación:

```bash
python servidor.py            # con gzip y caché — el único válido para medir
python servidor.py --dev      # sin caché, mientras editas preguntas
```

**Nunca midas con `python -m http.server`.** No manda caché ni comprime, y
Lighthouse penaliza unos 3.000 KiB que no son culpa de la aplicación.

Lighthouse varía varios puntos entre pasadas en la misma máquina. Por eso se
evalúa la **mediana de tres**. Un número suelto no distingue una mejora del ruido.

---

## 11. Cómo reportar el avance

Actualiza `para-gemini/progreso.html` al cerrar cada puesto. Es un archivo
autocontenido: se abre con doble clic y muestra el antes, el ahora y el objetivo.

Por cada puesto, cambia su `data-estado` a `pendiente`, `en-curso`, `hecho` o
`bloqueado`, y rellena `data-evidencia` con **la salida real del comando**, no
con una descripción.

Un puesto sin evidencia cuenta como pendiente, aunque digas que está hecho.

---

## 12. Qué NO tocar

- `js/engine.js` — la rotación de bloques está verificada: 6 bloques disjuntos
  de 50 con los dominios proporcionados. Funciona.
- `servidor.py` — resuelto y verificado.
- `tests/qa/` — salvo P30, y solo para endurecer.
- Los tokens de color — todos los pares pasan WCAG AA en los dos temas.
- Las respuestas correctas técnicamente exactas: se reescribe su redacción, no
  su contenido.
