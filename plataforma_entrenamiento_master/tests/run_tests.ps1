# tests/run_tests.ps1
#
# Master Windows PowerShell Test Runner for Google Cloud Certification Training Platform
# Executes test_integrity.js and test_algorithms.js with structured ANSI logging and exit code control.

[CmdletBinding()]
param(
    [switch]$VerboseOutput = $false
)

$ErrorActionPreference = "Continue"

# Resolve script directory and project root
$TestDir = $PSScriptRoot
$ProjectRoot = Split-Path -Parent $TestDir

$IntegrityScript = Join-Path $TestDir "test_integrity.js"
$AlgorithmsScript = Join-Path $TestDir "test_algorithms.js"
$AdversarialScript = Join-Path $TestDir "test_adversarial_stress.js"
$UiChartsScript = Join-Path $TestDir "test_ui_charts.js"
$UiControllersScript = Join-Path $TestDir "test_ui_controllers.js"
$ChallengerM3Script = Join-Path $TestDir "stress_test_challenger_m3_2.js"
$Challenger1M3Script = Join-Path $TestDir "test_adversarial_m3_challenger.js"
$ChallengerM5Script = Join-Path $TestDir "test_adversarial_fuzzer_m5.js"

# ANSI Colors
$ESC = [char]27
$C_RESET   = "$ESC[0m"
$C_BOLD    = "$ESC[1m"
$C_GREEN   = "$ESC[32m"
$C_RED     = "$ESC[31m"
$C_YELLOW  = "$ESC[33m"
$C_CYAN    = "$ESC[36m"
$C_BLUE    = "$ESC[34m"
$C_MAGENTA = "$ESC[35m"

Write-Host ""
Write-Host "$C_BLUE$C_BOLD=======================================================================$C_RESET"
Write-Host "$C_BLUE$C_BOLD   GOOGLE CLOUD CERTIFICATION PLATFORM -- E2E TEST RUNNER              $C_RESET"
Write-Host "$C_BLUE$C_BOLD=======================================================================$C_RESET"
Write-Host "$C_CYAN Project Root: $ProjectRoot$C_RESET"
Write-Host "$C_CYAN Time:         $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')$C_RESET"
Write-Host ""

$Stopwatch = [System.Diagnostics.Stopwatch]::StartNew()
$SuiteResults = @()
$OverallSuccess = $true

# Function to run a node test suite
function Run-Suite {
    param(
        [string]$Name,
        [string]$ScriptPath
    )

    Write-Host "$C_MAGENTA$C_BOLD>>> RUNNING TEST SUITE: $Name$C_RESET"
    Write-Host "$C_MAGENTA    Script: $ScriptPath$C_RESET"
    Write-Host ""

    $SuiteWatch = [System.Diagnostics.Stopwatch]::StartNew()
    
    # Execute Node test suite
    & node "$ScriptPath"
    $ExitCode = $LASTEXITCODE
    
    $SuiteWatch.Stop()
    $ElapsedMs = $SuiteWatch.ElapsedMilliseconds

    $Passed = ($ExitCode -eq 0)
    if (-not $Passed) {
        $script:OverallSuccess = $false
    }

    if ($Passed) {
        $StatusStr = "$C_GREEN[PASSED]$C_RESET"
    } else {
        $StatusStr = "$C_RED[FAILED (Exit Code $ExitCode)]$C_RESET"
    }

    Write-Host ""
    Write-Host "$C_BOLD Suite [$Name] Finished in ${ElapsedMs}ms -> $StatusStr"
    Write-Host "-----------------------------------------------------------------------"
    Write-Host ""

    $script:SuiteResults += [PSCustomObject]@{
        SuiteName   = $Name
        Passed      = $Passed
        ExitCode    = $ExitCode
        DurationMs  = $ElapsedMs
    }
}

# Run Suites
Run-Suite -Name "1. Question Bank & Schema Integrity Validator" -ScriptPath $IntegrityScript
Run-Suite -Name "2. Core Algorithmic & State Engine Suite"       -ScriptPath $AlgorithmsScript
Run-Suite -Name "3. Adversarial Stress & Mutation Suite"        -ScriptPath $AdversarialScript
Run-Suite -Name "4. Pure SVG Charts & Visualizations Suite"     -ScriptPath $UiChartsScript
Run-Suite -Name "5. UI Controllers & SPA State Machine Suite"   -ScriptPath $UiControllersScript
Run-Suite -Name "6. Challenger 2 M3 Empirical Challenge Suite"  -ScriptPath $ChallengerM3Script
Run-Suite -Name "7. Challenger 1 M3 Adversarial Interaction Suite" -ScriptPath $Challenger1M3Script
Run-Suite -Name "8. Challenger 1 M5 Adversarial Fuzzer & State Stress Suite" -ScriptPath $ChallengerM5Script

$Stopwatch.Stop()
$TotalElapsedMs = $Stopwatch.ElapsedMilliseconds

# Summary Banner
Write-Host "$C_BLUE$C_BOLD=======================================================================$C_RESET"
Write-Host "$C_BLUE$C_BOLD                         FINAL TEST SUMMARY                            $C_RESET"
Write-Host "$C_BLUE$C_BOLD=======================================================================$C_RESET"

foreach ($res in $SuiteResults) {
    if ($res.Passed) {
        $statusText = "$C_GREEN[ PASS ]$C_RESET"
    } else {
        $statusText = "$C_RED[ FAIL ]$C_RESET"
    }
    Write-Host ("  {0} {1,-50} ({2}ms)" -f $statusText, $res.SuiteName, $res.DurationMs)
}

Write-Host ""
Write-Host "  Total Execution Time: ${TotalElapsedMs}ms"
Write-Host "  Suites Run:           $($SuiteResults.Count)"
Write-Host "  Suites Passed:        $(@($SuiteResults | Where-Object { $_.Passed }).Count)"
Write-Host "  Suites Failed:        $(@($SuiteResults | Where-Object { -not $_.Passed }).Count)"
Write-Host "$C_BLUE$C_BOLD=======================================================================$C_RESET"

if ($OverallSuccess) {
    Write-Host "$C_GREEN$C_BOLD[SUCCESS] 100% OF TEST SUITES PASSED CLEANLY WITH ZERO FAILURES$C_RESET"
    Write-Host ""
    exit 0
} else {
    Write-Host "$C_RED$C_BOLD[FAILURE] ONE OR MORE TEST SUITES FAILED$C_RESET"
    Write-Host ""
    exit 1
}
