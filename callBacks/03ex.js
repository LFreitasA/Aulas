const retornarStack = (usuarios, callback) => {
    let lista = []
    for (let i = 0; i < usuarios.length; i++) {
        if (callback(usuarios[i])) {
            lista.push(usuarios[i])
        }
    }

    return console.log(lista)
}

const usuarios = [{
    nome: "Leonardo",
    stack: "back"
}, {
    nome: "Mario",
    stack: "front"
}, {
    nome: "Gabriel",
    stack: "fullStack"
}, {
    nome: "Marcos",
    stack: "back"
}, {
    nome: "Lucky",
    stack: "front"
}, {
    nome: "Taka",
    stack: "fullStack"
}]

retornarStack(usuarios, (usuario) => {
    return usuario.stack === "back"
})
