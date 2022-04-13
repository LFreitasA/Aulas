const carros = require('../bancoDeDados')

const apresentarTodosOsCarros = (req, res) => {
    const { marca, cor } = req.query
    console.log(cor)
    console.log(marca)
    resultado = carros
    if (marca) {
        resultado = carros.filter((carro) => {
            return carro.marca === marca
        })
    }
    if (cor) {
        resultado = carros.filter((carro) => {
            return carro.cor === cor
        })
    }
    if (marca && cor) {
        resultado = carros.filter((carro) => {
            return (carro.marca === marca && carro.cor === cor)
        })
    }
    console.log(resultado)
    res.send(resultado)
}

const filtrarCarroPorId = (req, res) => {
    const id = Number(req.params.id)
    const resultado = carros.filter((carro) => {
        const idcarro = Number(carro.id)
        return idcarro === id
    })
    res.send(resultado)
}

const validaSenha = (req, res, next) => {
    const { senha } = req.query
    if (senha === "carros123") {
        console.log("acesso validado")
        return next()
    }
    res.send("Não tem permissão de acesso")
}

module.exports = { apresentarTodosOsCarros, filtrarCarroPorId, validaSenha }