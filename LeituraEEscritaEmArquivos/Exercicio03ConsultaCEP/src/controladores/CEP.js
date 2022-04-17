const { buscarEndereco } = require('utils-playground')
const fs = require('fs/promises')

const retornarEndereco = async (req, res) => {
    const { cep } = req.params

    try {
        const arquivo = await (await fs.readFile('./src/ceps.json'))
        const arquivoJson = JSON.parse(arquivo)
        const onBuscarEndereco = arquivoJson.find((endereco) => {
            let cepFormatado = endereco.cep.replace("-", "")
            return cepFormatado === cep
        })
        if (onBuscarEndereco) {
            return res.status(200).json(onBuscarEndereco)
        }
        const endereco = await buscarEndereco(cep)


        arquivoJson.push(endereco)

        const arquivoStringify = JSON.stringify(arquivoJson)
        await fs.writeFile('./src/ceps.json', arquivoStringify)
        res.status(200).json({ endereco })
    } catch (erro) {
        return res.status(500).json({ "erro": "erro inesperado" })
    }
}

module.exports = {
    retornarEndereco
}