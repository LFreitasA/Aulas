let precos = [100, 500, 100, 200, 50]

let quantidade = 0
let totalAPagar = 0
let menorPreco

for (let preco of precos) {
    quantidade++
    totalAPagar = totalAPagar + preco
    if (menorPreco == null) {
        menorPreco = preco
    }
    if (menorPreco > preco) {
        menorPreco = preco
    }
}

if (quantidade >= 5) {
    totalAPagar -= menorPreco
}

console.log(totalAPagar)