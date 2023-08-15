const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser')

const AuthController = require('./controller /auth.controller');
const CategoryController = require('./controller /catgory.controller');
const DBConnection = require('./helper/dataBaseConnect');
const catgoryController = require('./controller /catgory.controller');
const movieController = require('./controller /movies.controller')


console.log(DBConnection.connectMongoAtlas());
let app = express(); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())





app.get('/',(req, res)=>{
    res.send('Hello in my server')
})



//Auth module routes
app.post('/signup', AuthController.signup)
app.post('/signin', AuthController.signin)

//Category module routes 
app.post('/categories', catgoryController.addNewCategory)
app.get('/categories', catgoryController.getAllCategory)
app.put('/categories/:id', catgoryController.updateCategory)

//Movies module routes 
app.post('/movies', movieController.addNewMovie)
app.get('/movies', movieController.retriveAllMovies)
app.get('/movies/:id', movieController.retriveOneMovie)
app.get('/categories/:id/movies', movieController.fetchByCategory)

//favourite route 
app.post('/users/:id/favourit', movieController.addFavouritMovie)




app.listen(3000, ()=>{
    console.log('now i am workink for you,,,,,on port')
})

