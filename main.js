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

let dominoCharacters = "a b c d e f g".replaceAll(" ", "")
let dominoList = Array.from(dominoCharacters)
console.log(dominoList)

let firstIndex = 0
let lastIndex = dominoList.length - 1
let randomIndex = getRandomNumber(firstIndex, lastIndex) // I want a random number between firstIndex and lastIndex
let randomDominoCharacter = dominoList[randomIndex]
console.log(randomDominoCharacter)

for (let index = 0; index < dominoList.length; index += 1) {
    let currentDominoCharacter = dominoList[index]

    let dominoElement = document.createElement("div") // <div></div>
    dominoElement.append(currentDominoCharacter)      // <div>🁶</div>
    dominoElement.classList.add("domino")             // <div class="domino selected">🁶</div>

    let mainElement = document.querySelector("main")  // <main></main>
    mainElement.append(dominoElement)                 // <main><div class="domino selected">🁶</div></main>

    if (currentDominoCharacter === randomDominoCharacter) {
        dominoElement.classList.add("selected")
    }
}

// asynchronous programming
