class person{
    constructor(nama,umur){
        this.nama = nama
        this.umur = umur  

        console.log("nama :" + nama)
        console.log("umur :" + umur)
    }
    salken(){
        console.log("perkenal kan nama saya :" + this.nama + "umur :" + this.umur)
    }
}

const person1 = new person("Arsa",15)
console.log(person1)
person1.salken()
console.log(typeof(person1))

class manusia{
    constructor(){
      console.log("omnivora")
      console.log("bumi")
    }
}

const Arsya = new manusia();
class Marshall{
    nama(nama){
        console.log("namaku :" + nama)
    }
}

const newMarshall = new Marshall();
newMarshall.nama("Arsya")

class alamat{
    constructor(){
        console.log("Demaan")
        console.log("Barongan")
    }
}

const alamatBaru = new alamat()

class king{
    constructor(nama,jabatan){
       this.nama = nama
       this.jabatan = jabatan

       console.log("nama :" + nama)
       console.log("jabatan :" + jabatan)
    }
    persembahkan(){
        console.log("nama" + this.nama + "jabatan " + this.jabatan)
    }
}

const person2 = new king("Sir Arsya","raja")
console.log(person2)