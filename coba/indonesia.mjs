let barang = () => {console.log("gula","katun","rempah")}
let harga = () => {console.log(2000,90800,20000)}
let ongkir = () => {console.log(902000,20000,10000)}

let kapal = "kapal karam"
let pelabuhan = "atlantic"
let captain = "Arsya"
export{barang,harga,ongkir,kapal,pelabuhan,captain}

export default function budaya(){
    console.log("wayang")
}
barang(),harga(),ongkir()
export{budaya}