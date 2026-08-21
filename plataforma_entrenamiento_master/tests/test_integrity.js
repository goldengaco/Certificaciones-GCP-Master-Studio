/**
 * test_integrity.js
 * 
 * Standalone Question Bank & Schema Integrity Validator
 * Part of the E2E Testing Track for the Google Cloud Certification Training Platform.
 * 
 * Zero external npm dependencies (uses built-in fs, path, vm, assert).
 * 
 * Validates:
 * - data/cert_manifest.js (Exam configurations, domains, weights summing to 100%)
 * - data/case_studies.js (Mountkirk Games, TerramEarth, EHR Healthcare, Helicopter Racing League)
 * - data/cert_cdl.js, data/cert_ace.js, data/cert_pca.js (All question schemas, options, distractors, etc.)
 * - Self-validating fixture suite (verifies validator accuracy against valid and flawed items).
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
const DATA_DIR = path.join(PROJECT_ROOT, 'data');

// Allowed Enumerations
const ALLOWED_CERTS = ['cdl', 'ace', 'pca'];
const ALLOWED_BLOCKS = ['BLOCK-1', 'BLOCK-2', 'BLOCK-3', 'BLOCK-4', 'BLOCK-5', 'BLOCK-6'];
const ALLOWED_DIFFICULTIES = ['foundational', 'intermediate', 'advanced', 'expert'];
const ALLOWED_BLOOMS = ['understand', 'apply', 'analyze'];
const ALLOWED_CASE_STUDIES = [
  'none',
  'mountkirk_games',
  'terramearth',
  'ehr_healthcare',
  'helicopter_racing_league'
];

let totalAssertions = 0;
let passedAssertions = 0;
let failedAssertions = 0;
const failureDetails = [];

function recordPass(msg) {
  totalAssertions++;
  passedAssertions++;
}

function recordFail(msg, error) {
  totalAssertions++;
  failedAssertions++;
  failureDetails.push({ msg, error: error ? (error.message || String(error)) : 'Assertion failed' });
}

function assertCondition(cond, msg) {
  if (cond) {
    recordPass(msg);
  } else {
    recordFail(msg);
  }
}

/**
 * Safely evaluates a browser JavaScript file in a sandboxed Node VM
 */
function loadJsFileInSandbox(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
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
  try {
    vm.runInContext(content, context, { filename: filePath, timeout: 5000 });
    return {
      window: sandbox.window,
      exports: sandbox.module.exports
    };
  } catch (err) {
    throw new Error(`Failed to parse JS file ${filePath}: ${err.message}`);
  }
}

/**
 * Validates the Certification Manifest
 */
