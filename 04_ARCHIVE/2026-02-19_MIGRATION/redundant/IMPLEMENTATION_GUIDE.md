# Dance Connexions — Implementation & Technical Guide
_For: Haan (the "vibe coder")_  
_Feb 2026_

---

## TL;DR: BUILD PATH FOR HAAN

You already have:
- ✅ Next.js setup with Tailwind + shadcn/ui
- ✅ Dark theme configured
- ✅ Hero grid locked in
- ✅ Basic footer
- ✅ AI-generated images (use them)

You need to:
- ❌ Replace middle sections
- ❌ Add 5 new components (Social proof, Studios, Styles, Testimonials, Location)
- ❌ Wire up WhatsApp buttons
- ❌ Animate testimonial marquee

**Time estimate:** 10–15 hours if you've done Tailwind before. Parallelizable with Claude Code.

---

## COMPONENT BREAKDOWN

### 1. SOCIAL PROOF BAR
**File:** `src/components/SocialProofBar.tsx`

```tsx
export default function SocialProofBar() {
  const stats = [
    { number: '4', label: 'Studios' },
    { number: '5', label: 'Age Groups' },
    { number: '1999–2026', label: 'Est.' },
    { number: '4.9', label: 'Google ★' }
  ];

  return (
    <section className="bg-zinc-950 py-8 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-white">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-widest text-zinc-400 mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Styling notes:**
- No images = fast
- `border-y` for rules above/below
- Responsive grid (2 cols mobile, 4 cols desktop)
- Numbers in white, labels in muted gray

**Enhancement:** Add number counter animation with `framer-motion`:
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  className="text-4xl font-bold"
>
  {number}
</motion.div>
```

---

### 2. STUDIO SHOWCASE (Horizontal Scroll)
**File:** `src/components/StudioShowcase.tsx`

**Option A: Native CSS scroll (minimal JS)**

```tsx
export default function StudioShowcase() {
  const studios = [
    {
      id: 1,
      name: 'Studio A',
      sqFt: '1,500',
      capacity: '30',
      image: '/images/studios/studio-a.jpg'
    },
    // ... more studios
  ];

  return (
    <section className="bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-4xl font-serif text-white">The Spaces</h2>
      </div>

      <div className="overflow-x-auto scroll-smooth">
        <div className="flex gap-6 px-4 pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {studios.map(studio => (
            <div
              key={studio.id}
              className="flex-shrink-0 w-96 scroll-snap-start relative group"
            >
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <img
                  src={studio.image}
                  alt={studio.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-xl font-serif text-white">{studio.name}</h3>
                  <p className="text-sm text-zinc-300">
                    {studio.sqFt} sqft • {studio.capacity} capacity
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <p className="text-center text-xs text-zinc-500 mt-4">
        Scroll to explore
      </p>
    </section>
  );
}
```

**Why this works:**
- CSS `scroll-snap` = no JavaScript (native browser support)
- `flex-shrink-0` prevents flex squishing
- Hover overlay appears on mouse (not mobile, so no issue)
- Aspect video ratio keeps proportions

**Enhancement for mobile:**
```tsx
// Add drag/swipe support with Framer Motion if needed
<motion.div
  drag="x"
  dragElastic={0.2}
  className="flex gap-6"
>
```

---

### 3. DANCE STYLES (Pill Cloud)
**File:** `src/components/DanceStyles.tsx`

```tsx
export default function DanceStyles() {
  const styles = [
    'BALLET',
    'JAZZ',
    'CONTEMPORARY',
    'HIP HOP',
    'K-POP',
    'SALSA',
    'AFROBEATS',
    'MODERN',
    'ZUMBA',
    'STREET DANCE',
    'LATIN',
    'LYRICAL'
  ];

  return (
    <section className="bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-white text-center mb-12">
          What We Teach
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {styles.map(style => (
            <button
              key={style}
              className="px-6 py-2 rounded-full border border-zinc-700 bg-white/5 text-white text-sm font-medium
                         hover:bg-white/10 hover:border-zinc-500 transition-all cursor-pointer"
            >
              {style}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Styling:**
- `rounded-full` for pill shape
- `border-zinc-700` for definition on dark bg
- `bg-white/5` = subtle opacity (not pure transparent)
- Hover state: brighten background + darken border
- Text-sm keeps it scannable

**Optional enhancement:**
```tsx
const [selected, setSelected] = useState<string | null>(null);

// Click handler to filter testimonials by style
// Then pass `selected` down to testimonials component
```

---

### 4. TESTIMONIALS (Marquee)
**File:** `src/components/TestimonialMarquee.tsx`

**Install Framer Motion first:**
```bash
npm install framer-motion
```

```tsx
'use client';

import { motion } from 'framer-motion';

