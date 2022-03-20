const usuarios = [
    { nome: "Guido", sobrenome: "Cerqueira", idade: 31 },
    { nome: "Daniel", sobrenome: "Lopes", idade: 31 },
    { nome: "Vitor", sobrenome: "Vidal", idade: 28 }
]

const novoarray = usuarios.map((usuario) => {
    return { nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`, idade: usuario.idade }

})

console.log(novoarray)