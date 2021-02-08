function getAnswersOfUser (array) {
    var answers = document.getElementsByClassName("answ")
    for (let i=0; i<answers.length; i++) {
        answers[i].addEventListener('click', function (event) {
            document.getElementById("warning").innerText = ""
            let answer = (answers[i].value)
            console.log(answer, i)
            let numberOfquestion = Math.round((i+1)/2)
            array[numberOfquestion-1]=answer
            console.log(array)
        })
    } return array
}

let answersArray = [0,0,0,0]
let answersOfUsers = getAnswersOfUser(answersArray)


document.getElementById("submit").addEventListener("click", function (){
    event.preventDefault();
    console.log(answersOfUsers)
    let counter = 0
    let semafor = true
    for (let i=0; i<answersOfUsers.length; i++) {
        if (answersOfUsers[i] === "B") {
            counter = counter+1
        } else if (answersOfUsers[i] === 0) {
            document.getElementById("warning").innerText = "Tölts ki minden kérdést!"
            semafor = false
            break
        }
    }

    if (semafor) {
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

    } result.scrollIntoView()
})

