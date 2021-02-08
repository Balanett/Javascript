document.getElementById("back").addEventListener("click", function () {
    window.location = "login.html" } )

let name = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let register = document.getElementById("register")

let inputs = document.querySelectorAll("input")

for (let i=0; i<inputs.length; i++) {
    inputs[i].addEventListener("keyup", function () {
        if (password.value.length >= 12 && name.value !== "" && email.value !== "" ) {
            register.disabled = false
        } else {
            register.disabled = true
        }
        localStorage.setItem("name", name.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", window.btoa(password.value))
    })
}

register.addEventListener("click", function () {
    document.getElementById("message").innerText= "The registration was successful!"
    setTimeout(function () {
        window.location = "login.html"
    }, 3000)
    console.log(localStorage)
})

