const temporizador = (jogadores) => {
    console.log(jogadores[contador])
    if (!jogadores[contador + 1]) {
        console.log(`A rodada terminou!`)
        clearInterval(idsetInterval)
    }
    contador++
}

let tempodaRodada = 10000
const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal", "leonardo"]
let contador = 0
let tempoPorJogador = tempodaRodada / jogadores.length
let idsetInterval = setInterval(temporizador, tempoPorJogador, jogadores)