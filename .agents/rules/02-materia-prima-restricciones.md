---
trigger: glob
globs: ["**/data/cert_*.js"]
---

# Materia prima: las restricciones que hacen que una pregunta mida

## Para qué sirve esto

Una pregunta solo mide conocimiento si el escenario contiene **una restricción
que elimina a las otras tres opciones**. Sin ella, varias respuestas son válidas
y el candidato acierta por estilo, no por saber.

Este fichero es el inventario de esas restricciones por área. No lo copies
literal: úsalo para componer escenarios donde la elección **duela**.

## Cómo se usa

1. Elige la subsección oficial que toca (ver `data/taxonomia.js`).
2. Elige **un eje de tensión** de la tabla de esa área.
3. Escribe el escenario poniendo la restricción en cifras.
4. Las cuatro opciones son los cuatro servicios/configuraciones del eje. **Todas
   funcionarían sin la restricción.** La restricción decide.
5. `distractors[X]` cita la restricción concreta que descarta esa opción.

Si al terminar puedes quitar la restricción y la pregunta sigue teniendo una
sola respuesta, no era una restricción: era decoración.

---

## Bases de datos

| Eje de tensión | Restricción que decide | Sobrevive | Cae, y por qué |
|---|---|---|---|
| Alta disponibilidad de Cloud SQL | RPO = 0 y conmutación automática < 60 s | `availability_type = REGIONAL` | Réplica de lectura (asíncrona, promoción manual); copias diarias (RPO de horas); zonal + backups |
| Relacional a escala global | Escrituras fuertes en varios continentes con consistencia externa | Cloud Spanner multirregión | Cloud SQL (escritura en una sola región); Firestore (no relacional); Bigtable (transacción de fila única) |
| Elegir NoSQL | Series temporales, millones de escrituras/s, consultas por prefijo de clave | Bigtable | Firestore (documental, límites de escritura por documento); Spanner (coste); BigQuery (analítico, no OLTP) |
| Elegir NoSQL | Sincronización móvil/offline y listeners en tiempo real | Firestore | Bigtable (sin SDK móvil); Memorystore (volátil); Cloud SQL (sin offline) |
| Caché | Latencia de sub-milisegundo, datos que se pueden perder | Memorystore | Firestore; Cloud SQL; Bigtable |
| Analítica | Petabytes, SQL, sin gestionar infraestructura | BigQuery | Cloud SQL (no escala); Bigtable (sin SQL analítico); Spanner (coste por TB) |

**Cifras que discriminan:** RPO 0 vs minutos vs horas · RTO < 60 s vs manual ·
99,99 % vs 99,999 % · consistencia externa vs eventual · una región vs varios continentes.

## Cómputo

| Eje | Restricción | Sobrevive | Cae, y por qué |
|---|---|---|---|
| Serverless vs contenedores | Picos a cero, HTTP sin estado, pago por petición | Cloud Run | GKE (nodos siempre encendidos); Compute Engine (gestión de VM); Functions 1ª gen (límites de tiempo) |
| Contenedores | Protocolo **no HTTP** (UDP, TCP crudo), sesiones con estado | GKE (+ Agones para juegos) | Cloud Run (HTTP/gRPC); App Engine estándar; Functions |
| Coste | Trabajo por lotes tolerante a interrupciones | Spot VMs / instancias preemptibles | On-demand; reservas; CUD de 3 años |
| Coste | Carga estable y previsible 24/7 durante años | Committed Use Discounts | Spot (se reclaman); on-demand (más caro); sostenido (automático, menor descuento) |
| Licencias | Software que exige hardware físico dedicado | Sole-tenant nodes / Bare Metal | VM estándar; GKE; Cloud Run |
| Migración | Levantar y mover sin rediseñar, con VMware existente | Google Cloud VMware Engine | Refactor a GKE; reescritura a Cloud Run; Compute Engine (requiere conversión) |

**Cifras:** arranque en frío tolerable o no · 60 min de límite de petición ·
interrumpible o no · sesiones con estado · protocolo (UDP/TCP/HTTP).

## Redes

| Eje | Restricción | Sobrevive | Cae, y por qué |
|---|---|---|---|
| Balanceo | Tráfico **UDP** | Passthrough Network Load Balancer | Application LB (solo HTTP/HTTPS); Proxy Network LB (TCP/TLS); Internal ALB |
| Balanceo | HTTP global con enrutamiento por ruta y Cloud CDN | Global External Application LB | Network LB (capa 4, sin rutas); LB regional; Cloud DNS |
| Conectividad híbrida | SLA de 99,99 % y cifrado de capa 2 en la fibra | 4 Dedicated Interconnect en 2 metros, con MACsec | VPN HA (internet, sin MACsec); Partner Interconnect (SLA menor según topología); Direct Peering (no es servicio con SLA) |
| Conectividad híbrida | Poco ancho de banda, rápido de montar, cifrado | Cloud VPN HA | Dedicated Interconnect (semanas, coste); Carrier Peering; Cloud NAT |
| Acceso privado | VM sin IP pública que llame a APIs de Google | Private Google Access / Private Service Connect | Cloud NAT (sale a internet); IP externa; firewall |
| Salida a internet | VM sin IP pública que descargue paquetes | Cloud NAT | Private Google Access (solo APIs de Google); IP efímera; proxy en VM |
| Aislamiento | Impedir exfiltración de datos desde un servicio gestionado | VPC Service Controls | Reglas de firewall (no aplican a APIs); IAM (autoriza, no aísla); Org Policy |

