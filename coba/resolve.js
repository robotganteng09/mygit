function chess(player){
   return new Promise((resolve,reject)=> {
    setTimeout(() => {
        const pion = "hts"
        if(player){
       const result = "anda badut"
       resolve(result)
        } else {
          const miss = "alhamdulillah"
          reject(miss)
        }
    },5000)
   })
}

chess(false)
.then((pion) =>{
    console.log(pion)
})
.catch((miss) =>{
    console.log(miss)
})
