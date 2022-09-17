require('./connection')
const Armor = require('../model/armor')
const Shield = require('../model/shields')
const BaseClass = require('../model/coreClasses')
const PrestigeClass = require('../model/prestigeClasses')
const Feat = require('../model/feats')
const Item = require('../model/items')
const Race = require('../model/races')
const Spell = require('../model/spells')
const Weapon = require('../model/weapons')


const armor = [
    {
    name: 'Chain Shirt',
    clothing: 'false',
    lightArmor: 'true',
    mediumArmor: 'false',
    heavyArmor: 'false',
    cost: '100gp',
    armorOrShieldBonus: 4,
    maximumDexBonus: 4,
    armorCheckPenalty: 2,
    arcaneSpellFailure: 20,
    speedWith20ftBase: '20ft',
    speedWith30ftBase: '30ft',
    weight: '25lbs',
    material: 'steel',
    image: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71LyfgsTN2L._AC_UX679_.jpg',
    description: 'Sometimes called a hauberk, this is a long shirt constructed of the same metal rings as chainmail. However, it is much lighter than chainmail and protects only the torso, upper arms, and upper legs of its wearer.',
    source: 'Core Rulebook pg. 275^3.0',
    notes: 'This is a pretty basic armor, often the most coveted non-magic light armor.'
    },
    {
    name: 'Scale Mail',
    clothing: 'false',
    lightArmor: 'false',
    mediumArmor: 'true',
    heavyArmor: 'false',
    cost: '50gp',
    armorOrShieldBonus: 5,
    maximumDexBonus: 3,
    armorCheckPenalty: 4,
    arcaneSpellFailure: 25,
    speedWith20ftBase: '15ft',
    speedWith30ftBase: '20ft',
    weight: '30lbs',
    material: 'steel',
    image: 'https://preview.redd.it/ll3z1jhcsgj61.jpg?auto=webp&s=9f1473d804ebfac9d0befec4255a782ce3aec729',
    description: "Scale mail is made up of dozens of small, overlapping metal plates. Similar to both splint mail and banded mail, scalemail has a flexible arrangement of scales in an attempt to avoid hindering the wearer's mobility, but at the expense of omitting additional protective layers of armor. A suit of scale mail includes gauntlets.",
    source: 'Ultimate Equipment pg. 9, PRPG Core Rulebook pg. 151',
    notes: 'Often the starting armor for characters who start with medium or heavy armor proficiency.'
    }
]


const shield = [
    {
    name: 'Light Steel Shield',
    cost: '9gp',
    shieldBonus: 1,
    maximumDexBonus: '',
    armorCheckPenalty: 1,
    arcaneSpellFailure: 5,
    weight: '6lbs',
    material: 'Steel',
    image: 'https://holiviantales.files.wordpress.com/2015/04/light-steel.png',
    description: "You strap a light steel shield to your forearm and grip it with your hand. A light steel shield's weight lets you carry other items in that hand, although you cannot use weapons with it. Whether wooden or steel, a light shield offers the same basic protection and attack benefits, though the two varieties respond differently to some spells and effects (such as rusting grasp). A druid can use a light wooden shield, but not a light steel shield.",
    source: 'Core Rulebook',
    notes: 'A good starter shield for most. Shield Bash Attacks: You can bash an opponent with a light shield. See “shield, light” on Table: Weapons for the damage dealt by a shield bash. Used this way, a light shield is a martial bludgeoning weapon. For the purpose of penalties on attack rolls, treat a light shield as a light weapon. If you use your shield as a weapon, you lose its Armor Class bonus until your next turn. An enhancement bonus on a shield does not improve the effectiveness of a shield bash made with it, but the shield can be made into a magic weapon in its own right.'
    }
]

