fetch('https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3',{
    method: 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body : JSON.stringify({
      key1 : 'value1',
      key2 : 'value2',
      key3 : 'key3'
    })
  })
  .then(Response => Response.json())
  .then(data=> console.log(data))
  .catch(Error => console.error("eror",Error))