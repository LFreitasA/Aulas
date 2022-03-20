//testa se ao menos um dos elementos do arry passam pelo teste implementado na funcao callback passada como argumento e retorna true ou false
const letras = ["a", "b", "c", "d", "e"]

let resultado = letras.some((elementoAtual) => {
    return elementoAtual === "f"
})
console.log(resultado)