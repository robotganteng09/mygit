class superCamera{
    constructor(merk,harga,lensa){
      console.log("merk :" + merk)
      console.log("harga :" + harga)
      console.log("lensa :" + lensa)
    }
}

class Canon extends superCamera{}
class Sony extends superCamera{}

const kameraCanon = new Canon("Canon",8000,"Eos r")
const cameraSony = new Sony("Sony",98000,"oes miror")