const usuarios = [
    {
        nome: "Leonardo",
        idade: 18
    }, {
        nome: "Bruna",
        idade: 15
    }, {
        nome: "Mario",
        idade: 35
    },
]

const validadorIdade = (usuarios) => {
    resultado = usuarios.every((usuario) => {
        return usuario.idade >= 18
    })

    return resultado ? "Festa liberada" : "Possui menor de idade"
}

console.log(validadorIdade(usuarios))