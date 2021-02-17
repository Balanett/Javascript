// 1. feladat:

function getDay (date) {
    let daysArray = new Array("vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap");
    let day = daysArray[date.getDay()];
    if (day === undefined) {
        throw new Error("It's not a valid date.")
    } else {
        return day
    }
}

let dateInput = new Date(window.prompt("What is the date?"))
console.log(getDay(dateInput))


// 2. feladat:

function getDateBefore (number) {
    if (number/number !==1 && number !== 0) {
        throw new Error("You have to write number!")
    } else {
        const now = new Date()
        var date = new Date(now.getTime() - (number * 24 * 60 * 60 * 1000));
        return date.toISOString();
    }
}

let days = window.prompt("What was the date ... days before?")
console.log(getDateBefore(days))


// 3. feladat:

function getDateBeforeFrom (startDate, number) {
    var date = new Date("'"+startDate+"'")
    date.setDate(date.getDate() - number);
    return date;
}

let start = window.prompt("What is the start date? (YYYY-MM-DD)")
let days2 = window.prompt("What was the date... days before? (from start date)")
console.log(getDateBeforeFrom(start, days2))


