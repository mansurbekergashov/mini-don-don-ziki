import { elChooseZone, elPlayerHand, elStatusZone, elPlayAgain, elPlayerChooseHand, elAIChooseHand } from "./html-elements.js";
import { aiChoose } from "./ai-choose.js";
import { checkWinner } from "./check-winner.js";

elPlayerHand.forEach((e) => {
    e.addEventListener("click", (el) => {
        const player = el.target.alt;
        const playerSrc = el.target.src;
        elPlayerHand.src = playerSrc;
        elChooseZone.classList.add("hidden");
        elStatusZone.classList.remove("hidden");
        elPlayerChooseHand.src = e.src;
        elAIChooseHand.src = `./images/${aiChoose()}.svg`;
        console.log(checkWinner(aiChoose(), player));





    });
});


//refresh game
elPlayAgain.addEventListener("click", () => {
    elAIChooseHand.src="./images/oval.svg"
    elChooseZone.classList.remove("hidden");
    elStatusZone.classList.add("hidden");
});


