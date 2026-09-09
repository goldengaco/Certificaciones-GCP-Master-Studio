---
trigger: always_on
---

# Medir antes de afirmar

## El fallo que esta regla evita

Una auditoría previa leyó las 900 preguntas de este banco, una por una, y
concluyó que el simulador era **"fiel"**. Listó como **fortaleza** el *"balance
A/B/C/D perfecto"*. Dijo *"21 % de CDL exige comandos CLI"* cuando era **1
pregunta de 300**. Dijo *"42 caseStudySection rotos"* cuando eran **123**. Dijo
*"1 duplicado"* cuando eran **0**. Marcó `nam3` de Cloud Spanner como error
inventado cuando **existe**.

Ninguno de esos errores fue por descuido. Fueron por método: **afirmar desde la
lectura en vez de desde la medición.**

Y hay un segundo fallo, gemelo: **el daño silencioso**. Un script duplicó las
300 preguntas dentro del fichero y la aplicación siguió cargando perfectamente.
Nadie lo habría notado sin contar los marcadores.

## Las dos reglas

**1. Antes de afirmar un número sobre el repositorio, ejecútalo.**
No estimes, no recuerdes, no lo copies de un informe anterior. La tabla de abajo
da el comando exacto para cada tipo de afirmación.

**2. Después de cualquier edición masiva, demuestra que no rompiste otra cosa.**
`node tests/qa/guardian.js --sello` antes, `--verificar` después.

## Tabla: afirmación → comando que la decide

| Si vas a decir… | Ejecuta |
|---|---|
| "el banco ya no se puede adivinar" | `node tests/qa/adversario.js` |
| "arreglé el lote" | `node tests/qa/medir_lote.js <cert> <ID..ID> --base /tmp/base.json` |
| "el banco está listo" | `node tests/qa/test_fidelidad_banco.js` |
| "no rompí nada" | `node tests/qa/guardian.js --verificar` |
| "hay N preguntas de X" | `node -e "global.window={};require('./data/cert_X.js');console.log(global.window.GCP_X_QUESTIONS.length)"` |
| "los pesos coinciden con Google" | leer `data/taxonomia.js` **y** reabrir el PDF oficial |
| "los case studies son los vigentes" | `grep -c "mountkirk\|terramearth\|helicopter" data/cert_pca.js` → debe dar 0 |
| "no hay datos duplicados" | `grep -c '"certId"' data/cert_X.js` → debe dar exactamente 300 |
| "el esquema está limpio" | `grep -c "isTrap\|trapType" data/cert_*.js` → 0 |
| "la app sigue funcionando" | `python servidor.py --dev` y abrirla |
| "esta afirmación técnica es correcta" | abrir la URL oficial y leerla |

Si una afirmación tuya no tiene comando en esta tabla, **no es una afirmación:
es una impresión.** Dilo como impresión o no lo digas.

## El examinador ciego es el juez final

`adversario.js` prueba diez estrategias que **no leen para comprender**: la
opción más larga, la más corta, la que nombra más servicios, la única con una
cifra, la de más densidad técnica, la que más repite palabras del escenario, la
que no contiene absolutos, la del verbo de configurar, la letra fija, el ciclo.
Más el voto por mayoría de todas.

**Ninguna puede superar el 45 %.** El azar da 25 %.

Esto importa porque **arreglar la longitud no basta**. Medido hoy en ACE: con H1
al 81,8 %, H7 (densidad técnica) está al **66,9 %** y H8 (eco del escenario) al
**64,8 %**. Si solo igualas longitudes, el banco sigue siendo adivinable por dos
vías distintas.

Cuando reescribas una opción correcta, vigila que no se convierta en:
- la única con backticks, guiones o nombres con punto → **H7**
- la que repite el vocabulario del escenario → **H8**
- la única que menciona un servicio concreto → **H5**
- la única con una cifra → **H6**

La respuesta correcta debe distinguirse **por lo que afirma**, no por cómo se ve.

## Cómo se cierra cualquier trabajo

```bash
cd plataforma_entrenamiento_master
node tests/qa/guardian.js --verificar      # ¿rompí algo sin querer?
node tests/qa/adversario.js                # ¿se puede adivinar?
node tests/qa/test_fidelidad_banco.js      # ¿pasa el contrato?
git status --porcelain                     # ¿qué toqué de verdad?
```

Las cuatro salidas van pegadas en el informe, literales. Un avance sin esas
salidas cuenta como no hecho, aunque lo declares terminado.

## Qué NO hacer nunca

- Repetir un número de un informe anterior sin volver a medirlo. Los informes
  envejecen; el repositorio es la verdad.
- Declarar una fase cerrada citando una suite que no mide lo que la fase arregla.
  "Tests 100 % verdes" es falso si la suite verde no incluía fidelidad.
- Presentar una estadística perfecta como logro. 75/75/75/75 exacto, 300/300 con
  comando, 900/900 con el mismo formato: eso es la huella de un generador. Cuando
  veas un número redondo, pregúntate qué regla mecánica lo produjo.
- "Corregir" algo que no verificaste que estuviera mal.
