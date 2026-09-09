---
trigger: always_on
---

# Contrato del banco de preguntas

## Objetivo

Que **no se pueda aprobar el simulador sin saber Google Cloud**. Todo lo demás
es secundario. Si dudas entre terminar rápido y que sirva, elige que sirva.

## R1 — Las cuatro opciones miden lo mismo

Entre la más larga y la más corta de una pregunta no puede haber más del **25 %**
de diferencia. Si la correcta necesita nombrar un flag, las incorrectas también
nombran el suyo. El detalle técnico va en `explanation`, nunca en `options[].text`.

## R2 — Todo distractor es una decisión defendible

Cada opción incorrecta debe (1) nombrar un servicio o configuración **real** de
GCP, (2) resolver el problema **parcialmente**, y (3) fallar por una razón
**nombrable**: costo, latencia, alcance regional, cuota, permisos, RPO/RTO, tipo
de carga o SLA. `distractors[X]` explica por qué falla **en ese escenario**, no
qué es el servicio.

Prohibido: chistes, procesos manuales evidentes, servicios de otra categoría.
Ejemplos reales del banco que NO se admiten: *"pedir por correo que prometan no
borrar nada"*, *"instalar cableado físico hasta el centro de datos"*, *"ejecutar
Cloud Spanner en el hardware de cada tractor"*.

## R3 — El escenario tiene una restricción que descarta

Sin una restricción cuantificada (latencia máxima, RPO, presupuesto, normativa,
cero downtime, mínimo esfuerzo operativo) varias opciones son válidas y la
pregunta no mide nada. Si no la tiene, reescribe también el escenario.

Longitudes: CDL 40–80 palabras (negocio, **sin sintaxis de CLI**), ACE 40–90
(táctico, con comandos reales), PCA 70–150 (contexto de negocio + restricciones).

## R4 — Selección múltiple

Entre el 12 % y el 20 % del banco: `isMultiSelect: true`, `expectedSelectCount`
2 o 3, `correct` con exactamente esa cantidad de letras, **cinco** opciones, y el
enunciado dice "Elige 2". Toda pregunta que pida dos cosas **tiene** que serlo.

## R5 — Verificación factual

Cada afirmación de `explanation` se respalda con `officialDocUrl`, y esa página
tiene que **decir lo que la explicación afirma**. Si no la encuentras, cambia la
afirmación, no el enlace. No inventes URLs ni apuntes a la portada de un producto.

Dos errores reales cometidos aquí: proponer un *Application Load Balancer* para
tráfico UDP (solo lo soportan los *Passthrough Network Load Balancers*), y marcar
`nam3` de Spanner como inexistente cuando **sí existe**.

## R6 — Esquema

Obligatorios en cada ítem: `sectionId`, `subsectionId` y `conceptos` según
`data/taxonomia.js`. Eliminados para siempre: `options[].isTrap`,
`options[].trapType` y `distractors[<letra correcta>]`.

## Trampas prohibidas — invalidan el trabajo completo

- **Igualar longitudes añadiendo relleno a las incorrectas.** Se igualan
  **podando la correcta**. Hay un detector: si (a) baja y (b) no, se rechaza.
- Bajar cualquier valor de `BARRERAS` en `tests/qa/test_fidelidad_banco.js`.
  Solo se pueden endurecer.
- Borrar, comentar o saltar una prueba que falla.
- Fabricar multi-select partiendo una respuesta correcta en dos mitades.
- Cambiar el **contenido técnico** de una respuesta correcta que ya es exacta:
  se reescribe su redacción, no su fondo.
- Declarar avance sin pegar la salida del comando.

## Comandos

```bash
cd plataforma_entrenamiento_master
node tests/qa/test_fidelidad_banco.js                          # las 900
node tests/qa/medir_lote.js <cert> <ID..ID> --guardar /tmp/b.json   # antes
node tests/qa/medir_lote.js <cert> <ID..ID> --base /tmp/b.json      # después
python servidor.py            # el único servidor válido para medir
```

Nunca midas con `python -m http.server`: sin caché ni gzip, Lighthouse penaliza
unos 3.000 KiB que no son culpa de la aplicación.
