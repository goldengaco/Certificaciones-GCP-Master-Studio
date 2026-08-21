/**
 * tests/adversarial_m1_oracle.js
 * 
 * Deep Empirical Adversarial Verification Harness for Milestone 1 Question Banks.
 * Authored by challenger_m1_1.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(PROJECT_ROOT, 'data');

function loadModule(filename) {
  const filePath = path.join(DATA_DIR, filename);
  const code = fs.readFileSync(filePath, 'utf8');
  const sandbox = {
    window: {},
    console: console
  };
  sandbox.global = sandbox.window;
  sandbox.self = sandbox.window;
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename });
  return sandbox.window;
}

console.log('Loading dataset modules...');
const manifestEnv = loadModule('cert_manifest.js');
const caseStudiesEnv = loadModule('case_studies.js');
const cdlEnv = loadModule('cert_cdl.js');
const aceEnv = loadModule('cert_ace.js');
const pcaEnv = loadModule('cert_pca.js');

const manifest = manifestEnv.GCP_MANIFEST;
const caseStudies = caseStudiesEnv.GCP_CASE_STUDIES;
const cdlQuestions = cdlEnv.GCP_CDL_QUESTIONS || [];
const aceQuestions = aceEnv.GCP_ACE_QUESTIONS || [];
const pcaQuestions = pcaEnv.GCP_PCA_QUESTIONS || [];

console.log(`Loaded Questions Count: CDL=${cdlQuestions.length}, ACE=${aceQuestions.length}, PCA=${pcaQuestions.length}, Total=${cdlQuestions.length + aceQuestions.length + pcaQuestions.length}`);

const allQuestions = [
  ...cdlQuestions,
  ...aceQuestions,
  ...pcaQuestions
];

const results = {
  totalQuestions: allQuestions.length,
  cdlCount: cdlQuestions.length,
  aceCount: aceQuestions.length,
  pcaCount: pcaQuestions.length,
  idCollisions: [],
  uniqueIdCount: 0,
  blockDisjointness: {},
  domainDistributions: {},
  keyDistributions: {},
  multiSelectIntegrity: {},
  optionIntegrity: {},
  distractorIntegrity: {},
  schemaViolations: [],
  caseStudyIntegrity: {},
  runsAnalysis: {}
};

// 1. QUESTION ID UNIQUENESS & FORMAT
const idMap = new Map();
allQuestions.forEach((q, idx) => {
  if (!q.id) {
    results.schemaViolations.push({ idx, error: 'Missing question id' });
    return;
  }
  if (idMap.has(q.id)) {
    results.idCollisions.push({
      id: q.id,
      firstCert: idMap.get(q.id).certId,
      secondCert: q.certId,
      firstIndex: idMap.get(q.id).index,
      secondIndex: idx
    });
  } else {
    idMap.set(q.id, { certId: q.certId, index: idx, blockId: q.blockId });
  }
});
results.uniqueIdCount = idMap.size;

// Check ID pattern
const idPatterns = {
  cdl: /^CDL-D[1-4]-\d{3}$/,
  ace: /^ACE-D[1-5]-\d{3}$/,
  pca: /^PCA-D[1-6]-\d{3}$/
};
const invalidIdFormat = [];
allQuestions.forEach(q => {
  const pat = idPatterns[q.certId];
  if (!pat || !pat.test(q.id)) {
    invalidIdFormat.push({ id: q.id, certId: q.certId });
  }
});
results.invalidIdFormat = invalidIdFormat;

// 2. BLOCK DISJOINTNESS ($B_i \cap B_j = \emptyset$) & BLOCK SIZES
['cdl', 'ace', 'pca'].forEach(certId => {
  const certQuestions = certId === 'cdl' ? cdlQuestions : certId === 'ace' ? aceQuestions : pcaQuestions;
  const blocks = {
    'BLOCK-1': [], 'BLOCK-2': [], 'BLOCK-3': [],
    'BLOCK-4': [], 'BLOCK-5': [], 'BLOCK-6': []
  };
  const otherBlocks = [];

  certQuestions.forEach(q => {
    if (blocks[q.blockId]) {
      blocks[q.blockId].push(q);
    } else {
      otherBlocks.push(q);
    }
  });

  const blockSizes = {};
  for (let b = 1; b <= 6; b++) {
    blockSizes[`BLOCK-${b}`] = blocks[`BLOCK-${b}`].length;
  }

  // Check pairwise intersection
  const pairwiseIntersections = [];
  for (let i = 1; i <= 6; i++) {
    for (let j = i + 1; j <= 6; j++) {
      const b1 = new Set(blocks[`BLOCK-${i}`].map(q => q.id));
      const b2 = new Set(blocks[`BLOCK-${j}`].map(q => q.id));
      const intersection = [...b1].filter(id => b2.has(id));
      if (intersection.length > 0) {
        pairwiseIntersections.push({
          b1: `BLOCK-${i}`,
          b2: `BLOCK-${j}`,
          overlapCount: intersection.length,
          overlappingIds: intersection
        });
      }
    }
  }

  results.blockDisjointness[certId] = {
    blockSizes,
    otherBlocksCount: otherBlocks.length,
    isDisjoint: pairwiseIntersections.length === 0,
    intersections: pairwiseIntersections,
    allBlocksAre50: Object.values(blockSizes).every(sz => sz === 50)
  };
});

// 3. STRATIFIED DOMAIN DISTRIBUTION
['cdl', 'ace', 'pca'].forEach(certId => {
  const certQuestions = certId === 'cdl' ? cdlQuestions : certId === 'ace' ? aceQuestions : pcaQuestions;
  const certMeta = manifest.certifications[certId];
  const manifestDomains = certMeta.domains;

  const totalDomainCounts = {};
  const blockDomainCounts = {
    'BLOCK-1': {}, 'BLOCK-2': {}, 'BLOCK-3': {},
    'BLOCK-4': {}, 'BLOCK-5': {}, 'BLOCK-6': {}
  };

  certQuestions.forEach(q => {
    totalDomainCounts[q.domainId] = (totalDomainCounts[q.domainId] || 0) + 1;
    if (blockDomainCounts[q.blockId]) {
      blockDomainCounts[q.blockId][q.domainId] = (blockDomainCounts[q.blockId][q.domainId] || 0) + 1;
    }
  });

  results.domainDistributions[certId] = {
    manifestWeights: Object.fromEntries(Object.entries(manifestDomains).map(([k, v]) => [k, { name: v.name, weightPercent: v.weightPercent, targetQuestionsPerBlock: Math.round(50 * (v.weightPercent / 100)) }])),
    totalDomainCounts,
    blockDomainCounts
  };
});

// 4. CORRECT KEY DISTRIBUTION BALANCE & RUNS ANALYSIS
['cdl', 'ace', 'pca'].forEach(certId => {
  const certQuestions = certId === 'cdl' ? cdlQuestions : certId === 'ace' ? aceQuestions : pcaQuestions;
  const singleSelectKeyCount = { A: 0, B: 0, C: 0, D: 0, other: 0 };
  const allCorrectKeys = [];
  let multiSelectCount = 0;
  let singleSelectCount = 0;

  certQuestions.forEach(q => {
    if (q.isMultiSelect) {
      multiSelectCount++;
      if (Array.isArray(q.correct)) {
        q.correct.forEach(k => {
          allCorrectKeys.push(k);
        });
      }
    } else {
      singleSelectCount++;
      const k = typeof q.correct === 'string' ? q.correct : Array.isArray(q.correct) ? q.correct[0] : null;
      if (['A', 'B', 'C', 'D'].includes(k)) {
        singleSelectKeyCount[k]++;
        allCorrectKeys.push(k);
      } else {
        singleSelectKeyCount.other++;
        allCorrectKeys.push(String(k));
      }
    }
  });

  // Calculate chi-square goodness of fit for single-select (expected = singleSelectCount / 4)
  const expectedPerKey = singleSelectCount / 4;
  let chiSquare = 0;
  ['A', 'B', 'C', 'D'].forEach(k => {
    const obs = singleSelectKeyCount[k];
    chiSquare += Math.pow(obs - expectedPerKey, 2) / expectedPerKey;
  });

  // Longest streak of identical correct answer in consecutive questions
  let maxRunLen = 1;
  let curRunLen = 1;
  let maxRunKey = '';
  let curRunKey = allCorrectKeys[0];
  let runLocations = [];

  for (let i = 1; i < allCorrectKeys.length; i++) {
    if (allCorrectKeys[i] === allCorrectKeys[i - 1]) {
      curRunLen++;
      if (curRunLen > maxRunLen) {
        maxRunLen = curRunLen;
        maxRunKey = allCorrectKeys[i];
      }
      if (curRunLen >= 4) {
        runLocations.push({ key: allCorrectKeys[i], length: curRunLen, endIndex: i, questionId: certQuestions[i]?.id });
      }
    } else {
      curRunLen = 1;
      curRunKey = allCorrectKeys[i];
    }
  }

  results.keyDistributions[certId] = {
    singleSelectCount,
    multiSelectCount,
    singleSelectKeyCount,
    singleSelectPercent: {
      A: ((singleSelectKeyCount.A / singleSelectCount) * 100).toFixed(1) + '%',
      B: ((singleSelectKeyCount.B / singleSelectCount) * 100).toFixed(1) + '%',
      C: ((singleSelectKeyCount.C / singleSelectCount) * 100).toFixed(1) + '%',
      D: ((singleSelectKeyCount.D / singleSelectCount) * 100).toFixed(1) + '%'
    },
    chiSquare: chiSquare.toFixed(3),
    maxConsecutiveRun: { length: maxRunLen, key: maxRunKey },
    runsOf4OrMore: runLocations
  };
});

// 5. MULTI-SELECT VS SINGLE-SELECT VALIDATION
const multiSelectIssues = [];
allQuestions.forEach(q => {
  if (q.isMultiSelect) {
    if (!Array.isArray(q.correct)) {
      multiSelectIssues.push({ id: q.id, error: `isMultiSelect is true but correct is not an Array (${typeof q.correct})` });
    } else {
      if (q.correct.length !== q.expectedSelectCount) {
        multiSelectIssues.push({ id: q.id, error: `expectedSelectCount (${q.expectedSelectCount}) != correct.length (${q.correct.length})` });
      }
      if (q.expectedSelectCount < 2) {
        multiSelectIssues.push({ id: q.id, error: `isMultiSelect is true but expectedSelectCount < 2 (${q.expectedSelectCount})` });
      }
      const uniqueKeys = new Set(q.correct);
      if (uniqueKeys.size !== q.correct.length) {
        multiSelectIssues.push({ id: q.id, error: `Duplicate keys in correct array: ${JSON.stringify(q.correct)}` });
      }
    }
  } else {
    if (q.expectedSelectCount !== 1) {
      multiSelectIssues.push({ id: q.id, error: `isMultiSelect is false but expectedSelectCount is ${q.expectedSelectCount}` });
    }
    if (Array.isArray(q.correct) && q.correct.length > 1) {
      multiSelectIssues.push({ id: q.id, error: `isMultiSelect is false but correct has multiple items: ${JSON.stringify(q.correct)}` });
    }
  }
});
results.multiSelectIssues = multiSelectIssues;

// 6. OPTIONS & DISTRACTORS COMPLETENESS & VALIDITY
const optionIssues = [];
const distractorIssues = [];
allQuestions.forEach(q => {
  if (!Array.isArray(q.options) || q.options.length < 4) {
    optionIssues.push({ id: q.id, error: `Invalid options array, length=${q.options?.length}` });
    return;
  }
  const optionLetters = q.options.map(o => o.letter);
  const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];

  // Verify each correct letter is among options
  for (const c of correctArr) {
    if (!optionLetters.includes(c)) {
      optionIssues.push({ id: q.id, error: `Correct answer '${c}' not found in options [${optionLetters.join(', ')}]` });
    }
  }

  // Verify option texts non-empty
  q.options.forEach(o => {
    if (!o.text || typeof o.text !== 'string' || o.text.trim().length === 0) {
      optionIssues.push({ id: q.id, error: `Option ${o.letter} has empty text` });
    }
  });

  // Verify distractors
  if (!q.distractors || typeof q.distractors !== 'object') {
    distractorIssues.push({ id: q.id, error: `Missing distractors object` });
  } else {
    // Check if distractor explanations exist for non-correct options
    const incorrectLetters = optionLetters.filter(l => !correctArr.includes(l));
    for (const inc of incorrectLetters) {
      if (!q.distractors[inc] || typeof q.distractors[inc] !== 'string' || q.distractors[inc].trim().length === 0) {
        distractorIssues.push({ id: q.id, error: `Missing distractor explanation for incorrect option ${inc}` });
      }
    }
  }
});
results.optionIssues = optionIssues;
results.distractorIssues = distractorIssues;

// 7. SCHEMA & ENUMERATION VIOLATIONS
const bloomsValuesFound = {};
const difficultyValuesFound = {};
const caseStudyValuesFound = {};
const schemaFieldDefects = [];

const ALLOWED_BLOOMS_PROJECT_MD = ['understand', 'apply', 'analyze'];
const ALLOWED_BLOOMS_EXTENDED = ['understand', 'apply', 'analyze', 'evaluate', 'create'];
const ALLOWED_DIFFICULTIES = ['foundational', 'intermediate', 'advanced', 'expert'];
const ALLOWED_CASE_STUDIES = ['none', 'mountkirk_games', 'terramearth', 'ehr_healthcare', 'helicopter_racing_league'];

allQuestions.forEach(q => {
  bloomsValuesFound[q.bloomsLevel] = (bloomsValuesFound[q.bloomsLevel] || 0) + 1;
  difficultyValuesFound[q.difficulty] = (difficultyValuesFound[q.difficulty] || 0) + 1;
  caseStudyValuesFound[q.caseStudy] = (caseStudyValuesFound[q.caseStudy] || 0) + 1;

  if (!ALLOWED_DIFFICULTIES.includes(q.difficulty)) {
    schemaFieldDefects.push({ id: q.id, field: 'difficulty', value: q.difficulty, allowed: ALLOWED_DIFFICULTIES });
  }
  if (!ALLOWED_BLOOMS_PROJECT_MD.includes(q.bloomsLevel)) {
    schemaFieldDefects.push({ id: q.id, field: 'bloomsLevel', value: q.bloomsLevel, allowed: ALLOWED_BLOOMS_PROJECT_MD });
  }
  if (!ALLOWED_CASE_STUDIES.includes(q.caseStudy)) {
    schemaFieldDefects.push({ id: q.id, field: 'caseStudy', value: q.caseStudy, allowed: ALLOWED_CASE_STUDIES });
  }

  // Check required text fields
  ['title', 'scenario', 'explanation', 'domainId', 'domainName', 'subtopic'].forEach(field => {
    if (!q[field] || typeof q[field] !== 'string' || q[field].trim().length === 0) {
      schemaFieldDefects.push({ id: q.id, field, value: q[field], error: 'Empty or missing string' });
    }
  });

  if (!Array.isArray(q.keywords) || q.keywords.length === 0) {
    schemaFieldDefects.push({ id: q.id, field: 'keywords', value: q.keywords, error: 'Empty or non-array keywords' });
  }

  if (typeof q.timeEstimateSeconds !== 'number' || q.timeEstimateSeconds <= 0) {
    schemaFieldDefects.push({ id: q.id, field: 'timeEstimateSeconds', value: q.timeEstimateSeconds, error: 'Invalid timeEstimateSeconds' });
  }
});

results.bloomsValuesFound = bloomsValuesFound;
results.difficultyValuesFound = difficultyValuesFound;
results.caseStudyValuesFound = caseStudyValuesFound;
results.schemaFieldDefects = schemaFieldDefects;

// 8. CASE STUDIES LINKAGE CHECK
const caseStudyKeys = Object.keys(caseStudies);
const pcaCaseStudyQuestions = pcaQuestions.filter(q => q.caseStudy && q.caseStudy !== 'none');
const invalidCaseStudyLinks = [];
pcaCaseStudyQuestions.forEach(q => {
  if (!caseStudies[q.caseStudy]) {
    invalidCaseStudyLinks.push({ id: q.id, caseStudy: q.caseStudy });
  }
});
results.caseStudyIntegrity = {
  registeredCaseStudies: caseStudyKeys,
  pcaCaseStudyQuestionsCount: pcaCaseStudyQuestions.length,
  cdlCaseStudyCount: cdlQuestions.filter(q => q.caseStudy && q.caseStudy !== 'none').length,
  aceCaseStudyCount: aceQuestions.filter(q => q.caseStudy && q.caseStudy !== 'none').length,
  invalidCaseStudyLinks
};

console.log('\n=== EMPIRICAL VERIFICATION RESULTS SUMMARY ===');
console.log(JSON.stringify(results, null, 2));
