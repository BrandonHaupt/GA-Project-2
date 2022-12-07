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
            history: "The Maine Coon cat is considered the only longhair breed native to the United States. This breed probably was introduced by seamen who sailed into New England. The cats they carried on their ships most likely left the ship either permanently or just for a little shore leave, bred with the existing native cats, and ultimately created a breed of their own The show career for the Maine Coon cat began in New York in 1895 when the best cat award was given to a tabby Maine Coon named Leo. Leo kept winning at the Boston cat shows until 1900 when he was defeated by his own son. After this, the love affair with the Persian began, and the Maine Coon cat dropped into second place in popularity. This ranking has changed once again in recent years and the Maine Coon is now once again ‘Americas Cat."
        },
        {
            breed: "Tuxedo Cats", 
            hairType: "Short", 
            tendencyToShed: "High", 
            lifeExpectency: "up to 20 Years", 
            weightRange: {male: "Medium: 8-15 lbs", female: "Medium: 6-12 lbs"}, 
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.redd.it%2F4l29mxgreag31.jpg%3Fauto%3Dwebp%26s%3D439d4dc932fdb2b58e0d380b608d019258d60804&f=1&nofb=1&ipt=c9726fc6b907c764c4c99ddbc580ac2307d0995e9143da4b495a27d3183ff39d&ipo=images",
            personality: "The Maine Coon cat is sweet tempered and gentle. She loves her parents and adapts to any environment as long as she has some exercise room. When she runs, she can be quite loud but her soft, quiet voice reassures you that this lion is truly a lamb.", 
            history: "The Maine Coon cat is considered the only longhair breed native to the United States. This breed probably was introduced by seamen who sailed into New England. The cats they carried on their ships most likely left the ship either permanently or just for a little shore leave, bred with the existing native cats, and ultimately created a breed of their own The show career for the Maine Coon cat began in New York in 1895 when the best cat award was given to a tabby Maine Coon named Leo. Leo kept winning at the Boston cat shows until 1900 when he was defeated by his own son. After this, the love affair with the Persian began, and the Maine Coon cat dropped into second place in popularity. This ranking has changed once again in recent years and the Maine Coon is now once again ‘Americas Cat."
        },
        {
            breed: "Sphynx", 
            hairType: "None", 
            tendencyToShed: "None", 
            lifeExpectency: "8-14 Years", 
            weightRange: {male: "Medium: < 12 lbs", female: "Medium: < 12 lbs"}, 
            url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fuploads-ssl.webflow.com%2F5ac2dbe1b7436f01bb645207%2F5afc94c93a658550c77cca85_Sphynx-kittens.jpg&f=1&nofb=1&ipt=314439dbbc16a3223ddcb6b4c3bb7c7e4c126e426b582b55b9dfdee36b2ee66f&ipo=images",
            personality: "The sphynx cat is an energetic, acrobatic performer who loves to show off for attention. She has an unexpected sense of humor that is often at odds with her dour expression. Friendly and loving, this is a loyal breed who will follow you around the house and try to involve herself in whatever you're doing, grabbing any opportunity to perch on your shoulder or curl up in your lap. As curious and intelligent as she is energetic, these traits can make her a bit of a handful. For her own safety, the sphynx does best as an exclusively indoor cat, and generally gets along well with children other pets.", 
            history: "Originally named the Canadian hairless, the sphynx got its start in Toronto, Canada in 1966 when a litter of domestic shorthair kittens included a hairless kitten as the result of a naturally occurring genetic mutation. Although other hairless kittens had been born prior to this, the sphynx as we know it today is the result of selectively breeding these hairless cats to normal-coated cats and then breeding their offspring back again to other hairless cats, a process that has not only produced the desired breed characteristics but also served to widen the gene pool to produce a genetically hardy breed of cat, according to Cattime. But it wasn't until 2002 that the Cat Fanciers' Association accepted the sphynx for competition in the championship class, and other cat associations quickly followed suit. If the sphynx looks familiar to you, you might be thinking of Mr. Bigglesworth, the cat belonging to Dr. Evil in the Austin Powers movies, played by a sphynx by the name of Ted NudeGent. And on the TV show Friends, the character Rachel, played by Jennifer Aniston, once adopted a sphynx While the sphynx's unusual looks are attention-grabbing and might even be off-putting to some people, what these cats lack in fur is more than made up for in personality. Although sphynx owners are often initially attracted to the shock value of having a hairless cat, not to mention the lack of shedding to deal with, most will tell you that they fell in love with their sphynx, who proved to be a delightful pet. If you're looking for a fun and affectionate companion, you need look no further than the sphynx"
        }
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