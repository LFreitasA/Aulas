const arquivos = [
    "teste.txt",
    "foto.png",
    "contrato.doc",
    "intalador.exe",
    "intalador.exe"
]

const antiVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((arquivo) => {
        const existeExtensao = arquivo.indexOf(".bat")
        return existeExtensao !== -1
    })

    resultado ? console.log("Vírus encontrado") : console.log("Nenhum vírus encontrado")
}
antiVirus(arquivos)