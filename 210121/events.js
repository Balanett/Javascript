// 2. feladat:

function mouseOver() {
    document.getElementById("text").innerHTML = "Mouseover span";}

function mouseOut() {
    document.getElementById("text").innerHTML = "This is a normal span";}

document.getElementById("text").onmouseover = function() {mouseOver()};
document.getElementById("text").onmouseout = function() {mouseOut()};


// 3. feladat:

let clicks = -1
function counter() {
    clicks += 1
    document.getElementById("counter").innerHTML = "Clicks counter: "+clicks;}

counter()


// 4. feladat:

let button = document.getElementById('show-hide');
let image = document.getElementById('pic');
let imageDisplayed = false;

button.addEventListener("dblclick", function () {

    if (!imageDisplayed) {
        image.style.display = "block";
        imageDisplayed = true
    } else {
        image.style.display = "none";
        imageDisplayed = false;
    }
})
