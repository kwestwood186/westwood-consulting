# Westwood Consulting — Style Guide

**Direction:** Modern (Option B). Charcoal + sage. Aimed at mid-career professionals. Calm, current, approachable. No frills.

---

## Color Palette

| Role | Name | Hex | Use |
|---|---|---|---|
| Primary | Charcoal | `#2D2D2D` | Body text, primary headings, logo mark |
| Accent | Sage | `#8FA68E` | Buttons, links, highlights, CTA backgrounds |
| Surface | Off-white | `#F5F5F2` | Page background |
| Surface alt | Pure white | `#FFFFFF` | Cards, content blocks |
| Muted | Slate green | `#6B7A6E` | Subheadings, secondary text, captions |
| Border | Hairline gray | `#E5E5E2` | Dividers, card borders (0.5–1px) |
| Success | Sage dark | `#5F7A5F` | Form success states |
| Danger | Muted red | `#A33A2A` | Form errors, warnings |

**Rules:**
- Never use pure black (`#000`). Use Charcoal `#2D2D2D`.
- Maximum two color accents per page (charcoal + sage). Slate green is supporting only.
- Sage is the **only** CTA color. Don't dilute it.

## Typography

**Font stack (system fonts — no external requests, faster page load, free):**

```
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

| Element | Size | Weight | Line height | Color |
|---|---|---|---|---|
| H1 | 2.5rem (40px) | 600 | 1.2 | Charcoal |
| H2 | 1.75rem (28px) | 600 | 1.3 | Charcoal |
| H3 | 1.25rem (20px) | 600 | 1.4 | Charcoal |
| Body | 1.0625rem (17px) | 400 | 1.7 | Charcoal |
| Small / caption | 0.875rem (14px) | 400 | 1.5 | Slate green |
| Eyebrow / label | 0.75rem (12px) | 600 | 1.0, letter-spacing 0.1em, UPPERCASE | Slate green |

**Rules:**
- Sentence case for all headings. No title case. No ALL CAPS except eyebrows/labels.
- Maximum content width for prose: 65ch. Don't let lines run wider — kills readability.
- Never use weight 700+. Looks aggressive.

## Logo

**Wordmark:**
- Square mark "W" in charcoal `#2D2D2D`, white text, 6px corner radius
- Set alongside "Westwood" (16px, weight 500) with "CONSULTING" eyebrow underneath (10px, letter-spacing 2px, slate green)

**Minimum size:** 28px tall for the W mark. Don't go smaller.
**Clear space:** Equal to the height of the W mark on all sides.
**Don't:** Stretch, recolor (other than allowed palette), add effects, rotate.

## Layout

- **Max content width:** 1100px, centered
- **Section padding (vertical):** 80px desktop, 48px mobile
- **Section padding (horizontal):** 24px minimum
- **Grid gap:** 24px standard, 16px tight, 40px loose
- **Card padding:** 24–32px

## Components

**Buttons**

Primary:
```
background: #8FA68E; color: #FFFFFF; padding: 12px 24px;
border: none; border-radius: 6px; font-weight: 500; font-size: 1rem;
transition: background 0.15s ease;
```
Hover: `background: #7A917A;`

Secondary:
```
background: transparent; color: #2D2D2D; border: 1px solid #2D2D2D;
padding: 11px 23px; border-radius: 6px; font-weight: 500;
```

**Cards**
- White background, 1px border `#E5E5E2`, 8px radius
- No shadows. Borders only.
- Padding: 28px

**Links (in body text)**
- Color: `#5F7A5F` (sage dark), underlined
- Hover: charcoal, underline remains

## Voice & Tone

- Direct. No fluff. No corporate speak.
- "You'll learn how to negotiate" — not "We empower professionals to maximize their compensation potential."
- Confidence without arrogance. Coach voice, not guru voice.
- Use second person ("you") throughout.
- Short sentences. One idea per sentence where possible.

## Don'ts

- No stock photos of people in suits shaking hands.
- No gradients. No drop shadows. No animations beyond hover transitions.
- No social proof testimonials with fake names or stock headshots. If you don't have real ones yet, leave that section out.
- No "as featured in" without actual features.
