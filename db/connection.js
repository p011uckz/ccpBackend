const mongoose = require('mongoose')



mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true
})
.then(instance => {
    console.log(`connected on ${instance.connections[0].name}`)
})
.catch(err => console.log(`got an error see details, ${err}`))