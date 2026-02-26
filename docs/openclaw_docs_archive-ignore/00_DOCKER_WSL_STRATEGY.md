# Docker/WSL Path Strategy — ALL AGENTS MUST READ THIS

**Date:** 2026-02-19  
**Audience:** Sam, Claude Code, any future agent  
**Purpose:** Prevent path/context confusion in Docker + WSL2 + Windows environment  
**MANDATORY:** Read before touching any files or running any commands

---

## The Environment

```
Windows (Host)
└── WSL2
    └── Docker Desktop
        └── OpenClaw container (YOU ARE HERE — /home/node/.openclaw/)
        
Windows filesystem:     C:\Users\nvntr\Documents\
WSL2 mount (when live): /mnt/c/Users/nvntr/Documents/
Docker container:       /home/node/.openclaw/workspace/
```

---

## Path Mapping

| Location | Windows Path | WSL2 Path | Docker Path | Who Can Use |
|----------|-------------|-----------|-------------|-------------|
| Project files | `C:\Users\nvntr\Documents\dc-web-new\` | `/mnt/c/Users/nvntr/Documents/dc-web-new/` | ❌ Not directly | Windows / WSL2 |
| OpenClaw workspace | ❌ Not directly | ❌ Not directly | `/home/node/.openclaw/workspace/` | Docker only |
| Project code (mounted) | `C:\Users\nvntr\Documents\dc-web-new\` | `/mnt/c/Users/nvntr/Documents/dc-web-new/` | `/home/node/.openclaw/workspace/projects/dc-web-new/` | All (via respective paths) |
| Git repo | `C:\Users\nvntr\Documents\dc-web-new\.git\` | `/mnt/c/.../dc-web-new/.git/` | `/home/node/.openclaw/workspace/projects/dc-web-new/.git/` | All |

---

## Context Decision Tree

**Before running ANY command, ask yourself:**

```
Q: Where am I right now?

A: OpenClaw webchat / Telegram (Sam)
   → I am INSIDE Docker container
   → Use: /home/node/.openclaw/workspace/... paths
   → Cannot use: C:\ paths or /mnt/c/ paths (usually not mounted)

A: Claude Code in Windows terminal (PowerShell/CMD)
   → Use: C:\Users\nvntr\Documents\... paths
   → Cannot use: /home/node/... paths

A: WSL2 bash terminal
   → Use: /mnt/c/Users/nvntr/... (for Windows files)
   → Use: /home/node/... (for Linux files, if WSL user is node)
   → Can bridge between Windows and Linux
```

---

## Common Mistakes to AVOID

### ❌ Mistake 1: Windows path inside Docker
```bash
# WRONG — this will fail inside Docker
ls C:\Users\nvntr\Documents\dc-web-new\

# RIGHT — use Linux path
ls /home/node/.openclaw/workspace/projects/dc-web-new/
```

### ❌ Mistake 2: Docker path in Windows terminal
```powershell
# WRONG — this will fail in PowerShell
ls /home/node/.openclaw/workspace/

# RIGHT — use Windows path or WSL bridge
wsl ls /home/node/.openclaw/workspace/
```

### ❌ Mistake 3: Assuming /mnt/c is always available
```bash
# WRONG — assuming mounted
cat /mnt/c/Users/nvntr/Documents/dc-web-new/README.md

# RIGHT — check first
if [ -d "/mnt/c/Users/nvntr" ]; then
    cat /mnt/c/Users/nvntr/Documents/dc-web-new/README.md
else
    echo "Windows not mounted — use Git to sync"
fi
```

### ❌ Mistake 4: Running npm/docker commands in wrong context
```bash
# WRONG — running npm inside Docker when node_modules is on Windows
npm install  # installs to wrong location

# RIGHT — always check docker-compose.yml for volume mounts
# Run npm inside the container that has the right volume
docker exec dc-web-new npm install
```

### ❌ Mistake 5: Docker Compose from wrong directory
```bash
# WRONG — running docker-compose without docker-compose.yml present
cd /home/node/.openclaw/workspace/
docker-compose up  # fails — no docker-compose.yml here

