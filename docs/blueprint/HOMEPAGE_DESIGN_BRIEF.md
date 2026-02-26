# Dance Connexions - Homepage Design Brief
**Project:** Homepage Redesign (Multi-Variant Exploration)
**Date:** 2026-02-27
**Status:** Ready for Design Phase
**Deliverables:** 5 functional design variants

---

## 📋 Document Purpose

This brief guides web designers to create **5 different homepage designs** for Dance Connexions, each accessible at separate URLs for evaluation:
- `localhost:3000/home1`
- `localhost:3000/home2`
- `localhost:3000/home3`
- `localhost:3000/home4`
- `localhost:3000/home5`

**Creative Freedom:** Designers have full creative control over visual design (colors, fonts, layouts, imagery style) as long as functional requirements are met.

---

## 🎯 Project Goals

### Primary Objective
Create a homepage that serves as a **smart demographic router + inclusive welcome** for 6 distinct user groups without alienating any.

### Core Principle
> "Every visitor (age 5-75+) should immediately see proof that this school has something for people like them."

### Success Metrics
1. **Inclusion:** All 6 demographics feel visually represented
2. **Routing:** Clear pathways to demographic-specific content
3. **Conversion:** Visitors stay longer, explore deeper, take action
4. **Authenticity:** Warm, welcoming tone (not corporate/sales-y)

---

## 👥 Target Audiences (6 Demographics)

### 1. Kids (5-12 years) - via Parents
**What they need to see:**
- Fun, safe, beginner-friendly environment
- Kids learning, making friends, expressing themselves
- Safety signals (certified instructors, professional environment)

**Key messaging:**
- "Safe, nurturing where kids discover confidence"
- Coolness, fun, making friends
- Structured progression, performance opportunities

### 2. Teens (13-18 years)
**What they need to see:**
- K-pop, hip-hop, contemporary styles
- Peer community, creative expression
- Cool, modern, aspirational content

**Key messaging:**
- "Express yourself - no judgment, just good vibes"
- K-pop choreography, trending styles
- Social connection, skill progression

### 3. Young Adults (18-30 years)
**What they need to see:**
- Fitness + social connection
- Contemporary, salsa, bachata, dance cardio
- Energetic, inclusive, growth-oriented

**Key messaging:**
- "Fitness that feels like fun + community that lasts"
- Social dancing, stress relief, learning new skills
- Beginner-friendly with professional instruction

### 4. Adults (30-50 years)
**What they need to see:**
- Stress relief, wellness, hobby fulfillment
- Salsa, bachata, contemporary classes
- Mature, professional environment

**Key messaging:**
- "Stress relief that works - proven by science"
- Never too late to learn, social connection
- Health benefits, mental wellness

### 5. Active Adults (50+ years)
**What they need to see:**
- Gentle movement, health focus, social engagement
- Line dancing, ballroom, low-impact options
- Accessible, encouraging, respectful

**Key messaging:**
- "Stay active, stay connected, dance through life"
- Health, vitality, friendship, community
- Age-appropriate, gentle movement options

### 6. Studio Renters (All Ages)
**What they need to see:**
- Professional event space, flexible setup
- Corporate events, workshops, performances
- Clear pricing, availability, facilities

**Key messaging:**
- "Professional event space that supports your vision"
- 4 studios, flexible policies, quality facilities
- Equal importance to dance classes (50% revenue each)

---

## 🚫 Critical "DO NOT" Requirements

### Visual Alienation (AVOID)
❌ DO NOT show only young/fit people (excludes seniors, beginners)
❌ DO NOT show only K-pop/teens at top (70-year-olds bounce)
❌ DO NOT prioritize one demographic visually over others
❌ DO NOT use generic "fitness landing page" templates

### Language/Tone to AVOID
❌ Marketing jargon: "Transform your life," "Unlock potential"
❌ Corporate/sales-y language
❌ Overpromising or superlatives
❌ Credential bragging ("Since 1999" prominently displayed)
❌ Elite/intimidating language ("Advanced dancers only")

### Design Styles to AVOID
❌ Childish, cartoonish, or overly artistic
❌ Feminine-coded or single-gender focus
❌ Dense image grids (portfolio aesthetic)
❌ Text-heavy marketing blocks
❌ Stock photography of perfect dancers

