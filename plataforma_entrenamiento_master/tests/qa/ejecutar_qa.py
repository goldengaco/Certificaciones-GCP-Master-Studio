#!/usr/bin/env python3
"""
ejecutar_qa.py — corre toda la suite y devuelve un único veredicto.

    python tests/qa/ejecutar_qa.py                 # todo
    python tests/qa/ejecutar_qa.py banco           # solo la fidelidad del banco
    python tests/qa/ejecutar_qa.py contraste a11y  # varias

Levanta servidor.py por su cuenta en un puerto libre y lo apaga al terminar.
Sale con código 1 si cualquier prueba falla.
"""
import os, subprocess, sys, socket, time, signal

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
AQUI = os.path.dirname(os.path.abspath(__file__))

def puerto_libre():
    s = socket.socket(); s.bind(('127.0.0.1', 0)); p = s.getsockname()[1]; s.close(); return p

PRUEBAS = {
    'banco':      ('Fidelidad del banco de preguntas', ['node', os.path.join(AQUI,'test_fidelidad_banco.js')], False),
    'contraste':  ('Contraste WCAG AA sobre el CSS',   [sys.executable, os.path.join(AQUI,'test_contraste.py')], False),
    'humo':       ('Humo funcional',                   ['node', os.path.join(AQUI,'test_humo.mjs')], True),
    'a11y':       ('Accesibilidad (axe-core)',         ['node', os.path.join(AQUI,'test_a11y.mjs')], True),
    'lighthouse': ('Lighthouse',                       ['node', os.path.join(AQUI,'test_lighthouse.mjs')], True),
}
ORDEN = ['banco', 'contraste', 'humo', 'a11y', 'lighthouse']

pedidas = [a for a in sys.argv[1:] if a in PRUEBAS] or ORDEN
necesita_servidor = any(PRUEBAS[k][2] for k in pedidas)

srv = None; base = None
if necesita_servidor:
    p = puerto_libre()
    srv = subprocess.Popen([sys.executable, os.path.join(RAIZ,'servidor.py'), str(p), '--no-browser'],
                           cwd=RAIZ, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    base = f'http://127.0.0.1:{p}'
    # Esperar a que el puerto responda de verdad, no un sleep a ciegas.
    import urllib.request, urllib.error
    listo = False
    for _ in range(40):
        if srv.poll() is not None:
            print('servidor.py murió al arrancar; ejecuta "python servidor.py" a mano para ver el error')
            sys.exit(2)
        try:
            urllib.request.urlopen(base + '/index.html', timeout=1).read(1)
            listo = True; break
        except Exception:
            time.sleep(0.5)
    if not listo:
        srv.kill(); print('el servidor no respondió en 20 s'); sys.exit(2)
    print(f'servidor de pruebas en {base}\n')

resultados = []
try:
    for k in pedidas:
        titulo, cmd, usa_srv = PRUEBAS[k]
        print('\n' + '#'*72); print('# ' + titulo); print('#'*72)
        args = list(cmd) + ([base] if usa_srv else [])
        if k == 'lighthouse': args = list(cmd) + [base + '/index.html', '3']
        rc = subprocess.call(args, cwd=RAIZ)
        resultados.append((titulo, rc))
finally:
    if srv:
        srv.send_signal(signal.SIGTERM); srv.wait(timeout=5)

print('\n' + '='*72); print('RESUMEN'); print('='*72)
for t, rc in resultados:
    print(f'  {"PASA " if rc == 0 else "FALLA"}  {t}')
malos = [t for t, rc in resultados if rc != 0]
print()
if malos:
    print(f'{len(malos)} de {len(resultados)} suites fallan. NO publiques ni confíes en los puntajes.')
    sys.exit(1)
print('Todas las suites pasan.')