function validateManifest(manifest) {
  const errors = [];
  if (!manifest || typeof manifest !== 'object') {
    errors.push('Manifest must be a non-null object');
    return errors;
  }
  if (!manifest.certifications || typeof manifest.certifications !== 'object') {
    errors.push('Manifest missing "certifications" dictionary');
    return errors;
  }

  for (const certKey of ALLOWED_CERTS) {
    const cert = manifest.certifications[certKey];
    if (!cert) {
      errors.push(`Missing certification configuration for: ${certKey}`);
      continue;
    }
    if (cert.id !== certKey) {
      errors.push(`Cert [${certKey}] id mismatch: expected "${certKey}", got "${cert.id}"`);
    }
    if (typeof cert.name !== 'string' || cert.name.trim().length === 0) {
      errors.push(`Cert [${certKey}] missing valid name`);
    }
    if (typeof cert.durationMinutes !== 'number' || cert.durationMinutes <= 0) {
      errors.push(`Cert [${certKey}] invalid durationMinutes: ${cert.durationMinutes}`);
    }
    if (typeof cert.questionCount !== 'number' || cert.questionCount <= 0) {
      errors.push(`Cert [${certKey}] invalid questionCount: ${cert.questionCount}`);
    }
    if (typeof cert.passingPercent !== 'number' || cert.passingPercent <= 0 || cert.passingPercent > 100) {
      errors.push(`Cert [${certKey}] invalid passingPercent: ${cert.passingPercent}`);
    }
    if (!cert.domains || typeof cert.domains !== 'object' || Object.keys(cert.domains).length === 0) {
      errors.push(`Cert [${certKey}] missing domains dictionary`);
      continue;
    }

    let totalWeight = 0;
    for (const [domId, domain] of Object.entries(cert.domains)) {
      if (!domain.id || domain.id !== domId) {
        errors.push(`Cert [${certKey}] domain [${domId}] id mismatch or missing`);
      }
      if (typeof domain.name !== 'string' || domain.name.trim().length === 0) {
        errors.push(`Cert [${certKey}] domain [${domId}] missing name`);
      }
      if (typeof domain.weight !== 'number' || domain.weight <= 0 || domain.weight > 100) {
        errors.push(`Cert [${certKey}] domain [${domId}] invalid weight: ${domain.weight}`);
      } else {
        totalWeight += domain.weight;
      }
    }

    // Weight sum must equal 100% (+/- 0.01% floating precision)
    if (Math.abs(totalWeight - 100) > 0.01) {
      errors.push(`Cert [${certKey}] domain weights sum to ${totalWeight.toFixed(2)}%, expected 100.00%`);
    }
  }

  return errors;
}

/**
 * Validates Case Studies
 */
function validateCaseStudies(caseStudies) {
  const errors = [];
  if (!caseStudies || typeof caseStudies !== 'object') {
    errors.push('Case studies must be a non-null object');
    return errors;
  }

  const studiesDict = caseStudies.studies || caseStudies;
  const expectedCases = ALLOWED_CASE_STUDIES.filter(cs => cs !== 'none');
  for (const csKey of expectedCases) {
    const cs = studiesDict[csKey];
    if (!cs) {
      errors.push(`Missing expected Case Study: ${csKey}`);
      continue;
    }
    if (cs.id !== csKey) {
      errors.push(`Case Study [${csKey}] id mismatch: got "${cs.id}"`);
    }
    if (!cs.name || typeof cs.name !== 'string' || cs.name.trim().length === 0) {
      errors.push(`Case Study [${csKey}] missing name`);
    }
    if (!cs.companyOverview || typeof cs.companyOverview !== 'string' || cs.companyOverview.trim().length < 20) {
      errors.push(`Case Study [${csKey}] companyOverview is empty or too short (<20 chars)`);
    }
    if (!Array.isArray(cs.businessRequirements) || cs.businessRequirements.length === 0) {
      errors.push(`Case Study [${csKey}] businessRequirements must be a non-empty array`);
    }
    if (!Array.isArray(cs.technicalRequirements) || cs.technicalRequirements.length === 0) {
      errors.push(`Case Study [${csKey}] technicalRequirements must be a non-empty array`);
    }
  }

  return errors;
}

/**
 * Validates an individual Question Item against the strict schema
 */
