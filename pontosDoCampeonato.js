const resultados = ["V", "E", "V", "E", "D"]
let pontuacao = 0
for (resultado of resultados) {
    pontuacao = resultado == "V" ? pontuacao + 3 : resultado == "E" ? pontuacao + 1 : pontuacao
}

console.log(pontuacao)