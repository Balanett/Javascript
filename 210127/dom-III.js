// 1. feladat:

document.getElementById("btn").addEventListener('click', event => {
    console.log(document.getElementById("name").value)
})


// 2-3. feladat:

const formElement = document.getElementById("form-1")
const formFeedback = document.getElementById("form-feedback")
formElement.addEventListener("submit", event => {

    const text = document.getElementById("message").value
    const checkbox = document.getElementById("terms").checked

    event.preventDefault()

    if (text.length < 6 || text > 10) {
        console.error("Message: a karaktermennyiség nem megfelelő.\n")
        formFeedback.innerText += "Message: a karaktermennyiség nem megfelelő.\n"
    } else {
        console.log("text: "+text+", checkbox: "+checkbox+"\n")
        formFeedback.innerText += "text: "+text+", checkbox: "+checkbox+"\n"
    }
})