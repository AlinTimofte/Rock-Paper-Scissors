function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10) % 3;
    if(choice === 0)
        return "rock";
    if(choice === 1)
        return "paper";
    return "scissors"; 
}

function getPlayerChoice() {
    return prompt("Rock Paper Scissors! Choose your option!");
}

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection)
        return "Computer chose " + computerSelection + ". It is a tie!";
    switch(playerSelection)
    {
        case "rock":
        if(computerSelection === "paper")
            return "You lose! Computer chose " + computerSelection + ". Paper beats rock!";
        else
            return "You win! Computer chose " + computerSelection + ". Rock beats scissors!";
        break;

        case "paper":
        if(computerSelection === "scissors")
            return "You lose! Computer chose " + computerSelection + ". Scissors beat paper!";
        else
            return "You win! Computer chose " + computerSelection + ". Paper beats rock!";
        break;

        case "scissors":
        if(computerSelection === "rock")
            return "You lose! Computer chose " + computerSelection + ". Rock beats scissors!";
        else
            return "You win! Computer chose " + computerSelection + ". Scissors beat paper!";
        break;

        default:
            return "Error! Wrong input";
    }
}



alert(playRound(getPlayerChoice(), getComputerChoice()));