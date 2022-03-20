const numeros = [0, 122, 4, 6, 10, 8, 44]

const saoPares = numeros.every((numero) => {
    return (numero % 2) === 0
})

resultado = saoPares ? "array válido" : "array inválido"

console.log(resultado)

