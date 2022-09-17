const mongoose = require('mongoose')

const weaponSchema = new mongoose.Schema({
    name: String,
    simple: String,
	martial: String,
	exotic: String,
    unarmed: String,
    lightMelee: String,
    oneHandedMelee: String,
    twoHandedMelee: String,
    ranged: String,
    ammunition: String,
    cost: String,
    damage: String,
    critical: String,
    range: String,
    weight: String,
    bludgeon: String,
    piercing: String,
    slashing: String,
    special: String,
    description: String,
    image: String,
    source: String,
    notes: String
},
{
    timestamps:true
})

const Weapon = mongoose.model('Weapon', weaponSchema)

module.exports = Weapon