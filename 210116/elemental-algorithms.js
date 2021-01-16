function megszamolas(arr, keresendo) {
    let DB = 0
    for (let i=1; i<arr.length; i++) {
        if (arr[i] === keresendo) {
            DB += 1
        }
    } return DB

}
console.log(megszamolas([1,2,3,4,5,4,3,2,1], 4))


function max(arr) {
    let maxIndex = 0
    let maxValue = arr[0]
    for (let i=1; i < arr.length; i++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i]
            maxIndex = i
        }
    } return {maxIndex, maxValue}

}
console.log(max([1,2,3,4,5,4,3,2,1]))

sorted = []
function sorting(arr) {
    for (let i=1; i < arr.length; i++) {
        for (let j=i+1; j < arr.length; j++) {
            if (j < i) {
                console.log("yes")
            }
        }
    }
}
console.log(sorting([1,8,5,3,7,2,9]))