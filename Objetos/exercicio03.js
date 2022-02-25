const produtosConsumidos = [
    {
        nomeDoProduto: "suco de laranja",
        precoUnitario: 750, 
        quantidadeComprada: 3,
    },    
    {
        nomeDoProduto:  "Cerveja",
        precoUnitario:  250,
        quantidadeComprada: 5,
    }    ,
    {
        nomeDoProduto: "Capirinha",
        precoUnitario: 1200,
        quantidadeComprada: 1
    }

]

const cartaoDeConsumo = {
    nomeDoCliente: "Leonardo",
    idadeDoCliente: 32,
    produtosConsumidos
}

console.log(cartaoDeConsumo.nomeDoCliente)
console.log(cartaoDeConsumo.idadeDoCliente)
cartaoDeConsumo.idadeDoCliente = 18
console.log(cartaoDeConsumo.idadeDoCliente)
console.log(cartaoDeConsumo.produtosConsumidos[0].nomeDoProduto)
console.log(cartaoDeConsumo.produtosConsumidos[produtosConsumidos.length-1].precoUnitario)
