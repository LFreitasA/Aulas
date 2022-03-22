//Retorna um número que indica se a string de referencia vem antes, depois ou é igual a string comparada.
const letraA = "a"
const letraC = "c"

letraA.localeCompare(letraC)
//a vem antes de c
//resultada em valor negativo

letraC.localeCompare(letraA)
//c vem depois de a
//resultada em valor positivo

letraA.localeCompare(letraC)
//c é igual a c
//o resultado é zero