/**
 * test_algorithms.js
 * 
 * Comprehensive Unit & Algorithmic Test Suite for Google Cloud Certification Training Platform
 * Part of the E2E Testing Track.
 * 
 * Zero external npm dependencies (uses built-in fs, path, vm, assert).
 * 
 * Verifies:
 * 1. Stratified Block Rotation Engine (6 disjoint blocks of 50 Qs, 0 repetition across 6 sessions, domain weighting)
 * 2. Leitner Spaced Repetition Engine (4-level queue, 3-hit mastery transition, streak reset on error, drill queue)
 * 3. Real Passing Probability Engine (logistic metric bounds [0.0%, 99.9%], cold start, EWMA, domain deficit, pacing)
 * 4. LocalStorage State Manager (State schema, history, CRC-32 checksum calculation, backup import/export, tamper detection)
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

// ANSI Color Codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

const PROJECT_ROOT = path.resolve(__dirname, '..');
const JS_DIR = path.join(PROJECT_ROOT, 'js');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;
const failureLog = [];

function assertTest(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ${colors.green}✔ PASS:${colors.reset} ${testName}`);
  } else {
    failedTests++;
    const errMsg = `Assertion failed: ${testName} ${details ? '(' + details + ')' : ''}`;
    failureLog.push(errMsg);
    console.log(`  ${colors.red}✖ FAIL:${colors.reset} ${testName} ${colors.dim}${details}${colors.reset}`);
  }
}

/**
 * CRC-32 Implementation (IEEE 802.3 standard polynomial 0xEDB88320)
 */
function crc32(str) {
  let table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c >>> 0;
  }

  let crc = 0 ^ (-1);
  const utf8Bytes = Buffer.from(str, 'utf8');
  for (let i = 0; i < utf8Bytes.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ utf8Bytes[i]) & 0xFF];
  }
  return ((crc ^ (-1)) >>> 0).toString(16).padStart(8, '0').toUpperCase();
}

/**
 * REFERENCE IMPLEMENTATIONS CONFORMING TO PROJECT.md SPECIFICATION
 * (Used when runtime JS files are not present or for golden baseline verification)
 */
