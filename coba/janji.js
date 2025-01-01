function take(ambil){
    return new Promise((resolve,reject)=> {
        setTimeout (() => {
          if(ambil){
            const pesanan = "uhuy"
            resolve(pesanan)
          } else{
            const batal = "ahay"
            reject(batal)
          }
        },2000)
    })
}

take(false)
.then((ambil) => {
    console.log(ambil)
})
.catch((batal) => {
    console.error("error",batal)
})