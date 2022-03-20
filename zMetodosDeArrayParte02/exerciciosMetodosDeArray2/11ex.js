const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
]

const nomeQueIniciamComA = nomes.filter((nome) => {
    return nome[0].toUpperCase() === "A"
})

console.log(nomeQueIniciamComA)