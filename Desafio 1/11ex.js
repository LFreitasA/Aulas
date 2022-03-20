function solucao(min, km) {
    let precoPorMinuto = 50
    let precoPorKM = 70
    let total = 0
    if (km > 10) {
        total += (precoPorKM * 10)
        km -= 10
        precoPorKM = 50
        total += (precoPorKM * km)
    } else {
        total += (precoPorKM * km)
    }
    if (min > 20) {
        total += (precoPorMinuto * 20)
        precoPorMinuto = 30
        min -= 20
        total += (precoPorMinuto * min)
    } else {
        total += (precoPorMinuto * min)
    }
    console.log(total)
}



let min = 25
let km = 11.5
solucao(min, km)