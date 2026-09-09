#!/usr/bin/env bash
# estado.sh — imprime el estado MEDIDO del proyecto. Empieza por aquí.
# Las cifras de cualquier documento pueden estar caducadas; estas no.
cd "$(dirname "$0")/../plataforma_entrenamiento_master" || exit 1
echo "=============================================="
echo " GCP Cert Studio — estado medido: $(date +%Y-%m-%d\ %H:%M)"
echo "=============================================="
node -e '
const fs=require("fs"); global.window=global;
console.log("\ncert  total  reescritas  multi   reserva");
["ace","cdl","pca"].forEach(c=>{
  eval(fs.readFileSync("data/cert_"+c+".js","utf8"));
  const q=global["GCP_"+c.toUpperCase()+"_QUESTIONS"];
  const v=q.filter(x=>x.subsectionId).length, m=q.filter(x=>x.isMultiSelect).length;
  console.log(c.toUpperCase().padEnd(5),String(q.length).padStart(5),
    String(v).padStart(11)+" ("+(100*v/q.length).toFixed(0)+"%)",
    (100*m/q.length).toFixed(1).padStart(6)+"%",
    String(q.filter(x=>x.reservaCiega).length).padStart(8));
});'
echo ""
echo "--- contrato (tiene que dar 0 FALLOS) ---"
node tests/qa/test_fidelidad_banco.js 2>&1 | tail -2
echo "--- adversario (ninguna heuristica > 45%) ---"
node tests/qa/adversario.js 2>&1 | grep -E "^\x1b\[1m--- |techo del adversario|Ninguna heur" | sed 's/\x1b\[[0-9;]*m//g'
echo "--- guardian (4 alertas esperadas, ver HANDOFF 5.6) ---"
node tests/qa/guardian.js --verificar 2>&1 | grep -E "alerta\(s\)|sin cambios sospechosos" | sed 's/\x1b\[[0-9;]*m//g' 
echo ""
echo "Siguiente paso y trampas conocidas: .agents/HANDOFF.md"
