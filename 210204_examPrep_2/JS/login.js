document.getElementById("registerForm").addEventListener("click", function (){
    window.location = "registration.html" } )

let email = document.getElementById("email")
let password = document.getElementById("password")

document.getElementById("login").addEventListener("click", function () {
    if (email.value === localStorage.getItem("email") && window.btoa(password.value) === localStorage.getItem("password")) {
        console.log("OK")
    } else {
        console.log("ERROR")
    }
})






