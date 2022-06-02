function computerPlay() {
    let outcome = Math.floor(Math.random() * 3 + 1);
    if (outcome == 1) {
        return 'Rock';
    } else if (outcome == 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}



function round(playerSelection, computerSelection) {
    //Converting correct casing for playerSelection
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    //Game Logic
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You Win! Paper beats Rock';
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'You Lose! Scissors beats Paper';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'You Win! Scissors beats Paper';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'You Lose! Rock beats Scissors';
    } else {
        return playerSelection + ' vs ' + computerSelection + ", it's a tie!";
    }
}


function game() {
    //initialize scores to 0
    let playerScore = 0;
    let computerScore = 0;
    
    //Playing 5 rounds
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = computerPlay();

        console.log("You chose " + playerSelection + " and the computer chose " + computerSelection);
        /*if return starts with "You Win!" player gets a point, 
        else computer gets a point. If theres a tie no one does
        */
        if (round(playerSelection, computerSelection).startsWith('You Win!')) {
            console.log("You won round " + (i + 1))
            playerScore++;
        } else if (round(playerSelection, computerSelection).startsWith('You Lose!')) {
            console.log("You lost round " + (i + 1));
            computerScore++;
        }  else if (round(playerSelection, computerSelection).endsWith("it's a tie!")){
            console.log("round " + (i + 1) + " is a tie!");
        }
        console.log("\nScore:")
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore + "\n\n");
        
    }
    //displaying score
    

    //determine winner
    if (playerScore > computerScore) {
       console.log("You Win")
    } else if (playerScore < computerScore) {
       console.log("You Lose");
    } else {
        console.log("It's a tie");
    }
}

game();


