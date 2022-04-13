let { livros, controladorDeLivros } = require('../bancoDeDados')
const buscarLivros = (req, res) => {
    res.json(livros)
}

const buscarUmLivro = (req, res) => {
    const { id } = req.params
    if (isNaN(id)) {
        return res.status(400).json({ "mensagem": "O valor do parâmetro ID da URL não é um número válido." })
    }

    let livro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!livro) {
        return res.status(404).json({ "mensagem": "Não existe livro para o ID informado." })
    }

    return res.status(200).json(livro)

}

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body
    if (!titulo || !autor || !ano || !numPaginas) {
        return res.json({ "mensagem": "Dados Obrigatórios não enviados" })
    }
    livro = {
        id: controladorDeLivros++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(livro)
    res.status(200).json({ "Mesangem": "Livro adicionado a biblioteca" })
}

const AtualizarTodoOLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    if (!titulo || !autor || !ano || !numPaginas) {
        res.json({ "mensagem": "Os dados titulo, autor, ano, numPaginas são obrigatórios " })
    }

    livro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!livro) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser substituído para o ID informado." })
    }

    livro.titulo = titulo
    livro.autor = autor
    livro.ano = ano
    livro.numPaginas = numPaginas

    return res.status(200).json({ "mensagem": "Livro substituído." })
}

const AlterarUmaInformacaoDoLivro = (req, res) => {
    const { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body
    livro = livros.find((livro) => {
        return livro.id === Number(id)
    })

    if (!livro) {
        res.status(404).json({ "mensagem": "Não existe livro a ser alterado para o ID informado." })
    }
    if (titulo) {
        livro.titulo = titulo
    }
    if (autor) {
        livro.autor = autor
    }
    if (ano) {
        livro.ano = ano

    }
    if (numPaginas) {
        console.log("numPaginas verdadeiro")
        livro.numPaginas = numPaginas
    }
    return res.status(200).json({ "mensagem": "Livro alterado." })
}

const removerUmLivro = (req, res) => {
    const { id } = req.params
    let controlador = false
    livros = livros.filter((livro) => {
        if (livro.id === Number(id)) {
            controlador = true
        }
        return livro.id !== Number(id)
    })

    if (!controlador) {
        return res.status(404).json({ "mensagem": "Não existe livro a ser removido para o ID informado." })
    }

    return res.status(200).json({ "mensagem": "Livro removido." })
}

module.exports = { buscarLivros, buscarUmLivro, adicionarLivro, AtualizarTodoOLivro, AlterarUmaInformacaoDoLivro, removerUmLivro }