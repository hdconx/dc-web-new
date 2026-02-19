# Dance Connexions - Data Flow Architecture

## 📊 How Images & Text Are Populated

### **Answer: 95% Automated from JSON Files**

Only a small portion is hardcoded. Almost everything comes from JSON files automatically.

---

## Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                   1. DATA SOURCE (JSON Files)                │
│                   /data/*.json                                │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────┐
│                2. DATA LOADER                                 │
│           /src/lib/data-loader.ts                            │
│                                                               │
│  • Imports: rooms.json, business.json, pricing-rules.json   │
│  • Exports: getRoom(), getRooms(), getAvailableRooms()      │
│  • Type-safe TypeScript interfaces                           │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────┐
│                3. CONFIG HUB (Convenience Layer)             │
│                /src/lib/config.ts                             │
│                                                               │
│  • Re-exports data-loader functions                          │
│  • Adds CONTACT, LOCATION constants                          │
│  • Imports pricing-calculator functions                      │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ↓
┌─────────────────────────────────────────────────────────────┐
│              4. PAGE COMPONENTS (Consume Data)               │
│                                                               │
│  A) Room Detail Page: /rentals/room/[id]/page.tsx          │
│     const room = getRoom(id)  ← Gets ALL room data          │
│     • room.name           → "Room A"                         │
│     • room.images[0]      → "/rentals-hero/Studio A.jpg"   │
│     • room.features       → ["Mirrors", "RGB lighting"]     │
│     • room.baseHourlyRate → 120                              │
│                                                               │
│  B) Rooms Listing: /rentals/rooms/page.tsx                  │
│     const rooms = getAvailableRooms()  ← Gets all rooms     │
│                                                               │
│  C) Landing Page: /rentals/page.tsx                         │
│     Has hardcoded studio cards BUT...                        │
│     Could be refactored to use getRoom() data                │
└─────────────────────────────────────────────────────────────┘
```

---

## What's Automated vs Hardcoded

### ✅ AUTOMATED (Pulled from JSON)

**Room Detail Pages (`/rentals/room/[id]`):**
- ✅ Hero image: `room.images[0]`
- ✅ Room name: `room.name`
- ✅ Subtitle: `room.subtitle`
- ✅ Description: `room.description`
- ✅ Size (sqft): `room.size.sqft`
- ✅ Capacity table: `room.capacity.dance`, `room.capacity.fitness`, etc.
- ✅ Features list: `room.features[]`
- ✅ Equipment (included): `room.equipment.included[]`
- ✅ Equipment (available): `room.equipment.available[]`
- ✅ Base hourly rate: `room.baseHourlyRate`
- ✅ Best for tags: `room.bestFor[]`
- ✅ Connected room info: `room.connectedTo`

**Rooms Listing Page (`/rentals/rooms`):**
- ✅ All room cards (mapped from JSON)
- ✅ Room images: From `rooms.json`
- ✅ Room names, sizes, features: From `rooms.json`
- ⚠️ Buttons: Hardcoded styling (but we updated them)

**Footer (All Pages):**
- ✅ Contact info: `CONTACT.phone`, `CONTACT.email`, `CONTACT.whatsapp`
- ✅ Address: `LOCATION.address`
- ✅ Map embed: `LOCATION.googleMapsEmbedUrl`

### ⚠️ PARTIALLY HARDCODED

**Landing Page (`/rentals/page.tsx`):**
- ⚠️ Studio cards in "Choose Your Studio" section:
  ```typescript
  const studios = [
    { id: 1, name: "Room A", sqft: "1,200 sq ft", rate: "From RM 120/hour", ... },
    { id: 2, name: "Room D", ... },
    { id: 3, name: "Room B", ... },
    { id: 4, name: "Room C", ... },
  ]
  ```
  **This COULD be changed to:**
  ```typescript
  const studios = getAvailableRooms()  // Use JSON data
  ```

- ⚠️ "Our Studios Are Ideal For" accordion:
  - Hardcoded activity lists
  - Could be moved to JSON

- ⚠️ "What's Included" section:
  - Hardcoded lists
  - Could be moved to JSON or shared config

### ❌ FULLY HARDCODED

**Landing Page Only:**
- ❌ Hero text ("Studio Rentals", tagline)
- ❌ "Why Choose Us" section (6 cards)
- ❌ Pricing table structure
- ❌ FAQ questions & answers
- ❌ Section headings and copy

**Room Detail Pages:**
- ❌ Customer scenarios (those 4 icon cards)
- ❌ Section headings ("Features & Amenities", "Equipment", etc.)
- ❌ Discount callout box text
- ❌ Capacity note text

---

## How to Edit Content

### ✅ For Room-Specific Data (Easiest):

**Edit:** `/data/rooms.json`

```json
{
  "id": "room-a",
  "name": "Room A",
  "images": ["/rentals-hero/Studio A-Main.jpg"],  ← Change this
  "features": ["RGB lighting", "Stage platform"],  ← Change this
  "baseHourlyRate": 120  ← Change this
}
```

**Changes apply to:**
- Room detail pages automatically ✅
- Rooms listing page automatically ✅
- Landing page studio cards: ❌ Still hardcoded

---

### ⚠️ For Landing Page Content:

**Edit:** `/src/app/rentals/page.tsx` (React component)

**Why hardcoded?**
- More flexibility for custom design
- Not all content fits neatly into JSON
- Marketing copy changes frequently

**Could be improved?**
- Yes! Studio cards could use `getAvailableRooms()`
- Activity lists could be moved to JSON
- "What's Included" could be shared config

---

## Examples of What You Changed

### ✅ Changes Applied to JSON (Persist Automatically):

1. **Room A - Added RGB lighting:**
   - Edit: `/data/rooms.json` → `"features": ["RGB lighting"]`
   - Result: Shows on Room A detail page ✅

2. **Room B - Added "Adjustable lighting":**
   - Edit: `/data/rooms.json` → `"features": ["Adjustable lighting"]`
   - Result: Shows on Room B detail page ✅

3. **Room images fixed:**
   - Edit: `/data/rooms.json` → `"images": ["/rentals-hero/studio-b..."]`
   - Result: Hero images show correctly ✅

### ⚠️ Changes Applied to Components (Manual Edit):

1. **Landing page activity categories:**
   - Edit: `/src/app/rentals/page.tsx` → Hardcoded arrays
   - Result: Must manually edit component ⚠️

2. **Landing page studio cards:**
   - Edit: `/src/app/rentals/page.tsx` → Hardcoded `studios` array
   - Result: Must manually sync with `rooms.json` ⚠️

3. **Room detail pricing section:**
   - Edit: `/src/app/rentals/room/[id]/page.tsx` → Hardcoded discount box
   - Result: Same text on all room pages ⚠️

---

## Summary

| Content Type | Source | Auto-Updates? |
|-------------|--------|---------------|
| Room images | `rooms.json` | ✅ Yes |
| Room features | `rooms.json` | ✅ Yes |
| Room prices | `rooms.json` | ✅ Yes |
| Room capacity | `rooms.json` | ✅ Yes |
| **Landing page studio cards** | `rentals/page.tsx` | ❌ No (hardcoded) |
| **Landing page activities** | `rentals/page.tsx` | ❌ No (hardcoded) |
| Footer contact | `business.json` | ✅ Yes |
| Footer address | `business.json` | ✅ Yes |

---

## Recommendations

### High Priority:
1. ✅ **Keep editing `rooms.json` for room data** - This is working perfectly

### Medium Priority:
2. ⚠️ **Refactor landing page studio cards** to use `getAvailableRooms()`
   - Would ensure consistency between landing page and room pages
   - Single source of truth

3. ⚠️ **Move "What's Included" to shared config**
   - Currently hardcoded in multiple places
   - Could be in `business.json` or `facilities.json`

### Low Priority:
4. 📝 Keep marketing copy hardcoded (hero, Why Choose Us, etc.)
   - This is fine - marketing copy needs flexibility
   - Not everything should be in JSON

---

**Your current approach is correct!** 

✅ Room data → Edit `rooms.json`  
⚠️ Landing page content → Edit `page.tsx` component  
✅ Contact/location → Edit `business.json`

The system is well-architected for easy editing!
