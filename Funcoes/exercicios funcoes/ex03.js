const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`)
        console.log(`Total de itens: ${this.calcularTotalDeItens()} itens.`)
        console.log(`Total a pagar: R$ ${this.calcularTotalAPagar()}`)
    },
    addProduto: function(produto) {
        let estado = true
        for(let i=0; i< this.produtos.length; i++){
            if(this.produtos[i].id===produto.id){
                this.produtos[i].qtd+=produto.qtd
                estado=false
            }
        }
        if(estado){
            this.produtos.push(produto)
        }
    },
    calcularTotalAPagar: function() {
        let totalAPagar =0
        for (produto of this.produtos){
            totalAPagar+=(produto.qtd*produto.precoUnit)
        }
        return (totalAPagar/100).toFixed(2)
    },
    calcularTotalDeItens : function() {
        let quantidadeDeItens=0
        for(produto of this.produtos){
            quantidadeDeItens+=produto.qtd
        }
        return quantidadeDeItens 
    },
    calcularItemMaisBarato: function(){
        let itemMaisBarato=0
        for(produto of this.produtos){
            if(itemMaisBarato===0){
                itemMaisBarato=produto.precoUnit
            }else if(itemMaisBarato>produto.precoUnit){
                itemMaisBarato=produto.precoUnit
            }
        }
        return (itemMaisBarato/100).toFixed(2)
    },
    validarDescontoPorValor: function(){
        let desconto = 0        
        desconto = (this.calcularTotalAPagar()*0.1).toFixed(2)
        return desconto
    },
    calcularDesconto: function() {
        if(this.calcularTotalAPagar()>100){
            return console.log(`desconto de R$ ${this.validarDescontoPorValor()}`)
        } else if(this.calcularTotalDeItens()>4){
            console.log(`desconto de R$ ${this.calcularItemMaisBarato()}`)
        }
    }
}


carrinho.imprimirResumo()


const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProduto (novaBermuda)
carrinho.imprimirResumo()

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 1000
}
carrinho.addProduto(novoTenis);
carrinho.imprimirResumo();

imprimirDetalhes = (carrinho) =>{
    console.log(`Cliente: ${carrinho.nomeDoCliente}`)
    for(produto of carrinho.produtos){
        console.log(`item ${produto.id} - ${produto.nome} - ${produto.qtd} - R$ ${((produto.precoUnit*produto.qtd)/100).toFixed(2)}`)
    }
    console.log(`Total de itens: ${carrinho.calcularTotalDeItens()} `)
    console.log(`Total a pagar: R$${carrinho.calcularTotalAPagar()} `)
}

imprimirDetalhes(carrinho)

carrinho.calcularDesconto()