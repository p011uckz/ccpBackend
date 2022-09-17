const mongoose = require('mongoose')

const shieldSchema = new mongoose.Schema({
    name: String,
    cost: String,
    shieldBonus: Number,
    maximumDexBonus: String,
    armorCheckPenalty: Number,
    arcaneSpellFailure: Number,
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

const Shield = mongoose.model('Shield', shieldSchema)

module.exports = Shield