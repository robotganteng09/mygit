class superFashion{
    constructor(merk,size,price){
        console.log("name :" + merk)
        console.log("size :" + size)
        console.log("price :" + price)
    }
}

class gucci extends superFashion{}
class supreme extends superFashion{}

const baju = new gucci("shirt jeans",90,90000)
const shoes = new supreme("nike 600",60,800000)

class cardinal extends superFashion{
    sinten(){
        console.log("sapa yang mau")
    }
}

