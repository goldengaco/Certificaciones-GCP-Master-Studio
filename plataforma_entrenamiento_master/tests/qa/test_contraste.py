#!/usr/bin/env python3
"""
test_contraste.py — contraste WCAG AA calculado sobre el CSS, sin navegador.

Complementa a axe-core: axe solo mide lo que está pintado en pantalla en ese
momento, así que un badge que aparece únicamente al fallar una pregunta se le
escapa. Esto revisa TODAS las reglas que fijan color y fondo a la vez, en los
dos temas, se rendericen o no.

Uso:   python tests/qa/test_contraste.py
Sale con código 1 si algún par queda por debajo de 4.5:1.

Limitación conocida: analiza regla por regla, sin resolver la cascada. Si dos
reglas apuntan al mismo selector, gana la que tenga !important o vaya después;
revisa el archivo antes de "arreglar" un falso positivo.
"""
import re
import os, sys
RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
css = re.sub(r'/\*.*?\*/', '', open(os.path.join(RAIZ,'css','styles.css'), encoding='utf-8').read(), flags=re.S)
def blocks(pat):
    out={}
    m=re.search(pat+r'\s*\{([^}]*)\}',css)
    if not m: return out
    for line in m.group(1).split(';'):
        if ':' in line:
            k,v=line.split(':',1); k=k.strip(); v=v.split('/*')[0].strip()
            if k.startswith('--'): out[k]=v
    return out
dark=blocks(r':root, \[data-theme="dark"\]'); light={**dark, **blocks(r'\[data-theme="light"\]')}
def resolve(v,tk,d=0):
    v=v.strip()
    if d>8: return v
    m=re.fullmatch(r'var\((--[\w-]+)\s*(?:,\s*([^)]+))?\)',v)
    if m:
        tok=m.group(1)
        if tok in tk: return resolve(tk[tok],tk,d+1)
        if m.group(2): return resolve(m.group(2),tk,d+1)
        return None
    return v
def rgb(v):
    if not v: return None
    v=v.strip()
    m=re.fullmatch(r'#([0-9a-fA-F]{6})',v)
    if m: h=m.group(1); return tuple(int(h[i:i+2],16) for i in (0,2,4))
    m=re.fullmatch(r'#([0-9a-fA-F]{3})',v)
    if m: h=m.group(1); return tuple(int(h[i]*2,16) for i in range(3))
    m=re.fullmatch(r'rgba?\(([^)]+)\)',v)
    if m:
        p=[x.strip() for x in m.group(1).split(',')]
        try: return tuple(float(x) for x in p[:3])+((float(p[3]),) if len(p)>3 else ())
        except: return None
    return {'white':(255,255,255),'black':(0,0,0)}.get(v.lower())
def comp(fg,bg):
    if len(fg)==4:
        a=fg[3]; return tuple(fg[i]*a+bg[i]*(1-a) for i in range(3))
    return fg[:3]
def lum(c):
    f=lambda x:(x/255)/12.92 if x/255<=0.03928 else (((x/255)+0.055)/1.055)**2.4
    return .2126*f(c[0])+.7152*f(c[1])+.0722*f(c[2])
def ratio(a,b):
    L=sorted([lum(a),lum(b)],reverse=True); return (L[0]+.05)/(L[1]+.05)

TOTAL=[0]
# reglas que fijan color Y fondo a la vez
rules=re.findall(r'([^{}/]+?)\{([^}]*)\}',css)
for tname,tk in (('OSCURO',dark),('CLARO',light)):
    base=rgb(resolve(tk.get('--bg-base','#131314'),tk)) or (19,19,20)
    print('\n'+'='*72); print('REGLAS CON color + background — TEMA',tname); print('='*72)
    fails=[]
    for sel,body in rules:
        sel=sel.strip()
        if sel.startswith('@') or '--' == sel[:2]: continue
        d={}
        for line in body.split(';'):
            if ':' in line:
                k,v=line.split(':',1); d[k.strip()]=v.split('!')[0].split('/*')[0].strip()
        fg=d.get('color'); bg=d.get('background') or d.get('background-color')
        if not fg or not bg: continue
        if bg.startswith(('linear','radial','url','none','transparent')): continue
        f=rgb(resolve(fg,tk)); b=rgb(resolve(bg,tk))
        if not f or not b: continue
        bo=comp(b,base); fo=comp(f,bo)
        r=ratio(fo,bo)
        if r<4.5:
            fw = d.get('font-weight','')
            fails.append((round(r,2),sel[:60],fg,bg))
    fails.sort()
    if not fails: print('  PASA — ninguna por debajo de 4.5:1')
    for r,sel,fg,bg in fails:
        print(f'  FALLA {r:5.2f}:1  {sel:56}  color:{fg[:24]:24} bg:{bg[:24]}')
    TOTAL[0] += len(fails)


print()
if TOTAL[0]:
    print(f'RESULTADO: {TOTAL[0]} pares por debajo de 4.5:1 — NO cumple WCAG AA')
    sys.exit(1)
print('RESULTADO: todos los pares color/fondo cumplen WCAG AA en ambos temas')
sys.exit(0)
