#!/usr/bin/env node
/**
 * aplicar_lotes.js — Añade al banco CDL los lotes de preguntas nuevas
 * verificados la noche del 2 de septiembre de 2026.
 *
 * Uso, desde la raíz de plataforma_entrenamiento_master:
 *     node lotes_nuevos/aplicar_lotes.js
 *
 * Vuelve a pasar la puerta de calidad antes de tocar nada y hace copia de
 * seguridad. Si una sola pregunta falla, no se aplica ninguna.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const RAIZ = process.cwd();
const BANCO = path.join(RAIZ, 'data', 'cert_cdl.js');
const DIR = __dirname;
// Solo los lotes que aún no se han aplicado. Los ya aplicados se detectan
// igualmente por id duplicado y harían fallar la puerta, que es lo correcto.
const LOTES = ['cdl_ms_01.json'];

const BANDA_MAX = 1.35;
const norm = s => String(s || '').toLowerCase().normalize('NFD')
  .replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, ' ')
  .split(/\s+/).filter(w => w.length > 3);
const ABSURDO = /prometan|en papel|imprimi|m[áa]gic|contrase[ñn]a maestra|drive personal|chips de silicio|di[ée]sel|100 administradores|nadie es responsable|rezar|gritar|por fax/i;

function revisar(q, ids) {
  const f = [];
  const req = ['id','certId','domainId','domainName','subtopic','difficulty','bloomsLevel',
               'title','scenario','options','correct','explanation','distractors',
               'officialDocUrl','subsectionId','keywords'];
  for (const k of req) if (q[k] === undefined || q[k] === null || q[k] === '') f.push('falta ' + k);
  if (ids.has(q.id)) f.push('id duplicado en el banco');
  if (!/^https:\/\/cloud\.google\.com\//.test(String(q.officialDocUrl || ''))) f.push('officialDocUrl no es de cloud.google.com');

  const ops = q.options || [];
  if (ops.length < 4) f.push('menos de 4 opciones');
  if (ops.map(o => o.letter).join('') !== 'ABCDE'.slice(0, ops.length)) f.push('letras fuera de orden');

  const cs = [].concat(q.correct);
  for (const c of cs) if (!ops.some(o => o.letter === c)) f.push('correcta ' + c + ' inexistente');
  if (!q.isMultiSelect && cs.length !== 1) f.push('varias correctas sin isMultiSelect');

  const lens = ops.map(o => String(o.text || '').length);
  const mx = Math.max(...lens), mn = Math.min(...lens);
  if (mx / mn > BANDA_MAX) f.push('banda ' + (mx / mn).toFixed(2) + ' > ' + BANDA_MAX);
  const ok = ops.filter(o => cs.includes(o.letter));
  if (ok.length && ok.every(o => o.text.length === mx) && mx !== mn) f.push('la correcta es la más larga');
  for (const o of ops) if (ABSURDO.test(o.text)) f.push('opción ' + o.letter + ': relleno');

  const set = new Set((q.keywords || []).flatMap(norm));
  if (set.size) {
    const punt = o => { const w = new Set(norm(o.text)); let s = 0; for (const k of set) if (w.has(k)) s++; return s; };
    const bad = ops.filter(o => !cs.includes(o.letter));
    if (ok.length && bad.length && Math.max(...ok.map(punt)) > Math.max(...bad.map(punt)) + 1) {
      f.push('las palabras clave apuntan a la correcta');
    }
  }
  for (const o of ops) {
    if (cs.includes(o.letter)) continue;
    if (String((q.distractors || {})[o.letter] || '').trim().length < 40) f.push('justificación insuficiente para ' + o.letter);
  }
  if (String(q.explanation || '').length < 80) f.push('explicación corta');
  return f;
}

const src = fs.readFileSync(BANCO, 'utf8');
const banco = require(BANCO);
const ids = new Set(banco.map(q => q.id));

let nuevos = [], malos = 0;
for (const nombre of LOTES) {
  const ruta = path.join(DIR, nombre);
  if (!fs.existsSync(ruta)) { console.log('  ! falta ' + nombre); malos++; continue; }
  const items = JSON.parse(fs.readFileSync(ruta, 'utf8'));
  for (const it of items) {
    const f = revisar(it, ids);
    if (f.length) { malos++; console.log('  ✗ ' + it.id); f.forEach(x => console.log('       · ' + x)); }
    else { ids.add(it.id); nuevos.push(it); }
  }
  console.log('  ' + nombre + ': ' + items.length + ' preguntas');
}

if (malos) { console.log('\n  ✗ ' + malos + ' rechazos. No se ha modificado nada.'); process.exit(1); }

const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const bdir = path.join(RAIZ, 'backups');
if (!fs.existsSync(bdir)) fs.mkdirSync(bdir, { recursive: true });
fs.writeFileSync(path.join(bdir, 'cert_cdl.pre_lotes_' + stamp + '.bak.js'), src);

const salida = banco.concat(nuevos);
fs.writeFileSync(BANCO, src.slice(0, src.indexOf('[')) + JSON.stringify(salida, null, 2) + src.slice(src.lastIndexOf(']') + 1));

const c = {};
salida.forEach(q => c[q.domainId] = (c[q.domainId] || 0) + 1);
console.log('\n  ✓ Aplicadas ' + nuevos.length + ' preguntas.  Banco CDL: ' + banco.length + ' -> ' + salida.length);
console.log('  Respaldo en backups/cert_cdl.pre_lotes_' + stamp + '.bak.js');
console.log('\n  Reparto por dominio:');
Object.keys(c).sort().forEach(d => console.log('    ' + d + '  ' + c[d]));
console.log('\n  Comprueba después con:  node scripts/calibrador.js medir cdl');
