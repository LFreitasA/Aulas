const palavras = ["arroz", "feijão", "carne", "vodka", "macarrão"]

const contemProdutosInadequados = palavras.some((palavra) => {
    return palavra === "cerveja" || palavra === "vodka"
})

resultado = contemProdutosInadequados ? "revise sua lista, joão. possui bebida com venda proibida!" :
    "tudo certo, vamos as compras!"

console.log(resultado)