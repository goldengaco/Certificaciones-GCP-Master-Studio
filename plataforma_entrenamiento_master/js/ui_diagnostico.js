/**
 * ui_diagnostico.js — de "sacaste 68%" a "fallas en ACE-2.3 → VPC peering".
 *
 * Un porcentaje global no sirve para estudiar: esconde que una subsección
 * entera está en cero. Esta vista cruza lo que has respondido con la taxonomía
 * oficial de Google y baja tres niveles: sección → subsección → concepto.
 *
 * Lo que decide dónde estudiar no es el porcentaje más bajo, sino el que más
 * caro sale en el examen: una subsección al 65% que vale 9% del examen te
 * cuesta más puntos que una al 40% que vale 2%.
 */
(function (global) {
  'use strict';

  const MIN_INTENTOS = 5;       // por debajo, no hay datos para juzgar
  const MIN_DOMINIO  = 8;       // intentos mínimos para considerar dominado
  const UMBRAL_LISTO = 75;      // Google no publica su nota de corte; 75 es margen

  const ESTADOS = {
    dominado:     { etiqueta: 'Dominado',     clase: 'dg-dominado' },
    progreso:     { etiqueta: 'En progreso',  clase: 'dg-progreso' },
    debil:        { etiqueta: 'Débil',        clase: 'dg-debil' },
    insuficiente: { etiqueta: 'Pocos datos',  clase: 'dg-insuf' },
    sinver:       { etiqueta: 'Sin ver',      clase: 'dg-sinver' },
    // No es que falles: es que todavía no hay preguntas verificadas de esa área.
    sinbanco:     { etiqueta: 'Aún sin preguntas', clase: 'dg-sinbanco' },
  };

  const GCP_DIAGNOSTICO = {

    /** Cruza preguntas + estado del usuario + taxonomía oficial. */
    calcular(certId) {
      const app = global.GCP_APP;
      const T = global.GCP_TAXONOMIA && global.GCP_TAXONOMIA[certId];
      if (!app || !T) return null;

      const pool = app.getQuestionPool ? app.getQuestionPool() : (app.questionPool || []);
      const certState = (app.state && app.state.certifications && app.state.certifications[certId]) || {};
      const estados = certState.questionStates || {};
      const secciones = T.secciones || T.sections || {};

      const acumular = () => ({ total: 0, vistos: 0, intentos: 0, aciertos: 0 });
      const sumar = (acc, q) => {
        acc.total++;
        const s = estados[q.id];
        if (s && s.totalAttempts > 0) {
          acc.vistos++;
          acc.intentos += s.totalAttempts;
          acc.aciertos += (s.correctAttempts || 0);
        }
      };
      const cerrar = (acc) => {
        acc.acierto = acc.intentos > 0 ? acc.aciertos / acc.intentos : null;
        return acc;
      };

      const res = { certId, secciones: [], conceptos: {}, pool: pool.length };

      Object.entries(secciones).forEach(([sid, sec]) => {
        const dsec = acumular();
        const subs = [];
        const subsecciones = sec.subsecciones || sec.subsections || {};

        Object.entries(subsecciones).forEach(([ssid, ss]) => {
          const dsub = acumular();
          pool.filter(q => q.subsectionId === ssid).forEach(q => { sumar(dsub, q); sumar(dsec, q); });
          cerrar(dsub);

          // Estado de dominio. "Dominado" exige dos sesiones distintas: acertar
          // ocho seguidas en una tarde es memoria, no dominio.
          let estado = 'sinver';
          if (dsub.total === 0) estado = 'sinbanco';
          else if (dsub.intentos === 0) estado = 'sinver';
          else if (dsub.intentos < MIN_INTENTOS) estado = 'insuficiente';
          else if (dsub.acierto < 0.60) estado = 'debil';
          else if (dsub.acierto < 0.80) estado = 'progreso';
          else estado = dsub.intentos >= MIN_DOMINIO ? 'dominado' : 'progreso';

          const peso = Number(ss.peso) || 0;
          const confianza = Math.min(1, dsub.intentos / MIN_DOMINIO);
          const acierto = dsub.acierto === null ? 0 : dsub.acierto;
          // Riesgo: cuántos puntos del examen estás dejando en esta subsección.
          // Una subsección sin preguntas disponibles no es un hueco tuyo: es un
          // hueco del banco. No se te puede pedir que la practiques.
          const riesgo = dsub.total === 0 ? 0
                       : peso * (1 - acierto) * (dsub.intentos === 0 ? 1 : confianza);

          subs.push({ id: ssid, nombre: ss.nombre || ssid, peso, ...dsub, estado, riesgo });
        });

        cerrar(dsec);
        res.secciones.push({
          id: sid, nombre: sec.nombre || sid, peso: Number(sec.peso) || 0,
          ...dsec, subs: subs.sort((a, b) => a.id.localeCompare(b.id)),
        });
      });

      // Conceptos: el nivel más fino. Solo los que tienen algún intento.
      pool.forEach(q => {
        const s = estados[q.id];
        if (!s || !s.totalAttempts) return;
        (q.conceptos || []).forEach(c => {
          const k = String(c).toLowerCase();
          if (!res.conceptos[k]) res.conceptos[k] = { nombre: k, intentos: 0, aciertos: 0, sub: q.subsectionId };
          res.conceptos[k].intentos += s.totalAttempts;
          res.conceptos[k].aciertos += (s.correctAttempts || 0);
        });
      });

      res.secciones.sort((a, b) => a.id.localeCompare(b.id));
      res.riesgos = res.secciones.flatMap(s => s.subs).sort((a, b) => b.riesgo - a.riesgo);

      // Criterio de "listo": conjuntivo, los cinco tienen que cumplirse.
      const todas = res.secciones.flatMap(s => s.subs);
      const hist = (certState.history || []).filter(h => h.mode === 'exam' || h.mode === 'simulation');
      const ult3 = hist.slice(-3);
      res.listo = [
        { txt: `Has visto al menos el 90% del banco`,
          ok: res.pool > 0 && todas.reduce((a, s) => a + s.vistos, 0) / res.pool >= 0.9,
          det: `${todas.reduce((a, s) => a + s.vistos, 0)} de ${res.pool} preguntas vistas` },
        { txt: `Ninguna subsección en Débil ni Sin ver`,
          ok: todas.length > 0 && !todas.some(s => s.estado === 'debil' || s.estado === 'sinver'),
          det: (() => { const n = todas.filter(s => s.estado === 'debil' || s.estado === 'sinver').length;
                        return n === 1 ? '1 subsección pendiente de estudiar' : `${n} subsecciones pendientes de estudiar`; })() },
        { txt: `El banco cubre todas las áreas oficiales`,
          ok: !todas.some(s => s.estado === 'sinbanco'),
          det: (() => { const n = todas.filter(s => s.estado === 'sinbanco').length;
                        return n === 1 ? '1 área todavía sin preguntas verificadas' : `${n} áreas todavía sin preguntas verificadas`; })() },
        { txt: `Tres simulacros completos`,
          ok: hist.length >= 3, det: `${hist.length} simulacros hechos` },
        { txt: `Los tres últimos por encima del ${UMBRAL_LISTO}%`,
          ok: ult3.length === 3 && ult3.every(h => (h.scorePercent || 0) >= UMBRAL_LISTO),
          det: ult3.length ? ult3.map(h => (h.scorePercent || 0) + '%').join(', ') : 'ninguno todavía' },
        { txt: `Al menos 14 días entre el primero y el último`,
          ok: hist.length >= 2 && (new Date(hist[hist.length-1].finishedAt || 0) - new Date(hist[0].startedAt || 0)) >= 14*864e5,
          det: 'distingue aprendizaje de memorización reciente' },
      ];
      return res;
    },

    render() {
      const cont = document.getElementById('diagnostico-contenido');
      if (!cont) return;
      const app = global.GCP_APP;
      const certId = (app && app.activeCertId) || 'ace';
      const d = this.calcular(certId);

      if (!d || !d.secciones.length) {
        cont.innerHTML = `<p class="empty-state-msg">Todavía no hay taxonomía cargada para esta certificación.</p>`;
        return;
      }

      const pct = x => x === null || x === undefined ? '—' : Math.round(x * 100) + '%';
      const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

      const sinBanco = d.secciones.flatMap(s => s.subs).filter(s => s.estado === 'sinbanco');
      const aviso = sinBanco.length ? `
        <div class="dg-aviso">
          <strong>El banco todavía se está construyendo.</strong>
          ${sinBanco.length} de ${d.secciones.flatMap(s=>s.subs).length} subsecciones oficiales aún no tienen
          preguntas verificadas (${sinBanco.reduce((a,s)=>a+s.peso,0).toFixed(1)}% del examen).
          No aparecen como fallo tuyo, pero tampoco puedes prepararlas aquí todavía.
        </div>` : '';

      // 1. Dónde pierdes más puntos.
      // Lo dominado no entra: si ya lo sabes, no es donde tienes que invertir
      // tiempo, por mucho que su peso lo empuje hacia arriba en el cálculo.
      const top = d.riesgos.filter(s => s.riesgo > 0 && s.estado !== 'dominado').slice(0, 5);
      const bloqueRiesgo = top.length ? `
        <div class="dg-bloque">
          <h3 class="section-subheading">Dónde estás perdiendo más puntos</h3>
          <p class="dg-nota">Ordenado por lo que cuesta en el examen, no por el porcentaje más bajo:
             una subsección floja que pesa mucho te cuesta más que una mala que pesa poco.</p>
          <div class="dg-riesgos">
            ${top.map(s => `
              <div class="dg-riesgo">
                <div class="dg-riesgo-txt">
                  <span class="dg-sub-id">${esc(s.id)}</span>
                  <span class="dg-sub-nom">${esc(s.nombre)}</span>
                  <span class="dg-meta">vale ${s.peso}% del examen · aciertas ${pct(s.acierto)} · ${s.intentos} intentos</span>
                </div>
                <button class="btn btn-primary btn-sm dg-drill" data-sub="${esc(s.id)}">Practicar solo esto</button>
              </div>`).join('')}
          </div>
        </div>` : '';

      // 2. Mapa por sección.
      const bloqueMapa = `
        <div class="dg-bloque">
          <h3 class="section-subheading">Tu mapa por área oficial</h3>
          ${d.secciones.map(s => `
            <div class="dg-seccion">
              <div class="dg-seccion-cab">
                <span class="dg-sec-id">${esc(s.id)}</span>
                <span class="dg-sec-nom">${esc(s.nombre)}</span>
                <span class="dg-meta">${s.peso}% del examen · ${pct(s.acierto)} · ${s.vistos}/${s.total} vistas</span>
              </div>
              <div class="dg-subs">
                ${s.subs.map(ss => `
                  <div class="dg-celda ${ESTADOS[ss.estado].clase}" title="${esc(ss.nombre)}">
                    <span class="dg-celda-id">${esc(ss.id)}</span>
                    <span class="dg-celda-pct">${pct(ss.acierto)}</span>
                    <span class="dg-celda-est">${ESTADOS[ss.estado].etiqueta}</span>
                  </div>`).join('')}
              </div>
            </div>`).join('')}
        </div>`;

      // 3. Conceptos flojos.
      const conc = Object.values(d.conceptos)
        .filter(c => c.intentos >= 2)
        .map(c => ({ ...c, acierto: c.aciertos / c.intentos }))
        .filter(c => c.acierto < 0.7)
        .sort((a, b) => a.acierto - b.acierto).slice(0, 12);
      const bloqueConceptos = conc.length ? `
        <div class="dg-bloque">
          <h3 class="section-subheading">Conceptos concretos que se te resisten</h3>
          <div class="dg-conceptos">
            ${conc.map(c => `<span class="dg-concepto">${esc(c.nombre)} <b>${pct(c.acierto)}</b></span>`).join('')}
          </div>
        </div>` : '';

      // 4. Checklist de "listo".
      const bloqueListo = `
        <div class="dg-bloque">
          <h3 class="section-subheading">¿Puedo pagar el examen ya?</h3>
          <ul class="dg-listo">
            ${d.listo.map(c => `
              <li class="${c.ok ? 'dg-ok' : 'dg-no'}">
                <span class="dg-listo-txt">${esc(c.txt)}</span>
                <span class="dg-meta">${esc(c.det)}</span>
              </li>`).join('')}
          </ul>
          <p class="dg-nota"><strong>Sobre el ${UMBRAL_LISTO}%:</strong> Google no publica su nota de corte.
             Es un umbral estimado con margen de seguridad, no una predicción.</p>
        </div>`;

      cont.innerHTML = aviso + bloqueRiesgo + bloqueMapa + bloqueConceptos + bloqueListo;

      cont.querySelectorAll('.dg-drill').forEach(b => {
        b.addEventListener('click', () => {
          const sub = b.getAttribute('data-sub');
          if (global.GCP_APP) global.GCP_APP.navigateTo('drill');
          if (global.GCP_DRILL && typeof global.GCP_DRILL.startDrillBatch === 'function') {
            setTimeout(() => global.GCP_DRILL.startDrillBatch('SUB:' + sub), 120);
          }
        });
      });
    },

    init() { this.render(); },
  };

  global.GCP_DIAGNOSTICO = GCP_DIAGNOSTICO;
  if (typeof module !== 'undefined' && module.exports) module.exports = GCP_DIAGNOSTICO;
})(typeof window !== 'undefined' ? window : global);
