# Design Direction — MechaTigers 10121 Website Redesign

Prepared 2026-08-04. Companion documents: `asset-inventory.md` (every file audited),
`content-needs-verification.md` (facts requiring team confirmation before publishing).

## Current-state summary

The existing site is a competent single-page dark template: sticky glass header, radial
orange glows, identical rounded cards for every content type, emoji tiger in the DOM. It is
exactly the "generic startup landing page" the brief rules out. Its real problems:

1. **Every section is the same card.** Robots, achievements, leadership, outreach — all
   identical dark rounded rectangles. Nothing signals what matters most.
2. **The photography is presented apologetically** — small, cropped to 220 px strips,
   captions floating on top. The wins (2026 Wake County banners) are the team's biggest
   asset and are buried in a uniform grid.
3. **Content errors and gaps** (see content-needs-verification.md): wrong season labels,
   missing school/location, no sponsors section despite sponsor decals on the robot, no
   meeting info for prospective members.
4. **~10 MB of unoptimized images** on one page; duplicate CSS/JS at repo root, one of
   which (`style.css`) contains a rule the live page needs (`.btn-accent`).

What the team actually has going for it, design-wise: a genuinely good mechanical-tiger
logo, real banners won in 2026, honest documentary phone photography, and a real school
community. The redesign should amplify those, not paper over them with stock aesthetics.

---

## Direction A — "The Build Report" (editorial engineering journal)

**Central idea.** The website is the team's published engineering record — closer to a
well-designed technical journal or annual report than a landing page. Light paper surfaces,
numbered sections, figure captions, dimension-line details. Every photo is treated as
documentary evidence: "Fig. 04 — Elevator carriage, Wake County Event #1." The aesthetic
authority comes from restraint and precision, the way a good datasheet feels trustworthy.

- **Typography.** Masthead/headings: Archivo (Expanded weights, tight caps) — engineered,
  neutral, free. Body: Source Serif 4 — gives the editorial voice and long-read comfort.
  Annotations, captions, data: IBM Plex Mono. Scale: 12px mono captions → 17px serif body
  → 28/40/64px display steps.
- **Color.** Paper `#FAF7F2`, ink `#181614`, machine orange `#E8630A` (refined from the
  current `#FF8C00` — deeper, less "warning cone"), steel `#8A8F98` for rules and
  secondary text. Orange used only for: links, figure numbers, one rule per section, and
  the donate CTA. Dark is inverted only in the footer ("colophon").
