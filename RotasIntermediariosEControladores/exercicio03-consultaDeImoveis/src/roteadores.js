const { apresentarImoveis, imovelFiltrado } = require('./controladores/imoveis')

const imoveis = ('/imoveis', apresentarImoveis)
const imoveisByID = ('/imoveis/:id', imovelFiltrado)

module.exports = {
    imoveis, imoveisByID
}