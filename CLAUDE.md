# CLAUDE.md

> **Note for human readers:** This file contains instructions for Claude Code and other AI assistants when editing this repository. It's not part of the game guide itself - see [README.md](README.md) to start reading the guide.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workflow for AI Assistants

### Initial Session Protocol

**REQUIRED:** At the start of every new session working with this repository, follow this protocol:

1. **Read README.md** - Understand the guide structure, navigation, and current version
2. **Read CLAUDE.md** (this file) - Review editing conventions and repository structure
3. **Read CHANGELOG.md** - Review recent changes to understand what's been updated

**Why this matters:**
- README.md provides the current version number and guide overview
- CLAUDE.md contains critical editing instructions and style guidelines
- CHANGELOG.md shows what's changed recently to avoid redundant work

### Making Changes Workflow

When the user requests changes to the guide, follow this workflow:

#### Step 1: Identify Target File(s)
- **Chapter content**: Edit specific chapter file (e.g., `01-chapter-01.md`, `03-chapter-09.md`)
- **Core mechanics**: Edit `00-introduction.md`
- **Reference tables**: Edit appropriate appendix (`appendix-slimes.md`, `appendix-items.md`, etc.)
- **Ranch progression**: Edit `plot-overview.md`
- **Navigation/meta**: Edit `README.md`

