# Changelog

All notable changes to this Slime Rancher 2 guide will be documented in this file.

**Version History:**

- [0.5.0 - Glow-Up Edition (2026-06-15)](#050---2026-06-15---glow-up-edition)
- [0.4.4 - Treasure Hunt Edition (2026-06-15)](#044---2026-06-15---treasure-hunt-edition)
- [0.4.3 - Completionist Edition (2026-06-15)](#043---2026-06-15---completionist-edition)
- [0.4.2 - Blueprint Edition (2026-06-15)](#042---2026-06-15---blueprint-edition)
- [0.4.1 - Radiant Sanctuary Edition (2026-05-11)](#041---2026-05-11---radiant-sanctuary-edition)
- [0.4 - Radiant Sanctuary Edition (2026-04-16)](#04---2026-04-16---radiant-sanctuary-edition)
- [0.3.2 - Shadow Sanitation Edition (2026-01-22)](#032---2026-01-22---shadow-sanitation-edition)
- [0.3.1 - Toys, Trimmings, and Tune-Ups Edition (2025-12-02)](#031---2025-12-02---toys-trimmings-and-tune-ups-edition)
- [0.3 - Steam Edition (2025-11-01)](#03---2025-11-01---steam-edition)
- [0.2.0 - Major Restructure Edition (2025-11-01)](#020---2025-11-01---major-restructure-edition)
- [0.1.2 - Wiki Integration Edition (2025-11-01)](#012---2025-11-01---wiki-integration-edition)
- [0.1.1 - Patch 1.0.3 Update (2025-11-01)](#011---2025-11-01---patch-103-update)
- [0.1 - Initial Release (2025-10-24)](#01---2025-10-24---initial-release)

---

## [0.5.0] - 2026-06-15 - Glow-Up Edition

_A full voice-and-clarity overhaul. The original prose was written with an older model and read stiff and AI-ish; this edition rewrites it into a sharper, wittier take on the same optimization-mogul persona, with light structural emoji and **no em dashes**. Facts, numbers, and tables are preserved exactly. The condensed Steam edition was brought up to the same voice in a follow-up pass so it no longer reads a generation behind the GitHub guide._

### Changed

- **Introduction** (`00-introduction.md`): Rewrote the Rancher's Mindset opener, the three core principles, and every Core Mechanics section (Plort Market, Largos, the Tarr warning, Agitation, Optimal Corral Population) in the new voice. Also **removed the long patch-log block** from the top (six update paragraphs) in favor of a one-line pointer to CHANGELOG.md, so the page opens on guide content instead of a changelog.
- **All 15 chapters** (`01-chapter-01.md` through `04-chapter-15.md`): Voiced each chapter's narrative bookends and strategic prose - openers, Mindset lines, Strategic Priorities, Strategic Notes, Next-Chapter prep, and the Part 1-4 intros. Step-by-step phases, plot tables, costs, and recipes were kept crisp and unchanged.
- **README** (`README.md`): Voiced the About / Philosophy / How-to-Use sections.
- **Appendices** (`appendix-a` through `appendix-m`): Light prose polish on the intro lines; the reference tables themselves were left untouched.
- **Steam edition** (`steam/SECTION-01` through `SECTION-18`): Brought all 18 BBCode sections up to the new voice to match the GitHub guide. Also fixed `SECTION-01-INTRO.txt`, which had grown past Steam's ~8 KB per-section cap (collapsed the six-block patch log to a one-line CHANGELOG pointer), and corrected its structure list from 17 to 18 sections (the appendices are split into Part 1/Part 2). Every section verified under cap, with balanced BBCode, zero em dashes, and all numbers preserved.
- **Final-pass polish:** Reworded four leftover `TBD` cells in the appendix tables (`appendix-d-ranch.md`, `appendix-e-gadgets.md`, `appendix-j-shadow.md`) to read as intentional `Unconfirmed` notes, consistent with the Known Issues disclaimer about unpublished v1.0 prices.
- **Em dashes purged** from every rewritten file, now enforced by a pre-commit grep gate.

### Removed

- **`steam/STEAM-VERSION.md`** - The single-document Markdown copy of the Steam guide duplicated the 18 BBCode `SECTION-*.txt` files and had drifted out of sync (old voice, stale patch block). Removed it and pruned its references from `CLAUDE.md`, `steam/README.md`, `.templates/changelog-entry-template.md`, and the `version-sync.yml` allowlist.

### Files Modified

- `00-introduction.md` - Voice rewrite + removed the top patch-log block + version bump to 0.5.0
- `01-chapter-01.md` through `04-chapter-15.md` - Voice rewrites (narrative / strategic prose)
- `README.md` - Voice rewrite (About / Philosophy / How-to-Use) + version header
- `appendix-a-slimes.md`, `appendix-b-items.md`, `appendix-c-upgrades.md`, `appendix-d-ranch.md`, `appendix-e-gadgets.md`, `appendix-g-treasure.md`, `appendix-k-resources.md` - Intro-line polish (plus an em-dash fix in Appendix G)
- `steam/SECTION-01-INTRO.txt` through `steam/SECTION-18-APPENDICES-2.txt` - Voice rewrite of all 18 BBCode sections; SECTION-01 also fixed for the 8 KB cap (patch-log collapse) and the 17-to-18 section-count list; `steam/STEAM-VERSION.md` removed as a redundant duplicate

---

## [0.4.4] - 2026-06-15 - Treasure Hunt Edition

_Reconciled against reader-supplied MapGenie data (Gordo + treasure-pod pages). Gordo data confirmed accurate (17/17, no changes); four resource pods MapGenie lists but the guide was missing were added, and a long-standing Starlight Strand header miscount was fixed._

### Added

- **Four missing treasure pods** (`appendix-g-treasure.md`), from MapGenie:
  - **Rainbow Fields** - Jellystone (x3), Deep Brine (x2), Strange Diamond (x1): by the Rainbow Fields teleporter, appears after activating the Ember Valley Teleporter.
  - **Ember Valley** - Strange Diamond (x1), Primordy Oil (x3), Lava Dust (x2): in the cave opened by feeding the Batty Gordo.
  - **Ember Valley** - Strange Diamond (x1), Radiant Ore (x3), Silky Sand (x2): on top of the cliff southeast of the geyser.
  - **Starlight Strand** - Buzz Wax (x3), Wild Honey (x2), Strange Diamond (x1): on a ledge in the tunnel the Angler Gordo unlocks.
- **Filled previously-TBD collectible locations** (from MapGenie): two Grey Labyrinth (Terrarium) **map nodes** (`appendix-h-map.md`) and two **Shadow Plort Door** locations - Trydro Turret and Dream Lantern II (`appendix-j-shadow.md`).
- **New Appendix M - Teleporter Network** (`appendix-m-teleporters.md`): A new appendix mapping every teleporter pair (surface zones + Grey Labyrinth) and how each end activates, built from MapGenie. Wired into `SUMMARY.md`, `README.md`, and `CLAUDE.md`; the Steam appendix count was updated 12 → 13.
- **Grey Labyrinth element Plort Doors** (`appendix-i-doors.md`): Added the GL element doors MapGenie lists that were missing - the Angler door to the Hyper Gordo room, the Boom door shortcut between the Terrarium and Lava Depths, and a (location-unconfirmed) Hunter door.

### Fixed

- **Starlight Strand pod count** (`appendix-g-treasure.md`): The header read "32 Total" but the table already listed 33 pods. Corrected to "34 Total" (33 existing + the new Buzz Wax pod).
- **Per-biome totals** now read 18 / 35 / 34 / 24 / 3 (Rainbow Fields / Ember Valley / Starlight Strand / Powderfall Bluffs / Conservatory) = 114, within one of MapGenie's listed 113.
- **Research Drone counts** (`appendix-f-drones.md`): Rainbow Fields 2 → 7 and Powderfall Bluffs 1 → 4 to match MapGenie (Starlight Strand and Ember Valley were already correct at 6 each); the surface research-drone total is now 23.
- **Shadow Plort Door costs & total** (`appendix-j-shadow.md`, chapters 10/12/13, `00-introduction.md`, Steam sections): MapGenie confirms Patch 1.0.3 reduced Shadow Plort costs (now **15 / 25 / 60 / 75** per door - no more 50s or 100s). Updated every door cost and recomputed the total to **~825** (was the pre-patch **1,165**); doors + Nullifier is now **~845** (was 1,185). Propagated the figure through Chapter 10, 12, 13 and the matching Steam sections, and marked the reduction confirmed in the introduction's Patch 1.0.3 note. Two entries (Wall Lighting, Ancient Stabilizer) couldn't be matched 1:1 on MapGenie, so the total is approximate - flagged in Appendix J.

### Verified (no change)

- **Gordo locations** (`appendix-a-slimes.md`): All 17 Gordos cross-checked against MapGenie's published list - every region, food type, quantity, and favorite-counts-as-2 matches. No corrections. (A few teleporter "unlocks" descriptions are worded differently between the guide and MapGenie - e.g. Sloomber's "Terrarium" vs MapGenie's "Conservatory Teleporter" - left as-is pending in-game confirmation.)
- **Map Data Node count** (`appendix-h-map.md`): Confirmed at 17 (10 surface + 7 Grey Labyrinth) against MapGenie, resolving the earlier proxy doubt (which had suggested 5 Grey Labyrinth nodes) in the guide's favor.
- **Surface Plort Doors** (`appendix-i-doors.md`): Rainbow Fields and Starlight Strand match MapGenie.
- **Gordo unlock wording** (`appendix-a-slimes.md`): Re-checked the Sloomber Gordo - MapGenie's _teleporter_ data lists it activating the **Terrarium** Teleporter, matching the guide; MapGenie's _Gordo_ page (which says "Conservatory Teleporter") is internally inconsistent. Left the guide as-is.

### Files Modified

- `00-introduction.md` - Version bump to 0.4.4; marked the Patch 1.0.3 Shadow-cost reduction confirmed
- `README.md` - Version header refresh; added Appendix M to the appendix list
- `appendix-g-treasure.md` - Added 4 treasure pods; corrected Rainbow Fields / Ember Valley / Starlight Strand counts
- `appendix-f-drones.md` - Corrected Research Drone counts (Rainbow Fields 7, Powderfall Bluffs 4)
- `appendix-h-map.md` - Filled 2 TBD Terrarium map node locations
- `appendix-i-doors.md` - Added the Ember Valley Slime Gate + 3 Grey Labyrinth element Plort Doors
- `appendix-j-shadow.md` - Updated all Shadow costs to current values (~825 total); filled 2 TBD locations
- `appendix-m-teleporters.md` - NEW: Teleporter Network appendix
- `03-chapter-10.md`, `03-chapter-12.md`, `04-chapter-13.md` - Updated Shadow Plort totals (~825 / ~845) and cost ranges
- `SUMMARY.md`, `CLAUDE.md` - Registered Appendix M
- `steam/SECTION-01-INTRO.txt` - Version bump; appendix count 12 → 13
- `steam/SECTION-11-CH10.txt`, `steam/SECTION-13-CH12.txt`, `steam/SECTION-14-CH13.txt` - Shadow Plort total updates
- `steam/SECTION-18-APPENDICES-2.txt` - Version footer bump; appendix count 12 → 13
- `steam/STEAM-VERSION.md` - Version bump; Shadow Plort total + appendix count updates

---

## [0.4.3] - 2026-06-15 - Completionist Edition

_Reworked the v0.4.2 layout diagrams into a cleaner boxed style, and acted on a data cross-check prompted by reader-supplied MapGenie links. **Note:** MapGenie itself was inaccessible to automated fetching, so the cross-check used the Slime Rancher 2 Fandom wiki and a MapGenie-style checklist proxy. Gordo data was confirmed accurate (17/17); no Gordo or treasure-pod counts were changed._

### Changed

- **ASCII layout diagrams reworked** (`appendix-l-plot-overview.md`): Replaced the v0.4.2 inline flow lists (which read as redundant next to the tables) with aligned "connected box" diagrams - a Garden/Coop box `feeds>` a Corral box - script-padded for clean column alignment. Updated the legend to match the new notation (`[shield]` / `[music]` / `[net]` / `[keep]` / `*TOP*`, standalone SILO/POND boxes). All 11 expansion layouts plus the Chapter 9 drone-deployment diagram were restyled.

### Added

- **100% checklist categories** (`04-chapter-15.md`): Expanded the Archivist's "Completionist's Checklist" with three collectible categories it previously omitted - Map Data Nodes, Research & Ghostly Drones, and Plort Doors - each cross-referenced to the appendix that catalogs it (H, F, I, J). Surfaced by the data cross-check.
- **Grey Labyrinth pod note** (`appendix-g-treasure.md`): Added a cross-reference clarifying that the per-biome counts cover the surface zones + Conservatory only, and that Grey Labyrinth pods are gated behind Shadow Plort Doors (Appendix J), so the appendix isn't mistaken for a full-island total.

### Verified (no change)

- **Gordo locations** (`appendix-a-slimes.md`): All 17 Gordos cross-checked against the Fandom wiki - every location, food, and reward matches. No corrections needed.
- **Treasure-pod counts** (`appendix-g-treasure.md`): Guide surface total (~109) aligns with the current live checklist figure (~107); the lower numbers in older web guides are stale (pre-update). Per-region split left as-is - current and internally consistent, not re-verified pin-by-pin against MapGenie.
- **Map node count** (`appendix-h-map.md`): A proxy source showed 5 Grey Labyrinth nodes vs. the guide's 7 (2 already marked "TBD"). Left unchanged pending in-game confirmation rather than edited on a proxy's say-so.

### Files Modified

- `00-introduction.md` - Version bump to 0.4.3
- `README.md` - Version header refresh
- `appendix-l-plot-overview.md` - Reworked all layout diagrams into boxed style + updated legend
- `04-chapter-15.md` - Added Map Nodes / Drones / Plort Doors to the 100% checklist
- `appendix-g-treasure.md` - Added Grey Labyrinth cross-reference note
- `steam/SECTION-01-INTRO.txt` - Version bump
- `steam/SECTION-18-APPENDICES-2.txt` - Version footer bump
- `steam/STEAM-VERSION.md` - Version bump

---

## [0.4.2] - 2026-06-15 - Blueprint Edition

_Reader-requested visual layouts. Steam commenters (Nemolandia, Orange Guise) asked for "a picture of what goes where"; the underlying signal across the feedback was "I want a visual," so this adds ASCII ranch-layout flow diagrams to the progression reference. (The walls/nets critique was assessed as already covered — every corral's plot table already lists its required upgrades — so no change was made there.)_

### Added

- **ASCII ranch-layout diagrams** (`appendix-l-plot-overview.md`): Each expansion's plot table is now paired with a left-anchored ASCII flow diagram showing plot type, slime/Largo counts (`×6`), required corral upgrades (walls/shields), food flow (which garden or coop feeds which corral), and plort output. Covers every Conservatory growth stage (Ch 1/2/3), the Chapter 8 reorganization, and The Gully, Tidepools, Den, Archway, and Digsite expansions — 11 diagrams in all.
- **Quantum Drone deployment diagram** (`appendix-l-plot-overview.md`, Chapter 9): Shows which expansion each of the 3 drones services, its collect → deposit route, and station-siting guidance (one station per expansion, centered for range coverage).
- **Diagram legend** (`appendix-l-plot-overview.md`): Explains the schematic notation up front and flags that these are logical flow schematics (what feeds what), not to-scale maps of plot positions. Notes that every corral is assumed to carry a Plort Collector + High Walls.

### Changed

- Version bumped to 0.4.2 across the sanctioned mirror files. (Diagrams live in the GitHub/book guide; the condensed Steam sections were version-bumped only, to respect Steam's per-section size limits.)

### Files Modified

- `00-introduction.md` - Version bump to 0.4.2
- `README.md` - Version header refresh
- `appendix-l-plot-overview.md` - Added legend + 11 ASCII layout/flow diagrams + Chapter 9 drone-deployment diagram
- `steam/SECTION-01-INTRO.txt` - Version bump
- `steam/SECTION-18-APPENDICES-2.txt` - Version footer bump
- `steam/STEAM-VERSION.md` - Version bump + footer date refresh

---

## [0.4.1] - 2026-05-11 - Radiant Sanctuary Edition

_Documentation pass for game Patches 1.2.2 and 1.2.3. Edition name retained from 0.4; patch-level bump for new game patches (mirrors the 1.1.1 → 0.3.2 convention)._

### Added

- **Patch 1.2.2 Documentation** (May 11, 2026): Bug-fix patch coverage
  - **Radiant Slime protections** (appendix-a-slimes.md, 00-introduction.md): Added a "Safety (Patch 1.2.2)" row to the Radiant Slimes table noting that Incinerators no longer permanently destroy Radiant Slimes and that picking up Linked Cannons / Stunt Cannons with slimes inside no longer strips their radiance. It is now safe to route Radiant Slimes through cannon networks and keep them near incinerators.
  - **Patch 1.2.2 disclaimer block** (00-introduction.md): Documented the crash fixes (PS5-specific crash, new-game load crash, Xbox account-switch crash, Radiant Sloomber yawn crash / destructive yawn side effects), the Caretaker's Shop Sprinkles-update fix, the main/gadget shared-keybind fix, and platform-specific fixes (PS5 Island Alcove flashing, Xbox Glo-Glo Frog display, gadgets erroneously showing the Quantum Drone effect near a Drone).
- **Patch 1.2.3 Documentation** (May 2026): Privacy/policy patch coverage
  - **Patch 1.2.3 disclaimer block** (00-introduction.md): Documented that Monomi Park no longer collects in-game player data, has scrubbed potentially identifying information, and removed the data-collection notice from the options menu. No gameplay impact.

### Changed

- **Steam guide files** (steam/SECTION-01-INTRO.txt, steam/SECTION-18-APPENDICES-2.txt, steam/STEAM-VERSION.md): Added Patch 1.2.2 and 1.2.3 change blocks / version notes, Radiant Slime cannon/incinerator safety note, and version refresh to 0.4.1.

### Fixed (post-release — CI)

- **version-sync always failing** (`.github/workflows/version-sync.yml`): The job had a latent bug — `grep -R … .` emits paths with a `./` prefix (`./00-introduction.md`), but the allowlist regex is anchored `^(00-introduction\.md|…)$` with no prefix, so no file ever matched the allowlist and every version string was flagged as drift. Like markdownlint, it had failed on every push since 0.4. Fixed by stripping the leading `./` (`sed 's#^\./##'`) before the allowlist filter. No real drift existed — all `Version 0.X` strings were already in sanctioned files.
- **Repo-wide markdownlint failures** (most `.md` files): The `markdownlint` workflow had been failing on every push since it was introduced in 0.4 — 388 errors the strict `.markdownlint.json` (`"default": true`) flagged in the guide's existing long-form prose, none of them caught at the time. Resolved by running `markdownlint-cli2 --fix`, which added the missing blank lines around headings/lists/fenced code blocks (MD022/MD032/MD031) and collapsed stray double blanks (MD012). Whitespace-only — no prose or data changed. Verified clean against the exact linter the CI runs (markdownlint-cli2 v0.13.0 / markdownlint v0.34.0, bundled in `markdownlint-cli2-action@v16`): 0 errors.
- **Lint config tuned for the guide's structure** (`.markdownlint.json`): Disabled three rules that fight the guide's intentional layout rather than indicating real problems — **MD041** (chapter files are book fragments that open with `## Chapter X`, not an H1), **MD025** (the introduction legitimately carries both a guide title and an "Introduction" H1), and **MD001** (a few appendices jump heading levels by design). Not auto-fixable, so disabled rather than restructured.
- **Template fragments excluded from linting** (`.github/workflows/markdownlint.yml`): Added `.templates/**` to the lint exclusion globs. The `.templates/*.md` files are intentional fragments with `{{placeholders}}` — `changelog-entry-template.md` starts at an H2 heading, so it can never satisfy MD041, and its tight structure trips MD022/MD032. This matches `version-sync.yml`, which already exempts `.templates/`.

### Files Modified

- `00-introduction.md` - Bumped to v0.4.1, added Patch 1.2.2 and 1.2.3 disclaimer blocks; markdownlint whitespace fixes
- `README.md` - Version header refresh, updated Game Version line for Patch 1.2.2/1.2.3; markdownlint whitespace fixes
- `appendix-a-slimes.md` - Added Patch 1.2.2 safety row to Radiant Slimes table; markdownlint whitespace fixes
- `steam/SECTION-01-INTRO.txt` - Version bump + Patch 1.2.2 / 1.2.3 change blocks
- `steam/SECTION-18-APPENDICES-2.txt` - Radiant Slimes safety note + version footer bump
- `steam/STEAM-VERSION.md` - Version bump + Patch 1.2.2 / 1.2.3 version notes
- `.github/workflows/markdownlint.yml` - Excluded `.templates/**` from markdown linting
- `.github/workflows/version-sync.yml` - Stripped `grep -R`'s `./` path prefix so the allowlist matches (job had always failed)
- `.markdownlint.json` - Disabled MD041/MD025/MD001 (conflict with the guide's chapter-fragment / appendix structure)
- **All other guide `.md` files** (chapters, appendices, `CLAUDE.md`, `CHANGELOG.md`) - Whitespace-only blank-line normalization from `markdownlint-cli2 --fix`

---

## [0.4] - 2026-04-16 - Radiant Sanctuary Edition

### Added

- **Patch 1.2 Documentation** ("Radiant Slime Sanctuary"): Major content update coverage
  - **Radiant Slimes** (appendix-a-slimes.md): New section covering rare prismatic-altered variants of every slime type. Spawn anywhere their normal version appears.
  - **The Sanctuary** (appendix-d-ranch.md): New ranch expansion section. Accessed through Grey Labyrinth, run by the Caretaker NPC. Themed/decoratable rooms with alcoves for favored slimes. Includes "Lost and Found" for recovering Radiant Slimes lost in base form.
  - **Sprinkles currency** (appendix-d-ranch.md): New currency generated by decorating Sanctuary rooms; spent on Sanctuary expansions, themes, gadgets, and decor.
  - **Silo - Improved Storage Capacity** (appendix-d-ranch.md): Doubles per-slot capacity from 100 to 200. Stacks with all Tier upgrades (fully upgraded silo holds 2,400 items). Flagged as highest-leverage Silo upgrade.
  - **Garden - Growth Amplifier** (appendix-d-ranch.md): Expands growing space per garden plot for higher crop output.
  - **Resource Detector toy** (appendix-e-gadgets.md): New toy for the rancher - tracks direction of nearby science/crafting resources.
  - **~30 new decorative gadgets** (appendix-e-gadgets.md): New "Patch 1.2 Gadgets" section covering Comfy Couches, Scientist's Chair/Desk, Half-Circle/Round/Step platforms (Grass/Ice/Magma/Moss/Stone), Lava Lamps in 6 colors, Golden Honey/Saber Statues, and Sanctuary Portals.
  - **Gadget Bundles** (appendix-e-gadgets.md): New section covering 22 themed multi-item bundles in Coo-Coo Corner.
- **Repository Housekeeping** (post-release, 2026-04-16): Infrastructure and metadata pass folded into the same 0.4 edition to avoid version-number sprawl.
  - **GitHub Actions CI** (`.github/workflows/`):
    - `linkcheck.yml` — lychee scan of all markdown links on every push/PR.
    - `markdownlint.yml` — formatting enforcement via `.markdownlint.json`.
    - `version-sync.yml` — greps for `Version 0.X` strings outside sanctioned mirror files (`00-introduction.md`, `README.md`, `CHANGELOG.md`, `steam/STEAM-VERSION.md`, `steam/SECTION-01-INTRO.txt`, `steam/SECTION-17-APPENDICES.txt`) and fails on drift.
  - **Markdownlint config** (`.markdownlint.json`): rules tuned for long-form prose.
  - **Templates** (`.templates/`): `chapter-template.md`, `changelog-entry-template.md`, and a `README.md` pointing back to CLAUDE.md's authoring workflow.
  - **Table-of-contents blocks** on files >200 lines: `CHANGELOG.md`, `appendix-b-items.md`, `appendix-e-gadgets.md`, `appendix-l-plot-overview.md`.
- **Community Corrections** (post-release, 2026-04-16): Reader-feedback pass folded into the same 0.4 edition. Credit to migy, Glastic Roz, Reinch., Serenity, and LittleNinja on the Steam guide comments.
  - **Chapter 8 - Pairing Rationale callout** (`02-chapter-08.md`): Added short "Why Saber-Hunter (Not a Flyer)" section addressing the common reader question about combining Saber with a flying slime. Mirrored in `steam/SECTION-09-CH08.txt`.
  - **Chapter 8 - Meat-Minimization Strategy** (`02-chapter-08.md`): Added optional alternative strategy section for players who prefer to skip chicken farming — documents the carnivore + non-carnivore hybrid-diet largo approach, its trade-offs (loss of top-tier Saber-Hunter / Sloomber-Saber combos) and benefits (simpler automation, fewer moving parts). Mirrored in `steam/SECTION-09-CH08.txt`.

### Fixed (post-release community corrections)

- **Batty Gordo treasure pod contents** (`01-chapter-03.md:60`, `steam/SECTION-04-CH03.txt`): Corrected the Batty Gordo reward row. The jar contains slime science resources (not a Power Chip). The Power Core II BLUEPRINT is also awarded on pop.
- **Power Chip location** (`01-chapter-03.md:172`, `steam/SECTION-04-CH03.txt`): Fixed the Tier II Upgrade Components list. Power Chip is a component found in a Rainbow Fields treasure pod (cave near the Starlight Strand portal, among glowing mushrooms), not in the Batty Gordo treasure pod. The guide previously confused the Power Core II blueprint (Batty Gordo) with the Power Chip component (Rainbow Fields pod). Clarifying note added.
- **`steam/SECTION-17-APPENDICES.txt` footer version**: Was stuck at `0.3.1 - Toys, Trimmings, and Tune-Ups Edition` from the v0.3.1 update; refreshed to match the current 0.4 version. Added file to the `version-sync.yml` allowlist and CLAUDE.md's mirror-file list. (This footer later moved to SECTION-18-APPENDICES-2.txt when SECTION-17 was split; see next bullet.)
- **Steam SECTION-17 character-limit overflow**: Appendices section (10,386 bytes) exceeded Steam's per-section ~8 KB cap, causing the Gadget Bundles list to truncate mid-sentence on the published guide. Split into two Steam sections: `steam/SECTION-17-APPENDICES.txt` (Part 1 of 2 — Combinations, Upgrade Path, Resource Farming, Gordo Unlocks, Ranch Expansion Costs; 5.9 KB) and new `steam/SECTION-18-APPENDICES-2.txt` (Part 2 of 2 — Automation Equipment, Plort Market Values, Revenue Progression, full-guide link, version footer; 4.9 KB). Updated `steam/README.md` to list 18 sections, version-sync allowlist, and CLAUDE.md mirror-file references.

### Added (post-release — book site)

- **mdBook + GitHub Pages deployment**: The guide now publishes as a browseable book site at `https://skelhammer.github.io/slime-rancher-2-guide/` (takes effect after enabling GitHub Pages with "GitHub Actions" as the source). Left sidebar TOC visible on every page, per-page floating right-side TOC with scroll-sync, next/prev buttons at the bottom, full-text search, light/dark themes, auto-rebuilt on every push to `main`.
  - `book.toml` — mdBook config (title, theme, repo integration, search tuning).
  - `SUMMARY.md` — book's master TOC; drives the sidebar and next/prev navigation.
  - `.github/workflows/pages.yml` — Actions workflow that installs mdBook, builds the book, and deploys to GitHub Pages. Uses `enablement: true` on configure-pages so Pages is auto-enabled on first run.
  - `pagetoc.css` + `pagetoc.js` — in-page TOC (scans h2/h3 headings, scroll-syncs active heading). Hybrid layout: floating right-side panel on viewports wider than 1200px, inline sticky block in the content column on narrower viewports, static block on mobile. The DOM placement is the same in all three modes (right after the page's h1), so the CSS media queries swap between `position: fixed`, `position: sticky`, and `position: static` without layout jumps. Only suppressed on the three single-table appendices (H/I/J) which have no subheadings to list.
  - `.gitignore` — excludes `book/` build output.
  - `.github/workflows/linkcheck.yml` — excludes the `skelhammer.github.io` URL (until first deploy) and the `book/` build directory.
  - `.github/workflows/markdownlint.yml` — excludes `SUMMARY.md` and `book/`.
  - `README.md` — added "Read online" callout linking to the Pages site.
  - `CLAUDE.md` — documented the new `book.toml` / `SUMMARY.md` files and the requirement to update `SUMMARY.md` whenever chapter files are added, renamed, or reordered.

### Changed

- **Distributor entry** (appendix-e-gadgets.md): Updated to reflect Patch 1.2 nerf - can no longer duplicate objects or break their physics.
- **Steam guide files** (steam/SECTION-01-INTRO.txt, steam/SECTION-17-APPENDICES.txt, steam/STEAM-VERSION.md): Added Patch 1.2 changes block, Radiant Slimes section, Sanctuary section, plot upgrades, Gadget Bundles, Resource Detector callout. Version refresh.
- **`steam/SECTION-11-CH10.txt`** (Chapter 10: Grey Labyrinth): Added Patch 1.2 Sanctuary callout in the Entry / Prerequisites area.
- **`steam/SECTION-16-CH15.txt`** (Chapter 15: Post-Game Sandbox): Added Patch 1.2 Radiant Slime Collection and Sanctuary Completion items to the Archivist's 100% Completion checklist.
- **`CLAUDE.md`**: Replaced hardcoded stale `0.3.1 / December 2, 2025` version block with a pointer to `00-introduction.md` as the single source of truth; collapsed the duplicated "Version Update Process" section into a reference to Steps 3 and 5 of the workflow; added a `.templates/` pointer to Step 1; noted the new CI enforcement.
- **`steam/README.md`**: Full rewrite. Removed references to deleted `STEAM-GUIDE-SECTION-1.txt` through `-4.txt` and nonexistent `STEAM-GUIDE-BBCODE.txt`. Listed all 17 current `SECTION-XX-*.txt` files with one-line descriptions. Corrected "14 chapters" → "15 chapters". Added Sync Policy section.
- **`README.md`**: Removed duplicate Version + Last Updated fields from the Version Information section near the bottom (they already appear in the header at the top of the file). Retains Game Version and Known Issues lines.

### Fixed

- **Version drift in CLAUDE.md**: The hardcoded `0.3.1` version in CLAUDE.md directly contradicted its own rule that version information lives only in `00-introduction.md`. Root cause removed; CI now prevents recurrence.
- **Steam README inaccuracies**: `steam/README.md` referenced a 4-section layout replaced in v0.3 by 17 sections, and an imaginary `STEAM-GUIDE-BBCODE.txt`. Both corrected.

### Files Modified

- `00-introduction.md` - Bumped to v0.4, added Patch 1.2 disclaimer block
- `README.md` - Version header refresh, deduplicated version info at bottom
- `CLAUDE.md` - Version pointer + workflow consolidation; SECTION-17 added to mirror list
- `01-chapter-03.md` - Batty Gordo reward correction + Power Chip location fix
- `02-chapter-08.md` - Added Pairing Rationale + Meat-Minimization Strategy sections
- `appendix-a-slimes.md` - Added Radiant Slimes section
- `appendix-b-items.md` - Added TOC
- `appendix-d-ranch.md` - Added Garden Growth Amplifier, Silo Improved Storage Capacity, The Sanctuary expansion section
- `appendix-e-gadgets.md` - Added Resource Detector toy, Distributor nerf note, Patch 1.2 Gadgets section, Gadget Bundles section, TOC
- `appendix-l-plot-overview.md` - Added TOC
- `steam/README.md` - Full rewrite
- `steam/SECTION-01-INTRO.txt` - Version bump + Patch 1.2 changes block
- `steam/SECTION-04-CH03.txt` - Batty Gordo reward correction + Power Chip location fix
- `steam/SECTION-09-CH08.txt` - Pairing Rationale + Meat-Minimization Strategy sections
- `steam/SECTION-11-CH10.txt` - Sanctuary callout
- `steam/SECTION-16-CH15.txt` - Radiant / Sprinkles callouts
- `steam/SECTION-17-APPENDICES.txt` - Resource Detector, Radiant Slimes, Sanctuary, Plot Upgrades, Gadget Bundles sections; split into Part 1 of 2 (Combinations through Expansion Costs) to fit Steam's ~8 KB per-section limit
- `steam/SECTION-18-APPENDICES-2.txt` - NEW. Part 2 of 2 of the appendices split — Automation Equipment, Plort Market, Revenue Progression, full-guide link, version footer
- `steam/README.md` - Updated to list 18 sections and document the SECTION-17/18 split
- `steam/STEAM-VERSION.md` - Version bump + Patch 1.2 line
- `.github/workflows/version-sync.yml` - Swapped SECTION-17-APPENDICES.txt for SECTION-18-APPENDICES-2.txt in the allowlist (footer version moved with the split)

### Created

- `.github/workflows/linkcheck.yml`
- `.github/workflows/markdownlint.yml`
- `.github/workflows/version-sync.yml`
- `.markdownlint.json`
- `.templates/chapter-template.md`
- `.templates/changelog-entry-template.md`
- `.templates/README.md`

---

## [0.3.2] - 2026-01-22 - Shadow Sanitation Edition

### Added

- **Patch 1.1.1 Documentation**: Coverage of the January 22, 2026 bug-fix and balance patch
  - Memory optimizations addressing game crashes
  - Shadow Slimes now despawn once they've produced their max plort count (no more infinite farming on a single spawn)
  - Shadow Pots now contain fewer Shadow Slimes per pot (anti-overcrowding fix)

### Changed

- **Shadow Slime entry** (appendix-a-slimes.md): Added Patch 1.1.1 despawn cap and reduced Shadow Pot capacity notes
- **Steam Chapter 10** (steam/SECTION-11-CH10.txt): Added Patch 1.1.1 callout under Shadow farming strategy
- **Steam Appendices** (steam/SECTION-17-APPENDICES.txt): Updated Shadow Pots line with 1.1.1 changes
- **Steam Intro** (steam/SECTION-01-INTRO.txt): Added Patch 1.1.1 changes block; bumped version/date
- **Steam Version Notes** (steam/STEAM-VERSION.md): Bumped version/date and added 1.1.1 line

### Files Modified

- `00-introduction.md` - Bumped to v0.3.2, added Patch 1.1.1 disclaimer block
- `README.md` - Updated version/date headers
- `appendix-a-slimes.md` - Added Patch 1.1.1 notes to Shadow Slime entry
- `steam/SECTION-01-INTRO.txt` - Version bump + 1.1.1 patch block
- `steam/SECTION-11-CH10.txt` - Added 1.1.1 Shadow farming callout
- `steam/SECTION-17-APPENDICES.txt` - Updated Shadow Pots line
- `steam/STEAM-VERSION.md` - Version bump + 1.1.1 line

---

## [0.3.1] - 2025-12-02 - Toys, Trimmings, and Tune-Ups Edition

### Added

- **Patch 1.1.0 Documentation**: Full coverage of the "Toys, Trimmings, and Tune-Ups" update
- **Slime Toys Section** (appendix-e-gadgets.md): New section documenting all slime toys
  - 13 new toys from patch: Big Rock, Night Light, Buzzy Bee, Crystal Ball, Gyro Top, Sol Mate, Charcoal Brick, Stego Buddy, Rocket Ship, Stuffed Sheep, Spinner Toy, Happy Plush Bread Loaf, Stuffed Chicken
  - Every slime type now has a favorite toy with 25% agitation reduction
  - Some toys have "curious effects" beyond agitation reduction
- **Decorative Gadgets Section** (appendix-e-gadgets.md): New section for decorative items
  - Lighting: Labyrinth Wall/Standing Lamps, Flower Lamps (Purple/Orange/Pink)
  - Plants: Indigo Grass, Flowers, Cypress variants, Shrubs
  - Slime Stages: Floral variants (Purple/Yellow/Blue), Prismatic/Pastel/Monochromatic variants
  - Pillows: Large and Small Flower Pillows in various colors
- **Shadow Pots** (appendix-a-slimes.md): New Shadow Slime spawn mechanic in Grey Labyrinth
  - Break open to release Shadow Slimes
  - Can be picked up and moved for strategic plort farming
- **Distributor Gadget** (appendix-e-gadgets.md): New utility gadget (warning: can break slime physics)
- **Accelerator Color Variants**: Gold, Purple, Red, Pink, Grey, Green variants added

### Changed

- **Explorer Drones** (appendix-f-drones.md):
  - Can now target Odd Onions
  - Nerfed to prevent excessive passive plort farming at max energy/resources
- **Shadow Sureshot Recipe** (appendix-c-upgrades.md): Marked as confirmed (was previously unverified)
- **Resource Locations** (appendix-b-items.md, steam files): Fixed incorrect locations
  - Jellystone: Rainbow Fields (primary), not Ember Valley
  - Deep Brine: Rainbow Fields (primary), not Ember Valley
- **Strange Diamond** (appendix-b-items.md): Added rare spawn in Ember Valley caves
- **Agitation System** (00-introduction.md): Updated toy section to reference Patch 1.1.0 changes

### Fixed

- Resource location errors in Steam guide sections (SECTION-17-APPENDICES.txt, STEAM-VERSION.md)

### Files Modified

- `00-introduction.md` - Updated version, patch disclaimer, and agitation section
- `README.md` - Updated version references
- `appendix-a-slimes.md` - Added Shadow Pots to Shadow Slime entry
- `appendix-b-items.md` - Fixed Jellystone/Deep Brine locations, added Strange Diamond cave note
- `appendix-c-upgrades.md` - Confirmed Shadow Sureshot recipe
- `appendix-e-gadgets.md` - Added Slime Toys and Decorative Gadgets sections
- `appendix-f-drones.md` - Added Explorer Drone changes section
- `steam/SECTION-17-APPENDICES.txt` - Fixed resource locations
- `steam/STEAM-VERSION.md` - Fixed resource locations

---

## [0.3] - 2025-11-01 - Steam Edition

### Added

- **Steam Guide**: Created condensed Steam Workshop version with 17 sections
  - Section 1: Introduction + Core Mechanics
  - Sections 2-16: Chapters 1-15 (one chapter per section for easy navigation)
  - Section 17: Quick Reference & Appendices
- **Format**: BBCode formatting for Steam Workshop compatibility
- **Size**: ~87KB condensed from 4,750+ line full guide
- **Structure**: Each chapter condensed to 3-6KB, all sections under Steam character limits

### Changed

- Version updated to 0.3 - Steam Edition across all files
- Condensed appendices section for Steam compatibility
- Removed old multi-chapter Steam sections in favor of 1-chapter-per-section format

### Files Modified

- `00-introduction.md` - Updated version to 0.3
- `README.md` - Updated version references
- `CLAUDE.md` - Updated current version
- `steam/STEAM-VERSION.md` - Updated to 0.3
- Created 17 new `steam/SECTION-XX-*.txt` files
- Deleted old `steam/STEAM-GUIDE-SECTION-*.txt` files

## [0.2.0] - 2025-11-01 - Major Restructure Edition

### Formatting Standardization (Latest Updates)

**All chapters now follow consistent structure with Strategic Priorities and Financial Checkpoints**

#### Added - Strategic Priorities Sections

- **Chapters 1-2** (Hybrid chapters): Added 7-point Strategic Priorities lists
- **Chapters 3, 4, 7** (Exploration chapters): Added Strategic Priorities and Financial Checkpoint sections
- **Chapters 5, 6, 8, 9, 11, 12** (Building chapters): Added Strategic Priorities and Financial Checkpoint sections
- **Chapter 10** (Grey Labyrinth): Enhanced with comprehensive Strategic Priorities

**Strategic Priorities Format:**

- 7-point numbered lists with actionable objectives
- CRITICAL items marked with emphasis
- Cross-references to future chapters where relevant
- Ordered by priority (unlock → build → optimize)

#### Added - Financial Checkpoint Sections

- **Capital Required**: Detailed breakdown of expansion costs, plot costs, upgrade costs
- **Revenue Impact**: Before/after revenue comparison showing daily increase
- **Return on Investment**: ROI calculations showing break-even timeline
- **Strategic Notes**: Context explaining financial decisions and long-term value

#### Added - Phase Objectives

- Every phase in all chapters now has clear "Objective:" statement
- Consistent format: "**Objective:** [Clear, actionable goal]"
- Applied to Chapters 1-12 (Chapters 13-15 are WIP endgame content)

#### Restructured - Exploration Chapters (3, 4, 7)

**Phased Format Applied:**

- **Phase 1**: Initial Exploration & Map Data Nodes
- **Phase 2**: Gordo Strategy & Slime Acquisition
- **Phase 3**: Resource Extraction & Treasure Pods
- **Phase 4**: Vacpack Upgrades (or Ranch Expansion for Chapter 3)
- **Phase 5**: Warp Infrastructure Setup

**Chapter-Specific Details:**

- **Chapter 3** (Ember Valley): Hybrid exploration + ranch expansion to 8 plots
- **Chapter 4** (Starlight Strand): 5 Gordos, biome overview (pink vs blue sub-biomes)
- **Chapter 7** (Powderfall Bluffs): Sun Sap tree marking, critical endgame resources

#### Restructured - Building Chapters (5, 6, 8, 9, 11, 12)

**Phased Format Applied:**

- **Phase 1**: Unlock The [Expansion]
- **Phase 2**: Plot-by-Plot Build
- **Phase 3**: Key Notes
- **Phase 4**: Infrastructure Gadgets (Optional Quality-of-Life)
- **Phase 5**: (Chapter-specific: Upgrades, Reorganization, Teleporters)

**Chapter-Specific Enhancements:**

- **Chapter 5** (The Gully): Protein production and Flutter Plort accumulation strategy
- **Chapter 6** (The Tidepools): Passive income system and Tier III upgrade requirements
- **Chapter 8** (The Den): Nocturnal slime consolidation and ranch-wide reorganization
- **Chapter 9** (Quantum Drones): Drone deployment strategy and automation best practices
- **Chapter 11** (The Archway): Grey Labyrinth elite slime integration
- **Chapter 12** (The Digsite): Weather slime operations with security warnings

#### Restructured - Hybrid Chapters (1, 2)

**Enhanced with lighter formatting improvements:**

- Added "Objective:" statements to all phases
- Added Strategic Priorities (7-point lists)
- Added Financial Checkpoint sections with ROI calculations
- Maintained existing good structure while adding standardization

#### Changed - End of Chapter Checklists

- **Standardized format**: All chapters now use green ✅ emoji at beginning of each item
- **Simplified layout**: Single bullet points without nested headers
- **Consistent wording**: "By the end of Chapter X, you should have:"

#### Changed - Vacpack Upgrade Sections

- **Converted to tables**: All upgrade sections now use consistent table format
- **Columns**: Upgrade | Cost | Materials | Effect | Component (where applicable)
- **Priority indicators**: HIGH, CRITICAL, MANDATORY tags for essential upgrades
- **Added missing sections**: Tier III upgrades in appropriate chapters

#### Changed - Warp Infrastructure

- **Chapter 10**: Expanded from 3 to 6 gadgets (Refinery Link + Market Link in each zone)
- **Consistent naming**: "Warp Infrastructure Setup" for exploration chapters, "Infrastructure Gadgets" for building chapters
- **Strategic rationale**: Each section explains WHY the infrastructure matters

#### Removed - Redundant Content

- **Chapter 2**: Removed redundant "Plot Upgrades" section (already in plot-by-plot table)
- **CLAUDE.md**: Removed duplicate chapter listings and guide philosophy (now references README.md)
- **Multiple chapters**: Streamlined automation sections to avoid repetition

#### Fixed - Documentation

- **CLAUDE.md**: Corrected chapter organization (Part 3: Ch 9-12, Part 4: Ch 13-15)
- **CLAUDE.md**: Removed ~120 lines of redundant content, added references to README.md
- **README.md**: Updated version from 0.1.1 to 0.2.0
- **All version references**: Standardized to 0.2.0 - Major Restructure Edition

### Major Restructure: Chapters 10-15

**OLD Structure:**

- Chapter 10: The Archway - Rare Slimes
- Chapter 11: The Digsite - Tabby Operations
- Chapter 12: The Endgame Audit
- Chapter 13: The Grey Labyrinth
- Chapter 14: Post-Game

**NEW Structure:**

- Chapter 10: The Grey Labyrinth - Elite Asset Acquisition (moved from Ch 13)
- Chapter 11: The Archway - Grey Labyrinth Operations (NEW)
- Chapter 12: The Digsite - Weather Slime Operations (NEW - OPTIONAL)
- Chapter 13: The Endgame Audit (condensed from old Ch 12)
- Chapter 14: Prismacore Stabilization - Story Finale (NEW - split from old Ch 13)
- Chapter 15: Post-Game Sandbox Empire (moved from Ch 14)

### Added

**Chapter 10: The Grey Labyrinth - Elite Asset Acquisition**

- Moved Grey Labyrinth content from old Chapter 13 to Chapter 10 (post-automation)
- Condensed prerequisites section from old Chapter 12
- Focus on asset acquisition: Twin, Sloomber, Hyper slimes
- Basic Shadow/Prisma Plort farming introduction
- Removed Prismacore stabilization (moved to Chapter 14)

**Chapter 11: The Archway - Grey Labyrinth Operations**

- Completely new chapter for integrating Grey Labyrinth slimes
- 5-plot self-contained expansion
- Plot 1: Polaricherry Garden
- Plot 2: Twin-Flutter Largos (fruit)
- Plot 3: Candied Hen Coop
- Plot 4: Sloomber-Saber Largos (meat) - HIGHEST VALUE COMBO IN GAME
- Plot 5: Silo (Grey Labyrinth plort storage)
- Revenue: +2,000-3,500 Newbucks/day

**Chapter 12: The Digsite - Weather Slime Operations** (OPTIONAL)

- Completely new chapter for weather event slimes
- 4-plot self-contained expansion
- Plot 1: Prickle Pear Garden
- Plot 2: Dervish-Ringtail Largos (omnivore)
- Plot 3: Painted Hen Coop
- Plot 4: Tangle-Hyper Largos (omnivore)
- Can be skipped entirely if player hasn't collected weather slimes
- Revenue: +2,500-3,500 Newbucks/day (if built)

**Chapter 14: Prismacore Stabilization - Story Finale**

- New dedicated chapter for story completion
- Gigi milestone trading (90 Prisma Plorts)
- 5 Harmonizer activation
- Nullifier crafting and deployment
- Slime Shower + Prismacore stabilization
- Story resolution and Rainbow Coin unlocking

### Changed

**Chapter 13: The Endgame Audit** (condensed from old Chapter 12)

- Primary focus: Open all 25 Shadow Plort Doors (1,165 Shadow Plorts)
- Prisma Plort stockpiling (~265 total)
- Final Vacpack upgrades (Heart Module IV, Power Core V, Tank Booster V-VIII)
- Ranch automation verification

**Chapter 15: Post-Game Sandbox Empire** (moved from old Chapter 14)

- Rare slime hunting (Gold, Lucky) moved here from old Chapter 10
- Now positioned as true post-game content

**Largo Combinations Based on Community/Profit Analysis:**

- Twin-Flutter: Community recommended, calming aura synergy
- Sloomber-Saber: Highest plort values (37-85 + 42-70), sleep clouds pacify aggression
- Dervish-Ringtail: Very high value (75 base Dervish + 42-70 Ringtail)
- Tangle-Hyper: Premium rare combo, flexible omnivore diet

### Removed

- Old Chapter 10 (The Archway - Rare Slimes) - rare slimes moved to Chapter 15
- Old Chapter 11 (The Digsite - Tabby Operations) - replaced with weather slimes

### Philosophy Change

- **OLD:** Grey Labyrinth was "endgame content" accessed late
- **NEW:** Grey Labyrinth is "post-automation priority" accessed immediately after Chapter 9
- **OLD:** The Archway/Digsite used for low-value operations
- **NEW:** The Archway/Digsite house ELITE slime operations with highest profit potential
- **OLD:** Tabby operations in Digsite (redundant, low value)
- **NEW:** Weather slimes in Digsite (optional, high value for completionists)

### Files Changed

- Created: 03-chapter-10.md, 03-chapter-11.md, 03-chapter-12.md
- Renamed: 04-chapter-12.md → 04-chapter-13.md
- Renamed: 04-chapter-13.md → 04-chapter-14.md (heavy edits)
- Renamed: 04-chapter-14.md → 04-chapter-15.md
- Updated: plot-overview.md, README.md, 00-introduction.md, CHANGELOG.md
- Deleted: old 03-chapter-10.md, old 03-chapter-11.md

### Notes

- Guide updated to Version 0.2.0 - Major Restructure Edition
- This is a BREAKING CHANGE to guide structure
- Chapter numbers 10-15 completely reorganized
- Optimal gameplay flow: Automation (Ch 9) → Grey Labyrinth (Ch 10) → Elite Operations (Ch 11-12) → Finale Prep (Ch 13) → Story Complete (Ch 14) → Sandbox (Ch 15)

---

## [0.1.2] - 2025-11-01 - Wiki Integration Edition

### Added

- **Dream Lantern utilities** (appendix-c-upgrades.md): Added complete entries for Dream Lantern and Dream Lantern II
  - Dream Lantern: 3-day sleep cycle, ProntoMart blueprint (5,000 Newbucks), max 5 craftable
  - Dream Lantern II: 6-day sleep cycle, Shadow Plort Door blueprint, uses Royal Jelly instead of Strange Diamond
- **Nullifier unstable wall functionality** (appendix-c-upgrades.md, 04-chapter-13.md): Documented Nullifier's secondary use
  - Can be placed in unstable walls (door-shaped indentations with rainbow texture) to open hidden passages
  - Passage remains open only while Nullifier is placed
- **Enhanced food harvest yields** (appendix-b-items.md): Added Notes column documenting garden yields
  - Polaricherry: 20 per harvest (enhanced)
  - Turbo Tater: 13 per harvest
  - Pogofruit: 20 per harvest (enhanced)

### Changed

- **Slime behavior documentation** (appendix-a-slimes.md): Extensive updates based on SR2 wiki
  - **Gold Slime**: Corrected favorite food from "Gilded Ginger" to "None" (Gilded Ginger does not exist in SR2)
    - Added sparkle sound, fleeing behavior, 1-4 plort drops based on Golden Sureshot level
  - **Lucky Slime**: Added jingling sound, stationary detection behavior, specific Newbuck rewards (100-150 first, 200-300 second, 300 third+)
  - **Dervish Slime**: Updated spawn to "During Level 3 Wind Storms", added cyclone immunity for other Dervish slimes
  - **Tangle Slime**: Updated spawn to "During Level 3 Pollen Storms", added vine range (10 units), bud mechanics, tunneling warning
  - **Yolky Slime**: Added Giant Egg details (5 Chickadoos + 5 Yolky Plorts if fresh, 3-hour spoil timer)
  - **Honey Slime**: Added Grey Labyrinth (Prismacore) location, strategic warning about plort attraction risk
  - **Twin Slime**: Added portal mechanic details, color-shifting behavior
  - **Sloomber Slime**: Added sleep cloud frequency (increases when agitated), appearance description
  - **Hyper Slime**: Added dash behavior details
- **Gordo Slimes table** (appendix-a-slimes.md): Complete overhaul with wiki-accurate information
  - Added Notes column with favorite food multipliers for all Gordos
  - Standardized reward format: "12 [Slime Type] + 1 jar + [specific reward]"
  - Added special warnings: Phosphor (doesn't despawn), Boom (explosion damage), Ringtail (stone cycle), Flutter (ONLY Moondew Nectar)
  - Updated Twin Gordo location to "Impossible Sky", added color-change note
  - Updated Sloomber Gordo note: led to Conservatory pre-v1.0, now leads to Terrarium
- **Resource locations** (appendix-b-items.md): Corrected and enhanced resource spawn information
  - **Candied Hen**: Corrected to breedable in coops (not collection-only)
  - **Sun Sap**: Updated to crimson trees/palms, grows 3x daily during daylight
  - **Black Indigonium**: Updated location to Impossible Sky
  - **Aqua Glass**: Corrected to Waterworks ONLY source in Labyrinth
  - **Royal Jelly**: Updated locations to Impossible Sky and Dream Land
  - **Prickle Pear**: Corrected location from Starlight Strand to Ember Valley
- **Zone renaming** (all files): Updated "Prismacore Surroundings" to official name "Impossible Sky"
  - Updated 04-chapter-13.md: Merged Prismacore Surroundings into Impossible Sky zone description
  - Updated appendix-b-items.md: Black Indigonium and Royal Jelly locations
  - Updated appendix-f-locations.md: Map node and Shadow Plort Door locations
  - Added note explaining Impossible Sky includes the gilded area near Prismacore

### Removed

- **Gilded Ginger** (appendix-b-items.md): Removed entirely - does not exist in Slime Rancher 2
  - Gilded Ginger was SR1-exclusive content from The Glass Desert

### Fixed

- **Gold Slime favorite food**: Corrected from incorrect "Gilded Ginger" to "None" (Gold Slimes have no favorite food in SR2)

### Notes

- All slime, Gordo, resource, and food information verified against official Slime Rancher 2 Wiki
- Guide updated to Version 0.1.2 with Last Updated date: November 1, 2025

## [0.1.1] - 2025-11-01 - Patch 1.0.3 Update

### Changed

- **Quantum Drone Station Crafting Cost** (03-chapter-09.md, appendix-c-upgrades.md): Updated Strange Diamond requirement from 3 to 2 per station
  - Total Strange Diamonds needed for 3 core drone stations reduced from 9 to 6
  - Updated all references in Chapter 9 (Financial Checkpoint, Capital Requirements, Phase 3 recipe)
  - Updated Appendix D crafting table
- **Shadow Sureshot Recipe** (appendix-c-upgrades.md): Removed Strange Diamond requirement per Patch 1.0.3
  - Added note that updated recipe is unverified (not yet reached in-game)

### Added

- **Patch 1.0.3 Disclaimer** (00-introduction.md): Added comprehensive disclaimer about Patch 1.0.3 balance changes
  - Documents confirmed updates (Quantum Drone Station costs)
  - Lists unverified changes awaiting in-game confirmation:
    - Reduced Shadow Plort costs for Grey Labyrinth doors/pods
    - Shadow Slimes drop extra plorts when hit and lurk longer
    - Prisma Stabilizers may produce additional Prisma Plorts
    - Unstable items can be held in tank longer
    - Common/uncommon resource nodes provide more resources

### Notes

- Guide updated to Version 0.1.1 with Last Updated date: November 1, 2025
- Remaining Patch 1.0.3 changes will be verified and updated during endgame gameplay

## [0.1] - 2025-10-24 - Initial Release

### Changed

- **Chapters 10-14 marked as WIP:** Added work-in-progress warnings to chapters that are not yet completed or fully verified
  - Chapter 10: The Archway - Rare Slimes
  - Chapter 11: The Digsite - Tabby Operations
  - Chapter 12: The Endgame Audit
  - Chapter 13: The Grey Labyrinth - Endgame Operations
  - Chapter 14: Post-Game - Sandbox Empire

### Fixed

- Removed improper hyphen usage in 00-introduction.md (replaced dash-joined sentences with proper punctuation)

### Repository Structure

- **Initial GitHub repository setup** with proper licensing and documentation
- **23 markdown files** totaling ~4,750 lines of strategic content
- **Modular file organization** for optimal performance and editing workflow:
  - 15 core chapter files (00-introduction.md through 04-chapter-14.md)
  - 4 specialized appendix files (slimes, items, upgrades, locations)
  - Dedicated plot overview file for quick ranch progression reference
  - README.md with complete navigation
  - CLAUDE.md with AI assistant editing guidelines
- **Creative Commons Attribution 4.0 International (CC BY 4.0)** license
- **.gitignore** properly configured to exclude local Claude Code settings

### Guide Philosophy & Approach

- **Ruthless Asset Progression**: Treats slimes as profit-generating assets, not pets
- **Capital Deployment Strategy**: Immediate reinvestment of Newbucks into high-ROI infrastructure
- **Automation-First Mindset**: Systematic elimination of manual labor through technology

### Part 1: The Foundation (Chapters 1-4)

- **Chapter 1**: Sprint to Mobility - Early game priorities and first Jetpack acquisition
- **Chapter 2**: The Conservatory - Foundation ranch build with 4 initial plots
- **Chapter 3**: Ember Valley - Resource extraction and expansion to 8 plots
- **Chapter 4**: Starlight Strand - Asset acquisition and advanced Largo combinations

### Part 2: The Industrial Revolution (Chapters 5-8)

- **Chapter 5**: The Gully - Industrial core development and scaling operations
- **Chapter 6**: The Tidepools - Passive income systems and aquatic resource integration
- **Chapter 7**: Powderfall Bluffs - Saber Slime acquisition and territorial expansion
- **Chapter 8**: The Den - Ranch reorganization and efficiency optimization

### Part 3: Automation & Empire Completion (Chapters 9-11)

- **Chapter 9**: Quantum Drones - Complete ranch automation system deployment
  - Drone programming strategies
  - Advanced automation blueprints
  - Labor elimination protocols
- **Chapter 10**: The Archway - Rare slime acquisition and collection completion
- **Chapter 11**: The Digsite - Tabby operations and pre-endgame preparation

### Part 4: Endgame Mastery (Chapters 12-14)

- **Chapter 12**: The Endgame Audit - Final optimization review and preparation
- **Chapter 13**: The Grey Labyrinth - Endgame operations and advanced slime types
  - Shadow, Twin, Sloomber, and Hyper slime strategies
  - Prisma Disruption events
  - Grey Labyrinth navigation
- **Chapter 14**: Post-Game - Sandbox empire management and continued optimization

### Core Mechanics Documentation (00-introduction.md)

- **The Plort Market**: Supply/demand dynamics and price manipulation strategies
- **Largo Slimes**: Profit mathematics (4x plort production with favorite foods)
- **Tarr Prevention**: Critical outbreak prevention and emergency response protocols
- **The Agitation System**:
  - 12-hour agitation cycle mechanics
  - Music Box and toy effectiveness analysis
  - Hunter Largo feral state management
- **Optimal Corral Populations**: 6-slime efficiency standard

### Appendix A: Slime Compendium (appendix-a-slimes.md)

- **35+ documented slime types** with complete data:
  - Normal slimes: Pink, Cotton, Phosphor, Tabby, Rock, Boom, Batty, Crystal, Honey, Hunter, Angler, Ringtail, Flutter, Saber
  - Special slimes: Fire, Puddle, Shadow, Twin, Sloomber, Hyper, Prisma
  - Event slimes: Dervish, Tangle
  - Rare slimes: Gold, Lucky, Yolky
  - Hostile types: Tarr, Feral
- **Complete Gordo locations** with rewards for all major biomes
- Diet types, favorite foods, and optimal Largo combinations
- Location data for all biomes

### Appendix B: Item Compendium (appendix-b-items.md)

- **Complete food catalog**: Vegetables, fruits, meat, and special items
- **Chicken types and spawn locations**
- **Resource harvesting guide**: Crafting materials and components
- **Plort value reference table**
- **Upgrade components and blueprint locations**

### Appendix C-E: Upgrades & Ranch Costs (appendix-c-upgrades.md)

- **Vacpack upgrade trees**:
  - Health, Energy, Inventory capacity
  - Mobility enhancements (Dash Boots, Jetpack)
- **Craftable utilities**: Warp Tech, resource extractors, automation tools
- **Complete ranch plot cost breakdown**
- **Corral upgrade progression and ROI analysis**

### Appendix F-K: Locations & Collectibles (appendix-f-locations.md)

- **Ghostly and Research Drone locations**
- **Treasure pod maps** for all biomes:
  - Rainbow Fields, Ember Valley, Starlight Strand
  - Tidepools, Powderfall Bluffs, Grey Labyrinth
- **Map data node locations**
- **Plort door unlocking requirements**
- **Grey Labyrinth Shadow door guide**
- **Resource priority and farming routes**

### Plot Overview Quick Reference (plot-overview.md)

- **Chapter-by-chapter ranch layouts** (Chapters 1-11)
- **Plot-by-plot specifications**:
  - Slime assignments and Largo combinations
  - Food source mappings
  - Garden allocations
- **Revenue progression tracking**:
  - Chapter 1: ~500 Newbucks/day (2 plots)
  - Chapter 2: ~800-1,000 Newbucks/day (4 plots)
  - Chapter 3: Expanded to 8 plots
  - Chapters 4-11: Progressive scaling to empire-level income
- **Expansion timing and capital requirements**

### Game Coverage

- **Verified against Slime Rancher 2 Version 1.0** (released September 23, 2025)
- **All major biomes documented**:
  - Rainbow Fields (starting area)
  - Ember Valley (volcanic region)
  - Starlight Strand (bioluminescent forests)
  - The Tidepools (aquatic zone)
  - Powderfall Bluffs (arctic region)
  - The Grey Labyrinth (endgame area)
- **Complete slime collection strategies**
- **End-to-end progression path** from tutorial to post-game sandbox

### Known Issues

- **Prices outdated**: Material costs changed in v1.0 recipe overhaul without documented patch notes
- **Resource costs pending verification**: Some crafting recipes require field testing against current game version
- **Market value fluctuations**: Plort prices subject to game balance updates

### Documentation Quality

- **~4,750 lines** of strategic content
- **Comprehensive cross-referencing** between chapters and appendices
- **Consistent formatting** with tables, bullet points, and warning callouts
- **Quick navigation structure** with markdown links throughout
- **Separate changelog tracking** for version history management
