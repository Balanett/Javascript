//1. feladat: Prímszámok 1-100 között

for (let num = 1; num <= 100; num++) {
    let s = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            s = 1;
        }
    }
    if (num > 1 && s == 0) {
        console.log(num);
    }
}


//2. feladat: Számok összeadása 1-10-ig

arr = []
let sum = 0;
for (let j = 1; j <= 10; j++) {
    sum = sum+j;
    arr.push(sum)
}
console.log(arr[arr.length-1])


//3. feladat: 10x10-es szorzótábla

for (let a=1; a<=10; a++) {
    for (let b=1; b<=10; b++) {
        console.log(a+"x"+b+"="+a*b)
    }
}