function validateQuestionItem(q, manifest, seenIds = new Set()) {
  const errors = [];
  const prefix = q && q.id ? `[Question ${q.id}] ` : '[Question <missing ID>] ';

  if (!q || typeof q !== 'object') {
    return [`${prefix}Item is not a valid object`];
  }

  // 1. ID uniqueness & format
  if (typeof q.id !== 'string' || q.id.trim().length === 0) {
    errors.push(`${prefix}Missing or empty 'id'`);
  } else {
    if (seenIds.has(q.id)) {
      errors.push(`${prefix}Duplicate ID found: '${q.id}'`);
    } else {
      seenIds.add(q.id);
    }
  }

  // 2. certId
  if (!ALLOWED_CERTS.includes(q.certId)) {
    errors.push(`${prefix}Invalid certId '${q.certId}'. Must be one of: ${ALLOWED_CERTS.join(', ')}`);
  }

  // 3. blockId
  if (!ALLOWED_BLOCKS.includes(q.blockId)) {
    errors.push(`${prefix}Invalid blockId '${q.blockId}'. Must be one of: ${ALLOWED_BLOCKS.join(', ')}`);
  }

  // 4. domainId & manifest matching
  if (typeof q.domainId !== 'string' || q.domainId.trim().length === 0) {
    errors.push(`${prefix}Missing or empty domainId`);
  } else if (manifest && manifest.certifications && manifest.certifications[q.certId]) {
    const certDomains = manifest.certifications[q.certId].domains;
    if (!certDomains || !certDomains[q.domainId]) {
      errors.push(`${prefix}domainId '${q.domainId}' does not exist in manifest for cert '${q.certId}'`);
    }
  }

  // 5. domainName
  if (typeof q.domainName !== 'string' || q.domainName.trim().length === 0) {
    errors.push(`${prefix}Missing or empty domainName`);
  }

  // 6. subtopic
  if (typeof q.subtopic !== 'string' || q.subtopic.trim().length === 0) {
    errors.push(`${prefix}Missing or empty subtopic`);
  }

  // 7. difficulty
  if (!ALLOWED_DIFFICULTIES.includes(q.difficulty)) {
    errors.push(`${prefix}Invalid difficulty '${q.difficulty}'. Must be one of: ${ALLOWED_DIFFICULTIES.join(', ')}`);
  }

  // 8. bloomsLevel
  if (!ALLOWED_BLOOMS.includes(q.bloomsLevel)) {
    errors.push(`${prefix}Invalid bloomsLevel '${q.bloomsLevel}'. Must be one of: ${ALLOWED_BLOOMS.join(', ')}`);
  }

  // 9. timeEstimateSeconds
  if (typeof q.timeEstimateSeconds !== 'number' || q.timeEstimateSeconds <= 0 || q.timeEstimateSeconds > 600) {
    errors.push(`${prefix}Invalid timeEstimateSeconds: ${q.timeEstimateSeconds} (must be between 1 and 600)`);
  }

  // 10. caseStudy
  if (!ALLOWED_CASE_STUDIES.includes(q.caseStudy)) {
    errors.push(`${prefix}Invalid caseStudy '${q.caseStudy}'. Must be one of: ${ALLOWED_CASE_STUDIES.join(', ')}`);
  } else {
    if (q.certId !== 'pca' && q.caseStudy !== 'none') {
      errors.push(`${prefix}Case study '${q.caseStudy}' assigned to non-PCA certification '${q.certId}'`);
    }
    if (q.caseStudy !== 'none' && (!q.caseStudySection || typeof q.caseStudySection !== 'string')) {
      errors.push(`${prefix}Case study is active ('${q.caseStudy}') but 'caseStudySection' is missing`);
    }
  }

  // 11. title & scenario
  if (typeof q.title !== 'string' || q.title.trim().length < 5) {
    errors.push(`${prefix}Title is missing or too short (<5 chars)`);
  }
  if (typeof q.scenario !== 'string' || q.scenario.trim().length < 20) {
    errors.push(`${prefix}Scenario is missing or too short (<20 chars)`);
  }

  // 12. keywords
  if (!Array.isArray(q.keywords) || q.keywords.length === 0) {
    errors.push(`${prefix}Keywords must be a non-empty array of strings`);
  } else {
    for (const kw of q.keywords) {
      if (typeof kw !== 'string' || kw.trim().length === 0) {
        errors.push(`${prefix}Found invalid/empty keyword in keywords array`);
      }
    }
  }

  // 13. isMultiSelect & expectedSelectCount
  if (typeof q.isMultiSelect !== 'boolean') {
    errors.push(`${prefix}'isMultiSelect' must be a boolean`);
  }
  if (typeof q.expectedSelectCount !== 'number' || q.expectedSelectCount < 1) {
    errors.push(`${prefix}'expectedSelectCount' must be a positive integer`);
  }
  if (q.isMultiSelect === false && q.expectedSelectCount !== 1) {
    errors.push(`${prefix}'expectedSelectCount' must be 1 for single-select questions`);
  }
  if (q.isMultiSelect === true && q.expectedSelectCount < 2) {
    errors.push(`${prefix}'expectedSelectCount' must be >= 2 for multi-select questions`);
  }

  // 14. Options
  if (!Array.isArray(q.options) || q.options.length < 4) {
    errors.push(`${prefix}Options must be an array with at least 4 items`);
  } else {
    const letters = new Set();
    for (let i = 0; i < q.options.length; i++) {
      const opt = q.options[i];
      if (!opt || typeof opt !== 'object') {
        errors.push(`${prefix}Option [${i}] is not an object`);
        continue;
      }
      if (typeof opt.letter !== 'string' || !/^[A-F]$/.test(opt.letter)) {
        errors.push(`${prefix}Option [${i}] has invalid letter '${opt.letter}'`);
      } else {
        if (letters.has(opt.letter)) {
          errors.push(`${prefix}Duplicate option letter '${opt.letter}'`);
        }
        letters.add(opt.letter);
      }
      if (typeof opt.text !== 'string' || opt.text.trim().length < 3) {
        errors.push(`${prefix}Option '${opt.letter}' text is missing or too short (<3 chars)`);
      }
    }

    // 15. Correct answer check
    const correctLetters = new Set();
    if (q.isMultiSelect) {
      if (!Array.isArray(q.correct)) {
        errors.push(`${prefix}Multi-select question requires 'correct' to be an array of letters`);
      } else {
        if (q.correct.length !== q.expectedSelectCount) {
          errors.push(`${prefix}'correct' array length (${q.correct.length}) does not match expectedSelectCount (${q.expectedSelectCount})`);
        }
        for (const c of q.correct) {
          if (!letters.has(c)) {
            errors.push(`${prefix}Correct letter '${c}' does not exist in options`);
          }
          correctLetters.add(c);
        }
      }
    } else {
      if (typeof q.correct !== 'string') {
        errors.push(`${prefix}Single-select question requires 'correct' to be a string`);
      } else {
        if (!letters.has(q.correct)) {
          errors.push(`${prefix}Correct letter '${q.correct}' does not exist in options`);
        }
        correctLetters.add(q.correct);
      }
    }

    // 16. Explanation
    if (typeof q.explanation !== 'string' || q.explanation.trim().length < 20) {
      errors.push(`${prefix}Explanation is missing or too short (<20 chars)`);
    }

    // 17. Distractors (must cover all incorrect option letters)
    if (!q.distractors || typeof q.distractors !== 'object') {
      errors.push(`${prefix}Missing 'distractors' dictionary`);
    } else {
      for (const opt of q.options) {
        if (opt.letter && !correctLetters.has(opt.letter)) {
          const distractorText = q.distractors[opt.letter];
          if (typeof distractorText !== 'string' || distractorText.trim().length < 10) {
            errors.push(`${prefix}Missing or too short distractor justification for incorrect option '${opt.letter}' (<10 chars)`);
          }
        }
      }
    }
  }

  return errors;
}

