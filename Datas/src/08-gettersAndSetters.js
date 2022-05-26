const hoje = new Date()
hoje.setDate(hoje.getDate() - (365 * 13 + 159))
console.log(hoje.getDay())
console.log(hoje)