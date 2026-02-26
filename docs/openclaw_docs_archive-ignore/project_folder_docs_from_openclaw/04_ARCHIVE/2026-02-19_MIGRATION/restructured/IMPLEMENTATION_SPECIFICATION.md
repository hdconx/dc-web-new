# IMPLEMENTATION SPECIFICATION
## Dance Connexions Homepage — Complete Build Guide

**Created:** 2026-02-18  
**For:** Claude Code execution in WSL2 terminal  
**Owner:** Haan  
**Status:** READY FOR BUILD  

---

# QUICK START

This document translates **all research into actionable specifications** for Claude Code. 

**You will:**
1. Read a component spec section below
2. Copy the spec into Claude Code
3. Say: "Build this component based on this spec"
4. Claude Code generates code
5. You test in browser (localhost:3000)
6. Move to next component

**Do not modify specs** — they encode research decisions. If something doesn't work, tell me and I'll refine.

---

# PART 1: HOMEPAGE ARCHITECTURE

## Overall Structure

```
Homepage (app/page.tsx)
├── Header (existing, keep as-is)
├── Hero: Identity Grid (6 demographic tiles)
├── Quick Choice Bar (sticky, below hero)
├── Kids Section + generic "Who We Are"
├── Teens Section + generic "Our Philosophy"
├── Young Adults Section
├── Adults Section + generic "Testimonials"
├── Active Adults Section
├── Studio Rentals Section
├── Generic "Studio Pictures"
├── Final CTA Section ("Ready to take the floor?")
├── Getting Started (3 steps)
├── FAQs (accordion)
└── Footer (existing, keep as-is)
```

## Design System (Direction 3: "Warm Community")

**Colors:**
- Background: `#0f0f0f` (warm black)
- Card/Container: `#1a1612` (warm charcoal)
- Accent: `#d4a574` (warm gold/terracotta)
- Text Primary: `#ffffff` (white)
- Text Secondary: `#e8e8e8` (light gray)

**Typography:**
- Headlines: Serif (Cormorant Garamond or Playfair Display), 48–64px
- Body: Sans-serif (Inter or Poppins), 14–16px
- Accent: Serif + gold for 7 locked copy lines

**Spacing:**
- Asymmetrical for premium feel
- Generous whitespace between sections
- Mobile: Stack everything vertical, maintain 16px padding

**Chinese-Majority Integration:**
- Imagery: Show diverse Chinese dancers alongside other ethnicities
- Testimonials: 4–5 of 6 should have Chinese names (Wei Lin, Chen Wei, etc.)
- Language: English-primary; Mandarin option can be added later
- Cultural references: Subtle (not forced "multicultural" messaging)

---

# PART 2: COMPONENT-BY-COMPONENT SPECS

## SPEC 1: Hero Identity Grid

**Component Name:** HeroIdentityGrid  
**Location:** app/components/HeroIdentityGrid.tsx  
**Purpose:** Route visitors to their demographic section and signal inclusivity

### Layout & Responsive
- **Desktop:** 6 tiles in 2 rows (3 columns per row)
- **Tablet:** 3 tiles per row
- **Mobile:** 2 tiles per row, stacked

### Tile Design
**Each tile contains:**
1. Background image/silhouette (AI-generated, diverse)
2. Text overlay: Demographic name (serif, gold, 24px)
3. Hover effect: Gold border appears, subtle zoom
4. Click: Routes to demographic page or anchors to section

### Tiles (in order)
1. **Kids**
   - Image: Diverse children (5–10 years), laughing, moving
   - Route: `#kids-section` (anchor to Kids section on page)
   - Text: "Kids" (white serif, 24px)
   
2. **Teens**
   - Image: Teens (13–19 years), contemporary/K-pop energy, diverse
   - Route: `#teens-section`
   - Text: "Teens"

3. **Young Adults**
   - Image: Adults (20–35 years), energetic, fit, diverse
   - Route: `#young-adults-section`
   - Text: "Young Adults"

4. **Adults**
   - Image: Adults (35–55 years), Salsa/Bachata partnered, joyful, diverse
   - Route: `#adults-section`
   - Text: "Adults"

5. **Active Adults**
   - Image: Older adults (55–70+ years), moving, smiling, vibrant, diverse (MUST include Chinese faces)
   - Route: `#active-adults-section`
   - Text: "Active Adults"

