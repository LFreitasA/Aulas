const usuarios = [
    { nome: "joao", idade: 23 },
    { nome: "maria", idade: 18 },
    { nome: "ana", idade: 30 },
    { nome: "rodirgo", idade: 17 }
]

const resultado = usuarios.find((usuario) => {
    return usuario.idade < 18
})

console.log(resultado)