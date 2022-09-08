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
            return "Scissor";
            break;
        case 9:
            return getComputerChoice();
    }
}