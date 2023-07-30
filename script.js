let playerWins = 0;
let botWins = 0;

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
        {      
            botWins++; 
            return "You lose! Computer chose " + computerSelection + ". Paper beats rock!";
        } else
        {
            playerWins++;
            return "You win! Computer chose " + computerSelection + ". Rock beats scissors!";
        }
        break;

        case "paper":
        if(computerSelection === "scissors")
        {      
            botWins++; 
            return "You lose! Computer chose " + computerSelection + ". Scissors beat paper!";
        } else 
        {
            playerWins++;
            return "You win! Computer chose " + computerSelection + ". Paper beats rock!";
        }        
        break;

        case "scissors":
        if(computerSelection === "rock")
        {      
            botWins++; 
            return "You lose! Computer chose " + computerSelection + ". Rock beats scissors!";
        } else 
        {
            playerWins++;
            return "You win! Computer chose " + computerSelection + ". Scissors beat paper!";
        }        
        break;

        default:
            return "Error! Wrong input";
    }
}

const buttons = document.querySelectorAll('button');
const divWinner = document.createElement('div');
divWinner.textContent = 'Choose your option!';
const body = document.querySelector('body');
body.insertBefore(divWinner,buttons[0]);

buttons.forEach((button) => {
button.addEventListener('click', () => {
if(botWins < 5 && playerWins < 5)
    divWinner.textContent = playRound(button.className,getComputerChoice());
else if(botWins === 5)
    divWinner.textContent = "Computer has 5 wins! Game ended.";
else
    divWinner.textContent = "Player has 5 wins! Game ended.";
});
});
