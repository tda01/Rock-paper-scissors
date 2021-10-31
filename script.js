function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {    
        return "It's a tie!";
    } else if ((playerSelection === btns[1] || computerSelection === "paper") && (playerSelection === btns[0] || computerSelection === "rock")) {
        if (playerSelection === btns[1]) {
            return "You win! Paper beats rock";
        } else {
            return "You lose! Paper beats rock";
        }
    } else if ((playerSelection === btns[1] || computerSelection === "paper") && (playerSelection === btns[2] || computerSelection === "scissors")) {
        if (playerSelection === btns[2]) {
            return "You win! Scissors beat paper";
        } else {
            return "You lose! Scissors beat paper";
        }
    } else if ((playerSelection === btns[2] || computerSelection === "scissors") && (playerSelection === btns[0] || computerSelection === "rock")) {
        if (playerSelection === btns[0]) {
            return "You win! Rock beats scissors";
        } else {
            return "You lose! Rock beats scissors";
        }
    }
}
// function game() {
//     for (let i = 0; i < 5; i++) {
//         let computerSelection = computerPlay();
        
//     }
// }

const btns = document.querySelectorAll(".btn");

btns.forEach(btn => btn.addEventListener("click", function(){
    playerSelection = btn;
    return playerSelection;
}))

