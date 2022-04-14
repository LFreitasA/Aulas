const { listarPokemons, detalharPokemon } = require('utils-playground')
let { contadorDePaginas } = require('../bancoDeDados')
const teste = (req, res) => {
    res.send("ola mundo novo novo")
}

const listar = async (req, res) => {

    const lista = await listarPokemons(contadorDePaginas)
    contadorDePaginas++
    res.json(lista)
}

const detalhar = async (req, res) => {
    const { id } = req.params
    const detalhes = await detalharPokemon(Number(id))
    let { name, height, weight, base_experience, forms, abilities, species } = detalhes
    let pokemon = {
        name, height, weight, base_experience, forms, abilities, species
    }
    res.status(200).json(pokemon)

}

module.exports = {
    teste, listar, detalhar
}