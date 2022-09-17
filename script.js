function getComputerChoice(){

    switch(Math.floor(Math.random() * 10)) {
        case 0:
        case 1: 
        case 2:
            return "Rock";
            break;
        case 3:
        case 4: 
        case 5:
            return "Paper";
            break;
        case 6:
        case 7: 
        case 8:
            return "Scissors";
            break;
        case 9:
            return getComputerChoice();
    }
}

function playRPSRound(playerSelection) {
    playerSelection = arguments[0].toLowerCase();
    const computerSelection = getComputerChoice();
    if (playerSelection == computerSelection.toLowerCase()) {
        return "It's a draw"
    } else {
        switch(playerSelection) {
            case "rock":
                if (computerSelection == "Paper") {
                    return "You lost! Paper beats Rock."
                } else {
                    return "You win! Rock beats Scissors."
                }
            case "paper":
                if (computerSelection == "Scissors") {
                    return "You lost! Scissors beats Paper."
                } else {
                    return "You win! Paper beats Rock."
                }
            case "scissors":
                if (computerSelection == "Rock") {
                    return "You lost! Rock beats Scissors."
                } else {
                    return "You win! Scissors beats Paper."
                }
        }
    }
}
/* function playRPSGame(){
    let playerSelection;
    let roundResult;
    let playerPoints = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Make your selection.");
        roundResult = playRPSRound(playerSelection, getComputerChoice());
        console.log(roundResult);
        if(roundResult.search(/win/) != -1) {
            playerPoints += 1;
        } else if (roundResult.search(/draw/) != -1){
            i -= 1;
        }

    }
    if (playerPoints >= 3) {
        return `You won! ${playerPoints}:${5 - playerPoints}`
    } else {
        return `You lost. ${playerPoints}:${5 - playerPoints}`
    }
} */

let playerPoints = 0;
let computerPoints = 0;

const resultDiv = document.querySelector("#result");

const btn = document.querySelectorAll(".btn");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        
        resultDiv.textContent = playRPSRound("scissors");
        
        if(resultDiv.textContent.search(/win/) != -1) {
            playerPoints += 1;
        } else if (resultDiv.textContent.search(/lost/) != -1){
            computerPoints += 1;
        }

        const points = document.querySelector("#points");
        points.textContent = `${playerPoints} | ${computerPoints}`;
        if(playerPoints + computerPoints == 5) {
            if (playerPoints > computerPoints) {
                points.textContent = "YOU WIN!";
            } else {points.textContent = "YOU LOST."}
            playerPoints = 0;
            computerPoints = 0;
}
        
    })
    
})


const points = document.querySelector("#points");
points.textContent = `${playerPoints} | ${computerPoints}`;
if(playerPoints + computerPoints == 5) {
    if (playerPoints > computerPoints) {
        points.textContent = "YOU WIN!";
    } else {points.textContent = "YOU LOST."}
    playerPoints = 0;
    computerPoints = 0;
}