# RIGHT — navigate to project directory first
cd /home/node/.openclaw/workspace/projects/dc-web-new/
docker-compose up
```

---

## SOPs for File Operations

### Creating/editing Sam's docs (from OpenClaw/Sam context)
```
1. Always use: /home/node/.openclaw/workspace/projects/dc-web-new/00_OPENCLAW/
2. Files created here are tracked in Git
3. Git post-commit hook will sync to Windows when /mnt/c is available
4. If /mnt/c not available: safe in Git, will sync when WSL restarts
```

### Reading project files (from OpenClaw/Sam context)
```
1. Code files: /home/node/.openclaw/workspace/projects/dc-web-new/src/
2. Research: /home/node/.openclaw/workspace/projects/dc-web-new/01_RESEARCH/
3. Design: /home/node/.openclaw/workspace/projects/dc-web-new/02_DESIGN/
4. Specs: /home/node/.openclaw/workspace/projects/dc-web-new/03_IMPLEMENTATION/
```

### Creating/editing files (from Claude Code in WSL)
```
1. Navigate to: cd /mnt/c/Users/nvntr/Documents/dc-web-new/
   OR if running in Docker: cd /home/node/.openclaw/workspace/projects/dc-web-new/
2. Create files in correct subfolder (01_RESEARCH/, 02_DESIGN/, etc.)
3. Never create docs at project root — always in a subfolder
```

### Running project dev server
```
# In WSL2 or Windows terminal:
cd C:\Users\nvntr\Documents\dc-web-new\   (Windows)
OR
cd /mnt/c/Users/nvntr/Documents/dc-web-new/   (WSL2)

npm run dev
# Access at: http://localhost:3000
```

---

## File Sync Strategy

### How sync works
```
Linux (Docker):  /home/node/.openclaw/workspace/projects/dc-web-new/
                        ↕ Git (on commit)
Windows (Host):  C:\Users\nvntr\Documents\dc-web-new\
```

### When Windows IS mounted (/mnt/c available)
- Git post-commit hook auto-syncs `00_OPENCLAW/` to Windows
- Files appear in Windows immediately after commit

### When Windows is NOT mounted (most common for OpenClaw)
- Files stay in Docker Git repo (SAFE — not lost)
- When WSL2 restarts and /mnt/c is available, run:
  `bash /home/node/.openclaw/workspace/projects/dc-web-new/00_OPENCLAW/sync-to-windows.sh`
- Or: From Windows WSL terminal, git pull the repo

### Manual sync (Haan)
- Run PowerShell script: `00_OPENCLAW/WINDOWS_CREATE_FOLDERS.ps1`
- Or: Open WSL2 and run the sync script above

---

## Quick Reference Card

```
┌─────────────────────────────────────────────────────────┐
│  CONTEXT      │  USE THIS PATH                          │
├─────────────────────────────────────────────────────────┤
│  Sam (Docker) │  /home/node/.openclaw/workspace/        │
│  Claude Code  │  Depends on where it's running          │
│  Windows      │  C:\Users\nvntr\Documents\dc-web-new\  │
│  WSL2         │  /mnt/c/Users/nvntr/Documents/dc-web-new│
└─────────────────────────────────────────────────────────┘

RULE: Always use absolute paths. Never assume current directory.
RULE: Check if /mnt/c exists before using Windows paths.
RULE: When in doubt, use Git to bridge environments.
```

---

## If Something Goes Wrong

1. **Can't find a file?** → Check you're using the right path for your context
2. **Permission denied?** → You may be in wrong container or missing volume mount
3. **npm install fails?** → Check if node_modules should be in Docker or Windows
4. **Changes not appearing in Windows?** → /mnt/c not mounted; use Git to sync
5. **Git shows wrong files?** → Check which git repo you're in (`git remote -v`)

---

**Last Updated:** 2026-02-19  
**Update this file** when new path issues are discovered.  
**All agents:** Add new mistakes/solutions here as you find them.

