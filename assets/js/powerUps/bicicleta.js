import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPisca, animacaoPowerUp, setPlayerTemPowerUp, travaAnimacoes } from "./animacaoPowerup.js";
import { randomizerPowerups } from "./randomizerPowerups.js";

const powerUpBicicleta = document.querySelector(".powerUp--bicicleta");
let playerTemBicicleta;

function bicicleta(){
    playerTemBicicleta = true;

    animacaoPowerUp();
    addEstilosBicicleta();
    setTimeout(() => {
        animacaoPowerUp();
    }, 17000)
    setTimeout(() => {
        player.style = "";
        removeEstilosBicicleta();
        setTimeout(randomizerPowerups, getRandomInt(20000, 35000))
    }, 20000);
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


export { bicicleta, playerTemBicicleta }