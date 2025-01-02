async function kirimData(){
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("data berhasil terkirim"),2000)
    })
    const result = await Promise // menunggu Promis
return result
}

async function main(){
    console.log("proses di mulai...")
    const data = await kirimData()
    console.log(data)
    console.log("proses selesai")
}
main()