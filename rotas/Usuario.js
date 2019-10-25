const express = require('express') 
const mongoose = require('mongoose')
const router = express.Router() 

router.use(express.json())

router.get('/', (req, res) =>{
    res.json({'mensagem':'Rota /usuario'})    
})

router.get('/:nome', (req, res) =>{
    let nome = res.body.nome
    res.json({'mensagem':`Rota /usuario/:${nome}`})    
})

router.put('/:', (req, res) =>{

})

router.post('/', (req, res) =>{

})

router.delete('/', (req, res) =>{

})


module.exports = router
