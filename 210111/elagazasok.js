// 1. feladat:

let num=window.prompt("Write a number:");

if (num>0) {
    console.log ("a szám pozitív");

} else if (num<0) {
    console.log ("a szám negatív");

} else {
    console.log ("a szám nulla");
}


// 2. feladat:

let a=window.prompt("Write 'a' number:");
let b=window.prompt("Write 'b' number:");

if (a>b) {
    console.log ("a="+a+" nagyobb, mint "+"b="+b);

} else if (a<b) {
    console.log ("b="+b+" nagyobb, mint "+"a="+a);

} else {
    console.log ("a="+a+" és "+"b="+b+" egyenlő");
}


// 3. feladat:

let num1=parseInt(window.prompt("Write first number:"));
let num2=parseInt(window.prompt("Write second number:"));
let op=window.prompt("Write operator:");

if (op=="+") {
    result = num1+num2;

} else if (op=="-") {
    result = num1-num2;

} else if (op=="*") {
    result = num1*num2;

} else if (op=="/") {
    result = num1/num2;
}

console.log (result);
document.getElementById("result").innerHTML = result;


// 4. feladat:

let number1=parseInt(window.prompt("Write first number:"));
let number2=parseInt(window.prompt("Write second number:"));
let operator=window.prompt("Write operator:");

switch (operator) {

    case "+":
        outcome = number1 + number2;
        break;

    case "-":
        outcome = number1 - number2;
        break;

    case "*":
        outcome = number1 * number2;
        break;

    case "/":
        outcome = number1 / number2;
        break;
}

console.log (outcome);
document.getElementById("outcome").innerHTML = outcome;


// 5. feladat:

let points=parseInt(window.prompt("Write your points:"));

percent = points/55*100

if (percent<20) {
    console.log(1);

} else if (percent>19 && percent<40) {
    console.log(2);

} else if (percent>39 && percent<60) {
    console.log(3);

} else if (percent>59 && percent<80) {
    console.log(4);

} else if (percent>79) {
    console.log(5);
}