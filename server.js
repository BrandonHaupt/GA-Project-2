/////////////////////////////////////////
//         IMPORTANT STUFF             //
/////////////////////////////////////////
require('dotenv').config() // Loads ENV Variable
const express = require('express')
const methodOverride = require('method-override') // Allows us to override post requests from our EJS/Forms
const CatRouter = require('./controllers/cats')
const PORT = process.env.PORT // Grabs our port

const app = express()


/////////////////////////////////////////
//             MIDDLEWARE              //
/////////////////////////////////////////
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use(CatRouter)


/////////////////////////////////////////
//          PORT LISTENER              //
/////////////////////////////////////////
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}, RELEASE THE CATS!`)
})