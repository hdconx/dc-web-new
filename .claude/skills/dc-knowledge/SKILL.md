---
name: dc-knowledge
description: Dance Connexions business knowledge base. Use when you need information about the studio, rooms, pricing, policies, or any business-related decisions. This skill provides context - actual data comes from /data/*.json files.
allowed-tools: Read, Glob, Grep
model: sonnet
user-invocable: true
---

# Dance Connexions Knowledge Base

This skill provides comprehensive knowledge about Dance Connexions studio rental and dance class business.

## Quick Reference

**What this skill provides:** Business context, policies, decision-making guidance
**Where data lives:** `/data/*.json` files (rooms, pricing, business info)
**Where code uses data:** `src/lib/config.ts`, `data-loader.ts`, `pricing-calculator.ts`

## Knowledge Structure

### Rentals (Current Focus)
- [Overview](rentals/overview.md) - Business identity and positioning
- [Studios](rentals/studios.md) - Room details and use cases
- [Pricing](rentals/pricing.md) - Pricing logic and packages
- [Booking](rentals/booking.md) - Booking process and policies
- [Location](rentals/location.md) - Address, parking, access

### Classes (Future Phase)
- [README](classes/README.md) - Placeholder for dance class information

## Data Architecture

```
/data/
├── business.json       # Identity, contact, location, hours
├── rooms.json          # Room specs, features, capacity
└── pricing-rules.json  # Pricing tiers, discounts, activity types

/src/lib/
├── data-loader.ts      # Load and access data
├── pricing-calculator.ts # Calculate dynamic prices
└── config.ts           # Unified access point
```

## How to Use This Skill

1. **For business context** → Read the relevant knowledge file
2. **For actual data** → Check `/data/*.json` files
3. **For code that uses data** → Check `src/lib/` utilities

## Key Principles

1. **Data is dynamic** - Never hardcode prices, room details, or business info
2. **JSON is the source** - All variable data lives in `/data/*.json`
3. **Knowledge provides context** - These files explain the "why" and "how"
4. **Code reads from data** - Components import from `config.ts` or `data-loader.ts`

## When to Update What

| Change Type | Where to Update |
|-------------|-----------------|
| Room price changes | `/data/rooms.json` |
| New discount rules | `/data/pricing-rules.json` |
| Contact info changes | `/data/business.json` |
| Policy changes | Knowledge files + possibly JSON |
| New feature/context | Knowledge files |
