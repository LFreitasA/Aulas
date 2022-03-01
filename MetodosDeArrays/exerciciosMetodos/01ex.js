const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function formataArray(array) {
    array.reverse()
    array.splice(0, 1)
    array.splice(array.length - 1, 1, "Melão")
    console.log(array)

}

formataArray(frutas)