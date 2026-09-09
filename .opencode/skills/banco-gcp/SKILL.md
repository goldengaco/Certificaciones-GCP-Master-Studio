---
name: banco-gcp
description: Reglas del banco de preguntas de GCP Cert Studio (contrato, puertas de calidad y trampas conocidas). Usar al redactar, revisar o aplicar preguntas de ACE, CDL o PCA.
---

# El banco de GCP Cert Studio

Objetivo del proyecto, textual: "un sistema que realmente ayude a certificarse"
y "que no se pueda aprobar el simulador sin saber Google Cloud".

## La regla que ordena todo

**El test es la verdad, no tu impresion del trabajo.** Ningun avance se afirma
sin pegar la salida del comando que lo mide. Y no se ajusta nunca un test para
que pase: si una puerta rechaza el trabajo, se arregla el banco.

Si una puerta te acusa de algo, **comprueba la acusacion con datos antes de
revertir**. Ejemplo real: la puerta anti-relleno rechazo un lote diciendo que se
habian inflado las opciones incorrectas; al medir, todas las opciones se habian
acortado. La causa real era un empate de longitud en un unico item.

## Las puertas

| Comando | Que mide | Umbral |
|---|---|---|
| `node tests/qa/verificar_borrador.js <json> <cert> --urls` | el borrador, antes de aplicar | BORRADOR ACEPTADO |
| `node tests/qa/medir_lote.js <cert> <ID..ID> --base <snapshot>` | el lote ya aplicado | LOTE ACEPTADO |
| `node tests/qa/test_fidelidad_banco.js` | contrato R1..R6 sobre todo el banco | 0 fallos |
| `node tests/qa/adversario.js` | si se aprueba sin saber GCP | ninguna heuristica > 45% |
| `node tests/qa/guardian.js --verificar` | cambios no autorizados | solo alertas esperadas |
| `bash .agents/estado.sh` | todo lo anterior de una vez | — |

## Estructura de un item

`id`, `certId`, `domainId`, `domainName`, `subsectionId`, `conceptos` (no vacio),
`scenario`, `options` (letra + texto), `correct`, `isMultiSelect`,
`expectedSelectCount`, `explanation`, `distractors` (solo letras incorrectas),
`officialDocUrl`, `difficulty`.

## Las trampas, en orden de cuanto han costado

1. **Longitud**: la clave no puede ser la unica mas larga ni la unica mas corta.
   Posicion 2 o 3 de 4, variando.
2. **Empate**: empatar en el maximo yendo primero cuenta como acierto de la
   heuristica ciega. 3+ caracteres de margen.
3. **Defecto en espejo**: podar solo la clave la convierte en la mas corta.
4. **`conceptos` vacio**: la pregunta no cuenta como reescrita.
5. **R6**: un `distractors` con entrada para la letra correcta es fallo directo.
6. **Alertas del guardian**: "N respuestas apuntan a OTRO TEXTO" es esperado tras
   reescribir N. Items desaparecidos o cambio de tamano del banco, no.
7. **El orden del array importa**: la rotacion de bloques del simulacro usa la
   posicion. Un script que aplique un lote debe abortar si el orden cambia.
