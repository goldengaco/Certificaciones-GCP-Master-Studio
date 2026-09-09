/**
 * guardian.js — detecta el daño silencioso.
 *
 * Hay roturas que ninguna prueba nota porque la aplicación sigue cargando: un
 * script que duplica las 300 preguntas dentro del archivo, una reescritura que
 * cambia sin querer el texto de una respuesta correcta, un ítem que pierde su
 * enlace a documentación. Todo eso "funciona" y todo eso es daño.
 *
 * El guardián toma una huella de lo que NO debe cambiar, y después del trabajo
 * compara. Lo que cambió sin permiso, sale en rojo.
 *
 * Uso:
 *   node tests/qa/guardian.js --sello                  # antes de trabajar
 *   node tests/qa/guardian.js --verificar              # después
 *   node tests/qa/guardian.js --verificar --permitir-texto   # si reescribiste opciones a propósito
 */
'use strict';
const fs = require('fs');
const path = require('path');
const RAIZ = path.resolve(__dirname, '..', '..');
const SELLO = path.join(RAIZ, 'tests', 'qa', '.sello.json');
const args = process.argv.slice(2);
const MODO_SELLO = args.includes('--sello');
const PERMITIR_TEXTO = args.includes('--permitir-texto');

const clave = q => Array.isArray(q.correct) ? q.correct.slice().sort() : [q.correct];

function huella() {
  const out = {};
  for (const cert of ['cdl','ace','pca']) {
    const archivo = path.join(RAIZ, 'data', `cert_${cert}.js`);
    const crudo = fs.readFileSync(archivo, 'utf8');
    global.window = {};
    delete require.cache[require.resolve(archivo)];
    require(archivo);
    const qs = global.window[`GCP_${cert.toUpperCase()}_QUESTIONS`] || [];
    const items = {};
    qs.forEach(q => {
      items[q.id] = {
        // El TEXTO de la respuesta correcta, no su letra: reordenar es legítimo,
        // cambiar cuál es la respuesta no lo es.
        correcta: clave(q).map(l => (q.options.find(o => o.letter === l) || {}).text || '').sort().join(''),
        nOpciones: q.options.length,
        letras: q.options.map(o => o.letter).join(''),
        multi: !!q.isMultiSelect,
        dominio: q.domainId || '',
        doc: q.officialDocUrl || '',
        escenario: (q.scenario || '').length,
      };
    });
    out[cert] = {
      nItems: qs.length,
      // Cuántas veces aparece el marcador de un ítem en el fichero crudo: si es
      // mayor que nItems, hay datos duplicados aunque la app cargue bien.
      ocurrenciasCertId: (crudo.match(/"certId"/g) || []).length,
      bytes: crudo.length,
      items,
    };
  }
  return out;
}

const h = huella();

if (MODO_SELLO) {
  fs.writeFileSync(SELLO, JSON.stringify(h));
  for (const c of Object.keys(h)) {
    console.log(`${c.toUpperCase()}: ${h[c].nItems} ítems, ${h[c].ocurrenciasCertId} marcadores, ${h[c].bytes} bytes`);
  }
  console.log(`\nSello guardado en tests/qa/.sello.json`);
  process.exit(0);
}

if (!fs.existsSync(SELLO)) {
  console.error('No hay sello previo. Ejecuta primero: node tests/qa/guardian.js --sello');
  process.exit(2);
}
const prev = JSON.parse(fs.readFileSync(SELLO, 'utf8'));

let alertas = 0;
const mal = m => { alertas++; console.log(`  \x1b[31mALERTA\x1b[0m ${m}`); };
const bien = m => console.log(`  \x1b[32mok    \x1b[0m ${m}`);

console.log('\n\x1b[1m===== GUARDIÁN: qué cambió sin permiso =====\x1b[0m\n');

for (const cert of ['cdl','ace','pca']) {
  const a = prev[cert], b = h[cert];
  if (!a) { mal(`${cert}: no estaba en el sello`); continue; }
  console.log(`\x1b[1m--- ${cert.toUpperCase()} ---\x1b[0m`);

  b.nItems === a.nItems ? bien(`${b.nItems} ítems (sin cambios)`)
                        : mal(`el número de ítems pasó de ${a.nItems} a ${b.nItems}`);

  b.ocurrenciasCertId === b.nItems
    ? bien(`${b.ocurrenciasCertId} marcadores "certId" = ${b.nItems} ítems, sin datos duplicados`)
    : mal(`${b.ocurrenciasCertId} marcadores "certId" para ${b.nItems} ítems: HAY DATOS DUPLICADOS en el fichero`);

  const idsA = new Set(Object.keys(a.items)), idsB = new Set(Object.keys(b.items));
  const perdidos = [...idsA].filter(x => !idsB.has(x));
  const nuevos = [...idsB].filter(x => !idsA.has(x));
  perdidos.length ? mal(`${perdidos.length} ítems desaparecieron: ${perdidos.slice(0,5).join(', ')}`)
                  : bien('ningún ítem desaparecido');
  if (nuevos.length) console.log(`  \x1b[33mnuevo \x1b[0m ${nuevos.length} ítems añadidos: ${nuevos.slice(0,5).join(', ')}`);

  let cambioCorrecta = [], cambioEstructura = [], perdioDoc = [], cambioDominio = [];
  [...idsA].filter(x => idsB.has(x)).forEach(id => {
    const x = a.items[id], y = b.items[id];
    if (x.correcta !== y.correcta) cambioCorrecta.push(id);
    if (x.nOpciones !== y.nOpciones || y.letras !== 'ABCD'.slice(0, y.nOpciones) + 'EF'.slice(0, Math.max(0, y.nOpciones-4))) {
      if (x.nOpciones !== y.nOpciones && !y.multi) cambioEstructura.push(id);
    }
    if (x.doc && !y.doc) perdioDoc.push(id);
    if (x.dominio !== y.dominio) cambioDominio.push(id);
  });

  if (PERMITIR_TEXTO) {
    cambioCorrecta.length
      ? console.log(`  \x1b[33mnota  \x1b[0m ${cambioCorrecta.length} respuestas correctas con texto nuevo (permitido con --permitir-texto)`)
      : bien('ninguna respuesta correcta cambió de texto');
  } else {
    cambioCorrecta.length
      ? mal(`${cambioCorrecta.length} respuestas correctas apuntan a OTRO TEXTO: ${cambioCorrecta.slice(0,5).join(', ')}`)
      : bien('las respuestas correctas apuntan al mismo texto');
  }
  cambioEstructura.length ? mal(`${cambioEstructura.length} ítems cambiaron de número de opciones sin ser multi-select`)
                          : bien('estructura de opciones intacta');
  perdioDoc.length ? mal(`${perdioDoc.length} ítems perdieron su officialDocUrl: ${perdioDoc.slice(0,5).join(', ')}`)
                   : bien('ningún ítem perdió su enlace a documentación');
  cambioDominio.length ? console.log(`  \x1b[33mnota  \x1b[0m ${cambioDominio.length} ítems cambiaron de dominio`)
                       : bien('asignación de dominios intacta');
  console.log('');
}

console.log(alertas
  ? `\x1b[31m${alertas} alerta(s). Revisa antes de hacer commit.\x1b[0m\n`
  : `\x1b[32mSin daño colateral.\x1b[0m\n`);
process.exit(alertas ? 1 : 0);
