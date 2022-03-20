function solucao(min, max, valores) {
    let novoArray = []
    for (let valor of valores) {
        if (min <= valor && max >= valor) {
            novoArray.push(valor)
        }
    }
    console.log(novoArray)
}
let min = 1
let max = 1
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9]
solucao(min, max, valores)