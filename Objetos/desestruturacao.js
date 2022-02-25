const pessoa = {
    nome: "Jose",
    idade:20,
    cidade:"salvador",
    profissao: "dev"
}

//const nome = pessoa.nome
//const idade = pessoa.idade

const {nome, idade, ...outros} = pessoa

console.log(nome, idade, )
console.log(nome, idade, )
console.log(outros)