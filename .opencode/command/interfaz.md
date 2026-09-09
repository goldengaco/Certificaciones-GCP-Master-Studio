---
description: Reglas y verificacion de la interfaz (tema Bloque) antes de tocar estilos
---

La interfaz usa el tema "Bloque": papel claro, tinta negra, bordes de 2px,
radios a 0, azul #2D4BFF como unico acento de seleccion, sin fuentes de CDN
(la plataforma funciona sin internet).

Vive en `css/tema-bloque.css`, una capa que se carga DESPUES de `styles.css` y
redefine tokens y componentes. **`styles.css` no se modifica.** Para revertir el
redisenio basta con quitar el `<link>` de `tema-bloque.css` en `index.html`.

Dos trampas de especificidad, y sin ellas un override "correcto" no se aplica:

- `styles.css` usa `!important` en `.btn-primary`, `.btn-accent` y `.btn-warning`.
- La insignia de letra de las opciones se define con especificidad de id:
  `#view-exam .option-letter-badge`. Hay que repetir el selector con id.

Despues de CUALQUIER cambio de interfaz, con la plataforma servida de verdad
(los tests levantan su propio servidor) y `playwright-core` instalado:

```
node tests/qa/test_examen_ux.mjs
node tests/qa/test_bloques.mjs
```

Ambos deben dar 0 fallos y 0 errores de consola. El primero cubre teclado, foco,
multi-seleccion y que el numero de pregunta grande AVANZA con la pregunta: si se
queda clavado, le miente a quien estudia.

Tarea concreta: $ARGUMENTS