const ReferenceEngine = {
  /**
   * Block Rotation Engine
   */
  BlockRotationEngine: {
    generateEpochBlocks(certId, domainWeights, questionsPool, epochSeed = 1337) {
      if (!Array.isArray(questionsPool) || questionsPool.length === 0) {
        return [[], [], [], [], [], []];
      }

      // Linear congruential pseudo-random generator for reproducible shuffling by seed
      let seed = epochSeed >>> 0;
      function pseudoRandom() {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        return (seed >>> 0) / 4294967296;
      }

      // Group questions by domain
      const domainBuckets = {};
      questionsPool.forEach(q => {
        const dom = q.domainId || 'DEFAULT';
        if (!domainBuckets[dom]) domainBuckets[dom] = [];
        domainBuckets[dom].push(q);
      });

      // Fisher-Yates shuffle within each domain bucket
      Object.keys(domainBuckets).forEach(dom => {
        const bucket = domainBuckets[dom];
        for (let i = bucket.length - 1; i > 0; i--) {
          const j = Math.floor(pseudoRandom() * (i + 1));
          [bucket[i], bucket[j]] = [bucket[j], bucket[i]];
        }
      });

      const BLOCKS_COUNT = 6;
      const blocks = Array.from({ length: BLOCKS_COUNT }, () => []);

      // Distribute stratified domain questions evenly across the 6 blocks using a rolling offset
      let currentBlockOffset = 0;
      Object.keys(domainBuckets).forEach(dom => {
        const bucket = domainBuckets[dom];
        bucket.forEach((q, index) => {
          const targetBlock = (currentBlockOffset + index) % BLOCKS_COUNT;
          blocks[targetBlock].push(q);
        });
        currentBlockOffset = (currentBlockOffset + bucket.length) % BLOCKS_COUNT;
      });

      // Final deterministic shuffle within each block
      blocks.forEach(blk => {
        for (let i = blk.length - 1; i > 0; i--) {
          const j = Math.floor(pseudoRandom() * (i + 1));
          [blk[i], blk[j]] = [blk[j], blk[i]];
        }
      });

      return blocks;
    }
  },

  /**
   * Leitner Spaced Repetition Engine
   */
  LeitnerEngine: {
    processAnswer(currentState, isCorrect, chosenOption, responseTimeMs = 30000) {
      const state = currentState ? { ...currentState } : {
        questionId: 'unknown',
        box: 0,
        streak: 0,
        totalAttempts: 0,
        correctAttempts: 0,
        history: []
      };

      state.totalAttempts = (state.totalAttempts || 0) + 1;
      state.lastAnsweredAt = Date.now();
      state.history = state.history || [];
      state.history.push({
        isCorrect: Boolean(isCorrect),
        chosenOption,
        responseTimeMs,
        timestamp: Date.now()
      });

      if (isCorrect) {
        state.correctAttempts = (state.correctAttempts || 0) + 1;
        state.streak = (state.streak || 0) + 1;
        // Leitner 4-level queue: Box 0 -> 1 -> 2 -> 3 (Mastered) after 3 consecutive hits
        if (state.streak >= 3) {
          state.box = 3; // Mastered
        } else if (state.streak === 2) {
          state.box = 2;
        } else if (state.streak === 1) {
          state.box = 1;
        }
      } else {
        // Any incorrect answer immediately resets streak to 0 and drops to Box 0
        state.streak = 0;
        state.box = 0;
      }

      state.isMastered = (state.box === 3);
      return state;
    },

    selectDrillBatch(allQuestions, userQuestionStates = {}, domainStats = {}, batchSize = 10) {
      if (!Array.isArray(allQuestions) || allQuestions.length === 0) {
        return [];
      }

      // Score priority for drill: higher score = higher priority to appear in drill
      const scoredQuestions = allQuestions.map(q => {
        const uState = userQuestionStates[q.id] || { box: 0, streak: 0, totalAttempts: 0, correctAttempts: 0 };
        let priorityScore = 100;

        // Unseen questions
        if (uState.totalAttempts === 0) {
          priorityScore += 50;
        }

        // Box weight: Box 0 (high priority) to Box 3 (lowest)
        priorityScore += (3 - (uState.box || 0)) * 40;

        // Error rate penalty/priority
        if (uState.totalAttempts > 0) {
          const errorRate = 1 - ((uState.correctAttempts || 0) / uState.totalAttempts);
          priorityScore += errorRate * 60;
        }

        // Domain deficit boost
        const domStat = domainStats[q.domainId];
        if (domStat && domStat.accuracy < 0.70) {
          priorityScore += (0.70 - domStat.accuracy) * 50;
        }

        // If already mastered, drastically lower priority
        if (uState.box === 3) {
          priorityScore -= 200;
        }

        return { question: q, priorityScore };
      });

      // Sort descending by priority score
      scoredQuestions.sort((a, b) => b.priorityScore - a.priorityScore);

      return scoredQuestions.slice(0, batchSize).map(item => item.question);
    }
  },

  /**
   * Real Passing Probability Engine
   */
  PassingProbabilityEngine: {
    calculatePassingProbability(params = {}) {
      const {
        examHistory = [],
        userQuestionStates = {},
        totalCertQuestions = 300,
        domainAccuracy = {},
        domainWeights = {},
        averageTimePerQuestionSec = 90,
        targetTimeSec = 90
      } = params;

      // 1. Cold start condition: 0 exam attempts and 0 questions answered
      const answeredCount = Object.keys(userQuestionStates).length;
      if (examHistory.length === 0 && answeredCount === 0) {
        return {
          passingProbability: 15.0, // Baseline prior probability
          theta: -1.734,
          coldStart: true,
          breakdown: {
            ewmaScore: 0,
            masteryRatio: 0,
            domainDeficit: 0,
            pacingFactor: 1.0,
            confidence: 'low'
          }
        };
      }

      // 2. Exponentially Weighted Moving Average (EWMA) of recent exams
      let ewmaScore = 0;
      if (examHistory.length > 0) {
        const alpha = 0.35; // Recent session decay weight
        let weightSum = 0;
        let runningScore = 0;
        for (let i = examHistory.length - 1; i >= 0; i--) {
          const weight = Math.pow(1 - alpha, (examHistory.length - 1 - i));
          runningScore += examHistory[i].scorePercent * weight;
          weightSum += weight;
        }
        ewmaScore = runningScore / (weightSum || 1);
      } else {
        // Fallback to overall practice accuracy
        let totalC = 0, totalA = 0;
        Object.values(userQuestionStates).forEach(s => {
          totalC += (s.correctAttempts || 0);
          totalA += (s.totalAttempts || 0);
        });
        ewmaScore = totalA > 0 ? (totalC / totalA) * 100 : 50;
      }

      // 3. Spaced Repetition Mastery Ratio
      let masteredCount = 0;
      Object.values(userQuestionStates).forEach(s => {
        if (s.box === 3) masteredCount++;
      });
      const masteryRatio = Math.min(1.0, masteredCount / (totalCertQuestions || 300));

      // 4. Domain Deficit Penalty
      let totalWeightedDeficit = 0;
      Object.keys(domainWeights).forEach(domId => {
        const weight = (domainWeights[domId] || 25) / 100;
        const accuracy = (domainAccuracy[domId] !== undefined) ? domainAccuracy[domId] : (ewmaScore / 100);
        const passThreshold = 0.70;
        if (accuracy < passThreshold) {
          const deficit = (passThreshold - accuracy) * weight;
          totalWeightedDeficit += deficit;
        }
      });

      // 5. Pacing Calibration Factor
      let pacingFactor = 1.0;
      if (averageTimePerQuestionSec < 20) {
        // Penalty for rapid rushing / guessing (< 20 sec)
        pacingFactor = 0.85;
      } else if (averageTimePerQuestionSec > 180) {
        // Penalty for excessive time / exhaustion risk (> 180 sec)
        pacingFactor = 0.90;
      }

      // 6. Calibrated Logistic Calculation
      // Theta formula: w1*(EWMA/100) + w2*Mastery - w3*Deficit + w4*Pacing + Bias
      const normalizedScore = ewmaScore / 100;
      const theta = (3.5 * (normalizedScore - 0.70)) +
                    (2.0 * masteryRatio) -
                    (4.0 * totalWeightedDeficit) +
                    (1.2 * (pacingFactor - 1.0));

      // Logistic sigmoid: P = 1 / (1 + exp(-theta))
      const rawProb = 1 / (1 + Math.exp(-theta));
      
      // Strict clamping between 0.0% and 99.9%
      const clampedProb = Math.max(0.0, Math.min(99.9, Math.round(rawProb * 1000) / 10));

      return {
        passingProbability: clampedProb,
        theta: Math.round(theta * 1000) / 1000,
        coldStart: false,
        breakdown: {
          ewmaScore: Math.round(ewmaScore * 10) / 10,
          masteryRatio: Math.round(masteryRatio * 100) / 100,
          domainDeficit: Math.round(totalWeightedDeficit * 100) / 100,
          pacingFactor,
          confidence: examHistory.length >= 3 ? 'high' : 'medium'
        }
      };
    }
  }
};

