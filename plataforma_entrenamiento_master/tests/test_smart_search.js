const fs = require('fs');
global.window = global;
global.document = {
  getElementById: () => null,
  querySelectorAll: () => []
};

require('../data/cert_cdl.js');
require('../data/cert_ace.js');
require('../data/cert_pca.js');
require('../js/ui_search.js');

global.GCP_UI_SEARCH.assembleAllQuestions();

const testQueries = [
  'que es iam',
  'como conectar vpc con vpn',
  'spanner vs bigtable',
  'roles de service account',
  'cloud run contenedores'
];

console.log("==========================================");
console.log("SMART SEARCH ENGINE VERIFICATION TEST");
console.log("==========================================");

for (const q of testQueries) {
  global.GCP_UI_SEARCH.searchQuery = q;
  global.GCP_UI_SEARCH.applySearchFilters();
  const count = global.GCP_UI_SEARCH.filteredQuestions.length;
  const topMatch = count > 0 ? global.GCP_UI_SEARCH.filteredQuestions[0] : null;
  console.log(`\nQuery: "${q}"`);
  console.log(`  • Matches found: ${count}`);
  if (topMatch) {
    console.log(`  • Top result: [${topMatch.id}] ${topMatch.title}`);
  }
}
console.log("\n==========================================");
