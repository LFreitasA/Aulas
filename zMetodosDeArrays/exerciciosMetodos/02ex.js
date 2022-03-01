const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 5;

function retornaGruposSeparados(nomes, tamanhoDoGrupo) {
    let novoGrupo = nomes.slice(tamanhoDoGrupo)
    nomes = nomes.slice(0, nomes.length - (nomes.length - tamanhoDoGrupo))
    console.log("Grupo 1: " + nomes)
    console.log("Grupo 2: " + novoGrupo)
}

retornaGruposSeparados(nomes, tamanhoDoGrupo)


