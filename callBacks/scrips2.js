const saudacao = (callBack) => {
    const nome = "Leonardo"
    callBack(nome)
}

function mensagem(nome) {
    console.log(`Bem vindo ${nome}!!!!`)
}

saudacao(mensagem)

saudacao(nome => {
    console.log(`Bem vindo ${nome}`)
})