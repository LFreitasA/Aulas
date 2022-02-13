const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100]
let menorNota
let maiorNota
let quantidadeDeNotas = notas.length - 2
let total = 0
let mediaFinal = 0

for (let nota of notas) {
    if (menorNota == null) {
        menorNota = nota;
        maiorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota
    }
    if (nota > maiorNota) {
        maiorNota = nota
    }
    total += nota
}
mediaFinal = (total - menorNota - maiorNota) / quantidadeDeNotas
console.log(mediaFinal)