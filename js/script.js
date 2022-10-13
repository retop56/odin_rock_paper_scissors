function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function capitalCaseSelection(selection) {
  return selection[0].toUpperCase() + selection.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  const winValue = 0;
  const loseValue = 1;
  const tieValue = 2;

  function win() {
    updateRoundResultString(winValue, playerSelection, computerSelection);
    updateScore(winValue);
  }

  function lose() {
    updateRoundResultString(loseValue, playerSelection, computerSelection);
    updateScore(loseValue);
  }

  if (playerSelection.toLowerCase() === computerSelection) {
    updateRoundResultString(tieValue, playerSelection, computerSelection);
    updateScore(tieValue);
    return;
  }

  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      lose();
      return;
    } else {
      win();
      return;
    }
  }

  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "scissors") {
      lose();
      return;
    } else {
      win();
      return;
    }
  }

  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      lose();
      return;
    } else {
      win();
      return;
    }
  }
}

function checkFiveRoundsCompleted() {
  // const sum = score.reduce((partialSum, a) => partialSum + a, 0);
  return score[0] === 5 || score[1] === 5;
}

function hideSelectionButtons() {
  rockButton.style.display = "none";
  paperButton.style.display = "none";
  scissorsButton.style.display = "none";
}

function whoWonGame() {
  return score[0] === 5;
}

function setWinnerString() {
  if (whoWonGame()) {
    winnerString.textContent =
      'Congratulations! You won! Press the "New Game" button to play again!';
  } else {
    winnerString.textContent =
      'Sorry, but you lost! Press the "New Game" button to play again!';
  }
  winnerString.style.display = "block";
}

function announceWinner() {
  hideSelectionButtons();
  hideRoundResultString();
  setWinnerString();
}

function updateScore(resultValue) {
  score[resultValue] += 1;
  rewriteScoreString();
  if (checkFiveRoundsCompleted()) {
    announceWinner();
  }
}

function rewriteScoreString() {
  scoreString.textContent = `The score is:\n${score[0]} wins\n${score[1]} losses\n${score[2]} ties`;
}

function resetScore() {
  for (let i = 0; i < score.length; i++) {
    score[i] = 0;
  }
  rewriteScoreString();
}

function showSelectionButtons() {
  rockButton.style.display = "inline-block";
  paperButton.style.display = "inline-block";
  scissorsButton.style.display = "inline-block";
}

function resetRoundResultString() {
  roundResultString.textContent = "";
}

function showRoundResultString() {
  roundResultString.style.display = "block";
}

function hideWinnerString() {
  winnerString.style.display = "none";
}

function hideRoundResultString() {
  roundResultString.style.display = "none";
}

function updateRoundResultString(
  roundResult,
  playerSelection,
  computerSelection
) {
  if (roundResult === 0) {
    roundResultString.textContent = `You win! ${capitalCaseSelection(
      playerSelection
    )} beats ${capitalCaseSelection(computerSelection)}`;
  } else if (roundResult === 1) {
    roundResultString.textContent = `You lose! ${capitalCaseSelection(
      computerSelection
    )} beats ${capitalCaseSelection(playerSelection)}`;
  } else {
    roundResultString.textContent = `It's a tie! Both players chose ${capitalCaseSelection(
      playerSelection
    )}`;
  }
}

function startNewGame() {
  resetScore();
  showSelectionButtons();
  resetRoundResultString();
  showRoundResultString();
  hideWinnerString();
}

const score = [0, 0, 0];

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
document.body.append(rockButton);
rockButton.addEventListener("click", (e) =>
  playRound("rock", getComputerChoice())
);

const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
document.body.append(paperButton);
paperButton.addEventListener("click", (e) =>
  playRound("paper", getComputerChoice())
);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
document.body.append(scissorsButton);
scissorsButton.addEventListener("click", (e) =>
  playRound("scissors", getComputerChoice())
);

const resultsDiv = document.createElement("div");
document.body.append(resultsDiv);

const scoreString = document.createElement("h1");
scoreString.textContent = `The score is:\n${score[0]} wins\n${score[1]} losses\n${score[2]} ties`;
resultsDiv.append(scoreString);

const roundResultString = document.createElement("p");
resultsDiv.append(roundResultString);

const winnerString = document.createElement("h1");
resultsDiv.append(winnerString);
winnerString.style.display = "none";

const newGameButton = document.createElement("button");
newGameButton.textContent = "New Game";
document.body.append(newGameButton);
newGameButton.addEventListener("click", (e) => startNewGame());