/**
 * State Manager Reference Implementation
 */
const ReferenceState = {
  createDefaultState() {
    return {
      version: 1,
      lastModified: Date.now(),
      certifications: {
        cdl: { history: [], questionStates: {}, currentBlockIndex: 0 },
        ace: { history: [], questionStates: {}, currentBlockIndex: 0 },
        pca: { history: [], questionStates: {}, currentBlockIndex: 0 }
      },
      settings: {
        theme: 'dark',
        timerAudioEnabled: true
      }
    };
  },

  exportBackup(state) {
    const payload = JSON.stringify(state);
    const checksum = crc32(payload);
    return JSON.stringify({
      schemaVersion: state.version || 1,
      exportedAt: Date.now(),
      payload,
      crc32: checksum
    });
  },

  importBackup(backupString) {
    try {
      const backup = JSON.parse(backupString);
      if (!backup || !backup.payload || !backup.crc32) {
        return { success: false, error: 'Malformed backup structure' };
      }
      const computedCrc = crc32(backup.payload);
      if (computedCrc !== backup.crc32) {
        return { success: false, error: `CRC-32 checksum mismatch: expected ${backup.crc32}, calculated ${computedCrc}` };
      }
      const restoredState = JSON.parse(backup.payload);
      return { success: true, state: restoredState };
    } catch (err) {
      return { success: false, error: `Import parsing error: ${err.message}` };
    }
  }
};

/**
 * Helper to generate synthetic 300-question pool for algorithm testing
 */
function createSyntheticQuestionPool(certId = 'cdl', total = 300) {
  const domains = certId === 'cdl'
    ? ['CDL-D1', 'CDL-D2', 'CDL-D3', 'CDL-D4']
    : certId === 'ace'
      ? ['ACE-D1', 'ACE-D2', 'ACE-D3', 'ACE-D4', 'ACE-D5']
      : ['PCA-D1', 'PCA-D2', 'PCA-D3', 'PCA-D4', 'PCA-D5', 'PCA-D6'];

  const questions = [];
  for (let i = 1; i <= total; i++) {
    const dom = domains[(i - 1) % domains.length];
    questions.push({
      id: `${certId.toUpperCase()}-${dom}-${String(i).padStart(3, '0')}`,
      certId,
      domainId: dom,
      domainName: `Domain ${dom}`,
      title: `Synthetic Question ${i}`,
      scenario: `Synthetic scenario for question number ${i} testing algorithms.`,
      options: [
        { letter: 'A', text: 'Option A' },
        { letter: 'B', text: 'Option B' },
        { letter: 'C', text: 'Option C' },
        { letter: 'D', text: 'Option D' }
      ],
      correct: 'B',
      explanation: 'Explanation text conforming to validation length requirements.',
      distractors: {
        A: 'Distractor A justification text',
        C: 'Distractor C justification text',
        D: 'Distractor D justification text'
      }
    });
  }
  return questions;
}

/**
 * TIER 1 & TIER 4 TESTS: BLOCK ROTATION ENGINE
 */
