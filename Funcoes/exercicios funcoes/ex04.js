const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function(valor){
        this.saldo+=valor
        this.adicionarHistorico(`Deposito`,`${valor}`)
        console.log(`Deposito de R$${valor/100} realizado para o cliente: ${this.nome}`)
    },
    adicionarHistorico: function(tipo, valor){
        this.historicos.push({tipo, valor})
    },
    sacar: function(valor){
        if(this.saldo-valor<0){
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        } else {
            this.adicionarHistorico(`Sacar`,`${valor}`)
            console.log(`Saque de R$${valor/100} realizado para o cliente: ${this.nome}`)
        }
        
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: ${(this.saldo/100).toFixed(2)}`)
        console.log(`Historico: `)
        for(let historico of this.historicos){
            console.log(`${historico.tipo} de R$${(historico.valor/100).toFixed(2)}`)
        }
    }
}



contaBancaria.depositar(10000)
contaBancaria.sacar(50000)
contaBancaria.sacar(5000)
contaBancaria.extrato()
