const usuarios = [
    { id: 11, nome: "joao", idade: 23 },
    { id: 2, nome: "joao", idade: 18 },
    { id: 4, nome: "joao", idade: 30 },
    { id: 1, nome: "joao", idade: 17 },
    { id: 123, nome: "joao", idade: 17 },
]

usuarios.sort((a, b) => {
    return a.id - b.id
})
console.log(usuarios)

usuarios.sort((a, b) => {
    return b.id - a.id
})
console.log(usuarios)