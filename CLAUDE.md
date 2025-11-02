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
- **Reference tables**: Edit appropriate appendix (`appendix-a-slimes.md`, `appendix-b-items.md`, etc.)
- **Ranch progression**: Edit `appendix-l-plot-overview.md`
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
- **Appendix A** (appendix-a-slimes.md): Fixed Saber Slime favorite food

### Fixed
- Corrected markdown link in Chapter 7 to appendix-a-slimes.md
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
   - If you changed chapter content, verify appendix-l-plot-overview.md still matches
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

This is a documentation repository containing a comprehensive walkthrough guide for Slime Rancher 2, a farming simulator video game.

**For complete repository structure and file organization, see [README.md](README.md).**

## File Organization Quick Reference

- **Chapter Files:** `01-chapter-01.md` through `04-chapter-15.md` (organized by part number prefix)
- **Core Files:** `00-introduction.md` (with version header), `README.md`
- **Appendices:** `appendix-a-slimes.md`, `appendix-b-items.md`, `appendix-c-upgrades.md`, `appendix-d-ranch.md`, `appendix-e-gadgets.md`, `appendix-f-drones.md`, `appendix-g-treasure.md`, `appendix-h-map.md`, `appendix-i-doors.md`, `appendix-j-shadow.md`, `appendix-k-resources.md`, `appendix-l-plot-overview.md`

**See [README.md](README.md) for complete chapter listings and navigation.**

## Writing Style

**For guide philosophy and writing style, see the "Guide Philosophy" and "How to Use This Guide" sections in [README.md](README.md).**

Key formatting standards:
- **Directive, strategic tone**: Frames gameplay as resource management and capital deployment
- **Tables for comparative data**: Plot layouts, upgrade costs, resource comparisons
- **Bold for CRITICAL warnings**: Tarr risks, mandatory upgrades, time-sensitive mechanics
- **Consistent formatting**: Match existing chapter structure (see Step 1 in workflow above)

## Version Information

The version header is located **only** in `00-introduction.md` at the top of the file:
- Current Version: 0.2.0 - Major Restructure Edition
- Last Updated: November 1, 2025
- Verified against Slime Rancher 2 Version 1.0 (released September 23, 2025)
- Contains disclaimer about outdated prices/material costs due to recipe overhaul in v1.0

**Version Numbering Scheme:**
- Increment version number for each update (0.1 → 0.2 → 0.3, etc.)
- Give each version a fun, descriptive name based on what changed
- Examples: "The Price is Right Edition" (price fixes), "Largo Optimization Edition" (new combos), "Spring Cleaning Edition" (reorganization)

### Version Update Process

**IMPORTANT:** When making ANY changes to the guide:

1. Edit the appropriate chapter file (`01-chapter-01.md`, `03-chapter-09.md`, `appendix-a-slimes.md`, `appendix-l-plot-overview.md`, etc.)
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

**Note:** When updating `appendix-l-plot-overview.md`, also update the version in `00-introduction.md` as this file is part of the main guide content.
