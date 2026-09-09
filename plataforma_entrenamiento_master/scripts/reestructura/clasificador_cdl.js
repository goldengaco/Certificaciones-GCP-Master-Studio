/**
 * Clasificador CDL -> 6 dominios de la guía oficial vigente.
 * Puntúa cada pregunta contra los 6 dominios (subtema y título pesan mucho más
 * que el escenario, que menciona servicios de pasada) y luego reequilibra hacia
 * las cuotas oficiales moviendo primero las preguntas más ambiguas.
 * Las correcciones manuales van en OVERRIDES y siempre ganan.
 */
'use strict';
const DOMINIOS = {
  'CDL-D1': '1. Transformación digital con Google Cloud',
  'CDL-D2': '2. Exploración de la transformación de datos',
  'CDL-D3': '3. Innovación con inteligencia artificial de Google Cloud',
  'CDL-D4': '4. Modernización de infraestructura y aplicaciones',
  'CDL-D5': '5. Confianza y seguridad con Google Cloud',
  'CDL-D6': '6. Escalar con las operaciones de Google Cloud'
};
const OBJETIVO = { 'CDL-D1':54, 'CDL-D2':54, 'CDL-D3':54, 'CDL-D4':54, 'CDL-D5':54, 'CDL-D6':30 };
const OVERRIDES = {
  'CDL-D1-001':'CDL-D1',
  'CDL-D1-002':'CDL-D1',
  'CDL-D1-006':'CDL-D1',
  'CDL-D1-012':'CDL-D4',
  'CDL-D1-015':'CDL-D2',
  'CDL-D1-023':'CDL-D3',
  'CDL-D1-024':'CDL-D1',
  'CDL-D1-029':'CDL-D1',
  'CDL-D2-014':'CDL-D4',
  'CDL-D2-015':'CDL-D4',
  'CDL-D2-031':'CDL-D2',
  'CDL-D2-039':'CDL-D3',
  'CDL-D2-057':'CDL-D2',
  'CDL-D2-060':'CDL-D2',
  'CDL-D2-071':'CDL-D2',
  'CDL-D2-072':'CDL-D2',
  'CDL-D2-079':'CDL-D2',
  'CDL-D2-084':'CDL-D3',
  'CDL-D2-086':'CDL-D5',
  'CDL-D2-088':'CDL-D6',
  'CDL-D3-002':'CDL-D4',
  'CDL-D3-006':'CDL-D5',
  'CDL-D3-019':'CDL-D1',
  'CDL-D3-024':'CDL-D5',
  'CDL-D3-025':'CDL-D5',
  'CDL-D3-026':'CDL-D4',
  'CDL-D3-030':'CDL-D4',
  'CDL-D3-033':'CDL-D6',
  'CDL-D3-034':'CDL-D6',
  'CDL-D3-035':'CDL-D4',
  'CDL-D3-036':'CDL-D4',
  'CDL-D3-038':'CDL-D5',
  'CDL-D3-040':'CDL-D6',
  'CDL-D3-042':'CDL-D1',
  'CDL-D3-043':'CDL-D4',
  'CDL-D3-047':'CDL-D4',
  'CDL-D3-053':'CDL-D4',
  'CDL-D3-055':'CDL-D5',
  'CDL-D3-057':'CDL-D4',
  'CDL-D3-058':'CDL-D4',
  'CDL-D3-060':'CDL-D4',
  'CDL-D3-063':'CDL-D1',
  'CDL-D3-068':'CDL-D4',
  'CDL-D3-073':'CDL-D5',
  'CDL-D3-075':'CDL-D6',
  'CDL-D3-076':'CDL-D4',
  'CDL-D3-077':'CDL-D4',
  'CDL-D3-078':'CDL-D4',
  'CDL-D3-079':'CDL-D4',
  'CDL-D3-086':'CDL-D4',
  'CDL-D4-001':'CDL-D5',
  'CDL-D4-007':'CDL-D5',
  'CDL-D4-017':'CDL-D5',
  'CDL-D4-018':'CDL-D6',
  'CDL-D4-019':'CDL-D6',
  'CDL-D4-021':'CDL-D5',
  'CDL-D4-023':'CDL-D5',
  'CDL-D4-026':'CDL-D6',
  'CDL-D4-027':'CDL-D6',
  'CDL-D4-031':'CDL-D5',
  'CDL-D4-032':'CDL-D5',
  'CDL-D4-036':'CDL-D6',
  'CDL-D4-050':'CDL-D5',
  'CDL-D4-051':'CDL-D6',
  'CDL-D4-055':'CDL-D5',
  'CDL-D4-057':'CDL-D5',
  'CDL-D4-060':'CDL-D6',
  'CDL-D4-061':'CDL-D5',
  'CDL-D4-065':'CDL-D5',
  'CDL-D4-069':'CDL-D6',
  'CDL-D4-072':'CDL-D6',
  'CDL-D4-073':'CDL-D4',
  'CDL-D4-075':'CDL-D6',
  'CDL-D4-078':'CDL-D5',
  'CDL-D4-081':'CDL-D6',
  'CDL-D4-084':'CDL-D5',
  'CDL-D4-085':'CDL-D5',
  'CDL-D4-086':'CDL-D5',
};

