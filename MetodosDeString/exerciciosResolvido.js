function imprimirData(dia, mes, ano) {
    let diaFormatado = toString(dia)
    let mesFormatado = toString(mes)
    let anoFormatado = toString(ano)
    diaFormatado = diaFormatado.padStart(2, "0")
    mesFormatado = mesFormatado.padStart(2, "0")
    anoFormatado = anoFormatado.padStart(4, "20")
    return console.log(`${diaFormatado}/${mesFormatado}/${anoFormatado}`)

}

function toString(numero) {
    numero = String(numero)
    return numero
}

imprimirData(3, 3, 22)

/*
let diaFormatado = dia.padStart(2, "0")
let mesFormatado = mes.padStart(2, "0")
let anoFormatado = ano.padStart(4, "20")
console.log(`${diaFormatado}/${mesFormatado}/${anoFormatado}`)*/