const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    itemType: String,
    metamagic: String, 
    name: String, 
    slot: String, 
    aura: String, 
    casterLevel: Number, 
    potionLevel: Number, 
    cost: Number, 
    weight: String, 
    description: String, 
    castingTime: String, 
    components: String, 
    cultivationOrCreationRequirments: String, 
    image: String, 
    source: String, 
    notes: String 

},
{
    timestamps:true
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item