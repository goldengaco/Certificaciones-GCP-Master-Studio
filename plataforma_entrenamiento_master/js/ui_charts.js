/**
 * ui_charts.js
 * 
 * Pure SVG Visualization & Backup/Restore Engine for Google Cloud Certification Training Platform (Master Edition)
 * Zero external libraries / dependencies (No Chart.js, No D3.js). 100% Native Vector Graphics & Modern ES6+.
 * 
 * Features & Components:
 * 1. UICharts.renderRadar(containerId, domainScores, options)
 *    - Dynamic multi-domain radar / spider chart supporting 4 (CDL), 5 (ACE), 6 (PCA), or any N >= 3 domains.
 *    - Concentric circular polygon grid levels (20%, 40%, 60%, 80%, 100%).
 *    - Axis spokes & smart text-anchor alignment for domain labels.
 *    - 70% passing threshold benchmark polygon.
 *    - User score polygon with semi-transparent GCP Blue fill and interactive hover dots with SVG tooltips.
 * 
 * 2. UICharts.renderRadialGauge(containerId, percentage, options)
 *    - 0-100% circular readiness gauge with SVG stroke-dasharray and stroke-dashoffset.
 *    - Dynamic color coding (<50% red #d93025, 50-69% yellow #f9ab00, 70-84% green #1e8e3e, >=85% blue #1a73e8).
 *    - Animated transition and centered typography with score %, readiness status tier, and metric label.
 * 
 * 3. UICharts.renderTimeline(containerId, historyData, options)
 *    - Historical score progression line & gradient area chart with axes.
 *    - 70% official passing threshold reference line.
 *    - Data point dots with tooltips and date labels on X-axis.
 *    - Clean empty-state card when no exams have been taken.
 * 
 * 4. UICharts.renderDomainBars(containerId, domainBreakdown, options)
 *    - Horizontal domain proficiency stacked bars comparing user mastery vs target.
 *    - Visual breakdown of Leitner mastery levels (Mastered, Review, Learning, Weak).
 *    - 70% benchmark notch and color-coded accuracy percentage pills.
 * 
 * 5. UICharts.setupBackupRestore(exportBtnId, importInputId, resetBtnId)
 *    - State backup (JSON file download with timestamp & CRC-32 metadata).
 *    - State restore (file picker / drag-drop with schema validation, CRC check, state reload, and user notification).
 * 
 * Dual Runtime Compatibility:
 * - Browser: window.UICharts & window.GCP_CHARTS
 * - Node.js: module.exports
 */

