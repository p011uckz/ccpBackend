const mongoose = require('mongoose')

const armorSchema = new mongoose.Schema({
    name: String,
    clothing: String,
    lightArmor: String,
    mediumArmor: String,
    heavyArmor: String,
    cost: String,
    armorOrShieldBonus: Number,
    maximumDexBonus: Number,
    armorCheckPenalty: Number,
    arcaneSpellFailure: Number,
    speedWith20ftBase: String,
    speedWith30ftBase: String,
    weight: String,
    material: String,
    image: String,
    description: String,
    source: String,
    notes: String
},
{
    timestamps:true
})

const Armor = mongoose.model('Armor', armorSchema)

module.exports = Armor