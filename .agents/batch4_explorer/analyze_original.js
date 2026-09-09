const fs = require('fs');
const original = JSON.parse(fs.readFileSync('.agents/batch4_explorer/original_batch4.json', 'utf8'));

function letraCorrecta(id, numOpciones) {
  let h = 2166136261;
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % numOpciones;
}

console.log(`Original Batch 4 Analysis (${original.length} items):\n`);

let longestCorrectCount = 0;
let h1Count = 0;

original.forEach((q, i) => {
  const words = q.scenario.trim().split(/\s+/).length;
  const lens = q.options.map(o => (o.text || '').length);
  const maxL = Math.max(...lens);
  const minL = Math.min(...lens);
  const ratio = ((maxL - minL) / maxL * 100).toFixed(1);
  const correctOpt = q.options.find(o => o.letter === q.correct);
  const isLongest = correctOpt && correctOpt.text.length === maxL;
  const hashTarget = ['A', 'B', 'C', 'D'][letraCorrecta(q.id, 4)];
  
  if (isLongest) longestCorrectCount++;
  
  console.log(`[${i+1}] ${q.id} (${q.blockId || 'no-block'}) | Sub: ${q.subsectionId || 'none'}`);
  console.log(`    Title: ${q.title}`);
  console.log(`    Words: ${words} | Correct: ${q.correct} (Hash target: ${hashTarget}) | Longest: ${isLongest ? 'YES' : 'no'}`);
  console.log(`    Lens: [${lens.join(', ')}] -> Delta: ${ratio}%`);
  console.log(`    Options:`);
  q.options.forEach(o => {
    console.log(`      ${o.letter}: (${o.text.length} chars) ${o.text}`);
  });
  console.log(`    Doc: ${q.officialDocUrl}\n`);
});

console.log(`\nSummary:`);
console.log(`Correct is longest: ${longestCorrectCount} / ${original.length} (${(longestCorrectCount/original.length*100).toFixed(1)}%)`);
