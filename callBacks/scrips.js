function saudacao(callBack) {
    const nome = "Leonardo"
    callBack(nome)
}

saudacao(function (nome) {
    console.log(`Bem vinndo ${nome}!`)
})