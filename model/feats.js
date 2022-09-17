const mongoose = require('mongoose')

const featSchema = new mongoose.Schema({
    name: String,
    source: String,
    prerequisites: String,
    benefits: String,
    general: String,
    combat: String,
    critical: String,
	teamwork: String,
    betrayal: String,
    metamagic: String,
    itemCreation: String,
    racial: String,
    monster: String,
    achievement: String,
    style: String,
    story: String,
    stare: String,
    performance: String,
    mythic: String,
    itemMastery: String,
    grit: String,
    panache: String,
    damnation: String,
    animalCompanion: String,
    conduit: String,
    bloodHex: String,
    image: String, 
	notes: String
},
{
    timestamps:true
})

const Feat = mongoose.model('Feat', featSchema)

module.exports = Feat