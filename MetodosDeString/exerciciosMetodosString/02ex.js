function validadorDeCPF(numero) {
    let primeiraParte = numero.slice(0, 3)
    let segundaParte = numero.slice(3, 6)
    let terceiraParte = numero.slice(6, 9)
    let quartaParte = numero.slice(9)
    if (numero.length == 11) {
        return console.log(`${primeiraParte}.${segundaParte}.${terceiraParte}-${quartaParte}`)
    } else {
        return console.log("CPF Inválido")
    }
}
function validadorDeCNPJ(numero) {
    let primeiraParte = numero.slice(0, 2)
    let segundaParte = numero.slice(2, 5)
    let terceiraParte = numero.slice(5, 8)
    let quartaParte = numero.slice(8, 12)
    let quintaParte = numero.slice(12)
    if (numero.length == 14) {
        return console.log(`${primeiraParte}.${segundaParte}.${terceiraParte}/${quartaParte}-${quintaParte}`)
    } else {
        return console.log("CNPJ Inválido")
    }
}
const cpf = "12345678900";
validadorDeCPF(cpf)

const cnpj = "1234567800199";
validadorDeCNPJ(cnpj)