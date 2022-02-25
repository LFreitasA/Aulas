const pessoa = {
    nome: "Jose",
    idade: 20,
    cidade: "Salvador",
    profissao: "dev"
}

const endereco = {
    rua: "Aqui",
    numero: "32",
    bairro: "Bairro legal"
}

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
}

console.log(objetoFundido)