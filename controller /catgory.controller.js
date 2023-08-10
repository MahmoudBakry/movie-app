const mongoose = require('mongoose'); 
const Catgory = require('../models/category.model');

module.exports = {

addNewCategory : async function(req, res){
    let newDoc =  new Catgory({
        name : req.body.name, 
        image : req.body.image
    })

    let docDetails = await newDoc.save(); 
    res.status(201).json(docDetails); 
}, 

getAllCategory : async function(req, res){
    let allDocs = await Catgory.find();
    res.json(allDocs);
}

}