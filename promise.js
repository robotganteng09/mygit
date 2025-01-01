function ambilData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const data = "data telah di ambil"
            resolve(data)
        },2000)
    })
}

ambilData()
.then((data) => {
    console.log(data)
})
.catch((Error) => {
    console.log(Error)
})

// dengan resolve dan reject

function ambilAyam(ayamAda){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(ayamAda){
                const pesanan = "ayam segera di pack"
                resolve(pesanan)
            } else{
                const error = "ayam habis"
                reject(error)
            }
        },5000)
    })
}

ambilAyam(true) // gunakan kondisi boolean untuk mengcheck hasil benar atau salah
.then((pesanan) => {
    console.log(pesanan)
})
.catch((error) =>{
    console.log(error)
})