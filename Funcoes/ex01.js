const pessoa = {
    nome: "Leonardo",
    idade: 66,
    profissao: "analista",
    altura: "1.65"
}
const {nome, idade, profissao, altura} = pessoa
function apresentacao (nome, idade, profissao, altura) {
    console.log(`Ola! Meu  nome é ${nome}, sou um ${titulo(idade)} de ${idade}, ${altura}m e sou ${profissao}.`)
}

function titulo (idade){
    let titulo = idade<18 ? "adolecente" :  idade>65 ? "idoso" : "adulto"
    return titulo
}

apresentacao(nome, idade, profissao, altura)