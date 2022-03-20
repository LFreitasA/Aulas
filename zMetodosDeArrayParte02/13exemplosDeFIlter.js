const numeros = [1, 4, 4, 5, 3, 1, 8]

const resultado = numeros.filter((numero) => {
    return numero === 3
})
resultado.push(5)

console.log(resultado)
console.log(numeros)