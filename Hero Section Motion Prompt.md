# HELIXAR — DESIGN SYSTEM
## Site 01: helixar.pro (The Facility)
### Version 0.1 — April 2026

---

## 0. PHILOSOPHY

This is not a website. It is a **classified document made interactive.**

Every design decision asks: *does this feel like something important happened here?*

The white is not clean — it is **sterile with intent.** The typography is not elegant — it is **institutional.** The spacing is not minimal — it is **deliberate.** A visitor should feel the weight of the place before they read a single word.

The psychological contract with the visitor:
> "You are not being sold to. You are being briefed."

---

## 1. IMAGE SYSTEM

Eight images have been designated as the visual language of the facility. Each is assigned a role — not decorative, but **functional** within the narrative.

---

### 1.1 Image Assignments

#### `Art_Pin.jpg` — The Spine Figure
**Role: Primary specimen reference / opening motif**

A translucent human body viewed from the side. The skull encased in a black helmet-shell. A mechanical spine — vertebrae replaced by dark organic-mechanical barbs — runs the full length of the back. The body is pale, near-translucent. Subcutaneous tubing visible.

**Where it lives:**
- Section 02 (The Charter) — large, half-bleed right side, cropped to torso. The text lives in the white space to the left.
- Used as the visual anchor for "what is being built inside this facility." Not labeled. Not explained. The viewer draws their own conclusion.

**Crop instruction:** Crop from mid-thigh to crown. Portrait orientation. Let the spine dominate the right third of the image. Never show it at full width — always contain it, as if it is a specimen behind glass.

**Tone treatment:** No filter. The grey background and pale body already match the facility's white walls. If needed, very slight desaturation (-5%) to push it toward clinical.

---

#### `Concept_Tech_Pin.jpg` — The Cloaked Machine
**Role: HLX-002 specimen portrait / The Infiltrator**

A figure in a dark cloak. Where a head should be: a black rectangular machine — circuit boards, white rods of light, cables. Monochromatic. The cloak obscures the body entirely. It looks like something that has dressed itself in human convention but cannot fully commit.

**Where it lives:**
- Section 05 (Specimens Preview) — specimen card for HLX-002, The Infiltrator
- `/labs` dossier header for HLX-002

**Crop instruction:** Portrait, tight on the machine-head and upper cloak. Crop below the draping fabric where it becomes purely geometric. The two white light-rods become almost abstract — good.

**Tone treatment:** Push contrast slightly (+10). The figure should feel like it is emerging from darkness rather than standing against a grey background. Vignette the edges inward.

---

#### `Image_from_Viktor.jpg` — The Glass Anatomy
**Role: Structural detail / facility wall texture reference**

An extreme close-up of a transparent mechanical shoulder and torso. Mesh-like synthetic muscle tissue stretched over an internal armature. Actuator pistons. Lattice structure. Photographed against pure black — the subject glows.

**Where it lives:**
- Section 04 (The Three Disciplines) — used as a background texture tile, desaturated to near-white, opacity 4–6%. Gives the white section a barely-perceptible depth. Viewer won't consciously notice it. They'll just feel like the wall has texture.
- Alternatively: Section 03 (Clock Speed Table) as a right-side bleed image, cropped to show only the lattice structure — abstract enough to not distract from the data.

**Crop instruction:** For texture use: full image, desaturated, tiled or stretched. For editorial use: crop to the shoulder joint area — the most mechanical, least obviously anatomical section.

**Tone treatment:** Full desaturation to pure grey. Invert if used as texture (light lines on white bg at low opacity).

---

#### `Futuristic_Architecture_Pin.jpg` — The Astronaut at the Panel
**Role: HLX-001 specimen portrait / The Distributor**

A human face — eyes closed, serene, female — encased in a white articulated helmet. The visor is open. To the right: a white technical panel covered in measurement markings, warning labels, panel screws. Red accent on the helmet — the only non-white/grey element in the image. 

This is the most "facility" image of the set. It looks like it was taken inside the building. The character looks like she is connected to a system — not controlling it, part of it.

