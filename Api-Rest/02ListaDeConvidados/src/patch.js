const express = require('express')
const patch = express()
const { consultaConvidados, adicionarConvidado, removerOCOnvidado } = require('./controladores/convidados')

patch.get("/consultarConvidados", consultaConvidados)
patch.post("/adicionarConvidados", adicionarConvidado)
patch.delete("/removerConvidado/:nomeConvidado", removerOCOnvidado)

module.exports = patch