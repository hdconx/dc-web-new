# Content Review Tracker

**Purpose:** Systematic review and correction of all rental pages and data sources.
**Started:** 2026-01-30
**Status:** In Progress

---

## How to Use This Document

### For Each Item Being Reviewed:

1. **Open the page/file**
2. **Provide feedback using the format below**
3. **I make corrections**
4. **Mark as reviewed**

### Feedback Format

When reviewing, use these categories:

```
## [Page/File Name]

### WRONG (Incorrect information)
- [What's wrong] → [What it should be]

### CHANGE (Needs modification)
- [Current state] → [Desired state]

### REMOVE (Should not be there)
- [What to remove]

### ADD (Missing information)
- [What to add]

### KEEP (Confirmed correct)
- [What's accurate and should stay]
```

---

## Review Queue

### Priority 1: Source Data Files
These feed into multiple pages — fix once, propagate everywhere.

| File | Status | Reviewer Notes |
|------|--------|----------------|
| `/data/rooms.json` | ⏳ Pending | Room specs, capacity, features, prices |
| `/data/pricing-rules.json` | ⏳ Pending | Rates, discounts, time slots, policies |
| `/data/business.json` | ⏳ Pending | Contact, location, hours |

### Priority 2: Rental Pages

| Page | URL | Status | Notes |
|------|-----|--------|-------|
| Rooms Listing | `/rentals/rooms` | ⏳ Pending | Overview cards |
| Room A Detail | `/rentals/room/room-a` | ⏳ Pending | Full details |
| Room B Detail | `/rentals/room/room-b` | ⏳ Pending | Full details |
| Room C Detail | `/rentals/room/room-c` | ⏳ Pending | Full details |
| Room D Detail | `/rentals/room/room-d` | ⏳ Pending | Full details |
| Pricing | `/rentals/pricing` | ⏳ Pending | All pricing info |
| Compare | `/rentals/compare` | ⏳ Pending | Comparison data |
| Gallery | `/rentals/gallery` | ⏳ Pending | Images, captions |
| Landing | `/rentals` | ⏳ Pending | Main overview |

### Priority 3: Placeholder Pages

| Page | URL | Status | Notes |
|------|-----|--------|-------|
| Book | `/book` | ⏳ Pending | Coming soon page |
| Dashboard | `/dashboard` | ⏳ Pending | Coming soon page |
| Availability | `/availability` | ⏳ Pending | Coming soon page |

---

## Status Legend

| Symbol | Meaning |
|--------|---------|
| ⏳ Pending | Not yet reviewed |
| 🔍 In Review | Currently being reviewed |
| 🔧 Fixing | Corrections in progress |
| ✅ Complete | Reviewed and corrected |
| ⏸️ On Hold | Waiting for decision/info |

---

## Review Sessions

### Session 1: 2026-01-30

**Reviewing:** [To be filled]

---

## Detailed Review Notes

*(Add review notes for each item below)*

---

### `/data/rooms.json`

**Status:** ⏳ Pending

#### WRONG

*(List incorrect information)*

#### CHANGE

*(List modifications needed)*

#### REMOVE

*(List items to remove)*

#### ADD

*(List items to add)*

#### KEEP

*(List confirmed correct items)*

---

### `/data/pricing-rules.json`

**Status:** ⏳ Pending

#### WRONG

#### CHANGE

#### REMOVE

#### ADD

#### KEEP

---

### `/data/business.json`

**Status:** ⏳ Pending

#### WRONG

#### CHANGE

#### REMOVE

#### ADD

#### KEEP

---

### `/rentals/rooms`

**Status:** ⏳ Pending

#### WRONG

#### CHANGE

#### REMOVE

#### ADD

#### KEEP

---

### `/rentals/room/room-a`

**Status:** ⏳ Pending

#### WRONG

#### CHANGE

#### REMOVE

#### ADD

#### KEEP

---

### `/rentals/room/room-b`

**Status:** ⏳ Pending

#### WRONG

#### CHANGE

#### REMOVE

#### ADD

#### KEEP

---

### `/rentals/room/room-c`

**Status:** ⏳ Pending

#### WRONG

#### CHANGE

#### REMOVE

#### ADD

#### KEEP

---

### `/rentals/room/room-d`

**Status:** ⏳ Pending

#### WRONG

#### CHANGE

#### REMOVE

#### ADD

#### KEEP

---

### `/rentals/pricing`

**Status:** ⏳ Pending

#### WRONG

#### CHANGE

#### REMOVE

#### ADD

#### KEEP

---

### `/rentals/compare`

**Status:** ⏳ Pending

#### WRONG

#### CHANGE

#### REMOVE

#### ADD

#### KEEP

---

### `/rentals/gallery`

**Status:** ⏳ Pending

#### WRONG

#### CHANGE

#### REMOVE

#### ADD

#### KEEP

---

### `/rentals` (Landing Page)

**Status:** ⏳ Pending

#### WRONG

#### CHANGE

#### REMOVE

#### ADD

#### KEEP

---

## Decisions Log

*(Record any decisions made during review)*

| Date | Decision | Rationale |
|------|----------|-----------|
| | | |

---

## Post-Review Checklist

After all reviews complete:

- [ ] All source data files corrected
- [ ] All pages updated
- [ ] Build tested successfully
- [ ] Visual check on all pages
- [ ] Mobile responsiveness verified
- [ ] Links all working
- [ ] WhatsApp pre-fills correct
- [ ] Commit all changes

---

*Last Updated: 2026-01-30*
