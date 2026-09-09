# Plano de continuación — GCP Cert Studio

Escrito el 2026-09-03. Para quien siga el trabajo sin haber estado en las
sesiones anteriores. **Léelo entero antes de tocar nada**: casi todo lo que hay
aquí son errores ya cometidos, y repetirlos cuesta un lote entero.

Precedencia: `.agents/rules/00-contrato-banco.md` manda sobre este documento.
Este añade el *cómo*, no cambia el *qué*.

---

## 0. Empieza aquí, en dos comandos

```bash
bash .agents/estado.sh                 # el estado MEDIDO ahora mismo
```

Las cifras de cualquier documento —incluido este— pueden estar caducadas. Las de
`estado.sh` no: las calcula del banco en ese momento. **Si no coinciden con la
tabla de abajo, manda `estado.sh`.**

Y antes de aplicar cualquier borrador al banco:

```bash
node tests/qa/verificar_borrador.js <borrador.json> <cdl|ace|pca> --urls
```

Esa herramienta comprueba de una sola vez las nueve familias de errores que ya
han costado lotes en este proyecto: esquema incompleto, `conceptos` ausente,
claves huérfanas, distractor escrito sobre la clave, multi-select mal formada, la
trampa de longitud y su reflejo, reparto de claves, escenarios sin restricción,
distractores de relleno y URLs muertas. **Si sale RECHAZADO, no apliques nada.**
Usa el mismo criterio de longitud que `medir_lote.js` (comprobado: ambos dan
33,3 % sobre las 25 de PCA), así que no recibirás señales contradictorias.

## 1. Dónde está el proyecto hoy

Todo medido, no recordado. Reproduce con `bash .agents/estado.sh`.

| | ACE | CDL | PCA |
|---|---|---|---|
| Preguntas | 300 | 374 | 300 |
| **Reescritas** (con `subsectionId`) | **175** | **374** | **25** |
| Selección múltiple | 13,0 % | 12,3 % | 12,0 % |
| Techo del adversario ciego | 33,7 % | 35,1 % | 40,8 % |
| Contrato | 0 FALLA | 0 FALLA | 0 FALLA |

`test_fidelidad_banco.js`: **0 FALLOS, 0 AVISOS**. Ninguna heurística ciega pasa
del 45 %. Eso NO significa que el banco esté terminado: significa que ya no se
puede aprobar el simulador por la forma de las opciones. Lo que falta es
**contenido**.

Simulacros que salen hoy: ACE 3 bloques de 59/58/58 · CDL 6 de ~52 · PCA 1 de 25.

---

## 2. Lo que queda, en orden de valor

### 2.1 PCA — la reescritura grande (275 de 300 sin reescribir)
Es el trabajo mayor y el más urgente en términos de daño: PCA solo tiene **25
preguntas practicables**, así que su "simulacro" es de 25 y la propia aplicación
avisa de que no mide lo mismo que el examen real. Quien estudie PCA hoy con esto
no tiene con qué.

**Dato que el contrato global no enseña.** Medido el 2026-09-04, separando el
material de PCA en dos:

| | la correcta es la más larga | la más corta |
|---|---|---|
| PCA ya reescritas (25) | **33,3 %** | 19,0 % |
| PCA sin reescribir (243 de respuesta única) | 27,6 % | **35,8 %** |

Las 25 reescritas están **al borde del máximo de 35 %** — pasan por poco. Y las
275 pendientes tienen el defecto **en espejo**: la correcta es la más corta en el
35,8 % de los casos, así que ahí quien marque sistemáticamente la opción más corta
gana. Se diluye en el total (34,5 %) y por eso el contrato de las 300 no lo señala.

Consecuencia práctica: al reescribir PCA **no basta con no alargar la correcta**;
hay que vigilar los dos extremos a la vez. `verificar_borrador.js` mide ambos.

### 2.2 ACE — lotes 8 a 12 (125 sin reescribir)
`ACE-D3-061..075` (15), `ACE-D4-001..060` (60), `ACE-D5-001..050` (50).
El plan original está en `.agents/orchestrator_ace/plan.md`; los lotes 1-7 están
cerrados y medidos en `GATE_STATUS.md`.