#### Step 2: Make Content Edits
- Follow the [Writing Style](#writing-style) guidelines below
- Maintain consistent formatting with existing content
- Use tables for comparative data in appendices
- Include warning callouts for critical information

#### Step 3: Update Version Information
**If content was changed** (not just typo fixes):
1. Update `00-introduction.md` version header:
   - Increment version number (0.1 → 0.2)
   - Update "Last Updated" date to current date
   - Create a descriptive version name (e.g., "Saber Strategies Edition")
2. Do NOT update version in individual chapter files - it only lives in `00-introduction.md`

#### Step 4: Update CHANGELOG.md
**REQUIRED for ALL content changes:**
1. Add a new version section at the top of CHANGELOG.md
2. Document what was changed:
   - New content added
   - Corrections made
   - Updates to existing strategies
   - Files modified
3. Use the existing format as a template
4. Be specific about what changed (not just "updated Chapter 5")

**Example CHANGELOG entry:**
```markdown
## [0.2] - 2025-10-25 - Saber Strategies Edition

### Changed
- **Chapter 7** (02-chapter-07.md): Updated Saber Slime acquisition strategy
  - Added alternate route through northern passage
  - Corrected Thundercluck spawn location
- **Appendix A** (appendix-slimes.md): Fixed Saber Slime favorite food

### Fixed
- Corrected markdown link in Chapter 7 to appendix-slimes.md
```

#### Step 5: Update README.md (if version changed)
If you updated the version in Step 3, also update:
- The version header at the top of README.md
- The "Version Information" section near the bottom of README.md

### Quality Checks

Before considering changes complete, verify:

1. **Link Integrity**: Do all markdown links still work?
   - Chapter-to-chapter references
   - Chapter-to-appendix references
   - README navigation links

2. **Cross-Reference Validation**:
   - If you changed appendix data (slime stats, prices, locations), check if chapters reference that data
   - If you changed chapter content, verify plot-overview.md still matches
   - Ensure consistency between related sections

3. **Formatting Consistency**:
   - Tables are properly formatted with aligned columns
   - Bold/italic formatting matches style guide
   - Heading hierarchy is correct (##, ###, ####)
   - Code blocks and callouts are properly formatted

4. **Data Accuracy**:
   - Numbers and statistics are consistent across files
   - Largo combinations make sense (correct slime pairings)
   - Revenue calculations match the plotted corrals

### Git and Version Control

**CRITICAL RULES - READ CAREFULLY:**
- **NEVER commit or push changes automatically** - ONLY commit/push when the user EXPLICITLY asks you to
- **DO NOT commit after making edits** - Just make the edits and STOP
- **DO NOT push after committing** - Only push when explicitly requested
- The user will tell you when they want changes committed and pushed
- Never use `git add .` - be selective about what files to stage
- When committing (only when asked), use descriptive messages that reference version numbers
- Example: `git commit -m "v0.2 - Saber Strategies Edition: Update Chapter 7 and Appendix A"`

**The user has repeatedly asked you to stop auto-committing. Follow this rule without exception.**

### Common Pitfalls to Avoid

1. **Forgetting to update CHANGELOG.md** - This is required for all content changes
2. **Updating version in wrong place** - Only update in `00-introduction.md`, not individual chapters
3. **Breaking markdown links** - Always verify links after moving or renaming content
4. **Inconsistent formatting** - Match existing table and bullet point styles
5. **Skipping the initial read protocol** - Always read README, CLAUDE, and CHANGELOG first
6. **Not updating README.md version** - If you bump version, update it in README too

### When to Ask Questions

Ask the user for clarification when:
- The change might affect multiple interconnected files
- You're unsure which version name to use
- The requested change conflicts with existing content
- You need to verify game mechanics or prices
- Multiple valid approaches exist for implementing the change

## Repository Overview

This is a documentation repository containing a comprehensive walkthrough guide for Slime Rancher 2, a farming simulator video game. The repository contains a single markdown file with a detailed game guide.

## Repository Structure

The guide has been split into individual chapter files for easier editing and navigation:

**Core Files:**
- `00-introduction.md`: Introduction, core mechanics, and game fundamentals (contains version header)
- `plot-overview.md`: Complete ranch progression quick reference for Chapters 1-11
- `README.md`: Navigation guide with links to all sections

**Appendix Files (Quick Reference Tables):**
- `appendix-slimes.md`: Appendix A - Slime Compendium & Gordo Locations
- `appendix-items.md`: Appendix B - Item Compendium (food, resources, plorts, components)
- `appendix-upgrades.md`: Appendices C-E - Upgrades & Ranch Costs
- `appendix-locations.md`: Appendices F-K - Locations & Collectibles (drones, treasure pods, doors)

**Part 1: The Foundation (Chapters 1-4)**
- `01-chapter-01.md`: Chapter 1 - Early Game: The Sprint to Mobility
- `01-chapter-02.md`: Chapter 2 - The Conservatory - Foundation Build
- `01-chapter-03.md`: Chapter 3 - Ember Valley: Resource Extraction
- `01-chapter-04.md`: Chapter 4 - Starlight Strand: Asset Acquisition

**Part 2: The Industrial Revolution (Chapters 5-8)**
- `02-chapter-05.md`: Chapter 5 - The Gully - Industrial Core
- `02-chapter-06.md`: Chapter 6 - The Tidepools - Passive Income
- `02-chapter-07.md`: Chapter 7 - Powderfall Bluffs - Saber Acquisition
- `02-chapter-08.md`: Chapter 8 - The Den - Ranch Reorganization

**Part 3: Automation & Empire Completion (Chapters 9-11)**
- `03-chapter-09.md`: Chapter 9 - Quantum Drones - Ranch Automation
- `03-chapter-10.md`: Chapter 10 - The Archway - Rare Slimes
- `03-chapter-11.md`: Chapter 11 - The Digsite - Tabby Operations

**Part 4: Endgame Mastery (Chapters 12-14)**
- `04-chapter-12.md`: Chapter 12 - The Endgame Audit
- `04-chapter-13.md`: Chapter 13 - The Grey Labyrinth - Endgame Operations
- `04-chapter-14.md`: Chapter 14 - Post-Game - Sandbox Empire

## Content Organization

The walkthrough is structured as follows:

1. **Introduction & Core Mechanics** (`00-introduction.md`): Game fundamentals including plort market dynamics, Largo slime mechanics, Tarr prevention, agitation system, and optimal corral populations

2. **Part 1: The Foundation** (Chapters 1-4): Early to late mid-game progression
   - `01-chapter-01.md`: Chapter 1 - Early Game: The Sprint to Mobility
   - `01-chapter-02.md`: Chapter 2 - The Conservatory - Foundation Build
   - `01-chapter-03.md`: Chapter 3 - Ember Valley: Resource Extraction
   - `01-chapter-04.md`: Chapter 4 - Starlight Strand: Asset Acquisition

3. **Part 2: The Industrial Revolution** (Chapters 5-8): Industrial expansion and logistics
   - `02-chapter-05.md`: Chapter 5 - The Gully - Industrial Core
   - `02-chapter-06.md`: Chapter 6 - The Tidepools - Passive Income
   - `02-chapter-07.md`: Chapter 7 - Powderfall Bluffs - Saber Acquisition
   - `02-chapter-08.md`: Chapter 8 - The Den - Ranch Reorganization

4. **Part 3: Automation & Empire Completion** (Chapters 9-11): Advanced automation and completing pre-Labyrinth slime collection
   - `03-chapter-09.md`: Chapter 9 - Quantum Drones - Ranch Automation
   - `03-chapter-10.md`: Chapter 10 - The Archway - Rare Slimes
   - `03-chapter-11.md`: Chapter 11 - The Digsite - Tabby Operations

5. **Part 4: Endgame Mastery** (Chapters 12-14): Final preparations and endgame content
   - `04-chapter-12.md`: Chapter 12 - The Endgame Audit
   - `04-chapter-13.md`: Chapter 13 - The Grey Labyrinth - Endgame Operations
   - `04-chapter-14.md`: Chapter 14 - Post-Game - Sandbox Empire

6. **Appendices** (4 separate files for better performance):
   - **`appendix-slimes.md`** (Appendix A): Slime Compendium & Gordo Locations
     - All slime types with diets, favorite foods, and locations
     - Complete Gordo locations and rewards
   - **`appendix-items.md`** (Appendix B): Item Compendium
     - Food & crops guide
     - Chicken types and locations
     - Resources and crafting materials
     - Plort values
     - Upgrade components & blueprints
   - **`appendix-upgrades.md`** (Appendices C-E): Upgrades & Ranch Costs
     - Vacpack upgrades (Health, Energy, Inventory, Mobility)
     - Craftable items (Utilities, Warp Tech)
     - Ranch plot and upgrade costs
   - **`appendix-locations.md`** (Appendices F-K): Locations & Collectibles
     - Ghostly and Research Drones
     - Treasure pod locations (all biomes)
     - Map data nodes
     - Plort door locations
     - Grey Labyrinth Shadow doors
     - Resource priority guide

7. **Plot Overview** (`plot-overview.md`): Ranch progression quick reference
   - Complete plot-by-plot layouts for Chapters 1-11
   - Expansion-by-expansion breakdown with slime assignments
   - Food source mappings and revenue estimates
   - Total daily revenue tracking by chapter and costs

## Guide Philosophy

The guide takes an aggressive optimization approach focused on:
- **Ruthless Asset Progression**: Treating slimes as profit-generating assets
- **Capital Deployment**: Immediate reinvestment of Newbucks into infrastructure
- **Automation**: Systematically eliminating manual labor through Auto-Feeders and drones

## Writing Style

When editing this guide, maintain the following stylistic elements:

- **Directive, strategic tone**: Frames gameplay as resource management and capital deployment
- **Clear hierarchical structure**: Chapters with operational blueprints, strategic priorities, and success metrics
- **Tabular data in appendices**: Quick reference tables for game mechanics
- **Warning callouts**: CRITICAL warnings for important game mechanics (e.g., Tarr outbreaks, Prismatic Slimes)
- **Consistent formatting**: Bold for emphasis, bullet points for lists, tables for comparative data

## Version Information

The version header is located **only** in `00-introduction.md` at the top of the file:
- Current Version: 0.1 - Initial Release
- Last Updated: October 24, 2025
- Verified against Slime Rancher 2 Version 1.0 (released September 23, 2025)
- Contains disclaimer about outdated prices/material costs due to recipe overhaul in v1.0

**Version Numbering Scheme:**
- Increment version number for each update (0.1 → 0.2 → 0.3, etc.)
- Give each version a fun, descriptive name based on what changed
- Examples: "The Price is Right Edition" (price fixes), "Largo Optimization Edition" (new combos), "Spring Cleaning Edition" (reorganization)

## Common Editing Tasks

When updating this guide, common tasks include:

- Updating prices and material costs when new patch information becomes available
- Adding new slimes, biomes, or mechanics from game updates
- Correcting inaccurate location descriptions or resource costs
- Expanding appendices with newly discovered resources or strategies

### Version Update Process

**IMPORTANT:** When making ANY changes to the guide:

1. Edit the appropriate chapter file (`01-chapter-01.md`, `03-chapter-09.md`, `appendix-slimes.md`, `plot-overview.md`, etc.)
2. Update **ONLY** `00-introduction.md` with:
   - Incremented version number (e.g., 0.1 → 0.2)
   - Current date in "Last Updated" field
   - Fun, descriptive version name reflecting the change
3. Do NOT update version info in individual chapter files - it only lives in `00-introduction.md`

**Version Header Format:**
```markdown
#### Version 0.XX - Descriptive Name Edition

**Last Updated: Month Day, Year**
```

**Note:** When updating `plot-overview.md`, also update the version in `00-introduction.md` as this file is part of the main guide content.

## Working with Individual Chapter Files

The guide has been split into individual chapter files for easier editing:

- **When editing a specific chapter**: Edit the corresponding chapter file (e.g., `01-chapter-01.md` for Chapter 1, `03-chapter-09.md` for Chapter 9)
- **When editing core mechanics**: Edit `00-introduction.md`
- **When editing reference tables**: Edit the appropriate appendix file:
  - Slime/Gordo data: `appendix-slimes.md`
  - Food/Items/Resources: `appendix-items.md`
  - Upgrades/Costs: `appendix-upgrades.md`
  - Treasure Pods/Drones/Doors: `appendix-locations.md`
- **When editing ranch progression tables**: Edit `plot-overview.md`
- **File naming convention**:
  - Chapters: `[part-number]-chapter-[chapter-number].md` (e.g., `01-chapter-01.md`, `02-chapter-05.md`)
  - Core files: `00-introduction.md`, `plot-overview.md`
  - Appendices: `appendix-[category].md` (e.g., `appendix-slimes.md`, `appendix-items.md`)
- **Benefits of this structure**:
  - Much faster file loading and editing (very small, focused files)
  - Minimal context usage when making targeted edits to specific chapters
  - Easy to navigate directly to the chapter you need to edit
  - Better organization for version control and tracking chapter-specific changes
  - Each chapter can be edited independently without loading entire parts
  - `plot-overview.md` provides quick table reference without reading full chapters
  - Appendices split into 4 focused files to avoid token limits and improve performance
