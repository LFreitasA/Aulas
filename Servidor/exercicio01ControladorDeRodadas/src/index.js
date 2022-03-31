const express = require('express')
const app = express()
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let contador = -1
const vezDe = (jogadores) => {
    contador++
    if (jogadores.length <= contador) {
        contador = 0
    }
    return jogadores[contador]

}

app.get('/', (req, res) => {
    res.send(`É a vez de ${vezDe(jogadores)} jogar!`)

})

app.listen(3000)