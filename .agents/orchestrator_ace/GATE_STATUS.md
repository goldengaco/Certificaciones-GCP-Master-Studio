# Gate Status Log

## Batch 1: ACE-D1-001..ACE-D1-025
- Worker: `bdbe6178-0dae-44b5-a700-7a5c33e28496` (DONE)
- medir_lote: LOTE ACEPTADO (a: 28.6%, b: 38.1%, fueraDeRango: 0, exceso: 1.7 chars, multi: 16.0%, sub/conceptos: 25/25)
- Question Count: 300
- Commit: `11beaf1`
- Gate Result: **PASS**

## Batch 2: ACE-D1-026..ACE-D1-050
- Worker: `57d0c966-94a1-46df-bf49-f922000e15ba` (DONE)
- medir_lote: LOTE ACEPTADO (a: 28.6%, b: 33.3%, fueraDeRango: 0, exceso: 2.1 chars, multi: 16.0%, sub/conceptos: 25/25)
- Question Count: 300
- Commit: `4a655b6`
- Gate Result: **PASS**

## Batch 3: ACE-D1-051..ACE-D1-060 + ACE-D2-001..ACE-D2-015
- Worker: `b20a23b2-9e35-42c7-a940-1469e2dd483a` (DONE)
- medir_lote: LOTE ACEPTADO (D1-051..060: a: 25.0%, b: 25.0%, fueraDeRango: 0; D2-001..015: a: 15.4%, b: 23.1%, fueraDeRango: 0, multi: 16.0%, sub/conceptos: 25/25)
- Question Count: 300
- Commit: `55fcd67`
- Gate Result: **PASS**

## Batch 4: ACE-D2-016..ACE-D2-040
- Worker: `04c02e51-e9b0-48c1-a8a0-d5c4d0c11152` (DONE)
- medir_lote: LOTE ACEPTADO (a: 9.5%, b: 28.6%, fueraDeRango: 0, exceso: -0.0 chars, multi: 16.0%, sub/conceptos: 25/25)
- Question Count: 300
- Commit: `57765df`
- Gate Result: **PASS**

## Batch 5: ACE-D2-041..ACE-D2-055 + ACE-D3-001..ACE-D3-010
- Worker: `f6cc15ba-86bf-4558-89d4-984deb3a8f55` (DONE)
- medir_lote: LOTE ACEPTADO (D2-041..055: a: 15.4%, b: 23.1%, fueraDeRango: 0; D3-001..010: a: 25.0%, b: 37.5%, fueraDeRango: 0, multi: 16.0%, sub/conceptos: 25/25)
- Question Count: 300
- Commit: `9ae9c2f`
- Gate Result: **PASS**


## Batch 6: ACE-D3-011..ACE-D3-035
- Borrador: `.agents/batch6_explorer/draft_batch6.json` (explorador, 2026-08-29; validate_draft.js 240/240)
- Aplicado por: `.agents/batch6_worker/apply_batch6.js` (2026-09-02) — 25 reemplazos por id, orden del array intacto
- medir_lote: LOTE ACEPTADO ((a) 12,0% -> 9,5%, (b) 24,0% -> 19,0%, fueraDeRango: 0, exceso: 0,5 chars, multi: 16,0%, sub/conceptos: 25/25)
- Question Count: 300 (verificadas: 150)
- guardian: 25 ítems modificados, ninguno fuera del lote; la alerta de "otro texto" es la reescritura esperada
- ACE tras el lote: adversario 34,6% (techo H8), multi-select 8,0%, desvío de dominio 0,8 puntos
- Efecto en el simulacro: 150 verificadas = **3 bloques de 50** (antes 2 de ~62)
- Commit: pendiente
- Gate Result: **PASS**

