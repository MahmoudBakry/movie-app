const mongoose = require('mongoose'); 

const catShema = new mongoose.Schema({

    name : String, 
    image : String
})

module.exports =  mongoose.model('categories', catShema)