const norm = s => String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');

const TERMINOS = {
  'CDL-D1': [/adoption framework|\bcaf\b/,/pilar (learn|lead|scale|secure)/,/madurez/,/tactica|estrategica|transformacional/,/cultura/,/agilidad|agile|cascada|waterfall/,/innovacion/,/time-to-market|time to market/,/cambio organizacional|gestion del cambio/,/centro de excelencia|\bccoe\b/,/cloud-first|cloud-native|cloud first/,/vendor lock|codigo abierto|open source/,/elasticidad|escalabilidad/,/\btco\b|retorno de inversion|\broi\b/,/capex|opex/,/workspace|colaboracion|trabajo remoto/,/kpis? de negocio|metricas de negocio/,/economia de apis|ecosistema digital/,/transformacion digital/,/modelo de negocio/,/regiones y zonas|red global|infraestructura global de google/,/tipos de nube|nube publica|nube privada/,/experiencia de cliente|\bcx\b/,/cadena de suministro/,/fail fast|costo de falla/,/10x|moonshot/,/democratizacion/],
  'CDL-D2': [/bigquery(?! ml)/,/looker/,/cloud storage|almacenamiento de objetos/,/clases de almacenamiento|nearline|coldline|archive|autoclass/,/ciclo de vida de objetos|bucket/,/cloud sql/,/spanner/,/firestore/,/bigtable/,/memorystore/,/pub\/sub/,/dataflow|dataproc|dataprep|datastream/,/streaming|tiempo real/,/analitica|analytics/,/almacen de datos|warehouse|data lake|lago de datos/,/\betl\b|\belt\b/,/inteligencia de negocio|business intelligence/,/base de datos|bases de datos/,/silos de datos/,/ciclo de vida del dato|gobierno de datos|calidad de datos/,/datos (estructurados|no estructurados|semiestructurados)/,/migracion de datos|transfer(encia)? de datos/,/\bsql\b|\bnosql\b/],
  'CDL-D3': [/vertex ai/,/automl/,/bigquery ml/,/gemini/,/generativ/,/inteligencia artificial/,/\bia\b/,/machine learning|aprendizaje automatico|\bml\b/,/preentrenad/,/vision api|speech|translation|natural language|document ai|contact center ai|recommendations ai/,/modelo fundacional|\bllm\b/,/agente de ia|agent builder/,/ia responsable|sesgo/,/entrenamiento de modelos|inferencia|prediccion/,/red neuronal|deep learning/,/\btpu\b/],
  'CDL-D4': [/compute engine/,/maquina virtual|\bvm\b|instancia/,/\bgke\b|kubernetes/,/contenedor|container/,/cloud run/,/app engine/,/cloud functions/,/serverless|sin servidor/,/migracion|migrar|rehost|replatform|refactor|lift and shift/,/\bvpc\b|red virtual|subred/,/balanceo de carga|load balancing/,/cloud cdn|cloud dns|cloud vpn|interconnect/,/apigee|cloud endpoints|gestion de apis/,/anthos|distributed cloud|gke enterprise/,/hibrid|multi-?cloud|multinube/,/modernizacion (de )?(infraestructura|aplicaciones)/,/\biaas\b|\bpaas\b|\bcaas\b/,/marketplace|artifact registry|cloud build/,/microservicio|monolito/,/sole-tenant|shielded|confidential vm|preemptible|spot/],
  'CDL-D5': [/seguridad|security command center/,/\biam\b|gestion de identidades/,/control de acceso|menor privilegio|roles? (primitiv|predefinid|personalizad|basic)/,/cifrad|encriptad|clave de cifrado|cmek|cseK/,/\bkms\b|\bhsm\b/,/\bdlp\b|prevencion de perdida de datos|datos sensibles/,/cumplimiento|compliance|normativ|regulacion|gdpr|hipaa|\bpci\b|iso 27/,/zero trust|beyondcorp|confianza cero/,/responsabilidad compartida/,/cloud armor|\bddos\b|\bwaf\b/,/auditoria|audit logs/,/soberania de datos|residencia de datos/,/vulnerabilid|malware|ransomware|phishing/,/cuenta de servicio|service account|workload identity/,/defensa en profundidad/,/postura de (riesgo|seguridad)/,/grupos de google|\brbac\b/,/binary authorization|assured workloads|vpc service controls/],
  'CDL-D6': [/\bsre\b|site reliability/,/\bslo\b|\bsli\b|\bsla\b/,/error budget|presupuesto de error/,/fiabilidad|confiabilidad|resiliencia|disponibilidad/,/observabilidad/,/cloud monitoring|cloud logging|cloud trace|profiler|error reporting/,/devops/,/ci\/cd|entrega continua|integracion continua/,/facturacion|billing/,/presupuesto|budget|alerta de gasto/,/finops|control de costos|optimizacion de costos|gasto/,/descuento|committed use|uso sostenido|\bcud\b|\bsud\b/,/etiquetas de facturacion|centro de costos/,/cuota|quota|limite/,/autopsia|post-?mortem|sin culpa/,/incidente|interrupcion|caida/,/escalado automatico|autoscal/,/sostenibilidad|carbon|huella/,/soporte|support|caso de soporte/,/recuperacion ante desastres|\brto\b|\brpo\b|copia de seguridad|respaldo/],
};

