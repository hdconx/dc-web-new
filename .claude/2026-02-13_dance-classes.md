# Handover — Dance Connexions Web Project
**Date:** 2026-02-13
**Project:** `/mnt/c/users/nvntr/documents/dc-web-new`
**Branch:** master

---

## Done This Session

### Rentals Section (completed earlier)
- Hero image updated: `Studio A - 1.webp` (RGB lighting, no watermark)
- All review feedback applied (copy, accordion, available upon request)
- Pricing table width constrained on desktop
- Postponed items recorded in `.claude/postponed.md`

### Dance Classes Section (built this session)
- `data/classes.json` — all content for 5 demographics, 18 styles, pricing, FAQs, 23 AI image prompts
- `src/components/classes/demographic-landing.tsx` — shared landing page
- `src/components/classes/style-page.tsx` — shared style sub-page
- `src/components/classes/faq-page.tsx` — shared FAQ page
- `src/components/classes/image-placeholder.tsx` — placeholder showing AI prompt where real images go
- All 5 demographic landing pages rewritten (`/kids`, `/teens`, `/young-adults`, `/adults`, `/active-adults`)
- 18 style sub-pages created with dynamic `[style]` routing
- 5 FAQ pages created
- All 32 pages return HTTP 200

### Knowledge Base
- Supplemental entries: S-2026-02-11-01 through S-2026-02-13-01 (11 entries)
- VERSION.md bumped to v2.4.0
- `.claude/postponed.md` updated with CLASSES-01 through CLASSES-04

---

## Current State

- **Server:** Docker running, app on localhost:3000
- **Branch:** master (no uncommitted changes after final commit)
- **Last commit:** "Pre-compact: update supplemental entries, VERSION.md, postponed.md"

### All Pages Live

| URL Pattern | Status |
|-------------|--------|
| /rentals (and sub-pages) | Complete |
| /kids, /teens, /young-adults, /adults, /active-adults | Complete — text only, image placeholders |
| /[demo]/[style] (18 pages) | Complete — text only, image placeholders |
| /[demo]/faq (5 pages) | Complete |
| /classes | NOT BUILT — router page, build last |

---

## Pending / Next Steps

### Immediate (next session)
1. **Review the pages visually** — open `/kids`, `/teens`, `/adults`, etc. in browser and give feedback
2. **Generate images** — use prompts in `data/classes.json` (`heroImagePrompt` and `imagePrompt` fields), save to `/public/images/classes/`, replace `<ImagePlaceholder>` with `<Image>`
3. **Build `/classes` router page** — demographic selector, full-screen grid of 5 cards, each links to a demographic page

### How to resume image replacement
1. Open e.g. `/kids` — each placeholder box shows the exact prompt
2. Generate image with Grok/Midjourney/Firefly using that prompt
3. Save as `/public/images/classes/kids-hero.webp` (choose a descriptive filename)
4. In `src/app/kids/page.tsx` or the shared component, swap `<ImagePlaceholder>` for `<Image src="/images/classes/kids-hero.webp" alt="..." fill className="object-cover" />`
5. Run `docker compose restart app` after any code change

### Navigation (not done yet)
- `src/components/header.tsx` needs dance classes links added (see CLASSES-03 in postponed.md)

---

## Architecture Quick Reference

```
data/classes.json               ← All class content, pricing, styles, image prompts
src/components/classes/
  demographic-landing.tsx       ← Shared landing page component
  style-page.tsx                ← Shared style sub-page component
  faq-page.tsx                  ← Shared FAQ page component
  image-placeholder.tsx         ← Placeholder → replace with Image when ready

src/app/
  kids/page.tsx                 ← Pass kids data to DemographicLanding
  kids/[style]/page.tsx         ← Dynamic route, looks up style from classes.json
  kids/faq/page.tsx             ← FAQ page
  (same pattern for teens, young-adults, adults, active-adults)
```

**To add a new dance style to a demographic:**
1. Add style object to `data/classes.json` under the correct demographic's `styles` array
2. Include: slug, name, tagline, cardDescription, fullDescription, whatYoullLearn[], whoItsFor, whatsappMessage, imagePrompt
3. The dynamic `[style]` route handles it automatically — no new files needed

**To change any pricing:**
1. Edit `data/classes.json` → `classPricing` object
2. All pages update automatically

---

## Key Business Decisions (Do Not Reverse Without Discussion)

| Decision | Reason |
|----------|--------|
| No instructor photos | Instructors change frequently |
| No class size limits stated | Problem is lack of students, not capacity |
| WhatsApp is the CTA, not a booking system | Phase 1 strategy confirmed by owner |
| /classes router page built LAST | Need all 5 sections reviewed before building selector |
| Trial class = RM 50 drop-in | Not a blanket free trial — case by case |
| Credentials on /adults page only (subtle) | "30+ years, national titles, ISTD-UK/DMIA-AU" |
| Image diversity: ~95% Chinese Malaysian + others | Reflects actual student demographic |

---

## Docker Commands

```bash
docker compose restart app          # After any file change
docker compose down && docker compose up --build   # After npm dependency changes
docker logs danceconnexions_app --tail=30          # Check for errors
```

---

## Knowledge Base

- Version: v2.4.0
- Location: `/mnt/c/users/nvntr/documents/dc-web-new/knowledge/`
- Recent supplemental: S-2026-02-13-01 (dance classes section built)
- Postponed items: `.claude/postponed.md`
