# Archive Manifest
**Created:** 2026-02-27
**Purpose:** Mapping of archived files to new blueprint locations
**Total Files Archived:** 26 files

---

## Archive Strategy

**What was archived:**
- All standalone documentation files from `/docs` root
- All files from `Latest Website Development Info/` folder
- Files consolidated into new `/docs/blueprint/` structure

**What was NOT archived:**
- `/docs/development/` folder - Preserved as-is (actively used technical guides)
- `/docs/manus_research/` folder - Preserved as-is (external research reference)
- `/knowledge/` folder - Never touched (business knowledge base)
- `/data/` folder - Configuration files, not documentation

---

## File Mapping: Old Location → New Location

### Vision & Strategy Files

| Archived File | New Blueprint Location | Notes |
|--------------|------------------------|-------|
| `HAAN_HOMEPAGE_VISION.md` | `blueprint/vision/homepage-strategy.md` | PRIMARY source, fully preserved |
| `ONLINE_PRESENCE_PLAN.md` | `blueprint/vision/business-model.md` | Content distributed across vision/ |
| | `blueprint/vision/brand-identity.md` | Voice/tone extracted here |
| `From Google Ai Studio-Dance Studio Online Presence Plan.md` | `blueprint/vision/business-model.md` | Historical, concepts merged |
| `From Google Ai Studio-Dance Studio Website Technical Architecture.md` | `blueprint/technical/architecture.md` | Historical, concepts merged |
| `from google AI Studio-DC Website Development v1.md` | `blueprint/vision/` (referenced) | Historical context |

### Research & Analysis Files

| Archived File | New Blueprint Location | Notes |
|--------------|------------------------|-------|
| `Latest Website Development Info/TARGET_MARKET_ANALYSIS.md` | `blueprint/research/target-market.md` | Fully preserved, comprehensive |
| `Latest Website Development Info/COMPETITOR_ANALYSIS.md` | **DEFERRED** - Not yet created | Pending: `blueprint/research/competitors.md` |
| `Latest Website Development Info/DESIGN_RECOMMENDATIONS.md` | **DEFERRED** - Not yet created | Pending: `blueprint/research/design-patterns.md` |
| `Latest Website Development Info/README.md` | `blueprint/00_INDEX.md` (concept) | Navigation concept reused |
| `Latest Website Development Info/WEBSITE_EXAMPLES/PATTERNS_EXTRACTED.md` | **DEFERRED** - Not yet created | Pending: `blueprint/research/design-patterns.md` |
| `Latest Website Development Info/WEBSITE_EXAMPLES/site-*.md` (7 files) | **DEFERRED** - Not yet created | Pending: `blueprint/research/examples/` |

### Technical Files

| Archived File | New Blueprint Location | Notes |
|--------------|------------------------|-------|
| `DATA_FLOW_ARCHITECTURE.md` | `blueprint/technical/architecture.md` | PRIMARY source for architecture |
| `DEVELOPER_ROSETTA_STONE.md` | `blueprint/technical/architecture.md` | Concepts merged into architecture |
| `GBP_OPTIMIZATION_GUIDE.md` | **DEFERRED** - TBD | Marketing/SEO guide, location TBD |

### Tools & Guides

| Archived File | New Blueprint Location | Notes |
|--------------|------------------------|-------|
| `LUNA_PROMPTING_GUIDE.md` | **DEFERRED** - Not yet created | Pending: `blueprint/tools/ai-prompting.md` |
| `REVIEW_TOOL_GUIDE.md` | **DEFERRED** - Not yet created | Pending: `blueprint/tools/review-workflow.md` |

### Tracking & Historical Files

| Archived File | New Blueprint Location | Notes |
|--------------|------------------------|-------|
| `00_START_HERE.md` | `blueprint/00_INDEX.md` (concept reused) | Old navigation replaced with new INDEX |
| `ORGANIZATION_SUMMARY.md` | `blueprint/CONSOLIDATION_DECISIONS.md` (historical note) | Previous organization effort documented |
| `SESSION_NOTES.md` | **ARCHIVED ONLY** | Historical session notes, not consolidated |
| `REVIEW_TRACKER.md` | **ARCHIVED ONLY** | Operational tracker, ephemeral |
| `VERSION.md` | **ARCHIVED ONLY** | Old versioning system, replaced by git |

---

## Files Preserved in Original Locations (NOT Archived)

