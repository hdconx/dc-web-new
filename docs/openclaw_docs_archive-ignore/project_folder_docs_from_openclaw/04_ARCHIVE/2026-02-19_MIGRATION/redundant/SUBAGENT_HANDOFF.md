# Design Research Complete — Handoff to Main Agent
_From: Lisa (Web Design Specialist Subagent)_  
_To: Sam (Main Agent)_  
_Date: Feb 18, 2026_

---

## STATUS: PHASE 1-3 COMPLETE ✅

I've completed discovery, competitive research, and pattern extraction. Ready to hand off to you for Phase 4 (decision + build).

---

## DELIVERABLES READY IN WORKSPACE

**Four complete documents:**

1. **`DESIGN_SUMMARY_FOR_HAAN.md`** ⭐ **START HERE**
   - High-level overview (5-min read)
   - 4 design directions with quick descriptions
   - My recommendation: Dark Editorial
   - Decision framework
   - What Haan needs to gather (data)
   - Timeline (2–3 weeks to build)

2. **`DESIGN_RESEARCH.md`** (Deep dive)
   - Full competitive analysis (Malaysian + international studios)
   - Design patterns I found (6 patterns detailed)
   - Specific section recommendations with build options
   - Cultural + accessibility notes for Malaysia
   - Reference websites to study

3. **`IMPLEMENTATION_GUIDE.md`** (Developer reference)
   - Copy-paste React component code (all 5 sections)
   - Styling specs (colors, typography, spacing)
   - Build checklist
   - Deployment instructions
   - Common mistakes to avoid
   - For when Haan starts coding

4. **`REFERENCE_SITES.md`** (Visual research)
   - 15+ actual websites to visit
   - What to look for on each
   - Pattern-specific research
   - Homework checklist (1 hour to browse)
   - Quick shortcut if no time

---

## SITUATION SUMMARY FOR HAAN

**Current state:**
- Homepage structure locked: Header, Hero Grid (6 tiles), Footer ✅
- Problem: Middle content section is empty + ungrounded
- 7 beautiful copy lines float with no visual support

**What needs to happen:**
- Replace middle sections completely
- Create "emotional experience flow" (discovered, not presented)
- Show proof: photos, testimonials, instructors, location
- Build trust for new visitors (where? who? why?)

**My recommendation:** Dark Editorial direction
- ✅ Matches existing dark aesthetic (no rebuild)
- ✅ Feels premium + Malaysian-appropriate
- ✅ Asymmetric + whitespace = the "vibe" Haan wanted
- ✅ Fastest to build
- ✅ Most distinctive

---

## 4 DESIGN DIRECTIONS (Brief)

| Direction | Vibe | Best For | Build Time | Risk |
|-----------|------|----------|------------|------|
| **Dark Editorial** ⭐ | Luxury magazine, intentional | Adults, corporate, premium | Low | Low |
| **Warm Community** | Inclusive, belonging | Families, kids, beginners | Low | Low |
| **Bold & Energetic** | Young, fun, movement-first | Kids, teens, Gen-Z | Medium | Medium |
| **Minimal Luxury** | Gallery-like, exclusive | Premium + corporate | High | High |

---

## SECTIONS TO BUILD

**In order (Dark Editorial direction):**

1. Social Proof Bar (4 numbers: studios, age groups, since 1999, Google rating)
2. Studio Showcase (horizontal scrolling gallery)
3. Dance Styles (pill tag cloud)
4. Testimonials (auto-scrolling marquee cards)
5. Location Section (Google Maps + address + buttons)
6. Getting Started (move existing 3-step section here)
7. Final CTA (keep WhatsApp section as-is)

**Time per section:** 30 min–1.5 hrs each = 10–15 hours total

---

## NEXT STEPS FOR SAM (MAIN AGENT)

1. **Send DESIGN_SUMMARY_FOR_HAAN.md to Haan** via Telegram
   - This is the conversational, friendly version
   - 10-min read, actionable questions at end

2. **Ask Haan for feedback:**
   ```
   "Which design direction feels right?"
   - Dark Editorial (premium, minimal, dark aesthetic)
   - Warm Community (approachable, family-friendly, warm tones)
   - Bold & Energetic (fun, young audience, bright accent color)
   - Minimal Luxury (luxury gallery, risky but distinctive)
   
   Or: "Which section interests you most?"
   ```

