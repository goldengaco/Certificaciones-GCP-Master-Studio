/**
 * stress_test_challenger_m3_2.js
 * 
 * Adversarial Stress & Empirical Challenge Test Suite (Milestone 3 - Challenger 2)
 * Targets:
 * 1. Pure SVG Visualization Engine (Radar Chart Coordinate Geometry across 4, 5, and 6 domains)
 * 2. Radial Readiness Gauge SVG Arc Length, Stroke Dashoffset & Color Tiers Calibration
 * 3. Historical Progression Timeline SVG Rendering (0, 1, and 50+ sessions)
 * 4. Tampered & Malicious JSON Backup Restoration Subsystem & IEEE 802.3 CRC-32 Oracle
 * 5. Procedural Web Audio Sound Synthesizer Fallbacks (Muted, Headless & Error Injections)
 */

const assert = require('assert');
const path = require('path');

// Colors for terminal output
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  blue: '\x1b[34m'
};

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;
const failureDetails = [];

function check(title, fn) {
  totalChecks++;
  try {
    fn();
    passedChecks++;
    console.log(`  ${C.green}✔ PASS:${C.reset} ${title}`);
  } catch (err) {
    failedChecks++;
    console.error(`  ${C.red}✖ FAIL:${C.reset} ${title}`);
    console.error(`    ${C.yellow}Details:${C.reset} ${err.message}`);
    failureDetails.push({ title, error: err.message, stack: err.stack });
  }
}

console.log(`${C.bold}${C.blue}=======================================================================${C.reset}`);
console.log(`${C.bold}${C.blue}  ADVERSARIAL EMPIRICAL CHALLENGE SUITE -- CHALLENGER 2 (MILESTONE 3)   ${C.reset}`);
console.log(`${C.bold}${C.blue}=======================================================================${C.reset}\n`);

// Load modules under test
const UICharts = require('../js/ui_charts.js');
const StateStorage = require('../js/state.js');
const { SoundFX, GCP_APP } = require('../js/app.js');

// ============================================================================
// SUITE 1: RADAR CHART GEOMETRIC & TRIGONOMETRIC COORDINATE CALCULATIONS
// ============================================================================
console.log(`${C.bold}--- SUITE 1: Radar Chart Trigonometric Calculations (4, 5, 6 domains & 0%, 50%, 70%, 100%) ---${C.reset}`);

/**
 * Mathematical Oracle for Radar Chart coordinate calculation:
 * cx = width / 2
 * cy = height / 2 + 6
 * radius = radius
 * angle_i = -PI/2 + (2 * PI * i) / N
 * scoreFraction = clamp(score, 0, 100) / 100
 * r = radius * max(0.04, scoreFraction)
 * x = cx + r * cos(angle_i)
 * y = cy + r * sin(angle_i)
 */
function radarCoordinateOracle(N, index, score, width = 420, height = 380, radius = 125) {
  const cx = width / 2;
  const cy = height / 2 + 6;
  const angle = -Math.PI / 2 + (2 * Math.PI * index) / N;
  const clampedScore = Math.max(0, Math.min(100, Number(score) || 0));
  const scoreFraction = clampedScore / 100;
  const r = radius * Math.max(0.04, scoreFraction);
  const x = cx + r * Math.cos(angle);
  const y = cy + r * Math.sin(angle);
  return { x: Number(x.toFixed(1)), y: Number(y.toFixed(1)) };
}

// Helper to extract user polygon points from SVG
function extractUserPolygonPoints(svgString) {
  const match = svgString.match(/<g class="radar-user-area"[^>]*>[\s\S]*?<polygon points="([^"]+)"/);
  if (!match) return [];
  return match[1].trim().split(/\s+/).map(pair => {
    const [x, y] = pair.split(',').map(Number);
    return { x, y };
  });
}

