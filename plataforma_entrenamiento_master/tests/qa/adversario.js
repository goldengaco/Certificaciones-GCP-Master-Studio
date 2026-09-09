/**
 * adversario.js — el examinador ciego.
 *
 * Intenta aprobar el simulador SIN SABER NADA de Google Cloud. Ninguna de estas
 * estrategias lee para comprender: miran forma, no fondo. Si alguna supera el
 * 45%, el banco no está midiendo conocimiento, da igual lo bien escritas que
 * parezcan las preguntas de una en una.
 *
 * Esto es lo que la auditoría anterior no pudo ver leyendo 900 preguntas: el
 * defecto no vive en ninguna pregunta, vive en la población.
 *
 * Uso:
 *   node tests/qa/adversario.js              # las tres certificaciones
 *   node tests/qa/adversario.js ace          # una
 *   node tests/qa/adversario.js ace --detalle
 */
'use strict';
const path = require('path');
const RAIZ = path.resolve(__dirname, '..', '..');
const args = process.argv.slice(2);
const CERTS = args.filter(a => ['cdl','ace','pca'].includes(a));
const DETALLE = args.includes('--detalle');
const OBJETIVO = 45;   // ninguna heurística ciega puede superarlo
const AZAR = 25;

const SERVICIOS = /(compute engine|gke|kubernetes|cloud run|cloud functions|bigquery|cloud sql|spanner|firestore|bigtable|pub\/sub|dataflow|dataproc|composer|cloud storage|\biam\b|\bvpc\b|cloud dns|load balanc|interconnect|cloud vpn|cloud nat|\bkms\b|secret manager|artifact registry|cloud build|monitoring|logging|vertex|apigee|anthos|memorystore|filestore|datastream|looker|terraform|cloud armor|security command|binary authorization|workload identity|org(anization)? polic|distributed cloud|agones)/gi;
const ABSOLUTOS = /\b(siempre|nunca|todos?|todas?|únicamente|solo|cualquier|jamás|always|never|all|only|every|any|entirely|completely)\b/i;
const VERBO_CONFIG = /^\s*(configur|desplegar?|deploy|habilit|enable|crear?|create|implement|establecer|set\b|usar?|use\b|aprovision|provision|activar)/i;
const VERBO_DESTRUCT = /^\s*(elimin|borrar?|delete|remove|revoc|desactiv|disable|apagar|detener|migrar todo)/i;

const clave = q => Array.isArray(q.correct) ? q.correct.slice().sort() : [q.correct];
const txt = o => o.text || '';
const acierta = (q, letra) => { const k = clave(q); return k.length === 1 && k[0] === letra; };

