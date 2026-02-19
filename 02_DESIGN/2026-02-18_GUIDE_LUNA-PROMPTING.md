# Luna's K-Pop & Dance Image Generation Guide

**Last Updated:** 2026-02-18  
**Status:** Active Reference Document  
**Purpose:** Consolidated learnings from Grok image generation tests for dance studio website

---

## CORE PRINCIPLE

**Controlled darkness with strategic reveals. Power through restraint. Mystery through subtraction.**

K-pop cool is NOT about brightness or friendliness. It's about **commanding presence in darkness** — what's hidden is as important as what's revealed.

---

## THE COOL vs. DORKY DIFFERENTIAL

### Visual Element Mapping

| Element | COOL (Target) | DORKY (Avoid) | Why It Matters |
|---|---|---|---|
| **Lighting** | High contrast, colored RGB, directional, crushed blacks | Flat, overhead fluorescent, even wash | Darkness = mystique; Flatness = approachable |
| **Expression** | No smile, heavy-lidded gaze, jaw set, bored confidence | Grinning, wide eyes, raised brows, friendly | Smile collapses "fierce" into "friendly" |
| **Muscle Tension** | Engaged, held, visible | Relaxed, limp, uncertain | Tension reads as power and control |
| **Pose** | Asymmetric, off-axis (15-30° torso rotation), wide stance (shoulder-width+) | Square to camera, arms at sides, feet together | Asymmetry = dynamic; Square = static |
| **Hand Position** | On hips, behind head, at waist — deliberate | Limp at sides, uncertain | Hands communicate confidence |
| **Outfit Material** | Faux leather, PU plastic (high-sheen), reflective | Cotton, matte, soft | Sheen catches colored light = luxury |
| **Outfit Color** | All-black monochrome or coordinated dark palette | Bright colors, pastels | Black = edge; Bright = casual |
| **Outfit Style** | Crop top + oversized/baggy bottoms, platform boots | Standard casual, uniform fit | Contrast creates visual interest |
| **Hair** | Coordinated styling (pigtails, twin-tails) with color variation | Random individual styles, all same color | Coordination signals professionalism |
| **Formation** | V-shape / inverted triangle with depth layers | Flat line, evenly spaced, all same Z-depth | Depth = dimensional; Flat = 2D poster |
| **Camera Angle** | Low (15-20° below eye level), shooting upward | Eye-level or above | Low angle = power/dominance |
| **Makeup** | Smoky/darkened eyes, matte skin, enhanced contouring | Dewy skin, bright eyes, natural makeup | Matte reads more controlled; Dewy = soft |
| **Coordination** | Themed but individually varied — group unity with personality | Identical clones or completely random | Balance professional + unique |
| **Atmosphere** | Nocturnal, nightclub/concert stage, coiled tension | Daylight, classroom, relaxed | Environment sets emotional tone |
| **Background** | Dark void with accent lighting | Visible room clutter, walls, furniture | Dark void = isolation/focus; Clutter = distraction |

---

## PHRASE MAPPING: What Triggers What

### DARKNESS & MYSTERY (Use These)
- "Crushed blacks"
- "Dark void background"
- "Strategic light reveals"
- "High contrast"
- "Shadowed negative space"
- "Moody"
- "Nocturnal"
- "70%+ of frame dark"

**AVOID:** "bright," "cheerful," "well-lit," "visible," "sunny," "warm light"

### ATTITUDE & CONFIDENCE (Use These)
- "Commanding"
- "Fierce"
- "Unapologetic"
- "Bored confidence"
- "Magnetic charisma"
- "Controlled power"
- "Held energy"
- "Peak intensity"

**AVOID:** "fun," "playful," "happy," "cheerful," "cute," "sweet," "friendly"

### BODY & MOVEMENT (Use These)
- "Sharp lines"
- "Held tension"
- "Engaged muscles"
- "Asymmetric poses"
- "Wide stances"
- "Off-axis torsos"
- "Precise movement"
- "Synchronized perfection"
- "Mid-choreography"

**AVOID:** "relaxed," "casual," "dancing," "having fun," "easy-going," "loose"

### EXPRESSIONS & FACES (Use These)
- "No smile"
- "Heavy-lidded gaze"
- "Jaw set"
- "Intense eye contact"
- "Direct to camera"
- "Appraising look"

