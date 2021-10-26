function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {    
        return "It's a tie!";
    } else if ((playerSelection === "paper" || computerSelection === "paper") && (playerSelection === "rock" || computerSelection === "rock")) {
        if (playerSelection === "paper") {
            return "You win! Paper beats rock";
        } else {
            return "You lose! Paper beats rock";
        }
    } else if ((playerSelection === "paper" || computerSelection === "paper") && (playerSelection === "scissors" || computerSelection === "scissors")) {
        if (playerSelection === "scissors") {
            return "You win! Scissors beat paper";
        } else {
            return "You lose! Scissors beat paper";
        }
    } else if ((playerSelection === "scissors" || computerSelection === "scissors") && (playerSelection === "rock" || computerSelection === "rock")) {
        if (playerSelection === "rock") {
            return "You win! Rock beats scissors";
        } else {
            return "You lose! Rock beats scissors";
        }
    } else {
        return "Wrong input";
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = prompt("Rock, paper or scissors?");
        playerSelection = playerSelection.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();
