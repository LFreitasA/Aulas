const cpf = "011.022.033-44";
const cnpj = "76.535.764/0001-43"

function removerPontos(array) {
    let semFormatacao = ""
    for (parte of array) {
        semFormatacao += parte
    }
    return semFormatacao
}
function removerAFormatacaoCPF(cpf) {
    cpf = cpf.replace("-", ".")
    let array = cpf.split(".")
    let cpfSemFormatacao = removerPontos(array)
    return cpfSemFormatacao

}

function removerAFormatacaoCNPJ(cnpj) {
    cnpj = cnpj.replace("/", ".")
    cnpj = cnpj.replace("-", ".")
    let array = cnpj.split(".")
    cnpjSemFormatacao = removerPontos(array)
    return cnpjSemFormatacao
}
console.log(removerAFormatacaoCPF(cpf))
console.log(removerAFormatacaoCNPJ(cnpj))