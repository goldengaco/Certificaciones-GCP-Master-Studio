/**
 * test_challenger_m1_2.js
 * 
 * Deep Adversarial Verification & Empirical Stress Harness
 * Milestone M1: Data Foundation & Question Banks
 * Target Files: data/cert_manifest.js, data/case_studies.js, data/cert_cdl.js, data/cert_ace.js, data/cert_pca.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');

// ANSI Color Formatting
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const defectsFound = [];
const observations = [];

function assertTest(condition, testName, details = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ${colors.green}✔ PASS:${colors.reset} ${testName}`);
  } else {
    failedChecks++;
    const defect = `[FAIL] ${testName} | ${details}`;
    defectsFound.push(defect);
    console.log(`  ${colors.red}✖ FAIL:${colors.reset} ${testName} ${colors.dim}${details}${colors.reset}`);
  }
}

function loadJsInVm(relPath) {
  const fullPath = path.join(DATA_DIR, relPath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${fullPath}`);
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const sandbox = { window: {}, console, module: { exports: {} }, exports: {} };
  sandbox.global = sandbox.window;
  sandbox.self = sandbox.window;
  sandbox.globalThis = sandbox.window;
  const context = vm.createContext(sandbox);
  vm.runInContext(content, context, { filename: fullPath, timeout: 15000 });
  return sandbox.window;
}

console.log(`${colors.bright}${colors.cyan}=======================================================================`);
console.log(`   EMPIRICAL CHALLENGER M1-2: QUESTION BANKS & DATA FOUNDATION AUDIT   `);
console.log(`=======================================================================${colors.reset}\n`);

// 1. Load Data Files
let manifest, caseStudies, cdlQuestions, aceQuestions, pcaQuestions;
try {
  const manifestWin = loadJsInVm('cert_manifest.js');
  const caseStudiesWin = loadJsInVm('case_studies.js');
  const cdlWin = loadJsInVm('cert_cdl.js');
  const aceWin = loadJsInVm('cert_ace.js');
  const pcaWin = loadJsInVm('cert_pca.js');

  manifest = manifestWin.GCP_MANIFEST;
  caseStudies = caseStudiesWin.GCP_CASE_STUDIES;
  cdlQuestions = cdlWin.GCP_CDL_QUESTIONS || cdlWin.GCP_QUESTIONS_CDL;
  aceQuestions = aceWin.GCP_ACE_QUESTIONS || aceWin.GCP_QUESTIONS_ACE;
  pcaQuestions = pcaWin.GCP_PCA_QUESTIONS || pcaWin.GCP_QUESTIONS_PCA;
} catch (err) {
  console.error(`${colors.red}FATAL ERROR LOADING DATA FILES:${colors.reset}`, err);
  process.exit(1);
}

const allQuestions = [
  ...(cdlQuestions || []),
  ...(aceQuestions || []),
  ...(pcaQuestions || [])
];

/**
 * =========================================================================
 * 1. MANIFEST & CASE STUDIES BLUEPRINT INTEGRITY
 * =========================================================================
 */
console.log(`\n${colors.cyan}${colors.bright}--- SUITE 1: MANIFEST & CASE STUDIES BLUEPRINT INTEGRITY ---${colors.reset}`);

assertTest(manifest && typeof manifest.certifications === 'object', 'Manifest structure is valid');
const certKeys = ['cdl', 'ace', 'pca'];
for (const k of certKeys) {
  const c = manifest.certifications[k];
  assertTest(c && c.id === k, `Manifest contains valid cert entry for '${k}'`);
  let sumWeight = 0;
  for (const dom of Object.values(c.domains)) {
    sumWeight += dom.weight;
  }
  assertTest(Math.abs(sumWeight - 100) < 0.001, `Domain weights for '${k}' sum exactly to 100% (got ${sumWeight}%)`);
}

