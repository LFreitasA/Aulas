let numero = 1
const contador = () => {
    if (numero >= 5) {
        clearInterval(idSetInterval)

    }
    console.log(numero)
    numero++
}

const idSetInterval = setInterval(contador, 1000)