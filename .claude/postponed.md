# Postponed Development Items

Items agreed upon but deferred — waiting for content, a discussion session, or scheduled for a future sprint.

**Last updated:** 2026-02-13

---

## Dance Classes — Pending

### CLASSES-01: `/classes` — Demographic Router Page
**Priority:** High
**Status:** Agreed — build LAST after all 5 demographic sections are reviewed
**What it is:** A visually striking landing page where visitors choose their demographic group. Full-screen grid of 5 cards (or vertical scroll of 5 sections). Each card: background image, age group label, 1-line hook, hover state reveals dance styles, click goes to that demographic's page.
**Decision:** Build this only after all 5 demographic pages are reviewed and content is approved. It is the "face" of the classes section.
**Affects:** Need to create `src/app/classes/page.tsx`

### CLASSES-02: Real Images — Replace All Placeholders
**Priority:** High
**Blocked by:** AI image generation by owner
**How to replace:**
1. Open any page (e.g. `/kids`) — every placeholder shows its exact AI prompt
2. Copy the prompt, generate image in Grok / Midjourney v6 / Adobe Firefly
3. Save optimised image to `/public/images/classes/[filename].webp`
4. In the relevant page component, replace `<ImagePlaceholder ... />` with `<Image src="..." alt="..." fill className="object-cover" />`
**Prompt source:** `data/classes.json` — `heroImagePrompt` per demographic, `imagePrompt` per style (23 prompts total)
**Ethnicity guidance:** ~3 Chinese Malaysian : 1 other (Malay/Indian/Western) per group of 4 images

### CLASSES-03: Nav Links — Add Dance Classes to Main Navigation
**Priority:** Medium
**Status:** Not started
**What is needed:** Add dance classes links to the site header/navigation so visitors can reach the classes section. Currently no nav links point to /kids, /teens, etc.
**Affects:** `src/components/header.tsx`

### CLASSES-04: `/adults/schedule-pricing` Page
**Priority:** Low
**Status:** Placeholder link exists in old adults page (now replaced) — can be ignored or built later
**Note:** Current /adults page has all pricing inline. A dedicated schedule page can be added later if needed.

---

## Blocked on Content (Photos / Videos)

### PHOTO-01: Room B, C, D Card Photos — Replace Panoramic Shots
**Priority:** High
**Blocked by:** New photos from owner
**Issue:** Current card images for Room B, C, D (`02-Studio-B.webp`, `03-Studio-C.webp`, `04-Studio-D.webp`) are ultra-wide panoramic shots with baked-in text watermarks ("Studio B", "Studio C", "Studio D"). They crop badly in fixed-height card containers and the text creates a jagged cut-off effect. Alternative clean versions exist (`studio-b-medium-connected.webp` etc.) but are the same panoramic composition — still crop poorly.
**What is needed:** New photos with standard landscape composition (approx. 16:9 or 4:3), no baked-in text, good centre composition showing the mirror wall and floor.
**Affects:** `/rentals/rooms` listing page, `/rentals/page.tsx` studio cards.

### HERO-01: Rentals Landing — Hero Image Slideshow
**Priority:** Medium
**Blocked by:** Multiple photos of Room A in different settings
**Requirement:** Replace static hero image with a slideshow/gallery scrolling style animation showing the studio in multiple setups (e.g. empty, class in session, event setup, RGB lighting on).
**What is needed:** 3–5 photos of Room A (or across rooms) in varied setups. Current hero uses `Studio A - 1.webp`.
**Scope:** Moderate — involves adding a carousel/slideshow component with animation to the hero section.

### CONTENT-01: Choose Your Studio — Multiple Photos Per Card
**Priority:** Medium
**Blocked by:** Multiple photos per room
**Requirement:** Each studio card on the landing page should show multiple photos (manual or auto scrolling) instead of one static image.
**What is needed:** 2–4 photos per room (Room A, B, C, D) from different angles or setups.
**Affects:** `src/app/rentals/page.tsx` — "Choose Your Studio" section.

### GALLERY-01: Add More Photos to All Room Galleries
**Priority:** Low
**Blocked by:** More room photos from owner
**Requirement:** Gallery pages for each room need additional photos.
**Affects:** `/rentals/room/[id]/` gallery tabs.

### GALLERY-02: Add Videos to Room Galleries
**Priority:** Low
**Blocked by:** Video content from owner
**Requirement:** Short video clips (30–60 sec) showing each room in use.
**Affects:** `/rentals/room/[id]/` gallery tabs.

---

## Needs Discussion

### DISCUSS-01: Compare Page — "Best For" Tab Accuracy
**Priority:** Medium
**Status:** Owner review needed
**Issue:** The "Best For" categories on the Compare page tabs may not accurately reflect each room's real strengths. Some categories may be wrong, missing, or misleading.
**Action needed:** Owner to review each room's Best For list and confirm/correct the entries. Can be done in a quick review session.
**Affects:** `src/app/rentals/compare/page.tsx`

---

## Knowledge Base Master File Updates

### KB-01: usage-rules.md — Add Restricted Activities Section
**Priority:** Low
**Status:** Info is in supplemental (S-2026-02-01-02) but not yet in master file
**Action:** Add a "Restricted Activities" section to `knowledge/master/usage-rules.md` listing:
- Pilates (equipment-dependent, not suitable for the space)
- Martial arts (safety risk, impact damage)
- Ballet (pointe work damages flooring)
- Boxing (equipment damage, safety risk)
**Note:** These restrictions are confirmed by owner. The space is suitable for many activities but not the above.

### KB-02: pricing.md — Correct "Rule-Based Not Negotiated" Statement
**Priority:** Low
**Status:** Master file contains inaccurate statement
**Issue:** `knowledge/master/pricing.md` says "Discounts are rule-based, not negotiated." This is incorrect — rates ARE negotiated case-by-case upon customer contact (confirmed by owner, documented in S-2026-02-04-05).
**Action:** Update pricing.md to reflect that rates are personalised upon contact, not rule-based.

---

## Notes for Future Sessions

- Items under "Blocked on Content" cannot be started until the owner provides the required photos/videos
- Items under "Needs Discussion" should be the first agenda item in a review session before any code changes
- Knowledge Base master file updates (KB-01, KB-02) can be done independently at any time — they are low-risk edits to markdown files
- When picking up HERO-01 or CONTENT-01, first check if a suitable carousel/slideshow library is already in the project dependencies before adding new ones
