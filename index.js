const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scissorsButton = document.createElement('button');
const startGameButton = document.createElement('button');
const scoreBox = document.createElement('div');
const resultsBox = document.createElement('div');

        
rockButton.classList.add('rockButton');
rockButton.textContent = 'Rock';

paperButton.classList.add('paperButton');
paperButton.textContent = 'Paper';

scissorsButton.classList.add('scissorsButton');
scissorsButton.textContent = 'Scissors';

startGameButton.classList.add('startButton');
startGameButton.textContent = 'Start Game';
document.body.appendChild(startGameButton);

let playerScore = 0;
let computerScore = 0;


startGameButton.addEventListener('click', function() {
    game();
});


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

function whoWins(resultsString) {
    if (resultsString.startsWith('You Win!')) {
        return 'Player';
    } else if (resultsString.startsWith('You Lose!')) {
        return 'Computer';
    }  else if (resultsString.endsWith("it's a tie!")){
        return 'Tie';
    }
}

function setUp() {
        document.body.removeChild(startGameButton);
        document.body.appendChild(rockButton);
        document.body.appendChild(paperButton);
        document.body.appendChild(scissorsButton);
        document.body.appendChild(resultsBox);
        document.body.appendChild(scoreBox);
        
        
}

function endGame() {
    document.body.removeChild(rockButton);
    document.body.removeChild(paperButton);
    document.body.removeChild(scissorsButton);
}

function game() {
        setUp();

        rockButton.addEventListener('click', function () {
            let results = round('Rock', computerPlay());
            let winner = whoWins(results);
            if (winner === 'Player') {
                playerScore++;
            } else if (winner === 'Computer') {
                computerScore++;
            }
            resultsBox.textContent = results;
            scoreBox.textContent = 'Player: ' + playerScore + ', ' + 'Computer:' + computerScore;
            if (computerScore === 5) {
                resultsBox.textContent = 'Computer Wins!';
                endGame();
            } else if (playerScore === 5) {
                resultsBox.textContent = 'Player Wins!';
                endGame();
            }
        });
        
        paperButton.addEventListener('click', function () {
            let results = round('Paper', computerPlay());
            let winner = whoWins(results);
            if (winner === 'Player') {
                playerScore++;
            } else if (winner === 'Computer') {
                computerScore++;
            }
            resultsBox.textContent = results;
            scoreBox.textContent = 'Player: ' + playerScore + ', ' + 'Computer:' + computerScore;
            if (computerScore === 5) {
                resultsBox.textContent = 'Computer Wins!';
                endGame();
            } else if (playerScore === 5) {
                resultsBox.textContent = 'Player Wins!';
                endGame();
            }
        });
        
        scissorsButton.addEventListener('click', function () {
            let results = round('Scissors', computerPlay());
            let winner = whoWins(results);
            if (winner === 'Player') {
                playerScore++;
            } else if (winner === 'Computer') {
                computerScore++;
            }
            resultsBox.textContent = results;
            scoreBox.textContent = 'Player: ' + playerScore + ', ' + 'Computer:' + computerScore;
            if (computerScore === 5) {
                resultsBox.textContent = 'Computer Wins!';
                endGame();
            } else if (playerScore === 5) {
                resultsBox.textContent = 'Player Wins!';
                endGame();
            }
        });

        
        
    
}
