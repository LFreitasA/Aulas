//Executa uma funcao callback passada como argumento para cada elemento do array e retorn aum novo array como resultado.

const numeros = [1, 2, 3]
const dobro = numeros.map((elementoAtual) => {
    return elementoAtual * 2
})

console.log(dobro)
console.log(numeros)

