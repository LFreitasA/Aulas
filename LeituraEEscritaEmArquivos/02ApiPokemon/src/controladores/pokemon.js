const { listarPokemons, detalharPokemon } = require('utils-playground')
let { contadorDePaginas } = require('../bancoDeDados')
const teste = (req, res) => {
    res.send("ola mundo novo novo")
}

const listar = async (req, res) => {

    try {
        const lista = await listarPokemons(contadorDePaginas)
        contadorDePaginas++
        res.json(lista)
    } catch (erro) {
        return res.status(500).json({ "erro": `${erro}` })
    }
}

const detalhar = async (req, res) => {
    const { id } = req.params
    try {
        const detalhes = await detalharPokemon(Number(id))
        let { name, height, weight, base_experience, forms, abilities, species } = detalhes
        let pokemon = {
            name, height, weight, base_experience, forms, abilities, species
        }
        res.status(200).json(pokemon)
    } catch (erro) {
        return res.status(500).json({ "erro": `${erro}` })

    }

}

module.exports = {
    teste, listar, detalhar
}