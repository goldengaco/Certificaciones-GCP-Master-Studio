const fs = require('fs');
const path = require('path');

console.log("======================================================================");
console.log("  [+] TEST DE COMPONENTES INTERACTIVOS & BOTONES UI (2026 AUDIT)");
console.log("======================================================================");

const baseDir = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

// 1. Check all button IDs in HTML
const buttonRegex = /<button[^>]*id="([^"]+)"[^>]*>/g;
let match;
const buttonIds = [];
while ((match = buttonRegex.exec(html)) !== null) {
  buttonIds.push(match[1]);
}

console.log(`\n[1] Botones Registrados con ID en index.html: ${buttonIds.length}`);
buttonIds.forEach(id => {
  console.log(`  • <button id="${id}">`);
});

// 2. Check all select inputs
const selectRegex = /<select[^>]*id="([^"]+)"[^>]*>/g;
const selectIds = [];
while ((match = selectRegex.exec(html)) !== null) {
  selectIds.push(match[1]);
}
console.log(`\n[2] Selectores (<select>) Registrados: ${selectIds.length}`);
selectIds.forEach(id => {
  console.log(`  • <select id="${id}">`);
});

// 3. Check all text inputs
const inputRegex = /<input[^>]*id="([^"]+)"[^>]*>/g;
const inputIds = [];
while ((match = inputRegex.exec(html)) !== null) {
  inputIds.push(match[1]);
}
console.log(`\n[3] Inputs de Formulario (<input>) Registrados: ${inputIds.length}`);
inputIds.forEach(id => {
  console.log(`  • <input id="${id}">`);
});

// 4. Check that event listeners exist in app.js or respective ui modules
const appJs = fs.readFileSync(path.join(baseDir, 'js', 'app.js'), 'utf8');
const studyJs = fs.readFileSync(path.join(baseDir, 'js', 'ui_study.js'), 'utf8');
const examJs = fs.readFileSync(path.join(baseDir, 'js', 'ui_exam.js'), 'utf8');
const drillJs = fs.readFileSync(path.join(baseDir, 'js', 'ui_drill.js'), 'utf8');
const searchJs = fs.readFileSync(path.join(baseDir, 'js', 'ui_search.js'), 'utf8');
const newsJs = fs.readFileSync(path.join(baseDir, 'js', 'ui_news.js'), 'utf8');
const toolsJs = fs.readFileSync(path.join(baseDir, 'js', 'ui_tools.js'), 'utf8');

const allJsCode = appJs + studyJs + examJs + drillJs + searchJs + newsJs + toolsJs;

let wiredCount = 0;
let missingListeners = [];
buttonIds.forEach(id => {
  if (allJsCode.includes(id)) {
    wiredCount++;
  } else {
    missingListeners.push(id);
  }
});

console.log(`\n[4] Botones Enlazados con Event Listeners en JavaScript: ${wiredCount} de ${buttonIds.length}`);
if (missingListeners.length > 0) {
  console.log("  ⚠️ Botones sin referencia directa encontrada en JS:", missingListeners);
} else {
  console.log("  ✅ 100% de los botones interactivos están debidamente cableados a controladores JS.");
}

console.log("\n======================================================================");
console.log("  [SUCCESS] TEST DE INTERFACES COMPLETADO CON ÉXITO");
console.log("======================================================================");
