# Dance Connexions — Homepage Design Brief
_Prepared by Sam · Feb 2026_

## Current Structure (Keep)
- ✅ Header / Nav
- ✅ Hero: Identity Grid (age groups + rentals tiles)
- ✅ Footer
- ❌ Everything in between → **replace this**

---

## What the Middle Sections Need to Do

The hero grid handles navigation. The middle has one job:
**Make a stranger trust you and want to walk through your door.**

The current copy ("Dance is a skill...") is beautifully written but floats in a void — no images, no proof, no grounding. Replace it with sections that:
1. Show the actual space
2. Prove people love it here
3. Show what you teach
4. Give practical info (schedule taste, location)
5. End with a clear CTA

---

## Recommended Section Order (After Hero Grid)

```
[HERO GRID]
    ↓
1. SOCIAL PROOF BAR      (numbers at a glance)
    ↓
2. STUDIO SHOWCASE       (photos of the space)
    ↓
3. WHAT WE TEACH         (dance styles)
    ↓
4. TESTIMONIALS          (real reviews)
    ↓
5. INSTRUCTORS           (faces + names)
    ↓
6. HOW IT WORKS          (simple 3-step)
    ↓
7. LOCATION              (map + address)
    ↓
8. FINAL CTA             (WhatsApp buttons)
    ↓
[FOOTER]
```

---

## Section-by-Section Design Ideas

---

### 1. SOCIAL PROOF BAR
A single horizontal strip, 4 numbers, fast credibility.

```
[ 4 Studios ]  [ 5 Age Groups ]  [ Since 20XX ]  [ ★ 4.9 Google ]
```

- Numbers large, labels tiny caps
- No images needed — pure typography
- Thin rule above and below
- Optional: counter animation on scroll

---

### 2. STUDIO SHOWCASE
Let the spaces sell themselves. You already have great photos in `/public/images/studios/`.

**Option A: Horizontal scroll filmstrip**
- 4–5 wide photos of Studio A/B/C/D
- Draggable on mobile, auto-scroll on desktop
- Caption: studio name + sq ft + capacity
- Best for rentals conversion

**Option B: Split-screen**
- Left: large studio photo
- Right: short copy ("4 professional spaces. Sprung floors. Mirror walls. Sound systems.")
- CTA: "See all studios →"

**Option C: Asymmetric masonry grid**
- Mix of portrait + landscape studio photos
- Hover: studio name appears
- Very editorial, matches your dark theme

---

### 3. WHAT WE TEACH
Quick visual scan of styles — people want to know "do you teach X?"

**Option A: Pill tag grid** (fastest to build)
- Pill-shaped tags: Ballet · Hip Hop · Contemporary · K-Pop · Jazz · Salsa · etc.
- White pills on dark bg, hover highlight
- Links to age group pages

**Option B: Horizontal scroll cards**
- Each style = card with photo + name + one-liner
- "Ballet — Classical technique from beginner to advanced"

**Option C: Accordion list**
- Style name + expand → description, age groups, difficulty
- More info-dense

---

### 4. TESTIMONIALS
Google review-style cards. Real quotes = real trust.

**Option A: Marquee / infinite scroll strip** ⭐ (most impactful)
- Single row of cards auto-scrolling horizontally
- ★★★★★ + short quote + name + role
- CSS-only animation or Framer Motion

**Option B: 3-column grid**
- Static cards, clean and easy

**Option C: Featured big quote + 3 smaller cards**
- ONE large standout testimonial (serif, big)
- 3 supporting cards below it

**What to include:** 5 stars · 2–3 sentence quote · First name · Context ("Parent, joined 2024")

**Source:** Pull from your Google Maps reviews for Dance Connexions.

---

### 5. INSTRUCTORS
Faces build trust faster than any copy.

**Option A: 2×2 or 3-col card grid**
- Photo (square crop) + Name + Speciality
- Hover: brief bio overlay

**Option B: Horizontal scrolling bios**
- Wide cards, photo left + bio right

**Option C: Just photos + names** (minimal)
- If not ready — just a grid of faces is enough

---

### 6. HOW IT WORKS
Move this section ABOVE the CTA (not below it like currently).

```
01 — Pick your age group or studio
02 — Message us on WhatsApp
03 — Show up. Move.
```

