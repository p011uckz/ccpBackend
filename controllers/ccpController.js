// const { default: NewRace } = require('../../ccp-frontend/src/pages/NewRace')
const Armor = require('../model/armor')
const BaseClass = require('../model/coreClasses')
const Feat = require('../model/feats')
const Item = require('../model/items')
const PrestigeClass = require('../model/prestigeClasses')
const Race = require('../model/races')
const Shield = require('../model/shields')
const Spell = require('../model/spells')
const Weapon = require('../model/weapons')

const indexArmor = (req, res) => {
    Armor.find({}, (err, armor)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(armor)

    })
    
}

const createNewArmor = async (req, res) => {
    
    let newArmor = await Armor.create(req.body)

    res.json(newArmor)
}

const deleteArmor = (req, res) => {
    let {id} = req.params
    
    Armor.findByIdAndDelete(req.params.id, (err, deletedArmor) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedArmor)
    })
}

const getOneArmor = (req, res) => {
    Armor.findById(req.params.id, (err, armor) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(armor)
    })
}

const updateArmor = (req, res) => {
    Armor.findByIdAndUpdate(req.params.id, req.body, (err, armor) => {
        if(err){
            res.status(400).json(err)
            return
        }

        Armor.find({}, (error, armors ) => {
            res.json(armors)
        })
    })
}

const indexBaseClass = (req, res) => {
    BaseClass.find({}, (err, baseClass)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(baseClass)

    })
}

const createNewBaseClass = async (req, res) => {
    
    let newBaseClass = await BaseClass.create(req.body)

    res.json(newBaseClass)
}

const deleteBaseClass = (req, res) => {
    let {id} = req.params
    
    BaseClass.findByIdAndDelete(req.params.id, (err, deletedBaseClass) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedBaseClass)
    })
}

const getOneBaseClass = (req, res) => {
    BaseClass.findById(req.params.id, (err, baseClass) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(baseClass)
    })
}

const updateBaseClass = (req, res) => {
    BaseClass.findByIdAndUpdate(req.params.id, req.body, (err, baseClass) => {
        if(err){
            res.status(400).json(err)
            return
        }

        BaseClass.find({}, (error, baseClasses ) => {
            res.json(baseClasses)
        })
    })
}

const indexFeat = (req, res) => {
    Feat.find({}, (err, feats)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(feats)

    })
}

const createNewFeat = async (req, res) => {
    let newFeat = await Feat.create(req.body)
    res.json(newFeat)
}

const deleteFeat = (req, res) => {
    let {id} = req.params
    
    Feat.findByIdAndDelete(req.params.id, (err, deletedFeat) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedFeat)
    })
}

const getOneFeat = (req, res) => {
    Feat.findById(req.params.id, (err, feat) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(feat)
    })
}

const updateFeat = (req, res) => {
    Feat.findByIdAndUpdate(req.params.id, req.body, (err, feat) => {
        if(err){
            res.status(400).json(err)
            return
        }

        Feat.find({}, (error, feats ) => {
            res.json(feats)
        })
    })
}

const indexItem = (req, res) => {
    Item.find({}, (err, item)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(item)

    })
}


const createNewItem = async (req, res) => {
    let newItem = await Item.create(req.body)
    res.json(newItem)
}

const deleteItem = (req, res) => {
    let {id} = req.params
    
    Item.findByIdAndDelete(req.params.id, (err, deletedItem) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedItem)
    })
}

const getOneItem = (req, res) => {
    Item.findById(req.params.id, (err, item) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(item)
    })
}

const updateItem = (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, (err, item) => {
        if(err){
            res.status(400).json(err)
            return
        }

        Item.find({}, (error, items ) => {
            res.json(items)
        })
    })
}

const indexPrestigeClass = (req, res) => {
    PrestigeClass.find({}, (err, prestigeClass)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(prestigeClass)

    })
}

const createNewPrestigeClass = async (req, res) => {
    let NewPrestigeClass = await PrestigeClass.create(req.body)
    res.json(NewPrestigeClass)
}

const deletePrestige = (req, res) => {
    let {id} = req.params
    
    PrestigeClass.findByIdAndDelete(req.params.id, (err, deletedPrestige) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedPrestige)
    })
}

const getOnePrestigeClass = (req, res) => {
    PrestigeClass.findById(req.params.id, (err, prestigeClass) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(prestigeClass)
    })
}

