// 1. Property-k kilistázása

function listProperties(healthyFoods) {
    return Object.keys(healthyFoods);
}

let fruits = {
    alma: "1",
    korte: "2",
    salata: "3",
    paradicsom: "4",
    }
console.log(listProperties(fruits))



// 2. Értékek listázása

function listOfHouses(housesOfWesteros) {
    return Object.values(housesOfWesteros)
}

let houses = {
    Lannister: "oroszlán",
    Stark: "farkas",
    Targaryen: "sárkány",
    Baratheon: "szarvas"
}
console.log(listOfHouses(houses))


// 3. Object hossza

function lenght(abc) {
    let keys = Object.keys(abc)
    return keys.length
}

let obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log(lenght(obj))


// 4. Property értékének kiíratása

function reading(books) {
    for (let i=0; i<books.length; i++) {
        console.log( books[i].title + " : " + books[i].readingStatus )
    }
}

let library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

reading(library)

