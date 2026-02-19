# CLEANUP PLAN OUTLINE — For Your Approval

**Date:** 2026-02-19  
**Status:** AWAITING GREEN LIGHT  
**Scope:** Dance Connexions project workspace reorganization + archive strategy

---

## Current State Audit

### Files in Main Workspace
- 20+ scattered docs (many with unclear names)
- Research files, design docs, implementation specs mixed together
- Session exports (large .json and .md files)
- No folder structure beyond `/projects/`, `/memory/`, `/RESEARCH/`
- Many files with cryptic names (e.g., "Sam's memory loss.txt")

### Folders in Main Workspace
```
/home/node/.openclaw/workspace/
├── projects/dc-web-new/        (codebase + docs)
├── memory/                      (daily logs)
├── RESEARCH/                    (research docs)
└── [30+ files at root level]    ← PROBLEM: Chaos at root
```

### Accessibility Problems
| User | Can Access | Can't Access | Notes |
|------|-----------|-------------|-------|
| Haan | Windows docs | Linux workspace | No sync strategy |
| Claude Code | Most Linux files | Some restricted paths | Unclear which are readable |
| Sam (me) | Everything in workspace | Windows local docs | Limited to workspace |

### File Naming Problems

**Current names (unclear):**
- `Sam's memory loss.txt` — What is this?
- `ACTIVE_TASK.md` — Active where? When?
- `OVERNIGHT_RESEARCH_PLAN.md` — Is this current or from Feb 17?
- `DESIGN_DIRECTIONS.md` vs `DESIGN_DIRECTIONS_COMPLETE.md` — What's the difference?
- `IMPLEMENTATION_SPECIFICATION.md` — Is this the current one or old?

**Desired naming (clear):**
- `2026-02-19_ANALYSIS_SESSION-MEMORY-LOSS.md` — Date, category, purpose
- `2026-02-19_TASK_ACTIVE-WORK.md` — Date, category, purpose
- `2026-02-17_RESEARCH_OVERNIGHT-PLAN.md` — Date, category, purpose
- `2026-02-17_DESIGN_DESIGN-DIRECTIONS-V1.md` — Date, category, version
- `2026-02-18_SPEC_IMPLEMENTATION-V2.md` — Date, category, version

---

## Proposed Folder Structure

### Goal
Create a **clear, navigable, version-tracked** workspace that:
- Separates concerns (system, projects, archives, memory)
- Uses consistent naming (DATE_CATEGORY_DESCRIPTION)
- Is accessible to Haan, Claude Code, and Sam
- Has backup/archive strategy

### Structure

