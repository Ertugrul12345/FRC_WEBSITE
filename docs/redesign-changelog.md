# Redesign Changelog

## 2026-08-04 — "The Build Report" production implementation

Direction A (editorial engineering journal) from `docs/design-direction.md`, implemented
as the production site. Static HTML/CSS/vanilla JS preserved; no framework, no build step;
GitHub Pages + CNAME untouched.

### Files changed

| File | Change |
|---|---|
| `index.html` | Rebuilt around the 10-part narrative (hero → about → robots → results → engineering process → outreach → plates/gallery → leadership → support → contact colophon). All legacy anchor IDs preserved (`#home #about #robots #achievements #outreach #gallery #leadership #contact`) so old deep links still resolve. Added OG meta tags and favicon. |
| `assets/css/style.css` | Replaced with the Build Report system: tokens (paper `#FAF7F2`, ink `#181614`, orange `#E8630A`, steel `#7C8089`), Archivo/Source Serif 4/IBM Plex Mono, 168px marginalia rail, hairline-rule structure, plates with drafting corner ticks, season ledger, fluid type via `clamp()`, `prefers-reduced-motion` support, visible focus states, `scroll-margin-top` for sticky-header anchoring. |
| `assets/js/main.js` | Rewritten: mobile nav, rAF-throttled header condense, IntersectionObserver reveals (`.reveal-armed` gate — content fully visible with JS off), footer year. No dependencies. |
| `style.css` (root) | **Deleted** — unreferenced duplicate. Its only unique rule (`.btn-accent`) died with the old markup. Recoverable from git history. |
| `main.js` (root) | **Deleted** — byte-identical unreferenced duplicate of `assets/js/main.js`. |
| `redesign-preview.html` | Kept as the approved design prototype; safe to delete before deploy if a public preview URL is unwanted. |

### Preserved per constraints

- CNAME / custom domain `mechatigers10121.com`
- Email `smckenley@tmsacademy.org`, Instagram `@tmsa_frc`, GoFundMe `gofund.me/8645dbc07`, QR code
- All existing photography; no generated or stock imagery
- No invented facts: robot names/seasons shown as "to be confirmed" spec slots; results
  limited to the officially recorded FIRST events; no sponsor logos added

### New since the old site

- Scroll World integration point: `#scroll-world-stage` in the hero (`data-scroll-world="reserved"`),
  with the Plate 01 photo as the static fallback that must remain for no-JS/reduced-motion.
- Engineering process section (`#engineering`) covering build, fabrication, electrical,
  programming, strategy — with the two evidence photos that exist; STEM-nights outreach item
  uses an honest labeled placeholder instead of a mislabeled photo.
- Content corrections carried in from the audit: season labels fixed (2026 banners no longer
  called 2024; "2025 REEFSCAPE" no longer applied to 2026 results), "Building Arena" caption
  replaced, school and location now stated.

### Verification performed

- Local server (`python -m http.server 8137`): `index.html` and all 15 referenced local
  assets return 200.
- Every `href="#…"` has a matching `id`; all 8 legacy anchors resolve.
- External links checked live: GoFundMe 200, Instagram 200, Google Fonts CSS 200.
- Static review of breakpoints (375 / 768 / 1440 / 1920): layouts defined at ≤560, ≤640,
  ≤760, ≤820, ≤860, ≤900, ≤1020 px; `overflow-x` guarded on `body`; hero title clamps to
  50px minimum. **No screenshot tooling was available in this session — an eyeball pass in
  a real browser at those widths is still recommended before deploy.**
- No console-touching APIs beyond standard DOM; script is dependency-free and defers all
  behavior to progressive enhancement.

### Still open (see `docs/content-needs-verification.md`)

- Robot names + season designations (spec sheets have reserved "to be confirmed" slots)
- Sponsor list & logo permissions (decals visible: NCDPI, AndyMark, Google, NASA)
- Leadership roster confirmation for the 2026–27 school year
- Meeting times/location for the join-the-team flow
- Image optimization: photos are still the original ~10 MB payload; re-export to
  WebP/AVIF with `srcset` recommended before or shortly after deploy
- Scroll World hero sequence (deliberately not invoked yet)
