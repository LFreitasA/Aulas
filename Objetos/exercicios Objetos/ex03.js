const usuario = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    cor_preferida: "verde",
}
console.log(`Olá... Eu sou ${usuario.nome} e tenho ${usuario.idade} anos de idade. ~
Sou ${usuario.profissao}> e minha cor preferida é ${usuario.cor_preferida}!`)

const [nome, idade, profissao, cor_preferida] = usuario

console.log(`Olá... Eu sou ${nome} e tenho ${idade} anos de idade. ~
Sou ${profissao}> e minha cor preferida é ${cor_preferida}!`)