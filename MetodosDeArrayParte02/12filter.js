//Cria um novo array com todos os elementos correspondentes a condição implementada na função callback, passada como argumentos.

const numeros = [1, 2, 3, 4, 5, 6]
const resultado = numeros.filter((elementoAtual) => {
    return elementoAtual > 2
})
console.log(resultado)
console.log(numeros)