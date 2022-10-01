import { animacaoPowerUp } from "./animacaoPowerup.js";

const powerUpOnibus = document.querySelector(".powerUp--onibus");

function onibus(){
    powerUpOnibus.style.animation = "none";
    powerUpOnibus.style.right = "-10%";
    animacaoPowerUp();
}

export { onibus }