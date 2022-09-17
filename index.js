const express = require('express')
const app = express()
const PORT = 3001
const morgan = require('morgan')
const armorRoutes = require('./routes/armorRoutes')
const baseClassRoutes = require('./routes/baseClassRoutes')
const raceRoutes = require('./routes/raceRoutes')
const featRoutes = require('./routes/featRoutes')
const itemRoutes = require('./routes/itemRoutes')
const prestigeClassRoutes = require('./routes/prestigeClassRoutes')
const shieldRoutes = require('./routes/shieldRoutes')
const spellRoutes = require('./routes/spellRoutes')
const weaponRoutes = require('./routes/weaponRoutes')


const cors = require('cors')


require('./db//connection')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/armor', armorRoutes)
app.use('/baseClass', baseClassRoutes)
app.use('/race', raceRoutes)
app.use('/feat', featRoutes)
app.use('/item', itemRoutes)
app.use('/prestigeClass', prestigeClassRoutes)
app.use('/shield', shieldRoutes)
app.use('/spell', spellRoutes)
app.use('/weapon', weaponRoutes)

app.get('/',(req, res) => {
    res.json("Let's play!")
})


app.listen(PORT, ()=>{
    console.log("You're backend is running, hope your front can keep up", PORT)
})