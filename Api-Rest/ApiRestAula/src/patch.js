const express = require('express')
const patch = express()
const { buscarInstrutores, cadastrarInstrutor, buscarUmInstrutor, atualizarStatusDoInstrutor, atualizarInstrutor,
    deletarInstrutor, buscarAulas, buscarUmaAula, buscarAulasDoInstrutor, CadastrarAula } = require('./controladores/instrutores')

patch.get('/', (req, res) => {
    res.send('ok')
})

patch.get('/buscarInstrutores', buscarInstrutores)

patch.get('/buscarUmInstrutor/:id', buscarUmInstrutor)
patch.patch('/atualizarStatusDoInstrutor/:id', atualizarStatusDoInstrutor)
patch.put('/atualizarInstrutor/:id', atualizarInstrutor)
patch.delete('/deletarInstrutor/:id', deletarInstrutor)

patch.get('/buscarAulas', buscarAulas)
patch.get('/buscarUmaAula/:idAula', buscarUmaAula)
patch.get('/buscarAulasDoInstrutor/:idInstrutor/Aulas', buscarAulasDoInstrutor)
patch.post('/CadastrarAula', CadastrarAula)




//inacabado
patch.post('/cadastrarInstrutor', cadastrarInstrutor)


module.exports = patch