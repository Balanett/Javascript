/*

// To Do:

class ToDo{
    name;
    priority;
    dueDate;
    isDone;

    constructor(name, priority, dueDate, isDone) {
        this.name = name
        this.priority = priority
        this.dueDate = dueDate
        this.isDone = isDone
    }
    logDetails () {
        console.log("name: ${this.name}, priority: ${this.priority}, dueDate: ${this.dueDate}, isDone: ${this.isDone}")}
}


let task1 = new ToDo("make a coffee","low","2021-02-08",true)
console.log(task1)



 */


// The Cat:

class Cat{
    tiredness = 5;
    hunger = 5;
    loneliness = 5;
    happiness = 5;

    sleep () {
        this.tiredness = 1
        this.hunger = this.hunger + 2
        this.happiness = this.happiness + 2
        this.loneliness = this.loneliness + 2
        console.log("After sleep: \ntiredness:", this.tiredness, "hunger:", this.hunger, "loneliness:", this.loneliness, "happiness:", this.happiness)
    }

    feed () {
        this.tiredness = this.tiredness + 2
        this.hunger = this.hunger - 3
        this.happiness = this.happiness + 2
        this.loneliness = this.loneliness + 2
        console.log("After feed: \ntiredness:", this.tiredness, "hunger:", this.hunger, "loneliness:", this.loneliness, "happiness:", this.happiness)
    }

    pet () {
        this.loneliness = 1
        this.happiness = this.happiness + 3
        this.tiredness = this.tiredness + 3
        console.log("After feed: \ntiredness:", this.tiredness, "hunger:", this.hunger, "loneliness:", this.loneliness, "happiness:", this.happiness)
    }


    status() {
        if (10 < this.hunger) {
            console.log("Kuglof is very hungry! Please give food him!")
        } if (10 < this.tiredness) {
            console.log("Kuglof needs to sleep!")
        } if (10 < this.loneliness) {
            console.log("Kuglof is so lonely! Please pet him!")
        } if (10 < this.happiness) {
            console.log("Oh Kuglof is very happy! You are a great owner! ;)")
        }
    }
}

function getDoing () {
    let doing = window.prompt("What would like to give Kuglof? (sleep / feed / pet / status / leave)")
    if (doing === "sleep") {
        Kuglof.sleep()
        Kuglof.status()
        getDoing()
    } else if (doing === "feed") {
        Kuglof.feed()
        Kuglof.status()
        getDoing()
    } else if (doing === "pet") {
        Kuglof.pet()
        Kuglof.status()
        getDoing()
    } else if (doing === "leave") {
        console.log("Where are you going my dear owner?")
    }
}

let Kuglof = new Cat()
getDoing()


