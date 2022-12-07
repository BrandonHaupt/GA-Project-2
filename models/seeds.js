require('dotenv').config()
const mongoose = reuqire('./connection')
const Cat = require('./cat')

mongoose.connection.on('open', ()=>{
    const startingCats = [
        {
            breed: "Maine Coon", 
            hairType: "Long", 
            tendencyToShed: "High", 
            lifeExpectency: "9-13 Years", 
            weightRange: {male: "Large: >12 lbs", female: "8-12 lbs"}, 
            personality: "The Maine Coon cat is sweet tempered and gentle. She loves her parents and adapts to any environment as long as she has some exercise room. When she runs, she can be quite loud but her soft, quiet voice reassures you that this lion is truly a lamb.", 
            history: "The Maine Coon cat is considered the only longhair breed native to the United States. This breed probably was introduced by seamen who sailed into New England. The cats they carried on their ships most likely left the ship either permanently or just for a little shore leave, bred with the existing native cats, and ultimately created a breed of their own The show career for the Maine Coon cat began in New York in 1895 when the best cat award was given to a tabby Maine Coon named Leo. Leo kept winning at the Boston cat shows until 1900 when he was defeated by his own son. After this, the love affair with the Persian began, and the Maine Coon cat dropped into second place in popularity. This ranking has changed once again in recent years and the Maine Coon is now once again ‘Americas Cat."},

        {breed: "Tuxedo Cats", 
        hairType: "Short", 
        tendencyToShed: "High", 
        lifeExpectency: "up to 20 Years", 
        weightRange: {male: "Medium: 8-15 lbs", female: "Medium: 6-12 lbs"}, 
        personality: "The Maine Coon cat is sweet tempered and gentle. She loves her parents and adapts to any environment as long as she has some exercise room. When she runs, she can be quite loud but her soft, quiet voice reassures you that this lion is truly a lamb.", 
        history: "The Maine Coon cat is considered the only longhair breed native to the United States. This breed probably was introduced by seamen who sailed into New England. The cats they carried on their ships most likely left the ship either permanently or just for a little shore leave, bred with the existing native cats, and ultimately created a breed of their own The show career for the Maine Coon cat began in New York in 1895 when the best cat award was given to a tabby Maine Coon named Leo. Leo kept winning at the Boston cat shows until 1900 when he was defeated by his own son. After this, the love affair with the Persian began, and the Maine Coon cat dropped into second place in popularity. This ranking has changed once again in recent years and the Maine Coon is now once again ‘Americas Cat."}
    ]

    // Delete All Fruits
    // to seed: node models/seeds.js
    Cat.deleteMany({}, (err, data) => {
        Cat.create(startingCats, (err, data) => {
            console.log(data)
            mongoose.connection.close()
        })
    })

})