function solucao(carta) {
    let posicao = 0
    const cartas = ["Q", "J", "K", "A", "2", "3"]
    for (let i = 0; i <= cartas.length - 1; i++) {
        if (carta == cartas[i]) {
            posicao = i
        }
    }
    if (cartas[posicao + 1]) {
        console.log(cartas[posicao + 1])
    } else {
        console.log(cartas[0])
    }
}
let carta = "K"
solucao(carta)