const pessoas = {
        nome: "leonardo",
        idade: 32,
        profissao: "Analista de sistemas",
        altura: 1.65,
        apresentar: function  (){
            console.log(`Ola! meu nome é ${this.nome}, sou um ${this.faixaEtaria()} de ${this.idade} anos,${this.altura}m de altura e sou ${this.profissao}.`)
        },
        faixaEtaria: function (){
            return this.idade<18 ? "Jovem" : this.idade>65 ? "idoso (a)" : "adulto(a)"
        }
    }

pessoas.apresentar()

