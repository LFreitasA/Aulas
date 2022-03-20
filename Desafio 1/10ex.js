function solucao(jogadores) {
    let campeao = ""
    for (let i = 0; i < jogadores.length; i++) {
        let temJogadaRepetida = false
        for (let j = 0; j < jogadores.length; j++) {
            //            console.log(`${jogadores[i].nome} ${jogadores[i].jogada} && ${jogadores[j].jogada} ${jogadores[j].nome}`)
            if (jogadores[i].nome != jogadores[j].nome) {
                if (jogadores[i].jogada == jogadores[j].jogada) {
                    temJogadaRepetida = true
                    break
                }
            }

        }
        //        if (!jogadores[i + 1]) {
        //            //            console.log(jogadores[i])
        //            for (let j = 0; j < jogadores.length - 1; j++) {
        //               if (jogadores[i].jogada == jogadores[j].jogada) {
        //                  temJogadaRepetida = true
        //                   break
        //               }
        //           }
        //       }
        if (!temJogadaRepetida) {
            campeao = jogadores[i].nome
        }
    }
    if (campeao) {
        console.log(campeao)
    } else {
        console.log("NINGUEM")
    }
}



const jogadores = [
    {
        "nome": "Herman",
        "jogada": 0
    },
    {
        "nome": "Rhodes",
        "jogada": 1
    },
    {
        "nome": "Beach",
        "jogada": 0
    }, {
        "nome": "polenta",
        "jogada": 1
    },

]
solucao(jogadores)