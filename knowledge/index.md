# Dance Connexions Knowledge Base

## Navigation Guide for AI Agents

This knowledge base follows a three-tier architecture:

### Tier 1: Structured Data (`/data/*.json`)
Machine-readable, type-safe data. **Primary source for:**
- Room specifications, capacity, features → `rooms.json`
- Pricing rules, discounts, modifiers → `pricing-rules.json`
- Contact, location, hours, identity → `business.json`

### Tier 2: Master Knowledge (`/knowledge/master/`)
Stable, versioned procedural and policy content. **Use for:**
- Booking workflow and process → `booking.md`
- Usage rules and conduct → `usage-rules.md`
- Exceptions and escalation → `escalation.md`
- Room narratives and context → `rooms.md`
- Pricing philosophy (not rates) → `pricing.md`
- Location and access details → `location.md`

### Tier 3: Supplemental (`/knowledge/supplemental/`)
Staging area for new information. Append-only.
- Current entries → `entries.md`
- How to add entries → `README.md`

## Reading Priority

1. Check `/data/*.json` for structured data (prices, specs, contact)
2. Check `/knowledge/master/` for procedures and policies
3. Check `/knowledge/supplemental/entries.md` for recent updates/refinements
4. **If conflict:** Supplemental overrides Master (newer info wins)

## Quick Lookup

| Question Type | Primary Source | Backup Source |
|---------------|----------------|---------------|
| Room price/rate | `/data/pricing-rules.json` | - |
| Room size/capacity | `/data/rooms.json` | `master/rooms.md` |
| How to book | `master/booking.md` | - |
| What's allowed | `master/usage-rules.md` | `supplemental/entries.md` |
| Contact/location | `/data/business.json` | `master/location.md` |
| Edge cases | `master/escalation.md` | `supplemental/entries.md` |
| Recent changes | `supplemental/entries.md` | - |

## Version

See `master/VERSION.md` for current version and changelog.
