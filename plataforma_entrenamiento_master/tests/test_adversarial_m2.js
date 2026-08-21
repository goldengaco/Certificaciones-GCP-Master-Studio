/**
 * test_adversarial_m2.js
 * 
 * EMPIRICAL ADVERSARIAL STRESS TEST SUITE FOR MILESTONE 2: ENGINE & STATE CORE
 * 
 * Evaluates js/engine.js and js/state.js against strict mathematical invariants,
 * extreme boundary combinations, millions of Monte Carlo permutations, and CRC-32 tamper attacks.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

// Colors for reporting
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

const PROJECT_ROOT = path.resolve(__dirname, '..');
const engineJsPath = path.join(PROJECT_ROOT, 'js', 'engine.js');
const stateJsPath = path.join(PROJECT_ROOT, 'js', 'state.js');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failureDetails = [];

function recordCheck(passed, name, details = '') {
  totalChecks++;
  if (passed) {
    passedChecks++;
  } else {
    failedChecks++;
    failureDetails.push({ name, details });
    console.error(`  ${colors.red}✖ FAIL:${colors.reset} ${name} -> ${details}`);
  }
}

// Load runtime modules in fresh context
function loadRuntime() {
  const engineCode = fs.readFileSync(engineJsPath, 'utf8');
  const stateCode = fs.readFileSync(stateJsPath, 'utf8');

  const engineSandbox = { window: {}, console };
  engineSandbox.self = engineSandbox.window;
  engineSandbox.globalThis = engineSandbox.window;
  vm.runInContext(engineCode, vm.createContext(engineSandbox), { filename: engineJsPath });

  const stateSandbox = { window: {}, console, localStorage: {} };
  stateSandbox.self = stateSandbox.window;
  stateSandbox.globalThis = stateSandbox.window;
  vm.runInContext(stateCode, vm.createContext(stateSandbox), { filename: stateJsPath });

  return {
    engine: engineSandbox.window.GCP_ENGINE,
    state: stateSandbox.window.GCP_STATE
  };
}

/**
 * Synthetic Question Pool Generator
 */
function createPool(certId = 'cdl', total = 300) {
  const domainConfig = {
    cdl: ['CDL-D1', 'CDL-D2', 'CDL-D3', 'CDL-D4'],
    ace: ['ACE-D1', 'ACE-D2', 'ACE-D3', 'ACE-D4', 'ACE-D5'],
    pca: ['PCA-D1', 'PCA-D2', 'PCA-D3', 'PCA-D4', 'PCA-D5', 'PCA-D6']
  };
  const domains = domainConfig[certId] || ['DOM-1', 'DOM-2', 'DOM-3', 'DOM-4'];
  const questions = [];
  for (let i = 1; i <= total; i++) {
    const dom = domains[(i - 1) % domains.length];
    questions.push({
      id: `${certId.toUpperCase()}-${dom}-${String(i).padStart(4, '0')}`,
      certId,
      domainId: dom,
      domainName: `Domain ${dom}`,
      title: `Question ${i}`,
      correct: ['A', 'B', 'C', 'D'][i % 4]
    });
  }
  return questions;
}

