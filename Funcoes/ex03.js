const pessoas = [
    {
        nome: "leonardo",
        idade: 32,
        profissao: "Analista de sistemas",
        altura: 1.65
    },
    {
        nome: "Bruna",
        idade: 66,
        profissao: "Bancaria",
        altura: 1.55
    },
    {
        nome: "Leozinho",
        idade: 6,
        profissao: "estudante"
        ,
        altura: 1.30
    },
]

function faixaEtaria (idade){
    return idade<18 ? "Jovem" : idade>65 ? "idoso (a)" : "adulto(a)"
}
function apresenta(pessoa){
    console.log(`Ola! meu nome é ${pessoa.nome}, sou um ${faixaEtaria(pessoa.idade)} de ${pessoa.idade} anos,${pessoa.altura}m de altura e sou ${pessoa.profissao}.`)
}

for(pessoa of pessoas){
    apresenta(pessoa)
}