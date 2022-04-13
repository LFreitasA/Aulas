let { alunos, controladorAlunos } = require('../bancoDeDados')

const listarAlunos = (req, res) => {
    console.log(alunos)
    res.send(alunos)
}
const listarUmAluno = (req, res) => {
    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({ "mensagem": "O parametro deve ser um numero inteiro" })
    }
    let aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    })
    if (!aluno) {
        return res.status(404).json({ "mensagem": "Aluno não encontrado." })
    }
    return res.status(200).json({ aluno })


}

const cadastrarAluno = (req, res) => {
    let { nome, sobrenome, idade, curso } = req.body
    nome = nome.trim()
    sobrenome = sobrenome.trim()

    if (nome.length < 3 || sobrenome.length < 3) {
        return res.status(400).json({ "mensagem": "Os campos nome e sobrenome tem q ter pelo menos 2 caracteres" })
    }
    if (!nome || !sobrenome || !idade || !curso) {
        return res.status(400).json({ "mensagem": "faltam dados" })
    }
    if (idade < 18) {
        return res.status(400).json({ "mensagem": "Aluno menor de idade" })
    }
    let aluno = {
        id: controladorAlunos++,
        nome,
        sobrenome,
        idade,
        curso
    }
    alunos.push(aluno)
    return res.status(201).json(aluno)

}

const deletarAluno = (req, res) => {
    const { id } = req.params
    let controlador = false
    alunos = alunos.filter((aluno) => {
        if (aluno.id === Number(id)) {
            controlador = true
        }
        if (aluno.id !== Number(id)) {
            return aluno.id !== Number(id)
        }
    })
    if (!controlador) {
        return res.status(400).json({ "mensagem": "aluno não encontrado" })
    }

    res.status(200).json(alunos)
}

module.exports = {
    listarAlunos,
    listarUmAluno,
    cadastrarAluno,
    deletarAluno
}