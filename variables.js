// 1. Inicializálj egy változót, majd adj neki különböző értékeket és írasd ki a konzolra!

num = parseInt(6)
console.log(num);

bool = Boolean(10 == 9);
console.log(bool);

str = "string"
console.log(str);

// 2. Hozz létre változókat, és oldd meg az alábbi műveleteket velük. Az eredményeket írasd ki a konzolra!

a = 123
b = 456
c = 1000
d = 25
e = 126453
f = 5383
g = 45
h = 12
i = 65
j = 10

console.log(a+b)
console.log(c/d)
console.log(e-f)
console.log(a*g)
console.log(h*(i-h)/j)

// 3. A JÉG-től a MÁR-ig

myWord = "jég";
console.log(myWord);

myWord_1 = myWord.replace(myWord.charAt(0), "m")
console.log(myWord_1);

myWord_2 = myWord_1.replace(myWord_1.charAt(1), "á")
console.log(myWord_2);

myWord_3 = myWord_2.replace(myWord_2.charAt(2), "r")
console.log(myWord_3);

// 4. Boldog születésnapot!

let name=window.prompt("Hogy hívnak?")
console.log("Boldog születésnapot "+name+"!")

// 5. Jóslat

let sex=window.prompt("Milyen nemű vagy?")

child = [1,2,3,4,5,6,7,8,9,10]
partner_man = ["John", "Joe", "Jack", "Will", "Ricardo", "Jason"]
partner_woman = ["Erica", "Anna", "Maria", "Laura", "Nicole", "Jessica"]
city = ["Miami", "New York", "Los Angeles", "Dubai", "Budapest", "Párizs"]
job = ["fogorvos", "modell", "asszisztens", "orvos", "ügyvéd", "kukás"]


if (sex == "nő")
console.log("Te egy "+job[Math.floor(Math.random() * job.length)]+" leszel "+city[Math.floor(Math.random() * city.length)]+"ban/ben, és "+partner_man[Math.floor(Math.random() * partner_man.length)]+" lesz a párod, születni fog "+child[Math.floor(Math.random() * child.length)]+" gyereketek.")

if (sex == "férfi")
console.log("Te egy "+job[Math.floor(Math.random() * job.length)]+" leszel "+city[Math.floor(Math.random() * city.length)]+"ban/ben, és "+partner_woman[Math.floor(Math.random() * partner_woman.length)]+" lesz a párod, születni fog "+child[Math.floor(Math.random() * child.length)]+" gyereketek.")

// 6. Életkor kalkulátor

let birth=window.prompt("Melyik évben születtél?")
let future=window.prompt("Melyik évre vagy kíváncsi?")

result_one = future-birth
result_two = future-birth-1

console.log(future+". évben vagy "+result_two+" vagy "+result_one+" éves leszel.")

// 7. Mennyi csokira van szükséged életed hátralévő részében?

let age=window.prompt("Hány éves vagy?")
let max_age=window.prompt("Hány éves korodig tervezel?")
let choc_num=window.prompt("Hány tábla csokit eszel meg havonta?")

result = choc_num*12*(max_age-age)

console.log(result+" csokira lesz szükséged "+max_age+" éves korodig.")

// 8. A kör kerülete és területe

let radius=parseInt(window.prompt("Mekkora sugarú körrel számoljunk?"))

K = 2*radius*Math.PI
T = radius*radius*Math.PI

console.log("Kerület: "+K+"\nTerület: "+T)

// 9. Celsius - Fahrenheit átváltó

let celsius=parseInt(window.prompt("Celsius"))
fahrenheit = (celsius * 1.8) + 32
console.log("Fahrenheit: "+fahrenheit)

let fahr=parseInt(window.prompt("Fahrenheit"))
cels = (fahr - 32) / 1.8
console.log("Celsius: "+cels)