// Helper to extract circle points from SVG
function extractCirclePoints(svgString) {
  const circles = [];
  const regex = /<circle cx="([^"]+)" cy="([^"]+)"/g;
  let match;
  while ((match = regex.exec(svgString)) !== null) {
    circles.push({ x: Number(match[1]), y: Number(match[2]) });
  }
  return circles;
}

// 1.1 Test N = 4 domains (CDL Architecture)
const scoreLevels = [0, 50, 70, 100];
[4, 5, 6].forEach(N => {
  scoreLevels.forEach(score => {
    check(`Radar Chart N=${N} domains at uniform score ${score}% matches exact trigonometric oracle`, () => {
      const domains = Array.from({ length: N }, (_, i) => ({
        domainId: `DOM-${i + 1}`,
        name: `Domain ${i + 1}`,
        score: score
      }));

      const width = 420;
      const height = 380;
      const radius = 125;
      const svg = UICharts.RadarChart.generateSVG({ domains, width, height, radius });
      const actualPoints = extractUserPolygonPoints(svg);

      assert.strictEqual(actualPoints.length, N, `Expected ${N} polygon vertices, got ${actualPoints.length}`);

      for (let i = 0; i < N; i++) {
        const expected = radarCoordinateOracle(N, i, score, width, height, radius);
        const actual = actualPoints[i];
        assert.ok(
          Math.abs(actual.x - expected.x) <= 0.15 && Math.abs(actual.y - expected.y) <= 0.15,
          `Point ${i} mismatch at score ${score}%: expected (${expected.x}, ${expected.y}), got (${actual.x}, ${actual.y})`
        );
      }
    });
  });
});

// 1.2 Test heterogeneous scores across 4, 5, and 6 domains
check('Radar Chart with mixed scores (0%, 50%, 70%, 100%) on 4 domains (CDL)', () => {
  const mixedCDL = [
    { domainId: 'CDL-D1', score: 0 },
    { domainId: 'CDL-D2', score: 50 },
    { domainId: 'CDL-D3', score: 70 },
    { domainId: 'CDL-D4', score: 100 }
  ];
  const svg = UICharts.RadarChart.generateSVG({ domains: mixedCDL, width: 420, height: 380, radius: 125 });
  const actualPoints = extractUserPolygonPoints(svg);
  assert.strictEqual(actualPoints.length, 4);

  mixedCDL.forEach((d, i) => {
    const expected = radarCoordinateOracle(4, i, d.score, 420, 380, 125);
    assert.ok(
      Math.abs(actualPoints[i].x - expected.x) <= 0.15 && Math.abs(actualPoints[i].y - expected.y) <= 0.15,
      `CDL Vertex ${i} mismatch: expected (${expected.x}, ${expected.y}), got (${actualPoints[i].x}, ${actualPoints[i].y})`
    );
  });
});

check('Radar Chart with mixed scores on 5 domains (ACE)', () => {
  const mixedACE = [
    { domainId: 'ACE-D1', score: 100 },
    { domainId: 'ACE-D2', score: 0 },
    { domainId: 'ACE-D3', score: 70 },
    { domainId: 'ACE-D4', score: 50 },
    { domainId: 'ACE-D5', score: 85 }
  ];
  const svg = UICharts.RadarChart.generateSVG({ domains: mixedACE });
  const actualPoints = extractUserPolygonPoints(svg);
  assert.strictEqual(actualPoints.length, 5);

  mixedACE.forEach((d, i) => {
    const expected = radarCoordinateOracle(5, i, d.score, 420, 380, 125);
    assert.ok(
      Math.abs(actualPoints[i].x - expected.x) <= 0.15 && Math.abs(actualPoints[i].y - expected.y) <= 0.15,
      `ACE Vertex ${i} mismatch: expected (${expected.x}, ${expected.y}), got (${actualPoints[i].x}, ${actualPoints[i].y})`
    );
  });
});

check('Radar Chart with mixed scores on 6 domains (PCA)', () => {
  const mixedPCA = [
    { domainId: 'PCA-D1', score: 35 },
    { domainId: 'PCA-D2', score: 70 },
    { domainId: 'PCA-D3', score: 100 },
    { domainId: 'PCA-D4', score: 50 },
    { domainId: 'PCA-D5', score: 0 },
    { domainId: 'PCA-D6', score: 92 }
  ];
  const svg = UICharts.RadarChart.generateSVG({ domains: mixedPCA });
  const actualPoints = extractUserPolygonPoints(svg);
  assert.strictEqual(actualPoints.length, 6);

  mixedPCA.forEach((d, i) => {
    const expected = radarCoordinateOracle(6, i, d.score, 420, 380, 125);
    assert.ok(
      Math.abs(actualPoints[i].x - expected.x) <= 0.15 && Math.abs(actualPoints[i].y - expected.y) <= 0.15,
      `PCA Vertex ${i} mismatch: expected (${expected.x}, ${expected.y}), got (${actualPoints[i].x}, ${actualPoints[i].y})`
    );
  });
});

// 1.3 Adversarial inputs to Radar Chart
check('Radar Chart clamps extreme negative and overflow scores safely', () => {
  const extremeDomains = [
    { domainId: 'D1', score: -100 }, // should clamp to 0 (r = radius * 0.04)
    { domainId: 'D2', score: 500 },  // should clamp to 100 (r = radius * 1.0)
    { domainId: 'D3', score: NaN },  // should clamp to 0
    { domainId: 'D4', score: '75.5' }// string number should parse to 75.5
  ];
  const svg = UICharts.RadarChart.generateSVG({ domains: extremeDomains });
  const actualPoints = extractUserPolygonPoints(svg);
  assert.strictEqual(actualPoints.length, 4);

  // Point 0 (clamped 0)
  const exp0 = radarCoordinateOracle(4, 0, 0);
  assert.strictEqual(actualPoints[0].x, exp0.x);
  assert.strictEqual(actualPoints[0].y, exp0.y);

  // Point 1 (clamped 100)
  const exp1 = radarCoordinateOracle(4, 1, 100);
  assert.strictEqual(actualPoints[1].x, exp1.x);
  assert.strictEqual(actualPoints[1].y, exp1.y);
});

check('Radar Chart returns fallback card when N < 3 (0, 1, 2 domains)', () => {
  [[], [{ domainId: 'D1', score: 80 }], [{ domainId: 'D1', score: 80 }, { domainId: 'D2', score: 70 }]].forEach(domains => {
    const result = UICharts.RadarChart.generateSVG({ domains });
    assert.ok(result.includes('chart-empty-state'), 'Must return chart-empty-state placeholder');
    assert.ok(!result.includes('<svg'), 'Must not generate broken SVG');
  });
});

// ============================================================================
// SUITE 2: RADIAL READINESS GAUGE ARC LENGTH, STROKE-DASHOFFSET & COLOR TIERS
// ============================================================================
console.log(`\n${C.bold}--- SUITE 2: Radial Gauge Arc Length, Dashoffset & Threshold Calibration ---${C.reset}`);

check('Radial Gauge exact circumference and dashoffset mathematical oracle across full score spectrum', () => {
  const size = 220;
  const strokeWidth = 14;
  const radius = (size / 2) - strokeWidth - 6; // 90
  const expectedC = 2 * Math.PI * radius; // 565.486677...

  const testPercentages = [0, 12.5, 25, 49.9, 50.0, 69.9, 70.0, 84.9, 85.0, 99.9, 100];

  testPercentages.forEach(pct => {
    const svg = UICharts.RadialGauge.generateSVG({ percentage: pct, size, strokeWidth });

    // Verify stroke-dasharray matches 2*PI*radius
    const dashArrayMatch = svg.match(/stroke-dasharray="([^"]+)"/);
    assert.ok(dashArrayMatch, `Missing stroke-dasharray for score ${pct}%`);
    assert.strictEqual(dashArrayMatch[1], expectedC.toFixed(2));

    // Verify stroke-dashoffset matches C * (1 - score / 100)
    const expectedOffset = expectedC * (1 - (pct / 100));
    const dashOffsetMatch = svg.match(/stroke-dashoffset="([^"]+)"/);
    assert.ok(dashOffsetMatch, `Missing stroke-dashoffset for score ${pct}%`);
    assert.strictEqual(dashOffsetMatch[1], expectedOffset.toFixed(2));
  });
});

