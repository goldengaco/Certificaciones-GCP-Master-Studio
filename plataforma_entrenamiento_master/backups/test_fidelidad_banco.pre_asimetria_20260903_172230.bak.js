/**
 * test_fidelidad_banco.js  —  LA PRUEBA MÁS IMPORTANTE DEL REPOSITORIO
 *
 * No comprueba que el banco de preguntas exista. Comprueba que NO SE PUEDA
 * APROBAR SIN SABER GOOGLE CLOUD. Un simulador que se deja adivinar te da
 * confianza falsa, y la confianza falsa es lo que te hace perder el examen
 * (y los 200 USD que cuesta).
 *
 * Uso:   node tests/qa/test_fidelidad_banco.js
 * Sale con código 1 si alguna barrera se rompe.
 */
'use strict';
const path = require('path');
const RAIZ = path.resolve(__dirname, '..', '..');
global.window = global.window || {};
['data/cert_manifest.js','data/cert_cdl.js','data/cert_ace.js','data/cert_pca.js','data/case_studies.js']
  .forEach(f => require(path.join(RAIZ, f)));
const ENGINE = require(path.join(RAIZ, 'js/engine.js'));
const W = global.window;

const BANCOS = { cdl: W.GCP_CDL_QUESTIONS, ace: W.GCP_ACE_QUESTIONS, pca: W.GCP_PCA_QUESTIONS };

// ---------------------------------------------------------------------------
// BARRERAS. Bajar cualquiera de estos números sin justificarlo por escrito
// es degradar el producto. Subirlos es mejorarlo.
// ---------------------------------------------------------------------------
// PESOS OFICIALES según las guías de examen vigentes de Google.
// FUENTE — verifícalas de nuevo antes de cada campaña de reescritura:
//   ACE https://cloud.google.com/learn/certification/guides/cloud-engineer
//   PCA https://services.google.com/fh/files/misc/professional_cloud_architect_exam_guide_english.pdf
//   CDL https://services.google.com/fh/files/misc/cloud_digital_leader_exam_guide_english.pdf
// El manifiesto del sistema NO es la fuente de verdad: la prueba compara el
// banco contra Google, no contra lo que el propio sistema declara.
const PESOS_OFICIALES = {
  cdl: { 'CDL-D1': 18, 'CDL-D2': 18, 'CDL-D3': 18, 'CDL-D4': 18, 'CDL-D5': 18, 'CDL-D6': 10 },
  ace: { 'ACE-D1': 20, 'ACE-D2': 17.5, 'ACE-D3': 25, 'ACE-D4': 20, 'ACE-D5': 17.5 },
  pca: { 'PCA-D1': 25, 'PCA-D2': 17.5, 'PCA-D3': 17.5, 'PCA-D4': 15, 'PCA-D5': 12.5, 'PCA-D6': 12.5 },
};

// Dominios de documentación que se aceptan como fuente autorizada.
const DOMINIOS_DOC = /^https:\/\/(cloud\.google\.com|ai\.google|sre\.google|firebase\.google\.com|workspace\.google\.com|developers\.google\.com|kubernetes\.io|beam\.apache\.org|agones\.dev|open-match\.dev|protobuf\.dev|developer\.hashicorp\.com|12factor\.net)(\/|$)/;

const BARRERAS = {
  // El examen real de Google tiene 4 opciones de longitud parecida. Si la
  // correcta es sistemáticamente la más larga, se adivina por la forma.
  MAX_CORRECTA_ES_LA_MAS_LARGA: 0.35,   // azar = 0.25
  // Diferencia media de caracteres entre la correcta y el promedio de las otras.
  MAX_EXCESO_CARACTERES_MEDIA: 25,
  // Un candidato que solo marca la opción más larga no debe aprobar NUNCA.
  MAX_PUNTAJE_HEURISTICA_LONGITUD: 0.45,
  // Ni el que marca la más corta, ni el que siempre marca la misma letra.
  MAX_PUNTAJE_HEURISTICA_CORTA: 0.40,
  MAX_PUNTAJE_LETRA_FIJA: 0.35,
  // La clave no puede seguir un patrón. A→B→C→D al 98% es un patrón.
  MAX_PARES_QUE_SIGUEN_CICLO: 0.40,     // azar ≈ 0.25
  MAX_PERIODICIDAD_4: 0.40,
  // Google describe sus exámenes como "multiple choice and multiple select".
  MIN_PROPORCION_MULTISELECT: 0.12,
  // Distractores: ninguna opción incorrecta debe ser obviamente absurda.
  MAX_DISTRACTORES_ABSURDOS: 0.02,
  // Cobertura: ningún dominio puede desviarse más de esto del peso oficial.
  MAX_DESVIO_PESO_DOMINIO: 3.0,         // puntos porcentuales
};