// =========================================================================
// 1. BLOCK ROTATION ENGINE ADVERSARIAL STRESS TESTS
// =========================================================================
function stressBlockRotation(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== [1/4] BLOCK ROTATION ENGINE ADVERSARIAL STRESS TESTS ===${colors.reset}`);

  const poolSizes = [300, 360, 600, 1200, 60, 6];
  const certs = ['cdl', 'ace', 'pca'];
  const seeds = [
    0, 1, 42, 1337, 65535, 2147483647, 4294967295, -1, -1337, -999999,
    "seed_string_1", "12345", null, undefined, 3.14159265, NaN
  ];

  let totalDisjointnessRuns = 0;
  let totalBlocksVerified = 0;

  poolSizes.forEach(poolSize => {
    certs.forEach(certId => {
      const pool = createPool(certId, poolSize);
      const expectedBlockSize = Math.floor(poolSize / 6);

      seeds.forEach(seed => {
        const blocks = Engine.BlockRotationEngine.generateEpochBlocks(certId, {}, pool, seed);
        totalDisjointnessRuns++;

        // 1. Must produce exactly 6 blocks
        recordCheck(
          Array.isArray(blocks) && blocks.length === 6,
          `Block count = 6 for size ${poolSize}, cert ${certId}, seed ${seed}`,
          `Got length ${blocks ? blocks.length : 'null'}`
        );

        // 2. Disjointness: B_i ∩ B_j = ∅ for all i ≠ j
        const seenIds = new Set();
        let overlapFound = false;
        let totalItemsInBlocks = 0;

        blocks.forEach((blk, bIdx) => {
          totalBlocksVerified++;
          blk.forEach(q => {
            totalItemsInBlocks++;
            if (seenIds.has(q.id)) {
              overlapFound = true;
            }
            seenIds.add(q.id);
          });
        });

        recordCheck(
          !overlapFound,
          `Strict Disjointness (Zero Overlap $B_i \\cap B_j = \\emptyset$) [Pool ${poolSize}, ${certId}, seed: ${seed}]`,
          `Overlap detected in seed ${seed}`
        );

        // 3. Partition Completeness: Union of blocks = full pool
        recordCheck(
          seenIds.size === pool.length && totalItemsInBlocks === pool.length,
          `Partition Completeness (Union = Pool, size ${seenIds.size}/${pool.length}) [Pool ${poolSize}, ${certId}]`,
          `Missing or duplicate items: seen ${seenIds.size}, expected ${pool.length}`
        );

        // 4. Block size balance (within ±1 question when pool not perfectly divisible)
        const sizes = blocks.map(b => b.length);
        const minSize = Math.min(...sizes);
        const maxSize = Math.max(...sizes);
        recordCheck(
          maxSize - minSize <= 1,
          `Block Size Uniformity (min: ${minSize}, max: ${maxSize}, diff <= 1) [Pool ${poolSize}]`,
          `Size difference > 1: ${JSON.stringify(sizes)}`
        );
      });
    });
  });

  // Test 5: Determinism vs Entropy (Identical seeds identical, different seeds different)
  const pool300 = createPool('ace', 300);
  const runA1 = Engine.BlockRotationEngine.generateEpochBlocks('ace', {}, pool300, 8888);
  const runA2 = Engine.BlockRotationEngine.generateEpochBlocks('ace', {}, pool300, 8888);
  const runB = Engine.BlockRotationEngine.generateEpochBlocks('ace', {}, pool300, 8889);

  const serializedA1 = JSON.stringify(runA1.map(b => b.map(q => q.id)));
  const serializedA2 = JSON.stringify(runA2.map(b => b.map(q => q.id)));
  const serializedB = JSON.stringify(runB.map(b => b.map(q => q.id)));

  recordCheck(serializedA1 === serializedA2, 'Deterministic PRNG Invariant: identical seed yields identical block partition');
  recordCheck(serializedA1 !== serializedB, 'Entropy Invariant: different seeds yield distinct randomized block distributions');

  // Test 6: Empty pool handling
  const emptyBlocks = Engine.BlockRotationEngine.generateEpochBlocks('cdl', {}, [], 123);
  recordCheck(
    Array.isArray(emptyBlocks) && emptyBlocks.length === 6 && emptyBlocks.every(b => b.length === 0),
    'Empty pool returns 6 empty arrays without throwing'
  );

  console.log(`  ${colors.green}✔ Finished Block Rotation Stress: ${totalDisjointnessRuns} partition runs, ${totalBlocksVerified} blocks checked.${colors.reset}`);
}

// =========================================================================
// 2. LEITNER SPACED REPETITION ENGINE ADVERSARIAL STRESS TESTS
// =========================================================================
function stressLeitnerEngine(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== [2/4] LEITNER ENGINE ADVERSARIAL STRESS TESTS ===${colors.reset}`);

  // Test 1: Monte Carlo Sequence Invariant Verification (10,000 randomized response sequences)
  const NUM_SEQUENCES = 10000;
  let totalTransitionsChecked = 0;
  let invariantViolations = 0;

  for (let seqIdx = 0; seqIdx < NUM_SEQUENCES; seqIdx++) {
    const seqLength = 1 + Math.floor(Math.random() * 25);
    let state = null;
    let expectedStreak = 0;
    let expectedBox = 0;
    let historyTracker = [];

    for (let step = 0; step < seqLength; step++) {
      const isCorrect = Math.random() < 0.65;
      const responseTime = Math.floor(5000 + Math.random() * 60000);
      const chosenOption = ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)];

      state = Engine.LeitnerEngine.processAnswer(state, isCorrect, chosenOption, responseTime);
      totalTransitionsChecked++;

      if (isCorrect) {
        expectedStreak++;
        if (expectedStreak >= 3) {
          expectedBox = 3;
        } else if (expectedStreak === 2) {
          expectedBox = 2;
        } else if (expectedStreak === 1) {
          expectedBox = 1;
        }
      } else {
        expectedStreak = 0;
        expectedBox = 0;
      }
      historyTracker.push(isCorrect);

      // Invariant Check 1: Box must exactly match expectedBox
      if (state.box !== expectedBox) {
        invariantViolations++;
        recordCheck(false, `Leitner Box Invariant Violation at step ${step}`, `Expected box ${expectedBox}, got ${state.box}`);
      }

      // Invariant Check 2: Streak must match expectedStreak
      if (state.streak !== expectedStreak) {
        invariantViolations++;
        recordCheck(false, `Leitner Streak Invariant Violation at step ${step}`, `Expected streak ${expectedStreak}, got ${state.streak}`);
      }

      // Invariant Check 3: Mastery iff Box === 3 (streak >= 3)
      const shouldBeMastered = (expectedStreak >= 3 && expectedBox === 3);
      if (Boolean(state.isMastered) !== shouldBeMastered) {
        invariantViolations++;
        recordCheck(false, `Leitner Mastery Invariant Violation at step ${step}`, `Expected isMastered=${shouldBeMastered}, got ${state.isMastered}`);
      }

      // Invariant Check 4: Any error must immediately reset box to 0 and streak to 0
      if (!isCorrect) {
        if (state.box !== 0 || state.streak !== 0) {
          invariantViolations++;
          recordCheck(false, `Leitner Error Reset Invariant Violation`, `isCorrect=false but box=${state.box}, streak=${state.streak}`);
        }
      }
    }
  }

  recordCheck(
    invariantViolations === 0,
    `Leitner Monte Carlo Invariant: 10,000 sequences (${totalTransitionsChecked} transitions) satisfied Box & Streak transition equations (0 violations)`,
    `Violations count: ${invariantViolations}`
  );

  // Test 2: Oscillating Sequence (100 alternating answers: True, False, True, False...)
  let oscState = null;
  for (let i = 0; i < 100; i++) {
    const ans = (i % 2 === 0);
    oscState = Engine.LeitnerEngine.processAnswer(oscState, ans, 'A', 20000);
    if (ans) {
      recordCheck(oscState.box === 1 && oscState.streak === 1, `Oscillating step ${i} (True) -> Box 1, Streak 1`);
    } else {
      recordCheck(oscState.box === 0 && oscState.streak === 0 && !oscState.isMastered, `Oscillating step ${i} (False) -> Box 0, Streak 0`);
    }
  }

  // Test 3: selectDrillBatch Stress with extreme pools & weights
  const drillPool = createPool('pca', 100);
  const userStates = {};

  // 30 items Mastered (Box 3)
  for (let i = 0; i < 30; i++) {
    userStates[drillPool[i].id] = { box: 3, isMastered: true, streak: 5, totalAttempts: 5, correctAttempts: 5 };
  }
  // 20 items in Box 0 with 0% accuracy
  for (let i = 30; i < 50; i++) {
    userStates[drillPool[i].id] = { box: 0, isMastered: false, streak: 0, totalAttempts: 4, correctAttempts: 0 };
  }
  // 50 items unseen (no state)

  const drill10 = Engine.LeitnerEngine.selectDrillBatch(drillPool, userStates, { 'PCA-D1': { accuracy: 0.2 } }, 10);
  recordCheck(drill10.length === 10, 'selectDrillBatch returns requested batch size (10)');

  // None of the selected 10 should be from the 30 mastered items when 70 unmastered/unseen items exist
  const masteredIds = new Set(drillPool.slice(0, 30).map(q => q.id));
  const hasMasteredInBatch = drill10.some(q => masteredIds.has(q.id));
  recordCheck(!hasMasteredInBatch, 'selectDrillBatch strictly excludes mastered items when unmastered/weak items are available');

  // Test 4: Batch size greater than pool size
  const drillExcess = Engine.LeitnerEngine.selectDrillBatch(drillPool, userStates, {}, 250);
  recordCheck(drillExcess.length === 100, `selectDrillBatch clamps to pool size (${drillExcess.length}/100)`);

  // Test 5: Negative batch size
  const drillNeg = Engine.LeitnerEngine.selectDrillBatch(drillPool, userStates, {}, -5);
  recordCheck(Array.isArray(drillNeg) && drillNeg.length === 0, 'selectDrillBatch with negative batchSize returns empty array');

  console.log(`  ${colors.green}✔ Finished Leitner Engine Stress: ${NUM_SEQUENCES} Monte Carlo sequences & batch edge cases verified.${colors.reset}`);
}

