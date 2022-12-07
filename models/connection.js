require('dotenv').config()
const mongoose = reuqire('mongoose')

/////////////////////////////////////////
//         DATABASE CONNECTION         //
/////////////////////////////////////////
const DATABASE_URL = proncess.env.DATABASE_URL
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

/////////////////////////////////////////
//      ESTABLISHING A CONNECTION      //
/////////////////////////////////////////
mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
.on('open', () => console.log('Connected to Mongoose!'))
.on('close', () => console.log('Disconnected to Mongoose'))
.on('error', (error) => console.log(error()))

///////////////////////
//      EXPORTS     //
//////////////////////
module.exports = mongoose

