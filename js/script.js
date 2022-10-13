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

function updateScore(resultValue) {
  score[resultValue] += 1;
  console.log(
    `The score is now:\nWins: ${score[0]}\nLosses: ${score[1]}\nTies: ${score[2]}`
  );
}

function game() {
  const score = [0, 0, 0];
}

game();

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
