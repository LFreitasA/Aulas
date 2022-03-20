const palavras = ["livr", "cane", "sol", "carr", "orea"]

const novoArray = palavras.some((palavra) => {
    return palavra.length >= 5
})

resultado = novoArray ? "existe palavra inválida" : "array validado"
console.log(resultado)