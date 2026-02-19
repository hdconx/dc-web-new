# Cleanup Plan — Ready for Your Approval

**Status:** ⏳ AWAITING GREEN LIGHT  
**Date:** 2026-02-19  
**Created by:** Sam (to address Haan's directive)

---

## What I've Done (Phase 1 Complete)

✅ Read your directive completely  
✅ Created `00_CRITICAL_CLEANUP_DIRECTIVE.md` (strategy)  
✅ Created `CLEANUP_PLAN_OUTLINE.md` (detailed plan)  
✅ Saved to memory (2026-02-19.md) to prevent context loss  
✅ This approval document

---

## The Problem (As You Stated)

1. Documents scattered all over — Windows, Linux, multiple folders
2. Accessibility broken — Some docs you can't access, some Claude Code can't, some I can't
3. File names useless — Don't tell us what a file is about
4. Folder structure broken — 30+ files at root, no organization
5. No version tracking — Can't tell current from obsolete
6. Context loss risk — Previous cleanup failed; need protection

---

## What I'm Proposing

### Folder Structure
```
00_SYSTEM/           ← Planning docs, registries, metadata
01_MEMORY/           ← Daily logs + long-term notes  
02_PROJECTS/         ← Active project work
03_ARCHIVE/          ← Old files (non-destructively archived)
04_EXPORTS/          ← Session exports, backups
05_DRAFTS/           ← Work-in-progress
```

### Naming Convention
`YYYY-MM-DD_CATEGORY_DESCRIPTION.md`

Example:
- `2026-02-18_SPEC_IMPLEMENTATION-V2.md` (was: IMPLEMENTATION_SPECIFICATION.md)
- `2026-02-17_RESEARCH_TARGET-MARKET-ANALYSIS.md` (was: TARGET_MARKET_ANALYSIS.md)

### Archive Approach
- **Never delete** — Move old files to `/03_ARCHIVE/2026-02-19_MIGRATION/`
- **Track everything** — ARCHIVE_REGISTRY.md logs every move
- **Organize archives** — Separate into: obsolete/, redundant/, restructured/, unclear/

### Context Loss Prevention
- **CLEANUP_STATE.md** — Tracks progress, enables resumption
- **Checkpoint after each step** — If context lost, can resume from last checkpoint
- **Full registry** — Can audit everything that happened

---

## Examples of What Will Happen

**Before:**
```
/home/node/.openclaw/workspace/
├── IMPLEMENTATION_SPECIFICATION.md (unclear when created)
├── RESEARCH_FINDINGS.md
├── MESSAGE_FOR_HAAN.txt
├── Sam's memory loss.txt (what is this?!)
├── ACTIVE_TASK.md
├── OVERNIGHT_RESEARCH_PLAN.md (current or old?)
└── [20+ more files at root]
```

**After:**
```
/home/node/.openclaw/workspace/
├── 00_SYSTEM/
│   ├── 00_CRITICAL_CLEANUP_DIRECTIVE.md
│   ├── CLEANUP_PLAN_OUTLINE.md
│   ├── FILE_TAXONOMY.md
│   ├── ARCHIVE_REGISTRY.md
│   └── INDEX.md
├── 01_MEMORY/
│   ├── memory/2026-02-19.md
│   └── MEMORY.md
├── 02_PROJECTS/dance-connexions-website/
│   ├── 1_RESEARCH/
│   │   ├── 2026-02-17_RESEARCH_TARGET-MARKET-ANALYSIS.md
│   │   └── 2026-02-17_RESEARCH_CONTENT-STRATEGY-PRD.md
│   ├── 3_IMPLEMENTATION/
│   │   ├── 2026-02-18_SPEC_IMPLEMENTATION-V1.md
│   │   └── 2026-02-18_SPEC_IMPLEMENTATION-V2.md
│   └── 6_DOCS/
│       └── 2026-02-17_GUIDE_DESIGN-BRIEF-FOR-HAAN.md
├── 03_ARCHIVE/2026-02-19_MIGRATION/
│   ├── MANIFEST.md
│   ├── obsolete/RESEARCH_FINDINGS.md
│   ├── redundant/OVERNIGHT_RESEARCH_PLAN.md
│   └── restructured/MESSAGE_FOR_HAAN.txt
└── 04_EXPORTS/
    ├── 2026-02-18_SESSION_TELEGRAM-EXPORT.md
    └── 2026-02-18_SESSION_TELEGRAM-EXPORT.json
```

---

## Execution Timeline (After Green Light)

| Phase | Task | Time | Notes |
|-------|------|------|-------|
| 3 | Create folder structure | 30 min | Actual directories created |
| 4 | Archive old files | 1 hour | Moved to /03_ARCHIVE/, logged in registry |
| 5 | Rename files | 1 hour | Apply naming convention |
| 6 | Create registries | 30 min | ARCHIVE_REGISTRY.md, FILE_TAXONOMY.md, etc. |
| 7 | Verify + document | 30 min | Final audit, update INDEX.md |
| **Total** | | **~4 hours** | With checkpoint documentation every 30 min |

---

## Questions for You (Optional)

Before saying "green light", consider:

1. **Folder structure** — Does it make sense? Anything to change?
2. **Naming convention** — Like `YYYY-MM-DD_CATEGORY_DESCRIPTION.md`?
3. **Archive location** — OK to use `/03_ARCHIVE/`? Or elsewhere?
4. **What to archive** — Should I use judgment on "unclear" files, or ask for each?
5. **Timeline** — Do this today? Or schedule for later?

---

## What I Need From You

**Option A: Approve as-is**
- Say "green light"
- I proceed with full execution
- Update CLEANUP_STATE.md after each phase
- Show you results

**Option B: Changes first**
- Tell me what to change
- I update the plan
- You approve revised plan
- Then proceed with execution

**Option C: Approval + modifications**
- Say "green light with these changes: [list]"
- I incorporate changes and proceed

---

## Risk Mitigation

| Risk | How I'll Prevent It |
|------|-------------------|
| Lose context mid-work | CLEANUP_STATE.md checkpoint every 30 min |
| Break something | Archive first, never delete — can restore if needed |
| Forget why a file was archived | ARCHIVE_REGISTRY.md tracks reason for every move |
| Get lost in the middle | CLEANUP_STATE.md shows exactly where I am |
| Forget what was done | ARCHIVE_REGISTRY.md + updated INDEX.md |

---

## Critical Notes

- **NO files will be deleted** — Only moved to archive
- **Everything will be logged** — Can audit any decision
- **State will be tracked** — Can resume after context loss
- **Your approval required** — No work without "green light"

---

## Documents to Review

**Required reading (10 min total):**

1. `00_CRITICAL_CLEANUP_DIRECTIVE.md` (5 min) — Overall strategy
2. `CLEANUP_PLAN_OUTLINE.md` (5 min) — Detailed plan
3. This document (2 min) — Summary + questions

---

## Ready?

**Tell me:**
- "Green light" (proceed as planned)
- "Green light + [changes]" (proceed with modifications)
- "Changes first, then green light" (discuss changes before approval)
- Any questions?

---

**Status:** Awaiting your word  
**Created:** 2026-02-19 23:06 MYT  
**Persistence:** Saved to memory/2026-02-19.md (won't be lost if context resets)

