// 2. feladat:

function mouseOver() {
    document.getElementById("text").innerHTML = "Mouseover span";}

function mouseOut() {
    document.getElementById("text").innerHTML = "This is a normal span";}



// 3. feladat:

let clicks = 0
function counter() {
    clicks += 1
    document.getElementById("counter").innerHTML = "Clicks counter: "+clicks;}