```
/home/node/.openclaw/workspace/
│
├── 00_SYSTEM/
│   ├── 00_CRITICAL_CLEANUP_DIRECTIVE.md         [This cleanup plan]
│   ├── CLEANUP_PLAN_OUTLINE.md                   [Detailed outline]
│   ├── CLEANUP_STATE.md                          [Progress tracker]
│   ├── ARCHIVE_REGISTRY.md                       [What was archived]
│   ├── FILE_TAXONOMY.md                          [Naming conventions]
│   ├── INDEX.md                                  [Quick navigation]
│   ├── ACCESS_MATRIX.md                          [Who can access what]
│   ├── FOLDER_STRUCTURE.md                       [This structure explained]
│   └── README.md                                 [Getting started]
│
├── 01_MEMORY/
│   ├── MEMORY.md                                 [Long-term notes]
│   ├── memory/
│   │   ├── 2026-02-15.md
│   │   ├── 2026-02-16.md
│   │   ├── 2026-02-17.md
│   │   ├── 2026-02-18.md
│   │   ├── 2026-02-19.md
│   │   └── ...
│   └── NOTES.md                                  [Ad-hoc notes]
│
├── 02_PROJECTS/
│   └── dance-connexions-website/
│       ├── 00_PROJECT_BRIEF.md                   [Project overview]
│       ├── LATEST_STATUS.md                      [Current state]
│       ├── 1_RESEARCH/
│       │   ├── 2026-02-17_RESEARCH_TARGET-MARKET-ANALYSIS.md
│       │   ├── 2026-02-17_RESEARCH_CONTENT-STRATEGY-PRD.md
│       │   ├── 2026-02-17_RESEARCH_DESIGN-DIRECTIONS.md
│       │   ├── 2026-02-17_RESEARCH_COMPETITIVE-ANALYSIS.md
│       │   └── RESEARCH_MANIFEST.md              [What's in research/]
│       │
│       ├── 2_DESIGN/
│       │   ├── 2026-02-17_DESIGN_DIRECTION-1-DARK-EDITORIAL.md
│       │   ├── 2026-02-17_DESIGN_DIRECTION-2-WARM-COMMUNITY.md
│       │   ├── 2026-02-17_DESIGN_DIRECTION-3-BOLD-ENERGETIC.md
│       │   ├── 2026-02-18_DECISION_CHOSEN-DIRECTION.md
│       │   └── DESIGN_MANIFEST.md                [What's in design/]
│       │
│       ├── 3_IMPLEMENTATION/
│       │   ├── 2026-02-18_SPEC_IMPLEMENTATION-V1.md
│       │   ├── 2026-02-18_SPEC_IMPLEMENTATION-V2.md
│       │   ├── 2026-02-19_GUIDE_BUILD-COMPONENTS.md
│       │   └── IMPLEMENTATION_MANIFEST.md        [What's in implementation/]
│       │
│       ├── 4_ASSETS/
│       │   ├── images/                           [Grok-generated images]
│       │   ├── videos/                           [Kling-generated videos]
│       │   ├── icons/
│       │   └── ASSETS_MANIFEST.md
│       │
│       ├── 5_CODE/
│       │   ├── .git/
│       │   ├── src/
│       │   ├── package.json
│       │   ├── tsconfig.json
│       │   └── README.md
│       │
│       ├── 6_DOCS/
│       │   ├── 2026-02-18_DOC_DESIGN-SUMMARY-FOR-HAAN.md
│       │   ├── 2026-02-18_DOC_IMPLEMENTATION-GUIDE.md
│       │   ├── 2026-02-18_DOC_TELEGRAM-BRIEF.md
│       │   └── DOCS_MANIFEST.md
│       │
│       └── PROJECT_ARCHIVE/
│           ├── 2026-02-16_OBSOLETE/               [Old decision docs]
│           ├── 2026-02-17_REPLACED/               [Replaced specs]
│           └── 2026-02-18_EXPERIMENTAL/           [Prototypes]
│
├── 03_ARCHIVE/
│   ├── 2026-02-19_MIGRATION/                     [Files cleaned up today]
│   │   ├── MANIFEST.md                           [What's archived]
│   │   ├── obsole/
│   │   ├── redundant/
│   │   ├── restructured/
│   │   └── unclear/
│   │
│   ├── 2026-02-XX_CLEANUP/                       [Future cleanup runs]
│   └── ARCHIVE_INDEX.md                          [Quick ref for all archives]
│
├── 04_EXPORTS/
│   ├── 2026-02-18_SESSION_TELEGRAM-EXPORT.md
│   ├── 2026-02-18_SESSION_TELEGRAM-EXPORT.json
│   ├── SESSION_SUMMARY_ANALYSIS.md
│   ├── SESSION_TOPICS_INDEX.md
│   └── EXPORTS_MANIFEST.md
│
├── 05_DRAFTS/
│   ├── 2026-02-19_DRAFT_HOMEPAGE-WIREFRAME.md
│   ├── 2026-02-19_PROTOTYPE_NEW-DESIGN.md
│   └── DRAFTS_MANIFEST.md                        [What's experimental]
│
├── IDENTITY.md                                    [Who I am (Sam)]
├── SOUL.md                                        [How I work (Sam)]
├── USER.md                                        [About you (Haan)]
├── HEARTBEAT.md                                   [Periodic checks]
├── AGENTS.md                                      [Agent instructions]
│
└── [ARCHIVE ROOT-LEVEL FILES HERE]
    ├── 03_ARCHIVE/2026-02-19_MIGRATION/old-files/
    └── See ARCHIVE_REGISTRY.md for details
```

---

## Renaming Strategy

### Convention: `YYYY-MM-DD_CATEGORY_DESCRIPTION.md`

**Categories:**
- `RESEARCH` — Market analysis, competitive research, data gathering
- `DESIGN` — Visual design, wireframes, design direction
- `SPEC` — Implementation specs, technical specifications
- `GUIDE` — How-to guides, tutorials, instructions
- `DECISION` — Decisions made, trade-offs, choices
- `TASK` — Task descriptions, to-do lists, progress
- `DOC` — Documentation, guides, reference
- `ANALYSIS` — Analysis documents, reviews, assessments
- `DRAFT` — Work-in-progress, experimental
- `SYSTEM` — System-level files, cleanup, infrastructure

### Examples

| Old Name | New Name |
|----------|----------|
| `IMPLEMENTATION_SPECIFICATION.md` | `2026-02-18_SPEC_IMPLEMENTATION-V2.md` |
| `DESIGN_DIRECTIONS.md` | `2026-02-17_DESIGN_DESIGN-DIRECTIONS-COMPLETE.md` |
| `RESEARCH_FINDINGS.md` | `2026-02-17_ANALYSIS_RESEARCH-FINDINGS.md` |
| `TARGET_MARKET_ANALYSIS.md` | `2026-02-17_RESEARCH_TARGET-MARKET-ANALYSIS.md` |
| `MESSAGE_FOR_HAAN.txt` | `2026-02-17_GUIDE_DESIGN-BRIEF-FOR-HAAN.md` |
| `Sam's memory loss.txt` | `2026-02-18_ANALYSIS_SESSION-MEMORY-LOSS.md` |
| `ACTIVE_TASK.md` | `2026-02-18_TASK_ACTIVE-WORK-STATUS.md` |

