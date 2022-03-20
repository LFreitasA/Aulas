const imprimirDados = (funcaoCallBack) => {
    const nome = "Leonardo Freitas"
    const idade = 32
    funcaoCallBack(nome)
}
const dados = (nome, idade) => {
    console.log("A funcao callBack foi executada")
    if (nome) {
        console.log(`nome: ${nome}`)
    }
    if (idade) {
        console.log(`idade: ${idade}`)

    }
}
imprimirDados(dados)