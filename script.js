function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10) % 3;
    if(choice === 0)
        return "rock";
    if(choice === 1)
        return "paper";
    return "scissors"; 
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection)
        return "It is a tie!";
    switch(playerSelection)
    {
        case "rock":
        if(computerSelection === "paper")
            return "You lose! Paper beats rock!";
        else
            return "You win! Rock beats scissors!";
        break;

        case "paper":
        if(computerSelection === "scissors")
            return "You lose! Scissors beat paper!";
        else
            return "You win! Paper beats rock!";
        break;

        case "scissors":
        if(computerSelection === "rock")
            return "You lose! Rock beats scissors!";
        else
            return "You win! Scissors beat paper!";
        break;

        default:
            return "Error! Wrong input";
    }

}

alert(playRound("rock", getComputerChoice()));