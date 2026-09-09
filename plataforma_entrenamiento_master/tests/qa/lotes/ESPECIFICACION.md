# Reescritura de distractores — especificación

## El defecto que se está corrigiendo

En este banco la respuesta correcta suele ser un párrafo completo y los
distractores son fragmentos de una línea. Medido: en ACE, la clave es la
opción más larga el 62% de las veces (el azar es 25%), y en PCA el 94%.
Un candidato que no sepa nada de GCP aprueba eligiendo la opción más larga.

**El defecto no está en la clave. Está en los distractores.** Son perezosos:
no intentan resolver el escenario, así que se descartan sin leerlos.

## Regla absoluta

**Nunca se toca el texto de la opción correcta ni la letra `correct`.**
El script `aplicar_parche.js` aborta el parche entero si se intenta.

## Qué hace bueno a un distractor

Cada distractor reescrito debe cumplir las cuatro:

1. **Longitud pareja.** Entre 0.85x y 1.15x de la longitud de la clave.
   El script rechaza el lote si la clave queda >1.15x del promedio.
2. **Misma forma.** Si la clave es un comando `gcloud` con flags, el
   distractor es un comando `gcloud` con flags. Si la clave es prosa, prosa.
3. **Intenta resolver el escenario.** Un distractor que habla de otro
   problema (`"Crear una regla de firewall bloqueando el puerto 80"` cuando
   se pregunta por TLS) no engaña a nadie. Debe ser una respuesta que un
   ingeniero razonable daría bajo una idea equivocada.
4. **Falla por UNA razón identificable y enseñable**, que se escribe en el
   campo `distractors`. Ejemplos de buenas razones:
   - el recurso correcto pero el punto de anclaje equivocado
     (política SSL en el backend service en vez del Target HTTPS Proxy)
   - el comando correcto con un valor que no cumple el requisito
     (`--min-tls-version=1.0` cuando PCI exige 1.2)
   - `--zone` en un MIG regional
   - la métrica adyacente pero equivocada
     (`num_outstanding_messages` en vez de `num_undelivered_messages`)
   - alcance por grupo cuando el requisito es por instancia
   - el producto que se confunde habitualmente
     (health check del balanceador en vez de Uptime Check)

## Peligro: un distractor que sea CORRECTO

Es el único error irrecuperable. Antes de escribir cada distractor,
comprobar que hay una razón concreta por la que NO resuelve el escenario.
Si no se encuentra esa razón, el distractor está mal.

Ante la duda sobre un flag o un comportamiento de GCP: consultar la
documentación oficial (el campo `doc` de cada ítem la enlaza) en vez de
suponer. Es preferible un distractor conceptual correcto a uno sintáctico
inventado.

## Prohibido rellenar

No alargar con paja (`"...en el entorno de producción de la organización"`)
para llegar a la longitud. Hay un detector: si baja la métrica de longitud
pero no baja la puntuación del adversario ciego, es que se rellenó en vez
de escribir. La longitud extra tiene que ser **contenido técnico real**.

## Formato de salida

Un JSON, un objeto por ítem, solo con las letras que se reescriben:

```json
[
 {
  "id": "ACE-D3-024",
  "options":    { "A": "texto nuevo…", "B": "…", "D": "…" },
  "distractors":{ "A": "por qué falla…", "B": "…", "D": "…" }
 }
]
```

Idioma: el mismo del ítem original (los ítems de ACE están en inglés).

## Comprobación

```
node tests/qa/aplicar_parche.js data/cert_ace.js <parche.json>
```
Si sale `PARCHE RECHAZADO` no se escribió nada: corregir y repetir.
