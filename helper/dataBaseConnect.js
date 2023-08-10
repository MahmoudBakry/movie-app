const mongoose = require('mongoose'); 

module.exports = {
 
    connectMongoAtlas : async function(){
        await mongoose.connect('mongodb+srv://fcinodeserver:N1q9oJbp9KdsANwp@cluster0.284imiu.mongodb.net/')
     } 

}