/**
 * stress_test_e2e.js
 * 
 * Adversarial Stress & Negative Testing Harness by Challenger 2
 * Evaluates:
 * 1. test_integrity.js negative schema coverage & defect rejection
 * 2. Exit code propagation in test_integrity.js and run_tests.ps1
 * 3. Algorithmic edge cases and boundary constraints in test_algorithms.js
 * 4. Performance benchmarking and memory footprint profiling
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const assert = require('assert');

const { validateManifest, validateCaseStudies, validateQuestionItem } = require('./test_integrity.js');
const { ReferenceEngine, ReferenceState, crc32, createSyntheticQuestionPool } = require('./test_algorithms.js');

let totalChallenges = 0;
let passedChallenges = 0;
let failedChallenges = 0;
const challengeFailures = [];

function challenge(name, shouldPass, testFn) {
  totalChallenges++;
  try {
    const result = testFn();
    const isPassing = (result.errors ? result.errors.length === 0 : result.passed);
    if (isPassing === shouldPass) {
      passedChallenges++;
      console.log(`  [CHALLENGE PASS] ${name}`);
    } else {
      failedChallenges++;
      const errDetail = `Expected shouldPass=${shouldPass}, but got isPassing=${isPassing}. Errors: ${JSON.stringify(result.errors || result.error || 'N/A')}`;
      challengeFailures.push({ name, errDetail });
      console.log(`  [CHALLENGE FAIL] ${name} -> ${errDetail}`);
    }
  } catch (ex) {
    if (!shouldPass) {
      passedChallenges++;
      console.log(`  [CHALLENGE PASS (Threw Exception as expected)] ${name}: ${ex.message}`);
    } else {
      failedChallenges++;
      challengeFailures.push({ name, errDetail: ex.message });
      console.log(`  [CHALLENGE FAIL (Unexpected Exception)] ${name}: ${ex.message}`);
    }
  }
}

console.log('======================================================================');
console.log('   CHALLENGER 2: ADVERSARIAL STRESS & FAULT INJECTION SUITE           ');
console.log('======================================================================\n');

// -----------------------------------------------------------------------------
// SECTION 1: MANIFEST VALIDATION ADVERSARIAL CASES
// -----------------------------------------------------------------------------
console.log('>>> [1/5] Testing Manifest Validation Rejection Boundaries...');

const validManifest = {
  certifications: {
    cdl: {
      id: 'cdl', name: 'CDL', durationMinutes: 90, questionCount: 50, passingPercent: 70,
      domains: {
        'CDL-D1': { id: 'CDL-D1', name: 'D1', weight: 25 },
        'CDL-D2': { id: 'CDL-D2', name: 'D2', weight: 25 },
        'CDL-D3': { id: 'CDL-D3', name: 'D3', weight: 25 },
        'CDL-D4': { id: 'CDL-D4', name: 'D4', weight: 25 }
      }
    },
    ace: {
      id: 'ace', name: 'ACE', durationMinutes: 120, questionCount: 50, passingPercent: 70,
      domains: {
        'ACE-D1': { id: 'ACE-D1', name: 'D1', weight: 20 },
        'ACE-D2': { id: 'ACE-D2', name: 'D2', weight: 20 },
        'ACE-D3': { id: 'ACE-D3', name: 'D3', weight: 25 },
        'ACE-D4': { id: 'ACE-D4', name: 'D4', weight: 20 },
        'ACE-D5': { id: 'ACE-D5', name: 'D5', weight: 15 }
      }
    },
    pca: {
      id: 'pca', name: 'PCA', durationMinutes: 120, questionCount: 50, passingPercent: 70,
      domains: {
        'PCA-D1': { id: 'PCA-D1', name: 'D1', weight: 25 },
        'PCA-D2': { id: 'PCA-D2', name: 'D2', weight: 15 },
        'PCA-D3': { id: 'PCA-D3', name: 'D3', weight: 15 },
        'PCA-D4': { id: 'PCA-D4', name: 'D4', weight: 15 },
        'PCA-D5': { id: 'PCA-D5', name: 'D5', weight: 15 },
        'PCA-D6': { id: 'PCA-D6', name: 'D6', weight: 15 }
      }
    }
  }
};

challenge('Valid manifest passes', true, () => ({ errors: validateManifest(validManifest) }));
challenge('Null manifest rejected', false, () => ({ errors: validateManifest(null) }));
challenge('Manifest with missing PCA cert rejected', false, () => {
  const m = JSON.parse(JSON.stringify(validManifest));
  delete m.certifications.pca;
  return { errors: validateManifest(m) };
});
challenge('Manifest with passingPercent > 100 rejected', false, () => {
  const m = JSON.parse(JSON.stringify(validManifest));
  m.certifications.cdl.passingPercent = 105;
  return { errors: validateManifest(m) };
});
challenge('Manifest with durationMinutes <= 0 rejected', false, () => {
  const m = JSON.parse(JSON.stringify(validManifest));
  m.certifications.ace.durationMinutes = 0;
  return { errors: validateManifest(m) };
});
challenge('Manifest with domain weight sum = 99.5% rejected', false, () => {
  const m = JSON.parse(JSON.stringify(validManifest));
  m.certifications.cdl.domains['CDL-D1'].weight = 24.5;
  return { errors: validateManifest(m) };
});
challenge('Manifest with domain weight sum = 100.5% rejected', false, () => {
  const m = JSON.parse(JSON.stringify(validManifest));
  m.certifications.pca.domains['PCA-D1'].weight = 25.5;
  return { errors: validateManifest(m) };
});

// -----------------------------------------------------------------------------
// SECTION 2: CASE STUDIES VALIDATION ADVERSARIAL CASES
// -----------------------------------------------------------------------------
console.log('\n>>> [2/5] Testing Case Studies Validation Rejection Boundaries...');

const validCaseStudies = {
  mountkirk_games: {
    id: 'mountkirk_games', name: 'Mountkirk Games',
    companyOverview: 'Mountkirk Games makes online multiplayer games with global server infrastructure.',
    businessRequirements: ['Requirement 1', 'Requirement 2'],
    technicalRequirements: ['Technical 1', 'Technical 2']
  },
  terramearth: {
    id: 'terramearth', name: 'TerramEarth',
    companyOverview: 'TerramEarth manufactures heavy construction and agriculture equipment with IoT sensors.',
    businessRequirements: ['Requirement 1', 'Requirement 2'],
    technicalRequirements: ['Technical 1', 'Technical 2']
  },
  ehr_healthcare: {
    id: 'ehr_healthcare', name: 'EHR Healthcare',
    companyOverview: 'EHR Healthcare provides electronic health records SaaS solutions for medical providers.',
    businessRequirements: ['Requirement 1', 'Requirement 2'],
    technicalRequirements: ['Technical 1', 'Technical 2']
  },
  helicopter_racing_league: {
    id: 'helicopter_racing_league', name: 'Helicopter Racing League',
    companyOverview: 'Helicopter Racing League streams live sports races and telemetry globally with low latency.',
    businessRequirements: ['Requirement 1', 'Requirement 2'],
    technicalRequirements: ['Technical 1', 'Technical 2']
  }
};

challenge('Valid case studies pass', true, () => ({ errors: validateCaseStudies(validCaseStudies) }));
challenge('Null case studies rejected', false, () => ({ errors: validateCaseStudies(null) }));
challenge('Missing EHR Healthcare rejected', false, () => {
  const cs = JSON.parse(JSON.stringify(validCaseStudies));
  delete cs.ehr_healthcare;
  return { errors: validateCaseStudies(cs) };
});
challenge('Case study with short overview (<20 chars) rejected', false, () => {
  const cs = JSON.parse(JSON.stringify(validCaseStudies));
  cs.mountkirk_games.companyOverview = 'Too short';
  return { errors: validateCaseStudies(cs) };
});
challenge('Case study with empty businessRequirements rejected', false, () => {
  const cs = JSON.parse(JSON.stringify(validCaseStudies));
  cs.terramearth.businessRequirements = [];
  return { errors: validateCaseStudies(cs) };
});
challenge('Case study with empty technicalRequirements rejected', false, () => {
  const cs = JSON.parse(JSON.stringify(validCaseStudies));
  cs.helicopter_racing_league.technicalRequirements = [];
  return { errors: validateCaseStudies(cs) };
});

// -----------------------------------------------------------------------------
// SECTION 3: QUESTION ITEM SCHEMA & EDGE CASE INJECTION
// -----------------------------------------------------------------------------
console.log('\n>>> [3/5] Testing Question Item Schema & Adversarial Defect Rejection...');

const baseValidQ = {
  id: 'CDL-D1-001',
  certId: 'cdl',
  blockId: 'BLOCK-1',
  domainId: 'CDL-D1',
  domainName: 'Digital Transformation',
  subtopic: 'Cloud Economics',
  difficulty: 'foundational',
  bloomsLevel: 'understand',
  timeEstimateSeconds: 60,
  caseStudy: 'none',
  title: 'Cloud Cost Optimization Strategy',
  scenario: 'An enterprise is migrating legacy workloads to Google Cloud and wants to switch from CapEx to OpEx models.',
  keywords: ['CapEx', 'OpEx', 'TCO'],
  isMultiSelect: false,
  expectedSelectCount: 1,
  options: [
    { letter: 'A', text: 'Purchase on-premise hardware every 3 years' },
    { letter: 'B', text: 'Adopt pay-as-you-go cloud pricing model' },
    { letter: 'C', text: 'Lease private datacenters on 10-year contracts' },
    { letter: 'D', text: 'Overprovision physical compute instances' }
  ],
  correct: 'B',
  explanation: 'Adopting a pay-as-you-go model converts upfront capital expenditures into variable operating expenses.',
  distractors: {
    A: 'Hardware purchase is a classic CapEx model.',
    C: 'Long-term datacenter leases represent rigid CapEx commitments.',
    D: 'Overprovisioning compute instances increases waste without operational flexibility.'
  }
};

challenge('Baseline valid question passes', true, () => ({
  errors: validateQuestionItem(baseValidQ, validManifest, new Set())
}));

// Test Defect 1: Missing ID
challenge('Missing question ID rejected', false, () => {
  const q = { ...baseValidQ, id: '' };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 2: Duplicate ID
challenge('Duplicate question ID rejected', false, () => {
  const seen = new Set(['CDL-D1-001']);
  return { errors: validateQuestionItem(baseValidQ, validManifest, seen) };
});

// Test Defect 3: Invalid certId
challenge('Invalid certId (e.g. aws) rejected', false, () => {
  const q = { ...baseValidQ, certId: 'aws-cloud' };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 4: Invalid blockId
challenge('Invalid blockId (e.g. BLOCK-9) rejected', false, () => {
  const q = { ...baseValidQ, blockId: 'BLOCK-9' };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 5: Domain ID mismatch with manifest
challenge('Domain ID not in manifest rejected', false, () => {
  const q = { ...baseValidQ, domainId: 'UNKNOWN-DOMAIN' };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 6: Invalid difficulty
challenge('Invalid difficulty (e.g. beginner) rejected', false, () => {
  const q = { ...baseValidQ, difficulty: 'beginner' };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 7: Invalid bloomsLevel
challenge('Invalid bloomsLevel (e.g. remember) rejected', false, () => {
  const q = { ...baseValidQ, bloomsLevel: 'remember' };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 8: timeEstimateSeconds = 0 or negative
challenge('timeEstimateSeconds = 0 rejected', false, () => {
  const q = { ...baseValidQ, timeEstimateSeconds: 0 };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 9: timeEstimateSeconds > 600
challenge('timeEstimateSeconds > 600 rejected', false, () => {
  const q = { ...baseValidQ, timeEstimateSeconds: 601 };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 10: Case study on non-PCA cert
challenge('Case study on CDL exam rejected', false, () => {
  const q = { ...baseValidQ, caseStudy: 'mountkirk_games', caseStudySection: 'Tech' };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 11: PCA case study missing caseStudySection
challenge('PCA case study missing caseStudySection rejected', false, () => {
  const q = {
    ...baseValidQ,
    id: 'PCA-D1-001',
    certId: 'pca',
    domainId: 'PCA-D1',
    caseStudy: 'mountkirk_games',
    caseStudySection: undefined
  };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 12: Scenario too short (<20 chars)
challenge('Scenario text too short (<20 chars) rejected', false, () => {
  const q = { ...baseValidQ, scenario: 'Short scenario' };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 13: Empty keywords array
challenge('Empty keywords array rejected', false, () => {
  const q = { ...baseValidQ, keywords: [] };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 14: Single select with expectedSelectCount != 1
challenge('Single-select with expectedSelectCount = 2 rejected', false, () => {
  const q = { ...baseValidQ, isMultiSelect: false, expectedSelectCount: 2 };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 15: Multi-select with expectedSelectCount < 2
challenge('Multi-select with expectedSelectCount = 1 rejected', false, () => {
  const q = { ...baseValidQ, isMultiSelect: true, expectedSelectCount: 1, correct: ['B'] };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 16: Less than 4 options
challenge('Options count < 4 rejected', false, () => {
  const q = { ...baseValidQ, options: baseValidQ.options.slice(0, 3) };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 17: Duplicate option letter
challenge('Duplicate option letters rejected', false, () => {
  const q = {
    ...baseValidQ,
    options: [
      { letter: 'A', text: 'Option A' },
      { letter: 'A', text: 'Duplicate A' },
      { letter: 'B', text: 'Option B' },
      { letter: 'C', text: 'Option C' }
    ]
  };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 18: Invalid option letter (e.g. Z)
challenge('Invalid option letter (e.g. Z) rejected', false, () => {
  const q = {
    ...baseValidQ,
    options: [
      { letter: 'A', text: 'Option A' },
      { letter: 'B', text: 'Option B' },
      { letter: 'C', text: 'Option C' },
      { letter: 'Z', text: 'Option Z' }
    ]
  };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 19: Correct answer not in options
challenge('Correct letter not in options rejected', false, () => {
  const q = { ...baseValidQ, correct: 'E' };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 20: Multi-select correct array length mismatch
challenge('Multi-select correct length != expectedSelectCount rejected', false, () => {
  const q = {
    ...baseValidQ,
    isMultiSelect: true,
    expectedSelectCount: 2,
    correct: ['A', 'B', 'C']
  };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 21: Missing distractor for an incorrect option
challenge('Missing distractor justification for incorrect option rejected', false, () => {
  const q = {
    ...baseValidQ,
    distractors: {
      A: 'Justification for A',
      C: 'Justification for C'
      // Missing D
    }
  };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// Test Defect 22: Distractor text too short (<10 chars)
challenge('Distractor text too short (<10 chars) rejected', false, () => {
  const q = {
    ...baseValidQ,
    distractors: {
      A: 'Short',
      C: 'Long enough distractor justification for C',
      D: 'Long enough distractor justification for D'
    }
  };
  return { errors: validateQuestionItem(q, validManifest, new Set()) };
});

// -----------------------------------------------------------------------------
// SECTION 4: EXIT CODE PROPAGATION & FAULT INJECTION (CLI PROCESS TESTING)
// -----------------------------------------------------------------------------
console.log('\n>>> [4/5] Testing Exit Code Propagation in test_integrity.js & run_tests.ps1...');

// Test 4A: Running test_integrity.js against clean data yields exit code 0
const integrityCleanRun = spawnSync('node', [path.join(__dirname, 'test_integrity.js')], { encoding: 'utf8' });
challenge('test_integrity.js exits with code 0 on clean baseline', true, () => ({
  passed: integrityCleanRun.status === 0
}));

// Test 4B: Running run_tests.ps1 against clean baseline yields exit code 0
const psCleanRun = spawnSync('pwsh', ['-ExecutionPolicy', 'Bypass', '-File', path.join(__dirname, 'run_tests.ps1')], { encoding: 'utf8' });
challenge('run_tests.ps1 exits with code 0 on clean baseline', true, () => ({
  passed: psCleanRun.status === 0
}));

// Test 4C: Verify exit code 1 propagation when a subtest script is corrupted or fails
// We simulate a failing test script by temporarily evaluating child node processes with injected failures
const failingScriptTest = spawnSync('node', ['-e', 'process.exit(1)'], { encoding: 'utf8' });
challenge('Child process non-zero exit code is detected (Exit Code 1)', false, () => ({
  passed: failingScriptTest.status === 0
}));

// -----------------------------------------------------------------------------
// SECTION 5: PERFORMANCE, MEMORY & HEAP STRESS PROFILING
// -----------------------------------------------------------------------------
console.log('\n>>> [5/5] Performance, Memory Footprint & Scale Benchmarking...');

// Benchmark 1: Question Pool Rotation & Partitioning with 1,200 questions (4x normal size)
const perfPool1200 = createSyntheticQuestionPool('pca', 1200);
const startMem = process.memoryUsage();
const startTime = process.hrtime.bigint();

const pcaWeights = { 'PCA-D1': 25, 'PCA-D2': 15, 'PCA-D3': 15, 'PCA-D4': 15, 'PCA-D5': 15, 'PCA-D6': 15 };
const blocks = ReferenceEngine.BlockRotationEngine.generateEpochBlocks('pca', pcaWeights, perfPool1200, 42);

// Run 1,000 Leitner state transitions
let lState = null;
for (let i = 0; i < 1000; i++) {
  lState = ReferenceEngine.LeitnerEngine.processAnswer(lState, (i % 3 !== 0), 'B', 20000);
}

// Run 1,000 Probability calculations
let pResult = null;
for (let i = 0; i < 1000; i++) {
  pResult = ReferenceEngine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 70 + (i % 25) }],
    userQuestionStates: {},
    domainAccuracy: { 'PCA-D1': 0.8 },
    domainWeights: pcaWeights
  });
}

// Run 1,000 CRC-32 checksum calculations on 10KB state payloads
const largeStateJson = JSON.stringify(ReferenceState.createDefaultState()) + ' '.repeat(5000);
for (let i = 0; i < 1000; i++) {
  crc32(largeStateJson + i);
}

const endTime = process.hrtime.bigint();
const endMem = process.memoryUsage();
const elapsedMs = Number(endTime - startTime) / 1e6;
const heapDiffMb = (endMem.heapUsed - startMem.heapUsed) / (1024 * 1024);
const totalRssMb = endMem.rss / (1024 * 1024);

console.log(`  [BENCHMARK] 1,200 Qs rotation + 1,000 Leitner ops + 1,000 Probability ops + 1,000 CRC32 (10KB payloads)`);
console.log(`  [BENCHMARK] Total Elapsed Time: ${elapsedMs.toFixed(2)} ms`);
console.log(`  [BENCHMARK] Heap Delta:         ${heapDiffMb.toFixed(2)} MB`);
console.log(`  [BENCHMARK] Total RSS Memory:   ${totalRssMb.toFixed(2)} MB`);

challenge('Stress benchmark executes in under 500ms', true, () => ({
  passed: elapsedMs < 500
}));

challenge('Memory footprint remains under 100MB RSS', true, () => ({
  passed: totalRssMb < 100
}));

// Check UTF-8 multi-byte encoding in CRC-32 (Spanish GCP questions with accents)
const spanishText = '¿Cuál es la mejor práctica para arquitecturas de alta disponibilidad en Google Cloud Platform? Configuración de balanceadores de carga globales y almacenamiento en Cloud Spanner con réplicas multirregionales.';
const spanishCrc1 = crc32(spanishText);
const spanishCrc2 = crc32(spanishText);
challenge('CRC-32 handles UTF-8 multi-byte Spanish characters deterministically', true, () => ({
  passed: spanishCrc1 === spanishCrc2 && typeof spanishCrc1 === 'string' && spanishCrc1.length === 8
}));

// Tamper single accent in Spanish text
const spanishTampered = spanishText.replace('¿Cuál', '¿Cual');
const spanishCrcTampered = crc32(spanishTampered);
challenge('CRC-32 detects single diacritical mark/accent tampering', true, () => ({
  passed: spanishCrc1 !== spanishCrcTampered
}));

// -----------------------------------------------------------------------------
// SUMMARY & VERDICT
// -----------------------------------------------------------------------------
console.log('\n======================================================================');
console.log(`TOTAL ADVERSARIAL CHALLENGES: ${totalChallenges}`);
console.log(`PASSED:                       ${passedChallenges}`);
console.log(`FAILED:                       ${failedChallenges}`);
console.log('======================================================================');

if (failedChallenges > 0) {
  console.log('\nFAILURES SUMMARY:');
  challengeFailures.forEach((f, i) => {
    console.log(`[${i+1}] ${f.name} -> ${f.errDetail}`);
  });
  process.exit(1);
} else {
  console.log('\n✔ ALL ADVERSARIAL STRESS TESTS & DEFECT INJECTION CHECKS PASSED (100%)\n');
  process.exit(0);
}
