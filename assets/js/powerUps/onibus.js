import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp, setPlayerTemPowerUp } from "./animacaoPowerup.js";
import { randomizerPowerups } from "./randomizerPowerups.js";
import { limpaSprites } from "../player/sprites.js";

const powerUpOnibus = document.querySelector(".powerUp--onibus");
let playerTemOnibus = false;
let timeoutAnimacaoPowerUpOnibus;
let timeoutFimPowerUpOnibus;
let vezesQueOPlayerPegouOnibus = 0;

function onibus(){
    limpaSprites();
    playerTemOnibus = true;
    vezesQueOPlayerPegouOnibus++;
    
    animacaoPowerUp("entradaPowerUp");
    addEstilosOnibus();

    timeoutAnimacaoPowerUpOnibus = setTimeout(() => {
        animacaoPowerUp();
    }, 20000);

    timeoutFimPowerUpOnibus = setTimeout(() => {
        player.style = "";
        removeEstilosOnibus();
        setTimeout(randomizerPowerups, getRandomInt(20000, 35000));
        limpaSprites();
    }, 23000);
}

function addEstilosOnibus(){
    powerUpOnibus.style.animation = "none";
    powerUpOnibus.style.right = "-10%";
    player.classList.add("onibus");
    areaJogo.classList.add("areaJogoCidadeLimpa");
}

function removeEstilosOnibus(){
    setPlayerTemPowerUp(false);
    playerTemOnibus = false;
    player.classList.remove("onibus");
    areaJogo.classList.remove("areaJogoCidadeLimpa");
}

export { onibus, playerTemOnibus, timeoutAnimacaoPowerUpOnibus, timeoutFimPowerUpOnibus, removeEstilosOnibus, vezesQueOPlayerPegouOnibus }