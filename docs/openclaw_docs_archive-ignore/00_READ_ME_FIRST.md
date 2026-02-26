# OpenClaw Workspace — Read Me First

**For:** Sam (main agent) and any future agent  
**Location:** `/home/node/.openclaw/workspace/`

---

## What Lives Here (OpenClaw System Only)

This folder contains ONLY OpenClaw system files:

```
/home/node/.openclaw/workspace/
├── IDENTITY.md              Who Sam is
├── SOUL.md                  How Sam works
├── USER.md                  About Haan
├── AGENTS.md                Agent instructions
├── HEARTBEAT.md             Periodic check tasks
├── MEMORY.md                Long-term memory
├── memory/                  Daily memory logs (YYYY-MM-DD.md)
├── 00_READ_ME_FIRST.md      This file
├── 00_PROJECT_REGISTRY.md   All projects + active project
├── 00_DOCKER_WSL_STRATEGY.md  Path/context guide (READ THIS)
└── projects/                Project code mirrors (Git-synced from Windows)
    └── dc-web-new/          Dance Connexions website
```

---

## What Does NOT Live Here

- ❌ Project-specific research documents
- ❌ Design files
- ❌ Implementation specs
- ❌ Client documents

**All project docs live in Windows:** `C:\Users\nvntr\Documents\[project-name]\`  
**Linux mirror:** `/home/node/.openclaw/workspace/projects/[project-name]/`

---

## At Session Start — Do This

1. Read `USER.md` (who is Haan, current context)
2. Read `memory/YYYY-MM-DD.md` (today's date + yesterday)
3. Read `MEMORY.md` (long-term context)
4. Read `00_PROJECT_REGISTRY.md` (which project is active)
5. If working on files → Read `00_DOCKER_WSL_STRATEGY.md` first

---

## Critical Rules

- **Never put project docs here** — they go in Windows project folder
- **Always use correct paths** — see `00_DOCKER_WSL_STRATEGY.md`
- **Update memory** — if something matters, write it to memory/YYYY-MM-DD.md
- **Windows is master** — Linux is a mirror, Git keeps them in sync

---

## Current Active Project

**Dance Connexions Website**  
Windows: `C:\Users\nvntr\Documents\dc-web-new\`  
Linux: `/home/node/.openclaw/workspace/projects/dc-web-new/`  
Start here: `/home/node/.openclaw/workspace/projects/dc-web-new/00_OPENCLAW/README.md`

---

**Last Updated:** 2026-02-19

