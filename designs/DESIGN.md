---
name: Nocturne & Silver
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#cebdff'
  on-secondary: '#381385'
  secondary-container: '#4f319c'
  on-secondary-container: '#bea8ff'
  tertiary: '#d2bbff'
  on-tertiary: '#3f008e'
  tertiary-container: '#a476ff'
  on-tertiary-container: '#36007d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#e8ddff'
  secondary-fixed-dim: '#cebdff'
  on-secondary-fixed: '#21005e'
  on-secondary-fixed-variant: '#4f319c'
  tertiary-fixed: '#eaddff'
  tertiary-fixed-dim: '#d2bbff'
  on-tertiary-fixed: '#25005a'
  on-tertiary-fixed-variant: '#5a00c6'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 84px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: 0em
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '300'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.015em
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 4rem
  margin-tablet: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system establishes an ultra-refined, editorial digital gallery environment tailored specifically for realistic black-and-white portraiture. Rooted in contemporary minimalism and classical curation, the interface operates as a serene, museum-grade sanctuary where negative space acts as structural breathing room rather than emptiness.

The emotional tone is quiet, intellectual, and reverent. Visitors are invited into a focused, low-noise contemplative space that foregrounds tonal subtleties, fine charcoal lines, and delicate graphite textures without competing chrome or garish decorative cues. 

The aesthetic synthesizes high-contrast editorial publishing with contemporary atmospheric depth: expansive dark canvas planes, razor-thin structural borders, frosted dark glass surfaces, and calculated micro-accents of incandescent violet to signal curated touchpoints and high-priority interactions.

## Colors

The palette operates in strict service of the artist’s monochrome artwork, prioritizing deep chromatic blacks over neutral gray values to produce a luminous, velvet-like spatial backdrop.

- **Background Layers:**
  - Base Void: `#090A0F` (deep near-black with cool obsidian undertone)
  - Surface Mid: `#0D0E15` (panel and container ground)
  - Surface Elevated: `#12131D` (cards, floating sheets, elevated modal surfaces)
- **Borders & Dividers:**
  - Hairline Muted: `#222433` (subtle grid boundaries, framing rules)
  - Hairline Active: `#3B3F58` (interactive borders, active focus indicators)
- **Typography:**
  - Display & Headlines: `#F3F4F6` (luminous off-white with soft glare resistance)
  - Body & Reading: `#E5E7EB` (neutral high-legibility parchment silver)
  - Captions & Curatorial Metadata: `#9CA3AF` (receding mid-gray for secondary specs)
- **Chromatic Accents:**
  - Violet Accent: `#8B5CF6` (primary key actions, VIP booking, WhatsApp commission inquiries)
  - Luminous Lilac: `#A78BFA` (focus rings, subtle backlight halos, micro-tags)
  - Deep Amethyst: `#7C3AED` (pressed states, dense interactive fills)

Accents are deployed sparingly, never exceeding 5% of the total visual area to maintain the solemnity of the monochrome collection.

## Typography

The typographic hierarchy balances classical fine-art publishing with functional modern clarity:

- **Playfair Display** provides dramatic editorial presence for collection titles, exhibition headers, and artist statements. Set with generous line heights and slight negative tracking on large scales to emulate high-end monograph title pages.
- **Manrope** delivers precision, neutral balance, and effortless legibility across dense provenance logs, artwork dimensions, acquisition notes, and contact interfaces.
- **Micro-labels and Curatorial Badges** are tracked widely (`0.08em` to `0.12em`) in all-caps to evoke archival cataloging standards and gallery wall placards.

## Layout & Spacing

The layout is grounded in a 12-column responsive fluid grid designed around rhythmic asymmetric tension and exhibition pacing.

- **Desktop (≥1200px):** 12-column grid with `4rem` outer canvas margins and `1.5rem` gutters. Content containers max out at 1440px to preserve comfortable viewing angles. Generous vertical section offsets of `6rem` to `10rem` allow every piece of portraiture to be engaged individually without peripheral visual bleeding.
- **Tablet (768px – 1199px):** 8-column grid with `2rem` outer margins. Artwork displays collapse into single- or balanced dual-column arrangements.
- **Mobile (<768px):** 4-column fluid stack with `1.25rem` outer margins. Grid structures switch to unified vertical narratives, retaining generous top/bottom card separations to replicate walking through sequential gallery rooms.

