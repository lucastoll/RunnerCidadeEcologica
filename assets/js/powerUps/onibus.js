import { player } from "../colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp } from "./animacaoPowerup.js";

const powerUpOnibus = document.querySelector(".powerUp--onibus");

function onibus(){



    animacaoPowerUp();
}

function addEstilosOnibus(){
    powerUpOnibus.style.animation = "none";
    powerUpOnibus.style.right = "-10%";
    player.classList.add("onibus");
    areaJogo.style.background = "";
}

export { onibus }