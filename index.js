function computerPlay() {
  const gameChoice = ["Rock", "Paper", "Scissors"];
  const RandomNumber = Math.floor(Math.random() * gameChoice.length);
  return gameChoice[RandomNumber];
}

console.log(computerPlay());