/** Cada heurística devuelve la letra que elegiría, o null si no se aplica. */
const HEURISTICAS = {
  'H1  la opción más larga': q => {
    const L = q.options.map(o => txt(o).length), m = Math.max(...L);
    return L.filter(x => x === m).length === 1 ? q.options[L.indexOf(m)].letter : null;
  },
  'H2  la opción más corta': q => {
    const L = q.options.map(o => txt(o).length), m = Math.min(...L);
    return L.filter(x => x === m).length === 1 ? q.options[L.indexOf(m)].letter : null;
  },
  'H5  la que nombra más servicios de GCP': q => {
    const c = q.options.map(o => (txt(o).match(SERVICIOS) || []).length), m = Math.max(...c);
    return m > 0 && c.filter(x => x === m).length === 1 ? q.options[c.indexOf(m)].letter : null;
  },
  'H6  la única con una cifra o unidad': q => {
    const re = /\d+\s*(%|ms|s\b|gb|tb|mb|kb|gbps|mbps|min|h\b|días|days|nodos|nodes|zonas|zones|regiones|regions|\d)/i;
    const hit = q.options.filter(o => re.test(txt(o)));
    return hit.length === 1 ? hit[0].letter : null;
  },
  'H7  la de mayor densidad técnica': q => {
    const d = q.options.map(o => (txt(o).match(/[-_=/`]|\b[a-z]+\.[a-z]+\b|--\w+/g) || []).length);
    const m = Math.max(...d);
    return m > 0 && d.filter(x => x === m).length === 1 ? q.options[d.indexOf(m)].letter : null;
  },
  'H8  la que más repite palabras del escenario': q => {
    const pal = new Set(String(q.scenario || '').toLowerCase().match(/\b[a-záéíóúñ]{5,}\b/g) || []);
    if (!pal.size) return null;
    const s = q.options.map(o => {
      const w = new Set(txt(o).toLowerCase().match(/\b[a-záéíóúñ]{5,}\b/g) || []);
      return [...w].filter(x => pal.has(x)).length;
    });
    const m = Math.max(...s);
    return m > 0 && s.filter(x => x === m).length === 1 ? q.options[s.indexOf(m)].letter : null;
  },
  'H9  la que NO contiene un absoluto': q => {
    const sin = q.options.filter(o => !ABSOLUTOS.test(txt(o)));
    return sin.length === 1 ? sin[0].letter : null;
  },
  'H10 verbo de configurar, no de borrar': q => {
    const cfg = q.options.filter(o => VERBO_CONFIG.test(txt(o)) && !VERBO_DESTRUCT.test(txt(o)));
    return cfg.length === 1 ? cfg[0].letter : null;
  },
};
// H3 y H4 se calculan aparte porque no dependen de una sola pregunta.

function evaluar(qs) {
  const simples = qs.filter(q => !q.isMultiSelect);
  const n = simples.length || 1;
  const filas = [];

  for (const [nombre, fn] of Object.entries(HEURISTICAS)) {
    let ok = 0, aplicables = 0;
    simples.forEach(q => { const l = fn(q); if (l) { aplicables++; if (acierta(q, l)) ok++; } });
    // Cuando la heurística no se aplica, el adversario responde al azar.
    const puntaje = 100 * (ok + (n - aplicables) * 0.25) / n;
    filas.push({ nombre, puntaje, cobertura: 100 * aplicables / n });
  }

  // H3: siempre la misma letra.
  const L = ['A','B','C','D'];
  const h3 = Math.max(...L.map(l => 100 * simples.filter(q => acierta(q, l)).length / n));
  filas.push({ nombre: 'H3  siempre la misma letra', puntaje: h3, cobertura: 100 });

  // H4: la siguiente letra del ciclo respecto a la anterior.
  let ok4 = 0;
  for (let i = 1; i < simples.length; i++) {
    const prev = clave(simples[i-1])[0];
    const pred = L[(L.indexOf(prev) + 1) % 4];
    if (acierta(simples[i], pred)) ok4++;
  }
  filas.push({ nombre: 'H4  siguiente letra del ciclo', puntaje: 100 * ok4 / n, cobertura: 100 });

  // Conjunto: voto por mayoría de todas las heurísticas que se aplican.
  let okE = 0;
  simples.forEach(q => {
    const votos = {};
    Object.values(HEURISTICAS).forEach(fn => { const l = fn(q); if (l) votos[l] = (votos[l] || 0) + 1; });
    const ent = Object.entries(votos).sort((a,b) => b[1] - a[1]);
    if (!ent.length) { okE += 0.25; return; }
    const max = ent[0][1], empate = ent.filter(e => e[1] === max);
    if (empate.length === 1) { if (acierta(q, empate[0][0])) okE++; }
    else if (empate.some(e => acierta(q, e[0]))) okE += 1 / empate.length;
  });
  filas.push({ nombre: 'CONJUNTO  voto por mayoría', puntaje: 100 * okE / n, cobertura: 100, conjunto: true });

  return { filas, n: simples.length, total: qs.length };
}

global.window = {};
let fallos = 0;
const lista = CERTS.length ? CERTS : ['cdl','ace','pca'];

console.log('\n\x1b[1m===== EL EXAMINADOR CIEGO =====\x1b[0m');
console.log('Ninguna estrategia que ignore el contenido puede superar el ' + OBJETIVO + '%. El azar da ' + AZAR + '%.\n');

for (const cert of lista) {
  delete require.cache[require.resolve(path.join(RAIZ,'data',`cert_${cert}.js`))];
  require(path.join(RAIZ,'data',`cert_${cert}.js`));
  const qs = global.window[`GCP_${cert.toUpperCase()}_QUESTIONS`] || [];
  const r = evaluar(qs);
  console.log(`\x1b[1m--- ${cert.toUpperCase()} (${r.total} ítems, ${r.n} de respuesta única) ---\x1b[0m`);
  r.filas.sort((a,b) => b.puntaje - a.puntaje).forEach(f => {
    const mal = f.puntaje > OBJETIVO;
    if (mal) fallos++;
    const barra = '█'.repeat(Math.round(f.puntaje / 2.5));
    console.log(`  ${mal ? '\x1b[31mFALLA\x1b[0m' : '\x1b[32mPASA \x1b[0m'} ${f.nombre.padEnd(38)} ${f.puntaje.toFixed(1).padStart(5)}%  ${mal ? '\x1b[31m' : '\x1b[90m'}${barra}\x1b[0m` +
                (DETALLE ? `   (se aplica al ${f.cobertura.toFixed(0)}%)` : ''));
  });
  const peor = r.filas[0];
  console.log(`  \x1b[1m→ techo del adversario ciego: ${peor.puntaje.toFixed(1)}%\x1b[0m  (${peor.nombre.trim()})\n`);
}

console.log(fallos
  ? `\x1b[31m${fallos} heurística(s) por encima del ${OBJETIVO}%. El banco NO mide conocimiento.\x1b[0m\n`
  : `\x1b[32mNinguna heurística ciega supera el ${OBJETIVO}%. El banco resiste al adversario.\x1b[0m\n`);
process.exit(fallos ? 1 : 0);
