# Content Audit — Facts, Discrepancies, and Items Needing Verification

Audited 2026-08-04 against: the repository, the live site (https://mechatigers10121.com),
and official FIRST event records (frc-events.firstinspires.org/team/10121).

## 1. Facts that agree between repository and live site

The live site is deployed directly from this repository — every section, caption, name, and
link matches. There is no repo↔live drift. (The only functional difference from the *intent*
of the code: the hero "Support Our Team" button uses class `btn-accent`, whose CSS rule exists
only in the unloaded root `style.css`, so it renders unstyled-primary on the live site.)

## 2. Externally confirmed facts (official FIRST event records)

- Team number 10121, official FIRST name **"TMSA MechaTiger"** (site uses "MechaTigers").
- School: Triangle Math and Science Academy; location: **Apex, North Carolina**. Neither
  appears anywhere on the site except indirectly via the contact email domain.
- **Rookie year: 2025** (REEFSCAPE). 2025 events: FNC District Wake County, FNC District
  UNC Pembroke — no awards.
- **2026 (REBUILT)**: FNC District Wake County Event #1 — **District Event Finalist**;
  FNC District Wake County Event #2 — **District Event Winner**; qualified for and attended
  the **FIRST North Carolina State Championship** (no awards there).
- Photo evidence agrees: frc1/frc2 banners read "2026 FIRST North Carolina District Wake
  County Event", and the finalist plaque shows the 2026 game "REBUILT".

## 3. Facts on the site that are wrong or contradictory

| Location | Site says | Evidence says |
|---|---|---|
| Robots section header | "Our 2025 REEFSCAPE robots" | The featured achievements and banner photos are from the **2026 REBUILT** season. At least one robot photo likely shows the 2026 robot. Which robot belongs to which season needs team confirmation. |
| `frc2.jpeg` alt text | "…2024 Wake County Event winner banners" | Banners in the photo read **2026**. |
| Gallery caption "Building Arena" (`bulding.png`) | implies arena construction | Photo shows build-season fabrication (miter saw, workshop). |
| Achievements section | Lists only the two 2026 Wake County results, undated | Omits season/year labels, the 2026 State Championship appearance, and all 2025 rookie-season history. A search result also mentions a rookie-season "7th of 32 in Wake County" ranking — **unverified**, do not publish without checking. |

## 4. Needs verification by the team (do not publish without confirmation)

### Robots
- [ ] Robot names (if any) for the 2025 and 2026 machines.
- [ ] Which photo is which robot/season; specs worth publishing (drivetrain, mechanisms).
- [ ] Are there CAD renders or better photos available?

### Achievements
- [ ] Exact phrasing the team wants: "FNC District Wake County Event #2 — District Event
      Winner (2026, REBUILT)" etc.
- [ ] The 520 "HIGH SCORE" scoreboard photo (frc3.jpeg): which event/match? Was 10121 on
      Alliance 1? Without confirmation, caption it generically.
- [ ] 2025 rookie-season results worth listing (ranking claims unverified).
- [ ] THOR offseason event: year, result, correct full event name.

### Leadership
- [ ] All 8 names/roles current for the 2026–27 school year? (Last updated in commit
      "Update site: gallery captions, achievements, leadership" — school years roll over
      in fall; verify before relaunch): Abdul Silawi (President), Savith Srirangam (VP),
      Ejegyz Ylyasova (VP), Vikartha Suresh (Build Lead), Namish Singh (Electrical Lead),
      Rumaysa Khan (Marketing/Finance Lead), Zoya Khan (Outreach — title incomplete?
      "Outreach" vs "Outreach Lead"), Ertugrul Findik (Programming Lead).
- [ ] Mentor/coach names — none listed anywhere. Is S. McKenley (contact email) the coach?
- [ ] Whether leadership should include photos (needs consent for minors).

### Sponsors
- [ ] Robot decals show **NCDPI, AndyMark, Google, NASA**. Which are actual sponsors/grants
      vs. stickers? (NASA and NCDPI grants are common for NC rookie teams.) A sponsors
      section cannot be built without this list and logo permissions.
- [ ] Sponsor tiers / what donations funded.

### Contact & donation
- [ ] Is `smckenley@tmsacademy.org` still the right contact? Should there be a team email?
- [ ] Is the GoFundMe (`gofund.me/8645dbc07`) still active? Do both QR files
      (`gofundme-qr.png` and unused `Screenshot 2025-10-26 145950.png`) point to it?
- [ ] Instagram `@tmsa_frc` — confirm handle still active.
- [ ] Meeting times/location for prospective members — currently absent entirely.

### Team identity & history
- [ ] Preferred public name: "MechaTigers" (site) vs "TMSA MechaTiger" (FIRST registration).
- [ ] Founding story / team history paragraph — none exists.
- [ ] Team size (frc1 shows ~13 members + mentor at an event).
- [ ] Outreach specifics: dates and descriptions for Fall Festival, Club Expo, STEM nights,
      robotics lessons (audiences, frequency, reach numbers if tracked).