// Frases que delatan un distractor de relleno: nadie las elegiría nunca.
const SENALES_ABSURDO = [
  /promet(a|an|er)/i, /por correo electr[oó]nico que/i, /memoria flash/i,
  /hoja de c[aá]lculo/i, /a mano\b/i, /manualmente cada/i, /revocar (todo|el acceso de todos)/i,
  /\bdelete .*(and revoke|entirely)\b/i, /open ssh reverse tunnel/i,
  /cron (job|script).*(curl|loop)/i, /custom bash scripts?\b/i,
  /ask (analysts|users|the team) to (estimate|remember|promise)/i,
  /cambiar la contrase[nñ]a de root/i, /google drive personal/i,
  /desactivar (la captura|el registro|los logs)/i,
  /descartar todos los datos/i, /papel|imprimir/i,
];

let fallos = 0, avisos = 0;
const ok  = (m) => console.log('  \x1b[32mPASA\x1b[0m  ' + m);
const bad = (m) => { fallos++; console.log('  \x1b[31mFALLA\x1b[0m ' + m); };
const warn= (m) => { avisos++; console.log('  \x1b[33mAVISO\x1b[0m ' + m); };
const pct = (x) => (x * 100).toFixed(1) + '%';
const claveDe = (q) => Array.isArray(q.correct) ? q.correct.slice().sort() : [q.correct];

// ---------------------------------------------------------------------------
function heuristica(qs, elegir) {
  let ok = 0;
  qs.forEach(q => {
    const pick = elegir(q);
    const corr = claveDe(q);
    const p = Array.isArray(pick) ? pick.slice().sort() : [pick];
    if (p.length === corr.length && p.every((x, i) => x === corr[i])) ok++;
  });
  return ok / qs.length;
}
const masLarga  = q => q.options.reduce((a, b) => (b.text || '').length > (a.text || '').length ? b : a).letter;
const masCorta  = q => q.options.reduce((a, b) => (b.text || '').length < (a.text || '').length ? b : a).letter;

// ===========================================================================
console.log('\n\x1b[1m===== FIDELIDAD DEL BANCO DE PREGUNTAS =====\x1b[0m');

