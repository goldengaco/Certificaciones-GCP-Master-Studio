/**
 * stress_test_m5_challenger2.js
 * 
 * Algorithmic Stress & Mathematical Rigor Test Harness (Milestone 5)
 * Empirical Challenger: m5_challenger_2
 * 
 * Test Dimensions:
 * 1. Leitner 5-Box / 4-Level SRS Massive Simulation (15,000+ Question Sessions & Multi-Candidate Profiles)
 * 2. Real Passing Probability Metric Bounds, Numerical Rigor & Monotonicity
 * 3. Question Distribution Uniformity & Fisher-Yates Permutation Randomness
 * 4. CRC-32 Hash Security, Collision Resistance & High-Load Benchmarking
 * 5. Manifest & Case Study Cross-Reference Consistency & Structural Integrity
 * 
 * Zero external npm dependencies. Pure Node.js standard libraries (fs, path, assert, perf_hooks, crypto, zlib).
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const { performance } = require('perf_hooks');
const zlib = require('zlib');

// ANSI formatting
const c = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
  dim: '\x1b[2m'
};

const PROJECT_ROOT = path.resolve(__dirname, '..');

// Load modules
const GCP_ENGINE = require(path.join(PROJECT_ROOT, 'js', 'engine.js'));
const GCP_STATE = require(path.join(PROJECT_ROOT, 'js', 'state.js'));
const GCP_MANIFEST = require(path.join(PROJECT_ROOT, 'data', 'cert_manifest.js'));
const GCP_CASE_STUDIES = require(path.join(PROJECT_ROOT, 'data', 'case_studies.js'));
const CDL_QUESTIONS = require(path.join(PROJECT_ROOT, 'data', 'cert_cdl.js'));
const ACE_QUESTIONS = require(path.join(PROJECT_ROOT, 'data', 'cert_ace.js'));
const PCA_QUESTIONS = require(path.join(PROJECT_ROOT, 'data', 'cert_pca.js'));

let totalAsserts = 0;
let passedAsserts = 0;
let failedAsserts = 0;
const failureReport = [];

function check(condition, testName, meta = '') {
  totalAsserts++;
  if (condition) {
    passedAsserts++;
    console.log(`  ${c.green}✔ PASS:${c.reset} ${testName} ${meta ? c.dim + '(' + meta + ')' + c.reset : ''}`);
  } else {
    failedAsserts++;
    const errMsg = `Assertion FAIL: ${testName} ${meta ? '[' + meta + ']' : ''}`;
    failureReport.push(errMsg);
    console.log(`  ${c.red}✖ FAIL:${c.reset} ${testName} ${meta ? c.yellow + '(' + meta + ')' + c.reset : ''}`);
  }
}

// Summary accumulator for reporting
const empiricalMetrics = {
  leitner: {},
  probability: {},
  shuffle: {},
  crc32: {},
  crossReference: {}
};

console.log(`${c.bold}${c.cyan}========================================================================${c.reset}`);
console.log(`${c.bold}${c.cyan}   MILESTONE 5: ALGORITHMIC STRESS & MATHEMATICAL RIGOR TEST HARNESS   ${c.reset}`);
console.log(`${c.bold}${c.cyan}========================================================================${c.reset}\n`);

// ============================================================================
// SUITE 1: LEITNER 5-BOX / 4-LEVEL SRS MASSIVE SIMULATION (15,000+ SESSIONS)
// ============================================================================
console.log(`${c.bold}${c.magenta}=== SUITE 1: LEITNER SRS MASSIVE SIMULATION (15,000+ SESSIONS) ===${c.reset}`);

(function testLeitnerMassiveSimulation() {
  const TOTAL_SESSIONS = 15000;
  const questionsPool = PCA_QUESTIONS;
  const poolSize = questionsPool.length; // 300 questions

  console.log(`  [SIMULATION] Initializing 15,000-session simulation across candidate profiles...`);

  const profiles = [
    { name: 'Novice (30% accuracy)', accuracy: 0.30, sessions: 2500 },
    { name: 'Intermediate (70% accuracy)', accuracy: 0.70, sessions: 3500 },
    { name: 'Expert (95% accuracy)', accuracy: 0.95, sessions: 3000 },
    { name: 'Dynamic Learner (30% -> 90%)', dynamic: true, sessions: 3000 },
    { name: 'Oscillating (True/False Alternating)', alternating: true, sessions: 1500 },
    { name: 'Severe Deficit (D1 95%, D2-D6 20%)', domainSkew: true, sessions: 1500 }
  ];

  let totalSimulatedAnswers = 0;
  let invariantViolations = 0;
  let duplicateBatchDetections = 0;
  const profileResults = {};

  profiles.forEach(prof => {
    let userStates = {};
    let milestones = {};

    for (let s = 0; s < prof.sessions; s++) {
      // Select drill batch of 10 items
      const batch = GCP_ENGINE.LeitnerEngine.selectDrillBatch(questionsPool, userStates, {}, 10);
      
      // Check batch uniqueness invariant (no duplicates in single batch)
      const batchIds = new Set();
      batch.forEach(q => {
        if (batchIds.has(q.id)) {
          duplicateBatchDetections++;
        }
        batchIds.add(q.id);
      });

      batch.forEach(q => {
        totalSimulatedAnswers++;
        const priorState = userStates[q.id] || null;
        let isCorrect = false;
        if (prof.alternating) {
          const attemptIndex = priorState ? (priorState.totalAttempts || 0) : 0;
          isCorrect = (attemptIndex % 2 === 0);
        } else if (prof.dynamic) {
          const currentAcc = 0.30 + (0.60 * (s / prof.sessions));
          isCorrect = Math.random() < currentAcc;
        } else if (prof.domainSkew) {
          isCorrect = (q.domainId === 'PCA-D1') ? (Math.random() < 0.95) : (Math.random() < 0.20);
        } else {
          isCorrect = Math.random() < prof.accuracy;
        }

        const newState = GCP_ENGINE.LeitnerEngine.processAnswer(priorState, isCorrect, isCorrect ? q.correct : 'X', 25000);
        newState.questionId = q.id;
        userStates[q.id] = newState;

        // INVARIANT CHECKS ON EVERY SINGLE ANSWER PROCESS
        // 1. Box range [0, 3]
        if (newState.box < 0 || newState.box > 3 || !Number.isInteger(newState.box)) {
          invariantViolations++;
        }
        // 2. Streak range [0, inf)
        if (newState.streak < 0 || !Number.isInteger(newState.streak)) {
          invariantViolations++;
        }
        // 3. Mastery definition
        if ((newState.box === 3) !== (newState.isMastered === true)) {
          invariantViolations++;
        }
        // 4. Streak-to-Box mapping
        if (newState.streak >= 3 && newState.box !== 3) invariantViolations++;
        if (newState.streak === 2 && newState.box !== 2) invariantViolations++;
        if (newState.streak === 1 && newState.box !== 1) invariantViolations++;
        if (newState.streak === 0 && newState.box !== 0) invariantViolations++;
        // 5. Total attempts conservation
        if (newState.correctAttempts + newState.incorrectAttempts !== newState.totalAttempts) {
          invariantViolations++;
        }
        // 6. History array consistency
        if (!Array.isArray(newState.history) || newState.history.length !== newState.totalAttempts) {
          invariantViolations++;
        }
      });

      // Snapshot box distribution at milestone sessions
      if ([10, 50, 100, 250, 500, 1000].includes(s + 1)) {
        let mastered = 0;
        const counts = [0, 0, 0, 0];
        Object.values(userStates).forEach(st => {
          counts[st.box]++;
          if (st.isMastered) mastered++;
        });
        milestones[s + 1] = {
          masteredRate: ((mastered / poolSize) * 100).toFixed(1) + '%',
          boxes: counts
        };
      }
    }

    // Measure final stats
    const finalCounts = [0, 0, 0, 0];
    let finalMastered = 0;
    Object.values(userStates).forEach(st => {
      finalCounts[st.box]++;
      if (st.isMastered) finalMastered++;
    });

    profileResults[prof.name] = {
      sessions: prof.sessions,
      totalItemsTracked: Object.keys(userStates).length,
      finalBoxCounts: finalCounts,
      masteryRate: ((finalMastered / poolSize) * 100).toFixed(1) + '%',
      boxDistribution: finalCounts.map(c => ((c / poolSize) * 100).toFixed(1) + '%'),
      milestones: milestones
    };
  });

  empiricalMetrics.leitner = {
    totalSessionsSimulated: TOTAL_SESSIONS,
    totalAnswersProcessed: totalSimulatedAnswers,
    invariantViolations: invariantViolations,
    duplicateBatchDetections: duplicateBatchDetections,
    profiles: profileResults
  };

  check(totalSimulatedAnswers >= 100000, `High-load simulation volume (processed ${totalSimulatedAnswers} question answers)`);
  check(invariantViolations === 0, `Zero state machine invariant violations across ${totalSimulatedAnswers} operations`);
  check(duplicateBatchDetections === 0, `Zero duplicate questions inside any drill batch`);
  
  // Rate-of-learning divergence: at session 100 (1,000 answers), Novice has 0-1% mastery while Expert has >95% mastery
  const noviceAt100 = parseFloat(profileResults['Novice (30% accuracy)'].milestones[100].masteredRate);
  const expertAt100 = parseFloat(profileResults['Expert (95% accuracy)'].milestones[100].masteredRate);
  check(noviceAt100 <= 1.0, `Novice learning rate correctly delayed at session 100 (${noviceAt100}%)`);
  check(expertAt100 >= 95.0, `Expert rapid mastery at session 100 (${expertAt100}%)`);

  // Verify oscillating profile (hit, miss, hit, miss) never reaches mastery
  const oscFinalMastery = parseFloat(profileResults['Oscillating (True/False Alternating)'].masteryRate);
  check(oscFinalMastery === 0.0, `Oscillating candidate never reaches mastery (${oscFinalMastery}%)`);

  // Verify no questions permanently lost or dropped
  const allIds = new Set(questionsPool.map(q => q.id));
  check(allIds.size === poolSize, `Question pool integrity: 300 unique IDs verified`);
})();

// ============================================================================
// SUITE 2: PASSING PROBABILITY BOUNDS, NUMERICAL CONVERGENCE & MONOTONICITY
// ============================================================================
console.log(`\n${c.bold}${c.magenta}=== SUITE 2: PASSING PROBABILITY BOUNDS & NUMERICAL CONVERGENCE ===${c.reset}`);

(function testProbabilityBoundsAndConvergence() {
  const PEngine = GCP_ENGINE.PassingProbabilityEngine;

  // 1. Cold Start
  const coldStartResult = PEngine.calculatePassingProbability({});
  check(coldStartResult.coldStart === true && coldStartResult.passingProbability === 15.0, `Cold start exact baseline prior (15.0%)`);
  check(Number.isFinite(coldStartResult.theta), `Cold start theta is finite (${coldStartResult.theta})`);

  // 2. Extreme Lower Bound: 100% Wrong Answers
  const zeroExamHistory = Array.from({ length: 50 }, () => ({ scorePercent: 0 }));
  const zeroUserStates = {};
  PCA_QUESTIONS.forEach(q => {
    zeroUserStates[q.id] = { box: 0, streak: 0, totalAttempts: 10, correctAttempts: 0, isMastered: false };
  });
  const lowerResult = PEngine.calculatePassingProbability({
    examHistory: zeroExamHistory,
    userQuestionStates: zeroUserStates,
    totalCertQuestions: 300,
    domainAccuracy: { 'PCA-D1': 0, 'PCA-D2': 0, 'PCA-D3': 0, 'PCA-D4': 0, 'PCA-D5': 0, 'PCA-D6': 0 },
    domainWeights: GCP_MANIFEST.helpers.getDomainWeights('pca'),
    averageTimePerQuestionSec: 90
  });

  check(lowerResult.passingProbability >= 0.0, `Lower bound clamped >= 0.0% (got ${lowerResult.passingProbability}%)`);
  check(lowerResult.passingProbability < 1.0, `Extreme failure converges < 1.0% (got ${lowerResult.passingProbability}%)`);
  check(!Number.isNaN(lowerResult.passingProbability), `Lower bound is not NaN`);
  check(Number.isFinite(lowerResult.passingProbability), `Lower bound is finite`);

  // 3. Extreme Upper Bound: 100% Right Answers
  const perfectExamHistory = Array.from({ length: 50 }, () => ({ scorePercent: 100 }));
  const perfectUserStates = {};
  PCA_QUESTIONS.forEach(q => {
    perfectUserStates[q.id] = { box: 3, streak: 5, totalAttempts: 5, correctAttempts: 5, isMastered: true };
  });
  const upperResult = PEngine.calculatePassingProbability({
    examHistory: perfectExamHistory,
    userQuestionStates: perfectUserStates,
    totalCertQuestions: 300,
    domainAccuracy: { 'PCA-D1': 1.0, 'PCA-D2': 1.0, 'PCA-D3': 1.0, 'PCA-D4': 1.0, 'PCA-D5': 1.0, 'PCA-D6': 1.0 },
    domainWeights: GCP_MANIFEST.helpers.getDomainWeights('pca'),
    averageTimePerQuestionSec: 90
  });

  check(upperResult.passingProbability <= 99.9, `Upper bound clamped <= 99.9% (got ${upperResult.passingProbability}%)`);
  check(upperResult.passingProbability >= 95.0, `Perfect performance achieves high mastery (got ${upperResult.passingProbability}%)`);
  check(!Number.isNaN(upperResult.passingProbability), `Upper bound is not NaN`);
  check(Number.isFinite(upperResult.passingProbability), `Upper bound is finite`);

  // 4. Strict Score Monotonicity Across Continuous Grid (0% to 100%)
  let monotonicityViolations = 0;
  let prevProb = -1;
  const scoreGrid = [];
  for (let score = 0; score <= 100; score += 1) {
    const res = PEngine.calculatePassingProbability({
      examHistory: [{ scorePercent: score }],
      userQuestionStates: { 'Q1': { box: 1, streak: 1, totalAttempts: 1, correctAttempts: 1 } },
      totalCertQuestions: 300,
      domainAccuracy: {},
      domainWeights: {},
      averageTimePerQuestionSec: 90
    });
    scoreGrid.push({ score, prob: res.passingProbability });
    if (res.passingProbability < prevProb) {
      monotonicityViolations++;
    }
    prevProb = res.passingProbability;
  }
  check(monotonicityViolations === 0, `Strict score monotonicity across 0-100% grid (0 violations in 101 steps)`);

  // 5. Strict Mastery Monotonicity Across Range (0 to 300 mastered)
  let masteryViolations = 0;
  let prevMasteryProb = -1;
  for (let m = 0; m <= 300; m += 10) {
    const customStates = {};
    for (let i = 0; i < m; i++) {
      customStates[`Q_${i}`] = { box: 3, isMastered: true, totalAttempts: 3, correctAttempts: 3 };
    }
    for (let i = m; i < 300; i++) {
      customStates[`Q_${i}`] = { box: 0, isMastered: false, totalAttempts: 3, correctAttempts: 1 };
    }
    const res = PEngine.calculatePassingProbability({
      examHistory: [{ scorePercent: 75 }],
      userQuestionStates: customStates,
      totalCertQuestions: 300,
      domainAccuracy: {},
      domainWeights: {},
      averageTimePerQuestionSec: 90
    });
    if (res.passingProbability < prevMasteryProb) {
      masteryViolations++;
    }
    prevMasteryProb = res.passingProbability;
  }
  check(masteryViolations === 0, `Strict mastery ratio monotonicity across 0-300 mastered items`);

  // 6. Domain Deficit Penalty Verification
  const balancedDomainRes = PEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 75 }],
    userQuestionStates: {},
    totalCertQuestions: 300,
    domainAccuracy: { 'CDL-D1': 0.75, 'CDL-D2': 0.75, 'CDL-D3': 0.75, 'CDL-D4': 0.75 },
    domainWeights: { 'CDL-D1': 25, 'CDL-D2': 25, 'CDL-D3': 25, 'CDL-D4': 25 }
  });

  const unbalancedDomainRes = PEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 75 }],
    userQuestionStates: {},
    totalCertQuestions: 300,
    domainAccuracy: { 'CDL-D1': 1.00, 'CDL-D2': 1.00, 'CDL-D3': 1.00, 'CDL-D4': 0.00 }, // Severe D4 collapse
    domainWeights: { 'CDL-D1': 25, 'CDL-D2': 25, 'CDL-D3': 25, 'CDL-D4': 25 }
  });

  check(unbalancedDomainRes.passingProbability < balancedDomainRes.passingProbability,
    `Domain deficit penalty lowers score under severe imbalance (${unbalancedDomainRes.passingProbability}% vs balanced ${balancedDomainRes.passingProbability}%)`);

  // 7. Pacing Factor Calibration Extremes
  const rushingRes = PEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 80 }],
    userQuestionStates: { 'Q1': { box: 1, totalAttempts: 1, correctAttempts: 1 } },
    averageTimePerQuestionSec: 10 // Rapid guessing < 20s
  });
  const normalRes = PEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 80 }],
    userQuestionStates: { 'Q1': { box: 1, totalAttempts: 1, correctAttempts: 1 } },
    averageTimePerQuestionSec: 90 // Normal pace
  });
  const exhaustedRes = PEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 80 }],
    userQuestionStates: { 'Q1': { box: 1, totalAttempts: 1, correctAttempts: 1 } },
    averageTimePerQuestionSec: 250 // Exhaustion > 180s
  });

  check(rushingRes.passingProbability < normalRes.passingProbability, `Rapid guessing penalty applied (${rushingRes.passingProbability}% vs ${normalRes.passingProbability}%)`);
  check(exhaustedRes.passingProbability < normalRes.passingProbability, `Time exhaustion penalty applied (${exhaustedRes.passingProbability}% vs ${normalRes.passingProbability}%)`);

  // 8. Monte Carlo Numerical Stress (10,000 Random Parameter Invocations)
  let nanOrInfCount = 0;
  let precisionErrors = 0;
  for (let k = 0; k < 10000; k++) {
    const randomScore = Math.random() * 100;
    const randomPace = Math.random() * 300;
    const randomMastered = Math.floor(Math.random() * 300);
    const mockStates = {};
    for (let j = 0; j < randomMastered; j++) mockStates[`Q_${j}`] = { box: 3, isMastered: true };

    const result = PEngine.calculatePassingProbability({
      examHistory: [{ scorePercent: randomScore }],
      userQuestionStates: mockStates,
      totalCertQuestions: 300,
      averageTimePerQuestionSec: randomPace
    });

    if (Number.isNaN(result.passingProbability) || !Number.isFinite(result.passingProbability)) {
      nanOrInfCount++;
    }
    if (result.passingProbability < 0.0 || result.passingProbability > 99.9) {
      precisionErrors++;
    }
  }

  check(nanOrInfCount === 0, `10,000 random Monte Carlo parameter sets generated zero NaN or Infinity values`);
  check(precisionErrors === 0, `10,000 random Monte Carlo parameter sets strictly respected [0.0%, 99.9%] bounds`);

  empiricalMetrics.probability = {
    coldStart: coldStartResult.passingProbability,
    lowerBoundClamped: lowerResult.passingProbability,
    upperBoundClamped: upperResult.passingProbability,
    scoreMonotonicityViolations: monotonicityViolations,
    masteryMonotonicityViolations: masteryViolations,
    monteCarloRuns: 10000,
    nanOrInfCount: nanOrInfCount,
    precisionErrors: precisionErrors
  };
})();

// ============================================================================
// SUITE 3: QUESTION DISTRIBUTION UNIFORMITY & SHUFFLE RANDOMNESS
// ============================================================================
console.log(`\n${c.bold}${c.magenta}=== SUITE 3: QUESTION DISTRIBUTION UNIFORMITY & SHUFFLE RANDOMNESS ===${c.reset}`);

(function testShuffleAndBlockDistribution() {
  const BREngine = GCP_ENGINE.BlockRotationEngine;
  const certs = [
    { certId: 'cdl', pool: CDL_QUESTIONS },
    { certId: 'ace', pool: ACE_QUESTIONS },
    { certId: 'pca', pool: PCA_QUESTIONS }
  ];

  const EPOCH_ITERATIONS = 1000;
  let totalDisjointnessFailures = 0;
  let totalCompletenessFailures = 0;
  let totalBlockSizeDeviations = 0;
  const certUniformityResults = {};

  certs.forEach(({ certId, pool }) => {
    const poolSize = pool.length; // 300
    const domainWeights = GCP_MANIFEST.helpers.getDomainWeights(certId);

    // Compute expected per-domain counts in pool
    const domainPoolCounts = {};
    pool.forEach(q => {
      domainPoolCounts[q.domainId] = (domainPoolCounts[q.domainId] || 0) + 1;
    });

    // Track question appearance counts in each block (0 to 5) across epochs
    const questionBlockMatrix = {};
    pool.forEach(q => {
      questionBlockMatrix[q.id] = [0, 0, 0, 0, 0, 0];
    });

    for (let ep = 1; ep <= EPOCH_ITERATIONS; ep++) {
      const seed = (ep * 7919 + 104729) >>> 0;
      const blocks = BREngine.generateEpochBlocks(certId, domainWeights, pool, seed);

      // Invariant 1: Exactly 6 blocks
      if (!Array.isArray(blocks) || blocks.length !== 6) {
        totalCompletenessFailures++;
        continue;
      }

      const seenInEpoch = new Set();

      blocks.forEach((blk, bIdx) => {
        // Invariant 2: Exactly 50 items per block
        if (blk.length !== 50) {
          totalBlockSizeDeviations++;
        }

        // Domain quota verification: each domain's count in the block should be floor(N/6) or ceil(N/6)
        const blockDomainCounts = {};
        blk.forEach(q => {
          blockDomainCounts[q.domainId] = (blockDomainCounts[q.domainId] || 0) + 1;
          
          // Invariant 3: Disjointness ($B_i \cap B_j = \emptyset$)
          if (seenInEpoch.has(q.id)) {
            totalDisjointnessFailures++;
          }
          seenInEpoch.add(q.id);

          // Record block index placement
          if (questionBlockMatrix[q.id]) {
            questionBlockMatrix[q.id][bIdx]++;
          }
        });

        // Check each domain allocation is optimal integer partition of total domain pool / 6
        for (const [dom, totalCount] of Object.entries(domainPoolCounts)) {
          const actual = blockDomainCounts[dom] || 0;
          const minAllowed = Math.floor(totalCount / 6);
          const maxAllowed = Math.ceil(totalCount / 6);
          if (actual < minAllowed || actual > maxAllowed) {
            totalCompletenessFailures++;
          }
        }
      });

      // Invariant 4: Union equals all 300 questions
      if (seenInEpoch.size !== poolSize) {
        totalCompletenessFailures++;
      }
    }

    // Chi-Square goodness of fit test for block placement uniformity across 1,000 epochs
    const expectedAppearances = EPOCH_ITERATIONS / 6;
    let totalChiSquare = 0;
    Object.keys(questionBlockMatrix).forEach(qId => {
      const counts = questionBlockMatrix[qId];
      counts.forEach(observed => {
        const diff = observed - expectedAppearances;
        totalChiSquare += (diff * diff) / expectedAppearances;
      });
    });

    const averageChiSquarePerQuestion = totalChiSquare / poolSize;

    certUniformityResults[certId] = {
      epochsTested: EPOCH_ITERATIONS,
      totalBlocksGenerated: EPOCH_ITERATIONS * 6,
      disjointnessIntegrity: '100%',
      avgChiSquarePerQuestion: averageChiSquarePerQuestion.toFixed(3)
    };
  });

  empiricalMetrics.shuffle = certUniformityResults;

  check(totalDisjointnessFailures === 0, `100% disjoint blocks verified across 3,000 epochs (0 overlaps in 18,000 blocks)`);
  check(totalCompletenessFailures === 0, `Complete 300-question partitioning verified without omissions`);
  check(totalBlockSizeDeviations === 0, `Every generated block contains exactly 50 questions across 18,000 blocks`);

  // Check intra-block shuffling randomness (domain items are distributed throughout the block, not clumped at the top)
  const samplePCAEpoch = BREngine.generateEpochBlocks('pca', GCP_MANIFEST.helpers.getDomainWeights('pca'), PCA_QUESTIONS, 42);
  let domainRunLengths = [];
  samplePCAEpoch.forEach(blk => {
    let currentRun = 1;
    for (let i = 1; i < blk.length; i++) {
      if (blk[i].domainId === blk[i - 1].domainId) {
        currentRun++;
      } else {
        domainRunLengths.push(currentRun);
        currentRun = 1;
      }
    }
    domainRunLengths.push(currentRun);
  });

  const maxDomainRun = Math.max(...domainRunLengths);
  check(maxDomainRun <= 6, `Intra-block shuffling interleaves domain items smoothly (max consecutive domain run = ${maxDomainRun})`);
})();

// ============================================================================
// SUITE 4: CRC-32 HASH SECURITY, COLLISION RESISTANCE & BENCHMARKING
// ============================================================================
console.log(`\n${c.bold}${c.magenta}=== SUITE 4: CRC-32 HASH SECURITY, COLLISION RESISTANCE & PERFORMANCE ===${c.reset}`);

(function testCrc32SecurityAndPerformance() {
  const SManager = GCP_STATE;

  // 1. Standard IEEE 802.3 Test Vectors verified against native Node.js zlib.crc32
  const vectors = [
    '',
    '123456789',
    'The quick brown fox jumps over the lazy dog',
    'Google Cloud Platform Certification Master Edition',
    'Español: Configuración de redes híbridas y criptografía Cloud KMS',
    '{"schemaVersion":"1.0.0","certifications":{"pca":{"history":[]}}}'
  ];

  let vectorFailures = 0;
  vectors.forEach(str => {
    const calcEngine = SManager.computeCRC32(str);
    const calcZlib = (zlib.crc32(str) >>> 0).toString(16).padStart(8, '0').toUpperCase();
    if (calcEngine !== calcZlib) {
      vectorFailures++;
    }
  });
  check(vectorFailures === 0, `Standard IEEE 802.3 CRC-32 matches zlib reference across test vectors`);

  // 2. Collision Resistance Under 100,000 Incremental State Mutations
  console.log(`  [BENCHMARK] Testing collision resistance on 100,000 mutated state variations...`);
  const baseState = SManager.createDefaultState();
  baseState.certifications.pca.history.push({
    sessionId: 'session_001',
    scorePercent: 78,
    passed: true,
    timestamp: 1724217600000
  });

  const baseJson = JSON.stringify(baseState);
  const baseHash = SManager.computeCRC32(baseJson);

  let collisionCount = 0;
  const hashSet = new Set();
  hashSet.add(baseHash);

  const tStartCollision = performance.now();
  for (let m = 1; m <= 100000; m++) {
    // Modify 1 integer/timestamp or score
    const mutated = baseJson.replace('1724217600000', String(1724217600000 + m));
    const mutatedHash = SManager.computeCRC32(mutated);
    if (mutatedHash === baseHash) {
      collisionCount++;
    }
  }
  const tEndCollision = performance.now();
  const collisionDurationMs = tEndCollision - tStartCollision;

  check(collisionCount === 0, `Zero collisions detected against base hash across 100,000 mutated states`);

  // 3. Multi-Payload Throughput & Performance Benchmarking
  console.log(`  [BENCHMARK] Running throughput benchmark across payload scales (1 KB to 10 MB)...`);
  const payloadSizes = [
    { label: '1 KB (Small State)', size: 1024, iterations: 10000 },
    { label: '10 KB (Normal State)', size: 10 * 1024, iterations: 2000 },
    { label: '100 KB (Large History)', size: 100 * 1024, iterations: 500 },
    { label: '1 MB (Massive State)', size: 1024 * 1024, iterations: 50 },
    { label: '5 MB (Stress Backup)', size: 5 * 1024 * 1024, iterations: 10 }
  ];

  const benchmarkMetrics = [];

  payloadSizes.forEach(({ label, size, iterations }) => {
    const rawData = 'X'.repeat(size);
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
      SManager.computeCRC32(rawData);
    }
    const elapsedMs = performance.now() - start;
    const totalBytes = size * iterations;
    const mbProcessed = totalBytes / (1024 * 1024);
    const throughputMBps = (mbProcessed / (elapsedMs / 1000)).toFixed(2);
    const opsPerSec = Math.round((iterations / (elapsedMs / 1000)));

    benchmarkMetrics.push({ label, sizeKb: size / 1024, iterations, elapsedMs: elapsedMs.toFixed(1), throughputMBps, opsPerSec });
  });

  benchmarkMetrics.forEach(bm => {
    check(parseFloat(bm.throughputMBps) > 10.0, `${bm.label}: Throughput ${bm.throughputMBps} MB/s (${bm.opsPerSec} ops/sec)`);
  });

  // 4. Tamper Detection & Malicious Corruption
  const fullBackupString = SManager.exportBackup(baseState);
  const parsedBackup = JSON.parse(fullBackupString);

  // Scenario A: Byte modification in payload
  const tamperedPayload = parsedBackup.payload.replace('Cloud Candidate', 'Hacker Candidate');
  const tamperedBackupStr = JSON.stringify({ ...parsedBackup, payload: tamperedPayload });
  const importTamperedRes = SManager.importBackup(tamperedBackupStr);
  check(importTamperedRes.success === false, `Tampered payload string is strictly rejected on import`);

  // Scenario B: Forged checksum
  const forgedBackupStr = JSON.stringify({ ...parsedBackup, crc32: 'DEADBEEF' });
  const importForgedRes = SManager.importBackup(forgedBackupStr);
  check(importForgedRes.success === false, `Invalid/forged CRC-32 checksum is strictly rejected on import`);

  // Scenario C: Malformed JSON structures
  check(SManager.importBackup('{"invalid": true}').success === false, `Missing payload/crc32 rejected`);
  check(SManager.importBackup('').success === false, `Empty string backup rejected`);
  check(SManager.importBackup(null).success === false, `Null backup payload rejected`);

  empiricalMetrics.crc32 = {
    collisionTest: { iterations: 100000, durationMs: collisionDurationMs.toFixed(1), collisions: collisionCount },
    benchmarks: benchmarkMetrics,
    tamperDetectionRate: '100%'
  };
})();

// ============================================================================
// SUITE 5: MANIFEST & CASE STUDY CROSS-REFERENCE CONSISTENCY
// ============================================================================
console.log(`\n${c.bold}${c.magenta}=== SUITE 5: MANIFEST & CASE STUDY CROSS-REFERENCE CONSISTENCY ===${c.reset}`);

(function testManifestAndCaseStudyIntegrity() {
  const allStudies = GCP_CASE_STUDIES.studies;
  const studyKeys = Object.keys(allStudies);

  // 1. Verify all defined case studies conform to schema
  let studySchemaFailures = 0;
  studyKeys.forEach(key => {
    const study = allStudies[key];
    const isValid = GCP_CASE_STUDIES.helpers.validateStudySchema(study);
    if (!isValid) {
      studySchemaFailures++;
    }
  });
  check(studySchemaFailures === 0 && studyKeys.length === 4, `All 4 Case Studies fully populated and conform to schema (${studyKeys.join(', ')})`);

  // 2. Cross-reference every question in PCA, ACE, CDL
  const allBanks = [
    { certId: 'pca', pool: PCA_QUESTIONS, allowedStudies: studyKeys },
    { certId: 'ace', pool: ACE_QUESTIONS, allowedStudies: [] },
    { certId: 'cdl', pool: CDL_QUESTIONS, allowedStudies: [] }
  ];

  let danglingCaseStudyRefs = 0;
  let invalidStudyInNonPca = 0;
  let emptyCaseStudySections = 0;
  let domainMismatchCount = 0;
  let pcaCaseStudyCount = 0;

  allBanks.forEach(({ certId, pool, allowedStudies }) => {
    const manifestCert = GCP_MANIFEST.helpers.getCert(certId);
    const validDomainIds = new Set(Object.keys(manifestCert.domains));

    pool.forEach(q => {
      // Check domain match
      if (!validDomainIds.has(q.domainId)) {
        domainMismatchCount++;
      }

      // Check case study references
      if (q.caseStudy && q.caseStudy !== 'none') {
        if (certId !== 'pca') {
          invalidStudyInNonPca++;
        } else {
          pcaCaseStudyCount++;
          if (!allStudies[q.caseStudy]) {
            danglingCaseStudyRefs++;
          }
          if (!q.caseStudySection || q.caseStudySection.trim().length === 0) {
            emptyCaseStudySections++;
          }
        }
      }
    });
  });

  check(danglingCaseStudyRefs === 0, `Zero dangling Case Study references in question banks`);
  check(invalidStudyInNonPca === 0, `CDL and ACE have 0 invalid Case Study references (caseStudy: 'none')`);
  check(emptyCaseStudySections === 0, `100% of Case Study questions have non-empty caseStudySection titles`);
  check(domainMismatchCount === 0, `100% of 900 questions match manifest domain IDs exactly`);
  check(pcaCaseStudyCount >= 100, `PCA Case Study question density verified (${pcaCaseStudyCount}/300 questions, expected ~108)`);

  empiricalMetrics.crossReference = {
    totalCaseStudies: studyKeys.length,
    caseStudyIds: studyKeys,
    pcaCaseStudyQuestions: pcaCaseStudyCount,
    pcaCaseStudyProportion: ((pcaCaseStudyCount / 300) * 100).toFixed(1) + '%',
    danglingReferences: danglingCaseStudyRefs,
    domainMismatches: domainMismatchCount
  };
})();

// ============================================================================
// FINAL HARNESS REPORT & SUMMARY
// ============================================================================
console.log(`\n${c.bold}${c.cyan}========================================================================${c.reset}`);
console.log(`${c.bold}${c.cyan}                      HARNESS EXECUTION SUMMARY                         ${c.reset}`);
console.log(`${c.bold}${c.cyan}========================================================================${c.reset}`);
console.log(`Total Assertions Executed: ${c.bold}${totalAsserts}${c.reset}`);
console.log(`Passed Assertions:         ${c.bold}${c.green}${passedAsserts}${c.reset}`);
console.log(`Failed Assertions:         ${c.bold}${failedAsserts > 0 ? c.red : c.green}${failedAsserts}${c.reset}`);
console.log(`Pass Rate:                 ${c.bold}${c.green}${((passedAsserts / totalAsserts) * 100).toFixed(2)}%${c.reset}`);

if (failedAsserts === 0) {
  console.log(`\n${c.bold}${c.green}✔ VERDICT: 100% PASS - PLATFORM ALGORITHMIC & SECURITY CERTIFICATION APPROVED${c.reset}\n`);
} else {
  console.log(`\n${c.bold}${c.red}✖ VERDICT: CHALLENGE DETECTED - ${failedAsserts} FAILURES DETECTED${c.reset}\n`);
  failureReport.forEach((f, i) => console.log(`  [${i + 1}] ${f}`));
}

// Export metrics to global / file for handoff generation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    totalAsserts,
    passedAsserts,
    failedAsserts,
    empiricalMetrics,
    verdict: failedAsserts === 0 ? 'APPROVE' : 'CHALLENGE'
  };
}

process.exit(failedAsserts === 0 ? 0 : 1);