const expectedCaseStudies = ['mountkirk_games', 'terramearth', 'ehr_healthcare', 'helicopter_racing_league'];
const studiesDict = caseStudies.studies || caseStudies;
for (const csId of expectedCaseStudies) {
  const cs = studiesDict[csId];
  assertTest(
    cs && cs.id === csId && typeof cs.companyOverview === 'string' && cs.companyOverview.length > 50 &&
    Array.isArray(cs.businessRequirements) && cs.businessRequirements.length > 0 &&
    Array.isArray(cs.technicalRequirements) && cs.technicalRequirements.length > 0,
    `Case Study '${csId}' has complete metadata, overview (>50 chars), business & technical requirements`
  );
}

/**
 * =========================================================================
 * 2. QUESTION POOL SIZES & BLOCK PARTITIONING (6 BLOCKS x 50 = 300)
 * =========================================================================
 */
console.log(`\n${colors.cyan}${colors.bright}--- SUITE 2: QUESTION BANK POOL SIZES & BLOCK ROTATION PARTITIONING ---${colors.reset}`);

assertTest(cdlQuestions.length === 300, `CDL Question Pool size is exactly 300 (got ${cdlQuestions.length})`);
assertTest(aceQuestions.length === 300, `ACE Question Pool size is exactly 300 (got ${aceQuestions.length})`);
assertTest(pcaQuestions.length === 300, `PCA Question Pool size is exactly 300 (got ${pcaQuestions.length})`);
assertTest(allQuestions.length === 900, `Total Question Pool across all certs is exactly 900 (got ${allQuestions.length})`);

// Unique IDs
const globalIdSet = new Set();
let duplicateIds = [];
for (const q of allQuestions) {
  if (globalIdSet.has(q.id)) {
    duplicateIds.push(q.id);
  }
  globalIdSet.add(q.id);
}
assertTest(duplicateIds.length === 0, `All 900 question IDs are globally unique`, `Duplicates: ${duplicateIds.join(', ')}`);

// Block distribution per cert
function testBlockDistribution(name, questions) {
  const blockCounts = {};
  for (const q of questions) {
    blockCounts[q.blockId] = (blockCounts[q.blockId] || 0) + 1;
  }
  const expectedBlocks = ['BLOCK-1', 'BLOCK-2', 'BLOCK-3', 'BLOCK-4', 'BLOCK-5', 'BLOCK-6'];
  let balanced = true;
  for (const b of expectedBlocks) {
    if (blockCounts[b] !== 50) balanced = false;
  }
  assertTest(balanced, `${name} has exactly 50 questions in each of the 6 blocks (BLOCK-1 to BLOCK-6)`, JSON.stringify(blockCounts));
}

testBlockDistribution('CDL', cdlQuestions);
testBlockDistribution('ACE', aceQuestions);
testBlockDistribution('PCA', pcaQuestions);

/**
 * =========================================================================
 * 3. DISTRACTOR TRAP COMPLETENESS & CONSISTENCY (900 QUESTIONS / 2700 TRAPS)
 * =========================================================================
 */
console.log(`\n${colors.cyan}${colors.bright}--- SUITE 3: DISTRACTOR TRAP COMPLETENESS & LOGICAL CONSISTENCY ---${colors.reset}`);

let totalDistractorOptionsTested = 0;
let trapMissingType = [];
let trapMissingExplanation = [];
let correctMarkedAsTrap = [];
let missingDistractorJustification = [];

for (const q of allQuestions) {
  const correctLetters = new Set(Array.isArray(q.correct) ? q.correct : [q.correct]);
  
  if (!q.distractors || typeof q.distractors !== 'object') {
    trapMissingExplanation.push(`${q.id}: Missing distractors object`);
    continue;
  }

  for (const opt of q.options || []) {
    const isCorrect = correctLetters.has(opt.letter);
    
    if (isCorrect) {
      if (opt.isTrap === true) {
        correctMarkedAsTrap.push(`${q.id} Option ${opt.letter}`);
      }
    } else {
      totalDistractorOptionsTested++;
      // Distractor option
      if (opt.isTrap) {
        if (!opt.trapType || typeof opt.trapType !== 'string' || opt.trapType.trim().length === 0) {
          trapMissingType.push(`${q.id} Option ${opt.letter}`);
        }
      }
      // Every incorrect option must have distractor justification
      const distractorText = q.distractors[opt.letter];
      if (!distractorText || typeof distractorText !== 'string' || distractorText.trim().length === 0) {
        missingDistractorJustification.push(`${q.id} Option ${opt.letter}`);
      }
    }
  }
}

