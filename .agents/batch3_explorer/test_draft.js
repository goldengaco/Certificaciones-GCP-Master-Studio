/**
 * test_draft.js — Comprehensive validation script for Batch 3 draft
 */
'use strict';
const fs = require('fs');
const path = require('path');

const DOMINIOS_DOC = /^https:\/\/(cloud\.google\.com|ai\.google|sre\.google|firebase\.google\.com|workspace\.google\.com|developers\.google\.com|kubernetes\.io|beam\.apache\.org|agones\.dev|open-match\.dev|protobuf\.dev|developer\.hashicorp\.com|12factor\.net)(\/|$)/;

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

const draftPath = path.join(__dirname, 'draft_batch3.json');
const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));

console.log('=== VALIDATING BATCH 3 DRAFT (' + draft.length + ' items) ===\n');

let errors = 0;
const logError = (msg) => { errors++; console.error('\x1b[31m[FAIL]\x1b[0m ' + msg); };
const logOk = (msg) => console.log('\x1b[32m[PASS]\x1b[0m ' + msg);

// 1. Count
if (draft.length !== 25) logError(`Expected 25 items, found ${draft.length}`);
else logOk(`Item count: 25`);

// 2. Multi-select count & structure
const multi = draft.filter(q => q.isMultiSelect);
if (multi.length !== 4) logError(`Expected exactly 4 multi-select items, found ${multi.length}`);
else logOk(`Multi-select count: ${multi.length} (16%)`);

// Check each item
const letters = ['A', 'B', 'C', 'D'];
const letterCounts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
let outOfRangeCount = 0;
let correctIsLongestCount = 0;
let h1CorrectCount = 0;
const excesses = [];

draft.forEach((q, idx) => {
  const prefix = `[${q.id}]`;
  
  // Taxonomia
  if (!q.sectionId || !q.subsectionId) logError(`${prefix} Missing sectionId or subsectionId`);
  if (!Array.isArray(q.conceptos) || q.conceptos.length < 2) logError(`${prefix} Missing or insufficient conceptos`);
  if (!q.title || !q.scenario || !q.explanation || !q.officialDocUrl) logError(`${prefix} Missing core text fields`);
  
  // Doc URL
  if (!DOMINIOS_DOC.test(q.officialDocUrl)) logError(`${prefix} Invalid officialDocUrl: ${q.officialDocUrl}`);
  
  // Word count in scenario
  const wordCount = q.scenario.trim().split(/\s+/).length;
  if (wordCount < 35 || wordCount > 100) logError(`${prefix} Scenario word count out of expected range: ${wordCount} words`);
  
  // Option lengths
  const lens = q.options.map(o => (o.text || '').length);
  const maxL = Math.max(...lens);
  const minL = Math.min(...lens);
  const delta = (maxL - minL) / maxL;
  if (delta > 0.25) {
    logError(`${prefix} Option length ratio > 25%: min=${minL}, max=${maxL}, delta=${(delta*100).toFixed(1)}%`);
    outOfRangeCount++;
  }
  
  // Multi-select vs single-select
  if (q.isMultiSelect) {
    if (q.options.length !== 5) logError(`${prefix} Multi-select must have 5 options, has ${q.options.length}`);
    if (!Array.isArray(q.correct) || q.correct.length !== q.expectedSelectCount) {
      logError(`${prefix} Multi-select correct array mismatch with expectedSelectCount (${q.expectedSelectCount})`);
    }
    if (!/\b(choose|select|elige|selecciona)\s+(2|3|two|three)\b/i.test(q.scenario)) {
      logError(`${prefix} Multi-select scenario missing explicit 'Choose 2/3' prompt`);
    }
    q.correct.forEach(l => letterCounts[l]++);
  } else {
    if (q.options.length !== 4) logError(`${prefix} Single-select must have 4 options, has ${q.options.length}`);
    if (typeof q.correct !== 'string') logError(`${prefix} Single-select correct must be a string`);
    
    // Hash check
    const expectedLetter = letters[letraCorrecta(q.id, 4)];
    if (q.correct !== expectedLetter) {
      logError(`${prefix} FNV-1a hash key mismatch: expected ${expectedLetter}, got ${q.correct}`);
    }
    letterCounts[q.correct]++;
    
    // Check longest
    const correctOpt = q.options.find(o => o.letter === q.correct);
    const otherOpts = q.options.filter(o => o.letter !== q.correct);
    const meanOther = otherOpts.reduce((s, o) => s + (o.text || '').length, 0) / otherOpts.length;
    const excess = (correctOpt.text || '').length - meanOther;
    excesses.push(excess);
    
    const uniqueMax = lens.filter(l => l === maxL).length === 1;
    if (uniqueMax && correctOpt.text.length === maxL) correctIsLongestCount++;
    
    const longestLetter = q.options[lens.indexOf(maxL)].letter;
    if (longestLetter === q.correct) h1CorrectCount++;
  }
  
  // Distractors
  const corrArray = Array.isArray(q.correct) ? q.correct : [q.correct];
  q.options.forEach(o => {
    if (corrArray.includes(o.letter)) {
      if (q.distractors && q.distractors[o.letter]) {
        logError(`${prefix} distractors contains correct letter '${o.letter}'`);
      }
    } else {
      if (!q.distractors || !q.distractors[o.letter]) {
        logError(`${prefix} Missing distractor rationale for letter '${o.letter}'`);
      }
      // Check absurd phrases
      if (SENALES_ABSURDO.some(re => re.test(o.text || ''))) {
        logError(`${prefix} Option ${o.letter} matches absurd filler pattern: "${o.text}"`);
      }
    }
  });
});

console.log('\n--- PSYCHOMETRIC METRICS ---');
const singleCount = draft.length - multi.length;
const pctLongest = (correctIsLongestCount / singleCount * 100).toFixed(1);
const pctH1 = (h1CorrectCount / singleCount * 100).toFixed(1);
const meanExcess = (excesses.reduce((a, b) => a + b, 0) / singleCount).toFixed(1);

console.log(`Single-select items: ${singleCount}`);
console.log(`Out of length range (>25%): ${outOfRangeCount} / 25`);
console.log(`Correct is longest: ${correctIsLongestCount} / ${singleCount} (${pctLongest}%) [Target: <= 35%]`);
console.log(`H1 blind score: ${h1CorrectCount} / ${singleCount} (${pctH1}%) [Target: <= 45%]`);
console.log(`Mean character excess: ${meanExcess} chars [Target: <= 25]`);

console.log('\n--- KEY DISTRIBUTION ---');
console.log('Single-select keys:');
letters.forEach(l => {
  const c = draft.filter(q => !q.isMultiSelect && q.correct === l).length;
  console.log(`  ${l}: ${c} (${(c/singleCount*100).toFixed(1)}%)`);
});

if (errors === 0) {
  console.log('\n\x1b[32mALL DRAFT CHECKS PASSED PERFECTLY!\x1b[0m\n');
} else {
  console.log(`\n\x1b[31m${errors} ERROR(S) FOUND IN DRAFT\x1b[0m\n`);
  process.exit(1);
}
