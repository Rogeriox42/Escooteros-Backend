const express = require('express')
const mongoose = require('mongoose')
const app = express() 
const dotenv = require('dotenv').config() 

const PORT = process.env.PORT || 8085

app.get('/', (req, res) => {

})

app.listen(PORT, (err) =>{
    console.log(`Backend rodando na porta ${PORT}.`)
})