function solucao(lista) {
    let menorIdade = 0
    for (let item of lista) {
        if (item >= 18) {
            if (menorIdade == 0) {
                menorIdade = item
            } else if (menorIdade > item) {
                menorIdade = item
            }
        }
    }

    if (menorIdade == 0) {
        console.log("CRESCA E APARECA.")
    } else {
        console.log(menorIdade)
    }
}
lista = [12, 28, 27, 35, 45, 10, 18, 25, 36]
solucao(lista)