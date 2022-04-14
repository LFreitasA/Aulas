const express = require('express')
const { getCityFromZipcode, getStateFromZipcode, getPackageDescriptionNpm } = require('utils-playground')

const app = express()

app.get('/', async (req, res) => {
    let cidade
    let estado
    cidade = await getCityFromZipcode('89247000')

    console.log(cidade)

    estado = await getStateFromZipcode('89247000')

    console.log(estado)


    res.send(`A cidade é : ${cidade}-${estado}`)
})

app.get('/pacote/:nomePacote', async (req, res) => {
    const { nomePacote } = req.params
    const descricaoDoPacote = await getPackageDescriptionNpm(nomePacote)

    console.log(descricaoDoPacote)
    res.send(descricaoDoPacote)

})

app.listen(3000)