**AVOID:** "bright smiles," "laughing," "cheerful expression," "friendly," "grinning"

### MATERIALS & TEXTURES (Use These)
- "Faux leather"
- "High-sheen PU"
- "Reflective surfaces"
- "Sleek"
- "Sheen catches light"

**AVOID:** "cotton," "soft fabric," "comfortable," "casual wear"

### LIGHTING SETUP (Use These)
- "RGB bars"
- "Directional"
- "Concert lighting"
- "Neon accents"
- "Colored gels"
- "Spotlight"
- "Split-tone bisexual lighting" (technical term: magenta/pink + cyan/blue)

**AVOID:** "even lighting," "fluorescent," "natural light," "soft light," "ambient"

### GROUPING & FORMATION (Use These)
- "Synchronized"
- "Coordinated formation"
- "V-shape"
- "Inverted triangle"
- "Depth layers"
- "Precision"
- "Themed but varied"

**AVOID:** "loosely arranged," "casual group," "candid," "random"

---

## STANDARD PROMPT TEMPLATE

Use this structure for consistent quality:

```
[GROUP SIZE] confident K-pop dancers in [SPECIFIC FORMATION], 
mid-choreography with [ATTITUDE/ENERGY].

STYLING: [SPECIFIC GARMENTS], high-sheen materials (leather/PU), 
[HAIR DETAILS with coordination], platform boots. Professional stage styling.

LIGHTING: Dramatic directional [RGB COLORS]. High contrast with crushed 
blacks, strategic light reveals on bodies. Dark void background with 
[ACCENT LIGHTS]. Nocturnal stage atmosphere.

EXPRESSIONS: No smiles. Heavy-lidded, confident gazes. Jaw set, 
controlled confidence. Visible muscle tension.

COMPOSITION: [SPECIFIC FORMATION] with depth layers. Low camera angle 
(15-20° below eye level) shooting upward. Wide stances, asymmetric torsos, 
off-axis positioning. Hands positioned deliberately.

ATMOSPHERE: Concert/nightclub stage energy. Coiled tension at peak freeze. 
Controlled precision. Unapologetically commanding.

PHOTOGRAPHY: Concert/editorial hybrid, cinematic color grading, crushed 
blacks with saturated RGB accents, shallow depth of field.
```

---

## TESTED PROMPTS

### 1. Single Dancer (K-Pop, LED Background)

**Status:** ✅ WORKING WELL

```
16-year-old East Asian girl in trendy K-pop outfit (oversized hoodie, 
crop top, high-waisted pants, sneakers), mid-iconic dance pose. Focused, 
powerful expression. Vibrant neon LED backdrop with dynamic color gradients 
(purples, cyans, magentas), studio lighting, high-energy contemporary 
photography, aspirational and modern.
```

**Results:** Professional K-pop vibes, good attitude, LED lighting captured well  
**Iterations:** Added color specifics (purples, cyans, magentas) after first attempt was too plain

---

### 2. Group Dance (5 Dancers, V-Formation)

**Status:** ✅ EXCELLENT

```
Five confident K-pop dancers in synchronized V-formation, mid-choreography 
with sharp, powerful movements. They exude fierce, commanding presence with 
held muscle tension and bored confidence.

STYLING: All-black monochrome—sleek faux-leather crop tops and oversized 
coated cargo pants, chunky platform boots, coordinated twin-tail hairstyles 
with subtle color accents (center: blonde-pink, flanks: dark with color streaks). 
Professional stage styling.

LIGHTING: Dramatic directional RGB stage lighting (cyan overhead, magenta-pink 
left spill, green accents). High contrast with crushed blacks, strategic light 
reveals sculpting arms/shoulders. Dark void background with neon bars framing 
the subjects. Moody, nightlife atmosphere.

EXPRESSIONS: No smiles. Heavy-lidded, appraising gazes with direct eye contact. 
Jaw set, confident. Visible muscle engagement.

COMPOSITION: Inverted V-formation with depth layering (front-center focal point, 
mid-flanks, back-depth). Low-angle camera (15-20° below eye level) shooting upward. 
Wide stances beyond shoulder-width. Off-axis torsos (15-30° rotation). Hands on 
hips, behind heads—deliberate positioning.

ATMOSPHERE: Concert stage/nightclub hybrid. Coiled tension at peak movement freeze. 
Aggressive femininity with controlled precision. Professional production—not casual, 
unapologetically commanding.

PHOTOGRAPHY: Concert/editorial hybrid, cinematic color grading, crushed blacks with 
saturated RGB accents, shallow depth of field.
```

