//Antes de rodar o projeto, precisa instalar os modulos com o comando npm i
const lodash = require('lodash') //require() importa uma biblioteca ou arquivo
const { uniq } = require('lodash') //desestrutura

//const array = require('./array')
const { arrayNumeros, arrayLetras } = require('./array')



const arrayNumeroUnico = uniq(arrayNumeros) //mostra apenas os arrays unicos
const arrayletraUnica = uniq(arrayLetras) //mostra apenas os arrays unicos

console.log(arrayNumeroUnico)
console.log(arrayletraUnica)