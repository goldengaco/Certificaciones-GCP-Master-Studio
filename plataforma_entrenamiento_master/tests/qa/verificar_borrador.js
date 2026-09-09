#!/usr/bin/env node
/**
 * verificar_borrador.js — puerta de entrada para un lote NUEVO, antes de tocar el banco.
 *
 * Por qué existe: `medir_lote.js` mide un lote que YA está aplicado. Para saber si un
 * borrador vale había que copiar el banco, insertarlo y medir — tres pasos que se
 * saltan con prisa. Cada regla de aquí corresponde a un error que ya costó un lote:
 * la correcta que gana por un carácter, el campo `conceptos` que se pierde al copiar
 * una pregunta antigua como plantilla, la URL que devuelve 404.
 *
 * Uso:
 *   node tests/qa/verificar_borrador.js <borrador.json> <cdl|ace|pca> [--urls]
 *
 *   --urls  además comprueba con la red que cada officialDocUrl responde 200.
 *           Lento y necesita salida a internet; hazlo al menos una vez por lote.
 *
 * Sale con código 1 si algo falla. Si sale 0, el borrador está listo para aplicarse
 * con un script tipo `.agents/batch7_worker/apply_batch7.js`.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const RAIZ = path.resolve(__dirname, '..', '..');

const [, , archivo, certArg, ...resto] = process.argv;
if (!archivo || !certArg) {
  console.error('Uso: node tests/qa/verificar_borrador.js <borrador.json> <cdl|ace|pca> [--urls]');
  process.exit(2);
}
const CERT = String(certArg).toLowerCase();
if (!['cdl', 'ace', 'pca'].includes(CERT)) { console.error('cert debe ser cdl, ace o pca'); process.exit(2); }
const COMPROBAR_URLS = resto.includes('--urls');

const V = '\x1b[32m', R = '\x1b[31m', A = '\x1b[33m', G = '\x1b[90m', F = '\x1b[0m', N = '\x1b[1m';
let errores = 0, avisos = 0;
const fallo = m => { errores++; console.log(`  ${R}FALLA${F} ${m}`); };
const bien = m => console.log(`  ${V}ok   ${F} ${m}`);
const aviso = m => { avisos++; console.log(`  ${A}aviso${F} ${m}`); };

// ---------- cargar borrador y banco ----------
let draft;
try { draft = JSON.parse(fs.readFileSync(archivo, 'utf8')); }
catch (e) { console.error('No se pudo leer el borrador:', e.message); process.exit(2); }
if (!Array.isArray(draft)) { console.error('El borrador debe ser un array de preguntas.'); process.exit(2); }

global.window = global;
const VAR = { cdl: 'GCP_CDL_QUESTIONS', ace: 'GCP_ACE_QUESTIONS', pca: 'GCP_PCA_QUESTIONS' }[CERT];
eval(fs.readFileSync(path.join(RAIZ, 'data', `cert_${CERT}.js`), 'utf8'));
const banco = global[VAR];
const porId = new Map(banco.map(q => [q.id, q]));

let taxonomia = null;
try {
  eval(fs.readFileSync(path.join(RAIZ, 'data', 'taxonomia.js'), 'utf8'));
  taxonomia = global.GCP_TAXONOMIA && global.GCP_TAXONOMIA[CERT];
} catch (e) { /* opcional */ }

const clave = q => Array.isArray(q.correct)
  ? q.correct.map(c => String(c).trim().toUpperCase())
  : String(q.correct || '').split(',').map(c => c.trim().toUpperCase()).filter(Boolean);

console.log(`\n${N}VERIFICACIÓN DE BORRADOR${F}  ${archivo}  (${CERT.toUpperCase()}, ${draft.length} ítems)\n`);

// ---------- 1. esquema ----------
console.log(`${N}1. Esquema${F}`);
const CAMPOS = ['id', 'certId', 'domainId', 'subsectionId', 'conceptos', 'scenario', 'options',
                'correct', 'explanation', 'distractors', 'officialDocUrl'];
let malEsquema = [];
draft.forEach(q => {
  const faltan = CAMPOS.filter(c => q[c] === undefined || q[c] === null || q[c] === '');
  if (faltan.length) malEsquema.push(`${q.id || '(sin id)'}: falta ${faltan.join(', ')}`);
});
malEsquema.length
  ? malEsquema.slice(0, 6).forEach(m => fallo(m))
  : bien(`${draft.length}/${draft.length} con los ${CAMPOS.length} campos obligatorios`);

