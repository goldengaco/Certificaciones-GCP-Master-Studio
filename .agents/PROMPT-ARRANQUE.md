# Prompt de arranque

Copia uno de estos bloques en una sesión nueva. Cambia solo lo que está en
`<corchetes>`. Están escritos para que el agente **mida antes de afirmar** y no
pueda avanzar saltándose las puertas.

---

## A) Reescribir un lote (el trabajo principal)

```
Trabaja en C:\DevWork\Certificaciones-GCP-Master-Studio (proyecto GCP Cert Studio:
plataforma local de entrenamiento para las certificaciones de Google Cloud).

Contexto que no debes perder de vista: hay una persona real preparándose con esto
para un examen que cuesta entre 99 y 200 USD. Un banco de preguntas que se deja
adivinar no es neutro: le dice que está listo cuando no lo está. Ante la duda
entre terminar rápido y que sirva, elige que sirva.

ANTES DE NADA, en este orden:
1. `bash .agents/estado.sh` — el estado medido ahora mismo. Las cifras de
   cualquier documento pueden estar caducadas; estas no.
2. Lee `.agents/HANDOFF.md` entero. Es el plano de continuación: qué queda, el
   procedimiento por lote y las trampas que ya han costado lotes enteros.
3. Lee `.agents/rules/00-contrato-banco.md` (reglas R1..R6, mandan sobre todo lo
   demás) y `.agents/rules/plantilla-item.md` (esquema de un ítem, campo a campo).

TU TAREA: reescribir el lote <PCA-D2-001..PCA-D2-025> de la certificación <pca>,
siguiendo el procedimiento de la sección 4 del HANDOFF.

Resumen del bucle, que debes cumplir sin saltarte pasos:
- Mide antes:
  `node tests/qa/medir_lote.js <cert> <ID..ID> --guardar /tmp/base.json`
- Redacta el borrador en un JSON aparte. NUNCA escribas directamente en
  data/cert_*.js.
- Pasa la puerta barata:
  `node tests/qa/verificar_borrador.js /tmp/draft.json <cert> --urls`
  Necesitas BORRADOR ACEPTADO. Si sale RECHAZADO, corrige; no apliques nada.
- Respalda (`cp data/cert_X.js "backups/cert_X.pre_loteN_$(date +%Y%m%d_%H%M%S).bak.js"`)
  y aplica por id con un script tipo `.agents/batch7_worker/apply_batch7.js`, que
  aborta si no son exactamente 25 reemplazos, si el banco cambia de tamaño o si se
  altera el orden del array.
- Mide después: `node tests/qa/medir_lote.js <cert> <ID..ID> --base /tmp/base.json`
  → necesitas LOTE ACEPTADO. Luego `test_fidelidad_banco.js` (0 FALLOS),
  `adversario.js` (ninguna heurística > 45%) y `guardian.js --verificar`.
- Si no pasa la puerta, REVIERTE desde el backup. No ajustes el test para que pase.
- Anota el resultado en `.agents/orchestrator_ace/GATE_STATUS.md` con las salidas
  pegadas.

LAS TRES TRAMPAS QUE MÁS LOTES HAN COSTADO (la sección 5 del HANDOFF las explica):
1. La puerta mide cuántas veces la correcta es LA MÁS LARGA de su pregunta, no el
   ratio de promedios. Criterio que funciona: ordena las longitudes de las opciones
   y deja la clave en posición 2 o 3 — ni la más larga ni la más corta —, con ≤25%
   entre la mayor y la menor del ítem. Consíguelo PODANDO, nunca alargando las
   incorrectas: la puerta compara (a) contra (b) justo para cazar el relleno.
2. `conceptos` es obligatorio. Se pierde al copiar una pregunta antigua como
   plantilla, y el lote se rechaza. Copia el esquema de una ya reescrita.
3. `officialDocUrl` tiene que DECIR lo que afirma tu explicación. En el lote 7
   apareció un 404. Comprueba con --urls.

No me digas que algo está hecho sin pegar la salida del comando que lo demuestra.
Si algo no se puede verificar, dilo en vez de asumirlo.
```

---

## B) Convertir preguntas a selección múltiple

Igual que A) hasta el punto 3, y luego:

