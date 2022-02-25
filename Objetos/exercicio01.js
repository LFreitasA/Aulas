const pessoa = {
    nome: "Leonardo",
    idade: 32,
    altura: 1.65,
    temCNH: false, 
    apelidos: ["Diunior","ddd"]
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos,  ${pessoa.altura}m de altura, ${pessoa.temCNH ? "Possui CNH" : "não possui CNH"} e os seguintes apelidos: `)

for (let apelido of pessoa.apelidos){
    console.log(`- ${apelido}`)
}
