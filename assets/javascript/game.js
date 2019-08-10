var goalNumber= [];
var losses = 0;
var wins = 0;
var crystalNumber = [];

function startGame(){
    goalNumber = Math.floor(Math.random() * 99);
    console.log(goalNumber);
}


/* Suedo coding
- 4 crystals
- every crystal has a random number between 1 - 12
- a new radom number given to each crystal whether win or lose
- clicking a crystal should add to previous click until total score
- if less then goal number then continue.
- if equal to goal number, increment win
- if greater than goal number, increment loss 
*/

