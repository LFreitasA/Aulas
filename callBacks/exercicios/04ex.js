timerParaDespertar = 5
timerDespertando = 5
let onSetInterval
const despertando = () => {

    console.log(`Beep, Beep!`)
    timerDespertando--
    if (!timerDespertando) {
        clearInterval(onSetInterval)
    }
}

const timer = () => {
    onSetInterval = setInterval(despertando, 1000)


}
setTimeout(timer, timerParaDespertar * 1000)
console.log(`Timer iniciado, disparando alarme em ${timerParaDespertar} segundos!`)
