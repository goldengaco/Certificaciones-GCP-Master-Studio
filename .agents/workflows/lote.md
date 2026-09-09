---
description: Reescribe un lote de 25 preguntas y se autoverifica. Revierte solo si no supera las puertas.
---

# /lote — reescritura autoverificada de 25 preguntas

Uso: `/lote ace ACE-D1-001..ACE-D1-025`
Argumentos: la certificación (`cdl|ace|pca`) y el rango de IDs.

Este workflow **no pide permiso entre pasos**. Se detiene solo si el lote es
rechazado dos veces seguidas, o si termina.

---

## Paso 1 — Contexto

Lee, si no los tienes ya en contexto:
- `.agents/rules/00-contrato-banco.md`
- `para-gemini/INSTRUCCIONES.md` secciones 2 y 3
- `plataforma_entrenamiento_master/data/taxonomia.js` (subsección y conceptos del lote)

## Paso 2 — Punto de retorno

```bash
cd plataforma_entrenamiento_master
git add -A && git commit -m "checkpoint antes de <RANGO>" --allow-empty
node tests/qa/guardian.js --sello
node tests/qa/medir_lote.js <CERT> <RANGO> --guardar /tmp/base_lote.json
node tests/qa/adversario.js <CERT>
```

Anota el techo del adversario: al final del lote no puede haber subido.

Anota el commit: si el lote se rechaza dos veces, vuelves aquí con
`git reset --hard <commit>`.

## Paso 3 — Reescritura

Para **cada** ítem del rango, en este orden:

1. **Mide** las cuatro opciones. Si el rango supera el 25 % de la mayor, está fuera.
2. **Poda la correcta.** Todo lo que sea explicación y no decisión se va a
   `explanation`: paréntesis aclaratorios, cifras de rendimiento, el "porque".
   La opción se queda con **la acción y su parámetro clave**.
3. **Eleva las incorrectas.** Cada una pasa a ser un servicio o configuración
   real de GCP que **casi** resuelve el problema (regla R2).
4. **Nombra el fallo** en `distractors[X]`, citando la restricción del escenario
   que la descarta.
5. **Comprueba la restricción.** Si el escenario no tiene una que descarte las
   tres, reescribe también el escenario (regla R3).
6. **Verifica la respuesta correcta** contra la documentación oficial y pon en
   `officialDocUrl` la página que la respalda (regla R5).
7. **Etiqueta**: `sectionId`, `subsectionId` y `conceptos` desde `taxonomia.js`.
8. **Tapa y relee**: oculta el escenario. Si aún aciertas, vuelve al paso 3.

Convierte a multi-select los ítems cuyo enunciado pida dos o tres cosas
(regla R4): cinco opciones, `expectedSelectCount`, "Elige 2" en el texto.

## Paso 4 — Puerta automática

```bash
node tests/qa/medir_lote.js <CERT> <RANGO> --base /tmp/base_lote.json
```

- **Sale 0 → lote aceptado.** Sigue al paso 5.
- **Sale 1 → lote rechazado.** Lee qué puerta falló:
  - *"RELLENASTE las incorrectas"*: igualaste longitudes añadiendo paja.
    Vuelve al paso 3 y **poda la correcta** en vez de engordar las otras.
  - *(a) o (b) por encima del máximo*: la respuesta sigue siendo adivinable.
  - *fuera del rango ±25 %*: longitudes desiguales.
  - *sin subsectionId / conceptos*: falta etiquetado.

  Corrige y repite el paso 4. **A la segunda vez que se rechace**, revierte con
  `git reset --hard <commit del paso 2>` y para: informa qué te bloqueó.

## Paso 5 — No romper nada

```bash
node tests/qa/guardian.js --verificar --permitir-texto
node tests/qa/adversario.js <CERT>
node tests/qa/test_fidelidad_banco.js
```

El guardián no puede dar ninguna ALERTA. El adversario no puede tener ninguna
heurística más alta que al empezar: si igualaste longitudes pero H7 (densidad
técnica) o H8 (eco del escenario) subieron, cambiaste una fuga por otra.

Ninguna métrica global puede **empeorar** respecto al arranque. El número total
de fallos debe bajar o quedarse igual, nunca subir.

Comprueba además que no duplicaste datos al escribir el archivo:

```bash
grep -c '"certId"' data/cert_<CERT>.js     # tiene que dar exactamente 300
```

## Paso 6 — Cerrar

```bash
git add -A && git commit -m "lote <RANGO>: (a) X%->Y%, (b) X%->Y%, N fallos globales"
```

Actualiza `para-gemini/progreso.html`: la columna "ahora" de las métricas que
cambiaron, pegando en `evidencia` **la salida literal** de los comandos.

## Paso 7 — Informe

Cuatro bloques, sin prosa alrededor:

1. Salida de `medir_lote.js` con `--base`
2. Salida de `adversario.js <CERT>` completa
3. Salida de `guardian.js --verificar` y de `test_fidelidad_banco.js`
4. **Dos** ítems del lote pegados enteros, con la longitud de cada opción y la
   URL que respalda la respuesta correcta

## Paso 8 — Continuar

Si quedan ítems por reescribir en esta certificación, arranca el siguiente lote
sin preguntar. Si el banco llegó a 0 fallos, para e infórmalo.
