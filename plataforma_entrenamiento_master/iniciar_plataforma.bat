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

:: Intenta iniciar servidor HTTP con Node.js si esta disponible
where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo  [OK] Node.js detectado. Iniciando servidor HTTP local en puerto 8080...
    start "" "http://127.0.0.1:8080/index.html"
    echo.
    echo  Servidor activo en: http://127.0.0.1:8080/index.html
    echo  Para cerrar el servidor, presiona Ctrl+C o cierra esta ventana.
    echo.
    node -e "const http=require('http'),fs=require('fs'),path=require('path');const mime={'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.svg':'image/svg+xml'};http.createServer((req,res)=>{let p=path.join(__dirname,req.url==='/'?'index.html':req.url.split('?')[0]);if(fs.existsSync(p)&&fs.statSync(p).isFile()){res.writeHead(200,{'Content-Type':mime[path.extname(p)]||'text/plain'});fs.createReadStream(p).pipe(res);}else{res.writeHead(404);res.end('Not Found');}}).listen(8080,'127.0.0.1');"
    goto end
)

:: Intenta iniciar servidor HTTP con Python si esta disponible
where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo  [OK] Python detectado. Iniciando servidor HTTP local en puerto 8080...
    start "" "http://127.0.0.1:8080/index.html"
    echo.
    echo  Servidor activo en: http://127.0.0.1:8080/index.html
    echo  Para cerrar el servidor, presiona Ctrl+C o cierra esta ventana.
    echo.
    python -m http.server 8080 --bind 127.0.0.1
    goto end
)

:: Intenta iniciar servidor HTTP con py launcher
where py >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo  [OK] Python (py) detectado. Iniciando servidor HTTP local en puerto 8080...
    start "" "http://127.0.0.1:8080/index.html"
    echo.
    echo  Servidor activo en: http://127.0.0.1:8080/index.html
    echo  Para cerrar el servidor, presiona Ctrl+C o cierra esta ventana.
    echo.
    py -3 -m http.server 8080 --bind 127.0.0.1
    goto end
)

:: Si no hay Node ni Python, abre directamente el archivo HTML en el navegador
echo  [INFO] Abriendo directamente en el navegador predeterminado (Zero CDN / Standalone)...
start "" "%~dp0index.html"

:end
exit /b 0
