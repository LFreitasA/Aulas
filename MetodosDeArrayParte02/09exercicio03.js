const carros = [
    { marca: "renault", modelo: "megane", ano: 2007, cor: "preto" },
    { marca: "peugeot", modelo: "206", ano: 2008, cor: "branco" },
    { marca: "honda", modelo: "civic", ano: 1998, cor: "prata" },
    { marca: "chevrolet", modelo: "celta", ano: 2012, cor: "preto" },
]

const buscaCarros = (marca, arrayObjectos) => {

    let retorno = arrayObjectos.find((objecto) => {
        return objecto.marca == marca
    })
    console.log(retorno)
}

buscaCarros("honda", carros)