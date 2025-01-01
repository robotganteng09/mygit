fetch('https://dummyjson.com/test')
.then(Response =>{
    if(!Response.ok){
        throw new Error('jaringan taik')
    }
    return Response.json();
})
.then(data => console.log(data))
.catch(Error => console.error("erorr",Error))

