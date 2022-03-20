function solucao(texto) {
    let validavazios = texto.trim()
    if (!validavazios) {
        return console.log(0)
    }
    const arrayDeTexto = texto.trim().split(" ")
    for (let i = 0; i < arrayDeTexto.length; i++) {
        if (arrayDeTexto[i] === "") {
            arrayDeTexto.splice(i, 1)
            i--
        }
    }
    console.log(arrayDeTexto.length)

}
texto = "Todo bom editor de texto     informa no rodapé do programa quantas palavras tem no texto. Você está trabalhando numa empresa que está desenvolvendo um editor de texto e ficou com a tarefa de desenvolver esta funcionalidade. Para o texto dado na entrada, imprima na tela quantas palavras existem neste texto."
solucao(texto)


//for (let item of arrayDeTexto) {
//    if (item == "") {
//        item.replace("")
//    }
//}