const express = require('express')
const patch = express()
const { buscarProdutos, buscarProdutoPorID, calcularFrete } = require('./controladores/frete')

patch.get('/', buscarProdutos)
patch.get('/:id', buscarProdutoPorID)
patch.get('/:id/frete/:cep', calcularFrete)

module.exports = {
    patch
}