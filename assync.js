// call back

function ambilDaya(data){
    setTimeout(() => {
        console.log("data telah di ambil");
        data()
    },2000)
}

ambilDaya(() =>{
    console.log("proses selesai")
})