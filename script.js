'use strict'; 
// selecting element
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');



// starting condition

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
const score = [0, 0];
let currentScore = 0;
let activePlayer = 0

btnRoll.addEventListener('click', function () {
    // generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // display dice 
    
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    // check if dice roll is 1 
    if (dice !== 1) {
        //add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        //switch to the next player
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    }

});


btnHold.addEventListener('click', function () {
    //add current score to score of the active player

    //check if >= 100

    // if not switch player
});