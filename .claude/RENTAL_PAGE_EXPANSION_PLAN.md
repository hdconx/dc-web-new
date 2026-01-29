# Dance Connexions Rentals - Website Expansion Plan

## Executive Summary

Current state: Single `/rentals` landing page with overview + testimonials + accordions.

Goal: Create a comprehensive rental experience with dedicated room pages, booking journey, and customer portal structure.

---

## User Journey Analysis

### Current Gap

Visitor lands on `/rentals` → Sees overview + room cards → **Dead end** (must message WhatsApp to learn more)

### Desired Journey

```
/rentals (Overview)
    ↓
Choose a room → /rentals/room/[id] (Room Detail Page)
    ↓
                → Compare rooms → /rentals/compare
                → Check pricing → /rentals/pricing
                → View gallery → /rentals/gallery
    ↓
Decide to book → /book (Booking flow - PLACEHOLDER)
    ↓
Account → /dashboard (Customer portal - PLACEHOLDER)
```

---

## Proposed Sub-Pages (Priority Order)

### **TIER 1: Essential (Immediate Impact)**

#### 1. `/rentals/rooms` - Room Listing Page
**Purpose:** Better navigation than accordion

**Content:**
- Grid/list view of all 4 rooms
- Quick compare cards (size, price, capacity)
- Filter by: Price range, Capacity, Features, Best for
- Direct "Learn More" → `/rentals/room/[id]`
- Quick "Book Now" buttons

**Design:** Carousel or filterable gallery

---

#### 2. `/rentals/room/[id]` - Individual Room Details Page
**Purpose:** Deep dive into specific room

**Sections:**
- **Hero:** Large room image/video (placeholder for AI motion later)
- **Quick Facts:** Size, price, capacity table by activity type
- **Full Features:** Mirrors, sound, lighting, climate, flooring
- **Equipment:** Included + available upon request
- **Use Cases:** Best for section (expanded from landing)
- **Capacity by Activity:** Dance vs Workshop vs Fitness vs Filming (with visual guide)
- **Gallery:** Multiple angles (placeholder images for now)
- **Rules & Restrictions:** What renters should know
- **Comparison:** "Compare with other rooms" dropdown
- **Pricing:** Base rate + discount info
- **CTA:** "Inquire About [Room]" → Dynamic WhatsApp pre-fill

**Layout:** Vertical scrolling with anchored sidebar navigation

---

### **TIER 2: High Value (Week 2)**

#### 3. `/rentals/compare` - Room Comparison Tool
**Purpose:** Side-by-side room comparison

**Features:**
- Select 2-4 rooms to compare
- Table: Size | Price | Capacity | Features | Equipment | Best for
- Visual layout: Cards showing differences
- Filter what to compare (toggle columns)
- Recommendation engine: "Based on your needs, we recommend Room X"

**Example:** "I need 20 people for a dance class" → Shows Room A, D, B ranked

---

#### 4. `/rentals/gallery` - Full Media Gallery
**Purpose:** Visual showcase of all rooms

**Content:**
- Tab-based: Room A | Room B | Room C | Room D
- Lightbox carousel per room (3-5 images each)
- Video placeholder: "Watch Room A in action" (future AI video)
- 360° view placeholder for future
- Captions: What renters see ("Mirrors on 3 walls", "6 fans", etc.)

---

#### 5. `/rentals/pricing` - Detailed Pricing Page
**Purpose:** Transparent pricing breakdown

**Content:**
- Base hourly rates (table)
- Package pricing: Half-day | Full-day | Weekly | Monthly
- Discount tiers: Multi-hour | Recurring | Long-term
- Peak/off-peak pricing
- Add-ons: Equipment rental costs
- Cancellation refund calculator
- CTA: "Get Your Custom Quote"

---

### **TIER 3: Future Foundations (Placeholders)**

#### 6. `/book` - Booking Flow (PLACEHOLDER)
**Status:** Placeholder with "Coming Soon" or redirect to WhatsApp

**Future Content:**
- Step 1: Select room + date/time
- Step 2: Enter participant details
- Step 3: Confirm pricing
- Step 4: Payment
- Step 5: Booking confirmation

**Note:** Hold off on building until backend ready

---

#### 7. `/dashboard` - Customer Portal (PLACEHOLDER)
**Status:** Placeholder with auth prompt

**Future Content:**
- View upcoming bookings
- Booking history
- Invoice/receipt download
- Modify/cancel bookings
- Payment methods
- Preferences

---

#### 8. `/availability` - Calendar View (PLACEHOLDER)
**Status:** Placeholder showing calendar widget

**Future Content:**
- Live calendar integration with backend
- Show available slots per room
- Filter by activity type
- Click to book

---

## Supporting Pages (Quick Adds)

#### `/rentals/faq` - Expanded FAQ
- Move current accordion to dedicated page
- Add room-specific FAQs
- Search functionality

#### `/rentals/policies` - Full Policy Details
- Booking policies (expanded)
- Cancellation policy
- Damage policy
- Usage rules
- Legal disclaimers

#### `/rentals/location-details` - Location Deep Dive
- Full address + directions
- Parking guide with diagram
- Transport options
- Nearby amenities map
- Floor plan

---

## Information Architecture

```
/rentals
├── index                    # Current landing page (no changes)
├── /rooms                   # Room listing (grid/filter)
├── /room/[id]              # Individual room detail (A, B, C, D)
├── /compare                # Side-by-side comparison
├── /gallery                # Full media gallery
├── /pricing                # Detailed pricing breakdown
├── /faq                    # Expanded FAQ (from accordion)
├── /policies               # Full policy details
├── /location-details       # Location + parking + amenities
│
├── /book                   # 🔴 PLACEHOLDER - Booking flow (future)
├── /dashboard              # 🔴 PLACEHOLDER - Customer portal (future)
├── /availability           # 🔴 PLACEHOLDER - Calendar view (future)
```

