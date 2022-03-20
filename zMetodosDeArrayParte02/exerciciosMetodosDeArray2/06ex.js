const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
    "Curitiba"
]

const resultado = cidades.filter((cidade) => {
    return cidade.length <= 8
})

console.log(resultado)