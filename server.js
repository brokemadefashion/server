const express = require('express')
const app = express()
const env = require("dotenv").config()


app.get('/',(req,res)=>{
    res.end('We started the project')
})

app.listen(process.env.PORT,()=>{
    console.log(`Port is running at ${process.env.PORT}`);
})