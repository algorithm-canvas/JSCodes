let randomNum = parseInt(Math.random()*100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')     
const lowOrHi = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', (event) => {
    event.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter valid number')
    } else if(guess < 1){
        alert('Please enter valid number')
    } else if(guess > 100){
        alert('Please enter valid number')
    } else {
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}



function checkGuess(guess){
    if (guess === randomNum) {
        displayMessage(`You guessed it right`)
        endGame()
    } else if (guess < randomNum){
        displayMessage(`Number is too low`)
    } else if (guess > randomNum){
        displayMessage(`Number is too high`)
    }
}



function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}     `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}



function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
    startover.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(event){
        randomNum = parseInt(Math.random()*100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startover.removeChild(p)
        playGame = true
    })
}



