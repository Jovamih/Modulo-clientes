const express = require('express')
const cliente = require('../controladores/cliente.controller')
const route = express.Router()

route.get('/get', (req, res) => {
    cliente.getClientes(req, res)
})

route.get('/getID', (req, res) => {
    cliente.getClientesID(req, res)
})

route.post('/create', (req, res) => {
    cliente.createCliente(req, res)
})

route.put('/update', (req,res)=>{
    cliente.updateCliente(req,res)
})

route.delete('/delete', (req,res)=>{
    cliente.deleteCliente(req,res)
})

module.exports = route