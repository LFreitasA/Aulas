//ordena os elementos do proprio array. Por padrão, a ordenação é de acordo com a tabela unicode.

//opcionalmente , recebe uma funcao callback que possui dois parâmetros, sendo eles, o primeiro e o sengundo elemento a ser comparado.
const array = [2, 4, 1, 20, 3, 43]

resultado = array.sort()

console.log(resultado)

resultado2 = array.sort((a, b) => {
    return a - b
})

console.log(resultado2)