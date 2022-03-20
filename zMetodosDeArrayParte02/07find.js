//Retorn ao primeiro elemento do array que corresponde a condição implementada na função callback, passando como argumento. 
//Caso contrário, retorna undefined
const numeros = [1, 2, 3, 4, 5]

let resultado = numeros.find((elementoAtual) => {
    return elementoAtual < 2

})

console.log(resultado)