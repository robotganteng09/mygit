// menambah map baru
const kota = new Map(
    [["England","Manchaster"],["Barcelona","Manchaster"]
])

// menampilkan nilai map
console.log(kota.get("England"))

// menambah map baru
const kecamatan = new Map();

kecamatan.set("Manchaster","Wigan")
kecamatan.set("Barcelona","Gracia")
kecamatan.set(1,"Saint")
console.log(kecamatan)

console.log(kecamatan.get("Manchaster"))

//menghapus nilai map
kecamatan.delete("Manchaster")
console.log(kecamatan)

// chalange
const mahasiswa = new Map([[23,"Malik"],[12,"Dito"]])

console.log(mahasiswa.get(12))

mahasiswa.delete(23)
console.log(mahasiswa)