const nome = "LeonArdo augusto de FREITAS juNIOR"
const arrayDeNomes = nome.split(" ")
let nomeFormatado = ""

for (let item of arrayDeNomes) {
    let primeiraLetra = item.slice(0, 1)
    let restanteDoNome = item.slice(1)

    nomeFormatado += primeiraLetra.toLocaleUpperCase() + restanteDoNome.toLocaleLowerCase() + " "
}
console.log(nomeFormatado.trim())