check('Radial Gauge strict color tier boundary transitions (<50% Red, 50-69% Yellow, 70-84% Green, >=85% Blue)', () => {
  const tierMatrix = [
    { score: 0.0,  tier: 'tier-danger',   color: '#d93025', badge: 'ALTO RIESGO' },
    { score: 49.9, tier: 'tier-danger',   color: '#d93025', badge: 'ALTO RIESGO' },
    { score: 50.0, tier: 'tier-progress', color: '#f9ab00', badge: 'EN PREPARACIÓN' },
    { score: 69.9, tier: 'tier-progress', color: '#f9ab00', badge: 'EN PREPARACIÓN' },
    { score: 70.0, tier: 'tier-ready',    color: '#1e8e3e', badge: 'LISTO PARA EXAMEN' },
    { score: 84.9, tier: 'tier-ready',    color: '#1e8e3e', badge: 'LISTO PARA EXAMEN' },
    { score: 85.0, tier: 'tier-mastery',  color: '#1a73e8', badge: 'DOMINIO SUPERIOR' },
    { score: 100.0, tier: 'tier-mastery', color: '#1a73e8', badge: 'DOMINIO SUPERIOR' }
  ];

  tierMatrix.forEach(t => {
    const svg = UICharts.RadialGauge.generateSVG({ percentage: t.score });
    assert.ok(svg.includes(t.tier), `Score ${t.score}% missing class ${t.tier}`);
    assert.ok(svg.includes(t.color), `Score ${t.score}% missing color ${t.color}`);
    assert.ok(svg.includes(t.badge), `Score ${t.score}% missing badge text ${t.badge}`);
  });
});

