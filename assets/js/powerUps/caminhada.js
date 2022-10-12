import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp, setPlayerTemPowerUp } from "./animacaoPowerup.js";
import { randomizerPowerups } from "./randomizerPowerups.js";
import { limpaSprites } from "../player/sprites.js";

const powerUpCaminhada = document.querySelector(".powerUp--caminhada");
let playerTemCaminhada;
let timeoutAnimacaoPowerUpCaminhada;
let timeoutFimPowerUpCaminhada;

function caminhada(){
    limpaSprites();
    playerTemCaminhada = true;

    animacaoPowerUp("entradaPowerUp");
    addEstilosCaminhada();
    timeoutAnimacaoPowerUpCaminhada = setTimeout(() => {
        animacaoPowerUp();
    }, 20000);
    timeoutFimPowerUpCaminhada = setTimeout(() => {
        player.style = "";
        removeEstilosCaminhada();
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


function addEstilosCaminhada(){
    powerUpCaminhada.style.animation = "none";
    powerUpCaminhada.style.right = "-10%";
    areaJogo.style.background = "#51BFFE";
    document.querySelector("body").style.background = "#009A17";
}

function removeEstilosCaminhada(){
    setPlayerTemPowerUp(false);
    playerTemCaminhada = false;
    areaJogo.style.background = "url(./assets/img/cidadePoluidaBackground.jpg)";
    document.querySelector("body").style.background = "#A1AAAA";
}


export { caminhada, playerTemCaminhada, timeoutFimPowerUpCaminhada, timeoutAnimacaoPowerUpCaminhada, removeEstilosCaminhada }