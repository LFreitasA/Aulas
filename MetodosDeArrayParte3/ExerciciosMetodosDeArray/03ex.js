const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44]

const resultado = numeros.reduce((acomulador, elementoAtual) => {
    if (acomulador < elementoAtual) {
        return elementoAtual
    }
    return acomulador
})

console.log(resultado)