for (const [cid, qs] of Object.entries(BANCOS)) {
  console.log(`\n\x1b[1m--- ${cid.toUpperCase()} (${qs ? qs.length : 0} ítems) ---\x1b[0m`);
  if (!Array.isArray(qs) || !qs.length) { bad(`${cid}: banco vacío o ausente`); continue; }

  // --- 1. sesgo de longitud -------------------------------------------------
  const soloSimple = qs.filter(q => !q.isMultiSelect);
  const nLarga = soloSimple.filter(q => {
    const lens = q.options.map(o => (o.text || '').length);
    const max = Math.max(...lens);
    return lens.filter(l => l === max).length === 1 &&
           q.options[lens.indexOf(max)].letter === claveDe(q)[0];
  }).length;
  const rLarga = soloSimple.length ? nLarga / soloSimple.length : 0;
  (rLarga <= BARRERAS.MAX_CORRECTA_ES_LA_MAS_LARGA ? ok : bad)
    (`la correcta es la opción más larga en ${pct(rLarga)} (máximo ${pct(BARRERAS.MAX_CORRECTA_ES_LA_MAS_LARGA)}, azar 25%)`);

  const excesos = soloSimple.map(q => {
    const c = q.options.find(o => o.letter === claveDe(q)[0]);
    const otras = q.options.filter(o => o.letter !== claveDe(q)[0]);
    return (c.text || '').length - otras.reduce((a, o) => a + (o.text || '').length, 0) / otras.length;
  });
  const excMedia = excesos.reduce((a, b) => a + b, 0) / (excesos.length || 1);
  (excMedia <= BARRERAS.MAX_EXCESO_CARACTERES_MEDIA ? ok : bad)
    (`la correcta tiene de media ${excMedia.toFixed(1)} caracteres más que las incorrectas (máximo ${BARRERAS.MAX_EXCESO_CARACTERES_MEDIA})`);

  // --- 2. el candidato que no sabe nada -------------------------------------
  const pLarga = heuristica(qs, masLarga);
  (pLarga <= BARRERAS.MAX_PUNTAJE_HEURISTICA_LONGITUD ? ok : bad)
    (`quien solo marca la opción MÁS LARGA saca ${pct(pLarga)} (máximo ${pct(BARRERAS.MAX_PUNTAJE_HEURISTICA_LONGITUD)})`);
  const pCorta = heuristica(qs, masCorta);
  (pCorta <= BARRERAS.MAX_PUNTAJE_HEURISTICA_CORTA ? ok : bad)
    (`quien solo marca la MÁS CORTA saca ${pct(pCorta)}`);
  const pLetra = Math.max(...['A','B','C','D'].map(L => heuristica(qs, () => L)));
  (pLetra <= BARRERAS.MAX_PUNTAJE_LETRA_FIJA ? ok : bad)
    (`quien siempre marca la misma letra saca hasta ${pct(pLetra)}`);

  // --- 2b. bloque a bloque: ningún simulacro debe ser aprobable a ciegas ----
  const blocks = ENGINE.BlockRotationEngine.generateEpochBlocks(cid, {}, qs, 1337);
  const aprobados = blocks.filter(b => heuristica(b, masLarga) >= 0.70).length;
  (aprobados === 0 ? ok : bad)
    (`${aprobados} de ${blocks.length} bloques se aprueban (≥70%) marcando solo la opción más larga`);

  // --- 3. patrón en la clave -----------------------------------------------
  const seq = qs.map(q => claveDe(q)[0]);
  const L = ['A','B','C','D'];
  let ciclo = 0, per4 = 0;
  for (let i = 0; i < seq.length - 1; i++) if (L[(L.indexOf(seq[i]) + 1) % 4] === seq[i+1]) ciclo++;
  for (let i = 0; i < seq.length - 4; i++) if (seq[i] === seq[i+4]) per4++;
  const rCiclo = ciclo / (seq.length - 1), rPer4 = per4 / (seq.length - 4);
  (rCiclo <= BARRERAS.MAX_PARES_QUE_SIGUEN_CICLO ? ok : bad)
    (`${pct(rCiclo)} de pares consecutivos siguen el ciclo A→B→C→D (máximo ${pct(BARRERAS.MAX_PARES_QUE_SIGUEN_CICLO)})`);
  (rPer4 <= BARRERAS.MAX_PERIODICIDAD_4 ? ok : bad)
    (`${pct(rPer4)} de periodicidad 4 en la clave`);

  // --- 4. selección múltiple ------------------------------------------------
  const rMulti = qs.filter(q => q.isMultiSelect).length / qs.length;
  (rMulti >= BARRERAS.MIN_PROPORCION_MULTISELECT ? ok : bad)
    (`${pct(rMulti)} de preguntas de selección múltiple (mínimo ${pct(BARRERAS.MIN_PROPORCION_MULTISELECT)})`);
  const multiMal = qs.filter(q => q.isMultiSelect &&
    (!Array.isArray(q.correct) || q.correct.length !== (q.expectedSelectCount || 0))).length;
  (multiMal === 0 ? ok : bad)(`${multiMal} preguntas multi-select con correct/expectedSelectCount incoherentes`);
  // Trampa clásica: enunciado que pide dos cosas pero marcado como respuesta única.
  const pideDos = qs.filter(q => !q.isMultiSelect &&
    /\b(two|dos|three|tres)\b[^.?]{0,40}\b(guardrails|actions|steps|options|acciones|pasos|medidas|opciones)\b/i
      .test((q.scenario || '') + ' ' + (q.title || ''))).length;
  (pideDos === 0 ? ok : bad)(`${pideDos} preguntas piden 2 o 3 cosas pero están marcadas como respuesta única`);

  // --- 5. distractores creíbles --------------------------------------------
  let absurdos = [];
  qs.forEach(q => q.options.forEach(o => {
    if (o.letter === claveDe(q)[0]) return;
    if (SENALES_ABSURDO.some(re => re.test(o.text || ''))) absurdos.push(q.id + ' ' + o.letter);
  }));
  const rAbs = absurdos.length / (qs.length * 3);
  (rAbs <= BARRERAS.MAX_DISTRACTORES_ABSURDOS ? ok : bad)
    (`${absurdos.length} distractores con frases de relleno (${pct(rAbs)}, máximo ${pct(BARRERAS.MAX_DISTRACTORES_ABSURDOS)})`);
  if (absurdos.length) console.log('        ejemplos: ' + absurdos.slice(0, 6).join(', '));

  // Todo distractor debería nombrar al menos un servicio o concepto de GCP.
  const SERVICIOS = /(compute engine|gke|kubernetes|cloud run|cloud functions|bigquery|cloud sql|spanner|firestore|bigtable|pub\/sub|dataflow|dataproc|composer|cloud storage|iam|vpc|cloud dns|load balanc|interconnect|cloud vpn|cloud nat|kms|secret manager|artifact registry|cloud build|monitoring|logging|vertex|apigee|anthos|memorystore|filestore|datastream|looker|terraform|deployment manager|cloud armor|security command|binary authorization|workload identity|org(anization)? polic)/i;
  const sinServicio = [];
  qs.forEach(q => q.options.forEach(o => {
    if (o.letter === claveDe(q)[0]) return;
    if (!SERVICIOS.test(o.text || '')) sinServicio.push(q.id + ' ' + o.letter);
  }));
  const rSin = sinServicio.length / (qs.length * 3);
  (rSin <= 0.15 ? ok : warn)
    (`${pct(rSin)} de distractores no nombran ningún servicio de GCP (objetivo ≤15%)`);

  // --- 6. alineación con la guía oficial ------------------------------------
  const oficial = PESOS_OFICIALES[cid];
  const conteo = {};
  qs.forEach(q => conteo[q.domainId] = (conteo[q.domainId] || 0) + 1);
  let peor = 0, peorDom = '';
  Object.entries(oficial).forEach(([dom, peso]) => {
    const real = 100 * (conteo[dom] || 0) / qs.length;
    const dif = Math.abs(real - peso);
    if (dif > peor) { peor = dif; peorDom = `${dom} (Google ${peso}%, banco ${real.toFixed(1)}%)`; }
  });
  const sobrantes = Object.keys(conteo).filter(d => !(d in oficial));
  (sobrantes.length === 0 ? ok : bad)
    (`dominios en el banco que no existen en la guía oficial: ${sobrantes.join(', ') || 'ninguno'}`);
  // Un dominio oficial sin preguntas es un área entera del examen sin cubrir.
  const vacios = Object.keys(oficial).filter(d => !conteo[d]);
  (vacios.length === 0 ? ok : bad)
    (`áreas oficiales SIN NINGUNA pregunta: ${vacios.join(', ') || 'ninguna'}`);
  (peor <= BARRERAS.MAX_DESVIO_PESO_DOMINIO ? ok : bad)
    (`mayor desvío de peso de dominio: ${peor.toFixed(1)} puntos — ${peorDom} (máximo ${BARRERAS.MAX_DESVIO_PESO_DOMINIO})`);

  // --- 7. higiene ------------------------------------------------------------
  const ids = new Set(), dupId = [];
  qs.forEach(q => { if (ids.has(q.id)) dupId.push(q.id); ids.add(q.id); });
  (dupId.length === 0 ? ok : bad)(`${dupId.length} IDs duplicados`);
  const sinDoc = qs.filter(q => !DOMINIOS_DOC.test(q.officialDocUrl || ''));
  (sinDoc.length === 0 ? ok : bad)(`${sinDoc.length} preguntas con officialDocUrl fuera de la lista de fuentes autorizadas`);
  if (sinDoc.length) console.log('        ejemplos: ' + sinDoc.slice(0,4).map(q => q.id + ' ' + q.officialDocUrl).join(' | '));
  const claveInvalida = qs.filter(q => {
    const letras = q.options.map(o => o.letter);
    return claveDe(q).some(k => !letras.includes(k));
  }).length;
  (claveInvalida === 0 ? ok : bad)(`${claveInvalida} preguntas cuya clave no corresponde a ninguna opción`);
}

