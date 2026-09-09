---
description: Revisión que ningún script puede hacer — verifica los hechos contra la documentación y somete cada pregunta a un revisor adversario.
---

# /revisar — verificación factual y defensa adversaria

Uso: `/revisar ace ACE-D1-001..ACE-D1-025`

Los scripts (`adversario.js`, `medir_lote.js`, `guardian.js`) miden **forma**.
Este workflow revisa **fondo**: si lo que la pregunta afirma es cierto, y si las
opciones incorrectas son decisiones que alguien podría defender.

Los dos errores factuales reales de este proyecto pasaron todas las pruebas
automáticas: proponer un *Application Load Balancer* para tráfico UDP (solo lo
soportan los *Passthrough Network LB*), y declarar inexistente la configuración
`nam3` de Cloud Spanner, que **sí existe**. Ninguna métrica los habría cazado.

---

## Paso 1 — Extraer las afirmaciones

Para cada ítem del rango, saca a una lista:

- La **afirmación central** de `explanation`: qué dice que hace el servicio.
- El `officialDocUrl`.
- Cualquier **nombre exacto** que aparezca: flag de `gcloud`, valor de
  configuración, nombre de rol IAM, clase de almacenamiento, nombre de región o
  de topología.

## Paso 2 — Verificar cada afirmación contra la fuente

Abre el `officialDocUrl` y responde tres preguntas por ítem:

1. **¿La página existe?** Un 404 o una redirección a la portada del producto es
   un fallo.
2. **¿Dice lo que la explicación afirma?** No basta con que hable del servicio:
   tiene que respaldar la frase concreta.
3. **¿La respuesta correcta funciona con las restricciones del escenario?**
   Repasa protocolo, alcance regional, SLA, RPO/RTO, cuotas y permisos.

Veredicto por ítem: `CONFIRMADO`, `URL NO RESPALDA` o `AFIRMACIÓN FALSA`.

Reglas al corregir:

- Si la afirmación es falsa, **cambia la afirmación**, no el enlace.
- Si no encuentras documentación que respalde una afirmación, **elimínala**. No
  la suavices ni la dejes "por si acaso".
- **Nunca marques algo como error sin la URL que lo demuestra.** Corregir una
  respuesta que ya era correcta es peor que dejar el error: introduce uno nuevo
  con sello de revisión.

Verifica con especial cuidado, porque es donde han aparecido los fallos:

| Categoría | Qué comprobar |
|---|---|
| Flags de `gcloud` | Que el flag exista en la referencia del comando, no solo que suene bien |
| Balanceadores | Qué protocolos admite cada tipo, y si es global o regional |
| Configuraciones de Spanner | Los nombres de topología multirregión son reales y cambian |
| Roles IAM | El nombre exacto `roles/...` y qué permisos incluye de verdad |
| Productos | Que no esté descontinuado ni renombrado |
| SLA y cifras | Que el número salga de la documentación, no de la memoria |

## Paso 3 — El revisor adversario

Para cada ítem, **cambia de papel**: eres un arquitecto certificado que revisa
el examen de otro y quiere tumbarlo. Contesta con honestidad:

1. Tapando la respuesta marcada, ¿puedo elegir la correcta solo con saber GCP?
   Si no puedo, al escenario le falta información.
2. ¿Puedo **defender al menos dos** de las cuatro opciones ante un colega, antes
   de leer la explicación? Si solo una es defendible, las otras tres son relleno.
3. ¿Hay alguna opción que **nadie** elegiría jamás? Esa hay que reescribirla.
4. ¿La restricción del escenario descarta de verdad a las otras tres, o solo a
   una? Si solo descarta a una, la pregunta discrimina poco.
5. Si quito la restricción, ¿sigue habiendo una sola respuesta válida? Si sí, la
   restricción era decoración: la pregunta mide reconocimiento, no criterio.
6. ¿La explicación **enseña** algo que no estaba ya en el enunciado?
7. ¿Cada `distractors[X]` dice por qué falla **en este escenario**, o describe el
   servicio en general?
8. ¿Se parece a una pregunta que escribiría Google, o a una de quiz?

Un "no" en la 2 o en la 3 obliga a reescribir el ítem. Un "no" en la 5 obliga a
reescribir el escenario.

Para reescribir, usa los ejes de `.agents/rules/02-materia-prima-restricciones.md`:
elige un eje, pon la restricción en cifras, y que las cuatro opciones sean los
cuatro servicios reales de ese eje.

## Paso 4 — Comprobar que no metiste una fuga nueva

```bash
cd plataforma_entrenamiento_master
node tests/qa/adversario.js <CERT>
node tests/qa/guardian.js --verificar --permitir-texto
```

Si al elevar los distractores subió H5 (la correcta nombra más servicios) o H7
(densidad técnica), reparte: los distractores también nombran su servicio y su
parámetro.

## Paso 5 — Informe

Una tabla, sin prosa:

| ID | Veredicto factual | Defendibles de 4 | Acción tomada | URL verificada |
|---|---|---|---|---|

Y debajo:

- Los ítems con `AFIRMACIÓN FALSA`, con la cita textual de la documentación que
  los desmiente.
- Los ítems donde solo una opción era defendible, con las opciones nuevas.
- La salida de `adversario.js` antes y después.

## Cuándo usar este workflow

- Después de cada dos o tres `/lote`, sobre una **muestra de 10 ítems al azar**
  del trabajo reciente. No hace falta pasarlo por las 900.
- Siempre, entero, antes de dar por cerrada una certificación.
- Sobre cualquier ítem que alguien haya señalado como sospechoso.

## Lo que no puede hacer

Este workflow reduce el riesgo, no lo elimina. Una persona que se está
certificando sigue siendo el último filtro: si al leer una pregunta le chirría,
tiene razón aunque todas las métricas estén en verde.
