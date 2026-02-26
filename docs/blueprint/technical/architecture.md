# Technical Architecture
**Status:** Current (2026)
**Source:** DATA_FLOW_ARCHITECTURE.md
**Last Updated:** 2026-02-27

---

## Tech Stack

### Framework & Runtime
- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Node.js** runtime

### UI & Styling
- **Tailwind CSS 4.x**
- **Radix UI** (accessible components)
- **shadcn/ui components**

### Database
- **PostgreSQL 17**
- **Prisma ORM**

### Deployment
- **Docker containers** (app + database)
- **WSL2 environment** (Windows + Linux)

---

## Data Architecture

### Three-Tier Knowledge System

```
/data/                    # Tier 1: Structured data
├── business.json         # Identity, contact, location, hours
├── rooms.json            # Room specs, features, capacity
└── pricing-rules.json    # Pricing tiers, discounts, modifiers

/knowledge/               # Tier 2 & 3: Procedural & policy knowledge
├── master/               # Stable, versioned content
└── supplemental/         # Staging for new info
```

### Data Flow

```
┌─────────────────────────────┐
│   1. DATA SOURCE (JSON)     │
│   /data/*.json              │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│   2. DATA LOADER            │
│   /src/lib/data-loader.ts   │
│                             │
│   • getRoom()               │
│   • getRooms()              │
│   • getAvailableRooms()     │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│   3. CONFIG HUB             │
│   /src/lib/config.ts        │
│                             │
│   • Re-exports loaders      │
│   • CONTACT constants       │
│   • LOCATION constants      │
│   • Pricing calculator      │
└──────────────┬──────────────┘
               ↓
┌─────────────────────────────┐
│   4. PAGE COMPONENTS        │
│   Consume data via config   │
└─────────────────────────────┘
```

---

## What's Automated vs. Hardcoded

### ✅ AUTOMATED (from JSON)

**Room Detail Pages (`/rentals/room/[id]`):**
- Hero image: `room.images[0]`
- Room name, subtitle, description
- Size, capacity tables
- Features list
- Equipment (included & available)
- Base hourly rate
- "Best for" tags
- Connected room info

**Rooms Listing Page (`/rentals/rooms`):**
- All room cards mapped from JSON
- Room images, names, sizes, features

**Footer (All Pages):**
- Contact info: phone, email, WhatsApp
- Address
- Map embed

### ⚠️ PARTIALLY HARDCODED

**Landing Page (`/rentals/page.tsx`):**
- Studio cards in "Choose Your Studio" section
  - COULD be changed to use `getAvailableRooms()`
- "Our Studios Are Ideal For" accordion
- "What's Included" section

### ❌ FULLY HARDCODED

**Landing Page Only:**
- Hero text, tagline
- "Why Choose Us" section
- Pricing table structure
- FAQ questions & answers
- Section headings and marketing copy

**Room Detail Pages:**
- Customer scenarios (icon cards)
- Section headings
- Discount callout box text
- Capacity note text

---

## Code Utilities

### `/src/lib/data-loader.ts`
**Purpose:** Load and access JSON data

**Functions:**
- `getRooms()` - Get all rooms
- `getRoom(id)` - Get specific room
- `getAvailableRooms()` - Get bookable rooms
- `getBusinessInfo()` - Get business data

### `/src/lib/pricing-calculator.ts`
**Purpose:** Calculate dynamic prices

**Functions:**
- `calculatePrice(room, duration, date)` - Dynamic pricing
- `applyDiscounts()` - Discount logic
- `getPricingRules()` - Load pricing rules

### `/src/lib/config.ts`
**Purpose:** Unified access point

**Exports:**
- All data-loader functions
- `CONTACT` constants (phone, email, WhatsApp)
- `LOCATION` constants (address, map URL)
- Pricing calculator functions

---

## How to Update Content

### ✅ For Room-Specific Data (Easiest)

**Edit:** `/data/rooms.json`

```json
{
  "id": "room-a",
  "name": "Room A",
  "images": ["/rentals-hero/Studio A-Main.jpg"],
  "features": ["RGB lighting", "Stage platform"],
  "baseHourlyRate": 120
}
```

**Changes apply to:**
- Room detail pages ✅ Automatically
- Rooms listing page ✅ Automatically
- Landing page studio cards ❌ Still hardcoded

### ⚠️ For Landing Page Content

**Edit:** `/src/app/rentals/page.tsx`

**Why hardcoded:**
- More flexibility for custom design
- Not all content fits JSON neatly
- Marketing copy changes frequently

**Could be improved:**
- Studio cards could use `getAvailableRooms()`
- Activity lists could be in JSON
- "What's Included" could be shared config

---

## Directory Structure

```
dc-web-new/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── page.tsx          # Homepage
│   │   └── rentals/          # Studio rentals section
│   ├── components/           # React components
│   │   └── ui/               # shadcn/ui components
│   ├── lib/                  # Utilities
│   │   ├── data-loader.ts    # JSON data access
│   │   ├── pricing-calculator.ts
│   │   └── config.ts         # Unified config
│   └── ...
├── data/                     # JSON configuration
│   ├── business.json
│   ├── rooms.json
│   └── pricing-rules.json
├── knowledge/                # Business knowledge base
│   ├── master/               # Versioned content
│   └── supplemental/         # Staging area
├── public/                   # Static assets
├── prisma/                   # Database schema
└── ...
```

---

## Development Commands

```bash
npm run dev              # Start dev server (port 3000)
npm run build            # Production build
npm run lint             # ESLint check
docker compose restart   # Restart after code changes
docker compose down && docker compose up --build  # Full rebuild
```

---

## Docker Notes

- App container mounts local files (changes reflect immediately)
- `node_modules` inside container is separate from host
- After dependency changes: Full rebuild required
- Database container persists data in volumes

---

## Platform Considerations

### WSL2 (Windows + Linux)
- Project runs on Linux (WSL2)
- Native binaries are platform-specific
- NEVER add platform-specific dependencies manually
- Consult `safeguards` skill before dependency changes

### Critical Rules
- All business data comes from `/data/*.json` files
- Components import from `src/lib/config.ts`
- Pricing calculated via `pricing-calculator.ts`
- **NEVER hardcode** variable data in components

---

## Data Management Principles

1. **Single Source of Truth**
   - Room data → `rooms.json`
   - Business info → `business.json`
   - Pricing → `pricing-rules.json`

2. **Type Safety**
   - TypeScript interfaces for all data
   - Validation at load time

3. **Component Agnosticism**
   - Components receive data as props
   - No direct JSON imports in components
   - Use `config.ts` as interface layer

4. **Separation of Concerns**
   - Data (JSON files)
   - Logic (lib utilities)
   - Presentation (components)

---

**Related:** See `development-guide.md` for workflows, `data-flow.md` for detailed data flow
