let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
function formatarIdentificador(identificador) {
    identificador = identificador.padStart(6, "0")
    return identificador
}
function formatarNome(nome) {
    let array = nome.split(" ")
    let nomeFormatado = ""
    for (item of array) {
        let primeiroCaracter = item.toUpperCase().slice(0, 1)
        let restante = item.toLowerCase().slice(1)
        nomeFormatado += primeiroCaracter + restante + " "
    }
    return nomeFormatado
}

function emailSemEspacos(email) {
    return email.trim()
}
nome = formatarNome(nome)
identificador = formatarIdentificador(identificador)
email = emailSemEspacos(email)
console.log(identificador)
console.log(nome)
console.log(email)