## Elevation & Depth

Spatial hierarchy avoids artificial skeuomorphism, relying instead on surface translucency, delicate hairlines, and ambient violet illumination.

- **Surface Tiers:**
  - *Tier 0 (Floor):* Pure `#090A0F`, anchoring the viewport.
  - *Tier 1 (Panels):* `#0D0E15` with a 1px continuous hairline of `#222433`.
  - *Tier 2 (Floating Portfolios & Modals):* `#12131D` resting above the floor, supported by an ultra-diffused shadow: `0 24px 48px -12px rgba(0, 0, 0, 0.75), 0 0 24px 0 rgba(139, 92, 246, 0.04)`.
- **Glassmorphism:** Navigation ribbons and floating curation trays apply `rgba(13, 14, 21, 0.72)` background fills with `20px` backdrop blur (`backdrop-filter: blur(20px) -webkit-backdrop-blur: 20px`) bounded by a subtle `rgba(255, 255, 255, 0.06)` perimeter stroke.
- **Interactive Depth:** Hover states on portrait cards drop the surrounding background luminescence while emitting an ethereal, 0-opacity-to-15-opacity radial halo of `#7C3AED` beneath the framed work.

## Shapes

The design system adopts a deliberate, architectural shape language (Level 1: Soft). 

All standard interactive containers, cards, and modal dialogs use tight `0.25rem` (4px) radii, giving corners a precise, hand-cut archival presentation paper feel. Pill and circular shapes are restricted strictly to status badges, floating social trigger buttons, and curatorial medium pills to create deliberate, calibrated contrast against the grid-bound rectangular artwork containers.

## Components

### Glassmorphism Navigation Header
- Fixed at the top edge with `h-18` (72px) height.
- Background: `rgba(9, 10, 15, 0.75)` with `24px` backdrop blur and a `1px` bottom border of `#222433`.
- Brand signature positioned left; curatorial sections centered; high-priority action button ("Inquire / WhatsApp") anchored right.

### Gallery Artwork Cards
- Aspect ratios strictly locked to standard drawing formats (e.g., 3:4, 4:5, or 1:1).
- Framing uses a subtle internal `1px` border of `#222433` inside `#0D0E15`.
- Image presentation: Ultra-smooth transform transitions (`transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1)`). On hover, images scale gently (`scale-103`) with a contrast micro-boost.
- Caption Reveal: Captions slide up from the base with a subtle gradient backdrop (`rgba(9, 10, 15, 0.9)`), revealing title, medium, dimensions, and year in `Manrope` `body-sm` and `label-sm`.

### Buttons & Interactive CTAs
- **Primary Action (Acquisition / Direct WhatsApp):**
  - Solid `#8B5CF6` background, `#FFFFFF` typography (`label-md`), `4px` corner radius.
  - Hover state shifts to `#7C3AED` with an accompanying subtle violet glow (`0 0 16px rgba(167, 139, 250, 0.35)`).
- **Secondary Action (View Provenance, Download Dossier):**
  - Transparent ground, `1px` border of `#3B3F58`, `#E5E7EB` typography.
  - Hover triggers border shift to `#A78BFA` and typography transition to `#F3F4F6`.

### Museum-Grade Metadata Badges
- Displayed alongside single works and series overviews.
- Inline-flex containers with `0.25rem` radius, `px-2.5 py-1`, styled with background `#12131D` and border `1px solid #222433`.
- Content formatted in uppercase `label-sm` (`#9CA3AF`) highlighting technical mediums (e.g., "CHARCOAL ON ARCHES 300GSM", "ORIGINAL WORK", "PRIVATE COLLECTION").

### Curatorial Contact & Acquisition Form
- Dark minimal field design: Input wells filled with `#0D0E15`, framed in `1px solid #222433`.
- Typography: `#F3F4F6` text with `#9CA3AF` floating labels that lift on focus.
- Active input state: `#A78BFA` hairline border accompanied by a faint `0 0 0 1px #8B5CF6` inset trace.

### Editorial Stat Counters & Exhibition Index
- Used for retrospective timelines, exhibitions list, and monograph milestones.
- Numeric counters rendered in `Playfair Display` (`headline-lg`) paired with `Manrope` (`label-md`) descriptions below, divided by hairline `#222433` rules.