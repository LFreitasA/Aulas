const CalcularIMC = (peso, altura, callBack) => {

    let imc = (peso / (altura * altura))
    console.log(imc)
    let faixa
    if (imc < 18) {
        faixa = "Desnutricao"
    } else if (imc >= 18 && imc < 25) {
        faixa = "Normal"

    } else {
        faixa = "Sobrepeso"

    }
    callBack(imc, faixa)


}
const retorno = (imc, faixa) => {
    console.log(`IMC: ${imc}`)
    console.log(`Faixa correspondente: ${faixa} `)

}

CalcularIMC(68, 1.65, retorno)