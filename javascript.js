pScore = 0;
cScore = 0;
turn = 0;


const rps = document.createElement("h1");
rps.textContent = "Rock, Paper, Scissors!";
const container = document.createElement("div");
const player1 = document.createElement("p");
const player2 = document.createElement("p");
player1.textContent = "Player 1 score: " + pScore;
player2.textContent = "Player 2 score: " + cScore;
container.appendChild(player1);
container.appendChild(player2);

const results = document.createElement("div");
results.classList.add("results");
const thisTurn = document.createElement("p");
thisTurn.classList.add("thisTurn");
const turnResults = document.createElement("p");
turnResults.classList.add("turnResults");
results.appendChild(thisTurn);
results.appendChild(turnResults);

document.body.appendChild(rps);
document.body.appendChild(container);



// returns a selected choice for the computer
// based on a random number between 1 and 3
// 1=rock,2=paper,3=scissors
// 
function getComputerChoice() {
    r = Math.floor(Math.random()*3);
    if (r===0) {
        return "Rock";
    } else if (r===1) {
        return "Paper";
    } else if (r===2) {
        return "Scissors";
    }
}


// plays a single round of Rock, Paper Scissors
//
// @param playerSelection and computerSelection
// compare the two values to determine who wins the round
// Rock beats scissors, scissors beat paper, and paper beats rock
//
function playRound(playerSelection, computerSelection) {
    ps = playerSelection.toLowerCase();
    cs = computerSelection.toLowerCase();
    console.log(ps);
    console.log(cs);
    if (ps===cs) {
        turnResults.textContent = "Draw.";
    } else {
        if (ps==="rock") {
            if (cs==="paper") {
                cScore++;
                turnResults.textContent = "Paper beats rock. Computer wins!";
            } else if (cs==="scissors") {
                pScore++;
                turnResults.textContent = "Rock beats scissors. Player wins!";
            }
        } else if (ps==="paper") {
            if (cs==="scissors") {
                cScore++;
                turnResults.textContent = "Scissors beat rock. Computer wins!";
            } else if (cs==="rock") {
                pScore++;
                turnResults.textContent = "Paper beats rock. Player wins!";
            } 
        } else if (ps==="scissors") {
            if (cs==="rock") {
                cScore++;
                turnResults.textContent = "Rock beats scissors. Computer wins!";
            } else if (cs==="paper") {
                pScore++;
                turnResults.textContent = "Scissors beat paper. Player wins!";
            } 
        }
    }
}


function updateScore() {
    player1.textContent = "Player 1 score: " + pScore;
    player2.textContent = "Player 2 score: " + cScore;
}

function updateTurn() {
    turn++;
    thisTurn.textContent = "Turn number: " + turn;
}

function displayWinner() {
    if (pScore > cScore) {
        winner.textContent = "You win!";
    } else {
        winner.textContent = "Computer wins!";
    }
}

const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");


rock.textContent = "Rock";
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    updateScore();
    updateTurn();
    if (turn === 5) {
        displayWinner();
    }
});

paper.textContent = "Paper";
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    updateScore();
    updateTurn();
    if (turn === 5) {
        displayWinner();
    }
});

scissors.textContent = "Scissors";
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    updateScore();
    updateTurn();
    if (turn === 5) {
        displayWinner();
    }
});

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

document.body.appendChild(results);

const winner = document.createElement("p");
results.appendChild(winner);




