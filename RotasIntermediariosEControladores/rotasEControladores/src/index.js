const express = require('express')
const { filtrarProfessores, encontrarProfessor } = require('./controladores/professores')

const app = express()
const primeiroIntermediario = (req, res, next) => {
    console.log("passei no primeiro intermediário")
    next()
}

const intermediarioDaRota = (req, res, next) => {
    console.log("passei intermediário da rota")
    next()
}

app.use(primeiroIntermediario)

//localhost:3000/professores
app.get('/professores', intermediarioDaRota, filtrarProfessores)
//localhost:3000/professores/2
app.get('/professores/:id', encontrarProfessor)

//localhost:3000
app.get('/', (req, res) => {
    res.send(`Página Inicial`)
})

app.listen(3000)