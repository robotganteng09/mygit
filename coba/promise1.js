function ambilPahal(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const pahala = "ambil pahala"
            resolve(pahala)
        },5000)
    })
}

ambilPahal()
.then((pahala) => {
    console.log(pahala)
})
.catch((Error)=> {
    console.log(Error)
})