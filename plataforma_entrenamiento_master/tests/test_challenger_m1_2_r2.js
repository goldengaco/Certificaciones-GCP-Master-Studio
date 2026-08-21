/**
 * test_challenger_m1_2_r2.js
 * Adversarial Challenger 2, Round 2 — Exhaustive Empirical Stress Test & Audit Suite
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');

function loadJsFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const sandbox = {
    window: {},
    console: console,
    module: { exports: {} },
    exports: {}
  };
  sandbox.global = sandbox.window;
  sandbox.self = sandbox.window;
  sandbox.globalThis = sandbox.window;
  const context = vm.createContext(sandbox);
  vm.runInContext(content, context, { filename: filePath, timeout: 5000 });
  return sandbox.module.exports && Object.keys(sandbox.module.exports).length > 0
    ? sandbox.module.exports
    : sandbox.window;
}

const manifestPath = path.join(DATA_DIR, 'cert_manifest.js');
const caseStudiesPath = path.join(DATA_DIR, 'case_studies.js');
const cdlPath = path.join(DATA_DIR, 'cert_cdl.js');
const acePath = path.join(DATA_DIR, 'cert_ace.js');
const pcaPath = path.join(DATA_DIR, 'cert_pca.js');

const manifestObj = loadJsFile(manifestPath);
const caseStudiesObj = loadJsFile(caseStudiesPath);
const cdlQuestions = loadJsFile(cdlPath);
const aceQuestions = loadJsFile(acePath);
const pcaQuestions = loadJsFile(pcaPath);

const certManifest = manifestObj.certifications || manifestObj;
const caseStudies = caseStudiesObj.studies || caseStudiesObj;

const allDatasets = [
  { cert: 'cdl', name: 'Cloud Digital Leader', questions: Array.isArray(cdlQuestions) ? cdlQuestions : cdlQuestions.GCP_QUESTIONS_CDL, count: 300 },
  { cert: 'ace', name: 'Associate Cloud Engineer', questions: Array.isArray(aceQuestions) ? aceQuestions : aceQuestions.GCP_QUESTIONS_ACE, count: 300 },
  { cert: 'pca', name: 'Professional Cloud Architect', questions: Array.isArray(pcaQuestions) ? pcaQuestions : pcaQuestions.GCP_QUESTIONS_PCA, count: 300 }
];

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failures = [];

function check(title, condition, extraInfo = '') {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✔ PASS: ${title}${extraInfo ? ' (' + extraInfo + ')' : ''}`);
  } else {
    failedChecks++;
    const errMsg = `  ✖ FAIL: ${title}${extraInfo ? ' -> ' + extraInfo : ''}`;
    failures.push(errMsg);
    console.error(errMsg);
  }
}

console.log('=======================================================================');
console.log('   EMPIRICAL CHALLENGER M1-2-R2: DEEP ADVERSARIAL AUDIT & STRESS SUITE ');
console.log('=======================================================================\n');

// -----------------------------------------------------------------------------
// SECTION 1: MANIFEST & CASE STUDIES INTEGRITY
// -----------------------------------------------------------------------------
console.log('--- SECTION 1: MANIFEST & CASE STUDIES INTEGRITY ---');

check('Manifest has CDL, ACE, PCA keys',
  certManifest && certManifest.cdl && certManifest.ace && certManifest.pca
);

['cdl', 'ace', 'pca'].forEach(certId => {
  const meta = certManifest[certId];
  const weightSum = Object.values(meta.domains || {}).reduce((acc, d) => acc + (d.weight || 0), 0);
  check(`Cert manifest domain weights sum to 100% for ${certId}`,
    Math.round(weightSum) === 100,
    `sum=${weightSum}%`
  );
  check(`Cert manifest passingScore is valid for ${certId}`,
    meta.passingScore >= 70 && meta.passingScore <= 800,
    `passingScore=${meta.passingScore}`
  );
});

const expectedCaseStudies = ['mountkirk_games', 'terramearth', 'ehr_healthcare', 'helicopter_racing_league'];
check('Case studies module contains all 4 GCP PCA case studies',
  expectedCaseStudies.every(csId => caseStudies[csId]),
  `Keys: ${Object.keys(caseStudies).join(', ')}`
);

expectedCaseStudies.forEach(csId => {
  const cs = caseStudies[csId];
  const hasOverview = typeof cs.companyOverview === 'string' && cs.companyOverview.length > 50;
  const hasBizReqs = Array.isArray(cs.businessRequirements) && cs.businessRequirements.length > 0;
  const hasTechReqs = Array.isArray(cs.technicalRequirements) && cs.technicalRequirements.length > 0;
  check(`Case study '${csId}' is complete with companyOverview, biz & tech requirements`,
    hasOverview && hasBizReqs && hasTechReqs,
    `overviewLen=${cs.companyOverview?.length}, bizReqs=${cs.businessRequirements?.length}, techReqs=${cs.technicalRequirements?.length}`
  );
});

// -----------------------------------------------------------------------------
// SECTION 2: DISTRACTOR TRAP COMPLETENESS (2,700 DISTRACTORS)
// -----------------------------------------------------------------------------
console.log('\n--- SECTION 2: DISTRACTOR TRAP COMPLETENESS & CONSISTENCY (2,700 DISTRACTORS) ---');

let totalDistractorsCount = 0;
let totalTrapFlagsCount = 0;
let totalValidTrapTypes = 0;
let totalMatchingDistractorDictEntries = 0;
let nonTrapCorrectCount = 0;
const invalidTrapTypes = [];
const missingDistractorEntries = [];
const mismatchedTrapOptions = [];
const trapTypeFrequency = {};

allDatasets.forEach(({ cert, questions }) => {
  questions.forEach(q => {
    const correctLetter = q.correct;
    q.options.forEach(opt => {
      if (opt.letter === correctLetter) {
        if (opt.isTrap === false) {
          nonTrapCorrectCount++;
        } else {
          mismatchedTrapOptions.push(`${q.id}: correct option ${opt.letter} has isTrap=true`);
        }
      } else {
        totalDistractorsCount++;
        if (opt.isTrap === true) {
          totalTrapFlagsCount++;
        } else {
          mismatchedTrapOptions.push(`${q.id}: distractor option ${opt.letter} has isTrap=${opt.isTrap}`);
        }

        if (typeof opt.trapType === 'string' && opt.trapType.trim().length > 0) {
          totalValidTrapTypes++;
          trapTypeFrequency[opt.trapType] = (trapTypeFrequency[opt.trapType] || 0) + 1;
        } else {
          invalidTrapTypes.push(`${q.id}: distractor ${opt.letter} has invalid trapType: ${opt.trapType}`);
        }

        // Matching entry in q.distractors
        if (q.distractors && typeof q.distractors[opt.letter] === 'string' && q.distractors[opt.letter].trim().length > 0) {
          totalMatchingDistractorDictEntries++;
        } else {
          missingDistractorEntries.push(`${q.id}: distractor ${opt.letter} missing in q.distractors`);
        }
      }
    });
  });
});

check('Total distractors across 900 questions is exactly 2,700',
  totalDistractorsCount === 2700,
  `count=${totalDistractorsCount}`
);

check('100% of 2,700 distractors have isTrap: true',
  totalTrapFlagsCount === 2700 && mismatchedTrapOptions.length === 0,
  `validTrapFlags=${totalTrapFlagsCount}/2700`
);

check('100% of 2,700 distractors have valid non-empty trapType',
  totalValidTrapTypes === 2700 && invalidTrapTypes.length === 0,
  `validTrapTypes=${totalValidTrapTypes}/2700, distinctTypes=${Object.keys(trapTypeFrequency).length}`
);

check('100% of 2,700 distractors have matching non-empty entries in q.distractors[letter]',
  totalMatchingDistractorDictEntries === 2700 && missingDistractorEntries.length === 0,
  `matchingDictEntries=${totalMatchingDistractorDictEntries}/2700`
);

check('100% of 900 correct answers have isTrap: false',
  nonTrapCorrectCount === 900,
  `nonTrapCorrectCount=${nonTrapCorrectCount}/900`
);

// -----------------------------------------------------------------------------
// SECTION 3: CLI COMMAND VALIDITY (ACE 300/300)
// -----------------------------------------------------------------------------
console.log('\n--- SECTION 3: CLI COMMAND VALIDITY (ACE 300/300 & GLOBAL) ---');

let aceNonEmptyCliCount = 0;
let aceValidPrefixCount = 0;
let aceBalancedQuotesCount = 0;
let aceZeroPlaceholderCount = 0;
const invalidCliCommands = [];

const validCliPrefixes = ['gcloud', 'gsutil', 'bq', 'kubectl', 'export', 'echo', 'gcloud beta', 'gcloud alpha'];

const aceQ = allDatasets.find(d => d.cert === 'ace').questions;

aceQ.forEach(q => {
  const cmd = q.gcloudCommand;
  if (typeof cmd === 'string' && cmd.trim().length > 0) {
    aceNonEmptyCliCount++;

    const trimmed = cmd.trim();
    const hasValidPrefix = validCliPrefixes.some(prefix => trimmed.startsWith(prefix));
    if (hasValidPrefix) {
      aceValidPrefixCount++;
    } else {
      invalidCliCommands.push(`${q.id}: Invalid CLI prefix: ${cmd}`);
    }

    // Check balanced quotes
    const singleQuotes = (cmd.match(/'/g) || []).length;
    const doubleQuotes = (cmd.match(/"/g) || []).length;
    const backticks = (cmd.match(/`/g) || []).length;
    if (singleQuotes % 2 === 0 && doubleQuotes % 2 === 0 && backticks % 2 === 0) {
      aceBalancedQuotesCount++;
    } else {
      invalidCliCommands.push(`${q.id}: Unbalanced quotes in command: ${cmd}`);
    }

    // Check placeholders / dummy text
    if (!cmd.includes('TODO') && !cmd.includes('FIXME') && !cmd.includes('undefined') && !cmd.includes('dummy')) {
      aceZeroPlaceholderCount++;
    } else {
      invalidCliCommands.push(`${q.id}: Placeholder in CLI command: ${cmd}`);
    }
  } else {
    invalidCliCommands.push(`${q.id}: Missing or empty gcloudCommand`);
  }
});

check('100% of ACE questions (300/300) have non-empty gcloudCommand',
  aceNonEmptyCliCount === 300,
  `nonEmptyCount=${aceNonEmptyCliCount}/300`
);

check('100% of ACE CLI commands start with recognized GCP binaries (gcloud, gsutil, bq, kubectl, export)',
  aceValidPrefixCount === 300,
  `validPrefixCount=${aceValidPrefixCount}/300`
);

check('100% of ACE CLI commands have balanced quotation marks and backticks',
  aceBalancedQuotesCount === 300,
  `balancedQuotesCount=${aceBalancedQuotesCount}/300`
);

check('100% of ACE CLI commands contain zero placeholder/dummy strings',
  aceZeroPlaceholderCount === 300,
  `zeroPlaceholderCount=${aceZeroPlaceholderCount}/300`
);

// -----------------------------------------------------------------------------
// SECTION 4: CASE STUDY INTEGRITY (PCA 123 CASE STUDY QUESTIONS)
// -----------------------------------------------------------------------------
console.log('\n--- SECTION 4: CASE STUDY INTEGRITY (PCA 123 CASE STUDY QUESTIONS) ---');

const caseStudyDistribution = {
  mountkirk_games: 0,
  terramearth: 0,
  ehr_healthcare: 0,
  helicopter_racing_league: 0,
  none: 0
};

let pcaInvalidCaseStudy = [];
let pcaValidSectionCount = 0;
let cdlOrAceWithCaseStudy = 0;

// Verify CDL and ACE have no case studies
const cdlQ = allDatasets.find(d => d.cert === 'cdl').questions;
const pcaQ = allDatasets.find(d => d.cert === 'pca').questions;

[cdlQ, aceQ].forEach(bank => {
  bank.forEach(q => {
    if (q.caseStudy && q.caseStudy !== 'none' && q.caseStudy !== null) {
      cdlOrAceWithCaseStudy++;
    }
  });
});

check('Zero CDL or ACE questions have active Case Study bindings',
  cdlOrAceWithCaseStudy === 0,
  `cdlOrAceCount=${cdlOrAceWithCaseStudy}`
);

// Verify PCA case studies
let pcaCaseStudyCount = 0;
pcaQ.forEach(q => {
  if (q.caseStudy && q.caseStudy !== 'none') {
    pcaCaseStudyCount++;
    if (caseStudies[q.caseStudy]) {
      caseStudyDistribution[q.caseStudy] = (caseStudyDistribution[q.caseStudy] || 0) + 1;
    } else {
      pcaInvalidCaseStudy.push(`${q.id}: Invalid caseStudy '${q.caseStudy}'`);
    }

    if (q.caseStudySection && typeof q.caseStudySection === 'string' && q.caseStudySection.length > 0) {
      pcaValidSectionCount++;
    }
  } else {
    caseStudyDistribution.none++;
  }
});

check('Exactly 123 PCA questions are mapped to valid case studies',
  pcaCaseStudyCount === 123 && pcaInvalidCaseStudy.length === 0,
  `pcaCaseStudyCount=${pcaCaseStudyCount}/123`
);

check('PCA Case Study breakdown matches specification (Mountkirk=31, TerramEarth=30, EHR=33, HRL=29)',
  caseStudyDistribution.mountkirk_games === 31 &&
  caseStudyDistribution.terramearth === 30 &&
  caseStudyDistribution.ehr_healthcare === 33 &&
  caseStudyDistribution.helicopter_racing_league === 29,
  `Mountkirk: ${caseStudyDistribution.mountkirk_games}, TerramEarth: ${caseStudyDistribution.terramearth}, EHR: ${caseStudyDistribution.ehr_healthcare}, HRL: ${caseStudyDistribution.helicopter_racing_league}`
);

check('100% of case study questions specify a valid caseStudySection',
  pcaValidSectionCount === 123,
  `validSectionCount=${pcaValidSectionCount}/123`
);

// -----------------------------------------------------------------------------
// SECTION 5: SUBSTANTIVE LENGTH & ZERO BLANK OPTIONS
// -----------------------------------------------------------------------------
console.log('\n--- SECTION 5: SUBSTANTIVE LENGTH & ZERO BLANK OPTIONS (900 QUESTIONS / 3,600 OPTIONS) ---');

let totalOptionsAudited = 0;
let blankOptionsCount = 0;
let shortScenariosCount = 0; // < 50 chars
let shortExplanationsCount = 0; // < 100 chars
let shortDistractorsCount = 0; // < 10 chars
let duplicateOptionTextsCount = 0;
let mockStringsCount = 0;

const minLengths = { scenario: Infinity, explanation: Infinity, option: Infinity, distractor: Infinity };
const maxLengths = { scenario: 0, explanation: 0, option: 0, distractor: 0 };
const totalLengths = { scenario: 0, explanation: 0, option: 0, distractor: 0 };

allDatasets.forEach(({ cert, questions }) => {
  questions.forEach(q => {
    // Scenario
    const sLen = (q.scenario || '').trim().length;
    if (sLen < 50) shortScenariosCount++;
    minLengths.scenario = Math.min(minLengths.scenario, sLen);
    maxLengths.scenario = Math.max(maxLengths.scenario, sLen);
    totalLengths.scenario += sLen;

    // Explanation
    const eLen = (q.explanation || '').trim().length;
    if (eLen < 100) shortExplanationsCount++;
    minLengths.explanation = Math.min(minLengths.explanation, eLen);
    maxLengths.explanation = Math.max(maxLengths.explanation, eLen);
    totalLengths.explanation += eLen;

    // Options
    const optTexts = new Set();
    q.options.forEach(opt => {
      totalOptionsAudited++;
      const oLen = (opt.text || '').trim().length;
      if (oLen === 0) blankOptionsCount++;
      minLengths.option = Math.min(minLengths.option, oLen);
      maxLengths.option = Math.max(maxLengths.option, oLen);
      totalLengths.option += oLen;

      if (optTexts.has(opt.text.trim())) {
        duplicateOptionTextsCount++;
      }
      optTexts.add(opt.text.trim());
    });

    // Distractors
    if (q.distractors) {
      Object.entries(q.distractors).forEach(([letter, text]) => {
        if (letter !== q.correct) {
          const dLen = (text || '').trim().length;
          if (dLen < 10) shortDistractorsCount++;
          minLengths.distractor = Math.min(minLengths.distractor, dLen);
          maxLengths.distractor = Math.max(maxLengths.distractor, dLen);
          totalLengths.distractor += dLen;
        }
      });
    }

    // Dummy / Mock text check (excluding technical Cloud DLP placeholder keyword)
    const fullContent = JSON.stringify(q);
    if (/lorem ipsum|asdf|qwerty|dummy text|sample text|TODO:|FIXME:/i.test(fullContent)) {
      mockStringsCount++;
    }
  });
});

check('Total options audited equals exactly 3,600 (900 * 4)',
  totalOptionsAudited === 3600,
  `optionsCount=${totalOptionsAudited}`
);

check('Zero blank or empty option strings across all 3,600 options',
  blankOptionsCount === 0,
  `blankOptionsCount=${blankOptionsCount}`
);

check('Zero duplicate option texts within any question (100% mutually distinct)',
  duplicateOptionTextsCount === 0,
  `duplicatesCount=${duplicateOptionTextsCount}`
);

check('100% of 900 questions have substantive scenarios (>= 50 chars)',
  shortScenariosCount === 0,
  `min=${minLengths.scenario}, avg=${Math.round(totalLengths.scenario / 900)}, max=${maxLengths.scenario}`
);

check('100% of 900 questions have substantive pedagogical explanations (>= 100 chars)',
  shortExplanationsCount === 0,
  `min=${minLengths.explanation}, avg=${Math.round(totalLengths.explanation / 900)}, max=${maxLengths.explanation}`
);

check('100% of 2,700 distractors have substantive explanations (>= 10 chars)',
  shortDistractorsCount === 0,
  `min=${minLengths.distractor}, avg=${Math.round(totalLengths.distractor / 2700)}, max=${maxLengths.distractor}`
);

check('Zero mock or dummy strings detected across all 900 questions',
  mockStringsCount === 0,
  `mockStrings=${mockStringsCount}`
);

// -----------------------------------------------------------------------------
// SECTION 6: KEY DISTRIBUTION & RANDOMIZATION (CHI-SQUARED & STREAKS)
// -----------------------------------------------------------------------------
console.log('\n--- SECTION 6: KEY DISTRIBUTION, CHI-SQUARED & CONSECUTIVE STREAKS ---');

allDatasets.forEach(({ cert, name, questions }) => {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  let currentStreak = 0;
  let lastKey = null;
  let maxStreak = 0;

  questions.forEach(q => {
    counts[q.correct] = (counts[q.correct] || 0) + 1;

    if (q.correct === lastKey) {
      currentStreak++;
      if (currentStreak > maxStreak) maxStreak = currentStreak;
    } else {
      currentStreak = 1;
      lastKey = q.correct;
    }
  });

  const expected = 300 / 4;
  const chiSq = Object.values(counts).reduce((acc, obs) => acc + Math.pow(obs - expected, 2) / expected, 0);

  check(`${cert.toUpperCase()} key distribution is perfectly balanced (75 A, 75 B, 75 C, 75 D)`,
    counts.A === 75 && counts.B === 75 && counts.C === 75 && counts.D === 75,
    `A=${counts.A}, B=${counts.B}, C=${counts.C}, D=${counts.D}, chiSq=${chiSq.toFixed(3)}`
  );

  check(`${cert.toUpperCase()} goodness-of-fit Chi-Square (critical threshold alpha=0.05 is 7.815)`,
    chiSq < 7.815,
    `chiSq=${chiSq.toFixed(3)} < 7.815`
  );

  check(`${cert.toUpperCase()} max consecutive key streak is <= 2`,
    maxStreak <= 2,
    `maxStreak=${maxStreak}`
  );
});

// -----------------------------------------------------------------------------
// SECTION 7: SCHEMA & ENUM CONFORMANCE (BLOOM'S TAXONOMY, DIFFICULTY, ETC.)
// -----------------------------------------------------------------------------
console.log('\n--- SECTION 7: SCHEMA & ENUM CONFORMANCE ---');

let invalidBloomsCount = 0;
let invalidDifficultyCount = 0;
let invalidTimeEstimateCount = 0;
let invalidKeywordsCount = 0;
let invalidDocUrlsCount = 0;

const allowedBlooms = new Set(['understand', 'apply', 'analyze']);
const allowedDifficulty = new Set(['foundational', 'intermediate', 'advanced', 'expert']);

allDatasets.forEach(({ cert, questions }) => {
  questions.forEach(q => {
    if (!allowedBlooms.has(q.bloomsLevel)) invalidBloomsCount++;
    if (!allowedDifficulty.has(q.difficulty)) invalidDifficultyCount++;
    if (typeof q.timeEstimateSeconds !== 'number' || q.timeEstimateSeconds < 30 || q.timeEstimateSeconds > 600) invalidTimeEstimateCount++;
    if (!Array.isArray(q.keywords) || q.keywords.length < 2) invalidKeywordsCount++;
    if (typeof q.officialDocUrl !== 'string' || !q.officialDocUrl.startsWith('http')) invalidDocUrlsCount++;
  });
});

check('100% of 900 questions have bloomsLevel in [understand, apply, analyze]',
  invalidBloomsCount === 0,
  `invalidBlooms=${invalidBloomsCount}`
);

check('100% of 900 questions have difficulty in [foundational, intermediate, advanced, expert]',
  invalidDifficultyCount === 0,
  `invalidDifficulty=${invalidDifficultyCount}`
);

check('100% of 900 questions have valid timeEstimateSeconds in [30s, 600s]',
  invalidTimeEstimateCount === 0,
  `invalidTimeEstimate=${invalidTimeEstimateCount}`
);

check('100% of 900 questions have keywords array with >= 2 items',
  invalidKeywordsCount === 0,
  `invalidKeywords=${invalidKeywordsCount}`
);

check('100% of 900 questions have valid officialDocUrl starting with http/https',
  invalidDocUrlsCount === 0,
  `invalidDocUrls=${invalidDocUrlsCount}`
);

// -----------------------------------------------------------------------------
// SUMMARY & VERDICT
// -----------------------------------------------------------------------------
console.log('\n=======================================================================');
console.log(`TOTAL CHECKS: ${totalChecks}`);
console.log(`PASSED:       ${passedChecks}`);
console.log(`FAILED:       ${failedChecks}`);
console.log('=======================================================================');

if (failedChecks === 0) {
  console.log('\n✔ EMPIRICAL VERDICT: CONFIRMED CORRECT (100% COMPLIANT)');
  process.exit(0);
} else {
  console.error('\n✖ EMPIRICAL VERDICT: DEFECTS FOUND');
  failures.forEach(f => console.error(f));
  process.exit(1);
}