/**
 * Runs the self-validating test fixtures for test_integrity.js
 */
function runSelfValidationFixtures() {
  console.log(`\n${colors.cyan}${colors.bright}=== RUNNING INTEGRITY VALIDATOR FIXTURE SUITE (TIER 1 & 2) ===${colors.reset}`);

  const mockManifest = {
    certifications: {
      cdl: {
        id: 'cdl',
        name: 'Cloud Digital Leader',
        durationMinutes: 90,
        questionCount: 50,
        passingPercent: 70,
        domains: {
          'CDL-D1': { id: 'CDL-D1', name: 'Digital Transformation', weight: 25 },
          'CDL-D2': { id: 'CDL-D2', name: 'Cloud Basics', weight: 25 },
          'CDL-D3': { id: 'CDL-D3', name: 'GCP Products', weight: 25 },
          'CDL-D4': { id: 'CDL-D4', name: 'Security & Operations', weight: 25 }
        }
      },
      ace: {
        id: 'ace',
        name: 'Associate Cloud Engineer',
        durationMinutes: 120,
        questionCount: 50,
        passingPercent: 70,
        domains: {
          'ACE-D1': { id: 'ACE-D1', name: 'Setup', weight: 20 },
          'ACE-D2': { id: 'ACE-D2', name: 'Planning', weight: 20 },
          'ACE-D3': { id: 'ACE-D3', name: 'Deploying', weight: 25 },
          'ACE-D4': { id: 'ACE-D4', name: 'Ensuring Ops', weight: 20 },
          'ACE-D5': { id: 'ACE-D5', name: 'Access & Security', weight: 15 }
        }
      },
      pca: {
        id: 'pca',
        name: 'Professional Cloud Architect',
        durationMinutes: 120,
        questionCount: 50,
        passingPercent: 70,
        domains: {
          'PCA-D1': { id: 'PCA-D1', name: 'Architecture Design', weight: 25 },
          'PCA-D2': { id: 'PCA-D2', name: 'Managing Infrastructure', weight: 15 },
          'PCA-D3': { id: 'PCA-D3', name: 'Security & Compliance', weight: 15 },
          'PCA-D4': { id: 'PCA-D4', name: 'Technical Processes', weight: 15 },
          'PCA-D5': { id: 'PCA-D5', name: 'Reliability', weight: 15 },
          'PCA-D6': { id: 'PCA-D6', name: 'Operations', weight: 15 }
        }
      }
    }
  };

  const mockCaseStudies = {
    mountkirk_games: {
      id: 'mountkirk_games',
      name: 'Mountkirk Games',
      companyOverview: 'Mountkirk Games makes online, session-based multiplayer games for mobile platforms.',
      businessRequirements: ['Scale to 10M DAU', 'Minimize latency worldwide'],
      technicalRequirements: ['Use managed databases', 'Deploy to Kubernetes']
    },
    terramearth: {
      id: 'terramearth',
      name: 'TerramEarth',
      companyOverview: 'TerramEarth manufactures heavy equipment with millions of IoT sensors worldwide.',
      businessRequirements: ['Predictive maintenance', 'Cost optimization'],
      technicalRequirements: ['Ingest 20TB daily IoT data', 'BigQuery analytics']
    },
    ehr_healthcare: {
      id: 'ehr_healthcare',
      name: 'EHR Healthcare',
      companyOverview: 'EHR Healthcare provides electronic health record software SaaS solutions.',
      businessRequirements: ['HIPAA compliance', '99.99% availability'],
      technicalRequirements: ['Customer-managed encryption keys', 'Zero downtime deployments']
    },
    helicopter_racing_league: {
      id: 'helicopter_racing_league',
      name: 'Helicopter Racing League',
      companyOverview: 'Helicopter Racing League streams live sports and telemetry across the globe.',
      businessRequirements: ['Low-latency global live streaming', 'Real-time race predictions'],
      technicalRequirements: ['AI/ML model serving on Vertex AI', 'Cloud CDN caching']
    }
  };

  // Test 1: Valid Manifest passes with 0 errors
  const manifestErrors = validateManifest(mockManifest);
  assertCondition(manifestErrors.length === 0, 'Fixture: Valid manifest passes with 0 errors');

  // Test 2: Broken Manifest weight sum fails
  const brokenManifest = JSON.parse(JSON.stringify(mockManifest));
  brokenManifest.certifications.cdl.domains['CDL-D1'].weight = 10; // Sum becomes 85%
  const brokenManifestErrors = validateManifest(brokenManifest);
  assertCondition(
    brokenManifestErrors.some(e => e.includes('sum to 85.00%')),
    'Fixture: Manifest with domain weights != 100% is caught'
  );

  // Test 3: Valid Case Studies pass with 0 errors
  const csErrors = validateCaseStudies(mockCaseStudies);
  assertCondition(csErrors.length === 0, 'Fixture: Valid case studies pass with 0 errors');

  // Test 4: Missing case study fails
  const brokenCaseStudies = { ...mockCaseStudies };
  delete brokenCaseStudies.helicopter_racing_league;
  const brokenCsErrors = validateCaseStudies(brokenCaseStudies);
  assertCondition(
    brokenCsErrors.some(e => e.includes('helicopter_racing_league')),
    'Fixture: Missing case study is caught'
  );

  // Test 5: Valid Single-Select Question passes
  const validSingleQ = {
    id: 'CDL-D1-001',
    certId: 'cdl',
    blockId: 'BLOCK-1',
    domainId: 'CDL-D1',
    domainName: 'Digital Transformation',
    subtopic: 'Cloud Value Proposition',
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
    },
    officialDocUrl: 'https://cloud.google.com/learn/what-is-cloud-computing'
  };

  const seenIds = new Set();
  const qErrors = validateQuestionItem(validSingleQ, mockManifest, seenIds);
  assertCondition(qErrors.length === 0, 'Fixture: Valid single-select question passes schema validation');

  // Test 6: Valid Multi-Select Question passes
  const validMultiQ = {
    id: 'PCA-D1-001',
    certId: 'pca',
    blockId: 'BLOCK-2',
    domainId: 'PCA-D1',
    domainName: 'Architecture Design',
    subtopic: 'Mountkirk Storage Architecture',
    difficulty: 'advanced',
    bloomsLevel: 'analyze',
    timeEstimateSeconds: 120,
    caseStudy: 'mountkirk_games',
    caseStudySection: 'Technical Requirements',
    title: 'Mountkirk Game State Storage Selection',
    scenario: 'Mountkirk Games needs a scalable database solution that supports low-latency global time-series telemetry and session state.',
    keywords: ['Mountkirk', 'Firestore', 'Bigtable', 'Telemetry'],
    isMultiSelect: true,
    expectedSelectCount: 2,
    options: [
      { letter: 'A', text: 'Cloud Bigtable for high-throughput time-series gaming telemetry' },
      { letter: 'B', text: 'Cloud Firestore for player profile and session state synchronization' },
      { letter: 'C', text: 'Cloud Storage Nearline for real-time multiplayer transactions' },
      { letter: 'D', text: 'Compute Engine local SSD without replication' }
    ],
    correct: ['A', 'B'],
    explanation: 'Cloud Bigtable handles massive write throughput for telemetry, while Firestore manages multi-device player session synchronization.',
    distractors: {
      C: 'Cloud Storage Nearline has high access latency and is intended for cold backup data.',
      D: 'Local SSD instances lose all data when stopped and lack transactional persistence.'
    },
    architectureComponents: ['Bigtable', 'Firestore']
  };

  const multiErrors = validateQuestionItem(validMultiQ, mockManifest, seenIds);
  assertCondition(multiErrors.length === 0, 'Fixture: Valid multi-select case study question passes');

  // Test 7: Defective Question Items are caught
  const defectiveCases = [
    {
      name: 'Duplicate ID',
      item: { ...validSingleQ },
      check: (errs) => errs.some(e => e.includes('Duplicate ID'))
    },
    {
      name: 'Missing Distractor justification for Option A',
      item: {
        ...validSingleQ,
        id: 'CDL-D1-002',
        distractors: { C: 'Justification C is long enough', D: 'Justification D is long enough' }
      },
      check: (errs) => errs.some(e => e.includes("distractor justification for incorrect option 'A'"))
    },
    {
      name: 'Distractor justification too short',
      item: {
        ...validSingleQ,
        id: 'CDL-D1-003',
        distractors: { A: 'Short', C: 'Valid distractor text for C', D: 'Valid distractor text for D' }
      },
      check: (errs) => errs.some(e => e.includes("distractor justification for incorrect option 'A'"))
    },
    {
      name: 'Invalid correct letter outside options',
      item: {
        ...validSingleQ,
        id: 'CDL-D1-004',
        correct: 'Z'
      },
      check: (errs) => errs.some(e => e.includes("Correct letter 'Z' does not exist"))
    },
    {
      name: 'Multi-select count mismatch',
      item: {
        ...validMultiQ,
        id: 'PCA-D1-002',
        expectedSelectCount: 3,
        correct: ['A', 'B']
      },
      check: (errs) => errs.some(e => e.includes('does not match expectedSelectCount'))
    },
    {
      name: 'Case Study on CDL exam',
      item: {
        ...validSingleQ,
        id: 'CDL-D1-005',
        caseStudy: 'mountkirk_games'
      },
      check: (errs) => errs.some(e => e.includes("assigned to non-PCA certification 'cdl'"))
    },
    {
      name: 'Invalid Domain ID not in manifest',
      item: {
        ...validSingleQ,
        id: 'CDL-D1-006',
        domainId: 'NON-EXISTENT-DOMAIN'
      },
      check: (errs) => errs.some(e => e.includes('does not exist in manifest'))
    }
  ];

  for (const tc of defectiveCases) {
    const testIds = new Set(seenIds);
    const errs = validateQuestionItem(tc.item, mockManifest, testIds);
    assertCondition(
      tc.check(errs),
      `Fixture (Adversarial): ${tc.name} is correctly flagged as error`
    );
  }
}

