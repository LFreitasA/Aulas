const express = require('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('Ola esse é o meu primeiro servidor com o express')
})

app.get('/home', (requisicao, resposta) => {
    resposta.send('Pagina Home')
})

app.get('/array', (requisicao, resposta) => {
    const array = [1, 2, 3, 4, 5, 6]
    resposta.send(array)
})

app.get('/usuarios', (requisicao, resposta) => {
    const arrayDeUsuarios = [
        { id: 11, nome: 'joao', idade: 23 },
        { id: 2, nome: 'maria', idade: 18 },
        { id: 4, nome: 'ana', idade: 30 },
        { id: 1, nome: 'rodrigo', idade: 17 },
        { id: 123, nome: 'rodrigo', idade: 17 },
    ]
    resposta.send(arrayDeUsuarios)
})

app.listen(3000)