- Keep the big serif numbers (already good)
- Shorten the descriptions
- Optional: add a connecting line/progress indicator between steps

---

### 7. LOCATION
Practical trust-builder — shows you're a real place.

**Layout:**
- Left: Google Maps embed (your config has `googleMapsEmbedUrl` ready to use)
- Right: Address, hours, parking
- Two buttons: "Google Maps →" | "Waze →"

**Design:** Dark map style, same zinc/black palette. Keep it compact.

---

### 8. FINAL CTA
Your current "Ready to take the floor?" section is good — keep it.
Just move "Getting Started" steps above it, not below.

---

## Design Direction Options

Pick ONE and commit.

---

### Direction A: "Dark Editorial" (your current direction, done better)
- Black/zinc-950 background throughout
- Large serif headers (keep what you have)
- Full-bleed studio photography as section dividers
- Thin rules, generous whitespace
- **Inspired by:** luxury fashion, high-end hotel websites
- **Best for:** premium rental market, adult audience

---

### Direction B: "Bold & Energetic"
- Dark bg + ONE vivid accent color (electric yellow, fire orange, or electric blue)
- Large kinetic typography
- Photos of PEOPLE DANCING (in motion) vs. empty studio shots
- Diagonal section dividers or angled crops
- **Inspired by:** Nike, dance festival sites, urban dance brands
- **Best for:** kids, teens, young adults

---

### Direction C: "Warm Community"
- Very dark warm charcoal (#1a1612) instead of pure black
- Warmer accent: amber, gold, terracotta
- More candid photos: smiles, groups, community moments
- Rounded cards, more approachable
- **Inspired by:** boutique fitness brands (Barry's, SoulCycle)
- **Best for:** adult beginners, active adults, parents

---

### Direction D: "Minimal Luxury" ⭐ (most distinctive)
- Near-white or cream background — breaks from all-dark convention
- Black editorial typography
- Full-bleed black-and-white photography
- **Inspired by:** Cloud Gate, Paris Opera Ballet website
- **No Malaysian dance studio does this** — very memorable
- **Best for:** premium positioning, adult + corporate rental audience

---

## Reference Websites to Visit

| Site | What to look at |
|------|----------------|
| https://ailey.org | Hero structure, credibility section, overall flow |
| https://www.debbieallendanceacademy.com | Programs grid, multi-age handling |
| https://www.peridance.com | Testimonial placement, "for all levels" messaging |
| https://www.dancecomplex.org | Multi-offering layout, tagline energy |
| https://squarespace.com/templates/dance | Browse layouts (no signup needed) |
| https://www.framer.com/templates/?tag=fitness | Modern motion + fitness templates |
| https://dribbble.com/search/dance-studio | Visual design screenshots |
| https://www.behance.net/search/projects?search=dance+studio+website | More concept designs |

---

## Quick Wins (Do These First)

Immediate impact without rebuilding everything:

1. **Social proof bar** — 4 numbers, ~1 hour to build
2. **Studio photo strip** — replace floating copy with scrollable studio photos
3. **3 testimonials** — simple card row
4. **Google Maps embed** — already configured, just add the section
5. **Move "Getting Started" ABOVE the CTA** — not below it

---

## Claude Code Prompt (Copy-Paste Ready)

```
I need to redesign the middle section of my Next.js homepage 
(src/app/page.tsx) for Dance Connexions, a dance studio in Malaysia.

Keep the identity grid hero, header, and footer exactly as-is.

Replace everything between the hero section and the footer with:
1. Social proof stats bar (4 studios, 5 age groups, years, Google rating)
2. Horizontal scrolling studio photo gallery using /public/images/studios/
3. Dance styles pill tag cloud
4. Testimonials section — 3 cards with horizontal marquee animation
5. Google Maps embed + location info (use googleMapsEmbedUrl from config)
6. 3-step "Getting Started" section (move existing code here)
7. Final WhatsApp CTA section (move existing code here, don't change it)

Dark theme: bg-zinc-950/black throughout. Tailwind + shadcn/ui.
Keep the serif/editorial aesthetic. Font: font-serif for headings.
```

---

_Sam · Dance Connexions Homepage Brief · Feb 2026_