/**
 * Validates the actual repository data files if they are present on disk
 */
function validateRepositoryData() {
  console.log(`\n${colors.cyan}${colors.bright}=== VALIDATING REPOSITORY DATA FILES (DATA FOLDER) ===${colors.reset}`);

  const manifestPath = path.join(DATA_DIR, 'cert_manifest.js');
  const caseStudiesPath = path.join(DATA_DIR, 'case_studies.js');
  const cdlPath = path.join(DATA_DIR, 'cert_cdl.js');
  const acePath = path.join(DATA_DIR, 'cert_ace.js');
  const pcaPath = path.join(DATA_DIR, 'cert_pca.js');

  let manifestObj = null;
  let caseStudiesObj = null;

  // 1. Manifest
  if (fs.existsSync(manifestPath)) {
    try {
      const res = loadJsFileInSandbox(manifestPath);
      manifestObj = res.window.GCP_MANIFEST || res.exports || res.window.cert_manifest;
      assertCondition(Boolean(manifestObj), `Manifest file loaded: ${manifestPath}`);
      const mErrors = validateManifest(manifestObj);
      if (mErrors.length === 0) {
        assertCondition(true, `Manifest schema & 100% domain weight validation passed`);
      } else {
        mErrors.forEach(err => recordFail(`Manifest validation error: ${err}`));
      }
    } catch (err) {
      recordFail(`Error evaluating ${manifestPath}`, err);
    }
  } else {
    console.log(`${colors.yellow}[NOTE] cert_manifest.js not yet authored on disk (M1 in progress). Fixture tests verified.${colors.reset}`);
  }

  // 2. Case Studies
  if (fs.existsSync(caseStudiesPath)) {
    try {
      const res = loadJsFileInSandbox(caseStudiesPath);
      caseStudiesObj = res.window.GCP_CASE_STUDIES || res.exports || res.window.case_studies;
      assertCondition(Boolean(caseStudiesObj), `Case studies file loaded: ${caseStudiesPath}`);
      const csErrors = validateCaseStudies(caseStudiesObj);
      if (csErrors.length === 0) {
        assertCondition(true, `All 4 Case Studies validated successfully`);
      } else {
        csErrors.forEach(err => recordFail(`Case study validation error: ${err}`));
      }
    } catch (err) {
      recordFail(`Error evaluating ${caseStudiesPath}`, err);
    }
  } else {
    console.log(`${colors.yellow}[NOTE] case_studies.js not yet authored on disk (M1 in progress). Fixture tests verified.${colors.reset}`);
  }

  // 3. Question Banks
  const certFiles = [
    { name: 'CDL', path: cdlPath, varName: 'GCP_QUESTIONS_CDL', certKey: 'cdl' },
    { name: 'ACE', path: acePath, varName: 'GCP_QUESTIONS_ACE', certKey: 'ace' },
    { name: 'PCA', path: pcaPath, varName: 'GCP_QUESTIONS_PCA', certKey: 'pca' }
  ];

  const repositorySeenIds = new Set();

  for (const cf of certFiles) {
    if (fs.existsSync(cf.path)) {
      try {
        const res = loadJsFileInSandbox(cf.path);
        let questions = res.window[cf.varName] || (res.window.GCP_QUESTIONS && res.window.GCP_QUESTIONS[cf.certKey]) || res.exports;
        if (!questions && Array.isArray(res.window.questions)) {
          questions = res.window.questions;
        }

        assertCondition(Array.isArray(questions), `${cf.name} question array loaded from ${cf.path}`);
        if (Array.isArray(questions)) {
          console.log(`${colors.blue}Inspecting ${questions.length} questions in ${cf.name}...${colors.reset}`);
          let certErrorsCount = 0;
          for (const q of questions) {
            const qErrors = validateQuestionItem(q, manifestObj, repositorySeenIds);
            if (qErrors.length > 0) {
              certErrorsCount += qErrors.length;
              qErrors.slice(0, 5).forEach(e => recordFail(`${cf.name} question schema error: ${e}`));
            }
          }
          assertCondition(certErrorsCount === 0, `${cf.name}: All ${questions.length} questions passed strict schema integrity`);
        }
      } catch (err) {
        recordFail(`Error evaluating ${cf.path}`, err);
      }
    } else {
      console.log(`${colors.yellow}[NOTE] ${cf.name} question file (${path.basename(cf.path)}) not yet authored on disk. Fixture tests verified.${colors.reset}`);
    }
  }
}

