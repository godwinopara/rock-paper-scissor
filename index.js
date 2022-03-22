(function rockPaperScissors() {
  const gameResult = document.getElementById("game-result");
  let score = document.querySelector(".score");
  const restart = document.querySelector("input");
  let player = 0;
  let computer = 0;
  let result = "";
  let gameplayed = 0;

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

    // increment the game played for every single round
    gameplayed++;

    if (gameplayed === 6) {
      gameOver();
      winnerAfter5rounds(player, computer);
    }

    // update the dom with the result of the game
    displayResultInDom(winner, result);

    return [winner, result];
  }

  function winnerAfter5rounds(player, computer) {
    if (player > computer) {
      result = "Congratulation You Won This Round";
    } else if (player < computer) {
      result = "Sorry You Lost This Round To Computer";
    } else {
      result = "It's a draw";
    }
  }

  function displayResultInDom(winner, result) {
    // display winning message on dom
    gameResult.textContent = result;

    // updates the score on the dom
    switch (winner) {
      case "player":
        player += 1;
        score.textContent = `Score: Player:${player} Computer:${computer}`;
        break;
      case "computer":
        computer += 1;
        score.textContent = `Score: Player:${player} Computer:${computer}`;
        break;
    }
  }

  function gameOver() {
    let gameChoiceBtns = document.querySelectorAll("button");

    // disable the button when the game is over
    gameChoiceBtns.forEach((btn) => {
      btn.disabled = true;
    });

    // display the restart button
    restart.style.display = "block";

    // An eventlistener that restart the game when the restart button is clicked
    restart.addEventListener("click", () => {
      restartGame();
    });
  }

  function restartGame() {
    //hide the restart button
    restart.style.display = "none";

    player = 0;
    computer = 0;
    gameplayed = 0;
    result = "";
    gameResult.textContent = result;

    // update the score back to player: 0, computer 0
    score.textContent = `Score: Player:${player} Computer:${computer}`;

    // Enable the button to be click able again
    let gameChoiceBtns = document.querySelectorAll("button");
    gameChoiceBtns.forEach((btn) => {
      btn.disabled = false;
    });
  }

  function game() {
    let gameChoiceBtns = document.querySelectorAll("button");

    gameChoiceBtns.forEach((gameChoiceBtn) => {
      gameChoiceBtn.addEventListener("click", () => {
        decideWinner(gameChoiceBtn.textContent.toLowerCase(), computerPlay());
      });
    });
  }

  // run the game
  game();
})();
