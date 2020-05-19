let scores, activePlayer, roundScore, gamePlaying, dice;
//GAME STARTS
init();
//NEW BUTTON
document.querySelector('.btn-new').addEventListener('click',init);

//ROLL BUTTON
document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying){
    //random dice
    dice = Math.floor(Math.random()* 6 + 1);
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = `./image/dice-${dice}.png`;
  }

  //update score
  if(dice !== 1) {
    roundScore = roundScore + dice ;
    document.querySelector(`#current-score-${activePlayer}`
    ).textContent = roundScore;
  } else {
    nextPlayer();
  }
});

//HOLD BUTTON
document.querySelector('.btn-hold').addEventListener('click',function() {
  if(gamePlaying) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
  }
  if(scores[activePlayer] >= 50) {
    document.querySelector(`#name-${activePlayer}`).textContent = "WINNER";
    document.querySelector('.dice').style.display = 'none';
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
  }
});

//FUNCTIONS
function init() {
  score = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';


  document.querySelector('#score-0').textContent = '0';
  document.querySelector('#score-1').textContent = '0';
  document.querySelector('#current-score-0').textContent = '0';
  document.querySelector('#current-score-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
  document.querySelector('.player-1-panel').classList.remove('active');
}
function nextPlayer() {
  if(activePlayer === 0) { 
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  roundScore = 0;

  document.querySelector('#current-score-0').textContent = 0;
  document.querySelector('#current-score-1').textContent = 0;

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';

}

