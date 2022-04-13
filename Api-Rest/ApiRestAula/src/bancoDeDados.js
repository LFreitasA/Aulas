const bancoDeDados = {
    instrutores: [
        {
            id: 1,
            nome: "guido",
            email: "guido@email",
            status: true
        },
        {
            id: 2,
            nome: "Dani",
            email: "Dani@email",
            status: true
        },
        {
            id: 3,
            nome: "Bruna",
            email: "Bruna@email",
            status: false
        }
    ],
    aulas: [
        {
            id: 1,
            idInstrutor: 2,
            titulo: "aula de servidor",
            descricao: "programando meu primeiro servidor"
        },
        {
            id: 2,
            idInstrutor: 2,
            titulo: "aula de servidor",
            descricao: "programando meu segundo servidor"
        },
        {
            id: 3,
            idInstrutor: 1,
            titulo: "aula de teste",
            descricao: "programando meu primeiro teste"
        },
    ],
    identificadorAulas: 4,
    identificador: 4
}

module.exports = bancoDeDados