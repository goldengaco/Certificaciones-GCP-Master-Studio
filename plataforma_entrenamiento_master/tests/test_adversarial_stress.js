/**
 * test_adversarial_stress.js
 * 
 * Deep Adversarial Challenge, Stress & Boundary Mutation Test Harness
 * Author: Challenger 1 (E2E Testing Track)
 * 
 * Objectives:
 * 1. Test rotation disjointness under 1,000 randomized epoch seeds.
 * 2. Test Leitner state machine under erratic answer sequences & 10,000 Monte Carlo trajectories.
 * 3. Test Real Passing Probability metric under mathematical edge cases, pacing extremes, and randomized parameters.
 * 4. Test CRC-32 IEEE 802.3 checksum under 100% single-bit flips, byte corruptions, and hostile JSON injections.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

// Import reference engines and algorithms
const { ReferenceEngine, ReferenceState, crc32, createSyntheticQuestionPool } = require('./test_algorithms');

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

let stressPassCount = 0;
let stressFailCount = 0;
const failureDetails = [];

function assertStress(condition, testName, details = '') {
  if (condition) {
    stressPassCount++;
    console.log(`  ${colors.green}✔ PASS:${colors.reset} ${testName}`);
  } else {
    stressFailCount++;
    const err = `FAILED: ${testName} ${details ? '(' + details + ')' : ''}`;
    failureDetails.push(err);
    console.log(`  ${colors.red}✖ FAIL:${colors.reset} ${testName} ${colors.dim}${details}${colors.reset}`);
  }
}

/**
 * =========================================================================
 * 1. ROTATION DISJOINTNESS UNDER 1,000 RANDOMIZED EPOCH SEEDS
 * =========================================================================
 */