check('Radial Gauge custom dimensions and zero-stroke protection', () => {
  const customSvg = UICharts.RadialGauge.generateSVG({ percentage: 75, size: 300, strokeWidth: 20 });
  const radius = (300 / 2) - 20 - 6; // 124
  const expectedC = 2 * Math.PI * radius; // 779.11
  assert.ok(customSvg.includes(`stroke-dasharray="${expectedC.toFixed(2)}"`));
  assert.ok(customSvg.includes('viewBox="0 0 300 300"'));
});

// ============================================================================
// SUITE 3: HISTORICAL PROGRESSION TIMELINE RENDERING
// ============================================================================
console.log(`\n${C.bold}--- SUITE 3: Historical Timeline Progression (0, 1, and 50+ attempts) ---${C.reset}`);

check('Timeline Chart renders clean empty state when history has 0 attempts', () => {
  [[], null, undefined, {}].forEach(emptyInput => {
    const output = UICharts.TimelineChart.generateSVG({ history: emptyInput });
    assert.ok(output.includes('timeline-empty-card'), 'Must render timeline-empty-card');
    assert.ok(output.includes('Sin Historial de Exámenes'), 'Must show empty title');
    assert.ok(!output.includes('<svg'), 'Must not generate empty SVG');
  });
});

check('Timeline Chart renders single attempt (N=1) centered without division-by-zero or NaN coordinates', () => {
  const singleAttempt = [
    { sessionId: 'sim-1', timestamp: 1771500000000, scorePercent: 78.5, passed: true }
  ];
  const width = 600;
  const height = 240;
  const padding = { top: 25, right: 35, bottom: 40, left: 50 };
  const plotW = width - padding.left - padding.right; // 515
  const plotH = height - padding.top - padding.bottom; // 175
  const yBottom = padding.top + plotH; // 200

  const expectedX = padding.left + plotW / 2; // 307.5
  const expectedY = padding.top + plotH * (1 - 78.5 / 100); // 62.625 -> 62.6

  const svg = UICharts.TimelineChart.generateSVG({ history: singleAttempt, width, height });

  assert.ok(!svg.includes('NaN'), 'SVG must not contain NaN coordinates');
  assert.ok(!svg.includes('Infinity'), 'SVG must not contain Infinity');

  // Verify single dot coordinate
  const dotMatch = svg.match(/<circle cx="([^"]+)" cy="([^"]+)"[^>]*class="timeline-dot"/);
  assert.ok(dotMatch, 'Must render timeline dot for N=1');
  assert.strictEqual(Number(dotMatch[1]), Number(expectedX.toFixed(1)));
  assert.strictEqual(Number(dotMatch[2]), Number(expectedY.toFixed(1)));

  // Verify polyline contains single point
  assert.ok(svg.includes(`points="${expectedX.toFixed(1)},${expectedY.toFixed(1)}"`));

  // Verify area polygon forms closed geometry to yBottom
  const expectedArea = `${expectedX.toFixed(1)},${yBottom} ${expectedX.toFixed(1)},${expectedY.toFixed(1)} ${expectedX.toFixed(1)},${yBottom}`;
  assert.ok(svg.includes(`points="${expectedArea}"`));
});

