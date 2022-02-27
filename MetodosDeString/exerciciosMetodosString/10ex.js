const nomeArquivo = 'Foto da Familia.png'

function validaExtensao(nomeArquivo) {
    let extensao = nomeArquivo.slice(-3)
    if (extensao == "jpg" || extensao == "jpeg" || extensao == "gif" || extensao == "png") {
        console.log("Arquivo Valido")
    } else {
        console.log("Arquivo INVALIDO")
    }
}
validaExtensao(nomeArquivo)
