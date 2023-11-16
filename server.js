const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3500

app.use('/',express.static(path.join(__dirname,'public')))  // __dirname : present working dir , we are telling were the static files are located like css files
app.use('/',require('./routes/root'))

app.all('*',(req,res)=> {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    }else if (req.accepts('json')){
        res.json({error:'404 Not found'})
    }else{
        res.type('txt').send("Not Found")
    }
})
app.listen(PORT,()=>console.log(`Server running on port http://localhost:${PORT}`))