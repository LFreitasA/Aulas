// Testa se todos os elementos do arry passaram pelo teste implementado na função callback, passando como argumento  e retorna true ou false
const numeros = [1, 2, 3, 4]

const numerosEvery = numeros.every((elementoAtual) => {
    return elementoAtual < 5
})

console.log(numerosEvery)