const mongoose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/CCP'

mongoose.connect(mongoURI, {
    useNewUrlParser: true
})
.then(instance => {
    console.log(`connected on ${instance.connections[0].name}`)
})
.catch(err => console.log(`got an error see details, ${err}`))