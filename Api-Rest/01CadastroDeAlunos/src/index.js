const express = require('express')
const patch = require('./patch')
const middleware = require('./middleware')

const app = express()

app.use(middleware)

app.use(express.json())
app.use(patch)

app.listen(3000)