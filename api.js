// Mengambil data dari API dan menampilkan di konsol
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json()) 
  .then(data => {
    console.log(data);  
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error);
  });