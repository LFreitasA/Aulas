const abobrinha = (nome, idade) => {
    console.log(nome)
    if (idade) {
        const anoAtual = new Date().getFullYear()
        console.log(anoAtual - idade)
    }
}

const imprimirDados = (dados) => {
    nome = "Leo"
    idade = 33
    dados(nome, idade)
}

imprimirDados(abobrinha)