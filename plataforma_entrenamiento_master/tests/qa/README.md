# Suite de calidad

Cinco suites. Una sola orden las corre todas y da un veredicto único:

```bash
python tests/qa/ejecutar_qa.py
```

Levanta `servidor.py` en un puerto libre, ejecuta lo que le pidas y lo apaga.
Sale con código 1 si algo falla, así que sirve tal cual en un hook de git o en CI.

| Archivo | Qué protege | Necesita navegador |
|---|---|---|
| `test_fidelidad_banco.js` | Que **no se pueda aprobar sin saber GCP** | no |
| `test_contraste.py` | Contraste WCAG AA de todo el CSS, en ambos temas | no |
| `test_humo.mjs` | Que la plataforma siga funcionando | sí |
| `test_a11y.mjs` | axe-core en todas las vistas, modales y examen en curso | sí |
| `test_lighthouse.mjs` | Puertas de Lighthouse sobre la mediana de 3 pasadas | sí |

## Preparación (una vez)

```bash
npm install --no-save playwright-core axe-core lighthouse chrome-launcher
npx playwright install chromium
```

Si Playwright no encuentra Chrome, exporta la ruta:
`CHROME_PATH=/ruta/a/chrome python tests/qa/ejecutar_qa.py`

## Por separado

```bash
python tests/qa/ejecutar_qa.py banco        # solo el banco
python tests/qa/ejecutar_qa.py contraste a11y
node   tests/qa/test_fidelidad_banco.js
node   tests/qa/test_lighthouse.mjs http://127.0.0.1:8989/index.html 5
```

## Tres cosas que conviene saber

**Sirve siempre con `servidor.py`.** Con `python -m http.server` no hay caché ni
gzip, y Lighthouse penaliza ~3.000 KiB que no son culpa de la aplicación. Una
medición hecha con el servidor equivocado no vale para comparar.

**Lighthouse varía.** Entre pasadas en la misma máquina se mueve varios puntos.
Por eso se evalúa la mediana de tres. Un número suelto no distingue una mejora
real del ruido.

**axe-core solo ve lo que está pintado.** Por eso `test_a11y.mjs` recorre las
siete vistas, abre los modales, arranca un examen y envía una respuesta en modo
estudio: los fallos de esta plataforma no estaban en la portada, sino en el badge
que solo aparece al fallar y en la tabla que se queda sin filas. Auditar solo la
carga inicial da un 100 falso — pasó exactamente eso durante la auditoría.

## Las barreras solo se endurecen

`test_fidelidad_banco.js` empieza con un bloque `BARRERAS`. Esos números son el
contrato de calidad del producto. Subirlos (más exigente) está bien. Bajarlos para
que pase una entrega es falsificar el resultado; si de verdad una barrera está mal
calibrada, argumenta por qué en el commit.

Lo mismo con `PESOS_OFICIALES`: son los pesos de las guías de examen de Google.
Se actualizan **cuando Google cambia la guía**, comprobándolo en la fuente, nunca
para que encaje con lo que ya hay en el banco.
