function sayHello(nama,callBack){
    console.log(`hello,${nama}`)
    callBack()
}
function goodNight(){
    console.log("good night")
}
sayHello("Aira",goodNight)