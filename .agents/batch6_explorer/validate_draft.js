const fs = require('fs');
const path = require('path');

const DOMINIOS_DOC = /^https:\/\/(cloud\.google\.com|ai\.google|sre\.google|firebase\.google\.com|workspace\.google\.com|developers\.google\.com|kubernetes\.io|beam\.apache\.org|agones\.dev|open-match\.dev|protobuf\.dev|developer\.hashicorp\.com|12factor\.net)(\/|$)/;

const SERVICIOS = /(compute engine|gke|kubernetes|cloud run|cloud functions|bigquery|cloud sql|spanner|firestore|bigtable|pub\/sub|dataflow|dataproc|composer|cloud storage|\biam\b|\bvpc\b|cloud dns|load balanc|interconnect|cloud vpn|cloud nat|\bkms\b|secret manager|artifact registry|cloud build|monitoring|logging|vertex|apigee|anthos|memorystore|filestore|datastream|looker|terraform|cloud armor|security command|binary authorization|workload identity|org(anization)? polic|distributed cloud|agones)/gi;
const ABSOLUTOS = /\b(siempre|nunca|todos?|todas?|únicamente|solo|cualquier|jamás|always|never|all|only|every|any|entirely|completely)\b/i;
const VERBO_CONFIG = /^\s*(configur|desplegar?|deploy|habilit|enable|crear?|create|implement|establecer|set\b|usar?|use\b|aprovision|provision|activar|provision|generate|add\b|purchase|run\b|reserve|mount)/i;
const VERBO_DESTRUCT = /^\s*(elimin|borrar?|delete|remove|revoc|desactiv|disable|apagar|detener|migrar todo)/i;

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

function letraCorrecta(id, numOpciones) {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % numOpciones;
}

const items = JSON.parse(fs.readFileSync(path.join(__dirname, 'draft_batch6.json'), 'utf8'));

console.log('====================================================');
console.log('VALIDATING DRAFT BATCH 6 (' + items.length + ' questions)');
console.log('====================================================\n');

let errors = 0;
let warnings = 0;

function check(cond, msg, isWarn = false) {
  if (cond) {
    console.log('  \x1b[32m[PASS]\x1b[0m ' + msg);
  } else {
    if (isWarn) {
      warnings++;
      console.log('  \x1b[33m[WARN]\x1b[0m ' + msg);
    } else {
      errors++;
      console.log('  \x1b[31m[FAIL]\x1b[0m ' + msg);
    }
  }
}

// 1. Total items
check(items.length === 25, 'Total items count is exactly 25 (found ' + items.length + ')');

// 2. Multi-select count
const multis = items.filter(q => q.isMultiSelect);
check(multis.length === 4, 'Multi-select count is exactly 4 (16.0%, found ' + multis.length + ')');

// 3. Check individual items
items.forEach((q, idx) => {
  const prefix = '[' + q.id + '] ';
  
  // Section and subsection
  check(q.sectionId && q.sectionName && q.subsectionId && q.subsectionName, prefix + 'Has valid section/subsection fields');
  check(Array.isArray(q.conceptos) && q.conceptos.length >= 2, prefix + 'Has valid conceptos array (length ' + (q.conceptos ? q.conceptos.length : 0) + ')');
  
  // Clean schema
  check(q.isTrap === undefined && q.trapType === undefined, prefix + 'Clean schema without isTrap/trapType');
  
  // Scenario length
  const wordCount = (q.scenario || '').trim().split(/\s+/).length;
  check(wordCount >= 35 && wordCount <= 95, prefix + 'Scenario word count is ' + wordCount + ' words (target 40-90)', wordCount < 40 || wordCount > 90);
  
  // Options count & length delta
  const optCount = q.isMultiSelect ? 5 : 4;
  check(q.options.length === optCount, prefix + 'Has exactly ' + optCount + ' options (found ' + q.options.length + ')');
  
  const lens = q.options.map(o => (o.text || '').length);
  const maxLen = Math.max(...lens);
  const minLen = Math.min(...lens);
  const delta = (maxLen - minLen) / maxLen;
  check(delta <= 0.25, prefix + 'Option length delta is ' + (delta * 100).toFixed(1) + '% (max: ' + maxLen + ', min: ' + minLen + ', limit <= 25%)');
  
  // Key assignment check
  if (q.isMultiSelect) {
    check(q.expectedSelectCount === 2 || q.expectedSelectCount === 3, prefix + 'expectedSelectCount is ' + q.expectedSelectCount);
    check(Array.isArray(q.correct) && q.correct.length === q.expectedSelectCount, prefix + 'correct array length matches expectedSelectCount (' + JSON.stringify(q.correct) + ')');
    const primaryHash = ['A','B','C','D','E'][letraCorrecta(q.id, 5)];
    check(q.correct.includes(primaryHash), prefix + 'Multi-select includes primary FNV-1a hash key (' + primaryHash + ') in correct: ' + JSON.stringify(q.correct));
    check(/\b(Choose 2\.|Choose 3\.)/i.test(q.scenario), prefix + 'Scenario ends with explicit selection count prompt');
  } else {
    const expectedLetter = ['A','B','C','D'][letraCorrecta(q.id, 4)];
    check(q.correct === expectedLetter, prefix + 'Correct answer is ' + q.correct + ' matching FNV-1a hash (' + expectedLetter + ')');
    check(!/\b(Choose 2|Choose 3|two actions|two steps)\b/i.test(q.scenario), prefix + 'Single select does not ask for multiple choices');
  }
  
  // Official doc URL
  check(DOMINIOS_DOC.test(q.officialDocUrl), prefix + 'OfficialDocUrl is valid: ' + q.officialDocUrl);
  
  // Distractors
  const corrArray = Array.isArray(q.correct) ? q.correct : [q.correct];
  const incorrectLetters = q.options.map(o => o.letter).filter(l => !corrArray.includes(l));
  incorrectLetters.forEach(l => {
    check(q.distractors && q.distractors[l], prefix + 'Has distractor rationale for option ' + l);
  });
  corrArray.forEach(l => {
    check(!q.distractors || !q.distractors[l], prefix + 'Does not have distractor entry for correct key ' + l);
  });
  
  // Absurd distractors check
  incorrectLetters.forEach(l => {
    const optText = q.options.find(o => o.letter === l)?.text || '';
    const hasAbsurd = SENALES_ABSURDO.some(re => re.test(optText));
    check(!hasAbsurd, prefix + 'Distractor ' + l + ' has no absurd/filler phrases');
  });
});

