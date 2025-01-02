function makanan(pie){
    return new Promise((resolve,reject)=> {
         setTimeout(() => {
            if(pie){
                const kuro ="pie"
                resolve(kuro)
            } else {
                const luffy = "daging"
                reject(luffy)
            }
         })
    },2000)
}

makanan(true)
.then((pie) => {
    console.log(pie)
})
.catch((Error) => {
    console.error("salah",Error)
})