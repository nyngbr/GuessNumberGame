'use strict';

//variables definition
let secretNumber = Math.trunc(Math.random() * 20) + 1; //trunc function to remove decimal part and +1 to include 20 so zero to 20 otherwise it would stop at 19
let score = 20;
let highscore = 0;



document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value); //storing the entered value in a variable
    console.log(guess, typeof guess);

    if (!guess) { //first scenario : no input
        document.querySelector('.message').textContent = '⛔No number';
    }
    else if (guess === secretNumber) { //second scenario : win
        document.querySelector('.message').textContent = '🎉 Well done mate 🎉';
        document.querySelector('.number').textContent = secretNumber;
        //css styling when player wins
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //implementing highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
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

document.querySelector('.again').addEventListener('click', function () {
    //restoring initial values for a new game
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
