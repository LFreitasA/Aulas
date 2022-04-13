const express = require('express')
const app = express()
let jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contador = -1
app.get('/', (req, res) => {
    contador++
    if (contador >= jogadores.length) {
        contador = 0;
    }
    res.send(`É a vez de ${jogadores[contador]} jogar!`)

})

app.get('/remover', (req, res) => {
    const { indice } = req.query
    if (!jogadores[indice]) {
        return res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`)
    }
    const excluir = jogadores.splice(indice, 1)
    res.send(jogadores)
})

app.get('/adicionar', (req, res) => {
    const { indice, nome } = req.query
    if (!nome) {
        return res.send('é necessário informar um nome')
    }
    if (!indice) {
        jogadores.push(nome)
        return res.send(jogadores)

    }

    if (indice && indice < jogadores.length) {
        jogadores.splice(indice, 0, nome)
        return res.send(jogadores)
    } else {
        return res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`)

    }
})

app.listen(8000)