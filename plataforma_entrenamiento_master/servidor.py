#!/usr/bin/env python3
"""
Servidor local para GCP Cert Studio.

Reemplaza a `python -m http.server`, que no manda cabeceras de caché ni comprime
nada. Eso, por si solo, cuesta dos auditorias de Lighthouse:
  - "Use efficient cache lifetimes"   (~3.049 KiB desperdiciados)
  - "Document request latency"        (~37 KiB sin comprimir)

Uso:
    python servidor.py            -> puerto 8989, caché larga (números reales de Lighthouse)
    python servidor.py 8080       -> otro puerto
    python servidor.py --dev      -> sin caché larga, para cuando estés editando preguntas
    python servidor.py --no-browser
"""
import gzip
import io
import mimetypes
import os
import sys
import webbrowser
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

RAIZ = os.path.dirname(os.path.abspath(__file__))
UN_ANIO = 31536000

# Comprimir solo lo que comprime bien; imagenes y fuentes ya vienen comprimidas.
COMPRIMIBLES = {
    "text/html", "text/css", "text/plain", "text/markdown",
    "application/javascript", "text/javascript",
    "application/json", "image/svg+xml",
}
MINIMO_GZIP = 1024  # por debajo de esto, comprimir cuesta mas de lo que ahorra


MODO_DEV = "--dev" in sys.argv


class Handler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=RAIZ, **kwargs)

    # --- caché -------------------------------------------------------------
    def end_headers(self):
        ruta = self.path.split("?")[0]
        if MODO_DEV:
            # Mientras editas el banco de preguntas no quieres caché de ningún tipo.
            self.send_header("Cache-Control", "no-store")
        elif ruta.endswith((".js", ".css", ".json", ".woff2", ".svg", ".png", ".ico")):
            # Estáticos versionables: caché larga. Si editas un archivo, recarga
            # con Ctrl+Shift+R o añade ?v=2 a la etiqueta que lo importa.
            self.send_header("Cache-Control", f"public, max-age={UN_ANIO}, immutable")
        else:
            # El HTML siempre se revalida, para que los cambios se vean al recargar.
            self.send_header("Cache-Control", "no-cache")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "SAMEORIGIN")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header("Cross-Origin-Opener-Policy", "same-origin")
        self.send_header("Content-Security-Policy", "default-src 'self' 'unsafe-inline' data:; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'self';")
        super().end_headers()

    # --- gzip --------------------------------------------------------------
    def send_head(self):
        ruta = self.translate_path(self.path)
        if os.path.isdir(ruta) or not os.path.isfile(ruta):
            return super().send_head()

        tipo = mimetypes.guess_type(ruta)[0] or "application/octet-stream"
        acepta_gzip = "gzip" in self.headers.get("Accept-Encoding", "")
        tam = os.path.getsize(ruta)

        if not (acepta_gzip and tipo in COMPRIMIBLES and tam >= MINIMO_GZIP):
            return super().send_head()

        with open(ruta, "rb") as f:
            crudo = f.read()
        comprimido = gzip.compress(crudo, 6)

        self.send_response(200)
        self.send_header("Content-Type", tipo)
        self.send_header("Content-Encoding", "gzip")
        self.send_header("Content-Length", str(len(comprimido)))
        self.send_header("Vary", "Accept-Encoding")
        self.end_headers()
        return io.BytesIO(comprimido)

    def log_message(self, formato, *args):
        pass  # consola limpia


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    puerto = int(args[0]) if args else 8989
    inicial = puerto
    servidor = None
    for intento in range(50):
        try:
            servidor = ThreadingHTTPServer(("127.0.0.1", puerto), Handler)
            break
        except OSError:
            puerto += 1
    if servidor is None:
        print(f"No hay puertos libres entre {inicial} y {inicial + 49}.")
        return 1

    url = f"http://127.0.0.1:{puerto}/index.html"
    print(f"GCP Cert Studio en marcha:  {url}")
    print("Modo:", "desarrollo (sin caché)" if MODO_DEV else "normal (caché larga + gzip)")
    print("Ctrl+C para detener.")
    if "--no-browser" not in sys.argv:
        webbrowser.open(url)
    try:
        servidor.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
