# Knowledge Base Version

**Current Version:** v2.6.0
**Last Updated:** 2026-02-15
**Status:** Active Development

## Changelog

### v2.6.0 (2026-02-15 - Homepage Structure Complete, Content Section Pending)
- Header fixed: always visible from page load (was hidden until scroll)
- Identity Grid upgraded: per-tile hover overlay with caption + WhatsApp prefill button
- Homepage subtitle: "Movement for every age. Space for every vision."
- Quick Choice Bar added (sticky, Find a Class / Rent a Studio)
- Section order finalised: Grid → Quick Bar → [Content TBD] → CTA → Getting Started → FAQs → Footer
- Deleted: beginner-reassurance, studio-premises, studio-rentals, quick-access-strip components
- Content section between Quick Bar and CTA: multiple approaches tried (alternating rows, image cards, typography manifesto, emotional moments) — none approved. Owner rethinking from scratch next session.
- 7 Opus-curated copy lines approved for content section (layout to be decided)
- postponed.md updated with HOME-01 full status

### v2.5.0 (2026-02-14 - Homepage Consolidated + Navigation Built)
- Homepage is now the single router page for both classes and rentals
- `/classes` redirects to `/` — homepage IS the router
- Header rebuilt: desktop nav (Dance Classes, Studio Rentals, Contact, My Portal), mobile user icon + hamburger
- New pages: `/privacy`, `/terms`, `/sitemap`, `/classes` (redirect)
- `universal-benefits.tsx` deleted — replaced with alternating editorial rows (placeholder pending redesign)
- `BeginnerReassurance` simplified, external image URL fixed
- Student/Renter portal strip added to homepage
- QuickAccessStrip fixed: Classes & Schedule → `/`
- Homepage redesign PENDING: owner consulting AI models for direction. Constraints: no credentials, no dates, universal emotional messaging. See S-2026-02-14-01.
- Postponed: HOME-01 (redesign), HOME-02 (tagline decision)

### v2.4.0 (2026-02-13 - Dance Classes Section Built)
- Added S-2026-02-13-01: Full dance classes section architecture documented
- 5 demographic sections built: /kids, /teens, /young-adults, /adults, /active-adults
- 18 style sub-pages built with dynamic routing
- 5 FAQ pages built
- data/classes.json created with all content, pricing, and 23 AI image prompts
- ImagePlaceholder component documents where real photos go
- Key decisions: no instructor photos, no class size limits stated, WhatsApp as conversion goal
- Pending: /classes router page (last to build), real images to replace placeholders

### v2.3.0 (2026-02-13 - Principal Info + Image Strategy + Key Principles)
- Added S-2026-02-11-10: Principal credentials (Ms. Som Phon — ISTD-UK, DMIA-AU, 30+ years, founded 1999)
- Confirmed: Present credentials subtly — generalize, no detailed CV on website
- Confirmed: Image diversity — primarily Chinese Malaysian (~95%), include Indian/Malay/Western
- Confirmed: Keep short URLs — /kids, /teens, /young-adults, /adults, /active-adults
- Confirmed: "Focus on what we offer, not what we lack" — never highlight absence of reviews/photos/videos

### v2.2.0 (2026-02-11 - SEO Keywords + Credibility Strategy Saved)
- Added S-2026-02-11-09: SEO keywords by demographic (bilingual EN+BM), Google Business Profile setup, 7 trust signals for zero-review credibility
- Key confirmed: WhatsApp is the conversion goal — no booking system needed in Phase 1
- Key confirmed: 30-second studio walkthrough video is highest-impact trust asset available now
- Research phase complete — ready to begin building Kids page

### v2.1.0 (2026-02-11 - Competitor & Design Research Saved)
- Added 4 supplemental entries (S-2026-02-11-05 to 08)
- S-2026-02-11-05: Competitor landscape (Sole To Soul, REDMOUSE, Tutu Toe, Shall We Dance) + gaps
- S-2026-02-11-06: AI imagery strategy — Midjourney prompts, multi-ethnic requirements, visual style per demographic
- S-2026-02-11-07: Router page design research — card layout, hover states, global examples
- S-2026-02-11-08: Malaysian-specific design (multi-ethnic imagery, modest attire, WhatsApp conversion, SEO keywords, how families decide)
- Critical insight: WhatsApp is the conversion goal, not online booking — simplifies Phase 1 build

### v2.0.0 (2026-02-11 - Dance Classes Phase Begins)
- Added 3 supplemental entries (S-2026-02-11-02 to 04)
- Documented: Class pricing structure (placeholder — flexible per class)
- Documented: Trial class policy (case-by-case, not blanket free trial)
- Documented: Scheduling flexibility (weekly, flexible, private = student-controlled)
- Documented: Dance styles by demographic (Kids/Teens/Young Adults/Adults/Active Adults)
- Documented: Website development approach — demographic sections first, router last
- Documented: Social media direct-link strategy (ads → demographic pages, not router)
- Major version bump: dance classes phase is second major pillar of the website

