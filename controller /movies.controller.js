const Movie = require('../models/movie.model');
const Category = require('../models/category.model')
const User = require('../models/user.model')



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
    }, 

    //fetch movies in specific categgory
    fetchByCategory : async function(req, res){
        let categoryDetails = await Category.findById(req.params.id);
        if(!categoryDetails) {
            return res.status(404).json();
        }

        let movies = await Movie.find({category : req.params.id})
        .populate('category'); 
        res.json(movies)
    }, 
    
    //add favourite movie 
    addFavouritMovie : async function(req, res){

        let userDetails = await User.findById(req.params.id); 
        console.log("user : " + userDetails)

        if(!userDetails){
            return res.status(404).send(); 
        }

         if(userDetails.favouriteMovies.includes(req.body.movieId)){
            console.log('in')
            return res.status(400).json({error : "this movies in your favourit list already" })
         } 

         userDetails.favouriteMovies.push(req.body.movieId)
        await userDetails.save()


        let newUser =await User.findById(req.params.id)
        .populate('favouriteMovies');

        console.log('new user : ' + newUser )
        return res.status(200).json(newUser);


            
        
        
    }
}