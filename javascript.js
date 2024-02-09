
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
            return "Paper beats rock. Computer wins!";
        } else if (cs==="scissors") {
            return "Rock beats scissors. Player wins!";
        }
    } else if (ps==="paper") {
        if (cs==="scissors") {
            return "Scissors beat rock. Computer wins!";
        } else if (cs==="rock") {
            return "Paper beats rock. Player wins!";
        }
    } else if (ps==="scissors") {
        if (cs==="rock") {
            return "Rock beats scissors. Computer wins!";
        } else if (cs==="paper") {
            return "Scissors beat paper. Player wins!";
        }
    }
}

const playerChoice = "Rock";
console.log(playRound(playerChoice,getComputerChoice()))