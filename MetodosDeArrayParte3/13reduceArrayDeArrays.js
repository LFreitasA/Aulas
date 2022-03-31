const array = [[0, 1], [2, 3, 4], [14, 22, 98]]

const arrayreduzido = array.reduce((acomulador, elementoAtual, indice, array) => {
    return [...acomulador, ...elementoAtual] //spread operator
}, [])

console.log(arrayreduzido)