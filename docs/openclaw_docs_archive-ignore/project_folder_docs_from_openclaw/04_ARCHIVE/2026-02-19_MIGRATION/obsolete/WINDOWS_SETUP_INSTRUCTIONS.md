# Windows Setup Instructions — Task 1.2

**Created:** 2026-02-19 08:03 GMT+8  
**For:** Haan  
**Action Required:** YES — Create folders in Windows

---

## TASK 1.2: Create Windows Project Folder Structure

I cannot directly create Windows folders from Linux Docker. You need to do this manually.

**Action:** Open PowerShell or File Explorer on Windows and create these folders:

```
C:\Users\nvntr\Documents\dc-web-new\
├── 00_OPENCLAW/        (my project-specific docs)
├── 01_RESEARCH/        (research files)
├── 02_DESIGN/          (design files)
├── 03_IMPLEMENTATION/  (implementation files)
└── 04_ARCHIVE/         (old files)
    └── 2026-02-19_MIGRATION/
        ├── obsolete/
        ├── redundant/
        ├── unclear/
        └── restructured/
```

### Method 1: PowerShell (Fastest)

Copy and paste this into PowerShell:

```powershell
$basePath = "C:\Users\nvntr\Documents\dc-web-new"

# Create main folders
New-Item -ItemType Directory -Path "$basePath\00_OPENCLAW" -Force
New-Item -ItemType Directory -Path "$basePath\01_RESEARCH" -Force
New-Item -ItemType Directory -Path "$basePath\02_DESIGN" -Force
New-Item -ItemType Directory -Path "$basePath\03_IMPLEMENTATION" -Force

# Create archive structure
New-Item -ItemType Directory -Path "$basePath\04_ARCHIVE\2026-02-19_MIGRATION\obsolete" -Force
New-Item -ItemType Directory -Path "$basePath\04_ARCHIVE\2026-02-19_MIGRATION\redundant" -Force
New-Item -ItemType Directory -Path "$basePath\04_ARCHIVE\2026-02-19_MIGRATION\unclear" -Force
New-Item -ItemType Directory -Path "$basePath\04_ARCHIVE\2026-02-19_MIGRATION\restructured" -Force

Write-Host "Folders created successfully!"
```

### Method 2: File Explorer (Manual)

1. Open `C:\Users\nvntr\Documents\dc-web-new\`
2. Create folder: `00_OPENCLAW`
3. Create folder: `01_RESEARCH`
4. Create folder: `02_DESIGN`
5. Create folder: `03_IMPLEMENTATION`
6. Create folder: `04_ARCHIVE`
7. Inside `04_ARCHIVE`, create folder: `2026-02-19_MIGRATION`
8. Inside `2026-02-19_MIGRATION`, create folders:
   - `obsolete`
   - `redundant`
   - `unclear`
   - `restructured`

---

## When Done

Once you've created these folders, tell me: **"Windows folders created"**

Then I will proceed with:
- Task 1.3: Create Linux mirrors
- Task 1.4: Set up Git sync

---

**Status:** ⏳ Awaiting your action  
**Next:** Linux mirror creation (I can do this)

