///////////////////////////////////
//         CATS MODELS          //
//////////////////////////////////
const mongoose = require('./connection')
const {Schema, model} = mongoose


// How are data will look when going into the database!
const catSchema = new Schema({
    breed: String,
    hairType: String,
    tendencyToShed: String,
    lifeExpectency: String,
    weightRange: Object,
    personality: String,
    history: String
})

const Cat = model('cat', catSchema)


///////////////////////
//      EXPORTS     //
//////////////////////
module.exports = Cat