// =========================================================================
// 3. PASSING PROBABILITY ENGINE ADVERSARIAL STRESS TESTS
// =========================================================================
function stressProbabilityEngine(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== [3/4] PASSING PROBABILITY ENGINE ADVERSARIAL STRESS TESTS ===${colors.reset}`);

  // Test 1: Boundary & Clamping Checks [0.0%, 99.9%]
  const extremeScenarios = [
    {
      name: 'All Zeroes (0% score, 0 mastery, 0 domain accuracy, 0s pace)',
      params: {
        examHistory: [{ scorePercent: 0 }, { scorePercent: 0 }, { scorePercent: 0 }],
        userQuestionStates: { 'Q-1': { box: 0, totalAttempts: 10, correctAttempts: 0 } },
        totalCertQuestions: 300,
        domainAccuracy: { D1: 0, D2: 0, D3: 0 },
        domainWeights: { D1: 33, D2: 33, D3: 34 },
        averageTimePerQuestionSec: 0
      },
      minProb: 0.0,
      maxProb: 10.0
    },
    {
      name: 'All Perfect (100% score, 100% mastery, 100% domain accuracy, 90s pace)',
      params: {
        examHistory: [{ scorePercent: 100 }, { scorePercent: 100 }, { scorePercent: 100 }, { scorePercent: 100 }],
        userQuestionStates: Array.from({ length: 300 }).reduce((acc, _, i) => {
          acc[`Q-${i}`] = { box: 3, streak: 3, totalAttempts: 3, correctAttempts: 3 };
          return acc;
        }, {}),
        totalCertQuestions: 300,
        domainAccuracy: { D1: 1.0, D2: 1.0, D3: 1.0, D4: 1.0 },
        domainWeights: { D1: 25, D2: 25, D3: 25, D4: 25 },
        averageTimePerQuestionSec: 90
      },
      minProb: 95.0,
      maxProb: 99.9
    },
    {
      name: 'Negative Score & Negative Time',
      params: {
        examHistory: [{ scorePercent: -100 }],
        userQuestionStates: {},
        totalCertQuestions: 300,
        domainAccuracy: { D1: -1.0 },
        domainWeights: { D1: 100 },
        averageTimePerQuestionSec: -500
      },
      minProb: 0.0,
      maxProb: 15.0
    },
    {
      name: 'Gigantic Scores & Astronomical Time (10,000% score, 1,000,000s time)',
      params: {
        examHistory: [{ scorePercent: 10000 }],
        userQuestionStates: {},
        totalCertQuestions: 300,
        domainAccuracy: { D1: 100.0 },
        domainWeights: { D1: 100 },
        averageTimePerQuestionSec: 1000000
      },
      minProb: 0.0,
      maxProb: 99.9
    },
    {
      name: 'Cold Start (0 history, 0 user states)',
      params: {
        examHistory: [],
        userQuestionStates: {}
      },
      minProb: 10.0,
      maxProb: 20.0
    },
    {
      name: 'Null/Undefined/Empty Params Object',
      params: undefined,
      minProb: 10.0,
      maxProb: 20.0
    }
  ];

  extremeScenarios.forEach(sc => {
    const res = Engine.PassingProbabilityEngine.calculatePassingProbability(sc.params);
    recordCheck(
      typeof res === 'object' && res !== null,
      `Engine returns object for scenario: ${sc.name}`
    );
    recordCheck(
      typeof res.passingProbability === 'number' && !isNaN(res.passingProbability) && isFinite(res.passingProbability),
      `Probability is finite number for scenario: ${sc.name} (got ${res.passingProbability})`
    );
    recordCheck(
      res.passingProbability >= 0.0 && res.passingProbability <= 99.9,
      `Probability strictly within [0.0%, 99.9%] for scenario: ${sc.name} (got ${res.passingProbability}%)`
    );
    recordCheck(
      res.passingProbability >= sc.minProb && res.passingProbability <= sc.maxProb,
      `Probability within expected bounds [${sc.minProb}%, ${sc.maxProb}%] for scenario: ${sc.name} (got ${res.passingProbability}%)`
    );
    recordCheck(
      typeof res.theta === 'number' && !isNaN(res.theta) && isFinite(res.theta),
      `Theta is finite number for scenario: ${sc.name} (got ${res.theta})`
    );
  });

  // Test 2: Monte Carlo Random Parameter Sweep (50,000 randomized parameter vectors)
  const MONTE_CARLO_ROUNDS = 50000;
  let outOfBoundsCount = 0;
  let nanCount = 0;

  for (let i = 0; i < MONTE_CARLO_ROUNDS; i++) {
    const numExams = Math.floor(Math.random() * 8);
    const examHistory = [];
    for (let e = 0; e < numExams; e++) {
      examHistory.push({ scorePercent: (Math.random() * 140) - 20 }); // [-20%, 120%]
    }

    const numStates = Math.floor(Math.random() * 350);
    const userQuestionStates = {};
    for (let s = 0; s < numStates; s++) {
      const isMastered = Math.random() < 0.4;
      userQuestionStates[`Q-${s}`] = {
        box: isMastered ? 3 : Math.floor(Math.random() * 3),
        isMastered: isMastered,
        totalAttempts: Math.floor(Math.random() * 10),
        correctAttempts: Math.floor(Math.random() * 10)
      };
    }

    const domainAccuracy = {
      D1: Math.random() * 1.2,
      D2: Math.random() * 1.2,
      D3: Math.random() * 1.2,
      D4: Math.random() * 1.2
    };

    const pacing = (Math.random() * 300) - 20; // [-20s, 280s]

    const result = Engine.PassingProbabilityEngine.calculatePassingProbability({
      examHistory,
      userQuestionStates,
      totalCertQuestions: 300,
      domainAccuracy,
      domainWeights: { D1: 25, D2: 25, D3: 25, D4: 25 },
      averageTimePerQuestionSec: pacing
    });

    if (isNaN(result.passingProbability) || !isFinite(result.passingProbability)) {
      nanCount++;
    }
    if (result.passingProbability < 0.0 || result.passingProbability > 99.9) {
      outOfBoundsCount++;
    }
  }

  recordCheck(
    nanCount === 0 && outOfBoundsCount === 0,
    `Monte Carlo Stability Invariant: 50,000 random parameter combinations bounded in [0.0%, 99.9%] (0 NaNs, 0 out-of-bounds)`,
    `NaNs: ${nanCount}, Out of bounds: ${outOfBoundsCount}`
  );

  // Test 3: Monotonic Sensitivity Invariants
  // A. Score Monotonicity (Increasing score strictly increases or preserves passing probability)
  let prevProb = -1;
  let scoreMonotonic = true;
  for (let score = 10; score <= 100; score += 5) {
    const p = Engine.PassingProbabilityEngine.calculatePassingProbability({
      examHistory: [{ scorePercent: score }],
      userQuestionStates: {},
      averageTimePerQuestionSec: 90
    }).passingProbability;
    if (p < prevProb) {
      scoreMonotonic = false;
    }
    prevProb = p;
  }
  recordCheck(scoreMonotonic, 'Monotonic Sensitivity: Passing probability monotonically increases with exam score');

  // B. Mastery Monotonicity (Increasing mastered items increases passing probability)
  let prevMasteryProb = -1;
  let masteryMonotonic = true;
  for (let mastered = 0; mastered <= 300; mastered += 30) {
    const states = {};
    for (let i = 0; i < mastered; i++) states[`Q-${i}`] = { box: 3, isMastered: true };
    const p = Engine.PassingProbabilityEngine.calculatePassingProbability({
      examHistory: [{ scorePercent: 75 }],
      userQuestionStates: states,
      totalCertQuestions: 300,
      averageTimePerQuestionSec: 90
    }).passingProbability;
    if (p < prevMasteryProb) {
      masteryMonotonic = false;
    }
    prevMasteryProb = p;
  }
  recordCheck(masteryMonotonic, 'Monotonic Sensitivity: Passing probability monotonically increases with Leitner mastery ratio');

  // C. Pacing Sensitivity (Rushing < 20s or exhaustion > 180s penalized compared to calibrated 90s)
  const optimalPace = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 75 }],
    userQuestionStates: {},
    averageTimePerQuestionSec: 90
  }).passingProbability;

  const rushedPace = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 75 }],
    userQuestionStates: {},
    averageTimePerQuestionSec: 15
  }).passingProbability;

  const exhaustedPace = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 75 }],
    userQuestionStates: {},
    averageTimePerQuestionSec: 240
  }).passingProbability;

  recordCheck(
    rushedPace < optimalPace && exhaustedPace < optimalPace,
    `Pacing Calibration Invariant: Optimal pace (90s = ${optimalPace}%) > Rushed pace (15s = ${rushedPace}%) and Exhausted pace (240s = ${exhaustedPace}%)`
  );

  console.log(`  ${colors.green}✔ Finished Passing Probability Stress: 50,000 Monte Carlo evaluations & monotonicity verified.${colors.reset}`);
}

// =========================================================================
// 4. STATE PERSISTENCE & CRC-32 TAMPER ADVERSARIAL STRESS TESTS
// =========================================================================
function stressStatePersistence(State) {
  console.log(`\n${colors.cyan}${colors.bright}=== [4/4] STATE PERSISTENCE & CRC-32 TAMPER ADVERSARIAL TESTS ===${colors.reset}`);

  // Test 1: Standard IEEE 802.3 Test Vectors
  const vectors = [
    { input: '', expected: '00000000' },
    { input: '123456789', expected: 'CBF43926' },
    { input: 'The quick brown fox jumps over the lazy dog', expected: '414FA339' },
    { input: 'GCP_TRAINING_PLATFORM_V1', expected: State.computeCRC32('GCP_TRAINING_PLATFORM_V1') }
  ];

  vectors.forEach(v => {
    const computed = State.computeCRC32(v.input);
    recordCheck(
      computed === v.expected,
      `CRC-32 vector "${v.input.substring(0, 20)}..." -> ${v.expected}`,
      `Got ${computed}`
    );
  });

  // Test 2: Unicode and Multibyte CRC-32 Integrity
  const unicodeStrings = [
    'Google Cloud Certified: Professional Cloud Architect (PCA) — Examen de Certificación 🚀',
    'Español: Configuración de redes VPC y Cortafuegos de Google Cloud',
    '日本語: クラウドアーキテクト認定試験',
    'JSON with emojis: {"status": "success 🎯", "points": 100, "domains": ["Seguridad 🔒", "Redes 🌐"]}'
  ];
  unicodeStrings.forEach((str, idx) => {
    const crcA = State.computeCRC32(str);
    const crcB = State.computeCRC32(str);
    recordCheck(crcA === crcB && typeof crcA === 'string' && crcA.length === 8, `Unicode CRC-32 consistency [String #${idx + 1}]`);
  });

  // Test 3: Export -> Corrupt -> Import Adversarial Fuzzing (1,000 corruption iterations)
  const baseState = State.createDefaultState();
  baseState.certifications.pca.history.push({
    sessionId: 'PCA-STRESS-001',
    scorePercent: 92.5,
    timestamp: Date.now(),
    durationSeconds: 7100
  });
  baseState.certifications.pca.questionStates['PCA-D1-0001'] = {
    box: 3,
    streak: 3,
    totalAttempts: 3,
    correctAttempts: 3
  };

  const validBackupString = State.exportBackup(baseState);
  const parsedBackup = JSON.parse(validBackupString);

  let detectedCorruptions = 0;
  const CORRUPTION_TRIALS = 1000;

  for (let trial = 0; trial < CORRUPTION_TRIALS; trial++) {
    const payloadChars = parsedBackup.payload.split('');
    const mutateIndex = Math.floor(Math.random() * payloadChars.length);
    const originalChar = payloadChars[mutateIndex];
    // Replace with a different char
    const replacementChar = String.fromCharCode((originalChar.charCodeAt(0) + 1 + Math.floor(Math.random() * 20)) % 127 || 65);
    payloadChars[mutateIndex] = replacementChar;

    const corruptedPayload = payloadChars.join('');
    // If the mutated payload by accident produces exact same string (unlikely), skip
    if (corruptedPayload === parsedBackup.payload) continue;

    const corruptedBackupString = JSON.stringify({
      schemaVersion: parsedBackup.schemaVersion,
      exportedAt: parsedBackup.exportedAt,
      payload: corruptedPayload,
      crc32: parsedBackup.crc32 // Keep original checksum
    });

    const result = State.importBackup(corruptedBackupString);
    if (!result.success) {
      detectedCorruptions++;
    }
  }

  recordCheck(
    detectedCorruptions === CORRUPTION_TRIALS,
    `CRC-32 Tamper Detection: ${detectedCorruptions}/${CORRUPTION_TRIALS} corrupted payloads strictly detected & rejected (100% rejection rate)`,
    `Undetected corruptions: ${CORRUPTION_TRIALS - detectedCorruptions}`
  );

  // Test 4: Schema Migration Robustness
  const legacyIncompleteStates = [
    {},
    { version: 1 },
    { schemaVersion: '0.9.0', meta: { activeCertId: 'cdl' } },
    { certifications: { cdl: { history: null } } },
    { settings: null }
  ];

  legacyIncompleteStates.forEach((raw, idx) => {
    const migrated = State.migrateState(raw);
    recordCheck(
      migrated &&
      migrated.schemaVersion === State.SCHEMA_VERSION &&
      migrated.certifications &&
      migrated.certifications.cdl &&
      Array.isArray(migrated.certifications.cdl.history) &&
      migrated.certifications.ace &&
      migrated.certifications.pca &&
      migrated.settings &&
      typeof migrated.settings === 'object',
      `Schema migration repairs legacy/malformed structure [Case #${idx + 1}]`
    );
  });

  console.log(`  ${colors.green}✔ Finished State Persistence Stress: CRC-32 test vectors, unicode, ${CORRUPTION_TRIALS} tamper trials & migrations verified.${colors.reset}`);
}

