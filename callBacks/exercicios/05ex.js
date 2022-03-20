timerParaDespertar = 5
timerDespertando = 5
tempoSonecaEmSegundos = 3
let numeroDeSonecas = 2
let onSetInterval
const despertando = () => {

    console.log(`Beep, Beep!`)
    timerDespertando--
    if (!timerDespertando) {
        clearInterval(onSetInterval)
        soneca()
    }
}

const soneca = () => {
    timerDespertando = 5
    if (!numeroDeSonecas) {
        console.log(`Fim do Timer`)
        return
    }
    setTimeout(timer, tempoSonecaEmSegundos * 1000)
    console.log(`Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`)
    numeroDeSonecas--
}

const timer = () => {
    onSetInterval = setInterval(despertando, 1000)


}
let onSetTimeout = setTimeout(timer, timerParaDespertar * 1000)
console.log(`Timer iniciado, disparando alarme em ${timerParaDespertar} segundos!`)
