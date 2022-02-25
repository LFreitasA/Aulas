const usuarios = [
    {
        nome: "João",
        pets: [],
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
console.log(usuarios[1].pets.length)


for(usuario of usuarios){
    let temPets = usuario.pets.length === 0 ? "Não tenho pets" : usuario.pets.length > 1 ? `tenho ${usuario.pets.length} pets` : `tenho ${usuario.pets.length} pet`
    console.log(`Sou ${usuario.nome} e ${temPets}`)
}