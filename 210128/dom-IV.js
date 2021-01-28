// 1. feladat

document.getElementById("char").addEventListener('keydown', event => {
    document.getElementById("keydown").innerText = "Keydown: " + event.key
})
 document.getElementById("char").addEventListener('keypress', event => {
    document.getElementById("keypress").innerText = "Keypress: " + event.key
})
document.getElementById("char").addEventListener('keyup', event => {
    document.getElementById("keyup").innerText = "Keyup: " + event.key
})


// 2. feladat

document.getElementById("area").addEventListener('keyup', function () {
    document.getElementById("mod-area").innerText = document.getElementById("area").value.toUpperCase()
})


// 3. feladat

const char = document.getElementById("textcontrol")
const forbidden = ["Q","A","P","S"]
let censured = ""
char.addEventListener('keyup', event => {
    let lastChar = char.value.slice(char.value.length-1, char.value.length)
    if (!(forbidden.includes(lastChar.toUpperCase()))) {
        censured = censured+lastChar
        document.getElementById("controlled").innerText = censured
        if (event.key === "Backspace") {
            
            
        }
    }
})