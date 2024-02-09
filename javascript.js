
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
            return "Computer wins!";
        } else if (cs==="scissors") {
            return "Player wins!";
        }
    } else if (ps==="paper") {
        if (cs==="scissors") {
            return "Computer wins!";
        } else if (cs==="rock") {
            return "Player wins!";
        }
    } else if (ps==="scissors") {
        if (cs==="rock") {
            return "Computer wins!";
        } else if (cs==="paper") {
            return "Player wins!";
        }
    }
}

const playerChoice = "Rock";
console.log(playRound(playerChoice,getComputerChoice()))