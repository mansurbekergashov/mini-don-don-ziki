export function checkWinner(ai, player) {
    if (ai == player) {
        return "draw"
    }
    else if (ai == "rock" && player == "scissors") {
        return "ai"
    }
    else if (ai == "paper" && player == "rock") {
        return "ai"
    }
    else if (ai == "scissors" && player == "paper") {
        return "ai"
    }
    else {
        return "player"
    }
}



