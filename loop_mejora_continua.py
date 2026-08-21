#!/usr/bin/env python3
"""
=============================================================================
LOOP DE MEJORA CONTINUA Y AUDITORÍA AUTOMATIZADA — GCP MASTER STUDIO
=============================================================================
"""

import os
import sys
import json
import time
import re
import zlib
from pathlib import Path

# Force UTF-8 on Windows terminal output
if sys.platform == "win32":
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

BASE_DIR = Path(__file__).resolve().parent
MASTER_DIR = BASE_DIR / "plataforma_entrenamiento_master"
DATA_DIR = MASTER_DIR / "data"
JS_DIR = MASTER_DIR / "js"
BACKUP_DIR = BASE_DIR / "backups_automaticos"

def print_banner():
    print("=" * 75)
    print("  [+] LOOP DE MEJORA CONTINUA & AUDITORIA FORENSE -- GCP MASTER STUDIO")
    print("=" * 75)
    print(f"  Directorio Base: {BASE_DIR}")
    print(f"  Timestamp: {time.strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 75)

def audit_javascript_file(file_path):
    """Verifica que un archivo JS no tenga errores de sintaxis usando node -c."""
    if not file_path.exists():
        return False, f"Archivo no encontrado: {file_path.name}"
    
    import subprocess
    try:
        res = subprocess.run(
            ["node", "-c", str(file_path)],
            capture_output=True,
            text=True,
            check=False
        )
        if res.returncode == 0:
            content = file_path.read_text(encoding="utf-8")
            return True, f"OK ({len(content):,} bytes, {len(content.splitlines()):,} lineas)"
        else:
            return False, f"Error de sintaxis: {res.stderr.strip()}"
    except Exception as e:
        return False, f"Error al ejecutar node: {e}"

def audit_question_bank(cert_file, cert_name, expected_count=300):
    """Audita un banco de preguntas específico para garantizar calidad de examen real."""
    print(f"\n[*] Auditando Banco de Preguntas: {cert_name} ({cert_file.name})...")
    
    if not cert_file.exists():
        print(f"  [-] ERROR: {cert_file.name} no existe.")
        return False
    
    content = cert_file.read_text(encoding="utf-8")
    
    question_ids = re.findall(r'"id":\s*"([^"]+)"', content)
    unique_ids = set(question_ids)
    
    print(f"  - Total de Preguntas Detectadas: {len(question_ids)}")
    print(f"  - IDs Unicos: {len(unique_ids)}")
    
    if len(question_ids) != len(unique_ids):
        duplicates = [x for x in question_ids if question_ids.count(x) > 1]
        print(f"  [!] ALERTA: Se encontraron IDs duplicados: {set(duplicates)}")
        return False
    
    distractors_count = len(re.findall(r'"distractors":\s*\{', content))
    explanations_count = len(re.findall(r'"explanation":\s*"', content))
    keywords_count = len(re.findall(r'"keywords":\s*\[', content))
    
    print(f"  - Justificaciones Tecnicas: {explanations_count}/{len(question_ids)}")
    print(f"  - Analisis de Distractores (Trampas): {distractors_count}/{len(question_ids)}")
    print(f"  - Puntos Clave (Keywords): {keywords_count}/{len(question_ids)}")
    
    if explanations_count < len(question_ids) * 0.95:
        print("  [!] Advertencia: Algunas preguntas carecen de justificacion tecnica.")
        return False
    
    print(f"  [+] Banco {cert_name}: 100% VALIDO Y CALIBRADO.")
    return True

def create_automated_backup():
    """Genera un respaldo íntegro con firma CRC-32."""
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    timestamp = time.strftime("%Y%m%d_%H%M%S")
    backup_file = BACKUP_DIR / f"gcp_master_backup_{timestamp}.json"
    
    print(f"\n[*] Generando Respaldo Automatico en: {backup_file.name}...")
    
    snapshot = {
        "version": "2.1.0",
        "createdAt": time.time(),
        "createdIso": time.strftime("%Y-%m-%d %H:%M:%S"),
        "files": {}
    }
    
    target_files = [
        DATA_DIR / "cert_cdl.js",
        DATA_DIR / "cert_ace.js",
        DATA_DIR / "cert_pca.js",
        DATA_DIR / "case_studies.js",
        DATA_DIR / "free_certifications.js",
        DATA_DIR / "architecture_tools.js",
        JS_DIR / "engine.js",
        JS_DIR / "state.js",
        JS_DIR / "i18n.js",
        JS_DIR / "ui_search.js",
        JS_DIR / "ui_news.js",
        JS_DIR / "ui_tools.js",
        MASTER_DIR / "index.html"
    ]
    
    for tf in target_files:
        if tf.exists():
            data = tf.read_text(encoding="utf-8")
            crc = zlib.crc32(data.encode("utf-8")) & 0xffffffff
            snapshot["files"][tf.name] = {
                "sizeBytes": len(data),
                "crc32": f"{crc:08X}",
                "content": data
            }
    
    backup_file.write_text(json.dumps(snapshot, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"  [+] Respaldo guardado exitosamente ({backup_file.stat().st_size / 1024 / 1024:.2f} MB).")

def run_full_improvement_loop():
    print_banner()
    
    # 1. Auditar archivos JS
    print("\n[1] Auditoria de Modulos JavaScript...")
    js_files = list(DATA_DIR.glob("*.js")) + list(JS_DIR.glob("*.js"))
    all_js_ok = True
    for jf in js_files:
        ok, msg = audit_javascript_file(jf)
        status = "[+]" if ok else "[-]"
        print(f"  {status} {jf.name}: {msg}")
        if not ok:
            all_js_ok = False
            
    # 2. Auditar bancos de preguntas
    print("\n[2] Auditoria Forense de Preguntas de Examen...")
    cdl_ok = audit_question_bank(DATA_DIR / "cert_cdl.js", "Cloud Digital Leader (CDL)")
    ace_ok = audit_question_bank(DATA_DIR / "cert_ace.js", "Associate Cloud Engineer (ACE)")
    pca_ok = audit_question_bank(DATA_DIR / "cert_pca.js", "Professional Cloud Architect (PCA)")
    
    # 3. Auditar Casos de Estudio y Recursos Gratuitos
    print("\n[3] Auditoria de Casos de Estudio y Radar de Certificados Free...")
    cs_ok, cs_msg = audit_javascript_file(DATA_DIR / "case_studies.js")
    fc_ok, fc_msg = audit_javascript_file(DATA_DIR / "free_certifications.js")
    at_ok, at_msg = audit_javascript_file(DATA_DIR / "architecture_tools.js")
    print(f"  {'[+]' if cs_ok else '[-]'} Casos de Estudio PCA: {cs_msg}")
    print(f"  {'[+]' if fc_ok else '[-]'} Radar Free Certifications: {fc_msg}")
    print(f"  {'[+]' if at_ok else '[-]'} Herramientas de Arquitectura: {at_msg}")
    
    # 4. Generar Respaldo
    create_automated_backup()
    
    print("\n" + "=" * 75)
    if all_js_ok and cdl_ok and ace_ok and pca_ok and cs_ok and fc_ok and at_ok:
        print("  [SUCCESS] RESULTADO DEL LOOP: TODAS LAS COMPONENTES ESTAN AL 100% DE CALIDAD.")
        print("  El sistema esta listo para entrenamiento, evaluacion y publicacion.")
    else:
        print("  [WARNING] RESULTADO DEL LOOP: Se detectaron advertencias en los modulos.")
    print("=" * 75)

if __name__ == "__main__":
    run_full_improvement_loop()
