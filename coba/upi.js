fetch('https://dummyjson.com/test')
.then(Response => Response.json())
.then(data =>{
    console.log(data)
})
.catch(Error => {
    console.error("error",Error)
})