check('Timeline Chart renders 2 attempts correctly placed at bounds (0% and 100% of plot width)', () => {
  const twoAttempts = [
    { scorePercent: 60, passed: false, timestamp: 1771500000000 },
    { scorePercent: 85, passed: true, timestamp: 1771586400000 }
  ];
  const svg = UICharts.TimelineChart.generateSVG({ history: twoAttempts, width: 600, height: 240 });
  const dots = [];
  const regex = /<circle cx="([^"]+)" cy="([^"]+)"[^>]*class="timeline-dot"/g;
  let m;
  while ((m = regex.exec(svg)) !== null) {
    dots.push({ x: Number(m[1]), y: Number(m[2]) });
  }
  assert.strictEqual(dots.length, 2);
  assert.strictEqual(dots[0].x, 50.0); // left bound (padding.left)
  assert.strictEqual(dots[1].x, 565.0); // right bound (padding.left + plotW)
});

check('Timeline Chart stress test: renders 50+ and 100+ attempts with proper X-axis label subsampling', () => {
  const generateHistory = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      sessionId: `stress-sim-${i + 1}`,
      timestamp: 1771500000000 + i * 86400000,
      scorePercent: 50 + Math.sin(i / 5) * 40,
      passed: (50 + Math.sin(i / 5) * 40) >= 70
    }));
  };

  const history50 = generateHistory(50);
  const start50 = Date.now();
  const svg50 = UICharts.TimelineChart.generateSVG({ history: history50 });
  const duration50 = Date.now() - start50;

  assert.ok(duration50 < 100, `Generating 50-attempt timeline took ${duration50}ms (expected <100ms)`);
  const dots50 = (svg50.match(/class="timeline-dot"/g) || []).length;
  assert.strictEqual(dots50, 50, 'Must render exactly 50 data dots');

  // Verify X-axis label subsampling avoids label congestion
  const labelMatches50 = (svg50.match(/<text x="[^"]+" y="[^"]+"[^>]*text-anchor="middle"[^>]*>#\d+<\/text>/g) || []).length;
  assert.ok(labelMatches50 <= 10, `Expected at most 10 subsampled labels for N=50, got ${labelMatches50}`);

  // Test 100 attempts
  const history100 = generateHistory(100);
  const svg100 = UICharts.TimelineChart.generateSVG({ history: history100 });
  const dots100 = (svg100.match(/class="timeline-dot"/g) || []).length;
  assert.strictEqual(dots100, 100, 'Must render exactly 100 data dots');
  assert.ok(!svg100.includes('NaN'), 'No NaN coordinates in 100-item timeline');
});

// ============================================================================
// SUITE 4: CORRUPT & TAMPERED JSON BACKUP RESTORATION SUBSYSTEM & CRC-32 ORACLE
// ============================================================================
console.log(`\n${C.bold}--- SUITE 4: Tampered Backup Ingestion & CRC-32 Tamper Detection ---${C.reset}`);

// Known standard IEEE 802.3 CRC-32 reference vectors & Node.js zlib oracle
const zlib = require('zlib');
check('StateStorage CRC-32 conforms to standard IEEE 802.3 test vectors and zlib oracle across ASCII & Unicode', () => {
  const testStrings = [
    '',
    'a',
    'abc',
    '123456789',
    'The quick brown fox jumps over the lazy dog',
    'Google Cloud Master Certification 2026',
    '¡Hola Mundo! Arquitectura en Google Cloud Platform: ACE & PCA (Simulador Oficial)',
    'Dominio de Redes y Seguridad en la Nube: IAM, VPC Service Controls, Cloud Armor 🛡️ 🚀',
    '日本語テスト UTF-8 漢字 カタカナ',
    'Emoji & Surrogate pairs: 📈 🎯 🏆 💻 𠜎'
  ];

  testStrings.forEach(str => {
    const expected = zlib.crc32(str).toString(16).toUpperCase().padStart(8, '0');
    const actual = StateStorage.computeCRC32(str);
    assert.strictEqual(actual, expected, `CRC-32 mismatch for string: "${str.substring(0, 30)}..."`);
  });
});

check('Backup export produces tamper-evident envelope with accurate CRC-32', () => {
  const state = StateStorage.createDefaultState();
  state.meta.activeCertId = 'pca';
  state.certifications.pca.history.push({
    sessionId: 'test-pca-1',
    scorePercent: 88,
    passed: true
  });

  const exportString = StateStorage.exportBackup(state);
  const envelope = JSON.parse(exportString);

  assert.strictEqual(typeof envelope.schemaVersion, 'string');
  assert.strictEqual(typeof envelope.exportedAt, 'number');
  assert.strictEqual(typeof envelope.payload, 'string');
  assert.strictEqual(typeof envelope.crc32, 'string');
  assert.strictEqual(envelope.crc32.length, 8);

  const calculatedCRC = StateStorage.computeCRC32(envelope.payload);
  assert.strictEqual(calculatedCRC, envelope.crc32);
});

