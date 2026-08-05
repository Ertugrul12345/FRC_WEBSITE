# Asset Inventory — MechaTigers 10121 Website

Audited 2026-08-04. Every file in the repository root and `assets/`, with actual content
verified by opening each file. Live site (https://mechatigers10121.com) was fetched and its
content matches this repository exactly — the repo is the deployed source (GitHub Pages, CNAME).

## Code files

| File | Loaded by site? | Notes |
|---|---|---|
| `index.html` | — (is the site) | Single page. References `assets/css/style.css` and `assets/js/main.js` only. Contains an empty `<link rel="preconnect" href="" />` (dead tag). |
| `assets/css/style.css` | ✅ YES | The stylesheet actually served. **Missing the `.btn-accent` rule**, so the hero "Support Our Team" button renders with default `.btn` styling on the live site. |
| `style.css` (root) | ❌ not referenced | Near-identical duplicate but **newer**: contains `.btn-accent` (line 140) which `index.html` uses. Someone edited the root copy instead of the loaded copy. Do not delete until the `.btn-accent` rule is merged into the loaded file (or the redesign supersedes both). |
| `assets/js/main.js` | ✅ YES | Mobile nav toggle, smooth-scroll offset, IntersectionObserver reveal, footer year. |
| `main.js` (root) | ❌ not referenced | Byte-for-byte identical to `assets/js/main.js`. Safe to remove once confirmed nothing external links it. |
| `CNAME` | GitHub Pages | `mechatigers10121.com` |
| `skills-lock.json`, `.claude/`, `.agents/` | ❌ | Tooling files, not site content. Should not be deployed with the site. |

## Brand assets

| File | Size | Used | Content |
|---|---|---|---|
| `logo.png` | 228 KB | ✅ header brand + CSS hero/footer backgrounds | Strong asset: mechanical white/cream tiger head in profile with gear motifs, orange accents, on dark charcoal circle. High enough resolution for hero use. The circular dark background limits use on light surfaces — a transparent/one-color cut would help. |

## Robot photos

| File | Size | Used | Content |
|---|---|---|---|
| `Screenshot 2025-09-28 204841.png` | 1.13 MB | ✅ Robots section | Robot with tall elevator/vertical extrusion frame, exposed wiring, wood base plate, at a TMSA Triangle event space. Phone screenshot, cluttered background (backpacks). Season unconfirmed — see content-needs-verification. |
| `robot2.png` | 1.6 MB | ✅ Robots section | Robot with roller intake, MechaTigers shirt draped on top, sponsor decals visible: **NCDPI, AndyMark, Google, NASA**. TMSA Tigers backdrop. Season unconfirmed. |

## Competition / achievement photos

| File | Size | Used | Content |
|---|---|---|---|
| `frc1.jpeg` | 1.05 MB | ✅ gallery ("Finalist at Wake County Event #1") | Team group photo with medals + finalist trophy; banner reads "2026 FIRST North Carolina District Wake County Event…", plaque shows 2026 game "REBUILT — Uncover The Future". Confirms 2026-season result. |
| `frc2.jpeg` | 843 KB | ✅ gallery ("Wake County Event #2 — Winners") | Full winning-alliance photo (three teams incl. an orange-shirt team). Banners read "WINNER 2026 FIRST North Carolina District Wake County Event #2". **`index.html` alt text wrongly says "2024" banners.** |
| `frc3.jpeg` | 473 KB | ✅ gallery ("Match scoreboard") | Arena screen: Alliance 1 — 520 (HIGH SCORE) vs Alliance 8 — 56. No caption context for which match/event. |
| `competition.png` | 1.45 MB | ✅ gallery ("Competition") | Wide venue shot of a **REEFSCAPE (2025)** field — coral/algae elements and REEFSCAPE banner visible. Good establishing shot; caption is generic. |
| `Screenshot 2025-09-28 205949.png` | 2.46 MB | ✅ gallery ("THOR Event") | Strategy huddle with students from other teams (RotoRaptors 2137 shirts, 4-H shirts). THOR is an NC offseason event. Largest file on the site. |

## Outreach photos

| File | Size | Used | Content |
|---|---|---|---|
| `IMG_4292.jpeg` | 231 KB | ✅ gallery ("Fall Festival") | Outdoor bounce-house booth at "TMSA Apex" fall festival. Photo has a "Galaxy Note20 5G" camera watermark. |
| `IMG_4294.jpeg` | 186 KB | ✅ gallery ("Fall Festival") | Indoor gym "Robot Exhibition" with robot 10121 on floor, whiteboard sign, families watching. Also watermarked. |
| `clubexpo.png` | 884 KB | ✅ gallery ("Club Expo") | Five team members + mentor in gray MechaTigers jerseys at a school expo table. Good jersey/brand shot. |
| `bulding.png` | 1.34 MB | ✅ gallery ("Building Arena") | Three students using a miter saw in the workshop. **Caption "Building Arena" is misleading — this is build-season fabrication.** Filename is misspelled ("bulding"). |

## Donation assets

| File | Size | Used | Content |
|---|---|---|---|
| `gofundme-qr.png` | 11 KB | ✅ contact section | QR code on dark-green background (GoFundMe style). |
| `Screenshot 2025-10-26 145950.png` | 88 KB | ❌ unused | A second QR code, also green-framed. Redundant with `gofundme-qr.png`; verify both encode the same URL before deleting. |

## Unused placeholder files

| File | Size | Content |
|---|---|---|
| `fall-festival-1.jpeg` | 19 KB | Solid navy slide with text "Fall Festival" — a placeholder graphic, not a photo. Unused. |
| `fall-festival-2.jpeg` | 18 KB | Same, blue background. Unused. |

## Performance notes for the redesign

- Five images exceed 1 MB (worst: 2.46 MB screenshot). Total image payload ≈ 10 MB for a
  single-page site. All should be re-exported as responsive WebP/AVIF with `srcset`.
- PNG is the wrong format for the photographic content (`competition.png`, `bulding.png`,
  `clubexpo.png`, `robot2.png`, both screenshots).
- Filenames with spaces ("Screenshot 2025-09-28 204841.png") work but are fragile; rename
  during the rebuild.
- Two photos carry a "Galaxy Note20 5G" camera watermark; crop or re-source if possible.

## Asset gaps (what the redesign will want but doesn't have)

- No clean, uncluttered robot photo (both robot shots have busy backgrounds).
- No CAD renders or screenshots, no wiring/close-up detail shots.
- No individual leadership portraits (leadership is text-only today).
- No sponsor logo files, despite sponsor decals appearing on the robot.
- No transparent-background logo variant.
- No team photo owned by the team alone (frc2 is the whole alliance).