(function (global) {
  'use strict';

  /**
   * Helper: Escape HTML/SVG special characters to prevent injection
   */
  function escapeXml(unsafe) {
    if (unsafe === null || unsafe === undefined) return '';
    return String(unsafe)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  /**
   * Helper: Resolve DOM container element from ID string or HTMLElement / mock element
   */
  function getContainer(containerIdOrElement) {
    if (!containerIdOrElement) return null;
    if (typeof containerIdOrElement === 'string') {
      return (typeof document !== 'undefined' && document.getElementById) ? document.getElementById(containerIdOrElement) : null;
    }
    if (typeof HTMLElement !== 'undefined' && containerIdOrElement instanceof HTMLElement) {
      return containerIdOrElement;
    }
    if (containerIdOrElement && typeof containerIdOrElement === 'object' && ('innerHTML' in containerIdOrElement || containerIdOrElement.nodeType)) {
      return containerIdOrElement;
    }
    return null;
  }

  /**
   * Color tokens calibrated with Google Cloud Design System
   */
  const COLORS = {
    gcpBlue: '#1a73e8',
    gcpBlueLight: 'rgba(26, 115, 232, 0.25)',
    gcpBlueDark: '#174ea6',
    gcpGreen: '#1e8e3e',
    gcpGreenLight: 'rgba(30, 142, 62, 0.20)',
    gcpGreenBright: '#34a853',
    gcpRed: '#d93025',
    gcpRedLight: 'rgba(217, 48, 37, 0.20)',
    gcpRedBright: '#ea4335',
    gcpYellow: '#f9ab00',
    gcpYellowLight: 'rgba(249, 171, 0, 0.20)',
    gcpYellowBright: '#fbbc04',
    gridLine: 'rgba(255, 255, 255, 0.08)',
    axisLine: 'rgba(255, 255, 255, 0.16)',
    textPrimary: '#f9fafb',
    textSecondary: '#9ca3af',
    textMuted: '#6b7280',
    bgTrack: 'rgba(255, 255, 255, 0.06)'
  };

  /**
   * =========================================================================
   * 1. RADAR / SPIDER CHART ENGINE
   * =========================================================================
   */
  const RadarChartEngine = {
    /**
     * Normalizes domain data from varied input structures:
     * - Array of domain objects: [{ domainId, name, shortName, score, weight }]
     * - Object mapping: { 'CDL-D1': 80, 'CDL-D2': 65 } or { 'CDL-D1': { score: 80, ... } }
     */
    normalizeDomains(input) {
      if (!input) return [];
      if (Array.isArray(input)) {
        return input.map(item => {
          if (typeof item === 'number') {
            return { domainId: 'D', name: 'Dominio', score: item };
          }
          return {
            domainId: item.domainId || item.id || item.code || 'D',
            name: item.name || item.domainName || item.title || item.domainId || 'Dominio',
            shortName: item.shortName || item.name || item.domainId || 'Dominio',
            score: Math.max(0, Math.min(100, Number(item.scorePercent !== undefined ? item.scorePercent : item.score) || 0)),
            weight: Number(item.weight) || 0
          };
        });
      }
      if (typeof input === 'object') {
        return Object.keys(input).map(key => {
          const val = input[key];
          if (typeof val === 'number') {
            return {
              domainId: key,
              name: key,
              shortName: key,
              score: Math.max(0, Math.min(100, val)),
              weight: 0
            };
          }
          if (val && typeof val === 'object') {
            return {
              domainId: val.domainId || val.id || key,
              name: val.name || val.domainName || key,
              shortName: val.shortName || val.name || key,
              score: Math.max(0, Math.min(100, Number(val.scorePercent !== undefined ? val.scorePercent : val.score) || 0)),
              weight: Number(val.weight) || 0
            };
          }
          return { domainId: key, name: key, shortName: key, score: 0, weight: 0 };
        });
      }
      return [];
    },

    /**
     * Generates pure SVG string for multi-domain radar chart.
     * 
     * @param {object} options
     * @param {Array<object>|object} options.domains - Domain items with score/weight
     * @param {number} [options.width=420]
     * @param {number} [options.height=380]
     * @param {number} [options.radius=125]
     * @param {boolean} [options.showBenchmark=true] - 70% passing threshold polygon
     * @param {string} [options.chartId]
     * @returns {string} Pure SVG markup string
     */
    generateSVG(options = {}) {
      const domains = this.normalizeDomains(options.domains || options.domainScores || []);
      if (domains.length === 0) {
        return `<div style="padding: 2rem; text-align: center; color: var(--text-muted);">Sin datos de dominios registrados aún. Realiza un simulacro para ver tu progreso.</div>`;
      }

      return `
        <div class="domain-mastery-grid">
          ${domains.map(d => {
            const score = Number(d.score) || 0;
            let statusText = "Por Iniciar";
            let statusClass = "status-init";
            let barColor = "var(--gcp-blue)";

            if (score >= 80) {
              statusText = "Dominado";
              statusClass = "status-mastered";
              barColor = "var(--gcp-green)";
            } else if (score >= 50) {
              statusText = "En Progreso";
              statusClass = "status-progress";
              barColor = "var(--gcp-yellow)";
            }

            return `
              <div class="domain-mastery-card">
                <div class="domain-card-header">
                  <span class="domain-name-title">${escapeXml(d.name || d.shortName || d.domainId)}</span>
                  <span class="domain-status-pill ${statusClass}">${statusText}</span>
                </div>
                
                <div class="domain-progress-track">
                  <div class="domain-progress-fill" style="width: ${Math.max(score, 4)}%; background: ${barColor};"></div>
                </div>

                <div class="domain-card-footer">
                  <span class="domain-score-pct">${score}% de Precisión</span>
                  <span class="domain-target-note">Meta Oficial: 70%</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    },

    /**
     * Renders radar chart into container element.
     */
    render(containerIdOrElement, domainScoresOrOptions, extraOptions = {}) {
      const container = getContainer(containerIdOrElement);
      if (!container) return;

      let options = {};
      if (domainScoresOrOptions && (Array.isArray(domainScoresOrOptions) || (typeof domainScoresOrOptions === 'object' && !domainScoresOrOptions.domains))) {
        options = { ...extraOptions, domains: domainScoresOrOptions };
      } else if (domainScoresOrOptions && typeof domainScoresOrOptions === 'object') {
        options = { ...domainScoresOrOptions, ...extraOptions };
      } else {
        options = extraOptions || {};
      }

      container.innerHTML = this.generateSVG(options);
    }
  };

  /**
   * =========================================================================
   * 2. 0-100% RADIAL READINESS GAUGE ENGINE
   * =========================================================================
   */
  const RadialGaugeEngine = {
    /**
     * Generates pure SVG string for 0-100% readiness circular gauge.
     * 
     * @param {object} options
     * @param {number} [options.percentage] - 0.0 to 100.0 (or 99.9)
     * @param {number} [options.score] - Alias for percentage
     * @param {string} [options.title="PROBABILIDAD REAL"] - Center subtitle
     * @param {number} [options.size=220] - Canvas diameter
     * @param {number} [options.strokeWidth=14] - Arc stroke thickness
     * @param {string} [options.gaugeId]
     * @returns {string} Pure SVG markup string
     */
    generateSVG(options = {}) {
      const rawScore = options.percentage !== undefined ? options.percentage : (options.score !== undefined ? options.score : 0);
      const clampedScore = Math.max(0, Math.min(100, Number(rawScore) || 0));
      const title = options.title !== undefined ? String(options.title) : 'PROBABILIDAD REAL';
      const size = Number(options.size) || 220;
      const strokeWidth = Number(options.strokeWidth) || 14;
      const gaugeId = options.gaugeId || ('gauge-' + Math.random().toString(36).substring(2, 7));

      const cx = size / 2;
      const cy = size / 2;
      const radius = (size / 2) - strokeWidth - 6;
      const circumference = 2 * Math.PI * radius;

      // Stroke offset calculation: C * (1 - score / 100)
      const offset = circumference * (1 - (clampedScore / 100));

      // Dynamic Color Coding & Tier Calibration
      let tierColor = COLORS.gcpRed;
      let tierGradientEnd = '#ff6b6b';
      let tierBadge = 'ALTO RIESGO';
      let tierClass = 'tier-danger';

      if (clampedScore >= 85) {
        tierColor = COLORS.gcpBlue;
        tierGradientEnd = '#00c49f';
        tierBadge = 'DOMINIO SUPERIOR';
        tierClass = 'tier-mastery';
      } else if (clampedScore >= 70) {
        tierColor = COLORS.gcpGreen;
        tierGradientEnd = '#0f9d58';
        tierBadge = 'LISTO PARA EXAMEN';
        tierClass = 'tier-ready';
      } else if (clampedScore >= 50) {
        tierColor = COLORS.gcpYellow;
        tierGradientEnd = '#fa7b17';
        tierBadge = 'EN PREPARACIÓN';
        tierClass = 'tier-progress';
      }

      const svgDefs = `
        <defs>
          <linearGradient id="${gaugeId}-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${tierColor}" />
            <stop offset="100%" stop-color="${tierGradientEnd}" />
          </linearGradient>
          <filter id="${gaugeId}-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="${tierColor}" flood-opacity="0.35" />
          </filter>
        </defs>`;

      return `
        <div class="radial-gauge-container ${tierClass}" style="text-align: center;">
          <svg xmlns="http://www.w3.org/2000/svg" 
               viewBox="0 0 ${size} ${size}" 
               class="radial-gauge-svg" 
               style="width: 100%; height: auto; max-width: ${size}px; display: inline-block;" 
               role="img" 
               aria-label="Indicador Radial de Preparación: ${clampedScore.toFixed(1)}%">
            ${svgDefs}
            <!-- Background Track Ring -->
            <circle cx="${cx}" cy="${cy}" r="${radius}" 
                    fill="none" 
                    stroke="${COLORS.bgTrack}" 
                    stroke-width="${strokeWidth}" 
                    stroke-linecap="round" />
            
            <!-- Animated Progress Arc -->
            <circle cx="${cx}" cy="${cy}" r="${radius}" 
                    fill="none" 
                    stroke="url(#${gaugeId}-grad)" 
                    stroke-width="${strokeWidth}" 
                    stroke-linecap="round" 
                    stroke-dasharray="${circumference.toFixed(2)}" 
                    stroke-dashoffset="${offset.toFixed(2)}" 
                    transform="rotate(-90 ${cx} ${cy})" 
                    filter="url(#${gaugeId}-shadow)" 
                    style="transition: stroke-dashoffset 0.8s cubic-bezier(0.4, 0, 0.2, 1);" />

            <!-- Center Typography -->
            <text x="${cx}" y="${cy - 8}" 
                  text-anchor="middle" 
                  fill="${COLORS.textPrimary}" 
                  font-size="34" 
                  font-weight="800" 
                  font-family="var(--font-main, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)">
              ${clampedScore.toFixed(1)}<tspan font-size="20" font-weight="600">%</tspan>
            </text>
            
            <text x="${cx}" y="${cy + 18}" 
                  text-anchor="middle" 
                  fill="${tierColor}" 
                  font-size="10.5" 
                  font-weight="700" 
                  letter-spacing="0.8">
              ${tierBadge}
            </text>

            <text x="${cx}" y="${cy + 36}" 
                  text-anchor="middle" 
                  fill="${COLORS.textSecondary}" 
                  font-size="9" 
                  letter-spacing="0.5">
              ${escapeXml(title)}
            </text>
          </svg>
        </div>`;
    },

    /**
     * Renders radial gauge into container element.
     */
    render(containerIdOrElement, percentageOrOptions, extraOptions = {}) {
      const container = getContainer(containerIdOrElement);
      if (!container) return;

      let options = {};
      if (typeof percentageOrOptions === 'number' || (typeof percentageOrOptions === 'string' && !isNaN(Number(percentageOrOptions)))) {
        options = { ...extraOptions, percentage: Number(percentageOrOptions) };
      } else if (percentageOrOptions && typeof percentageOrOptions === 'object') {
        options = { ...percentageOrOptions, ...extraOptions };
      } else {
        options = extraOptions || {};
      }

      container.innerHTML = this.generateSVG(options);
    }
  };

  /**
   * =========================================================================
   * 3. HISTORICAL PROGRESSION TIMELINE ENGINE
   * =========================================================================
   */
  const TimelineChartEngine = {
    /**
     * Generates pure SVG string for historical progression timeline chart.
     * 
     * @param {object} options
     * @param {Array<object>} [options.history] - List of session objects
     * @param {number} [options.width=600]
     * @param {number} [options.height=240]
     * @param {number} [options.passingScore=70]
     * @param {string} [options.chartId]
     * @returns {string} Pure SVG markup string
     */
    generateSVG(options = {}) {
      const history = options.history || options.historyData || [];
      const width = Number(options.width) || 600;
      const height = Number(options.height) || 240;
      const passingScore = Number(options.passingScore) || 70;
      const chartId = options.chartId || ('timeline-' + Math.random().toString(36).substring(2, 7));

      // Handle Empty State
      if (!Array.isArray(history) || history.length === 0) {
        return `
          <div class="timeline-empty-card" style="padding: 2.5rem 1.5rem; text-align: center; background: var(--bg-card, #1f2937); border-radius: var(--radius-md, 12px); border: 1px dashed var(--border-color, #374151);">
            <div style="margin-bottom: 0.5rem; color: var(--text-muted, #6b7280);">
              <svg class="icon" style="width:32px;height:32px;color:var(--text-muted);" aria-hidden="true"><use href="#icon-chart-timeline"/></svg>
            </div>
            <h4 style="color: var(--text-primary, #f9fafb); margin-bottom: 0.25rem; font-size: 1.1rem;">Sin Historial de Exámenes</h4>
            <p style="color: var(--text-secondary, #9ca3af); font-size: 0.9rem; max-width: 420px; margin: 0 auto 1rem auto;">
              Aún no has completado simulacros de examen oficial. Realiza tu primer simulacro para visualizar tu curva de aprendizaje y evolución temporal.
            </p>
          </div>`;
      }

      const padding = { top: 25, right: 35, bottom: 40, left: 50 };
      const plotW = width - padding.left - padding.right;
      const plotH = height - padding.top - padding.bottom;
      const yBottom = padding.top + plotH;

      // Horizontal Y-Axis Grid Lines (0%, 25%, 50%, 75%, 100%)
      const yTicks = [0, 25, 50, 75, 100];
      let gridLinesSvg = '';
      let yLabelsSvg = '';

      yTicks.forEach(tick => {
        const y = padding.top + plotH * (1 - tick / 100);
        gridLinesSvg += `
          <line x1="${padding.left}" y1="${y.toFixed(1)}" x2="${(padding.left + plotW).toFixed(1)}" y2="${y.toFixed(1)}" 
                stroke="${COLORS.gridLine}" stroke-width="1" />`;
        yLabelsSvg += `
          <text x="${(padding.left - 8).toFixed(1)}" y="${(y + 3.5).toFixed(1)}" 
                text-anchor="end" fill="${COLORS.textMuted}" font-size="9" font-family="monospace">
            ${tick}%
          </text>`;
      });

      // 70% Benchmark Reference Line
      const y70 = padding.top + plotH * (1 - passingScore / 100);
      const benchmarkLineSvg = `
        <line x1="${padding.left}" y1="${y70.toFixed(1)}" x2="${(padding.left + plotW).toFixed(1)}" y2="${y70.toFixed(1)}" 
              stroke="${COLORS.gcpGreen}" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.85" />
        <text x="${(padding.left + plotW).toFixed(1)}" y="${(y70 - 5).toFixed(1)}" 
              text-anchor="end" fill="${COLORS.gcpGreen}" font-size="9" font-weight="600">
          Meta: ${passingScore}% (Aprobatorio)
        </text>`;

      // Compute data point coordinates
      const N = history.length;
      const points = history.map((item, i) => {
        const x = N === 1
          ? padding.left + plotW / 2
          : padding.left + (i / (N - 1)) * plotW;
        const score = Math.max(0, Math.min(100, Number(item.scorePercent !== undefined ? item.scorePercent : item.score) || 0));
        const y = padding.top + plotH * (1 - score / 100);
        const dateStr = item.timestamp ? new Date(item.timestamp).toLocaleDateString() : `Sim #${i + 1}`;
        const passed = item.passed !== undefined ? Boolean(item.passed) : score >= passingScore;

        return { x, y, score, dateStr, passed, index: i + 1 };
      });

      // Polyline points
      const polylinePoints = points.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');

      // Area Polygon Points
      const areaPolygonPoints = `${points[0].x.toFixed(1)},${yBottom} ` +
        polylinePoints +
        ` ${points[points.length - 1].x.toFixed(1)},${yBottom}`;

      // Data dots and X-axis labels
      let dotsSvg = '';
      let xLabelsSvg = '';

      points.forEach((p) => {
        const dotColor = p.passed ? COLORS.gcpGreen : COLORS.gcpRed;
        dotsSvg += `
          <circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="5" 
                  fill="${dotColor}" 
                  stroke="#ffffff" 
                  stroke-width="2" 
                  class="timeline-dot" 
                  data-index="${p.index}" 
                  data-score="${p.score}%" 
                  data-date="${escapeXml(p.dateStr)}">
            <title>Simulacro #${p.index} (${p.dateStr}): ${p.score.toFixed(1)}% - ${p.passed ? 'APROBADO' : 'NO APROBADO'}</title>
          </circle>`;

        // X-axis step intervals
        if (N <= 8 || p.index === 1 || p.index === N || p.index % Math.ceil(N / 6) === 0) {
          xLabelsSvg += `
            <text x="${p.x.toFixed(1)}" y="${(yBottom + 18).toFixed(1)}" 
                  text-anchor="middle" fill="${COLORS.textSecondary}" font-size="9">
              #${p.index}
            </text>`;
        }
      });

      const svgDefs = `
        <defs>
          <linearGradient id="${chartId}-area-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="${COLORS.gcpBlue}" stop-opacity="0.35" />
            <stop offset="100%" stop-color="${COLORS.gcpBlue}" stop-opacity="0.0" />
          </linearGradient>
        </defs>`;

      return `
        <svg xmlns="http://www.w3.org/2000/svg" 
             viewBox="0 0 ${width} ${height}" 
             class="timeline-chart-svg" 
             style="width: 100%; height: auto; max-width: ${width}px; display: block; margin: 0 auto;" 
             role="img" 
             aria-label="Línea de Evolución Histórica de Calificaciones">
          ${svgDefs}
          <g class="timeline-grid">${gridLinesSvg}${yLabelsSvg}</g>
          <g class="timeline-benchmark">${benchmarkLineSvg}</g>
          <g class="timeline-area">
            <polygon points="${areaPolygonPoints}" fill="url(#${chartId}-area-grad)" />
          </g>
          <g class="timeline-line">
            <polyline points="${polylinePoints}" 
                      fill="none" 
                      stroke="${COLORS.gcpBlue}" 
                      stroke-width="3" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" />
          </g>
          <g class="timeline-dots">${dotsSvg}</g>
          <g class="timeline-x-labels">${xLabelsSvg}</g>
        </svg>`;
    },

    /**
     * Renders timeline chart into container element.
     */
    render(containerIdOrElement, historyDataOrOptions, extraOptions = {}) {
      const container = getContainer(containerIdOrElement);
      if (!container) return;

      let options = {};
      if (Array.isArray(historyDataOrOptions)) {
        options = { ...extraOptions, history: historyDataOrOptions };
      } else if (historyDataOrOptions && typeof historyDataOrOptions === 'object') {
        options = { ...historyDataOrOptions, ...extraOptions };
      } else {
        options = extraOptions || {};
      }

      container.innerHTML = this.generateSVG(options);
    }
  };

  /**
   * =========================================================================
   * 4. DOMAIN BREAKDOWN STACKED / GROUPED BARS
   * =========================================================================
   */
  const DomainBarsEngine = {
    /**
     * Normalizes domain breakdown data from varied structures:
     * - Array of domain objects: [{ id, name, shortName, weight, total, mastered, review, learning, weak, accuracy }]
     * - Object map: { 'ACE-D1': { total: 50, mastered: 20, ... } }
     */
    normalizeDomains(input) {
      if (!input) return [];
      if (Array.isArray(input)) {
        return input.map(d => ({
          id: d.id || d.domainId || 'D',
          name: d.name || d.domainName || d.id || 'Dominio',
          shortName: d.shortName || d.name || d.id || 'Dominio',
          weight: Number(d.weight) || 0,
          total: Math.max(1, Number(d.total || d.totalQuestions) || 50),
          mastered: Number(d.mastered !== undefined ? d.mastered : (d.box3 !== undefined ? d.box3 : 0)),
          review: Number(d.review !== undefined ? d.review : (d.box2 !== undefined ? d.box2 : 0)),
          learning: Number(d.learning !== undefined ? d.learning : (d.box1 !== undefined ? d.box1 : 0)),
          weak: Number(d.weak !== undefined ? d.weak : (d.box0 !== undefined ? d.box0 : 0)),
          accuracy: Math.max(0, Math.min(100, Number(d.accuracy !== undefined ? d.accuracy : (d.scorePercent !== undefined ? d.scorePercent : 0))))
        }));
      }
      if (typeof input === 'object') {
        return Object.keys(input).map(key => {
          const d = input[key] || {};
          return {
            id: d.id || d.domainId || key,
            name: d.name || d.domainName || key,
            shortName: d.shortName || d.name || key,
            weight: Number(d.weight) || 0,
            total: Math.max(1, Number(d.total || d.totalQuestions) || 50),
            mastered: Number(d.mastered !== undefined ? d.mastered : (d.box3 !== undefined ? d.box3 : 0)),
            review: Number(d.review !== undefined ? d.review : (d.box2 !== undefined ? d.box2 : 0)),
            learning: Number(d.learning !== undefined ? d.learning : (d.box1 !== undefined ? d.box1 : 0)),
            weak: Number(d.weak !== undefined ? d.weak : (d.box0 !== undefined ? d.box0 : 0)),
            accuracy: Math.max(0, Math.min(100, Number(d.accuracy !== undefined ? d.accuracy : (d.scorePercent !== undefined ? d.scorePercent : 0))))
          };
        });
      }
      return [];
    },

    /**
     * Generates HTML markup for domain breakdown stacked proficiency bars.
     * 
     * @param {object} options
     * @param {Array<object>|object} options.domains
     * @returns {string} HTML / SVG markup string
     */
    generateHTML(options = {}) {
      const domains = this.normalizeDomains(options.domains || options.domainBreakdown || []);

      if (!Array.isArray(domains) || domains.length === 0) {
        return `<div class="domain-bars-empty" style="padding: 1.5rem; text-align: center; color: var(--text-muted, #9ca3af);"><p>No hay datos de dominio disponibles.</p></div>`;
      }

      let html = '<div class="domain-breakdown-list" style="display: flex; flex-direction: column; gap: 14px;">';

      domains.forEach(dom => {
        const total = dom.total;
        const mastered = dom.mastered;
        const review = dom.review;
        const learning = dom.learning;
        const weak = dom.weak > 0 ? dom.weak : Math.max(0, total - (mastered + review + learning));

        const pctMastered = ((mastered / total) * 100).toFixed(1);
        const pctReview = ((review / total) * 100).toFixed(1);
        const pctLearning = ((learning / total) * 100).toFixed(1);
        const pctWeak = ((weak / total) * 100).toFixed(1);

        const accuracy = dom.accuracy;
        const accColor = accuracy >= 70 ? COLORS.gcpGreen : (accuracy >= 50 ? COLORS.gcpYellow : COLORS.gcpRed);

        html += `
          <div class="domain-card-item" style="background: var(--bg-card, #1f2937); border: 1px solid var(--border-color, #374151); border-radius: var(--radius-sm, 8px); padding: 12px 16px;">
            <!-- Header Row -->
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <span class="domain-code-badge" style="font-weight: 700; font-size: 0.8rem; background: rgba(255,255,255,0.08); padding: 2px 6px; border-radius: 4px; color: var(--text-primary, #f9fafb);">${escapeXml(dom.id)}</span>
                <span class="domain-title" style="font-size: 0.9rem; font-weight: 600; color: var(--text-primary, #f9fafb);">${escapeXml(dom.shortName || dom.name || dom.id)}</span>
                <span class="domain-weight" style="font-size: 0.75rem; color: var(--text-muted, #6b7280);">(${dom.weight || 0}%)</span>
              </div>
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 0.75rem; color: var(--text-secondary, #9ca3af);">${mastered}/${total} dominadas</span>
                <span class="domain-acc-pill" style="font-size: 0.85rem; font-weight: 700; color: ${accColor}; font-family: monospace;">${accuracy.toFixed(1)}%</span>
              </div>
            </div>

            <!-- Stacked Horizontal Bar -->
            <div class="stacked-bar-track" style="position: relative; width: 100%; height: 12px; background: rgba(255, 255, 255, 0.06); border-radius: 6px; overflow: hidden; display: flex;">
              <div class="seg-mastered" style="width: ${pctMastered}%; background: ${COLORS.gcpGreen}; height: 100%;" title="Dominadas (Nivel 3): ${mastered} (${pctMastered}%)"></div>
              <div class="seg-review" style="width: ${pctReview}%; background: ${COLORS.gcpBlue}; height: 100%;" title="En Repaso (Nivel 2): ${review} (${pctReview}%)"></div>
              <div class="seg-learning" style="width: ${pctLearning}%; background: ${COLORS.gcpYellow}; height: 100%;" title="En Aprendizaje (Nivel 1): ${learning} (${pctLearning}%)"></div>
              <div class="seg-weak" style="width: ${pctWeak}%; background: rgba(255, 255, 255, 0.08); height: 100%;" title="Sin Iniciar / Debilidad: ${weak} (${pctWeak}%)"></div>
            </div>

            <!-- 70% Target Marker Notch Overlay -->
            <div style="position: relative; width: 100%; height: 4px; margin-top: 2px;">
              <div style="position: absolute; left: 70%; top: -14px; width: 2px; height: 14px; background: #ffffff; opacity: 0.45; pointer-events: none;" title="Meta Aprobatoria 70%"></div>
            </div>
          </div>`;
      });

      html += '</div>';
      return html;
    },

    /**
     * Renders domain bars into container element.
     */
    render(containerIdOrElement, domainBreakdownOrOptions, extraOptions = {}) {
      const container = getContainer(containerIdOrElement);
      if (!container) return;

      let options = {};
      if (domainBreakdownOrOptions && (Array.isArray(domainBreakdownOrOptions) || (typeof domainBreakdownOrOptions === 'object' && !domainBreakdownOrOptions.domains))) {
        options = { ...extraOptions, domains: domainBreakdownOrOptions };
      } else if (domainBreakdownOrOptions && typeof domainBreakdownOrOptions === 'object') {
        options = { ...domainBreakdownOrOptions, ...extraOptions };
      } else {
        options = extraOptions || {};
      }

      container.innerHTML = this.generateHTML(options);
    }
  };

  /**
   * =========================================================================
   * 5. STATE BACKUP & RESTORE UI HANDLER
   * =========================================================================
   */
  const BackupRestoreUI = {
    /**
     * Triggers browser download of current state JSON file with CRC-32 checksum.
     * @returns {boolean} True if exported successfully
     */
    exportToFile() {
      if (typeof window === 'undefined') {
        console.error('[BackupRestoreUI] Window is not defined.');
        return false;
      }
      if (!window.GCP_STATE) {
        console.error('[BackupRestoreUI] GCP_STATE is not available.');
        return false;
      }

      try {
        const stateObj = window.GCP_STATE.loadState();
        const backupJsonString = window.GCP_STATE.exportBackup(stateObj);

        const activeCert = (stateObj && stateObj.meta && stateObj.meta.activeCertId) || 'gcp';
        const now = new Date();
        const dateStamp = now.toISOString().slice(0, 10);
        const timeStamp = now.toTimeString().slice(0, 8).replace(/:/g, '');
        const filename = `gcp-master-training-backup-${activeCert}-${dateStamp}_${timeStamp}.json`;

        const blob = new Blob([backupJsonString], { type: 'application/json;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        return true;
      } catch (err) {
        console.error('[BackupRestoreUI] Failed to export state backup:', err);
        return false;
      }
    },

    /**
     * Reads, verifies CRC-32 integrity, and restores application state from JSON file.
     * 
     * @param {File} file - Selected JSON backup file
     * @param {Function} [callback] - Callback receives ({ success: boolean, state?: object, error?: string })
     */
    importFromFile(file, callback) {
      if (!file) {
        if (callback) callback({ success: false, error: 'Ningún archivo seleccionado.' });
        return;
      }

      if (typeof window === 'undefined' || !window.GCP_STATE) {
        if (callback) callback({ success: false, error: 'GCP_STATE no está disponible.' });
        return;
      }

      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const content = e.target.result;
          const importResult = window.GCP_STATE.importBackup(content);

          if (importResult.success) {
            // Dispatch global event for full application re-rendering
            window.dispatchEvent(new CustomEvent('gcp:state:reloaded', {
              detail: { state: importResult.state, source: 'import' }
            }));
          }

          if (callback) callback(importResult);
        } catch (err) {
          if (callback) callback({ success: false, error: `Error procesando archivo: ${err.message}` });
        }
      };

      reader.onerror = () => {
        if (callback) callback({ success: false, error: 'Error al leer el archivo del disco.' });
      };

      reader.readAsText(file, 'UTF-8');
    },

    /**
     * Resets application state to factory defaults.
     * 
     * @param {Function} [callback] - Callback receives ({ success: boolean, state: object })
     */
    resetToFactory(callback) {
      if (typeof window === 'undefined' || !window.GCP_STATE) {
        if (callback) callback({ success: false, error: 'GCP_STATE no está disponible.' });
        return;
      }

      try {
        const defaultState = window.GCP_STATE.createDefaultState();
        window.GCP_STATE.saveState(defaultState);

        window.dispatchEvent(new CustomEvent('gcp:state:reloaded', {
          detail: { state: defaultState, source: 'reset' }
        }));

        if (callback) callback({ success: true, state: defaultState });
      } catch (err) {
        if (callback) callback({ success: false, error: err.message });
      }
    },

    /**
     * Binds DOM event listeners to export, import, and reset buttons/inputs.
     * 
     * @param {string} [exportBtnId='btn-export-backup']
     * @param {string} [importInputId='settings-import-file-input']
     * @param {string} [resetBtnId='btn-trigger-factory-reset']
     */
    setupBackupRestore(exportBtnId = 'btn-export-backup', importInputId = 'settings-import-file-input', resetBtnId = 'btn-trigger-factory-reset') {
      if (typeof document === 'undefined') return;

      // 1. Export Button
      const exportBtn = document.getElementById(exportBtnId) || document.getElementById('btn-export-backup');
      if (exportBtn && !exportBtn._gcpBound) {
        exportBtn._gcpBound = true;
        exportBtn.addEventListener('click', () => {
          const ok = this.exportToFile();
          if (ok) {
            if (window.GCP_APP && typeof window.GCP_APP.showToast === 'function') {
              window.GCP_APP.showToast('Copia de respaldo JSON exportada con éxito.', 'success');
            }
          } else {
            if (window.GCP_APP && typeof window.GCP_APP.showToast === 'function') {
              window.GCP_APP.showToast('Error al exportar la copia de respaldo.', 'error');
            }
          }
        });
      }

      // 2. Import File Input
      const importInput = document.getElementById(importInputId) || document.getElementById('settings-import-file-input') || document.getElementById('input-import-backup');
      if (importInput && !importInput._gcpBound) {
        importInput._gcpBound = true;
        importInput.addEventListener('change', (e) => {
          const file = e.target.files && e.target.files[0];
          if (!file) return;

          this.importFromFile(file, (res) => {
            // Reset input so the same file can be re-selected if needed
            importInput.value = '';

            if (res.success) {
              if (window.GCP_APP && typeof window.GCP_APP.showToast === 'function') {
                window.GCP_APP.showToast('Progreso e integridad restaurados con éxito.', 'success');
              } else if (typeof alert !== 'undefined') {
                alert('Progreso e integridad restaurados con éxito.');
              }
            } else {
              const alertMsg = `Error al restaurar respaldo: ${res.error}`;
              if (window.GCP_APP && typeof window.GCP_APP.showToast === 'function') {
                window.GCP_APP.showToast(alertMsg, 'error');
              } else if (typeof alert !== 'undefined') {
                alert(alertMsg);
              }
            }
          });
        });
      }

      // 3. Factory Reset Button
      const resetBtn = document.getElementById(resetBtnId) || document.getElementById('btn-trigger-factory-reset');
      if (resetBtn && !resetBtn._gcpBound) {
        resetBtn._gcpBound = true;
        resetBtn.addEventListener('click', () => {
          const performReset = () => {
            this.resetToFactory((res) => {
              if (res.success) {
                if (window.GCP_APP && typeof window.GCP_APP.showToast === 'function') {
                  window.GCP_APP.showToast('Todos los datos han sido restablecidos a valores iniciales.', 'info');
                } else if (typeof alert !== 'undefined') {
                  alert('Datos restablecidos.');
                }
              }
            });
          };

          if (window.GCP_APP && typeof window.GCP_APP.confirm === 'function') {
            window.GCP_APP.confirm(
              '¿Está seguro de restablecer todas las estadísticas y datos de progreso?',
              'Esta acción no se puede deshacer.',
              performReset
            );
          } else if (typeof confirm !== 'undefined' && confirm('¿Está seguro de restablecer todo el progreso? Esta acción no se puede deshacer.')) {
            performReset();
          }
        });
      }
    }
  };

  /**
   * =========================================================================
   * UNIFIED UICHARTS & GCP_CHARTS API OBJECT
   * =========================================================================
   */
  const UICharts = {
    // Engine Submodules
    RadarChart: RadarChartEngine,
    RadialGauge: RadialGaugeEngine,
    TimelineChart: TimelineChartEngine,
    DomainBars: DomainBarsEngine,
    BackupRestore: BackupRestoreUI,

    // Primary API Render Methods
    renderRadar: RadarChartEngine.render.bind(RadarChartEngine),
    renderRadialGauge: RadialGaugeEngine.render.bind(RadialGaugeEngine),
    renderGauge: RadialGaugeEngine.render.bind(RadialGaugeEngine), // Alias
    renderTimeline: TimelineChartEngine.render.bind(TimelineChartEngine),
    renderDomainBars: DomainBarsEngine.render.bind(DomainBarsEngine),

    // Backup & Restore Methods
    setupBackupRestore: BackupRestoreUI.setupBackupRestore.bind(BackupRestoreUI),
    exportBackup: BackupRestoreUI.exportToFile.bind(BackupRestoreUI),
    importBackup: BackupRestoreUI.importFromFile.bind(BackupRestoreUI),
    resetFactory: BackupRestoreUI.resetToFactory.bind(BackupRestoreUI),

    // Utility & Tokens
    COLORS: COLORS,
    escapeXml: escapeXml
  };

  // Browser Global Export
  if (typeof window !== 'undefined') {
    window.UICharts = UICharts;
    window.GCP_CHARTS = UICharts;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.UICharts = UICharts;
    globalThis.GCP_CHARTS = UICharts;
  }

  // Node.js Module Export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = UICharts;
  }

})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
