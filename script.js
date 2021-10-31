function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection) {
    
    let computerSelection = computerPlay();

    if ((playerSelection === btns[0] && computerSelection === "rock") || (playerSelection === btns[1] && computerSelection === "paper") || (playerSelection === btns[2] && computerSelection === "scissors") ) {    
        score.textContent = "It's a tie!"
    } else if ((playerSelection === btns[1] || computerSelection === "paper") && (playerSelection === btns[0] || computerSelection === "rock")) {
        if (playerSelection === btns[1]) {
            playerScore += 1;
            ps.innerText = "Player: " + playerScore;
            score.textContent = "You win!";
        } else {
            computerScore += 1;
            cs.innerText = "Computer: " + computerScore;
            score.textContent = "You lose!";
        }
    } else if ((playerSelection === btns[1] || computerSelection === "paper") && (playerSelection === btns[2] || computerSelection === "scissors")) {
        if (playerSelection === btns[2]) {
            playerScore += 1;
            ps.innerText = "Player: " + playerScore;
            score.textContent = "You win!";
        } else {
            computerScore += 1;
            cs.innerText = "Computer: " + computerScore;
            score.textContent = "You lose!";
        }
    } else if ((playerSelection === btns[2] || computerSelection === "scissors") && (playerSelection === btns[0] || computerSelection === "rock")) {
        if (playerSelection === btns[0]) {
            playerScore += 1;
            ps.innerText = "Player: " + playerScore;
            score.textContent = "You win!";
        } else {
            computerScore += 1;
            cs.innerText = "Computer: " + computerScore;
            score.textContent = "You lose!";
        }
    }
}


const btns = document.querySelectorAll(".btn");
const score = document.querySelector(".score").firstElementChild;
const ps = document.querySelector(".ps").firstElementChild;
const cs = document.querySelector(".cs").firstElementChild;

let playerSelection;
let playerScore = 0, computerScore = 0;


btns.forEach(btn => btn.addEventListener("click", function(){
    playerSelection = btn;
    if ((playerScore != 5) && (computerScore != 5)) {
        playRound(playerSelection);
    }
    
}))


