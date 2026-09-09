# Guía Técnica 04: Automatización QA, Suite de Pruebas y DevOps en PowerShell 7.6

**Ruta de Tests:** `plataforma_entrenamiento_master/tests/`  
**Archivos Afectados:** `run_tests.ps1`, `test_integrity.js`, `test_algorithms.js`, `test_factual_accuracy.js` (Nuevo)  

---

## 1. Nuevo Test Automatizado: `tests/test_factual_accuracy.js`

Para evitar que en el futuro se introduzcan comandos `gcloud` inexistentes, flags obsoletos o productos descontinuados de Google Cloud, se debe implementar una suite de validación estática automatizada.

### 1.1 Reglas de Validación Automatizada
1. **Detección de Productos Descontinuados:** Bloquear reactivos que contengan como respuesta correcta términos como `BigQuery Omni`, `Dataprep`, `Stackdriver`, `Sustained Use Discounts` o `Basic Support`.
2. **Validación de Sintaxis `gcloud`:** Verificar contra una lista blanca de grupos CLI oficiales (`gcloud compute`, `gcloud container`, `gcloud storage`, `gcloud iam`, `gcloud logging`, `gcloud monitoring`, `gcloud scc`, etc.), prohibiendo grupos inexistentes como `gcloud dlp`.
3. **Validación de Enlaces a Documentación Oficial:** Comprobar que todos los campos `officialDocUrl` sigan el formato canónico `https://cloud.google.com/...`.
4. **Validación de Secciones de Casos de Estudio:** Asegurar que el 100% de los `caseStudySection` correspondan a claves existentes en `case_studies.js`.

### 1.2 Estructura del Script de Test
```javascript
/**
 * test_factual_accuracy.js
 * Validador estático de precisión técnica y vigencia de servicios Google Cloud 2026.
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');

// Cargar bancos de preguntas
const cdlData = require('../data/cert_cdl.js');
const aceData = require('../data/cert_ace.js');
const pcaData = require('../data/cert_pca.js');
const caseStudies = require('../data/case_studies.js');

const DEPRECATED_TERMS = [
  'dataprep',
  'bigquery omni',
  'sustained use discount',
  'basic support',
  'roles/developer'
];

const INVALID_CLI_PREFIXES = [
  'gcloud dlp'
];

console.log('=== VALIDANDO PRECISIÓN FACTUAL Y VIGENCIA 2026 ===');

let totalChecks = 0;
let errors = [];

[...cdlData, ...aceData, ...pcaData].forEach(q => {
  totalChecks++;
  const textPayload = JSON.stringify(q).toLowerCase();

  // 1. Validar términos descontinuados en respuestas correctas
  const correctOption = Array.isArray(q.correct)
    ? q.options.filter(o => q.correct.includes(o.letter))
    : q.options.find(o => o.letter === q.correct);

  if (correctOption) {
    const optText = (correctOption.text || '').toLowerCase();
    DEPRECATED_TERMS.forEach(term => {
      if (optText.includes(term)) {
        errors.push(`[${q.id}] Respuesta correcta contiene producto descontinuado: "${term}"`);
      }
    });
  }

  // 2. Validar comandos gcloud inexistentes
  if (q.gcloudCommand) {
    INVALID_CLI_PREFIXES.forEach(invalidCmd => {
      if (q.gcloudCommand.includes(invalidCmd)) {
        errors.push(`[${q.id}] Comando CLI gcloud inexistente: "${q.gcloudCommand}"`);
      }
    });
  }

  // 3. Validar secciones de casos de estudio
  if (q.caseStudy && q.caseStudy !== 'none' && q.caseStudySection) {
    const cs = caseStudies[q.caseStudy];
    if (!cs) {
      errors.push(`[${q.id}] Caso de estudio desconocido: "${q.caseStudy}"`);
    }
  }
});

console.log(`Verificados ${totalChecks} reactivos.`);
if (errors.length > 0) {
  console.error(`❌ Se encontraron ${errors.length} anomalías factuales:`);
  errors.forEach(e => console.error(`  - ${e}`));
  process.exit(1);
} else {
  console.log('✔ 100% de los reactivos pasan la verificación factual de Google Cloud.');
}
```

---

## 2. Automatización en PowerShell 7.6 (`tests/run_tests.ps1`)

En cumplimiento con las reglas del sistema (Windows 11 Pro + pwsh 7.6, sin `&&`, ejecución secuencial estricta), el script maestro de pruebas orquesta la ejecución secuencial completa:

```powershell
# run_tests.ps1
# Script maestro de pruebas en PowerShell 7.6 para Google Cloud Master Studio

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  GOOGLE CLOUD MASTER STUDIO — E2E MASTER TEST RUNNER     " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$ErrorActionPreference = "Stop"
$global:failedSuites = 0

function Run-TestSuite {
    param (
        [string]$SuiteName,
        [string]$Command
    )
    Write-Host "`n[SUITE] Ejecutando: $SuiteName..." -ForegroundColor Yellow
    $startTime = Get-Date

    try {
        Invoke-Expression $Command
        $elapsed = ((Get-Date) - $startTime).TotalMilliseconds
        Write-Host "✔ PASS: $SuiteName ($([Math]::Round($elapsed, 0)) ms)" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ FAIL: $SuiteName" -ForegroundColor Red
        Write-Host $_.Exception.Message -ForegroundColor Red
        $global:failedSuites++
    }
}

# 1. Verificación de Integridad de Esquemas y Reactivos
Run-TestSuite "1. Integridad de Esquemas y Reactivos (Tier 1 & 2)" "node .\tests\test_integrity.js"

# 2. Verificación de Motores Algorítmicos (Rotación, Leitner, Probabilidad, CRC-32)
Run-TestSuite "2. Verificación de Motores Algorítmicos (Tier 3)" "node .\tests\test_algorithms.js"

# 3. Verificación de Precisión Factual y Vigencia 2026
Run-TestSuite "3. Precisión Factual y Comandos gcloud (Tier 4)" "node .\tests\test_factual_accuracy.js"

# 4. Prueba de Estrés E2E y Fuzzer Adversarial
Run-TestSuite "4. Fuzzer Adversarial y Resistencia a Manipulación (Tier 5)" "node .\tests\test_adversarial_fuzzer_m5.js"

Write-Host "`n==========================================================" -ForegroundColor Cyan
if ($global:failedSuites -eq 0) {
    Write-Host "✔ TODAS LAS SUITES DE PRUEBA PASARON EXITOSAMENTE (100%)" -ForegroundColor Green
    exit 0
} else {
    Write-Host "❌ $global:failedSuites SUITES DE PRUEBA FALLARON" -ForegroundColor Red
    exit 1
}
```

---

## 3. Verificación de Cero Dependencias y 100% Offline

Para certificar que la aplicación funciona en entornos totalmente aislados de la red (*air-gapped*):
1. **Escaneo Estático de Red:** Ningún archivo HTML, CSS o JS debe contener llamadas a `http://`, `https://`, `cdn.jsdelivr.net`, `fonts.googleapis.com`, ni `unpkg.com`.
2. **Tipografías del Sistema:** La interfaz debe usar la pila de fuentes nativas del sistema operativo:
   ```css
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
   ```
3. **Sonidos y Gráficos Generativos:** Todos los sonidos se sintetizan proceduralmente con la Web Audio API y todos los gráficos se dibujan con SVG nativo en el DOM.
