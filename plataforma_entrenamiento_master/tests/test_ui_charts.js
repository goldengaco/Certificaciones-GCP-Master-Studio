/**
 * test_ui_charts.js
 * 
 * Comprehensive Unit and Mathematical Verification Test Suite for js/ui_charts.js
 * Validates pure SVG generation, trigonometry calculations, color tiers, DOM rendering,
 * and CRC-32 backup/restore integration across CDL, ACE, and PCA exam profiles.
 */

const assert = require('assert');
const UICharts = require('../js/ui_charts.js');

let totalTests = 0;
let passedTests = 0;

function runTest(testName, testFn) {
  totalTests++;
  try {
    testFn();
    console.log(`  [PASS] ${testName}`);
    passedTests++;
  } catch (err) {
    console.error(`  [FAIL] ${testName}:`, err.message);
  }
}

console.log('================================================================');
console.log('  TEST SUITE: Pure SVG Visualization Engine (js/ui_charts.js)');
console.log('================================================================\n');

// -----------------------------------------------------------------------------
// 1. RADAR / SPIDER CHART ENGINE TESTS
// -----------------------------------------------------------------------------
console.log('--- 1. Radar Chart Engine ---');

runTest('RadarChart exports and methods exist', () => {
  assert.strictEqual(typeof UICharts.renderRadar, 'function');
  assert.strictEqual(typeof UICharts.RadarChart.generateSVG, 'function');
  assert.strictEqual(typeof UICharts.RadarChart.render, 'function');
});

runTest('RadarChart generates valid SVG for CDL (4 domains)', () => {
  const cdlDomains = [
    { domainId: 'CDL-D1', name: 'Digital Transformation', shortName: 'Transf. Digital', score: 80, weight: 10 },
    { domainId: 'CDL-D2', name: 'Innovating with Data', shortName: 'Datos & IA', score: 65, weight: 30 },
    { domainId: 'CDL-D3', name: 'Infrastructure Modernization', shortName: 'Infraestructura', score: 75, weight: 30 },
    { domainId: 'CDL-D4', name: 'Security & Operations', shortName: 'Seguridad', score: 90, weight: 30 }
  ];

  const svg = UICharts.RadarChart.generateSVG({ domains: cdlDomains, width: 420, height: 380 });
  assert.ok(svg.includes('<svg'), 'Must contain <svg opening tag');
  assert.ok(svg.includes('viewBox="0 0 420 380"'), 'Must have correct viewBox');
  assert.ok(svg.includes('CDL-D1') && svg.includes('CDL-D4'), 'Must render all domain codes');
  assert.ok(svg.includes('Transf. Digital'), 'Must render domain labels');
  assert.ok(svg.includes('class="radar-benchmark"'), 'Must include 70% benchmark polygon');
  assert.ok(svg.includes('class="radar-user-area"'), 'Must include user score area');
  assert.ok(svg.includes('class="radar-point"'), 'Must include interactive hover dots');
});

runTest('RadarChart generates valid SVG for ACE (5 domains)', () => {
  const aceDomains = [
    { domainId: 'ACE-D1', shortName: 'Setup Cloud Environment', score: 85, weight: 18 },
    { domainId: 'ACE-D2', shortName: 'Planning Solution', score: 60, weight: 18 },
    { domainId: 'ACE-D3', shortName: 'Deploying Solutions', score: 70, weight: 25 },
    { domainId: 'ACE-D4', shortName: 'Ensuring Operation', score: 95, weight: 21 },
    { domainId: 'ACE-D5', shortName: 'Configuring Security', score: 50, weight: 18 }
  ];

  const svg = UICharts.RadarChart.generateSVG({ domains: aceDomains });
  assert.ok(svg.includes('ACE-D1') && svg.includes('ACE-D5'), 'Must render 5 domain codes');
  // 5 grid levels + 1 benchmark + 1 user polygon
  const polygonCount = (svg.match(/<polygon/g) || []).length;
  assert.ok(polygonCount >= 7, `Expected at least 7 polygon tags (5 grid + 1 bench + 1 user), got ${polygonCount}`);
});

runTest('RadarChart generates valid SVG for PCA (6 domains)', () => {
  const pcaDomains = [
    { domainId: 'PCA-D1', shortName: 'Designing Solutions', score: 75, weight: 24 },
    { domainId: 'PCA-D2', shortName: 'Managing Infrastructure', score: 80, weight: 15 },
    { domainId: 'PCA-D3', shortName: 'Security & Compliance', score: 65, weight: 16 },
    { domainId: 'PCA-D4', shortName: 'Technical Processes', score: 90, weight: 18 },
    { domainId: 'PCA-D5', shortName: 'Optimizing Solutions', score: 70, weight: 14 },
    { domainId: 'PCA-D6', shortName: 'Operations & Reliability', score: 85, weight: 13 }
  ];

  const svg = UICharts.RadarChart.generateSVG({ domains: pcaDomains });
  assert.ok(svg.includes('PCA-D1') && svg.includes('PCA-D6'), 'Must render all 6 PCA domain codes');
});

