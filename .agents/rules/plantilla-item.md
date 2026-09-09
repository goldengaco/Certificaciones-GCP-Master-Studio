# Plantilla de un ítem del banco

Copia el esquema de una pregunta **ya reescrita** (`ACE-D1-001`, `CDL-IA-001`,
`PCA-D1-001`), nunca de una antigua: a las antiguas les falta `conceptos` y el
lote se rechaza. Compruébalo con:

```bash
node -e "global.window=global; eval(require('fs').readFileSync('data/cert_ace.js','utf8'));
console.log(JSON.stringify(global.GCP_ACE_QUESTIONS.find(q=>q.id==='ACE-D1-001'),null,2))"
```

```jsonc
{
  "id": "ACE-D4-001",              // no lo cambies nunca: es la trazabilidad
  "certId": "ace",                 // cdl | ace | pca
  "domainId": "ACE-D4",            // manda este campo, NO el prefijo del id
  "domainName": "4. ...",          // copia el de otra del mismo dominio
  "subsectionId": "ACE-4.2",       // tiene que existir en data/taxonomia.js
  "subsectionName": "...",
  "conceptos": ["Cloud Monitoring", "Alerting policy", "Notification channel"],
  "title": "...",                  // descriptivo, no es lo que ve quien estudia
  "scenario": "...",               // ACE 40-90 palabras. CDL 40-80 sin CLI. PCA 70-150.
                                   // DEBE llevar una restricción cuantificada (R3)
  "options": [
    { "letter": "A", "text": "..." },
    { "letter": "B", "text": "..." },
    { "letter": "C", "text": "..." },
    { "letter": "D", "text": "..." }
  ],
  "correct": "C",                  // string si es única; array si es multi-select
  "isMultiSelect": false,          // true -> 5 opciones, correct array, "(Choose 2.)"
  "expectedSelectCount": null,     // 2 o 3 en multi-select; debe cuadrar con correct.length
  "explanation": "...",            // el detalle técnico va AQUÍ, no en options[].text
  "distractors": {                 // una entrada por cada incorrecta, ninguna sobre la clave
    "A": "por qué falla EN ESTE escenario (coste, alcance, cuota, permisos, RPO...)",
    "B": "...",
    "D": "..."
  },
  "officialDocUrl": "https://cloud.google.com/...",  // la página debe DECIR lo que afirmas
  "difficulty": "intermediate",
  "blockId": "BLOCK-1"
}
```

## Las tres que más lotes cuestan

1. **Longitud**: ordena las longitudes de las opciones; la clave debe quedar en
   posición **2 o 3**, ni la más larga ni la más corta, y entre la mayor y la menor
   del ítem ≤25 %. Ajusta **podando**, nunca alargando las incorrectas.
2. **`conceptos`**: array no vacío, siempre.
3. **La URL**: `curl -L` y comprueba que la página dice lo que afirma la explicación.

Antes de aplicar nada:

```bash
node tests/qa/verificar_borrador.js <borrador.json> <cert> --urls
```
