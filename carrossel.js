const sequencia = ">>><>"
let page = 0
for (let ordem of sequencia) {
    if (ordem == ">") {
        page++
    }
    if (ordem == "<") {
        page--
    }
    if (page == 7) {
        page = 0
    }
    if (page == -1) {
        page = 6
    }
}

console.log(page)