runTest('RadarChart handles empty/insufficient domains gracefully', () => {
  const emptySvg = UICharts.RadarChart.generateSVG({ domains: [] });
  assert.ok(emptySvg.includes('chart-empty-state'), 'Must return empty state placeholder for N < 3');
});

// -----------------------------------------------------------------------------
// 2. RADIAL READINESS GAUGE ENGINE TESTS
// -----------------------------------------------------------------------------
console.log('\n--- 2. Radial Readiness Gauge Engine ---');

runTest('RadialGauge exports and methods exist', () => {
  assert.strictEqual(typeof UICharts.renderRadialGauge, 'function');
  assert.strictEqual(typeof UICharts.renderGauge, 'function');
  assert.strictEqual(typeof UICharts.RadialGauge.generateSVG, 'function');
});

runTest('RadialGauge calculates stroke-dasharray and stroke-dashoffset accurately', () => {
  const size = 220;
  const strokeWidth = 14;
  const radius = size / 2 - strokeWidth - 6; // 110 - 14 - 6 = 90
  const expectedCircumference = 2 * Math.PI * radius; // ~565.487

  // Test at 70% passing score
  const svg70 = UICharts.RadialGauge.generateSVG({ percentage: 70, size, strokeWidth });
  assert.ok(svg70.includes(`stroke-dasharray="${expectedCircumference.toFixed(2)}"`), 'Dasharray matches 2*PI*r');
  
  const expectedOffset70 = expectedCircumference * (1 - 0.70);
  assert.ok(svg70.includes(`stroke-dashoffset="${expectedOffset70.toFixed(2)}"`), 'Dashoffset correctly calculated at 70%');
  assert.ok(svg70.includes('70.0'), 'Must display 70.0% text');
  assert.ok(svg70.includes('LISTO PARA EXAMEN'), 'Must display tier badge for 70%');
});

runTest('RadialGauge color tier calibration', () => {
  // <50% Red
  const svgRed = UICharts.RadialGauge.generateSVG({ percentage: 42.5 });
  assert.ok(svgRed.includes('tier-danger') && svgRed.includes('ALTO RIESGO') && svgRed.includes('#d93025'), 'Danger tier <50%');

  // 50-69% Yellow
  const svgYellow = UICharts.RadialGauge.generateSVG({ percentage: 62.0 });
  assert.ok(svgYellow.includes('tier-progress') && svgYellow.includes('EN PREPARACIÓN') && svgYellow.includes('#f9ab00'), 'Progress tier 50-69%');

  // 70-84% Green
  const svgGreen = UICharts.RadialGauge.generateSVG({ percentage: 78.5 });
  assert.ok(svgGreen.includes('tier-ready') && svgGreen.includes('LISTO PARA EXAMEN') && svgGreen.includes('#1e8e3e'), 'Ready tier 70-84%');

  // >=85% Blue/Mastery
  const svgBlue = UICharts.RadialGauge.generateSVG({ percentage: 92.0 });
  assert.ok(svgBlue.includes('tier-mastery') && svgBlue.includes('DOMINIO SUPERIOR') && svgBlue.includes('#1a73e8'), 'Mastery tier >=85%');
});

runTest('RadialGauge clamps out-of-bounds scores safely', () => {
  const svgNegative = UICharts.RadialGauge.generateSVG({ percentage: -15 });
  assert.ok(svgNegative.includes('0.0%') || svgNegative.includes('0.0'), 'Clamps negative score to 0%');

  const svgOverflow = UICharts.RadialGauge.generateSVG({ percentage: 125 });
  assert.ok(svgOverflow.includes('100.0%') || svgOverflow.includes('100.0'), 'Clamps overflow score to 100%');
});

// -----------------------------------------------------------------------------
// 3. HISTORICAL PROGRESSION TIMELINE ENGINE TESTS
// -----------------------------------------------------------------------------
console.log('\n--- 3. Historical Progression Timeline Engine ---');

runTest('TimelineChart exports and methods exist', () => {
  assert.strictEqual(typeof UICharts.renderTimeline, 'function');
  assert.strictEqual(typeof UICharts.TimelineChart.generateSVG, 'function');
});

runTest('TimelineChart renders empty state when history is empty', () => {
  const emptySvg = UICharts.TimelineChart.generateSVG({ history: [] });
  assert.ok(emptySvg.includes('timeline-empty-card'), 'Must return empty state card');
  assert.ok(emptySvg.includes('Sin Historial de Exámenes'), 'Must show descriptive title');
});

