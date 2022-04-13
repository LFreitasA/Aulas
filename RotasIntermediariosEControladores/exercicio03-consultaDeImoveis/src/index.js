const express = require('express')
const { imoveis, imoveisByID } = require('./roteadores')
const app = express()

app.get('/', (req, res) => {
    res.send('funcionando')
})

app.get(imoveis)

app.get(imoveisByID)

app.listen(8000)