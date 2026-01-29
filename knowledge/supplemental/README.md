# Supplemental Knowledge Base

## Purpose

This is the **staging area** for new information that hasn't been integrated into the Master Knowledge Base yet.

## Why Supplemental Information Exists

New information often:
- Is incomplete
- Affects multiple sections
- Is not yet finalized
- Might change again
- Was shared informally (chat, call, WhatsApp)

If we immediately merge into Master KB, we risk:
- Contradictions
- Rewrites
- Inconsistencies
- Loss of historical context

**Therefore:** All new information enters via the Supplemental KB first.

## How to Add Entries

Use this format in `entries.md`:

```markdown
---

## S-YYYY-MM-DD-XX

**Related Sections:** (e.g., Rooms, Pricing, Booking)
**Status:** Temporary / Pending / Confirmed
**Type:** Clarification / Addition / Correction / Expansion

### Content
[Clear, plain-language description of the information]

### Notes
[Context, rationale, or future integration hints]

---
```

## Entry ID Format

- `S-` prefix for Supplemental
- `YYYY-MM-DD` date added
- `-XX` sequential number for that day (01, 02, etc.)

Example: `S-2026-01-29-01`

## Status Options

| Status | Meaning |
|--------|---------|
| **Temporary** | May change, use with caution |
| **Pending** | Awaiting confirmation |
| **Confirmed** | Verified, ready for integration |
| **Integrated** | Merged into Master KB (keep for history) |

## Type Options

| Type | Meaning |
|------|---------|
| **Clarification** | Makes existing info clearer |
| **Addition** | New info not in Master KB |
| **Correction** | Fixes error in Master KB |
| **Expansion** | Extends existing info with more detail |

## Integration Rules

**DO NOT** integrate supplemental info immediately.

Integration should happen when:
- Information has stabilized
- No contradictions remain
- It affects multiple outputs consistently
- The owner confirms it is "final enough"

**Suggested cadence:**
- Review Supplemental KB every 1-3 months
- Batch-integrate into Master KB
- Increment version number in `master/VERSION.md`

## Important Rules

1. **Append-only** — Never delete entries
2. **Mark superseded** — If info changes, add new entry and mark old as superseded
3. **Reference Master sections** — Always note which Master KB sections are affected
4. **Date everything** — Use entry IDs for traceability

## AI Agent Usage

AI agents should:
1. Read Master KB as authoritative
2. Read Supplemental KB as refinements/overrides
3. If conflict exists: prefer newer supplemental entry
4. If information is missing: ask for clarification, do NOT invent

## File Location

All entries go in: `/knowledge/supplemental/entries.md`
