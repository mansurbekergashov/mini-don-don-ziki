import { elChooseZone, elPlayerHand, elStatusZone, elPlayAgain, elPlayerChooseHand, elAIChooseHand, elStatusText, elCloseRules, elModal, elRules } from "./html-elements.js";
import { aiChoose } from "./ai-choose.js";
import { checkWinner } from "./check-winner.js";

elPlayerHand.forEach((e) => {
    e.addEventListener("click", (el) => {
        const player = el.target.alt;
        const ai = aiChoose();
        elPlayerChooseHand.src = el.target.src;
        elChooseZone.classList.add("hidden");
        elStatusZone.classList.remove("hidden");
        elAIChooseHand.src = `./images/${ai}.svg`;

        let winner = (checkWinner(ai, player));

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








elRules.addEventListener("click", () => {
    elModal.classList.remove("hidden");

});

for (let exitBtn of elCloseRules) {
    exitBtn.addEventListener("click", () => {
        elModal.classList.add("hidden")
    }
)};

