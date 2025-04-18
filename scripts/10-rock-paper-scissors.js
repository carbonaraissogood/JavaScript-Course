let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

// if (!score) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0
//   };
// }

//console.log(JSON.parse(localStorage.getItem('score')));

//localStorage.clear();

function playGame(playerMove) {
  const computerMove = computerMoveFunction();

  result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
    result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else{
      result = 'Tie.';
    }
  } 
  
  else if(playerMove === 'paper') {
    if (computerMove === 'rock') {
    result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else{
      result = 'You lose.';
    }
  } 
  
  else {
    if (computerMove === 'rock') {
    result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else{
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateResultElement();
  updateMovesElement(playerMove,computerMove);
  updateScoreElement();
}

function computerMoveFunction() {
  const randomNumber = Math.random();
  
  let computerMove = '';

  if (randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}

function updateScoreElement() {
  document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function updateResultElement() {
  document.querySelector('.js-result').innerHTML = result;
}

function updateMovesElement(playerMove, computerMove) {
  document.querySelector('.js-moves').innerHTML = `You
<img src=images/${playerMove}-emoji.png
class="move-icon">
<img src=images/${computerMove}-emoji.png
class="result-icon">
Computer`
}