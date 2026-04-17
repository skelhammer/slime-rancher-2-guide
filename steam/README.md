# Steam Guide Version

This directory contains the condensed Steam Community Guide version of the Slime Rancher 2 walkthrough. It mirrors the main GitHub guide but is split across 18 sections sized for Steam's per-section character limits (~8 KB each).

## Files

- **STEAM-VERSION.md** — Single-document markdown source. Useful for editing, diffing, and previewing the whole Steam guide locally before converting to BBCode.
- **SECTION-01-INTRO.txt** — Introduction, version block, and Core Mechanics
- **SECTION-02-CH01.txt** — Chapter 1: Early Game / Sprint to Mobility
- **SECTION-03-CH02.txt** — Chapter 2: The Conservatory (Foundation Build)
- **SECTION-04-CH03.txt** — Chapter 3: Ember Valley (Resource Extraction)
- **SECTION-05-CH04.txt** — Chapter 4: Starlight Strand (Asset Acquisition)
- **SECTION-06-CH05.txt** — Chapter 5: The Gully (Industrial Core)
- **SECTION-07-CH06.txt** — Chapter 6: The Tidepools (Passive Income)
- **SECTION-08-CH07.txt** — Chapter 7: Powderfall Bluffs (Saber Acquisition)
- **SECTION-09-CH08.txt** — Chapter 8: The Den (Ranch Reorganization)
- **SECTION-10-CH09.txt** — Chapter 9: Quantum Drones (Ranch Automation)
- **SECTION-11-CH10.txt** — Chapter 10: The Grey Labyrinth (Elite Asset Acquisition)
- **SECTION-12-CH11.txt** — Chapter 11: The Archway (Grey Labyrinth Operations)
- **SECTION-13-CH12.txt** — Chapter 12: The Digsite (Weather Slime Operations, OPTIONAL)
- **SECTION-14-CH13.txt** — Chapter 13: The Endgame Audit
- **SECTION-15-CH14.txt** — Chapter 14: Prismacore Stabilization (Story Finale)
- **SECTION-16-CH15.txt** — Chapter 15: Post-Game Sandbox Empire
- **SECTION-17-APPENDICES.txt** — Quick reference Part 1 of 2: Largo Combinations, Upgrade Path, Resource Farming, Gordo Unlocks, Ranch Expansion Costs
- **SECTION-18-APPENDICES-2.txt** — Quick reference Part 2 of 2: Automation Equipment (Drones, Toys, Radiant Slimes, Sanctuary, Plot Upgrades, Gadget Bundles), Plort Market Values, Revenue Progression, full-guide link, version footer

## Publishing Workflow

Steam guides use multiple sections that are created one at a time in the editor. For this guide:

1. Go to Steam Community → Guides → Create Guide, and select Slime Rancher 2.
2. For **each** `SECTION-XX-*.txt` file, click "Add Section", paste the contents, and set the section title to match the descriptor after the section number (e.g., "Chapter 10: The Grey Labyrinth"). Paste in order — Steam uses the order as the table of contents.
3. Preview to verify BBCode renders correctly (tables, bold, lists).
4. Publish.

## Content Scope

The Steam guide covers:

- Core mechanics (Largos, Tarr prevention, agitation, plort market)
- All 15 chapters condensed to fit Steam section size limits (typically 3–7 KB per chapter)
- A single appendices section with quick-reference highlights — the full appendix tables remain on GitHub only
- Patch history and version disclaimers aligned with the main guide

For the full depth (every gadget, every treasure pod, every plort door, the complete plot-overview tables, etc.), readers should follow the link to the GitHub guide included in SECTION-01.

## Sync Policy

- **`SECTION-01-INTRO.txt`**, **`SECTION-17-APPENDICES.txt`**, and **`SECTION-18-APPENDICES-2.txt`** are updated with every guide version bump (they carry the patch notes block, appendix changes, and version footer).
- **`STEAM-VERSION.md`** is updated with every guide version bump.
- **Chapter sections (`SECTION-02-CH01.txt` through `SECTION-16-CH15.txt`)** are updated when a patch materially changes the chapter's topic (e.g., Sanctuary access for Chapter 10, Radiant Slimes for Chapter 15). Patch notes that are purely introductory live in SECTION-01 only — chapter files reference "see SECTION-01 changes block" rather than re-stating every patch.

## Maintenance

When updating the Steam guide:

1. Edit the relevant `SECTION-XX-*.txt` directly (BBCode format) and the corresponding region in `STEAM-VERSION.md` if the change is material.
2. Bump the version string in `SECTION-01-INTRO.txt`, `STEAM-VERSION.md`, and the footer of `SECTION-18-APPENDICES-2.txt` to match `00-introduction.md`.
3. If a chapter section was re-synced, note the changes in the root `CHANGELOG.md` entry.
4. Re-paste each changed section into the published Steam guide.