Con 175 ya se superó el umbral de 180 que `AGENTS.md` fija como "suficiente para
UNA certificación" (3 simulacros que no se repiten). Terminar ACE es deseable,
pero **PCA es más urgente**: allí no hay con qué estudiar.

### 2.3 CDL — nada pendiente
374 de 374 reescritas, pesos alineados, 0 FALLA. No la toques salvo para añadir
cobertura.

---

## 3. Los comandos que deciden. El test es la verdad

```bash
bash .agents/estado.sh                  # resumen medido de todo lo anterior
cd plataforma_entrenamiento_master

node tests/qa/verificar_borrador.js <draft.json> <cert> --urls   # ANTES de aplicar
node tests/qa/test_fidelidad_banco.js   # el contrato: tiene que dar 0 FALLOS
node tests/qa/adversario.js             # ninguna heurística ciega > 45 %
node tests/qa/guardian.js --verificar   # ¿rompí algo sin querer?
node tests/qa/medir_lote.js ace ACE-D4-001..ACE-D4-025   # un lote concreto
```

**Ninguna afirmación de avance vale sin esas salidas pegadas.** Es la regla del
proyecto y se ha cumplido en las siete fases anteriores.

### Tests de interfaz — ojo, no corren en este equipo
`tests/qa/test_examen_ux.mjs`, `test_bloques.mjs`, `test_a11y.mjs`, `test_humo.mjs`
y `test_lighthouse.mjs` necesitan `playwright-core` (y `axe-core` el de a11y), y
**ninguno de los dos está instalado aquí**. Se ejecutaron en un contenedor aparte.
Para correrlos en local:

```bash
npm install playwright-core axe-core
# y un Chrome/Chromium: exporta CHROME_PATH=/ruta/al/binario
node tests/qa/test_examen_ux.mjs   # 24 comprobaciones, responder con teclado
node tests/qa/test_bloques.mjs     # 16, reparto del simulacro en bloques
```
Si vas a tocar `js/ui_exam.js`, `js/engine.js` o el reparto de bloques, instálalos
primero. Si solo tocas el banco, con los tres primeros comandos basta.

---

## 4. Procedimiento para un lote de 25 (el que funciona)

1. **Mide antes.** `node tests/qa/medir_lote.js <cert> <ID..ID> --guardar /tmp/base.json`
2. **Lee el contrato** `.agents/rules/00-contrato-banco.md` (R1..R6) y
   `data/taxonomia.js` (de ahí salen `subsectionId` y `conceptos`).
3. **Redacta el borrador** en un JSON aparte, con el esquema de
   `.agents/rules/plantilla-item.md`. **Nunca escribas directamente en
   `data/cert_*.js`.**
4. **Pasa el verificador** — es la puerta barata, antes de tocar nada:
   `node tests/qa/verificar_borrador.js /tmp/draft.json ace --urls`
   Necesitas **BORRADOR ACEPTADO**. Luego, si quieres la comprobación completa,
   copia el banco (`cp data/cert_ace.js /tmp/copia.js`), inserta el borrador en la
   copia y mide contra `--base /tmp/base.json` esperando **LOTE ACEPTADO**.
5. **Respalda y aplica**:
   `cp data/cert_ace.js "backups/cert_ace.pre_loteN_$(date +%Y%m%d_%H%M%S).bak.js"`
   y usa un script tipo `.agents/batch7_worker/apply_batch7.js` — sustituye por
   `id`, aborta si no son exactamente 25 reemplazos, si el banco cambia de tamaño
   o si se altera el orden del array (la rotación de bloques usa la posición).
6. **Mide después** con `--base`, corre el contrato, el adversario y el guardián.
7. **Anota en `GATE_STATUS.md` y `progress.md`** con las salidas pegadas.
8. Si no pasa la puerta, **revierte desde el backup**. No ajustes el test.

---

## 5. Las trampas. Aquí es donde se pierden los lotes

### 5.1 La longitud: la puerta NO mide lo que parece
`medir_lote.js` mide **cuántas veces la correcta es LA OPCIÓN MÁS LARGA de su
pregunta** (máximo 35 %). NO mide el ratio de promedios. Un lote con promedios
idénticos falla si la correcta gana por un carácter.

