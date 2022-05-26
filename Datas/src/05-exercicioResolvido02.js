const primeiroGol = new Date(2002, 05, 30, 12, 22)
const segundoGol = new Date(2002, 05, 30, 13, 34)
const inicioDoJogo = new Date(2002, 05, 30, 12)

console.log(primeiroGol)
console.log(segundoGol)

console.log("exercicio")
const primeiroGolTimestamp = +inicioDoJogo + 1000 * 60 * (60 + 22)
const segundoGolgolTimestamp = +inicioDoJogo + 1000 * 60 * (60 + 34)

const finalPrimeiroGol = new Date(primeiroGolTimestamp)
const finalSegundoGol = new Date(segundoGolgolTimestamp)
console.log(+inicioDoJogo)
console.log(primeiroGolTimestamp)
console.log(segundoGolgolTimestamp)
console.log(finalPrimeiroGol)
console.log(finalSegundoGol)