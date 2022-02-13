let letra = "m"
let palavra = ["Melancia", "mamao", "maca", "melao", "melancia", "laranja"]
let errados = 0

for (let lInicial of palavra) {
    errados = lInicial[0] !== letra ? errados + 1 : errados
}

console.log(errados)