---

## Data Sources

### Room Pages will pull from:
- `/data/rooms.json` - All room specs, capacity, features
- `/data/pricing-rules.json` - Rates, discounts, packages
- `/data/business.json` - Contact, hours, policies
- `/knowledge/master/rooms.md` - Narrative context
- `/knowledge/master/usage-rules.md` - Conduct expectations

### Dynamic Components:
- Room comparison logic
- Capacity calculator (by activity type)
- Pricing calculator (with modifiers)
- Gallery image loader

---

## Implementation Strategy

### Phase 1: Core Depth Pages
1. Create `/rentals/rooms` (listing page)
2. Create `/rentals/room/[id]` (detail pages for A, B, C, D)
3. Add `/rentals/gallery` (media showcase)
4. Update landing page with links to new pages

**Effort:** 3-4 hours | **Impact:** High

### Phase 2: Comparison & Pricing
1. Create `/rentals/compare` (side-by-side tool)
2. Create `/rentals/pricing` (detailed breakdown)
3. Create `/rentals/faq` (expand current FAQs)

**Effort:** 2-3 hours | **Impact:** Medium

### Phase 3: Placeholder Foundations
1. Create `/book` (placeholder)
2. Create `/dashboard` (placeholder)
3. Create `/availability` (placeholder)
4. Document future backend requirements

**Effort:** 1 hour | **Impact:** Low (future-proofing)

---

## Design Considerations

### Mobile-First
- All new pages must stack responsively
- Touch-friendly buttons (minimum 44px)
- Readable tables (horizontal scroll on mobile)

### Navigation
- Add sidebar or breadcrumb on all sub-pages
- "Back to Rentals" button
- Search across pages

### Placeholders
- Use a consistent placeholder style (e.g., "🔄 Coming Soon" badge)
- Link to WhatsApp for now
- Add copy: "We're building a better booking experience. For now, contact us here."

### Performance
- Lazy load room images in gallery
- Cache comparison data
- Preload frequently accessed pages

---

## Content Gaps to Fill

**Now:**
- [ ] Better room photography (or use AI for motion)
- [ ] 360° video placeholder
- [ ] Floor plans/diagrams
- [ ] Equipment icons/illustrations

**Future:**
- [ ] Real testimonials (per room)
- [ ] User-generated content (renter photos)
- [ ] Booking availability integration
- [ ] Analytics tracking

---

## Mockup Structure Example

### `/rentals/room/[id]` Layout:

```
┌─────────────────────────────────────┐
│ [Navbar] [Rentals] [Room A] [Book]  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│                                     │
│     [Large Room Hero Image]         │
│                                     │
└─────────────────────────────────────┘

                ┌──────────────────────────────┐
                │ QUICK FACTS (sticky sidebar) │
                │ • 1,200 sq ft                │
                │ • RM 120/hour                │
                │ • 40-50 people optimal      │
                │ • [Inquire] [Compare]       │
                └──────────────────────────────┘

┌─────────────────────────────────────┐
│ Features                            │
│ • 3-wall mirrors                   │
│ • Professional sound               │
│ • 6 ceiling fans                   │
│ (etc.)                             │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Capacity by Activity                │
│ Dance:     30-50 (optimal: 40)     │
│ Workshop:  20-40 (optimal: 30)     │
│ Fitness:   20-35 (optimal: 25)     │
│ Filming:   5-20  (optimal: 10)     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Photo Gallery (3-5 images)          │
│ [< Image 1 of 5 >]                  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Rules & Restrictions                │
│ • No outdoor shoes                  │
│ • No food on floor                  │
│ (etc.)                              │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ [Compare with Other Rooms]          │
│ [Back to All Rooms]                 │
│ [Inquire About Room A]              │
└─────────────────────────────────────┘
```

---

## Questions for Brainstorm

1. **Gallery:** Should we show current photos or wait for AI video/new shoot?
2. **Comparison:** Max how many rooms to compare (2, 4, or all)?
3. **Booking:** Can we integrate with a calendar tool now, or strictly WhatsApp for now?
4. **Portal:** Should we require login or allow booking as guest?
5. **Pricing:** Should we show negotiated rates or only base rates?
6. **Mobile:** Should room pages have a "quick compare" drawer?

---

## Summary

| Page | Priority | Effort | Impact | Status |
|------|----------|--------|--------|--------|
| `/rentals/rooms` | Tier 1 | 1 hr | High | Proposed |
| `/rentals/room/[id]` | Tier 1 | 2 hrs | High | Proposed |
| `/rentals/gallery` | Tier 1 | 1 hr | High | Proposed |
| `/rentals/compare` | Tier 2 | 1.5 hrs | Med | Proposed |
| `/rentals/pricing` | Tier 2 | 1 hr | Med | Proposed |
| `/rentals/faq` | Tier 2 | 0.5 hr | Low | Proposed |
| `/book` | Tier 3 | 0.5 hr | Low | Placeholder |
| `/dashboard` | Tier 3 | 0.5 hr | Low | Placeholder |
| `/availability` | Tier 3 | 0.5 hr | Low | Placeholder |

**Total Effort (Tier 1+2):** ~8 hours
**Return:** 3x better user engagement + reduced WhatsApp inquiry load
