const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({

    name : String, 
    email : {
        type : String, 
        required : true
    }, 
    password : String, 
    age : Number
})

module.exports =  mongoose.model('users', userSchema)