class superLaptop{
    constructor(color,type,graphicCrad,harga){
        console.log("warna :" + color)
        console.log("type :" +type)
        console.log("kartu grafis :" + graphicCrad)
        console.log("harga :" + harga)
    }
    keyboard(){
        console.log("harga keyboard :" + this.keyboard)
    }
}
class acer extends superLaptop{}
class asus extends superLaptop{}

const acerLaptop = new acer("hitam","v15","rtx3040",50000)
const asusLaptop = new asus("putih","thinkpad","amd",20000)

class ios extends superLaptop{
    siapa(){
        console.log("who?")
    }
}