function puntuar(q){
  const fuerte = norm([q.subtopic, q.title].join(' '));
  const debil  = norm([q.scenario, (q.keywords||[]).join(' ')].join(' '));
  const p = {};
  for (const d of Object.keys(TERMINOS)) {
    let s = 0;
    for (const re of TERMINOS[d]) {
      if (re.test(fuerte)) s += 5;
      else if (re.test(debil)) s += 1;
    }
    p[d] = s;
  }
  return p;
}

function asignar(banco){
  const filas = banco.map(q => {
    const p = puntuar(q);
    const orden = Object.keys(p).sort((a,b) => p[b]-p[a]);
    return { id:q.id, p, mejor:orden[0], orden, margen:p[orden[0]]-p[orden[1]] };
  });
  const asign = {};
  filas.forEach(f => { asign[f.id] = OVERRIDES[f.id] || f.mejor; });

  // Reequilibrio hacia las cuotas: se mueven primero las más ambiguas.
  const cuenta = () => { const c={}; Object.keys(DOMINIOS).forEach(d=>c[d]=0);
                         Object.values(asign).forEach(d=>c[d]++); return c; };
  for (let iter=0; iter<4000; iter++) {
    const c = cuenta();
    const sobra = Object.keys(DOMINIOS).filter(d => c[d] > OBJETIVO[d]);
    const falta = Object.keys(DOMINIOS).filter(d => c[d] < OBJETIVO[d]);
    if (!sobra.length || !falta.length) break;
    const cand = filas
      .filter(f => !OVERRIDES[f.id] && sobra.includes(asign[f.id]))
      .map(f => {
        const destino = f.orden.find(d => falta.includes(d));
        if (!destino) return null;
        return { f, destino, coste: f.p[asign[f.id]] - f.p[destino] };
      })
      .filter(Boolean)
      .sort((a,b) => a.coste - b.coste)[0];
    if (!cand) break;
    asign[cand.f.id] = cand.destino;
  }
  return { asign, filas };
}

module.exports = { DOMINIOS, OBJETIVO, OVERRIDES, puntuar, asignar };