**Results:** Professional music video quality, nailed attitude, expressions perfect  
**Key Success Factors:** Specific formation, RGB color details, no-smile directive, material specificity

---

## COMMON FAILURES & FIXES

### FAILURE #1: Too Casual / "Dorky"
**Symptoms:** Girls look friendly, approachable, "having fun" instead of commanding  
**Root Causes:**
- Using "playful," "fun," "cheerful," "bright smiles"
- Soft, even lighting instead of dramatic contrast
- Casual outfit descriptions

**Fix:**
- Replace "playful practice vibe" with "fierce," "commanding," "unapologetic"
- Remove all smile references
- Specify "crushed blacks," "high contrast," "dark void"
- Name exact materials: "faux leather," "high-sheen PU"

---

### FAILURE #2: Too Plain / Washed Out
**Symptoms:** Images lack drama, lighting is dull, no neon pop, looks generic  
**Root Causes:**
- Generic color descriptions ("bright background")
- No specific RGB colors
- Missing material shine/reflectivity

**Fix:**
- Specify exact RGB colors: "cyan overhead," "magenta-pink spill," "green accents"
- Add "reflective surfaces," "high-sheen"
- Include "neon," "glow," "spotlight"

---

### FAILURE #3: Wrong Expressions
**Symptoms:** Too many smiles, friendly energy, not fierce enough  
**Root Causes:**
- AI defaults to "approachable" when not explicitly directed
- Not specifying "no smile"

**Fix:**
- ALWAYS include: "No smiles"
- Add: "Heavy-lidded," "jaw set," "bored confidence"
- Specify: "Direct eye contact," "intense gaze"

---

### FAILURE #4: Flat Composition
**Symptoms:** All dancers at same depth, looks like a line-up photo  
**Root Causes:**
- Not specifying formation clearly
- Missing camera angle direction

**Fix:**
- Name specific formation: "V-shape," "inverted triangle," "depth layers"
- Specify camera angle: "Low-angle camera (15-20° below eye level) shooting upward"
- Include: "Depth layering (front-center, mid-flanks, back-depth)"

---

## BEST PRACTICES

### 1. Specificity > Vagueness
✅ "Faux-leather crop top and oversized coated cargo pants"  
❌ "Trendy outfit"

✅ "Twin-tail hairstyles with subtle color accents (center: blonde-pink, flanks: dark with streaks)"  
❌ "Coordinated hair"

### 2. Negative Direction Matters
✅ "No smiles. Heavy-lidded gaze. Jaw set."  
❌ "Confident expression" (AI guesses and defaults to smile)

### 3. Technical Language Works
✅ "Crushed blacks," "split-tone bisexual lighting," "depth of field," "shallow DOF"  
❌ "Nice lighting," "pretty colors"

### 4. Avoid Redundancy
✅ "Fierce, commanding presence with held muscle tension"  
❌ "Fierce, energetic, dynamic, powerful, strong, intense"

### 5. Context Sets Tone
✅ "Concert stage/nightclub hybrid"  
❌ "Dance studio"  
(Changing context from "studio" to "stage" automatically elevates energy)

### 6. Material + Lighting = Luxury
✅ "High-sheen PU fabric" + "RGB spotlight" = reads as expensive  
❌ "Cotton" + "soft light" = reads as casual

### 7. Formation + Camera Angle = Dominance
✅ Low-angle + V-formation = subjects look imposing  
❌ Eye-level + flat line = subjects look approachable

---

## GROK WORKFLOW NOTES

### Browser Relay Issues Encountered
- **Long prompts timeout:** Text input over ~200 words causes 20s timeout
- **Solution:** Break into shorter chunks OR have user manually paste
- **Workaround:** Keep prompts to 150-200 words max OR use copy-paste method

### What Works Well
- Navigation to pages
- Clicking buttons (after fix to service worker)
- Screenshots
- Short text input

### Best Practice
1. User pastes prompt manually (most reliable)
2. Sam monitors via screenshots
3. Luna iterates based on results

---

## VIDEO GENERATION FOR STUDIO INTERIORS

### Tools Tested for Interior-to-Video