// `conceptos` se pierde al copiar una pregunta antigua como plantilla. Un lote entero
// se rechazó por esto: medir_lote.js lo exige aunque el banco viejo no lo tenga.
const sinConceptos = draft.filter(q => !Array.isArray(q.conceptos) || !q.conceptos.length);
sinConceptos.length
  ? fallo(`${sinConceptos.length} sin 'conceptos' como array no vacío: ${sinConceptos.slice(0,4).map(q=>q.id).join(', ')}`)
  : bien('todos con conceptos (array no vacío)');

const certMal = draft.filter(q => String(q.certId).toLowerCase() !== CERT);
certMal.length ? fallo(`${certMal.length} con certId distinto de '${CERT}'`) : bien(`certId = '${CERT}' en todos`);

// ---------- 2. identidad: no inventar ni perder preguntas ----------
console.log(`\n${N}2. Identidad${F}`);
const nuevos = draft.filter(q => !porId.has(q.id));
const dup = draft.map(q => q.id).filter((x, i, a) => a.indexOf(x) !== i);
dup.length ? fallo(`ids repetidos dentro del borrador: ${[...new Set(dup)].join(', ')}`) : bien('sin ids repetidos en el borrador');
if (nuevos.length === draft.length) {
  bien(`${draft.length} preguntas NUEVAS (ninguna existe en el banco): se añadirán`);
} else if (nuevos.length === 0) {
  bien(`${draft.length} preguntas existentes: se reemplazarán por id`);
} else {
  fallo(`mezcla de ${nuevos.length} nuevas y ${draft.length - nuevos.length} existentes — sepáralas en dos borradores`);
}
// En un reemplazo, la clave no puede apuntar a otro texto sin querer
if (nuevos.length === 0) {
  const cambian = draft.filter(q => {
    const o = porId.get(q.id); if (!o) return false;
    const to = (o.options.find(x => clave(o).includes(String(x.letter).toUpperCase())) || {}).text;
    const tn = (q.options.find(x => clave(q).includes(String(x.letter).toUpperCase())) || {}).text;
    return to !== tn;
  });
  cambian.length
    ? aviso(`${cambian.length} cambian el TEXTO de la respuesta correcta — normal en una reescritura, revisa que sea intencionado`)
    : bien('ninguna cambia el texto de la respuesta correcta');
}

// ---------- 3. opciones y claves ----------
console.log(`\n${N}3. Opciones y claves${F}`);
let malOpc = [];
draft.forEach(q => {
  const cl = clave(q);
  const letras = (q.options || []).map(o => String(o.letter).toUpperCase());
  if (!Array.isArray(q.options) || q.options.length < 4) malOpc.push(`${q.id}: menos de 4 opciones`);
  if (new Set(letras).size !== letras.length) malOpc.push(`${q.id}: letras repetidas`);
  if (!cl.length) malOpc.push(`${q.id}: sin clave`);
  cl.forEach(l => { if (!letras.includes(l)) malOpc.push(`${q.id}: la clave ${l} no existe entre las opciones`); });
  (q.options || []).forEach(o => {
    const l = String(o.letter).toUpperCase();
    if (!cl.includes(l) && !(q.distractors || {})[o.letter] && !(q.distractors || {})[l]) {
      malOpc.push(`${q.id}: falta la razón del distractor ${l}`);
    }
  });
  // R6: prohibido explicar la correcta en distractors
  cl.forEach(l => { if ((q.distractors || {})[l]) malOpc.push(`${q.id}: distractor escrito sobre la clave ${l} (prohibido por R6)`); });
});
malOpc.length ? malOpc.slice(0, 8).forEach(m => fallo(m)) : bien('claves presentes, sin letras repetidas y cada incorrecta con su razón');

// ---------- 4. selección múltiple ----------
console.log(`\n${N}4. Selección múltiple${F}`);
const multi = draft.filter(q => q.isMultiSelect);
let malMulti = [];
multi.forEach(q => {
  const cl = clave(q);
  if (cl.length !== (q.expectedSelectCount || 0)) malMulti.push(`${q.id}: correct(${cl.length}) != expectedSelectCount(${q.expectedSelectCount})`);
  if (cl.length < 2) malMulti.push(`${q.id}: multi-select con menos de 2 correctas`);
  if ((q.options || []).length < 5) malMulti.push(`${q.id}: el contrato pide 5 opciones en multi-select (tiene ${(q.options||[]).length})`);
  if (!/\((choose|elige|seleccione)\s+(two|2|three|3)\.?\s*\)/i.test(q.scenario || '')) {
    malMulti.push(`${q.id}: el enunciado no dice cuántas elegir — añade "(Choose 2.)" o "(Elige 2.)"`);
  }
});
// La trampa inversa: pide dos cosas pero está marcada como respuesta única
const pideDos = draft.filter(q => !q.isMultiSelect &&
  /\b(two|dos|three|tres)\b[^.?]{0,40}\b(actions|steps|options|guardrails|acciones|pasos|medidas|opciones)\b/i.test(q.scenario || ''));
