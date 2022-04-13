let { instrutores, identificador, aulas, identificadorAulas } = require('../bancoDeDados')

const buscarInstrutores = (req, res) => {
    res.send(instrutores)
}

const buscarUmInstrutor = (req, res) => {
    const { id } = req.params
    let validador = false
    let instrutor = instrutores.filter((instrutor) => {
        if (instrutor.id === Number(id)) {
            validador = true
            return instrutor.id === Number(id)
        } else {
            return instrutor = false
        }
    })
    if (!validador) {
        return res.json({ "message": "Instrutor não encontrado" })
    }
    res.send(instrutor)
}

const cadastrarInstrutor = (req, res) => {
    const { nome, email, status } = req.body
    if (!nome) {
        return res.json({ "message": "O campo nome é obrigatório" })
    }
    if (!email) {
        return res.json({ "message": "O campo email é obrigatório" })
    }
    if (!status) {
        return res.json({ "message": "O campo status é obrigatório" })
    }

    const instrutor = {}
    instrutor.id = identificador++
    instrutor.nome = nome
    instrutor.email = email
    instrutor.status = status

    instrutores.push(instrutor)
    res.status(200).json({ "message": "Instrutor cadastrado com sucesso" })

}

const atualizarStatusDoInstrutor = (req, res) => {
    const { status } = req.body
    const { id } = req.params

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        return res.status(404).json({ "message": "instrutor not found" })
    }

    if (status === undefined) {
        return res.status(400).json({ "message": "Is necessary status to do this action" })
    }

    instrutor.status = status
    return res.status(203).send()
}

const atualizarInstrutor = (req, res) => {
    const { id } = req.params
    const { nome, email, status } = req.body
    if (!nome && !email && status === undefined) {
        return res.json({ "Message": "Não tem dados para serem alterados" })
    }

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id)
    })

    if (!instrutor) {
        res.status(404).json({ "message": "instrutor not found" })
    }
    console.log(instrutor)
    if (nome) {
        instrutor.nome = nome
    }
    if (email) {
        instrutor.email = email
    }
    if (status !== undefined) {
        instrutor.status = status
    }
    console.log(instrutor)

    res.send()
}

const deletarInstrutor = (req, res) => {
    const { id } = req.params

    let instrutoresFiltrados = instrutores.filter((instrutor) => {
        return instrutor.id != Number(id)
    })
    instrutores = instrutoresFiltrados

    res.json({ "message": "Instrutor deleted with sucess" })

}

const buscarAulas = (req, res) => {
    res.send(aulas)
}

const buscarUmaAula = (req, res) => {
    const { idAula } = req.params

    const aula = aulas.find((aula) => {
        return aula.id === Number(idAula)
    })

    if (!aula) {
        return res.status(404).json({ "message": "Não encontrado" })
    }
    res.send(aula)
}

const buscarAulasDoInstrutor = (req, res) => {
    const { idInstrutor } = req.params
    const aulasDoInstrutor = aulas.filter((aulas) => {
        return aulas.idInstrutor === Number(idInstrutor)
    })
    res.send(aulasDoInstrutor)
}

const CadastrarAula = (req, res) => {
    const { idInstrutor, titulo, descricao } = req.body
    if (!idInstrutor || !titulo || !descricao) {
        res.json({ "mensagem": "Faltando os parametros obrigatórios" })
    }
    let instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor)
    })

    if (!instrutor) {
        res.status(404).json({ "message": "Instrutor não encontrado" })
    }

    const aula = {}
    aula.idInstrutor = idInstrutor
    aula.titulo = titulo
    aula.descricao = descricao
    aula.id = identificadorAulas++
    aulas.push(aula)
    res.status(200).json({ "message": "livro cadastrado com sucesso" })
}

module.exports = {
    buscarInstrutores,
    cadastrarInstrutor,
    buscarUmInstrutor,
    atualizarStatusDoInstrutor,
    atualizarInstrutor,
    deletarInstrutor,
    buscarAulas,
    buscarUmaAula,
    buscarAulasDoInstrutor,
    CadastrarAula
}