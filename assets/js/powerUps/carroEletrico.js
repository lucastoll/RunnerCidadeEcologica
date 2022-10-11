import { getRandomInt } from "../auxiliares/getRandomInt.js";
import { player } from "../obstaculos/colisorObstaculos.js";
import { areaJogo } from "../comecarJogo.js";
import { animacaoPowerUp, setPlayerTemPowerUp } from "./animacaoPowerup.js";
import { randomizerPowerups } from "./randomizerPowerups.js";
import { limpaSprites } from "../player/sprites.js";

const powerUpCarroEletrico = document.querySelector(".powerUp--carroEletrico");
let playerTemCarroEletrico = false;
let timeoutAnimacaoPowerUpCarroEletrico;
let timeoutFimPowerUpCarroEletrico;

function carroEletrico(){
    limpaSprites();
    playerTemCarroEletrico = true;
    
    animacaoPowerUp("entradaPowerUp");
    addEstilosCarroEletrico();
    timeoutAnimacaoPowerUpCarroEletrico = setTimeout(() => {
        animacaoPowerUp();
    }, 20000);
    timeoutFimPowerUpCarroEletrico = setTimeout(() => {
        player.style = "";
        removeEstilosCarroEletrico();
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

function addEstilosCarroEletrico(){
    powerUpCarroEletrico.style.animation = "none";
    powerUpCarroEletrico.style.right = "-10%";
    areaJogo.style.background = "#005CC1";
    document.querySelector("body").style.background = "#A1AAAA";
}

function removeEstilosCarroEletrico(){
    setPlayerTemPowerUp(false);
    playerTemCarroEletrico = false;
    areaJogo.style.background = "url(./assets/img/cidadePoluidaBackground.jpg)";
    document.querySelector("body").style.background = "#A1AAAA";
}

export { carroEletrico, playerTemCarroEletrico, timeoutFimPowerUpCarroEletrico, timeoutAnimacaoPowerUpCarroEletrico, removeEstilosCarroEletrico }