const baseClass = [
    {
    name: 'Sorcerer',
	alignment: 'any',
	hitDie: 'd6',
	startingWealth: '2d6 x 10gp(70 average)',
	classSkills: 'Appraise(Int), Bluff(Cha), Craft(Int), Fly(Dex), Intimidate(Cha), Knowledge(arcana)(Int), Profession(Wis), Spellcraft(Int), Use Magic Device(Cha)',
	skillRanksPerLevel: '2 + Int modifier',
	level1BABAndSaves: '+0bab +0fort +0ref +2will',
    level2BABAndSaves: '+1bab +0fort +0ref +3will',
    level3BABAndSaves: '+1bab +1fort +1ref +3will',
    level4BABAndSaves: '+2bab +1fort +1ref +4will',
    level5BABAndSaves: '+2bab +1fort +1ref +4will',
    level6BABAndSaves: '+3bab +2fort +2ref +5will',
    level7BABAndSaves: '+3bab +2fort +2ref +5will',
    level8BABAndSaves: '+4bab +2fort +2ref +6will',
    level9BABAndSaves: '+4bab +3fort +3ref +6will',
    level10BABAndSaves: '+5bab +3fort +3ref +7will',
    level11BABAndSaves: '+5bab +3fort +3ref +7will',
    level12BABAndSaves: '+6/+1bab +4fort +4ref +8will',
    level13BABAndSaves: '+6/+1bab +4fort +4ref +8will',
    level14BABAndSaves: '+7/+2bab +4fort +4ref +9will',
    level15BABAndSaves: '+7/+2bab +5fort +5ref +9will',
    level16BABAndSaves: '+8/+3bab +5fort +5ref +10will',
    level17BABAndSaves: '+8/+3bab +5fort +5ref +10will',
    level18BABAndSaves: '+9/+4bab +6fort +6ref +11will',
    level19BABAndSaves: '+9/+4bab +6fort +6ref +11will',
    level20BABAndSaves: '+10/+5bab +6fort +6ref +12will',
	spellsPerDayLevel1: '3',
	spellsPerDayLevel2: '4',
	spellsPerDayLevel3: '5',
	spellsPerDayLevel4: '6/3',
	spellsPerDayLevel5: '6/4',
	spellsPerDayLevel6: '6/5/3',
	spellsPerDayLevel7: '6/6/4',
	spellsPerDayLevel8: '6/6/5/3',
	spellsPerDayLevel9: '6/6/6/4',
	spellsPerDayLevel10: '6/6/6/5/3',
	spellsPerDayLevel11: '6/6/6/6/4',
	spellsPerDayLevel12: '6/6/6/6/5/3',
	spellsPerDayLevel13: '6/6/6/6/6/4',
	spellsPerDayLevel14: '6/6/6/6/6/5/3',
	spellsPerDayLevel15: '6/6/6/6/6/6/4',
	spellsPerDayLevel16: '6/6/6/6/6/6/5/3',
	spellsPerDayLevel17: '6/6/6/6/6/6/6/4',
	spellsPerDayLevel18: '6/6/6/6/6/6/6/5/3',
	spellsPerDayLevel19: '6/6/6/6/6/6/6/6/4',
	spellsPerDayLevel20: '6/6/6/6/6/6/6/6/6',
    spellsKnownLevel1: '4/2',
	spellsKnownLevel2: '5/2',
	spellsKnownLevel3: '5/3',
	spellsKnownLevel4: '6/3/1',
	spellsKnownLevel5: '6/4/2',
	spellsKnownLevel6: '7/4/2/1',
	spellsKnownLevel7: '7/5/3/2',
	spellsKnownLevel8: '8/5/3/2/1',
	spellsKnownLevel9: '8/5/7/6/5',
	spellsKnownLevel10: '9/5/7/6/5/1',
	spellsKnownLevel11: '9/5/5/4/3/2',
	spellsKnownLevel12: '9/5/5/4/3/2/1',
	spellsKnownLevel13: '9/5/5/4/4/3/2',
	spellsKnownLevel14: '9/5/5/4/4/3/2/1',
	spellsKnownLevel15: '9/5/5/4/4/4/3/2',
	spellsKnownLevel16: '9/5/5/4/4/4/3/2/1',
	spellsKnownLevel17: '9/5/5/4/4/4/3/3/2',
	spellsKnownLevel18: '9/5/5/4/4/4/3/3/2/1',
	spellsKnownLevel19: '9/5/5/4/4/4/3/3/2/2',
	spellsKnownLevel20: '9/5/5/4/4/4/3/3/2/3',
	weaponProficiency: 'All simple weapons',
	armorProficiency: 'No type of armor or shield',
    classAbility1: "Spells:A sorcerer casts arcane spells drawn primarily from the sorcerer/wizard spell list. She can cast any spell she knows without preparing it ahead of time. To learn or cast a spell, a sorcerer must have a Charisma score equal to at least 10 + the spell level. The Difficulty Class for a saving throw against a sorcerer's spell is 10 + the spell level + the sorcerer's Charisma modifier. Like other spellcasters, a sorcerer can cast only a certain number of spells of each spell level per day. Her base daily spell allotment is given on Table: Sorcerer. In addition, she receives bonus spells per day if she has a high Charisma score (see Table: Ability Modifiers and Bonus Spells). A sorcerer's selection of spells is extremely limited. A sorcerer begins play knowing four 0-level spells and two 1st-level spells of her choice. At each new sorcerer level, she gains one or more new spells, as indicated on Table: Sorcerer Spells Known. (Unlike spells per day, the number of spells a sorcerer knows is not affected by her Charisma score; the numbers on Table: Sorcerer Spells Known are fixed.) These new spells can be common spells chosen from the sorcerer/wizard spell list, or they can be unusual spells that the sorcerer has gained some understanding of through study. Upon reaching 4th level, and at every even-numbered sorcerer level after that (6th, 8th, and so on), a sorcerer can choose to learn a new spell in place of one she already knows. In effect, the sorcerer loses the old spell in exchange for the new one. The new spell's level must be the same as that of the spell being exchanged. A sorcerer may swap only a single spell at any given level, and must choose whether or not to swap the spell at the same time that she gains new spells known for the level. Unlike a wizard or a cleric a sorcerer need not prepare her spells in advance. She can cast any spell she knows at any time, assuming she has not yet used up her spells per day for that spell level.",
    classAbility2: "Bloodline:Each sorcerer has a source of magic somewhere in her heritage that grants her spells, bonus feats, an additional class skill, and other special abilities. This source can represent a blood relation or an extreme event involving a creature somewhere in the family's past. For example, a sorcerer might have a dragon as a distant relative or her grandfather might have signed a terrible contract with a devil. Regardless of the source, this influence manifests in a number of ways as the sorcerer gains levels. A sorcerer must pick one bloodline upon taking her first level of sorcerer. Once made, this choice cannot be changed. At 3rd level, and every two levels thereafter, a sorcerer learns an additional spell, derived from her bloodline. These spells are in addition to the number of spells given on Table: Sorcerer Spells Known. These spells cannot be exchanged for different spells at higher levels. At 7th level, and every six levels thereafter, a sorcerer receives one bonus feat, chosen from a list specific to each bloodline. The sorcerer must meet the prerequisites for these bonus feats. Filled with magical power that screams for release, sorcery is not so much a calling as a blessing—or a curse. For some sorcerers, this arcane birthright manifests in subtle and carefully controlled ways, assisting in their manipulation of others or the pursuit of lofty goals. For others, it is wild and unpredictable, the primal and explosive lashing out of a power greater than themselves. Presented below are a number of bloodlines representing the mysterious origin of your sorcerer's abilities. The following bloodlines represent only some of the possible sources of power that a sorcerer can draw upon. Unless otherwise noted, most sorcerers are assumed to have the arcane bloodline. Bloodline Mutations: Although heirs to similar arcane bloodlines may share commonalities, the unique circumstances in which a bloodline enters a bloodrager or sorcerer's lineage can result in the manifestation of particularly strange or unusual bloodline powers known as mutations. Whenever a bloodrager or a sorcerer gains a new bloodline power, she can swap her bloodline power for a bloodline mutation whose prerequisites she meets. Once this choice is made, it cannot be changed, and a bloodrager or sorcerer cannot swap a bloodline power that she has altered or replaced with an archetype for a bloodline mutation. A bloodrager need not be in a bloodrage to use her bloodline mutation powers. Alternatively, a bloodrager or sorcerer can select a bloodline mutation in place of a bloodline bonus feat, provided her class level is at least equal to the level of the bloodline ability the mutation normally replaces.",
    classAbility3: "Cantrips:Sorcerers learn a number of cantrips, or 0-level spells, as noted on Table: Sorcerer Spells Known under “Spells Known.” These spells are cast like any other spell, but they do not consume any slots and may be used again.",
    classAbility4: "Eschew Materials:A sorcerer gains Eschew Materials as a bonus feat at 1st level.",
    classAbility5: '',
    classAbility6: '',
    classAbility7: '',
    classAbility8: '',
    classAbility9: '',
    classAbility10: '',
    description: "Scions of innately magical bloodlines, the chosen of deities, the spawn of monsters, pawns of fate and destiny, or simply flukes of fickle magic, sorcerers look within themselves for arcane prowess and draw forth might few mortals can imagine. Emboldened by lives ever threatening to be consumed by their innate powers, these magic-touched souls endlessly indulge in and refine their mysterious abilities, gradually learning how to harness their birthright and coax forth ever greater arcane feats. Just as varied as these innately powerful spellcasters' abilities and inspirations are the ways in which they choose to utilize their gifts. While some seek to control their abilities through meditation and discipline, becoming masters of their fantastic birthright, others give in to their magic, letting it rule their lives with often explosive results. Regardless, sorcerers live and breathe that which other spellcasters devote their lives to mastering, and for them magic is more than a boon or a field of study; it is life itself.",
	oathBreaking: '',
	Source: 'Core Rulebook',
    image: 'https://www.d20pfsrd.com/wp-content/uploads/sites/12/2017/03/sorceress_by_yamaorce-db2aktf.jpg',
	notes: ''
    }
]