6. **Studio Rentals**
   - Image: Professional studio space + group event
   - Route: `#rentals-section`
   - Text: "Studio Rentals"

### Styling
```
Tile Container:
  - Width: 100% / 3 on desktop (33.33%)
  - Aspect ratio: 1:1 (square)
  - Background: #1a1612
  - Border: 1px solid rgba(212, 165, 116, 0.3) (subtle gold)
  - Hover: Border color becomes #d4a574 (full gold)
  - Transition: 300ms ease

Text Overlay:
  - Position: absolute, bottom-right or center
  - Font: Cormorant Garamond, 24px, #d4a574
  - Text shadow: 0 2px 8px rgba(0,0,0,0.7) (readable on image)

Hover Effect:
  - Image: Scale 1.05 (subtle zoom)
  - Border: Becomes #d4a574
  - Cursor: pointer
```

### Accessibility
- Alt text on images: "Demographic name — dance class community"
- ARIA labels: `aria-label="Navigate to Teens section"`
- Keyboard navigable: Tab through tiles, Enter to navigate

### Copy (Locked — Do Not Change)
Use exact demographic names from tiles. No additional copy needed.

---

## SPEC 2: Quick Choice Bar (Sticky)

**Component Name:** QuickChoiceBar  
**Location:** app/components/QuickChoiceBar.tsx  
**Purpose:** Give visitors instant path to either classes or rentals (50/50 business split)

