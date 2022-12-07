require('dotenv').config()
const mongoose = require('./connection')
const Cat = require('./cat')

mongoose.connection.on('open', ()=>{
    const startingCats = [
        {
            breed: "Maine Coon", 
            hairType: "Long", 
            tendencyToShed: "High", 
            lifeExpectency: "9-13 Years", 
            weightRange: {male: "Large: >12 lbs", female: "8-12 lbs"}, 
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-kLjgbxbdd3M%2FWk_uRD6-UUI%2FAAAAAAAAHc0%2F1KHrzTYs-QsbDjEZRw1AU6XturrQKuMRwCLcBGAs%2Fs1600%2Fmaine-coon-2.jpg&f=1&nofb=1&ipt=3668cb6f9f4cd05635db4d0782d529987ede7872706f6f507b834f37c4221994&ipo=images",
            personality: "The Maine Coon cat is sweet tempered and gentle. She loves her parents and adapts to any environment as long as she has some exercise room. When she runs, she can be quite loud but her soft, quiet voice reassures you that this lion is truly a lamb.", 
            history: "The Maine Coon cat is considered the only longhair breed native to the United States. This breed probably was introduced by seamen who sailed into New England. The cats they carried on their ships most likely left the ship either permanently or just for a little shore leave, bred with the existing native cats, and ultimately created a breed of their own The show career for the Maine Coon cat began in New York in 1895 when the best cat award was given to a tabby Maine Coon named Leo. Leo kept winning at the Boston cat shows until 1900 when he was defeated by his own son. After this, the love affair with the Persian began, and the Maine Coon cat dropped into second place in popularity. This ranking has changed once again in recent years and the Maine Coon is now once again ‘Americas Cat."},

        {
            breed: "Tuxedo Cats", 
            hairType: "Short", 
            tendencyToShed: "High", 
            lifeExpectency: "up to 20 Years", 
            weightRange: {male: "Medium: 8-15 lbs", female: "Medium: 6-12 lbs"}, 
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2F4l29mxgreag31.jpg%3Fauto%3Dwebp%26s%3D439d4dc932fdb2b58e0d380b608d019258d60804&f=1&nofb=1&ipt=c9726fc6b907c764c4c99ddbc580ac2307d0995e9143da4b495a27d3183ff39d&ipo=images",
            personality: "The Maine Coon cat is sweet tempered and gentle. She loves her parents and adapts to any environment as long as she has some exercise room. When she runs, she can be quite loud but her soft, quiet voice reassures you that this lion is truly a lamb.", 
            history: "The Maine Coon cat is considered the only longhair breed native to the United States. This breed probably was introduced by seamen who sailed into New England. The cats they carried on their ships most likely left the ship either permanently or just for a little shore leave, bred with the existing native cats, and ultimately created a breed of their own The show career for the Maine Coon cat began in New York in 1895 when the best cat award was given to a tabby Maine Coon named Leo. Leo kept winning at the Boston cat shows until 1900 when he was defeated by his own son. After this, the love affair with the Persian began, and the Maine Coon cat dropped into second place in popularity. This ranking has changed once again in recent years and the Maine Coon is now once again ‘Americas Cat."}
    ]

    // Delete All Cats
    // to seed: node models/seeds.js
    Cat.deleteMany({}, (err, data) => {
        Cat.create(startingCats, (err, data) => {
            console.log(data)
            mongoose.connection.close()
        })
    })

})