runTest('TimelineChart renders progression points, polyline, and 70% threshold', () => {
  const history = [
    { sessionId: 'sim-1', timestamp: 1771500000000, scorePercent: 54, passed: false },
    { sessionId: 'sim-2', timestamp: 1771586400000, scorePercent: 68, passed: false },
    { sessionId: 'sim-3', timestamp: 1771672800000, scorePercent: 74, passed: true },
    { sessionId: 'sim-4', timestamp: 1771759200000, scorePercent: 88, passed: true }
  ];

  const svg = UICharts.TimelineChart.generateSVG({ history, width: 600, height: 240, passingScore: 70 });
  assert.ok(svg.includes('<polyline'), 'Must render polyline trend line');
  assert.ok(svg.includes('class="timeline-area"'), 'Must render gradient area polygon');
  assert.ok(svg.includes('Meta: 70% (Aprobatorio)'), 'Must render 70% passing threshold label');
  
  const dotsCount = (svg.match(/class="timeline-dot"/g) || []).length;
  assert.strictEqual(dotsCount, 4, 'Must render exactly 4 data point dots');
});

// -----------------------------------------------------------------------------
// 4. DOMAIN BREAKDOWN STACKED BARS ENGINE TESTS
// -----------------------------------------------------------------------------
console.log('\n--- 4. Domain Breakdown Stacked Bars Engine ---');

runTest('DomainBars exports and methods exist', () => {
  assert.strictEqual(typeof UICharts.renderDomainBars, 'function');
  assert.strictEqual(typeof UICharts.DomainBars.generateHTML, 'function');
});

runTest('DomainBars renders stacked mastery segments and 70% benchmark notch', () => {
  const domains = [
    { id: 'ACE-D1', name: 'Setting up a cloud solution environment', shortName: 'Entorno de Nube', weight: 18, total: 50, mastered: 25, review: 10, learning: 8, weak: 7, accuracy: 78.5 },
    { id: 'ACE-D2', name: 'Planning and configuring a cloud solution', shortName: 'Planificación & Config', weight: 18, total: 50, mastered: 15, review: 5, learning: 10, weak: 20, accuracy: 62.0 }
  ];

  const html = UICharts.DomainBars.generateHTML({ domains });
  assert.ok(html.includes('ACE-D1') && html.includes('ACE-D2'), 'Must contain domain IDs');
  assert.ok(html.includes('seg-mastered'), 'Must contain mastered segment');
  assert.ok(html.includes('seg-review'), 'Must contain review segment');
  assert.ok(html.includes('seg-learning'), 'Must contain learning segment');
  assert.ok(html.includes('seg-weak'), 'Must contain weak segment');
  assert.ok(html.includes('Meta Aprobatoria 70%'), 'Must contain 70% target notch');
  assert.ok(html.includes('78.5%'), 'Must display accurate domain percentage');
});

// -----------------------------------------------------------------------------
// 5. DOM RENDERING & CONTAINER MOCK TESTS
// -----------------------------------------------------------------------------
console.log('\n--- 5. DOM Container Rendering Tests ---');

runTest('render methods accept mock DOM container objects', () => {
  const mockContainer = {
    innerHTML: ''
  };

  // Test renderRadar with mock element
  UICharts.renderRadar(mockContainer, [
    { domainId: 'D1', score: 80 },
    { domainId: 'D2', score: 70 },
    { domainId: 'D3', score: 90 }
  ]);
  assert.ok(mockContainer.innerHTML.includes('<svg'), 'renderRadar writes SVG to mock element innerHTML');

  // Test renderRadialGauge
  mockContainer.innerHTML = '';
  UICharts.renderRadialGauge(mockContainer, 82.5);
  assert.ok(mockContainer.innerHTML.includes('82.5'), 'renderRadialGauge writes gauge to mock element');

  // Test renderTimeline
  mockContainer.innerHTML = '';
  UICharts.renderTimeline(mockContainer, [{ scorePercent: 85 }]);
  assert.ok(mockContainer.innerHTML.includes('timeline-dot'), 'renderTimeline writes timeline to mock element');

  // Test renderDomainBars
  mockContainer.innerHTML = '';
  UICharts.renderDomainBars(mockContainer, [{ id: 'D1', total: 50, mastered: 35, accuracy: 70 }]);
  assert.ok(mockContainer.innerHTML.includes('domain-card-item'), 'renderDomainBars writes domain list to mock element');
});

// -----------------------------------------------------------------------------
// 6. BACKUP / RESTORE INTEGRATION TESTS
// -----------------------------------------------------------------------------
console.log('\n--- 6. Backup & Restore Integration Tests ---');

runTest('BackupRestore methods exist on UICharts', () => {
  assert.strictEqual(typeof UICharts.setupBackupRestore, 'function');
  assert.strictEqual(typeof UICharts.exportBackup, 'function');
  assert.strictEqual(typeof UICharts.importBackup, 'function');
  assert.strictEqual(typeof UICharts.resetFactory, 'function');
});

