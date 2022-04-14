const express = require('express')
const patch = express()
const { teste, listar, detalhar } = require('./controladores/pokemon')

patch.get('/', teste)
patch.get('/listarPokemons', listar)
patch.get('/detalharPokemon/:id', detalhar)

module.exports = patch