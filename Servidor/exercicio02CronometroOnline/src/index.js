const express = require('express')
const app = express()
let tempoEmSegundos = 0
let tempoEmMinutos = 0
const contador = () => {
    tempoEmSegundos++
    if (tempoEmSegundos >= 60) {
        tempoEmMinutos++
        tempoEmSegundos = 0
    }
    console.log(tempoEmSegundos)
}
let idSetInterval

const cronometro = (acao) => {
    if (acao === 'iniciar') {
        idSetInterval = setInterval(contador, 1000)
        console.log("inicio")
        return "Cronômetro iniciado!"
    }
    if (acao === 'conferir') {
        console.log("iniciado")
        return `Tempo atual do cronômetro: ${tempoEmMinutos} minutos e ${tempoEmSegundos} segundos`
    }
    if (acao === 'zerar') {
        tempoEmSegundos = 0
        tempoEmMinutos = 0
        return `Cronômetro zerado!`
    }
    if (acao == 'pausar') {
        idClearInterval = clearInterval(idSetInterval)
        console.log("cronometro pausado")
        return `Cronômetro pausado!`
    }
    if (acao == 'continuar') {
        idSetInterval = setInterval(contador, 1000)
        console.log("Cronômetro continuando!")
        return `Cronômetro continuando!!`
    }
}

app.get('/', (req, res) => {
    res.send(cronometro('conferir'))
})

app.get('/iniciar', (req, res) => {
    res.send(cronometro('iniciar'))
})

app.get('/pausar', (req, res) => {
    res.send(cronometro('pausar'))
})

app.get('/continuar', (req, res) => {
    res.send(cronometro('continuar'))
})

app.get('/zerar', (req, res) => {
    res.send(cronometro('zerar'))
})

app.listen(3000)