- **Layout & grid.** 12-column grid with a persistent 2-column left margin used for
  section numbers, dates, and marginalia (like a lab notebook's edge column). Asymmetric
  layouts; generous whitespace; hairline rules separate sections instead of background
  color changes.
- **Navigation.** Slim top bar: wordmark left, numbered section links (01 Team, 02 Robots,
  03 Results, 04 Outreach, 05 Support) right, orange "Donate" as the only filled element.
  On scroll it condenses to a hairline-bordered bar. Mobile: full-screen index-page menu,
  numbered like a table of contents.
- **Hero.** Not full-bleed. A masthead: "MECHATIGERS — FRC TEAM 10121, TRIANGLE MATH AND
  SCIENCE ACADEMY, APEX NC" set large in Archivo caps, with the tiger logo as a printed
  emblem, one strong photograph placed as "Plate 1" with caption, and a mono
  line of verified facts (rookie year 2025 · 2026 Wake County Event #2 Winner). Reads
  like the cover of a report the team is proud to sign.
- **Robot photography.** Photos framed on paper with thin ink borders and real figure
  captions; imperfect phone photos become legitimate "field documentation" instead of
  failed hero shots. Optional annotation overlays (thin leader lines pointing to intake,
  elevator, Limelight) — only labeling things that are really there.
- **Achievements.** A season ledger: a typographic table by season (2025 REEFSCAPE — Wake
  County, UNC Pembroke; 2026 REBUILT — Finalist #1, **Winner #2**, State Championship),
  set in mono with the wins in orange. Banner photo sits beside the table as evidence.
  No invented stats, no counters.
- **Gallery.** "Plates" section: mixed-size editorial layout (one full-width, pairs,
  thirds) sequenced chronologically with dated captions, not a uniform crop grid.
- **Leadership.** A masthead-style roster, like a journal's editorial page: role in mono
  caps, name in serif. Works with or without portraits; portraits become passport-style
  squares if added later.
- **Donation & contact.** "Support the team" as a distinct spread: what funding buys
  (registration, parts, travel — real categories), GoFundMe button + QR presented like a
  tear-off slip with a dashed rule. Contact block set like a colophon: email, Instagram,
  school address, meeting info once verified.
- **Animation language.** Almost none, deliberately: subtle reveal of hairline rules
  drawing in, figure captions fading up. No parallax, no glow. Motion respects
  `prefers-reduced-motion` trivially because there's little of it.
- **Mobile.** Single column with the margin column folding above content blocks; tables
  become stacked ledger rows; type scale drops one step. Excellent by nature — it's
  mostly text and figures.
- **Accessibility.** Best of the three: dark ink on paper is ~14:1 contrast; orange is
  reserved for large elements/links with underlines; semantic headings map to the
  numbered sections; figure/figcaption used natively.
- **Risks & performance.** Lightest direction — system of type and rules, few decorative
  assets. Risk: could read as quiet or "school report" to 14-year-olds if the type scale
  is timid; mitigate with genuinely large display sizes and confident photo plates.
  Serif+mono pairing needs discipline to avoid academic mustiness.
- **The aesthetic risk worth taking.** Print artifacts on screen: registration marks,
  a fold hairline, "Vol. 2 — 2026 Season" edition labeling, and a visible baseline grid
  toggle. Done straight-faced, it makes the site feel like a published document no other
  FRC team has.

---

## Direction B — "Match Day" (high-energy competition broadcast)

**Central idea.** The site borrows the visual grammar of an FRC event livestream — bold
lower-thirds, scoreboard numerals, alliance color coding, ticker strips — built from the
team's real results only. Landing on the page should feel like tuning into the middle of
an event where MechaTigers is winning.

- **Typography.** Display: Archivo Black / Archivo Expanded caps, slight italic for
  motion. Data & numerals: IBM Plex Mono (tabular). Body: Barlow Semi Condensed. Big
  jumps in scale: 96–160px numerals for scores and the team number.
- **Color.** Carbon `#0C0C0E`, white, broadcast orange `#FF7A1A` as the sole brand
  accent; alliance red `#ED1C24` / blue `#0066B3` appear **only** as data colors in
  results (as on a real scoreboard), never decoration. No gradients — flat planes and
  hard diagonal cuts (a 4–6° angle system used consistently).
- **Layout & grid.** Full-bleed rows like broadcast segments: hero (live frame), results
  ticker, robot feature, gallery reel, roster, support. A recurring "lower-third" module
  (angled orange tab + white bar) is the universal label device replacing card headers.
- **Navigation.** Broadcast bug: compact fixed bar with the tiger mark and "10121" as a
  scoreboard-style tag top-left; links right; Donate styled as an angled tab. Mobile: a
  full-screen overlay with oversized numbered links.
- **Hero.** Full-bleed crop of the winning-alliance photo (frc2) or venue shot, dark
  scrim, lower-third reading "FRC TEAM 10121 — MECHATIGERS", sub-line "2026 FNC District
  Wake County Event #2 — WINNERS", and a mono ticker beneath cycling verified facts
  (rookie year, events attended, State Championship appearance). CTA pair: "Join the
  team" / "Fund the build".
- **Robot photography.** Presented as "player cards": photo with an angled frame, robot
  season tag (2025 REEFSCAPE / 2026 REBUILT), and a mono spec strip listing only
  confirmed specs. Background clutter cropped aggressively; duotone treatment (carbon +
  orange) as a fallback where backgrounds are too messy.
- **Achievements.** The centerpiece. A scoreboard wall: each result as a large tabular
  row — season, event, result — with "WINNER" rendered like a match banner. The real
  520 HIGH SCORE photo can anchor this section once its context is verified.
- **Gallery.** A horizontal "replay reel" (scroll-snap strip) grouped by event, with
  broadcast-style timestamp captions; falls back to a vertical feed on mobile.
- **Leadership.** Roster treatment: jersey-style rows — role as position abbreviation in
  mono (PRES, VP, BUILD, ELEC, PROG, MKT, OUT), name in condensed caps. Energetic without
  needing portraits.
- **Donation & contact.** "Sponsor the alliance" segment: sponsor logo strip (once the
  list is verified), what funds buy, GoFundMe CTA styled as an angled banner + QR.
  Contact as a bold end-card: email, Instagram, school, meeting times.
- **Animation language.** Purposeful broadcast moves only: lower-thirds slide in once on
  reveal, ticker scrolls slowly, numerals count up once. Everything gated behind
  `prefers-reduced-motion`; no looping decoration.
- **Mobile.** Strong by nature — broadcast graphics are designed for 16:9 legibility;
  rows stack, ticker becomes a static fact line, reel becomes swipeable.
- **Accessibility.** Needs care: white/orange on carbon passes AA at display sizes but
  orange body text does not — orange is never used for body copy; scrims enforce 4.5:1
  over photos; ticker pausable and aria-hidden duplicated as static text.
- **Risks & performance.** Highest energy, highest slop risk: one wrong move (glow,
  gradient, fake stats) tips it into the banned gaming aesthetic. It also leans hard on
  photo quality — aggressive crops and duotone are load-bearing. Ticker/reel JS must
  degrade gracefully. Counter animations are a cliché unless tied to real numbers.
- **The aesthetic risk worth taking.** Commit to the angle system everywhere — section
  boundaries, image frames, buttons all cut at the same 5° — so the whole site feels like
  one continuous broadcast package rather than a template with slanted dividers.

---

## Direction C — "Machined" (premium industrial robotics studio)

**Central idea.** The site as a precision-machined object: dark graphite surfaces, thin
aluminum hairlines, engineering callouts with dimension lines, content composed like a
CAD drawing sheet. The feeling of a serious robotics company's studio site — but honest
about being student-built: the "product" is the robot and the students who machined it.

- **Typography.** Headings/UI: Schibsted Grotesk or Geist (tight, industrial, free).
  Technical labels: JetBrains Mono or Geist Mono with wide letter-spaced caps
  ("ASSEMBLY / 2026-REBUILT / REV B"). Body: same grotesk at text sizes. No serif.
- **Color.** Graphite `#141518`, panel `#1C1E22`, aluminum `#C9CCD1` for hairlines and
  secondary text, white for primary text, machined orange `#F25C05` reserved for
  interactive elements and callout markers. Strictly flat — depth from 1px lines and
  spacing, not shadows or glass.
- **Layout & grid.** Drawing-sheet grid: content panels separated by hairlines with mono
  labels at panel corners (like title blocks). An 8pt spacing system rigorously applied;
  wide margins; sections feel like sheets in a drawing set (SHT 01 — TEAM, SHT 02 —
  ROBOTS…).
- **Navigation.** A title-block header: tiger mark, "MECHATIGERS 10121", and a mono
  metadata line (APEX NC · EST 2025); links as flat mono caps with underline-on-hover;
  Donate as the single orange element. Mobile: right-side sheet drawer.
- **Hero.** Split composition: left, large grotesk statement ("Student-built competition
  robotics. Apex, North Carolina.") over a mono spec block of verified facts; right, the
  robot photo set on a graphite panel with two or three dimension-line callouts pointing
  at real mechanisms. The tiger logo used small and precise, like a maker's mark.
- **Robot photography.** The make-or-break element: photos need dark, clean isolation.
  Current photos would be masked/cut out from their cluttered backgrounds or reshot
  against a dark cloth. Each robot gets a "drawing sheet" panel: photo + title block
  (season, game, drivetrain) + callouts. CAD screenshots would slot in perfectly if the
  team has them.
- **Achievements.** Engraved plate treatment: results as a machined spec table with
  hairline rules; the 2026 Wake County win highlighted as a stamped "WINNER" mark.
  Restrained — credibility over celebration.
- **Gallery.** Contact-sheet grid: uniform dark thumbnails with mono index numbers
  (IMG 001 — WAKE COUNTY #1), opening to full-bleed viewers. The uniformity flatters
  mixed-quality photos.
- **Leadership.** Panel roster with mono role labels and hairline separators; reads like
  an assembly's parts list — appropriate and clean without portraits.
- **Donation & contact.** "Specifications for support": a cost-transparent panel
  (registration, parts, travel) with the GoFundMe CTA as the orange action; QR presented
  in a title-block frame. Contact panel with school, email, Instagram, meeting times.
- **Animation language.** Micro-precision only: callout leader lines draw in (300ms),
  hairlines extend on reveal, hover states shift 1px with an orange tick. Nothing loops.
- **Mobile.** Panels stack cleanly; callouts collapse to numbered dots + a legend list
  below the photo; title blocks become compact headers.
- **Accessibility.** White-on-graphite body passes AAA; aluminum secondary text must stay
  ≥ `#B0B4BA` for AA; callout information duplicated in text; focus states as orange
  rectangles fit the language natively.
- **Risks & performance.** The direction most dependent on assets the team doesn't have
  yet: it demands clean robot photography or CAD renders, and masking current photos is
  real work. Without that, it collapses back into "dark site with lines" — close to the
  current site's genre. Also the most sober direction; risks reading corporate to
  prospective 9th-graders. Performance is excellent (flat surfaces, few images).
- **The aesthetic risk worth taking.** Treat the entire site chrome as a drawing title
  block — every page corner carries sheet number, revision, and date ("SHT 03 / REV B /
  2026-08") — a rigorous conceit that would be instantly memorable to engineers, mentors,
  and sponsors.

---

## Recommendation: Direction A — "The Build Report"

**Why A wins for this specific team:**

1. **It's the only direction the team's real assets can fully power today.** The
   photography is honest documentary phone photography — cluttered pits, gym floors,
   miter saws. Direction C needs studio isolation the team doesn't have; Direction B
   needs aggressive crops and duotones to hide clutter. Direction A *reframes* that same
   photography as field documentation, where imperfection reads as authenticity. The
   figure-caption system also forces the content fixes this audit surfaced (every photo
   gets a real date, event, and season label).

2. **It serves the highest-value audience best.** Students join because friends bring
   them to a meeting; sponsors and grant reviewers, though, will actually read this
   website. An engineering-journal presentation — verified season ledger, named
   mechanisms, cost-transparent support page — is the strongest possible sponsor pitch a
   rookie-plus-one team can make, and no other NC team will look like it.

3. **It's durable and cheap to maintain.** The ledger and plates grow naturally each
   season (add a row, add a plate). A student team inherits this site across leadership
   turnover; a type-and-rules system survives that better than a broadcast package or a
   masking-heavy industrial theme. It is also the lightest and most accessible direction.

4. **It has the clearest identity escape from the current site.** A and the current site
   share nothing; B and C both keep "dark site with orange accents" and risk reading as
   a refinement rather than a statement.

**What to borrow from the others:** B's scoreboard energy belongs in A's results ledger —
the 2026 "WINNER" row set huge in tabular numerals is the one loud moment the journal
needs. C's dimension-line callouts fit A's figure system perfectly for the robot plates.

**Prerequisites before build** (from `content-needs-verification.md`): season labels for
both robots, corrected achievement phrasing, leadership confirmation for 2026–27, the
sponsor list, and meeting info. None block prototyping with placeholders.
