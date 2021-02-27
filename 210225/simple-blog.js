// Simple Blog:

const body = document.querySelector("body")


let getPosts = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4  && request.status === 200) {
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

getPosts("posts/posts.json")
    .then(data => {
        console.log(data)

        const gridContainer = document.createElement("div")
        gridContainer.className = "grid-container"
        body.appendChild(gridContainer)

        for (let i=0; i<30; i++) {
            const divItem = document.createElement("div")
            const h3Item = document.createElement("h3")
            const pItem = document.createElement("p")
            const btnItem = document.createElement("button")

            divItem.className = "grid-item"
            h3Item.className = "title"

            h3Item.innerHTML = data[i].title
            pItem.innerHTML = data[i].body.substring(1,101)
            btnItem.innerHTML = "Learn more ➜ "

            divItem.appendChild(h3Item)
            divItem.appendChild(pItem)
            divItem.appendChild(btnItem)
            gridContainer.appendChild(divItem)
        }
    })
    .catch(error => {
        console.log("Error on rejected:", error)
    })