nome = "Leonardo Freitas"
function reverseString(string) {
    const arrayDeLetras = string.split("")
    arrayDeLetras.reverse()
    let reverseString = ""
    for (let letra of arrayDeLetras) {
        reverseString += letra
    }
    return reverseString
}

let nomeReverso = reverseString(nome)
console.log(nomeReverso)
//split quebra um string em um array
//join transforma um array em um string