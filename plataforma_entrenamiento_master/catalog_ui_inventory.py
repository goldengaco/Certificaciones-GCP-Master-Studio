import os
import re
import json

def analyze_inventory():
    base_dir = r"c:\DevWork\Certificaciones_GCP\plataforma_entrenamiento_master"
    html_path = os.path.join(base_dir, "index.html")
    css_path = os.path.join(base_dir, "css", "styles.css")
    
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
        
    with open(css_path, "r", encoding="utf-8") as f:
        css = f.read()
        
    # Count SVG symbols / icons
    svg_symbols = re.findall(r'<symbol\s+id="([^"]+)"', html)
    svg_uses = re.findall(r'<use\s+href="#([^"]+)"', html)
    
    # Count buttons
    buttons = re.findall(r'<button\b[^>]*>', html)
    btn_ids = re.findall(r'<button\b[^>]*id="([^"]+)"', html)
    
    # Count inputs and selects
    inputs = re.findall(r'<input\b[^>]*>', html)
    selects = re.findall(r'<select\b[^>]*>', html)
    
    # Count emojis in html
    emoji_pattern = re.compile(r'[\U00010000-\U0010ffff]|[\u2600-\u27ff]|[\u2300-\u23ff]|[\u2b50]|[\u3030]|[\u00a9\u00ae]')
    emojis = emoji_pattern.findall(html)
    
    # Count cards / modals / sections
    cards = re.findall(r'class="[^"]*(?:card|box|panel|pill|strip)[^"]*"', html)
    sections = re.findall(r'<section\b[^>]*id="([^"]+)"', html)
    modals = re.findall(r'class="[^"]*modal[^"]*"', html)
    
    inventory = {
        "svg_symbols_defined": len(set(svg_symbols)),
        "svg_symbol_names": sorted(list(set(svg_symbols))),
        "svg_icon_instances": len(svg_uses),
        "total_buttons": len(buttons),
        "button_ids_sample": btn_ids[:15],
        "total_inputs": len(inputs),
        "total_selects": len(selects),
        "total_emojis_found": len(emojis),
        "total_ui_cards_and_containers": len(cards),
        "views_sections_count": len(sections),
        "sections": sections,
        "modals_count": len(modals)
    }
    
    print("=" * 60)
    print("UI COMPONENT & OBJECT INVENTORY (2026 SPEC)")
    print("=" * 60)
    print(f"• Total SVG Symbols Defined: {inventory['svg_symbols_defined']}")
    print(f"• Total SVG Icon Usages in DOM: {inventory['svg_icon_instances']}")
    print(f"• Total Interactive Buttons: {inventory['total_buttons']}")
    print(f"• Total Form Inputs: {inventory['total_inputs']}")
    print(f"• Total Select Elements: {inventory['total_selects']}")
    print(f"• Total UI Cards & Containers: {inventory['total_ui_cards_and_containers']}")
    print(f"• Total Main Views / Sections: {inventory['views_sections_count']} -> {sections}")
    print(f"• Total Modals & Dialogs: {inventory['modals_count']}")
    print(f"• Total Emojis to migrate to crisp SVGs: {inventory['total_emojis_found']}")
    print("=" * 60)
    
    with open(os.path.join(base_dir, "ui_inventory.json"), "w", encoding="utf-8") as f:
        json.dump(inventory, f, indent=2)

if __name__ == "__main__":
    analyze_inventory()