## Fase multi-select — ACE (12 conversiones)
- Parche: `.agents/multiselect/parche_multi_ace.json` (12 entradas)
- Aplicado con `tests/qa/convertir_multiseleccion.js` — la clave verificada original se conserva en las 12
- ids: ACE-D1-003, D1-007, D1-009, D1-010, D1-011, D1-015, D1-055, D2-017, D2-025, D2-047, D3-019, D3-037
- Criterio: solo preguntas cuya tarea necesita dos acciones reales (budget sin consumidor no corta nada; UBLA desactiva las ACL; IAM es aditivo y hay que revocar Editor; PGA exige la ruta por defecto al internet gateway; el writer identity del sink necesita permiso en el destino...). Se descartaron las de "qué comando" y "qué producto": ahí una segunda respuesta seria falsa.
- ACE multi-select: 8,0% -> **12,0%** (36/300)
- **ACE queda con 0 FALLA de contrato** — primera certificación en pasarlo entero
- Adversario ACE tras la conversión: 34,5% (techo H8)
- guardian: 12 ítems modificados, ninguno fuera del parche, orden intacto
- Comprobado en la interfaz: 10 multi-select por bloque de 50; contador, tope de selección y corrección por conjunto exacto, correctos
- Commit: pendiente (`.git/index.lock` bloqueado desde el 31 de agosto)

## Fase CDL — reclasificación de dominio + multi-select (2026-09-03)
### Reclasificación (4 preguntas, cierra el fallo de peso de dominio)
- CDL-D1-008 (cultura sin culpa), CDL-D1-016 (sostenibilidad), CDL-D1-017 (beneficio de CI/CD) -> **CDL-D1**
- CDL-D2-088 (PITR de Cloud Spanner) -> **CDL-D2**
- Motivo: las cuatro estaban en D6 "Scaling with Operations" pero su contenido es de las secciones 1 y 2 de la guia oficial.
- Desvio de CDL-D6: 4,0 -> **2,9 puntos** (maximo 3). PASA.
- ATENCION: margen de solo 0,1 puntos. El arreglo de fondo NO es mover mas preguntas, es que a **CDL-D3 (IA) le faltan 10 preguntas** para su 18% oficial. No hay ninguna pregunta de IA mal clasificada en otros dominios: hay que escribirlas.

### Multi-select (20 conversiones)
- Parche: `.agents/multiselect/parche_multi_cdl.json`
- Reparto por dominio: D1=4, D2=3, D3=3, D4=3, D5=4, D6=3 (para no deformar los pesos)
- Patron: se conserva la clave verificada y se anade una opcion E como segunda correcta (20/20 conservan la clave)
- CDL multi-select: 6,6% -> **12,1%** (44/364)
- Descartes documentados: preguntas de definicion y de emparejamiento (una segunda respuesta seria falsa), claves que ya contenian las dos mitades, y casos donde la segunda respuesta chocaba con un distractor existente
- 17 de las 20 opciones nuevas nombran servicios concretos de GCP (ayuda al aviso abierto de distractores vagos)

### Estado del banco tras esta fase
- **ACE: 0 FALLA · CDL: 0 FALLA · PCA: 1 FALLA** (multi-select 0,7%)
- Total: de 4 fallos a **1**
- Adversario ciego: ACE 34,5%, CDL 35,3%, PCA 40,2% — ninguno pasa del 45%
- Interfaz revalidada: bloques 16/16, UX de responder 24/24, axe 0 en ambos temas
- Commit: pendiente (`.git/index.lock` bloqueado desde el 31 de agosto)

## Fase PCA — multi-select (34 conversiones, 2026-09-03)
- Parches: `.agents/multiselect/parche_multi_pca_a.json` (18, dominios D1-D3) y `parche_multi_pca_b.json` (16, dominios D4-D6)
- Reparto: D1=7, D2=5, D3=6, D4=7, D5=4, D6=5 — proporcional al tamano de cada dominio
- Patron: la clave verificada se conserva y se anade una opcion E como segunda correcta (34/34 conservan la clave; 34/34 mantienen su caseStudy)
- PCA multi-select: 0,7% -> **12,0%** (36/300)
- Los descartes se documentaron: preguntas de "que producto/comando elijo" con una sola verdad, claves que ya contenian los dos pasos, y segundas respuestas que chocaban con un distractor existente. Se reviso ~85 preguntas para sacar 34.
- guardian: 34 items modificados, ninguno fuera de los parches, orden intacto

