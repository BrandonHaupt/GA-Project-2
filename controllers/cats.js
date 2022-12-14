////////////////////////////////////
//      IMPORT DEPENDENCIES      //
///////////////////////////////////
const express = require('express')
const Cat = require('../models/cat')

/////////////////////////////
//      CREATE ROUTE      //
////////////////////////////
const router = express.Router()



/////////////////////////////////////////
//               ROUTES                //
/////////////////////////////////////////

/////////////////
//    SEED    //
////////////////
// router.get('/cats/seed', (req,res) => {})

router.get("/", (req,res) => res.redirect('/cats'))




//////////////////
//    INDEX    //
/////////////////
router.get('/cats', (req, res) => {
    // Gets all the cats from mongoDB and sends them back
    Cat.find({}, (err, cats) => {
        res.render('cats/index.ejs', {cats})
    })
})

router.get('/cats/new', (req,res) => {
    res.render('cats/new.ejs')
})



///////////////////
//    CREATE    //
//////////////////
router.post('/cats', (req,res) => {
    const body = req.body
    
    Cat.create(body, (err, cat) => {
        res.redirect('/cats')
    })
})




//////////////////
//    EDIT     //
/////////////////
router.get('/cats/:id/edit', (req, res) => {
    const id = req.params.id

    Cat.findById(id, (err, cat) => {
        res.render('cats/edit.ejs', {cat})
    })
})





///////////////////
//    UPDATE    //
//////////////////
router.put('/cats/:id', (req,res) => {
    const id = req.params.id
    const body = req.body

    // Updates the kitty cat
    Cat.findByIdAndUpdate(id, body, {new: true}, (err, cat)=> {
        res.redirect('/cats')
    })
})





///////////////////
//    DELETE    //
//////////////////
router.delete('/cats/:id', (req,res) => {
    const id = req.params.id

    Cat.findByIdAndDelete(id, (err, cat) => {
        res.redirect('/cats')
    })
})






/////////////////
//    SHOW    //
////////////////
//***** KEEP THIS AT BOTTOM *****
router.get('/cats/:id', (req, res) => {
    const id = req.params.id

    Cat.findById(id, (err, cat) => {
        res.render('cats/show.ejs', {cat})
    })
})



///////////////////////
//      EXPORTS     //
//////////////////////
module.exports = router