const precos = [30, 10, 54, 76, 1, 4, 35]
let menorDiferenca
let diferenca

let j = 1
for (let preco of precos) {
    for (i = j; i < precos.length; i++) {
        diferenca = preco - precos[i]
        if (diferenca > 0) {
            if (menorDiferenca == null) {
                menorDiferenca = diferenca
            }
            if (diferenca < menorDiferenca) {
                menorDiferenca = diferenca
            }
        }

    }
    j++
}
console.log(menorDiferenca)