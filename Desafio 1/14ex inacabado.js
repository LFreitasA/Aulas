function solucao(input) {
    let dados = []
    let linhas = input.trim().split("\n")
    for (let i = 1; i < linhas.length; i++) {
        dados.push({
            senhaValida: linhas[0],
            senhaDigitada: linhas[0]
        })
    }

    let SenhaDescriptografada = ""
    for (item of dados) {
        for (letra of item.senhaValida) {
            if (item.senhaDigitada.search(letra) != -1) {
                SenhaDescriptografada += letra
                item.senhaDigitada = item.senhaDigitada.replace(letra, " ")
            }
        }
    }

    if (SenhaDescriptografada == dados[0].senhaValida) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }
}


let string = " cubo\nobuc"
solucao(string)

