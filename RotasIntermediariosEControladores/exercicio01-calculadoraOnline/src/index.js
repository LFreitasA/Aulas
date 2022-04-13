const express = require('express')
const { soma, subtracao, multiplicacao, divisao } = require('./controladores/operacoes')

const app = express()

app.get('/soma', soma)
app.get('/subtracao', subtracao)
app.get('/multiplicacao', multiplicacao)
app.get('/divisao', divisao)

app.listen(3000)