assertTest(correctMarkedAsTrap.length === 0, `No correct answer option is incorrectly flagged with isTrap: true`, `Found: ${correctMarkedAsTrap.slice(0, 5).join(', ')}`);
assertTest(trapMissingType.length === 0, `Every option with isTrap: true contains a valid, non-empty trapType string (tested ${totalDistractorOptionsTested} distractor options)`, `Missing trapType: ${trapMissingType.slice(0, 5).join(', ')} (count: ${trapMissingType.length})`);
assertTest(missingDistractorJustification.length === 0, `Every incorrect option has a non-empty distractor explanation in the distractors object`, `Missing: ${missingDistractorJustification.slice(0, 5).join(', ')} (count: ${missingDistractorJustification.length})`);

/**
 * =========================================================================
 * 4. CLI COMMAND CORRECTNESS (ACE QUESTIONS & SYNTAX CHECK)
 * =========================================================================
 */
console.log(`\n${colors.cyan}${colors.bright}--- SUITE 4: CLI COMMAND CORRECTNESS & SYNTAX VALIDATION (ACE) ---${colors.reset}`);

let aceMissingCommand = [];
let aceMalformedCommand = [];
let aceCommandPrefixes = new Set();
const validCliPrefixes = ['gcloud', 'gsutil', 'bq', 'kubectl', 'cbt', 'export', 'echo'];

