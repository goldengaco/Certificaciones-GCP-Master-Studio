# Convertir una pregunta a "elige 2"

## Por qué

El examen real de Google mezcla preguntas de respuesta única con preguntas de
"Choose 2" / "Choose 3". Son las que más gente falla, porque exigen un músculo
distinto: no basta con encontrar la mejor opción, hay que reconocer **dos pasos
que se necesitan mutuamente** y descartar dos que parecen buenos.

Hoy el banco tiene casi ninguna. Practicando solo respuesta única se llega al
examen sin haber entrenado nunca ese formato.

## La regla que no se puede romper

**La clave original sigue siendo correcta.** Solo se AÑADE una segunda
respuesta válida; jamás se sustituye la que ya estaba verificada. El script
`convertir_multiseleccion.js` aborta el lote entero si el nuevo `correct` no
contiene la letra original.

## Cómo se convierte, paso a paso

Partes de una pregunta con 4 opciones y una respuesta correcta.

1. **Reescribe el enunciado** para que pida dos cosas que van juntas.
   No es "menciona dos beneficios": es **una tarea que de verdad necesita dos
   pasos**. Termina con `(Elige 2.)` en español o `(Choose 2.)` en inglés.

   Malo:  "¿Cuáles son dos ventajas de BigQuery?"
   Bueno: "Necesitas que el equipo de finanzas consulte los costes por
          etiqueta en SQL. ¿Qué dos pasos de configuración debes completar?"

2. **Convierte uno de los distractores en la segunda respuesta correcta**, o
   añade una opción `E`. La segunda correcta debe ser un paso **necesario**:
   sin él la tarea no se completa. No un segundo beneficio genérico.

3. **Añade una opción `E`** para llegar a 5 opciones, como en el examen real.

4. **Los tres distractores restantes** siguen las reglas de siempre: misma
   longitud, misma forma, cada uno falla por una razón concreta que escribes en
   `distractors`. El clásico bueno aquí es **el paso que suena necesario pero
   pertenece a otro flujo**, o **el paso correcto en el orden equivocado**.

5. **Longitud:** el promedio de las dos correctas debe quedar entre 0.85x y
   1.15x del promedio de las tres incorrectas. Si las dos correctas son las
   más largas, se adivina igual que antes.

## Formato de salida

```json
[{
  "id": "CDL-D1-007",
  "scenario": "…enunciado reescrito que pide dos cosas… (Elige 2.)",
  "correct": ["B", "E"],
  "expectedSelectCount": 2,
  "options":     { "A": "…", "C": "…", "D": "…", "E": "…" },
  "distractors": { "A": "…", "C": "…", "D": "…" },
  "explanation": "…por qué hacen falta las dos y en qué orden…"
}]
```

`options` lleva **solo las letras que escribes**: los tres distractores y la
`E` nueva. La letra de la clave original NO aparece ahí — su texto no se toca.
`distractors` lleva una razón por cada letra incorrecta.

## Comprobación

```
node tests/qa/convertir_multiseleccion.js data/cert_XXX.js <parche.json>
```
`CONVERSIÓN RECHAZADA` significa que no se escribió nada: corrige y repite.