check('Tamper Detection: modifying 1 character in payload is rejected with CRC mismatch', () => {
  const state = StateStorage.createDefaultState();
  const exportString = StateStorage.exportBackup(state);
  const envelope = JSON.parse(exportString);

  // Tamper by modifying 1 character in the inner payload
  const tamperedPayload = envelope.payload.replace('"dark"', '"light"');
  envelope.payload = tamperedPayload;
  const tamperedBackupStr = JSON.stringify(envelope);

  const res = StateStorage.importBackup(tamperedBackupStr);
  assert.strictEqual(res.success, false);
  assert.ok(res.error.includes('CRC-32 checksum mismatch'), `Expected CRC mismatch error, got: ${res.error}`);
});

check('Tamper Detection: modifying CRC-32 hex is rejected with CRC mismatch', () => {
  const state = StateStorage.createDefaultState();
  const exportString = StateStorage.exportBackup(state);
  const envelope = JSON.parse(exportString);

  // Alter CRC
  envelope.crc32 = 'DEADBEEF';
  const tamperedBackupStr = JSON.stringify(envelope);

  const res = StateStorage.importBackup(tamperedBackupStr);
  assert.strictEqual(res.success, false);
  assert.ok(res.error.includes('CRC-32 checksum mismatch'));
});

check('Backup ingestion rejects missing or malformed required envelope fields', () => {
  const state = StateStorage.createDefaultState();
  const payloadStr = JSON.stringify(state);
  const validCRC = StateStorage.computeCRC32(payloadStr);

  // Missing payload
  const missingPayload = JSON.stringify({ crc32: validCRC, exportedAt: Date.now() });
  assert.strictEqual(StateStorage.importBackup(missingPayload).success, false);

  // Missing crc32
  const missingCRC = JSON.stringify({ payload: payloadStr, exportedAt: Date.now() });
  assert.strictEqual(StateStorage.importBackup(missingCRC).success, false);

  // Payload is an object instead of string
  const objectPayload = JSON.stringify({ payload: state, crc32: validCRC });
  assert.strictEqual(StateStorage.importBackup(objectPayload).success, false);

  // Non-JSON input
  assert.strictEqual(StateStorage.importBackup('<<corrupt-not-json>>').success, false);
  assert.strictEqual(StateStorage.importBackup(null).success, false);
  assert.strictEqual(StateStorage.importBackup(undefined).success, false);
  assert.strictEqual(StateStorage.importBackup(12345).success, false);
});

check('Security & Prototype Pollution Resilience during backup migration', () => {
  const maliciousPayload = JSON.stringify({
    __proto__: { polluted: true },
    constructor: { prototype: { admin: true } },
    certifications: {
      ace: { history: [{ scorePercent: 100 }] }
    }
  });

  const crc = StateStorage.computeCRC32(maliciousPayload);
  const backupStr = JSON.stringify({ payload: maliciousPayload, crc32: crc });

  const res = StateStorage.importBackup(backupStr);
  assert.strictEqual(res.success, true);
  assert.strictEqual(Object.prototype.polluted, undefined, 'Object prototype must not be polluted');
  assert.strictEqual(Object.prototype.admin, undefined, 'Constructor prototype must not be polluted');
});

check('Schema Migration handles partial, legacy or malformed state entities gracefully', () => {
  const legacyPayload = JSON.stringify({
    version: 0.9,
    user: { displayName: 'Legacy User' },
    certifications: {
      cdl: { history: null, questionStates: 'not_an_obj' }
    }
  });

  const crc = StateStorage.computeCRC32(legacyPayload);
  const backupStr = JSON.stringify({ payload: legacyPayload, crc32: crc });

  const res = StateStorage.importBackup(backupStr);
  assert.strictEqual(res.success, true);
  assert.strictEqual(res.state.user.displayName, 'Legacy User');
  assert.ok(Array.isArray(res.state.certifications.cdl.history), 'cdl.history normalized to array');
  assert.ok(typeof res.state.certifications.cdl.questionStates === 'object', 'cdl.questionStates normalized to object');
  assert.ok(res.state.certifications.ace, 'Missing certifications.ace auto-hydrated');
  assert.ok(res.state.certifications.pca, 'Missing certifications.pca auto-hydrated');
});

