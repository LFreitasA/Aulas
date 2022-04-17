const { produtos } = require('../bancoDeDados')
const fs = require('fs/promises')

const buscarProdutos = (req, res) => {
    res.json(produtos)
}
const registarVenda = async (req, res) => {
    const { produto_id, quantidade } = req.body

    produto = produtos.find((produto) => {
        return produto.id === Number(produto_id)
    })

    if (!produto) {
        return res.json({ "erro": "Produto não encontrado" })
    }

    const produtoVendido = {
        produto,
        quantidade
    }
    try {
        const logDeVendas = await fs.readFile('./src/vendas.json')
        const vendas = JSON.parse(logDeVendas)
        vendas.push(produtoVendido)
        const vendasStringify = JSON.stringify(vendas)
        await fs.writeFile('./src/vendas.json', vendasStringify)
        res.json({ "mensagem": "Venda salva com sucesso" })
    } catch (erro) {
        console.log("ta no erro")
        return res.json({ "Deu erro": `${erro.message}` })

    } finally {
        console.log("isso sempre sera executado ")
    }

}
module.exports = { buscarProdutos, registarVenda }