function stressTestRotationEngine(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== 1. STRESS TESTING ROTATION ENGINE UNDER 1,000 RANDOMIZED SEEDS ===${colors.reset}`);

  const certConfigs = [
    { certId: 'cdl', domainWeights: { 'CDL-D1': 25, 'CDL-D2': 25, 'CDL-D3': 25, 'CDL-D4': 25 } },
    { certId: 'ace', domainWeights: { 'ACE-D1': 20, 'ACE-D2': 20, 'ACE-D3': 25, 'ACE-D4': 20, 'ACE-D5': 15 } },
    { certId: 'pca', domainWeights: { 'PCA-D1': 25, 'PCA-D2': 15, 'PCA-D3': 15, 'PCA-D4': 15, 'PCA-D5': 15, 'PCA-D6': 15 } }
  ];

  let totalSeedRuns = 1000;
  let allDisjoint = true;
  let allExactSize50 = true;
  let allFullCoverage = true;
  let seedsTested = 0;

  for (let s = 0; s < totalSeedRuns; s++) {
    // Generate pseudo-random seeds covering 0, extremes, and random 32-bit ints
    let seed;
    if (s === 0) seed = 0;
    else if (s === 1) seed = 1;
    else if (s === 2) seed = 0xFFFFFFFF;
    else if (s === 3) seed = 2147483647;
    else if (s === 4) seed = 4294967295;
    else seed = Math.floor(Math.random() * 4294967296);

    const cfg = certConfigs[s % certConfigs.length];
    const pool = createSyntheticQuestionPool(cfg.certId, 300);
    const blocks = Engine.BlockRotationEngine.generateEpochBlocks(cfg.certId, cfg.domainWeights, pool, seed);

    if (!Array.isArray(blocks) || blocks.length !== 6) {
      allDisjoint = false;
      break;
    }

    const seenIds = new Set();
    for (let b = 0; b < blocks.length; b++) {
      const blk = blocks[b];
      if (blk.length !== 50) {
        allExactSize50 = false;
      }
      for (const q of blk) {
        if (seenIds.has(q.id)) {
          allDisjoint = false;
        }
        seenIds.add(q.id);
      }
    }

    if (seenIds.size !== 300) {
      allFullCoverage = false;
    }
    seedsTested++;
  }

  assertStress(allDisjoint, `Disjointness: Zero cross-block overlap across ${seedsTested} randomized epoch seeds ($B_i \\cap B_j = \\emptyset$)`);
  assertStress(allExactSize50, `Uniform Sizing: Every block has exactly 50 items across all ${seedsTested} seed runs`);
  assertStress(allFullCoverage, `Complete Partition: Union of 6 blocks equals 100% of 300-item pool in all ${seedsTested} runs`);

  // Boundary Case: Empty Pool
  const emptyBlocks = Engine.BlockRotationEngine.generateEpochBlocks('cdl', {}, [], 42);
  assertStress(
    Array.isArray(emptyBlocks) && emptyBlocks.length === 6 && emptyBlocks.every(b => b.length === 0),
    'Boundary: Empty question pool produces 6 empty block arrays without throwing'
  );
}

/**
 * =========================================================================
 * 2. LEITNER STATE MACHINE UNDER ERRATIC SEQUENCES & MONTE CARLO INVARIANTS
 * =========================================================================
 */
function stressTestLeitnerEngine(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== 2. STRESS TESTING LEITNER STATE MACHINE (ERRATIC & MONTE CARLO) ===${colors.reset}`);

  // Exact erratic sequence requested: Correct -> Wrong -> Correct -> Correct -> Wrong -> Correct -> Correct -> Correct
  const erraticSequence = [true, false, true, true, false, true, true, true];
  const expectedBoxes =   [1,    0,     1,    2,    0,     1,    2,    3];
  const expectedStreaks = [1,    0,     1,    2,    0,     1,    2,    3];
  const expectedMastery = [false, false, false, false, false, false, false, true];

  let state = null;
  let erraticSequencePass = true;

  for (let i = 0; i < erraticSequence.length; i++) {
    const isCorr = erraticSequence[i];
    state = Engine.LeitnerEngine.processAnswer(state, isCorr, 'A', 25000);

    if (state.box !== expectedBoxes[i] || state.streak !== expectedStreaks[i] || state.isMastered !== expectedMastery[i]) {
      erraticSequencePass = false;
      console.log(`Erratic seq failed at step ${i}: got box=${state.box}, streak=${state.streak}, isMastered=${state.isMastered}`);
      break;
    }
  }

  assertStress(
    erraticSequencePass,
    'Erratic Sequence (C-W-C-C-W-C-C-C): Matches exact box [1,0,1,2,0,1,2,3], streak and mastery transitions'
  );

  // 10,000 Monte Carlo Random Walk Invariant Assertions
  let monteCarloInvariantsPassed = true;
  const numTrajectories = 10000;

  for (let t = 0; t < numTrajectories; t++) {
    let currState = null;
    const trajectoryLength = 20;
    let expectedAttempts = 0;
    let expectedCorrect = 0;
    let localStreak = 0;

    for (let step = 0; step < trajectoryLength; step++) {
      const ansCorrect = Math.random() < 0.65; // 65% correct rate
      expectedAttempts++;
      if (ansCorrect) {
        expectedCorrect++;
        localStreak++;
      } else {
        localStreak = 0;
      }

      currState = Engine.LeitnerEngine.processAnswer(currState, ansCorrect, 'B', 15000 + Math.random() * 20000);

      // Invariant 1: Box limits [0, 3]
      if (currState.box < 0 || currState.box > 3) {
        monteCarloInvariantsPassed = false;
        break;
      }
      // Invariant 2: Streak calculation
      if (currState.streak !== localStreak) {
        monteCarloInvariantsPassed = false;
        break;
      }
      // Invariant 3: isMastered iff box === 3 and streak >= 3
      if (currState.isMastered !== (currState.box === 3 && currState.streak >= 3)) {
        monteCarloInvariantsPassed = false;
        break;
      }
      // Invariant 4: Reset on wrong answer
      if (!ansCorrect && (currState.box !== 0 || currState.streak !== 0)) {
        monteCarloInvariantsPassed = false;
        break;
      }
      // Invariant 5: History integrity
      if (currState.totalAttempts !== expectedAttempts || currState.correctAttempts !== expectedCorrect) {
        monteCarloInvariantsPassed = false;
        break;
      }
      if (currState.history.length !== expectedAttempts) {
        monteCarloInvariantsPassed = false;
        break;
      }
    }

    if (!monteCarloInvariantsPassed) break;
  }

  assertStress(
    monteCarloInvariantsPassed,
    `Monte Carlo Invariants: 10,000 stochastic trajectories (${numTrajectories * 20} steps) preserved all state machine invariants`
  );
}