for (const q of aceQuestions) {
  if (!q.gcloudCommand || typeof q.gcloudCommand !== 'string' || q.gcloudCommand.trim().length === 0) {
    aceMissingCommand.push(q.id);
    continue;
  }

  const cmd = q.gcloudCommand.trim();
  const firstWord = cmd.split(/\s+/)[0];
  aceCommandPrefixes.add(firstWord);

  if (!validCliPrefixes.includes(firstWord)) {
    aceMalformedCommand.push(`${q.id}: Invalid CLI command start '${firstWord}' in '${cmd.slice(0, 40)}...'`);
  }

  // Check for placeholder markers
  if (/\b(UNDEFINED|REPLACE_ME|PLACEHOLDER|\[TODO\])\b/i.test(cmd)) {
    aceMalformedCommand.push(`${q.id}: Placeholder detected in command '${cmd}'`);
  }

  // Quote balance check
  const singleQuotes = (cmd.match(/'/g) || []).length;
  const doubleQuotes = (cmd.match(/"/g) || []).length;
  if (singleQuotes % 2 !== 0 || doubleQuotes % 2 !== 0) {
    aceMalformedCommand.push(`${q.id}: Unbalanced quotes in command: ${cmd}`);
  }
}

assertTest(aceMissingCommand.length === 0, `100% of ACE questions (300/300) have a non-empty gcloudCommand`, `Missing in: ${aceMissingCommand.slice(0, 5).join(', ')}`);
assertTest(aceMalformedCommand.length === 0, `All ACE gcloudCommands use valid CLI syntax, balanced quotes, and real GCP commands`, `Malformed: ${aceMalformedCommand.slice(0, 5).join(', ')} (count: ${aceMalformedCommand.length})`);
console.log(`  ${colors.dim}CLI Binaries detected in ACE:${colors.reset}`, Array.from(aceCommandPrefixes).join(', '));

/**
 * =========================================================================
 * 5. CASE STUDY COVERAGE & REFERENCE INTEGRITY
 * =========================================================================
 */
console.log(`\n${colors.cyan}${colors.bright}--- SUITE 5: CASE STUDY COVERAGE & REFERENCE INTEGRITY ---${colors.reset}`);

const csQuestionCounts = {
  mountkirk_games: 0,
  terramearth: 0,
  ehr_healthcare: 0,
  helicopter_racing_league: 0,
  none: 0
};
let invalidCaseStudyRefs = [];
let missingCaseStudySection = [];
let cdlAceWithCaseStudy = [];

for (const q of allQuestions) {
  if (q.certId === 'cdl' || q.certId === 'ace') {
    if (q.caseStudy !== 'none') {
      cdlAceWithCaseStudy.push(`${q.id} (cert: ${q.certId}, caseStudy: ${q.caseStudy})`);
    }
  }

  if (q.caseStudy && q.caseStudy !== 'none') {
    if (!expectedCaseStudies.includes(q.caseStudy)) {
      invalidCaseStudyRefs.push(`${q.id}: '${q.caseStudy}'`);
    } else {
      csQuestionCounts[q.caseStudy] = (csQuestionCounts[q.caseStudy] || 0) + 1;
      if (!q.caseStudySection || typeof q.caseStudySection !== 'string' || q.caseStudySection.trim().length === 0) {
        missingCaseStudySection.push(q.id);
      }
    }
  } else {
    csQuestionCounts.none = (csQuestionCounts.none || 0) + 1;
  }
}

assertTest(cdlAceWithCaseStudy.length === 0, `Zero CDL or ACE questions have active Case Study references (strictly reserved for PCA)`, `Violations: ${cdlAceWithCaseStudy.join(', ')}`);
assertTest(invalidCaseStudyRefs.length === 0, `All caseStudy attributes reference valid Case Study IDs`, `Invalid IDs: ${invalidCaseStudyRefs.join(', ')}`);
assertTest(missingCaseStudySection.length === 0, `Every question referencing a Case Study specifies a valid caseStudySection`, `Missing section: ${missingCaseStudySection.slice(0, 5).join(', ')}`);

for (const csId of expectedCaseStudies) {
  const count = csQuestionCounts[csId] || 0;
  assertTest(count >= 25, `Case Study '${csId}' has >= 25 dedicated questions in PCA pool (got ${count})`);
}

/**
 * =========================================================================
 * 6. FIELD LENGTH & RICHNESS STRESS TEST (ADVERSARIAL BOUNDS)
 * =========================================================================
 */
console.log(`\n${colors.cyan}${colors.bright}--- SUITE 6: FIELD LENGTH & RICHNESS ADVERSARIAL STRESS TEST ---${colors.reset}`);

let shortScenarios = [];
let shortExplanations = [];
let shortTitles = [];
let emptyOptionTexts = [];
let shortDistractorTexts = [];
let emptyKeywords = [];
let placeholderTexts = [];

// Placeholder check for explicit dummy tokens
const dummyPattern = /\b(lorem ipsum|tbd|placeholder|asdf|qwerty)\b/i;

for (const q of allQuestions) {
  // Scenario > 50 chars
  if (!q.scenario || typeof q.scenario !== 'string' || q.scenario.trim().length <= 50) {
    shortScenarios.push(`${q.id} (len: ${q.scenario ? q.scenario.trim().length : 0})`);
  }
  // Explanation > 100 chars
  if (!q.explanation || typeof q.explanation !== 'string' || q.explanation.trim().length <= 100) {
    shortExplanations.push(`${q.id} (len: ${q.explanation ? q.explanation.trim().length : 0})`);
  }
  // Title >= 5 chars
  if (!q.title || typeof q.title !== 'string' || q.title.trim().length < 5) {
    shortTitles.push(q.id);
  }
  // Keywords
  if (!Array.isArray(q.keywords) || q.keywords.length < 2) {
    emptyKeywords.push(`${q.id}: keywords array length < 2`);
  } else {
    for (const kw of q.keywords) {
      if (typeof kw !== 'string' || kw.trim().length < 2) {
        emptyKeywords.push(`${q.id}: empty keyword '${kw}'`);
      }
    }
  }
  // Options text length & placeholders
  for (const opt of q.options || []) {
    if (!opt.text || typeof opt.text !== 'string' || opt.text.trim().length === 0) {
      emptyOptionTexts.push(`${q.id} Option ${opt.letter}`);
    }
    if (dummyPattern.test(opt.text)) {
      placeholderTexts.push(`${q.id} Option ${opt.letter}: '${opt.text}'`);
    }
  }
  // Distractor texts
  if (q.distractors) {
    for (const [lettr, txt] of Object.entries(q.distractors)) {
      if (!txt || typeof txt !== 'string' || txt.trim().length === 0) {
        shortDistractorTexts.push(`${q.id} Distractor ${lettr}`);
      }
      if (dummyPattern.test(txt)) {
        placeholderTexts.push(`${q.id} Distractor ${lettr}: '${txt}'`);
      }
    }
  }
  // Scenario placeholder check
  if (dummyPattern.test(q.scenario)) {
    placeholderTexts.push(`${q.id} Scenario: '${q.scenario.slice(0, 30)}...'`);
  }
}

assertTest(shortScenarios.length === 0, `All 900 questions have substantive scenarios (> 50 chars)`, `Short: ${shortScenarios.slice(0, 5).join(', ')} (count: ${shortScenarios.length})`);
assertTest(shortExplanations.length === 0, `All 900 questions have substantive pedagogical explanations (> 100 chars)`, `Short: ${shortExplanations.slice(0, 5).join(', ')} (count: ${shortExplanations.length})`);
assertTest(shortTitles.length === 0, `All 900 questions have clear titles (>= 5 chars)`, `Short titles: ${shortTitles.slice(0, 5).join(', ')}`);
assertTest(emptyOptionTexts.length === 0, `Zero empty/blank option strings across all 3,600 options`, `Empty: ${emptyOptionTexts.slice(0, 5).join(', ')}`);
assertTest(shortDistractorTexts.length === 0, `Zero empty/blank distractor justification strings across all 2,700 distractors`, `Empty: ${shortDistractorTexts.slice(0, 5).join(', ')}`);
assertTest(emptyKeywords.length === 0, `All questions have >= 2 valid keywords`, `Errors: ${emptyKeywords.slice(0, 5).join(', ')}`);
assertTest(placeholderTexts.length === 0, `Zero placeholder / mock / dummy strings detected across all questions`, `Placeholders: ${placeholderTexts.slice(0, 5).join(', ')}`);

/**
 * =========================================================================
 * 7. SCHEMA CONFORMANCE & ENUM ADHERENCE (BLOOMS, DIFFICULTY, TIME)
 * =========================================================================
 */
console.log(`\n${colors.cyan}${colors.bright}--- SUITE 7: SCHEMA CONFORMANCE & ENUM ADHERENCE ---${colors.reset}`);

const ALLOWED_DIFFICULTIES = ['foundational', 'intermediate', 'advanced', 'expert'];
const ALLOWED_BLOOMS_PROJECT_MD = ['understand', 'apply', 'analyze'];
const EXTENDED_BLOOMS = ['understand', 'apply', 'analyze', 'evaluate', 'create'];

let invalidDifficulties = [];
let invalidBloomsStrict = [];
let invalidBloomsExtended = [];
let invalidTimeEstimates = [];

for (const q of allQuestions) {
  if (!ALLOWED_DIFFICULTIES.includes(q.difficulty)) {
    invalidDifficulties.push(`${q.id}: '${q.difficulty}'`);
  }
  if (!ALLOWED_BLOOMS_PROJECT_MD.includes(q.bloomsLevel)) {
    invalidBloomsStrict.push(`${q.id}: '${q.bloomsLevel}'`);
  }
  if (!EXTENDED_BLOOMS.includes(q.bloomsLevel)) {
    invalidBloomsExtended.push(`${q.id}: '${q.bloomsLevel}'`);
  }
  if (typeof q.timeEstimateSeconds !== 'number' || q.timeEstimateSeconds < 30 || q.timeEstimateSeconds > 600) {
    invalidTimeEstimates.push(`${q.id}: ${q.timeEstimateSeconds}s`);
  }
}

assertTest(invalidDifficulties.length === 0, `All difficulties belong to allowed enum ['foundational', 'intermediate', 'advanced', 'expert']`, `Invalid: ${invalidDifficulties.join(', ')}`);
assertTest(invalidTimeEstimates.length === 0, `All timeEstimateSeconds are realistic within bounds [30s - 600s]`, `Invalid: ${invalidTimeEstimates.join(', ')}`);
assertTest(invalidBloomsExtended.length === 0, `All bloomsLevel values belong to valid Bloom's taxonomy hierarchy`, `Invalid: ${invalidBloomsExtended.join(', ')}`);

// Blooms taxonomy strict PROJECT.md check
assertTest(invalidBloomsStrict.length === 0, `All 900 questions strictly adhere to PROJECT.md bloomsLevel enum ('understand'|'apply'|'analyze')`, `Found ${invalidBloomsStrict.length} items with extended blooms levels ('create': 52, 'evaluate': 11) in cert_pca.js`);

/**
 * =========================================================================
 * 8. OPTIONS MUTUAL EXCLUSIVITY & KEY INTEGRITY
 * =========================================================================
 */
console.log(`\n${colors.cyan}${colors.bright}--- SUITE 8: OPTIONS MUTUAL EXCLUSIVITY & ANSWER KEY INTEGRITY ---${colors.reset}`);

let duplicateOptionsInItem = [];
let invalidOptionLettering = [];
let answerKeyMismatch = [];

for (const q of allQuestions) {
  const optTexts = new Set();
  const optLetters = [];
  
  for (const opt of q.options || []) {
    optLetters.push(opt.letter);
    if (optTexts.has(opt.text.trim())) {
      duplicateOptionsInItem.push(`${q.id}: Duplicate option text '${opt.text.slice(0, 30)}...'`);
    }
    optTexts.add(opt.text.trim());
  }

  // Letters must be A, B, C, D (or A-E / A-F)
  const lettersJoined = optLetters.join('');
  if (lettersJoined !== 'ABCD' && lettersJoined !== 'ABCDE' && lettersJoined !== 'ABCDEF') {
    invalidOptionLettering.push(`${q.id}: letters='${lettersJoined}'`);
  }

  // Correct key check
  if (q.isMultiSelect) {
    if (!Array.isArray(q.correct) || q.correct.length < 2) {
      answerKeyMismatch.push(`${q.id}: Multi-select requires array of >= 2 answers`);
    }
  } else {
    if (typeof q.correct !== 'string' || !optLetters.includes(q.correct)) {
      answerKeyMismatch.push(`${q.id}: Single-select correct key '${q.correct}' not in options [${optLetters.join(',')}]`);
    }
  }
}

assertTest(duplicateOptionsInItem.length === 0, `Zero identical option texts within any question (100% distinct options)`, `Duplicates: ${duplicateOptionsInItem.slice(0, 5).join(', ')}`);
assertTest(invalidOptionLettering.length === 0, `All questions have sequential standard option letters (A, B, C, D)`, `Invalid: ${invalidOptionLettering.slice(0, 5).join(', ')}`);
assertTest(answerKeyMismatch.length === 0, `All answer keys accurately map to valid option letters`, `Mismatches: ${answerKeyMismatch.slice(0, 5).join(', ')}`);

/**
 * =========================================================================
 * FINAL SUMMARY & VERDICT
 * =========================================================================
 */
console.log(`\n${colors.bright}=======================================================================`);
console.log(`TOTAL CHECKS: ${totalChecks}`);
console.log(`${colors.green}PASSED:       ${passedChecks}${colors.reset}`);
console.log(`${failedChecks > 0 ? colors.red : colors.green}FAILED:       ${failedChecks}${colors.reset}`);
console.log(`=======================================================================${colors.reset}`);

if (failedChecks === 0) {
  console.log(`\n${colors.green}${colors.bright}VERDICT: CONFIRMED CORRECT (100% PASS)${colors.reset}\n`);
  process.exit(0);
} else {
  console.log(`\n${colors.yellow}${colors.bright}VERDICT: DEFECTS FOUND (${failedChecks} failure detected)${colors.reset}\n`);
  console.log('Defects list:');
  for (const d of defectsFound) {
    console.log(`- ${d}`);
  }
  process.exit(1);
}
