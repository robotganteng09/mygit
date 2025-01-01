fetch('https://jsonplaceholder.typicode.com/posts')
.then(Response => {
    if(!Response.ok){
        throw new Error('jaringan tidak baik')
    }
    return Response.json();
})
.then(data =>{
    console.log(data)
})
.catch(Error => {
    console.error("disini letak erornua",Error)
})