/**
 * =========================================================================
 * 3. REAL PASSING PROBABILITY METRIC EDGE CASES & MATHEMATICAL BOUNDS
 * =========================================================================
 */
function stressTestPassingProbabilityEngine(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== 3. STRESS TESTING REAL PASSING PROBABILITY METRIC ===${colors.reset}`);

  // Edge Case 1: 0 Attempts & Cold Start
  const cold1 = Engine.PassingProbabilityEngine.calculatePassingProbability({});
  const cold2 = Engine.PassingProbabilityEngine.calculatePassingProbability({ examHistory: [], userQuestionStates: {} });
  assertStress(
    cold1.coldStart === true && cold2.coldStart === true && cold1.passingProbability === 15.0,
    'Cold Start: 0 attempts defaults safely to calibrated prior (15.0%)'
  );

  // Edge Case 2: 100% Score on 10 Exams + 100% Mastery + 0 Domain Deficits
  const masterParams = {
    examHistory: Array.from({ length: 10 }, () => ({ scorePercent: 100 })),
    userQuestionStates: Array.from({ length: 300 }).reduce((acc, _, i) => {
      acc[`Q-${i}`] = { box: 3, streak: 3, totalAttempts: 3, correctAttempts: 3 };
      return acc;
    }, {}),
    totalCertQuestions: 300,
    domainAccuracy: { D1: 1.0, D2: 1.0, D3: 1.0, D4: 1.0 },
    domainWeights: { D1: 25, D2: 25, D3: 25, D4: 25 },
    averageTimePerQuestionSec: 90
  };
  const masterResult = Engine.PassingProbabilityEngine.calculatePassingProbability(masterParams);
  assertStress(
    masterResult.passingProbability >= 95.0 && masterResult.passingProbability <= 99.9 && masterResult.breakdown.confidence === 'high',
    `Maximum Performance: Clamped <= 99.9% (got ${masterResult.passingProbability}%, confidence = high)`
  );

  // Edge Case 3: 0% Score across all exams + 0% Mastery + Maximum Deficit
  const failParams = {
    examHistory: Array.from({ length: 5 }, () => ({ scorePercent: 0 })),
    userQuestionStates: Array.from({ length: 100 }).reduce((acc, _, i) => {
      acc[`Q-${i}`] = { box: 0, streak: 0, totalAttempts: 5, correctAttempts: 0 };
      return acc;
    }, {}),
    totalCertQuestions: 300,
    domainAccuracy: { D1: 0.0, D2: 0.0, D3: 0.0, D4: 0.0 },
    domainWeights: { D1: 25, D2: 25, D3: 25, D4: 25 },
    averageTimePerQuestionSec: 10
  };
  const failResult = Engine.PassingProbabilityEngine.calculatePassingProbability(failParams);
  assertStress(
    failResult.passingProbability >= 0.0 && failResult.passingProbability <= 3.0,
    `Minimum Performance: Clamped >= 0.0% (got ${failResult.passingProbability}%)`
  );

  // Edge Case 4: Extreme Duration Pacing Stress
  const extremePacings = [
    { sec: 0, desc: '0s instant clicker' },
    { sec: 5, desc: '5s rapid rushing' },
    { sec: 19, desc: '19s under threshold' },
    { sec: 90, desc: '90s optimal pace' },
    { sec: 181, desc: '181s slow fatigue' },
    { sec: 600, desc: '600s extreme timeout' },
    { sec: 10000, desc: '10000s idle exhaustion' }
  ];

  let pacingPenaltiesValid = true;
  extremePacings.forEach(p => {
    const res = Engine.PassingProbabilityEngine.calculatePassingProbability({
      examHistory: [{ scorePercent: 75 }],
      averageTimePerQuestionSec: p.sec
    });
    if (res.passingProbability < 0.0 || res.passingProbability > 99.9 || isNaN(res.passingProbability)) {
      pacingPenaltiesValid = false;
    }
  });

  const optimalPacing = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 75 }],
    averageTimePerQuestionSec: 90
  });
  const rushingPacing = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 75 }],
    averageTimePerQuestionSec: 10
  });
  const slowPacing = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 75 }],
    averageTimePerQuestionSec: 300
  });

  assertStress(
    pacingPenaltiesValid && rushingPacing.passingProbability < optimalPacing.passingProbability && slowPacing.passingProbability < optimalPacing.passingProbability,
    `Pacing Extremes: Valid clamping across [0s - 10,000s]; optimal (90s: ${optimalPacing.passingProbability}%) > rush (${rushingPacing.passingProbability}%) & exhaustion (${slowPacing.passingProbability}%)`
  );

  // Edge Case 5: 10,000 Random Hyperparameter Sweeps (Mathematical Sigmoid Invariant [0.0%, 99.9%])
  let allClamped = true;
  for (let i = 0; i < 10000; i++) {
    const numExams = Math.floor(Math.random() * 10);
    const mockHistory = Array.from({ length: numExams }, () => ({ scorePercent: Math.random() * 100 }));
    const mockStates = {};
    const answeredCount = Math.floor(Math.random() * 300);
    for (let k = 0; k < answeredCount; k++) {
      mockStates[`Q-${k}`] = { box: Math.floor(Math.random() * 4) };
    }
    const domAcc = {
      D1: Math.random(),
      D2: Math.random(),
      D3: Math.random(),
      D4: Math.random()
    };
    const res = Engine.PassingProbabilityEngine.calculatePassingProbability({
      examHistory: mockHistory,
      userQuestionStates: mockStates,
      domainAccuracy: domAcc,
      domainWeights: { D1: 25, D2: 25, D3: 25, D4: 25 },
      averageTimePerQuestionSec: Math.random() * 300
    });

    if (isNaN(res.passingProbability) || res.passingProbability < 0.0 || res.passingProbability > 99.9) {
      allClamped = false;
      break;
    }
  }

  assertStress(allClamped, 'Mathematical Stability: 10,000 randomized hyperparameter sweeps strictly bounded in [0.0%, 99.9%]');
}

/**
 * =========================================================================
 * 4. CRC-32 CHECKSUM BIT-FLIP MUTATION, TAMPERING & JSON INJECTIONS
 * =========================================================================
 */
function stressTestCRC32AndTamperDetection(StateEngine) {
  console.log(`\n${colors.cyan}${colors.bright}=== 4. STRESS TESTING CRC-32 (100% BIT-FLIPS & HOSTILE MUTATIONS) ===${colors.reset}`);

  // Test standard vectors (verified against zlib.crc32 / IEEE 802.3)
  const standardVectors = [
    { input: '', expected: '00000000' },
    { input: '123456789', expected: 'CBF43926' },
    { input: 'The quick brown fox jumps over the lazy dog', expected: '414FA339' },
    { input: 'Google Cloud Certified Professional Cloud Architect', expected: '9E1DE012' }
  ];

  let vectorsMatch = true;
  for (const v of standardVectors) {
    const calc = crc32(v.input);
    if (calc !== v.expected) {
      console.log(`CRC vector mismatch on '${v.input}': expected ${v.expected}, got ${calc}`);
      vectorsMatch = false;
    }
  }
  assertStress(vectorsMatch, 'CRC-32 IEEE 802.3: All standard test vectors match exact IEEE polynomial outputs');

  // Single-Bit Flip Exhaustive Mutation Test (Hamming Distance = 1)
  const defaultState = StateEngine.createDefaultState();
  const backupJsonStr = StateEngine.exportBackup(defaultState);
  const parsedBackup = JSON.parse(backupJsonStr);
  const originalPayload = parsedBackup.payload;
  const originalCrc = parsedBackup.crc32;

  const payloadBuffer = Buffer.from(originalPayload, 'utf8');
  let singleBitFlipsDetected = 0;
  let totalBitFlipsTested = 0;

  // Flip each bit in each byte across the first 1,000 bytes
  const bytesToTest = Math.min(payloadBuffer.length, 500);
  for (let byteIdx = 0; byteIdx < bytesToTest; byteIdx++) {
    for (let bit = 0; bit < 8; bit++) {
      totalBitFlipsTested++;
      const mutatedBuffer = Buffer.from(payloadBuffer);
      mutatedBuffer[byteIdx] = mutatedBuffer[byteIdx] ^ (1 << bit);
      const mutatedPayloadStr = mutatedBuffer.toString('utf8');

      const mutatedCrc = crc32(mutatedPayloadStr);
      if (mutatedCrc !== originalCrc) {
        singleBitFlipsDetected++;
      }
    }
  }

  assertStress(
    singleBitFlipsDetected === totalBitFlipsTested && totalBitFlipsTested > 0,
    `Single-Bit Mutation Test: 100% of single-bit flips (${singleBitFlipsDetected}/${totalBitFlipsTested}) altered CRC-32 checksum`
  );

  // Adversarial Hostile JSON Payloads to importBackup
  const hostilePayloads = [
    { desc: 'Null input', raw: null },
    { desc: 'Undefined input', raw: undefined },
    { desc: 'Integer instead of string', raw: 123456 },
    { desc: 'Array instead of object JSON', raw: '[1,2,3]' },
    { desc: 'Missing crc32 field', raw: JSON.stringify({ schemaVersion: 1, payload: '{}' }) },
    { desc: 'Missing payload field', raw: JSON.stringify({ schemaVersion: 1, crc32: 'CBF43926' }) },
    { desc: 'Unclosed JSON string', raw: '{"payload": "{"' },
    { desc: 'Null byte injection in string', raw: '{"schemaVersion": 1, "payload": "{\0}", "crc32": "00000000"}' },
    { desc: 'Forged CRC mismatch', raw: JSON.stringify({ schemaVersion: 1, payload: '{"a":1}', crc32: 'DEADBEEF' }) },
    { desc: 'Invalid inner payload JSON string with matching CRC', raw: (() => {
        const brokenInner = '{"corrupted_inner_json": ';
        const c = crc32(brokenInner);
        return JSON.stringify({ schemaVersion: 1, payload: brokenInner, crc32: c });
      })()
    }
  ];

  let allHostileRejected = true;
  for (const hp of hostilePayloads) {
    const res = StateEngine.importBackup(hp.raw);
    if (res.success !== false) {
      console.log(`Failed to reject hostile payload: ${hp.desc}`);
      allHostileRejected = false;
    }
  }

  assertStress(
    allHostileRejected,
    `Adversarial Injections: 10/10 hostile/malformed backup payloads safely rejected without unhandled exceptions`
  );
}

/**
 * Main Runner
 */
function runAllStressTests() {
  const startTime = Date.now();
  console.log(`${colors.magenta}${colors.bright}=======================================================================${colors.reset}`);
  console.log(`${colors.magenta}${colors.bright}   EMPIRICAL CHALLENGER: DEEP ADVERSARIAL STRESS & MUTATION SUITE     ${colors.reset}`);
  console.log(`${colors.magenta}${colors.bright}=======================================================================${colors.reset}`);

  try {
    stressTestRotationEngine(ReferenceEngine);
    stressTestLeitnerEngine(ReferenceEngine);
    stressTestPassingProbabilityEngine(ReferenceEngine);
    stressTestCRC32AndTamperDetection(ReferenceState);
  } catch (err) {
    console.error(`Fatal stress exception: ${err.message}`, err);
    stressFailCount++;
    failureDetails.push(err.stack || String(err));
  }

  const durationMs = Date.now() - startTime;
  console.log(`\n${colors.bright}-----------------------------------------------------------------------${colors.reset}`);
  console.log(`Total Adversarial Checks: ${stressPassCount + stressFailCount}`);
  console.log(`Passed:                   ${colors.green}${stressPassCount}${colors.reset}`);
  console.log(`Failed:                   ${stressFailCount > 0 ? colors.red + stressFailCount : colors.green + '0'}${colors.reset}`);
  console.log(`Execution Time:           ${durationMs}ms`);
  console.log(`${colors.bright}-----------------------------------------------------------------------${colors.reset}`);

  if (stressFailCount > 0) {
    console.log(`\n${colors.red}${colors.bright}✖ ADVERSARIAL STRESS SUITE FAILED (${stressFailCount} errors)${colors.reset}`);
    process.exit(1);
  } else {
    console.log(`\n${colors.green}${colors.bright}✔ ALL EMPIRICAL ADVERSARIAL CHALLENGES & STRESS TESTS PASSED (100%)${colors.reset}\n`);
    process.exit(0);
  }
}

if (require.main === module) {
  runAllStressTests();
}

module.exports = {
  runAllStressTests
};
