function ambilDuit(BCA){
    setTimeout(() => {
        console.log("penrikan duit")
        BCA()
    },7000)
}

ambilDuit(()=> {
    console.log("uang telah di ambil")
})