const updatePrestigeClass = (req, res) => {
    PrestigeClass.findByIdAndUpdate(req.params.id, req.body, (err, prestigeClass) => {
        if(err){
            res.status(400).json(err)
            return
        }

        PrestigeClass.find({}, (error, prestigeClasses ) => {
            res.json(prestigeClasses)
        })
    })
}

const indexRace = (req, res) => {
    Race.find({}, (err, race)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(race)

    })
}

const createNewRace = async (req, res) => {
    let NewRace = await Race.create(req.body)
    res.json(NewRace)
}

const deleteRace = (req, res) => {
    let {id} = req.params
    
    Race.findByIdAndDelete(req.params.id, (err, deletedRace) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedRace)
    })
}

const getOneRace = (req, res) => {
    Race.findById(req.params.id, (err, race) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(race)
    })
}

const updateRace = (req, res) => {
    Race.findByIdAndUpdate(req.params.id, req.body, (err, race) => {
        if(err){
            res.status(400).json(err)
            return
        }

        Race.find({}, (error, Races ) => {
            res.json(Races)
        })
    })
}

const indexShield = (req, res) => {
    Shield.find({}, (err, shield)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(shield)

    })
}

const createNewShield = async (req, res) => {
    let NewShield = await Shield.create(req.body)
    res.json(NewShield)
}

const deleteShield = (req, res) => {
    let {id} = req.params
    
    Shield.findByIdAndDelete(req.params.id, (err, deletedShield) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedShield)
    })
}

const getOneShield = (req, res) => {
    Shield.findById(req.params.id, (err, shield) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(shield)
    })
}

const updateShield = (req, res) => {
    Shield.findByIdAndUpdate(req.params.id, req.body, (err, shield) => {
        if(err){
            res.status(400).json(err)
            return
        }

        Shield.find({}, (error, shields ) => {
            res.json(shields)
        })
    })
}

const indexSpell = (req, res) => {
    Spell.find({}, (err, spell)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(spell)

    })
}

const createNewSpell = async (req, res) => {
    let NewSpell = await Spell.create(req.body)
    res.json(NewSpell)
}

const deleteSpell = (req, res) => {
    let {id} = req.params
    
    Spell.findByIdAndDelete(req.params.id, (err, deletedSpell) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedSpell)
    })
}

const getOneSpell = (req, res) => {
    Spell.findById(req.params.id, (err, spell) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(spell)
    })
}

const updateSpell = (req, res) => {
    Spell.findByIdAndUpdate(req.params.id, req.body, (err, spell) => {
        if(err){
            res.status(400).json(err)
            return
        }

        Spell.find({}, (error, spells ) => {
            res.json(spells)
        })
    })
}

const indexWeapon = (req, res) => {
    Weapon.find({}, (err, weapon)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(weapon)

    })
}

const createNewWeapon = async (req, res) => {
    let NewWeapon = await Weapon.create(req.body)
    res.json(NewWeapon)
}

const deleteWeapon = (req, res) => {
    let {id} = req.params
    
    Weapon.findByIdAndDelete(req.params.id, (err, deletedWeapon) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(deletedWeapon)
    })
}

const getOneWeapon = (req, res) => {
    Weapon.findById(req.params.id, (err, weapon) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(weapon)
    })
}

const updateWeapon = (req, res) => {
    Weapon.findByIdAndUpdate(req.params.id, req.body, (err, weapon) => {
        if(err){
            res.status(400).json(err)
            return
        }

        Weapon.find({}, (error, weapons ) => {
            res.json(weapons)
        })
    })
}

module.exports = {
    indexArmor,
    indexBaseClass,
    indexFeat,
    indexItem,
    indexPrestigeClass,
    indexRace,
    indexShield,
    indexSpell,
    indexWeapon,
    createNewArmor,
    createNewBaseClass,
    createNewFeat,
    createNewItem,
    createNewPrestigeClass,
    createNewRace,
    createNewShield,
    createNewSpell,
    createNewWeapon,
    deleteWeapon,
    deleteSpell,
    deleteShield,
    deleteRace,
    deletePrestige,
    deleteItem,
    deleteFeat,
    deleteBaseClass,
    deleteArmor,
    getOneArmor,
    getOneBaseClass,
    getOneFeat,
    getOneItem,
    getOnePrestigeClass,
    getOneRace,
    getOneShield,
    getOneSpell,
    getOneWeapon,
    updateArmor,
    updateBaseClass,
    updateFeat,
    updateItem,
    updatePrestigeClass,
    updateRace,
    updateShield,
    updateSpell,
    updateWeapon
    
}