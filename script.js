/* I want you to create a simple guess the number type game. It should choose a
random number between 1 and 100, then challenge the player to guess the number
in 10 turns. After each turn the player should be told if they are right or
wrong — and, if they are wrong, whether the guess was too low or too high. It
should also tell the player what numbers they previously guessed. The game will
end once the player guesses correctly, or once they run out of turns. When the
game ends, the player should be given an option to start playing again. */

let random = Math.floor(Math.random() * 10) + 1;

const userInput = document.querySelector('#field');
const submitButton = document.querySelector('.button');

const previousGuess = document.querySelector('.previousGuess');
const previousResult = document.querySelector('.previousResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

let guessCount = 1;

function checkGuess() {
    let userGuess = userInput.value;
    if (guessCount === 1) {
        previousGuess.textContent = 'previous guesses: ';
    }
    previousGuess.textContent += `${userGuess} `

    if (userGuess === random) {
        previousResult.textContent = 'Congratulations!';
        previousResult.style.backgroundColor = 'green';
        lowOrHigh.style.display = 'none';
    } else if (userGuess < random) {
        previousResult.textContent = 'wrong!';
        previousResult.style.backgroundColor = 'red';
        lowOrHigh.textContent = 'too low!';
        
        guessCount++;
    } else if (userGuess > random) {
        previousResult.textContent = 'wrong!';
        previousResult.style.backgroundColor = 'red';
        lowOrHigh.textContent = 'too high!';
        console.log('yes')

        guessCount++;
    } else if (guessCount === 10) {
        previousResult.textContent = 'out of tries';
        previousResult.style.backgroundColor = 'red';
        lowOrHigh.style.display = 'none';

        guessCount = 1;
    }
}

function getData(e) {
    e.preventDefault();
}

submitButton.addEventListener('click', checkGuess);
submitButton.addEventListener('click', getData);