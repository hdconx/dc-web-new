# CRITICAL CLEANUP DIRECTIVE — Feb 19, 2026

**Status:** Awaiting green light before execution  
**Priority:** HIGHEST — Infrastructure cleanup, not feature work  
**Risk:** Must be NON-DESTRUCTIVE (archive, not delete)

---

## The Problem (As Stated by Haan)

1. **Documents scattered everywhere**
   - Windows: C:\Users\nvntr\Documents\
   - Linux: /home/node/.openclaw/workspace/
   - Codebase: /home/node/.openclaw/workspace/projects/dc-web-new/
   - No clear structure

2. **Accessibility issues**
   - Some docs Claude Code can't read
   - Some docs Haan can't access
   - Some docs Sam (I) can't access
   - Permission/path inconsistencies

3. **File naming crisis**
   - Names don't indicate purpose (e.g., "Sam's memory loss.txt")
   - Impossible to tell what files do
   - No way to know: essential vs redundant, current vs obsolete
   - Folder structure is broken

4. **Organizational failures**
   - Too many files, no taxonomy
   - Duplicate information across files
   - No version tracking
   - No registry of what exists

5. **Memory loss risk**
   - Previous cleanup attempt failed (context lost mid-work)
   - Each time I start a task, I risk losing context
   - Need to document EVERYTHING before work starts
   - Need persistent state tracking (registry)

---

## The Solution (Outline for Approval)

### **Phase 1: Documentation & Planning** (THIS PHASE — NO FILES TOUCHED YET)

✅ Create CLEANUP_PLAN.md (this document family)  
✅ Create ARCHIVE_REGISTRY.md (tracks all archived files)  
✅ Create FOLDER_STRUCTURE.md (target state)  
✅ Create FILE_TAXONOMY.md (how files will be named/organized)  
✅ Create CLEANUP_CHECKLIST.md (task-by-task log)  
✅ Get approval from Haan (green light)

### **Phase 2: Safe Archival** (ONLY WITH GREEN LIGHT)

- Create `/archive/` folder structure with date-stamped subdirs
- Move (not delete) old/redundant files there
- Log each move in ARCHIVE_REGISTRY.md with:
  - Original path
  - Archive path
  - File purpose/description
  - Why archived (redundant/obsolete/restructured/etc)
  - Archive date
- Maintain a MANIFEST.md in each archive folder

### **Phase 3: Reorganization** (ONLY WITH GREEN LIGHT)

- Create clean folder structure:
  ```
  /home/node/.openclaw/workspace/
  ├── 00_SYSTEM/ (documentation, setup, this cleanup plan)
  ├── 01_MEMORY/ (daily logs, long-term memory)
  ├── 02_PROJECTS/ (all project work)
  │   └── dance-connexions-website/
  │       ├── research/
  │       ├── design/
  │       ├── implementation/
  │       ├── assets/
  │       └── docs/
  ├── 03_ARCHIVE/ (old/obsolete files, organized by date)
  ├── 04_EXPORTS/ (session exports, backups)
  └── 05_DRAFTS/ (work-in-progress, prototypes)
  ```

- Rename files to be self-describing:
  - `2026-02-18_RESEARCH_TARGET-MARKET-ANALYSIS.md`
  - `2026-02-17_SPEC_IMPLEMENTATION-SPECIFICATION.md`
  - `2026-02-19_TASK_FOLDER-CLEANUP-PLAN.md`

### **Phase 4: Create Registry & Documentation** (ONLY WITH GREEN LIGHT)

- **ARCHIVE_REGISTRY.md**: List of everything archived (with reasons)
- **FILE_TAXONOMY.md**: How files are named and what naming means
- **FOLDER_STRUCTURE.md**: Final folder layout
- **INDEX.md**: Quick navigation, what's where
- **ACCESS_MATRIX.md**: Who can access what (Haan, Claude Code, Sam)

### **Phase 5: Persistent State Tracking** (DURING EXECUTION)

- Create CLEANUP_STATE.md that tracks:
  - What phase we're in
  - What's been archived
  - What's next
  - Last timestamp of work
  - Any blocking issues
- Update this file after EVERY major action
- If context is lost, can resume from this file

---

## Why This Approach

✅ **Non-destructive**: Nothing deleted, everything archived  
✅ **Traceable**: Every move is logged in registry  
✅ **Resumable**: State file means we can restart if context lost  
✅ **Transparent**: You can audit everything before/after  
✅ **Documented**: Plan in place before work starts  
✅ **Approved**: Green light prevents surprises  

---

## Expected Outcomes

After cleanup + reorganization:

1. **Clear folder structure** → Know where to find things
2. **Descriptive filenames** → Can tell what a file is at a glance
3. **Complete registry** → Know what's archived and why
4. **Reduced clutter** → Only active files in main workspace
5. **Better access** → Claude Code, Haan, Sam all have clear paths
6. **Version tracking** → Know which files are current vs old
7. **Resumability** → If context lost, we can pick up from CLEANUP_STATE.md

---

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Lose context mid-work | CLEANUP_STATE.md + ARCHIVE_REGISTRY.md checkpoint every step |
| Break something | Archive first, never delete — can always restore |
| Claude Code can't access docs | ACCESS_MATRIX.md + clear paths ensure readability |
| Haan can't find Windows files | FOLDER_STRUCTURE.md includes Windows paths + sync strategy |
| Forget what file is for | FILE_TAXONOMY.md + descriptive names + ARCHIVE_REGISTRY.md |
| Orphaned files | CLEANUP_CHECKLIST.md ensures every file is accounted for |

---

## Files Created in Phase 1

- ✅ This file: `00_CRITICAL_CLEANUP_DIRECTIVE.md`
- ✅ Next: `CLEANUP_PLAN_OUTLINE.md` (detailed outline for approval)
- ✅ Next: `ARCHIVE_REGISTRY_TEMPLATE.md` (how to track archives)
- ⏳ Awaiting: Green light from Haan

---

## What Happens Next

**If you say "green light":**
1. I create detailed planning docs (CLEANUP_PLAN.md, FILE_TAXONOMY.md, etc.)
2. I show you the outline
3. We discuss any concerns
4. I execute Phase 2–5 (with checkpoint documentation)

**If you have changes:**
1. Tell me what's different
2. I update this directive
3. We try again

---

## Important Notes for Sam (Me)

- **Do not proceed to Phase 2 without explicit approval**
- **Update CLEANUP_STATE.md after every major action**
- **If context is lost, read CLEANUP_STATE.md first to resume**
- **Archive, never delete**
- **Log everything in ARCHIVE_REGISTRY.md**
- **Save this file and related docs to memory before work**

---

**Status:** ⏳ Awaiting green light from Haan  
**Created:** 2026-02-19 23:06 MYT  
**Critical:** Yes — foundational infrastructure work