```
TU TAREA: llevar <pca> del <12,0>% actual de selección múltiple al <16>%, es decir
<N> conversiones. Usa `tests/qa/convertir_multiseleccion.js`, que conserva la clave
verificada original y solo añade una segunda respuesta correcta.

Solo sirven preguntas donde la tarea necesita DE VERDAD dos acciones y ambas son
ciertas. NO conviertas "¿qué comando es correcto?" ni "¿qué producto elijo?": ahí
una segunda respuesta sería falsa. Tampoco cuando la clave ya contiene los dos
pasos, ni cuando la segunda respuesta se parece a un distractor existente.
Prefiere entregar menos antes que inventar una segunda respuesta que no lo sea:
en PCA se revisaron ~85 preguntas para sacar 34 honestas, y ese ritmo de descarte
es el esperado. La sección 5.3 del HANDOFF tiene los ejemplos que funcionaron.

Reparte las conversiones entre dominios para no deformar los pesos.
```

---

## C) Auditar sin cambiar nada

```
Trabaja en C:\DevWork\Certificaciones-GCP-Master-Studio. NO modifiques ningún
fichero: es una auditoría.

Ejecuta `bash .agents/estado.sh` y luego, en plataforma_entrenamiento_master:
`node tests/qa/test_fidelidad_banco.js`, `node tests/qa/adversario.js` y
`node tests/qa/guardian.js --verificar`.

Lee `.agents/HANDOFF.md` (sección 5.6 explica qué alertas del guardián son
esperadas y cuáles significan "revierte ahora").

Dime: qué está peor de lo que dice el HANDOFF, qué afirmación suya ya no se
sostiene con los números de hoy, y qué harías tú primero. Pega las salidas.
```

---

## D) Prompt para agentes que NO son Claude (Opencode, Gemini, etc.)

Este proyecto no depende de ninguna herramienta concreta: todo lo que hace falta
para continuarlo esta en archivos del repositorio. Pega esto tal cual:

> Trabajas en GCP Cert Studio, en `plataforma_entrenamiento_master`. Es una
> plataforma local para preparar certificaciones de Google Cloud, y hay una
> persona real usandola para un examen que cuesta entre 99 y 200 USD.
>
> ANTES DE NADA lee, en este orden: `AGENTS.md`, `.agents/HANDOFF.md` (entero,
> sobre todo la seccion 5 "las trampas") y `.agents/rules/00-contrato-banco.md`.
>
> La regla que ordena todo el proyecto: **el test es la verdad, no tu impresion
> del trabajo**. No afirmes ningun avance sin pegar la salida del comando que lo
> mide. Y no ajustes nunca un test para que pase: esas puertas existen para que
> no se pueda aprobar el simulador sin saber Google Cloud. Si una puerta te
> rechaza, comprueba la acusacion con datos y arregla el BANCO, no el test.
>
> Mide el estado con un comando: `bash .agents/estado.sh`.
>
> Para reescribir un lote sigue los 8 pasos de `.agents/HANDOFF.md` seccion 4.
> Nunca escribas directamente en `data/cert_*.js`: redacta en `lotes_nuevos/`,
> pasa `node tests/qa/verificar_borrador.js <borrador> <cert> --urls`, respalda,
> aplica con un script que aborte si cambia el numero de items o el ORDEN del
> array, y mide con `--base` contra la instantanea previa.
>
> Estado y siguiente trabajo por urgencia: mira la tabla que imprime
> `estado.sh`. Lo mas urgente es siempre la certificacion con menos preguntas
> reescritas, porque son las unicas practicables de verdad.

### Trampas que ya han costado lotes (resumen para pegar en el prompt)

1. La puerta de longitud mide si la clave es la UNICA mas larga o la UNICA mas
   corta, no promedios. Objetivo: posicion 2 o 3 de 4, variando entre items.
2. Un EMPATE en la longitud maxima cuenta como acierto de la heuristica ciega si
   la clave va primera. Deja 3+ caracteres de margen.
3. Si podas solo la clave creas el defecto en espejo (la clave pasa a ser la mas
   corta). Poda todas las opciones.
4. `conceptos` vacio = la pregunta no cuenta como reescrita.
5. `distractors` con una entrada para la letra CORRECTA es fallo automatico (R6).
6. El escenario necesita una restriccion cuantificada que decida la respuesta.
7. Alerta esperada del guardian tras reescribir: "N respuestas correctas apuntan
   a OTRO TEXTO". Lo que NO es esperado: items desaparecidos, cambio de tamano
   del banco o dominios reasignados.
