let HumanScore = 0;
let ComputerScore = 0;

function getComputerChoice() {
  let x = Math.floor(Math.random() * 100);
  let res;
  if (x >= 0 && x <= 32) {
    res = "rock";
  } else if (x >= 33 && x <= 65) {
    res = "paper";
  } else {
    res = "scissors";
  }
  return res;
}

const infodiv = document.querySelector(".info");
function updateGame(HumanChoice, choice, verdict, gameStatus) {
  const ComputerChoice = getComputerChoice();
  if (ComputerChoice == HumanChoice) {
    choice.textContent = `Your-Choice: ${HumanChoice}, Computer-Choice: ${ComputerChoice}`;
    verdict.textContent = `Verdict: Draw!`;
    gameStatus.textContent = `Current Game Status: Your-Score: ${HumanScore}, Computer-Score: ${ComputerScore}`;
  } else if (HumanChoice == "rock" && ComputerChoice == "paper") {
    choice.textContent = `Your-Choice: ${HumanChoice}, Computer-Choice: ${ComputerChoice}`;
    verdict.textContent = `Verdict: You Lose!\n`;
    ComputerScore++;
    gameStatus.textContent = `Current Game Status: Your-Score: ${HumanScore}, Computer-Score: ${ComputerScore}`;
  } else if (HumanChoice == "rock" && ComputerChoice == "scissors") {
    choice.textContent = `Your-Choice: ${HumanChoice}, Computer-Choice: ${ComputerChoice}`;
    verdict.textContent = `Verdict: You Win!\n`;
    HumanScore++;
    gameStatus.textContent = `Current Game Status: Your-Score: ${HumanScore}, Computer-Score: ${ComputerScore}`;
  } else if (HumanChoice == "scissors" && ComputerChoice == "rock") {
    choice.textContent = `Your-Choice: ${HumanChoice}, Computer-Choice: ${ComputerChoice}`;
    verdict.textContent = `Verdict: You Lose!\n`;
    ComputerScore++;
    gameStatus.textContent = `Current Game Status: Your-Score: ${HumanScore}, Computer-Score: ${ComputerScore}`;
  } else if (HumanChoice == "scissors" && ComputerChoice == "paper") {
    choice.textContent = `Your-Choice: ${HumanChoice}, Computer-Choice: ${ComputerChoice}`;
    verdict.textContent = `Verdict: You Win!\n`;
    HumanScore++;
    gameStatus.textContent = `Current Game Status: Your-Score: ${HumanScore}, Computer-Score: ${ComputerScore}`;
  } else if (HumanChoice == "paper" && ComputerChoice == "rock") {
    choice.textContent = `Your-Choice: ${HumanChoice}, Computer-Choice: ${ComputerChoice}`;
    verdict.textContent = `Verdict: You Win!\n`;
    HumanScore++;
    gameStatus.textContent = `Current Game Status: Your-Score: ${HumanScore}, Computer-Score: ${ComputerScore}`;
  } else if (HumanChoice == "paper" && ComputerChoice == "scissors") {
    choice.textContent = `Your-Choice: ${HumanChoice}, Computer-Choice: ${ComputerChoice}`;
    verdict.textContent = `Verdict: You Lose!\n`;
    ComputerScore++;
    gameStatus.textContent = `Current Game Status: Your-Score: ${HumanScore}, Computer-Score: ${ComputerScore}`;
  }
  if (HumanScore == 5) {
    let seriesStatus = document.createElement("div");
    seriesStatus.classList.add("seriesStatus");
    seriesStatus.textContent = "You Won the Series!";
    seriesStatus.style.textAlign = "center";
    infodiv.appendChild(seriesStatus);
  } else if (ComputerScore == 5) {
    let seriesStatus = document.createElement("div");
    seriesStatus.classList.add("seriesStatus");
    seriesStatus.textContent = "You Lost the Series!";
    seriesStatus.style.textAlign = "center";
    infodiv.appendChild(seriesStatus);
  }
}

const choice = document.querySelector(".choice");
const verdict = document.querySelector(".verdict");
const gameStaus = document.querySelector(".gameStatus");

choice.textContent = "Start Game!";
verdict.textContent = "Start Game to Show Result.";
gameStaus.textContent = `Current Game Status: Your-Score: ${HumanScore}, Computer-Score: ${ComputerScore}`;

const myrock = document.querySelector(".rock");
const mypaper = document.querySelector(".paper");
const myscissors = document.querySelector(".scissors");
const myrestart = document.querySelector(".restart");

myrock.addEventListener("click", () =>
  updateGame("rock", choice, verdict, gameStaus)
);
mypaper.addEventListener("click", () =>
  updateGame("paper", choice, verdict, gameStaus)
);
myscissors.addEventListener("click", () =>
  updateGame("scissors", choice, verdict, gameStaus)
);
myrestart.addEventListener("click", () => {
  ComputerScore = 0;
  HumanScore = 0;
  choice.textContent = "Start Game!";
  verdict.textContent = "Start Game to Show Result.";
  gameStaus.textContent = `Current Game Status: Your-Score: ${HumanScore}, Computer-Score: ${ComputerScore}`;
  const toRemove = document.querySelector(".seriesStatus");
  if (toRemove) {
    toRemove.remove();
  }
});
