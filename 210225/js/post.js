// Simple Blog:

let getPost = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject("Could not fetch data")
            }
        });

        request.open("GET", resource)
        request.send();
    })
};

let hash = window.location.hash;
let url = "https://jsonplaceholder.typicode.com/posts/";


if (!hash) {
    alert("missing id");
}

url += hash.replace('#', '');

getPost(url)
    .then(data => {

        console.log(data);

        const body = document.querySelector("body")

        const divItem = document.createElement("div")
        const h1Item = document.createElement("h1")
        const h3Item = document.createElement("h3")
        const pItem = document.createElement("p")

        divItem.className = "header"
        h1Item.className = "header-item"
        h3Item.className = "header-item"
        pItem.className = "post-body"

        h1Item.innerText = data.title
        h3Item.innerText = "Author: " + data.userId
        pItem.innerHTML = data.body

        divItem.appendChild(h1Item)
        divItem.appendChild(h3Item)
        body.appendChild(divItem)
        body.appendChild(pItem)

    })
    .catch(error => {
        console.log("Error on rejected:", error)
    })
