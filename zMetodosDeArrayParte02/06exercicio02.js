const arquivos = ["foto.jpg", "virus.png", "importante.bat"]


const verificadorDeExtensão = (nomeDoArquivo) => {

    console.log(nomeDoArquivo.slice(nomeDoArquivo.length - 3))
    if (nomeDoArquivo.length - 3 == "bat") {
        console.log("verdadeiro")
    }
    return nomeDoArquivo.slice(nomeDoArquivo.length - 3) === "bat"


}
verificadorDeExtensão(arquivos)

resultado = arquivos.some(verificadorDeExtensão) ? "Virus Detectado" : "nenhum vírus encontrado"
//nomeDosArquivos[0].slice(nomeDosArquivos[0].length - 3)

console.log(resultado)