const produtosConsumidos = [
    {
        nomeDoProduto: "suco de laranja",
        precoUnitario: 750, 
        quantidadeComprada: 3,
    },    
    {
        nomeDoProduto:  "Cerveja",
        precoUnitario:  250,
        quantidadeComprada: 4,
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
let totalDaConta=0
for(let produto of produtosConsumidos){
    totalDaConta=totalDaConta+(produto.precoUnitario*produto.quantidadeComprada)
}

console.log(`Ola ${cartaoDeConsumo.nomeDoCliente} esperamos que tenha se divertido, o total da sua conta é de R$${(totalDaConta/100).toFixed(2)}`)