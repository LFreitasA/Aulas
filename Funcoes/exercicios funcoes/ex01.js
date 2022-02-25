const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
let nota=0
const corrigirProva = (prova) => {
    for (questoes of prova.questoes){
        nota= questoes.resposta === questoes.correta ? nota +(prova.valor/prova.questoes.length) : nota
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${nota/(prova.valor/prova.questoes.length)} questões e obteve nota ${nota}`)
}

corrigirProva(prova)