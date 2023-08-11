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
        
        if(!movieDetails) {
            console.log('noo')
            return res.status(404).json();
        }

        movieDetails.numberOfWatch ++; 
        await movieDetails.save();
        res.json(movieDetails)
    }, 

    //retrive all movies 
    retriveAllMovies : async function(req, res){
        let allDocs = await Movie.find()
        .populate('category')
        res.json(allDocs)
    }
}