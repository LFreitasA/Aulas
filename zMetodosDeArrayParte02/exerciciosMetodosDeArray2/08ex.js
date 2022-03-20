const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]
let id = 0
const frutasFormatada = frutas.map((fruta) => {
    return `${id++} - ${fruta[0].toUpperCase() + fruta.slice(1).toLowerCase()}`
})

console.log(frutasFormatada)