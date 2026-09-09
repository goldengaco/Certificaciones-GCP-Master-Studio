# Defectos encontrados en las CLAVES durante la reescritura de distractores

Estos ítems tienen la clave marcada correctamente, pero el texto de la clave,
el enunciado o el enlace de documentación contienen un error. Ninguno se tocó
durante la reescritura de distractores (esa pasada tiene prohibido modificar la
opción correcta). Quedan pendientes de una corrección aparte.

Los encontraron los revisores al comprobar, ítem por ítem, que ningún distractor
nuevo fuera en realidad correcto. Es el tipo de defecto que la auditoría de
población no puede ver: hay que leer el ítem.

## Graves — la clave no funcionaría si se ejecutara

| Ítem | Problema | Corrección |
|---|---|---|
| ACE-D3-022 | `--location=us-central1,us-east1` no es sintaxis válida en `gcloud storage buckets create`; `--location` acepta una sola ubicación | `--location=US --placement=us-central1,us-east1`, o `--location=nam4` |
| ACE-D3-054 | `gcloud bigtable clusters create` no tiene flag `--storage-type`; el tipo de almacenamiento se fija en la instancia | mover `--storage-type` a `bigtable instances create` |
| ACE-D3-055 | `gcloud storage notification-configurations create` no existe | `gcloud storage buckets notifications create gs://BUCKET --topic=… --event-types=…` |
| ACE-D4-049 | el flag es `--lock-retention-period`, no `--lock-retention-policy` | renombrar el flag en la clave |
| ACE-D4-058 | `gcloud sql maintenance-events reschedule` no es la forma documentada | `gcloud sql instances reschedule-maintenance` |

## Graves — el ítem admite dos respuestas

| Ítem | Problema | Estado |
|---|---|---|
| ACE-D5-047 | la opción A original (`roles/cloudfunctions.admin`) también concede `cloudfunctions.functions.invoke`, igual que la clave | ya sustituida por `roles/cloudfunctions.viewer` en el parche |
| ACE-D4-045 | Performance Dashboard mide latencia y pérdida entre regiones igual que Network Topology; sería defendible como segunda respuesta | pendiente: acotar el enunciado |
| ACE-D5-014 | `constraints/storage.publicAccessPrevention` y `iam.allowedPolicyMemberDomains` también resuelven el escenario | pendiente: acotar el enunciado |

## Errores de hecho en el enunciado

| Ítem | Problema |
|---|---|
| ACE-D3-071 | el stem dice `shared_buffers=1048576` "(1 GB)". PostgreSQL lo interpreta en bloques de 8 kB: son 8 GiB. Usar `131072` para 1 GiB, o corregir el texto |
| ACE-D3-016 | la clave usa `--region` con `--num-nodes=5`: en GKE eso crea 5 nodos **por zona**, 15 en total |
| ACE-D3-032 | la clave usa `add-access-config` sin borrar antes la access config existente; una NIC solo admite una |
| ACE-D5-039 | el `explanation` atribuye `cloudbuild.triggers.create` a `roles/cloudbuild.builds.editor` mezclando permisos de builds y de triggers |

## Enlaces de documentación rotos (404)

| Ítem | URL rota | Sustituto vivo |
|---|---|---|
| ACE-D3-015 | `appengine/docs/standard/nodejs/deploying-web-app` | `appengine/docs/standard/nodejs/building-app/deploying-web-service` |
| ACE-D3-027 | `deploy/docs/create-pipeline` | `deploy/docs/config-files` |
| ACE-D4-024 | `sql/docs/postgres/monitoring` | `monitoring/api/metrics_gcp` (es donde está la lista de métricas) |
| ACE-D4-032 | `compute/docs/disks/detach-reattach-pd` | pendiente de sustituto |
| ACE-D4-038 | `appengine/docs/standard/nodejs/managing-versions-and-services` | `sdk/gcloud/reference/app/versions/stop` (además el escenario es Flexible, no Standard) |
| ACE-D5-031 | `secret-manager/docs/destroying-secret-version` | `secret-manager/docs/destroy-secret-version` |
| ACE-D5-039 | `build/docs/securing-builds/configure-user-access` | `build/docs/iam-roles-permissions` |

Nota general: `cloud.google.com` está redirigiendo a `docs.cloud.google.com`.
Las redirecciones 302 no son defectos; las de esta tabla devuelven 404.