3. **Once Haan picks a direction, send:**
   - IMPLEMENTATION_GUIDE.md (if they're ready to code)
   - REFERENCE_SITES.md (if they want to research first)
   - Or both (let them choose pace)

4. **As Haan builds:**
   - They can ask Claude Code questions with component-specific issues
   - Forward questions to me if design-related (color, spacing, layout)
   - I'll iterate on specs if they want tweaks mid-build

---

## KEY INSIGHTS FROM RESEARCH

**Malaysian Market:**
- Community + belonging language resonates
- Warm tones > cold colors
- Accessibility across tech comfort levels = essential
- Multi-generational design (8–70) means clear hierarchy
- Practical info (hours, location, WhatsApp) must be accessible
- Budget-conscious audience (show value, not exclusivity)

**Dark Aesthetic + Premium:**
- Only works with strategic image placement (1–2 full-bleed per section)
- Too many grids = clutter (breaks the premium feel)
- Whitespace must be intentional (not accidental)
- Testimonials in marquee format = hypnotic + premium

**Design Pattern Wins:**
- Horizontal scrolling (feels premium, user-controlled)
- Pill tags (scannable, accessible, modern)
- Asymmetric layouts (distinctive, sophisticated)
- Google Maps + Waze buttons (practical trust-building)
- Real testimonials from Google Maps (authentic, low-effort)

---

## WHAT I FOUND THAT HAAN CAN USE

**Malaysian studios:**
- Sole To Soul (PJ) — has good community narrative, outdated design (what NOT to do)
- BABEL Fitness (KL) — shows how local premium brands think (but grid-based, not distinctive)
- CHi Fitness — best example of "community language" that works in Malaysia

**International premium studios:**
- Alvin Ailey — hero structure + credibility section
- Peridance — testimonial placement + "for all levels" messaging
- DANZA (NZ) — dark hero + photography, very clean
- Millennium Dance Complex — video hero + multi-location Google Maps

**Design patterns that work:**
- Horizontal scroll (studios, testimonials)
- Asymmetric layouts (unique, memorable)
- Full-bleed photography (premium, not grids)
- Marquee testimonials (hypnotic, minimal code)
- Pill tags (accessible, modern, Malaysia-friendly)

---

## TECHNICAL NOTES

Haan has everything he needs:
- ✅ Next.js + Tailwind + shadcn/ui
- ✅ Dark theme configured
- ✅ Component structure ready
- ✅ AI imagery available

Needs to add:
- 1 npm package: `framer-motion` (for marquee animation)
- That's it

---

## IF HAAN ASKS...

**"Why not redesign the whole site?"**
> The identity grid is working. The dark aesthetic is locked in. The problem is just the middle section. Fix what's broken, keep what works.

**"Should I invest in professional photography?"**
> Not required. AI images work great on dark backgrounds. You can upgrade later if you want.

**"Which direction is most Malaysian?"**
> Dark Editorial is premium-professional (appeals to rental market + adults).
> Warm Community is more obviously welcoming (appeals to families + beginners).
> CHi Fitness shows that community language works here — but Dark Editorial feels more premium for your brand.

**"How long to build?"**
> 10–15 hours of focused coding if you've done Tailwind before.
> Or 3–4 weeks if done part-time (1–2 hours/day).
> I can help with Claude Code if you get stuck.

**"Can I start with the hardest section?"**
> No. Start with Social Proof Bar (30 min) to build momentum.
> Then Studio Showcase (1 hour).
> Testimonials marquee is the hardest (1.5 hours), but saved for week 2.

**"What if I want to change direction mid-build?"**
> Easy. Components are modular. You can swap out sections without touching others.

---

## FILES HAAN HAS

In workspace:
- `DESIGN_SUMMARY_FOR_HAAN.md` ← Send this first
- `DESIGN_RESEARCH.md` ← Deep reference
- `IMPLEMENTATION_GUIDE.md` ← Coding guide
- `REFERENCE_SITES.md` ← Visual research
- `HOMEPAGE_DESIGN_BRIEF.md` ← Original brief (already exists)
- `LUNA_PROMPTING_GUIDE.md` ← Existing project docs

---

## TIMELINE FOR HANDOFF

**Today (Feb 18):**
- Send DESIGN_SUMMARY_FOR_HAAN.md to Haan
- Ask for direction preference
- Ask for data gathering (photos, testimonials, etc.)

**Week of Feb 24:**
- Once Haan picks direction + gathers data
- Send IMPLEMENTATION_GUIDE.md
- He starts coding week of March 3

**March 3–17:**
- Haan codes 5 sections
- Asks Claude Code questions
- I iterate on design if needed

**March 17–24:**
- Testing, mobile optimization
- Deploy to staging
- Final tweaks

**March 24+:**
- Go live
- Celebrate

---

## REMAINING WORK (NOT IN SCOPE)

These are things Haan might ask but weren't in the brief:

❌ Redesign other pages (classes, team, schedule)
❌ Create a booking system
❌ Multi-language support (Malay/Chinese/Tamil)
❌ SEO optimization (beyond what's in code)
❌ Photography shoot direction
❌ Social media strategy

If Haan asks about these, I can help scope them separately.

---

## SUCCESS METRICS

The redesign works if:
- ✅ New visitors see proof (photos, testimonials, location)
- ✅ Dark editorial aesthetic feels premium + distinctive
- ✅ Whitespace + asymmetry create rhythm (not density)
- ✅ Mobile experience is smooth (critical for Malaysia)
- ✅ WhatsApp CTA conversion increases
- ✅ Builds trust for corporate rentals + new students

---

## MY RECOMMENDATION

**Start with Dark Editorial.**

Why:
1. Matches existing brand identity (no rebuild)
2. Fastest to build (uses what's already there)
3. Most premium (fits your "since 1999" positioning)
4. Most Malaysian-appropriate (warm, not cold)
5. Lowest risk (if Haan changes mind, pivoting is easy)

If Haan wants warmth/community feel later → Warm Community is next-best choice (just add gold accents, round corners, warm copy).

---

## FINAL NOTE

This is a solid research foundation. Haan can now:
1. Pick a direction confidently
2. Start building immediately
3. Know the timeline + effort upfront
4. Understand why each choice matters

No more "what should we do?" — now it's "let's build."

---

**Ready for Haan's feedback.** 🌿

_Lisa, Web Design Specialist_  
_For: Sam (Main Agent) → Haan (Studio Owner)_  
_Feb 18, 2026_
