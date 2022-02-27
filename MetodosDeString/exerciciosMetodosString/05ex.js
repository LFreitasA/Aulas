const numeroCartao = '1111222233334444';
function mascararCartao(numeroCartao) {
    let inicialcartao = numeroCartao.slice(0, 4).padEnd(8, "*")
    let finalcartao = numeroCartao.slice(-4).padStart(8, "*")
    let cartaoMascarado = inicialcartao + finalcartao
    return cartaoMascarado
}

let cartaoMascarado = mascararCartao(numeroCartao)
console.log(cartaoMascarado)
let a = "1234567890123456"
cartaoMascarado = mascararCartao(a)
console.log(cartaoMascarado)