const prestigeClass = [
    {
    name: 'Mystic Theurge',
	hitDie: 'd6',
	requirements: 'Skills:Knowledge(arcana) 3 ranks, Knowledge(religion) 3 ranks, Spells: Able to cast 2nd-level divine and 2nd-level arcane spells.',
	classSkills: 'Knowledge(arcana(Int), Knowledge(religeon)(Int), Sense Motive(Wis), Spellcraft(Int)',
	skillRanksPerLevel: '2 + Int modifier',
	level1BABAndSaves: '+0bab +0fort +0ref +1will',
    level2BABAndSaves: '+1bab +1fort +1ref +1will',
    level3BABAndSaves: '+1bab +1fort +1ref +2will',
    level4BABAndSaves: '+2bab +1fort +1ref +2will',
    level5BABAndSaves: '+2bab +2fort +2ref +3will',
    level6BABAndSaves: '+3bab +2fort +2ref +3will',
    level7BABAndSaves: '+3bab +2fort +2ref +4will',
    level8BABAndSaves: '+4bab +3fort +3ref +4will',
    level9BABAndSaves: '+4bab +3fort +3ref +5will',
    level10BABAndSaves: '+5bab +3fort +3ref +5will',
	weaponProficiencies: '',
	armorProficiency: '',
	classAbility1: "Combined Spells:A mystic theurge can prepare and cast spells from one of his spellcasting classes using the available slots from any of his other spellcasting classes. Spells prepared or cast in this way take up a slot one level higher than they originally occupied. This ability cannot be used to cast a spell at a lower level if that spell exists on both spell lists. At 1st level, a mystic theurge can prepare 1st-level spells from one of his spellcasting classes using the 2nd-level slots of the other spellcasting class. Every two levels thereafter, the level of spells that can be cast in this way increases by one, to a maximum of 5th-level spells at 9th level (these spells would take up 6th-level spell slots). The components of these spells do not change, but they otherwise follow the rules for the spellcasting class used to cast the spell. Spontaneous spellcasters can only select spells that they have prepared that day using non-spontaneous classes for this ability, even if the spells have already been cast. For example, a cleric/sorcerer/mystic theurge can use this ability to spontaneously cast a bless spell using a 2nd-level sorcerer spell slot, if the character had a prepared bless spell using a 1st-level cleric spell slot, even if that spell had already been cast that day.",
    classAbility2: "Spell Synthesis:At 10th level, a mystic theurge can cast two spells, one from each of his spellcasting classes, using one action. Both of the spells must have the same casting time. The mystic theurge can make any decisions concerning the spells independently. Any target affected by both of the spells takes a -2 penalty on saves made against each spell. The mystic theurge receives a +2 bonus on caster level checks made to overcome spell resistance with these two spells. A mystic theurge may use this ability once per day.",
    classAbility3: '',
    classAbility4: '',
    classAbility5: '',
    classAbility6: '',
    classAbility7: '',
    classAbility8: '',
    classAbility9: '',
    classAbility10: '',
	spellsPerDayLevel1: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsPerDayLevel2: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsPerDayLevel3: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsPerDayLevel4: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsPerDayLevel5: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsPerDayLevel6: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsPerDayLevel7: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsPerDayLevel8: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsPerDayLevel9: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsPerDayLevel10: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
    spellsKnownLevel1: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsKnownLevel2: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsKnownLevel3: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsKnownLevel4: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsKnownLevel5: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsKnownLevel6: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsKnownLevel7: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsKnownLevel8: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsKnownLevel9: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
	spellsKnownLevel10: "+1 level of existing arcane spellcasting class/+1 level of existing divine spellcasting class",
    description: 'Mystic theurges place no boundaries on their magical abilities and find no irreconcilable paradox in devotion to the arcane as well as the divine. They seek magic in all of its forms, finding no reason or logic in denying themselves instruction by limiting their knowledge to one stifling paradigm, though many are simply hungry for limitless power. No matter what their motivations, mystic theurges believe that perception is reality, and through the divine forces and astral energies of the multiverse, that perception can be used to manipulate and control not only the nature of this reality, but destiny itself.',
    source: '',
    image: 'https://static.wikia.nocookie.net/forgottenrealms/images/f/f3/Mystic_Theurge.JPG/revision/latest?cb=20070302074647',
	notes: ''
    }
]