// ===========================================================================
// 8. Case studies de PCA vigentes según la guía oficial de Google.
//    Si Google los cambia, ACTUALIZA ESTA LISTA y reescribe las preguntas.
// ===========================================================================
console.log('\n\x1b[1m--- CASE STUDIES DE PCA ---\x1b[0m');
const CS_VIGENTES = ['altostrat_media', 'cymbal_retail', 'ehr_healthcare', 'knightmotives_automotive'];
const usados = {};
BANCOS.pca.forEach(q => { if (q.caseStudy && q.caseStudy !== 'none') usados[q.caseStudy] = (usados[q.caseStudy] || 0) + 1; });
const retirados = Object.keys(usados).filter(c => !CS_VIGENTES.includes(c));
const nRet = retirados.reduce((a, c) => a + usados[c], 0);
(retirados.length === 0 ? ok : bad)
  (`${nRet} preguntas usan case studies retirados: ${retirados.map(c => c + ' (' + usados[c] + ')').join(', ') || 'ninguno'}`);
console.log('        vigentes según la guía oficial: ' + CS_VIGENTES.join(', '));

console.log(`\n\x1b[1m===== ${fallos} FALLOS, ${avisos} AVISOS =====\x1b[0m`);
if (fallos) console.log('\x1b[31mEl banco NO está listo para entrenar una certificación.\x1b[0m\n');
else console.log('\x1b[32mEl banco supera todas las barreras de fidelidad.\x1b[0m\n');
process.exit(fallos ? 1 : 0);