runTest('BackupRestore integrates cleanly with GCP_STATE if available', () => {
  const StateStorage = require('../js/state.js');
  
  // Mock window and GCP_STATE
  global.window = {
    GCP_STATE: StateStorage,
    dispatchEvent: (ev) => {
      global.window._lastDispatchedEvent = ev;
    }
  };

  const defaultState = StateStorage.createDefaultState();
  defaultState.meta.activeCertId = 'pca';
  
  const backupStr = StateStorage.exportBackup(defaultState);
  assert.ok(typeof backupStr === 'string');

  const parsed = JSON.parse(backupStr);
  assert.strictEqual(typeof parsed.crc32, 'string');
  assert.strictEqual(parsed.crc32.length, 8);

  const importRes = StateStorage.importBackup(backupStr);
  assert.strictEqual(importRes.success, true);
  assert.strictEqual(importRes.state.meta.activeCertId, 'pca');
});

// -----------------------------------------------------------------------------
// 7. XSS SANITIZATION & SECURITY INJECTIONS
// -----------------------------------------------------------------------------
console.log('\n--- 7. Security & XSS Sanitization Tests ---');

runTest('UICharts escapes dangerous characters in domain titles and tooltips', () => {
  const maliciousDomains = [
    { domainId: '<script>alert(1)</script>', shortName: 'Domain " & <evil>', score: 50 },
    { domainId: 'D2', name: 'Safe Domain', score: 70 },
    { domainId: 'D3', name: 'Safe Domain 2', score: 80 }
  ];

  const radarSvg = UICharts.RadarChart.generateSVG({ domains: maliciousDomains });
  assert.ok(!radarSvg.includes('<script>'), 'Radar SVG must NOT contain raw unescaped <script>');
  assert.ok(radarSvg.includes('&lt;script&gt;'), 'Radar SVG must escape angle brackets');
  assert.ok(radarSvg.includes('&amp;'), 'Radar SVG must escape ampersands');

  const barsHtml = UICharts.DomainBars.generateHTML({ domains: maliciousDomains });
  assert.ok(!barsHtml.includes('<script>'), 'Domain bars must NOT contain raw <script>');
  assert.ok(barsHtml.includes('&lt;script&gt;'), 'Domain bars must escape script tags');
});

// -----------------------------------------------------------------------------
// 8. FLEXIBLE SIGNATURES & API COMPATIBILITY
// -----------------------------------------------------------------------------
console.log('\n--- 8. Flexible Signatures & API Compatibility Tests ---');

runTest('renderRadar handles (container, scoresMap, options) signature', () => {
  const mockContainer = { innerHTML: '' };
  const scoreMap = {
    'CDL-D1': 90,
    'CDL-D2': 75,
    'CDL-D3': 80,
    'CDL-D4': 85
  };
  
  UICharts.renderRadar(mockContainer, scoreMap, { width: 400, height: 360 });
  assert.ok(mockContainer.innerHTML.includes('CDL-D1') && mockContainer.innerHTML.includes('CDL-D4'));
  assert.ok(mockContainer.innerHTML.includes('viewBox="0 0 400 360"'));
});

runTest('renderRadialGauge handles (container, percentageNumber) signature', () => {
  const mockContainer = { innerHTML: '' };
  UICharts.renderRadialGauge(mockContainer, 72.4);
  assert.ok(mockContainer.innerHTML.includes('72.4'));
  assert.ok(mockContainer.innerHTML.includes('LISTO PARA EXAMEN'));
});

runTest('renderTimeline handles (container, historyArray) signature', () => {
  const mockContainer = { innerHTML: '' };
  UICharts.renderTimeline(mockContainer, [
    { scorePercent: 65, timestamp: 1771500000000 },
    { scorePercent: 78, timestamp: 1771586400000 }
  ]);
  assert.ok(mockContainer.innerHTML.includes('timeline-dot'));
  assert.ok(mockContainer.innerHTML.includes('Meta: 70% (Aprobatorio)'));
});

runTest('renderDomainBars handles (container, domainArray) signature', () => {
  const mockContainer = { innerHTML: '' };
  UICharts.renderDomainBars(mockContainer, [
    { id: 'PCA-D1', total: 60, mastered: 40, accuracy: 85 }
  ]);
  assert.ok(mockContainer.innerHTML.includes('PCA-D1'));
  assert.ok(mockContainer.innerHTML.includes('seg-mastered'));
});

console.log('\n================================================================');
console.log(`  TEST RESULTS: ${passedTests} / ${totalTests} Passed (100% Target)`);
console.log('================================================================\n');

if (passedTests !== totalTests) {
  process.exit(1);
} else {
  process.exit(0);
}

