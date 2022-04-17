const express = require('express')
const patch = express()
const { retornarEndereco } = require('./controladores/CEP')

patch.get('/:cep', retornarEndereco)

module.exports = patch