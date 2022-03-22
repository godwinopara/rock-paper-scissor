const gameResult = document.getElementById("game-result");

// This function return a random choice between ROCK, PAPER OR SCISSORS for the computer
function computerPlay() {
  const gameChoice = ["rock", "paper", "scissors"];
  const RandomNumber = Math.floor(Math.random() * gameChoice.length);
  return gameChoice[RandomNumber];
}

// This function decide if what the player choosed is the winner or what the computer choosed
function decideWinner(playerChoice, computerChoice) {
  const rock = "Rock Crushes Scissors";
  const paper = "Paper Cover Rock";
  const scissors = "Scissors Cuts Paper";

  let winner = "";
  let result = "";

  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      winner = "player";
      result = `You Win! ${rock}`;
    } else if (computerChoice === "paper") {
      winner = "computer";
      result = `You Lose! ${paper}`;
    } else {
      winner = "";
      result = "Draw";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      winner = "player";
      result = `You Win! ${paper}`;
    } else if (computerChoice === "scissors") {
      winner = "computer";
      result = `You Lose! ${scissors}`;
    } else {
      winner = "";
      result = "Draw";
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      winner = "computer";
      result = `You Lose! ${rock}`;
    } else if (computerChoice === "paper") {
      winner = "player";
      result = `You Win! ${scissors}`;
    } else {
      winner = "";
      result = "Draw";
    }
  }

  // update the dom with the winner of the game
  gameResult.textContent = result;
  return [winner, result];
}

function game() {
  let gameChoiceBtns = document.querySelectorAll("button");
  gameChoiceBtns.forEach((gameChoiceBtn) => {
    gameChoiceBtn.addEventListener("click", () => {
      console.log(decideWinner(gameChoiceBtn.textContent.toLowerCase(), computerPlay()));
    });
  });
}

game();
