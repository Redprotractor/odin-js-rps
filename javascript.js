pScore = 0;
cScore = 0;
turn = 1;

// returns a selected choice for the computer
// based on a random number between 1 and 3
// 1=rock,2=paper,3=scissors
// 
function getComputerChoice() {
    r = Math.floor(Math.random()*3) + 1;
    if (r===1) {
        return "Rock";
    } else if (r===2) {
        return "Paper";
    } else if (r===3) {
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
    if (ps===cs) {
        return "Draw.";
    } 
    if (ps==="rock") {
        if (cs==="paper") {
            cScore++;
            return "Paper beats rock. Computer wins!";
        } else if (cs==="scissors") {
            pScore++;
            return "Rock beats scissors. Player wins!";
        }
    } else if (ps==="paper") {
        if (cs==="scissors") {
            cScore++;
            return "Scissors beat rock. Computer wins!";
        } else if (cs==="rock") {
            pScore++;
            return "Paper beats rock. Player wins!";
        }
    } else if (ps==="scissors") {
        if (cs==="rock") {
            cScore++;
            return "Rock beats scissors. Computer wins!";
        } else if (cs==="paper") {
            pScore++;
            return "Scissors beat paper. Player wins!";
        }
    }
}

// Plays 5 rounds of rock, paper, scissors
// At the end of each turn, displays the player score
// After 5 turns, compare the scores
// @return message saying whether player wins or loses
function playGame() {
    while (turn != 6) {
        console.log(`Turn: ${turn}`);
        let player = prompt("Enter a selection (rock, paper, scissors):");
        comp = getComputerChoice();
        console.log(playRound(player,comp));
        console.log(`Score: \nPlayer ${pScore}\nComputer ${cScore}`);
        turn++;
    }
    
    if (pScore > cScore) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
console.log(playGame())