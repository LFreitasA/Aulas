const { produtos } = require('../bancoDeDados')
const { getStateFromZipcode } = require('utils-playground')
const buscarProdutos = (req, res) => {
    console.log(produtos)
    res.status(200).json(produtos)
}

const buscarProdutoPorID = (req, res) => {
    const { id } = req.params
    const produto = produtos.find((produto) => {
        return produto.id === Number(id)
    })
    if (!produto) {
        res.status(404).json({ "Mensagem": "Produto não encontrado" })
    }
    console.log(produto)
    console.log(id)
    return res.status(200).json(produto)
}

const precoPorEstado = (estado) => {
    if (estado === "BA" || estado === "SE" || estado === "AL" || estado === "PE" || estado === "PB") {
        return 10
    }

    if (estado === "SP" || estado === "RJ") {
        return 15
    }

    return 12
}

const frete = (estado, precoDoProduto) => {
    const taxa = precoPorEstado(estado)
    const valorDoFrete = precoDoProduto / 100 * taxa
    return valorDoFrete

}
const calcularFrete = async (req, res) => {
    const { id, cep } = req.params
    const estado = await getStateFromZipcode(cep)
    const produto = produtos.find((produto) => {
        return produto.id === Number(id)
    })
    const valorDoFrete = frete(estado, produto.valor)
    let compra = { produto, estado: estado, frete: valorDoFrete }
    res.status(200).json({ compra })
}

module.exports = {
    buscarProdutos, buscarProdutoPorID, calcularFrete
}