@echo off
chcp 65001 >nul
title Google Cloud Master Certification Studio - Launcher
cd /d "%~dp0"

echo =======================================================================
echo    GOOGLE CLOUD MASTER CERTIFICATION TRAINING STUDIO (CDL - ACE - PCA)
echo    Plataforma de entrenamiento 100%% offline
echo =======================================================================
echo.
echo  [1] Verificando entorno de ejecucion local...

:: Opcion preferida: servidor.py (gzip + cabeceras de cache).
:: Sin el, Lighthouse penaliza ~3.000 KiB por falta de cache y ~37 KiB por falta de compresion.
where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo  [OK] Python detectado. Iniciando servidor optimizado...
    echo.
    python servidor.py 8989
    goto end
)

where py >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo  [OK] Python ^(py^) detectado. Iniciando servidor optimizado...
    echo.
    py -3 servidor.py 8989
    goto end
)

:: Respaldo con Node: tambien manda cache y compresion.
where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo  [OK] Node.js detectado. Iniciando servidor de respaldo en el puerto 8989...
    echo.
    node -e "const http=require(\x27http\x27),fs=require(\x27fs\x27),path=require(\x27path\x27),zlib=require(\x27zlib\x27);const mime={\x27.html\x27:\x27text/html\x27,\x27.css\x27:\x27text/css\x27,\x27.js\x27:\x27application/javascript\x27,\x27.json\x27:\x27application/json\x27,\x27.svg\x27:\x27image/svg+xml\x27};const s=http.createServer((req,res)=>{let u=req.url===\x27/\x27?\x27/index.html\x27:req.url.split(\x27?\x27)[0];let p=path.join(__dirname,u);if(!fs.existsSync(p)||!fs.statSync(p).isFile()){res.writeHead(404);return res.end(\x27Not Found\x27);}const t=mime[path.extname(p)]||\x27text/plain\x27;const h={\x27Content-Type\x27:t,\x27Cache-Control\x27:/\\.(js|css|json|svg|png|ico)$/.test(p)?\x27public, max-age=31536000, immutable\x27:\x27no-cache\x27,\x27X-Content-Type-Options\x27:\x27nosniff\x27};const buf=fs.readFileSync(p);if(/gzip/.test(req.headers[\x27accept-encoding\x27]||\x27\x27)\x26\x26buf.length>1024){const g=zlib.gzipSync(buf,{level:6});h[\x27Content-Encoding\x27]=\x27gzip\x27;h[\x27Vary\x27]=\x27Accept-Encoding\x27;res.writeHead(200,h);return res.end(g);}res.writeHead(200,h);res.end(buf);});s.listen(8989,\x27127.0.0.1\x27,()=>{console.log(\x27Servidor activo en http://127.0.0.1:8989/index.html\x27);require(\x27child_process\x27).exec(\x27start \x22\x22 http://127.0.0.1:8989/index.html\x27);});"
    goto end
)

echo  [INFO] Sin Python ni Node: abriendo el archivo directamente.
echo         Nota: en modo archivo local no hay cache ni compresion.
start "" "%~dp0index.html"

:end
exit /b 0
