function solucao(input) {
    let dados = []
    let linhas = input.trim().split("\n")
    for (let i = 1; i < linhas.length; i++) {
        dados.push({
            senhaValida: linhas[0],
            senhaDigitada: linhas[1]
        })
    }
    let SenhaDescriptografada = ""
    let senhaValida = dados[0].senhaValida
    let senhaDigitada = dados[0].senhaDigitada

    let j = 0
    for (i = 0; i < senhaValida.length; i++) {
        for (j = j; j < senhaDigitada.length; j++) {
            if (senhaValida[i] === senhaDigitada[j]) {
                SenhaDescriptografada += senhaValida[i]
                break
            }
        }
    }

    if (SenhaDescriptografada === senhaValida) {
        console.log("SIM")
    }
    else {
        console.log("NÃO")
    }
}



let string = "cubos\ncuggbyos"
solucao(string)

