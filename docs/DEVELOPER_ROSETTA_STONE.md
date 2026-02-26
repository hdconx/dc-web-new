# 🗿 The Developer's Rosetta Stone
**Project:** Dance Connexions Website Redesign (Fresh Start)
**Version:** 1.0 (2026-02-19)
**Status:** Primary Handover Document

---

## 🧭 The Succession Trail (Read in this Order)
To understand the project without reading all 108 files, follow this specific path:

1.  **The Mandate**: [HAAN_HOMEPAGE_VISION.md](file:///c:/Users/nvntr/Documents/dc-web-new/docs/HAAN_HOMEPAGE_VISION.md)  
    *Why we are starting from zero and what the previous AIs failed to do.*
2.  **The Blueprint**: `docs/openclaw_docs_archive-ignore/project_folder_docs_from_openclaw/01_RESEARCH/CONTENT_STRATEGY_PRD.md`  
    *The specific 12-section technical definition of the homepage.*
3.  **The Vibe**: [DESIGN_RECOMMENDATIONS.md](file:///c:/Users/nvntr/Documents/dc-web-new/docs/Latest%20Website%20Development%20Info/DESIGN_RECOMMENDATIONS.md)  
    *The exact technical specs for color, typography, and "Warm Community" aesthetics.*
4.  **The Engine**: [DATA_FLOW_ARCHITECTURE.md](file:///c:/Users/nvntr/Documents/dc-web-new/docs/DATA_FLOW_ARCHITECTURE.md)  
    *How to build it using JSON-driven automation (95% rule).*

---

## 🛠️ Scope Mapping: The "Rest of the Website"
Ignore the **Rental** pages (they are 95% complete). Focus solely on the **Homepage Redesign** and **Demographic Routing**.

| PRD Section | Requirement (from Vision) | Implementation (Technical) |
| :--- | :--- | :--- |
| **Section 1: Identity Grid** | Demographic Router (6 Tiles) | Refactor `page.tsx` to pull tiles from `config.ts` or `demographics.json`. |
| **Section 2-6: Vignettes** | Inclusive Welcome (Kids to Seniors) | Create reusable `DemographicVignette` component powered by `data/demographics.json`. |
| **Section 7: Studio Rentals** | Equal Visual Weight (50% Revenue) | Use existing `RoomCard` components but with a "Marketing First" layout. |
| **Section 11: Philosophy** | "Dance is Learnable" (7 Lines) | Store the [7 approved copy lines](file:///c:/Users/nvntr/Documents/dc-web-new/docs/HAAN_HOMEPAGE_VISION.md#L117) in `copy.json`. |

---

## 🎨 Visual Implementation Rules
*   **Colors**: **Cream** base (#F5F3F0), **Warm Gold** accent (#D4A574).
*   **Aesthetic**: "Dark Premium" (Zinc-950/Black backgrounds) but with "Warm Community" soul.
*   **Imagery**: **AI-Generated Only** (Grok/Veo). Use [LUNA_PROMPTING_GUIDE.md](file:///c:/Users/nvntr/Documents/dc-web-new/docs/LUNA_PROMPTING_GUIDE.md) for prompts.
*   **Anti-Patterns**: NO marketing jargon. NO corporate "Transform your life" copy. Use grounded, authentic Malaysian-context language.

---

## 🗄️ Radiation Shielding (What to Ignore)
To stay productive, **DO NOT** look into these folders unless debugging core logic:
*   `docs/openclaw_docs_archive-ignore/`: 90% of this is historical chat debris.
*   `docs/ARCHIVE/`: Stale research from previous AI iterations.
*   `src/app/rentals/*`: These pages are done. Use them as a baseline for the theme/components only.

---

## 🚀 The First Task for the New Developer
1.  **Infrastructure**: Refactor the current "Terrible" homepage (`src/app/page.tsx`) to be a shell that imports data from JSON.
2.  **Routing**: Implement the **6-Tile Identity Grid** using the "Dark Premium" aesthetic.
3.  **Refinement**: Use the [REVIEW_TOOL_GUIDE.md](file:///c:/Users/nvntr/Documents/dc-web-new/docs/REVIEW_TOOL_GUIDE.md) to gather Joe's feedback in a structured way.
