// Requisição de texto
function getUsersByFetch() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response1) => response1.json())
        .then((response2) => showUsers(response2));
}
function showUsers(data) {
    console.log(data);
    var container = document.getElementById('userList');
    data.forEach((user) => {
        let paragraph = document.createElement('p');
        paragraph.innerText = user.name;
        container.appendChild(paragraph);
    });
}
getUsersByFetch();

// Requisição de imagem
function getPhotoByFetch() {
    fetch("https://picsum.photos/200/300")
        .then((response) => showPhoto(response))
}
function showPhoto(data) {
    var container = document.getElementById('picOfTheDay');
    let image = document.createElement('img')
    //image.src = data.url: a API irá fornecer uma url, que será inserido no src
    image.src = data.url;
    container.appendChild(image);
}
getPhotoByFetch();