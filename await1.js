// async function kirimPesan(){
//     const promise = new Promise((resolve,reject) =>{
//         setTimeout(() => resolve("data berhasil terkirim"),2000)
//     })
//     const result = await promise
//     return result
// }

// async function main(){
//     console.log("mengetik...")
//     const pesan = await kirimPesan()
//     console.log(pesan)
//     console.log("pesan terkirim")
// }
// main()

// with if else
async function kirimKetupat(ketupat){
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            if(ketupat){
                const pesanan = "enaak"
                resolve(pesanan)
            } else{
               const huek = "ga enak"
               reject(huek)
            }
        },2000)
    })
    const result = await promise
    return result
}


async function main(){
 console.log("kirim..")
 const kirim = await kirimKetupat(true)
 .then((pesanan) => {
    if(pesanan === "enak"){
        console.log("ketupat berhasil diterima",pesanan)
    } else {
        console.log("sedang mengantar pesanan lain",pesanan)
    }
    return pesanan
 })
 .catch((Error) => {
    if(Error === "ga enak"){
        console.log("pesanan gagal di terima",Error)
    } else {
        console.log("terjadi kesalahan lain",Error)
    }
    return Error
 })
 console.log("selesai")
}
main()