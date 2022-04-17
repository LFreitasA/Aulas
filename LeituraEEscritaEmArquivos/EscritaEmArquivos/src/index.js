const express = require('express')
const patch = require('./patch')
const app = express()

app.use(express.json())
app.use(patch)

app.listen(3000)