//executa uma função call back, passada como argumento, para cada elemento do array que resulta em um valor de retorno.
//a funcao passada co,mo argumento o método reduce recebe 4 argumentos.
//1. acumulador - valor inicial ( ou o valor do callback anterior)
//2 valor atuak - o valor do elemento atual
//3 index - o indice atuak
//4 array - o array completo


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

resultado = array.reduce((acomulador, valorAtual, indice, array) => {
    return acomulador + valorAtual
}, 10) // esse 10 é opcional, por padrão é 0

console.log(resultado)