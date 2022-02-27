const celular = 71999918888;

function ajustaLayoutCelular(numero) {
    let ddd
    let numeroInicial
    let numeroMeio
    let numeroFinal
    numero = numero.toString()
    if (numero.length === 11) {
        ddd = numero.slice(0, 2)
        numeroInicial = numero.slice(2, 3)
        numeroMeio = numero.slice(3, 7)
        numeroFinal = numero.slice(7)
        return console.log(`(${ddd}) ${numeroInicial} ${numeroMeio}-${numeroFinal} `)
    } else if (numero.length === 9) {
        numeroInicial = numero.slice(0, 1)
        numeroMeio = numero.slice(1, 5)
        numeroFinal = numero.slice(5)
        return console.log(`${numeroInicial} ${numeroMeio}-${numeroFinal}`)
    } else {
        return console.log("Telefone inválido")
    }
}

ajustaLayoutCelular(celular)
let tel = 123456789
ajustaLayoutCelular(tel)
tel = 12345678
ajustaLayoutCelular(tel)
