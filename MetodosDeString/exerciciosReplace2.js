let valor = "1,350,000,450"
function replaceAll(textToReplace, letterTofind, letterToReplace) {
    while (textToReplace.indexOf(letterTofind) != -1) {
        textToReplace = textToReplace.replace(letterTofind, letterToReplace)
    }
    return textToReplace
}

console.log(replaceAll(valor, ",", "."))