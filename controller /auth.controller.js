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