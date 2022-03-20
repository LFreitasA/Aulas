const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

const resultado = livros.findIndex((livro) => {
    return livro === nomeDoLivro
})

console.log(`O livro está na posição ${resultado + 1}`)