const ligarMicroOndas = (tempo) => {
    console.log(`ligado por ${tempo}s`)
    tempo = tempo * 1000
    setTimeout(() => {
        console.log("terminou")
    }, tempo)
}


let tempo = 30
ligarMicroOndas(tempo)