import { elChooseZone, elPlayerHand, elStatusZone, elPlayAgain, elPlayerChooseHand, elAIChooseHand, elStatusText } from "./html-elements.js";
import { aiChoose } from "./ai-choose.js";
import { checkWinner } from "./check-winner.js";

elPlayerHand.forEach((e) => {
    e.addEventListener("click", (el) => {
        const player = el.target.alt;
        const playerSrc = el.target.src;
        elPlayerHand.src = playerSrc;
        elChooseZone.classList.add("hidden");
        elStatusZone.classList.remove("hidden");

        elPlayerChooseHand.src = el.target.src;
        elAIChooseHand.src = `./images/${aiChoose()}.svg`;
        let winner = (checkWinner(aiChoose(), player));
        if (winner == "draw") {
            elStatusText.textContent = "DRAW";
        } else if (winner == "ai") {
            elStatusText.textContent = "YOU LOST";
        } else {
            elStatusText.textContent = "YOU WIN";
        }





    });
});


//refresh game
elPlayAgain.addEventListener("click", () => {
    elAIChooseHand.src = "./images/oval.svg"
    elChooseZone.classList.remove("hidden");
    elStatusZone.classList.add("hidden");
});


