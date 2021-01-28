// 1. feladat:

function createAnchor () {
    let anchor = document.createElement("a");
    document.body.appendChild(anchor);
    anchor.href = "https://asszisztensem.com";
    anchor.innerHTML = "Asszisztensem";
    anchor.target = "_blank";
}

createAnchor()


// To Do list:

function CreateToDoList(list) {
    let ul = document.createElement("ul");
    document.body.appendChild(ul);
    ul.className = "list"

    list.forEach(function (item) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += item;
        li.className = "list-item"
    })

}

let toDoList = ["get up", "drink a coffee", "eat breakfast", "go to shower", "brushing teeth", "get dressing",
    "make up", "do hair", "close the door", "got to work"];

CreateToDoList(toDoList)

var removeItem = document.getElementsByClassName("list-item");
for (let i=0; i<removeItem.length; i++) {
    removeItem[i].addEventListener('click', function (event) {
        event.target.remove();
    })
}

