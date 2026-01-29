# Pricing System

Dance Connexions uses a **dynamic pricing system** that adjusts based on multiple factors.

## Pricing Philosophy

1. **Transparency** - Clear pricing, no hidden fees
2. **Flexibility** - Multiple ways to save
3. **Fairness** - Discounts for students, instructors, regulars
4. **Value** - Longer bookings = bigger discounts

## Base Hourly Rates

| Room | Base Rate | Off-Peak | Early Bird |
|------|-----------|----------|------------|
| Room A | RM 120/hr | RM 102/hr | RM 96/hr |
| Room D | RM 80/hr | RM 68/hr | RM 64/hr |
| Room B | RM 60/hr | RM 51/hr | RM 48/hr |
| Room C | RM 50/hr | RM 43/hr | RM 40/hr |

## Time-Based Modifiers

### Peak Hours (Standard Rate)
- **Weekdays:** 5pm - 10pm
- **Weekends:** All day (Saturday & Sunday)
- **Public Holidays:** All day

### Off-Peak Hours (15% Discount)
- **Weekdays:** 9am - 5pm
- Best for: Instructors with daytime availability, retirees, freelancers

### Early Bird (20% Discount)
- **Weekdays:** 6am - 9am
- Best for: Morning workout groups, before-work practice

### Late Night (15% Surcharge)
- **Daily:** 10pm - 12am
- Note: Extra charge for extended operating hours

## Duration Discounts

Book longer, save more:

| Duration | Discount | Example (Room A) |
|----------|----------|------------------|
| 3 hours | 10% off | RM 324 → RM 292 |
| 4-5 hours (Half Day) | 15% off | RM 480 → RM 408 |
| 8+ hours (Full Day) | 25% off | RM 960 → RM 720 |

## Activity-Based Pricing

Different activities may have different rates:

### Core Activities (Base Rate)
- Dance classes (all styles)
- Dance rehearsals
- Fitness classes
- Private lessons
- Social dance practice

### Secondary Activities (+10-25%)
- Workshops/Masterclasses: +10%
- Content creation: +20%
- Photography sessions: +25%
- Auditions/Casting: +10%

### Commercial Activities (+50%, Approval Required)
- Video production (music videos, commercials)
- Private events (dance parties)

*Note: Commercial activities require prior approval*

## Customer Discounts

### Instructor Discount (10% off)
- For verified dance/fitness instructors
- Requires proof of teaching credentials

### Student Discount (10% off)
- Valid student ID required
- Cannot combine with other discounts

### Regular Booking Discount (15% off)
- For weekly recurring bookings (4+ per month)
- Consistency rewarded

## Packages (Pre-Paid Hours)

Buy hours in advance for extra savings:

| Package | Hours | Discount | Validity |
|---------|-------|----------|----------|
| Starter Pack | 5 hrs | 10% off | 30 days |
| Regular Pack | 10 hrs | 15% off | 60 days |
| Pro Pack | 20 hrs | 20% off | 90 days |

*Monthly unlimited available - contact for custom pricing*

## Special Offers

- **First-Time Renter:** 10% off first booking
- **Referral Reward:** 15% off when referred by existing customer

## How Pricing Is Calculated

```
Final Price = Base Rate × Hours
            × Time Slot Modifier
            × Activity Modifier
            × Customer Discount
            × Duration Discount
```

Example:
- Room A, 4 hours, Off-Peak, Dance Class, Instructor
- RM 120 × 4 = RM 480 (base)
- × 0.85 (off-peak) = RM 408
- × 1.0 (dance class) = RM 408
- × 0.90 (instructor) = RM 367
- × 0.85 (half-day) = RM 312

## Additional Fees

### Equipment Rental
- Projector: RM 30/session
- Extra wireless mic: RM 15/unit
- Tripod: RM 10/unit
- Ring light: RM 20/unit

### Other
- Deep cleaning (if required): RM 50
- Overtime (beyond booked hours): 1.5x rate

## Payment & Deposits

- **Deposit:** 50% required to confirm booking
- **Balance:** Due on arrival or before session
- **Methods:** Bank transfer, online payment, cash

## Cancellation Policy

| Notice | Refund |
|--------|--------|
| 48+ hours | 100% refund |
| 24-48 hours | 50% refund |
| < 24 hours | No refund (credit note possible) |

## Data Reference

For actual pricing data and rules, see:
- `/data/pricing-rules.json`
- `/data/rooms.json` (base rates)

For pricing calculations in code:
- `src/lib/pricing-calculator.ts`
