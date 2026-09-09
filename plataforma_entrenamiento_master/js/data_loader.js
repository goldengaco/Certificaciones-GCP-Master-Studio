/**
 * data_loader.js
 *
 * Carga perezosa de los bancos de preguntas.
 *
 * Antes, index.html cargaba cert_cdl.js + cert_ace.js + cert_pca.js de golpe:
 * 2,7 MB que el hilo principal tiene que parsear antes de pintar el dashboard.
 * Eso era el 100% del retraso de LCP (541 ms de "element render delay").
 *
 * Ahora solo se carga el banco de la certificación activa antes de arrancar la
 * app; los otros dos entran en segundo plano cuando el navegador está ocioso.
 *
 * Se usa inyección de <script> en vez de fetch() a propósito: fetch sobre
 * file:// lo bloquea CORS, y la plataforma tiene que seguir abriéndose con
 * doble clic en index.html sin servidor.
 */
(function (global) {
  'use strict';

  var ARCHIVOS = { cdl: 'data/cert_cdl.js', ace: 'data/cert_ace.js', pca: 'data/cert_pca.js' };
  var GLOBALES = { cdl: 'GCP_CDL_QUESTIONS', ace: 'GCP_ACE_QUESTIONS', pca: 'GCP_PCA_QUESTIONS' };
  var VALIDOS = ['cdl', 'ace', 'pca'];
  var pendientes = {};

  function normalizar(certId) {
    var id = String(certId || '').toLowerCase();
    return VALIDOS.indexOf(id) >= 0 ? id : 'ace';
  }

  var GCP_DATA = {
    /** ¿Ya está el banco en memoria? */
    estaCargado: function (certId) {
      var id = normalizar(certId);
      var arr = global[GLOBALES[id]];
      return Array.isArray(arr) && arr.length > 0;
    },

    /**
     * Certificación activa según el estado guardado, sin depender de que la app
     * haya arrancado todavía. Se usa para decidir qué banco cargar primero.
     */
    certActivaGuardada: function () {
      try {
        var raw = global.localStorage && global.localStorage.getItem('GCP_TRAINING_PLATFORM_STATE_V1');
        if (!raw) return 'ace';
        var st = JSON.parse(raw);
        return normalizar(st && st.meta && st.meta.activeCertId);
      } catch (e) {
        return 'ace';
      }
    },

    /**
     * Garantiza que el banco esté cargado. Resuelve inmediatamente si ya lo está.
     * @param {string} certId
     * @returns {Promise<Array>}
     */
    asegurarBanco: function (certId) {
      var id = normalizar(certId);
      if (this.estaCargado(id)) return Promise.resolve(global[GLOBALES[id]]);
      if (pendientes[id]) return pendientes[id];

      pendientes[id] = new Promise(function (resolve) {
        var s = document.createElement('script');
        s.src = ARCHIVOS[id];
        s.async = false;
        s.onload = function () { resolve(global[GLOBALES[id]] || []); };
        s.onerror = function () {
          // Nunca se rechaza: un banco que falta degrada la app, no la rompe.
          console.error('[GCP_DATA] No se pudo cargar ' + ARCHIVOS[id]);
          global[GLOBALES[id]] = global[GLOBALES[id]] || [];
          resolve(global[GLOBALES[id]]);
        };
        document.head.appendChild(s);
      });
      return pendientes[id];
    },

    /** Carga los tres bancos (lo necesita el buscador global). */
    asegurarTodos: function () {
      var self = this;
      return Promise.all(VALIDOS.map(function (id) { return self.asegurarBanco(id); }));
    },

    /** Precarga en segundo plano, sin competir con el primer pintado. */
    precargarRestantes: function (certActiva, onComplete) {
      var self = this;
      var resto = VALIDOS.filter(function (id) { return id !== normalizar(certActiva); });
      var lanzar = function () {
        Promise.all(resto.map(function (id) { return self.asegurarBanco(id); })).then(function () {
          if (typeof onComplete === 'function') onComplete();
        });
      };
      // Se espera al evento load Y además a que el hilo principal quede ocioso.
      // Si se lanza antes, el parseo de los otros dos bancos se mete dentro de
      // la ventana de LCP y el retraso de pintado vuelve a subir.
      var programar = function () {
        if (typeof global.requestIdleCallback === 'function') {
          global.requestIdleCallback(lanzar, { timeout: 8000 });
        } else {
          setTimeout(lanzar, 2500);
        }
      };
      if (document.readyState === 'complete') {
        setTimeout(programar, 1500);
      } else {
        global.addEventListener('load', function () { setTimeout(programar, 1500); }, { once: true });
      }
    }
  };

  global.GCP_DATA = GCP_DATA;
  if (typeof module !== 'undefined' && module.exports) module.exports = GCP_DATA;
})(typeof window !== 'undefined' ? window : global);
