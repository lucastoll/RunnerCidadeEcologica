import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp, setPlayerTemPowerUp } from "./animacaoPowerup.js";
import { randomizerPowerups } from "./randomizerPowerups.js";

const powerUpOnibus = document.querySelector(".powerUp--onibus");
let playerTemOnibus = false;

function onibus(){
    playerTemOnibus = true;

    animacaoPowerUp();
    addEstilosOnibus();
    setTimeout(() => {
        animacaoPowerUp();
    }, 20000);
    setTimeout(() => {
        player.style = "";
        removeEstilosOnibus();
        setTimeout(randomizerPowerups, getRandomInt(20000, 35000));
    }, 23000);
}

function addEstilosOnibus(){
    powerUpOnibus.style.animation = "none";
    powerUpOnibus.style.right = "-10%";
    player.classList.add("onibus");
    areaJogo.style.background = "#008FF1";
}

function removeEstilosOnibus(){
    setPlayerTemPowerUp(false);
    playerTemOnibus = false;
    player.classList.remove("onibus");
    areaJogo.style.background = "#3c3c3c";
    document.querySelector("body").style.background = "#A1AAAA";
}

export { onibus, playerTemOnibus }