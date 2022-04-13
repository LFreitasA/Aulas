const { imoveis } = require('../bancoDeDados')

const apresentarImoveis = (req, res) => {
    res.send(imoveis)
}

const imovelFiltrado = (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.send("é necessáriop a criação do parametro")
    }
    resultado = imoveis.filter((movel) => {
        return movel.id === Number(id)
    })
    res.send(resultado)
}

module.exports = {
    apresentarImoveis, imovelFiltrado
}