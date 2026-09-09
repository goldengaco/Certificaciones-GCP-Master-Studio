/**
 * Aplica el lote 1 de PCA (PCA-D2-001..025) al banco, sustituyendo POR ID.
 * Aborta si algo no cuadra: es preferible no aplicar nada a aplicar a medias.
 */
const fs = require('fs');
const path = require('path');
const RAIZ = path.join(__dirname, '..', '..');
const BANCO = path.join(RAIZ, 'data', 'cert_pca.js');
const BORRADOR = path.join(RAIZ, 'lotes_nuevos', 'pca_d2_lote2.json');

require(BANCO);
const antes = global.GCP_PCA_QUESTIONS;
const nuevos = JSON.parse(fs.readFileSync(BORRADOR, 'utf8'));

const porId = new Map(nuevos.map(q => [q.id, q]));
if (porId.size !== nuevos.length) { console.error('ABORTA: ids repetidos en el borrador'); process.exit(1); }

const ordenAntes = antes.map(q => q.id).join('|');
let sustituidos = 0;
const despues = antes.map(q => {
  const n = porId.get(q.id);
  if (!n) return q;
  sustituidos++;
  return n;
});

if (sustituidos !== 20) { console.error('ABORTA: se sustituyeron ' + sustituidos + ', se esperaban 20'); process.exit(1); }
if (despues.length !== antes.length) { console.error('ABORTA: cambia el tamano del banco'); process.exit(1); }
if (despues.map(q => q.id).join('|') !== ordenAntes) { console.error('ABORTA: cambia el ORDEN del array (la rotacion de bloques usa la posicion)'); process.exit(1); }

// Se regenera el archivo con el MISMO pie que tenia (module.exports + global),
// para no romper ni la carga en el navegador ni la de los tests con node.
const cuerpo = JSON.stringify(despues, null, 2).split('\n').map((l, i) => i === 0 ? l : '  ' + l).join('\n');
const salida = [
  "(function (global) {",
  "  'use strict';",
  "",
  "  const GCP_PCA_QUESTIONS = " + cuerpo + ";",
  "",
  "  if (typeof module !== 'undefined' && module.exports) {",
  "    module.exports = GCP_PCA_QUESTIONS;",
  "  }",
  "  if (typeof global !== 'undefined') {",
  "    global.GCP_PCA_QUESTIONS = GCP_PCA_QUESTIONS;",
  "  }",
  "})(typeof window !== 'undefined' ? window : global);",
  ""
].join('\n');

fs.writeFileSync(BANCO, salida, 'utf8');
console.log('aplicado: ' + sustituidos + ' sustituciones, banco de ' + despues.length + ' items, orden intacto');