**Where it lives:**
- Section 05 (Specimens Preview) — specimen card for HLX-001, The Distributor
- Hero section — secondary visual element, right-panel alongside the knight video, at 30% opacity as a faded reference image. Like a case file photo pinned to a wall behind the primary subject.
- `/labs` dossier header for HLX-001

**Crop instruction:** Portrait. Crop to face + helmet + partial panel on the right. The panel's measurement marks and labels are important — they signal precision and documentation.

**Tone treatment:** None. This image is already the facility aesthetic. The white background, clinical light, red accent — it is already the design system.

---

#### `Typography_Art_Pin.jpg` — The Mech Knight
**Role: Primary hero specimen / site mascot / Veo video source**

The mechanical knight. Full chrome. Exposed chest cavity with internal mechanics. Pauldrons with rivets. Head bowed, facing away. Monochromatic grey on grey.

This is the facility's primary subject. The one in the tube. The one the whole site is built around.

**Where it lives:**
- Section 01 (Hero) — the Veo-generated video version, contained in a specimen frame
- Favicon reference (stylized from the chest cavity cross-section shape)
- Background watermark on Section 08 (Access) — large, faded, near-invisible

**Crop instruction:** Never crop. Always show full figure or use the video. If static image is needed before video is ready: 3/4 view, slight right offset, with coordinate markers added in CSS overlay.

**Tone treatment:** Already perfect. Do not touch.

---

#### `Statue_Pin.jpg` — The Marble God with Circuits
**Role: Section divider / philosophical anchor**

A classical marble bust — David-like, Renaissance curls, noble profile — with the right eye socket and cheek replaced by exposed circuit boards, LED matrix, wires. The contrast of ancient and machine is the point. The marble is cracked around the technology as if the hardware grew out of the stone.

**Where it lives:**
- Section 02 (The Charter) — as the LEFT-side image while Art_Pin.jpg runs right. Creates a tension: the old ideal of intelligence (marble) versus the new apparatus of it (the spine figure). The charter text sits between them.
- OR: as the sole opening image for `/labs` entry — the world's understanding of intelligence vs what the facility is actually building.

**Crop instruction:** Tight on the face and circuit area. Landscape crop — show from chest to crown, centered on the circuit-eye. The curled marble hair and the cables should both be visible. This is the civilisational tension in one frame.

**Tone treatment:** Slight warm desaturation — pull the image toward the grey-brown of aged marble. The LED matrix green stays as the only color accent. This image is allowed to have color because it represents the old world's intrusion of the new.

---

#### `God_Quote_Image.jpg` — The Data Head
**Role: HLX-003 classified specimen / Section 04 illustration**

A human head and neck — partially rendered, partially outline. The skull is replaced by a large black mechanical visor/screen device showing what appears to be terminal output or UI data. Neon-colored data streams (coral, yellow, cyan) pour downward from the machine like digital blood. The head itself is a schematic, not a photograph.

**Where it lives:**
- Section 04 (The Three Disciplines) — "Build" discipline illustration. The data streams represent the output of the build process.
- `/labs` — HLX-003 classified card. Show only the outline/schematic portions with the data streams. The device is classified. This image becomes the redacted evidence.

**Crop instruction:** Portrait, centered on the head and descending data streams. Crop below the chin so the streams extend to the bottom edge of the frame — gives the sense of overflow, excess output.

