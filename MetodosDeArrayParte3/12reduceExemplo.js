const array = [0, 1, 2, 3, 4, 5]

const resultado = array.reduce((acomulador, elementoAtual, indice, array) => {
    return acomulador + elementoAtual
})

console.log(resultado)