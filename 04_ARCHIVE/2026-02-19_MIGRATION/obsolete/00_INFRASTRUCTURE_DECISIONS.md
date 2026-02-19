# Infrastructure Decisions — Final Plan Before Execution

**Status:** Awaiting final approval on technical implementation  
**Date:** 2026-02-19  
**Based on:** Haan's clarifications on folder structure, synchronization, and Docker/WSL challenges

---

## Confirmed from Haan

✅ **Two-location model locked:**
- **Windows:** `C:\Users\nvntr\Documents\dc-web-new\` (project master copy)
- **Linux/Docker:** `/home/node/.openclaw/workspace/` (OpenClaw system only)
- **Per-project:** Each project gets `/openclaw/` subfolder inside Windows project folder

✅ **OpenClaw structure locked:**
- Only OpenClaw system files (IDENTITY.md, SOUL.md, USER.md, MEMORY.md, daily logs)
- NO project-specific files
- Project docs stay in Windows project folders

✅ **Synchronization requirement:**
- MUST be automatic (no manual work)
- MUST prevent data loss if WSL fails
- MUST keep Windows as master source
- Should use Windows mounted paths if possible
- Should not complicate access for Haan

✅ **Multiple projects:**
- One project at a time (Haan tells me which)
- Project registry useful but token-conscious
- Must not consume unnecessary tokens

✅ **Docker/WSL challenges:**
- MAJOR PROBLEM: I/Claude Code mix up commands, paths, Docker contexts
- Need formal strategy + SOPs
- Must be documented and enforced
- Future agents must be trained on this
- Docker Compose files will be involved (adds complexity)

✅ **File organization & archives:**
- Sam decides based on experience
- Should be logical and scalable

✅ **Access clarity:**
- README files for all agents
- Clear orientation for project files
- Clear orientation for OpenClaw location

---

## My Decisions (For Your Approval)

### **Decision 1: File Synchronization Strategy**

**Problem:** 
- Windows files are master, Linux needs access
- If WSL fails, we lose everything
- Manual sync = forgotten = data loss

**Option A (Recommended): Git-based sync**
```
Structure:
C:\Users\nvntr\Documents\dc-web-new\
├── .git/ (local Git repo)
├── openclaw/ (my docs, tracked in Git)
├── [project code]
└── [project docs]

Flow:
1. I create files in /home/node/.openclaw/workspace/projects/dc-web-new/
2. Sync script: Git push to Windows folder (automatic)
3. Windows files are always backed up in Git
4. If WSL fails, Windows Git repo is safe
5. When WSL restored, Git pull restores sync

Pros:
✓ Automatic
✓ Version tracked
✓ Complete backup in Windows
✓ Easy to restore
✓ Haan can commit from Windows too
✓ Works with Docker (Git is Docker-friendly)