**Tone treatment:** This is the only image that retains color on the main site. The neon streams are the single moment of color in an otherwise white/grey facility — used ONCE, sparingly, to signal that something is being built that is larger than the container. If it reads as too loud: desaturate the streams by 40%, keep only the coral channel (matches #FF5E2C accent).

---

#### `Mainframe_Synframe_07.jpg` — The OBSK Figure
**Role: Section 06 case file illustration / Labs entry figure**

A black synthetic humanoid body — glossy, high-contrast. Where the head should be: a large black monitor/screen assembly, tilted, with red dot matrix display at the crown. Cables trailing from the neck. A barcode on the lower body. Technical text in the upper right corner labeling the specimen "OBSK." The figure stands in profile, facing right.

**Where it lives:**
- Section 06 (Case Files) — sits beside the redacted client file as "the system that was deployed." The barcode on its body mirrors the redacted client information in the file.
- `/labs` — secondary specimen display, or as the entry illustration for the Hall. Its barcode and clinical labeling make it feel like a processed specimen ready for deployment.

**Crop instruction:** Full figure, portrait. Include the OBSK label text in the upper right — it adds to the document/classification aesthetic. The barcode on the hip is important.

**Tone treatment:** None needed. The image is already maximum contrast. If anything: very subtle desaturation to pull the "red" dot matrix toward the Helixar orange (#FF5E2C range).

---

## 2. TYPOGRAPHY

### 2.1 Font Stack

```css
/* Display — authority, weight, institution */
--font-display: 'Cormorant Garamond', 'Cormorant', Georgia, serif;

/* Body — precision, readability, neutral */  
--font-body: 'Geist', 'DM Sans', system-ui, sans-serif;

/* Data / Labels / Code — clinical, machine-readable */
--font-mono: 'Geist Mono', 'JetBrains Mono', 'Courier New', monospace;
```

**Install via next/font:**
```js
import { Geist, Geist_Mono } from 'next/font/google'
// Cormorant Garamond via Google Fonts or self-hosted
```

### 2.2 Type Scale

| Token | Size | Weight | Font | Line Height | Usage |
|-------|------|--------|------|-------------|-------|
| `--text-display-xl` | clamp(64px, 8vw, 120px) | 300 | Display | 0.9 | Hero heading |
| `--text-display-lg` | clamp(40px, 5vw, 72px) | 300 | Display | 1.0 | Section headings |
| `--text-display-md` | clamp(28px, 3.5vw, 48px) | 400 | Display | 1.1 | Sub-headings |
| `--text-display-italic` | same as parent | 400 italic | Display | — | Emphasis within display |
| `--text-body-lg` | 18px | 400 | Body | 1.7 | Lead paragraphs |
| `--text-body-md` | 15px | 400 | Body | 1.6 | Body copy |
| `--text-label` | 11px | 500 | Mono | 1.4 | Section IDs, metadata |
| `--text-data` | 13px | 400 | Mono | 1.5 | Numbers, coordinates, status |
| `--text-micro` | 10px | 400 | Mono | 1.4 | Stamps, footers, classifications |

### 2.3 Type Rules

- **Display headings are never bold.** Weight 300 or 400 only. The size carries the authority — adding weight makes it aggressive, not institutional.
- **Section IDs are always mono, always uppercase, always letter-spaced.** Format: `01 — SECTION NAME`
- **Numbers in data contexts are always mono.** A percentage in body copy is mono. A price is mono. The time savings number is mono.
- **Italic is used exactly once per section** — in the display heading, to signal an aside or the name of something.
- **Line lengths:** Display: unconstrained. Body: max 65ch. Labels: unconstrained.

---

## 3. COLOR

### 3.1 Palette

```css
:root {
  /* Facility — Site 01 */
  --color-white: #FFFFFF;
  --color-wall: #F8F7F5;        /* warm white — the wall */
  --color-paper: #F2F0EC;       /* aged paper — secondary surfaces */
  --color-border: #E0DDD8;      /* hairline borders */
  --color-ink: #1A1916;         /* primary text — warm black */
  --color-ink-secondary: #6B6860; /* secondary text — aged */
  --color-ink-tertiary: #A8A49C;  /* metadata, coordinates */
  --color-signal: #FF5E2C;      /* the only signal color — used once per section max */
  --color-signal-dim: rgba(255, 94, 44, 0.15); /* signal as background tint */
  
  /* Dark room — Section 08 only */
  --color-void: #0A0908;        /* near-black with warmth */
  --color-void-text: #E8E4DC;   /* text on dark */
}

[data-theme="labs"] {
  /* Specimen Hall — Site 02 */
  --color-white: #0A0908;
  --color-wall: #111009;
  --color-paper: #1A1816;
  --color-border: #2A2824;
  --color-ink: #E8E4DC;
  --color-ink-secondary: #8A8680;
  --color-ink-tertiary: #504E4A;
  --color-signal: #FF5E2C;
  /* Labs also gets warm amber and muted teal from the collage refs */
  --color-labs-warm: #C4A882;
  --color-labs-accent: #7CB9A8;
}
```

### 3.2 Color Rules

- **#FF5E2C appears once per section maximum.** Never as a background. Only as: text accent, underline, dot/indicator, or border highlight.
- **No gradients on Site 01.** Every surface is flat. The images provide all the depth.
- **White is the dominant color.** 80% of any given page viewport should be white or near-white.
- **Black is ink, not chrome.** Text is `--color-ink` (warm black) not pure `#000000`.
- **The border is hairline.** `0.5px solid var(--color-border)`. Never 1px. Never colored.

---

## 4. SPACING & LAYOUT

### 4.1 Grid

```css
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 120px);
}

.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}
```

**Column assignments by section:**

| Section | Left content | Right content |
|---------|-------------|---------------|
| Hero | 7 cols — text + frame | 5 cols — supplementary |
| Charter | 5 cols — copy | 7 cols — Art_Pin image |
| Disciplines | 12 cols — full width, internal 3-col |
| Specimens | 4+4+4 cols — three specimen cards |
| Case Files | 6 cols — file | 6 cols — image |

### 4.2 Spacing Scale

```css
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  24px;
--space-6:  32px;
--space-7:  48px;
--space-8:  64px;
--space-9:  96px;
--space-10: 128px;
--space-11: 192px;
--space-12: 256px;
```

**Section vertical rhythm:** Every section has `padding-top: var(--space-11)` and `padding-bottom: var(--space-11)`. This is non-negotiable — the whitespace is what makes it feel like a lab, not a landing page.

### 4.3 The Specimen Frame

The hero video and any primary image exist inside a **specimen frame** — not a simple border-radius card. This is a custom component.

```
┌─ [HLX-001] ──────────────────── [ACTIVE ●] ─┐
│                                               │
│                                               │
│              [content]                        │
│                                               │
│                                               │
└─ [28.6139°N 77.2090°E] ─── [v0.1.2026.04] ──┘
```

CSS implementation:
```css
.specimen-frame {
  position: relative;
  border: 0.5px solid var(--color-border);
  
  /* Corner brackets — CSS only, no extra elements */
  &::before, &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
  }
  /* Four corner L-brackets via pseudo elements + box-shadow trick */
}

.specimen-frame__label-top {
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  font: var(--text-micro);
  font-family: var(--font-mono);
  color: var(--color-ink-tertiary);
  padding: 0 var(--space-4);
  transform: translateY(-50%);
  background: var(--color-white);
}
```

---

## 5. MOTION

### 5.1 Principles

- **Everything enters once.** No loops, no idle animations (except the knight video and specimen status pulses).
- **Enter from rest.** Nothing slides in from off-screen. Elements fade up from opacity 0 + translateY(12px). Subtle. Like something becoming visible under a light, not flying in.
- **Scroll triggers are 20% in viewport.** Elements wait until the user is clearly reading that section, then reveal.
- **Duration is slow.** 0.6s–1.2s. This is not a SaaS product with snappy micro-interactions. It is a document coming into focus.

### 5.2 Token Reference

```js
// Framer Motion variants — use these everywhere
export const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export const staggerChildren = {
  visible: { transition: { staggerChildren: 0.12 } }
}

export const specimenPulse = {
  // For status indicators — active specimens
  animate: {
    opacity: [1, 0.4, 1],
    transition: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
  }
}

export const counterUp = {
  // For clock speed numbers
  // Use Framer Motion's useMotionValue + useTransform
  // Count from 0 to target over 1.2s on scroll enter
}
```

### 5.3 Lenis Config

```js
const lenis = new Lenis({
  duration: 1.4,          // slower than default — weighted, journal-like
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
})
```

---

## 6. COMPONENT SPECIFICATIONS

### 6.1 Navigation

```
[HELIXAR]          Overview   Research   Specimens   [Request Access →]
```

- Height: 64px
- Background: `var(--color-white)` with `backdrop-filter: blur(12px)` — sticky
- Logo: wordmark only, `--font-display`, weight 300, tracking 0.05em, 18px
- Nav links: `--font-mono`, `--text-micro` size, uppercase, tracking 0.12em
- CTA button: `border: 0.5px solid var(--color-ink)`, no fill, hover: fill `var(--color-ink)`, text inverts. `--font-mono`, 11px.
- Border bottom: `0.5px solid var(--color-border)` — appears on scroll past 100px

### 6.2 Section ID Label

Appears above every section heading.

```
01 — THE BRIEFING
```

```css
.section-id {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  color: var(--color-ink-tertiary);
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}
```

### 6.3 Specimen Card

```
┌─────────────────────┐
│ HLX-001             │
│ [portrait image]    │
│                     │
│ THE DISTRIBUTOR     │
│ Content Automation  │
│                     │
│ ● ACTIVE            │
│ [Enter dossier →]   │
└─────────────────────┘
```

```css
.specimen-card {
  border: 0.5px solid var(--color-border);
  padding: var(--space-5);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  /* Hover: border becomes signal color */
  transition: border-color 0.4s ease;
  
  &:hover {
    border-color: var(--color-signal);
  }
  
  &:hover .specimen-card__image {
    transform: scale(1.02);
    transition: transform 0.6s ease;
  }
}

.specimen-card__id {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-signal);
  letter-spacing: 0.1em;
  margin-bottom: var(--space-3);
}

.specimen-card__name {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 300;
  color: var(--color-ink);
  margin-bottom: var(--space-2);
}

.specimen-card__status {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--color-ink-secondary);
  margin-top: var(--space-5);
}

.status-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  
  &.active { background: #22C55E; }
  &.stabilizing { background: #F59E0B; }
  &.classified { background: var(--color-ink-tertiary); }
}
```

### 6.4 Clock Speed Table

```
                    LEGACY          HELIXAR
Diagnose            4–8 weeks       3 days
Design              4–8 weeks       2 days  
Build               3–9 months      7 days
Deploy              2–4 months      3 days
Next vertical       12 months       3 weeks
```

```css
.clock-table {
  font-family: var(--font-mono);
  font-size: 13px;
  width: 100%;
  border-collapse: collapse;
}

.clock-table th {
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-ink-tertiary);
  padding-bottom: var(--space-4);
  text-align: left;
  font-weight: 400;
}

.clock-table th:last-child {
  color: var(--color-signal);   /* Helixar column header in signal */
}

.clock-table td {
  padding: var(--space-3) 0;
  border-top: 0.5px solid var(--color-border);
  color: var(--color-ink-secondary);
}

.clock-table td:last-child {
  color: var(--color-ink);      /* Helixar numbers in full ink */
  font-weight: 500;
}

/* Animated counter on scroll */
.clock-table td[data-counter] {
  /* JS: count from 0 to value over 1.2s */
}
```

### 6.5 Case File Component

```
┌─ CASE FILE ──────────────────── [REDACTED] ─┐
│ CLIENT: [████████████]                       │
│ VERTICAL: B2B SaaS                           │
│ ENGAGEMENT START: 2026.01                    │
│                                              │
│ OUTCOME AT DAY 90:                           │
│ Meetings booked        +340%                 │
│ Founder time saved     16h/week              │
│ Pipeline generated     $180,000              │
│                                              │
│ "────────────────────────────────────"       │
│  [TESTIMONIAL QUOTE — 1 sentence]            │
└──────────────────────────────────────────────┘
```

### 6.6 Access Section (Section 08)

Full viewport height. Background: `var(--color-void)`. 

Layout: Centered vertically and horizontally.

```
[HELIXAR — FACILITY ACCESS]

This facility is accepting intake.
Book a session with Vedant Agarwal, CEO.

            [REQUEST ACCESS →]

            [CLASSIFICATION: PUBLIC]
            [INTAKE FORM REF: HLX-INT-001]
```

The knight image (`Typography_Art_Pin.jpg`) appears at 3% opacity as a full-height background — just barely perceptible, like a watermark.

---

## 7. SECTION-BY-SECTION COPY

### Section 01 — Hero
**File stamp (above video frame):**
`FACILITY: HELIXAR RESEARCH & DEPLOYMENT` / `SUBJECT: HLX-PRIME / STATUS: OPERATIONAL`

**Single line below frame:**
`The agentic consulting firm.`

**Sub-label (mono, small):**
`Diagnose. Build. Deploy. — In weeks, not years.`

---

### Section 02 — The Charter
**Section ID:** `02 — WHAT THIS IS`

**Display heading (Cormorant, weight 300, large):**
`Helixar is the agentic`
`consulting firm.`

**Body (3 sentences max):**
`We identify high-ROI bottlenecks inside B2B businesses, build autonomous agent systems to eliminate them, and deploy those systems across entire industry verticals.`

`What Palantir does for governments at $10M over 7 years — we do for founders at $2,000 over two weeks.`

`Every system we build goes into a library. The next client pays less. Gets more. The compound interest of proof.`

---

### Section 03 — Clock Speed
**Section ID:** `03 — CLOCK SPEED`

**Heading:**
`Speed is the only`
`moat that matters.`

**Sub-copy (mono, small):**
`Legacy consulting will copy the agentic model. We have an 18-month window. Every week counts.`

---

### Section 04 — The Three Disciplines
**Section ID:** `04 — RESEARCH`

**Three columns:**

`DIAGNOSE`
`One call. Three days. We identify the bottleneck worth $10k–$100k/month in your business.`

`BUILD`
`5–10 days. A working autonomous system — not a prototype, not a deck. Running software.`

`DEPLOY`
`2–5 days embedded. The system is live, integrated, and generating results before we leave.`

---

### Section 05 — Specimens
**Section ID:** `05 — ACTIVE SPECIMENS`

**Heading:**
`Currently running`
`in the facility.`

**Sub-copy:**
`Three agents. Each built, tested, and deployed on Helixar's own operations before client release.`

---

### Section 06 — Case Files
**Section ID:** `06 — CASE FILES`

**Heading:**
`The evidence.`

**Sub-copy:**
`Client identities redacted pending authorization. Outcomes verified.`

---

### Section 07 — Pricing
**Section ID:** `07 — ACCESS TIERS`

**Heading:**
`What access costs.`

**Sub-copy:**
`One closed B2B deal attributable to this system covers 6–18 months of engagement cost. The math is intentional.`

---

### Section 08 — Access
**Heading (large, centered, Cormorant):**
`This facility is`
`accepting intake.`

**Sub-copy:**
`Book a session with Vedant Agarwal, CEO and co-founder.`
`First call is 30 minutes. No deck. No pitch. Diagnosis only.`

**Button:**
`REQUEST ACCESS →`

**Stamp below button (mono, micro):**
`INTAKE REF: HLX-INT-001 / CLASSIFICATION: PUBLIC / CAPACITY: LIMITED`

---

## 8. TECHNICAL SPEC

### 8.1 Stack

```
Framework:     Next.js 15 (App Router)
Styling:       Tailwind CSS + CSS custom properties
Animation:     Framer Motion
Scroll:        Lenis
Fonts:         next/font/google (Geist, Geist Mono) + self-hosted Cormorant Garamond
Images:        next/image with priority on hero
Video:         HTML5 <video> tag, CDN-served (Cloudflare R2)
Calendar:      Cal.com embed in modal
Deployment:    Vercel
```

### 8.2 File Structure

```
/app
  /page.tsx                  — helixar.pro (Site 01)
  /labs/page.tsx             — helixar.pro/labs (Site 02)
  /layout.tsx                — shared layout, Lenis init, font load

/components
  /facility                  — Site 01 components
    Nav.tsx
    HeroSection.tsx
    SpecimenFrame.tsx
    CharterSection.tsx
    ClockSpeedTable.tsx
    DisciplinesSection.tsx
    SpecimensPreview.tsx
    CaseFiles.tsx
    PricingTiers.tsx
    AccessSection.tsx
    Footer.tsx
  /labs                      — Site 02 components
    LabsEntry.tsx
    SpecimenGrid.tsx
    SpecimenCard.tsx
    DossierView.tsx
  /shared
    SpecimenFrame.tsx         — frame component used in both
    StatusIndicator.tsx

/styles
  globals.css                — CSS custom properties, base reset
  tokens.css                 — all design tokens

/public
  /images
    Art_Pin.jpg
    Concept_Tech_Pin.jpg
    Image_from_Viktor.jpg
    Futuristic_Architecture_Pin.jpg
    Typography_Art_Pin.jpg
    Statue_Pin.jpg
    God_Quote_Image.jpg
    Mainframe_Synframe_07.jpg
  /video
    knight_hero.mp4           — Veo generated, ~8s loop
```

### 8.3 Performance Rules

- Hero video: autoplay, muted, loop, playsInline. No poster — the first frame is the poster.
- All images: `next/image` with explicit width/height. Art_Pin and Futuristic_Architecture_Pin are `priority`.
- Lenis and Framer Motion: dynamic import with `ssr: false`
- No TypeScript `any`. All specimen data typed.

---

## 9. SPECIMEN DATA SCHEMA

```typescript
interface Specimen {
  id: string;              // "HLX-001"
  name: string;            // "The Distributor"
  classification: string;  // "Content Automation OS"
  status: 'active' | 'stabilizing' | 'classified';
  imageKey: string;        // maps to /public/images/
  description: string;     // one sentence
  capabilities?: string[]; // unlocked on /labs dossier
  buildLog?: BuildEntry[]; // unlocked on /labs dossier
  deployedCount?: number;  // how many clients running this
}

const specimens: Specimen[] = [
  {
    id: 'HLX-001',
    name: 'The Distributor',
    classification: 'Content Automation OS',
    status: 'active',
    imageKey: 'Futuristic_Architecture_Pin',
    description: 'Autonomous LinkedIn, X, and SEO content system. Runs in the founder\'s voice without the founder.',
    deployedCount: 3,
  },
  {
    id: 'HLX-002',
    name: 'The Infiltrator',
    classification: 'Outbound Acquisition Agent',
    status: 'stabilizing',
    imageKey: 'Concept_Tech_Pin',
    description: 'Identifies ICP prospects, sequences DMs and emails, handles replies, books meetings.',
  },
  {
    id: 'HLX-003',
    name: '[REDACTED]',
    classification: 'CLASSIFIED',
    status: 'classified',
    imageKey: 'God_Quote_Image',
    description: 'Access restricted. Clearance required.',
  },
]
```

---

## 10. WHAT NOT TO DO

These are the failure modes to avoid. Check against these before any PR.

- **No purple gradients.** Not one.
- **No Inter or Roboto.** If either appears in the codebase, remove it.
- **No full-width hero background video.** The knight lives in a contained frame, not behind the entire page.
- **No cards with border-radius > 4px.** This is a facility, not a SaaS dashboard.
- **No hover animations faster than 0.3s.** Nothing should snap.
- **No more than one #FF5E2C element visible at once.** Scan each section: if you see two orange things, remove one.
- **No generic "Book a Demo" language.** It is "Request Access." It is "Enter the Hall." It is "Schedule intake." Never "Get Started."
- **No stock photography.** The 8 designated images are the only images on Site 01. Do not supplement with Unsplash.
- **No padding below 48px between sections.** Whitespace is the design.
- **No more than 3 fonts in any single section.** Display, Body, Mono. That is the entire vocabulary.

---

*End of Design System v0.1*
*Next: Begin Windsurf build. Start with `HeroSection.tsx` and `SpecimenFrame.tsx`.*
*Confirm specimen names before building `/labs` — the dossiers are permanent once published.*
