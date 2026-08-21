@echo off
chcp 65001 >nul
title Google Cloud Master Certification Studio - Launcher
cd /d "%~dp0"

echo =======================================================================
echo    GOOGLE CLOUD MASTER CERTIFICATION TRAINING STUDIO (CDL · ACE · PCA)
echo    100%% Offline & Standalone Enterprise Training Platform
echo =======================================================================
echo.
echo  [1] Verificando entorno de ejecucion local...

:: Intenta iniciar servidor HTTP con Python si esta disponible
where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo  [OK] Python detectado. Iniciando servidor HTTP local en puerto 8080...
    start "" "http://localhost:8080/index.html"
    echo.
    echo  Servidor activo en: http://localhost:8080/index.html
    echo  Para cerrar el servidor, presiona Ctrl+C o cierra esta ventana.
    echo.
    python -m http.server 8080
    goto end
)

:: Intenta iniciar servidor HTTP con py launcher
where py >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo  [OK] Python (py) detectado. Iniciando servidor HTTP local en puerto 8080...
    start "" "http://localhost:8080/index.html"
    echo.
    echo  Servidor activo en: http://localhost:8080/index.html
    echo  Para cerrar el servidor, presiona Ctrl+C o cierra esta ventana.
    echo.
    py -3 -m http.server 8080
    goto end
)

:: Si no hay Python, abre directamente el archivo HTML en el navegador predeterminado
echo  [INFO] Abriendo directamente en el navegador predeterminado (Zero CDN)...
start "" "%~dp0index.html"

:end
exit /b 0
