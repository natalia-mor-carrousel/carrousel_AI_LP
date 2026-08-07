# Carrousel LP — Project Guide for Claude

This file is loaded automatically by Claude Code every session. Keep it up to date.

---

## Project

Landing page for Carrousel.ai, Natalia's AI consulting practice. Built with Next.js 14 App Router, TypeScript, Tailwind (utilities only), Framer Motion. No backend yet — static pages only.

**Important:** Natalia is not a developer. She will describe what she wants visually; translate that into code without asking her to describe implementation details.

---

## Design System

All tokens live in `src/app/globals.css`. Never hardcode colors, font sizes, spacing, or radii — always use CSS custom properties.

### Colors
```
--color-fg: #37474F          ← dark; used for card/prominent borders
--color-fg-muted: #5c6b72
--color-fg-faint: #79868c
--color-bg: #FAFAF7          ← cream background (page background)
--color-border-soft: #d8dbdc ← subtle borders inside cards, dividers
--color-accent-yellow: #FFD966
--color-accent-blue: #4DA6D2
```

### Typography
```
--text-hero: 700 58px/1.08 Space Grotesk
--text-h2:   700 34px/1.2  Space Grotesk
--text-h3:   700 24px/1.2  Space Grotesk
--text-h4:   700 18px/1.3  Space Grotesk
--text-body-lg: 400 19px/1.6 Inter
--text-body-md: 400 15px/1.55 Inter
--text-body-sm: 400 14px/1.5  Inter
--text-eyebrow: 600 13px/1    Inter  ← used for labels, uppercase, tracking 0.04em
```

### Spacing
```
--space-1: 8px   --space-2: 14px  --space-3: 18px  --space-4: 24px
--space-5: 32px  --space-6: 48px  --space-7: 64px  --space-8: 100px
```

### Border & Radius
```
--border-width: 1.5px
--radius-sm: 4px      ← inputs, buttons inside cards
--radius-md: 8px      ← stat cards
--radius-pill: 100px  ← pill buttons, tags
```

---

## Card Pattern (CRITICAL)

Cards on this site have a distinct offset-shadow style. Always apply all three properties together:

```css
border: var(--border-width) solid var(--color-fg);   /* dark border */
border-radius: 6px;                                   /* rounded corners */
box-shadow: var(--shadow-offset-yellow);              /* or --shadow-offset-blue */
```

Shadow tokens:
```
--shadow-offset-yellow: 4px 4px 0 var(--color-accent-yellow)
--shadow-offset-blue:   4px 4px 0 var(--color-accent-blue)
--shadow-offset-yellow-sm: 3px 3px 0 var(--color-accent-yellow)
--shadow-offset-blue-sm:   3px 3px 0 var(--color-accent-blue)
```

Radius by card type:
- Standalone cards (quiz, info blocks): `border-radius: 6px`
- Stat/metric cards: `border-radius: 8px` (`var(--radius-md)`)
- Buttons: `border-radius: var(--radius-sm)` (4px)
- Pill buttons/tags: `border-radius: var(--radius-pill)` (100px)

**The CSS box-shadow follows the border-radius automatically — do not add border-radius to the shadow separately.**

Background inside cards is always `var(--color-bg)` (cream), never white.

---

## Component Conventions

- Dividers inside cards: `border-bottom: var(--border-width) solid var(--color-border-soft)`
- Section padding: `padding: var(--space-8) var(--space-5)` with `borderTop: var(--border-width) solid var(--color-border-soft)`
- Inner content max-width: `maxWidth: 860` (single-column sections) or `maxWidth: 1200` (grid sections)
- Eyebrow labels: `font: var(--text-eyebrow); textTransform: uppercase; letterSpacing: 0.04em; color: var(--color-fg-faint)`
- Animations: `initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}`

---

## Known Issues / Setup Notes

- `.bin` symlink issue: if dev server fails to start, run `rm -rf node_modules/.bin && npm install`
- Cal.com booking link is stored in `src/lib/constants.ts`
- Contact email: `src/lib/constants.ts` → `CONTACT_EMAIL`
