// 1. Array implementation

class Array {

    length;
    data
    constructor() {
        this.length = 0
        this.data = {}
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.data
    }

    pop() {
        delete this.data[this.length-1]
        this.length--
        return this.data
    }

    valueOf(index) {
        this.data[index]
        return this.data
    }

    splice(start, end) {

        let result = new Array()
        for (let i=start; i<=end; i++) {
            result.push(this.data[i])
        }
        return result
    }

}

const numbers = new Array()

console.log(numbers.push(12))
console.log(numbers.push(45))
console.log(numbers.push(3))
console.log(numbers.push(21))
console.log(numbers.push(89))
console.log(numbers.push(100))

console.log(numbers.pop())

console.log(numbers.valueOf(3))

let favNums = numbers.splice(2,4)
console.log(favNums.push(35))

