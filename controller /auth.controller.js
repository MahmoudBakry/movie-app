const mongoose = require('mongoose'); 
const User = require('../models/user.model');

module.exports = {

signup : async function(req, res){
    let newUser = new User({
        name : req.body.name, 
        age : req.body.age, 
        password : req.body.password,
        email : req.body.email 
    })
let userDetails = await newUser.save();
res.status(201); 
res.json(userDetails);
    
},



}