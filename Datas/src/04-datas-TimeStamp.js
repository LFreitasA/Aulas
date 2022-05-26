const finalDaCopa = new Date(2002, 05, 30, 12)
const timeStamp = finalDaCopa.getTime()
const finalMaisUmaHora = +finalDaCopa + 1000 * 60 * 60
const finalMaisUmaHoraDate = new Date(finalMaisUmaHora)

console.log(+finalDaCopa)
console.log(timeStamp)
console.log(finalMaisUmaHora)
console.log(finalMaisUmaHoraDate)