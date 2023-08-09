const express = require('express'); 
let app = express(); 

app.get('/',(req, res)=>{
    res.send('Hello in my server')
})

app.get('/hello', (req, res)=>{
    res.send("Hello now .... I am on the fire...")
})
app.listen(3000, ()=>{
    console.log('now i am workink for you,,,,,on port')
})