/*

// 1. Az engedelmes függvény

function goodFunction () {
    console.log("Igenis, édes Gazdám!");
}

goodFunction();


// 2. Az illedelmes függvény

function politeFunction (name) {
    console.log("Legyen szép napod, "+name+"!");
}

politeFunction('Zoli');


// 3. Kutyaév, emberév

function calculateDogYears (dogAge) {
    let manAge = dogAge * 7;
    console.log("Egy "+dogAge+" éves kutya olyan idős, mint egy "+manAge+" éves ember.");
}

calculateDogYears(5);


// 4. A Jósnő, átdolgozott verzió

function getFortune (profession, city, partner, numberOfChildren) {
    console.log("Te egy "+profession+" leszel "+city+"-ban/ben, és "+partner+" lesz a párod, születni fog "+numberOfChildren+" gyereketek.");
}

getFortune("jedi lovag", "Vlagyivosztok", "Lara Croft", 4);


// 5. És Mégis Mozog a Föld!

function calculateDistance (start, end) {
    let distance = (end-start)*0.8;
    console.log("A Cocos és Nazca lemezek "+start+" és "+end+" között "+distance+" centimétert távolodtak.");
}

calculateDistance(2021, 2030);


// 6. Nettó - bruttó kalkulátor

function getNetto (brutto) {
    let netto = brutto/1.27;
    console.log(netto);
}

getNetto(254000);


function getBrutto (netto) {
    let brutto = netto*1.27;
    console.log(brutto);
}

getBrutto(200000);


// 7. Mennyi lesz a számlán?

function getbrutto (Netto) {
    return Netto*1.27;
}

function getPrice(product, netto_price) {
    let brutto_price = getbrutto(netto_price)
    console.log("A(z) "+product+" termék nettó ára "+netto_price+" Ft, de áfával együtt "+brutto_price+" Ft-ot fizetünk érte.")
}

getPrice("sajt", 700)


// 8. A kör kerülete és területe

function getDistrict_And_Area (radius) {
    let disctrict = 2*radius*Math.PI
    let area = radius*radius*Math.PI
    console.log("A kör kerülete: "+disctrict+"\nA kör területe: "+area)
}

getDistrict_And_Area(5)


// 9. Celsius - Fahrenheit átváltó

function getCelsius(fahrenheit) {
    let celsius = (fahrenheit-32)/1.8
    console.log(celsius)
}

getCelsius(80)

function getFahrenheit(cels) {
   let fahr = (cels*1.8)+32
    console.log(fahr)
}

getFahrenheit(35)


// 10. Az összeadó robot

function getNumbers(message) {
    let sum = 0
    for (let i=1; i<=message; i++) {
        let num = parseInt(window.prompt("Kérem a számot!"))
        sum = sum+num
    }
    return sum
}

result = getNumbers(window.prompt("Hány számot szeretnél összeadni?"))
console.log(result)


// 11.

function isPrime(number) {
    let isprime = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isprime = false;
        }
    }
    if (1 < number && isprime === true) {
        console.log("Prím")
    } else {
        console.log("Nem prím")
    }
}

isPrime(window.prompt("Kérem a számot:"))


// 12. Mennyi ideig tartana elszámolni...?

function calcTime (number) {
    let result = ""
    if (number<0 || 1000000<number) {
        return "Nem 0 és 1 000 000 közötti a szám."
    } else if (1<=number && number<=1000) {
        result = number*0.5
    } else if (1001<=number && number<=100000) {
        result = number*0.8
    } else if (100001<=number && number<=1000000) {
        result = number*1
    }
    if (3600<result) {
        return (result/3600).toFixed(2)+" óráig tartani elszámolni "+number+"-ig"
    } else {
        return result+" másodpercig tartani elszámolni "+number+"-ig"
    }
}

console.log(calcTime(window.prompt("Kérem a számot:")))


// 13. feladat:

function dwarfGift(name) {
    let gift = ""
    if (name==="Tudor") {
        gift = "enciklopédia"
    } else if (name==="Vidor") {
        gift = "lufi"
    } else if (name==="Morgó") {
        gift = "trombita"
    } else if (name==="Morgó") {
        gift = "trombita"
    } else if (name==="Szundi") {
        gift = "ébresztőóra"
    } else if (name==="Szende") {
        gift = "sál"
    } else if (name==="Hapci") {
        gift = "zsebkendő"
    } else if (name==="Kuka") {
        gift = "jegyzettömb"
    } return name+" ennek örülne a legjobban: "+gift
}

console.log(dwarfGift(window.prompt("Melyik törpöt szeretnéd megajándékozni?")))


// 14. feladat:

function myMarsName(realName) {
    let reversedName = realName.split("").reverse().join("")
    let lowerReversedName = reversedName.toLowerCase()
    let firstUpperReversedName = lowerReversedName.substring(0,1).toUpperCase()
    let continuedReversedName = lowerReversedName.substring(1,realName.length)
    return firstUpperReversedName+continuedReversedName
}

console.log(myMarsName(window.prompt("Mi a valódi neved?")))

 */


//15. feladat:

