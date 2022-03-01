const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
function descartaIniciaisEFinais(array) {
    let dezPorCentoDoArray = Math.round(array.length * 0.1)
    let resultado = array.slice(dezPorCentoDoArray, Math.round(array.length - dezPorCentoDoArray))
    return console.log(resultado)
}

descartaIniciaisEFinais(array)