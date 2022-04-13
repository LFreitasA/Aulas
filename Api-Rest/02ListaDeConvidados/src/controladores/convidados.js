let { convidados } = require('../bancoDeDados')

const consultaConvidados = (req, res) => {
    const { nome } = req.query
    if (!nome) {
        return res.status(200).json(convidados)
    }
    let convidado = convidados.find((convidado) => {
        return convidado === nome
    })
    console.log(nome)
    console.log(convidado)
    if (!convidado) {
        return res.status(404).json({ "mensagem": "O convidado buscado não está presente na lista." })
    }
    return res.status(200).json({ "mensagem": "Convidado presente" })

}

const adicionarConvidado = (req, res) => {
    const { nome } = req.body
    convidado = convidados.find((convidado) => {
        return convidado === nome
    })
    if (convidado) {
        return res.status(400).json({ "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    }
    convidados.push(nome)
    res.status(200).json({ "mensagem": "Convidado adicionado." })
}

const removerOCOnvidado = (req, res) => {
    const { nomeConvidado } = req.params
    let parametro = false
    console.log(nomeConvidado)
    convidados = convidados.filter((convidado) => {
        if (convidado === nomeConvidado) {
            parametro = true
        }
        return convidado !== nomeConvidado
    })
    if (!parametro) {
        return res.status(404).json({ "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." })
    }

    console.log(convidados)
    return res.status(200).json({ "mensagem": "Convidado removido." })
}
module.exports = {
    consultaConvidados, adicionarConvidado, removerOCOnvidado
}