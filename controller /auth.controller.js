const mongoose = require('mongoose'); 
const User = require('../models/user.model');

module.exports = {

signup : async function(req, res){

    if (!req.body.email) {
        return res.status(400).json({"message" : "email is required"})
    }

    let emailValidation = await User.findOne({email : req.body.email}); 
    if (emailValidation) {
        return res.status(400).json({message: "email is exist before"})
    }

    let newUser = new User({
        name : req.body.name, 
        age : req.body.age, 
        password : req.body.password,
        email : req.body.email 
    })
let userDetails = await newUser.save();
res.status(200); 
res.json(userDetails);
    
},


signin : async function(req, res){

let user = await User.findOne({email : req.body.email, password :req.body.password}); 
if (!user){

   return res.status(401).json({message : "email or password is incorrect"})
} 

return res.json(user)
}


}