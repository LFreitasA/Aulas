let nome = 'Guido Cerqueira';
function segestaoDeApelido(nome) {
    nome = nome.replace(" ", "")
    nome = nome.substring(0, 12)
    novaString = ""
    novaString += "@" + nome
    return novaString
}

console.log(nome)
console.log(segestaoDeApelido(nome))