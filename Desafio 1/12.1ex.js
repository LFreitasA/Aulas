function processData(input) {
    //   input = input.trim()

    let inputFormatado = ""
    let primeiraLetra = input[0]
    let segundaLetra = input.slice(1)
    if ((primeiraLetra === input[0].toLowerCase()) && (segundaLetra === input.slice(1).toUpperCase())) { //primeira letra minuscula e segunda maiuscula
        for (i = 0; i < input.length; i++) {
            if (i == 0) {
                inputFormatado += input[i].toUpperCase()
            } else {
                inputFormatado += input[i].toLowerCase()
            }
        }
        console.log(inputFormatado)
    } else if (input === input.toUpperCase()) { //primeira e segunda letra Maiuscula

        inputFormatado = input.toLowerCase()
        console.log(inputFormatado)

    } else {
        inputFormatado = input
        console.log(inputFormatado)

    }

}

processData("lEONARDO") 