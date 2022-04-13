const express = require('express')
const patch = express()
const { buscarLivros, buscarUmLivro, adicionarLivro, AtualizarTodoOLivro, AlterarUmaInformacaoDoLivro, removerUmLivro } = require('./controladores/livros')

patch.get('/buscarLivros', buscarLivros)
patch.get('/buscarLivros/:id', buscarUmLivro)
patch.post('/adicionarLivro/', adicionarLivro)
patch.put('/AtualizarTodoOLivro/:id', AtualizarTodoOLivro)
patch.patch('/AlterarUmaInformacaoDoLivro/:id', AlterarUmaInformacaoDoLivro)
patch.delete('/removerUmLivro/:id', removerUmLivro)

module.exports = patch