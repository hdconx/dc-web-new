# Dance Connexions Documentation Blueprint
**Created:** 2026-02-27
**Status:** Master Consolidated Documentation

---

## 📖 Start Here

This blueprint consolidates all Dance Connexions website documentation into organized, scannable files.

**For New Team Members:** Read in this order:
1. `vision/business-model.md` - Understand the business
2. `vision/homepage-strategy.md` - Current homepage approach
3. `research/target-market.md` - Who we serve
4. `technical/architecture.md` - How the system works

---

## 📁 Blueprint Structure

### `/vision`
**Business strategy, brand identity, and core vision**

- **business-model.md** - Revenue streams, target market, competitive advantages
- **homepage-strategy.md** - Current homepage requirements (authoritative)
- **brand-identity.md** - Voice, tone, visual identity, messaging

### `/research`
**Market research and competitive analysis**

- **target-market.md** - 6 demographics, Malaysia market insights
- **competitors.md** - Competitive landscape (to be created from COMPETITOR_ANALYSIS.md)
- **design-patterns.md** - UX patterns from research (to be created from PATTERNS_EXTRACTED.md)
- **examples/** - Individual site case studies (site-1 through site-6)

### `/technical`
**System architecture and development**

- **architecture.md** - Tech stack, data flow, directory structure
- **data-flow.md** - How images & text populate (to be created)
- **development-guide.md** - Development workflows (to be created)

### `/tools`
**AI tools, prompting guides, workflows**

- **ai-prompting.md** - Luna, image generation (from LUNA_PROMPTING_GUIDE.md)
- **review-workflow.md** - Review processes (from REVIEW_TOOL_GUIDE.md)
- **local-llm.md** - Local LLM usage (from development/LOCAL_LLM_USAGE_GUIDE.md)

### `/decisions`
**Key decisions and deferred items**

- **design-decisions.md** - Design choices made
- **tech-stack.md** - Technology choices
- **postponed.md** - Deferred/blocked items

---

## 🎯 Quick Reference

### Current Focus (Feb 2026)
- **Homepage redesign** (see `vision/homepage-strategy.md`)
- **Dance classes section** (active development)
- **Studio rentals** (fully built)

### Authoritative Documents
1. **Homepage:** `vision/homepage-strategy.md` (Haan's requirements)
2. **Target Market:** `research/target-market.md` (Malaysia insights)
3. **Tech Stack:** `technical/architecture.md` (current implementation)

### Key Principles
- **Inclusion without alienation** - All demographics feel welcome
- **Beginner-friendly** - Dance is learned, not inherited
- **Community over competition** - Belonging first
- **Authenticity** - No marketing fluff
- **Data-driven** - All variable data from JSON files

---

## 🔍 Finding Information

### "Who are our customers?"
→ `research/target-market.md`

### "What's the homepage strategy?"
→ `vision/homepage-strategy.md`

### "How does the data flow work?"
→ `technical/architecture.md`

### "What's our brand voice?"
→ `vision/brand-identity.md`

### "How do I edit room information?"
→ `technical/architecture.md` (see "How to Update Content")

### "What AI tools do we use?"
→ `tools/ai-prompting.md`

---

## 📝 Document Status

### ✅ Completed
- vision/homepage-strategy.md
- vision/business-model.md
- vision/brand-identity.md
- research/target-market.md
- technical/architecture.md

### 🚧 In Progress
- research/competitors.md
- research/design-patterns.md
- research/examples/* (individual site analyses)
- technical/data-flow.md
- technical/development-guide.md
- tools/ai-prompting.md
- tools/review-workflow.md
- tools/local-llm.md
- decisions/* (all decision logs)

---

## 🗂️ Original Documentation

All original documents have been archived in:
`/docs/_archive_original_docs/`

See `_MANIFEST.md` in archive for mapping of old → new locations.

---

## ✏️ How to Update This Blueprint

### For Business/Vision Changes
1. Edit appropriate file in `/vision`
2. Update related files if needed
3. Keep cross-references in sync

### For Technical Changes
1. Edit `/technical/architecture.md` or specific doc
2. Update code comments if architecture changes
3. Ensure `/data/*.json` files reflect changes

### For Research Updates
1. Add findings to `/research` files
2. Update target market segments if demographics shift
3. Track competitor changes in `competitors.md`

### For New Tools/Workflows
1. Create new file in `/tools`
2. Add link to this INDEX
3. Cross-reference in relevant files

---

## 🔗 External Resources

### Knowledge Base (READ-ONLY)
`/knowledge/` folder - Business procedures, policies, room details
- **Do NOT edit** knowledge base from blueprint
- Use knowledge base for reference only
- Knowledge base = source of truth for business operations

### Development Folders (PRESERVED)
- `/docs/development/` - Technical guides (LOCAL_LLM, MCP, etc.)
- `/docs/manus_research/` - External research specs

---

## 📊 Metrics & Success

### Homepage Success Criteria (from vision)
- All 6 demographics feel represented
- 70-year-olds don't bounce (they see their section)
- Teens see K-pop/cool styles (not "boring adult stuff")
- Parents understand beginner-friendly approach
- Studio renters get equal visual weight
- Warm, authentic tone (no marketing jargon)
- Professional, clean design

### Business Metrics
- Revenue split: ~50% classes / ~50% rentals
- Target demographics: Ages 5-75+
- Geographic: Bandar Sunway (primary), KL/PJ (secondary)
- Income levels: B40/M40/T20 (flexible pricing)

---

## 🆘 Need Help?

### For Vision/Strategy Questions
→ Read `vision/*.md` files
→ Check `research/target-market.md` for audience insights

### For Technical Questions
→ Read `technical/architecture.md`
→ Check `/docs/development/` for dev guides

### For Content Editing
→ Edit `/data/*.json` for room data
→ Edit React components for page content
→ See `technical/architecture.md` for what's automated vs. hardcoded

---

**Last Updated:** 2026-02-27
**Blueprint Version:** 1.0
**Consolidation Source:** 31 original documentation files
