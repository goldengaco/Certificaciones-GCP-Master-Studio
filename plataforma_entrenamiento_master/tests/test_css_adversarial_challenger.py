"""
Adversarial Stress Test Harness for CSS Redesign 2026
Challenger 1 (teamwork_preview_challenger_1)
"""

import os
import re
import sys

def main():
    css_path = os.path.join(os.path.dirname(__file__), '..', 'css', 'styles.css')
    if not os.path.exists(css_path):
        print(f"ERROR: styles.css not found at {css_path}")
        sys.exit(1)

    with open(css_path, 'r', encoding='utf-8') as f:
        css = f.read()

    size_bytes = os.path.getsize(css_path)
    print("=" * 70)
    print("  EMPIRICAL CHALLENGER 1: CSS ADVERSARIAL STRESS TEST SUITE")
    print("=" * 70)

    total_tests = 0
    passed_tests = 0

    def assert_test(name, condition, details=""):
        nonlocal total_tests, passed_tests
        total_tests += 1
        if condition:
            passed_tests += 1
            print(f"  [PASS] {name} {details}")
        else:
            print(f"  [FAIL] {name} {details}")

    # TEST 1: File size budget
    assert_test(
        "File Size Budget (<= 92,160 bytes / 90 KiB)",
        size_bytes <= 92160,
        f"(Actual: {size_bytes} bytes / {size_bytes/1024:.2f} KiB, Headroom: {92160 - size_bytes} bytes)"
    )

    # TEST 2: Syntax and Delimiter Balance
    open_b = css.count('{')
    close_b = css.count('}')
    assert_test(
        "Brace Balance ({ and })",
        open_b == close_b and open_b > 0,
        f"({open_b} open == {close_b} close)"
    )

    open_c = css.count('/*')
    close_c = css.count('*/')
    assert_test(
        "Comment Delimiter Balance (/* and */)",
        open_c == close_c and open_c > 0,
        f"({open_c} open == {close_c} close)"
    )

    open_p = css.count('(')
    close_p = css.count(')')
    assert_test(
        "Parentheses Balance (( and ))",
        open_p == close_p and open_p > 0,
        f"({open_p} open == {close_p} close)"
    )

    # TEST 3: CSS Custom Property Resolution (0 Undefined var(--...))
    defined_vars = set(re.findall(r'(--[a-zA-Z0-9_-]+)\s*:', css))
    used_vars = set(re.findall(r'var\(\s*(--[a-zA-Z0-9_-]+)', css))
    undefined_vars = used_vars - defined_vars
    assert_test(
        "CSS Variable Resolution",
        len(undefined_vars) == 0,
        f"({len(defined_vars)} defined, {len(used_vars)} used, {len(undefined_vars)} undefined: {undefined_vars})"
    )

    # TEST 4: Hero Typography Hierarchy (font-weight >= 700, font-size >= 1.5rem)
    hero_match = re.search(r'\.welcome-title\s*\{([^}]+)\}', css)
    if hero_match:
        content = hero_match.group(1)
        fw_match = re.search(r'font-weight:\s*(\d+)', content)
        fs_match = re.search(r'font-size:\s*([\d\.]+)rem', content)
        fw = int(fw_match.group(1)) if fw_match else 0
        fs = float(fs_match.group(1)) if fs_match else 0.0
        assert_test(
            "Hero Title Hierarchy (font-weight >= 700, font-size >= 1.5rem)",
            fw >= 700 and fs >= 1.5,
            f"(font-weight: {fw}, font-size: {fs}rem)"
        )
    else:
        assert_test("Hero Title Hierarchy (.welcome-title present)", False, "Rule not found")

    # TEST 5: Stat Numbers & Tabular Numerals
    stat_num_match = re.search(r'\.stat-num\s*\{([^}]+)\}', css)
    if stat_num_match:
        content = stat_num_match.group(1)
        has_tab = 'tabular-nums' in content or 'tnum' in content
        fs_match = re.search(r'font-size:\s*([\d\.]+)rem', content)
        fs = float(fs_match.group(1)) if fs_match else 0.0
        assert_test(
            "Stat Num Prominence & Tabular Numerals",
            has_tab and fs >= 1.5,
            f"(tabular-nums: {has_tab}, font-size: {fs}rem)"
        )
    else:
        assert_test("Stat Num Prominence (.stat-num present)", False, "Rule not found")

    # Additional tabular numeral checks
    tabular_selectors = ['.action-meta', '.box-count', '.timer-badge', '.score-number']
    for sel in tabular_selectors:
        sel_esc = re.escape(sel)
        match = re.search(sel_esc + r'[^{]*\{([^}]+)\}', css)
        has_tab = match and ('tabular-nums' in match.group(1) or 'tnum' in match.group(1))
        assert_test(f"Tabular Numerals on {sel}", bool(has_tab))

    # TEST 6: Prominent Action Icon Wrappers (>= 48x48px, target 58x58px)
    icon_wrapper_match = re.search(r'\.action-icon-wrapper\s*\{([^}]+)\}', css)
    if icon_wrapper_match:
        content = icon_wrapper_match.group(1)
        w_match = re.search(r'width:\s*(\d+)px', content)
        h_match = re.search(r'height:\s*(\d+)px', content)
        w = int(w_match.group(1)) if w_match else 0
        h = int(h_match.group(1)) if h_match else 0
        assert_test(
            "Action Icon Wrapper Dimensions (width/height >= 48px)",
            w >= 48 and h >= 48,
            f"(width: {w}px, height: {h}px)"
        )
    else:
        assert_test("Action Icon Wrapper (.action-icon-wrapper present)", False, "Rule not found")

    # TEST 7: Multi-Layer Shadows (>= 2 layers on cards)
    # Stat Pill
    stat_pill_match = re.search(r'\.stat-pill[^{]*\{[^}]*box-shadow:\s*([^;]+);', css)
    if stat_pill_match:
        layers = len(stat_pill_match.group(1).split(','))
        assert_test(
            "Stat Pill Multi-Layer Shadow (>= 2 layers)",
            layers >= 2,
            f"({layers} shadow layers)"
        )
    else:
        assert_test("Stat Pill Box Shadow", False, "No box-shadow found")

    # Action Card
    action_card_match = re.search(r'\.action-card[^{]*\{[^}]*box-shadow:\s*([^;]+);', css)
    if action_card_match:
        layers = len(action_card_match.group(1).split(','))
        assert_test(
            "Action Card Multi-Layer Shadow (>= 2 layers)",
            layers >= 2,
            f"({layers} shadow layers)"
        )
    else:
        assert_test("Action Card Box Shadow", False, "No box-shadow found")

    # Human Welcome Hero Card
    hero_card_match = re.search(r'\.human-welcome-card[^{]*\{[^}]*box-shadow:\s*([^;]+);', css)
    if hero_card_match:
        layers = len(hero_card_match.group(1).split(','))
        assert_test(
            "Hero Card Multi-Layer Shadow (>= 2 layers)",
            layers >= 2,
            f"({layers} shadow layers)"
        )
    else:
        assert_test("Hero Card Box Shadow", False, "No box-shadow found")

    # TEST 8: Action Cards Distinct Visual Identity & Accents
    assert_test(
        "Study Mode Card Accent (.card-study-human)",
        '.card-study-human' in css and ('#4285F4' in css or '#8ab4f8' in css or 'rgba(28, 38, 56' in css)
    )
    assert_test(
        "Exam Mode Card Accent (.card-exam-human)",
        '.card-exam-human' in css and ('#34A853' in css or '#81c995' in css or 'rgba(24, 46, 34' in css)
    )
    assert_test(
        "Drill Mode Card Accent (.card-drill-human)",
        '.card-drill-human' in css and ('#FBBC05' in css or '#fdd663' in css or 'rgba(50, 42, 20' in css)
    )

    # TEST 9: Button System States & Active Tactile Mechanics
    btn_base = re.search(r'\.btn\s*\{([^}]+)\}', css)
    btn_active = re.search(r'\.btn:active[^{]*\{([^}]+)\}', css)
    assert_test(
        "Button Base Transitions & Tactile Active Press",
        btn_base is not None and btn_active is not None and 'scale' in btn_active.group(1),
        f"(active scale transform present in .btn:active)"
    )

    btn_variants = ['.btn-primary', '.btn-secondary', '.btn-accent', '.btn-warning', '.btn-danger', '.btn-outline', '.btn-ghost', '.btn-lg']
    for btn in btn_variants:
        assert_test(f"Button Variant {btn} defined", btn in css)

    # TEST 10: Responsive Breakpoint Invariants
    media_matches = re.findall(r'@media\s*\(([^\)]+)\)\s*\{', css)
    assert_test(
        "Responsive Media Queries Coverage (Mobile/Tablet Breakpoints)",
        len(media_matches) >= 3,
        f"({len(media_matches)} breakpoints detected: {', '.join(media_matches)})"
    )

    print("=" * 70)
    print(f"  RESULTS: {passed_tests} / {total_tests} Tests Passed ({passed_tests/total_tests*100:.1f}%)")
    print("=" * 70)

    if passed_tests == total_tests:
        print("\n[SUCCESS] ALL ADVERSARIAL STRESS TESTS PASSED CLEANLY (VERDICT: APPROVE)")
        sys.exit(0)
    else:
        print(f"\n[FAILURE] DETECTED: {total_tests - passed_tests} failed tests")
        sys.exit(1)

if __name__ == '__main__':
    main()
