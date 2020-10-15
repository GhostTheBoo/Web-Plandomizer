/*class Chest {
	constrcutor(world, room, originalReward, originalAddress){
		this.world = world;
		this.room = room;
		this.originalReward = originalReward;
		this.originalAddress = originalAddress;
	}
}*/

var chestArray = [{
	world: 'Agrabah',
	room: 'Agrabah',
	originalReward: 'Dark Shard',
	originalAddress: '11CDF826'
}]

/*
// Agrabah
Agrabah
Dark Shard
11CDF826
Agrabah
Mythril Shard
11CDF832
Agrabah
Hi-Potion
11CDF83E
Agrabah
AP Boost
11CDF84A
Agrabah
Mythril Stone
11CDF856
Agrabah
Mythril Shard
11CDF862
Agrabah
Serenity Shard
11CDF86E
Bazaar
Mythril Gem
11CDF87A
Bazaar
Power Shard
11CDF886
Bazaar
Hi-Potion
11CDF892
Bazaar
AP Boost
11CDF89E
Bazaar
Mythril Shard
11CDF8AA
Palace Walls
Skill Ring
11CDF8B6
Palace Walls
Mythril Stone
11CDF8C2
The Cave of Wonders Entrance
Power Stone
11CDF8CE
The Cave of Wonders Entrance
Mythril Shard
11CDF8DA
Valley of Stone
Mythril Stone
11CDF8E6
Valley of Stone
AP Boost
11CDF8F2
Valley of Stone
Mythril Shard
11CDF8FE
Valley of Stone
Hi-Potion
11CDF90A
Chasm of Challenges
Cave of Wonders Map
11CDF916
Chasm of Challenges
AP Boost
11CDF922
Treasure Room
AP Boost
11CDF92E
Treasure Room
Serenity Gem
11CDF93A
Ruined Chamber
Torn Pages
11CDF946
Ruined Chamber
Ruins Map
11CDF952
/*
// Atlantica
// Beast's Castle
Courtyard
AP Boost
11CDFBF2
Courtyard
Hi-Potion
11CDFBFE
Courtyard
Mythril Shard
11CDFC0A
Belle's Room
Castle Map
11CDFC16
Belle's Room
Mega Recipe
11CDFC22
The East Wing
Mythril Shard
11CDFC2E
The East Wing
Tent
11CDFC3A
The West Hall
Hi-Potion
11CDFC46
The West Hall
Mythril Shard
11CDFC52
The West Hall
Power Shard
11CDFC5E
The West Hall
Mythril Shard
11CDFC6A
The West Hall
AP Boost
11CDFC76
The West Hall
Bright Stone
11CDFC82
Dungeon
Basement Map
11CDFC8E
Dungeon
AP Boost
11CDFC9A
Secret Passage
Mythril Shard
11CDFCA6
Secret Passage
Hi-Potion
11CDFCB2
Secret Passage
Lucid Shard
11CDFCBE
The West Wing
Mythril Shard
11CDFCCA
The West Wing
Tent
11CDFCD6
The Beast's Room
Blazing Shard
11CDFCE2
// Cavern of Remembrance
Depths
AP Boost
11CE04E6
Depths
Power Crystal
11CE04F2
Depths
Frost Crystal
11CE04FE
Depths
Manifest Illusion
11CE050A
Depths
AP Boost
11CE0516
Depths Upper Level
Remembrance Gem
11CE0522
Mining Area
Serenity Gem
11CE052E
Mining Area
AP Boost
11CE053A
Mining Area
Serenity Crystal
11CE0546
Mining Area
Manifest Illusion
11CE0552
Mining Area
Serenity Gem
11CE055E
Mining Area
Dark Remembrance Map
11CE056A
Engine Chamber
Serenity Crystal
11CE0576
Engine Chamber
Remembrance Crystal
11CE0582
Engine Chamber
AP Boost
11CE058E
Engine Chamber
Manifest Illusion
11CE059A
Mineshaft Lower Level
AP Boost
11CE05A6
Mineshaft Lower Level
Depths of Remembrance Map
11CE05BE
Mineshaft Mid Level
Power Boost
11CE05CA
Mineshaft Upper Level
AP Boost
11CE05B2
Mineshaft Upper Level
Magic Boost
11CE05D6
Garden of Assemblage
Garden of Assemblage Map
11CE05E2
Garden of Assemblage
Lost Illusion
11CE05EE
Garden of Assemblage
Proof of Nonexistence
11CE05FA
// Disney Castle
Courtyard
Mythril Shard
11CDF9B2
Courtyard
Star Recipe
11CDF9BE
Courtyard
AP Boost
11CDF9CA
Courtyard
Mythril Stone
11CDF9D6
Courtyard
Blazing Stone
11CDF9E2
Courtyard
Blazing Shard
11CDF9EE
Courtyard
Mythril Shard
11CDF9FA
Library
Torn Pages
11CDFA06
// Halloween Town
Graveyard
Mythril Shard
11CDFD96
Graveyard
Serenity Gem
11CDFDA2
Dr. Finklestein's Lab
Halloween Town Map
11CDFDAE
Halloween Town Square
Mythril Stone
11CDFDBA
Halloween Town Square
Energy Shard
11CDFDC6
Hinterlands
Lightning Shard
11CDFDD2
Hinterlands
Mythril Stone
11CDFDDE
Hinterlands
AP Boost
11CDFDEA
Candy Cane Lane
Mega Potion
11CDFDF6
Candy Cane Lane
Mythril Gem
11CDFE02
Candy Cane Lane
Lightning Stone
11CDFE0E
Candy Cane Lane
Mythril Stone
11CDFE1A
Santa's House
Christmas Town Map
11CDFE26
Santa's House
AP Boost
11CDFE32
// Hollow Bastion
Borough
Drive Recovery
11CDFF3A
Borough
AP Boost
11CDFF46
Borough
Hi-Potion
11CDFF52
Borough
Mythril Shard
11CDFF5E
Borough
Dark Shard
11CDFF6A
Postern
Castle Perimiter Map
11CDFF76
Postern
Mythril Gem
11CDFF82
Postern
AP Boost
11CDFF8E
Corridors
Mythril Stone
11CDFF9A
Corridors
Mythril Crystal
11CDFFA6
Corridors
Dark Crystal
11CDFFB2
Corridors
AP Boost
11CDFFBE
Ansem's Study
Skill Recipe
11CDFFCA
Ansem's Study
Ukelele Charm
11CDFFD6
Restoration Site
Moon Recipe
11CDFFE2
Restoration Site
AP Boost
11CDFFEE
Crystal Fissure
Torn Pages
11CDFFFA
Crystal Fissure
The Great Maw Map
11CE0006
Crystal Fissure
Energy Crystal
11CE0012
Crystal Fissure
AP Boost
11CE001E
Postern
Gull Wing
11CE002A
Heartless Manufactory
Cosmic Chain
11CE0036
// Land of Dragons
Bamboo Grove
Dark Shard
11CDF72A
Bamboo Grove
Ether
11CDF736
Bamboo Grove
Mythril Shard
11CDF742
Checkpoint
Hi-Potion
11CDF74E
Checkpoint
Mythril Shard
11CDF75A
Mountain Trail
Lightning Shard
11CDF766
Mountain Trail
Recovery Recipe
11CDF772
Mountain Trail
Ether
11CDF77E
Mountain Trail
Mythril Shard
11CDF78A
Village Cave
AP Boost
11CDF796
Village Cave
Dark Shard
11CDF7A2
Ridge
Frost Shard
11CDF7AE
Ridge
AP Boost
11CDF7BA
Throne Room
Torn Pages
11CDF7C6
Throne Room
Palace Map
11CDF7D2
Throne Room
AP Boost
11CDF7DE
Throne Room
Queen Recipe
11CDF7EA
Throne Room
AP Boost
11CDF7F6
Throne Room
Ogre Shield
11CDF802
Throne Room
Mythril Crystal
11CDF80E
Throne Room
Orichalcum
11CDF81A
// Olympus Coliseum
Underworld Entrance
Power Boost
11CDFB02
Passage
Mythril Shard
11CDFB0E
Passage
Mythril Stone
11CDFB1A
Passage
Ether
11CDFB26
Passage
AP Boost
11CDFB32
Passage
Hi-Potion
11CDFB3E
Inner Chamber
Underworld Map
11CDFB4A
Inner Chamber
Mythril Shard
11CDFB56
Caverns Entrance
Lucid Shard
11CDFB62
Caverns Entrance
AP Boost
11CDFB6E
Caverns Entrance
Mythril Shard
11CDFB7A
The Lost Road
Bright Shard
11CDFB86
The Lost Road
Ether
11CDFB92
The Lost Road
Mythril Shard
11CDFB9E
The Lost Road
Mythril Stone
11CDFBAA
Atrium
Lucid Stone
11CDFBB6
Atrium
AP Boost
11CDFBC2
The Lock
Caverns Map
11CDFBCE
The Lock
Mythril Shard
11CDFBDA
The Lock
AP Boost
11CDFBE6
// Olympus Cups
// 100 Acre Wood
Pooh Bear's House
Hundred Acre Wood Map
11CDFA12
Pooh Bear's House
AP Boost
11CDFA1E
Pooh Bear's House
Mythril Stone
11CDFA2A
Piglet's House
Defense Boost
11CDFA36
Piglet's House
AP Boost
11CDFA42
Piglet's House
Mythril Gem
11CDFA4E
Rabbit's House
Draw Ring
11CDFA5A
Rabbit's House
Mythril Crystal
11CDFA66
Rabbit's House
AP Boost
11CDFA72
Kanga's House
Magic Boost
11CDFA7E
Kanga's House
AP Boost
11CDFA8A
Kanga's House
Orichalcum
11CDFA96
The Spooky Cave
Mythril Gem
11CDFAA2
The Spooky Cave
AP Boost
11CDFAAE
The Spooky Cave
Orichalcum
11CDFABA
The Spooky Cave
Guard Recipe
11CDFAC6
The Spooky Cave
Mythril Crystal
11CDFAD2
The Spooky Cave
AP Boost
11CDFADE
Starry Hill
Cosmic Ring
11CDFAEA
Starry Hill
Style Recipe
11CDFAF6
// Port Royal
Rampart
Naval Map
11CDFE3E
Rampart
Mythril Stone
11CDFE4A
Rampart
Dark Shard
11CDFE56
Town
Dark Stone
11CDFE62
Town
AP Boost
11CDFE6E
Town
Mythril Shard
11CDFE7A
Town
Mythril Gem
11CDFE86
Cave Mouth
Bright Shard
11CDFE92
Cave Mouth
Mythril Shard
11CDFE9E
Powder Store
AP Boost
11CDFEAA
Powder Store
AP Boost
11CDFEB6
Moonlight Nook
Mythril Shard
11CDFEC2
Moonlight Nook
Serenity Gem
11CDFECE
Moonlight Nook
Power Stone
11CDFEDA
The Interceptor's Hold
Feather Charm
11CDFEE6
Seadrift Keep
AP Boost
11CDFEF2
Seadrift Keep
Orichalcum
11CDFEFE
Seadrift Keep
Meteor Staff
11CDFF0A
Seadrift Row
Serenity Gem
11CDFF16
Seadrift Row
King Recipe
11CDFF22
Seadrift Row
Mythril Crystal
11CDFF2E
// Pride Lands
Gorge
Savannah Map
11CE0042
Gorge
Dark Gem
11CE004E
Gorge
Mythril Stone
11CE005A
Elephant Graveyard
Frost Gem
11CE0066
Elephant Graveyard
Mythril Stone
11CE0072
Elephant Graveyard
Bright Stone
11CE007E
Elephant Graveyard
AP Boost
11CE008A
Elephant Graveyard
Mythril Shard
11CE0096
Pride Rock
Pride Rock Map
11CE00A2
Pride Rock
Mythril Stone
11CE00AE
Pride Rock
Serenity Crystal
11CE00BA
Wildebeest Valley
Energy Stone
11CE00C6
Wildebeest Valley
AP Boost
11CE00D2
Wildebeest Valley
Mythril Gem
11CE00DE
Wildebeest Valley
Mythril Stone
11CE00EA
Wildebeest Valley
Lucid Gem
11CE00F6
Wastelands
Mythril Shard
11CE0102
Wastelands
Serenity Gem
11CE010E
Wastelands
Mythril Stone
11CE011A
Jungle
Serenity Gem
11CE0126
Jungle
Mythril Stone
11CE0132
Jungle
Serenity Crystal
11CE013E
Oasis
Oasis Map
11CE014A
Oasis
Torn Pages
11CE0156
Oasis
AP Boost
11CE0162
// Simulated Twilight Town
Station of Serenity
Potion
11CE016E
Station of Calling
Potion
11CE017A
Central Station
Potion
11CE0186
Central Station
Hi-Potion
11CE0192
Central Station
Potion
11CE019E
Sunset Terrace
Ability Ring
11CE01AA
Sunset Terrace
Hi-Potion
11CE01B6
Sunset Terrace
Potion
11CE01C2
Sunset Terrace
Potion
11CE01CE
Mansion Foyer
Potion
11CE01DA
Mansion Foyer
Potion
11CE01E6
Mansion Foyer
Potion
11CE01F2
Mansion Dining Room
Elven Bandana
11CE01FE
Mansion Dining Room
Potion
11CE020A
Mansion Library
Hi-Potion
11CE0216
Mansion Basement Corridor
Hi-Potion
11CE0222
// Space Paranoids
Pit Cell
Pit Cell Area Map
11CDFCEE
Pit Cell
Mythril Crystal
11CDFCFA
Canyon
Dark Crystal
11CDFD06
Canyon
Mythril Stone
11CDFD12
Canyon
Mythril Gem
11CDFD1E
Canyon
Frost Crystal
11CDFD2A
Hallway
Power Crystal
11CDFD36
Hallway
AP Boost
11CDFD42
Communications Room
I/O Tower Map
11CDFD4E
Communications Room
Gaia Belt
11CDFD5A
Central Computer Core
AP Boost
11CDFD66
Central Computer Core
Orichalcum+
11CDFD72
Central Computer Core
Cosmic Arts
11CDFD7E
Central Computer Core
Central Computer Core Map
11CDFD8A
// Timeless River
Cornerstone Hill
Cornerstone Hill Map
11CDF95E
Cornerstone Hill
Frost Shard
11CDF96A
Pier
Mythril Shard
11CDF976
Pier
Hi-Potion
11CDF982
Waterway
Mythril Stone
11CDF98E
Waterway
AP Boost
11CDF99A
Waterway
Frost Stone
11CDF9A6
// Twilight Town
The Old Mansion
Potion
11CE022E
The Old Mansion
Mythril Shard
11CE023A
The Woods
Potion
11CE0246
The Woods
Mythril Shard
11CE0252
The Woods
Hi-Potion
11CE025E
Tram Common
Hi-Potion
11CE026A
Tram Common
AP Boost
11CE0276
Tram Common
Tent
11CE0282
Tram Common
Mythril Shard
11CE028E
Tram Common
Potion
11CE029A
Tram Common
Mythril Shard
11CE02A6
Tram Common
Potion
11CE02B2
Central Station
Tent
11CE02BE
Central Station
Hi-Potion
11CE02CA
Central Station
Ether
11CE02D6
The Tower
Potion
11CE02E2
The Tower
Hi-Potion
11CE02EE
The Tower
Ether
11CE02FA
Tower Entryway
Ether
11CE0306
Tower Entryway
Mythril Shard
11CE0312
Sorcerer's Loft
Tower Map
11CE031E
Tower Wardrobe
Mythril Stone
11CE032A
Underground Concourse
Mythril Gem
11CE0336
Underground Concourse
Orichalcum
11CE0342
Underground Concourse
AP Boost
11CE034E
Underground Concourse
Mythril Crystal
11CE035A
Tunnelway
Orichalcum
11CE0366
Tunnelway
Mythril Crystal
11CE0372
Sunset Terrace
Orichalcum+
11CE037E
Sunset Terrace
Mythril Shard
11CE038A
Sunset Terrace
Mythril Crystal
11CE0396
Sunset Terrace
AP Boost
11CE03A2
Mansion Foyer
Mythril Crystal
11CE03AE
Mansion Foyer
Mythril Stone
11CE03BA
Mansion Foyer
Serenity Crystal
11CE03C6
Mansion Dining Room
Mythril Crystal
11CE03D2
Mansion Dining Room
Mythril Stone
11CE03DE
Mansion Library
Orichalcum
11CE03EA
Mansion Basement Corridor
Ultimate Recipe
11CE03F6
// The World that Never Was
Fragment Crossing
Mythril Stone
11CE0402
Fragment Crossing
Mythril Crystal
11CE040E
Fragment Crossing
AP Boost
11CE041A
Fragment Crossing
Orichalcum
11CE0426
Memory's Skyscraper
Mythril Crystal
11CE0432
Memory's Skyscraper
AP Boost
11CE043E
Memory's Skyscraper
Mythril Stone
11CE044A
The Brink of Despair
Dark City Map
11CE0456
The Brink of Despair
Orichalum+
11CE0462
Nothing's Call
Mythril Gem
11CE046E
Nothing's Call
Orichalcum
11CE047A
Twilight's View
Cosmic Belt
11CE0486
Naught's Skyway
Mythril Gem
11CE0492
Naught's Skyway
Orichalcum
11CE049E
Naught's Skyway
Mythril Crystal
11CE04AA
Ruin and Creation's Passage
Mythril Stone
11CE04B6
Ruin and Creation's Passage
Ap Boost
11CE04C2
Ruin and Creation's Passage
Mythril Crystal
11CE04CE
Ruin and Creation's Passage
Orichalcum
11CE04DA*/