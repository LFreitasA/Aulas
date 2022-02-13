const primeiraLetra = "m"
const segundaLetra = "a"
const palavras = ["aveia", "manha", "ave"]
const selecaoDePalavras = []

for (let palavra of palavras) {
    if (primeiraLetra === palavra[0] && segundaLetra == palavra[1]) {
        selecaoDePalavras.push(palavra)
        console.log(palavra)

    }
}
if (selecaoDePalavras.length > 0) {

} else console.log("NENHUMA")