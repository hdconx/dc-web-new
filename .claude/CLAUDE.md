# Dance Connexions Web Project

## Project Overview
Premium dance studio website for Dance Connexions, a facility in Bandar Sunway, Petaling Jaya, Malaysia (operating since 1999).

**Current Phase:** Studio Rentals
**Future Phase:** Dance Classes

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **UI**: React 19, Tailwind CSS 4.x, Radix UI, shadcn/ui components
- **Database**: PostgreSQL 17 (via Prisma ORM)
- **Runtime**: Docker containers (app + db)
- **Environment**: Windows + WSL2

## Knowledge Architecture

### Three-Tier System
```
/data/                    # Tier 1: Structured data (rates, specs)
├── business.json         # Identity, contact, location, hours
├── rooms.json            # Room specs, features, capacity
└── pricing-rules.json    # Pricing tiers, discounts, modifiers

/knowledge/               # Tier 2 & 3: Procedural & policy knowledge
├── index.md              # Navigation guide
├── master/               # Stable, versioned content
│   ├── VERSION.md        # Version + changelog
│   ├── booking.md        # Booking workflow
│   ├── usage-rules.md    # Conduct and care
│   ├── escalation.md     # Exceptions framework
│   ├── pricing.md        # Pricing philosophy
│   ├── location.md       # Access and parking
│   └── rooms.md          # Room narratives
└── supplemental/         # Staging for new info
    ├── README.md         # How to add entries
    └── entries.md        # All supplemental entries
```

### Code Utilities
```
/src/lib/
├── data-loader.ts        # Load and access JSON data
├── pricing-calculator.ts # Calculate dynamic prices
└── config.ts             # Unified access point
```

### How to Update

| Change Type | Where to Update |
|-------------|-----------------|
| Room price | `/data/rooms.json` or `/data/pricing-rules.json` |
| Contact info | `/data/business.json` |
| New discount rule | `/data/pricing-rules.json` |
| Policy/procedure | `/knowledge/master/*.md` |
| New clarification | `/knowledge/supplemental/entries.md` (staging) |

**Never hardcode** prices, phone numbers, or business info in components!

## Development Commands
```bash
npm run dev             # Start dev server (port 3000)
npm run build           # Production build
npm run lint            # ESLint check
docker compose restart  # Restart after code changes
```

## Key Directories
- `src/app/` - Next.js App Router pages
- `src/components/` - React components (shadcn/ui in `ui/`)
- `src/lib/` - Utilities (data-loader, pricing-calculator, config)
- `data/` - JSON configuration files (business data)
- `public/` - Static assets (images)
- `prisma/` - Database schema

## Skills Available

### `/dc-knowledge` (User-Invocable)
Business knowledge navigator. Use for:
- Room info, pricing, capacity
- Booking process and policies
- Usage rules and conduct
- Exceptions and escalation
- Location and parking

**How it works:** Small navigator skill that reads from `/data/` and `/knowledge/` as needed (token-efficient).

### `safeguards` (Auto-Consulted)
Stability rules for dependency management. Consult before:
- Updating dependencies
- Deleting node_modules or package-lock.json
- Running npm install --force

## Critical Rules

### Data Management
- All business data comes from `/data/*.json` files
- Components import from `src/lib/config.ts`
- Pricing is calculated via `pricing-calculator.ts`
- **Never hardcode** variable data in components

### Platform Sensitivity
- This project runs on WSL2 (Linux)
- Native binaries are platform-specific
- Never add platform-specific dependencies manually

### Development Workflow
1. Check `/data/*.json` for current business data
2. Use `getRoom()`, `calculatePrice()`, etc. from config.ts
3. Keep components data-agnostic (they receive data as props)

## Docker Notes
- App container mounts local files (changes reflect immediately)
- node_modules inside container is separate from host
- After dependency changes: `docker compose down && docker compose up --build`
