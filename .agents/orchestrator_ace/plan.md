# Step-by-Step Execution Plan — ACE Remediation

## Strategy Overview
Execute 12 batches sequentially. For each batch:
1. **Explorer**: Analyze the 25 target questions from `cert_ace.js`. Compute FNV-1a hash key positions, identify 3-5 multi-select conversion candidates, draft pruned correct options and elevated GCP distractors (ensuring character length within <= 25% max-min range), draft discriminating constraints, verify official doc URLs, and prepare replacement JSON items.
2. **Worker**: Apply the replacement items to `plataforma_entrenamiento_master/data/cert_ace.js`, verify exactly 300 questions, run `node tests/qa/test_fidelidad_banco.js`, run `node tests/qa/medir_lote.js`, and commit with message `fix(ace): reescribir lote <batch_id> segun contrato de fidelidad`.
3. **Reviewer & Challenger**: Inspect rewritten items for psychometric fidelity, schema integrity, factual correctness, valid URLs, and distractor plausibility.
4. **Auditor**: Audit integrity (no cheating, no hardcoded results, no filler).
5. **Gate**: Verify all pass criteria. Update `GATE_STATUS.md` and `progress.md`. Advance to next batch.

## Batch Schedule
- [ ] Batch 1: ACE-D1-001..ACE-D1-025
- [ ] Batch 2: ACE-D1-026..ACE-D1-050
- [ ] Batch 3: ACE-D1-051..ACE-D1-060 + ACE-D2-001..ACE-D2-015
- [ ] Batch 4: ACE-D2-016..ACE-D2-040
- [ ] Batch 5: ACE-D2-041..ACE-D2-055 + ACE-D3-001..ACE-D3-010
- [ ] Batch 6: ACE-D3-011..ACE-D3-035
- [ ] Batch 7: ACE-D3-036..ACE-D3-060
- [ ] Batch 8: ACE-D3-061..ACE-D3-075 + ACE-D4-001..ACE-D4-010
- [ ] Batch 9: ACE-D4-011..ACE-D4-035
- [ ] Batch 10: ACE-D4-036..ACE-D4-060
- [ ] Batch 11: ACE-D5-001..ACE-D5-025
- [ ] Batch 12: ACE-D5-026..ACE-D5-050
- [ ] Final Verification: 0 FALLA in ACE, 300 questions, git log check, sample verification.