pideDos.forEach(q => malMulti.push(`${q.id}: el enunciado pide dos cosas pero no es multi-select`));
malMulti.length ? malMulti.slice(0, 8).forEach(m => fallo(m)) : bien(`${multi.length} multi-select bien formadas (${(100*multi.length/draft.length).toFixed(1)}% del lote)`);
if (multi.length && (multi.length / draft.length) < 0.12) aviso(`el lote lleva ${(100*multi.length/draft.length).toFixed(1)}% de multi-select; los lotes aprobados van al 16%`);

// ---------- 5. LONGITUDES: la trampa que más lotes ha costado ----------
console.log(`\n${N}5. Longitudes${F}  ${G}(la puerta mide la POSICIÓN, no el promedio)${F}`);
let masLarga = 0, masCorta = 0, unicas = 0, fuera25 = [], detalle = [];
draft.forEach(q => {
  const cl = clave(q);
  const L = (q.options || []).map(o => ({ l: String(o.letter).toUpperCase(), n: (o.text || '').length }));
  if (!L.length) return;
  const max = Math.max(...L.map(x => x.n)), min = Math.min(...L.map(x => x.n));
  if (min > 0 && (max - min) / max > 0.25) fuera25.push(`${q.id} (${min}-${max}, ${(100*(max-min)/max).toFixed(0)}%)`);
  if (cl.length > 1) return;          // (a) y (b) solo cuentan respuesta única
  unicas++;
  const cor = L.find(x => x.l === cl[0]); if (!cor) return;
  // Mismo criterio que medir_lote.js: solo cuenta si la clave es la ÚNICA con la
  // longitud máxima. Con un empate, quien marca "la más larga" tiene que elegir
  // entre dos y no gana nada. Si estos dos medidores no coinciden, el que trabaje
  // con ellos recibe señales contradictorias, que es peor que no medir.
  const unicaMax = L.filter(x => x.n === max).length === 1;
  const unicaMin = L.filter(x => x.n === min).length === 1;
  const esL = cor.n === max && unicaMax, esC = cor.n === min && unicaMin;
  if (esL) masLarga++; if (esC) masCorta++;
  const orden = L.slice().sort((a, b) => a.n - b.n);
  const pos = orden.findIndex(x => x.l === cl[0]) + 1;
  if (esL || esC) detalle.push(`${q.id} clave ${cl[0]} pos ${pos}/${L.length} ${esL ? '(LA MÁS LARGA)' : '(la más corta)'}`);
});
const rA = unicas ? masLarga / unicas : 0;
(rA <= 0.35 ? bien : fallo)(`la correcta es LA MÁS LARGA en ${(100*rA).toFixed(1)}% (${masLarga} de ${unicas}, máximo 35%)`);
const rC = unicas ? masCorta / unicas : 0;
(rC <= 0.35 ? bien : fallo)(`la correcta es la más corta en ${(100*rC).toFixed(1)}% (${masCorta} de ${unicas}, máximo 35%) ${G}— el defecto en espejo${F}`);
fuera25.length
  ? fallo(`${fuera25.length} ítems con más del 25% entre la opción más larga y la más corta (R1): ${fuera25.slice(0,4).join(', ')}`)
  : bien('todos los ítems dentro del ±25% de R1');
if (detalle.length) { console.log(`  ${G}ítems donde la clave queda en un extremo:${F}`); detalle.slice(0, 10).forEach(d => console.log(`     ${d}`)); }
if (!detalle.length && unicas) bien('ninguna clave en un extremo: todas en posición intermedia');

