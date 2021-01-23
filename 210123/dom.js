// 1. feladat:

const heading = document.querySelector("header");
const para = document.querySelectorAll ("p, li");
console.log(heading);
console.log(para);

function clickMessage() {
    console.log("You clicked me");
}


// 2. feladat:

const picture = document.querySelector("img");
let attr = picture.getAttribute("alt")
console.log(attr)


// 3. feladat:

let classes = document.querySelectorAll("input[type=class]")
console.log(classes)