const nome = "LeonArdo augusto de FREITAS juNIOR"
const array = nome.split(" ")
let nomeAjustado = ""
for (let nomes of array) {
    for (let i = 0; i < nomes.length; i++) {
        if (i == 0) {
            nomeAjustado += nomes[i].toLocaleUpperCase()
        } else {
            nomeAjustado += nomes[i].toLocaleLowerCase()
        }
    }
    nomeAjustado += " "
}
console.log(nomeAjustado)