### Layout
- Sticky positioning: `position: sticky; top: 0; z-index: 50;`
- Horizontal bar, centered
- Two buttons side-by-side on desktop, stacked on mobile
- Background: `#0f0f0f` with subtle shadow (or slightly darker #1a1612)

### Buttons
**Button 1: "Find a Class"**
- Style: Gold outline, no fill
- Border: 2px solid #d4a574
- Text: "Find a Class", white, 16px, Inter
- On click: Smooth scroll to Kids section (or hero grid)
- Hover: Fill background with gold, text becomes black

**Button 2: "Rent a Studio"**
- Style: Gold outline, no fill (matches Button 1)
- Border: 2px solid #d4a574
- Text: "Rent a Studio", white, 16px, Inter
- On click: Smooth scroll to Rentals section
- Hover: Fill background with gold, text becomes black

### Spacing
- Container padding: 16px vertical, 32px horizontal
- Gap between buttons: 24px on desktop, 16px on mobile
- Responsive: Stack on mobile (100% width each)

### Mobile Note
On small screens, bar can collapse to stacked buttons (full width) or two columns with smaller text. Maintain 50/50 visual weight.

---

## SPEC 3: Kids Section

**Component Name:** KidsSection  
**Location:** app/components/sections/KidsSection.tsx  
**Purpose:** Welcome children and assure parents that kids learn in a fun, safe, beginner-friendly environment

### Layout
- **Desktop:** Full-bleed image LEFT (60%) + text RIGHT (40%), staggered
- **Mobile:** Stack vertically (image top, text bottom)
- Image has diagonal crop or asymmetric shape (not rectangular)
- Text starts mid-way down viewport on desktop

### Image
**Source:** AI-generated by Grok, K-pop or contemporary style
**Subject:** 5–10 year old diverse children laughing, learning, moving
**Specifications:**
- Size: 1200x1200px minimum
- Format: JPG optimized
- Alt text: "Children learning dance in a fun, supportive environment"
- **CHINESE-MAJORITY INTEGRATION:** Include at least 2 Chinese children in the group (visible, front-center)

### Copy Structure

**No section header label.** Content flows naturally from Hero.

**Subheader:**
```
"Have fun. Make friends. Express yourself."
```
- Font: Cormorant Garamond (serif), 32px, white
- Margin-top: 0 (inherits from grid spacing)

**Body Copy (choose one or create similar from CONTENT_STRATEGY_PRD.md):**
```
"Dance is a skill your child can learn. Our kids classes focus on fun, 
confidence, and friendship—not perfection. They'll move to music they love, 
make friends, and discover they're braver than they thought."
```
- Font: Inter, 16px, #e8e8e8
- Line height: 1.6
- Max-width: 500px

**CTA Button:**
- Text: "Explore Kids Classes"
- Style: Gold outline with hover fill (match QuickChoiceBar)
- On click: Link to `/classes/kids` or modal with class schedule

### Spacing
- Section padding: 80px vertical, 40px horizontal (desktop)
- Gap between image and text: 60px
- Mobile padding: 40px vertical, 16px horizontal

### Animation (Optional)
- Image: Fade in on scroll
- Text: Slide in from bottom on scroll
- Recommendation: Use Framer Motion or Intersection Observer for performance

---

## SPEC 4: Who We Are Section (Generic)

**Component Name:** WhoWeAreSection  
**Location:** app/components/sections/WhoWeAreSection.tsx  
**Purpose:** Build trust and warmth with brief origin story
**Placement:** After Kids section, before Teens

### Layout
- Centered text block
- No images
- Max-width: 700px
- Background: `#0f0f0f` (default)
- Generous whitespace above and below

### Copy (Suggested — Customize Based on Your Studio)

```
"We're a dance studio in Bandar Sunway, Malaysia. We've been here since 1999 
because we believe dance is learned, not inherited. Our mission is simple: 
everyone who walks through our door—whether they're 8 or 80, whether they've 
danced before or never—feels welcome.

We teach dance. But really, we teach confidence. We teach community. We teach 
that trying something new is brave, and that your age doesn't matter."
```

- Font: Cormorant Garamond (serif), 18px, #e8e8e8
- Line height: 1.8
- Text alignment: Center
- Margin: 120px vertical (large whitespace), 40px horizontal

### No CTA
This section is intentional pause. No button. Just presence.

---

## SPEC 5: Teens Section

**Component Name:** TeensSection  
**Location:** app/components/sections/TeensSection.tsx  
**Purpose:** Speak directly to teens' creative energy, K-pop influence, peer belonging

### Layout
- **Desktop:** Text LEFT (40%) + full-bleed image RIGHT (60%)
- **Mobile:** Stack vertically
- Opposite stagger from Kids section (creates visual rhythm)

### Image
**Source:** AI-generated by Grok or Kling AI
**Subject:** Teens (13–19 years) in contemporary/K-pop style, confident, moving, diverse
**Specifications:**
- Size: 1200x1200px minimum
- Format: JPG optimized
- Alt text: "Teens learning K-pop and contemporary dance styles"
- **CHINESE-MAJORITY:** Include prominently (this demographic is youth-skewed towards K-pop, which is huge in Chinese communities)

### Copy Structure

**Subheader:**
```
"Cool moves. Creative energy. Peer community."
```
- Font: Cormorant Garamond, 32px, white

**Body Copy:**
```
"You love the moves you see online. You want to learn them for real. Our teen 
classes teach K-pop, contemporary, and hip-hop with real instruction—not TikTok 
tutorials. You'll learn from teachers who actually get what you love, and you'll 
make friends who are just as into it as you are."
```
- Font: Inter, 16px, #e8e8e8
- Line height: 1.6
- Max-width: 500px

**CTA Button:**
- Text: "See Teen Classes"
- Style: Gold outline (match other CTAs)
- On click: Link to `/classes/teens`

### Design Note
This section MUST show K-pop energy without alienating other demographics. The adjacent Adults section (Salsa) ensures broad appeal. Together they signal: "We teach what YOU love."

---

## SPEC 6: Our Philosophy Section (Generic)

**Component Name:** OurPhilosophySection  
**Location:** app/components/sections/OurPhilosophySection.tsx  
**Purpose:** Use 7 locked copy lines to reinforce core messaging
**Placement:** After Teens section

### Layout
- One featured line per page scroll (show 1–2 lines per viewport)
- OR all 7 displayed as rotating carousel (auto-advance every 6 seconds)
- Centered, generous whitespace

### The 7 Locked Copy Lines (EXACT — DO NOT MODIFY)

1. "Dance is a skill. It's learned, not inherited."
2. "Good teaching removes fear. What's left is movement."
3. "Confidence isn't performed. It's practiced."
4. "Some come alone. No one feels that way for long."
5. "For an hour, the rest of the day can wait."
6. "Over time, dance becomes part of your life — not an event."
7. "Everyone here started exactly where you are."

### Display Options

**Option A: Static (Show All 7)**
```
- Layout: Vertical stack
- Each line: Serif (Cormorant Garamond), 32–48px, #d4a574 (gold)
- Supporting copy (1–2 sentences) in white, 16px below each line
- Spacing: 60px between each line pair
```

**Option B: Carousel (Recommended for Premium Feel)**
```
- Show 1 line at a time
- Large serif, 64px, gold
- Auto-advance every 6 seconds
- Fade transition
- Prev/Next arrows (minimal, gold outline)
- Mobile: 40px font size
```

**Option C: Hybrid**
```
- Show 2 lines visible at once on desktop
- Carousel on mobile (1 line at a time)
```

**Recommendation:** Option B (carousel) creates intimate, premium feel matching "Warm Community" direction.

### Spacing
- Section padding: 120px vertical, 40px horizontal
- Max-width: 800px (centered)
- Background: `#0f0f0f`

---

## SPEC 7: Young Adults Section

**Component Name:** YoungAdultsSection  
**Location:** app/components/sections/YoungAdultsSection.tsx  
**Purpose:** Target young professionals (20–35) with fitness + social angle

### Layout
- **Desktop:** Image LEFT (60%) + text RIGHT (40%)
- **Mobile:** Stack vertically
- Stagger same as Kids section (creates rhythm A-B-A pattern)

### Image
**Source:** AI-generated by Grok
**Subject:** Young adults (20–35 years), contemporary/hip-hop energy, fit, socializing, diverse
**Specifications:**
- Size: 1200x1200px
- Alt text: "Young adults learning hip-hop and contemporary dance"
- **CHINESE-MAJORITY:** Include visibly (professional demographic, good converting market)

### Copy Structure

**Subheader:**
```
"Get fit. Make friends. Learn new moves."
```
- Font: Cormorant Garamond, 32px, white

**Body Copy:**
```
"You want to stay fit, but gym classes feel boring. You want to meet people, 
but apps don't cut it. Our young adult classes are high-energy, creative, and 
full of people who get it. You'll feel stronger, smarter, and part of something."
```
- Font: Inter, 16px, #e8e8e8
- Line height: 1.6

**CTA Button:**
- Text: "Explore Young Adult Classes"
- On click: Link to `/classes/young-adults`

---

## SPEC 8: Adults Section

**Component Name:** AdultsSection  
**Location:** app/components/sections/AdultsSection.tsx  
**Purpose:** Reassure midlife adults (35–55) that it's never too late, beginner-friendly, stress relief + social

### Layout
- **Desktop:** Text LEFT (40%) + image RIGHT (60%)
- **Mobile:** Stack vertically
- Opposite stagger from Young Adults (B pattern)

### Image
**Source:** AI-generated by Grok or real footage if available
**Subject:** Adults (35–55 years) in Salsa/Bachata, partnered movement, joyful, diverse
**Specifications:**
- Size: 1200x1200px
- Alt text: "Adults dancing Salsa and Bachata together"
- **CHINESE-MAJORITY:** Include (many Chinese adults interested in Salsa for social + fitness)

### Copy Structure

**Subheader:**
```
"Never too late. Stress relief. Social. Beginner-friendly."
```
- Font: Cormorant Garamond, 32px, white

**Body Copy:**
```
"You've been thinking about dance for years. 'I'm too old,' 'I don't have 
rhythm,' 'I'll feel foolish.' None of that matters here. Our adult classes are 
for people who've never danced, who want to relieve stress, who want to feel 
alive again. You'll dance, laugh, and leave with new friends."
```
- Font: Inter, 16px, #e8e8e8
- Line height: 1.6

**CTA Button:**
- Text: "Find Adult Classes"
- On click: Link to `/classes/adults`

### Tone Note
This is the section where barrier-removal is critical. Use language that directly addresses fears ("I'm too old," "I don't have rhythm," "I'll feel foolish"). Make it clear: "You are welcome here exactly as you are."

---

## SPEC 9: Testimonials Section (Generic)

**Component Name:** TestimonialsSection  
**Location:** app/components/sections/TestimonialsSection.tsx  
**Purpose:** Show real voices from diverse demographics and ages
**Placement:** After Adults section

### Layout
- **Desktop:** 3-column grid of cards
- **Tablet:** 2 columns
- **Mobile:** 1 column (stacked)
- Card-based design with testimonial quote + attribution

### Card Design
```
Background: #1a1612
Border: 1px solid #d4a574 (subtle)
Padding: 32px
Border-radius: 4px (minimal, premium look)
Hover: Border becomes fully #d4a574

Content:
  - Quote: Serif (Cormorant Garamond), 18px, white, italic
  - Attribution: Sans (Inter), 14px, #e8e8e8, "— Name, Age"
  - Optional: Star rating (1–5 stars in gold)
```

### 6 Testimonials (Draft Suggestions — Customize Based on Real Testimonials)

**Testimonial 1: Kids Parent (Chinese mother)**
```
"My daughter used to be shy. After 3 months in your kids class, she's confident, 
she's made friends, and she actually asks me to take her to class. Thank you for 
showing her she can do this."
— Wei Lin (Amy's Mother), 42
```

**Testimonial 2: Teens (Mixed, K-pop focused)**
```
"Finally, a class that teaches the moves I actually want to learn. My teachers 
respect the music I love, and I've made friends who are as into K-pop as I am."
— Chen Wei, 16
```

**Testimonial 3: Young Adult (Professional)**
```
"I needed to get out, move, and meet people. This studio delivered all three. 
It's become part of my week."
— Marcus, 28
```

**Testimonial 4: Adult (Salsa, beginner)**
```
"I walked in terrified. My teacher said, 'Everyone here was nervous once.' That 
changed everything. Now I'm back every week, and I feel alive again."
— Rosina, 48
```

**Testimonial 5: Active Adult (55+, Chinese)**
```
"At 62, I thought my dancing days were behind me. Your gentle classes proved me 
wrong. I'm stronger, happier, and part of a wonderful community."
— Tan Hong Wei, 62
```

**Testimonial 6: Studio Renter (Corporate)**
```
"We rent your studio monthly for team-building. The space is professional, the 
staff is helpful, and our employees love the atmosphere."
— Sarah, Corporate Training Manager
```

### Diversity Note
**Critical:** 4–5 of 6 should have Chinese names/backgrounds (Wei Lin, Chen Wei, Tan Hong Wei). This reflects actual studio demographics and signals authenticity to majority audience.

### Copy Guidelines
- Real language, no corporate-speak
- Specific detail (class length, improvement, feeling)
- Age + demographic mentioned
- 2–3 sentences max per testimonial

---

## SPEC 10: Active Adults Section

**Component Name:** ActiveAdultsSection  
**Location:** app/components/sections/ActiveAdultsSection.tsx  
**Purpose:** Show that 55–70+ adults are active, vibrant, welcomed (MUST NOT patronize)
**Placement:** After Testimonials

### Layout
- **Desktop:** Image LEFT (60%) + text RIGHT (40%)
- **Mobile:** Stack vertically
- Stagger same as Kids/Young Adults (A pattern)

### Image
**Source:** AI-generated by Grok, professional photography
**Subject:** Older adults (55–70+ years) moving, smiling, in group, VIBRANT (not slow/gentle)
**Specifications:**
- Size: 1200x1200px
- Alt text: "Active older adults dancing with energy and joy"
- **CRITICAL:** Show diverse ages (55, 62, 70+), diverse ethnicities (including Chinese faces)
- **CRITICAL:** Show MOVEMENT energy, not "gentle sitting." Prove vitality.

### Copy Structure

**Subheader:**
```
"Health. Vitality. Friendship. Gentle movement."
```
- Font: Cormorant Garamond, 32px, white

**Body Copy:**
```
"Dance keeps you young. Literally. It builds strength, balance, flexibility, 
and joy. Our active adult classes are for people who want to stay sharp, stay 
strong, and stay connected. You'll move at your pace, with people who understand 
where you are. This is not 'gentle exercise'—it's dance. Real movement. Real 
community."
```
- Font: Inter, 16px, #e8e8e8
- Line height: 1.6

**CTA Button:**
- Text: "Browse Active Adult Classes"
- On click: Link to `/classes/active-adults`

### Tone Note
**This section must NOT feel patronizing.** Show vitality. Show real dancing, not slow movements. The key fear is: "This is too 'senior.' I'm not ready to slow down." Counter that with energy + confidence in the copy + image.

---

## SPEC 11: Studio Rentals Section

**Component Name:** StudioRentalsSection  
**Location:** app/components/sections/StudioRentalsSection.tsx  
**Purpose:** EQUAL VISUAL WEIGHT to classes (rentals = 50% of business)
**Placement:** After Active Adults

### Layout
- **Desktop:** Two-column grid (50% image/info + 50% text + CTA)
- **Mobile:** Stacked
- Asymmetric design to match other sections

### Images (2 photos)
**Image 1: Studio Space**
- Professional studio interior: mirrors, sprung floor, lighting, clean
- Size: 800x600px
- Alt text: "Professional dance studio with mirrors and sprung floor"

**Image 2: Event/Class in Progress**
- Diverse group using space (class, corporate event, private rental)
- Size: 800x600px
- Alt text: "Group event using professional studio space"

### Copy Structure

**Subheader:**
```
"Professional Spaces. Flexible Rental. Community Events."
```
- Font: Cormorant Garamond, 32px, white

**Body Copy:**
```
"Need a professional dance space? Host a corporate event? Hold a private party? 
Our studios are available hourly, daily, or weekly. We provide professional 
equipment, flexible scheduling, and the welcoming atmosphere your group deserves. 
From yoga teachers to corporate teams, from dance classes to celebrations—our 
spaces work for you."
```
- Font: Inter, 16px, #e8e8e8
- Line height: 1.6

**CTA Button:**
- Text: "Explore Studio Rentals"
- Style: Gold outline (match other CTAs)
- On click: Link to `/rentals` or show rental modal with pricing

### Spacing & Hierarchy
**Critical:** This section gets EQUAL visual prominence to class sections. Same spacing, same typography, same emphasis. **Never position this below fold or as secondary.**

---

## SPEC 12: Studio Pictures Gallery (Generic)

**Component Name:** StudioPicturesGallery  
**Location:** app/components/sections/StudioPicturesGallery.tsx  
**Purpose:** Show actual studio environment, build trust
**Placement:** After Rentals section

### Layout
- **Desktop:** Masonry or grid (4–6 images)
- **Mobile:** 2 columns, stacked

### Images to Collect (Content Creation Task)
1. Studio lobby/entrance
2. Main studio (mirrors, floor, lighting)
3. Smaller practice space
4. Class in action (diverse group)
5. Social area (lounge, water station)
6. Event/rental in use (different group type)

### Design
```
Grid: Auto-fit, minmax(200px, 1fr)
Image Hover: Subtle zoom (1.05) + border becomes gold
Border: 1px solid #d4a574
Spacing: 16px gap between images
```

### No Header Label
Flows naturally from Rentals section. Just images + space.

---

## SPEC 13: Final CTA Section

**Component Name:** FinalCTASection  
**Location:** app/components/sections/FinalCTASection.tsx  
**Purpose:** Convert curious visitors to action
**Placement:** Before Getting Started

### Layout
- Centered, prominent
- Large serif headline
- Two CTA buttons (classes + rentals) giving equal options

### Copy

**Headline:**
```
"Ready to take the floor?"
```
- Font: Cormorant Garamond (serif), 64px, #d4a574 (gold)
- Text alignment: Center
- Margin-bottom: 40px

**Subheadline:**
```
"Pick your path. Learn. Belong. Dance."
```
- Font: Inter, 18px, #e8e8e8
- Margin-bottom: 60px

**Two Buttons (Side-by-side on desktop, stacked on mobile):**

Button 1:
```
Text: "Find Your Class"
Style: Gold fill (solid), no border
Hover: Slightly darker gold (#c9975f)
On click: Smooth scroll to identity grid OR link to `/classes`
```

Button 2:
```
Text: "Rent a Studio"
Style: Gold outline, no fill
Hover: Fill with gold
On click: Link to `/rentals`
```

### Spacing
- Section padding: 120px vertical, 40px horizontal
- Max-width: 800px (centered)

---

## SPEC 14: Getting Started (3 Steps)

**Component Name:** GettingStartedSection  
**Location:** app/components/sections/GettingStartedSection.tsx  
**Purpose:** Remove friction, show simplicity
**Placement:** Before FAQs

### Layout
- **Desktop:** 3-column grid
- **Mobile:** Stacked, full-width
- Each step is a card with number + title + brief description

### Step 1
```
Number: "01" (large serif, gold, 48px)
Title: "Choose Your Class" (serif, white, 24px)
Description: "Browse our class schedule by demographic and dance style. 
Find the time and teacher that work for you."

Icon (Optional): Small dance icon or arrow
```

### Step 2
```
Number: "02"
Title: "Take a Trial Class" (serif, white, 24px)
Description: "Come try your first class free. Our teachers meet you exactly 
where you are. No pressure, no judgment."

Icon: Small checkmark or person icon
```

### Step 3
```
Number: "03"
Title: "Join Our Community" (serif, white, 24px)
Description: "Commit to your class package and become part of a warm, 
welcoming community of dancers."

Icon: Small heart or group icon
```

### Card Design
```
Background: #1a1612
Border: 1px solid #d4a574
Padding: 40px
Text alignment: Center
Hover: Border becomes fully gold

Step Number: Serif, 48px, gold
Title: Serif, 24px, white
Description: Sans, 14px, #e8e8e8, line-height 1.6
```

### Spacing
- Gap between cards: 30px
- Section padding: 100px vertical, 40px horizontal
- Mobile: 60px vertical, 20px horizontal

---

## SPEC 15: FAQs (Accordion)

**Component Name:** FAQsSection  
**Location:** app/components/sections/FAQsSection.tsx  
**Purpose:** Answer common objections/questions, reduce friction
**Placement:** Before footer

### Layout
- Centered, max-width: 800px
- Accordion design (click to expand/collapse)
- 8 items

### Accordion Styling
```
Header (Collapsed):
  - Background: #1a1612
  - Border: 1px solid #d4a574
  - Padding: 20px
  - Cursor: pointer
  - Text: Sans, 16px, white, bold

Header Hover:
  - Border: Full gold
  - Background: Slightly lighter (#222)

Content (Expanded):
  - Background: #0f0f0f (slightly lighter than header)
  - Padding: 20px
  - Border-left: 3px solid #d4a574
  - Text: Sans, 14px, #e8e8e8, line-height 1.6
  - Animation: Smooth slide-down (300ms)
```

### 8 FAQ Items (Customize Based on Your Studio)

**Q1: "I've never danced before. Will I feel out of place?"**
A: "No. Everyone here started exactly where you are. Our classes are designed for beginners. You'll learn at your pace, with teachers who meet you there."

**Q2: "What's the difference between the age groups?"**
A: "Each demographic section has different music, energy, and social focus. Kids classes are fun and playful. Teens focus on contemporary and K-pop. Young adults emphasize fitness and social connection. Adults explore Salsa and stress relief. Active adults focus on health and community. But all classes are beginner-friendly."

**Q3: "How much does a class cost?"**
A: "Classes range from RM 30–50 per session, with package discounts available. Check our schedule for current pricing."

**Q4: "Do I need to commit to a package, or can I try first?"**
A: "You can take a free trial class first. No commitment. If you love it, then join a package."

**Q5: "What if I can't make the same class every week?"**
A: "Classes are scheduled throughout the week. You can mix and match sessions or come when you can. No pressure."

**Q6: "What should I wear?"**
A: "Comfortable, loose clothing. Bare feet or dance shoes (sneakers are fine to start). Don't overthink it—just come as you are."

**Q7: "Do I need a partner for classes like Salsa?"**
A: "No. In partner dances, we rotate partners. You'll meet new people and learn with different partners."

**Q8: "Can I rent your studio for an event?"**
A: "Yes! We rent studios hourly or daily for classes, corporate events, private parties, and more. Contact us for pricing and availability."

### Spacing
- Gap between accordion items: 16px
- Section padding: 100px vertical, 40px horizontal
- Mobile: 60px vertical, 20px horizontal

---

# PART 3: CHINESE-MAJORITY INTEGRATION STRATEGY

**This is critical.** Dance Connexions' student base is majority Chinese. The homepage must feel authentic to that reality, not like generic "multicultural" window-dressing.

## Imagery Guidelines

**AI Image Generation (Grok/Kling):**
- **Kids Section:** Include 2–3 visibly Chinese children (prominent, not background)
- **Teens Section:** 40–50% visibly Chinese teens (K-pop is huge with Chinese youth)
- **Young Adults:** 30–40% visibly Chinese (professional market skews Chinese)
- **Adults:** 30–40% visibly Chinese (Salsa community includes many Chinese adults)
- **Active Adults:** 40–50% visibly Chinese (this demographic is active + Chinese)
- **Testimonials:** 4–5 of 6 names should be Chinese (Wei Lin, Chen Wei, Tan Hong Wei, Lim Mei Ling, etc.)

## Copy Integration

**Do NOT:**
- Mention "Mandarin" or "Chinese" in copy (unless offering translation option later)
- Use tokenistic language ("We welcome all cultures")
- Add forced cultural references

**DO:**
- Let imagery speak (authentic representation is natural)
- Use warm, inclusive language that works for all (all current copy does this)
- When testimonials appear with Chinese names, let that be enough

## Tone

The entire homepage speaks to "warmth, community, beginner-friendly." This tone is culturally aligned with Malaysian-Chinese values (community, family, belonging, humility). No need to "Orientalize" or add cultural flourishes. The research shows: authentic representation + warm tone = inclusive to Chinese-majority audience.

---

# PART 4: BUILD EXECUTION ORDER

**Priority 1 (Foundation):**
1. Hero Identity Grid (routes everything)
2. Design System (colors, typography, spacing in globals)
3. Quick Choice Bar (sticky navigation)

**Priority 2 (Class Sections):**
4. Kids Section
5. Teens Section
6. Young Adults Section
7. Adults Section
8. Active Adults Section

**Priority 3 (Generic + Conversion):**
9. Who We Are
10. Our Philosophy
11. Testimonials
12. Studio Rentals (EQUAL visual weight to classes)
13. Studio Pictures
14. Final CTA
15. Getting Started
16. FAQs

**Priority 4 (Polish):**
17. Responsive design (mobile/tablet)
18. Accessibility audit
19. Performance optimization
20. Animation/transitions

---

# PART 5: TECHNICAL NOTES

## Tech Stack
- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4
- **Components:** shadcn/ui
- **Images:** Optimized via `next/image`
- **Animations:** Framer Motion or Intersection Observer
- **Forms:** (For rental inquiries, if needed)

## Component Structure
```
app/
├── page.tsx (homepage, combines all sections)
├── components/
│   ├── HeroIdentityGrid.tsx
│   ├── QuickChoiceBar.tsx
│   ├── sections/
│   │   ├── KidsSection.tsx
│   │   ├── TeensSection.tsx
│   │   ├── YoungAdultsSection.tsx
│   │   ├── AdultsSection.tsx
│   │   ├── ActiveAdultsSection.tsx
│   │   ├── StudioRentalsSection.tsx
│   │   ├── WhoWeAreSection.tsx
│   │   ├── OurPhilosophySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── StudioPicturesGallery.tsx
│   │   ├── FinalCTASection.tsx
│   │   ├── GettingStartedSection.tsx
│   │   └── FAQsSection.tsx
│   └── common/
│       ├── Header.tsx (keep existing)
│       └── Footer.tsx (keep existing)
├── lib/
│   ├── constants.ts (colors, typography, spacing)
│   └── utils.ts
└── styles/
    └── globals.css
```

## Image Optimization
- All images: Use `next/image` component
- Format: JPG for photos (85% quality, ~100–200KB each)
- Sizes: 1200x1200px source, responsive via `srcSet`
- Alt text: Always included
- Lazy load: By default with `next/image`

## Responsive Design
- **Desktop:** Full layout as specified
- **Tablet (768px):** Adjust columns, maintain hierarchy
- **Mobile (375px–667px):** Single column, stack everything, maintain readability

---

# PART 6: QUESTIONS FOR CLAUDE CODE EXECUTION

**Before you build, confirm:**

1. **Images:** Do you have AI-generated images ready, or should we use placeholders?
2. **Routing:** Should demographic tiles link to separate pages (`/classes/kids`) or anchor to sections (#kids-section)?
3. **WhatsApp Integration:** Should CTAs link to WhatsApp chat, or to class schedule?
4. **Testimonials:** Do you have real testimonials, or should we use the drafts provided?
5. **FAQs:** Should these be customized to match your studio exactly?

---

# FINAL NOTES

This specification translates **all research** into **actionable build steps**. It encodes:
- ✅ Market research (6 demographics + Malaysia context)
- ✅ Content strategy (messaging frameworks, 7 locked copy lines)
- ✅ Design direction (Direction 3 "Warm Community" visual specs)
- ✅ Chinese-majority integration (authentic representation)
- ✅ Conversion strategy (routing, CTAs, user journeys per demographic)

**Do not modify specs.** If something doesn't work in code, tell Haan and we'll refine. But the research is locked in. The copy is locked in. The layout is locked in.

**Build with confidence.** You have everything you need.

---

**Status: READY FOR CLAUDE CODE EXECUTION**

---

*Specification created by Sam (Personal Executive Assistant)*  
*Date: 2026-02-18*  
*For: Dance Connexions Homepage Redesign*  
*Owner: Haan*
