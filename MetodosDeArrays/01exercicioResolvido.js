const nome = "Leonardo Freitas"
function reverseString(string) {
    const nomeArray = []
    let nomeReverso = ""
    for (let i = 0; i < string.length; i++) {
        nomeArray[i] = string[i]
    }
    nomeArray.reverse()
    for (let i = 0; i < nomeArray.length; i++) {
        nomeReverso = nomeReverso + nomeArray[i]
    }
    return nomeReverso

}

let nomeReverso = reverseString(nome)
console.log(nomeReverso)