Se falló así en las 10 preguntas de IA de CDL: ratio 0,90–1,10 correcto, pero
(a) 37,5 % y (b) 50,0 % → **RECHAZADO**. Al corregirlo podando solo la correcta se
cayó en el defecto en espejo: la correcta pasó a ser la **más corta** en 6 de 8, y
entonces acierta la heurística "marcar la más corta".

**Criterio que sí funciona:** ordena las longitudes de las 4 (o 5) opciones; la
correcta debe quedar en **posición 2 o 3**. Ni la más larga ni la más corta. Y
entre la más larga y la más corta del ítem, ≤25 % de diferencia (R1).

**Consíguelo podando, nunca alargando las incorrectas.** La puerta compara (a)
contra (b) exactamente para cazar el relleno: si (a) baja y (b) no, te rechaza.

### 5.2 `conceptos` es obligatorio aunque el banco viejo no lo tenga
`medir_lote.js` exige `conceptos` en cada ítem. Muchas preguntas antiguas no lo
tienen, así que copiarlas como plantilla te deja sin él y el lote se rechaza. Un
lote se perdió por esto. Copia el esquema de un ítem **ya reescrito**
(`ACE-D1-001`), no de uno antiguo.

### 5.3 Multi-select: qué convertir y qué no
El contrato pide 12–20 %. Ya se cumple en las tres. Si conviertes más, usa
`tests/qa/convertir_multiseleccion.js`, que **conserva la clave verificada
original** y solo añade una segunda respuesta.

Sirven las preguntas donde la tarea necesita **de verdad dos acciones y ambas son
ciertas**: un presupuesto que publica en Pub/Sub no corta nada sin la función que
llama a la Billing API; activar UBLA desactiva las ACL y obliga a reconceder por
IAM; IAM es aditivo y hay que revocar el binding de Editor; el writer identity de
un sink necesita permiso en el destino.

**No sirven** las de "¿qué comando es correcto?" ni "¿qué producto elijo?": ahí una
segunda respuesta sería falsa. Tampoco cuando la clave ya contiene los dos pasos,
ni cuando la segunda respuesta se parece a un distractor existente (quedan dos
opciones casi iguales, una correcta y otra no). En PCA se revisaron ~85 preguntas
para sacar 34 honestas: ese ritmo de descarte es el esperado, no un fracaso.

