# Dance Connexions Website — Agent Orientation

**For:** Any agent working on this project (Sam, Claude Code, sub-agents)  
**Project:** Dance Connexions website redesign  
**Last Updated:** 2026-02-19

---

## Project Overview

**Studio:** Dance Connexions, Bandar Sunway, Malaysia (Est. 1999)  
**Revenue:** 50% classes / 50% studio rentals  
**Goal:** Redesign homepage to serve 6 demographics without alienating any  
**Tech Stack:** Next.js, Tailwind CSS, shadcn/ui  
**Design Direction:** Warm Community (Direction 3) — approved  
**Status:** Implementation spec complete; ready for build phase

---

## Folder Structure

```
dc-web-new/
├── 00_OPENCLAW/          ← SAM'S DOCS (you are here)
│   ├── README.md         ← This file
│   ├── WINDOWS_CREATE_FOLDERS.ps1   ← Run in PowerShell (one-time setup)
│   └── sync-to-windows.sh           ← Run to sync to Windows
│
├── 01_RESEARCH/          ← Market analysis, competitor research
├── 02_DESIGN/            ← Design directions, wireframes, decisions
├── 03_IMPLEMENTATION/    ← Build specs, component guides
├── 04_ARCHIVE/           ← Old/superseded files (never deleted)
│   └── 2026-02-19_MIGRATION/
│       ├── obsolete/
│       ├── redundant/
│       ├── unclear/
│       └── restructured/
│
├── src/                  ← Next.js application code
├── public/               ← Static assets
├── prisma/               ← Database schema
└── docs/                 ← Pre-existing docs (legacy — being reorganised)
```

---

## Key Documents

| Document | Location | Purpose |
|----------|----------|---------|
| Implementation Spec | `03_IMPLEMENTATION/` (after migration) | Full build guide — feed to Claude Code |
| Target Market Analysis | `01_RESEARCH/` (after migration) | 6 demographics defined |
| Content Strategy PRD | `01_RESEARCH/` (after migration) | 12 sections, copy, CTAs |
| Design Directions | `02_DESIGN/` (after migration) | 3 options + Warm Community selected |
| HAAN_HOMEPAGE_VISION.md | `docs/` currently | North star document |

---

## Path Rules (CRITICAL)

**If you are Sam (OpenClaw Docker):**
- Work in: `/home/node/.openclaw/workspace/projects/dc-web-new/`
- Your docs go in: `00_OPENCLAW/`
- Read strategy: `/home/node/.openclaw/workspace/00_DOCKER_WSL_STRATEGY.md`

**If you are Claude Code (WSL2 terminal):**
- Work in: `C:\Users\nvntr\Documents\dc-web-new\` (Windows)
- OR: `/mnt/c/Users/nvntr/Documents/dc-web-new/` (WSL2)
- Code changes go in: `src/`
- Do NOT touch: `00_OPENCLAW/` files (Sam's territory)

---

## Workspace is Being Reorganised

**Status as of 2026-02-19:** Cleanup in progress  
- Old files exist at root level of project (being moved to correct subfolders)
- Do NOT create new docs at root level
- Put all new docs in: `01_RESEARCH/`, `02_DESIGN/`, `03_IMPLEMENTATION/`
- Check `04_ARCHIVE/2026-02-19_MIGRATION/` for old versions of files

---

## Current Task (For Claude Code)

**Implementation Spec** is ready at:  
`/home/node/.openclaw/workspace/projects/dc-web-new/IMPLEMENTATION_SPECIFICATION.md`

Feed this to Claude Code in chunks. Start with highest-priority components.

---

## Locked Copy (Do Not Rewrite)

These lines are approved and must not be changed:

1. "Dance is a skill. It's learned, not inherited."
2. "Good teaching removes fear. What's left is movement."
3. "Confidence isn't performed. It's practiced."
4. "Some come alone. No one feels that way for long."
5. "For an hour, the rest of the day can wait."
6. "Over time, dance becomes part of your life — not an event."
7. "Everyone here started exactly where you are."

---

**Questions?** Ask Sam via Telegram/webchat.

