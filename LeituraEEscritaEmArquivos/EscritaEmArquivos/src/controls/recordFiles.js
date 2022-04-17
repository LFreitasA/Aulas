const fs = require('fs/promises')

const teste = async (req, res) => {
    //sobrescreve ou cria um novo arquivo
    await fs.writeFile('./src/.txt', 'ola')
    const a = await (await fs.readFile('../a.txt')).toString()
    console.log(a)
    res.json("ola mundo novo")
}

const gravarComGet = async (req, res) => {
    const { nome, idade } = req.body
    try {
        const teste = await fs.readFile('./src/usuarios.json')
        console.log(JSON.parse(teste))

        const pessoas = JSON.parse(teste)

        pessoas.push({
            nome, idade
        })

        const pessoasStringify = JSON.stringify(pessoas)
        console.log(pessoasStringify)

        await fs.writeFile('./src/usuarios.json', pessoasStringify)
        return res.json({ "mensagem": "Pessoa cadastrada com sucesso" })
    } catch (erro) {
        return res.json({ "Deu erro": `${erro.message}` })

    } finally {
        console.log("isso sempre sera executado ")
    }

}
module.exports = {
    teste, gravarComGet
}