// ---------- 6. reparto de claves ----------
console.log(`\n${N}6. Reparto de claves${F}`);
const cuenta = {}, seq = [];
draft.forEach(q => { const cl = clave(q); if (cl.length === 1) { cuenta[cl[0]] = (cuenta[cl[0]] || 0) + 1; seq.push(cl[0]); } });
const tot = seq.length || 1;
const desbal = Object.entries(cuenta).filter(([, n]) => n / tot > 0.40);
desbal.length
  ? fallo(`clave desbalanceada: ${desbal.map(([l, n]) => `${l} ${(100*n/tot).toFixed(0)}%`).join(', ')} (máximo 40%)`)
  : bien(`reparto ${Object.entries(cuenta).sort().map(([l, n]) => l + ':' + n).join(' ')}`);
let consec = 0; for (let i = 1; i < seq.length; i++) if (seq[i] === seq[i-1]) consec++;
consec > Math.max(2, seq.length * 0.15)
  ? aviso(`${consec} pares de claves iguales consecutivas`)
  : bien(`${consec} pares de claves iguales consecutivas`);

// ---------- 7. escenario y taxonomía ----------
console.log(`\n${N}7. Escenario y taxonomía${F}`);
const RANGO = { cdl: [40, 80], ace: [40, 90], pca: [70, 150] }[CERT];
const largos = draft.filter(q => { const w = (q.scenario || '').trim().split(/\s+/).length; return w < RANGO[0] || w > RANGO[1]; });
largos.length
  ? aviso(`${largos.length} escenarios fuera de ${RANGO[0]}-${RANGO[1]} palabras (R3): ${largos.slice(0,4).map(q=>q.id).join(', ')}`)
  : bien(`escenarios dentro de ${RANGO[0]}-${RANGO[1]} palabras`);
// R3: restricción cuantificada que descarte opciones
// Una restricción puede venir en cifra ("300 seconds"), en letra ("five minutes",
  // "four hours") o como exigencia de exclusividad ("only from", "must not cache").
  // Las tres formas aparecen en lotes ya aprobados: si el aviso salta en dos de cada
  // tres escenarios buenos, se ignora por costumbre y deja de servir para nada.
  const NUM_LETRA = '(one|two|three|four|five|six|seven|eight|nine|ten|twelve|fifteen|thirty|sixty|un|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|quince|treinta|sesenta)';
  const UNIDAD = '(ms|s|sec|second|seconds|segundos?|min|minute|minutes|minutos?|hour|hours|horas?|day|days|d[ií]as?|week|weeks|semanas?|month|months|meses|year|years|años?|GB|TB|PB|MB|Mbps|Gbps|req|rps|qps|IOPS|USD|nodes?|nodos?|instances?|instancias?|replicas?|r[eé]plicas?|regions?|regiones?|zones?|zonas?)';
  const CUANTIF = new RegExp(
    '(\\d+\\s*(%|\\$|€))' +
    '|(\\d[\\d.,]*[-\\s]*' + UNIDAD + '\\b)' +
    '|(\\b' + NUM_LETRA + '[-\\s]' + UNIDAD + '\\b)' +
    '|\\b(RPO|RTO|SLA|SLO|p9[59]|port\\s*\\d+|puerto\\s*\\d+)\\b' +
    '|\\b(zero downtime|no downtime|sin (tiempo de )?inactividad|without downtime)\\b' +
    '|\\b(m[ií]nimo esfuerzo|minimal operational|least operational|least privilege|m[ií]nimo privilegio)\\b' +
    '|\\b(menor coste|lowest cost|most cost[- ]effective|cheapest|sin coste adicional|no additional cost)\\b' +
    '|\\b(only from|only to|solo desde|[uú]nicamente desde|must not|no debe|cannot|does not cover|out of scope|fuera de alcance)\\b' +
    '|\\b(not acceptable|unacceptable|no aceptable|inaceptable|must (stay|remain)|debe seguir|sin (un )?paso posterior|without a post)\\b'
  , 'i');
const sinRestr = draft.filter(q => !CUANTIF.test(q.scenario || ''));
sinRestr.length
  ? aviso(`${sinRestr.length} escenarios sin restricción cuantificada visible (R3), revísalos a mano: ${sinRestr.slice(0,5).map(q=>q.id).join(', ')}`)
  : bien('todos los escenarios con una restricción cuantificada');
if (taxonomia && taxonomia.secciones) {
  const validas = new Set();
  Object.entries(taxonomia.secciones).forEach(([sid, s]) => {
    validas.add(sid);
    Object.keys(s.subsecciones || {}).forEach(k => validas.add(k));
  });
  const malSub = draft.filter(q => !validas.has(q.subsectionId));
  malSub.length
    ? fallo(`${malSub.length} con subsectionId que no está en taxonomia.js: ${[...new Set(malSub.map(q=>q.subsectionId))].slice(0,5).join(', ')}`)
    : bien('subsectionId válidos según taxonomia.js');
} else aviso('no se pudo leer taxonomia.js: comprueba subsectionId a mano');

