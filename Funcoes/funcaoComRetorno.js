function verificarMaiorIdade(idade){
    if(idade>=18){
        return "É maior"
    }else return "É menor"
}
const valorRernadoPelaFuncao = verificarMaiorIdade(17)

console.log(valorRernadoPelaFuncao)