/*  Feladat

    Kérj be két (a és b) számot, majd számold ki:
    a.  összegüket
    b.  szorzatát
    c. aa , ab
    d. kör kerületét (a-ból), kör területét b-ből
        Pí értéke pontosan : Math.pi
    e. Pitagorasz tétele alapján C-t (a2 + b2 = c2)
        Gyökvonás segítség:

*/

let first=window.prompt("Első szám")
let sec=window.prompt("Második szám")

a = parseInt(first)
b = parseInt(sec)

sum = a + b
multiply = a * b
exponentiation_a = a ** a
exponentiation_b = a ** b
K = 2 * a * Math.PI
T = b**b * Math.PI
CC = a**a + b**b
C = Math.sqrt(CC)

console.log("Összeg: "+sum+ "\nSzorzat: "+multiply+ "\na^a: "+exponentiation_a+ "\na^b: "+exponentiation_b+ "\nK: "+K+ "\nT: "+T+ "\nC: "+C);
alert("Összeg: "+sum+ "\nSzorzat: "+multiply+ "\na^a: "+exponentiation_a+ "\na^b: "+exponentiation_b+ "\nK: "+K+ "\nT: "+T+ "\nC: "+C);