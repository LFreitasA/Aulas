const texto = "Aprenda programar do zero na Cubos Academy";

let array = texto.toLocaleLowerCase().split(" ")
let urlAmigavel = ""

for (let i = 0; i < array.length; i++) {
    if (array[i + 1]) {
        urlAmigavel += array[i] + "-"
    } else {
        urlAmigavel += array[i]
    }
}

console.log(urlAmigavel)

