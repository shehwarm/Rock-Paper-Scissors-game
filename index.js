// Rock Paper Scissors Game

const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('resultDisplay');

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()* 3)];
    let result = "";
    
    if(playerChoice === computerChoice) {
        result = "It's a tie!";
    }
    else{
        switch(playerChoice){
            case "rock":
               result = (computerChoice === "Scissors") ?  "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":  
                result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            
        }
    }
    playerDisplay.textContent = `PLAYER : ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER : ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "You WIN!":
            resultDisplay.classList.add("greenText");
            break;
        case "You LOSE!":
            resultDisplay.classList.add("redText");
            break;
    }
}