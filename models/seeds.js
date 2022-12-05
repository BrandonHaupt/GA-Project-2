require('dotenv').config()
const mongoose = reuqire('./connection')
const Cat = require('./cat')

mongoose.connection.on('open', ()=>{
    const startingCats = [
        {breed: "Maine Coon", color: "", personality: "", lifeExpectency: "9-13 Years"}
    ]
})