const mongoose = require('mongoose'); 

const movieSchema = new mongoose.Schema({

    name : String, 
    description: String, 
    rating : Number, 
    category : [{
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'categories'
    }],
    duration : String, 
    author : String, 
    dateOfProduction : {
        type : String
    }, 
    numberOfWatch : {
        type : Number,
        default : 0
    }, 
    image : String, 
    video : String,
})

module.exports =  mongoose.model('movies', movieSchema)