const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

function buscarPet(nomePet) {
    let buscaPet = false
    for (usuario of usuarios) {
        for (pet of usuario.pets) {
            if (nomePet.toLowerCase() === pet.toLowerCase()) {
                return console.log(`O dono(a) do(a) ${pet} é o(a) ${usuario.nome}.`)
                buscaPet = true
            }
        }
    }
    if (!buscaPet) {
        console.log(`Que pena ${nomePet}, não encontramos seu dono(a).`)
    }
}
buscarPet("NANINHAS")