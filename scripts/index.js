fetch('https://my-json-server.typicode.com/Kelvin-rnov/DB/livros/')
.then(response => response.json())
.then(json => {
    const div = document.getElementById("content");
    div.innerText = JSON.stringify(json)
})