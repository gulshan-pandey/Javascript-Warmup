let randomNumber =parseInt(Math.random()*100 + 1)

const submit =document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')
let p = document.createElement('p')

let playGame= true;

let prevGuess =[];
let numGuess = 1;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        checkGuess(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}






function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you got it right in ${numGuess} guesses`)
        endGame()
    }else{
        if(guess < randomNumber){
            displayMessage("your number is too low")
        }else{
            displayMessage("your number is too high")
        }
    }
}

function displayGuess(guess){
   userInput.value =""
   guessSlot.innerHTML+=`${guess} ,   `
   numGuess++
   remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2> ${message}</h2>`
}


function endGame(){

    userInput.value=" "
    userInput.disabled = true
    p.classList.add('button')
    p.innerHTML = `<button class="newGameBtn">Start new game</button>`
    startOver.appendChild(p)
    playGame=false;
    newGame()
    
}



function newGame(){
    const newGameBtn = document.querySelector('.newGameBtn')
    newGameBtn.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100 + 1)    // resetting everything
        lowOrHi.innerHTML = ""; // Clearing the contents of lowOrHi
        prevGuess = [];
        numGuess=1;
        guessSlot.innerHTML ="";
        remaining.innerHTML = `${11-numGuess}`;
        userInput.disabled = false;
        startOver.removeChild(p);
        playGame=true;
    });
}
