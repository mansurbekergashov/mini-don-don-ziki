export let hands = ["rock", "paper", "scissors"];

export function aiChoose() {
    let result = Math.trunc(Math.random() * hands.length);
    let handAi = hands[result]
    return handAi;
}


