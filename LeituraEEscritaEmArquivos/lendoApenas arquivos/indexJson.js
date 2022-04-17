const fs = require('fs/promises');

(async function () {
    const arquivoJson = await fs.readFile('teste.json')

    //transformando o arquivo em json
    const pessoas = JSON.parse(arquivoJson)

    pessoas.push({
        nome: 'Guido',
        idade: 31
    })
    //Transforma um JSON em texto
    const arrayjson = JSON.stringify(pessoas)
    console.log(pessoas)
    console.log(arrayjson)
})()