/**
 * Main Test Runner Entrypoint
 */
function main() {
  const startTime = Date.now();
  console.log(`${colors.blue}${colors.bright}======================================================${colors.reset}`);
  console.log(`${colors.blue}${colors.bright}  E2E TEST HARNESS: QUESTION BANK & SCHEMA INTEGRITY  ${colors.reset}`);
  console.log(`${colors.blue}${colors.bright}======================================================${colors.reset}`);

  try {
    // 1. Run fixture self-validation tests
    runSelfValidationFixtures();

    // 2. Validate live data files if present
    validateRepositoryData();
  } catch (err) {
    recordFail('Unexpected fatal error in test_integrity execution', err);
  }

  const durationMs = Date.now() - startTime;
  console.log(`\n${colors.bright}------------------------------------------------------${colors.reset}`);
  console.log(`Total Assertions:  ${totalAssertions}`);
  console.log(`Passed:            ${colors.green}${passedAssertions}${colors.reset}`);
  console.log(`Failed:            ${failedAssertions > 0 ? colors.red + failedAssertions : colors.green + '0'}${colors.reset}`);
  console.log(`Execution Time:    ${durationMs}ms`);
  console.log(`${colors.bright}------------------------------------------------------${colors.reset}`);

  if (failedAssertions > 0) {
    console.log(`\n${colors.red}${colors.bright}INTEGRITY TEST FAILED with ${failedAssertions} errors:${colors.reset}`);
    failureDetails.forEach((f, idx) => {
      console.log(`${colors.red}[${idx + 1}] ${f.msg} -> ${f.error}${colors.reset}`);
    });
    process.exit(1);
  } else {
    console.log(`\n${colors.green}${colors.bright}✔ ALL INTEGRITY CHECKS & FIXTURE ASSERTIONS PASSED (100%)${colors.reset}\n`);
    process.exit(0);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  validateManifest,
  validateCaseStudies,
  validateQuestionItem,
  runSelfValidationFixtures
};
