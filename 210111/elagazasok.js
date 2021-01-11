// 1. feladat:

let num=window.prompt("Write a number:")

if (num>0) {
    console.log ("a szám pozitív")

} else if (num<0) {
    console.log ("a szám negatív")

} else {
    console.log ("a szám nulla")
}


// 2. feladat:

let a=window.prompt("Write 'a' number:")
let b=window.prompt("Write 'b' number:")

if (a>b) {
    console.log ("a="+a+" nagyobb, mint "+"b="+b)

} else if (a<b) {
    console.log ("b="+b+" nagyobb, mint "+"a="+a)

} else {
    console.log ("a="+a+" és "+"b="+b+" egyenlő")
}


// 3. feladat:

let num1=parseInt(window.prompt("Write first number:"))
let num2=parseInt(window.prompt("Write second number:"))
let op=window.prompt("Write operator:")

if (op=="+") {
    result = num1+num2

} else if (op=="-") {
    result = num1-num2

} else if (op=="*") {
    result = num1*num2

} else if (op=="/") {
    result = num1/num2
}

console.log (result)
document.getElementById("result").innerHTML = result;


// 4. feladat:

