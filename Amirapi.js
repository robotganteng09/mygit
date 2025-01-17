fetch("https://wanting-motors-barely-national.trycloudflare.com")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Jika response berupa JSON
  })
  .then(data => {
    console.log(data); // Menampilkan data di console
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
