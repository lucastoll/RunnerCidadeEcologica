import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp, setPlayerTemPowerUp } from "./animacaoPowerup.js";
import { randomizerPowerups } from "./randomizerPowerups.js";
import { limpaSprites } from "../player/sprites.js";

const powerUpBicicleta = document.querySelector(".powerUp--bicicleta");
let playerTemBicicleta;
let timeoutAnimacaoPowerUpBicicleta;
let timeoutFimPowerUpBicicleta;

function bicicleta(){
    limpaSprites();
    playerTemBicicleta = true;

    animacaoPowerUp("entradaPowerUp");
    addEstilosBicicleta();
    timeoutAnimacaoPowerUpBicicleta = setTimeout(() => {
        animacaoPowerUp();
    }, 20000);
    
    timeoutFimPowerUpBicicleta = setTimeout(() => {
        player.style = "";
        removeEstilosBicicleta();
        setTimeout(randomizerPowerups, getRandomInt(20000, 35000));
        limpaSprites();
    }, 23000);
}


function addEstilosBicicleta(){
    powerUpBicicleta.style.animation = "none";
    powerUpBicicleta.style.right = "-10%";
    player.classList.add("cicloviaMargin");
    areaJogo.classList.add("areaJogoCiclovia");
    document.querySelector("body").style.background = "#009A17";
}

function removeEstilosBicicleta(){
    setPlayerTemPowerUp(false);
    playerTemBicicleta = false;
    player.classList.remove("cicloviaMargin");
    areaJogo.classList.remove("areaJogoCiclovia");
    document.querySelector("body").style.background = "#A1AAAA";
}


export { bicicleta, playerTemBicicleta, timeoutFimPowerUpBicicleta, timeoutAnimacaoPowerUpBicicleta, removeEstilosBicicleta }