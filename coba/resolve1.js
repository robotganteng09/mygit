function manakan(burger){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const mcd = "buat"
            if(burger){
                const orderan = "jadi"
                resolve(orderan)
            } else{
                const cancel = "gosong"
                reject(cancel)
            }
        })
    },2000)
}

manakan(true)
.then((mcd)=> {
    console.log(mcd)
})
.catch((cancel)=>{
    console.log(cancel)
})