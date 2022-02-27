const pessoas = [
    {
        nome: "Jose",
        idade: 30,
        profissao: "professor"
    },
    {
        nome: "Maria",
        idade: 66,
        profissao: "professor"
    },
    {
        nome: "Ana",
        idade: 18,
        profissao: "professor"
    },
]

function apresentacao(nome, idade, profissao) {
    let maturidade = idade<21 ? "jovem" : idade>65 ? "idoso(a)" : "adulto(a)"
    console.log(`Sou ${nome}, sou um(a) ${maturidade} de ${idade} anos e sou ${profissao}.`)
}