---

## ✅ Design Principles to EMBRACE

### Functional Requirements (MUST HAVE)

#### 1. Demographic Router (Top Section)
**Requirement:** 6 visual entry points representing each demographic

**Implementation ideas (designer's choice):**
- 6 clickable tiles/cards in a grid
- 6 tabs or navigation sections
- 6 hero rotation slides with navigation
- 6 illustrated icons with clear labels
- Creative alternative (as long as all 6 are prominent)

**Each entry point must:**
- Be visually distinct
- Show who it's for (Kids, Teens, Young Adults, Adults, 50+, Rentals)
- Link to demographic-specific landing page
- Have equal visual weight

#### 2. Scroll Experience (Middle Sections)
**Requirement:** As visitors scroll, they encounter each demographic's section

**Each section should include:**
- Representative imagery (that demographic in action)
- Tailored messaging (what matters to them)
- Appropriate tone (playful for kids, cool for teens, professional for renters)
- Clear call-to-action

**Order flexibility:** Designer can choose scroll order (suggested: Kids → Teens → Young Adults → Adults → 50+ → Rentals)

#### 3. Universal Sections (Interspersed)
**Requirement:** Generic sections that work for all demographics

**Must include:**
- **Who We Are** - Warm introduction (not boastful)
- **Our Philosophy** - "Dance is learnable, beginner-friendly, community-focused"
- **Facilities/What's Included** - Equipment, amenities, value-adds
- **Call-to-Action** - Multiple pathways (trial class, view schedule, contact)

**Optional additions:**
- Testimonials (if diverse age range available)
- FAQs
- Location/parking info
- Social proof elements

#### 4. Mobile-First Design
**Requirement:** Primary traffic is mobile (TikTok, Instagram, Google mobile)

**Must work perfectly on:**
- Mobile (360px - 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)

### Visual Tone (Creative Freedom)

**Suggested direction (NOT mandatory):**
- Professional but approachable
- Warm and welcoming (not cold/corporate)
- Clean and modern (not cluttered)
- Inclusive and diverse (show multiple ages/ethnicities)
- Authentic (real movement, not overly staged)

**Completely open:**
- Color palette (no restrictions - go bold, go minimal, go warm, go cool)
- Typography (readable is the only requirement)
- Layout approach (asymmetrical, grid-based, flowing, modular)
- Imagery style (photos, illustrations, mixed media, AI-generated)
- Animation/interactions (subtle, bold, or none)

---

## 📐 Functional Specifications

### Technical Setup (Next.js 16)

**File structure for 5 variants:**
```
src/app/
├── home1/
│   └── page.tsx  → First design variant
├── home2/
│   └── page.tsx  → Second design variant
├── home3/
│   └── page.tsx  → Third design variant
├── home4/
│   └── page.tsx  → Fourth design variant
└── home5/
    └── page.tsx  → Fifth design variant
```

**Access URLs:**
- `http://localhost:3000/home1`
- `http://localhost:3000/home2`
- `http://localhost:3000/home3`
- `http://localhost:3000/home4`
- `http://localhost:3000/home5`

### Component Requirements

**Each homepage variant must include:**

1. **Navigation/Header**
   - Logo/brand
   - Links to: Classes, Rentals, About, Contact
   - WhatsApp/Phone quick access
   - (Design freely: sticky, transparent, minimal, full)

2. **Demographic Router Section**
   - 6 entry points (Kids, Teens, Young Adults, Adults, 50+, Rentals)
   - Click → Navigate to demographic landing (e.g., `/classes/kids`)
   - Visual prominence (top or very early in scroll)

3. **Demographic Vignette Sections (6 sections)**
   - One per demographic
   - Custom imagery per age group
   - Tailored messaging
   - CTA button ("Learn More," "View Classes," "Book Now")

4. **Universal Sections (3 minimum)**
   - Who We Are
   - Our Philosophy / Why Dance
   - Facilities / What's Included

5. **Footer**
   - Contact info (phone, email, WhatsApp, address)
   - Quick links
   - Social media icons
   - Map/location
   - (Design freely: minimal, comprehensive, creative)

### Interaction Requirements

**Must have:**
- Smooth scroll behavior
- Clickable demographic tiles/cards
- CTA buttons that stand out
- Mobile menu (hamburger or alternative)

**Nice to have (optional):**
- Scroll animations (fade-in, parallax, etc.)
- Hover effects
- Video backgrounds
- Interactive elements

### Content Placeholders

**For now, use placeholder content:**
- **Images:** AI-generated, stock photos, or illustrated placeholders
- **Text:** Lorem ipsum or suggested messaging from this brief
- **Logos:** Placeholder or simple "DC" text logo

**Note:** Final content (real photos, copy) will be added later. Focus on layout, hierarchy, and visual design.

---

## 🎨 Design Variant Guidelines

### Variant 1: [Designer's Choice - Concept Name]
**Approach:** Designer defines (e.g., "Bold & Visual," "Minimalist Grid," "Storytelling Flow")

**Suggested differentiation:**
- Test a specific layout philosophy
- Try a color mood (warm, cool, dark, light)
- Experiment with imagery style (photos, illustrations, mixed)

### Variant 2: [Designer's Choice - Concept Name]
**Approach:** Different from Variant 1

**Suggested differentiation:**
- Alternative demographic router approach
- Different visual hierarchy
- Contrasting color palette

### Variant 3: [Designer's Choice - Concept Name]
**Approach:** Different from Variants 1 & 2

**Suggested differentiation:**
- Unique scroll experience
- Different content density (minimal vs. comprehensive)
- Alternative typography approach

### Variant 4: [Designer's Choice - Concept Name]
**Approach:** Different from Variants 1-3

**Suggested differentiation:**
- Experimental/bold concept
- Alternative navigation/routing method
- Different media approach (video-heavy, illustration-heavy, etc.)

### Variant 5: [Designer's Choice - Concept Name]
**Approach:** Different from Variants 1-4

**Suggested differentiation:**
- Safe/conservative option (if others are experimental)
- OR wildcard/creative risk
- Alternative demographic presentation

---

## 📊 Content Structure Template

### Suggested Homepage Flow (Designer can rearrange)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1: HERO / DEMOGRAPHIC ROUTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Headline: "Dance Connexions: Move Your Body, Free Your Mind"
- Subhead: "Dance classes for all ages + Professional studio rentals"
- 6 Demographic Tiles:
  [Kids] [Teens] [Young Adults] [Adults] [50+] [Rentals]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2: KIDS (5-12 years)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Imagery: Kids dancing, having fun, learning
- Headline: "Dance Classes for Kids - Safe, Fun, Expressive"
- Copy: Beginner-friendly, make friends, build confidence
- CTA: "View Kids Classes"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3: TEENS (13-18 years)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Imagery: Teens in K-pop, hip-hop, contemporary
- Headline: "Express Yourself - K-pop, Hip-hop, Contemporary"
- Copy: Cool styles, peer community, no judgment zone
- CTA: "Explore Teen Classes"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4: YOUNG ADULTS (18-30 years)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Imagery: Young adults dancing, socializing, fitness
- Headline: "Fitness That Feels Like Fun"
- Copy: Social connection, learn salsa/bachata, stress relief
- CTA: "Find Your Class"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5: ADULTS (30-50 years)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Imagery: Adults learning, salsa dancing, wellness
- Headline: "Never Too Late to Learn"
- Copy: Stress relief, health benefits, social dancing
- CTA: "Start Dancing"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6: ACTIVE ADULTS (50+ years)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Imagery: Seniors moving, smiling, in community
- Headline: "Stay Active, Stay Connected"
- Copy: Gentle movement, health focus, friendship
- CTA: "Join Our Community"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7: STUDIO RENTALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Imagery: Professional studio spaces, events, rehearsals
- Headline: "Professional Event Space for Rent"
- Copy: 4 studios, flexible policies, hourly rates from RM 50
- CTA: "View Studio Rentals"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 8: WHO WE ARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Copy: Warm introduction, 25+ years in Bandar Sunway
- "We're here to teach dance to everyone"
- Multicultural, inclusive, community-focused

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 9: OUR PHILOSOPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- "Dance is Learned, Not Inherited"
- Beginner-friendly environment
- Community over competition
- Dance brings confidence, friendship, health, joy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 10: CALL-TO-ACTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- "Ready to Start Dancing?"
- Buttons: [Book Free Trial] [View Schedule] [Contact Us]
- WhatsApp quick link

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Contact: Phone, Email, WhatsApp, Address
- Quick Links: Classes, Rentals, About, Contact
- Social Media: Instagram, Facebook, TikTok
- Map embed or link to Google Maps
```

**Note:** Designer can rearrange, combine, or split sections as needed for visual flow.

---

## 🎭 Malaysian Context (Important)

### Multicultural Considerations
- **Imagery should reflect diversity:** Malay, Chinese, Indian, expat communities
- **Family-centric:** Multigenerational appeal
- **Cultural sensitivity:** Modest imagery where appropriate
- **Language:** English primary (Malay/Chinese optional)

### Local References (Optional)
- Bandar Sunway location
- Free parking after office hours
- WhatsApp as primary contact (90.7% monthly usage in Malaysia)
- Accessibility from KL/PJ areas

---

## 🚀 Deliverables

### For Each of 5 Variants

**1. Functional Next.js Page**
- File: `src/app/home[1-5]/page.tsx`
- Fully coded and functional
- Uses React 19 + Next.js 16 + Tailwind CSS
- Responsive (mobile, tablet, desktop)

**2. README for Variant**
- File: `src/app/home[1-5]/README.md`
- Concept name and design philosophy
- Key design decisions (color, typography, layout approach)
- Why this variant is different from others

**3. Component Structure**
- Reusable components where possible
- Clean, maintainable code
- Comments for key decisions

**4. Placeholder Content**
- Images (AI-generated, stock, or illustrated)
- Text (lorem ipsum or suggested copy)
- Icons/graphics as needed

### Overall Deliverable Package

**Documentation:**
- Design decisions summary (why 5 variants differ)
- Recommendations (which variant for which use case)
- Known limitations or future improvements

**Code Quality:**
- TypeScript (preferred) or JavaScript
- ESLint compliant
- Follows Next.js 16 best practices
- Tailwind CSS for styling (or CSS modules if preferred)

---

## 📝 Design Freedom Areas

### Full Creative Control Over:

✅ **Color Palette**
- Warm, cool, neutral, bold, minimal - designer's choice
- No brand colors specified (yet)
- Test different moods across variants

✅ **Typography**
- Font families (as long as readable)
- Font sizes, weights, hierarchy
- Line height, letter spacing

✅ **Layout Philosophy**
- Grid-based, asymmetrical, flowing, modular
- Section spacing and rhythm
- Content density (minimal vs. comprehensive)

✅ **Imagery Style**
- Photography, illustrations, mixed media
- AI-generated, stock, custom illustrations
- Image treatment (filters, overlays, borders)

✅ **Interactions**
- Scroll animations (subtle or bold)
- Hover effects
- Transitions and micro-interactions
- Video backgrounds or animated elements

✅ **Visual Hierarchy**
- What gets visual prominence
- How sections are differentiated
- Content arrangement within sections

✅ **Navigation Approach**
- Header style (minimal, comprehensive, sticky, hidden)
- Footer design (simple, detailed, creative)
- Demographic router implementation (tiles, tabs, slider, etc.)

---

## ⚖️ Balance Requirements vs. Freedom

### MUST DO (Non-Negotiable)
1. ✅ Represent all 6 demographics visually
2. ✅ Provide clear routing to each demographic
3. ✅ Avoid alienating language/visuals (see "DO NOT" section)
4. ✅ Work on mobile, tablet, desktop
5. ✅ Include universal sections (Who We Are, Philosophy)
6. ✅ Accessible at `/home[1-5]` routes

### SHOULD DO (Highly Recommended)
1. ✅ Mobile-first design approach
2. ✅ Diverse representation in imagery
3. ✅ Warm, welcoming tone (not corporate)
4. ✅ Professional but approachable aesthetic
5. ✅ Clear CTAs throughout

### NICE TO HAVE (Optional)
- Animations and interactions
- Video content
- Testimonials section
- Social proof elements
- Advanced filtering/navigation

---

## 📊 Success Criteria

### Functional Success
✅ All 6 demographic entry points clearly visible
✅ Clicking demographic tile → navigates correctly
✅ Mobile responsive (works perfectly on 360px)
✅ All sections render correctly
✅ CTAs are prominent and clickable
✅ Footer has contact info and quick links

### Design Success (User Testing)
✅ 70-year-old visitor sees "Active Adults" section → feels welcome
✅ Teen visitor sees K-pop/cool styles → thinks "this is for me"
✅ Parent sees kids section → feels safe and confident
✅ Studio renter sees equal weight to classes → knows you're serious
✅ All visitors find homepage warm, professional, inclusive

### Technical Success
✅ Fast load times (<3 seconds on 3G)
✅ No console errors
✅ ESLint compliant
✅ Follows Next.js best practices
✅ Code is maintainable and well-commented

---

## 🕒 Timeline (Suggested)

### Phase 1: Concept Development (2-3 days)
- Sketch/wireframe 5 different approaches
- Define concept names for each variant
- Plan differentiation strategy

### Phase 2: Variant 1-2 Development (3-4 days)
- Code first two variants
- Test responsiveness
- Refine based on initial learnings

### Phase 3: Variant 3-5 Development (3-4 days)
- Code remaining three variants
- Test all variants across devices
- Document design decisions

### Phase 4: Polish & Documentation (1-2 days)
- Final testing
- Write READMEs
- Prepare recommendations

**Total Estimated Time:** 9-13 days (1 designer, full-time)

---

## 📞 Questions & Clarifications

### For Designer to Consider

**Before starting:**
1. Do you want to use any specific design system or component library?
2. Preference for design tools (Figma mockups first, or code directly)?
3. Any accessibility requirements beyond standard WCAG AA?
4. Should variants explore radically different concepts, or subtle variations?

**During development:**
5. Can we use external libraries (Framer Motion, GSAP for animations)?
6. Do you want a design system/component library created alongside?
7. Should imagery be AI-generated, stock photos, or illustrations?

**Contact:** [Your contact info for designer questions]

---

## 📦 Reference Materials

### Attached Documents (for context)
- `vision/homepage-strategy.md` - Detailed homepage requirements
- `vision/brand-identity.md` - Brand voice and tone guidelines
- `research/target-market.md` - Deep dive into 6 demographics
- `technical/architecture.md` - Tech stack and setup

### Inspiration (NOT to copy, just for context)
- Current site at `localhost:3000/rentals` - Studio rentals section (well-done)
- **DO NOT** reference current homepage at `localhost:3000` (rejected design)

### Key Quotes to Remember
> "This is NOT a marketing homepage. This is a smart demographic router + inclusive welcome."

> "This school has classes for people like me." - Every visitor should feel this

> "Dance is learned, not inherited." - Core philosophy

---

## ✅ Final Checklist

**Before submitting designs:**

### Functional
- [ ] All 5 variants accessible at `/home1` through `/home5`
- [ ] Each variant represents all 6 demographics
- [ ] Mobile responsive (tested on 360px, 768px, 1024px+)
- [ ] All links/buttons clickable (even if placeholder destinations)
- [ ] No console errors
- [ ] Fast load times

### Content
- [ ] All 6 demographic sections present
- [ ] Universal sections included (Who We Are, Philosophy)
- [ ] CTAs clear and prominent
- [ ] Contact info in footer
- [ ] Placeholder content appropriate

### Design
- [ ] 5 variants are clearly differentiated
- [ ] No marketing jargon in copy
- [ ] Diverse representation in imagery
- [ ] Professional but welcoming aesthetic
- [ ] Avoids "DO NOT" patterns from brief

### Documentation
- [ ] README for each variant explaining concept
- [ ] Design decisions summary
- [ ] Recommendations for which variant to pursue
- [ ] Code is commented and clean

---

## 🎯 Remember: The Goal

Create a homepage where:
- A **70-year-old** lands, sees the "Active Adults" tile, scrolls to that section, and thinks "This is for me"
- A **15-year-old** lands, sees K-pop/cool styles, and thinks "This is cool, not boring"
- A **parent** lands, sees kids section, feels safe, and thinks "I trust them with my child"
- A **corporate event planner** lands, sees rentals have equal weight, and thinks "They're serious about this"
- **ALL of them** feel welcomed, not alienated

---

**Let the design exploration begin! 🎨**

**Questions or clarifications needed? Contact: [Your info]**

---

**Document Version:** 1.0
**Last Updated:** 2026-02-27
**Status:** Ready for Design Phase