### 5.4 Los medidores por lista de palabras engañan
El aviso "56,6 % de distractores no nombran ningún servicio de GCP" era **casi todo
un artefacto**: la lista no conocía App Engine, Shielded VM, AlloyDB, Cloud Data
Fusion ni Cloud EKM; solo entendía marcas (así que `roles/billing.admin` y "Object
Lifecycle Management" contaban como vagos); y estaba **en inglés mientras el banco
de CDL está en español** ("balanceador de carga" no casaba con `load balanc`).

Esa comprobación es ahora **informativa, sin barrera**, y el razonamiento completo
está en `GATE_STATUS.md`. Quien vigila esa fuga es **H5 del adversario** ("marcar la
que nombra más servicios"), que mide el daño consumado. Hoy: CDL 24,5 %, ACE 22,5 %,
PCA 29,5 %, con el azar en 25 %.

**No persigas ese número metiendo nombres de servicios con calzador.** CDL pregunta
por CapEx frente a OpEx, TCO y cultura; una opción con un producto pegado con cinta
adhesiva es *más* fácil de descartar, no menos, y empeorarías el banco.

### 5.5 Verifica las URLs de verdad
R5 exige que `officialDocUrl` **diga lo que la explicación afirma**. En el lote 7
apareció un **404** (la de Eventarc). Haz `curl -L` a todas las que toques y
comprueba que la página contiene lo que citas. Si no la encuentras, cambia la
afirmación, no el enlace.

### 5.6 Alertas del guardián: cuáles son esperadas
`guardian.js --verificar` compara contra una instantánea vieja. Hoy da 4 alertas
que **son correctas y están justificadas**:
- "el número de ítems pasó de 300 a 374" (CDL creció con las 10 de IA y el resto)
- "N respuestas correctas apuntan a OTRO TEXTO" en las tres → son las reescrituras
  y conversiones de los lotes 1-7 y de las fases de multi-select
- "214 ítems cambiaron de dominio" (CDL) → la reestructuración a 6 dominios

Existe `--permitir-texto` para lotes de reescritura. Lo que **nunca** debe aparecer:
"ítems desaparecidos", "estructura de opciones alterada", "ítem sin enlace a
documentación". Si ves una de esas, revierte.

---


### 5.7 El empate de longitud (descubierto en el lote 1 de PCA)

`medir_lote.js` resuelve el empate de la opcion mas larga por la PRIMERA que
encuentra. Si la clave empata en el maximo y va antes que la otra, la
heuristica ciega la sigue acertando y la puerta anti-relleno (`db >= da*0.7`)
tumba el lote entero por un solo item.

Al redactar: la clave no debe ser la mas larga NI empatar en el maximo por
delante. Comprueba con esto antes de aplicar:

```
node -e "
require('./data/cert_pca.js');
GCP_PCA_QUESTIONS.filter(q=>/^PCA-D2-/.test(q.id)).forEach(q=>{
  const L=q.options.map(o=>o.text.length);
  const mas=q.options[L.indexOf(Math.max(...L))].letter;
  if(mas===[].concat(q.correct)[0]) console.log('la ciega acierta en', q.id);
});"
```

Y si la puerta te acusa de rellenar: comprueba la acusacion con datos antes de
revertir. Compara la media de longitud de correctas e incorrectas contra el
backup. Si TODO se acorto, no hubo relleno y el problema es otro (casi siempre
un empate). Lo que no se hace nunca es ajustar el test para pasar.

## 6. Decisiones ya tomadas — no las deshagas sin leer por qué

- **El número de bloques del simulacro se calcula, no es 6 fijo.**
  `BlockRotationEngine.contarBloques(total, tamaño)` en `js/engine.js`. Antes se
  partía siempre en 6 y con 125 preguntas verificadas salían simulacros de 20 con
  el cronómetro de 120 minutos. La interfaz debe llamar a `contarBloques` o a
  `app.numeroDeBloques()`, **nunca escribir "6"**.
- **Responder con el teclado en modo Examen** (`js/ui_exam.js`): roving tabindex,
  A–E / 1–5, flechas, `F` marcar, **Retroceso** limpiar (no "C": con cinco opciones
  esa letra ya es una respuesta). El repintado no recrea el DOM, para no perder el
  foco. Cubierto por `test_examen_ux.mjs`.
- **4 preguntas de CDL reclasificadas de dominio** (sostenibilidad, beneficio de
  CI/CD, cultura sin culpa → D1; PITR de Spanner → D2). Estaban mal clasificadas.
- **CDL-D3 creció con 10 preguntas nuevas de IA** (`CDL-IA-025..034`) para llegar a
  su 18 % oficial. Eso además ensanchó el margen de CDL-D6.

---

## 7. Cosas que están mal y no se han arreglado

- **Los `id` no siempre coinciden con el dominio.** Hay preguntas `CDL-D4-015` que
  viven en `CDL-D6`, herencia de la reestructuración. Es confuso pero **no lo
  renumeres**: el guardián lo leería como ítems desaparecidos y se pierde la
  trazabilidad de los lotes. Fíate del campo `domainId`, no del prefijo del id.
- **`.git/index.lock` lleva bloqueado desde el 31 de agosto** y por eso **siete
  fases de trabajo están sin commit**, aunque todas tienen respaldo en `backups/`.
  Antes de nada: comprueba que no hay ningún git corriendo, borra ese fichero y
  commitea por fases separadas (banco, interfaz, tests), no todo junto.
- **`docs/_historico/` está obsoleto y tiene números falsos.** No lo ejecutes ni lo
  cites.
- El margen de peso de dominio de CDL-D6 es de ~2,6 sobre un máximo de 3. Si
  añades preguntas a CDL, hazlo en D1, D2 o D3, nunca en D6.

---

## 8. La regla que ordena todo lo demás

Hay una persona real preparándose con esto para un examen que cuesta entre 99 y
200 USD. Un banco que se deja adivinar no es neutro: **le dice que está listo
cuando no lo está**. Ante la duda entre terminar rápido y que sirva, elige que
sirva. Y si un test molesta, el test casi siempre tiene razón — antes de tocarlo,
demuestra con números que el que está mal es el medidor, como se hizo (y se
documentó) con el aviso de distractores.