const feats = [
    {
        name: "Sharp Senses",
        source: '',
        prerequisites: "Keen senses racial trait",
        benefits: "You receive a +4 racial bonus on Perception skill checks. This replaces the normal bonus from the keen senses racial trait.",
        general: 'true',
        combat: 'false',
        critical: 'false',
        teamwork: 'false',
        betrayal: 'false',
        metamagic: 'false',
        itemCreation: 'false',
        racial: 'true',
        monster: 'false',
        achievement: 'false',
        style: 'false',
        story: 'false',
        stare: 'false',
        performance: 'false',
        mythic: 'false',
        itemMastery: 'false',
        grit: 'false',
        panache: 'false',
        damnation: 'false',
        animalCompanion: 'false',
        conduit: 'false',
        bloodHex: 'false',
        image: '', 
        notes: ''  
    },
    {
        name: 'Contagious Spell',
        source: '',
        prerequisites: '',
        benefits: 'A caster level check to dispel or remove a contagious spell that fails by 5 or more causes it to spread from the original target to the creature that attempted to remove it. The spell spreads to the new target regardless of its normal range or any special targeting requirement like a melee or ranged touch attack. The spell is treated as if you had just cast it on the new target. The new target receives a saving throw or the benefit of spell resistance (if applicable) if the spell normally allows it.',
        general: 'false',
        combat: 'false',
        critical: 'false',
        teamwork: 'false',
        betrayal: 'false',
        metamagic: "+2",
        itemCreation: 'false',
        racial: 'false',
        monster: 'false',
        achievement: 'false',
        style: 'false',
        story: 'false',
        stare: 'false',
        perfomance: 'false',
        mythic: 'false',
        itemMastery: 'false',
        grit: 'false',
        panache: 'false',
        damnation: 'false',
        animalCompanion: 'false',
        conduit: 'false',
        bloodHex: 'false',
        image: '', 
        notes: ''  
    },
    {
        name: "Ride-by-Attack",
        source: '',
        prerequisites: 'Ride 1 rank, Mounted Combat',
        benefits: "When you are mounted and use the charge action, you may move and attack as if with a standard charge and then move again (continuing the strait line of the charge). Your total movment for the round can't exceed double your mounted speed. You and your mount do not provoke and attack of opportunity from the opponent that you attack.",
        general: 'false',
        combat: 'true',
        critical: 'false',
        teamwork: 'false',
        betrayal: 'false',
        metamagic: '',
        itemCreation: 'false',
        racial: 'false',
        monster: 'false',
        achievement: 'false',
        style: 'false',
        story: 'false',
        stare: 'false',
        perfomance: 'false',
        mythic: 'false',
        itemMastery: 'false',
        grit: 'false',
        panache: 'false',
        damnation: 'false',
        animalCompanion: 'false',
        conduit: 'false',
        bloodHex: 'false',
        image: "https://static.wikia.nocookie.net/dungeonsdragons/images/6/64/Cavalier.jpg/revision/latest/scale-to-width-down/346?cb=20140731213132", 
        notes: ''  
    }
]

