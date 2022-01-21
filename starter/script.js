'use strict';

//variables definition
let secretNumber = Math.trunc(Math.random() * 20) + 1; //trunc function to remove decimal part and +1 to include 20 so zero to 20 otherwise it would stop at 19
let score = 20;
let highscore = 0;

//display function
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

//game logic
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number (document.querySelector('.guess').value); //input storage in variable
    console.log(guess, typeof guess);

    //no input scenario
    if (!guess) {
        displayMessage('⛔No number');
    }

    //win scenario
    else if (guess === secretNumber) {
        displayMessage('🎉 Well done mate 🎉');
        document.querySelector('.number').textContent = secretNumber;
        
        //css effects for win
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        //implementing highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    //guess is different to secretNumber
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high📈 mate': 'Too low📉 mate');
            score--;
            document.querySelector('.score').textContent = score;  
            
        }
        //loss scenario
        else {
            displayMessage('🗿 you lost');
            document.querySelector('.score').textContent = 0;
        }
    }
});

//starting a new game 
document.querySelector('.again').addEventListener('click', function () {
    //restoring values for a new game
    
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
