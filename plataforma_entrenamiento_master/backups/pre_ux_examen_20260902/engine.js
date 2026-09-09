/**
 * engine.js
 * 
 * Core Algorithmic Engine for Google Cloud Certification Training Platform (Master Edition)
 * 
 * Features:
 * 1. BlockRotationEngine: Stratified pseudo-random partition into 6 disjoint 50-question blocks (zero repetition across 6 sessions).
 * 2. LeitnerEngine: 4-level queue spaced repetition state machine (Box 0-3, 3 consecutive hits to master, instant reset on miss).
 * 3. PassingProbabilityEngine: Calibrated multi-factorial logistic passing probability metric bounded in [0.0%, 99.9%].
 * 
 * Dual Runtime Compatibility: Browser (window.GCP_ENGINE) and Node.js (module.exports).
 */

(function (global) {
  'use strict';

  /**
   * =========================================================================
   * 1. BLOCK ROTATION ENGINE
   * =========================================================================
   * Partitions a 300-question pool into exactly 6 disjoint blocks of 50 questions each,
   * preserving official domain weight distributions in every single block.
   */
  const BlockRotationEngine = {
    /**
     * Generates 6 disjoint blocks from a question pool using seeded pseudo-random stratification.
     * 
     * @param {string} certId - 'cdl' | 'ace' | 'pca'
     * @param {Record<string, number>} domainWeights - Domain weight map (e.g. { 'CDL-D1': 25, ... })
     * @param {Array<object>} questionsPool - Array of question items (total 300)
     * @param {number} [epochSeed=1337] - Seed for deterministic reproducible permutations
     * @returns {Array<Array<object>>} Array of 6 block arrays (50 questions each)
     */
    generateEpochBlocks(certId, domainWeights = {}, questionsPool = [], epochSeed = 1337) {
      if (!Array.isArray(questionsPool) || questionsPool.length === 0) {
        return [[], [], [], [], [], []];
      }

      // Linear Congruential Pseudo-Random Generator (LCG) for reproducible shuffling
      let seed = (epochSeed !== undefined && epochSeed !== null ? Number(epochSeed) : 1337) >>> 0;
      function pseudoRandom() {
        seed = (seed * 1664525 + 1013904223) >>> 0;
        return (seed >>> 0) / 4294967296;
      }

      // Group questions by domain
      const domainBuckets = {};
      (questionsPool || []).filter(q => q && typeof q === 'object').forEach(q => {
        const dom = q.domainId || q.domain || 'DEFAULT';
        if (!domainBuckets[dom]) {
          domainBuckets[dom] = [];
        }
        domainBuckets[dom].push(q);
      });

      // Seeded Fisher-Yates shuffle within each domain bucket
      Object.keys(domainBuckets).forEach(dom => {
        const bucket = domainBuckets[dom];
        for (let i = bucket.length - 1; i > 0; i--) {
          const j = Math.floor(pseudoRandom() * (i + 1));
          const temp = bucket[i];
          bucket[i] = bucket[j];
          bucket[j] = temp;
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

      // Final intra-block shuffle so domain items are interleaved smoothly
      blocks.forEach(blk => {
        for (let i = blk.length - 1; i > 0; i--) {
          const j = Math.floor(pseudoRandom() * (i + 1));
          const temp = blk[i];
          blk[i] = blk[j];
          blk[j] = temp;
        }
      });

      return blocks;
    }
  };

  /**
   * =========================================================================
   * 2. LEITNER SPACED REPETITION ENGINE
   * =========================================================================
   * 4-level queue state machine (Box 0: New/Weakness, Box 1: Learning, Box 2: Review, Box 3: Mastered).
   * 3 consecutive correct hits needed to achieve mastery; any mistake immediately drops to Box 0.
   */
  const LeitnerEngine = {
    BOXES: {
      NEW: 0,
      LEARNING: 1,
      REVIEW: 2,
      MASTERED: 3
    },

    /**
     * Processes an answer submission for a question and updates its Leitner state.
     * 
     * @param {object|null} currentState - Current user question state or null
     * @param {boolean} isCorrect - Whether the user answered correctly
     * @param {string|Array<string>} chosenOption - Letter(s) chosen by user ('A', 'B', etc.)
     * @param {number} [responseTimeMs=30000] - Time taken to answer in milliseconds
     * @returns {object} Updated question user state
     */
    processAnswer(currentState, isCorrect, chosenOption, responseTimeMs = 30000) {
      const state = currentState ? { ...currentState } : {
        questionId: 'unknown',
        box: 0,
        streak: 0,
        totalAttempts: 0,
        correctAttempts: 0,
        incorrectAttempts: 0,
        history: []
      };

      // Type safety & bounds normalization for hostile/corrupted state objects
      state.box = typeof state.box === 'number' && !isNaN(state.box) ? Math.max(0, Math.min(3, Math.floor(state.box))) : 0;
      state.streak = typeof state.streak === 'number' && !isNaN(state.streak) ? Math.max(0, Math.floor(state.streak)) : 0;
      state.totalAttempts = typeof state.totalAttempts === 'number' && !isNaN(state.totalAttempts) ? Math.max(0, Math.floor(state.totalAttempts)) : 0;
      state.correctAttempts = typeof state.correctAttempts === 'number' && !isNaN(state.correctAttempts) ? Math.max(0, Math.floor(state.correctAttempts)) : 0;
      state.incorrectAttempts = typeof state.incorrectAttempts === 'number' && !isNaN(state.incorrectAttempts) ? Math.max(0, Math.floor(state.incorrectAttempts)) : 0;

      const now = Date.now();
      state.totalAttempts += 1;
      state.lastAnsweredAt = now;
      state.lastAttemptAt = now;
      state.history = Array.isArray(state.history) ? state.history : [];
      state.history.push({
        isCorrect: Boolean(isCorrect),
        chosenOption: chosenOption,
        responseTimeMs: responseTimeMs,
        timestamp: now
      });

      if (isCorrect) {
        state.correctAttempts += 1;
        state.streak += 1;

        // Leitner 4-level queue progression: Box 0 -> 1 -> 2 -> 3 (Mastered)
        if (state.streak >= 3) {
          state.box = 3; // Mastered
        } else if (state.streak === 2) {
          state.box = 2; // Review
        } else if (state.streak === 1) {
          state.box = 1; // Learning
        }
      } else {
        // Any incorrect answer immediately resets streak to 0 and drops to Box 0 (Weakness Drill Queue)
        state.incorrectAttempts += 1;
        state.streak = 0;
        state.box = 0;
      }

      state.isMastered = (state.box === 3);
      return state;
    },

    /**
     * Selects an adaptive drill batch prioritizing unvisited, weak, and high-error questions.
     * 
     * @param {Array<object>} allQuestions - Pool of available question items
     * @param {Record<string, object>} [userQuestionStates={}] - User states keyed by question ID
     * @param {Record<string, object>} [domainStats={}] - Domain accuracy statistics
     * @param {number} [batchSize=10] - Number of questions to select
     * @returns {Array<object>} Prioritized question batch of length min(batchSize, allQuestions.length)
     */
    selectDrillBatch(allQuestions = [], userQuestionStates = {}, domainStats = {}, batchSize = 10) {
      if (!Array.isArray(allQuestions) || allQuestions.length === 0) {
        return [];
      }

      const validQuestions = (allQuestions || []).filter(q => q && typeof q === 'object' && q.id);
      if (validQuestions.length === 0) {
        return [];
      }

      const userStates = (userQuestionStates && typeof userQuestionStates === 'object') ? userQuestionStates : {};
      const dStats = (domainStats && typeof domainStats === 'object') ? domainStats : {};

      const scoredQuestions = validQuestions.map(q => {
        const uState = userStates[q.id] || { box: 0, streak: 0, totalAttempts: 0, correctAttempts: 0 };
        let priorityScore = 100;

        // Unseen questions priority boost
        if (!uState.totalAttempts || uState.totalAttempts === 0) {
          priorityScore += 50;
        }

        // Box weight: Box 0 (highest priority) -> Box 3 (lowest)
        priorityScore += (3 - (uState.box || 0)) * 40;

        // Error rate penalty/priority
        if (uState.totalAttempts > 0) {
          const errorRate = 1 - ((uState.correctAttempts || 0) / uState.totalAttempts);
          priorityScore += errorRate * 60;
        }

        // Domain deficit boost
        const domId = q.domainId || q.domain;
        const domStat = dStats[domId];
        if (domStat && domStat.accuracy !== undefined && !isNaN(domStat.accuracy) && domStat.accuracy < 0.70) {
          priorityScore += (0.70 - domStat.accuracy) * 50;
        }

        // If already mastered, drastically lower priority
        if (uState.box === 3 || uState.isMastered) {
          priorityScore -= 200;
        }

        return { question: q, priorityScore };
      });

      // Sort descending by priority score
      scoredQuestions.sort((a, b) => b.priorityScore - a.priorityScore);

      const targetSize = Math.max(0, Math.min(Number(batchSize) || 0, validQuestions.length));
      return scoredQuestions.slice(0, targetSize).map(item => item.question);
    }
  };

  /**
   * =========================================================================
   * 3. REAL PASSING PROBABILITY METRIC ENGINE
   * =========================================================================
   * Multi-factorial calibrated logistic metric bounded strictly in [0.0%, 99.9%].
   * Integrates simulation EWMA, spaced repetition mastery ratio, domain deficit penalty, and pacing factor.
   */
  const PassingProbabilityEngine = {
    /**
     * Calculates the real passing probability based on user performance history and state.
     * 
     * @param {object} params - Performance metrics and user state
     * @returns {object} Probability result with theta and breakdown
     */
    calculatePassingProbability(params = {}) {
      const {
        examHistory = [],
        userQuestionStates = {},
        totalCertQuestions = 300,
        domainAccuracy = {},
        domainWeights = {},
        averageTimePerQuestionSec = 90
      } = params;

      // 1. Cold start condition: 0 exam attempts and 0 questions answered
      const answeredCount = Object.keys(userQuestionStates || {}).length;
      if ((!examHistory || examHistory.length === 0) && answeredCount === 0) {
        return {
          passingProbability: 15.0, // Calibrated baseline prior
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
      if (examHistory && examHistory.length > 0) {
        const alpha = 0.35; // Recent session decay weight
        let weightSum = 0;
        let runningScore = 0;
        for (let i = examHistory.length - 1; i >= 0; i--) {
          const weight = Math.pow(1 - alpha, examHistory.length - 1 - i);
          const rawScore = examHistory[i].scorePercent !== undefined
            ? examHistory[i].scorePercent
            : (typeof examHistory[i] === 'number' ? examHistory[i] * 100 : 0);
          runningScore += rawScore * weight;
          weightSum += weight;
        }
        ewmaScore = runningScore / (weightSum || 1);
      } else {
        // Fallback to overall practice accuracy across answered items
        let totalCorrect = 0;
        let totalAttempts = 0;
        Object.values(userQuestionStates).forEach(s => {
          totalCorrect += (s.correctAttempts || 0);
          totalAttempts += (s.totalAttempts || 0);
        });
        ewmaScore = totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 50;
      }

      // 3. Spaced Repetition Mastery Ratio
      let masteredCount = 0;
      Object.values(userQuestionStates).forEach(s => {
        if (s.box === 3 || s.isMastered) {
          masteredCount++;
        }
      });
      const poolSize = totalCertQuestions > 0 ? totalCertQuestions : 300;
      const masteryRatio = Math.min(1.0, masteredCount / poolSize);

      // 4. Domain Deficit Penalty
      let totalWeightedDeficit = 0;
      const domainKeys = Object.keys(domainWeights);
      if (domainKeys.length > 0) {
        domainKeys.forEach(domId => {
          const weight = (domainWeights[domId] || (100 / domainKeys.length)) / 100;
          const accuracy = (domainAccuracy[domId] !== undefined)
            ? domainAccuracy[domId]
            : (ewmaScore / 100);
          const passThreshold = 0.70;
          if (accuracy < passThreshold) {
            const deficit = (passThreshold - accuracy) * weight;
            totalWeightedDeficit += deficit;
          }
        });
      }

      // 5. Pacing Calibration Factor
      let pacingFactor = 1.0;
      const pace = Number(averageTimePerQuestionSec) || 90;
      if (pace < 20) {
        // Penalty for rapid guessing / rushing (< 20 seconds)
        pacingFactor = 0.85;
      } else if (pace > 180) {
        // Penalty for excessive time / exhaustion risk (> 180 seconds)
        pacingFactor = 0.90;
      }

      // 6. Calibrated Logistic Calculation
      // Latent competency theta: w1*(EWMA/100) + w2*Mastery - w3*Deficit + w4*(Pacing - 1.0)
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
          pacingFactor: pacingFactor,
          confidence: (examHistory && examHistory.length >= 3) ? 'high' : 'medium'
        }
      };
    }
  };

  const GCP_ENGINE = {
    BlockRotationEngine,
    LeitnerEngine,
    PassingProbabilityEngine
  };

  // Browser global export
  if (typeof window !== 'undefined') {
    window.GCP_ENGINE = GCP_ENGINE;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.GCP_ENGINE = GCP_ENGINE;
  }

  // Node.js module export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = GCP_ENGINE;
  }

})(typeof window !== 'undefined' ? window : global);
