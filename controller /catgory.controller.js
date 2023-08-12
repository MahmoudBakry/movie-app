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
}, 

//update category 
updateCategory : async function(req, res){
    let categoryDetails = await Catgory.findById(req.params.id); 
    if (!categoryDetails) {
        return res.status(404).json();
    }

     await categoryDetails.updateOne({
        name : req.body.name ||categoryDetails.name, 
        image : req.body.image || categoryDetails.image
    })

     let newDoc = await Catgory.findById(req.params.id); 

    res.status(200).json(newDoc);
    
}

}