## ===== ESTADO DEL BANCO: 0 FALLOS =====
- `test_fidelidad_banco.js`: **0 FALLOS, 3 AVISOS** — "El banco supera todas las barreras de fidelidad"
- ACE 0 FALLA · CDL 0 FALLA · PCA 0 FALLA
- Adversario ciego: ACE 34,5% · CDL 35,3% · PCA 40,8% — ninguna heuristica pasa del 45%
- Multi-select: ACE 12,0% · CDL 12,1% · PCA 12,0%
- Interfaz revalidada con los tres bancos: bloques 16/16, UX de responder 24/24, axe 0 en ambos temas, 14 multi-select por bloque de 50 respondidas y corregidas correctamente
- AVISOS que siguen abiertos (no son fallos, pero son el trabajo que queda):
  1. Distractores que no nombran ningun servicio de GCP: CDL 57,2%, ACE 47,8%, PCA 26,0% (objetivo <=15%)
  2. A CDL-D3 (IA) le faltan 10 preguntas para su 18% oficial
  3. Reescritura por lotes: ACE 150/300 (lotes 7-12 pendientes), PCA 25/300
- Commit: pendiente (`.git/index.lock` bloqueado desde el 31 de agosto)

## Fase: calibrar el medidor de distractores vagos (2026-09-03)
**Esta fase NO tocó el banco. Solo `tests/qa/test_fidelidad_banco.js`.** (md5 de los
tres cert_*.js sin cambios; respaldo del test en `backups/test_fidelidad_banco.pre_asimetria_*`.)

El aviso decía "56,6 % de distractores no nombran ningún servicio de GCP, objetivo
<=15 %". Antes de reescribir 607 distractores de CDL se comprobó si el defecto
estaba en el banco o en el medidor. Estaba en el medidor, por tres motivos:

1. **La lista de servicios se quedó vieja.** No conocía App Engine, Shielded VM,
   AlloyDB, Gemini, Dataplex, Cloud Data Fusion, Cloud EKM, Migrate to Virtual
   Machines ni Cloud Billing Export. 98 distractores de CDL nombraban un producto
   real y se contaban como vagos. CDL: 55,6 % -> 45,2 %.
2. **Solo reconocía marcas comerciales.** "roles/billing.admin", "Object Lifecycle
   Management", "service account key" o "CLOUDSDK_CORE_PROJECT" son Google Cloud
   tanto como "BigQuery". Con roles, restricciones, comandos y objetos de la
   plataforma, ACE quedó en 3,3 % y PCA en 7,4 %.
3. **El medidor estaba en inglés y el banco de CDL está en español.** "balanceador
   de carga" no casaba con "load balanc". Eso solo explicaba casi toda la brecha
   entre CDL (20,2 %) y ACE (3,3 %), que es de idioma, no de calidad. CDL -> 17,4 %.

También se corrigió QUÉ se medía. La ausencia de nombres no es un defecto: CDL
pregunta por CapEx frente a OpEx, TCO, responsabilidad compartida y cultura, y ahí
exigir el nombre de un servicio en cada opción obliga a meterlo con calzador — una
opción con un producto pegado con cinta adhesiva es MÁS fácil de descartar, no
menos. El defecto real es la ASIMETRÍA dentro de una misma pregunta: que la clave
nombre servicios y sus distractores no. Ahora se mide eso, y solo en las preguntas
cuya clave sí nombra alguno.

