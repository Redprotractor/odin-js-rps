pScore = 0;
cScore = 0;
turn = 1;

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

function playGame() {

    while (turn < 6) {
        let player = prompt("Enter a selection (rock, paper, scissors):");
        comp = getComputerChoice();
        playRound(player,comp);
        turn++;
    }

    return `Score: \nPlayer ${pScore}\nComputer ${cScore}`;
    if (pScore > cScore) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
console.log(playGame())