const item = [
    {
    itemType: 'plant',
    metamagic: 'false',
    name: 'Altitude Fern',
    slot: '',
    aura: 'moderate abjuration',
    casterLevel: 6,
    potionLevel: 0,
    cost: 12000,
    weight: '50lbs',
    description: "This evergreen has soft green leaves and sprouts fronds laden with unusual sky-blue berries. When ingested, these waxy berries grant the imbiber immunity to all effects caused by high altitude. They do not grant immunity to damage from extreme temperatures, nor do they grant the ability to survive without air. The effects of a berry last for 1 day. An altitude fern produces up to six berries a day, and it bears no more than 50 berries at a time. The bush has one 13-week growing season per year, producing berries in the fall.",
    castingTime: '',
    components: '',
    cultivationOrCreationRequirments: 'Cost 6000; feats Cultivate Magic Plants; spells endure elements; skills cultivator must have 3 ranks in Knowledge(nature)',
    image: 'https://cdn.pixabay.com/photo/2017/04/13/14/52/fern-2227783_960_720.jpg',
    source: '',
    notes: ''
    },
    {
    itemType: 'Ring',
    metamagic: 'false',
    name: 'Ring of Rat Fangs',
    slot: 'finger',
    aura: 'faint transmutation',
    casterLevel: 3,
    potionLevel: 0,
    cost: 5000,
    weight: '',
    description: "This bone ring is the shape of an elongated rat biting its own tail. The wearer gains a bite attack as a primary natural attack. This attack deals 1d4 points of piercing damage for a Medium wearer or 1d3 points of damage for a Small wearer. After about a week of wearing the ring, the wearer's appearance becomes more ratlike, though she still looks like a member of her original race (for example, a human might gain prominent teeth).",
    castingTime: '',
    components: '',
    cultivationOrCreationRequirments: 'Forge Ring Feat;spells magic fang, polymorph; cost 2500',
    image: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61YsKXi9HWL._SL1500_.jpg',
    source: '',
    notes: ''
    }
]

