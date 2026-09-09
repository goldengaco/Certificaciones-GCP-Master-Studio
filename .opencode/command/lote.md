---
description: Reescribe un lote del banco siguiendo el procedimiento medido. Uso -- /lote pca PCA-D3-001..PCA-D3-025
---

Reescribe el lote indicado: $ARGUMENTS  (formato: <cert> <ID..ID>)

Detras de esto hay una persona preparando un examen que cuesta entre 99 y 200
USD. **La regla que ordena todo: el test es la verdad, no tu impresion del
trabajo.** No afirmes ningun avance sin pegar la salida del comando que lo mide,
y no ajustes NUNCA un test para que pase: esas puertas existen para que no se
pueda aprobar el simulador sin saber Google Cloud.

Trabaja siempre desde `plataforma_entrenamiento_master`.

## Los 8 pasos

1. `node tests/qa/medir_lote.js <cert> <ID..ID> --guardar backups/base_<lote>.json`
2. Lee `.agents/rules/00-contrato-banco.md`, `.agents/rules/plantilla-item.md` y
   `data/taxonomia.js`. Mira `PCA-D2-001` como listón de calidad.
3. Redacta el borrador en `lotes_nuevos/<lote>.json`. **Nunca escribas
   directamente en `data/cert_*.js`.**
4. `node tests/qa/verificar_borrador.js <borrador> <cert> --urls` → necesitas
   BORRADOR ACEPTADO.
5. Respalda (`cp data/cert_<cert>.js backups/cert_<cert>.pre_<lote>_<fecha>.bak.js`)
   y aplica con un script por id que ABORTE si no son N sustituciones, si cambia
   el tamano del banco o si cambia el ORDEN del array (la rotacion de bloques usa
   la posicion). Modelo: `.agents/pca_lote1_worker/apply_pca_lote1.js`.
6. `node tests/qa/medir_lote.js <cert> <ID..ID> --base <instantanea>` → LOTE
   ACEPTADO. Luego `bash ../.agents/estado.sh`.
7. Anota en `.agents/orchestrator_ace/GATE_STATUS.md` con las salidas pegadas.
8. Si no pasa la puerta, revierte desde el backup. No toques el test.

## Las trampas que ya han costado lotes

1. **Longitud**: la puerta mide si la clave es la UNICA mas larga o la UNICA mas
   corta, no promedios. Objetivo: posicion 2 o 3 de 4, variando entre items.
2. **Empate**: el medidor resuelve el empate por la PRIMERA opcion. Si la clave
   empata en el maximo y va antes, la heuristica ciega acierta igual y tumba el
   lote entero por un solo item. Deja 3+ caracteres de margen.
3. **Defecto en espejo**: si podas solo la clave, se convierte en la mas corta.
   Poda todas las opciones.
4. **Acusacion de relleno**: existe una puerta `db >= da*0.7`. Antes de revertir,
   comprueba la acusacion con datos (media de longitud de correctas vs
   incorrectas contra el backup). Si todo se acorto, no hubo relleno: la causa
   suele ser un empate en un solo item. Arregla el banco, no el test.
5. **`conceptos` vacio** = la pregunta no cuenta como reescrita.
6. **R6**: `distractors` lleva un motivo por cada letra INCORRECTA. Incluir la
   correcta es fallo automatico.
7. **Distractores defendibles**: cada incorrecta debe ser lo que elegiria un
   profesional al que le falta un dato. El vicio del banco original es que la
   correcta enumera cinco features y las demas son disparates: asi se acierta
   sin saber nada.
8. **R3**: el escenario necesita una restriccion cuantificada que decida la
   respuesta (RPO/RTO, latencia p99, presupuesto, regiones, cuota).
9. **Multi-select**: 12-20% del banco. 5 opciones, `correct` como array,
   `expectedSelectCount` igual a su longitud, "(Choose 2.)" en el enunciado.
10. **URLs**: `officialDocUrl` a `cloud.google.com`, comprobadas con `--urls`.

Comprobador de empates antes de aplicar:

```
node -e "require('./data/cert_pca.js');
GCP_PCA_QUESTIONS.filter(q=>/^PCA-D3-/.test(q.id)).forEach(q=>{
  const L=q.options.map(o=>o.text.length);
  if(q.options[L.indexOf(Math.max(...L))].letter===[].concat(q.correct)[0])
    console.log('la ciega acierta en', q.id);});"
```
