# EMPIEZA AQUÍ

Este es el primer archivo que hay que leer. Los demás no sirven sin él.

---

## 1. Hay once documentos de especificación en este repositorio y se contradicen

Antes de escribir una sola línea: **la mayoría de los documentos que hay en este
repositorio están obsoletos y contienen números equivocados.** Si abres uno al
azar y ejecutas lo que dice, vas a hacer trabajo incorrecto con apariencia de
trabajo correcto.

### Orden de precedencia — sin excepciones

| Prioridad | Documento | Papel |
|---|---|---|
| **1** | `para-gemini/00_EMPIEZA_AQUI.md` | Este archivo. Manda sobre todo lo demás. |
| **2** | `para-gemini/TAXONOMIA_Y_DIAGNOSTICO.md` | Fuente única de secciones, subsecciones y pesos oficiales. |
| **3** | `para-gemini/INSTRUCCIONES.md` | El plan de trabajo: 32 puestos, 6 fases, método de detección y corrección. |
| **4** | `para-gemini/progreso.html` | Dónde se reporta el avance con evidencia. |
| **5** | `plataforma_entrenamiento_master/tests/qa/README.md` | Cómo se verifica. |

**Todo lo demás es histórico.** Se puede leer como contexto, nunca como
instrucción.

### Documentos obsoletos, y qué tienen mal exactamente

Estos no se ejecutan. Si algo de ellos contradice a los cinco de arriba, ganan
los de arriba.

| Documento | Errores comprobados |
|---|---|
| `AUDITORIA_CALIDAD.md` (raíz) | Lista el **«balance A/B/C/D perfecto» como fortaleza** — es la firma de un generador, no una virtud. Marca `nam3` de Spanner como error factual P0: **`nam3` existe**, es una configuración multirregión documentada (us-east4 + us-east1 lectura-escritura, us-central1 testigo); "corregirla" **introduce** un error. Dice "tests 100 % verdes" citando una suite que nunca midió fidelidad: la real da **27 fallos**. Dice "dominios 100 % alineados": CDL tiene 4 y la guía oficial tiene 6. Llama "case studies reales" a tres que Google ya retiró. |
| `docs/00_INDICE_MAESTRO_DE_MEJORAS.md` | Roadmap de 5 fases construido sobre esa auditoría. Sustituido por las 6 fases de `INSTRUCCIONES.md`. |
| `docs/01_GUIA_MEJORA_BANCO_PREGUNTAS_Y_CONTENIDO.md` | Parte de los 13 errores P0, al menos uno falso. **No menciona el sesgo de longitud**, que es el defecto que invalida el producto. |
| `docs/05_REVISION_PREGUNTAS_DIFICULTAD_E_INTERACCION.md` | "21 % de CDL exige comandos CLI" → es **1 pregunta de 300 (0,3 %)**. "100 % de los casos de estudio en D1 (72/72)" → hay **123 repartidos en los seis dominios** (D1=72, D3=20, D4=10, D6=8, D2=7, D5=6). "42 `caseStudySection` rotos" → son **123**. "1 duplicado" → son **0**. |
| `docs/02`, `docs/03`, `docs/04` | Popover API, `<dialog>`, Temporal API, Container Queries. Son mejoras de un producto que funciona. Este todavía no funciona. Fase 3, no antes. |
| `docs/ESPECIFICACION_BANCO_PREGUNTAS.md` | Versión anterior, más corta. Sustituida por `para-gemini/INSTRUCCIONES.md`. |
| `docs/ESPECIFICACION_Y_RUBRICA_PARA_EVALUACION_IA.md`, `docs/ANALISIS_Y_RECOMENDACIONES_SISTEMA.md`, `docs/PLAN_MAESTRO_CORRECCION_Y_EJECUCION.md` | Se solapan entre sí y con los anteriores. Contexto, no instrucción. |

**Primera tarea del primer día:** mover todos esos a
`plataforma_entrenamiento_master/docs/_historico/` y crear ahí un `LEEME.md` de
una línea: *"Documentos superados por `para-gemini/`. No ejecutar."* Así nadie
—ni tú en la siguiente sesión— vuelve a abrirlos por error.

---

## 2. Los pesos oficiales: tres versiones y dos están mal

En este repositorio conviven tres juegos de pesos para PCA:

| Fuente | D1 | D2 | D3 | D4 | D5 | D6 |
|---|---|---|---|---|---|---|
| `cert_manifest.js` | 24 | 15 | 20 | 18 | 11 | 12 |
| Blogs y vídeos de la comunidad | 24 | 15 | 18 | 18 | 11 | 14 |
| **Guía oficial (verificada 25-08-2026)** | **25** | **17,5** | **17,5** | **15** | **12,5** | **12,5** |

