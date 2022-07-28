/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

//to keep updated with scores

const Total_scores = { Computer_Score: 0, Player_Score: 0 };

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  //choices for the computer
  const rpsChoice = ["Rock", "Paper", "Scissors"];

  //random choice
  const random_Number = Math.floor(Math.random() * rpsChoice.length);

  //returning random computer choice
  return rpsChoice[random_Number];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost

  let score;

  // All situations where human draws, set `score` to 0
  if (playerChoice == computerChoice) {
    score = 0;
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "paper") {
    score = 1;
  }

  // Otherwise human loses (aka set score to -1)
  else {
    score = -1;
  }

  // return score

  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  const result_div = document.getElementById("result");

  const hands_div = document.getElementById("hands");

  const player_score_div = document.getElementById("player-score");

  const computer_score_div = document.getElementById("computer-score");

  if (score == -1) {
    result_div.innerText = "You Lose!";
  } else if (score == 0) {
    result_div.innerText = "Its a TIE";
  } else {
    result_div.innerText = "You Won!";
  }

  hands_div.innerText = `You: ${playerChoice} vs ${computerChoice}`;

  player_score_div.innerText = `You: ${Total_scores["Player_Score"]}`;

  computer_score_div.innerText = `Computer: ${Total_scores["Computer_Score"]}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  console.log({ playerChoice });

  const computerChoice = getComputerChoice();

  console.log({ computerChoice });

  const score = getResult(playerChoice, computerChoice);

  // Total_scores['Player_Score'] += score

  if (score == 1) {
    Total_scores["Player_Score"]++;
  } else if (score == -1) {
    Total_scores["Computer_Score"]++;
  }

  console.log({ score });

  console.log({ Total_scores });

  showResult(score, playerChoice, computerChoice);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  const rpsButtons = document.querySelectorAll(".rpsButton");

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // rpsButtons[0].onclick =() => console.log(rpsButtons[0].value)

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  // Add a click listener to the end game button that runs the endGame() function on click

  const End_Game_Btn = document.getElementById("endGameButton");

  End_Game_Btn.onclick = () => endGame(Total_scores);
}

// ** endGame function clears all the text on the DOM **
function endGame(Total_scores) {
  Total_scores["Computer_Score"] = 0;
  Total_scores["Player_Score"] = 0;

  const result_div = document.getElementById("result");

  const hands_div = document.getElementById("hands");

  const player_score_div = document.getElementById("player-score");

  const computer_score_div = document.getElementById("computer-score");

  result_div.innerText = "";
  hands_div.innerText = "";
  player_score_div.innerText = "";
  computer_score_div.innerText = "";
}

playGame();
