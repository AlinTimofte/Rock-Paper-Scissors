function getComputerChoice() {
    let choice = Math.floor(Math.random() * 10) % 3;
    if(choice === 0)
        return "Rock";
    if(choice === 1)
        return "Paper";
    return "Scissors"; 
}

alert(getComputerChoice());