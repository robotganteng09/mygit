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