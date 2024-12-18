class barang{
    constructor(nama,harga){
        this.nama = nama
        this.harga = harga

        console.log("barang :" + nama)
        console.log("harga :" + harga)
    }
    kasir(){
        console.log("barang :" + this.nama + "harga :" + this.harga)
    }
}

const sabun = new barang("Dettol",3000)
console.log(sabun)

class penjaga{
   constructor(){
    console.log("Arsya")
    console.log("pagi")
   }
}

const Arsya = new penjaga()
class bos{
    penjaga(penjaga){
        console.log("nama " + penjaga)
    }
}

const newShaun = new bos()
newShaun.penjaga("Arsya")

class meet{
    constructor(){
        console.log("basket")
        console.log("badmin")
    }
}

const clasmeet = new meet()