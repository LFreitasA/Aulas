const buscarFruta = (arrayFrutas, callback) => {
    for (let fruta of arrayFrutas) {
        if (callback(fruta)) {
            console.log("Fruta encontrada")
            return
        }
    }
    console.log("Fruta nâo encontrada")

}
const frutas = ["uva", "manga", "abacaxi", "banana"]
buscarFruta(frutas, (item) => {
    return item === "laranja"

})