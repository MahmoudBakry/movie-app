const express = require('express'); 
let app = express(); 

app.get('/',(req, res)=>{
    res.send('Hello in my server')
})

app.get('/hello', (req, res)=>{
res.status(200)
res.json({
    message : "Hello in our movie app", 
    BE : "Mahmoud Bakry",
    connect : {
        email : "mahmoud.ae.bakry@gmail.com", 
        phone : "01001072579"
    }
})

})
app.listen(3000, ()=>{
    console.log('now i am workink for you,,,,,on port')
})