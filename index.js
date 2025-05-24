// Rock Paper Scissors Game

const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()* 3)];
    let result = "";
    
    if(playerChoice === computerChoice) {
        result = "It's a tie!";
    }
    else{
        switch(playerChoice){
            case "rock":
               result = (computerChoice === "scissors") ?  "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":  
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            
        }
    }
    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "yellowText");

    if (result === "YOU WIN!") {
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = ` ${playerScore}`;
    } else if (result === "YOU LOSE!") {
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = ` ${computerScore}`;
    } else if(result === "It's a tie!") {
        resultDisplay.classList.add("yellowText");
    }
}
