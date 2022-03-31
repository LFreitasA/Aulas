const express = require('express')

const app = express()

arrayUsuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 },
]

app.get('/', (req, res) => {
    res.send("ola")
})

app.get('/usuarios', (req, res) => {
    res.send(arrayUsuarios)
})

app.listen(3000)