let stringCorrompida = "*Canis %lupus )familiaris"
const caracteresProibidos = "!@#$%&*()."
let comparador = false
let novaFrase = ""

/*for (i = 0; i < frase.length; i++) {
    if (frase[i] != "*") {
        novaFrase += frase[i]
    }
}
console.log(novaFrase)
*/
for (i = 0; i < stringCorrompida.length; i++) {
    for (j = 0; j < caracteresProibidos.length; j++) {
        if (stringCorrompida[i] == caracteresProibidos[j]) {
            comparador = true

        }
    }
    if (!comparador) {
        novaFrase += stringCorrompida[i]
    }
    comparador = false
}
console.log(novaFrase)