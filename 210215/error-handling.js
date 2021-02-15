// 1. feladat:

function upperCase (text) {
    try {
        return text.toUpperCase()
    }
    catch (TypeError) {
        return text+" is not a string. \n"+TypeError
    }
}

console.log(upperCase(4))


// 2. feladat:

function classification (number) {

    if (number > 55 || number < 0) {
        throw new RangeError("Point's data is not in the range (range: 0-55).")
    }  else if ( (number/number !== 1) && (number !== 0) ) {
        throw new RangeError("Point's data is not a number.")
    }

    else {
        let percent = Math.round(number / 55 * 100);
        if (percent < 20) {
            return "Your rating is: " + 1 + " (" + percent + "%)";

        } else if (percent >= 20 && percent < 40) {
            return "Your rating is: " + 2 + " (" + percent + "%)";

        } else if (percent >= 40 && percent < 60) {
            return "Your rating is: " + 3 + " (" + percent + "%)";

        } else if (percent >= 60 && percent < 80) {
            return "Your rating is: " + 4 + " (" + percent + "%)";

        } else if (percent >= 80 && percent <= 100) {
            return "Your rating is: " + 5 + " (" + percent + "%)";
        }
    }
}


let input = window.prompt("Write your points:")
if (input === "") {
    throw new SyntaxError("Points is empty.")
}
let points=parseInt(input);
console.log(classification(points))