import json
import sys

def parse(filename):
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print("=" * 50)
        print(f"LIGHTHOUSE SCORES: {filename}")
        print("=" * 50)
        for k, v in data.get('categories', {}).items():
            title = v.get('title')
            score = int((v.get('score') or 0) * 100)
            print(f"  • {title}: {score}/100")
        print("=" * 50)
        # Extract audits with issues
        print("\nAUDIT OPPORTUNITIES:")
        for a_id, audit in data.get('audits', {}).items():
            if audit.get('score') is not None and audit.get('score') < 1.0 and audit.get('title'):
                print(f"  [-] {audit.get('title')} ({audit.get('score') * 100:.0f}%) -> {audit.get('id')}")
    except Exception as e:
        print("Error reading report:", e)

if __name__ == '__main__':
    file = sys.argv[1] if len(sys.argv) > 1 else 'lighthouse_baseline.json'
    parse(file)