### v1.9.0 (2026-02-11 - Review Feedback Round 1)
- Added supplemental entry S-2026-02-11-01
- Documented: Hero image swap (RGB lighting, no watermark), hero subtitle update
- Documented: Why Choose Us — subtitle + 3 card rewrites (pricing, studios, mirrors)
- Documented: Available Upon Request — removed custom setup, wireless mic qualifier, RGB lighting rename
- Documented: Accordion subtitle — "just some examples" framing, added dance practice parties
- Documented: Room B controllable lighting confirmed and updated in rooms.json
- Documented: Pricing table width constrained on desktop

### v1.8.0 (2026-02-04 - Promotions System, Pricing Rewrite & Landing Page UX)
- Added 6 supplemental entries (S-2026-02-04-01 to 06)
- Documented: Promotions system (PromoBar sticky banner, promos page, promotions.json data source)
- Documented: Studio cards converted to clickable Links with bullet-style details
- Documented: "Ideal For" accordion — all panels open by default for SEO; activity copy updated
- Documented: Pricing section rewrite — range table format (low–high), removed all "discount" language
- Documented: Confirmed pricing cut-off floors (A=80, D=60, B=50, C=40) and website pricing constraints
- Documented: Image optimization pipeline (optimize.py) including promos category
- ⚠️ Flagged for integration review: S-2026-01-30-03 ("RM 50" → now "RM 40"), S-2026-02-01-07 (discount messaging removed), master pricing.md ("rule-based not negotiated" is incorrect)

### v1.7.0 (2026-02-03 - Capacity Calculator UX Improvements)
- Added supplemental entry S-2026-02-03-01
- Documented: Capacity calculator subjective labels removal (critical UX fix)
- Removed: "Good", "Excellent", "Too small" labels that made assumptions about user needs
- Removed: Color coding that highlighted "ideal" results in green and grayed out others
- Changed: "Recommended Capacity" → "Estimated Capacity" for neutral tone
- Future enhancement planned: Optimal vs Maximum capacity range display

### v1.6.0 (2026-02-02 - Gallery, Compare & Pricing Page Review)
- Added 7 new supplemental entries (S-2026-02-02-01 to 07)
- Documented: Pricing page strategy shift to customized quotes only (no public percentage-based discounts)
- Documented: Room features & equipment technical corrections (HPL flooring, mirrors, privacy curtains)
- Documented: Capacity guidelines with specific scenarios (K-pop, ballroom, yoga, etc.)
- Documented: Room "Best For" lists consolidated from 22 to 7-8 core categories
- Documented: Room sorting changed to alphabetical (A, B, C, D)
- Documented: Gallery page technical improvements (accessibility, centering, removed placeholder photos)
- Documented: Additional discount opportunities and seasonal promos acknowledgment

### v1.5.0 (2026-02-01 - Landing Page Review)
- Added 7 new supplemental entries (S-2026-02-01-01 to 07)
- Documented: Updated facilities and equipment inventory (HPL flooring, RO water, RGB lighting, stage)
- Documented: Activities NOT suitable (Pilates, martial arts, ballet, boxing - safety reasons)
- Documented: Flexible booking policies (event-specific deposits, cancellation, extensions)
- Documented: Room A enhancements (RGB lighting, stage/platform, modeling/fashion capabilities)
- Documented: Room C privacy emphasis
- Documented: Refined activity categories for marketing (removed unclear terms)
- Documented: Base hourly rates clarity improvements

### v1.4.0 (2026-01-31 - Session 2)
- Added 3 new supplemental entries (S-2026-01-31-07 to 09)
- Documented: Button styling hierarchy (PRIMARY vs SECONDARY pattern)
- Documented: Review tool production features and workflow
- Documented: GBP optimization guide and missing rental services issue

### v1.3.0 (2026-01-31 - Session 1)
- Added 6 new supplemental entries (S-2026-01-31-01 to 06)
- Documented: Google Business Profile current state and optimization needs
- Documented: On-demand teacher model for class offerings
- Documented: Studio A premium design features (corrected misconception)
- Documented: Video creation tools and strategy (Veo, Grok, CapCut)
- Documented: Website currently offline status
- Documented: Media asset locations and file organization

### v1.2.0 (2026-01-30)
- Added marketing context entries (S-2026-01-30-01 to 04)
- Documented: starting from zero (no social proof available)
- Documented: no competitor bashing philosophy
- Documented: core differentiators to emphasize
- Documented: content strategy without past customers

### v1.1.0 (2026-01-29)
- Added target-customers.md with 18 customer segments
- Global research from NYC, London, and international sources
- Room recommendations by segment
- Website content implications for room pages

### v1.0.0 (2026-01-29)
- Initial knowledge base structure
- Migrated from Word documents:
  - DANCE CONNEXIONS STUDIO RENTAL — MASTER INFORMATION RESOURCE.docx
  - Knowledge Base Supplemental Information.docx
- Created master knowledge files:
  - rooms.md
  - booking.md
  - usage-rules.md
  - escalation.md
  - pricing.md
  - location.md

## Integration Schedule

Supplemental entries should be reviewed and integrated:
- **Frequency:** Every 1-3 months
- **Process:** Review `supplemental/entries.md`, integrate stable info, increment version
- **Rule:** Never delete supplemental entries, mark as "Integrated" with version number

## Next Review

**Scheduled:** 2026-04-29 (3 months from initial release)