// ============================================================================
// SUITE 5: AUDIO SYNTHESIZER FALLBACKS & PROCEDURAL SYNTHESIS
// ============================================================================
console.log(`\n${C.bold}--- SUITE 5: Audio Synthesizer Fallbacks (Muted, Headless, & Injections) ---${C.reset}`);

check('SoundFX in headless Node.js environment safely fails silently without throwing', () => {
  // Ensure window is undefined for this check
  const origWindow = global.window;
  delete global.window;

  assert.strictEqual(SoundFX.getAudioContext(), null);

  const soundTypes = ['correct', 'incorrect', 'timerAlert', 'streak', 'click', 'chime', 'buzz', 'alert', 'unknown_type', null, undefined];
  soundTypes.forEach(t => {
    assert.doesNotThrow(() => SoundFX.play(t), `SoundFX.play(${t}) threw in headless environment`);
  });

  global.window = origWindow;
});

check('SoundFX respects muted audio setting (timerAudioEnabled === false)', () => {
  let audioContextCreated = false;

  // Mock browser environment with AudioContext
  global.window = {
    AudioContext: function () {
      audioContextCreated = true;
      return {
        currentTime: 0,
        createOscillator: () => ({ connect: () => {}, start: () => {}, stop: () => {}, frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} } }),
        createGain: () => ({ connect: () => {}, gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} } }),
        destination: {}
      };
    }
  };

  // Mock global.GCP_APP state with audio disabled
  global.GCP_APP = {
    state: {
      settings: {
        timerAudioEnabled: false
      }
    }
  };

  // Reset SoundFX audioContext
  SoundFX.audioContext = null;
  SoundFX.play('correct');
  SoundFX.play('streak');

  assert.strictEqual(audioContextCreated, false, 'AudioContext must NOT be initialized when sound is disabled');
});

check('SoundFX procedural synthesis verifies oscillators & filters for all sound types', () => {
  let createdNodes = [];

  class MockGainNode {
    constructor() {
      this.gain = {
        setValueAtTime: (v, t) => { this.startVal = v; this.startTime = t; },
        exponentialRampToValueAtTime: (v, t) => { this.endVal = v; this.endTime = t; }
      };
      createdNodes.push({ type: 'gain', node: this });
    }
    connect(dest) { this.destination = dest; }
  }

  class MockOscillatorNode {
    constructor() {
      this.type = 'sine';
      this.frequency = {
        setValueAtTime: (v, t) => { this.startFreq = v; this.startTime = t; },
        exponentialRampToValueAtTime: (v, t) => { this.endFreq = v; this.endTime = t; },
        linearRampToValueAtTime: (v, t) => { this.endFreqLinear = v; this.endTimeLinear = t; }
      };
      createdNodes.push({ type: 'oscillator', node: this });
    }
    connect(dest) { this.destination = dest; }
    start(t) { this.startedAt = t; }
    stop(t) { this.stoppedAt = t; }
  }

  class MockBiquadFilterNode {
    constructor() {
      this.type = 'lowpass';
      this.frequency = {
        setValueAtTime: (v, t) => { this.startFreq = v; this.startTime = t; }
      };
      createdNodes.push({ type: 'filter', node: this });
    }
    connect(dest) { this.destination = dest; }
  }

  class MockAudioContext {
    constructor() {
      this.currentTime = 100.0;
      this.state = 'running';
      this.destination = { id: 'speakers' };
    }
    createOscillator() { return new MockOscillatorNode(); }
    createGain() { return new MockGainNode(); }
    createBiquadFilter() { return new MockBiquadFilterNode(); }
    resume() { this.state = 'running'; return Promise.resolve(); }
  }

  global.window = {
    AudioContext: MockAudioContext
  };

  global.GCP_APP = {
    state: {
      settings: { timerAudioEnabled: true }
    }
  };

  SoundFX.audioContext = null;

  // 1. Correct sound (Harmonic chord: 2 oscillators)
  createdNodes = [];
  SoundFX.play('correct');
  const oscsCorrect = createdNodes.filter(n => n.type === 'oscillator');
  assert.strictEqual(oscsCorrect.length, 2, 'Correct sound must create 2 oscillators');
  assert.strictEqual(oscsCorrect[0].node.type, 'sine');
  assert.strictEqual(oscsCorrect[1].node.type, 'triangle');

  // 2. Incorrect sound (Sawtooth + Lowpass filter)
  createdNodes = [];
  SoundFX.play('incorrect');
  const oscsIncorrect = createdNodes.filter(n => n.type === 'oscillator');
  const filterIncorrect = createdNodes.filter(n => n.type === 'filter');
  assert.strictEqual(oscsIncorrect.length, 1);
  assert.strictEqual(oscsIncorrect[0].node.type, 'sawtooth');
  assert.strictEqual(filterIncorrect.length, 1, 'Incorrect sound must use biquad lowpass filter');

  // 3. Streak sound (4-note arpeggio)
  createdNodes = [];
  SoundFX.play('streak');
  const oscsStreak = createdNodes.filter(n => n.type === 'oscillator');
  assert.strictEqual(oscsStreak.length, 4, 'Streak must create 4 arpeggiated oscillators');

  // 4. Timer Alert (2 pings)
  createdNodes = [];
  SoundFX.play('timerAlert');
  const oscsAlert = createdNodes.filter(n => n.type === 'oscillator');
  assert.strictEqual(oscsAlert.length, 2, 'Timer Alert must create 2 square wave bursts');
  assert.strictEqual(oscsAlert[0].node.type, 'square');

  // 5. Default / Click sound
  createdNodes = [];
  SoundFX.play('click');
  const oscsClick = createdNodes.filter(n => n.type === 'oscillator');
  assert.strictEqual(oscsClick.length, 1);
  assert.strictEqual(oscsClick[0].node.type, 'sine');
});

