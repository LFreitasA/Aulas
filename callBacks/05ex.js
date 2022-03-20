let tempo = 30
let cronometro = setInterval(() => {
    console.log(tempo)
    tempo--
    if (tempo < 0) {
        console.log("Terminou")
        clearInterval(cronometro)

    }
}, 1000)