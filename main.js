// I want to create an app
// which picks a random domino for the user

// I want my JavaScript to be able to PICK 
// any DOMINO element, how?

// anything sort of array-like into an array,
// use Array.from() to convert it into an array.
// NodeList -> Array.from() -> Array

function getRandomNumber (min, max) { // min and max included 
    // SOURCE: https://stackoverflow.com/a/7228322/1034856
    // LICENSE: https://creativecommons.org/licenses/by-sa/4.0/
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let dominoList = document.querySelectorAll(".domino-list > li")
console.log(dominoList)

let firstIndex = 0
let lastIndex = dominoList.length - 1
let randomIndex = getRandomNumber(firstIndex, lastIndex) // I want a random number between firstIndex and lastIndex
let randomDominoElement = dominoList[randomIndex]
console.log(randomDominoElement)

randomDominoElement.classList.add("selected")
// randomDominoElement.classList.add("hidden")
// randomDominoElement.classList.remove("hidden")
// randomDominoElement.classList.toggle("hidden")
// randomDominoElement.classList.replace("hidden", "visible")

