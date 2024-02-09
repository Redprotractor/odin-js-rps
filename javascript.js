
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
    if (playerSelection===computerSelection) {
        return "Draw.";
    } 
    if (playerSelection==="Rock") {
        if (computerSelection==="Paper") {
            return "Computer wins!";
        } else if (computerSelection==="Scissors") {
            return "Player wins!";
        }
    } else if (playerSelection==="Paper") {
        if (computerSelection==="Scissors") {
            return "Computer wins!";
        } else if (computerSelection==="Rock") {
            return "Player wins!";
        }
    } else if (playerSelection==="Scissors") {
        if (computerSelection==="Rock") {
            return "Computer wins!";
        } else if (computerSelection==="Paper") {
            return "Player wins!";
        }
    }
}

console.log(getComputerChoice())