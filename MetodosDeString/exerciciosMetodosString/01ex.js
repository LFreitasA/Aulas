const comentario = "Esse pandemia é muito perigoso!";
let controlador = false

function validadorDeComentario(comentario) {
    const array = comentario.toUpperCase().split(" ")
    for (palavra of array) {
        if (palavra == "COVID" || palavra == "PANDEMIA") {
            controlador = true
        }
    }
    if (controlador) {
        return console.log("Comentário bloqueado por conter palavras proibidas")
    } else {
        return console.log("Comentário autorizado")
    }
}

validadorDeComentario(comentario)

