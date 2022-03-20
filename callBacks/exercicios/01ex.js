const tabuada = (numero, callBack) => {
    console.log(`Tabuada do ${numero}`)
    callBack(numero)

}

const calculo = (numero) => {
    for (i = 0; i <= 10; i++) {
        console.log(`${numero} * ${i} = ${numero * i}`)
    }
}

tabuada(3, calculo)