Solo vale la tercera. Antes de repartir una sola pregunta, reabre el PDF oficial
y confirma que sigue diciendo eso. Google cambia los temarios sin avisar.

---

## 3. Comprobación de entorno (5 minutos, antes de nada)

```bash
cd C:\DevWork\Certificaciones-GCP-Master-Studio\plataforma_entrenamiento_master

node --version          # necesita v18 o superior
python --version        # necesita 3.9 o superior

# La prueba que más importa no necesita navegador ni instalar nada:
node tests/qa/test_fidelidad_banco.js
```

Esa última orden **tiene que dar 27 fallos ahora mismo.** Si da otra cosa, el
repositorio no está en el estado que estos documentos describen: para y averigua
por qué antes de seguir.

Para las suites que sí usan navegador:

```bash
npm install --no-save playwright-core axe-core lighthouse chrome-launcher
npx playwright install chromium
python tests/qa/ejecutar_qa.py       # las 5 suites, veredicto único
```

Y para servir la aplicación, **siempre** `python servidor.py`. Con
`python -m http.server` no hay caché ni compresión y Lighthouse penaliza unos
3.000 KiB que no son culpa de la aplicación.

---

## 4. El orden exacto de la fase 1

`INSTRUCCIONES.md` lista los puestos P06–P17, pero dentro de la fase el orden
importa: si se aleatorizan las claves antes de reescribir las preguntas, hay que
volver a hacerlo después. La secuencia correcta es:

| Paso | Puesto | Por qué va aquí |
|---|---|---|
| 1 | **P31** Taxonomista | Nada se puede etiquetar ni repartir sin `data/taxonomia.js`. |
| 2 | **P17** Limpiador de esquema | Quitar `isTrap`/`trapType` y `distractors[correcta]` **antes** de reescribir, para no arrastrar campos muertos en 900 ítems. |
| 3 | **P06** Psicometrista | La guía de redacción con sus 6 ejemplos. Sin ella, tres redactores escriben tres estilos distintos. |
| 4 | **P07/P08/P09** Redactores | El grueso. Lotes de 25. Aquí se etiqueta `sectionId`, `subsectionId` y `conceptos`. |
| 5 | **P11** Distractores + **P12** Multi-select | Sobre el texto ya reescrito, no sobre el viejo. |
| 6 | **P13** Case studies + **P14** Currículo + **P15** Idioma | Ajustes de cobertura y forma. |
| 7 | **P10** Verificador técnico | Al final: verifica el texto definitivo, no un borrador. |
| 8 | **P16** Aleatorizador de claves | **El último.** Se ejecuta una sola vez, sobre el banco terminado. |

---

## 5. Qué hacer en la primera sesión

Objetivo: cerrar la fase 0 y dejar medida la línea base. No se toca ni una
pregunta todavía.

1. Mover los documentos obsoletos a `docs/_historico/` (§1).
2. **P02** — correr `node tests/qa/test_fidelidad_banco.js` y volcar los números
   a `para-gemini/linea-base.json`.
3. **P03 y P31** — abrir las tres guías oficiales, transcribir secciones,
   subsecciones y pesos, y escribir `data/taxonomia.js` con la fecha de hoy en
   `verificadoEl`.
4. **P01** — para cada uno de los 27 fallos, localizar la causa en archivo y línea.
5. Rellenar la columna «ahora» de `progreso.html` con lo medido y marcar los
   puestos cerrados **pegando la salida literal del comando** en `evidencia`.

Un puesto marcado «hecho» sin evidencia se degrada solo a «en curso» en el
tablero. No es un adorno: es la regla.

---

## 6. Las tres cosas que no se te pueden olvidar

**Primera.** Una revisión pregunta por pregunta **no puede** encontrar los
defectos que invalidan este producto. La auditoría anterior leyó las 900 y
concluyó que el simulador era "fiel" mientras la respuesta correcta era la opción
más larga en el 99,3 % de PCA. Se audita como población, con scripts. El método
está en la sección 2 de `INSTRUCCIONES.md`.

**Segunda.** El sesgo de longitud se corrige **quitando detalle a la respuesta
correcta**, nunca añadiendo relleno a las incorrectas. Hay un detector para eso:
si la métrica de longitud baja pero el puntaje de la heurística ciega no se
mueve, el lote se rechaza entero.

**Tercera.** Hay una persona preparándose de verdad con esto. Un banco que se
deja adivinar no es neutro: le dice que está listo cuando no lo está, y eso son
99–200 USD y un examen suspendido. Si dudas entre terminar rápido y que sirva,
elige que sirva.