// 4. Batch-level metrics
console.log('\n--- BATCH-LEVEL FIDELITY METRICS ---');
const simples = items.filter(q => !q.isMultiSelect);
const n = simples.length;

// (a) Longest is correct
let longestIsCorrect = 0;
let h1Correct = 0;
let h2Correct = 0;
let excesses = [];

simples.forEach(q => {
  const lens = q.options.map(o => (o.text || '').length);
  const maxL = Math.max(...lens);
  const minL = Math.min(...lens);
  const isUniqueMax = lens.filter(l => l === maxL).length === 1;
  const longestLetter = q.options[lens.indexOf(maxL)].letter;
  const shortestLetter = q.options[lens.indexOf(minL)].letter;
  
  if (isUniqueMax && longestLetter === q.correct) longestIsCorrect++;
  if (longestLetter === q.correct) h1Correct++;
  if (shortestLetter === q.correct) h2Correct++;
  
  const corrOpt = q.options.find(o => o.letter === q.correct);
  const otherOpts = q.options.filter(o => o.letter !== q.correct);
  const otherAvg = otherOpts.reduce((s, o) => s + (o.text || '').length, 0) / otherOpts.length;
  excesses.push((corrOpt.text || '').length - otherAvg);
});

const pctLongest = (100 * longestIsCorrect / n).toFixed(1);
const pctH1 = (100 * h1Correct / n).toFixed(1);
const pctH2 = (100 * h2Correct / n).toFixed(1);
const avgExcess = (excesses.reduce((a, b) => a + b, 0) / n).toFixed(1);

check(pctLongest <= 35, '(a) Correct is longest: ' + pctLongest + '% (barrier <= 35.0%)');
check(pctH1 <= 45, '(b) Blind H1 (pick longest): ' + pctH1 + '% (barrier <= 45.0%)');
check(pctH2 <= 40, 'Blind H2 (pick shortest): ' + pctH2 + '% (barrier <= 40.0%)');
check(Math.abs(avgExcess) <= 25, 'Average character excess: ' + avgExcess + ' chars (barrier <= 25.0)');

// Letter distribution for single-select
const letterCounts = { A: 0, B: 0, C: 0, D: 0 };
simples.forEach(q => letterCounts[q.correct]++);
console.log('Single-select letter distribution:', letterCounts);
['A','B','C','D'].forEach(l => {
  const p = 100 * letterCounts[l] / n;
  check(p <= 35, 'Letter ' + l + ' frequency: ' + p.toFixed(1) + '% (barrier <= 35%)');
});

// Adversary Heuristics
console.log('\n--- ADVERSARY HEURISTICS ON DRAFT BATCH ---');
const txt = o => o.text || '';
const acierta = (q, l) => q.correct === l;

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

for (const [nombre, fn] of Object.entries(HEURISTICAS)) {
  let ok = 0, aplicables = 0;
  simples.forEach(q => {
    const l = fn(q);
    if (l) {
      aplicables++;
      if (acierta(q, l)) ok++;
    }
  });
  const score = 100 * (ok + (n - aplicables) * 0.25) / n;
  check(score <= 45.0, nombre + ': ' + score.toFixed(1) + '% (coverage: ' + (100 * aplicables / n).toFixed(0) + '%)');
}

// Ensemble vote
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
const conjuntoScore = 100 * okE / n;
check(conjuntoScore <= 45.0, 'CONJUNTO (voto por mayoría): ' + conjuntoScore.toFixed(1) + '% (barrier <= 45.0%)');

console.log('\n====================================================');
console.log('SUMMARY: ' + (errors === 0 ? '\x1b[32mALL ' + (items.length * 9 + 15) + ' CHECKS PASSED (0 ERRORS)\x1b[0m' : '\x1b[31m' + errors + ' ERRORS FOUND\x1b[0m') + (warnings ? ' (' + warnings + ' warnings)' : ''));
console.log('====================================================\n');

process.exit(errors ? 1 : 0);