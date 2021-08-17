{

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
    let dominoCharacters = "🁣 🁤 🁥 🁦 🁧 🁨 🁩 🁪 🁫 🁬 🁭 🁮 🁯 🁰 🁱 🁲 🁳 🁴 🁵 🁶 🁷 🁸 🁹 🁺 🁻 🁼 🁽 🁾 🁿 🂀 🂁 🂂 🂃 🂄 🂅 🂆 🂇 🂈 🂉 🂊 🂋 🂌 🂍 🂎 🂏 🂐 🂑 🂒 🂓".replaceAll(" ", "")
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
        dominoElement.classList.add("domino")             // <div class="domino">🁶</div>

        let mainElement = document.querySelector("main")  // <main></main>
        mainElement.append(dominoElement)                 // <main><div class="domino selected">🁶</div></main>

        if (currentDominoCharacter === randomDominoCharacter) {
            dominoElement.classList.add("selected")
        }
    }

    // How animation works: https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.wikia.nocookie.net%2F__cb20131211182757%2Fanimations%2Fimages%2F6%2F64%2FCheshire-Cat-Mini-Flip-Book.gif&f=1&nofb=1
    // asynchronous programming? We'll learn more about this toward the end of the course!

    // <div class="domino">🁶</div>
    let firstDominoElement = document.querySelector(".domino")
    console.log(firstDominoElement)

    function showDominoValue (event) {
        if (event.target.textContent.includes("🁬")) {
            console.log("You picked the 1/2 domino! It has a value of 3.")
        }
    }

    document.addEventListener("click", showDominoValue) // callback function
    // asynchronous programming
    // not-synchronous

    // synchronous? "same-time"
    // at the same time
    // "in step" with one another

    let geeseImage = document.querySelector("#geese")


    function onKeypress (event) {
        let currentStyles = getComputedStyle(geeseImage)
        let distanceFromLeft = parseInt(currentStyles.left)
        let distanceFromTop = parseInt(currentStyles.top)
        
        if (event.key === "ArrowRight") {
            let newDistance = distanceFromLeft + 50
            geeseImage.style.left = newDistance + "px"
        } else if (event.key === "ArrowLeft") {
            let newDistance = distanceFromLeft - 50
            geeseImage.style.left = newDistance + "px"
        } else if (event.key === "ArrowDown") {
            let newDistance = distanceFromTop + 50
            geeseImage.style.top = newDistance + "px"
        } else if (event.key === "ArrowUp") {
            let newDistance = distanceFromTop - 50
            geeseImage.style.top = newDistance + "px"
        }
    }

    document.addEventListener("keydown", onKeypress) // callback


    let form = document.querySelector("#register")
    console.log(form)

    function onSubmit (event) {
        event.preventDefault()
        console.log(event)

        let form = event.target
        let usernameField = form.querySelector(".username")
        let emailField = form.querySelector(".email")
        let birthdateField = form[2]

        let username = usernameField.value
        let email = emailField.value
                        // falsy? 0, undefined, false, null, NaN, ""
        let birthdate = birthdateField.value || "1900-01-01"
        console.log(username)
        console.log(email)
        console.log(birthdate)
    }

    form.addEventListener("submit", onSubmit)

}