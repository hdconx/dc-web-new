---
name: safeguards
description: Essential safety checks and stability rules to prevent breaking the build on Windows or during dependency updates. Claude should consult this before any dependency changes, lockfile modifications, or native binary operations.
allowed-tools: Read, Glob, Grep
user-invocable: false
---

# Safeguards and Stability Protocol

This protocol serves as a mandatory checklist and set of rules to prevent the "Antigravity Session Failures" (broken builds due to lost lockfiles and native binary mismatches) from repeating.

## 1. The Sacred Lockfile Rule
- **NEVER** delete `package-lock.json` or `node_modules` unless the project owner gives explicit permission.
- **NEVER** assume `package-lock.json` is backed up in Git. Verify it manually.
- If a clean install is needed, **CREATE A BACKUP** of the working `package-lock.json` before any destructive commands.

## 2. Windows Native Binary Caution
- Windows environments are extremely sensitive to native binaries (e.g., `lightningcss` in Tailwind v4, Prisma engines).
- **Treat core dependency updates as HIGH RISK.**
- If an update fails, **REVERT IMMEDIATELY** to the backup. Do not attempt "surgical fixes" that add more external platform packages unless explicitly requested.

## 3. Architect-Executor Protocol
- The project owner is the **Senior Architect**. Claude is the **Executor**.
- Propose an `implementation_plan.md` for ALL dependency changes, major version bumps, or configuration edits.
- Veto any `Remove-Item` or `npm install --force` commands unless the Architect confirms the risk.

## 4. Incremental Verification
- Update packages **ONE AT A TIME**.
- Run `npm run build` after every install to verify the "health" of the project.
- Do not batch updates; if one fails, we know exactly which one caused the drift.

## 5. Startup Procedure
- At the beginning of any task involving the "Tech Stack", "Dependencies", or "Builds", Claude MUST consult this file to remind itself of the stability requirements of this specific Windows/WSL project.
