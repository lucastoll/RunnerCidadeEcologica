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

function onibus(){
    limpaSprites();
    playerTemOnibus = true;
    
    animacaoPowerUp("entradaPowerUp");
    addEstilosOnibus();
    timeoutAnimacaoPowerUpOnibus = setTimeout(() => {
        animacaoPowerUp();
    }, 20000);
    timeoutFimPowerUpOnibus = setTimeout(() => {
        player.style = "";
        removeEstilosOnibus();
        setTimeout(randomizerPowerups, getRandomInt(20000, 35000));
        if(window.innerWidth < 1024){
            areaJogo.style.backgroundSize = "220% 100%"
          }
          else if(window.innerWidth >= 1440){
            areaJogo.style.backgroundSize = "100% 100%"
          }
          else if(window.innerWidth >= 1024){
            areaJogo.style.backgroundSize = "150% 100%"
          }
        limpaSprites();
    }, 23000);
}

function addEstilosOnibus(){
    powerUpOnibus.style.animation = "none";
    powerUpOnibus.style.right = "-10%";
    areaJogo.style.background = "#008FF1";
    player.classList.add("onibus");
}

function removeEstilosOnibus(){
    setPlayerTemPowerUp(false);
    playerTemOnibus = false;
    areaJogo.style.background = "url(./assets/img/cidadePoluidaBackground.jpg)";
    player.classList.remove("onibus");
    document.querySelector("body").style.background = "#A1AAAA";
}

export { onibus, playerTemOnibus, timeoutAnimacaoPowerUpOnibus, timeoutFimPowerUpOnibus, removeEstilosOnibus }