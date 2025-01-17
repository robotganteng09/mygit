let salam = () => {console.log("good morning");}
let pujian = () => {console.log("hey hands");}
let penjumlahan = (angka1,angka2) => {return(angka1+angka2);}
let perkalian = (angka1,angka2) => {return(angka1*angka2);}

let nama = "Arsya Muhammad Faisyar"
let nomer = 7
let sekolah = "SMK RUS"
export{salam,pujian,penjumlahan,perkalian,nama,nomer,sekolah}

// menggunakan export default

export default function Abel(){
    console.log("hello bel")
}

function artist(){
    console.log("beautiful artist")
}

export{artist}


