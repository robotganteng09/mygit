// struktur data object
const orang = {nama : "Abel",kelas : "XE7",absen : 6,sekolah : "smansaku"}
// mengakses property
console.log(orang.nama)

//.mengganti value dari salah satu object
orang.nama = "Syifa"
console.log(orang.nama)
// menghapus salah satu property
delete orang.absen
console.log(orang)

// mengakses salah satu property menggunakan []
console.log(orang["nama"])

// mengakses nilai destructure
const Man = {nama : "Arsya" , kelas : "XEPPLG2", absen : 9, sekolah : "SMK RUS" }

const {nama,kelas} = Man
console.log(nama,kelas)
const {nama : Yuji, sekolah : RUS} = Man
console.log(Yuji,RUS)