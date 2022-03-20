const somar = (primeiroNumero, segundoNumero, callBack) => {
    const resultado = primeiroNumero + segundoNumero
    callBack(resultado)
}

somar(10, 15, (resultado) => {
    console.log(`resultado da soma: ${resultado}`)
})