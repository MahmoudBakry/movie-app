const mongoose = require('mongoose'); 

const userSchema = new mongoose.Schema({

    name : String, 
    email : {
        type : String, 
        required : true,
        unique : true 
    }, 
    password : String, 
    age : Number, 
    favouriteMovies : [{
        type : mongoose.Schema.Types.ObjectId, 
        ref: 'movies'
    }]
})

module.exports =  mongoose.model('users', userSchema)