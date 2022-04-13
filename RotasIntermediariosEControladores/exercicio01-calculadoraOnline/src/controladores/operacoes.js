const soma = (req, res) => {
    const { num1, num2 } = req.query
    if (!num1 || !num2) {
        res.send("Dados inválidos")
    }
    let resultado = Number(num1) + Number(num2)
    console.log(resultado)
    res.send(`${num1} + ${num2} = ${resultado} `)
}

const subtracao = (req, res) => {
    const { num1, num2 } = req.query
    if (!num1 || !num2) {
        res.send("Dados inválidos")
    }
    let resultado = Number(num1) - Number(num2)
    console.log(resultado)
    res.send(`${num1} - ${num2} = ${resultado} `)
}

const multiplicacao = (req, res) => {
    const { num1, num2 } = req.query
    if (!num1 || !num2) {
        res.send("Dados inválidos")
    }
    let resultado = Number(num1) * Number(num2)
    console.log(resultado)
    res.send(`${num1} * ${num2} = ${resultado} `)
}

const divisao = (req, res) => {
    const { num1, num2 } = req.query
    if (!num1 || !num2) {
        res.send("Dados inválidos")
    }
    let resultado = Number(num1) / Number(num2)
    console.log(resultado)
    res.send(`${num1} / ${num2} = ${resultado} `)
}

module.exports = {
    soma, subtracao, multiplicacao, divisao
}