const race = [
    {
    name: 'Wyrwood',
	racePoints: 20,
	source: 'Inner Sea Races pg. 253, Bestiary 4 pg. 280',
	scoreModifierSTR: 0,
	scoreModifierDex: 2,
	scoreModifierCon: 0,
	scoreModifierInt: 2,
	scoreModifierWis: 0,
	scoreModifierCha: -2,
	type: 'Construct',
	size: 'small',
	baseSpeeds: '30ft',
	languages: 'Common, can choose Draconic, Dwarven, Elven, Gnome, Goblin, and Orc',
	racialimmunities: "see Construct",
	spellLikeAbilities: '',
	darkvision: 'true',
	darkvisionDistance: 60,
	lowLightVision: 'true',
	lowLightVisionDistance: 'Twice as far as a human',
	otherRacialAbility1: '',
	otherRacialAbility2: '',
	otherRacialAbility3: '',
	otherRacialAbility4: '',
	otherRacialAbility5: '',
	defensiveTraits: '',
	offensiveTraits: '',
	featAndSkillTraits: '',
	movementTraits: '',
	senseTraits: '',
	alternateTrait1: "Experimental Body: Some wyrwoods have been built from rare materials in an effort to imbue them with special properties. Choose one of the following abilities. This replaces darkvision and low-light vision. Source PPC:HoG Blessed: These wyrwoods contain divine relics. Wyrwoods with this trait can use divine favor once per day as a spell-like ability with a caster level equal to their Hit Dice. Enchanted: Crafted from the remnants of broken staves, wands and other items, these wyrwoods have a natural attunement to the arcane. Wyrwoods with this trait treat their Intelligence score as 2 higher for the purpose of determining bonus spells or extracts per day. Fey-Touched: These wyrwoods have components that create a powerful link to the First World. Wyrwoods with this trait can use charm animal once per day as a spell-like ability with a caster level equal to their Hit Dice. Scorched: These wyrwoods are built from the ruins of cities and structures destroyed by conflict. Once per day, after a successful melee attack against an enemy, wyrwoods with this trait can deal an additional number of points of damage equal to their Wisdom modifier as a free action.",
	alternateTrait2: "Living Machine: Through generations of refining the techniques of creation, many young wyrwoods have become closer to organic beings than constructs. These wyrwoods are constructs with the living machine subtype. They gain a Constitution score and can be targeted by spells and effects that target living creatures or constructs, as well as those that require a Fortitude save. They are no longer immune to ability damage, ability drain, energy drain, exhaustion, or fatigue. Wyrwoods with this trait require sleep, but they do not need to breathe or eat. They are not destroyed when reduced to 0 hit points, instead becoming unconscious and stable. They are destroyed when reduced to a negative number of hit points equal to their Constitution score. They can be raised or resurrected when destroyed. This alters the wyrwood’s creature type. Source PPC:HoG",
	alternateTrait3: "Repair Magic: Some wyrwoods have developed magic to keep them more self-sufficient. They can use make whole as a spell-like ability once per day. This racial trait replaces darkvision.",
	alternateTrait4: "Aura Seer: By altering the components used to grant a wyrwood its sight during its creation process, a creator wyrwood can craft a progeny which sees magical, psychic, and spiritual energies, although at the expense of its other physical senses. Wyrwoods with this trait gain detect magic as a constant spell-like ability, and also gain psychic tracking and see alignment as spell-like abilities which are each usable once per day. This trait replaces darkvision and low-light vision. Source JBE:BoHR:AWyr",
	alternateTrait5: "Emotional: Through a mistake of the creation process or an intentional design choice, a wyrwood with this alternate racial trait possesses emotions. A wyrwood that desires to make use of or benefit from a class feature that provides morale bonuses (such as the barbarian’s rage ability or the wilder’s euphoric surge ability) requires this alternate racial trait. A wyrwood with this alternate racial ability is not immune to mind-affecting effects. Source JBE:BoHR:AWyr",
	alternateTrait6: "Stone Sentinel: A rare few wyrwood communes use stone to craft new members of their race rather than wood. Such wyrwoods gain a +2 bonus to natural armor and DR 1/magic, but lose their racial bonus to Dexterity and have their base speeds reduced by 5 feet. (This also affects how some spells interact with the wyrwood; see the “Wood-Affecting Spells and Powers” sidebar later in this book for more details.) Source JBE:BoHR:AWyr",
	alternateTrait7: "Swimmer: The wyrwood has a swim speed of 20 feet and gains a +8 racial bonus to Swim checks. Wyrwoods with this racial trait have a base speed of 20 feet. Source JBE:BoHR:AWyr",
	alternateTrait8: "War Titan: Some wyrwood creators have increased the size of their progeny over time to make them more formidable and intimidating opponents. Such wyrwoods are Medium-sized creatures and gain 20 bonus hit points when created; however, their base speed is decreased to 20 feet due to the extra weight of their bodies. Source JBE:BoHR:AWyr",
	racialFeats: '',
	racialItems: '',
	
	favoredClassOptions: "Alchemist:Reduce the mental ability score penalty of the alchemist's mutagens by 1/5 (minimum 0).Arcanist: Add 1/4 to the arcanist's level for the spell resistance exploit. Cleric:Add 1/4 to the cleric's caster level when casting spells or using abilities from the Law domain or one of its subdomains, or when casting spells with the lawful descriptor. Magus:Add 2 rounds to the duration of the magus' arcane pool enhancements. Oracle:Add one spell known from the wizard's evocation school spell list. This spell must be at least 1 level below the highest-level spell the oracle can cast. That spell is treated as 1 level higher unless it is also on the oracle spell list. Paladin:The paladin gains 1/4 of a bonus spell per day of the highest-level spell that the paladin can cast. Psychic: The psychic gains 1/6 of a phrenic amplification. Rogue: The rogue gains 1/6 of a rogue talent. Slayer: The slayer gains 1/6 of a slayer talent. Wizard: The wizard gains 1/6 of a bonus item creation, metamagic, or spell mastery feat.",
	racialArchetypesAndBloodlines: '',
	randomStartingAgeAdulthood: '',
	randomStartingAgeIntuitive: '',
	randomStartingAgeSelfTaught: '',
	randomStartingAgeTrained: '',
	randomHeightMale: '',
    randomWeightMale: '',
    randomHeightFemale: '',
    randomWeightFemale: '',
	otherDescriptionNotes: '',
	racialLore: 'This relatively young race was created by a cabal of wizards who needed nimble and skilled construct servants to do their dirty work. This cabal was interested in creating magical machines, so they built their tools to be small, agile, and clever. Over time, the cabal pushed the limits too far and created minions with free will, and these first wyrwoods began to question why they were involved in their masters’ petty intrigues. When the wizards forced the wyrwoods to fight each other as proxies for the wizards themselves, the constructs instead killed their creators and stole the notes on how to create more of their kind, allowing them to perpetuate their race.',
    image: 'https://2e.aonprd.com/Images/Monsters/Wyrwood.png',
	notes: ''
    }
]

