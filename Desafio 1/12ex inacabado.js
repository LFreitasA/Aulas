function solucao(input) {
    input = input.trim()
    primeiraLetra = input[0]
    if (!input[2]) {
        inputFormatado = input.toLowerCase()
        return console.log(inputFormatado)
    }
    segundaLetra = input[1]
    primeiraLetraMaiuscula = false
    segundaLetraMaiuscula = false
    let controlador = false
    inputFormatado = ""
    if (input.trim() == "") {
        inputFormatado = input.trim()
    } else if (input.trim().length <= 1) {
        inputFormatado = input.trim()
    } else {
        if (primeiraLetra === input[0].toLowerCase()) {
            PrimeiraLetraMaiuscula = false
        }
        if (primeiraLetra === input[0].toUpperCase()) {
            primeiraLetraMaiuscula = true
        }
        if (segundaLetra === input[1].toLowerCase()) {
            segundaLetraMaiuscula = false
        }
        if (segundaLetra === input[1].toUpperCase()) {
            segundaLetraMaiuscula = true
        }

        if ((primeiraLetraMaiuscula && segundaLetraMaiuscula) || (!primeiraLetraMaiuscula && !segundaLetraMaiuscula)) {
            inputFormatado = input.toLowerCase()
        } else if ((!primeiraLetraMaiuscula && segundaLetraMaiuscula) || (primeiraLetraMaiuscula && !segundaLetraMaiuscula)) {
            for (let letra of input) {
                if (letra == input[0] && !controlador) {
                    inputFormatado += letra.toUpperCase()
                    controlador = true

                } else {
                    inputFormatado += letra.toLowerCase()
                }
            }
        } else if (!primeiraLetraMaiuscula && !segundaLetraMaiuscula) {
            inputFormatado = input
        } else {
            inputFormatado = input.toLowerCase()
        }
    }
    console.log(inputFormatado)
}

const stringEnorme = "vOCÊ ESTÁ DESENVOLVENDO UM FORMULÁRIO DE CADASTRO E NOS PRIMEIROS TESTES DE USABILIDADE COM USUÁRIOS REAIS NOTOU ALGO PECULIAR: mUITOS USUÁRIOS PREENCHEM O FORMULÁRIO TODO COM A TECLA cAPS lOCK ATIVA, DEIXANDO TUDO BEM MENOS AGRADÁVEL DE LER. a SOLUÇÃO ESCOLHIDA NO dAILY DO DIA SEGUINTE FOI DE DETECTAR QUANDO O USUÁRIO ESTÁ ESCREVENDO DESSA FORMA E CORRIGIR AUTOMATICAMENTE. vOCÊ DEVE AGORA ESCREVER ESSE ALGORITMO."
    +
    "cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS. a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS."
    +
    "Input Format"
    +
    "a ENTRADA CONSISTE DE UMA ÚNICA PALAVRA CONTENDO APENAS LETRAS LATINAS (A-Z), MINÚSCULAS OU MAIÚSCULAS."
    +
    "Constraints"
    +
    "uMA PALAVRA POSSUI NO MÁXIMO 100 LETRAS."
    +
    "Output Format"
    +
    "iMPRIMA A PALAVRA CORRIGIDA, CASO O ALGORITMO TENHA DETECTADO QUE ELA FOI ESCRITA COM cAPS lOCK ATIVO. 7miNHA"

arrayDepalavras = stringEnorme.split(" ")
for (palavra of arrayDepalavras) {

    solucao(palavra)
}