export default function TestimonialMarquee() {
  const testimonials = [
    {
      id: 1,
      quote: "Been dancing here for 3 years. The teachers actually care.",
      name: "Maya",
      context: "Parent, 2 kids in classes",
      rating: 5
    },
    {
      id: 2,
      quote: "Learned ballet as an adult. No judgment. So fun.",
      name: "Ahmed",
      context: "Adult learner, 6 months",
      rating: 5
    },
    {
      id: 3,
      quote: "Perfect venue for our corporate event. Professional setup.",
      name: "Zara",
      context: "Corporate rental",
      rating: 5
    },
    // Duplicate for seamless loop
    {
      id: 4,
      quote: "Been dancing here for 3 years. The teachers actually care.",
      name: "Maya",
      context: "Parent, 2 kids in classes",
      rating: 5
    }
  ];

  return (
    <section className="bg-zinc-950 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-serif text-white">What People Say</h2>
      </div>

      <motion.div
        className="flex gap-6"
        animate={{ x: [0, -1300] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {testimonials.map(review => (
          <div
            key={review.id}
            className="flex-shrink-0 w-96 bg-zinc-900 rounded-lg p-6 border border-zinc-800"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-white text-sm leading-relaxed mb-4">
              "{review.quote}"
            </p>

            {/* Attribution */}
            <div className="text-xs text-zinc-400">
              <p className="font-medium text-white">{review.name}</p>
              <p>{review.context}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll hint */}
      <p className="text-center text-xs text-zinc-500 mt-6">
        Testimonials scroll continuously
      </p>
    </section>
  );
}
```

**Key details:**
- `'use client'` because Framer Motion uses hooks
- Duplicate testimonials array at end for seamless loop
- `animate={{ x: [0, -1300] }}` scrolls left continuously
- `transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}` = smooth loop
- Cards have subtle border + dark bg to stand out on black

**To get testimonials:**
1. Go to Google Maps
2. Search "Dance Connexions"
3. Copy 5–8 reviews manually
4. Extract: quote, name, rating

---

### 5. LOCATION (Maps + Address)
**File:** `src/components/LocationSection.tsx`

```tsx
export default function LocationSection() {
  return (
    <section className="bg-zinc-950 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-white mb-12">Visit Us</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Map */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5678910111!2d101.5917!3d3.0656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1sDANCE+CONNEXIONS!2sBANDAR+SUNWAY"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-serif text-white mb-4">
                Bandar Sunway
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                17-3, Jalan PJS 8/4, Bandar Sunway<br />
                Petaling Jaya, Selangor, Malaysia
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-white font-medium mb-3">Hours</h4>
              <p className="text-zinc-400 text-sm">
                Mon–Fri: 4:00pm – 10:30pm<br />
                Sat–Sun: 10:00am – 6:00pm<br />
                <span className="text-xs text-zinc-500">Closed Public Holidays</span>
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.google.com/maps/search/Dance+Connexions"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-black rounded hover:bg-zinc-100 text-sm font-medium transition"
              >
                Google Maps →
              </a>
              <a
                href="https://waze.com/ul/share/LOCATION_CODE"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-zinc-700 text-white rounded hover:bg-zinc-900 text-sm font-medium transition"
              >
                Waze →
              </a>
            </div>

            <p className="text-xs text-zinc-500 mt-6">
              Free parking • Air-conditioned • Wheelchair accessible
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

**Notes:**
- Get real Google Maps embed code from your Business Profile
- Dark map style: Add `&style=dark` to embed URL (check Google Maps API docs)
- Buttons: One white (primary), one outlined (secondary)
- Waze link: Get your location code from Waze app

---

### 6. GETTING STARTED (Already exists, just move it)

Keep your existing code. Move it to appear BEFORE the final CTA.

```tsx
// Move this component to appear between LocationSection and final CTA
<GettingStartedSteps />
```

---

### 7. FINAL CTA (Keep as-is)

Your current WhatsApp section stays unchanged.

```tsx
// Keep your existing final CTA component
<FinalCTA />
```

---

## PAGE STRUCTURE (Updated `src/app/page.tsx`)

```tsx
import Header from '@/components/Header';
import HeroGrid from '@/components/HeroGrid';
import SocialProofBar from '@/components/SocialProofBar';
import StudioShowcase from '@/components/StudioShowcase';
import DanceStyles from '@/components/DanceStyles';
import TestimonialMarquee from '@/components/TestimonialMarquee';
import LocationSection from '@/components/LocationSection';
import GettingStartedSteps from '@/components/GettingStartedSteps';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroGrid />
      
      {/* NEW SECTIONS */}
      <SocialProofBar />
      <StudioShowcase />
      <DanceStyles />
      <TestimonialMarquee />
      <LocationSection />
      <GettingStartedSteps />
      <FinalCTA />
      
      <Footer />
    </>
  );
}
```

---

## STYLING REFERENCE

### Color Palette (Keep Existing)
```css
Background:     #09090b (zinc-950)
Text Primary:   #ffffff (white)
Text Secondary: #a1a1aa (zinc-400)
Text Muted:     #71717a (zinc-500)
Borders:        #27272a (zinc-800)
Hover:          #18181b (zinc-900)
```

### Typography (Keep Existing)
```css
Headers:   font-serif (Georgia, Crimson, Playfair)
Body:      font-sans (system-ui)
Size Map:  h1=4xl, h2=3xl, h3=2xl, body=base, small=sm
Weight:    Bold for headers, Regular for body
```

### Spacing (Tailwind defaults)
```
py-16    = 4rem (64px) padding vertical
py-12    = 3rem (48px)
py-8     = 2rem (32px)
gap-6    = 1.5rem (24px) gap between items
px-4     = 1rem (16px) horizontal padding
```

---

## COMPONENTS TO INSTALL/CONFIGURE

**You already have:**
- ✅ Next.js 14+
- ✅ Tailwind CSS
- ✅ shadcn/ui (if using buttons/cards)

**You need to add:**
1. **Framer Motion** (for testimonial marquee)
   ```bash
   npm install framer-motion
   ```

2. Optional: **Embla Carousel** (if you want advanced carousel for studios)
   ```bash
   npm install embla-carousel-react
   ```
   But native CSS scroll-snap works fine without it.

**That's it.** No other dependencies needed.

---

## BUILD CHECKLIST

- [ ] Create `SocialProofBar.tsx`
- [ ] Create `StudioShowcase.tsx`
- [ ] Create `DanceStyles.tsx`
- [ ] Create `TestimonialMarquee.tsx` (install framer-motion first)
- [ ] Create `LocationSection.tsx`
- [ ] Update `page.tsx` to import and use all new sections
- [ ] Test on mobile (crucial for Malaysia market)
- [ ] Get Google Maps embed URL from your Business Profile
- [ ] Gather 5–8 Google reviews for testimonials
- [ ] Add studio photos to `/public/images/studios/`
- [ ] Test WhatsApp buttons work on mobile
- [ ] Check color contrast (WCAG AA minimum)
- [ ] Deploy to test server
- [ ] Share with Haan for feedback

---

## DEPLOYMENT COMMANDS (If using Vercel)

```bash
# Test locally
npm run dev

# Build for production
npm run build

# Deploy (if connected to Vercel)
git add .
git commit -m "redesign: new content sections for homepage"
git push
```

---

## COMMON MISTAKES TO AVOID

1. ❌ **Too many grids** → Use 1–2 full-bleed images per section instead
2. ❌ **Bright colors on dark** → Keep accent colors muted or just use white
3. ❌ **Long copy** → Keep descriptions to 1–2 sentences max
4. ❌ **Centered everything** → Use asymmetry: left-heavy or right-heavy layouts
5. ❌ **Hover effects on mobile** → Test touch interactions separately
6. ❌ **Auto-playing video without sound** → Mute it (browser policy)
7. ❌ **Forgot alt text** → Every image needs descriptive alt text
8. ❌ **Mobile-last design** → Design for mobile first, scale up

---

## FIGMA / FRAMER ALTERNATIVE

If Haan wants to design in Figma first before coding:

**Figma Setup:**
1. Create frame: 1440×900 (desktop) + 375×812 (mobile)
2. Use typography styles: Headings (serif, bold), Body (sans, regular)
3. Color library: Zinc-950 (#09090b), White, Zinc-400
4. Component library: Cards, Buttons, Pills
5. Test responsive behavior in Figma prototypes

**Export to Code:**
- Use Figma's "Code" tab (right sidebar)
- Or copy-paste component specs
- Use as reference for CSS values

**Framer Alternative:**
- Framer can export to React components directly
- Upload Figma design → Framer converts to editable React
- Not perfect but saves time for layout/spacing

---

## NEXT STEPS FOR HAAN

1. **This week:** Pick design direction (recommend "Dark Editorial")
2. **Copy the component code** from this guide
3. **Gather data:** Studios, testimonials, hours
4. **Update `page.tsx`** to use new components
5. **Test on phone** (use `npm run dev` + real device or Chrome DevTools)
6. **Tweak colors/spacing** to match your vibe
7. **Deploy** to staging server for client review

**Estimated time:** 10–15 hours of focused coding.

If you get stuck on Framer Motion animation or scroll behavior, ask Claude Code with the specific section + error message. It'll be faster than debugging alone.

---

_Implementation guide by Lisa_  
_For Haan's Dance Connexions homepage redesign_  
_Feb 2026_
