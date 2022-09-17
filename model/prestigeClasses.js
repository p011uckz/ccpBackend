const mongoose = require('mongoose')

const prestigeClassSchema = new mongoose.Schema({
    name: String,
	hitDie: String,
	requirements: String,
	classSkills: String,
	skillRanksPerLevel: String,
	level1BABAndSaves: String,
    level2BABAndSaves: String,
    level3BABAndSaves: String,
    level4BABAndSaves: String,
    level5BABAndSaves: String,
    level6BABAndSaves: String,
    level7BABAndSaves: String,
    level8BABAndSaves: String,
    level9BABAndSaves: String,
    level10BABAndSaves: String,
	weaponProficiencies: String,
	armorProficiency: String,
	classAbility1: String,
    classAbility2: String,
    classAbility3: String,
    classAbility4: String,
    classAbility5: String,
    classAbility6: String,
    classAbility7: String,
    classAbility8: String,
    classAbility9: String,
    classAbility10: String,
	spellsPerDayLevel1: String,
	spellsPerDayLevel2: String,
	spellsPerDayLevel3: String,
	spellsPerDayLevel4: String,
	spellsPerDayLevel5: String,
	spellsPerDayLevel6: String,
	spellsPerDayLevel7: String,
	spellsPerDayLevel8: String,
	spellsPerDayLevel9: String,
	spellsPerDayLevel10: String,
    spellsKnownLevel1: String,
	spellsKnownLevel2: String,
	spellsKnownLevel3: String,
	spellsKnownLevel4: String,
	spellsKnownLevel5: String,
	spellsKnownLevel6: String,
	spellsKnownLevel7: String,
	spellsKnownLevel8: String,
	spellsKnownLevel9: String,
	spellsKnownLevel10: String,
	description: String,
    source: String,
    image: String,
	notes: String
    
},
{
    timestamps:true
})

const PrestigeClass = mongoose.model('Prestige Class', prestigeClassSchema)

module.exports = PrestigeClass