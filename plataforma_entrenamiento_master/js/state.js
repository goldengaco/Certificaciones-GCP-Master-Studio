/**
 * state.js
 * 
 * LocalStorage State & Integrity Management for Google Cloud Certification Training Platform (Master Edition)
 * 
 * Features:
 * 1. Normalized schema with version tracking ('1.0.0') and backward-compatible migration.
 * 2. Full state persistence across certifications (CDL, ACE, PCA), history, question states, and settings.
 * 3. Robust backup export/import with standard IEEE 802.3 CRC-32 integrity verification and tamper detection.
 * 
 * Dual Runtime Compatibility: Browser (window.GCP_STATE) and Node.js (module.exports).
 */

(function (global) {
  'use strict';

  // Build IEEE 802.3 standard polynomial 0xEDB88320 CRC-32 table
  const CRC_TABLE = (function () {
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) {
        c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      }
      table[i] = c >>> 0;
    }
    return table;
  })();

  /**
   * Converts a string to UTF-8 byte array across Browser and Node environments.
   * @param {string} str 
   * @returns {Uint8Array|Array<number>}
   */
  function getUtf8Bytes(str) {
    if (typeof str !== 'string') {
      str = String(str);
    }
    if (typeof Buffer !== 'undefined' && typeof Buffer.from === 'function') {
      return Buffer.from(str, 'utf8');
    }
    if (typeof TextEncoder !== 'undefined') {
      return new TextEncoder().encode(str);
    }
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
      let charcode = str.charCodeAt(i);
      if (charcode < 0x80) {
        bytes.push(charcode);
      } else if (charcode < 0x800) {
        bytes.push(0xc0 | (charcode >> 6),
                   0x80 | (charcode & 0x3f));
      } else if (charcode < 0xd800 || charcode >= 0xe000) {
        bytes.push(0xe0 | (charcode >> 12),
                   0x80 | ((charcode >> 6) & 0x3f),
                   0x80 | (charcode & 0x3f));
      } else {
        // Surrogate pair
        i++;
        charcode = 0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
        bytes.push(0xf0 | (charcode >> 18),
                   0x80 | ((charcode >> 12) & 0x3f),
                   0x80 | ((charcode >> 6) & 0x3f),
                   0x80 | (charcode & 0x3f));
      }
    }
    return bytes;
  }

  /**
   * Computes standard IEEE 802.3 CRC-32 checksum returning an 8-character uppercase hex string.
   * @param {string} str 
   * @returns {string} 8-character uppercase hex string (e.g. "CBF43926")
   */
  function computeCRC32(str) {
    if (str === null || str === undefined) {
      return '00000000';
    }
    let crc = 0 ^ (-1);
    const bytes = getUtf8Bytes(str);
    for (let i = 0; i < bytes.length; i++) {
      crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ bytes[i]) & 0xFF];
    }
    return ((crc ^ (-1)) >>> 0).toString(16).padStart(8, '0').toUpperCase();
  }

  /**
   * Main State Storage & Persistence Manager
   */
  const StateStorageManager = {
    STORAGE_KEY: 'GCP_TRAINING_PLATFORM_STATE_V1',
    SCHEMA_VERSION: '1.0.0',

    // Expose CRC-32 functions
    computeCRC32: computeCRC32,
    crc32: computeCRC32,

    /**
     * Template generator for certification state
     * @param {string} certId 
     * @returns {object}
     */
    createCertTemplate(certId) {
      return {
        certId: certId,
        history: [],
        sessionLogs: [],
        questionStates: {},
        currentBlockIndex: 0,
        rotation: {
          currentEpoch: 1,
          currentBlockIndex: 0,
          completedBlockIndices: [],
          epochSeed: Date.now(),
          blockQuestionIds: {}
        },
        cachedAnalytics: {
          realPassingProbability: 0.0,
          lastCalculatedAt: Date.now(),
          domainPerformance: {}
        }
      };
    },

    /**
     * Creates a normalized fresh default state object conforming to SCHEMA_VERSION.
     * @returns {object}
     */
    createDefaultState() {
      const now = Date.now();
      return {
        schemaVersion: this.SCHEMA_VERSION,
        version: 1,
        lastModified: now,
        meta: {
          createdAt: now,
          lastSavedAt: now,
          activeCertId: 'ace'
        },
        user: {
          id: 'user_' + Math.random().toString(36).substring(2, 9),
          displayName: 'Cloud Candidate'
        },
        certifications: {
          cdl: this.createCertTemplate('cdl'),
          ace: this.createCertTemplate('ace'),
          pca: this.createCertTemplate('pca')
        },
        settings: {
          theme: 'dark',
          timerAudioEnabled: true,
          keyboardShortcutsEnabled: true
        }
      };
    },

    /**
     * Alias for createDefaultState
     * @returns {object}
     */
    createInitialState() {
      return this.createDefaultState();
    },

    /**
     * Loads and validates the application state from localStorage.
     * Migrates or merges safely if needed.
     * @returns {object}
     */
    loadState() {
      try {
        if (typeof localStorage === 'undefined' || !localStorage.getItem) {
          return this.createDefaultState();
        }
        const raw = localStorage.getItem(this.STORAGE_KEY);
        if (!raw) {
          return this.createDefaultState();
        }
        const parsed = JSON.parse(raw);
        if (!parsed || typeof parsed !== 'object') {
          return this.createDefaultState();
        }
        return this.migrateState(parsed);
      } catch (err) {
        console.warn('[StateStorageManager] Failed to load state from localStorage, initializing fresh state:', err);
        return this.createDefaultState();
      }
    },

    /**
     * Persists the state object to localStorage.
     * @param {object} state 
     * @returns {boolean} True if saved successfully, false otherwise
     */
    saveState(state) {
      if (!state || typeof state !== 'object') {
        return false;
      }
      try {
        state.lastModified = Date.now();
        if (state.meta) {
          state.meta.lastSavedAt = state.lastModified;
        }
        if (typeof localStorage !== 'undefined' && localStorage.setItem) {
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
        }
        return true;
      } catch (err) {
        console.error('[StateStorageManager] Failed to save state to localStorage:', err);
        return false;
      }
    },

    /**
     * Exports full state backup into a tamper-evident JSON string with CRC-32 checksum.
     * @param {object} state 
     * @returns {string} JSON backup string
     */
    exportBackup(state) {
      const targetState = state || this.loadState();
      const payload = JSON.stringify(targetState);
      const checksum = this.computeCRC32(payload);

      return JSON.stringify({
        schemaVersion: (targetState && (targetState.schemaVersion || targetState.version)) || this.SCHEMA_VERSION,
        exportedAt: Date.now(),
        payload: payload,
        crc32: checksum
      }, null, 2);
    },

    /**
     * Validates and imports a backup string, verifying checksum integrity and rejecting corruptions.
     * @param {string} backupString 
     * @returns {{ success: boolean, state?: object, error?: string }}
     */
    importBackup(backupString) {
      if (typeof backupString !== 'string') {
        return { success: false, error: 'Import error: backup payload must be a string' };
      }

      let backup;
      try {
        backup = JSON.parse(backupString);
      } catch (err) {
        return { success: false, error: `Import parsing error: ${err.message}` };
      }

      if (!backup || typeof backup !== 'object' || Array.isArray(backup) || typeof backup.payload !== 'string' || typeof backup.crc32 !== 'string') {
        return { success: false, error: 'Malformed backup structure: missing payload or crc32' };
      }

      // Verify CRC-32 checksum against payload
      const computedCrc = this.computeCRC32(backup.payload);
      if (computedCrc !== backup.crc32.toUpperCase()) {
        return {
          success: false,
          error: `CRC-32 checksum mismatch: expected ${backup.crc32}, calculated ${computedCrc}`
        };
      }

      // Parse and validate inner payload JSON
      let restoredState;
      try {
        restoredState = JSON.parse(backup.payload);
      } catch (err) {
        return { success: false, error: `Import payload JSON parsing error: ${err.message}` };
      }

      if (!restoredState || typeof restoredState !== 'object' || Array.isArray(restoredState)) {
        return { success: false, error: 'Invalid state object in backup' };
      }

      const migrated = this.migrateState(restoredState);
      this.saveState(migrated);
      return { success: true, state: migrated };
    },

    /**
     * Merges and migrates an arbitrary state object into the current schema format.
     * @param {object} rawState 
     * @returns {object}
     */
    migrateState(rawState) {
      const fresh = this.createDefaultState();
      if (!rawState || typeof rawState !== 'object') {
        return fresh;
      }

      const merged = {
        ...fresh,
        ...rawState,
        schemaVersion: this.SCHEMA_VERSION,
        meta: {
          ...fresh.meta,
          ...(rawState.meta || {})
        },
        user: {
          ...fresh.user,
          ...(rawState.user || {})
        },
        settings: {
          ...fresh.settings,
          ...(rawState.settings || {})
        },
        certifications: {
          cdl: { ...fresh.certifications.cdl, ...(rawState.certifications && rawState.certifications.cdl ? rawState.certifications.cdl : {}) },
          ace: { ...fresh.certifications.ace, ...(rawState.certifications && rawState.certifications.ace ? rawState.certifications.ace : {}) },
          pca: { ...fresh.certifications.pca, ...(rawState.certifications && rawState.certifications.pca ? rawState.certifications.pca : {}) }
        }
      };

      // Ensure history and sessionLogs arrays exist for each certification
      ['cdl', 'ace', 'pca'].forEach(certId => {
        const cert = merged.certifications[certId];
        cert.history = Array.isArray(cert.history) ? cert.history : [];
        cert.sessionLogs = Array.isArray(cert.sessionLogs) ? cert.sessionLogs : [];
        cert.questionStates = (cert.questionStates && typeof cert.questionStates === 'object') ? cert.questionStates : {};
      });

      return merged;
    }
  };

  // Browser global export
  if (typeof window !== 'undefined') {
    window.GCP_STATE = StateStorageManager;
  }
  if (typeof globalThis !== 'undefined') {
    globalThis.GCP_STATE = StateStorageManager;
  }

  // Node.js module export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = StateStorageManager;
  }

})(typeof window !== 'undefined' ? window : global);
