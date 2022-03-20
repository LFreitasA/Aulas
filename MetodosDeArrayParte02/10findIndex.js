//Retorna o indidce do primeiro elemento do array, correspondendte  a condição implementada na função callback, passada como argumento.
//caso contrario, retorna -1

const numeros = [1, 2, 3, 4, 5, 6]

const resultado = numeros.findIndex((elementoAtual) => {
    return elementoAtual === 5
})

console.log(resultado)