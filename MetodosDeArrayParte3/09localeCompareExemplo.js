const pessoas = ["Joao", "ana", "carlos", "Beatriz",]
console.log(pessoas)
//ordenação crescente
pessoas.sort((primeiroElemento, segundoElemento) => {
    return primeiroElemento.localeCompare(segundoElemento)
})

console.log(pessoas)

//ordenação decrescente
pessoas.sort((primeiroElemento, segundoElemento) => {
    return segundoElemento.localeCompare(primeiroElemento)
})
console.log(pessoas)
