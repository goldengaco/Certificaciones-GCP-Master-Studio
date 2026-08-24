import sys, re
sys.stdout.reconfigure(encoding='utf-8')

html = open(r'c:\DevWork\Certificaciones_GCP\plataforma_entrenamiento_master\index.html', encoding='utf-8').read()

emoji_pattern = re.compile(
    "["
    "\U0001F300-\U0001FAD6"
    "\U00002600-\U000027BF"
    "\U0000FE0F"
    "\U0001F1E0-\U0001F1FF"
    "]+", re.UNICODE
)

lines = html.split('\n')
for i, line in enumerate(lines):
    matches = emoji_pattern.findall(line)
    if matches:
        print(f"  L{i+1}: {matches} -> {line.strip()[:150]}")

all_emojis = emoji_pattern.findall(html)
print(f"\nTotal emoji instances: {len(all_emojis)}")
