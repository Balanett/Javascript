//1. feladat:

let asyncTrueOrFalse = new Promise(function(resolve, reject) {
    let number = Math.random();
    if (number < 0.5) { resolve(number) }
    else { reject(number) }
});

let trueOrFalsePromise = asyncTrueOrFalse

trueOrFalsePromise.then(data => {
    console.log("Resolved", data);
}).catch(error => {
    console.log("Error", error)
})
