const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  const winValue = 0;
  const loseValue = 1;
  const tieValue = 2;

  function win() {
    console.log(
      `You win! ${capitalCaseSelection(
        playerSelection
      )} beats ${capitalCaseSelection(computerSelection)}`
    );
  }

  function lose() {
    console.log(
      `You lose! ${capitalCaseSelection(
        computerSelection
      )} beats ${capitalCaseSelection(playerSelection)}`
    );
  }

  function capitalCaseSelection(selection) {
    return selection[0].toUpperCase() + selection.slice(1).toLowerCase();
  }

  if (playerSelection.toLowerCase() === computerSelection) {
    console.log(
      `It's a tie! Both players chose ${capitalCaseSelection(playerSelection)}`
    );
    return tieValue;
  }

  if (playerSelection.toLowerCase() === "rock") {
    if (computerSelection === "paper") {
      lose();
      return loseValue;
    } else {
      win();
      return winValue;
    }
  }

  if (playerSelection.toLowerCase() === "paper") {
    if (computerSelection === "scissors") {
      lose();
      return loseValue;
    } else {
      win();
      return winValue;
    }
  }

  if (playerSelection.toLowerCase() === "scissors") {
    if (computerSelection === "rock") {
      lose();
      return loseValue;
    } else {
      win();
      return winValue;
    }
  }
}

function game() {
  const score = [0, 0, 0];

  function updateScore(resultValue) {
    score[resultValue] += 1;
    console.log(
      `The score is now:\nWins: ${score[0]}\nLosses: ${score[1]}\nTies: ${score[2]}`
    );
  }
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = "rock";
    updateScore(playRound(playerSelection, computerSelection));
  }
}

game();
