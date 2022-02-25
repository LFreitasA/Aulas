const pessoa = {
    nome: "José",
    altura: 1.73,
    peso: 60
};

console.log(pessoa)
console.log(pessoa.nome)
console.log(`meu nome é ${pessoa.nome}`)
pessoa.nome = "Pedro"
console.log(`meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m e peso ${pessoa.peso}Kg`)

pessoa["nome"] = "Leo"
console.log(`meu nome é ${pessoa.nome}`)
