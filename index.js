require('dotenv').config()

const express = require('express')

const app=express()
const port=process.env.PORT

app.get('/',(req,res)=>{
    res.send('hello world!')
})
app.get('/insta',(req,res)=>{
    res.send('band bete band')
})
app.listen(port,()=>{
    console.log(`vansh bhai ${port}`)
})