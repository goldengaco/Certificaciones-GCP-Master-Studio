---
description: Mide el estado real del banco (cobertura, contrato, adversario, guardian)
---

Mide el estado del proyecto y NO lo describas de memoria. Ejecuta:

`cd plataforma_entrenamiento_master && bash ../.agents/estado.sh`

Pega la salida literal y luego interpretala asi:

- **reescritas**: cuenta items con `conceptos` no vacio. Es la unica metrica de
  avance real. Un banco "de 300" con 25 reescritas tiene 25 preguntas
  practicables, no 300.
- **contrato**: tiene que dar 0 fallos.
- **adversario ciego**: ninguna heuristica puede pasar del 45%. Mide si se
  aprueba el simulador sin saber Google Cloud. Es el indicador mas importante
  del proyecto: si sube, el banco se volvio adivinable.
- **guardian**: tras reescribir un lote es ESPERADO que diga "N respuestas
  correctas apuntan a OTRO TEXTO" (N = tamano del lote). NO es esperado, y hay
  que parar a investigar: items desaparecidos, cambio de tamano del banco,
  estructura de opciones alterada o dominios reasignados.

Termina diciendo cual es el siguiente trabajo por urgencia: siempre la
certificacion con menos preguntas reescritas.
