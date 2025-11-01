# Changelog

All notable changes to this Slime Rancher 2 guide will be documented in this file.

## [0.1.2] - 2025-11-01 - Wiki Integration Edition

### Added
- **Dream Lantern utilities** (appendix-upgrades.md): Added complete entries for Dream Lantern and Dream Lantern II
  - Dream Lantern: 3-day sleep cycle, ProntoMart blueprint (5,000 Newbucks), max 5 craftable
  - Dream Lantern II: 6-day sleep cycle, Shadow Plort Door blueprint, uses Royal Jelly instead of Strange Diamond
- **Nullifier unstable wall functionality** (appendix-upgrades.md, 04-chapter-13.md): Documented Nullifier's secondary use
  - Can be placed in unstable walls (door-shaped indentations with rainbow texture) to open hidden passages
  - Passage remains open only while Nullifier is placed
- **Enhanced food harvest yields** (appendix-items.md): Added Notes column documenting garden yields
  - Polaricherry: 20 per harvest (enhanced)
  - Turbo Tater: 13 per harvest
  - Pogofruit: 20 per harvest (enhanced)

### Changed
- **Slime behavior documentation** (appendix-slimes.md): Extensive updates based on SR2 wiki
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
- **Gordo Slimes table** (appendix-slimes.md): Complete overhaul with wiki-accurate information
  - Added Notes column with favorite food multipliers for all Gordos
  - Standardized reward format: "12 [Slime Type] + 1 jar + [specific reward]"
  - Added special warnings: Phosphor (doesn't despawn), Boom (explosion damage), Ringtail (stone cycle), Flutter (ONLY Moondew Nectar)
  - Updated Twin Gordo location to "Impossible Sky", added color-change note
  - Updated Sloomber Gordo note: led to Conservatory pre-v1.0, now leads to Terrarium
- **Resource locations** (appendix-items.md): Corrected and enhanced resource spawn information
  - **Candied Hen**: Corrected to breedable in coops (not collection-only)
  - **Sun Sap**: Updated to crimson trees/palms, grows 3x daily during daylight
  - **Black Indigonium**: Updated location to Impossible Sky
  - **Aqua Glass**: Corrected to Waterworks ONLY source in Labyrinth
  - **Royal Jelly**: Updated locations to Impossible Sky and Dream Land
  - **Prickle Pear**: Corrected location from Starlight Strand to Ember Valley
- **Zone renaming** (all files): Updated "Prismacore Surroundings" to official name "Impossible Sky"
  - Updated 04-chapter-13.md: Merged Prismacore Surroundings into Impossible Sky zone description
  - Updated appendix-items.md: Black Indigonium and Royal Jelly locations
  - Updated appendix-locations.md: Map node and Shadow Plort Door locations
  - Added note explaining Impossible Sky includes the gilded area near Prismacore

### Removed
- **Gilded Ginger** (appendix-items.md): Removed entirely - does not exist in Slime Rancher 2
  - Gilded Ginger was SR1-exclusive content from The Glass Desert

### Fixed
- **Gold Slime favorite food**: Corrected from incorrect "Gilded Ginger" to "None" (Gold Slimes have no favorite food in SR2)

### Notes
- All slime, Gordo, resource, and food information verified against official Slime Rancher 2 Wiki
- Guide updated to Version 0.1.2 with Last Updated date: November 1, 2025

## [0.1.1] - 2025-11-01 - Patch 1.0.3 Update

### Changed
- **Quantum Drone Station Crafting Cost** (03-chapter-09.md, appendix-upgrades.md): Updated Strange Diamond requirement from 3 to 2 per station
  - Total Strange Diamonds needed for 3 core drone stations reduced from 9 to 6
  - Updated all references in Chapter 9 (Financial Checkpoint, Capital Requirements, Phase 3 recipe)
  - Updated Appendix D crafting table
- **Shadow Sureshot Recipe** (appendix-upgrades.md): Removed Strange Diamond requirement per Patch 1.0.3
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

### Appendix A: Slime Compendium (appendix-slimes.md)
- **35+ documented slime types** with complete data:
  - Normal slimes: Pink, Cotton, Phosphor, Tabby, Rock, Boom, Batty, Crystal, Honey, Hunter, Angler, Ringtail, Flutter, Saber
  - Special slimes: Fire, Puddle, Shadow, Twin, Sloomber, Hyper, Prisma
  - Event slimes: Dervish, Tangle
  - Rare slimes: Gold, Lucky, Yolky
  - Hostile types: Tarr, Feral
- **Complete Gordo locations** with rewards for all major biomes
- Diet types, favorite foods, and optimal Largo combinations
- Location data for all biomes

### Appendix B: Item Compendium (appendix-items.md)
- **Complete food catalog**: Vegetables, fruits, meat, and special items
- **Chicken types and spawn locations**
- **Resource harvesting guide**: Crafting materials and components
- **Plort value reference table**
- **Upgrade components and blueprint locations**

### Appendix C-E: Upgrades & Ranch Costs (appendix-upgrades.md)
- **Vacpack upgrade trees**:
  - Health, Energy, Inventory capacity
  - Mobility enhancements (Dash Boots, Jetpack)
- **Craftable utilities**: Warp Tech, resource extractors, automation tools
- **Complete ranch plot cost breakdown**
- **Corral upgrade progression and ROI analysis**

### Appendix F-K: Locations & Collectibles (appendix-locations.md)
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
