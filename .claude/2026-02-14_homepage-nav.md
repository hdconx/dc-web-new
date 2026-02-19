# Handover — Dance Connexions Web Project
**Date:** 2026-02-14
**Project:** `/mnt/c/users/nvntr/documents/dc-web-new`
**Branch:** master

---

## Done This Session

### Navigation & Header
- Header rebuilt: desktop nav — Dance Classes | Studio Rentals | Contact | **My Portal** button (→ `/dashboard`)
- Mobile: user icon + hamburger side by side
- `My Portal` links to `/dashboard` which already has a "Coming Soon" portal page

### Homepage Consolidated
- `/classes` now redirects (307) to `/` — homepage IS the router, no separate classes page needed
- Subtitle added under studio name: "Dance Classes · Studio Rentals · Bandar Sunway"
- `UniversalBenefits` component deleted — replaced with 3 alternating editorial rows (placeholder)
- `BeginnerReassurance` simplified — external Vercel blob image replaced with local file
- Student/Renter portal strip added above QuickAccessStrip
- QuickAccessStrip "Classes & Schedule" link fixed to go to `/`

### New Pages Built
- `/privacy` — Privacy Policy (pulls from CONTACT, LOCATION config)
- `/terms` — Terms of Service
- `/sitemap` — Full site map page (dynamic from classes.json)

### Layout Fix
- All sections on demographic pages and /classes now have `mx-auto` to center content correctly (was left-aligned before)

---

## Current State

- **Server:** Docker running, app on localhost:3000
- **Branch:** master — uncommitted changes exist
- **Knowledge base:** v2.5.0

### All Pages Live

| URL | Status |
|-----|--------|
| `/` | Complete — is the router page |
| `/classes` | Redirects → `/` |
| `/kids`, `/teens`, `/young-adults`, `/adults`, `/active-adults` | Complete (scaffolding, image placeholders) |
| `/[demo]/[style]` (18 pages) | Complete |
| `/[demo]/faq` (5 pages) | Complete |
| `/rentals` and all sub-pages | Complete |
| `/privacy`, `/terms`, `/sitemap` | New — complete |
| `/dashboard` | Coming Soon portal page |

---

## Critical Pending Work

### HOME-01: Homepage Redesign (HIGH PRIORITY, BLOCKED)
Owner is consulting Claude Opus and other AI models for homepage redesign ideas.

**The problem:** Everything below the Identity Grid is placeholder content — long, generic, not effective.

**What to keep:** Identity Grid (non-negotiable), Header, Footer.

**Agreed constraints:**
- No credentials (ISTD-UK, DMIA-AU, Est. 1999) on homepage
- No location/nationality taglines ("Teaching Malaysians...")
- Universal emotional messaging — joy, movement, confidence, community — why anyone wants to dance
- No pricing, no instructor photos
- Dark premium aesthetic
- WhatsApp as the only CTA

**Opus recommendation (not yet approved, saved in S-2026-02-14-01):**
1. Credibility bar — REJECTED
2. "The Promise" text section — approved in principle
3. Dual-path split (Dance vs Rentals cards) — under consideration
4. Full-bleed studio image section — under consideration
5. WhatsApp CTA section — approved
6. Delete all current placeholder sections

**Next step:** Owner gathers AI input, agrees on direction, then implement.

### HOME-02: Hero Tagline
Current: "Dance Classes · Studio Rentals · Bandar Sunway" (cold, feature list)
Rejected: "Teaching Malaysians to move since 1999"
Need: Universal emotional tagline. Candidate: "Movement for every age. Space for every vision."

### CLASSES-02: Real Images
All class pages have AI-generation prompts as placeholders. Owner needs to generate images and replace `<ImagePlaceholder>` with `<Image>`. Prompts in `data/classes.json`.

### CLASSES-03: Nav Links on Demographic Pages
Demographic pages (`/kids` etc.) use a "← All Programs" back button but no full nav header.

---

## Architecture Quick Reference

```
src/app/
  page.tsx                ← Homepage (router + marketing)
  classes/page.tsx        ← Redirects to /
  [demo]/page.tsx         ← 5 demographic landing pages
  [demo]/[style]/page.tsx ← 18 style pages (dynamic)
  [demo]/faq/page.tsx     ← 5 FAQ pages
  rentals/...             ← Complete rentals section
  dashboard/page.tsx      ← Customer Portal (Coming Soon)
  privacy/page.tsx        ← Privacy Policy
  terms/page.tsx          ← Terms of Service
  sitemap/page.tsx        ← Full sitemap

src/components/
  header.tsx              ← Nav: Dance Classes | Rentals | Contact | My Portal
  identity-grid.tsx       ← 6-tile routing grid (CORE COMPONENT)
  beginner-reassurance.tsx ← Simplified — local image
  studio-premises.tsx     ← Studio facilities (placeholder for redesign)
  studio-rentals.tsx      ← Rentals teaser (placeholder for redesign)
  classes/
    demographic-landing.tsx ← Shared landing for all demographics
    style-page.tsx          ← Shared style sub-page
    faq-page.tsx            ← Shared FAQ page
    image-placeholder.tsx   ← Placeholder → replace with Image when ready

data/classes.json         ← All class content, pricing, 23 image prompts
```

---

## Docker Commands

```bash
docker compose restart app          # After any file change
docker compose down && docker compose up --build   # After npm dependency changes
docker logs danceconnexions_app --tail=30          # Check for errors
```

---

## Knowledge Base

- Version: v2.5.0
- Recent supplemental: S-2026-02-14-01 (homepage consolidation + redesign pending)
- Postponed items: HOME-01, HOME-02, CLASSES-02, CLASSES-03
