const mongoose = require('mongoose')

const spellSchema = new mongoose.Schema({
    name: String,
    source: String,
    school: String,
	descriptor: String,
	levelAndClass: String,
	materialComponents: String,
	somaticComponent: String,
	focus: String,
	verbalComponent: String,
	castingTime: String,
	range: String,
	target: String,
	duration: String,
	savingThrow: String,
	spellResistance: String,
	specialAbilities: String,
    image: String,
    notes: String
},
{
    timestamps:true
})

const Spell = mongoose.model('Spell', spellSchema)

module.exports = Spell