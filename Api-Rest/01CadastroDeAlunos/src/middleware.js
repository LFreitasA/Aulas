const middleware = require('express')

const validarSenha = (req, res, next) => {
    const { senha } = req.query
    if (senha === "cubos123") {
        return next()
    }
    res.status(401).json({ "mensagem": "É necessário autenticação para utilizar o modulo" })
}

module.exports = validarSenha