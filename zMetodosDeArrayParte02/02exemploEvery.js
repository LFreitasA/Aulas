const frutas = ["abacaxi", "manga", "melancia"]

const resultado = frutas.every((elemntoAtual) => {
    return elemntoAtual != "manga"
})

console.log(resultado)