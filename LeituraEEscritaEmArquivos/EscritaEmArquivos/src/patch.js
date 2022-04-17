const express = require('express')
const patch = express()
const { teste, gravarComGet } = require('./controls/recordFiles')

patch.get('/', teste)

patch.post("/", gravarComGet)

module.exports = patch