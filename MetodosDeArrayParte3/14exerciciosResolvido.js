const usuarios = [
    { id: 11, nome: "joao", idade: 23 },
    { id: 2, nome: "maria", idade: 18 },
    { id: 4, nome: "ana", idade: 30 },
    { id: 1, nome: "rodrigo", idade: 17 },
    { id: 123, nome: "Mario", idade: 35 },
    { id: 123, nome: "Bruna", idade: 17 },
    { id: 123, nome: "Leo", idade: 17 },
]

const filtrado = usuarios.reduce((acomulador, elementoAtual, indice, array) => {
    if (acomulador.idade < elementoAtual.idade) {
        return elementoAtual
    }
    return acomulador
})

console.log(filtrado)