const spell = [
    {
    name: 'Fireball',
    source: '',
    school: 'Evocation[fire]',
	descriptor: 'A fireball spell generates a searing explosion of flame that detonates with a low roar and deals 1d6 points of fire damage per caster level (maximum 10d6) to every creature within the area. Unattended objects also take this damage. The explosion creates almost no pressure. You point your finger and determine the range (distance and height) at which the fireball is to burst. A glowing, pea-sized bead streaks from the pointing digit and, unless it impacts upon a material body or solid barrier prior to attaining the prescribed range, blossoms into the fireball at that point. An early impact results in an early detonation. If you attempt to send the bead through a narrow passage, such as through an arrow slit, you must “hit” the opening with a ranged touch attack, or else the bead strikes the barrier and detonates prematurely. The fireball sets fire to combustibles and damages objects in the area. It can melt metals with low melting points, such as lead, gold, copper, silver, and bronze. If the damage caused to an interposing barrier shatters or breaks through it, the fireball may continue beyond the barrier if the area permits; otherwise it stops at the barrier just as any other spell effect does.',
	levelAndClass: '3 bloodrager, 3 magus, 3 sorcerer/wizard, 3 fire domain, 3 elemental school fire, 3 bloodline efreeti, 3 mystery flame',
	materialComponents: 'A ball of bat guano and sulfur',
	somaticComponent: 'true',
	focus: 'false',
	verbalComponent: 'true',
	castingTime: '1 standard action',
	range: 'long (400ft + 40ft/levl',
	target: 'Area 20ft Radius Spread',
	duration: 'instantaneous',
	savingThrow: 'Reflex Half',
	spellResistance: 'Yes',
	specialAbilities: '',
    image: 'https://guildberkeley.files.wordpress.com/2020/12/fireball.jpg?w=300',
    notes: ''
    
    }
]

