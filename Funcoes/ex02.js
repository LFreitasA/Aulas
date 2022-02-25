function faixaEtaria(idade){
    if(idade<=21){
        return "jovem"
    }else if (idade>65){
        return "Idoso"
    }else return "Adulto"
}

let retornoFaixaEtaria = faixaEtaria(65)
console.log(retornoFaixaEtaria)