const express = require('express')
const app = express()
const { patch } = require('./patch')

app.use(express.json())
app.use(patch)

app.listen(3000)