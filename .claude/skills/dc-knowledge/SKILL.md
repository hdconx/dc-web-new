---
name: dc-knowledge
description: Dance Connexions business knowledge base. Use when you need information about the studio, rooms, pricing, policies, or any business-related decisions.
allowed-tools: Read, Glob, Grep
model: haiku
user-invocable: true
---

# Dance Connexions Knowledge Navigator

This skill helps you find and use business knowledge about Dance Connexions.

## How to Answer Questions

Based on the question type, read the appropriate source:

| Question About | Read This |
|----------------|-----------|
| Room prices, rates, discounts | `/data/pricing-rules.json` |
| Room specs, capacity, features | `/data/rooms.json` |
| Contact, location, hours | `/data/business.json` |
| How to book, booking process | `/knowledge/master/booking.md` |
| Rules, conduct, expectations | `/knowledge/master/usage-rules.md` |
| Exceptions, edge cases | `/knowledge/master/escalation.md` |
| Location, parking, access | `/knowledge/master/location.md` |
| Pricing philosophy (not rates) | `/knowledge/master/pricing.md` |
| Room narratives, context | `/knowledge/master/rooms.md` |
| Recent updates, clarifications | `/knowledge/supplemental/entries.md` |
| Unsure where to look | Use Grep across `/data/` and `/knowledge/` |

## Reading Priority

1. **Structured data** (`/data/*.json`) — authoritative for specs and rates
2. **Master knowledge** (`/knowledge/master/`) — authoritative for procedures and policies
3. **Supplemental** (`/knowledge/supplemental/entries.md`) — refinements and recent updates

**If conflict exists:** Supplemental overrides Master (newer info wins)

## Quick Navigation

```
/data/
├── business.json       # Identity, contact, location, hours
├── rooms.json          # Room specs, capacity, features
└── pricing-rules.json  # Pricing tiers, discounts, modifiers

/knowledge/
├── index.md            # Full navigation guide
├── master/
│   ├── VERSION.md      # Current version + changelog
│   ├── booking.md      # Booking workflow
│   ├── usage-rules.md  # Conduct and care
│   ├── escalation.md   # Exceptions framework
│   ├── pricing.md      # Pricing philosophy
│   ├── location.md     # Access and parking
│   └── rooms.md        # Room narratives
└── supplemental/
    ├── README.md       # How to add entries
    └── entries.md      # All supplemental entries
```

## Example Queries

- "What's Room A capacity?" → Read `/data/rooms.json`
- "How much is Room B per hour?" → Read `/data/pricing-rules.json` + `/data/rooms.json`
- "How do I book?" → Read `/knowledge/master/booking.md`
- "Can they do martial arts?" → Read `/knowledge/master/usage-rules.md` + `/knowledge/supplemental/entries.md`
- "Is parking free?" → Read `/knowledge/master/location.md`
- "Can they exceed capacity?" → Read `/knowledge/master/escalation.md`

## Key Principles

1. **Never invent information** — Only state what's in the knowledge base
2. **Acknowledge gaps** — If info isn't found, say so and suggest asking the owner
3. **Use appropriate sources** — Structured data for facts, knowledge files for context
4. **Check supplemental** — Recent updates may override master content
