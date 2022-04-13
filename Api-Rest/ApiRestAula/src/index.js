const express = require('express')
const patch = require('./patch')
const app = express()

app.use(express.json()) //IMPORTANTE é necessário isso para ele ler um arquivo json
app.use(patch)

app.listen(3000)