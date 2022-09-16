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
    playerSelection = playerSelection.toLowerCase
    const computerSelection = getComputerChoice();
    if (playerSelection == computerSelection.toLowerCase) {
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

const btn = document.querySelectorAll("button");
btn.forEach((button) => {
    button.addEventListener("click", () => {
        const resultDiv = document.querySelector("#result");
        resultDiv.textContent = playRPSRound("scissors");
        console.log("hello");
    })
    console.log("hello")
})