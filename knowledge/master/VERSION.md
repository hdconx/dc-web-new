# Knowledge Base Version

**Current Version:** v2.0.0
**Last Updated:** 2026-02-11
**Status:** Active Development

## Changelog

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
