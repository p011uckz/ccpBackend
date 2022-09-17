const mongoose = require('mongoose')

const mongoURI = 'mongodb+srv://curriermjeremy:Caxasnuts2@@cluster0.hdau3pi.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoURI, {
    useNewUrlParser: true
})
.then(instance => {
    console.log(`connected on ${instance.connections[0].name}`)
})
.catch(err => console.log(`got an error see details, ${err}`))