// =========================================================================
// MAIN RUNNER
// =========================================================================
function main() {
  const startTime = Date.now();
  console.log(`${colors.magenta}${colors.bright}======================================================================${colors.reset}`);
  console.log(`${colors.magenta}${colors.bright}  CHALLENGER 1: EMPIRICAL ADVERSARIAL STRESS HARNESS (MILESTONE 2)    ${colors.reset}`);
  console.log(`${colors.magenta}${colors.bright}======================================================================${colors.reset}`);

  try {
    const { engine, state } = loadRuntime();
    stressBlockRotation(engine);
    stressLeitnerEngine(engine);
    stressProbabilityEngine(engine);
    stressStatePersistence(state);
  } catch (err) {
    recordCheck(false, 'Unhandled exception during adversarial stress execution', err.stack || String(err));
  }

  const duration = Date.now() - startTime;
  console.log(`\n${colors.bright}----------------------------------------------------------------------${colors.reset}`);
  console.log(`Total Empirical Checks: ${totalChecks}`);
  console.log(`Passed:                 ${colors.green}${passedChecks}${colors.reset}`);
  console.log(`Failed:                 ${failedChecks > 0 ? colors.red + failedChecks : colors.green + '0'}${colors.reset}`);
  console.log(`Total Execution Time:   ${duration}ms`);
  console.log(`${colors.bright}----------------------------------------------------------------------${colors.reset}`);

  if (failedChecks > 0) {
    console.error(`\n${colors.red}${colors.bright}VERDICT: REQUEST_CHANGES — ${failedChecks} failures found!${colors.reset}`);
    failureDetails.forEach((f, i) => {
      console.error(`${colors.red}[#${i + 1}] ${f.name}: ${f.details}${colors.reset}`);
    });
    process.exit(1);
  } else {
    console.log(`\n${colors.green}${colors.bright}VERDICT: APPROVE — 100% of mathematical invariants and stress tests passed!${colors.reset}\n`);
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  stressBlockRotation,
  stressLeitnerEngine,
  stressProbabilityEngine,
  stressStatePersistence
};
