const express = require('express')
const app = express()
const env = require("dotenv").config()

const port = 3001

app.get('/',(req,res)=>{
    res.end('We started the project')
})

app.listen(env.port,()=>{
    console.log(`Port is running at ${port}`);
})