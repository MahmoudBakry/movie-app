const express = require('express'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser')

const AuthController = require('./controller /auth.controller');
const DBConnection = require('./helper/dataBaseConnect')


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





app.listen(3000, ()=>{
    console.log('now i am workink for you,,,,,on port')
})