// ---------- 8. distractores creíbles ----------
console.log(`\n${N}8. Distractores${F}`);
const ABSURDO = [/contratar a (un|una|alguien)/i, /a mano\b/i, /manualmente cada/i, /hoja de c[aá]lculo/i,
  /por correo electr[oó]nico que/i, /promet(a|an|er)/i, /cable(ado)? (de fibra|f[ií]sico|submarino)/i,
  /imprimir|papel\b/i, /custom bash scripts?/i, /cron (job|script).*(curl|loop)/i, /pedir (al|a los) (usuarios?|equipo)/i];
const absurdos = [];
draft.forEach(q => { const cl = clave(q); (q.options || []).forEach(o => {
  if (cl.includes(String(o.letter).toUpperCase())) return;
  if (ABSURDO.some(re => re.test(o.text || ''))) absurdos.push(`${q.id} ${o.letter}`);
}); });
absurdos.length
  ? fallo(`${absurdos.length} distractores con forma de relleno o proceso manual (R2): ${absurdos.slice(0,5).join(', ')}`)
  : bien('ningún distractor con forma de relleno');
// El distractor debe explicar por qué falla EN ESE ESCENARIO, no qué es el servicio
const cortos = [];
draft.forEach(q => Object.entries(q.distractors || {}).forEach(([l, t]) => {
  if (String(t || '').trim().split(/\s+/).length < 8) cortos.push(`${q.id} ${l}`);
}));
cortos.length
  ? aviso(`${cortos.length} razones de distractor de menos de 8 palabras — suelen describir el servicio en vez de por qué falla aquí: ${cortos.slice(0,5).join(', ')}`)
  : bien('las razones de los distractores tienen cuerpo suficiente');

// ---------- 9. URLs ----------
console.log(`\n${N}9. Documentación oficial${F}`);
const DOMINIOS = /^https:\/\/(cloud\.google\.com|ai\.google|sre\.google|firebase\.google\.com|workspace\.google\.com|developers\.google\.com|kubernetes\.io|beam\.apache\.org|agones\.dev|open-match\.dev|protobuf\.dev|developer\.hashicorp\.com|12factor\.net)(\/|$)/;
const malDom = draft.filter(q => !DOMINIOS.test(q.officialDocUrl || ''));
malDom.length
  ? fallo(`${malDom.length} con officialDocUrl fuera de las fuentes autorizadas: ${malDom.slice(0,3).map(q=>q.id).join(', ')}`)
  : bien('todas las URLs en dominios autorizados');
if (COMPROBAR_URLS) {
  const { execSync } = require('child_process');
  const urls = [...new Set(draft.map(q => q.officialDocUrl).filter(Boolean))];
  console.log(`  ${G}comprobando ${urls.length} URLs distintas con la red...${F}`);
  const rotas = [];
  urls.forEach(u => {
    try {
      const code = execSync(`curl -s -o /dev/null -w '%{http_code}' -L --max-time 15 ${JSON.stringify(u)}`, { encoding: 'utf8' }).trim();
      if (code !== '200') rotas.push(`${u} -> ${code}`);
    } catch (e) { rotas.push(`${u} -> sin respuesta`); }
  });
  rotas.length ? rotas.slice(0, 8).forEach(r => fallo(`URL rota: ${r}`)) : bien(`las ${urls.length} URLs responden 200`);
} else {
  aviso('no se comprobaron las URLs con la red — repite con --urls al menos una vez por lote (en el lote 7 apareció un 404)');
}

// ---------- veredicto ----------
console.log(`\n${N}${'='.repeat(64)}${F}`);
if (errores) {
  console.log(`${R}${N}BORRADOR RECHAZADO — ${errores} fallo(s), ${avisos} aviso(s)${F}`);
  console.log(`${G}No lo apliques. Corrige y vuelve a pasar esta verificación.${F}\n`);
  process.exit(1);
}
console.log(`${V}${N}BORRADOR ACEPTADO${F} — 0 fallos, ${avisos} aviso(s)`);
console.log(`${G}Siguiente paso: respalda el banco, aplica por id, y mide con
  node tests/qa/medir_lote.js ${CERT} <ID..ID> --base <instantánea previa>${F}\n`);
