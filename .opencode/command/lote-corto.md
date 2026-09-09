---
description: Reescribe 5 preguntas del banco escribiendo de una en una. Uso -- /lote-corto pca PCA-D3-001 PCA-D3-005
---

Reescribe estas preguntas: $ARGUMENTS   (formato: <cert> <ID-primero> <ID-ultimo>)

Trabaja desde `plataforma_entrenamiento_master`.

## REGLA 1 — No leas archivos grandes. Nunca.

Se te acaba el presupuesto leyendo y no llegas a escribir. Prohibido abrir
enteros: `data/cert_*.js` (1 MB), `data/taxonomia.js` (20 KB), `index.html`,
`css/*`. Saca solo lo que necesitas, con comandos acotados:

- Las preguntas originales de tu rango (solo id y tema, no el texto entero):
  `node -e "require('./data/cert_pca.js'); console.log(JSON.stringify(GCP_PCA_QUESTIONS.filter(q=>['PCA-D3-001','PCA-D3-002'].includes(q.id)).map(q=>({id:q.id,subtopic:q.subtopic})),null,1))"`
- Un ejemplo de calidad ya aceptado (UNO, no varios):
  `node -e "require('./data/cert_pca.js'); console.log(JSON.stringify(GCP_PCA_QUESTIONS.find(q=>q.id==='PCA-D2-001'),null,1))"`
- Las subsecciones de TU dominio, no la taxonomia entera:
  `grep -A3 '"PCA-3' data/taxonomia.js | head -40`

Con eso tienes todo. No hace falta leer nada mas.

## REGLA 2 — Escribe desde el primer minuto, de una en una

No planifiques las cinco y luego escribas. Haz esto:

1. Crea `lotes_nuevos/<nombre>.json` con un array que contenga **la primera
   pregunta** ya terminada.
2. Anade la segunda al array. Luego la tercera. Y asi.
3. Despues de cada una, sigue. No te pares a resumir ni a explicar.

Si te quedas sin presupuesto a mitad, el archivo con 3 preguntas buenas sirve.
Un plan perfecto sin archivo no sirve para nada.

## REGLA 3 — El esquema de cada pregunta

```json
{
  "id": "<el original>", "certId": "pca", "domainId": "<el original>",
  "domainName": "<el original>", "subsectionId": "PCA-3.x",
  "conceptos": ["tres", "o cuatro", "conceptos"],
  "scenario": "70-150 palabras, en ingles, con UNA restriccion con numero (RPO, latencia p99, presupuesto, cuota, regiones) que decida la respuesta",
  "options": [
    {"letter":"A","text":"..."}, {"letter":"B","text":"..."},
    {"letter":"C","text":"..."}, {"letter":"D","text":"..."}
  ],
  "correct": "B",
  "isMultiSelect": false, "expectedSelectCount": 1,
  "explanation": "por que la correcta lo es",
  "distractors": {"A":"por que es tentadora y que la descarta","C":"...","D":"..."},
  "officialDocUrl": "https://cloud.google.com/...",
  "difficulty": "advanced"
}
```

Cuatro cosas que son fallo automatico:
- `conceptos` vacio.
- Una entrada en `distractors` para la letra **correcta** (solo van las incorrectas).
- Que la correcta sea la opcion **mas larga** o la **mas corta**. Ponla en
  posicion 2 o 3 de 4 por numero de caracteres, y que no **empate** en el maximo.
- Distractores absurdos. Cada incorrecta debe ser lo que elegiria un arquitecto
  competente al que le falta un dato. Escribe las cuatro con longitud parecida
  (menos de 25% de diferencia entre la mas larga y la mas corta).

## REGLA 4 — Cierra pasando la puerta

`node tests/qa/verificar_borrador.js lotes_nuevos/<nombre>.json <cert>`

Si falla, corrige el JSON. **No modifiques el verificador ni ningun test**: esas
puertas existen para que no se pueda aprobar el simulador sin saber Google Cloud.

**Nunca escribas en `data/cert_*.js`.** Tu entregable es el JSON y nada mas.
