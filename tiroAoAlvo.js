let disparos = [0, 50, 90, 80, 100, 80, 40]

let pontoPositivo = 0

for (let disparo of disparos) {
    if (disparo >= 70) {
        pontoPositivo++
    }
}
let resultado = pontoPositivo >= 3 ? pontoPositivo : "ELIMINADO"

console.log(resultado)

