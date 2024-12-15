// membuat function

function suhu(suhu){
    const temp = 9/5 * suhu + 32
    console.log("suhu" + temp)
}


function penjumlahan(angka1 , angka2){
    const penjumlahan = angka1+angka2
    console.log("penjumlahan :"+penjumlahan)
}

function pengurangan(angka1,angka2){
    const pengurangan = angka1-angka2
    console.log("pengurangan" + pengurangan)
}

function perkalian(angka1,angka2){
    const perkalian = angka1*angka2
    console.log("perkalian" + perkalian)
}

function pembagian(angka1,angka2){
    const pembagian = angka1/angka2
    console.log("pembagian" + pembagian)
}

// memanggil function
penjumlahan(2,4)
pengurangan(5,7)
perkalian(90,2)
pembagian(4,2)

// hanya menampilkan nilai function
console.log(suhu)
// menjalan isi function
suhu(60)

// function dengan beberapa parameter
function identitas(nama,absen){
    console.log("nama :" + nama + "absen :" + absen)
}

identitas("Claust",2)

// function dengan default argumen

function modulus(angka = 6){
    const modus = angka%5
    console.log("default argumen :" +modus)
}

//tanpa argumen
modulus()

// chalange

// mengecek angka ganjil dan genap

function bilangan(num){
   if(num%2 == 0){
    console.log("genap")
   } else{
    console.log("ganjil")
   }
}
bilangan(2)