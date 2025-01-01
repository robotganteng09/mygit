fetch('https://jsonplaceholder.typicode.com/todos/1',{
  method: 'POST',
  headers : {
    'Content-Type': 'application/json'
  },
  body : JSON.stringify({
    key1 : 'value1',
    key2 : 'value2'
  })
})
.then(Response => Response.json())
.then(data=> console.log(data))
.catch(Error => console.error("eror",Error))