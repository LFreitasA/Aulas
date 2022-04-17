const express = require('express')
const patch = express()
const { buscarProdutos, registarVenda } = require('./controladores/produtos')

patch.get('/buscarProdutos', buscarProdutos)
patch.post('/registarVenda', registarVenda)

module.exports = patch