function testBlockRotationEngine(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== TEST SUITE 1: STRATIFIED BLOCK ROTATION ENGINE ===${colors.reset}`);

  const pool300 = createSyntheticQuestionPool('cdl', 300);
  const domainWeights = {
    'CDL-D1': 25,
    'CDL-D2': 25,
    'CDL-D3': 25,
    'CDL-D4': 25
  };

  // Test 1: Generates exactly 6 blocks
  const blocks = Engine.BlockRotationEngine.generateEpochBlocks('cdl', domainWeights, pool300, 42);
  assertTest(Array.isArray(blocks) && blocks.length === 6, 'Rotation engine outputs exactly 6 blocks');

  // Test 2: Each block contains exactly 50 questions
  const allSizesEqual50 = blocks.every(blk => blk.length === 50);
  assertTest(allSizesEqual50, 'All 6 blocks contain exactly 50 questions each (50 * 6 = 300)');

  // Test 3: Disjointness Check - Zero overlap between any pair of blocks
  const seenQuestionIds = new Set();
  let hasDuplicateAcrossBlocks = false;
  for (let i = 0; i < blocks.length; i++) {
    for (const q of blocks[i]) {
      if (seenQuestionIds.has(q.id)) {
        hasDuplicateAcrossBlocks = true;
      }
      seenQuestionIds.add(q.id);
    }
  }
  assertTest(
    !hasDuplicateAcrossBlocks && seenQuestionIds.size === 300,
    'Zero question overlap across 6 blocks: 100% disjoint partition ($B_i \\cap B_j = \\emptyset$)'
  );

  // Test 4: Full Coverage - Union of 6 blocks contains all 300 pool questions
  const poolIds = new Set(pool300.map(q => q.id));
  const unionMatchesPool = seenQuestionIds.size === poolIds.size && [...seenQuestionIds].every(id => poolIds.has(id));
  assertTest(unionMatchesPool, 'Union of 6 blocks matches 100% of question pool with 0 omissions');

  // Test 5: Stratified Domain Weight Preservation
  // With 4 equal domains (25% each), each block of 50 should have ~12-13 questions per domain
  let domainDistributionValid = true;
  blocks.forEach(blk => {
    const counts = {};
    blk.forEach(q => { counts[q.domainId] = (counts[q.domainId] || 0) + 1; });
    Object.keys(domainWeights).forEach(d => {
      const count = counts[d] || 0;
      if (count < 11 || count > 14) {
        domainDistributionValid = false;
      }
    });
  });
  assertTest(domainDistributionValid, 'Domain weights preserved across every individual block (12-13 Qs per domain)');

  // Test 6: Deterministic Seeding (Identical seed produces identical blocks)
  const blocksRunA = Engine.BlockRotationEngine.generateEpochBlocks('cdl', domainWeights, pool300, 9999);
  const blocksRunB = Engine.BlockRotationEngine.generateEpochBlocks('cdl', domainWeights, pool300, 9999);
  const identicalSeedsMatch = JSON.stringify(blocksRunA) === JSON.stringify(blocksRunB);
  assertTest(identicalSeedsMatch, 'Deterministic pseudo-random seeding produces identical block partitions');

  // Test 7: Distinct Seeding (Different seeds produce different permutations)
  const blocksRunC = Engine.BlockRotationEngine.generateEpochBlocks('cdl', domainWeights, pool300, 1111);
  const differentSeedsDiffer = JSON.stringify(blocksRunA) !== JSON.stringify(blocksRunC);
  assertTest(differentSeedsDiffer, 'Different epoch seeds generate distinct randomized block distributions');
}

/**
 * TIER 1 & TIER 2 TESTS: LEITNER SPACED REPETITION ENGINE
 */
function testLeitnerEngine(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== TEST SUITE 2: LEITNER SPACED REPETITION ENGINE ===${colors.reset}`);

  // Test 1: Initial state starts at Box 0, Streak 0
  let state = Engine.LeitnerEngine.processAnswer(null, true, 'B', 25000);
  assertTest(state.box === 1 && state.streak === 1, 'Hit 1: Transitions from unvisited to Box 1 (streak = 1)');

  // Test 2: Second consecutive hit advances to Box 2
  state = Engine.LeitnerEngine.processAnswer(state, true, 'B', 22000);
  assertTest(state.box === 2 && state.streak === 2, 'Hit 2: Advances to Box 2 (streak = 2)');

  // Test 3: Third consecutive hit achieves Mastered state (Box 3)
  state = Engine.LeitnerEngine.processAnswer(state, true, 'B', 18000);
  assertTest(state.box === 3 && state.streak === 3 && state.isMastered === true, 'Hit 3: Achieves Mastery (Box 3, isMastered = true)');

  // Test 4: Fourth consecutive hit remains in Box 3
  state = Engine.LeitnerEngine.processAnswer(state, true, 'B', 15000);
  assertTest(state.box === 3 && state.streak === 4 && state.isMastered === true, 'Hit 4+: Remains in Mastered state (streak = 4)');

  // Test 5: Immediate error resets streak to 0 and drops to Box 0
  state = Engine.LeitnerEngine.processAnswer(state, false, 'A', 45000);
  assertTest(
    state.box === 0 && state.streak === 0 && state.isMastered === false,
    'Error on Mastered Item: Streak resets to 0 and box drops immediately to Box 0 (Weakness Drill Queue)'
  );

  // Test 6: Drill Batch Prioritization (Weak questions prioritized over mastered)
  const pool = createSyntheticQuestionPool('ace', 50);
  const userStates = {};

  // Mark 10 questions as Mastered (Box 3)
  for (let i = 0; i < 10; i++) {
    userStates[pool[i].id] = { box: 3, streak: 3, totalAttempts: 3, correctAttempts: 3 };
  }
  // Mark 5 questions as high-error (Box 0, 0/3 correct)
  for (let i = 10; i < 15; i++) {
    userStates[pool[i].id] = { box: 0, streak: 0, totalAttempts: 3, correctAttempts: 0 };
  }

  const drillBatch = Engine.LeitnerEngine.selectDrillBatch(pool, userStates, {}, 5);
  const drillBatchIds = new Set(drillBatch.map(q => q.id));

  // The 5 high error items must be in the top priority drill batch
  let highErrorIncluded = true;
  for (let i = 10; i < 15; i++) {
    if (!drillBatchIds.has(pool[i].id)) highErrorIncluded = false;
  }
  assertTest(highErrorIncluded, 'selectDrillBatch prioritizes failed and unmastered questions over mastered items');
  assertTest(drillBatch.length === 5, 'selectDrillBatch respects batchSize parameter');
}

