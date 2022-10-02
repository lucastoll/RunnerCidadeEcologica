import { player } from "../colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp } from "./animacaoPowerup.js";

const powerUpBicicleta = document.querySelector(".powerUp--bicicleta");
let playerTemBicicleta;

function bicicleta(){
    playerTemBicicleta = true;

    animacaoPowerUp();
    addEstilosBicicleta();
    setTimeout(() => {
        playerTemBicicleta = false;

        player.classList.remove("bicicleta");
    areaJogo.style.background = "#ffffff";

    }, 20000);
}

function addEstilosBicicleta(){
    powerUpBicicleta.style.animation = "none";
    powerUpBicicleta.style.right = "-10%";
    player.classList.add("bicicleta");
    areaJogo.style.background = "#00eaff";
    document.querySelector("body").style.background = "#00ff55";
}


export { bicicleta, playerTemBicicleta }