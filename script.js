'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
let scoreEl0 = document.getElementById('current--0');
let scoreEl1= document.getElementById('current--1');
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');

let scores, scoreAd, activePlayer, playing;
const initial = function(){

     scores =[0,0];
     scoreAd = 0;
     activePlayer = 0;
     playing = true;
    
    diceEl.classList.add('hidden');
    score0.textContent =0;
    score1.textContent =0 ;
    scoreEl0.textContent =0; 
    scoreEl1.textContent =0;
    playerEl0.classList.remove('player--winner');
    playerEl1.classList.remove('player--winner');
    playerEl0.classList.add('player--active');
    playerEl1.classList.remove('player--active');
}
initial();

const switchPlayer = function(){
    activePlayer = activePlayer === 0 ? 1 : 0;
    scoreAd =0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
playerEl1.classList.toggle('player--active');
playerEl0.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function(){
    if( playing) {       
 let dice = Math.trunc(Math.random() *6 +1);
 console.log(dice);
diceEl.classList.remove('hidden'); 
diceEl.src = `dice-${dice}.png`;
     if(dice !== 1){
     scoreAd += dice;
     document.getElementById(`current--${activePlayer}`).textContent = scoreAd;
} else{
    switchPlayer();
}} 
});

btnHold.addEventListener('click', function(){
    if(playing){
    scores[activePlayer] +=scoreAd;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    if(scores[activePlayer] >= 50){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        playing = false
        // document.querySelector(`.name--${activePlayer}`).textContent = `player${activePlayer} won!`;
diceEl.classList.add('hidden');

    }
    else{ 

        switchPlayer();
    }
    }

});

btnNew.addEventListener('click', initial);
