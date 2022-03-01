const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function retornaCarros(nomes, posicao) {
    let partes = (nomes.slice(posicao, posicao + posicao))
    return partes
}
let novoarray = retornaCarros(nomes, posicao)

console.log(novoarray)