**Cifras:** 99,9 % vs 99,99 % · Gbps · latencia · ¿sale a internet? · ¿cifrado en la capa física?

## Identidad y seguridad

| Eje | Restricción | Sobrevive | Cae, y por qué |
|---|---|---|---|
| Conceder acceso | Muchos usuarios, mínimo mantenimiento, toda la organización | Grupo de Google + rol en el nodo Organización | Rol por usuario y proyecto (no escala); rol de Owner (excesivo); clave de cuenta de servicio |
| Cargas fuera de GCP | Aplicación en otra nube o CI externo que necesita acceso | Workload Identity Federation | Descargar clave JSON (fuga permanente); usuario compartido; clave en secreto |
| Cargas en GKE | Pod que necesita acceder a Cloud Storage | Workload Identity | Montar clave JSON; scopes del nodo; IP del metadata server |
| Cifrado | El cliente exige controlar y rotar la clave | CMEK con Cloud KMS | Cifrado por defecto de Google; CSEK (el cliente la almacena, más carga); ninguno |
| Cifrado | Certificación FIPS 140-2 nivel 3 | Cloud HSM | Cloud KMS software; CMEK; claves gestionadas por Google |
| Cumplimiento | Inmutabilidad WORM durante N años, ni el Owner puede borrar | Bucket Lock + política de retención | Versionado (se puede borrar); IAM restrictivo (el Owner lo cambia); ciclo de vida |
| Prevención | Impedir que se creen claves de cuenta de servicio | Org Policy `disableServiceAccountKeyCreation` | Rol IAM (no impide crear); auditoría (detecta, no impide); documentación |

**Cifras:** años de retención · nivel FIPS · ¿quién custodia la clave? ·
¿prevenir o detectar? · ¿escala a proyectos futuros?

## Datos y analítica

| Eje | Restricción | Sobrevive | Cae, y por qué |
|---|---|---|---|
| Streaming | Ventanas deslizantes y datos que llegan tarde | Dataflow (Apache Beam, watermarks) | Dataproc por lotes; Functions (sin estado de ventana); BigQuery scheduled queries |
| Ingesta | Millones de eventos/s con desacople y reintentos | Pub/Sub | Cloud Tasks (colas de tareas); Cloud Storage; llamada directa |
| Orden | Los eventos de una misma clave deben procesarse en orden | Pub/Sub con ordering key | Pub/Sub sin clave; Eventarc; Cloud Tasks |
| Migración de datos | Petabytes desde on-prem con red limitada | Transfer Appliance | Storage Transfer Service (por red); gsutil; Interconnect |
| Migración de datos | Terabytes desde otra nube, recurrente | Storage Transfer Service | Transfer Appliance (físico); gsutil (manual); Dataflow |
| Control de coste | Impedir consultas que escaneen de más | `maximum_bytes_billed` + cuotas por usuario/día | Presupuesto y alerta (avisa después); revisión manual; particionado (ayuda, no impide) |

## Almacenamiento de objetos

| Restricción | Clase | Por qué caen las otras |
|---|---|---|
| Acceso varias veces al mes | Standard | Nearline/Coldline/Archive cobran recuperación y tienen mínimo de permanencia |
| Una vez al mes, 30 días mínimo | Nearline | Standard cuesta más de almacenar; Coldline 90 días de mínimo |
| Una o dos veces al año, 90 días | Coldline | Archive tiene 365 días de mínimo y recuperación cara |
| Archivo legal, casi nunca se lee, 365 días | Archive | Coldline cuesta más de almacenar |

## Operaciones y fiabilidad

| Eje | Restricción | Sobrevive | Cae, y por qué |
|---|---|---|---|
| Despliegue | Validar con tráfico real y poder revertir en segundos | Canary con división de tráfico | Blue/green (revierte, pero sin validación gradual); rolling (sin revertir rápido); recreate |
| Observabilidad | Detectar disponibilidad desde varias regiones del mundo | Uptime check + política de alerta | Cloud Trace (latencia); Error Reporting (excepciones); script en VM |
| Observabilidad | Agrupar excepciones por traza de pila y avisar de las nuevas | Error Reporting | Cloud Logging crudo; Monitoring; Trace |
| Fiabilidad | Definir cuánta indisponibilidad se tolera antes de parar features | Error budget a partir del SLO | SLA (contrato con el cliente); SLI (la medida); alerta por CPU |

---

## Antitrampas al componer

Cuando escribas las cuatro opciones desde un eje, vigila que la correcta **no
sea la única** que:

- lleva un flag, un guion bajo o un nombre con punto → dispara **H7**
- repite palabras del escenario → dispara **H8**
- nombra un servicio de GCP → dispara **H5**
- lleva una cifra → dispara **H6**

Si el eje da cuatro servicios reales, esto sale solo. Si te ves poniendo tres
opciones vagas y una precisa, es que no usaste un eje: inventaste una respuesta
y tres rellenos.

Comprueba siempre al cerrar: `node tests/qa/adversario.js <cert>`
