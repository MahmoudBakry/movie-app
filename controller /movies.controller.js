const Movie = require('../models/movie.model');



module.exports = {

    addNewMovie : async function(req, res){
        let newDoc = await new Movie(req.body); 
        let docSaved = await newDoc.save(); 
        res.status(201).json(docSaved)
    }, 

    retriveOneMovie : async function(req, res){
        let movieDetails = await Movie.findById(req.params.id)
        .populate('category')

        movieDetails.numberOfWatch ++; 
        await movieDetails.save();
        res.json(movieDetails)
    }
}