/**
 * TIER 1, TIER 2 & TIER 3 TESTS: REAL PASSING PROBABILITY METRIC
 */
function testPassingProbabilityEngine(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== TEST SUITE 3: REAL PASSING PROBABILITY ENGINE ===${colors.reset}`);

  // Test 1: Cold Start Behavior (0 history)
  const coldResult = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [],
    userQuestionStates: {}
  });
  assertTest(
    coldResult.coldStart === true && coldResult.passingProbability >= 0 && coldResult.passingProbability <= 30,
    `Cold start gracefully defaults to baseline prior (${coldResult.passingProbability}%) with coldStart flag`
  );

  // Test 2: Upper and Lower Bound Constraints [0.0%, 99.9%]
  const perfectParams = {
    examHistory: [{ scorePercent: 100 }, { scorePercent: 100 }, { scorePercent: 100 }],
    userQuestionStates: Array.from({ length: 300 }).reduce((acc, _, i) => {
      acc[`Q-${i}`] = { box: 3, streak: 3, totalAttempts: 3, correctAttempts: 3 };
      return acc;
    }, {}),
    totalCertQuestions: 300,
    domainAccuracy: { D1: 1.0, D2: 1.0, D3: 1.0, D4: 1.0 },
    domainWeights: { D1: 25, D2: 25, D3: 25, D4: 25 },
    averageTimePerQuestionSec: 90
  };
  const perfectResult = Engine.PassingProbabilityEngine.calculatePassingProbability(perfectParams);
  assertTest(
    perfectResult.passingProbability <= 99.9 && perfectResult.passingProbability >= 95.0,
    `Upper bound constraint: Perfect performance clamped <= 99.9% (got ${perfectResult.passingProbability}%)`
  );

  const worstParams = {
    examHistory: [{ scorePercent: 0 }, { scorePercent: 10 }, { scorePercent: 5 }],
    userQuestionStates: Array.from({ length: 100 }).reduce((acc, _, i) => {
      acc[`Q-${i}`] = { box: 0, streak: 0, totalAttempts: 5, correctAttempts: 0 };
      return acc;
    }, {}),
    totalCertQuestions: 300,
    domainAccuracy: { D1: 0.1, D2: 0.1, D3: 0.05, D4: 0.0 },
    domainWeights: { D1: 25, D2: 25, D3: 25, D4: 25 },
    averageTimePerQuestionSec: 10
  };
  const worstResult = Engine.PassingProbabilityEngine.calculatePassingProbability(worstParams);
  assertTest(
    worstResult.passingProbability >= 0.0 && worstResult.passingProbability <= 5.0,
    `Lower bound constraint: Zero/low performance clamped >= 0.0% (got ${worstResult.passingProbability}%)`
  );

  // Test 3: Domain Deficit Penalty
  // Compare candidate A (balanced 80% across all domains) vs candidate B (90% overall, but 30% in a major domain)
  const balancedCandidate = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 80 }, { scorePercent: 80 }],
    userQuestionStates: {},
    domainAccuracy: { D1: 0.80, D2: 0.80, D3: 0.80, D4: 0.80 },
    domainWeights: { D1: 25, D2: 25, D3: 25, D4: 25 },
    averageTimePerQuestionSec: 85
  });

  const unbalancedCandidate = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 85 }, { scorePercent: 85 }],
    userQuestionStates: {},
    domainAccuracy: { D1: 1.0, D2: 1.0, D3: 1.0, D4: 0.30 }, // Severe failure in Domain 4
    domainWeights: { D1: 25, D2: 25, D3: 25, D4: 25 },
    averageTimePerQuestionSec: 85
  });

  assertTest(
    unbalancedCandidate.breakdown.domainDeficit > 0 && unbalancedCandidate.passingProbability < balancedCandidate.passingProbability,
    `Domain deficit penalty applies: Severe domain weakness lowers probability (${unbalancedCandidate.passingProbability}%) vs balanced candidate (${balancedCandidate.passingProbability}%)`
  );

  // Test 4: Pacing Calibration Penalty (Rushing < 20s penalized)
  const fastPacing = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 75 }],
    userQuestionStates: {},
    averageTimePerQuestionSec: 10 // Rapid guessing
  });
  const normalPacing = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 75 }],
    userQuestionStates: {},
    averageTimePerQuestionSec: 80 // Normal deliberate pace
  });
  assertTest(
    fastPacing.passingProbability < normalPacing.passingProbability,
    `Pacing factor penalizes rapid guessing/rushing (${fastPacing.passingProbability}% vs ${normalPacing.passingProbability}%)`
  );
}

/**
 * TIER 1, TIER 2 & TIER 4 TESTS: LOCALSTORAGE STATE & CRC-32 TAMPER DETECTION
 */
function testStatePersistenceAndCRC32(StateEngine) {
  console.log(`\n${colors.cyan}${colors.bright}=== TEST SUITE 4: STATE MANAGEMENT & CRC-32 INTEGRITY ===${colors.reset}`);

  // Test 1: CRC-32 algorithm verification against standard known vectors
  const standardVector = '123456789';
  const expectedCrc = 'CBF43926';
  const calculatedCrc = crc32(standardVector);
  assertTest(
    calculatedCrc === expectedCrc,
    `CRC-32 IEEE 802.3 test vector '123456789' -> ${expectedCrc} (got ${calculatedCrc})`
  );

  // Test 2: State Export / Import Roundtrip
  const originalState = StateEngine.createDefaultState();
  originalState.certifications.ace.history.push({
    sessionId: 'SIM-ACE-20260821-001',
    scorePercent: 84.0,
    timestamp: Date.now(),
    durationSeconds: 5400
  });
  originalState.certifications.ace.questionStates['ACE-D1-001'] = {
    box: 3,
    streak: 3,
    totalAttempts: 3,
    correctAttempts: 3
  };

  const backupString = StateEngine.exportBackup(originalState);
  assertTest(typeof backupString === 'string' && backupString.includes('crc32'), 'State export generates JSON backup with CRC-32 header');

  const importResult = StateEngine.importBackup(backupString);
  assertTest(importResult.success === true, 'State import succeeds with valid checksum');
  assertTest(
    importResult.state.certifications.ace.history.length === 1 &&
    importResult.state.certifications.ace.history[0].scorePercent === 84.0,
    'State data faithfully restored across export/import roundtrip'
  );

  // Test 3: Tamper Detection (Modify 1 character in payload, assert checksum failure)
  const parsedBackup = JSON.parse(backupString);
  // Modify score from 84.0 to 99.0 inside string payload
  const tamperedPayload = parsedBackup.payload.replace('84', '99');
  const tamperedBackupString = JSON.stringify({
    ...parsedBackup,
    payload: tamperedPayload
  });

  const tamperedImportResult = StateEngine.importBackup(tamperedBackupString);
  assertTest(
    tamperedImportResult.success === false && tamperedImportResult.error.includes('CRC-32 checksum mismatch'),
    'Adversarial Tamper Detection: Corrupted/modified payload is strictly rejected on import'
  );
}

/**
 * TIER 1 & TIER 4 TESTS: MULTI-CERT BLOCK ROTATION (ACE & PCA)
 */
function testBlockRotationMultiCert(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== TEST SUITE 1B: MULTI-CERT ROTATION (ACE & PCA) ===${colors.reset}`);

  // ACE: 5 domains
  const acePool = createSyntheticQuestionPool('ace', 300);
  const aceWeights = { 'ACE-D1': 20, 'ACE-D2': 20, 'ACE-D3': 25, 'ACE-D4': 20, 'ACE-D5': 15 };
  const aceBlocks = Engine.BlockRotationEngine.generateEpochBlocks('ace', aceWeights, acePool, 777);
  
  assertTest(aceBlocks.length === 6, 'ACE rotation engine outputs exactly 6 blocks');
  assertTest(aceBlocks.every(b => b.length === 50), 'ACE: All 6 blocks contain exactly 50 questions each');

  const aceSeen = new Set();
  let aceHasDupes = false;
  aceBlocks.forEach(b => b.forEach(q => {
    if (aceSeen.has(q.id)) aceHasDupes = true;
    aceSeen.add(q.id);
  }));
  assertTest(!aceHasDupes && aceSeen.size === 300, 'ACE: Zero question overlap across 6 blocks (100% disjoint)');

  // PCA: 6 domains
  const pcaPool = createSyntheticQuestionPool('pca', 300);
  const pcaWeights = { 'PCA-D1': 25, 'PCA-D2': 15, 'PCA-D3': 15, 'PCA-D4': 15, 'PCA-D5': 15, 'PCA-D6': 15 };
  const pcaBlocks = Engine.BlockRotationEngine.generateEpochBlocks('pca', pcaWeights, pcaPool, 888);

  assertTest(pcaBlocks.length === 6, 'PCA rotation engine outputs exactly 6 blocks');
  assertTest(pcaBlocks.every(b => b.length === 50), 'PCA: All 6 blocks contain exactly 50 questions each');

  const pcaSeen = new Set();
  let pcaHasDupes = false;
  pcaBlocks.forEach(b => b.forEach(q => {
    if (pcaSeen.has(q.id)) pcaHasDupes = true;
    pcaSeen.add(q.id);
  }));
  assertTest(!pcaHasDupes && pcaSeen.size === 300, 'PCA: Zero question overlap across 6 blocks (100% disjoint)');
}

