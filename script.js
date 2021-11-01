function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection) {
    
    let computerSelection = computerPlay();

    if ((playerSelection === btns[0] && computerSelection === "rock") || (playerSelection === btns[1] && computerSelection === "paper") || (playerSelection === btns[2] && computerSelection === "scissors") ) {    
        score.textContent = "It's a tie!"
        if (playerSelection === btns[0]) {
            presult.setAttribute("class", "fas fa-hand-rock fa-4x");
            cresult.setAttribute("class", "fas fa-hand-rock fa-4x");
        } else if (playerSelection === btns[1]) {
            presult.setAttribute("class", "fas fa-hand-paper fa-4x");
            cresult.setAttribute("class", "fas fa-hand-paper fa-4x");
        } else {
            presult.setAttribute("class", "fas fa-hand-scissors fa-4x");
            cresult.setAttribute("class", "fas fa-hand-scissors fa-4x");
        }
    } else if ((playerSelection === btns[1] || computerSelection === "paper") && (playerSelection === btns[0] || computerSelection === "rock")) {
        if (playerSelection === btns[1]) {
            playerScore += 1;
            presult.setAttribute("class", "fas fa-hand-paper fa-4x");
            cresult.setAttribute("class", "fas fa-hand-rock fa-4x");
            ps.firstElementChild.innerText = "Player: " + playerScore;
            score.textContent = "You won!";
        } else {
            computerScore += 1;
            cresult.setAttribute("class", "fas fa-hand-paper fa-4x");
            presult.setAttribute("class", "fas fa-hand-rock fa-4x");
            cs.firstElementChild.innerText = "Computer: " + computerScore;
            score.textContent = "You lost!";
        }
    } else if ((playerSelection === btns[1] || computerSelection === "paper") && (playerSelection === btns[2] || computerSelection === "scissors")) {
        if (playerSelection === btns[2]) {
            playerScore += 1;
            presult.setAttribute("class", "fas fa-hand-scissors fa-4x");
            cresult.setAttribute("class", "fas fa-hand-paper fa-4x");
            ps.firstElementChild.innerText = "Player: " + playerScore;
            score.textContent = "You won!";
        } else {
            computerScore += 1;
            cresult.setAttribute("class", "fas fa-hand-scissors fa-4x");
            presult.setAttribute("class", "fas fa-hand-paper fa-4x");
            cs.firstElementChild.innerText = "Computer: " + computerScore;
            score.textContent = "You lost!";
        }
    } else if ((playerSelection === btns[2] || computerSelection === "scissors") && (playerSelection === btns[0] || computerSelection === "rock")) {
        if (playerSelection === btns[0]) {
            playerScore += 1;
            presult.setAttribute("class", "fas fa-hand-rock fa-4x");
            cresult.setAttribute("class", "fas fa-hand-scissors fa-4x");
            ps.firstElementChild.innerText = "Player: " + playerScore;
            score.textContent = "You won!";
        } else {
            computerScore += 1;
            cresult.setAttribute("class", "fas fa-hand-rock fa-4x");
            presult.setAttribute("class", "fas fa-hand-scissors fa-4x");   
            cs.firstElementChild.innerText = "Computer: " + computerScore;
            score.textContent = "You lost!";
        }
    }
}


const btns = document.querySelectorAll(".btn");
const score = document.querySelector(".score").firstElementChild;
const ps = document.querySelector(".ps");
const cs = document.querySelector(".cs");

let playerSelection;
let playerScore = 0, computerScore = 0;

const presult = document.createElement("i");
const cresult = document.createElement("i");


btns.forEach(btn => btn.addEventListener("click", function(){
    playerSelection = btn;
    ps.lastElementChild.classList.add("hidden");
    cs.lastElementChild.classList.add("hidden");
    ps.appendChild(presult);
    cs.appendChild(cresult);
    if ((playerScore != 5) && (computerScore != 5)) {
        playRound(playerSelection);
    }
    
}))