---

## Archive Strategy

### Why Archive
- Keep originals safe (never delete)
- Reduce workspace clutter
- Maintain version history
- Enable rollback if needed

### How to Archive
1. Create `/archive/YYYY-MM-DD_REASON/` folder
2. Move file there (not delete)
3. Log in ARCHIVE_REGISTRY.md:
   - Original path
   - Archive path
   - Reason (obsolete, replaced, reorganized, unclear)
   - Date archived
   - Brief description

### Example

```
/archive/2026-02-19_MIGRATION/
├── MANIFEST.md
├── obsolete/
│   └── RESEARCH_FINDINGS.md
│       → Now: 2026-02-17_ANALYSIS_RESEARCH-FINDINGS.md
├── redundant/
│   └── OVERNIGHT_RESEARCH_PLAN.md
│       → Incorporated into: CLEANUP_PLAN_OUTLINE.md
├── restructured/
│   └── MESSAGE_FOR_HAAN.txt
│       → Now: 2026-02-17_GUIDE_DESIGN-BRIEF-FOR-HAAN.md
└── unclear/
    └── Sam's memory loss.txt
        → Renamed to: 2026-02-18_ANALYSIS_SESSION-MEMORY-LOSS.md
```

---

## Registry: ARCHIVE_REGISTRY.md

This file will track:

| Original Path | Archive Path | Reason | Date | Description |
|-------|-------|--------|------|-------------|
| `/RESEARCH_FINDINGS.md` | `/03_ARCHIVE/2026-02-19_MIGRATION/redundant/` | Incorporated into 2026-02-17_ANALYSIS_RESEARCH-FINDINGS.md | 2026-02-19 | Old summary, replaced by comprehensive version |
| `/MESSAGE_FOR_HAAN.txt` | `/03_ARCHIVE/2026-02-19_MIGRATION/restructured/` | Renamed and moved to 02_PROJECTS/dance-connexions-website/6_DOCS/ | 2026-02-19 | Design brief, now versioned with date |

---

## Persistent State Tracking: CLEANUP_STATE.md

This file tracks progress and enables resumption after context loss:

```
# Cleanup State — Current Progress

**Last Updated:** 2026-02-19 23:30 MYT  
**Current Phase:** 2 (Safe Archival)  
**Items Processed:** 12/47  
**Blocked:** No

## What's Done
- [x] Phase 1: Planning documents created
- [x] Created folder structure (on paper)
- [ ] Created actual folders (Phase 2)
- [ ] Started archiving files (Phase 2)

## What's Next
- [ ] Create 00_SYSTEM/ folder
- [ ] Create 02_PROJECTS/dance-connexions-website/1_RESEARCH/
- [ ] Move first batch of research files

## If Context Lost
Read this file and start from "What's Next" section.
```

---

## Execution Plan (Phases)

| Phase | What | When | Duration |
|-------|------|------|----------|
| 1 | Create planning docs | NOW | ✅ Done |
| 2 | Get approval (green light) | Awaiting Haan | - |
| 3 | Create folder structure | After approval | ~30 min |
| 4 | Archive old files | After approval | ~1 hour |
| 5 | Rename files | After approval | ~1 hour |
| 6 | Create registries | After approval | ~30 min |
| 7 | Verify + document | After approval | ~30 min |

---

## Questions for You (Before Green Light)

1. **Folder structure** — Does the proposed structure make sense?
2. **Naming convention** — OK with `YYYY-MM-DD_CATEGORY_DESCRIPTION.md`?
3. **Archive approach** — Archive to `/03_ARCHIVE/`? Or elsewhere?
4. **What to archive** — Should I use judgment on "unclear" files, or ask for each one?
5. **Windows sync** — Want me to create a sync plan for Windows folders?
6. **Timeline** — Do this today, or schedule for later?

---

## What You Need to Review

Before saying "green light":

1. ✅ Read `00_CRITICAL_CLEANUP_DIRECTIVE.md` (top-level strategy)
2. ✅ Read `CLEANUP_PLAN_OUTLINE.md` (this file — detailed plan)
3. ⏳ Any changes?
4. ⏳ Questions?
5. ⏳ Ready for execution?

---

## If You Say "Green Light"

I will:
1. Create CLEANUP_STATE.md (progress tracker)
2. Create actual folder structure
3. Begin archival process (non-destructive)
4. Log every move in ARCHIVE_REGISTRY.md
5. Update CLEANUP_STATE.md after each major step
6. Show you the progress

---

**Status:** Awaiting your approval  
**Created:** 2026-02-19 23:06 MYT  
**Critical:** Yes — Do not execute without green light

