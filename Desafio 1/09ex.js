function solucao(precos) {
    let precoTotal = 0
    let menorPreco = 0
    for (let preco of precos) {
        precoTotal += preco
        if (menorPreco == 0) {
            menorPreco = preco
        } else if (menorPreco > preco) {
            menorPreco = preco
        }
    }
    if (precos.length < 3) {
        console.log(precoTotal)
    } else {
        console.log(precoTotal - (menorPreco / 2))
    }

}
let precos = [200, 150, 50, 100]
solucao(precos)