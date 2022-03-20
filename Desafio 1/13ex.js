function solucao(input) {
    const linhas = input.trim().split("\n")
    const n = parseInt(linhas[0], 10)
    const coordenadas = []
    let maiorDistancia = 0
    for (let i = 1; i < linhas.length; i++) {
        const coord = linhas[i].split(" ")
        coordenadas.push({
            x: parseFloat(coord[0], 10),
            y: parseFloat(coord[1], 10)
        })
    }
    for (let i = 0; i < coordenadas.length; i++) {
        for (j = i + 1; j < coordenadas.length; j++) {
            let primeiraParte = Math.pow((coordenadas[j].x - coordenadas[i].x), 2)
            let segundaParte = Math.pow((coordenadas[j].y - coordenadas[i].y), 2)
            let conta = Math.sqrt(primeiraParte + segundaParte)
            if (conta > maiorDistancia) {
                maiorDistancia = conta
            }
        }

    }
    console.log(maiorDistancia)
}

//solucao("3\n0 0\n0 3\n4 0")

solucao("5\n3.56 17\n-5.1 36.3\n0.0002 -2\n5 5\n-9.01 -17.7")

// conta = raiz de ((x2-x1)*2+(-y2-y1)*2)