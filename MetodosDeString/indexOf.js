const email = "testeteste.com"

let temA = email.indexOf("@")
let temPonto = email.indexOf(".", temA)

if(temA>=0 && temPonto>=0){
    console.log("E-mail valido")
}else{
    console.log("E-mail inválido")
}