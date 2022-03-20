function solucao(numeros) {
    numeroDeJogadores = numeros.length
    somaDosNumeros = 0;
    for (item of numeros) {
        somaDosNumeros += item
    }
    while (somaDosNumeros > numeroDeJogadores) {
        somaDosNumeros -= numeroDeJogadores
    }

    crossOriginIsolated.log(somaDosNumeros)
    console.log("Soma dos numeros =" + somaDosNumeros)
    console.log("numero de jogadores =" + numeroDeJogadores)

}
let numeros = [1, 3, 2, 1]
solucao(numeros)