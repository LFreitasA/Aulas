const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const resultado = cidades.reduce((acomulador, elementoAtual, index, array) => {
    if (acomulador.length < elementoAtual.length) {
        return elementoAtual
    }
    return acomulador

})

console.log(resultado)