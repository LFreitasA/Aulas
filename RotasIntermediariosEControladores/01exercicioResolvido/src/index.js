const express = require('express')
const { apresentarTodosOsCarros, filtrarCarroPorId, validaSenha } = require('../controladores/carros')

const app = express()
app.use(validaSenha)
app.get('/', apresentarTodosOsCarros)
app.get('/carros/:id', filtrarCarroPorId)

app.listen(3000)