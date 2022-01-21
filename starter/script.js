'use strict';

//variables definition
const secretNumber = Math.trunc(Math.random() * 20) + 1; //trunc function to remove decimal part and +1 to include 20 so zero to 20 otherwise it would stop at 19
let score = 20;


document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value); //stroring the entered value in a variable
    console.log(guess, typeof guess);

    if (!guess) { //first scenario : no input
        document.querySelector('.message').textContent = '⛔No number';
    }
    else if (guess === secretNumber) { //second scenario
        document.querySelector('.message').textContent = '🎉 Well done mate 🎉';
    }
    else if (guess > secretNumber) { //third scenario 
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high📈 mate';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '🗿 you lost';
            document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secretNumber) { //fourth scenario
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low📉 mate';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = '🗿 you lost';
            document.querySelector('.score').textContent = 0;
        }
    }
});
