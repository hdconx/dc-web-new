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

## Data Architecture

### Dynamic Data (Easy to Update)
All variable business data lives in JSON files:
```
/data/
├── business.json       # Identity, contact, location, hours
├── rooms.json          # Room specs, features, capacity
└── pricing-rules.json  # Pricing tiers, discounts, activity types
```

### Code Utilities
```
/src/lib/
├── data-loader.ts       # Load and access JSON data
├── pricing-calculator.ts # Calculate dynamic prices
└── config.ts            # Unified access point (imports from above)
```

### How to Update Business Data
1. **Change a price?** → Edit `/data/rooms.json` or `/data/pricing-rules.json`
2. **Change contact info?** → Edit `/data/business.json`
3. **Add a discount?** → Edit `/data/pricing-rules.json`

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

### `/dc-knowledge`
Business knowledge base for Dance Connexions:
- `rentals/overview.md` - Business identity
- `rentals/studios.md` - Room details
- `rentals/pricing.md` - Pricing logic
- `rentals/booking.md` - Booking process
- `rentals/location.md` - Address, parking

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
