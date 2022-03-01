const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
function agendar(fila, nome) {
    return fila.push(nome)
}

function atendimento(fila) {
    return fila.shift()
}

function cancelar(fila, nome) {
    let posicao = fila.indexOf(nome)
    return fila.splice(posicao, 1)
}

function filaDeAtendimento(fila, operacao, nome) {
    operacao = operacao.toLowerCase() == "agendar" ? agendar(fila, nome) :
        operacao.toLowerCase() == "atender" ? atendimento(fila) :
            operacao.toLowerCase() == "cancelar" ? cancelar(fila, nome) :
                ("Encontramos um erro")
    return fila.join()
}

console.log(filaDeAtendimento(pacientes, "agendar", "Leonardo"))
console.log(filaDeAtendimento(pacientes, "atender"))
console.log(filaDeAtendimento(pacientes, "atender"))
console.log(filaDeAtendimento(pacientes, "atender"))
console.log(filaDeAtendimento(pacientes, "atender"))
console.log(filaDeAtendimento(pacientes, "atendedr"))
console.log(filaDeAtendimento(pacientes, "agendar", "Jose"))
console.log(filaDeAtendimento(pacientes, "cancelar", "Leonardo"))
