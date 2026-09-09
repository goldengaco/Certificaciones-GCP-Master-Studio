const fs = require('fs');
const original = JSON.parse(fs.readFileSync('.agents/batch4_explorer/original_batch4.json', 'utf8'));

original.forEach((q, i) => {
  console.log('----------------------------------------------------');
  console.log('[' + (i+1) + '] ID: ' + q.id + ' | Block: ' + q.blockId);
  console.log('Title: ' + q.title);
  console.log('Section: ' + (q.sectionId || 'none') + ' | Sub: ' + (q.subsectionId || 'none'));
  console.log('Scenario (' + q.scenario.trim().split(/\s+/).length + ' words):\n' + q.scenario);
  console.log('Correct: ' + q.correct);
  console.log('Options:');
  q.options.forEach(o => {
    console.log('  [' + o.letter + '] (' + o.text.length + ' chars): ' + o.text);
  });
  console.log('Doc URL: ' + q.officialDocUrl);
});
