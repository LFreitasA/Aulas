const express = require('express')
const patch = express()

const { listarAlunos, listarUmAluno, cadastrarAluno, deletarAluno } = require('./controladores/alunos')

patch.get('/alunos', listarAlunos)
patch.get('/alunos/:id', listarUmAluno)
patch.post('/alunos/', cadastrarAluno)
patch.delete('/alunos/:id', deletarAluno)


module.exports = patch