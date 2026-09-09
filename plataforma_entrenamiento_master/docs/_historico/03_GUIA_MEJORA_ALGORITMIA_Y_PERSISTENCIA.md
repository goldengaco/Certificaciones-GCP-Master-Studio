# Guía Técnica 03: Algoritmia, Repetición Espaciada, ES2026 y Persistencia

**Ruta del Motor:** `plataforma_entrenamiento_master/js/`  
**Archivos Afectados:** `engine.js`, `state.js`, `data_loader.js`  

---

## 1. Modernización de `BlockRotationEngine` con Sets de ES2026

El motor de rotación de bloques divide un pool de 300 preguntas en exactamente 6 bloques de 50 preguntas disjuntos ($B_1, B_2, \dots, B_6$).

### 1.1 Garantía Matemática de Partición Disjunta
Actualmente el particionado utiliza arrays y filtrado manual. Usando los nuevos **Métodos Algebraicos de `Set` de JavaScript (ES2025/ES2026)**, la verificación de disyunción y compleción se simplifica y optimiza en tiempo $O(N)$:

```javascript
/**
 * Valida formalmente que los 6 bloques formen una partición disjunta del pool total.
 * @param {Array<Array<object>>} blocks - Array de 6 bloques
 * @param {Array<object>} fullPool - Pool total de 300 preguntas
 * @returns {boolean}
 */
function verifyDisjointPartition(blocks, fullPool) {
  const fullSet = new Set(fullPool.map(q => q.id));
  const seenSet = new Set();

  for (let i = 0; i < blocks.length; i++) {
    const blockSet = new Set(blocks[i].map(q => q.id));

    // 1. Verificar que el bloque sea disjunto respecto a los anteriores
    if (!blockSet.isDisjointFrom(seenSet)) {
      console.error(`Error: El Bloque ${i + 1} se solapa con bloques previos.`);
      return false;
    }

    // 2. Acumular elementos vistos (Unión de Sets)
    seenSet = seenSet.union(blockSet);
  }

  // 3. Verificar que la unión sea idéntica al pool completo (Diferencia vacía)
  const missing = fullSet.difference(seenSet);
  if (missing.size > 0) {
    console.error(`Error: Faltan ${missing.size} preguntas en la partición.`);
    return false;
  }

  return true;
}
```

---

## 2. Modernización de `LeitnerEngine` con la Temporal API

El sistema de repetición espaciada organiza las preguntas en 4 cajas (0 = debilidades críticas, 1 = repaso a 1 día, 2 = repaso a 3 días, 3 = maestría a 7 días).

### 2.1 Sustitución de `Date.now()` por `Temporal.PlainDate`
* **Problema de `Date.now()`:** Propenso a errores por cambios de zona horaria, horario de verano (DST) y saltos de reloj del sistema operativo.
* **Solución con `Temporal`:** Gestión determinista de fechas de calendario:

```javascript
/**
 * Calcula la próxima fecha de repaso espaciado para un ítem Leitner.
 * @param {number} boxLevel - Nivel de caja actual (0, 1, 2, 3)
 * @returns {string} Fecha ISO de próximo repaso (ej. '2026-08-29')
 */
function calculateNextReviewDate(boxLevel) {
  // Obtener fecha actual en la zona horaria del usuario
  const today = Temporal.Now.plainDateISO();

  const reviewIntervals = {
    0: Temporal.Duration.from({ hours: 0 }),  // Inmediato (cola de fallos)
    1: Temporal.Duration.from({ days: 1 }),   // Repaso a 24 horas
    2: Temporal.Duration.from({ days: 3 }),   // Repaso a 3 días
    3: Temporal.Duration.from({ days: 7 })    // Repaso a 7 días (Maestría)
  };

  const duration = reviewIntervals[boxLevel] || Temporal.Duration.from({ days: 1 });
  const nextDate = today.add(duration);

  return nextDate.toString(); // Formato YYYY-MM-DD
}

/**
 * Determina si una pregunta está vencida para repaso hoy.
 * @param {string} nextReviewDateIso - Fecha guardada en el estado
 * @returns {boolean}
 */
function isDueForReview(nextReviewDateIso) {
  if (!nextReviewDateIso) return true;
  const today = Temporal.Now.plainDateISO();
  const targetDate = Temporal.PlainDate.from(nextReviewDateIso);
  return Temporal.PlainDate.compare(today, targetDate) >= 0;
}
```

---

## 3. Calibración del Predictor de Probabilidad de Aprobación

La función de probabilidad logística en `engine.js` calcula:
$$P(\text{pass}) = \frac{1}{1 + e^{-k(S_{\text{cal}} - S_0)}}$$

### 3.1 Factores de Calibración
1. **Score Ponderado EWMA ($S_{\text{EWMA}}$):** Promedio móvil ponderado exponencialmente ($\alpha = 0.35$) dando mayor peso a las últimas 3 sesiones.
2. **Penalización por Desbalance de Dominio ($D_{\text{penalty}}$):** Si un candidato obtiene 90% en 3 dominios pero 40% en Seguridad, la probabilidad real de aprobar cae significativamente.
   $$D_{\text{penalty}} = \max(0, \bar{D} - D_{\min}) \times 0.25$$
3. **Penalización por Respuestas Aceleradas (*Pacing Rush*):** Si el tiempo promedio por pregunta es inferior a 25 segundos (indicador de adivinanza rápida), se aplica un factor de descuento sobre el puntaje proyectado.
4. **Acotamiento Estricto:** $P(\text{pass}) \in [0.0\%, 99.9\%]$ con valor inicial de arranque en frío (*cold start*) de 15.0%.

---

## 4. Persistencia, Backups y Arquitectura Anti-Tamper (`state.js`)

1. **Validación CRC-32 IEEE 802.3:** Cada exportación JSON incluye un encabezado con la firma hash CRC-32 calculada sobre el cuerpo serializado del payload.
2. **Rechazo Inmediato ante Manipulación:** En caso de discrepancia de 1 solo bit en el checksum al importar un respaldo, el sistema emite una excepción estructurada y preserva el estado local intacto.
3. **Preparación para Base de Datos Local (SQLite / DuckDB WASM):**
   - Para versiones futuras que registren telemetría por milisegundo en miles de sesiones, la arquitectura desacopla el adaptador de persistencia en `js/state.js` mediante la interfaz `StorageAdapter` (soportando `LocalStorageAdapter`, `IndexedDBAdapter` o `SQLiteWasmAdapter`).
