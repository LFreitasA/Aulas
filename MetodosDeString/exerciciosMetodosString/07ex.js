function validadorEmail(email) {
    validaArroba = email.indexOf("@")
    validaPonto = email.indexOf(".", validaArroba)
    console.log(validaArroba)
    console.log(validaPonto)
    console.log(email.length)

    if ((validaArroba >= 0 && validaPonto >= 0) && email[0] != "." && email[email.length - 1] != ".") {
        console.log(`E-mail valido`)
    } else {
        console.log(`email invalido`)
    }

}
email = "jose.messias@cubos.academy"
validadorEmail(email)