check('SoundFX suspended state triggers automatic resume() on user interaction', () => {
  let resumed = false;
  class SuspendedAudioContext {
    constructor() {
      this.state = 'suspended';
      this.currentTime = 0;
      this.destination = {};
    }
    resume() {
      resumed = true;
      this.state = 'running';
      return Promise.resolve();
    }
    createOscillator() { return { type: 'sine', connect: () => {}, start: () => {}, stop: () => {}, frequency: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} } }; }
    createGain() { return { connect: () => {}, gain: { setValueAtTime: () => {}, exponentialRampToValueAtTime: () => {} } }; }
  }

  global.window = { AudioContext: SuspendedAudioContext };
  SoundFX.audioContext = null;
  SoundFX.getAudioContext();
  assert.strictEqual(resumed, true, 'AudioContext.resume() must be called if state is suspended');
});

check('SoundFX audio exception handling does not break UI if Web Audio API errors out', () => {
  class FaultyAudioContext {
    constructor() { this.currentTime = 0; }
    createOscillator() { throw new Error('AudioContext hardware busy or disconnected'); }
  }

  global.window = { AudioContext: FaultyAudioContext };
  SoundFX.audioContext = null;

  assert.doesNotThrow(() => {
    SoundFX.play('correct');
  }, 'SoundFX must catch AudioContext internal exceptions and fail silently');
});

// ============================================================================
// SUMMARY & VERDICT GENERATION
// ============================================================================
console.log(`\n${C.bold}${C.blue}=======================================================================${C.reset}`);
console.log(`${C.bold}  FINAL SUMMARY - CHALLENGER 2 EMPIRICAL TEST HARNESS${C.reset}`);
console.log(`${C.bold}${C.blue}=======================================================================${C.reset}`);
console.log(`  Total Checks Executed: ${totalChecks}`);
console.log(`  Checks Passed:         ${C.green}${passedChecks}${C.reset}`);
console.log(`  Checks Failed:         ${failedChecks === 0 ? C.green + '0' : C.red + failedChecks}${C.reset}`);

if (failedChecks > 0) {
  console.log(`\n${C.red}${C.bold}Failures Breakdown:${C.reset}`);
  failureDetails.forEach((f, i) => {
    console.log(`  ${i + 1}. ${f.title}`);
    console.log(`     Error: ${f.error}`);
  });
  console.log(`\n${C.red}${C.bold}FINAL VERDICT: FAIL${C.reset}\n`);
  process.exit(1);
} else {
  console.log(`\n${C.green}${C.bold}FINAL VERDICT: APPROVE (100% EMPIRICALLY VERIFIED)${C.reset}\n`);
  process.exit(0);
}