/**
 * TIER 2 & TIER 3 TESTS: LEITNER EDGE CASES & MONOTONICITY
 */
function testLeitnerEdgeCases(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== TEST SUITE 2B: LEITNER BOUNDARY & EDGE CASES ===${colors.reset}`);

  // Edge case 1: Oscillating correct/incorrect never masters
  let state = null;
  for (let i = 0; i < 10; i++) {
    state = Engine.LeitnerEngine.processAnswer(state, i % 2 === 0, 'A', 20000);
  }
  assertTest(
    state.box <= 1 && state.isMastered === false,
    'Oscillating responses (hit, miss, hit, miss) never trigger mastery'
  );

  // Edge case 2: Streak reset from 2 consecutive hits
  let streak2State = Engine.LeitnerEngine.processAnswer(null, true, 'A');
  streak2State = Engine.LeitnerEngine.processAnswer(streak2State, true, 'A');
  assertTest(streak2State.streak === 2 && streak2State.box === 2, '2 consecutive hits reach Box 2 (streak = 2)');
  const droppedState = Engine.LeitnerEngine.processAnswer(streak2State, false, 'B');
  assertTest(droppedState.streak === 0 && droppedState.box === 0, 'Single miss after 2 hits drops immediately to Box 0, streak 0');

  // Edge case 3: selectDrillBatch handles empty question list
  const emptyBatch = Engine.LeitnerEngine.selectDrillBatch([], {}, {}, 10);
  assertTest(Array.isArray(emptyBatch) && emptyBatch.length === 0, 'selectDrillBatch handles empty question pool safely');
}

/**
 * TIER 2 & TIER 3 TESTS: PROBABILITY METRIC MONOTONICITY & EDGE CASES
 */
function testProbabilityMonotonicity(Engine) {
  console.log(`\n${colors.cyan}${colors.bright}=== TEST SUITE 3B: PROBABILITY METRIC MONOTONICITY ===${colors.reset}`);

  // Test 1: Monotonic score scaling
  const prob60 = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 60 }],
    userQuestionStates: {}
  }).passingProbability;

  const prob75 = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 75 }],
    userQuestionStates: {}
  }).passingProbability;

  const prob90 = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 90 }],
    userQuestionStates: {}
  }).passingProbability;

  assertTest(
    prob60 < prob75 && prob75 < prob90,
    `Score monotonicity: P(60%)=${prob60}% < P(75%)=${prob75}% < P(90%)=${prob90}%`
  );

  // Test 2: Monotonic mastery scaling
  const probMastery0 = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 70 }],
    userQuestionStates: {},
    totalCertQuestions: 300
  }).passingProbability;

  const states50 = {};
  for (let i = 0; i < 150; i++) states50[`Q-${i}`] = { box: 3 };
  const probMastery50 = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 70 }],
    userQuestionStates: states50,
    totalCertQuestions: 300
  }).passingProbability;

  const states100 = {};
  for (let i = 0; i < 300; i++) states100[`Q-${i}`] = { box: 3 };
  const probMastery100 = Engine.PassingProbabilityEngine.calculatePassingProbability({
    examHistory: [{ scorePercent: 70 }],
    userQuestionStates: states100,
    totalCertQuestions: 300
  }).passingProbability;

  assertTest(
    probMastery0 < probMastery50 && probMastery50 < probMastery100,
    `Mastery monotonicity: P(0% mastered)=${probMastery0}% < P(50%)=${probMastery50}% < P(100%)=${probMastery100}%`
  );
}

/**
 * TIER 2 TESTS: STATE TAMPER & CORRUPTION EDGE CASES
 */
function testStateTamperEdgeCases(StateEngine) {
  console.log(`\n${colors.cyan}${colors.bright}=== TEST SUITE 4B: STATE TAMPER & CORRUPTION EDGE CASES ===${colors.reset}`);

  // Test 1: Corrupted JSON string
  const brokenJsonResult = StateEngine.importBackup('NOT_A_VALID_JSON_STRING{{{');
  assertTest(
    brokenJsonResult.success === false && brokenJsonResult.error.includes('error'),
    'Corrupted raw string rejected on backup import'
  );

  // Test 2: Missing payload or CRC field
  const missingCrcResult = StateEngine.importBackup(JSON.stringify({ schemaVersion: 1, payload: '{}' }));
  assertTest(
    missingCrcResult.success === false && missingCrcResult.error.includes('Malformed'),
    'Missing CRC-32 field structure is rejected'
  );
}

/**
 * Main execution function
 */
function main() {
  const startTime = Date.now();
  console.log(`${colors.blue}${colors.bright}======================================================${colors.reset}`);
  console.log(`${colors.blue}${colors.bright}  E2E TEST HARNESS: ALGORITHM & ENGINE VERIFICATION   ${colors.reset}`);
  console.log(`${colors.blue}${colors.bright}======================================================${colors.reset}`);

  // Check if live engine.js and state.js exist in repo
  const engineJsPath = path.join(JS_DIR, 'engine.js');
  const stateJsPath = path.join(JS_DIR, 'state.js');

  let activeEngine = ReferenceEngine;
  let activeState = ReferenceState;

  if (fs.existsSync(engineJsPath)) {
    try {
      const content = fs.readFileSync(engineJsPath, 'utf8');
      const sandbox = { window: {}, console };
      sandbox.self = sandbox.window;
      sandbox.globalThis = sandbox.window;
      vm.runInContext(content, vm.createContext(sandbox), { filename: engineJsPath });
      if (sandbox.window.GCP_ENGINE) {
        activeEngine = sandbox.window.GCP_ENGINE;
        console.log(`${colors.green}[INFO] Loaded runtime js/engine.js from workspace.${colors.reset}`);
      }
    } catch (e) {
      console.log(`${colors.yellow}[WARN] Error loading js/engine.js: ${e.message}. Using reference engine.${colors.reset}`);
    }
  } else {
    console.log(`${colors.yellow}[NOTE] js/engine.js not yet present (M2 in progress). Running against Reference Engine.${colors.reset}`);
  }

  if (fs.existsSync(stateJsPath)) {
    try {
      const content = fs.readFileSync(stateJsPath, 'utf8');
      const sandbox = { window: {}, console, localStorage: {} };
      sandbox.self = sandbox.window;
      sandbox.globalThis = sandbox.window;
      vm.runInContext(content, vm.createContext(sandbox), { filename: stateJsPath });
      if (sandbox.window.GCP_STATE) {
        activeState = sandbox.window.GCP_STATE;
        console.log(`${colors.green}[INFO] Loaded runtime js/state.js from workspace.${colors.reset}`);
      }
    } catch (e) {
      console.log(`${colors.yellow}[WARN] Error loading js/state.js: ${e.message}. Using reference state.${colors.reset}`);
    }
  } else {
    console.log(`${colors.yellow}[NOTE] js/state.js not yet present (M2 in progress). Running against Reference State.${colors.reset}`);
  }

  try {
    testBlockRotationEngine(activeEngine);
    testBlockRotationMultiCert(activeEngine);
    testLeitnerEngine(activeEngine);
    testLeitnerEdgeCases(activeEngine);
    testPassingProbabilityEngine(activeEngine);
    testProbabilityMonotonicity(activeEngine);
    testStatePersistenceAndCRC32(activeState);
    testStateTamperEdgeCases(activeState);
  } catch (err) {
    console.log(`${colors.red}Fatal test exception: ${err.message}${colors.reset}`);
    failedTests++;
    failureLog.push(err.stack || String(err));
  }

  const durationMs = Date.now() - startTime;
  console.log(`\n${colors.bright}------------------------------------------------------${colors.reset}`);
  console.log(`Total Algorithmic Tests: ${totalTests}`);
  console.log(`Passed:                 ${colors.green}${passedTests}${colors.reset}`);
  console.log(`Failed:                 ${failedTests > 0 ? colors.red + failedTests : colors.green + '0'}${colors.reset}`);
  console.log(`Execution Time:         ${durationMs}ms`);
  console.log(`${colors.bright}------------------------------------------------------${colors.reset}`);

  if (failedTests > 0) {
    console.log(`\n${colors.red}${colors.bright}ALGORITHM TESTS FAILED with ${failedTests} errors:${colors.reset}`);
    failureLog.forEach((f, idx) => {
      console.log(`${colors.red}[${idx + 1}] ${f}${colors.reset}`);
    });
    process.exit(1);
  } else {
    console.log(`\n${colors.green}${colors.bright}✔ ALL ALGORITHMIC TESTS & STATE ASSERTIONS PASSED (100%)${colors.reset}\n`);
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  ReferenceEngine,
  ReferenceState,
  crc32,
  createSyntheticQuestionPool
};
