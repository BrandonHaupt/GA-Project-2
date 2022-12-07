////////////////////////////////////
//      IMPORT DEPENDENCIES      //
///////////////////////////////////
const express = require('express')
const Cat = require('../models/cat')

/////////////////////////////
//      CREATE ROUTE      //
////////////////////////////
const router = express.Router()

const body = req.body
const id = req.params.id


/////////////////////////////////////////
//               ROUTES                //
/////////////////////////////////////////

/////////////////
//    SEED    //
////////////////
router.get('/cats/seed', (req,res) => {})

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




///////////////////
//    CREATE    //
//////////////////
router.post('/cats', (req,res) => {
    
    Cat.create(body, (err, cat) => {
        res.redirect('/cats')
    })
})




//////////////////
//    EDIT     //
/////////////////
router.get('/cats/:id/edit', (req, res) => {

    Cat.findById(id, (err, cat) => {
        res.render('cats/edit.ejs', {cat})
    })
})





///////////////////
//    UPDATE    //
//////////////////
router.put('/cats/:id', (req, res) => {
    Cat.findbyIdAndUpdate(id, body, {new: true}, (err, cat) => {
        res.redirect('/cats')
    })
})





///////////////////
//    DELETE    //
//////////////////
router.delete('/cats/:id', (req, res) => {
    Cat. findbyIdAndDelete(id, (err, cat) => {
        res.redirect('/cats')
    })
})




/////////////////
//    SHOW    //
////////////////
//***** KEEP THIS AT BOTTOM *****
router.get('/cats/:id', (req, res) => {
    Cat.findById(id, (err, cat) => {
        res.render('cats/show.ejs', {cat})
    })
})

///////////////////////
//      EXPORTS     //
//////////////////////
module.exports = router