const weapon = [
    {
    name: 'Greataxe',
    simple: 'false',
	martial: 'true',
	exotic: 'false',
    unarmed: 'false',
    lightMelee: 'false',
    oneHandedMelee: 'false',
    twoHandedMelee: 'true',
    ranged: 'false',
    ammunition: 'false',
    cost: '20gp',
    damage: '(s)1d10 (m)1d12',
    critical: 'x3',
    range: 'melee',
    weight: '12lbs',
    bludgeon: 'false',
    piercing: 'false',
    slashing: 'true',
    special: '',
    description: "This two-handed battle axe is heavy enough that you can't wield it with one hand. The head may have one blade or two, and may be “bearded” (meaning hooked or trailing at the bottom) to increase cleaving power and help pull down enemy shields. The haft is usually 3 to 4 feet long.",
    image: 'https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/07a6d4cf4d695d6243b698bd89a9899a/large.jpg',
    source: '',
    notes: ''
    }
]
let seedData = async ()=> {
await Armor.deleteMany({})
await BaseClass.deleteMany({})
await PrestigeClass.deleteMany({})
await Feat.deleteMany({})
await Item.deleteMany({})
await Race.deleteMany({})
await Shield.deleteMany({})
await Spell.deleteMany({})
await Weapon.deleteMany({})
await Armor.insertMany(armor)
await Shield.insertMany(shield)
await Weapon.insertMany(weapon)
await Spell.insertMany(spell)
await Race.insertMany(race)
await Item.insertMany(item)
await Feat.insertMany(feats)
await PrestigeClass.insertMany(prestigeClass)
let baseclass = await BaseClass.insertMany(baseClass)


process.exit()
}
seedData()

