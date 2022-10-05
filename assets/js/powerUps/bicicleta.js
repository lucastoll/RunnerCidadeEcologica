import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp, setPlayerTemPowerUp } from "./animacaoPowerup.js";
import { randomizerPowerups } from "./randomizerPowerups.js";

const powerUpBicicleta = document.querySelector(".powerUp--bicicleta");
let playerTemBicicleta;
let timeoutAnimacaoPowerUpBicicleta;
let timeoutFimPowerUpBicicleta;

function bicicleta(){
    playerTemBicicleta = true;

    animacaoPowerUp();
    addEstilosBicicleta();
    timeoutAnimacaoPowerUpBicicleta = setTimeout(() => {
        animacaoPowerUp();
    }, 20000);
    timeoutFimPowerUpBicicleta = setTimeout(() => {
        player.style = "";
        removeEstilosBicicleta();
        setTimeout(randomizerPowerups, getRandomInt(20000, 35000));
    }, 23000);
}


function removeEstilosBicicleta(){
    setPlayerTemPowerUp(false);
    playerTemBicicleta = false;
    player.classList.remove("bicicleta");
    areaJogo.style.background = "#3c3c3c";
    document.querySelector("body").style.background = "#A1AAAA";
}

function addEstilosBicicleta(){
    powerUpBicicleta.style.animation = "none";
    powerUpBicicleta.style.right = "-10%";
    player.classList.add("bicicleta");
    areaJogo.style.background = "#005CC1";
    document.querySelector("body").style.background = "#009A17";
}


export { bicicleta, playerTemBicicleta, timeoutFimPowerUpBicicleta, timeoutAnimacaoPowerUpBicicleta }