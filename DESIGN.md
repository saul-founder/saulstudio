# Saul Studio — Design Notes

Living notes about design decisions and Tailwind Plus conventions used in this project. Update as we learn.

## Stack

- **CSS Framework:** Tailwind CSS v4
- **Component Source:** Tailwind Plus Marketing-v4 (local: `~/tailwind/marketing-v4/react/`)
- **Interactive Primitives:** Headless UI v2
- **Icons:** Heroicons v2
- **Theme:** next-themes (light/dark via system + manual toggle)
- **Typography Plugin:** @tailwindcss/typography for prose blocks

## Principle: stay close to Tailwind Plus

- Build sections 1:1 from TP source files whenever possible
- When a TP block needs adaptation, prefer composing patterns that already exist in *other* TP blocks over inventing new patterns
- When user-specific content diverges from the TP structure (extra subtitle, fewer buttons), adapt — but keep deviations noted in section comments
- No custom SVGs or icons if Heroicons or a TP block already has what's needed

## Dark Mode

- Always ship `dark:` variants from the TP **light-mode source** — never copy the dark-only variants (which hardcode gray-900 etc. without light fallbacks)
- Every section must toggle cleanly between light and dark
- Verified toggle sections: Hero, Smart Emails features, Next up, Why-CTA (dark panel), Newsletter

## Spacing between sections (Tailwind Plus implicit rule)

TP default per block: `py-24 sm:py-32` (96px / 128px). That padding assumes the block is used **standalone** on a page.

When **stacking multiple blocks**, the cumulative bottom-of-one-plus-top-of-next becomes excessive. TP's own `page-examples/landing-pages/` files demonstrate selective reduction.

### Applied spacing hierarchy (home page)

| Block | Padding | Rationale |
|---|---|---|
| Hero | `py-24 sm:py-32 lg:py-40` | Full — primary focus |
| 08 CTA "What we build" (text-only intermediate) | `py-16 sm:py-20` | Reduced — interstitial text CTA, not full focus |
| Smart Emails (main product feature) | `py-24 sm:py-32` | Full — primary product showcase |
| Next up (teaser) | `py-16 sm:py-24` | Reduced — secondary importance |
| Why Saul Studio (dark panel CTA) | `py-24 sm:py-32` outer | Full — emphasis moment |
| Newsletter (closing CTA) | `py-16 sm:py-24` | Reduced — tail of page |

### Rule of thumb

- **Hero / primary product blocks / emphasis blocks:** default `py-24 sm:py-32` (or Hero's `lg:py-40`)
- **Interstitial text CTAs / teasers / closing blocks:** `py-16 sm:py-20` or `py-16 sm:py-24`

## Responsive image swap

Hero uses two `<img>` tags with visibility classes to swap between desktop (≥lg) and mobile/tablet (<lg) images:

```tsx
<img src="/images/women_01.webp" className="... hidden lg:block" />
<img src="/images/women_012.webp" className="... block lg:hidden" />
```

Breakpoint: `lg` = 1024px. This is standard Tailwind responsive pattern, used throughout TP.

## Brand-specific deviations from TP (document each)

| Deviation | Where | Why |
|---|---|---|
| Gradient text span on "enterprise-grade" (`bg-linear-to-r from-indigo-400 to-fuchsia-600 bg-clip-text text-transparent`) | Hero headline | Brand accent on key word — not in TP hero blocks |
| `smartemails.app` eyebrow with `ArrowTopRightOnSquareIcon` (external link) | Smart Emails section | Brand-specific — linking to companion app |
| 08 CTA with added subtitle `<p>` between h2 and buttons | "What we build" | TP 08 has only h2; added subtitle pattern borrowed from cta-sections/04 |
| Logo img swap in SiteHeader (`dark:hidden` / `not-dark:hidden` on two `<img>`) | Header brand | Brand-specific asset swap for light/dark |
| Multi-paragraph body in cta-sections/03 ("Why Saul Studio?") | Why Saul Studio CTA | TP 03 has single p; we use 3 paragraphs for pacing |

## Images directory

`/public/images/`:
- `logo-dark.webp` / `logo-light.webp` — brand logos (swap by theme)
- `women_01.webp` — Hero desktop image
- `women_012.webp` — Hero mobile/tablet image
- `dark-project-app-screenshot.png` — Smart Emails feature screenshot (dark UI of the editor)

## Never-list

Things we decided NOT to do:

- ❌ No country flag icons in language switcher (that's Flowbite-convention, not TP; use `GlobeAltIcon`)
- ❌ No copy-pasting dark-only TP variants (always use light base + `dark:` prefixes)
- ❌ No custom-built dark mode script (use `next-themes`)
- ❌ No decisions without asking — when in doubt, ask