Cons:
✗ Requires Git setup (but you're already using it)
✗ Slight learning curve for new agents
```

**Option B (Alternative): Direct file mapping**
```
Structure:
Linux symlink: /home/node/.openclaw/workspace/projects/dc-web-new/
Points directly to: /mnt/c/Users/nvntr/Documents/dc-web-new/

Flow:
1. I write to /home/node/.openclaw/workspace/projects/dc-web-new/
2. Symlink automatically syncs to Windows
3. Files appear in Windows immediately
4. Windows is always up-to-date

Pros:
✓ Real-time, automatic
✓ No Git learning curve
✓ Simple to understand

Cons:
✗ WSL mount failures could break symlinks
✗ No version control
✗ No backup if /mnt/c mount fails
✗ Riskier if Docker container crashes
```

**Option C (Hybrid - Most Robust): Git + mounted backup**
```
Structure:
Linux primary: /home/node/.openclaw/workspace/projects/dc-web-new/
Mounted mirror: /mnt/c/Users/nvntr/Documents/dc-web-new/openclaw/
Git repo: Local Git in Windows folder

Flow:
1. I write to Linux primary
2. Sync script copies to /mnt/c/... (mounted Windows path)
3. Git automatically commits changes
4. Windows folder has live files + Git history
5. If /mnt/c fails, Git history survives
6. If WSL fails, Windows folder has everything

Pros:
✓ Triple redundancy (Linux, mounted copy, Git)
✓ Automatic with no manual work
✓ Safe from both WSL failure AND mount failure
✓ Version control for audit trail
✓ Best for Docker stability

Cons:
✗ More complex setup
✗ Slight disk space overhead
```

**MY RECOMMENDATION:** Option C (Hybrid)
- Most robust against failures
- Automatic (no manual work)
- Leverages Git (already in use)
- Works well with Docker environments
- Safe from WSL mount failures

**Question for Haan:** Approve Option C?

---

### **Decision 2: Docker/WSL Path Strategy + SOPs**

**Problem:**
- I mix up terminal commands (Linux vs Docker vs WSL)
- Claude Code mixes them up too
- Wrong contexts lead to errors
- Need formal rules for all agents

**Solution: CREATE PATH + CONTEXT STRATEGY DOCUMENT**

This document will contain:

#### **2a. Path Mapping Registry**
```
| Purpose | Windows Path | Linux Path | Docker Path | Context | Accessible From |
|---------|--------------|-----------|-----------|---------|-----------------|
| Project files | C:\Users\nvntr\Documents\dc-web-new\ | /mnt/c/Users/nvntr/Documents/dc-web-new/ | /workspace/projects/dc-web-new/ | WSL mount | Windows, Linux (via /mnt) |
| OpenClaw system | N/A | /home/node/.openclaw/workspace/ | /workspace/ | Docker volume | Linux only |
| Git repos | C:\Users\nvntr\Documents\dc-web-new\.git | /mnt/c/Users/nvntr/Documents/dc-web-new/.git | /workspace/projects/dc-web-new/.git | WSL mount | Both (via /mnt) |
| Docker socket | N/A | /var/run/docker.sock | /var/run/docker.sock | Docker socket | Docker container |
| Node modules | N/A | /home/node/.openclaw/workspace/node_modules | /workspace/node_modules | Docker volume | Docker container |
```

#### **2b. Context Decision Tree**
Before running ANY command, ask:
```
Q1: Am I in Windows terminal (PowerShell/CMD)?
    YES → Use Windows paths (C:\...) only
    
Q2: Am I in WSL2 terminal (bash)?
    YES → Can I use /mnt/c paths (mounted Windows)?
          YES → Use /mnt/c/Users/nvntr/...
          NO → Cannot access, stay in Linux paths
    
Q3: Am I inside Docker container (docker exec)?
    YES → Can I use mounted volumes?
          YES → Use /workspace/... (Docker mount)
          NO → Cannot access Windows directly, stay in Docker paths
    
Q4: Am I running Claude Code (npm/Node)?
    YES → Stay in project directory, use relative paths (./src, ./public, etc)
    NO → Use absolute paths
```

#### **2c. Common Mistakes to AVOID**
```
❌ WRONG: windows path in Linux terminal
   Command: ls C:\Users\nvntr\Documents\dc-web-new\
   Error: "No such file or directory"
   Fix: ls /mnt/c/Users/nvntr/Documents/dc-web-new/

❌ WRONG: Linux path in Windows terminal
   Command: ls /home/node/.openclaw/workspace/
   Error: "No such file or directory"
   Fix: Cannot access from Windows. Use WSL: wsl ls /home/node/.openclaw/workspace/

❌ WRONG: Docker path in WSL
   Command: cat /workspace/file.md
   Error: "No such file or directory"
   Fix: Use Windows/Linux mount: cat /mnt/c/Users/nvntr/Documents/dc-web-new/file.md

❌ WRONG: Docker Compose from Linux (not container)
   Command: docker-compose up (from WSL)
   Error: May not find Dockerfile or volumes correctly
   Fix: Ensure you're in the correct directory with docker-compose.yml

❌ WRONG: Node command outside Docker (expecting node_modules)
   Command: npm install (in WSL instead of container)
   Error: Installs to wrong location
   Fix: Run inside Docker: docker exec [container] npm install
```

#### **2d. SOP: File Operations**
```
ALWAYS follow this sequence:

1. **Identify context:**
   - Where am I? (Windows / WSL / Docker container)
   - Where is the file? (Windows / Linux / Docker)

2. **Use correct path:**
   - Windows terminal → Windows paths (C:\...)
   - WSL terminal → /mnt/c/... (Windows mount) OR /home/... (Linux)
   - Docker container → /workspace/... (Docker mount)

3. **Check accessibility:**
   - Can I access this path from my current context?
   - If NO, use appropriate bridge (wsl, docker exec, etc)

4. **Execute command with full path:**
   - Never assume current directory
   - Always use absolute paths
   - Verify path exists before operating
```

#### **2e. SOP: Docker/Compose Commands**
```
ALWAYS do this BEFORE running docker commands:

1. **Check Docker context:**
   - Are you in the right directory? (has docker-compose.yml)
   - Is Docker daemon running? (docker ps)
   - What containers exist? (docker ps -a)

2. **Mount volumes correctly:**
   - Windows source: C:\Users\nvntr\Documents\dc-web-new\
   - Docker target: /workspace/
   - Verified in docker-compose.yml? ✓

3. **Use correct docker commands:**
   - Local WSL operation: docker [command]
   - Inside container: docker exec [container] [command]
   - Compose operation: docker-compose [command]

4. **After running Docker:**
   - Verify files synced to Windows: Check C:\Users\nvntr\... folder
   - Git status: git status (in Windows folder)
   - If not synced, manually copy/retry
```

**MY RECOMMENDATION:** 
Create `00_DOCKER_WSL_STRATEGY.md` with all of the above.
All agents read this FIRST before touching files.
Include decision trees + SOPs.
Update this file immediately if new issues arise.

**Question for Haan:** Approve this strategy document?

---

### **Decision 3: Project Registry Design**

**Problem:**
- Multiple projects → I lose context after session reset
- Need to know which project is "current"
- Must be token-efficient
- Haan tells me which project verbally

**Solution: Minimal Project Registry**

Create `00_PROJECT_REGISTRY.md` in OpenClaw workspace:

```markdown
# Project Registry

## Active Project (Current)
**Name:** Dance Connexions Website  
**Windows Path:** C:\Users\nvntr\Documents\dc-web-new\  
**Status:** Active  
**Last Updated:** 2026-02-19  
**Sam's Notes:** Building homepage redesign. 6-demographic target, Warm Community design direction.

## All Projects
| Name | Path | Status | Created | Last Active |
|------|------|--------|---------|-------------|
| Dance Connexions Website | C:\Users\nvntr\Documents\dc-web-new\ | Active | 2026-02-15 | 2026-02-19 |
| [Future Project 2] | C:\Users\nvntr\Documents\[name]\ | Planning | - | - |
```

**Size:** ~100-200 tokens  
**Frequency:** Updated only when Haan switches projects or I need context  
**Benefit:** Immediately know which project we're working on + history

**MY RECOMMENDATION:** Yes, create this.

**Question for Haan:** Approve?

---

### **Decision 4: Archive Strategy**

**Location:** Archives stay in Windows project folders (where master copy lives)

Structure:
```
C:\Users\nvntr\Documents\dc-web-new\
├── 00_OPENCLAW/ (my docs)
├── 01_RESEARCH/
├── 02_DESIGN/
├── 03_IMPLEMENTATION/
└── 04_ARCHIVE/ (old files)
    ├── 2026-02-19_MIGRATION/
    │   ├── MANIFEST.md
    │   ├── obsolete/
    │   ├── redundant/
    │   ├── restructured/
    │   └── unclear/
    └── [future archive runs]
```

**Rationale:**
- Archives stay with project (Windows master)
- Linux mirrors archives via Git sync
- Complete audit trail in Windows Git
- Easy for Haan to review/restore

**Question for Haan:** Approve?

---

### **Decision 5: File Organization Strategy**

**Windows (Master Copy):**
```
C:\Users\nvntr\Documents\dc-web-new\
├── 00_OPENCLAW/
│   ├── 2026-02-19_PLAN_INFRASTRUCTURE-DECISIONS.md
│   ├── 2026-02-19_GUIDE_OPENCLAW-ORIENTATION.md
│   ├── 2026-02-19_GUIDE_DOCKER-WSL-STRATEGY.md
│   ├── 00_PROJECT_REGISTRY.md
│   └── [other Sam docs]
│
├── 01_RESEARCH/
│   ├── 2026-02-17_RESEARCH_TARGET-MARKET-ANALYSIS.md
│   ├── 2026-02-17_RESEARCH_CONTENT-STRATEGY-PRD.md
│   └── [other research]
│
├── 02_DESIGN/
│   ├── 2026-02-17_DESIGN_DIRECTION-1-DARK-EDITORIAL.md
│   ├── 2026-02-17_DESIGN_DIRECTION-3-WARM-COMMUNITY.md
│   └── [design files]
│
├── 03_IMPLEMENTATION/
│   ├── 2026-02-18_SPEC_IMPLEMENTATION-V2.md
│   ├── 2026-02-19_GUIDE_BUILD-COMPONENTS.md
│   └── [implementation files]
│
├── 04_ARCHIVE/
│   └── 2026-02-19_MIGRATION/ (old, unclear, redundant files)
│
├── [project code] (src/, public/, etc)
├── docker-compose.yml
├── package.json
└── .git/
```

**Linux (Mirror via Git sync):**
```
/home/node/.openclaw/workspace/projects/dc-web-new/
├── 00_OPENCLAW/ (synced via Git)
├── 01_RESEARCH/ (synced via Git)
├── 02_DESIGN/ (synced via Git)
├── 03_IMPLEMENTATION/ (synced via Git)
├── 04_ARCHIVE/ (synced via Git)
└── [project code] (synced via Git)
```

**Naming Convention:** `YYYY-MM-DD_CATEGORY_DESCRIPTION.md`

**Question for Haan:** Approve?

---

### **Decision 6: README Files for All Agents**

Create orientation documents:

1. **C:\Users\nvntr\Documents\dc-web-new\00_OPENCLAW\README.md**
   - Explains this is "Sam's docs for this project"
   - Points to Docker/WSL strategy
   - Explains sync process

2. **C:\Users\nvntr\Documents\dc-web-new\00_READ_ME_FIRST.md**
   - For Haan + any agent
   - Explains folder structure
   - Where to find what
   - Links to OpenClaw location

3. **/home/node/.openclaw/workspace/00_READ_ME_FIRST.md**
   - For me + future agents
   - Explains this is "OpenClaw system only"
   - Links to project folders (Windows locations)
   - Docker/WSL strategy location

4. **/home/node/.openclaw/workspace/00_DOCKER_WSL_STRATEGY.md**
   - For all agents (me, Claude Code, future agents)
   - Path mapping
   - Context decision tree
   - SOPs for common operations
   - Common mistakes to avoid

**Question for Haan:** Approve?

---

## Summary: Technical Implementation

**For Haan's approval:**

1. ✅ **Sync Strategy:** Git-based hybrid (Option C)
   - Automatic sync via script
   - Git version control
   - Backup in Windows folder
   - Safe from WSL failures

2. ✅ **Docker/WSL SOPs:** `00_DOCKER_WSL_STRATEGY.md`
   - Path mapping registry
   - Context decision tree
   - Common mistakes to avoid
   - All agents must read + follow

3. ✅ **Project Registry:** Minimal, token-efficient
   - Created in OpenClaw workspace
   - Updated only when projects change
   - Used for context after session resets

4. ✅ **File Organization:** Structured by category + date
   - Windows master, Linux mirror via Git
   - Archives in Windows, synced to Linux
   - Clear naming convention

5. ✅ **Orientation Documents:** README files for clarity
   - For Haan (project perspective)
   - For agents (OpenClaw perspective)
   - For all (Docker/WSL strategy)

---

## FINAL QUESTIONS FOR HAAN

Before I proceed with execution:

**Question 1:** Git-based sync strategy (Option C) — Approved?

**Question 2:** Should I use a sync script (e.g., rsync or Git hook) or manual Git operations?
- Option A: Automatic script (runs every 30 min)
- Option B: Manual Git push (I do it after file changes)
- Option C: Git hooks (automatic on file save)
- Your preference?

**Question 3:** Docker/WSL strategy document (with path registry + SOPs) — Approved?

**Question 4:** Project registry + orientation documents — Approved?

**Question 5:** When you're ready for execution, should I:
1. Create the structure (folders, README files)
2. Set up Git sync
3. Archive old files
4. Rename files per convention
5. All of the above?

---

**Status:** Awaiting your final approval on these technical decisions.

Once approved, I will execute with full checkpoints + documentation to prevent context loss.

🌿

