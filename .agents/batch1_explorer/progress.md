# Progress — Batch 1 Explorer

**Last visited**: 2026-08-29T21:41:40Z
**Current Step**: Extracting and analyzing ACE-D1-001 through ACE-D1-025 from `cert_ace.js`.

## Task Checklist
- [x] Read required rules, guidelines, and taxonomy documents.
- [x] Initialize DISPATCH.md, BRIEFING.md, progress.md.
- [x] Extract existing ACE-D1-001..ACE-D1-025 questions and calculate baseline metrics with `medir_lote.js`.
- [x] Identify which 4 questions to make multi-select (5 options, choose 2).
- [x] Map each question to taxonomy (`sectionId: ACE-1`, `subsectionId: ACE-1.1` or `ACE-1.2`, concepts, etc.).
- [x] Calculate deterministic FNV-1a key for each question.
- [x] Draft rewritten scenarios, balanced options (variance <= 25%), elevated distractors, rigorous explanations, official documentation links.
- [x] Validate draft against automated checks (R1-R6) using node scripts.
- [x] Write `draft_batch1.json`.
- [x] Generate comprehensive `handoff.md`.
- [x] Send coordination message back to parent.
