const imprimirMensagem = (nome, idade) => {
    console.log(`Ola ${nome}! Você tem ${idade} anos!`)
}

setTimeout(() => { imprimirMensagem("leonardo", 32) }, 2000)
setTimeout(imprimirMensagem, 3000, "Maria", 32)