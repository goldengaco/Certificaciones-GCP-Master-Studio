# GCP Cert Studio — instrucciones para agentes

Plataforma local de entrenamiento para las certificaciones de Google Cloud
(CDL, ACE, PCA). **Hay una persona real preparándose con esto para un examen
que cuesta 99–200 USD.** Un banco de preguntas que se deja adivinar no es
neutro: le dice que está listo cuando no lo está.

## La única regla que importa

**El test es la verdad, no tu impresión del trabajo.**

```bash
cd plataforma_entrenamiento_master
node tests/qa/adversario.js            # ¿se puede aprobar sin saber GCP?
node tests/qa/test_fidelidad_banco.js  # ¿pasa el contrato?
node tests/qa/guardian.js --verificar  # ¿rompí algo sin querer?
node tests/qa/test_examen_ux.mjs       # ¿se puede responder con el teclado?
node tests/qa/test_bloques.mjs         # ¿el simulacro tiene tamaño de examen?
```

Medido el 2026-09-03: **0 fallos de contrato**. `test_fidelidad_banco.js` dice
"el banco supera todas las barreras de fidelidad", y ninguna heurística ciega
pasa del 45 %: ACE 34,5 %, CDL 35,3 %, PCA 40,8 %. Las tres certificaciones
están en 0 FALLA.

El test da además **0 avisos**, pero eso pide una explicación honesta: el aviso
de "distractores que no nombran servicios" no se cerró reescribiendo el banco,
sino **corrigiendo el medidor**, que estaba desactualizado, solo entendía marcas
comerciales y estaba escrito en inglés mientras el banco de CDL está en español.
El razonamiento completo está en `GATE_STATUS.md`. Esa comprobación es ahora
informativa; quien vigila esa fuga es H5 del adversario.

Nada de esto significa que el trabajo esté hecho: **el banco sigue a medio
reescribir**. Ninguna afirmación de avance vale sin las salidas pegadas.

**El sesgo de longitud está resuelto** (H1 al 24-27 %, era 72/85/94 %), y con
él H7 y H8. Lo que queda no es la forma de las opciones sino su contenido:
demasiados distractores que no nombran ningún servicio y se descartan por
vagos, no por saber.

## Qué está roto y qué no

| Ya resuelto — no rehacer | Roto — el trabajo |
|---|---|
| Accesibilidad WCAG AA, axe en 0 | **Reescritura por lotes**: ACE 175/300 (faltan lotes 8-12), PCA 25/300 |
| Lighthouse 99/100/100/100 | |
| Sesgo de longitud (H1 al 24-27 %) | Asimetría de servicios en CDL: 17,4 % (informativo, H5 en 24,5 %) |
| Adversario ciego por debajo del 45 % | |
| Pesos de dominio de CDL (D3 al 17,6 %) | |
| **Las tres certificaciones pasan el contrato (0 FALLOS)** | |
| Ciclo de clave A→B→C→D (24 %) | |
| Case studies migrados a los vigentes | |
| Rotación de bloques según el banco real | |
| Responder con teclado en modo Examen | |

## Si acabas de llegar

```bash
bash .agents/estado.sh        # el estado medido AHORA (los documentos caducan)
```

Después lee **`.agents/HANDOFF.md`**: qué queda, el procedimiento por lote y las
trampas que ya han costado lotes enteros (la de longitud, sobre todo).

Y antes de aplicar cualquier borrador al banco, pásale la puerta barata:

```bash
node tests/qa/verificar_borrador.js <borrador.json> <cdl|ace|pca> --urls
```

## Documentos, por orden de precedencia

0. `.agents/HANDOFF.md` — plano de continuación: cómo trabajar sin repetir errores
0b. `.agents/rules/plantilla-item.md` — el esquema de un ítem, campo a campo
0c. `.agents/PROMPT-ARRANQUE.md` — prompts listos para arrancar una sesión nueva
1. `.agents/rules/00-contrato-banco.md` — las reglas duras
1b. `.agents/rules/01-medir-antes-de-afirmar.md` — tabla afirmación → comando
2. `para-gemini/TAXONOMIA_Y_DIAGNOSTICO.md` — secciones, subsecciones y pesos oficiales
3. `para-gemini/INSTRUCCIONES.md` — método de detección (§2) y de corrección (§3)
4. `para-gemini/progreso.html` — dónde se reporta con evidencia

Todo lo que hay en `plataforma_entrenamiento_master/docs/_historico/` está
**obsoleto y contiene números falsos**. No lo ejecutes.

## El flujo de trabajo

Usa el workflow `/lote` para cada tanda de 25 preguntas. Se autoverifica: mide
antes, reescribe, mide después, y **revierte solo** si el lote no supera las
puertas. No necesitas preguntar entre lote y lote.

## Alcance recomendado

El objetivo de 900 preguntas es arbitrario. El examen real tiene 50–60 y el
criterio de "listo" pide 3 simulacros que no se repitan: **180 preguntas
excelentes de UNA certificación** bastan, y son 7 lotes en vez de 36.
Empieza por ACE: sus pesos ya están correctos y no le faltan áreas.

Van **150** de esas 180 en ACE (lotes 1-6). Con ellas el simulacro ya reparte
**3 bloques de 50** — exactamente los tres simulacros sin repetición que pide
el criterio de "listo". Los lotes 7 y 8 llevan a 200 y dan margen.

## Tema visual "Bloque" (2026-09-08)

La interfaz ya NO usa el tema oscuro original. `css/tema-bloque.css` es una
capa que se carga despues de `styles.css` y redefine tokens y componentes:
papel claro, tinta negra, bordes de 2px, radios a 0, azul #2D4BFF como acento
de seleccion. `styles.css` no se modifico; para volver atras basta con quitar
el `<link>` de `tema-bloque.css` en `index.html`.

Si vas a tocar estilos, lee antes las trampas anotadas en
`.agents/orchestrator_ace/GATE_STATUS.md` (seccion del rediseno): hay reglas
con `!important` y con especificidad de id en `styles.css` que hacen que un
override "correcto" no llegue a aplicarse.

Contraste medido tras el cambio: 0 elementos por debajo de WCAG AA en todas
las vistas (auditoria automatizada con Playwright sobre color computado
contra el fondo efectivo). Cualquier cambio de paleta debe repetir esa
medicion, no confiar en la vista previa.
