'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// var
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
// targets the class 'check' and will start when it is clicked
document.querySelector('.check').addEventListener('click', function () {
  //logs the value that it input to 'guess' after it is clicked
  //    Number converts the string of the input into a number value
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // scenarios from guessing
  if (!guess) {
    //document.querySelector('.message').textContent = 'No number!';

    displayMessage('No Number!');

    // player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // player guess is wrong in general
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'You guessed too high!' : 'You guessed too low!'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

//reset
document.querySelector('.again').addEventListener('click', function () {
  // step 1
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // step 2
  displayMessage('Guess again!?');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').textContent = '';

  // step 3
  document.querySelector('body').style.backgroundColor = '#000';
  document.querySelector('.number').style.width = '15rem';
});

/*  OLD VERSION
      // player guesses too high
    else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'You guessed too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // player guesses too low and loses
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    */