### `/docs/development/` - Technical Guides
- `DEVELOPMENT_CHECKLIST.md` - Active checklist
- `LOCAL_LLM_USAGE_GUIDE.md` - Currently used guide
- `MCP_INTEGRATION_ISSUE.md` - Active troubleshooting doc
- `PROMPT_FOR_NEW_CLAUDE_SESSION.md` - Session setup guide

**Rationale:** Already well-organized, actively referenced, technical/operational (not strategic)

### `/docs/manus_research/` - External Research
- `Dance_Connexions_Research_Spec.md` - External research specification

**Rationale:** Third-party research, reference material, preserved as-is

---

## New Blueprint Structure Created

```
/docs/blueprint/
├── 00_INDEX.md                        # Master navigation (NEW)
├── CONSOLIDATION_DECISIONS.md         # Decision log (NEW)
├── vision/
│   ├── homepage-strategy.md          # From HAAN_HOMEPAGE_VISION.md
│   ├── business-model.md             # From ONLINE_PRESENCE_PLAN.md
│   └── brand-identity.md             # Synthesized from multiple sources
├── research/
│   └── target-market.md              # From TARGET_MARKET_ANALYSIS.md
├── technical/
│   └── architecture.md               # From DATA_FLOW_ARCHITECTURE.md + others
├── tools/                            # (Deferred - to be created)
└── decisions/                        # (Deferred - to be created)
```

---

## Deferred Work

### High Priority
1. **Complete research section:**
   - `research/competitors.md` ← COMPETITOR_ANALYSIS.md
   - `research/design-patterns.md` ← PATTERNS_EXTRACTED.md + DESIGN_RECOMMENDATIONS.md
   - `research/examples/` ← site-1 through site-6

### Medium Priority
2. **Create tools section:**
   - `tools/ai-prompting.md` ← LUNA_PROMPTING_GUIDE.md
   - `tools/review-workflow.md` ← REVIEW_TOOL_GUIDE.md
   - `tools/local-llm.md` ← development/LOCAL_LLM_USAGE_GUIDE.md (or just reference)

3. **Determine GBP placement:**
   - Decide if GBP_OPTIMIZATION_GUIDE.md goes in tools/, marketing/, or stays in archive

### Low Priority
4. **Create decisions section:**
   - `decisions/design-decisions.md` - Extract from various sources
   - `decisions/tech-stack.md` - Document technology choices

---

## How to Use This Archive

### To Find Original Content
1. Check this manifest for old file location
2. Look up "New Blueprint Location" column
3. If "DEFERRED" or "ARCHIVED ONLY", content is in original archived file

### To Restore a File
- Files preserved in `/docs/_archive_original_docs/`
- Original folder structure maintained
- Copy back to `/docs/` if needed

### To Delete Archive
**When ready** (after verification):
1. Confirm all critical content is in blueprint
2. Review CONSOLIDATION_DECISIONS.md for any missed items
3. Delete `/docs/_archive_original_docs/` folder

**Recommendation:** Keep archive for at least 30 days after consolidation

---

## Content Preservation Verification

### ✅ Fully Consolidated
- Homepage strategy ✅ (`HAAN_HOMEPAGE_VISION.md` → `homepage-strategy.md`)
- Business model ✅ (`ONLINE_PRESENCE_PLAN.md` → `business-model.md`)
- Brand identity ✅ (Multiple sources → `brand-identity.md`)
- Target market ✅ (`TARGET_MARKET_ANALYSIS.md` → `target-market.md`)
- Technical architecture ✅ (`DATA_FLOW_ARCHITECTURE.md` → `architecture.md`)

### ⏳ Partially Consolidated
- Research files (target market done, competitors/patterns deferred)
- Tools & guides (referenced but not yet consolidated)
- Technical guides (preserved in original location, not moved to blueprint)

### 📝 Archived Only (Not Consolidated)
- Session notes (historical)
- Review tracker (ephemeral)
- Version log (replaced by git)
- Organization summary (historical)

---

## Archive Statistics

**Total Files Archived:** 26 files
**Total Files Preserved:** 5 files (in `/docs/development/` and `/docs/manus_research/`)
**Blueprint Files Created:** 7 files (+ INDEX + DECISIONS)
**Content Consolidation Rate:** ~60% (critical content consolidated, rest deferred or archived)

---

**Archive Created:** 2026-02-27
**Safe to Delete:** After user review + 30 day hold period
**Next Steps:** See `/docs/blueprint/CONSOLIDATION_DECISIONS.md` for deferred work