**La comprobación quedó como informativa, sin barrera.** Una lista de palabras no
sabe decir si un distractor es concreto, y seguir ampliando el regex hasta que dé
cero sería ajustar el medidor hasta que diga lo que uno quiere oír. Quien vigila
esta fuga de verdad es el adversario ciego: **H5 "la que nombra más servicios"**
mide el daño consumado y tiene su barrera en `adversario.js`. Hoy: CDL 24,7 %,
ACE 22,5 %, PCA 29,5 %, con el azar en 25 %. Si H5 sube, la asimetría empezó a ser
explotable. Los distractores vagos DE VERDAD ("contratar a un diseñador para que
redimensione las imágenes a mano") los caza la comprobación de frases de relleno,
que sí conserva su barrera.

Cifras informativas que deja el test: asimetría CDL 17,4 %, ACE 3,3 %, PCA 7,2 %.

### Estado tras la fase
- `test_fidelidad_banco.js`: **0 FALLOS, 0 AVISOS**
- adversario: ACE 34,5 % · CDL 35,3 % · PCA 40,8 % (barrera 45 %)
- Si alguien no comparte este criterio, revertir es copiar el respaldo del test
  encima: el banco no depende de este cambio.

## Fase: 10 preguntas nuevas de IA para CDL-D3 (2026-09-03)
- Fichero: `.agents/cdl_ia/nuevas_ia_cdl.json` — ids CDL-IA-025..034
- CDL-D3 (IA): 56/364 = 15,4% -> **66/374 = 17,6%** (oficial 18%). Desvio 2,62 -> **0,35**
- Efecto colateral bueno: el margen de CDL-D6, que estaba en 2,91 de 3, se ensancha a **2,57**. El problema de peso de dominio deja de estar al borde.
- Temas: cubren huecos reales, no repiten los 30 que el banco ya tenia. Supervisado/no
  supervisado/refuerzo, calidad del etiquetado, que es un embedding, agente frente a
  chatbot de reglas, Gemini para Workspace, coste y latencia de modelo grande vs ligero,
  cuando NO usar IA, propiedad intelectual e indemnizacion, metricas de negocio (elige 2),
  y humano en el circuito segun riesgo (elige 2).
- 2 de las 10 son de seleccion multiple; claves repartidas A3/B3/C3/D3 sin repetir consecutivas.
- Las 9 URLs oficiales distintas responden HTTP 200.

### Aviso para quien escriba preguntas nuevas
El primer intento fue RECHAZADO por `medir_lote.js`: (a) 37,5%, (b) 50,0%. El autor habia
medido el **ratio de promedios** (correcta entre 0,90x y 1,10x del promedio de las
incorrectas) y lo cumplia — pero la puerta mide otra cosa: **cuantas veces la correcta es
LA MAS LARGA de su pregunta**. Se puede tener ratio 1,02 y ser la mas larga por un caracter.
Al corregirlo podando solo la correcta se cayo en el defecto en espejo (la correcta pasaba a
ser la MAS CORTA en 6 de 8, y entonces acierta la heuristica H2). El criterio que si funciona:
**la correcta ni la mas larga ni la mas corta — posicion 2 o 3 de 4 — y todas las opciones del
item dentro de una banda <=1,12x**, conseguido podando todas, no alargando las incorrectas.
Resultado final: (a) 0,0%, (b) 0,0%, exceso medio +0,1 caracteres. LOTE ACEPTADO.

### Estado
- `test_fidelidad_banco.js`: **0 FALLOS, 0 AVISOS** (banco de 374+300+300)
- adversario CDL: 35,1% (techo H3) — sin cambios significativos
- guardian: ninguna pregunta existente modificada, orden previo intacto, solo 10 anadidas
- interfaz: bloques 16/16 (CDL pasa a 6 bloques de ~52), UX 24/24, axe 0
- Commit: pendiente (`.git/index.lock` bloqueado desde el 31 de agosto)

## Batch 7: ACE-D3-036..ACE-D3-060 (2026-09-03)
- Borrador: `.agents/batch7_worker/draft_lote7.json` · aplicado con `apply_batch7.js`
- medir_lote: **LOTE ACEPTADO** ((a) 20,8% -> 0,0%, (b) 25,0% -> 0,0%, "las dos metricas
  bajan en proporcion: no hubo relleno", exceso medio -0,0 chars, 25/25 subsectionId,
  25/25 conceptos)
- 4 de 25 en seleccion multiple (16%): D3-037 (Direct VPC egress + private services access),
  D3-041 (crear el sink + rol al writer identity), D3-043 (stateful policy del disco +
  per-instance config de la IP), D3-056 (crear el CRD + anotar el Service)
- Claves: A5 B5 C6 D5 sobre las 21 de respuesta unica, sin dos iguales consecutivas
- Escenarios reescritos por falta de restriccion cuantificada o distractores no defendibles
  (R2/R3): 046 (rsync: los distractores originales eran `bq load` y `gcloud compute scp`),
  050 (default object ACL: los originales eran comandos inventados), 059 (era "que comando
  despliega cron.yaml" con distractores inventados y sin encaje en ninguna subseccion de
  ACE-3; sustituida por estado remoto de Terraform, ACE-3.6), 054, y otras 8 a las que solo
  se les anadio la restriccion que faltaba
- URLs: las 25 responden 200. La de Eventarc daba **404** y se sustituyo por la pagina que
  si muestra los tres `--event-filters` que afirma la explicacion
- ACE: 150 -> **175 verificadas** · multi-select 13,0% · correcta mas larga 18,8%
- adversario ACE: techo **33,7%** (H4)
- Simulacro ACE: 3 bloques de 59/58/58 (antes 50/50/50)
- guardian: 25 items modificados, ninguno fuera del lote, orden intacto
- Gate Result: **PASS**

## FASE — Rediseno visual "Bloque" (interfaz, no banco)

Fecha: 2026-09-08. Origen: el usuario rechazo el aspecto anterior (denso,
jerarquia pobre, oscuro apagado, generico) y eligio la direccion C "Bloque"
entre tres maquetas.

Que se toco: SOLO interfaz. `css/tema-bloque.css` (nuevo, 629 lineas) enlazado
desde `index.html` tras `styles.css`. `styles.css` NO se modifico: la capa
nueva redefine tokens y sobrescribe componentes. Revertir = quitar el <link>.
El banco de preguntas no se toco (ningun archivo de `data/`).

Direccion: papel #F4F2EC, tinta #111111, bordes duros de 2px, radios a 0,
sombras desplazadas en vez de difuminadas, azul electrico #2D4BFF como unico
acento de seleccion. Sin fuentes de CDN (la plataforma sigue funcionando sin
internet): el caracter lo dan peso, tamano y borde.

Trampas encontradas y resueltas (esto es lo que costaria repetir):
- `.btn-primary`, `.btn-accent`, `.btn-warning` usan `!important` en
  styles.css: sin igualarlo, la capa del tema no llegaba a aplicarse.
- La insignia de letra de las opciones se define en `#view-exam
  .option-letter-badge` (especificidad de id): hubo que repetir el selector
  con id, no basta `.option-letter-badge`.
- 15 fondos oscuros escritos a mano (degradados de tarjeta, `.app-header`)
  no seguian tokens y quedaban como manchas negras sobre papel.
- `.cert-pill` tenia `color: #e8eaed` fijo: ilegible sobre claro.

Medicion (no impresion): auditoria de contraste automatizada sobre TODAS las
vistas renderizadas con Playwright, comparando color computado contra el
fondo efectivo del ancestro.
- Antes del ultimo ajuste: 6 elementos por debajo de WCAG AA (todos el mismo
  caso, --text-muted #6E6A61 sobre #EDEAE1 = 4.48:1, minimo 4.5:1).
- Despues de oscurecer --text-muted a #67635A: 0 elementos por debajo.

Pendiente de esta fase:
- El numero de pregunta gigante de la maqueta necesita cambiar el marcado
  (`index.html` / `js/ui_exam.js`), no solo CSS.
- Vistas drill / study / search / news / tools / diagnostico: heredan la
  paleta y pasan contraste, pero no tienen remates propios de la direccion.

### Continuacion: numero de pregunta grande + verificacion funcional

Se anadio la pieza que faltaba de la maqueta C: el numero de pregunta grande.
Ya no es solo CSS — toca marcado y logica:
- `index.html`: bloque `.exam-q-index` dentro de `.exam-q-header`, marcado
  `aria-hidden="true"` (el lector de pantalla ya recibe la posicion por
  `#exam-position-indicator`; duplicarla seria ruido).
- `js/ui_exam.js`: se actualiza dentro de `renderQuestion()`, junto a la
  posicion y la barra de progreso, para que no pueda desincronizarse.
- `css/tema-bloque.css`: `.exam-q-header` pasa a rejilla numero | etiquetas |
  boton, con reduccion del numero por debajo de 1100px.

Medicion (ejecutado con la plataforma REAL servida, no con una maqueta):
- `tests/qa/test_examen_ux.mjs`: 29 ok, 0 fallos, 0 errores de consola
  (eran 24 antes; se anadieron 5 comprobaciones del numero grande, incluida
  que AVANZA con la pregunta y que coincide con la barra superior — clavarse
  en 1 seria mentirle al que estudia).
- `tests/qa/test_bloques.mjs`: 16 ok, 0 fallos.
- Auditoria de contraste con el numero grande puesto: 0 elementos por debajo
  de WCAG AA.

Backups previos en `backups/`: index.pre_numero_*, ui_exam.pre_numero_*,
test_examen_ux.pre_numero_*.

## FASE — PCA lote 1 (PCA-D2-001..025) — ACEPTADO

Fecha: 2026-09-08. Primer lote de PCA tras el rediseno. PCA pasa de 25 a 50
preguntas reescritas (8% -> 17%).

Procedimiento seguido: medir antes (`backups/base_pca_lote1.json`), redactar en
`lotes_nuevos/pca_d2_lote1.json` (nunca sobre `data/`), pasar
`verificar_borrador.js` con `--urls`, respaldar, aplicar por id con
`.agents/pca_lote1_worker/apply_pca_lote1.js` (aborta si no son 25 sustituciones,
si cambia el tamano del banco o si cambia el ORDEN del array), medir despues.

Medidas pegadas:
- verificar_borrador: BORRADOR ACEPTADO — 0 fallos, 1 aviso. Las 25 URLs
  responden 200.
- medir_lote --base: (a) correcta mas larga 13.6% -> 0.0%; (b) heuristica ciega
  13.6% -> 0.0%. LOTE ACEPTADO, todas las puertas.
- contrato: el banco supera todas las barreras de fidelidad.
- adversario: techo 36.9% (antes 40.8%) — BAJA, el banco resiste mejor.
- guardian: 1 alerta, la esperada (25 respuestas correctas apuntan a otro
  texto = son las 25 reescritas). Estructura, dominios y enlaces intactos.

### El tropiezo que merece quedar escrito

La primera aplicacion fue RECHAZADA por la puerta anti-relleno:
"(a) bajo 13.6 pts pero (b) solo 8.9: RELLENASTE las incorrectas". La regla es
`db >= da * 0.7`.

Comprobe la acusacion con datos antes de decidir nada, y era falsa para este
lote: la correcta paso de 204.6 a 181.8 caracteres de media y las incorrectas
de 217.0 a 181.5 — TODO se acorto, no se relleno nada. La puerta esta pensada
para un parche, y en una reescritura completa su inferencia se desajusta.

Aun asi NO se toco el test (regla del proyecto: el test es la verdad). La causa
real era un solo item: en PCA-D2-024 la clave B empataba en 194 caracteres con
D, y el medidor resuelve el empate por la PRIMERA opcion, asi que la heuristica
ciega seguia acertando ahi. Se acorto la CLAVE (no se alargaron las incorrectas)
de 194 a 191 caracteres. Con eso (b) bajo a 0.0% y el lote paso limpio.

Leccion para el siguiente lote: un EMPATE en la longitud maxima cuenta como
acierto de la heuristica ciega si la clave va primera. No basta con "que la
correcta no sea la mas larga": tampoco debe empatar en el maximo por delante.

## FASE — PCA lote 2 (PCA-D2-026..045) — ACEPTADO. Dominio 2 completo.

Fecha: 2026-09-08. PCA pasa de 50 a 70 reescritas (17% -> 23%). Con esto el
dominio PCA-D2 queda entero (45 de 45).

- verificar_borrador: BORRADOR ACEPTADO — 0 fallos, 1 aviso. 20 URLs a 200.
- medir_lote --base: (a) 22.2% -> 0.0%; (b) 22.2% -> 0.0%. LOTE ACEPTADO.
- contrato: 0 fallos. adversario: techo 35.2% (venia de 36.9% y de 40.8% antes
  del lote 1) — cada lote deja el banco menos adivinable.
- guardian: 1 alerta, la esperada (20 respuestas apuntan a otro texto).

La trampa 5.7 (empate de longitud) se paso al prompt del redactor y esta vez el
lote salio limpio a la primera: 0 items donde la heuristica ciega acierta.

## Interfaz — botones de utilidad de la cabecera

El boton de idioma heredaba el 40x40 de `.icon-btn` pero lleva icono + etiqueta
dentro, asi que el contenido se salia y las dos cajas no casaban. Corregido en
`css/tema-bloque.css`: `.icon-btn` cuadrado de 40px con borde de 2px e inversion
al pasar por encima, y `.icon-btn.lang-btn` de ancho automatico con padding
propio. Verificado con captura de la cabecera real.
