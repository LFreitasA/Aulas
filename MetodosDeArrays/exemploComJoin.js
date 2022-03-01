nome = "Bruna Dangui Klein do Amaral de Freitas"
function reverseString(string) {
    const arrayDeLetras = string.split("")
    arrayDeLetras.reverse()
    let reverseString = arrayDeLetras.join("")
    return reverseString
}

let nomeReverso = reverseString(nome)
console.log(nomeReverso)