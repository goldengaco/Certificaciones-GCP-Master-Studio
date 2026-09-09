#!/usr/bin/env node
/**
 * calibrador.js — Control de calidad del banco de preguntas.
 *
 *   node scripts/calibrador.js medir  <cdl|ace|pca>
 *   node scripts/calibrador.js probar <lote.json> <cdl|ace|pca>
 *   node scripts/calibrador.js aplicar <lote.json> <cdl|ace|pca>
 *
 * Regla de oro: la puerta es mecánica y se ejecuta SIEMPRE antes de aplicar.
 * Ningún lote entra al banco sin pasarla. Un generador que dice "listo" no
 * es verificación: esto sí lo es.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..');
const BANCO = c => path.join(RAIZ, 'data', 'cert_' + c + '.js');

// --- utilidades ---------------------------------------------------------
const norm = s => String(s || '').toLowerCase().normalize('NFD')
  .replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9 ]/g, ' ')
  .split(/\s+/).filter(w => w.length > 3);

const ABSURDO = /prometan|en papel|imprimi|m[áa]gic|contrase[ñn]a maestra|drive personal|port[áa]tiles de los empleados|chips de silicio|di[ée]sel|100 administradores|tienda de inform[áa]tica|nadie es responsable|correos electr[óo]nicos enviados|generadores|rezar|gritar|por fax|pedir a los|sin importar los requisitos/i;

const letras = q => (q.options || []).map(o => o.letter);
const correctas = q => [].concat(q.correct);
const textoDe = (q, L) => ((q.options || []).find(o => o.letter === L) || {}).text || '';

function cargar(cert) {
  const arr = require(BANCO(cert));
  if (!Array.isArray(arr)) throw new Error('El banco ' + cert + ' no es un arreglo');
  return arr;
}

// --- métricas del adversario ciego --------------------------------------
function adversario(preguntas) {
  let n = 0, largo = 0, absurdo = 0, kw = 0, kwN = 0;
  for (const q of preguntas) {
    const ops = q.options || [];
    if (ops.length < 2) continue;
    const cs = correctas(q);
    const ok = ops.filter(o => cs.includes(o.letter));
    const bad = ops.filter(o => !cs.includes(o.letter));
    if (!ok.length || !bad.length) continue;
    n++;

    const mx = Math.max(...ops.map(o => o.text.length));
    if (ok.every(o => o.text.length === mx)) largo++;
    if (bad.some(o => ABSURDO.test(o.text))) absurdo++;

    const claves = q.keywords || [];
    if (claves.length) {
      kwN++;
      const set = new Set(claves.flatMap(norm));
      const punt = o => { const w = new Set(norm(o.text)); let s = 0; for (const k of set) if (w.has(k)) s++; return s; };
      if (Math.max(...ok.map(punt)) > Math.max(...bad.map(punt))) kw++;
    }
  }
  const p = (v, d) => d ? (100 * v / d).toFixed(1) + '%' : '—';
  return { n, largo, pLargo: p(largo, n), absurdo, pAbsurdo: p(absurdo, n), kw, kwN, pKw: p(kw, kwN) };
}

// --- puerta de calidad de un lote ---------------------------------------
const BANDA_MAX = 1.35;   // opción más larga / más corta
const MIN_RATIO = 0.55;   // ninguna opción por debajo de esto respecto a la más larga

function revisarItem(nuevo, viejo) {
  const f = [];
  if (!viejo) { f.push('no existe una pregunta con id ' + nuevo.id); return f; }

  const Lv = letras(viejo), Ln = letras(nuevo);
  if (Lv.join() !== Ln.join()) f.push('cambian las letras de las opciones');

  const cv = correctas(viejo).join(), cn = correctas(nuevo).join();
  if (cv !== cn) f.push('cambia la letra correcta (' + cv + ' -> ' + cn + ')');

  // INVIOLABLE: el texto de la respuesta correcta puede reescribirse, pero
  // debe declararse. Si no se declara, tiene que ser idéntico.
  for (const L of correctas(viejo)) {
    if (textoDe(nuevo, L) !== textoDe(viejo, L) && !nuevo.correctaReescrita) {
      f.push('cambia el texto de la correcta (' + L + ') sin declarar "correctaReescrita": true');
    }
  }
  if (String(nuevo.scenario || '') !== String(viejo.scenario || '')) f.push('cambia el escenario');

  const ops = nuevo.options || [];
  if (ops.length !== (viejo.options || []).length) f.push('cambia el número de opciones');

  const lens = ops.map(o => (o.text || '').length);
  const mx = Math.max(...lens), mn = Math.min(...lens);
  if (mx / mn > BANDA_MAX) f.push('banda de longitud ' + (mx / mn).toFixed(2) + ' > ' + BANDA_MAX + ' (' + lens.join('/') + ')');

  const cs = correctas(nuevo);
  const ok = ops.filter(o => cs.includes(o.letter));
  if (ok.length && ok.every(o => o.text.length === mx) && mx !== mn) {
    f.push('la correcta sigue siendo la más larga');
  }
  for (const o of ops) {
    if (o.text.length / mx < MIN_RATIO) f.push('opción ' + o.letter + ' demasiado corta');
    if (ABSURDO.test(o.text)) f.push('opción ' + o.letter + ' con lenguaje de relleno');
  }

  // Palabras clave no deben favorecer a la correcta
  const claves = nuevo.keywords || viejo.keywords || [];
  if (claves.length) {
    const set = new Set(claves.flatMap(norm));
    const punt = o => { const w = new Set(norm(o.text)); let s = 0; for (const k of set) if (w.has(k)) s++; return s; };
    const bad = ops.filter(o => !cs.includes(o.letter));
    if (ok.length && bad.length && Math.max(...ok.map(punt)) > Math.max(...bad.map(punt)) + 1) {
      f.push('las palabras clave siguen apuntando a la correcta');
    }
  }

  // Cada distractor necesita su justificación
  const just = nuevo.distractors || {};
  for (const o of ops) {
    if (cs.includes(o.letter)) continue;
    if (!just[o.letter] || String(just[o.letter]).trim().length < 40) {
      f.push('falta justificación suficiente para el distractor ' + o.letter);
    }
  }
  if (!nuevo.subsectionId) f.push('falta subsectionId (marca de verificado)');

  return f;
}

function probar(loteFile, cert) {
  const lote = JSON.parse(fs.readFileSync(loteFile, 'utf8'));
  const items = Array.isArray(lote) ? lote : lote.questions;
  const banco = cargar(cert);
  const idx = new Map(banco.map(q => [q.id, q]));

  let malos = 0;
  for (const it of items) {
    const f = revisarItem(it, idx.get(it.id));
    if (f.length) { malos++; console.log('  ✗ ' + it.id); f.forEach(x => console.log('      · ' + x)); }
  }
  const antes = adversario(items.map(it => idx.get(it.id)).filter(Boolean));
  const desp = adversario(items);
  console.log('\n  Lote: ' + items.length + ' preguntas · ' + (items.length - malos) + ' aprueban · ' + malos + ' rechazadas');
  console.log('  Adversario ciego (pista de longitud):  antes ' + antes.pLargo + '  ->  después ' + desp.pLargo);
  console.log('  Fuga por palabras clave:               antes ' + antes.pKw + '  ->  después ' + desp.pKw);
  console.log('\n  ' + (malos ? '✗ NO APLICABLE — corrige los rechazos' : '✓ LOTE APROBADO'));
  return malos === 0;
}

function aplicar(loteFile, cert) {
  if (!probar(loteFile, cert)) { process.exit(1); }
  const lote = JSON.parse(fs.readFileSync(loteFile, 'utf8'));
  const items = Array.isArray(lote) ? lote : lote.questions;
  const ruta = BANCO(cert);
  let src = fs.readFileSync(ruta, 'utf8');

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const bdir = path.join(RAIZ, 'backups');
  if (!fs.existsSync(bdir)) fs.mkdirSync(bdir, { recursive: true });
  fs.writeFileSync(path.join(bdir, 'cert_' + cert + '.' + stamp + '.bak.js'), src);

  const banco = cargar(cert);
  const idx = new Map(banco.map((q, i) => [q.id, i]));
  for (const it of items) {
    const i = idx.get(it.id);
    if (i === undefined) continue;
    const q = banco[i];
    q.options = it.options;
    q.distractors = it.distractors;
    q.subsectionId = it.subsectionId;
    if (it.keywords) q.keywords = it.keywords;
    if (it.explanation) q.explanation = it.explanation;
  }

  const cab = src.slice(0, src.indexOf('['));
  const pie = src.slice(src.lastIndexOf(']') + 1);
  fs.writeFileSync(ruta, cab + JSON.stringify(banco, null, 2) + pie);
  console.log('\n  Aplicadas ' + items.length + ' preguntas a cert_' + cert + '.js');
  console.log('  Respaldo: backups/cert_' + cert + '.' + stamp + '.bak.js');
}

// --- CLI ----------------------------------------------------------------
const [cmd, a1, a2] = process.argv.slice(2);
if (cmd === 'medir') {
  const banco = cargar(a1);
  const ver = banco.filter(q => q.subsectionId), sin = banco.filter(q => !q.subsectionId);
  const fmt = (t, r) => '  ' + t.padEnd(16) + String(r.n).padStart(4) + '   largo ' + r.pLargo.padStart(6) + '   claves ' + r.pKw.padStart(6) + '   absurdos ' + r.pAbsurdo.padStart(6);
  console.log('\n  BANCO ' + a1.toUpperCase() + ' — ' + banco.length + ' preguntas   (azar = 25.0%)\n');
  console.log(fmt('todas', adversario(banco)));
  if (ver.length) console.log(fmt('verificadas', adversario(ver)));
  if (sin.length) console.log(fmt('sin verificar', adversario(sin)));
  console.log('');
} else if (cmd === 'probar') { probar(a1, a2); }
else if (cmd === 'aplicar') { aplicar(a1, a2); }
else {
  console.log('uso:\n  node scripts/calibrador.js medir  <cdl|ace|pca>\n' +
              '  node scripts/calibrador.js probar <lote.json> <cert>\n' +
              '  node scripts/calibrador.js aplicar <lote.json> <cert>');
}
