import { elChooseZone, elPlayerHand, elStatusZone, elPlayAgain } from "./html-elements.js";

elPlayerHand.forEach((e) => {
    e.addEventListener("click", () => {
        elChooseZone.classList.add("hidden");
        elStatusZone.classList.remove("hidden");

    });
});

elPlayAgain.addEventListener("click", () => {
    elChooseZone.classList.remove("hidden");
    elStatusZone.classList.add("hidden");
});


