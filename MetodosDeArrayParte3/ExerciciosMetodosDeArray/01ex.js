const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

//a)
numeros.sort((primeiroElemento, segundoElemento) => {
    return primeiroElemento - segundoElemento
})
console.log(`a) Ordem crescente`)
console.log(numeros)

//b)
numeros.sort((primeiroElemento, segundoElemento) => {
    return segundoElemento - primeiroElemento
})
console.log(`b) Ordem decrescente`)
console.log(numeros)


//c)
numeros.sort()
console.log(`c) Base Unicode`)
console.log(numeros)

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
//d)
frutas.sort((elementoA, elementoB) => {
    return elementoA.localeCompare(elementoB)
})
console.log(`d) Ordem alfabetica`)
console.log(frutas)

//e)
frutas.sort((elementoA, elementoB) => {
    return elementoB.localeCompare(elementoA)
})
console.log(`e) Ordem alfabetica decrescente`)
console.log(frutas)

//f)
frutas.sort((elementoA, elementoB) => {
    return elementoA.length - elementoB.length
})
console.log(`f) tamanho das palavras`)
console.log(frutas)