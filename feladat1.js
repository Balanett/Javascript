/*  Feladat

Adatbekérés:
let name = window.prompt(“Hogy hívnak?”);

1.  kérd be a felhasználó keresztnevét és kedvenc számát két
    külön változóba, majd Név: Pisti, kedvenc száma: 33
    formában írasd ki:
    a.  konzolra console.log()
    b.  alert ablakban alert()
    c.  html oldalra document.write()
    d.  egy h1 elembe aminek ay id-ja “feladat1”
    Forma: <h1>Név: Pisti, kedvenc száma: 33</h1>
*/

let name=window.prompt("Hogy hívnak?")
let num=window.prompt("Melyik a kedvenc számod?")

console.log("Név: "+name+", kedvenc száma: "+num);
alert("Név: "+name+", kedvenc száma: "+num);
document.write("Név: "+name+", kedvenc száma: "+num);
document.getElementById("feladat1").innerHTML = "Név: "+name+", kedvenc száma: "+num;