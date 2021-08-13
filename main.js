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

// Unicode website: http://xahlee.info/comp/unicode_games_cards.html
// Dominoes: "🁣 🁤 🁥 🁦 🁧 🁨 🁩 🁪 🁫 🁬 🁭 🁮 🁯 🁰 🁱 🁲 🁳 🁴 🁵 🁶 🁷 🁸 🁹 🁺 🁻 🁼 🁽 🁾 🁿 🂀 🂁 🂂 🂃 🂄 🂅 🂆 🂇 🂈 🂉 🂊 🂋 🂌 🂍 🂎 🂏 🂐 🂑 🂒 🂓"
// Playing Cards: "🂿 🃟 🂱 🂲 🂳 🂴 🂵 🂶 🂷 🂸 🂹 🂺 🂻 🂽 🂾 🂡 🂢 🂣 🂤 🂥 🂦 🂧 🂨 🂩 🂪 🂫 🂭 🂮 🃁 🃂 🃃 🃄 🃅 🃆 🃇 🃈 🃉 🃊 🃋 🃍 🃎 🃑 🃒 🃓 🃔 🃕 🃖 🃗 🃘 🃙 🃚 🃛 🃝 🃞"
// Chess: "♚ ♛ ♜ ♝ ♞ ♟ ♔ ♕ ♖ ♗ ♘ ♙"
// Dice: "⚀ ⚁ ⚂ ⚃ ⚄ ⚅"
// Mahjong: "🀇 🀈 🀉 🀊 🀋 🀌 🀍 🀎 🀏 🀐 🀑 🀒 🀓 🀔 🀕 🀖 🀗 🀘 🀙 🀚 🀛 🀜 🀝 🀞 🀟 🀠 🀡 🀀 🀁 🀂 🀃 🀢 🀣 🀤 🀥 🀦 🀧 🀨 🀩 🀄 🀅 🀆 🀪 🀫"
// Clocks: "🕐 🕑 🕒 🕓 🕔 🕕 🕖 🕗 🕘 🕙 🕚 🕛 🕜 🕝 🕞 🕟 🕠 🕡 🕢 🕣 🕤 🕥 🕦 🕧"
// Flowers: "💮 🌸 🌷 🌹 🌺 🌻 🌼 🥀 🌱 🌽 🌾 🌰 🌿 🍀 🍁 🍂 🍃 🌵 🌴 🎋 🌲 🌳"
// Weather: "🌣 ☁ 🌤 🌧 🌨 🌩 🌪"
// Misc. Shapes: "◖ ◗ ⯊ ⯋ ◐ ◑ ◓ ◒ ◜ ◝ ◞ ◟ ◠ ◡ ◧ ◨ ◩ ◪ 🞔 🞕 🞖 ◸ ◹ ◺ ◿ ◤ ◥ ◣ ◢ ⛋ 🞛 🞚 🞜 ⬖ ⬗ ⬘ ⬙"
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

// How animation works: https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.wikia.nocookie.net%2F__cb20131211182757%2Fanimations%2Fimages%2F6%2F64%2FCheshire-Cat-Mini-Flip-Book.gif&f=1&nofb=1
// asynchronous programming? We'll learn more about this toward the end of the course!
