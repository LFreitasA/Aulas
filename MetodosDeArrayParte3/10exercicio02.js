const carros = [
    { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
    { nome: "argo", marca: "fiat", ano: "2021", cor: "preto" },
    { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
    { nome: "hilux", marca: "toyota", ano: "2018", cor: "branco" },
]

const ordenacaoCrescente = (array, campo) => {
    array.sort((primeiroElemento, segundoElemento) => {
        return primeiroElemento[campo].localeCompare(segundoElemento[campo])
    })
}

ordenacaoCrescente(carros, "marca")
console.log(carros)

const ordenacaoDecrescente = (array, campo) => {
    array.sort((primeiroElemento, segundoElemento) => {
        return segundoElemento[campo].localeCompare(primeiroElemento[campo])
    })
}

ordenacaoDecrescente(carros, "marca")
console.log(carros)