**Kling AI** ⭐ RECOMMENDED
- Status: ✅ BEST PERFORMER (tested)
- Strengths: Excellent mirror handling, smooth camera motion, professional output
- Handles mirrors well with proper prompting
- Pricing: $6.99/month (Standard plan) = 660 credits, 33 videos/month
- Features: 1080p, brand watermark removal, commercial use rights
- Best for: Studio interiors, reliable and affordable
- Note: Use "safe prompt" approach when framing shots

**Google Veo 3.1** ⭐ EXCELLENT ALTERNATIVE
- Status: ✅ VERY CAPABLE (access via Google subscription)
- Strengths: Handles mirrors well if prompted correctly, high quality output
- Bonus: 1000 free AI credits included with subscription
- Best for: Testing, unlimited experimentation before paid usage
- Mirror handling: Requires proper prompting (see section below)
- Recommendation: Use free credits first, then evaluate if paid upgrades needed

**Luma AI**
- Status: ⚠️ GOOD but problematic with mirrors
- Strengths: Smooth camera motion, cinematic output
- Issue: Makes "massive mistakes" with mirrored walls — AI gets confused by reflections
- Best for: Studio spaces WITHOUT heavy mirrors (or with mirror-specific prompting)

**PixVerse**
- Status: ✅ CAPABLE for studio interiors
- Strengths: Good camera motion, interior consistency, preserves space design
- Mirror handling: Stable with mirrors
- Best for: Alternative option if others unavailable

**Not Recommended**
- ArchiVinci: ❌ Too expensive
- RenderAI: ❌ Requires pro account, sketch-focused

---

### MIRROR HANDLING IN VIDEO GENERATION (CRITICAL)

**Which tools handle mirrors well:**
- ✅ Kling AI: EXCELLENT (with safe prompting)
- ✅ Google Veo 3.1: EXCELLENT (with proper prompting)
- ⚠️ Luma AI: PROBLEMATIC (avoidable with explicit framing)
- ✅ PixVerse: STABLE

**Problem with Luma AI:**
When processing studio images with full-length mirrors, the AI struggles because:
- Reflections confuse spatial depth calculation
- Mirror doubles create ambiguity in 3D scene understanding
- Can generate weird artifacts or distortions in reflected areas

---

### PROMPTING FOR MIRRORED STUDIO SPACES

**Kling AI (SAFE PROMPT METHOD)**
The critical rule: **Only move the camera within visible space. Never ask AI to guess what's behind walls or outside the frame.**

SAFE camera movements (use these):
- ✅ Dolly forward/backward (moves closer to or away from visible space)
- ✅ Dolly left/right (slides across the visible room)
- ✅ Pan up/down (reveals more of ceiling or floor without hallucinating)
- ✅ Pan left/right (rotates view within the visible frame)
- ✅ Slow zoom in/out (magnifies or pulls back from visible space)

