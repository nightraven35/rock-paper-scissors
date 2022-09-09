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

function playRPSRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
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