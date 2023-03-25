import mongose from 'mongoose'

const Uri_Mongo = 'mongodb+srv://Restaurant-ecommerce:foaQTCIJXYNjQCBU@cluster0.nbhqxkl.mongodb.net/Restaurant'

const ConectarDb = async() => {
    try {
        await mongose.connect(Uri_Mongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            bufferCommands: true,
        })
        console.log('Conectado :)')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

export default ConectarDb
