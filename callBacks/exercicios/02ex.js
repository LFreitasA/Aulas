const tabuada = (numeros, callback) => {
    for (numero of numeros) {
        console.log(`tabuada do ${numero}`)
        callback(numero)
    }
}

calculo = (numero) => {
    for (i = 0; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`)
    }
}

numeros = [1, 5, 2]
tabuada(numeros, calculo)

