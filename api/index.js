const express = require('express')
const app = express()
const PORT = 3001
const morgan = require('morgan')
const armorRoutes = require('../routes/armorRoutes')
const baseClassRoutes = require('../routes/baseClassRoutes')
const raceRoutes = require('../routes/raceRoutes')
const featRoutes = require('../routes/featRoutes')
const itemRoutes = require('../routes/itemRoutes')
const prestigeClassRoutes = require('../routes/prestigeClassRoutes')
const shieldRoutes = require('../routes/shieldRoutes')
const spellRoutes = require('../routes/spellRoutes')
const weaponRoutes = require('../routes/weaponRoutes')
require('dotenv').config()

const cors = require('cors')


require('../db/connection')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/api/armor', armorRoutes)
app.use('/api/baseClass', baseClassRoutes)
app.use('/api/race', raceRoutes)
app.use('/api/feat', featRoutes)
app.use('/api/item', itemRoutes)
app.use('/api/prestigeClass', prestigeClassRoutes)
app.use('/api/shield', shieldRoutes)
app.use('/api/spell', spellRoutes)
app.use('/api/weapon', weaponRoutes)

app.get('/api',(req, res) => {
    res.json("Let's play!")
})


module.exports = app; 

