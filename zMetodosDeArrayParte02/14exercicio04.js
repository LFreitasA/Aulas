const professores = [
    { nome: "Guido", stack: "backend" },
    { nome: "Vidal", stack: "backend" },
    { nome: "Dani", stack: "frontend" },
    { nome: "Diego", stack: "frontend" },
    { nome: "Léo", stack: "backend" },
    { nome: "Ruli", stack: "frontend" },
]

let professoresBackend = professores.filter((professor) => {
    return professor.stack === "backend"
})

let professoresFrontend = professores.filter((professor) => {
    return professor.stack === "frontend"
})

console.log(professoresBackend)
console.log(professoresFrontend)