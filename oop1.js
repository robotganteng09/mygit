class baju{
    constructor(baju,harga){
       this.baju = baju
       this.harga = harga

       console.log("baju :" + baju)
       console.log("harga :" + harga)
    }
    kasir(){
        console.log("barang " + this.baju + "harga" + this.harga)
    }
}

const ayam = new baju("crop top",48000)
console.log(ayam)

class celana{
    constructor(celana,harga){
        this.celana = celana
        this.harga = harga

        console.log("celana :" + celana)
        console.log("harga :" + harga)
    }
}

const ayam1 = new celana("jeans",80000)
console.log(ayam1)


