const palpite = "a"
const palavra = "abelhaa"
let contador = 0

for (letra of palavra) {
    if (palpite === letra) {
        contador++
    }
}

console.log(contador)