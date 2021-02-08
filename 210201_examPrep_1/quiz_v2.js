const form = document.querySelector("form")
const submit = document.getElementById("submit");
let result = document.getElementById("result")
let warning = document.getElementById("warning")


submit.addEventListener("click", event => {
    event.preventDefault();
    if (form.q1.value === "" || form.q2.value === "" || form.q3.value === "" || form.q4.value === "") {
        warning.innerText = "Tölts ki minden mezőt!"
    } else {
        warning.innerText = ""
        let counter = 0
        if (form.q1.value === "B") {
            counter +=1
        } if (form.q2.value === "B") {
            counter +=1
        } if (form.q3.value === "B") {
            counter +=1
        } if (form.q4.value === "B") {
            counter +=1
        }

        if (counter === 4) {
            result.innerText = "100%...Légy áldott Joda Mester!"
        } else if (counter === 3) {
            result.innerText = "75%...Légy üdvözölve a Jedik között"
        } else if (counter === 2) {
            result.innerText = "50%...Ne búsulj ifjú Padavan! Az erő veled van!"
        } else if (counter === 1) {
            result.innerText = "25%...Elszántságod csodálatra méltó. Keresd tovább a benned rejlő erőt!"
        } else {
            result.innerText = "0%...szégyen. Menj inkább portásnak!"
        }
    }
    result.scrollIntoView()
})