UNSAFE camera movements (avoid these):
- ❌ Orbit/circle (forces AI to imagine what's behind walls/out of frame)
- ❌ Backward dolly through walls (asks AI to guess what's behind)
- ❌ Moving beyond the visible perimeter (hallucination required)
- ❌ Crane up to see above ceiling (not in original photo)
- ❌ Crane down below floor level (not in original photo)

**Safe Prompt Template:**

```
Professional dance studio interior video. 

CAMERA MOVEMENT: Slow dolly forward through the center of the room. 
Keep movement within the visible space of the photograph. 
Do NOT move or rotate the camera to reveal spaces outside the original frame.

PRESERVE: Everything visible in the original image stays exactly as shown — 
mirrors, ceiling design (red, lime green, cream), floor, columns, lighting.

MOTION: Smooth, deliberate, forward-facing movement only. 
No orbiting, no looking behind walls, no hallucinated spaces.

FOCUS: Wooden dance floor, warm ambient lighting, professional architecture.

DURATION: 4 seconds
OUTPUT: Professional, clean, no artifacts or hallucinations
```

**Google Veo 3.1 (WITH PROPER PROMPTING)**
Explicitly state mirror preservation:

```
Professional dance studio cinematic walkthrough. 

CAMERA MOVEMENT: Smooth dolly-in with subtle pan. Maintain spatial continuity.

MIRRORS: The full-length mirrors on the right wall are architectural elements. 
Keep their reflections exactly as they appear. Do not add or modify reflected content. 
Treat mirrors as fixed, passive surfaces.

ARCHITECTURE: Showcase the colorful ceiling design (red, lime green, cream), 
wooden floor, warm ambient lighting, structural elements. 
Movement should feel natural and professional.

OUTPUT: 4-second video, clean camera motion, no mirror artifacts.
```

**For Luma AI (if you must use it with mirrors):**

```
Professional dance studio walkthrough. Slow dolly-in from center of room.

MIRRORS: Full-length mirrors on right wall should NOT be the focus. 
Treat them as a static reflective surface — preserve their current appearance. 
Do not generate new reflections or distort the existing reflections.

CAMERA MOVEMENT: Smooth forward motion, focus on floor and ceiling elements.

LIGHTING: Preserve existing warm ambient lighting.

Duration: 4 seconds. No mirror artifacts or distortions.
```

**Recommendation:**
- **Use Kling AI first** (best mirror handling + affordable)
- **Use Google Veo 3.1 for variety** (free credits available)
- **Avoid Luma AI for mirrored spaces** (too many artifacts)

---

### The Golden Rule: Stay Within the Frame

**Principle:** AI video generation works best when you only ask it to animate what's already visible in the source image. Any camera movement that would require the AI to "imagine" spaces outside the original frame creates hallucinations, distortions, and errors.

**Why this matters:**
- When a wall blocks a room's corner in the original photo, AI doesn't know what's there
- If you ask camera to orbit behind that wall, AI guesses (often incorrectly)
- Mirrors compound this by creating false depth cues
- Forcing hallucination = artifacts, broken architecture, visual errors

**The Fix: Constrain All Movement**

Every camera move should stay within the visible boundaries of the uploaded image.

**SAFE Movement Examples:**

1. **Slow Dolly Forward** (depth into the room)
```
Start at back of room → move camera forward toward viewer
Visible: All elements get larger as camera approaches
Risk: NONE (no hallucination needed)
```

2. **Lateral Dolly** (slide left/right)
```
Start at center → slide camera left or right smoothly
Visible: Room elements shift position but stay visible
Risk: NONE (no hallucination needed)
```

3. **Slow Pan Up** (reveal ceiling)
```
Start looking forward → tilt camera upward
Visible: Reveals more ceiling detail without creating new space
Risk: LOW (only extending vertically to what's partially visible)
```

4. **Pan Right** (rotate view)
```
Start center → rotate camera right to see more of right wall
Visible: What's already in the peripheral vision becomes center
Risk: NONE (no hallucination needed)
```

5. **Gentle Zoom** (magnify or pull back)
```
Start at medium distance → zoom in or zoom out
Visible: Same elements, just larger or smaller
Risk: NONE (no hallucination needed)
```

**DANGEROUS Movement Examples (Avoid):**

1. **Orbit/Circle** (rotate around a point)
```
Requires AI to imagine: What's behind the walls you can't see
Result: Hallucinations, broken architecture, mirror artifacts
Risk: VERY HIGH
```

2. **Move Backward Through a Wall**
```
Requires AI to imagine: What's on the other side of the wall
Result: Wall distortion, impossible geometry
Risk: VERY HIGH
```

3. **Crane/Vertical Lift Beyond Ceiling**
```
Requires AI to imagine: What's above the room (roof, structure)
Result: Distortion, impossible geometry
Risk: VERY HIGH
```

4. **Reveal Behind-the-Wall Space**
```
Requires AI to imagine: Entire room layout you didn't photograph
Result: Complete hallucination
Risk: EXTREME
```

---

### Recommended Studio Video Approach

**Best Practice for Your Studio:**

1. **Take photo from center of room** (maximum visible space)
2. **Use only dolly (forward/backward/left/right) and pan (rotate) movements**
3. **Avoid orbit, crane, and any movement that goes off-camera**
4. **Use Kling AI or Google Veo 3.1** (both handle this well when prompted correctly)
5. **Explicit prompt:** "Keep all movement within the visible frame. Do not hallucinate or imagine spaces outside the original photograph."

**Example: Your Studio A**
- Photo shows: Floor, 2 walls, columns, mirrors, ceiling, lighting
- Safe movements: Forward dolly, left/right dolly, pans
- Unsafe: Orbiting to see behind walls, camera movement beyond the room's edge

---

## FUTURE IMAGE CONCEPTS TO DEVELOP

### Planned (Not Yet Tested)
- [ ] Instructor teaching a class (energy: welcoming but professional)
- [ ] Beginners learning (energy: aspirational, fun, less fierce)
- [ ] Social/community moment (energy: bonding, laughter, friendship)
- [ ] Studio interior shots (professional, inviting, modern) — with mirror-handling guidance
- [ ] Different dance styles (contemporary, hip-hop, jazz, etc.)
- [ ] Solo male dancer (adapt K-pop framework for male energy)
- [ ] Mixed gender groups (different pose dynamics)

---

## QUICK REFERENCE CHECKLIST

Before generating, verify:

- [ ] **Darkness:** 70%+ of frame should be dark or shadowed
- [ ] **Expressions:** No smiles, heavy-lidded, confident
- [ ] **Poses:** Asymmetric, wide stances, deliberate hand positioning
- [ ] **Materials:** High-sheen, leather/PU, reflective
- [ ] **Lighting:** Specific RGB colors, high contrast, crushed blacks
- [ ] **Formation:** Depth layers, not flat line
- [ ] **Camera Angle:** Low (15-20° below eye level)
- [ ] **Atmosphere:** Nocturnal, stage/nightclub energy, not casual
- [ ] **Coordination:** Themed but individually varied

---

## OPTIMAL WORKFLOW FOR HAAN'S STUDIO VIDEOS

**Your Toolkit:**
1. **Google Veo 3.1** (1000 free credits) — PRIMARY for testing & building library
2. **Kling AI** ($6.99/month, 33 videos) — BACKUP & professional fallback
3. **Grok/Imagine** (for AI-generated dancers) — Separate workflow

**Recommended Process:**

### Phase 1: Build Studio Interior Library (Using Free Credits)
1. Use Google Veo 3.1 with your studio photos
2. Generate 5-10 different camera movements (dolly, pan, orbit, vertical reveals)
3. Save the best versions
4. Use "safe prompt" method for mirror handling
5. Cost: FREE (using your 1000 credits)

### Phase 2: Production Videos (Using Kling AI)
1. Once you've proven the style with Veo 3.1
2. Use Kling AI for final/polished versions
3. Watermark-free output for website
4. Cost: ~$6.99/month for 33 videos

### Phase 3: Combine with Video Editing
1. Stack 3-5 short videos (3-5 seconds each) into longer sequences
2. Add music, transitions, text overlays
3. Use as website background, hero section, embedded videos
4. Create 15-30 second showcase reels

**Budget Summary:**
- Testing & exploration: FREE (Veo 3.1 credits)
- Professional production: $6.99/month (Kling AI)
- Total: Under $7/month for unlimited studio videos

---

## NOTES FOR LUNA

**Your Role:** Extract precise visual language from reference images. Test, fail, iterate. Each prompt should build on learnings from previous attempts.

**Your Strength:** You understand the difference between "approachable" and "commanding." Use this consistently.

**Your Growth Area:** Material specificity and technical lighting terminology. Keep learning.

**Your Consistency Checker:** If the output has smiles, bright friendliness, or flat composition — the prompt needs a rewrite. It's not Grok's fault; it's the prompt.

---

## IMAGE GENERATION TOOLS TESTED

### For K-Pop Dancer Images

**Grok (Recommend)**
- Status: ✅ BEST for K-pop
- Strengths: Diverse individualized faces, sharp attitude, natural variations, professional aesthetic
- Output quality: High fidelity, convincing
- Best for: All K-pop dancer concepts

**Nano Banana Pro (Google Gemini)**
- Status: ❌ NOT RECOMMENDED for K-pop
- Weaknesses: Duplicate/similar faces, lacks individual variation, reads as "AI generated," weaker attitude/expression
- Not suitable for: K-pop scenarios requiring face diversity
- Use case: Graphics, promotional images, alternative asset generation only

**Bottom line for K-pop:** Continue using Grok. Nano Banana Pro doesn't match the quality.

---

## VERSIONING

| Version | Date | Changes |
|---------|------|---------|
| 1.1 | 2026-02-18 | Added video generation tools (Kling AI, Veo 3.1, Luma AI). Mirror handling guide. Safe camera movement principles. Updated with test results. |
| 1.0 | 2026-02-18 | Initial framework based on single dancer + group dance tests. Core principle: controlled darkness + strategic reveals. Phrase mapping complete. Template tested and working. |

